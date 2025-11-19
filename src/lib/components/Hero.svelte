<script>
  // Props or logic if needed
</script>

<section class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
      <!-- Text Content -->
      <div class="text-center lg:text-left">
        <h1 class="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
          Your Canon Is <span class="text-indigo-600">Broken</span>. <br class="hidden lg:block" />
          Let's Fix It.
        </h1>
        <p class="text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          You want to be a great teacher. You shouldn't have to spend six weeks defending a bad book. It's time for a canon that works as hard as you do.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button class="px-8 py-4 rounded-full bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 hover:shadow-2xl hover:-translate-y-1 cursor-pointer">
            See the New Canon
          </button>
          <button class="px-8 py-4 rounded-full bg-white text-slate-700 border-2 border-slate-200 font-bold text-lg hover:border-indigo-600 hover:text-indigo-600 transition-all cursor-pointer">
            Request a Demo
          </button>
        </div>
      </div>

      <!-- Image -->
      <div class="relative lg:h-auto">
        <div class="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
        <img 
          src="/images/hero.png" 
          alt="Student illuminated by a magical book" 
          class="relative rounded-2xl shadow-2xl w-full object-cover transform hover:scale-[1.02] transition-transform duration-500"
        />
      </div>
    </div>
  </div>
  
  <!-- Background decoration -->
  <div class="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-1/2 h-1/2 bg-indigo-50 rounded-full blur-3xl -z-10"></div>
  <div class="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-1/2 h-1/2 bg-purple-50 rounded-full blur-3xl -z-10"></div>
</section>
