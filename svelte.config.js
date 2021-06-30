import sveltePreprocess from 'svelte-preprocess';
import statix from '@sveltejs/adapter-static';

export default {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: statix(),

		target: 'body'
	}
};
