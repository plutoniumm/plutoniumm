import { ENC, DEC } from './crypto.js';

const pass = "correct horse battery staple deez nuts";

// String
const msg = "hello post-quantum world I am trying to encrypt this message with kyber and xchacha20poly1305. A new form of encryption that is secure against quantum computers, allegedly.";
const encStr = await ENC.string(msg, pass);
console.log("encStr =", encStr);

const decStr = await DEC.string(encStr, pass);
console.log("decStr =", decStr);

console.log("===---===");
// Bytes
const bytes = new TextEncoder().encode("raw bytes here");
const encBytes = await ENC.bytes(bytes, pass);
const decBytes = await DEC.bytes(encBytes, pass);
console.log("decBytes =", new TextDecoder().decode(decBytes));

// File
// await ENC.file("plain.png", "plain.enc", pass);
// await DEC.file("plain.enc", "plain_out.png", pass);
// console.log("File encrypted & decrypted");
