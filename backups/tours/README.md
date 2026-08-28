# Tour Backups (Gold Standard)

Thư mục lưu trữ các bản chuẩn (Gold Standard) của các trang Tour để tránh mất dữ liệu hoặc layout.

## 1. 1-Day Premium Cu Chi Tunnels & Ho Chi Minh City Discovery
- **Slug**: `1-day-premium-cu-chi-tunnels`
- **File HTML**: `1-day-premium-cu-chi-tunnels.gold.html`
- **File JSON**: `1-day-premium-cu-chi-tunnels.gold.json`
- **File SQL**: `1-day-premium-cu-chi-tunnels.gold.sql`

### Cách khôi phục nhanh bất kỳ lúc nào:
```bash
# Khôi phục vào database Local:
npx wrangler d1 execute thericetour-d1 --local --file=backups/tours/1-day-premium-cu-chi-tunnels.gold.sql

# Khôi phục lên database Production (Remote):
npx wrangler d1 execute thericetour-d1 --remote --file=backups/tours/1-day-premium-cu-chi-tunnels.gold.sql
```
