-- Migration: 0020_create_mobile_identity.sql
-- Description: Khởi tạo schema V2 cho Mobile User, Wishlist, Session (Zero-OTP, VIP Concierge)

-- 1. Bảng MobileUser (Quản lý định danh OAuth và map với Customer ERP)
CREATE TABLE IF NOT EXISTS MobileUser (
    user_id TEXT PRIMARY KEY,             -- UUID nội bộ (PK)
    app_id TEXT UNIQUE NOT NULL,          -- 6 ký tự (VD: 8K29QA) cho Sales
    email TEXT,                           -- Có thể Null (Apple Private Relay)
    provider TEXT NOT NULL,               -- 'google' hoặc 'apple'
    provider_user_id TEXT NOT NULL,       -- ID thật sự từ OAuth
    customer_id TEXT,                     -- Khớp với ERP (Có thể Null)
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(provider, provider_user_id)
);

CREATE INDEX IF NOT EXISTS idx_mobile_customer_id ON MobileUser(customer_id);
CREATE INDEX IF NOT EXISTS idx_mobile_email ON MobileUser(email);

-- 2. Bảng MobileWishlist (Quản lý danh sách tour yêu thích riêng biệt)
CREATE TABLE IF NOT EXISTS MobileWishlist (
    user_id TEXT NOT NULL,
    tour_id TEXT NOT NULL,
    saved_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, tour_id),
    FOREIGN KEY(user_id) REFERENCES MobileUser(user_id) ON DELETE CASCADE
);

-- 3. Bảng MobileSession (Quản lý JWT dài hạn và Refresh Token)
CREATE TABLE IF NOT EXISTS MobileSession (
    session_id TEXT PRIMARY KEY,          -- UUID
    user_id TEXT NOT NULL,
    refresh_token_hash TEXT NOT NULL,
    device_id TEXT,
    platform TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    expires_at DATETIME NOT NULL,
    revoked_at DATETIME,
    FOREIGN KEY(user_id) REFERENCES MobileUser(user_id) ON DELETE CASCADE
);
