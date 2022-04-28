import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		files: {
			assets: 'static',
			template: 'src/app.html'
		}
	}
};

export default config;
