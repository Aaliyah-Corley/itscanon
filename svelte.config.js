import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'dist',          // Vite outputs here by default
      assets: 'dist',
      fallback: 'index.html', // enables clean SPA routing on Cloudflare
      precompress: false
    }),
    trailingSlash: 'always',  // removes the ugly #/ from URLs
    prerender: {
      entries: ['*']          // optional but recommended – makes pages real HTML
    }
  }
};
