import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const GET: APIRoute = async ({ request }) => {
  try {
    const db = env.dulichcoguu_d1;
    if (!db) return new Response('No DB', { status: 500 });
    
    // Trash the ghost post
    await db.prepare("UPDATE Post SET status = 'trash' WHERE slug = 'am-thuc-ladakh'").run();
    // Delete old links
    await db.prepare("DELETE FROM InternalLinkTracker WHERE sourceUrl = '/am-thuc-ladakh'").run();
    
    return new Response(JSON.stringify({ success: true, message: 'Ghost post trashed and links cleaned.' }), { status: 200 });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
};
