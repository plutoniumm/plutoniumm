// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

const config = {
    plugins: [ sveltekit() ],
    resolve: {
        alias: {
            '@component': path.resolve( 'src/lib/components' )
        }
    }
};

export default config;