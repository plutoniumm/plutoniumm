import { sveltekit } from "@sveltejs/kit/vite";
import terser from "@rollup/plugin-terser";

function $$() {
    return {
        name: "vite-plugin-svelte-$$",
        enforce: "pre",
        transform(code, id) {
            if (!id.endsWith(".svelte")) return;
            if (id.includes("node_modules")) return;
            if (!id.includes("/p/")) return;

            let result = code
                .replaceAll("<xxx />", "<br /><br />")
                // Auto @html latex code
                .replaceAll("{_", "{@html _")
                // escape latex \ -> \\
                .replace(
                    /(["'`])((?:\\.|[^\\\1])*)\1/g,
                    (_, q, m) => q + m.replace(/\\/g, "\\\\") + q,
                );

            return { code: result, map: null };
        },
    };
}

const config = {
    plugins: [$$(), sveltekit()],
    server: {
        port: 3000,
        fs: { allow: [".", ".."] },
    },
    build: {
        chunkSizeWarningLimit: 1.5,
        minify: "esbuild",
        cssMinify: true,
        sourcemap: false,
        rollupOptions: {
            plugins: [
                terser({
                    maxWorkers: 8,
                    compress: true,
                    mangle: true,
                    format: { comments: false },
                }),
            ],
        },
    },
};

export default config;
