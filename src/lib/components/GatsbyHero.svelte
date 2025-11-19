<script>
    // Props or logic if needed
</script>

<section
    class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900"
>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <!-- Text Content -->
            <div class="text-center lg:text-left">
                <div
                    class="inline-block px-4 py-1 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-emerald-300 font-medium text-sm mb-6 tracking-wide uppercase"
                >
                    The Autopsy
                </div>
                <h1
                    class="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight font-display"
                >
                    The Terrible, Horrible, No Good, <span
                        class="text-emerald-500">Very Bad Gatsby</span
                    >
                </h1>
                <p
                    class="text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                >
                    An Honest Curriculum for Fearless Readers. Stop teaching it
                    as a masterpiece. Start teaching it as a crime scene.
                </p>
                <div
                    class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                    <button
                        class="px-8 py-4 rounded-full bg-emerald-600 text-white font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-900/20 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
                    >
                        Get the "Gatsby on Trial" Kit
                    </button>
                </div>
            </div>

            <!-- Image -->
            <div class="relative lg:h-auto flex justify-center">
                <div
                    class="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur-3xl opacity-20 animate-pulse"
                ></div>
                <img
                    src="/images/gatsby.jpg"
                    alt="The Great Gatsby Book Cover"
                    class="relative rounded-xl shadow-2xl w-full max-w-md object-cover transform hover:scale-[1.02] transition-transform duration-500 border border-slate-700"
                />
            </div>
        </div>
    </div>

    <!-- Background decoration -->
    <div
        class="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-1/2 h-1/2 bg-emerald-900/20 rounded-full blur-3xl -z-10"
    ></div>
    <div
        class="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-1/2 h-1/2 bg-teal-900/20 rounded-full blur-3xl -z-10"
    ></div>
</section>
