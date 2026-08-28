CREATE TABLE IF NOT EXISTS outbox_events (
    id TEXT PRIMARY KEY,
    event_id TEXT NOT NULL,
    event_type TEXT NOT NULL,
    aggregate_type TEXT,
    aggregate_id TEXT,
    idempotency_key TEXT NOT NULL,
    correlation_id TEXT,
    payload TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'PENDING',
    attempts INTEGER NOT NULL DEFAULT 0,
    last_error TEXT,
    next_retry_at DATETIME,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    processed_at DATETIME
);

CREATE TABLE IF NOT EXISTS failed_events (
    id TEXT PRIMARY KEY,
    event_id TEXT NOT NULL,
    event_type TEXT NOT NULL,
    idempotency_key TEXT NOT NULL,
    correlation_id TEXT,
    payload TEXT NOT NULL,
    error_reason TEXT,
    failed_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    admin_reviewed BOOLEAN DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_outbox_status_retry ON outbox_events(status, next_retry_at);
