# Deploy & Operations

## Build & Deploy

```bash
# Development
npm run dev                    # Astro dev server (localhost:4321)

# Production Deploy
npm run build                  # Build Astro → dist/
find ./dist -name "._*" -type f -delete   # Remove macOS dot files
npx wrangler deploy            # Deploy to Cloudflare Workers
```

> [!WARNING]
> Bước `find ./dist -name "._*"` là BẮT BUỘC trên macOS. Nếu thiếu → Worker sẽ crash với `SyntaxError` do đọc file `._*` binary.

## Wrangler Config

**File:** `wrangler.json`

```json
{
  "name": "dulichcoguu-frontend",
  "main": "dist/_worker.js",
  "compatibility_date": "2025-04-01",
  "d1_databases": [{
    "binding": "dulichcoguu_d1",
    "database_name": "dulichcoguu-d1",
    "database_id": "3874bca8-7df1-45af-ada4-5eb609440401"
  }],
  "r2_buckets": [{
    "binding": "dulichcoguu_r2",
    "bucket_name": "dulichcoguu-r2"
  }],
  "routes": [{ "pattern": "fittour.vn/*", "custom_domain": true }],
  "assets": { "directory": "dist/client/" }
}
```

## Cache Bypass (Staging)

Cloudflare cache rất aggressive. Khi test thay đổi trên staging:
- Thêm query string: `?v=test1`, `?nocache=1`
- Hoặc Cmd+Shift+R (hard refresh)

## Chunk Size Warning

Build sẽ hiện warning `worker-entry ~1MB`. Đây là bình thường cho project nhiều pages. Chưa cần optimize.

---

# QA Checklist

## Pre-Deploy (trước khi deploy)

- [ ] `npm run build` thành công, không có error
- [ ] Kiểm tra console log không có error nghiêm trọng

## Post-Deploy (sau khi deploy)

### Data Integrity
```sql
-- HTML contamination
SELECT COUNT(*) FROM Post WHERE excerpt LIKE '%<%';
SELECT COUNT(*) FROM Media WHERE caption LIKE '%<%';
SELECT COUNT(*) FROM Media WHERE description LIKE '%<%';

-- Empty critical fields
SELECT COUNT(*) FROM Post WHERE title IS NULL OR TRIM(title) = '';
SELECT COUNT(*) FROM Media WHERE url IS NULL OR TRIM(url) = '';

-- Old domain references
SELECT COUNT(*) FROM Media WHERE url LIKE '%fittour.vn%';
SELECT COUNT(*) FROM Post WHERE content LIKE '%fittour.vn/wp-content%';

-- Relational integrity
SELECT COUNT(*) FROM PostCategory WHERE postId NOT IN (SELECT id FROM Post);
SELECT COUNT(*) FROM PostTag WHERE postId NOT IN (SELECT id FROM Post);

-- Duplicate slugs
SELECT slug, COUNT(*) as c FROM Post GROUP BY slug HAVING c > 1;
```

### Frontend
- [ ] Homepage loads correctly
- [ ] Post detail page renders (both JSON Block and Elementor content)
- [ ] Lightbox: click ảnh → fullscreen, arrows, zoom, close
- [ ] Share link: meta description sạch (no HTML tags)
- [ ] Admin dashboard: login, post list, media library
- [ ] Mobile responsive

---
*Cập nhật: 2026-04-27*
