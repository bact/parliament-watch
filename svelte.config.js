import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$components: './src/components',
			'$components/*': './src/components/*',
			$models: './src/models',
			'$models/*': './src/models/*'
		}
	}
};

export default config;
