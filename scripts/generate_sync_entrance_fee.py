import json
import re

md_path = "content-pipeline/04-english/cu-chi-tunnels-entrance-fee-and-opening-hours.md"
with open(md_path, "r", encoding="utf-8") as f:
    text = f.read()

# Strip frontmatter
if text.startswith("---"):
    parts = text.split("---", 2)
    body = parts[2].strip() if len(parts) > 2 else text
else:
    body = text

# Quick converter to semantic HTML for CMS Post.content
lines = body.split("\n")
html_parts = []
in_list = False
in_table = False

def format_inline(val: str) -> str:
    val = re.sub(r"\[(.*?)\]\((.*?)\)", r'<a href="\2">\1</a>', val)
    val = re.sub(r"\*\*(.*?)\*\*", r"<strong>\1</strong>", val)
    val = re.sub(r"\*(.*?)\*", r"<em>\1</em>", val)
    return val

for line in lines:
    stripped = line.strip()
    if not stripped:
        if in_list:
            html_parts.append("</ul>")
            in_list = False
        continue

    # Horizontal rule
    if stripped in ["---", "***", "___"]:
        if in_list:
            html_parts.append("</ul>")
            in_list = False
        html_parts.append("<hr />")
        continue

    # Blockquote
    if stripped.startswith(">"):
        quote_text = stripped.lstrip("> ").strip()
        quote_text = format_inline(quote_text)
        html_parts.append(f"<blockquote><p>{quote_text}</p></blockquote>")
        continue

    # Headings
    if stripped.startswith("# "):
        html_parts.append(f"<h1>{stripped[2:].strip()}</h1>")
        continue
    elif stripped.startswith("## "):
        html_parts.append(f"<h2>{stripped[3:].strip()}</h2>")
        continue
    elif stripped.startswith("### "):
        html_parts.append(f"<h3>{stripped[4:].strip()}</h3>")
        continue
    elif stripped.startswith("#### "):
        html_parts.append(f"<h4>{stripped[5:].strip()}</h4>")
        continue

    # Unordered list
    if stripped.startswith("- ") or stripped.startswith("* "):
        if not in_list:
            html_parts.append("<ul>")
            in_list = True
        item = format_inline(stripped[2:].strip())
        html_parts.append(f"<li>{item}</li>")
        continue
    else:
        if in_list:
            html_parts.append("</ul>")
            in_list = False

    # Table lines
    if "|" in stripped:
        cells = [c.strip() for c in stripped.split("|")[1:-1]]
        if all(re.match(r"^:?-+:?$", c) for c in cells if c):
            continue
        cleaned_cells = [format_inline(c) for c in cells]
        row_html = "".join(f"<td>{c}</td>" for c in cleaned_cells)
        html_parts.append(f"<tr>{row_html}</tr>")
        continue

    # Regular paragraph
    p = format_inline(stripped)
    html_parts.append(f"<p>{p}</p>")

if in_list:
    html_parts.append("</ul>")

raw_html = "\n".join(html_parts)
raw_html_escaped = json.dumps(raw_html)

endpoint_code = f"""import type {{ APIRoute }} from 'astro';
import {{ env }} from 'cloudflare:workers';

export const prerender = false;

const articleHtml = {raw_html_escaped};

export const GET: APIRoute = async () => {{
  const d1Db = (env as any)?.dulichcoguu_d1 || (env as any)?.thericetour_d1 || (env as any)?.DB;
  if (!d1Db) {{
    return new Response(JSON.stringify({{ error: 'No D1 database binding found' }}), {{
      status: 500,
      headers: {{ 'Content-Type': 'application/json' }},
    }});
  }}

  try {{
    const slug = 'cu-chi-tunnels-entrance-fee-and-opening-hours';
    const title = 'Cu Chi Tunnels Entrance Fee & Opening Hours 2026 — Verified Prices';
    const excerpt = 'The verified guide to Cu Chi Tunnels entrance fees and opening hours in 2026: official 135,000 VND tariff, Ben Dinh vs. Ben Duoc costs, guide services, and visit budgeting.';
    const featuredImage = 'https://media.thericetour.com/uploads/tourists-check-in-cu-chi-ben-dinh-historic-site-the-rice.webp';
    const author = 'The Rice Tour Editorial';
    const now = new Date().toISOString();

    // Check if post already exists
    let post = await d1Db.prepare('SELECT id, slug, title FROM Post WHERE slug = ?').bind(slug).first<any>();
    let postId = post?.id;

    if (!postId) {{
      const maxRow = await d1Db.prepare('SELECT COALESCE(MAX(CAST(id AS INTEGER)), 20000) + 1 AS nextId FROM Post').first<any>();
      postId = String(maxRow?.nextId || 20002);

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

      if (categoryId) {{
        try {{
          await d1Db.prepare('INSERT OR IGNORE INTO PostCategory (postId, categoryId) VALUES (?, ?)').bind(postId, categoryId).run();
        }} catch (e) {{}}
      }}
    }} else {{
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
      `).bind(
        title, featuredImage, excerpt, articleHtml,
        author, now, postId
      ).run();
    }}

    return new Response(JSON.stringify({{
      success: true,
      message: 'Post successfully synchronized with full HTML content into Cloudflare D1 CMS database',
      post: {{
        id: String(postId),
        title,
        slug,
        status: 'published',
        author,
        format: 'landing',
        contentLength: articleHtml.length,
        updatedAt: now
      }},
      adminEditUrl: `/admin/posts/edit?id=${{postId}}`
    }}, null, 2), {{
      status: 200,
      headers: {{ 'Content-Type': 'application/json' }},
    }});
  }} catch (error: any) {{
    return new Response(JSON.stringify({{
      success: false,
      error: error.message || String(error)
    }}, null, 2), {{
      status: 500,
      headers: {{ 'Content-Type': 'application/json' }},
    }});
  }}
}};
"""

with open("src/pages/api/sync-cuchi-entrance-fee-post.ts", "w", encoding="utf-8") as f:
    f.write(endpoint_code)

print("Created src/pages/api/sync-cuchi-entrance-fee-post.ts successfully!")
