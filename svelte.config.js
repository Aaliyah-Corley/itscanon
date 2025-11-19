import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: 'index.html',   // ← THIS is the magic one for Cloudflare
            precompress: false
        })
    },
    preprocess: vitePreprocess()
};
