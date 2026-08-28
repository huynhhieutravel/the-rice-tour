-- Add type column to Snippet table to categorize snippets (general, country, post, tour)
ALTER TABLE Snippet ADD COLUMN type TEXT DEFAULT 'general';
