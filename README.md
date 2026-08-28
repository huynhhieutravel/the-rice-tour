# Dulichcoguu — Astro CMS

High-performance travel blog & CMS built with **Astro SSR** + **Cloudflare Workers** + **D1** + **R2**.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Astro v6 (SSR) |
| Admin UI | React 19 + TipTap Editor |
| Database | Cloudflare D1 (SQLite) |
| Storage | Cloudflare R2 (S3-compatible) |
| Runtime | Cloudflare Workers |
| CSS | Tailwind v4 + Vanilla CSS |
| Domain | fittour.vn (staging) / fittour.vn (production) |

## Quick Start

```bash
npm install
npm run dev          # Local dev server
npm run build        # Production build
npm run deploy       # Build + clean + deploy to Workers
```

## Project Structure

```
src/
├── components/
│   ├── admin/          # React: PostEditor, MediaPicker, TipTap extensions
│   ├── blog/           # Astro: AuthorBox, TOC, ShareButtons, BlockRenderer
│   ├── layout/         # Header, Footer
│   ├── seo/            # HeadMeta, JsonLdSchema, ResourceHints
│   ├── tour/           # TourCard
│   └── ui/             # Button, Skeleton, ThemeToggle
├── layouts/
│   ├── BaseLayout.astro    # HTML shell
│   ├── BlogLayout.astro    # Article template + GLightbox
│   └── AdminLayout.astro   # Admin dashboard shell
├── pages/
│   ├── [slug].astro        # Public post page
│   ├── admin/              # CMS dashboard
│   └── api/                # REST API endpoints
├── styles/
│   ├── global.css          # System layout, gallery grid
│   └── blog.css            # Prose typography, article styling
├── lib/                    # seoEngine, normalizeContent, imageOptimization
└── types/cms.ts            # TypeScript interfaces
```

## Documentation

All documentation is in the [`docs/`](docs/) folder:

| Folder | Nội dung |
|---|---|
| [`docs/architecture/`](docs/architecture/) | Kiến trúc hệ thống, data flow, rendering pipeline |
| [`docs/css/`](docs/css/) | Design system, CSS classes, component styling |
| [`docs/modules/`](docs/modules/) | Admin modules: Posts, Media, Categories, Tags |
| [`docs/api/`](docs/api/) | REST API endpoints reference |
| [`docs/migration/`](docs/migration/) | WordPress migration SOP, bug chain analysis |
| [`docs/operations/`](docs/operations/) | Deploy, QA checklist, troubleshooting |

## Deploy

```bash
npm run build && find ./dist -name "._*" -type f -delete && npx wrangler deploy
```

---

**Repository:** [huynhhieutravel/dulichcoguu-astro-cms](https://github.com/huynhhieutravel/dulichcoguu-astro-cms)
