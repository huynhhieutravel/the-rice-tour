# Module: Categories & Tags

## Pages

| Route | File | Chức năng |
|---|---|---|
| `/admin/categories` | `pages/admin/categories/index.astro` | Quản lý danh mục |
| `/admin/tags` | `pages/admin/tags/index.astro` | Quản lý thẻ |

---

## Categories

### Đặc điểm
- **Hierarchical** (có parent/child)
- Mỗi Post thuộc 1+ category (many-to-many qua `PostCategory`)
- Kế thừa từ WordPress taxonomy

### Database Schema

```sql
CREATE TABLE BlogCategory (
  id INTEGER PRIMARY KEY,
  wpId INTEGER,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,             -- ⚠️ TEXT THUẦN (no HTML)
  parentId INTEGER,             -- Hierarchical: parent category ID
  count INTEGER DEFAULT 0,      -- Number of posts
  createdAt TEXT
);

CREATE TABLE PostCategory (
  postId INTEGER,
  categoryId INTEGER,
  PRIMARY KEY (postId, categoryId),
  FOREIGN KEY (postId) REFERENCES Post(id),
  FOREIGN KEY (categoryId) REFERENCES BlogCategory(id)
);
```

### API Endpoints

| Method | Endpoint | Body / Params |
|---|---|---|
| `GET` | `/api/admin/categories` | Returns all categories with post count |
| `POST` | `/api/admin/categories` | `{ name, slug, description?, parentId? }` |
| `PATCH` | `/api/admin/categories/[id]` | `{ name?, slug?, description? }` |
| `DELETE` | `/api/admin/categories/[id]` | Fails if category has posts |

---

## Tags

### Đặc điểm
- **Flat** (không có parent/child)
- Mỗi Post có 0+ tags (many-to-many qua `PostTag`)

### Database Schema

```sql
CREATE TABLE Tag (
  id INTEGER PRIMARY KEY,
  wpId INTEGER,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,             -- ⚠️ TEXT THUẦN (no HTML)
  count INTEGER DEFAULT 0,
  createdAt TEXT
);

CREATE TABLE PostTag (
  postId INTEGER,
  tagId INTEGER,
  PRIMARY KEY (postId, tagId),
  FOREIGN KEY (postId) REFERENCES Post(id),
  FOREIGN KEY (tagId) REFERENCES Tag(id)
);
```

### API Endpoints

| Method | Endpoint | Body / Params |
|---|---|---|
| `GET` | `/api/admin/tags` | Returns all tags with post count |
| `POST` | `/api/admin/tags` | `{ name, slug, description? }` |
| `PATCH` | `/api/admin/tags/[id]` | `{ name?, slug?, description? }` |
| `DELETE` | `/api/admin/tags/[id]` | Fails if tag has posts |

---

## Relationship Integrity

> [!WARNING]
> Khi xóa Category hoặc Tag, phải kiểm tra:
> 1. Có Post nào đang dùng không? → Nếu có, từ chối xóa hoặc reassign
> 2. Category có child categories không? → Reassign children trước

### Kiểm tra orphan records
```sql
-- PostCategory mồ côi (post đã bị xóa)
SELECT * FROM PostCategory WHERE postId NOT IN (SELECT id FROM Post);

-- PostTag mồ côi
SELECT * FROM PostTag WHERE postId NOT IN (SELECT id FROM Post);
```

---
*Cập nhật: 2026-04-27*
