# Editorial & Pillar Guide Rules 2.0 (The Rice Tour & Inbound Standard)

## 1. Target Audience & Inbound Language Invariant (Ngôn Ngữ Xuất Bản)
- **The Rice Tour (`thericetour.com`) là nền tảng du lịch Inbound Quốc Tế dành cho du khách quốc tế.**
- **Nguồn dữ liệu xuất bản ra Production:** **BẮT BUỘC 100% PHẢI LẤY TỪ TRẠM 3 (`content-pipeline/04-english/`)**.
- **Vai trò các Trạm:**
  - **Trạm 1 & 2 (Tiếng Việt):** Là bản **Master Source** dùng để nghiên cứu sâu, phân loại 5 Archetypes, chuẩn hóa dữ liệu 2026, bóc tách thực địa và kiểm duyệt văn hóa (0% từ cấm).
  - **Trạm 3 (Tiếng Anh):** Dịch thuật văn học cao cấp (*Transcreation*) chuẩn National Geographic / Travel + Leisure, dịch đủ 100% độ dài không rút gọn.
  - **Trạm 4 (Astro Publisher):** Đóng gói toàn bộ cấu trúc 3 Cột Magazine thành **Mã HTML hoàn chỉnh (Raw HTML)**, lưu vào D1 Database (`Post.content`) và tạo file wrapper `.astro` đồng bộ.

## 2. Single Source of Truth & CMS Synchronization Rule (Đồng Bộ Dữ Liệu & CMS)
> [!IMPORTANT]
> **Nguyên Tắc Bất Di Bất Dịch: Không Phân Mảnh Giao Diện Giữa File Tĩnh Và Database.**
> 1. Toàn bộ mã nguồn giao diện 3 Cột Magazine (Hero + Left Sticky TOC + Center Content + Right Sticky Sidebar) **BẮT BUỘC ĐƯỢC ĐÓNG GÓI THÀNH MỘT KHỐI HTML HOÀN CHỈNH (Raw HTML)** và lưu thẳng vào trường `content` của Database D1 (`Post.content`).
> 2. File `src/pages/[slug].astro` **BẮT BUỘC TRUY VẤN D1 DATABASE** để lấy dữ liệu bài viết (`post`) và truyền `adminEditUrl={post?.id ? `/admin/posts/edit?id=${post.id}` : '/admin/posts/edit?id=<fallback_id>'}` vào `<BaseLayout>`.
> 3. **BẮT BUỘC HIỂN THỊ NÚT "Edit Article" TRÊN ADMIN BAR:** Khi Admin đăng nhập, thanh công cụ `#wp-admin-bar` luôn luôn phải hiển thị nút chỉnh sửa bài viết dẫn thẳng tới `/admin/posts/edit?id=...`. Tuyệt đối không để bài viết độc lập mà không liên kết CMS.
> 4. **Cơ chế Sync Production D1 qua Worker SSR:** Vì lệnh CLI `wrangler d1 execute ... --remote` bị giới hạn quyền token (Code 10000), việc tạo/đồng bộ bài viết vào Production D1 **BẮT BUỘC** thông qua SSR API route (chạy runtime Worker với binding `env.dulichcoguu_d1`) và gọi qua `curl -s https://thericetour.com/api/sync-...`.
> 5. Trường `featuredImage` trong Database khi tạo bài mới luôn đặt là `NULL` hoặc URL ảnh chính thức từ kho R2 Media của The Rice Tour (không copy link ảnh watermark cũ của Nụ Cười Mê Kông).

## 3. Zero Truncation Rule (Tuyệt Đối Không Rút Gọn Bài Viết)
- Mọi bài viết Cẩm Nang Chuyên Sâu (Pillar Guide) trong hệ thống **BẮT BUỘC PHẢI ĐẠT ĐỘ DÀI TỪ 1.800 – 3.500 TỪ**.
- Tuyệt đối KHÔNG tóm tắt, cắt xén, thu nhỏ hoặc tạo các bản demo rút gọn.
- Giữ trọn vẹn toàn bộ các tầng sâu: bối cảnh lịch sử/tín ngưỡng, thời kỳ kháng chiến/mở cõi, ma trận so sánh đa chiều, quy trình thực địa từng bước, hướng dẫn phong cách thực tế và chiêm nghiệm lữ hành.
- Toàn bộ thông tin hành chính mới (phân cấp sáp nhập 2025) và thời giá tham quan được cập nhật ở bối cảnh **năm 2026**.

## 4. Strict Image & Asset Policy (Quy Tắc Quản Lý Hình Ảnh)
- **100% CẤM dùng ảnh cũ của Mekong Smile:** Tuyệt đối không chứa chữ chìm watermark, logo, hoặc link CDN `r2.nucuoimekong.com`.
- **100% CẤM tự ý lấy ảnh mạng / Unsplash:** Không tự ý chèn ảnh placeholder từ internet vào bài viết. 
- **ƯU TIÊN KHAI THÁC KHO ẢNH CMS MEDIA LIBRARY:** Chủ động tra cứu bảng `Media` hoặc kho CDN `https://media.thericetour.com/uploads/...` để chọn lọc ảnh thực địa sắc nét, đúng chủ đề đưa vào các vị trí trực quan (Hero, Cover, Card, Section galleries), tránh để bài viết bị thưa thớt hoặc thiếu ảnh. Cấu trúc bài viết luôn hài hòa giữa chiều sâu chữ và hình ảnh thực địa.

