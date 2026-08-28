CREATE TABLE IF NOT EXISTS "User" (
  "id" text PRIMARY KEY,
  "wp_id" integer,
  "name" text NOT NULL,
  "slug" text UNIQUE,
  "email" text UNIQUE,
  "passwordHash" text,
  "avatar" text,
  "url" text,
  "role" text NOT NULL DEFAULT 'editor',
  "createdAt" text NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS "Tag" (
  "id" text PRIMARY KEY,
  "wp_id" integer,
  "name" text NOT NULL,
  "slug" text NOT NULL UNIQUE,
  "count" integer DEFAULT 0
);

CREATE TABLE IF NOT EXISTS "PostCategory" (
  "postId" text NOT NULL REFERENCES "Post" ("id") ON DELETE CASCADE,
  "categoryId" text NOT NULL REFERENCES "BlogCategory" ("id") ON DELETE CASCADE,
  PRIMARY KEY ("postId", "categoryId")
);

CREATE TABLE IF NOT EXISTS "PostTag" (
  "postId" text NOT NULL REFERENCES "Post" ("id") ON DELETE CASCADE,
  "tagId" text NOT NULL REFERENCES "Tag" ("id") ON DELETE CASCADE,
  PRIMARY KEY ("postId", "tagId")
);

ALTER TABLE "BlogCategory" ADD COLUMN "wp_id" integer;
ALTER TABLE "BlogCategory" ADD COLUMN "parentId" text REFERENCES "BlogCategory" ("id");
ALTER TABLE "BlogCategory" ADD COLUMN "description" text;
ALTER TABLE "BlogCategory" ADD COLUMN "count" integer DEFAULT 0;

ALTER TABLE "Post" ADD COLUMN "wp_id" integer;
ALTER TABLE "Post" ADD COLUMN "contentFormat" text NOT NULL DEFAULT 'json';
ALTER TABLE "Post" ADD COLUMN "authorId" text REFERENCES "User" ("id");
ALTER TABLE "Post" ADD COLUMN "format" text DEFAULT 'standard';
ALTER TABLE "Post" ADD COLUMN "isSticky" integer DEFAULT 0;
ALTER TABLE "Post" ADD COLUMN "seoTitle" text;
ALTER TABLE "Post" ADD COLUMN "seoDescription" text;
ALTER TABLE "Post" ADD COLUMN "ogImage" text;
ALTER TABLE "Post" ADD COLUMN "canonicalUrl" text;
ALTER TABLE "Post" ADD COLUMN "readingTime" integer;
ALTER TABLE "Post" ADD COLUMN "publishedAt" text;

ALTER TABLE "Media" ADD COLUMN "wp_id" integer;
ALTER TABLE "Media" ADD COLUMN "r2Key" text;
ALTER TABLE "Media" ADD COLUMN "folder" text DEFAULT 'general';
ALTER TABLE "Media" ADD COLUMN "uploadedBy" text REFERENCES "User" ("id");
