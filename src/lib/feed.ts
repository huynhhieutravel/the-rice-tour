import { env } from 'cloudflare:workers';
import { getCanonicalMediaUrl } from './imageOptimization';

export async function generateRssFeed(siteUrl: string, feedUrl: string) {
  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) {
    throw new Error('Database missing');
  }

  const { results } = await d1Db.prepare(`
    SELECT title, slug, excerpt, createdAt, author, featuredImage 
    FROM Post 
    WHERE status = 'published' AND type = 'blog'
    ORDER BY createdAt DESC 
    LIMIT 30
  `).all();

  const escapeCdata = (str: string | null | undefined) => {
    if (!str) return '';
    return str.replace(/]]>/g, ']]]]><![CDATA[>');
  };

  const items = results.map((post: any) => {
    const postUrl = new URL(`/${post.slug}`, siteUrl).href;
    const pubDate = new Date(post.createdAt || Date.now()).toUTCString();
    
    let imageUrl = '';
    if (post.featuredImage) {
      imageUrl = getCanonicalMediaUrl(post.featuredImage);
      
      // Fallback: Nếu file webp, báo nó là image/webp để RSS reader không bị lỗi type="image/jpeg"
      // Nhưng nếu hệ thống chỉ có webp thì vẫn phải dùng webp.
    }
    
    const mimeType = imageUrl.toLowerCase().endsWith('.webp') ? 'image/webp' : 'image/jpeg';
    const imageTag = imageUrl ? `<enclosure url="${imageUrl}" type="${mimeType}" length="0" />` : '';

    return `
    <item>
      <title><![CDATA[${escapeCdata(post.title)}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <dc:creator><![CDATA[${escapeCdata(post.author || 'Admin')}]]></dc:creator>
      <description><![CDATA[${escapeCdata(post.excerpt || post.title)}]]></description>
      ${imageTag}
    </item>`;
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>FIT Tour - Du Lịch Có Guu</title>
    <link>${siteUrl}</link>
    <description>Nguồn cấp dữ liệu bài viết mới nhất từ FIT Tour</description>
    <language>vi</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;
}
