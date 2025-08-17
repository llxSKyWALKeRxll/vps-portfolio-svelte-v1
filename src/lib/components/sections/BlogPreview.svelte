<!-- src/lib/components/sections/BlogPreview.svelte -->
<script>
    import { getFeaturedPosts } from '$lib/data/blog.js';
    
    const blogPosts = getFeaturedPosts().slice(0, 3); // Get up to 3 featured posts
  </script>
  
  <section id="blog" class="blog-section">
    <div class="container">
      <div class="section-header appear">
        <h2>Latest Articles</h2>
        <div class="section-line"></div>
      </div>
      
      <div class="blog-grid">
        {#each blogPosts as post, i}
          <a href={`/blog/${post.slug}`} class="blog-card appear" style="--delay: {i * 0.2}s">
            <div class="blog-card-content">
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
      
      <div class="view-all-container appear">
        <a href="/blog" class="view-all-button">View All Articles</a>
      </div>
    </div>
  </section>
  
  <style>
    .blog-section {
      padding: 6rem 0;
      background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(20,20,20,0.2) 100%);
    }
    
    .blog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }
    
    .blog-card {
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      overflow: hidden;
      background: rgba(20, 20, 20, 0.5);
      transition: all 0.3s ease;
      height: 100%;
      display: block;
      opacity: 0;
      animation: fadeInUp 0.6s forwards;
      animation-delay: var(--delay, 0s);
    }
    
    .blog-card:hover {
      transform: translateY(-10px);
      border-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }
    
    .blog-card-content {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      height: 100%;
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
    
    .view-all-container {
      margin-top: 3rem;
      text-align: center;
    }
    
    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @media (max-width: 768px) {
      .blog-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>