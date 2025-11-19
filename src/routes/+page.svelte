<script>
  import { page } from "$app/stores";
  import { browser } from "$app/environment";

  let query = "";
  let result = "";

  // Auto-load result if someone opens a shared link like /plum-candy
  $: if (browser && $page.url.pathname !== "/") {
    query = decodeURIComponent($page.url.pathname.slice(1));
    checkCanon();
  }

  function checkCanon() {
    if (!query.trim()) {
      result = "";
      return;
    }

    // ←←← YOUR REAL CANON LOGIC GOES HERE (replace the line below) ←←←
    result = query.toUpperCase() + " CANON FIXED";   // placeholder – put your actual code
    // ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←

    // Clean URL update – NO HASH EVER
    if (browser) {
      history.replaceState({}, "", "/" + encodeURIComponent(query));
    }
  }
</script>

<svelte:head>
  <title>itscanon — {query ? query + ' canon' : 'Fix Your Canon'}</title>
</svelte:head>

<main class="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white flex items-center justify-center p-8">
  <div class="max-w-2xl w-full text-center space-y-12">
    <div>
      <h1 class="text-6xl md:text-8xl font-bold text-pink-400 mb-4">itscanon</h1>
      <p class="text-2xl text-pink-200">Fix Your Canon</p>
    </div>

    <div class="space-y-8">
      <input 
        type="text" 
        bind:value={query}
        placeholder="enter anything..."
        class="w-full px-8 py-6 text-2xl bg-black/50 border-2 border-pink-500 rounded-xl focus:outline-none focus:border-pink-300 text-center"
        on:keydown={(e) => e.key === 'Enter' && checkCanon()}
      />

      <button 
        on:click={checkCanon}
        class="px-12 py-6 bg-pink-600 hover:bg-pink-500 text-2xl font-bold rounded-xl transition">
        Check Canon
      </button>
    </div>

    {#if result}
      <div class="mt-16 p-12 bg-black/40 rounded-2xl border-4 border-pink-500">
        <p class="text-4xl md:text-6xl font-bold text-pink-300 break-all">
          {result}
        </p>
      </div>
    {/if}
  </div>
</main>
