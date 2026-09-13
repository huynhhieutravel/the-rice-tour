import { env } from 'cloudflare:workers';
import { safeQueryOptional } from '@/lib/db-client';
import { convertHtmlToMarkdown } from '@/lib/htmlToMarkdown';

export const prerender = false;

export async function GET({ params, request, url }: any) {
  const { slug } = params;
  
  if (!slug) {
    return new Response('Not Found', { status: 404 });
  }

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) {
    return new Response('Database not available', { status: 500 });
  }

  try {
    const query = `
      SELECT 
        title, 
        excerpt, 
        content,
        authorId,
        createdAt
      FROM Post 
      WHERE slug = ? AND status = 'published'
    `;
    
    const { results } = await safeQueryOptional(
      d1Db.prepare(query).bind(slug).all(),
      { results: [] },
      { route: `/${slug}.md`, queryType: 'fetch_post_markdown' }
    );

    if (!results || results.length === 0) {
      return new Response('Not Found', { status: 404 });
    }

    const post: any = results[0];
    
    // Construct structured Markdown
    const canonicalUrl = `https://thericetour.com/${slug}`;
    let md = `Source: ${canonicalUrl}\n\n`;
    md += `# ${post.title}\n\n`;
    
    if (post.createdAt) {
      const dateStr = new Date(post.createdAt).toLocaleDateString('vi-VN');
      md += `**Published:** ${dateStr}\n\n`;
    }
    
    if (post.excerpt) {
      md += `## Summary\n${post.excerpt}\n\n`;
    }

    if (post.content) {
      md += `## Content\n`;
      const contentMd = convertHtmlToMarkdown(post.content, { baseUrl: 'https://thericetour.com' });
      md += contentMd;
    }

    return new Response(md.trim(), {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
        'X-Robots-Tag': 'noindex, follow',
      }
    });

  } catch (error) {
    console.error(`Error generating markdown for post ${slug}:`, error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
