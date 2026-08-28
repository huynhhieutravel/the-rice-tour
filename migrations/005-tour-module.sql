-- Migration 005: Create Tour Module Schema

-- Country Table
CREATE TABLE IF NOT EXISTS "Country" (
  "id" TEXT PRIMARY KEY,
  "slug" TEXT NOT NULL UNIQUE,
  "name" TEXT NOT NULL,
  "display_order" INTEGER DEFAULT 0
);

-- Tour Table
DROP TABLE IF EXISTS "Tour";
CREATE TABLE IF NOT EXISTS "Tour" (
  "id" TEXT PRIMARY KEY,
  "wp_id" INTEGER,
  "title" TEXT NOT NULL,
  "slug" TEXT NOT NULL UNIQUE,
  "country_slug" TEXT NOT NULL,
  "excerpt" TEXT,
  "price_number" INTEGER,
  "price_text" TEXT,
  "days" TEXT,
  "qr_link" TEXT,
  "raw_content" TEXT,
  "content" TEXT,
  "css_content" TEXT,
  "featuredImage" TEXT,
  "seoTitle" TEXT,
  "seoDescription" TEXT,
  "ogImage" TEXT,
  "canonical_url" TEXT,
  "status" TEXT DEFAULT 'draft',
  "publishedAt" DATETIME,
  "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME,
  "deletedAt" DATETIME,
  "updatedBy" TEXT
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS "idx_tour_slug" ON "Tour"("slug");
CREATE INDEX IF NOT EXISTS "idx_tour_country" ON "Tour"("country_slug");
CREATE INDEX IF NOT EXISTS "idx_tour_status" ON "Tour"("status");
