// cryptojs
import CryptoJS from 'crypto-js';

export const encrypt = async ( message, pass ) => {
  const password = await pass;

  const salt = CryptoJS.lib.WordArray.random( 128 / 8 );
  const key = CryptoJS.PBKDF2( password, salt, {
    keySize: 256 / 32,
    iterations: 1000,
  } );
  const iv = CryptoJS.lib.WordArray.random( 128 / 8 );
  const encrypted = CryptoJS.AES.encrypt( message, key, {
    iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
  } );
  const transitmessage = salt.toString() + iv.toString() + encrypted.toString();
  return transitmessage;
}

export const decrypt = async ( transitmessage, pass ) => {
  const password = await pass;

  const salt = CryptoJS.enc.Hex.parse( transitmessage.substr( 0, 32 ) );
  const iv = CryptoJS.enc.Hex.parse( transitmessage.substr( 32, 32 ) );
  const encrypted = transitmessage.substring( 64 );
  const key = CryptoJS.PBKDF2( password, salt, {
    keySize: 256 / 32,
    iterations: 1000,
  } );
  const decrypted = CryptoJS.AES.decrypt( encrypted, key, {
    iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
  } );
  return decrypted.toString( CryptoJS.enc.Utf8 );
}