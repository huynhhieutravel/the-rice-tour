-- 0013_link_matrix.sql
CREATE TABLE IF NOT EXISTS MatrixLink (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    targetUrl TEXT NOT NULL,
    anchorTexts TEXT NOT NULL,
    clusterName TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_matrixlink_cluster ON MatrixLink(clusterName);
