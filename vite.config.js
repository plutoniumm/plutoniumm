import { sveltekit } from "@sveltejs/kit/vite";
import terser from "@rollup/plugin-terser";
import { defineConfig } from 'vite';

import Banner from './scripts/metaimg.js';
import Tex from './scripts/tex.js';

const config = defineConfig( {
    plugins: [
        Banner( {
            inDir: 'src/routes/p',
            outDir: 'static/posts'
        } ),
        Tex(),
        sveltekit()
    ],
    server: {
        port: 3000,
        fs: { allow: [ ".", ".." ] },
    },
    build: {
        chunkSizeWarningLimit: 1.5,
        minify: "esbuild",
        cssMinify: true,
        sourcemap: false,
        rollupOptions: {
            plugins: [
                terser( {
                    maxWorkers: 8,
                    compress: true,
                    mangle: true,
                    format: { comments: false },
                } ),
            ],
        },
    },
} );

export default config;
