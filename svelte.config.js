import sveltePreprocess from 'svelte-preprocess';
import statix from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
export default {
	extensions: [ '.svelte', '.mdx', '.md' ],
	preprocess: [
		sveltePreprocess( {} ),
		mdsvex( {
			extensions: [ '.mdx', '.md' ],
			smartypants: {},
		} )
	],
	kit: {
		adapter: statix(),
		prerender: {
			concurrency: 8
		},
		alias: {
			'$data': '/src/data',
			'$cpt': '/src/components',
		}
	}
};
