import type { D1Database } from '@cloudflare/workers-types';
import type { ASTNode } from './parser';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/đ/g, 'd')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-');
}

export async function fetchAllShortcodeData(nodes: ASTNode[], db: D1Database) {
  // 1. Dedupe testimonial categories & snippet names
  const testimonialCategories = new Set<string>();
  const snippetNames = new Set<string>();
  const authorSlugs = new Set<string>();
  const corporateTripsLocations = new Set<string>();
  
  for (const node of nodes) {
    if (node.type === 'shortcode') {
      if (node.name === 'testimonial') {
        const cat = node.props.category || 'general';
        testimonialCategories.add(cat);
      } else if (node.name === 'snippet' && node.props.name) {
        snippetNames.add(node.props.name);
      } else if (node.name === 'author-card' && node.props.user) {
        authorSlugs.add(node.props.user);
      } else if (node.name === 'corporate-trips' && node.props.location) {
        corporateTripsLocations.add(node.props.location.trim());
      }
    }
  }

  const dataMap: Record<string, any> = {};

  // 2. Fetch Testimonials with Single Query (N+1 fixed)
  if (testimonialCategories.size > 0 && db) {
    const cats = Array.from(testimonialCategories);
    const placeholders = cats.map(() => '?').join(',');
    
    try {
      // Execute 1 single query for all required categories
      const { results } = await db.prepare(
        `SELECT * FROM Testimonial WHERE category IN (${placeholders}) AND status = 1 ORDER BY created_at DESC`
      ).bind(...cats).all();

      // Group results back by category for O(1) access in Components
      dataMap.testimonials = {};
      for (const cat of cats) {
        dataMap.testimonials[cat] = results.filter((r: any) => r.category === cat);
      }
    } catch (e) {
      console.error('[DataLoader] Failed to fetch testimonials', e);
      dataMap.testimonials = {};
    }
  }

  // 3. Fetch Snippets with Single Query (N+1 fixed)
  if (snippetNames.size > 0 && db) {
    const slugs = Array.from(snippetNames);
    const placeholders = slugs.map(() => '?').join(',');
    
    try {
      const { results } = await db.prepare(
        `SELECT slug, html_content, css_content_raw, css_content_scoped FROM Snippet WHERE slug IN (${placeholders}) AND status = 1 AND is_safe = 1`
      ).bind(...slugs).all();

      dataMap.snippets = {};
      for (const row of results as any[]) {
        dataMap.snippets[row.slug] = row;
      }
    } catch (e) {
      console.error('[DataLoader] Failed to fetch snippets', e);
      dataMap.snippets = {};
    }
  }

  // Future blocks (e.g. cta, products) can be pre-fetched here

  // 3.5 Fetch Random Corporate Tours (for dynamic snippet)
  if (snippetNames.has('corporate-tours') && db) {
    try {
      const { results } = await db.prepare(
        `SELECT p.id, p.slug, p.title, p.excerpt, p.featuredImage
         FROM Post p
         JOIN PostCategory pc ON p.id = pc.postId
         WHERE pc.categoryId = '458' AND (p.status = 'published' OR p.status = 'publish')
         ORDER BY RANDOM()
         LIMIT 3`
      ).all();
      dataMap.corporateTours = results;
    } catch(e) {
      console.error('[DataLoader] Failed to fetch corporate tours', e);
    }
  }

  // 3.6 Fetch Destination Corporate Trips
  if (corporateTripsLocations.size > 0 && db) {
    dataMap.corporateTrips = {};
    for (const location of corporateTripsLocations) {
      try {
        const slugPattern = `%${slugify(location)}%`;
        const titlePattern = `%${location}%`;
        const { results } = await db.prepare(
          `SELECT p.id, p.slug, p.title, p.excerpt, p.featuredImage
           FROM Post p
           JOIN PostCategory pc ON p.id = pc.postId
           WHERE pc.categoryId = '458' 
             AND (p.status = 'published' OR p.status = 'publish')
             AND (p.title LIKE ? OR p.slug LIKE ?)
           ORDER BY p.createdAt DESC`
        ).bind(titlePattern, slugPattern).all();
        dataMap.corporateTrips[location] = results;
      } catch (e) {
        console.error('[DataLoader] Failed to fetch corporate trips for ' + location, e);
      }
    }
  }

  // 4. Fetch Author Cards with Single Query
  if (authorSlugs.size > 0 && db) {
    const slugs = Array.from(authorSlugs);
    const placeholders = slugs.map(() => '?').join(',');
    
    try {
      const { results } = await db.prepare(
        `SELECT username as slug, displayName as name, avatar, url, bio as author_snippet FROM users WHERE username IN (${placeholders})`
      ).bind(...slugs).all();

      dataMap.authors = {};
      for (const row of results as any[]) {
        dataMap.authors[row.slug] = row;
      }
    } catch (e) {
      console.error('[DataLoader] Failed to fetch authors', e);
      dataMap.authors = {};
    }
  }

  return dataMap;
}
