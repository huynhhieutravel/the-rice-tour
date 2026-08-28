# Module: Post Management

## Pages

| Route | File | Chức năng |
|---|---|---|
| `/admin/posts` | `pages/admin/posts/index.astro` | Danh sách bài viết |
| `/admin/posts/edit?id=X` | `pages/admin/posts/edit.astro` | Chỉnh sửa bài viết |
| `/admin/new` | `pages/admin/new.astro` | Tạo bài mới |
| `/preview-post/[slug]` | `pages/preview-post/[slug].astro` | Xem trước (draft) |
| `/[slug]` | `pages/[slug].astro` | Trang public |

## Post List (`/admin/posts`)

### Features
- **Tabs:** All / Published / Draft / Pending / Trash
- **Search:** Query by title (GET param `q`)
- **Filter:** Category (`category`), Elementor status (`elementor`)
- **Pagination:** 30/50/100 per page, page navigation
- **Bulk actions:** Delete, change status (via `/api/admin/posts/bulk`)

### URL Parameters
```
/admin/posts?status=published&q=hoa+đào&category=5&limit=50&page=2
```

## Post Editor (`/admin/posts/edit`)

### Architecture
```
edit.astro (Astro SSR)
  └── PostEditorWrapper.tsx (React, client:only="react")
        ├── TipTap Editor (ProseMirror)
        │   ├── StarterKit (paragraphs, headings, lists, etc.)
        │   ├── AlignableImage.ts     — Ảnh có alignment (left/center/right)
        │   ├── FaqBlock.ts           — FAQ accordion blocks
        │   ├── Iframe.ts             — Embed YouTube/Map
        │   ├── MediaCard.ts          — Card chọn ảnh từ Media Library
        │   └── WpGallery.ts          — Gallery grid (legacy support)
        ├── Sidebar: SEO fields, category, tags, featured image
        └── PostEditor.css (520 lines)
```

### Save Flow
1. User edit → TipTap generates JSON (ProseMirror doc)
2. Click Save → `PATCH /api/admin/posts/[id]`
3. API receives: `{ title, excerpt, content (JSON string), categoryId, tags[], status, featuredImage, seo }`
4. D1 UPDATE

## API Endpoints

### `GET /api/admin/posts/[id]`
Returns full post data including content JSON.

### `POST /api/admin/posts`
Create new post. Required: `title`, `slug`.

### `PATCH /api/admin/posts/[id]`
Update post. Any field optional.

### `DELETE /api/admin/posts/[id]`
Soft delete (set status = 'trash') or hard delete.

### `POST /api/admin/posts/bulk`
Bulk operations: `{ action: 'delete' | 'publish' | 'draft', ids: number[] }`

## Database Schema

```sql
CREATE TABLE Post (
  id INTEGER PRIMARY KEY,
  wpId INTEGER,               -- WordPress original ID
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,                -- ⚠️ TEXT THUẦN (no HTML)
  content TEXT,                -- JSON Block hoặc Elementor HTML
  featuredImage TEXT,          -- R2 public URL
  status TEXT DEFAULT 'draft', -- published | draft | pending | trash
  author TEXT,
  categoryId INTEGER,
  isElementor INTEGER DEFAULT 0,
  customSchema TEXT,           -- JSON-LD override
  readingTime INTEGER,
  createdAt TEXT,
  updatedAt TEXT,
  FOREIGN KEY (categoryId) REFERENCES BlogCategory(id)
);
```

---
*Cập nhật: 2026-04-27*
