import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '200.html',   // ← THIS LINE IS THE ONE THAT FIXES THE DASHES
            precompress: false
        })
    },
    preprocess: vitePreprocess()
};
