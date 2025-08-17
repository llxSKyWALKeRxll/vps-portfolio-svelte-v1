// src/routes/blog/[slug]/+page.js
import { getPostBySlug, getRelatedPosts } from '$lib/data/blog.js';

export async function load({ params }) {
  try {
    // Use await since getPostBySlug is async
    const post = await getPostBySlug(params.slug);
    console.log("Post loaded:", post ? post.title : "Not found");
    
    // If the post doesn't exist, return a 404
    if (!post) {
      return {
        status: 404,
        error: new Error('Blog post not found')
      };
    }
    
    // Get related posts
    const relatedPosts = getRelatedPosts(params.slug);
    
    return {
      post,
      relatedPosts
    };
  } catch (error) {
    console.error("Error in load function:", error);
    return {
      status: 500,
      error: new Error('Failed to load blog post')
    };
  }
}