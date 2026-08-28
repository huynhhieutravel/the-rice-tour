import { env } from 'cloudflare:workers';

export const GET = async (context: any) => {
  const db = context.locals.runtime?.env?.dulichcoguu_d1 || env?.dulichcoguu_d1;
  if (!db) return new Response('No DB', { status: 500 });

  const res = await db.prepare("SELECT * FROM InternalLinkTracker LIMIT 10").all();
  const countRes = await db.prepare("SELECT COUNT(*) as cnt FROM InternalLinkTracker").all();
  
  return new Response(JSON.stringify({
    success: true,
    data: res.results,
    count: countRes.results
  }), { status: 200, headers: { 'Content-Type': 'application/json' } });
};
