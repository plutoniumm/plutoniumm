// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import plainText from 'vite-plugin-plain-text';
import path from 'path';

const config = {
    plugins: [
        sveltekit(),
        plainText( [ /\.mmd$/ ] ),
    ],
    resolve: {
        alias: {
            '@component': path.resolve( 'src/lib/components' )
        }
    },
    server: { port: 3000 }
};

export default config;