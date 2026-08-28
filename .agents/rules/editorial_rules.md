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
> 2. File `src/pages/[slug].astro` chỉ đóng vai trò là **Dynamic Wrapper mỏng**: Gọi `<BaseLayout>` và render `<Fragment set:html={htmlContent} />` lấy từ `post.content`.
> 3. Bằng cách này, khi người dùng hoặc biên tập viên vào CMS (`/admin/posts/edit?id=...`) chỉnh sửa bất kỳ nội dung nào và bấm **Update**, trang web ngoài production sẽ **cập nhật tức thì mà vẫn bảo toàn 100% cấu trúc Magazine 3 Cột**.
> 4. Trường `featuredImage` trong Database khi tạo bài mới luôn đặt là `NULL` (không copy link ảnh watermark cũ của Nụ Cười Mê Kông).

## 3. Zero Truncation Rule (Tuyệt Đối Không Rút Gọn Bài Viết)
- Mọi bài viết Cẩm Nang Chuyên Sâu (Pillar Guide) trong hệ thống **BẮT BUỘC PHẢI ĐẠT ĐỘ DÀI TỪ 1.800 – 3.500 TỪ**.
- Tuyệt đối KHÔNG tóm tắt, cắt xén, thu nhỏ hoặc tạo các bản demo rút gọn.
- Giữ trọn vẹn toàn bộ các tầng sâu: bối cảnh lịch sử/tín ngưỡng, thời kỳ kháng chiến/mở cõi, ma trận so sánh đa chiều, quy trình thực địa từng bước, hướng dẫn phong cách thực tế và chiêm nghiệm lữ hành.
- Toàn bộ thông tin hành chính mới (phân cấp sáp nhập 2025) và thời giá tham quan được cập nhật ở bối cảnh **năm 2026**.

## 4. Strict Image & Asset Policy (Quy Tắc Quản Lý Hình Ảnh)
- **100% CẤM dùng ảnh cũ của Mekong Smile:** Tuyệt đối không chứa chữ chìm watermark, logo, hoặc link CDN `r2.nucuoimekong.com`.
- **100% CẤM tự ý lấy ảnh mạng / Unsplash:** Không tự ý chèn ảnh placeholder từ internet vào bài viết. 
- Cấu trúc bài viết tập trung hoàn toàn vào chất lượng văn bản, bảng biểu, box dữ liệu chuyên sâu; vị trí hình ảnh để trống để biên tập viên / người dùng tự upload và chèn ảnh độc quyền từ CMS sau.

## 5. 3-Column Magazine Architecture Standard (Chuẩn Giao Diện 3 Cột Magazine)
Mọi bài viết Pillar Guide khi đóng gói HTML **BẮT BUỘC KẾ THỪA 1:1 CẤU TRÚC 3 CỘT CỦA `van-ly-truong-thanh.astro`**:

1. **Hero Header:**
   - Breadcrumb: `Home > Travel Guides > [Title]`
   - H1 Title: `font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl`
   - H2 Subtitle: `font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium`
   - Lead snippet: `text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal`
   - Author Meta: Avatar + `The Rice Tour Editorial` hoặc `Huynh Hieu Travel` kèm `CheckCircle2` xanh dương + Ngày đăng (`Calendar`) + Thời gian đọc (`Clock`)
   - Badges Line: 4 thẻ tag bo tròn viền mờ `bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl text-xs sm:text-sm text-white font-medium`

2. **Cột Trái (Left Sticky TOC `lg:col-span-3 sticky top-24`):**
   - Hộp Mục lục bài viết (`Table of Contents`) neo cố định, cuộn mượt mà theo từng đề mục H2/H3 (100% English).

3. **Cột Giữa (Main Content Column `lg:col-span-6 space-y-10`):**
   - Quick Overview Stats Bar (4 ô tròn thống kê nổi bật).
   - Lead-in Quote Box viền cam đất `border-l-4 border-amber-500`.
   - Hộp Highlight số liệu `🌟 Curated Dimensions / Key Numbers`.
   - Các Section đánh số tuần tự có tiêu đề viền cam bên trái (`border-l-4 border-amber-500 pl-4 mb-4`).
   - Bảng Ma Trận So Sánh Đa Chiều (HTML Table bo góc, header đen `bg-slate-900 text-white font-serif`).
   - Thẻ Quy trình / Hướng dẫn dạng lưới 2 cột (`grid sm:grid-cols-2 gap-4`).
   - Banner CTA Đặt Tour / Thiết kế tour riêng cuối bài.
   - Chuỗi bài viết liên quan (`DataPost`).

4. **Cột Phải (Right Sticky Sidebar `lg:col-span-3`):**
   - Card **Quick Expedition Facts** (4 hàng icon).
   - Card **Related Travel Guides** (Danh sách bài viết kèm link).
   - Card **Share This Guide** (Nút Facebook + Nút Copy Link có toast phản hồi `OK!`).

## 6. Pre-Deploy 4-Step Checklist & Smoke Test (Kiểm Tra Trước Khi Bàn Giao)
Trước khi deploy và thông báo hoàn thành cho người dùng, Agent **BẮT BUỘC** phải thực hiện:
1. **Language Audit:** Xác nhận 100% text trên trang (từ Hero, TOC, Content, Table đến Sidebar) là tiếng Anh.
2. **Domain Sweep:** Quét sạch mọi link `fittour.vn` và đổi thành `thericetour.com` hoặc relative URL `/admin/posts/edit?id=...`.
3. **Asset Sweep:** Không còn bất kỳ link ảnh nào từ `r2.nucuoimekong.com`.
4. **Smoke Test:** Chạy `curl -sL https://thericetour.com/[slug]` để kiểm chứng trực tiếp trên Live server.
