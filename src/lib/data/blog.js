// src/lib/data/blog.js
export const blogPosts = [
  // {
  //   "title": "From Distributed Systems to SvelteKit: Why I’m Loving This Framework 🚀",
  //   "slug": "getting-familiar-with-sveltekit",
  //   "date": "March 5, 2025",
  //   "category": "Web Development",
  //   "readTime": "7 min read",
  //   "image": "https://cdn.prod.website-files.com/61d2c808f50b08ee42c1c477/675698322890728b617211b9_AD_4nXc88HcQbdENqj7gqxwNgTq6GU8S7iRTCHODuGGzRGYzA3Pn26xGvjZqOrRXDPesyGq3seKo5LuVwLjt5rTIEsA6o5M5HOZMadbdSy38RKjq7hDbFa9IsW63k7CrnLYq4Kf6wBM4.png",
  //   "excerpt": "As someone who has wrangled Kafka clusters, JVM bottlenecks, and live systems handling 50K+ users, building apps with SvelteKit feels like a breath of fresh air 😌. Let’s dive into why I think SvelteKit is an underrated gem for developers.",
  //   "featured": true,
  // },
  {
    "title": "One Weekend with Rust 🦀 Did it Really Make Me Fearless?",
    "slug": "introduction-to-rust",
    "date": "Dec 10, 2024",
    "category": "Programming Languages",
    "readTime": "9 min read",
    "image": "https://cdn.prod.website-files.com/61d2c808f50b08ee42c1c477/675698322890728b617211b9_AD_4nXc88HcQbdENqj7gqxwNgTq6GU8S7iRTCHODuGGzRGYzA3Pn26xGvjZqOrRXDPesyGq3seKo5LuVwLjt5rTIEsA6o5M5HOZMadbdSy38RKjq7hDbFa9IsW63k7CrnLYq4Kf6wBM4.png",
    "excerpt": "Rust promised me 'fearless concurrency' and safety like no other language. So I decided to spend a weekend with it. Spoiler: the compiler yelled at me a lot, but I weirdly enjoyed it 😅.",
    "featured": true,
    "tags": ["rust", "tech", "programming", "learning"]
  }
  
  
    // {
    //   title: 'Building Performant Web Applications with SvelteKit',
    //   slug: 'building-performant-web-applications-with-sveltekit',
    //   date: 'July 15, 2023',
    //   category: 'Web Development',
    //   readTime: '5 min read',
    //   image: '/images/blog-1.jpg',
    //   excerpt: 'Learn how SvelteKit can help you build faster, more efficient web applications with less code and better user experience.',
    //   featured: true
    // },
    // {
    //   title: 'Modern CSS Techniques Every Developer Should Know',
    //   slug: 'modern-css-techniques-every-developer-should-know',
    //   date: 'June 22, 2023',
    //   category: 'CSS',
    //   readTime: '4 min read',
    //   image: '/images/blog-2.jpg',
    //   excerpt: 'Explore the latest CSS features and techniques that can transform your styling workflow and enhance your web projects.',
    //   featured: false
    // },
    // {
    //   title: 'Optimizing React Applications for Production',
    //   slug: 'optimizing-react-applications-for-production',
    //   date: 'May 10, 2023',
    //   category: 'React',
    //   readTime: '6 min read',
    //   image: '/images/blog-3.jpg',
    //   excerpt: 'Discover strategies and best practices for optimizing React applications to achieve better performance in production environments.',
    //   featured: true
    // }
  ];
  
  // Helper functions remain the same
  // src/lib/data/blog.js
export async function getPostBySlug(slug, fetch, isServer = false) {
    console.log("Finding slug: ", slug);
    const post = blogPosts.find(post => post.slug === slug);

    console.log("Matching slugs: ", post);

    if (!post) return null;

    try {
      let fullPost;

      if (isServer) {
        // Server-side: read file directly from filesystem
        const { readFileSync } = await import('fs');
        const { join } = await import('path');
        const filePath = join(process.cwd(), 'static', 'data', 'blog-posts', `${slug}.json`);
        const fileContent = readFileSync(filePath, 'utf-8');
        fullPost = JSON.parse(fileContent);
      } else {
        // Client-side: use fetch
        const response = await fetch(`/data/blog-posts/${slug}.json`);

        if (!response.ok) throw new Error('Failed to load blog post content');

        fullPost = await response.json();
      }

      console.log("Loaded content for:", slug);
      console.log(fullPost.content);

      // Return the combined post
      return { ...post, content: fullPost.content };
    } catch (error) {
      console.error("Error loading blog post content:", error);
      return { ...post, content: "Error loading content. Please try again later." };
    }
  }
  
  export function getAllPosts() {
    return blogPosts;
  }
  
  export function getFeaturedPosts() {
    return blogPosts.filter(post => post.featured);
  }
  
  export function getPostsByCategory(category) {
    if (category === 'All') return blogPosts;
    return blogPosts.filter(post => post.category === category);
  }
  
  export function getRelatedPosts(currentSlug, limit = 2) {
    return blogPosts
      .filter(post => post.slug !== currentSlug)
      .slice(0, limit);
  }

  export function getPostsByTag(tag) {
    if (tag === 'All') return blogPosts;
    return blogPosts.filter(post => post.tags && post.tags.includes(tag));
  }

  export function getAllTags() {
    const tags = new Set();
    blogPosts.forEach(post => {
      if (post.tags) {
        post.tags.forEach(tag => tags.add(tag));
      }
    });
    return ['All', ...Array.from(tags)];
  }