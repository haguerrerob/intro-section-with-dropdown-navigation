// import adapter from '@sveltejs/adapter-auto';

// import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';
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
	// preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte',
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		paths: {
			// change below to your repo name
			base: dev ? '' : '/intro-section-with-dropdown-navigation.git'
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
