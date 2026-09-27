import json
import re

with open('content-pipeline/04-english/how-far-are-the-cu-chi-tunnels-from-ho-chi-minh-city.md', 'r') as f:
    raw_md = f.read()

parts = raw_md.split('---', 2)
body = parts[2].strip() if len(parts) >= 3 else raw_md

lines = body.split('\n')
html_lines = []
in_list = False

for line in lines:
    line_s = line.strip()
    if not line_s:
        if in_list:
            html_lines.append('</ul>')
            in_list = False
        continue
    
    if line_s.startswith('# '):
        html_lines.append(f'<h1>{line_s[2:]}</h1>')
    elif line_s.startswith('## '):
        html_lines.append(f'<h2>{line_s[3:]}</h2>')
    elif line_s.startswith('### '):
        html_lines.append(f'<h3>{line_s[4:]}</h3>')
    elif line_s.startswith('![') and '](' in line_s:
        m = re.match(r'!\[(.*?)\]\((.*?)\)', line_s)
        if m:
            alt, src = m.groups()
            html_lines.append(f'<figure><img src="{src}" alt="{alt}" /></figure>')
    elif line_s.startswith('*') and line_s.endswith('*'):
        html_lines.append(f'<p><em>{line_s[1:-1]}</em></p>')
    elif line_s.startswith('- '):
        if not in_list:
            html_lines.append('<ul>')
            in_list = True
        html_lines.append(f'<li>{line_s[2:]}</li>')
    elif line_s.startswith('|') and line_s.endswith('|'):
        if '---' in line_s:
            continue
        cells = [c.strip() for c in line_s.split('|')[1:-1]]
        cell_tags = ''.join(f'<td>{c}</td>' for c in cells)
        html_lines.append(f'<tr>{cell_tags}</tr>')
    else:
        if in_list:
            html_lines.append('</ul>')
            in_list = False
        html_lines.append(f'<p>{line_s}</p>')

if in_list:
    html_lines.append('</ul>')

full_html = '\n'.join(html_lines)

template = """import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

const articleHtml = __ARTICLE_HTML__;

export const GET: APIRoute = async () => {
  const d1Db = (env as any)?.dulichcoguu_d1 || (env as any)?.thericetour_d1 || (env as any)?.DB;
  if (!d1Db) {
    return new Response(JSON.stringify({ error: 'No D1 database binding found' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const slug = 'how-far-are-the-cu-chi-tunnels-from-ho-chi-minh-city';
    const title = 'How Far Are The Cu Chi Tunnels From Ho Chi Minh City? Distance & Travel Times (2026)';
    const excerpt = 'A realistic guide to road distances, travel times, transport options, and door-to-door itinerary planning from Ho Chi Minh City to the Cu Chi Tunnels.';
    const featuredImage = 'https://media.thericetour.com/uploads/tour-group-listening-briefing-underground-hall-cu-chi-tunnels.webp';
    const author = 'The Rice Tour Editorial';
    const now = new Date().toISOString();

    // Check if post already exists
    let post = await d1Db.prepare('SELECT id, slug, title FROM Post WHERE slug = ?').bind(slug).first<any>();
    let postId = post?.id;

    if (!postId) {
      const maxRow = await d1Db.prepare('SELECT COALESCE(MAX(CAST(id AS INTEGER)), 20000) + 1 AS nextId FROM Post').first<any>();
      postId = String(maxRow?.nextId || 20001);

      const cat = await d1Db.prepare("SELECT id FROM BlogCategory WHERE slug IN ('travel-guides', 'guides', 'cam-nang-du-lich') OR name LIKE '%Travel%' LIMIT 1").first<any>();
      const categoryId = cat?.id || null;

      await d1Db.prepare(`
        INSERT INTO Post (
          id, title, slug, categoryId, featuredImage, excerpt, content, type, status,
          format, contentFormat, author, isElementor, createdAt, updatedAt, publishedAt
        ) VALUES (
          ?, ?, ?, ?, ?, ?, ?, 'blog', 'published',
          'landing', 'html', ?, 0, ?, ?, ?
        )
      `).bind(
        postId, title, slug, categoryId, featuredImage, excerpt, articleHtml,
        author, '2026-09-27T08:00:00.000Z', now, '2026-09-27T08:00:00.000Z'
      ).run();

      if (categoryId) {
        try {
          await d1Db.prepare('INSERT OR IGNORE INTO PostCategory (postId, categoryId) VALUES (?, ?)').bind(postId, categoryId).run();
        } catch (e) {}
      }
    } else {
      await d1Db.prepare(`
        UPDATE Post SET
          title = ?,
          featuredImage = ?,
          excerpt = ?,
          content = ?,
          status = 'published',
          format = 'landing',
          contentFormat = 'html',
          author = ?,
          updatedAt = ?
        WHERE id = ?
      `).bind(title, featuredImage, excerpt, articleHtml, author, now, postId).run();
    }

    const verified = await d1Db.prepare('SELECT id, title, slug, status, author, format, length(content) as contentLength, updatedAt FROM Post WHERE id = ?').bind(postId).first<any>();

    return new Response(JSON.stringify({
      success: true,
      message: 'Post successfully synchronized with full HTML content into Cloudflare D1 CMS database',
      post: verified,
      adminEditUrl: `/admin/posts/edit?id=${postId}`
    }, null, 2), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({
      success: false,
      error: err.message || err.toString()
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
"""

final_ts = template.replace('__ARTICLE_HTML__', json.dumps(full_html))
with open('src/pages/api/sync-cuchi-distance-post.ts', 'w') as out:
    out.write(final_ts)

print("Done generating sync-cuchi-distance-post.ts")
