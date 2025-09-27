// src/routes/blog/+page.js
import { getAllPosts } from '$lib/data/blog.js';

export async function load() {
  const posts = getAllPosts();

  // Extract unique categories from posts
  const categories = ['All', ...new Set(posts.map(post => post.category))];

  return {
    posts,
    categories
  };
}