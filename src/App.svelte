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

  let currentRoute = window.location.hash || "#/";

  onMount(() => {
    const handleHashChange = () => {
      currentRoute = window.location.hash || "#/";
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  });
</script>

<Header />

<main>
  {#if currentRoute === "#/plum-candy"}
    <PlumCandy />
  {:else if currentRoute === "#/great-gatsby"}
    <GatsbyPage />
  {:else if currentRoute === "#/candide"}
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
