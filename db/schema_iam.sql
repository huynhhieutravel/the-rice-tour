-- IAM Upgrade Migrations (Version 3)

-- 1. (Đã bỏ qua các lệnh ALTER TABLE vì các cột disabled_at đã tồn tại trên Server)

-- 2. Create AuditLog table for Security Forensics
CREATE TABLE IF NOT EXISTS AuditLog (
  id TEXT PRIMARY KEY,
  actor_user_id TEXT,
  target_user_id TEXT,
  action TEXT NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  metadata_json TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
