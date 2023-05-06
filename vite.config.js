// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';

const config = {
    plugins: [ sveltekit() ],
    resolve: {
        alias: {
            '$component': resolve( '/components' ),
        }
    },
    server: {
        port: 3000,
        fs: { allow: [ "." ] }
    },
    build: {
        minify: "esbuild",
        cssMinify: true,
        sourcemap: false
    }
};

export default config;