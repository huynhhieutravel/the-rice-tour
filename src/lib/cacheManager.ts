// src/lib/cacheManager.ts
/**
 * Simple Memory Cache for Site Settings
 * Dùng cho Cloudflare Workers (thời gian sống của cache phụ thuộc vào vòng đời Worker instance).
 * Thích hợp cho Phase hiện tại để giảm số lượt query DB.
 */

interface CacheEntry<T> {
  data: T;
  version: number;
  expiresAt: number;
}

const cacheStore = new Map<string, CacheEntry<any>>();
const DEFAULT_TTL_MS = 1000 * 60 * 15; // 15 minutes

export const CacheManager = {
  get<T>(key: string, currentVersion?: number): T | null {
    const entry = cacheStore.get(key);
    if (!entry) return null;

    // Nếu truyền version và version hiện tại lớn hơn version trong cache -> Cache bị stale
    if (currentVersion && currentVersion > entry.version) {
      this.delete(key);
      return null;
    }

    if (Date.now() > entry.expiresAt) {
      this.delete(key);
      return null;
    }

    return entry.data as T;
  },

  set<T>(key: string, data: T, version: number = 1, ttlMs: number = DEFAULT_TTL_MS): void {
    cacheStore.set(key, {
      data,
      version,
      expiresAt: Date.now() + ttlMs,
    });
  },

  delete(key: string): void {
    cacheStore.delete(key);
  },

  clear(): void {
    cacheStore.clear();
  }
};
