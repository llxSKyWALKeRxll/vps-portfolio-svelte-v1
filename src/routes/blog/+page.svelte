<script>
    import { onMount } from 'svelte';
    import { getPostsByCategory, getAllPosts } from '$lib/data/blog.js';

    export let data;
    const { posts, categories } = data;

    let selectedCategory = 'All';
    let filteredPosts = posts;
    let showImages = true; // Toggle for display mode

    // Get all posts for checking if any are featured
    const allPosts = getAllPosts();

    $: {
      filteredPosts = getPostsByCategory(selectedCategory);
    }

    function toggleDisplayMode() {
      showImages = !showImages;
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
      
      <!-- Display Mode Toggle -->
      <div class="controls-container appear">
        <div class="spacer"></div>

        <button class="display-toggle" on:click={toggleDisplayMode}>
          <span class="toggle-icon">
            {#if showImages}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>
              </svg>
            {:else}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
            {/if}
          </span>
          <span class="toggle-text">
            {showImages ? 'List View' : 'Card View'}
          </span>
        </button>
      </div>
      
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
      
      <!-- Blog Posts Display -->
      {#if showImages}
        <!-- Card View with Images -->
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
                {#if post.tags}
                  <div class="blog-tags">
                    {#each post.tags as tag}
                      <span class="tag">#{tag}</span>
                    {/each}
                  </div>
                {/if}
                <div class="blog-footer">
                  <span class="read-time">{post.readTime}</span>
                  <span class="read-more">Read Article →</span>
                </div>
              </div>
            </a>
          {/each}
        </div>
      {:else}
        <!-- List View without Images -->
        <div class="blog-list">
          {#each filteredPosts as post, i}
            <a href={`/blog/${post.slug}`} class="blog-list-item appear" style="--delay: {i * 0.05}s">
              <div class="list-item-content">
                <div class="list-header">
                  <h3>{post.title}</h3>
                  <span class="list-date">{post.date}</span>
                </div>
                <p class="list-excerpt">{post.excerpt}</p>
                <div class="list-meta">
                  <span class="list-category">{post.category}</span>
                  <span class="list-read-time">{post.readTime}</span>
                  {#if post.tags}
                    <div class="list-tags">
                      {#each post.tags.slice(0, 3) as tag}
                        <span class="tag-small">#{tag}</span>
                      {/each}
                    </div>
                  {/if}
                </div>
              </div>
              <span class="list-arrow">→</span>
            </a>
          {/each}
        </div>
      {/if}
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
    
    /* Controls */
    .controls-container {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-bottom: 2rem;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .spacer {
      flex-grow: 1;
    }

    .display-toggle {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: var(--foreground);
      padding: 0.75rem 1.25rem;
      border-radius: 25px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 0.9rem;
      font-weight: 500;
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    .display-toggle:hover {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08));
      border-color: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }

    .display-toggle:active {
      transform: translateY(0);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .toggle-icon {
      display: flex;
      align-items: center;
      width: 18px;
      height: 18px;
    }

    .toggle-icon svg {
      width: 100%;
      height: 100%;
      transition: all 0.3s ease;
    }

    .display-toggle:hover .toggle-icon svg {
      transform: scale(1.1);
    }

    .toggle-text {
      transition: all 0.3s ease;
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
      object-fit: contain;
      transition: transform 0.5s ease;
      background: rgba(0, 0, 0, 0.05);
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
    
    .blog-card:hover .read-more {
      transform: translateX(5px);
    }

    /* Tags */
    .blog-tags, .list-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .tag, .tag-small {
      background: rgba(255, 255, 255, 0.1);
      color: var(--foreground);
      padding: 0.2rem 0.6rem;
      border-radius: 12px;
      font-size: 0.75rem;
      font-weight: 500;
    }

    .tag-small {
      font-size: 0.7rem;
      padding: 0.15rem 0.5rem;
    }

    /* List View */
    .blog-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .blog-list-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      background: rgba(20, 20, 20, 0.3);
      transition: all 0.3s ease;
      opacity: 0;
      animation: fadeInUp 0.6s forwards;
      animation-delay: var(--delay, 0s);
    }

    .blog-list-item:hover {
      border-color: rgba(255, 255, 255, 0.3);
      background: rgba(20, 20, 20, 0.5);
      transform: translateX(10px);
    }

    .list-item-content {
      flex-grow: 1;
    }

    .list-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.5rem;
      gap: 1rem;
    }

    .list-header h3 {
      font-size: 1.2rem;
      margin: 0;
      line-height: 1.4;
    }

    .list-date {
      color: var(--muted);
      font-size: 0.85rem;
      white-space: nowrap;
    }

    .list-excerpt {
      color: var(--muted);
      margin-bottom: 1rem;
      line-height: 1.5;
      font-size: 0.95rem;
    }

    .list-meta {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .list-category, .list-read-time {
      background: rgba(255, 255, 255, 0.05);
      padding: 0.3rem 0.8rem;
      border-radius: 15px;
      font-size: 0.8rem;
      color: var(--muted);
    }

    .list-arrow {
      font-size: 1.2rem;
      color: var(--muted);
      transition: all 0.3s ease;
      margin-left: 1rem;
    }

    .blog-list-item:hover .list-arrow {
      color: var(--foreground);
      transform: translateX(5px);
    }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @media (max-width: 900px) {
      .blog-grid {
        grid-template-columns: 1fr;
      }

      .controls-container {
        justify-content: center;
      }

      .list-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }

      .list-meta {
        gap: 0.5rem;
      }

      .blog-list-item {
        padding: 1rem;
      }

      .display-toggle {
        padding: 0.6rem 1rem;
        font-size: 0.85rem;
        gap: 0.5rem;
      }

      .toggle-icon {
        width: 16px;
        height: 16px;
      }
    }
  </style>