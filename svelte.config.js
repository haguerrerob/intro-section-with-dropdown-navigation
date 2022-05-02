import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';
/** @type {import('@sveltejs/kit').Config} */

const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: null
		}),
		paths: {
			// change below to your repo name
			base: dev ? '' : '/intro-section-with-dropdown-navigation.git'
		}
		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte'
	}
};

export default config;
