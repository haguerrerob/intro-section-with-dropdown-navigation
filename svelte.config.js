// import adapter from '@sveltejs/adapter-auto';

import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */

// const config = {
// 	kit: {
// 		adapter: adapter(),
// 		files: {
// 			assets: 'static',
// 			template: 'src/app.html'
// 		}
// 	}
// };

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte',
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: null
		})
	}
};

export default config;
