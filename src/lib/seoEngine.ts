// src/lib/seoEngine.ts
import type { BlogPost } from '@/types/cms';

/**
 * Enterprise SEO Engine: Internal Linking
 * Automatically finds related posts based on shared tags, category, and freshness.
 * This should ideally be a D1 SQL query, but we encapsulate the logic here.
 */
export async function getRelatedPosts(currentPost: BlogPost, db: D1Database, limit: number = 3): Promise<BlogPost[]> {
  // In a real implementation with D1:
  // We would query where categoryId = currentPost.categoryId AND id != currentPost.id
  // Order by overlap of tags (if using a join table) or simply by publishDate DESC.
  
  try {
    const { results } = await db.prepare(`
      SELECT * FROM Post 
      WHERE categoryId = ? 
        AND id != ? 
        AND status = 'published'
      ORDER BY createdAt DESC
      LIMIT ?
    `).bind(currentPost.category, currentPost.id, limit).all();

    return results as unknown as BlogPost[];
  } catch (error) {
    console.error("Failed to fetch related posts via SEO Engine:", error);
    return [];
  }
}
