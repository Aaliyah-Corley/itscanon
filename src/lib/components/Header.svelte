<script>
    let isMenuOpen = false;
</script>

<header
    class="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200"
>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center">
                <a
                    href="/"
                    class="font-display font-bold text-2xl text-indigo-600 tracking-tight"
                >
                    itscanon<span class="text-slate-900">.com</span>
                </a>
            </div>

            <!-- Desktop Nav -->
            <div class="hidden md:flex items-center space-x-8">
                <a
                    href="#/plum-candy"
                    class="text-slate-600 hover:text-indigo-600 font-medium transition-colors"
                    >Plum Candy</a
                >
                <a
                    href="#/great-gatsby"
                    class="text-slate-600 hover:text-indigo-600 font-medium transition-colors"
                    >The Great Gatsby</a
                >
                <a
                    href="#/candide"
                    class="text-slate-600 hover:text-indigo-600 font-medium transition-colors"
                    >Candide</a
                >
                <a
                    href="#pricing"
                    class="px-4 py-2 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                >
                    Get Started
                </a>
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden flex items-center">
                <button
                    onclick={() => (isMenuOpen = !isMenuOpen)}
                    class="text-slate-600 hover:text-slate-900 focus:outline-none"
                >
                    <svg
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {#if isMenuOpen}
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        {:else}
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        {/if}
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Menu -->
    {#if isMenuOpen}
        <div class="md:hidden bg-white border-t border-slate-100">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                    href="#/plum-candy"
                    class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
                    >Plum Candy</a
                >
                <a
                    href="#/great-gatsby"
                    class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
                    >The Great Gatsby</a
                >
                <a
                    href="#/candide"
                    class="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
                    >Candide</a
                >
                <a
                    href="#pricing"
                    class="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 font-bold hover:bg-indigo-50"
                    >Get Started</a
                >
            </div>
        </div>
    {/if}
</header>
