CREATE TABLE IF NOT EXISTS "Trip" (
  "id" TEXT PRIMARY KEY,
  "title" TEXT NOT NULL,
  "slug" TEXT NOT NULL UNIQUE,
  "departureCode" TEXT,
  "layout" TEXT DEFAULT 'default',
  "featuredImage" TEXT,
  "content" TEXT,
  "faqs" TEXT,
  "status" TEXT DEFAULT 'published',
  "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME
);
