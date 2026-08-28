DROP TABLE IF EXISTS Page;

CREATE TABLE Page (
    id TEXT PRIMARY KEY,
    wp_id INTEGER UNIQUE,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    status TEXT NOT NULL DEFAULT 'published',
    featuredImage TEXT,
    raw_content TEXT,
    content TEXT,
    css_content TEXT,
    seoTitle TEXT,
    seoDescription TEXT,
    ogImage TEXT,
    publishedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_page_slug ON Page(slug);
CREATE INDEX idx_page_status ON Page(status);
