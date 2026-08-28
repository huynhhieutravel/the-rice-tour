import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const d1Db = env?.dulichcoguu_d1;
    if (!d1Db) return new Response("No DB", { status: 500 });
    
    let page = await d1Db.prepare("SELECT * FROM Page WHERE slug = 'dia-diem-to-chuc-nhat-ban'").first();
    let tableName = 'Page';
    if (!page) {
      page = await d1Db.prepare("SELECT * FROM Post WHERE slug = 'dia-diem-to-chuc-nhat-ban'").first();
      tableName = 'Post';
    }
    
    if (!page || !page.content) return new Response("No content", { status: 404 });
    return new Response(page.content as string, { status: 200, headers: { 'Content-Type': 'text/plain' } });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
};
