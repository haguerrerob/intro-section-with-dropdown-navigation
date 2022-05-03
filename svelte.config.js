import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';
/** @type {import('@sveltejs/kit').Config} */

const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: 'index.html'
		}),
		paths: {
			// 	// change below to your repo name
			base: dev ? '' : '/intro-section-with-dropdown-navigation'
		}
		// prerender: { default: true }
	}
};

export default config;
