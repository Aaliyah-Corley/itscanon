import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  kit: {
    adapter: adapter({
      // These two lines are the important ones for SPA mode (most sites)
      pages: 'build',
      assets: 'build',
      fallback: '200.html', // or 'index.html' if you prefer
      precompress: false,
      strict: true
    })
  },
  preprocess: vitePreprocess()
};
