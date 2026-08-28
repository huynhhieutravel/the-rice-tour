import type { APIRoute } from 'astro';
import { generateRssFeed } from '../lib/feed';

export const prerender = false;

export const GET: APIRoute = async ({ site }) => {
  try {
    const siteUrl = site ? site.toString() : 'https://thericetour.com/';
    const feedUrl = new URL('feed.xml', siteUrl).href;
    
    const rss = await generateRssFeed(siteUrl, feedUrl);

    return new Response(rss, {
      status: 200,
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        // Caching aggressively: cache 30 minutes in browser, 30 minutes on edge, stale-while-revalidate 1 day
        'Cache-Control': 'public, max-age=1800, s-maxage=1800, stale-while-revalidate=86400'
      }
    });
  } catch (error) {
    console.error('Error generating RSS:', error);
    return new Response('Error generating RSS', { status: 500 });
  }
};
