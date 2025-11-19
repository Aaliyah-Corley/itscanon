<script>
  import { onMount } from "svelte";
  import Header from "./lib/components/Header.svelte";
  import Hero from "./lib/components/Hero.svelte";
  import Problem from "./lib/components/Problem.svelte";
  import GatsbyProblem from "./lib/components/GatsbyProblem.svelte";
  import Solution from "./lib/components/Solution.svelte";
  import Testimonials from "./lib/components/Testimonials.svelte";
  import Features from "./lib/components/Features.svelte";
  import CraftBlueprint from "./lib/components/CraftBlueprint.svelte";
  import CTA from "./lib/components/CTA.svelte";
  import Footer from "./lib/components/Footer.svelte";
  import PlumCandy from "./lib/components/PlumCandy.svelte";
  import GatsbyPage from "./lib/components/GatsbyPage.svelte";
  import CandidePage from "./lib/components/CandidePage.svelte";

  let currentRoute = window.location.pathname;

  onMount(() => {
    const handlePopState = () => {
      currentRoute = window.location.pathname;
      window.scrollTo(0, 0);
    };

    const handleLinkClick = (e) => {
      const anchor = e.target.closest('a');
      if (anchor && anchor.href && anchor.href.startsWith(window.location.origin)) {
        const path = anchor.pathname;
        // Ignore if it's an external link or a hash link on the same page (unless it's a route)
        if (anchor.target === '_blank') return;
        
        // If it's a route we handle, prevent default and push state
        // We'll assume all local non-hash links are routes for now, or specific ones
        // Actually, let's just check if it matches our known routes or is root
        const knownRoutes = ['/', '/plum-candy', '/great-gatsby', '/candide'];
        if (knownRoutes.includes(path)) {
            e.preventDefault();
            history.pushState(null, '', path);
            handlePopState();
        }
      }
    };

    window.addEventListener("popstate", handlePopState);
    document.addEventListener("click", handleLinkClick);
    
    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", handleLinkClick);
    };
  });
</script>

<Header />

<main>
  {#if currentRoute === "/plum-candy"}
    <PlumCandy />
  {:else if currentRoute === "/great-gatsby"}
    <GatsbyPage />
  {:else if currentRoute === "/candide"}
    <CandidePage />
  {:else}
    <Hero />
    <Problem />
    <GatsbyProblem />
    <Solution />
    <Testimonials />
    <Features />
    <CraftBlueprint />
    <CTA />
  {/if}
</main>

<Footer />
