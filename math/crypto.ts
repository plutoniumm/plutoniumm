import { xchacha20poly1305 } from '@noble/ciphers/chacha.js';
import { randomBytes } from '@noble/post-quantum/utils.js';
import { ml_kem768 } from '@noble/post-quantum/ml-kem.js';
import { sha3_512 } from '@noble/hashes/sha3.js';
import fs from 'fs';

const { readFile, writeFile } = fs.promises;

// Post-quantum Kyber-based envelope encryption.
// - Derives a deterministic Kyber keypair from `pass` via SHA3-512(seed = sha3_512(pass)).
// - Uses ml_kem768 (Kyber-like ML-KEM) to encapsulate/decapsulate a shared secret.
// - Uses XChaCha20-Poly1305 with the KEM shared secret as AEAD key.
// NOTE: deriving a long-lived private key from a low-entropy password is weak. Prefer a true keypair or high-entropy passphrase.

const VERSION = 0x01;
const KEM_ID_ML_KEM_768 = 0x02; // arbitrary id for ml_kem768
const NONCE_LEN = 24;

function u16be (n: number) {
  return new Uint8Array([(n >>> 8) & 0xff, n & 0xff]);
}
function readU16BE (arr: Uint8Array, offset: number) {
  return (arr[offset] << 8) | arr[offset + 1];
}

async function encrypt (plaintext: Uint8Array, pass: string): Promise<Uint8Array> {
  const passBytes = new TextEncoder().encode(pass);
  const seed = sha3_512(passBytes); // 64 bytes

  // deterministically derive Kyber keypair from password-derived seed
  const keys = ml_kem768.keygen(seed);

  // encapsulate to recipient public key (which is the same derived from pass)
  const { cipherText: kemCipher, sharedSecret } = ml_kem768.encapsulate(keys.publicKey);

  // use KEM shared secret directly as AEAD key (32 bytes)
  const nonce = randomBytes(NONCE_LEN);
  const aead = xchacha20poly1305(sharedSecret, nonce);
  const aeadCipher = aead.encrypt(plaintext); // ciphertext + tag

  // layout: [version(1)] [kem_id(1)] [kem_cipher_len(2)] [kem_cipher...] [nonce(24)] [aead_cipher...]
  const out = new Uint8Array(1 + 1 + 2 + kemCipher.length + NONCE_LEN + aeadCipher.length);
  let p = 0;
  out[p++] = VERSION;
  out[p++] = KEM_ID_ML_KEM_768;
  out.set(u16be(kemCipher.length), p); p += 2;
  out.set(kemCipher, p); p += kemCipher.length;
  out.set(nonce, p); p += NONCE_LEN;
  out.set(aeadCipher, p);
  return out;
}

async function decrypt (data: Uint8Array, pass: string): Promise<Uint8Array> {
  if (data.length < 1 + 1 + 2 + NONCE_LEN + 16) throw new Error('ciphertext too short');

  let p = 0;
  const ver = data[p++];
  if (ver !== VERSION) throw new Error('unsupported version');
  const kemId = data[p++];
  if (kemId !== KEM_ID_ML_KEM_768) throw new Error('unsupported KEM id');
  const kemLen = readU16BE(data, p); p += 2;
  const kemCipher = data.slice(p, p + kemLen); p += kemLen;
  const nonce = data.slice(p, p + NONCE_LEN); p += NONCE_LEN;
  const aeadCipher = data.slice(p);

  const passBytes = new TextEncoder().encode(pass);
  const seed = sha3_512(passBytes);
  const keys = ml_kem768.keygen(seed);
  const sharedSecret = ml_kem768.decapsulate(kemCipher, keys.secretKey);

  const aead = xchacha20poly1305(sharedSecret, nonce);

  return aead.decrypt(aeadCipher);
}

async function encrypt_string (str: string, pass: string) {
  const bytes = new TextEncoder().encode(str);
  const enc = await encrypt(bytes, pass);

  return Buffer.from(enc).toString('base64');
}

async function decrypt_string (encB64: string, pass: string) {
  const enc = Uint8Array.from(Buffer.from(encB64, 'base64'));
  const dec = await decrypt(enc, pass);

  return new TextDecoder().decode(dec);
}

async function encrypt_file (inputPath: string, outputPath: string, pass: string) {
  const data = await readFile(inputPath);
  const enc = await encrypt(Uint8Array.from(data), pass);

  await writeFile(outputPath, Buffer.from(enc));
}

async function decrypt_file (inputPath: string, outputPath: string, pass: string) {
  const data = await readFile(inputPath);
  const dec = await decrypt(Uint8Array.from(data), pass);
  await writeFile(outputPath, Buffer.from(dec));
}

export const ENC = {
  string: encrypt_string,
  bytes: encrypt,
  file: encrypt_file,
}

export const DEC = {
  string: decrypt_string,
  bytes: decrypt,
  file: decrypt_file,
};
