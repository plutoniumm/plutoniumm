import sveltePreprocess from 'svelte-preprocess';
import statix from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
export default {
	extensions: [ '.svelte', '.mdx', '.md' ],
	preprocess: [
		sveltePreprocess( {} ),
		mdsvex( {
			extensions: [ '.mdx' ],
			smartypants: {},
		} )
	],
	kit: {
		adapter: statix()
	}
};
