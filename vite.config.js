// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import dsv from "@rollup/plugin-dsv";
import path from 'path';

const config = {
    plugins: [
        dsv(),
        sveltekit(),
    ],
    resolve: {
        alias: {
            '@component': path.resolve( 'src/lib/components' )
        }
    },
    server: {
        port: 3000,
        fs: {
            allow: [ "." ]
        }
    },
    build: {
        minify: "esbuild",
        cssMinify: true,
        sourcemap: false
    }
};

export default config;