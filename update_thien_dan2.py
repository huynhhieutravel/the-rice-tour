import re

def update_file():
    path = "src/pages/thien-dan-bac-kinh.astro"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1
    content = content.replace(
        "Đan Bệ Kiều (丹陛桥 – Cầu Thần Đạo)",
        "Đan Bệ Kiều (丹陛桥) – Trục Nghi Lễ"
    )

    # 2
    content = content.replace(
        "Quy mô ~273 Hecta",
        "Quy mô khoảng 273 ha"
    )

    # 3
    content = content.replace(
        "tạo ra hiện tượng đứng ở một đầu tường nói nhỏ thì người ở đầu kia vẫn nghe thấy. (Lưu ý: Vào những ngày đông khách, tiếng ồn xung quanh có thể làm giảm hiệu ứng này).",
        "Trong điều kiện ít tiếng ồn, âm thanh có thể truyền dọc theo tường đến phía đối diện. (Lưu ý: Vào những ngày đông khách, tiếng ồn xung quanh có thể làm giảm hiệu ứng này)."
    )

    # 4
    content = content.replace(
        "Khác với Tử Cấm Thành và Thiên An Môn, Thiên Đàn linh hoạt hơn về vé: có thể đặt online",
        "Thiên Đàn có quy trình mua vé linh hoạt hơn Tử Cấm Thành và Thiên An Môn: có thể đặt online"
    )

    # 5
    content = content.replace(
        '<td class="p-4 text-slate-600">Gói 3 điểm chính</td>',
        '<td class="p-4 text-slate-600">Gói 3 điểm chính (Điện Kỳ Niên + Bức Tường Vọng Âm + Viên Khâu Đàn)</td>'
    )

    # 6
    content = content.replace(
        "<strong>Không nên gộp chung trong cùng một buổi.</strong>",
        "<strong>Không nên cố gộp Thiên Đàn với Tử Cấm Thành trong cùng một buổi.</strong>"
    )
    content = content.replace(
        "Có thể kết hợp trong cùng một ngày nếu lịch trình gọn, nhưng nếu muốn tham quan thong thả, nên dành Thiên Đàn cho một buổi riêng.",
        "Có thể kết hợp trong cùng một ngày nếu lịch trình gọn, nhưng để tham quan thong thả, nên dành Thiên Đàn cho một buổi riêng."
    )

    # 7
    content = content.replace(
        "<strong>RẤT PHÙ HỢP.</strong> So với sự dốc đá",
        "<strong>Khá phù hợp, nếu chọn tuyến ngắn.</strong> So với sự dốc đá"
    )

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Success")

if __name__ == "__main__":
    update_file()
