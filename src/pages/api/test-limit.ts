import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

export const GET: APIRoute = async () => {
  const d1Db = env?.dulichcoguu_d1;
  const { results } = await d1Db.prepare("SELECT * FROM Media ORDER BY createdAt DESC").all();
  return new Response(JSON.stringify({ count: results.length }), { status: 200 });
};
