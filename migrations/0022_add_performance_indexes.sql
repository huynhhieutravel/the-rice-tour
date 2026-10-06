-- Migration 0022: High-Performance Composite Indexes to Eliminate D1 Full Table Scans

-- 1. Post: Fast sorting by createdAt for published posts (used in Homepage Journal, Category posts, Sitemap, Search, Recent Posts)
CREATE INDEX IF NOT EXISTS idx_post_status_created ON Post(status, createdAt DESC);

-- 2. Post: Fast category filtering + sorting (used in Category listing and Related Posts)
CREATE INDEX IF NOT EXISTS idx_post_category_status_created ON Post(categoryId, status, createdAt DESC);

-- 3. Post: Fast lookup by slug and status (used in [...slug].astro)
CREATE INDEX IF NOT EXISTS idx_post_slug_status ON Post(slug, status);

-- 4. Tour: Fast sorting by price and status (used in Homepage InboundFeaturedTours)
CREATE INDEX IF NOT EXISTS idx_tour_status_price ON Tour(status, price_number ASC);

-- 5. Tour: Fast sorting by createdAt and status (used in Tours listing)
CREATE INDEX IF NOT EXISTS idx_tour_status_created ON Tour(status, createdAt DESC);

-- 6. Page: Fast lookup by slug and status (used in [...slug].astro fallback)
CREATE INDEX IF NOT EXISTS idx_page_slug_status ON Page(slug, status);

-- 7. Popup: Fast filtering active popups (used in /api/popups/active)
CREATE INDEX IF NOT EXISTS idx_popup_active_created ON Popup(is_active, created_at DESC);