## 5. 3-Column Magazine Architecture Standard (Chuẩn Giao Diện 3 Cột Magazine)
Mọi bài viết Pillar Guide khi đóng gói HTML **BẮT BUỘC KẾ THỪA 1:1 CẤU TRÚC 3 CỘT CỦA `van-ly-truong-thanh.astro`**:

1. **Hero Header:**
   - Breadcrumb: `Home > Travel Guides > [Title]`
   - H1 Title: `font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl`
   - H2 Subtitle: `font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium`
   - Lead snippet: `text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal`
   - Author Meta: Avatar + `The Rice Tour Editorial` hoặc `Huynh Hieu Travel` kèm `CheckCircle2` xanh dương + Ngày đăng (`Calendar`) + Thời gian đọc (`Clock`)
   - **Badges Line: LOẠI BỎ HOÀN TOÀN** (Không dùng thẻ badges trong Hero Header vì gây trùng lặp thông tin với thanh Quick Overview Stats Bar và Sidebar bên dưới).

2. **Cột Trái (Left Sticky TOC `lg:col-span-3 sticky top-24`):**
   - Hộp Mục lục bài viết (`Table of Contents`) neo cố định, cuộn mượt mà theo từng đề mục H2/H3 (100% English).

3. **Cột Giữa (Main Content Column `lg:col-span-6 space-y-10`):**
   - **Quick Overview Stats Bar:** BẮT BUỘC ĐÚNG 3 Ô THỐNG KÊ (Strictly 3 items, layout `md:grid-cols-3`, tuyệt đối không dùng 4 ô).
   - Lead-in Quote Box viền cam đất `border-l-4 border-amber-500`.
   - Hộp Highlight số liệu `🌟 Curated Dimensions / Key Numbers`.
   - Các Section đánh số tuần tự có tiêu đề viền cam bên trái (`border-l-4 border-amber-500 pl-4 mb-4`).
   - Bảng Ma Trận So Sánh Đa Chiều (HTML Table bo góc, header đen `bg-slate-900 text-white font-serif`).
   - Thẻ Quy trình / Hướng dẫn dạng lưới 2 cột (`grid sm:grid-cols-2 gap-4`).
   - Banner CTA Đặt Tour / Thiết kế tour riêng cuối bài.
   - Chuỗi bài viết liên quan (`DataPost`).
   - **Section FAQs (Câu hỏi thường gặp):** TUYỆT ĐỐI KHÔNG ĐÁNH SỐ THỨ TỰ vào câu hỏi FAQ trong thẻ `<summary>` (ví dụ: không ghi "1. How far...", "2. Is Ben Dinh...").

4. **Cột Phải (Right Sticky Sidebar `lg:col-span-3`):**
   - Card **Quick Expedition Facts** (4 hàng icon).
   - Card **Related Travel Guides** (Danh sách bài viết kèm link).
   - Card **Share This Guide** (Nút Facebook + Nút Copy Link có toast phản hồi `OK!`).

## 6. Quy Trình Localhost First & Quy Tắc Xuất Bản Production (Bắt Buộc Tuân Thủ)
Trước khi bàn giao hoặc xuất bản bài viết, Agent **BẮT BUỘC** phải tuân thủ nghiêm ngặt quy trình:
1. **Language Audit:** Xác nhận 100% text trên trang (từ Hero, TOC, Content, Table đến Sidebar) là tiếng Anh.
2. **Domain Sweep:** Quét sạch mọi link `fittour.vn` và đổi thành `thericetour.com` hoặc relative URL `/admin/posts/edit?id=...`.
3. **Asset Sweep:** 0% link ảnh từ `r2.nucuoimekong.com` hoặc ảnh Unsplash tự tiện.
4. **Localhost Verification (BẮT BUỘC):** Đảm bảo Dev Server đang hoạt động (`npx astro dev --port 4324`), curl test HTTP 200, và cung cấp link xem trước trực quan `http://localhost:4324/[slug]` để người dùng bấm vào duyệt trang trực tiếp.
5. **RÀNG BUỘC SỐNG CÒN - KHÔNG TỰ Ý DEPLOY LÊN PRODUCTION:**
   - **TUYỆT ĐỐI KHÔNG** tự ý chạy `wrangler deploy` hay đẩy code lên Live server khi người dùng chưa kiểm tra xong.
   - **CHỈ ĐƯỢC PHÉP DEPLOY** khi người dùng kiểm tra xong trên Localhost và ra lệnh rõ ràng: *"ok deploy"*, *"deloy đi"*, hoặc *"lên sóng"*. Sau khi deploy mới chạy `curl -sL https://thericetour.com/[slug]` để smoke test.
