import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '200.html',   // this enables SPA mode (important!)
      precompress: false
    })
  },
  preprocess: vitePreprocess()
};
