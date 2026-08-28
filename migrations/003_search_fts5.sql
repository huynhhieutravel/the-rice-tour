-- =====================================================
-- Step 1: Tạo FTS5 Virtual Table cho Search
-- =====================================================

-- Tạo bảng FTS5 (chỉ index title + excerpt, KHÔNG index content nặng)
CREATE VIRTUAL TABLE IF NOT EXISTS post_fts USING fts5(
  title, 
  excerpt, 
  content='Post',
  content_rowid='id'
);

-- Đổ dữ liệu hiện có vào FTS (757 bài published)
INSERT INTO post_fts(rowid, title, excerpt) 
  SELECT id, title, COALESCE(excerpt, '') FROM Post WHERE status = 'published';

-- Trigger đồng bộ khi INSERT
CREATE TRIGGER IF NOT EXISTS post_fts_insert AFTER INSERT ON Post 
WHEN new.status = 'published'
BEGIN
  INSERT INTO post_fts(rowid, title, excerpt) VALUES (new.id, new.title, COALESCE(new.excerpt, ''));
END;

-- Trigger đồng bộ khi UPDATE
CREATE TRIGGER IF NOT EXISTS post_fts_update AFTER UPDATE ON Post BEGIN
  DELETE FROM post_fts WHERE rowid = old.id;
  INSERT OR IGNORE INTO post_fts(rowid, title, excerpt) 
    SELECT new.id, new.title, COALESCE(new.excerpt, '') WHERE new.status = 'published';
END;

-- Trigger đồng bộ khi DELETE
CREATE TRIGGER IF NOT EXISTS post_fts_delete AFTER DELETE ON Post BEGIN
  DELETE FROM post_fts WHERE rowid = old.id;
END;

-- =====================================================
-- Step 2: Thêm priority vào BlogCategory
-- =====================================================

ALTER TABLE BlogCategory ADD COLUMN priority INTEGER DEFAULT 0;

-- Set ưu tiên mẫu (sẽ điều chỉnh khi có Tour)
UPDATE BlogCategory SET priority = 90 WHERE slug = 'kham-pha';
UPDATE BlogCategory SET priority = 80 WHERE slug = 'emegazine';
UPDATE BlogCategory SET priority = 70 WHERE slug = 'review-du-lich';
UPDATE BlogCategory SET priority = 60 WHERE slug = 'cau-chuyen-du-lich';
UPDATE BlogCategory SET priority = 50 WHERE slug = 'blog';
UPDATE BlogCategory SET priority = 40 WHERE slug = 'tin-tuc-du-lich';
UPDATE BlogCategory SET priority = 30 WHERE slug = 'gallery';
UPDATE BlogCategory SET priority = 20 WHERE slug = 'photo-story';
UPDATE BlogCategory SET priority = 10 WHERE slug = 'hanh-trinh-doanh-nghiep';
