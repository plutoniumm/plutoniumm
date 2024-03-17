// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import terser from "@rollup/plugin-terser";
import { resolve } from 'path';

function reload () {
    return {
        name: 'custom-hmr',
        enforce: 'post',
        handleHotUpdate ( { file, server } ) {
            if ( file.includes( 'docs/' ) ) {
                server.ws.send( {
                    type: 'full-reload', path: '*'
                } );
            }
        },
    }
}

const config = {
    plugins: [ sveltekit(), reload() ],
    resolve: {
        alias: {
            '$component': resolve( '/src/components' ),
            '$posts': resolve( '/docs' ),
        }
    },
    server: {
        port: 3000,
        fs: { allow: [ ".", ".." ] }
    },
    build: {
        chunkSizeWarningLimit: 1.5,
        minify: "esbuild",
        cssMinify: true,
        sourcemap: false,
        rollupOptions: {
            plugins: [ terser( {
                maxWorkers: 8,
                compress: true,
                mangle: true,
                format: { comments: false }
            } ) ]
        }
    }
};

export default config;