import { env } from 'cloudflare:workers';
import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const db = (env as any)?.dulichcoguu_d1;
  if (!db) return new Response('No DB binding', { status: 500 });

  const files = [
    'tu-vien-Stongdey-Zanskar',
    'khong-gian-ben-trong-yen-tinh-tu-vien-Stongdey-Zanskar-ladakh',
    'emagazine-nhung-ngay-du-muc-zanskar',
    'dang-thuy-duong-va-cac-em-nho-o-tu-vien-Stongdey',
    'du-khach-tour-ladakh-tan-huong-khong-khi-o-tu-vien',
    'du-khach-den-tu-vien-ladakh-va-giao-luu-cung-cac-tu-si',
    'dang-thuy-duong-va-cac-em-nho-o-tu-vien-Stongdey2',
    'dang-thuy-duong-va-cac-em-nho-o-tu-vien-Stongdey3',
    'dang-thuy-duong-va-cac-em-nho-o-tu-vien-Stongdey4',
    'du-khach-vui-ve-ben-cac-em-nho-tai-tu-vien-Zanskar',
    'tu-vien-duoc-xem-la-trai-tim-zanskar',
    'du-khach-tai-tu-vien-Phugtal',
    'du-khach-chup-anh-ben-tu-vien-Phugtal'
  ];

  let inserted = 0;
  let existing = 0;
  
  for (const name of files) {
    const filename = name + '.webp';
    const url = 'https://media.fittour.vn/uploads/2023/06/' + filename;
    
    // Check if exists
    const check = await db.prepare('SELECT id FROM Media WHERE filename = ?').bind(filename).first();
    if (check) {
      existing++;
      continue;
    }

    // Insert
    const id = crypto.randomUUID();
    const now = new Date().toISOString();
    await db.prepare(
      `INSERT INTO Media (id, url, filename, title, mimeType, sizeBytes, createdAt, folder) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(id, url, filename, name.replace(/-/g, ' '), 'image/webp', 100000, now, '2023/06').run();
    inserted++;
  }

  return new Response(`Inserted ${inserted}, Existing ${existing}`);
};
