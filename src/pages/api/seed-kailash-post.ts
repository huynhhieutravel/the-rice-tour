import type { APIRoute } from 'astro';
import { env } from "cloudflare:workers";

export const GET: APIRoute = async ({ request }) => {
  try {
    const db = env.dulichcoguu_d1;
    
    // Check if it already exists
    const existing = await db.prepare(`SELECT id FROM Post WHERE slug = ?`).bind('trang-phuc-kora-kailash').first();
    if (existing) {
      return new Response('Already exists', { status: 200 });
    }

    const newId = crypto.randomUUID();
    const result = await db.prepare(`
      INSERT INTO Post (id, title, slug, categoryId, featuredImage, excerpt, status, author, authorId, format, contentFormat, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
    `).bind(
      newId,
      'Chuẩn bị trang phục đi Kora Kailash',
      'trang-phuc-kora-kailash',
      '36',
      'https://media.fittour.vn/uploads/2024/07/du-khach-chuan-bi-hanh-trinh-kora-kailash.jpg',
      'Nguyên tắc Layering và danh sách trang bị thiết yếu giúp bạn vượt qua 52km quanh ngọn núi linh thiêng nhất thế giới.',
      'published',
      'Trần Quốc Thịnh',
      '1e251bd1-4335-43c8-b79c-9a0a2f4edec1',
      'astro-code',
      'json'
    ).run();

    return new Response(JSON.stringify({ success: true, result, insertedId: newId }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (e: any) {
    return new Response(e.message, { status: 500 });
  }
}
