<!-- src/routes/+page.svelte -->
<script>
    import Hero from "$lib/components/sections/Hero.svelte";
    import About from "$lib/components/sections/About.svelte";
    import Skills from "$lib/components/sections/Skills.svelte";
    import FeaturedProjects from "$lib/components/sections/FeaturedProjects.svelte";
    import Experience from "$lib/components/sections/Experience.svelte";
    import BlogPreview from "$lib/components/sections/BlogPreview.svelte";
    import Contact from "$lib/components/sections/Contact.svelte";
  </script>
  
  <svelte:head>
    <title>Vansh Pratap Singh | Software Developer</title>
    <meta name="description" content="Personal portfolio of Vansh Pratap Singh, a software developer." />
  </svelte:head>
  
  <Hero />
  <About />
  <Skills />
  <FeaturedProjects />
  <Experience />
  <BlogPreview />
  <Contact />