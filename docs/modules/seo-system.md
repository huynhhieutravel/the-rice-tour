# Module: SEO System

## Components

| Component | File | Chức năng |
|---|---|---|
| `HeadMeta` | `components/seo/HeadMeta.astro` | `<meta>` tags (title, description, OG, Twitter) |
| `JsonLdSchema` | `components/seo/JsonLdSchema.astro` | Schema.org structured data |
| `ResourceHints` | `components/seo/ResourceHints.astro` | Preconnect, prefetch |
| `seoEngine` | `lib/seoEngine.ts` | Auto-generate meta from post data |

## HeadMeta Props

```typescript
interface Props {
  title: string;
  description: string;
  image?: string;         // OG image URL
  url?: string;           // Canonical URL
  type?: 'article' | 'website';
  publishDate?: string;
  modifiedDate?: string;
}
```

## SEO Engine (`lib/seoEngine.ts`)

Auto-generates from Post data:
- **Title:** `{post.title} | Du Lịch Có Guu`
- **Description:** `post.excerpt` (cắt ≤160 chars)
- **OG Image:** `post.featuredImage`
- **Schema:** Article / BlogPosting / TravelAction

> [!WARNING]
> `post.excerpt` PHẢI là text thuần. Nếu chứa HTML tags → social sharing preview sẽ hiện `<p>...</p>`.

## Sitemap

**File:** `pages/sitemap-blog.xml.ts`

Dynamic XML sitemap, query tất cả published posts từ D1:
```xml
<url>
  <loc>https://fittour.vn/{slug}</loc>
  <lastmod>{updatedAt}</lastmod>
  <changefreq>weekly</changefreq>
</url>
```

---
*Cập nhật: 2026-04-27*
