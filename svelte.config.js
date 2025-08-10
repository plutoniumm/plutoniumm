import sveltePreprocess from "svelte-preprocess";
import statix from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
export default {
    extensions: [".svelte"],
    preprocess: [sveltePreprocess({})],
    kit: {
        adapter: statix(),
        prerender: {
            concurrency: 8,
        },
        alias: {
            $data: "/src/data",
            $cpt: "/src/components",
            "@": "/env.js",
        },
    },
};
