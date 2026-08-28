import type { BlockNode, BlogPost } from '@/types/cms';

/**
 * Normalizes a post's content blocks to ensure stability during render.
 * Cleans up empty or invalid blocks to prevent frontend crashes.
 */
export function normalizeContent(contentNodes: BlockNode[]): BlockNode[] {
  if (!Array.isArray(contentNodes)) return [];

  return contentNodes
    .filter(node => {
      // 1. Filter out completely empty or invalid nodes
      if (!node || typeof node !== 'object') return false;
      if (!node.type) return false;

      // 2. Custom validation rules per block type
      switch (node.type) {
        case 'image':
          // Require src for images
          if (!node.attrs || !node.attrs.src) return false;
          break;
        case 'customTourGallery':
          // Require at least one image in gallery
          if (!node.attrs || !Array.isArray(node.attrs.images) || node.attrs.images.length === 0) return false;
          break;
        case 'customTourItinerary':
          // Require days array
          if (!node.attrs || !Array.isArray(node.attrs.days)) return false;
          break;
      }

      return true;
    })
    .map(node => {
      // Recursively normalize child content if present
      if (node.content && Array.isArray(node.content)) {
        return {
          ...node,
          content: normalizeContent(node.content)
        };
      }
      return node;
    });
}

/**
 * Normalizes an entire blog post schema before rendering or saving.
 */
export function normalizePost(post: any): BlogPost {
  // Ensure the post has all required fields with sane defaults
  return {
    ...post,
    version: post.version || 1,
    content: {
      type: 'doc',
      content: normalizeContent(post.content?.content || [])
    }
  };
}
