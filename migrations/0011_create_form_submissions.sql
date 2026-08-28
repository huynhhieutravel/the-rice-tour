-- Migration: Create FormSubmission table for storing customer inquiries
CREATE TABLE IF NOT EXISTS FormSubmission (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  formType TEXT NOT NULL DEFAULT 'general',       -- 'booking-special', 'contact', 'tour-inquiry'...
  customerName TEXT,
  customerPhone TEXT,
  customerEmail TEXT,
  tourName TEXT,                                   -- Tên tour/chương trình đăng ký
  options TEXT,                                    -- JSON: tháng đi, độ tuổi, checkbox...
  sourceUrl TEXT,                                  -- URL trang gửi form
  status TEXT NOT NULL DEFAULT 'new',              -- 'new', 'contacted', 'converted', 'spam'
  notes TEXT,                                      -- Ghi chú admin
  createdAt TEXT NOT NULL DEFAULT (datetime('now')),
  updatedAt TEXT
);

-- Index for fast queries
CREATE INDEX IF NOT EXISTS idx_form_submission_status ON FormSubmission(status);
CREATE INDEX IF NOT EXISTS idx_form_submission_created ON FormSubmission(createdAt DESC);
