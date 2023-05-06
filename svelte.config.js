import sveltePreprocess from 'svelte-preprocess';
import statix from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
export default {
	extensions: [ '.svelte', '.mdx', '.md' ],
	preprocess: [
		sveltePreprocess( {} )
	],
	kit: {
		adapter: statix(),
		prerender: {
			concurrency: 8
		}
	}
};
