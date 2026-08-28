import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import landingPageLinks from '@/data/landing-page-links.json';

export const prerender = false;

/**
 * Knowledge Graph API
 * Scans all Post, Tour, Page content for internal links
 * Returns { nodes, edges } for force-graph visualization
 */
export const GET: APIRoute = async ({ locals }) => {
  try {
    const d1Db = env?.dulichcoguu_d1;
    if (!d1Db) {
      return new Response(JSON.stringify({ error: 'D1 not available' }), { 
        status: 500, headers: { 'Content-Type': 'application/json' } 
      });
    }

    // 1. Fetch metadata (lightweight) for all content types
    const [postsRes, toursRes, pagesRes, categoriesRes] = await Promise.all([
      d1Db.prepare(`SELECT id, slug, title, featuredImage, categoryId FROM Post WHERE status = 'published' ORDER BY title`).all(),
      d1Db.prepare(`SELECT id, slug, title, featuredImage, country_slug FROM Tour WHERE status = 'published' ORDER BY title`).all(),
      d1Db.prepare(`SELECT id, slug, title, featuredImage FROM Page WHERE status = 'published' ORDER BY title`).all(),
      d1Db.prepare(`SELECT id, slug, name FROM BlogCategory`).all(),
    ]);

    const posts = postsRes.results || [];
    const tours = toursRes.results || [];
    const pages = pagesRes.results || [];
    const categories = categoriesRes.results || [];

    // 2. Build slug → node map
    const slugMap = new Map<string, { id: string; type: string; title: string }>();
    const nodes: any[] = [];

    for (const p of posts) {
      const slug = p.slug as string;
      if (!slug) continue;
      const nodeId = `post-${p.id}`;
      slugMap.set(slug, { id: nodeId, type: 'post', title: p.title as string });
      nodes.push({
        id: nodeId, slug, title: p.title, type: 'post',
        categoryId: p.categoryId, featuredImage: p.featuredImage,
        url: `/${slug}`,
      });
    }

    for (const t of tours) {
      const slug = t.slug as string;
      if (!slug) continue;
      const nodeId = `tour-${t.id}`;
      slugMap.set(slug, { id: nodeId, type: 'tour', title: t.title as string });
      nodes.push({
        id: nodeId, slug, title: t.title, type: 'tour',
        countrySlug: t.country_slug, featuredImage: t.featuredImage,
        url: `/tour/${slug}`,
      });
    }

    for (const pg of pages) {
      const slug = pg.slug as string;
      if (!slug) continue;
      const nodeId = `page-${pg.id}`;
      slugMap.set(slug, { id: nodeId, type: 'page', title: pg.title as string });
      nodes.push({
        id: nodeId, slug, title: pg.title, type: 'page',
        featuredImage: pg.featuredImage, url: `/${slug}`,
      });
    }

    // 3. Extract internal links from content in batches
    const edges: { source: string; target: string }[] = [];
    const edgeSet = new Set<string>();

    const extractLinks = (content: string, sourceId: string) => {
      if (content === null || content === undefined || content === '') return;
      // Match href="/slug" or href="https://thericetour.com/slug" or href="https://dulichcoguu.com/slug"
      const regex = /href\s*=\s*["'](?:https?:\/\/(?:www\.)?(?:fittour\.vn|dulichcoguu\.com))?\/([a-z0-9][a-z0-9\-]*(?:\/[a-z0-9][a-z0-9\-]*)?)(?:\/)?(?:#[^"']*)?["']/gi;
      let match;
      while ((match = regex.exec(content)) !== null) {
        let targetSlug = match[1];
        // Handle /tour/slug pattern
        if (targetSlug.startsWith('tour/')) {
          targetSlug = targetSlug.substring(5);
        }
        const targetNode = slugMap.get(targetSlug);
        if (targetNode && targetNode.id !== sourceId) {
          const edgeKey = `${sourceId}→${targetNode.id}`;
          if (!edgeSet.has(edgeKey)) {
            edgeSet.add(edgeKey);
            edges.push({ source: sourceId, target: targetNode.id });
          }
        }
      }
    };

    // Process Posts content in batches
    const BATCH = 50;
    const postIds = posts.map((p: any) => String(p.id));
    for (let i = 0; i < postIds.length; i += BATCH) {
      const batch = postIds.slice(i, i + BATCH);
      const ph = batch.map(() => '?').join(',');
      try {
        const res = await d1Db.prepare(`SELECT id, content FROM Post WHERE id IN (${ph})`).bind(...batch).all();
        for (const row of (res.results || [])) {
          extractLinks(row.content as string, `post-${row.id}`);
        }
      } catch (e) { /* skip batch on error */ }
    }

    // Process Tours content
    const tourIds = tours.map((t: any) => String(t.id));
    for (let i = 0; i < tourIds.length; i += BATCH) {
      const batch = tourIds.slice(i, i + BATCH);
      const ph = batch.map(() => '?').join(',');
      try {
        const res = await d1Db.prepare(`SELECT id, content FROM Tour WHERE id IN (${ph})`).bind(...batch).all();
        for (const row of (res.results || [])) {
          extractLinks(row.content as string, `tour-${row.id}`);
        }
      } catch (e) { /* skip batch on error */ }
    }

    // Process Pages content
    const pageIds = pages.map((pg: any) => String(pg.id));
    for (let i = 0; i < pageIds.length; i += BATCH) {
      const batch = pageIds.slice(i, i + BATCH);
      const ph = batch.map(() => '?').join(',');
      try {
        const res = await d1Db.prepare(`SELECT id, content FROM Page WHERE id IN (${ph})`).bind(...batch).all();
        for (const row of (res.results || [])) {
          extractLinks(row.content as string, `page-${row.id}`);
        }
      } catch (e) { /* skip batch on error */ }
    }

    // Process Hardcoded Links from Registry
    for (const [sourceSlug, targets] of Object.entries(landingPageLinks)) {
      const sourceNode = slugMap.get(sourceSlug);
      if (!sourceNode) continue;
      for (let targetSlug of targets) {
        // Handle /tour/slug pattern if user includes it by mistake
        if (targetSlug.startsWith('tour/')) {
          targetSlug = targetSlug.substring(5);
        }
        const targetNode = slugMap.get(targetSlug);
        if (targetNode && targetNode.id !== sourceNode.id) {
          const edgeKey = `${sourceNode.id}→${targetNode.id}`;
          if (!edgeSet.has(edgeKey)) {
            edgeSet.add(edgeKey);
            edges.push({ source: sourceNode.id, target: targetNode.id });
          }
        }
      }
    }

    // 4. Count connections per node
    const connectionCount = new Map<string, number>();
    for (const edge of edges) {
      connectionCount.set(edge.source, (connectionCount.get(edge.source) || 0) + 1);
      connectionCount.set(edge.target, (connectionCount.get(edge.target) || 0) + 1);
    }
    for (const node of nodes) {
      node.connections = connectionCount.get(node.id) || 0;
    }

    // 5. Category lookup
    const categoryMap: Record<string, string> = {};
    for (const c of categories) {
      categoryMap[c.id as string] = c.name as string;
    }

    return new Response(JSON.stringify({
      nodes,
      edges,
      categories: categoryMap,
      stats: {
        totalNodes: nodes.length,
        totalEdges: edges.length,
        orphanNodes: nodes.filter(n => (connectionCount.get(n.id) || 0) === 0).length,
        posts: posts.length,
        tours: tours.length,
        pages: pages.length,
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { 
      status: 500, headers: { 'Content-Type': 'application/json' } 
    });
  }
};
