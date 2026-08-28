CREATE TABLE IF NOT EXISTS Link (
  slug TEXT PRIMARY KEY,
  label TEXT NOT NULL,
  url TEXT NOT NULL,
  statusCode INTEGER DEFAULT 302,
  target TEXT DEFAULT '_blank',
  rel TEXT DEFAULT 'nofollow sponsored',
  isActive INTEGER DEFAULT 1,
  createdAt TEXT DEFAULT (datetime('now'))
);

INSERT INTO Link (slug, label, url, statusCode, target, rel, isActive, createdAt) VALUES 
('fb', 'Facebook Chính', 'https://www.facebook.com/fittour.com.vn', 302, '_blank', 'nofollow sponsored', 1, datetime('now')),
('zalo', 'Zalo Hotline', 'https://zalo.me/0934888854', 302, '_blank', 'nofollow sponsored', 1, datetime('now')),
('msg', 'Messenger', 'https://m.me/fittour.com.vn', 302, '_blank', 'nofollow sponsored', 1, datetime('now')),
('zalo-thinh', 'Zalo Lead team BU1', 'https://zalo.me/0902159652', 302, '_blank', 'nofollow sponsored', 1, datetime('now')),
('map', 'Google Maps', 'https://goo.gl/maps/TQygUv7iq8s3umnv8', 302, '_blank', 'nofollow sponsored', 1, datetime('now')),
('zalofit', 'Zalo Admin Fit Tour', 'https://zalo.me/0836999909', 302, '_blank', 'nofollow sponsored', 1, datetime('now'))
ON CONFLICT(slug) DO UPDATE SET 
label=excluded.label, url=excluded.url, statusCode=excluded.statusCode, 
target=excluded.target, rel=excluded.rel, isActive=excluded.isActive;
