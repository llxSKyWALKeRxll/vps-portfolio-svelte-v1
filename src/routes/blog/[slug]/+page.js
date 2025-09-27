// src/routes/blog/[slug]/+page.js
import { getPostBySlug, getRelatedPosts } from '$lib/data/blog.js';
import { browser } from '$app/environment';

export async function load({ params, fetch, url }) {
  console.log("Slug params: ", params);

  try {
    const post = await getPostBySlug(params.slug, fetch, !browser, url);
    console.log("Post returned from getPostBySlug:", post);

    if (!post) {
      return {
        status: 404,
        error: new Error(`Blog post not found for slug: ${params.slug}`)
      };
    }

    const relatedPosts = getRelatedPosts(params.slug);

    return {
      post,
      relatedPosts
    };
  } catch (error) {
    console.error("Error in load function:", error);
    return {
      status: 500,
      error: new Error(`Failed to load blog post: ${error.message}`)
    };
  }
}