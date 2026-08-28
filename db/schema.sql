-- ==============================================================================
-- THE RICE TOUR - CLOUDFLARE D1 DATABASE SCHEMA
-- ==============================================================================

-- 1. Users / Admins (Authentication & IAM)
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    displayName TEXT DEFAULT 'The Rice Tour Admin',
    avatar TEXT,
    url TEXT,
    bio TEXT,
    role TEXT DEFAULT 'admin',
    is_active INTEGER DEFAULT 1,
    failed_login_attempts INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    last_login_at DATETIME
);

CREATE VIEW IF NOT EXISTS User AS 
SELECT 
    id, 
    username, 
    username AS slug,
    email, 
    password_hash AS passwordHash, 
    displayName, 
    displayName AS name,
    avatar, 
    url, 
    bio, 
    bio AS author_snippet,
    role, 
    CASE WHEN is_active=1 THEN 'active' ELSE 'inactive' END AS status, 
    created_at AS createdAt, 
    last_login_at AS updatedAt 
FROM users;

-- 2. Destinations / Regions (Mapped as Country in schema)
CREATE TABLE IF NOT EXISTS Country (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    continent TEXT DEFAULT 'Asia',
    featuredImage TEXT,
    bannerImage TEXT,
    description TEXT,
    bestTimeToVisit TEXT,
    visaRequirement TEXT,
    currency TEXT DEFAULT 'USD',
    metaTitle TEXT,
    metaDescription TEXT,
    display_order INTEGER DEFAULT 0,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS TourCountry (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tour_id TEXT NOT NULL,
    country_slug TEXT NOT NULL,
    display_order INTEGER DEFAULT 0
);
CREATE INDEX IF NOT EXISTS idx_tour_country_tour ON TourCountry(tour_id);
CREATE INDEX IF NOT EXISTS idx_tour_country_country ON TourCountry(country_slug);

-- 3. Tour Table
CREATE TABLE IF NOT EXISTS Tour (
    id TEXT PRIMARY KEY,
    wp_id INTEGER,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    country_slug TEXT NOT NULL,
    excerpt TEXT,
    price_number INTEGER,        -- Price in USD (e.g. 1450)
    price_text TEXT,              -- Formatted (e.g. "$1,450 USD")
    days TEXT,                    -- Duration (e.g. "14 Days / 13 Nights")
    qr_link TEXT,
    raw_content TEXT,
    content TEXT,
    css_content TEXT,
    featuredImage TEXT,
    seoTitle TEXT,
    seoDescription TEXT,
    ogImage TEXT,
    canonical_url TEXT,
    status TEXT DEFAULT 'published',
    format TEXT DEFAULT 'standard',
    badge TEXT,
    publishedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    deletedAt DATETIME,
    updatedBy TEXT
);

CREATE INDEX IF NOT EXISTS idx_tour_slug ON Tour(slug);
CREATE INDEX IF NOT EXISTS idx_tour_country ON Tour(country_slug);
CREATE INDEX IF NOT EXISTS idx_tour_status ON Tour(status);

-- 4. Blog Categories
CREATE TABLE IF NOT EXISTS BlogCategory (
    id TEXT PRIMARY KEY,
    wp_id INTEGER,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    parentId TEXT,
    count INTEGER DEFAULT 0,
    priority INTEGER DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_category_slug ON BlogCategory(slug);

-- 5. Blog / Guides Posts
CREATE TABLE IF NOT EXISTS Post (
    id TEXT PRIMARY KEY,
    wp_id INTEGER,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    categoryId TEXT,
    featuredImage TEXT,
    excerpt TEXT,
    content TEXT,
    type TEXT DEFAULT 'blog',
    status TEXT DEFAULT 'published',
    author TEXT DEFAULT 'The Rice Tour Editorial',
    authorId TEXT,
    contentFormat TEXT DEFAULT 'json',
    format TEXT DEFAULT 'standard',
    isSticky INTEGER DEFAULT 0,
    isElementor INTEGER DEFAULT 0,
    readingTime INTEGER DEFAULT 5,
    focusKeyword TEXT,
    seoTitle TEXT,
    seoDescription TEXT,
    ogImage TEXT,
    canonicalUrl TEXT,
    noindex INTEGER DEFAULT 0,
    nofollow INTEGER DEFAULT 0,
    customSchema TEXT,
    publishedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_post_slug ON Post(slug);
CREATE INDEX IF NOT EXISTS idx_post_category ON Post(categoryId);
CREATE INDEX IF NOT EXISTS idx_post_status ON Post(status);

-- 6. Tags
CREATE TABLE IF NOT EXISTS Tag (
    id TEXT PRIMARY KEY,
    wp_id INTEGER,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    count INTEGER DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_tag_slug ON Tag(slug);

-- 7. Relations
CREATE TABLE IF NOT EXISTS PostCategory (
    postId TEXT NOT NULL REFERENCES Post(id) ON DELETE CASCADE,
    categoryId TEXT NOT NULL REFERENCES BlogCategory(id) ON DELETE CASCADE,
    PRIMARY KEY (postId, categoryId)
);

CREATE TABLE IF NOT EXISTS PostTag (
    postId TEXT NOT NULL REFERENCES Post(id) ON DELETE CASCADE,
    tagId TEXT NOT NULL REFERENCES Tag(id) ON DELETE CASCADE,
    PRIMARY KEY (postId, tagId)
);

-- 8. Pages
CREATE TABLE IF NOT EXISTS Page (
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

CREATE INDEX IF NOT EXISTS idx_page_slug ON Page(slug);

-- 9. Media Library
CREATE TABLE IF NOT EXISTS Media (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    wp_id INTEGER,
    filename TEXT NOT NULL,
    url TEXT NOT NULL,
    altText TEXT,
    title TEXT,
    caption TEXT,
    description TEXT,
    mimeType TEXT DEFAULT 'image/webp',
    sizeBytes INTEGER,
    width INTEGER,
    height INTEGER,
    r2Key TEXT,
    folder TEXT DEFAULT 'general',
    uploadedBy TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 10. Site Settings
CREATE TABLE IF NOT EXISTS SiteSetting (
    key TEXT PRIMARY KEY,
    value JSON NOT NULL,
    version INTEGER DEFAULT 1,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 11. Short Link Manager
CREATE TABLE IF NOT EXISTS Link (
    slug TEXT PRIMARY KEY,
    label TEXT NOT NULL,
    url TEXT NOT NULL,
    statusCode INTEGER DEFAULT 302,
    target TEXT DEFAULT '_blank',
    rel TEXT DEFAULT 'nofollow sponsored',
    isActive INTEGER DEFAULT 1,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 12. Reusable Snippets
CREATE TABLE IF NOT EXISTS Snippet (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    description TEXT,
    html_content TEXT,
    css_content TEXT,
    css_content_scoped TEXT,
    type TEXT DEFAULT 'general',
    status INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 13. Popups
CREATE TABLE IF NOT EXISTS Popup (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT DEFAULT '',
    pageSlugToMatch TEXT DEFAULT '',
    description TEXT,
    content TEXT,
    image TEXT,
    image_url TEXT,
    link TEXT,
    button_text TEXT DEFAULT 'Learn More',
    button_url TEXT,
    isActive INTEGER DEFAULT 1,
    is_active INTEGER DEFAULT 1,
    display_type TEXT DEFAULT 'modal',
    delay_seconds INTEGER DEFAULT 5,
    scroll_depth INTEGER DEFAULT 0,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 14. Short Topics & Videos (Reels)
CREATE TABLE IF NOT EXISTS ShortTopic (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    thumbnailUrl TEXT,
    viewOrder INTEGER DEFAULT 0,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS ShortVideo (
    id TEXT PRIMARY KEY,
    platform TEXT DEFAULT 'youtube',
    videoUrl TEXT NOT NULL,
    videoId TEXT NOT NULL,
    title TEXT,
    description TEXT,
    topicSlug TEXT,
    tourSlug TEXT,
    thumbnailUrl TEXT,
    viewOrder INTEGER DEFAULT 0,
    status TEXT DEFAULT 'published',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 15. Form Submissions / Inbound Leads
CREATE TABLE IF NOT EXISTS FormSubmission (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    formType TEXT DEFAULT 'inquiry',
    form_type TEXT DEFAULT 'inquiry',
    customerName TEXT,
    customer_name TEXT,
    customerPhone TEXT,
    customer_phone TEXT,
    customerEmail TEXT,
    customer_email TEXT,
    tourSlug TEXT,
    tour_slug TEXT,
    tourName TEXT,
    tour_name TEXT,
    options TEXT,
    notes TEXT,
    sourceUrl TEXT,
    source_url TEXT,
    status TEXT DEFAULT 'new',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 16. Trip Departures
CREATE TABLE IF NOT EXISTS Trip (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    departureCode TEXT,
    layout TEXT DEFAULT 'default',
    featuredImage TEXT,
    content TEXT,
    faqs TEXT,
    status TEXT DEFAULT 'published',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
