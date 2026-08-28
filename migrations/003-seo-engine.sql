ALTER TABLE "Post" ADD COLUMN "focusKeyword" text;
ALTER TABLE "Post" ADD COLUMN "noindex" integer DEFAULT 0;
ALTER TABLE "Post" ADD COLUMN "nofollow" integer DEFAULT 0;
ALTER TABLE "Post" ADD COLUMN "customSchema" text;
