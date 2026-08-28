-- Migration 0016: Add format column to Tour table
-- Used to distinguish between 'elementor' (raw HTML) and 'astro' (native Astro component) tours

ALTER TABLE Tour ADD COLUMN format TEXT DEFAULT 'elementor';
