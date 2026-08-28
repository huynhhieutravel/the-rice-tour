# 🚀 Hướng Dẫn Đưa The Rice Tour Lên Cloudflare (Từ Số 0)

Tài liệu hướng dẫn chi tiết từ bước **đầu tiên nhất** (kết nối tên miền chưa có gì) cho đến khi website hoạt động hoàn chỉnh trên Cloudflare Workers.

---

## 📋 Mục Lục
1. [Bước 1: Thêm Tên Miền Vào Cloudflare (Add Site)](#bước-1-thêm-tên-miền-vào-cloudflare-add-site)
2. [Bước 2: Trỏ Nameserver Về Cloudflare](#bước-2-trỏ-nameserver-về-cloudflare)
3. [Bước 3: Đăng Nhập Cloudflare Bằng Dòng Lệnh](#bước-3-đăng-nhập-cloudflare-bằng-dòng-lệnh)
4. [Bước 4: Khởi Tạo Database (D1) & Session (KV)](#bước-4-khởi-tạo-database-d1--session-kv)
5. [Bước 5: Đổ Dữ Liệu Lên Database Thực](#bước-5-đổ-dữ-liệu-lên-database-thực)
6. [Bước 6: Build & Deploy Website](#bước-6-build--deploy-website)
7. [Bước 7: Kích Hoạt Tên Miền Chính (Custom Domain)](#bước-7-kích-hoạt-tên-miền-chính-custom-domain)

---

## Bước 1: Thêm Tên Miền Vào Cloudflare (Add Site)

*(Vì bạn chưa kết nối tên miền, đây là bước BẮT BUỘC ĐẦU TIÊN phải làm trên nền tảng web).*

1. Đăng nhập vào [Cloudflare Dashboard](https://dash.cloudflare.com).
2. Tại màn hình chính, bấm nút màu xanh **Add Site** (Thêm trang web).
3. Nhập tên miền của bạn (ví dụ: `thericetour.com`) và bấm **Continue**.
4. Chọn gói **Free** (Miễn phí) ở dưới cùng và tiếp tục.
5. Cloudflare sẽ quét các bản ghi DNS cũ (cứ bấm **Continue** bỏ qua).
6. Màn hình sẽ hiện ra **2 địa chỉ Nameservers** do Cloudflare cấp (Ví dụ: `olga.ns.cloudflare.com` và `walt.ns.cloudflare.com`). **Hãy copy 2 dòng này lại**.

---

## Bước 2: Trỏ Nameserver Về Cloudflare

1. Đăng nhập vào trang quản lý nơi bạn đã mua tên miền (Mắt Bão, iNET, Tenten, Hostinger...).
2. Tìm menu **Cài đặt DNS** hoặc **Máy chủ tên miền (Nameservers)**.
3. Chuyển từ "Nameserver mặc định" sang "Tùy chỉnh (Custom)".
4. Xóa các Nameserver cũ đi và **dán 2 Nameservers của Cloudflare** (vừa copy ở Bước 1) vào.
5. Lưu lại và chờ khoảng **5 đến 15 phút**.
6. Quay lại trang Cloudflare, bấm nút **Check Nameservers**. Khi thấy thông báo báo **Active (Tích xanh)**, tức là tên miền đã kết nối thành công!

---

## Bước 3: Đăng Nhập Cloudflare Bằng Dòng Lệnh

Khi tên miền đã sẵn sàng, mở Terminal tại thư mục code của bạn (`/Users/huynhtronghieu/Documents/thericetour`) và gõ:

```bash
npx wrangler login
```
*(Trình duyệt sẽ tự mở, bạn bấm **Allow / Authorize** để cho phép Terminal điều khiển Cloudflare).*

---

## Bước 4: Khởi Tạo Database (D1) & Session (KV)

Tạo kho lưu trữ dữ liệu thật trên Cloudflare bằng 2 lệnh:

### 4.1 Tạo D1 Database
```bash
npx wrangler d1 create thericetour-d1
```
Terminal sẽ in ra `database_id` (dạng `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`).

### 4.2 Tạo KV Session
```bash
npx wrangler kv namespace create SESSION
```
Terminal sẽ in ra `id` của KV.

### 4.3 Cập nhật ID vào file `wrangler.json`
Mở file `wrangler.json`, thay ID vừa lấy được vào các mục tương ứng:
```json
  "d1_databases": [
    {
      "binding": "dulichcoguu_d1",
      "database_name": "thericetour-d1",
      "database_id": "DÁN_DATABASE_ID_VỪA_TẠO_VÀO_ĐÂY"
    },
    {
      "binding": "thericetour_d1",
      "database_name": "thericetour-d1",
      "database_id": "DÁN_DATABASE_ID_VỪA_TẠO_VÀO_ĐÂY"
    }
  ],
  "kv_namespaces": [
    {
      "binding": "SESSION",
      "id": "DÁN_KV_ID_VỪA_TẠO_VÀO_ĐÂY"
    }
  ]
```

---

## Bước 5: Đổ Dữ Liệu Lên Database Thực

Lần lượt chạy 2 lệnh sau để tạo cấu trúc bảng và nạp dữ liệu:

1. **Tạo cấu trúc bảng (Schema):**
```bash
npx wrangler d1 execute thericetour-d1 --remote --file=db/schema.sql
```
*(Gõ Y để xác nhận)*

2. **Nạp dữ liệu mẫu (Tour, Điểm đến, Admin):**
```bash
npx wrangler d1 execute thericetour-d1 --remote --file=db/seed_inbound.sql
```

---

## Bước 6: Build & Deploy Website

Chạy lệnh để đóng gói code và đẩy lên Cloudflare Workers:
```bash
npm run build && npx wrangler deploy
```
*(Khi chạy xong, hệ thống sẽ báo deploy thành công kèm 1 link dạng `.workers.dev`).*

---

## Bước 7: Kích Hoạt Tên Miền Chính (Custom Domain)

Bây giờ code đã ở trên Cloudflare, ta chỉ cần gắn tên miền vào là xong:

1. Vào [Cloudflare Dashboard](https://dash.cloudflare.com).
2. Vào mục **Workers & Pages** > Click chọn dự án **`thericetour-frontend`**.
3. Chuyển sang tab **Settings** > Chọn **Domains & Routes**.
4. Bấm nút **Add** > Chọn **Custom Domain**.
5. Nhập `thericetour.com` và bấm Add.
6. Làm lại bước 4 và 5 để nhập thêm `www.thericetour.com`.

🎉 **HOÀN TẤT!** 
Website của bạn đã chạy mượt mà trên `https://thericetour.com`. 
Bạn có thể vào `https://thericetour.com/admin` (Tài khoản: `admin` / `admin123`) để quản trị trang web.
