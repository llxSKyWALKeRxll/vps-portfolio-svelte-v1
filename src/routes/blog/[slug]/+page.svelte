<!-- src/routes/blog/[slug]/+page.svelte -->
<script>
  import { onMount } from 'svelte';
  export let data;
  
  console.log("Page data received:", data);
  
  let { post, relatedPosts } = data;
  let currentUrl = '';
  
  onMount(() => {
    // Get the current URL only on the client side
    currentUrl = window.location.href;
    console.log("Current URL:", currentUrl);
    console.log("Post content available:", post && post.content ? "Yes" : "No");
  });
</script>

<svelte:head>
  <title>{post ? post.title : 'Blog Post'} | Vansh Pratap Singh's Blog</title>
  <meta name="description" content={post ? (post.excerpt || post.title) : 'Blog post'} />
</svelte:head>

{#if post}
  <article class="blog-post-page">
    <div class="post-header">
      <div class="container">
        <div class="post-meta appear">
          <span class="post-category">{post.category}</span>
          <span class="post-date">{post.date}</span>
          <span class="post-read-time">{post.readTime}</span>
        </div>
        
        <h1 class="post-title appear">{post.title}</h1>
        
        <div class="post-author appear">
          <div class="author-avatar">
            <span>YN</span>
          </div>
          <div class="author-info">
            <span class="author-name">Vansh Pratap Singh</span>
            <span class="author-title">Software Developer</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="post-featured-image appear">
      <div class="container">
        <img src={post.image || '/images/blog-placeholder.jpg'} alt={post.title} />
      </div>
    </div>
    
    <div class="container">
      <div class="post-content-wrapper">
        <div class="post-content appear">
          {#if post.content}
            {@html post.content}
          {:else}
            <p>Loading content...</p>
          {/if}
        </div>
        
        <div class="post-sidebar appear">
          <div class="sidebar-section">
            <h3>Share This Post</h3>
            <div class="share-buttons">
              {#if currentUrl}
                <a href={`https://twitter.com/intent/tweet?text=${post.title}&url=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" class="share-button twitter">
                  Twitter
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" class="share-button linkedin">
                  LinkedIn
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" class="share-button facebook">
                  Facebook
                </a>
              {:else}
                <span>Loading share options...</span>
              {/if}
            </div>
          </div>
          
          <div class="sidebar-section">
            <h3>About the Author</h3>
            <p>
              Software developer specializing in modern web technologies. 
              Passionate about creating efficient, user-friendly applications 
              and sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
      
      {#if relatedPosts && relatedPosts.length > 0}
        <div class="related-posts appear">
          <h2>Related Articles</h2>
          <div class="related-posts-grid">
            {#each relatedPosts as relatedPost}
              <a href={`/blog/${relatedPost.slug}`} class="related-post-card">
                <div class="related-post-image">
                  <img src={relatedPost.image || '/images/blog-placeholder.jpg'} alt={relatedPost.title} />
                </div>
                <div class="related-post-content">
                  <h3>{relatedPost.title}</h3>
                  <p>{relatedPost.excerpt}</p>
                  <span class="related-post-date">{relatedPost.date}</span>
                </div>
              </a>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </article>
{:else}
  <div class="container" style="padding: 10rem 0; text-align: center;">
    <h1>Loading blog post...</h1>
    <p>Please wait while we fetch the content.</p>
    <a href="/blog" class="back-link">← Back to Blog</a>
  </div>
{/if}

<style>
  /* Include your existing styles here */
  
  .blog-post-page {
    padding-top: 6rem;
  }
  
  .post-header {
    padding: 3rem 0;
    text-align: center;
  }
  
  .post-meta {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }
  
  .post-category {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
  }
  
  .post-date, .post-read-time {
    color: var(--muted);
    font-size: 0.9rem;
  }
  
  .post-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    line-height: 1.2;
    margin-bottom: 2rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .post-author {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  
  .author-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #333333, #111111);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.2rem;
  }
  
  .author-info {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  
  .author-name {
    font-weight: 600;
  }
  
  .author-title {
    font-size: 0.9rem;
    color: var(--muted);
  }
  
  .post-featured-image {
    margin-bottom: 3rem;
  }
  
  .post-featured-image img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .post-content-wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    margin-bottom: 4rem;
  }
  
  .post-content {
    line-height: 1.8;
    font-size: 1.1rem;
  }
  
  .post-content h2 {
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
  }
  
  .post-content p {
    margin-bottom: 1.5rem;
  }
  
  .post-content ul, .post-content ol {
    margin-bottom: 1.5rem;
    margin-left: 1.5rem;
  }
  
  .post-content li {
    margin-bottom: 0.5rem;
  }
  
  .post-content pre {
    background: rgba(0, 0, 0, 0.3);
    padding: 1.5rem;
    border-radius: 8px;
    overflow-x: auto;
    margin-bottom: 1.5rem;
  }
  
  .post-content code {
    font-family: monospace;
    font-size: 0.9rem;
  }
  
  .post-sidebar {
    position: sticky;
    top: 100px;
  }
  
  .sidebar-section {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .sidebar-section h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  
  .share-buttons {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  
  .share-button {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 0.9rem;
    background: rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
  }
  
  .share-button:hover {
    background: var(--foreground);
    color: var(--background);
    transform: translateY(-3px);
  }
  
  .related-posts {
    margin: 4rem 0;
  }
  
  .related-posts h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    position: relative;
    display: inline-block;
  }
  
  .related-posts h2::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 50px;
    height: 3px;
    background: var(--foreground);
  }
  
  .related-posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .related-post-card {
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
    height: 100%;
  }
  
  .related-post-card:hover {
    transform: translateY(-10px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .related-post-image {
    height: 180px;
  }
  
  .related-post-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .related-post-content {
    padding: 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .related-post-content h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    line-height: 1.4;
  }
  
  .related-post-content p {
    color: var(--muted);
    margin-bottom: 1rem;
    line-height: 1.6;
    flex-grow: 1;
  }
  
  .related-post-date {
    color: var(--muted);
    font-size: 0.9rem;
  }
  
  .back-link {
    display: inline-block;
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    border: 1px solid var(--foreground);
    border-radius: 4px;
    transition: all 0.3s ease;
  }
  
  .back-link:hover {
    background: var(--foreground);
    color: var(--background);
  }
  
  @media (max-width: 900px) {
    .post-content-wrapper {
      grid-template-columns: 1fr;
    }
    
    .post-sidebar {
      position: static;
    }
  }
</style>