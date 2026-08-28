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
        days, 
        price_number, 
        price_text, 
        content,
        excerpt
      FROM Tour 
      WHERE slug = ? AND status = 'published'
    `;
    
    const { results } = await safeQueryOptional(
      d1Db.prepare(query).bind(slug).all(),
      { results: [] },
      { route: `/tour/${slug}.md`, queryType: 'fetch_tour_markdown' }
    );

    if (!results || results.length === 0) {
      return new Response('Not Found', { status: 404 });
    }

    const tour: any = results[0];
    
    // Construct structured Markdown
    const canonicalUrl = `https://thericetour.com/tour/${slug}`;
    let md = `Source: ${canonicalUrl}\n\n`;
    md += `# ${tour.title}\n\n`;
    
    if (tour.days) {
      md += `## Duration\n${tour.days}\n\n`;
    }
    
    if (tour.price_number) {
      md += `## Price\n${new Intl.NumberFormat('vi-VN').format(tour.price_number)} VNĐ\n\n`;
    } else if (tour.price_text) {
      md += `## Price\n${tour.price_text}\n\n`;
    }
    
    if (tour.excerpt) {
      md += `## Overview\n${tour.excerpt}\n\n`;
    }

    if (tour.content) {
      md += `## Itinerary & Details\n`;
      const contentMd = convertHtmlToMarkdown(tour.content, { baseUrl: 'https://thericetour.com' });
      md += contentMd;
    }

    return new Response(md.trim(), {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
        'X-Robots-Tag': 'noindex, follow', // Optional: Keep search engines focused on HTML, but AI uses it
      }
    });

  } catch (error) {
    console.error(`Error generating markdown for tour ${slug}:`, error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
