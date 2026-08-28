# Kiến Trúc Tổng Quan

## Sơ đồ hệ thống

```
┌─────────────┐     ┌──────────────────┐     ┌────────────┐
│  Browser    │────▶│ Cloudflare Worker │────▶│ D1 (SQLite)│
│  (User)     │◀────│ (Astro SSR)      │────▶│ R2 (S3)    │
└─────────────┘     └──────────────────┘     └────────────┘
```

## Data Flow

### Public Page Request (`/[slug]`)
1. Browser request → Cloudflare Worker
2. Worker chạy Astro SSR → query D1 (`Post`, `BlogCategory`, `Tag`)
3. Render HTML:
   - **JSON Block content** → `BlockRenderer.astro` (semantic HTML)
   - **Elementor content** → Raw HTML + client-side restoration script
4. Response trả về HTML hoàn chỉnh (no client hydration cho blog)

### Admin Page (`/admin/*`)
1. Astro SSR render shell (`AdminLayout.astro`)
2. React components hydrate client-side (`client:only="react"`)
3. Client gọi REST API (`/api/admin/*`) → Workers → D1/R2

## Tech Stack Chi Tiết

| Layer | Technology | Version | Ghi chú |
|---|---|---|---|
| Framework | Astro | v6.x | SSR mode, không dùng @astrojs/db |
| Adapter | @astrojs/cloudflare | latest | `platformProxy: { enabled: true }` |
| Admin UI | React | v19 | Chỉ dùng `client:only="react"` |
| Editor | TipTap | v2.x | ProseMirror-based, custom extensions |
| CSS | Tailwind | v4 | CSS-first config (không có tailwind.config.js) |
| Lightbox | GLightbox | CDN | Dynamic load, `is:inline` script |
| Database | Cloudflare D1 | - | Binding: `dulichcoguu_d1` |
| Storage | Cloudflare R2 | - | Binding: `dulichcoguu_r2` |
| Deploy | Wrangler | v4.x | `wrangler deploy` |

## Layouts Hierarchy

```
BaseLayout.astro
├── Slots: schema (→<head>), default (→<body>)
├── Components: Header, Footer, ThemeToggle
│
├── BlogLayout.astro (extends BaseLayout)
│   ├── Slots: default (article content)
│   ├── Components: TOC, AuthorBox, RelatedPosts, ShareButtons
│   ├── Inline scripts: GLightbox init
│   └── CSS: blog.css
│
└── AdminLayout.astro (extends BaseLayout)
    ├── Props: activeMenu, activeSubmenu, hideSidebar
    └── Sidebar navigation (Posts, Media, Categories, Tags, Tools)
```

## Environment

| Env | Domain | Ghi chú |
|---|---|---|
| Local | localhost:4321 | `npm run dev` |
| Staging | fittour.vn | Cloudflare Worker (same D1/R2 as prod) |
| Production | fittour.vn | Chưa chuyển traffic |

---
*Cập nhật: 2026-04-27*
