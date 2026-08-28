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
