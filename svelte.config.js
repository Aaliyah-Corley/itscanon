import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false,
      prerender: { entries: ['*'] }  // Enables full static HTML for all pages
    })
  },
  preprocess: vitePreprocess()
};
