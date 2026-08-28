-- Add custom schema columns to Page
ALTER TABLE Page ADD COLUMN customSchema TEXT;
ALTER TABLE Page ADD COLUMN schemaEnabled INTEGER DEFAULT 0;
ALTER TABLE Page ADD COLUMN schemaUpdatedAt DATETIME;
ALTER TABLE Page ADD COLUMN schemaUpdatedBy TEXT;
ALTER TABLE Page ADD COLUMN createdAt DATETIME;

-- Add schema missing columns to Post
ALTER TABLE Post ADD COLUMN schemaEnabled INTEGER DEFAULT 0;
ALTER TABLE Post ADD COLUMN schemaUpdatedAt DATETIME;
ALTER TABLE Post ADD COLUMN schemaUpdatedBy TEXT;
