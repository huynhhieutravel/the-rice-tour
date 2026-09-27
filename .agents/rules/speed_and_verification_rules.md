---
description: Quy tắc tối ưu tốc độ làm việc, hạn chế thao tác scroll và chụp ảnh màn hình lặp lại qua DevTools/Browser MCP
globs: "**/*"
---

# Quy tắc Tối ưu Tốc độ & Hạn chế Scroll / Chụp ảnh màn hình DevTools

1. **Không lạm dụng scroll & screenshot lặp lại:**
   - Tuyệt đối không thực hiện chuỗi lệnh cuộn trang (scroll) từng nấc kết hợp chụp màn hình liên tục trừ khi người dùng có yêu cầu xem ảnh giao diện cụ thể.
   - Tránh việc mở nhiều lượt DevTools/Browser subagent chỉ để "dạo quanh" hoặc duyệt từng đoạn trang web gây nghẽn và làm chậm thời gian phản hồi.

2. **Ưu tiên kiểm tra nhanh và chính xác (Fast Code-Level Verification):**
   - Xác thực kết quả thông qua chạy build script, test terminal (`npm run build`, node execution script), hoặc evaluate nhanh 1 câu lệnh DOM selector duy nhất nếu cần.
   - Báo cáo kết quả ngắn gọn, rõ ràng ngay khi hoàn thành code thay vì chờ đợi các bước giả lập trình duyệt rườm rà.

3. **Luôn khởi chạy và cung cấp link Localhost trước khi deploy / bàn giao:**
   - Bất kỳ khi nào tạo mới hoặc chỉnh sửa trang/bài viết, BẮT BUỘC phải đảm bảo local dev server đang chạy và cung cấp link `http://localhost:<port>/<slug>` rõ ràng trong câu trả lời để người dùng tự click kiểm tra trực tiếp.

4. **Tuyệt đối KHÔNG tự ý deploy lên Production khi người dùng chưa xác nhận:**
   - Sau khi hoàn tất code và kiểm thử trên localhost, CHỈ trình bày kết quả và đưa link localhost cho người dùng kiểm duyệt.
   - TUYỆT ĐỐI KHÔNG tự tiện chạy lệnh deploy (`wrangler deploy`, xuất bản live) trước khi người dùng kiểm tra xong và nói rõ ràng "deloy đi", "ok deploy" hoặc "lên sóng".

5. **Tránh trùng lặp thông tin giữa Hero Badges và Quick Stats Bar:**
   - Tuyệt đối không đặt các thẻ badges/tags ở khối Hero Header nếu nội dung lặp lại y nguyên các chỉ số ở thanh Quick Overview Stats Bar (3 ô) hoặc Quick Summary ở Sidebar ngay bên dưới.
