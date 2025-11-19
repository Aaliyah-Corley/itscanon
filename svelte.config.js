import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  kit: {
    adapter: adapter({
      pages: 'dist',      // ← changed to dist
      assets: 'dist',     // ← changed to dist
      fallback: 'index.html',
      precompress: false
    })
  },
  preprocess: vitePreprocess()
};
