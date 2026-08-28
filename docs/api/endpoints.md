# REST API Reference

Base URL: `/api`

## Admin APIs (`/api/admin/*`)

> Tất cả admin API đều có `export const prerender = false;`

### Posts

| Method | Endpoint | Body | Response |
|---|---|---|---|
| `GET` | `/api/admin/posts?page=1&limit=50&status=published&q=keyword` | — | `{ posts[], total, page, limit }` |
| `GET` | `/api/admin/posts/[id]` | — | `{ post }` |
| `POST` | `/api/admin/posts` | `{ title, slug, content, ... }` | `{ id, success }` |
| `PATCH` | `/api/admin/posts/[id]` | `{ title?, content?, status?, ... }` | `{ success }` |
| `DELETE` | `/api/admin/posts/[id]` | — | `{ success }` |
| `POST` | `/api/admin/posts/bulk` | `{ action, ids[] }` | `{ success, count }` |

### Media

| Method | Endpoint | Body | Response |
|---|---|---|---|
| `GET` | `/api/admin/media?page=1&limit=20&q=filename` | — | `{ media[], total }` |
| `PATCH` | `/api/media` | `{ id, altText?, title?, caption?, description? }` | `{ success }` |
| `POST` | `/api/admin/upload` | `FormData (file)` | `{ url, id }` |

### Categories

| Method | Endpoint | Body | Response |
|---|---|---|---|
| `GET` | `/api/admin/categories` | — | `{ categories[] }` |
| `POST` | `/api/admin/categories` | `{ name, slug, description?, parentId? }` | `{ id }` |
| `PATCH` | `/api/admin/categories/[id]` | `{ name?, slug?, description? }` | `{ success }` |
| `DELETE` | `/api/admin/categories/[id]` | — | `{ success }` |

### Tags

| Method | Endpoint | Body | Response |
|---|---|---|---|
| `GET` | `/api/admin/tags` | — | `{ tags[] }` |
| `POST` | `/api/admin/tags` | `{ name, slug, description? }` | `{ id }` |
| `PATCH` | `/api/admin/tags/[id]` | `{ name?, slug?, description? }` | `{ success }` |
| `DELETE` | `/api/admin/tags/[id]` | — | `{ success }` |

### Migration

| Method | Endpoint | Chức năng |
|---|---|---|
| `POST` | `/api/admin/migration/sync-media` | Sync media from WordPress |
| `POST` | `/api/admin/migration/sync-posts` | Sync posts from WordPress |
| `POST` | `/api/admin/migration/sync-taxonomies` | Sync categories & tags |

## Public APIs (`/api/*`)

| Method | Endpoint | Chức năng |
|---|---|---|
| `GET` | `/api/posts?page=1&limit=10&category=slug` | Public post list |

## D1 Access Pattern

```typescript
import { env } from 'cloudflare:workers';
export const prerender = false;

export const GET = async ({ request }) => {
  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return new Response('No D1', { status: 500 });

  const { results } = await d1Db.prepare("SELECT * FROM Post WHERE status = 'published' LIMIT ?").bind(10).all();
  return new Response(JSON.stringify(results));
};
```

---
*Cập nhật: 2026-04-27*
