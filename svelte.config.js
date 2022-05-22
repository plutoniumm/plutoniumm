import sveltePreprocess from 'svelte-preprocess';
import statix from '@sveltejs/adapter-static';

import path from 'path';

export default {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: statix(),
		prerender: {
			default: true
		},

		vite: {
			resolve: {
				alias: {
					'@component': path.resolve( 'src/lib/components' )
				}
			}
		},
	}
};
