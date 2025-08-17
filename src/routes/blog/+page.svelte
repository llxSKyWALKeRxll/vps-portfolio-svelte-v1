<script>
    import { onMount } from 'svelte';
    import { getPostsByCategory, getAllPosts } from '$lib/data/blog.js';
    
    export let data;
    const { posts, categories } = data;
    
    let selectedCategory = 'All';
    let filteredPosts = posts;
    
    // Get all posts for checking if any are featured
    const allPosts = getAllPosts();
    
    $: {
      filteredPosts = getPostsByCategory(selectedCategory);
    }
    
    onMount(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.appear').forEach(el => {
        observer.observe(el);
      });
    });
  </script>
  
  <svelte:head>
    <title>Blog | Vansh Pratap Singh</title>
    <meta name="description" content="Articles and insights on web development, software engineering, and technology by Vansh Pratap Singh." />
  </svelte:head>
  
  <section class="blog-page">
    <div class="container">
      <div class="page-header appear">
        <h1>My Blog</h1>
        <p>Thoughts, insights, and tutorials on software engineering and technology</p>
      </div>
      
      <!-- Featured Posts - Now using allPosts instead of blogPosts -->
      {#if allPosts.some(post => post.featured)}
        <div class="featured-posts appear">
          {#each allPosts.filter(post => post.featured) as post, i}
            <a href={`/blog/${post.slug}`} class="featured-post" style="--delay: {i * 0.2}s">
              <div class="featured-image">
                <img src={post.image || '/images/blog-placeholder.jpg'} alt={post.title} />
              </div>
              <div class="featured-content">
                <span class="featured-badge">Featured</span>
                <span class="post-category">{post.category}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div class="post-meta">
                  <span class="post-date">{post.date}</span>
                  <span class="post-read-time">{post.readTime}</span>
                </div>
                <span class="read-more">Read Article →</span>
              </div>
            </a>
          {/each}
        </div>
      {/if}
      
      <!-- Category Filter -->
      <div class="filter-container appear">
        <div class="filter-tabs">
          {#each categories as category}
            <button
              class="filter-tab {selectedCategory === category ? 'active' : ''}"
              on:click={() => selectedCategory = category}
            >
              {category}
            </button>
          {/each}
        </div>
      </div>
      
      <!-- Blog Posts Grid -->
      <div class="blog-grid">
        {#each filteredPosts as post, i}
          <a href={`/blog/${post.slug}`} class="blog-card appear" style="--delay: {i * 0.1}s">
            <div class="blog-image">
              <img src={post.image || '/images/blog-placeholder.jpg'} alt={post.title} />
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-category">{post.category}</span>
                <span class="blog-date">{post.date}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div class="blog-footer">
                <span class="read-time">{post.readTime}</span>
                <span class="read-more">Read Article →</span>
              </div>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </section>
  
  <!-- Rest of the style section remains unchanged -->
  
  <style>
    .blog-page {
      padding: 8rem 0 6rem;
    }
    
    .page-header {
      text-align: center;
      margin-bottom: 4rem;
    }
    
    .page-header h1 {
      font-size: clamp(2.5rem, 5vw, 3.5rem);
      margin-bottom: 1rem;
    }
    
    .page-header p {
      font-size: 1.2rem;
      color: var(--muted);
      max-width: 600px;
      margin: 0 auto;
    }
    
    /* Featured Posts */
    .featured-posts {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }
    
    .featured-post {
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
      height: 100%;
      min-height: 400px;
    }
    
    .featured-post:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
      border-color: rgba(255, 255, 255, 0.2);
    }
    
    .featured-image {
      height: 250px;
      overflow: hidden;
    }
    
    .featured-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    .featured-post:hover .featured-image img {
      transform: scale(1.05);
    }
    
    .featured-content {
      padding: 1.5rem;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
    
    .featured-badge {
      display: inline-block;
      background: var(--foreground);
      color: var(--background);
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
      margin-right: 1rem;
      margin-bottom: 1rem;
    }
    
    .post-category {
      display: inline-block;
      background: rgba(255, 255, 255, 0.1);
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: 0.8rem;
    }
    
    .featured-content h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      line-height: 1.4;
    }
    
    .featured-content p {
      color: var(--muted);
      margin-bottom: 1.5rem;
      line-height: 1.6;
      flex-grow: 1;
    }
    
    .post-meta {
      display: flex;
      justify-content: space-between;
      color: var(--muted);
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    
    /* Filter */
    .filter-container {
      margin-bottom: 3rem;
      display: flex;
      justify-content: center;
    }
    
    .filter-tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }
    
    .filter-tab {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--muted);
      padding: 0.5rem 1.5rem;
      border-radius: 30px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 0.9rem;
    }
    
    .filter-tab:hover {
      border-color: var(--foreground);
      color: var(--foreground);
    }
    
    .filter-tab.active {
      background: var(--foreground);
      color: var(--background);
      border-color: var(--foreground);
    }
    
    /* Blog Grid */
    .blog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2.5rem;
    }
    
    .blog-card {
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      overflow: hidden;
      background: rgba(20, 20, 20, 0.5);
      transition: all 0.3s ease;
      height: 100%;
      display: flex;
      flex-direction: column;
      opacity: 0;
      animation: fadeInUp 0.6s forwards;
      animation-delay: var(--delay, 0s);
    }
    
    .blog-card:hover {
      transform: translateY(-10px);
      border-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }
    
    .blog-image {
      height: 200px;
      overflow: hidden;
    }
    
    .blog-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    .blog-card:hover .blog-image img {
      transform: scale(1.05);
    }
    
    .blog-content {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    
    .blog-meta {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
      font-size: 0.85rem;
    }
    
    .blog-category {
      background: rgba(255, 255, 255, 0.1);
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-weight: 500;
    }
    
    .blog-date {
      color: var(--muted);
    }
    
    .blog-card h3 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      line-height: 1.4;
    }
    
    .blog-card p {
      color: var(--muted);
      margin-bottom: 1.5rem;
      flex-grow: 1;
      line-height: 1.6;
    }
    
    .blog-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
      font-size: 0.9rem;
    }
    
    .read-time {
      color: var(--muted);
    }
    
    .read-more {
      font-weight: 500;
      transition: transform 0.2s ease;
    }
    
    .blog-card:hover .read-more,
    .featured-post:hover .read-more {
      transform: translateX(5px);
    }
    
    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @media (max-width: 900px) {
      .featured-posts {
        grid-template-columns: 1fr;
      }
      
      .blog-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>