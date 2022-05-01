// import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const dev = 'production' === 'development';
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	// 	preprocess: preprocess(),

	// 	kit: {
	// 		// hydrate the <div id="svelte"> element in src/app.html
	// 		// target: '#svelte',
	// 		adapter: adapter({
	// 			pages: 'build',
	// 			assets: 'build',
	// 			fallback: null
	// 		})
	// 	}

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		paths: {
			// change below to your repo name
			base: dev ? '' : 'https://github.com/haguerrerob/intro-section-with-dropdown-navigation.git'
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
