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
        name as title, 
        description as excerpt,
        content
      FROM Country 
      WHERE slug = ?
    `;
    
    const { results } = await safeQueryOptional(
      d1Db.prepare(query).bind(slug).all(),
      { results: [] },
      { route: `/country/${slug}.md`, queryType: 'fetch_country_markdown' }
    );

    if (!results || results.length === 0) {
      return new Response('Not Found', { status: 404 });
    }

    const country: any = results[0];
    
    // Construct structured Markdown
    const canonicalUrl = `https://thericetour.com/country/${slug}`;
    let md = `Source: ${canonicalUrl}\n\n`;
    md += `# ${country.title}\n\n`;
    
    if (country.excerpt) {
      md += `## Overview\n${country.excerpt}\n\n`;
    }

    if (country.content) {
      md += `## Guide & Information\n`;
      const contentMd = convertHtmlToMarkdown(country.content, { baseUrl: 'https://thericetour.com' });
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
    console.error(`Error generating markdown for country ${slug}:`, error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
