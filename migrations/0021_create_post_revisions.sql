-- Migration: Create PostRevision Table for Version History & Diffing
CREATE TABLE IF NOT EXISTS PostRevision (
    id TEXT PRIMARY KEY,
    postId TEXT NOT NULL,
    title TEXT NOT NULL,
    slug TEXT,
    content TEXT NOT NULL,
    contentFormat TEXT DEFAULT 'json',
    format TEXT DEFAULT 'standard',
    excerpt TEXT,
    featuredImage TEXT,
    seoTitle TEXT,
    seoDescription TEXT,
    canonicalUrl TEXT,
    focusKeyword TEXT,
    authorId TEXT,
    authorName TEXT,
    savedBy TEXT,
    revisionType TEXT DEFAULT 'manual',
    wordCount INTEGER DEFAULT 0,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_post_revision_post ON PostRevision(postId, createdAt DESC);
