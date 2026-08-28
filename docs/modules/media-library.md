# Module: Media Library

## Page

| Route | File | Chức năng |
|---|---|---|
| `/admin/media` | `pages/admin/media/index.astro` | Thư viện ảnh |

## Features

- **Grid view:** Thumbnail grid với info (filename, size, dimensions)
- **Search:** Tìm theo filename
- **Detail panel:** Click ảnh → hiện sidebar chỉnh sửa metadata
- **Stats bar:** Tổng Images, Documents, Videos, Used storage

## Metadata Fields

| Field | DB Column | Ghi chú |
|---|---|---|
| Title | `title` | Tên ảnh |
| Alt Text (SEO) | `altText` | Mô tả cho SEO |
| Caption | `caption` | ⚠️ TEXT THUẦN — dùng làm lightbox description |
| Description | `description` | ⚠️ TEXT THUẦN |

> [!CAUTION]
> Caption và description PHẢI là text thuần, KHÔNG chứa HTML tags. Migration script từ WordPress đã strip HTML — xem [`../migration/sop.md`](../migration/sop.md) bước 4.3.

## API Endpoints

### `GET /api/admin/media`
```
?page=1&limit=20&q=search_term&type=image
```
Returns paginated media list.

### `PATCH /api/media`
Update metadata: `{ id, altText?, title?, caption?, description? }`

### `POST /api/admin/upload`
Upload file to R2. Returns R2 public URL.

## Database Schema

```sql
CREATE TABLE Media (
  id INTEGER PRIMARY KEY,
  wpId INTEGER,
  url TEXT NOT NULL,            -- R2 public URL
  slug TEXT,
  filename TEXT,
  title TEXT,
  altText TEXT,                 -- SEO alt text
  caption TEXT,                 -- ⚠️ TEXT THUẦN
  description TEXT,             -- ⚠️ TEXT THUẦN
  mimeType TEXT,
  width INTEGER,
  height INTEGER,
  fileSize INTEGER,
  createdAt TEXT
);
```

## Upload Flow

```
User selects file
    │
    ▼
POST /api/admin/upload
    │
    ├── Validate file type & size
    ├── Generate R2 key: wp-content/uploads/{year}/{month}/{filename}
    ├── Upload to R2 bucket (dulichcoguu_r2)
    ├── Insert record into D1 Media table
    └── Return { url, id }
```

---
*Cập nhật: 2026-04-27*
