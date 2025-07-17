import { sveltekit } from "@sveltejs/kit/vite";
import terser from "@rollup/plugin-terser";

function $$ () {
    return {
        name: "vite-plugin-svelte-$$",
        enforce: "pre",
        transform ( code, id ) {
            if ( !id.endsWith( ".svelte" ) ) return;
            if ( id.includes( "node_modules" ) ) return;
            if ( !id.includes( "/p/" ) ) return;

            let result = code
                .replaceAll( "{_", "{@html _" )
                .replace(
                    /(["'`])((?:\\.|[^\\\1])*)\1/g,
                    ( _, q, m ) => q + m.replace( /\\/g, "\\\\" ) + q,
                )
                .replaceAll( "<xxx />", `<div class="m20"><hr /></div>` );

            return { code: result, map: null };
        },
    };
}

const config = {
    plugins: [ $$(), sveltekit() ],
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
};

export default config;
