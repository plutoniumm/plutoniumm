import { sveltekit } from "@sveltejs/kit/vite";
import terser from "@rollup/plugin-terser";
import { defineConfig } from 'vite';

import Banner from './scripts/metaimg.js';
import Bundle from './scripts/bundle.js';
import Drafts from './scripts/drafts.js';
import Tex from './scripts/tex.js';

export default defineConfig( {
    plugins: [
        Banner( {
            inDir: 'src/routes/wave',
            outDir: 'static/posts'
        } ),
        Drafts(),
        Tex(),
        sveltekit(),
        Bundle( 'light' )
    ],
    server: {
        port: 3000,
        fs: { allow: [ ".", ".." ] },
    },
    build: {
        chunkSizeWarningLimit: 1500,
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
