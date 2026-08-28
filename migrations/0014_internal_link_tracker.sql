-- 0014_internal_link_tracker.sql

CREATE TABLE IF NOT EXISTS InternalLinkTracker (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sourceUrl TEXT NOT NULL,
    targetUrl TEXT NOT NULL,
    anchorText TEXT NOT NULL,
    type TEXT DEFAULT 'auto',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tạo Index để tối ưu tìm kiếm theo sourceUrl (Outbound) và targetUrl (Inbound/Backlinks)
CREATE INDEX IF NOT EXISTS idx_ilt_source ON InternalLinkTracker(sourceUrl);
CREATE INDEX IF NOT EXISTS idx_ilt_target ON InternalLinkTracker(targetUrl);
