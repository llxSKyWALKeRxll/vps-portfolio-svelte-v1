<!-- src/routes/+layout.svelte -->
<script>
	import "../app.css";
	import Header from "$lib/components/layout/Header.svelte";
	import Footer from "$lib/components/layout/Footer.svelte";
	import { onMount, afterUpdate } from "svelte";
	import { page } from '$app/stores';
	
	// Track route changes
	let previousPath = $page.url.pathname;
	
	// Setup Intersection Observer
	const setupObserver = () => {
	  const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
		  if (entry.isIntersecting) {
			entry.target.classList.add('visible');
		  }
		});
	  }, { threshold: 0.1 });
	  
	  document.querySelectorAll('.appear').forEach(el => {
		// Reset animations by removing 'visible' class
		el.classList.remove('visible');
		observer.observe(el);
	  });
	};
	
	onMount(() => {
	  setupObserver();
	});
	
	// Reset animations when route changes
	afterUpdate(() => {
	  if (previousPath !== $page.url.pathname) {
		previousPath = $page.url.pathname;
		
		// Small delay to ensure DOM is updated
		setTimeout(() => {
		  setupObserver();
		}, 100);
	  }
	});
  </script>
  
  <div class="site-wrapper">
	<Header />
	<main>
	  <slot />
	</main>
	<Footer />
  </div>
  
  <style>
	.site-wrapper {
	  display: flex;
	  flex-direction: column;
	  min-height: 100vh;
	}
	
	main {
	  flex: 1;
	  margin-top: 80px;
	}
  </style>