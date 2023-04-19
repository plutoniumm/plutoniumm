#!/usr/bin/env node
import { randomFillSync } from 'crypto';
import { Pwbox as PWBOX } from '../../../pkg/plutoniumm';

const box = new PWBOX( { fillBytes: randomFillSync } );
const password = 'correct horse battery staple';
const data = "I'm a little teapot, short and stout. Here is my handle, here is my spout. When I get all steamed up, hear me shout. Tip me over and pour me out!";

console.log( 'Original data:', data );

const encrypted = box.encrypt( password, data );
console.log( 'Encrypted data:', encrypted );
const decrypted = Buffer.from( box.decrypt( password, encrypted ) );
console.log( 'Decrypted data:', decrypted );
