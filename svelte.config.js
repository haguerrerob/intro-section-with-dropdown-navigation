import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

// const dev = process.env.NODE_ENV === 'development';
/** @type {import('@sveltejs/kit').Config} */

// const config = {
// 	preprocess: preprocess(),
// 	kit: {
// 		adapter: adapter({
// 			pages: 'docs',
// 			assets: 'docs',
// 			fallback: 'index.html'
// 		})
// paths: {
// 	// 	// change below to your repo name
// 	base: dev ? '' : ''
// }
// prerender: { default: true }
// 	}
// };

// export default config;

// import adapter from 'svelte-adapter-github';

const dev = process.env.NODE_ENV === 'development';

const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'docs',
			assets: 'docs',
			// domain: null,
			// jekyll: false,
			fallback: 'index.html'
			// precompress: false
		}),
		paths: {
			base: dev ? '' : '/intro-section-with-dropdown-navigation/docs'
		},
		appDir: '_app'
	}
};

export default config;
