import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

def create_cu_chi_excel():
    wb = openpyxl.Workbook()
    
    # Define color palette (Professional Navy Theme)
    NAVY_DARK = "1B365D"
    NAVY_BLUE = "2B4C7E"
    NAVY_LIGHT = "E8EEF5"
    ZEBRA_FILL = "F8FAFC"
    WHITE = "FFFFFF"
    BORDER_COLOR = "CBD5E1"
    ACCENT_GOLD = "B45309"
    ACCENT_GREEN = "047857"
    
    header_fill = PatternFill(start_color=NAVY_DARK, end_color=NAVY_DARK, fill_type="solid")
    sub_header_fill = PatternFill(start_color=NAVY_BLUE, end_color=NAVY_BLUE, fill_type="solid")
    tier_fill = PatternFill(start_color=NAVY_LIGHT, end_color=NAVY_LIGHT, fill_type="solid")
    zebra_pattern = PatternFill(start_color=ZEBRA_FILL, end_color=ZEBRA_FILL, fill_type="solid")
    white_fill = PatternFill(start_color=WHITE, end_color=WHITE, fill_type="solid")
    
    header_font = Font(name="Segoe UI", size=11, bold=True, color=WHITE)
    sub_header_font = Font(name="Segoe UI", size=10, bold=True, color=WHITE)
    bold_font = Font(name="Segoe UI", size=10, bold=True)
    regular_font = Font(name="Segoe UI", size=10)
    italic_font = Font(name="Segoe UI", size=9, italic=True, color="64748B")
    link_font = Font(name="Segoe UI", size=10, color="1D4ED8", underline="single")
    gold_badge_font = Font(name="Segoe UI", size=10, bold=True, color=ACCENT_GOLD)
    green_badge_font = Font(name="Segoe UI", size=10, bold=True, color=ACCENT_GREEN)
    
    thin_side = Side(border_style="thin", color=BORDER_COLOR)
    cell_border = Border(left=thin_side, right=thin_side, top=thin_side, bottom=thin_side)
    thick_bottom = Side(border_style="medium", color=NAVY_DARK)
    header_border = Border(left=thin_side, right=thin_side, top=thin_side, bottom=thick_bottom)
    
    align_center = Alignment(horizontal="center", vertical="top", wrap_text=True)
    align_left = Alignment(horizontal="left", vertical="top", wrap_text=True)
    align_header = Alignment(horizontal="center", vertical="center", wrap_text=True)

    # -------------------------------------------------------------------------
    # SHEET 1: 25_Bai_Viet_Cu_Chi_Matrix
    # -------------------------------------------------------------------------
    ws1 = wb.active
    ws1.title = "25_Bai_Viet_Cu_Chi_Matrix"
    ws1.views.sheetView[0].showGridLines = True
    
    headers1 = [
        "STT",
        "Phân Tầng Chiến Lược (Tier)",
        "Tiêu Đề Bài Viết Tiếng Anh",
        "Slug URL Dự Kiến",
        "Target Primary Keyword",
        "Long-tail LSI Keywords",
        "Brief Tác Nghiệp & Yêu Cầu Nội Dung",
        "Quy Chuẩn Quick Answer (GEO)",
        "Trục 1: Parent Link",
        "Trục 2: Sibling Links",
        "Trục 3: Commercial CTA",
        "Sprint",
        "Trạng Thái"
    ]
    
    ws1.append(headers1)
    ws1.row_dimensions[1].height = 36
    
    for col_idx in range(1, len(headers1) + 1):
        cell = ws1.cell(row=1, column=col_idx)
        cell.fill = header_fill
        cell.font = header_font
        cell.alignment = align_header
        cell.border = header_border

    articles_data = [
        # TIER A: MONEY CLUSTER
        (
            "01", "Tier A: Money Cluster",
            "Cu Chi Tunnels: The Complete Travel Guide",
            "/cu-chi-tunnels-travel-guide",
            "cu chi tunnels travel guide",
            "visiting cu chi tunnels; cu chi tunnels guide; cu chi tunnels history and tour",
            "Xương sống số 1 của toàn bộ topic cluster (3,500 - 4,000 từ). Tổng quan 200km đường hầm ngầm, bản đồ địa lý. Phân định rõ 2 phân khu Bến Đình (gần, đông) vs Bến Dược (xa, yên tĩnh, nguyên bản). Hướng dẫn thời gian mở cửa, vé tham quan, cách đi, trang phục, các câu hỏi thường gặp.",
            "Quick fact table 4 dòng: Địa điểm nào tốt nhất; Khung giờ xuất phát vàng 07:00 AM; Có bắt buộc chui hầm không (Không, 80% trên mặt đất); Thời lượng đi.",
            "N/A (Trang Pillar mẹ)",
            "Bài 02, 03, 04, 05, 06",
            "2 Tour Boxes: /tour/half-day-cu-chi-tunnels-tour & /tour/1-day-premium-cu-chi-tunnels",
            "Sprint 1", "Sẵn sàng viết"
        ),
        (
            "02", "Tier A: Money Cluster",
            "Ben Dinh vs Ben Duoc: Which Cu Chi Tunnels Site Should You Visit?",
            "/ben-dinh-vs-ben-duoc-cu-chi-tunnels",
            "ben dinh vs ben duoc",
            "which cu chi tunnels site is better; ben duoc tunnels vs ben dinh; quieter cu chi tunnels site",
            "Bài nam châm chuyển đổi cao nhất (2,200 từ). So sánh khách quan: Bến Đình (gần hơn 15km, tập trung phần lớn tour bus đông đúc, hầm cơi nới rộng hơn) vs Bến Dược (xa hơn, giữa rừng nguyên sinh, hầm 3 tầng nguyên bản, có Đền Tưởng niệm Bến Dược trang nghiêm). Muốn đi Bến Dược thuận tiện, xe riêng là lựa chọn tối ưu.",
            "Bảng so sánh 1:1: Khoảng cách, độ đông đúc, kích thước hầm, điểm tâm linh, loại hình tour phù hợp.",
            "/cu-chi-tunnels-travel-guide",
            "Bài 05 (Private Car), Bài 06 (Crowds), Bài 07 (Distance)",
            "/tour/half-day-cu-chi-tunnels-tour (Anchor: private Ben Duoc tour by luxury car)",
            "Sprint 1", "Sẵn sàng viết"
        ),
        (
            "03", "Tier A: Money Cluster",
            "Cu Chi Tunnels Half-Day vs Full-Day: Which Tour Should You Choose?",
            "/cu-chi-tunnels-half-day-vs-full-day",
            "cu chi tunnels half day vs full day",
            "how long is cu chi tunnel tour; cu chi tunnels full day tour worth it; half day cu chi tunnels morning or afternoon",
            "Độ dài: 1,800 từ. Phân tích rõ nhu cầu: Nửa ngày (5-6 tiếng) cho khách muốn nghỉ ngơi buổi chiều, có con nhỏ. Cả ngày (8-9 tiếng) kết hợp Củ Chi + Di tích nội đô Sài Gòn (Dinh Độc Lập, Bưu điện) hoặc du thuyền hoàng hôn WaterBus. Bảng ma trận so sánh thể lực, thời gian, chi phí.",
            "Decision tree: Khi nào chọn Nửa ngày; Khi nào chọn Cả ngày; Thời gian di chuyển thực tế.",
            "/cu-chi-tunnels-travel-guide",
            "Bài 04 (Worth It), Bài 09 (Best Time)",
            "/tour/half-day-cu-chi-tunnels-tour & /tour/1-day-premium-cu-chi-tunnels",
            "Sprint 1", "Sẵn sàng viết"
        ),
        (
            "04", "Tier A: Money Cluster",
            "Is a Cu Chi Tunnels Private Tour Worth the Extra Cost? (An Honest Breakdown)",
            "/is-cu-chi-tunnels-private-tour-worth-it",
            "is cu chi tunnels private tour worth it",
            "cu chi tunnels private tour vs group bus; cost of private tour cu chi; private guide cu chi tunnels",
            "Độ dài: 2,200 từ (Đập tan rào cản giá $25 bus vs $75+ private). Phân tích thời gian: Xe bus mất 4.5h đón 15-20 khách và kẹt xe vs Xe riêng 2.5h êm ái, đón tận sảnh. 100% No Forced Shopping (không tốn 45 phút ở xưởng sơn mài). Tự do chọn Bến Dược và điều chỉnh nhịp độ.",
            "Bảng so sánh chi phí vs giá trị: Thời gian di chuyển, số điểm shopping, sự linh hoạt, hướng dẫn viên 1:1.",
            "/cu-chi-tunnels-travel-guide",
            "Bài 02 (Ben Dinh vs Ben Duoc), Bài 05 (Private Car), Bài 11 (Small Group)",
            "/tour/half-day-cu-chi-tunnels-tour (Anchor: tailored private Cu Chi tour)",
            "Sprint 1", "Sẵn sàng viết"
        ),
        (
            "05", "Tier A: Money Cluster",
            "Visiting Cu Chi Tunnels by Private Car: Costs, Routes & What to Expect",
            "/visiting-cu-chi-tunnels-by-private-car",
            "cu chi tunnels by private car",
            "hire private car to cu chi tunnels; luxury car cu chi tunnels tour; cu chi tunnels private driver",
            "Độ dài: 2,000 từ. Đánh giá phương tiện: SUV 7 chỗ (Kia Carnival, Ford Everest) cho nhóm 2-3 khách; Limousine Dcar 9 chỗ cho nhóm 4-7 khách. Cung đường tối ưu tránh kẹt xe An Sương. Tiện ích: Ghế da cao cấp, điều hòa 2 vùng, Wi-Fi, cổng sạc, bánh mì sáng, nước dừa tươi.",
            "Bảng chi phí thuê xe riêng có lái 2026; Tiện ích tiêu chuẩn; Thời gian đón trả tối ưu.",
            "/cu-chi-tunnels-travel-guide",
            "Bài 04 (Worth It), Bài 07 (Distance), Bài 08 (How to Get There)",
            "/tour/half-day-cu-chi-tunnels-tour",
            "Sprint 1", "Sẵn sàng viết"
        ),
        (
            "06", "Tier A: Money Cluster",
            "How to Visit Cu Chi Tunnels Without the Crowds: 5 Insider Strategies",
            "/how-to-visit-cu-chi-tunnels-without-crowds",
            "how to visit cu chi tunnels without crowds",
            "avoid crowds cu chi tunnels; quiet cu chi tunnels tour; early morning cu chi tour",
            "Độ dài: 1,800 từ. 5 chiến lược thực tế từ dữ liệu vận hành: 1. Khởi hành sớm 07:00 AM đến trước dòng xe bus. 2. Chọn Bến Dược thay vì Bến Đình. 3. Khung giờ chiều 12:30 PM khi đoàn sáng rút về. 4. Đi xe riêng/nhóm nhỏ tối đa 5 khách. 5. Tuyệt đối không dừng mua sắm dọc đường.",
            "Timeline né đám đông từng giờ; So sánh mật độ khách Bến Dược vs Bến Đình lúc 09:00 AM.",
            "/cu-chi-tunnels-travel-guide",
            "Bài 02 (Ben Duoc), Bài 09 (Best Time), Bài 25 (Hour-by-Hour)",
            "/tour/half-day-cu-chi-tunnels-tour",
            "Sprint 1", "Sẵn sàng viết"
        ),

        # TIER B: DECISION & COMPARISON HUBS
        (
            "07", "Tier B: Decision & Logistics",
            "How Far is Cu Chi Tunnels from Ho Chi Minh City? Distance & Travel Times",
            "/how-far-is-cu-chi-tunnels-from-ho-chi-minh-city",
            "how far is cu chi tunnels from ho chi minh city",
            "distance saigon to cu chi tunnels; travel time ho chi minh to cu chi",
            "Số liệu chuẩn xác từ Fact Base: Bến Đình (45-50km, 1h15-1h30); Bến Dược (65-70km, 1h30-1h45). Phân tích tác động kẹt xe nút giao An Sương và tuyến QL22 nếu xuất phát sau 08:00 AM.",
            "Quick Table: Khoảng cách km và phút di chuyển giữa Bến Đình vs Bến Dược theo từng khung giờ.",
            "/cu-chi-tunnels-travel-guide",
            "Bài 05 (Private Car), Bài 08 (How to Get There)",
            "/tour/half-day-cu-chi-tunnels-tour",
            "Sprint 2", "Sẵn sàng viết"
        ),
        (
            "08", "Tier B: Decision & Logistics",
            "How to Get to Cu Chi Tunnels from Saigon: Private Car vs Speedboat vs Bus",
            "/how-to-get-to-cu-chi-tunnels-from-saigon",
            "how to get to cu chi tunnels from saigon",
            "public bus to cu chi tunnels; cu chi tunnels by speedboat; grab to cu chi tunnels cost",
            "So sánh khách quan 4 phương thức: Xe riêng có tài xế, Canô cao tốc sông Sài Gòn, Xe buýt công cộng (Tuyến 13 -> 79), và Taxi/Grab. Bảng so sánh chi phí, thời gian, mức độ an toàn và sự tiện nghi.",
            "Ma trận so sánh: Giá, thời gian, ưu điểm, nhược điểm của 4 phương tiện di chuyển phổ biến.",
            "/cu-chi-tunnels-travel-guide",
            "Bài 05 (Private Car), Bài 07 (Distance)",
            "/tour/half-day-cu-chi-tunnels-tour",
            "Sprint 2", "Sẵn sàng viết"
        ),
        (
            "09", "Tier B: Decision & Logistics",
            "Best Time to Visit Cu Chi Tunnels: Morning vs Afternoon & Weather Guide",
            "/best-time-to-visit-cu-chi-tunnels",
            "best time to visit cu chi tunnels",
            "morning vs afternoon cu chi tunnels; cu chi tunnels rainy season",
            "So sánh 2 buổi: Buổi sáng (mát mẻ, dậy sớm 07:00 AM) vs Buổi chiều (thong thả, vắng khách hơn). Mùa khô (Tháng 12 - Tháng 4) vs Mùa mưa (Tháng 5 - Tháng 11): Dưới tán rừng mát rượi, lưu ý đường đất ẩm mùa mưa.",
            "Quick comparison: Nhiệt độ, ánh sáng chụp ảnh, mật độ khách giữa buổi sáng và buổi chiều.",
            "/cu-chi-tunnels-travel-guide",
            "Bài 06 (Crowds), Bài 10 (Fee & Hours)",
            "/tour/half-day-cu-chi-tunnels-tour",
            "Sprint 2", "Sẵn sàng viết"
        ),
        (
            "10", "Tier B: Decision & Logistics",
            "Cu Chi Tunnels Entrance Fee & Opening Hours (2026 Verified)",
            "/cu-chi-tunnels-entrance-fee-opening-hours",
            "cu chi tunnels entrance fee",
            "cu chi tunnels ticket price 2026; cu chi tunnels opening hours",
            "Cập nhật giá vé chính thức 2026 từ Fact Base: 125.000 VNĐ / khách cho cả Bến Dược và Bến Đình. Giờ mở cửa: 07:00 - 17:00 hàng ngày (kể cả lễ Tết). Có dòng Last verified: [Date]. Chi phí dịch vụ phụ trợ (xe điện, khoai mì).",
            "Bảng giá vé niêm yết: Vé vào cổng, vé xe điện, chính sách trẻ em và giờ mở cửa.",
            "/cu-chi-tunnels-travel-guide",
            "Bài 01 (Pillar), Bài 07 (Distance)",
            "/tour/half-day-cu-chi-tunnels-tour",
            "Sprint 2", "Sẵn sàng viết"
        ),
        (
            "11", "Tier B: Decision & Logistics",
            "Private Tour vs Small Group Tour to Cu Chi: What's the Difference?",
            "/cu-chi-tunnels-small-group-vs-private-tour",
            "cu chi tunnels small group tour",
            "small group vs private tour cu chi; max 5 pax cu chi tour",
            "Phân biệt rõ: Nhóm nhỏ VIP của The Rice Tour (Tối đa 5 khách/xe) vs Tour riêng 100% (Couple, gia đình). Lựa chọn phù hợp với ngân sách và mức độ cá nhân hóa lịch trình.",
            "Bảng so sánh 5 tiêu chí: Quy mô nhóm, phương tiện, tính linh hoạt, mức giá, sự riêng tư.",
            "/cu-chi-tunnels-travel-guide",
            "Bài 04 (Worth It), Bài 05 (Private Car)",
            "/tour/half-day-cu-chi-tunnels-tour",
            "Sprint 2", "Sẵn sàng viết"
        ),
        (
            "12", "Tier B: Decision & Logistics",
            "Visiting Cu Chi Tunnels with Claustrophobia: An Honest Above-Ground Guide",
            "/can-claustrophobic-people-visit-cu-chi-tunnels",
            "cu chi tunnels claustrophobia",
            "fear of small spaces cu chi tunnels; cu chi tunnels without going underground",
            "Honest Answer (Không khẳng định tuyệt đối): Hơn 80% trải nghiệm diễn ra trên mặt đất rợp bóng rừng mát mẻ. Không ai bị ép chui hầm. Miêu tả chân thực cảm giác dưới hầm (nhiệt độ, độ hẹp) và các lối thoát hiểm ngắt quãng.",
            "Checklist: 6 hoạt động hấp dẫn trên mặt đất không cần chui hầm; Lời khuyên cho người sợ hẹp.",
            "/cu-chi-tunnels-travel-guide",
            "Bài 01 (Pillar), Bài 13 (Map & Layout)",
            "/tour/half-day-cu-chi-tunnels-tour",
            "Sprint 2", "Sẵn sàng viết"
        ),

        # TIER C: TOPICAL AUTHORITY & HISTORICAL DEPTH
        (
            "13", "Tier C: Authority & History",
            "Cu Chi Tunnels Map & Layout: Underground 3-Level Network Explained",
            "/cu-chi-tunnels-map-underground-layout",
            "cu chi tunnels map",
            "cu chi tunnels diagram; cu chi tunnels 3 levels depth",
            "Sơ đồ mặt cắt 3 tầng: Tầng 1 (3m - pháo đạn), Tầng 2 (6m - bom nhỏ), Tầng 3 (8-12m - chống bom B-52). Bố cục các phòng chức năng: phòng chỉ huy, giếng nước ngầm, bệnh viện phẫu thuật, bếp Hoàng Cầm.",
            "Bảng phân tích 3 tầng độ sâu hầm: Độ sâu mét, khả năng chịu lực, chức năng sinh hoạt.",
            "/cu-chi-tunnels-travel-guide",
            "Bài 12 (Claustrophobia), Bài 14 (How Built)",
            "/tour/half-day-cu-chi-tunnels-tour",
            "Sprint 3", "Sẵn sàng viết"
        ),
        (
            "14", "Tier C: Authority & History",
            "How the Cu Chi Tunnels Were Built: Hand Tools, Soil Science & Ingenuity",
            "/how-cu-chi-tunnels-were-built",
            "how were cu chi tunnels built",
            "cu chi tunnels construction tools; cu chi red clay soil engineering",
            "Kỳ tích đào hơn 200km hầm bằng cuốc chim, xẻng tay và sọt tre. Khoa học địa chất: Đất sét laterite đỏ Củ Chi khô lại cứng như bê tông, chịu lực cực tốt. Cách ngụy trang đất thừa ban đêm ra sông Sài Gòn hoặc hố bom cũ.",
            "Tóm tắt 3 yếu tố then chốt: Công cụ đào thô sơ; Đặc tính đất sét laterite; Kỹ thuật ngụy trang đất.",
            "/cu-chi-tunnels-travel-guide",
            "Bài 13 (Map), Bài 15 (Traps)",
            "/tour/half-day-cu-chi-tunnels-tour",
            "Sprint 3", "Sẵn sàng viết"
        ),
        (
            "15", "Tier C: Authority & History",
            "The Traps of Cu Chi: Booby Traps, Punji Sticks & Guerilla Defense Tactics",
            "/booby-traps-of-cu-chi-tunnels",
            "cu chi tunnels traps",
            "punji stick traps vietnam war; cu chi booby traps list",
            "Các mô hình bẫy ngụy trang trưng bày trên thực địa: bẫy hầm chông nắp lật, bẫy kẹp nách, bẫy cửa quay. Triết lý chiến tranh du kích phòng vệ và tái chế phế liệu chiến tranh.",
            "Danh sách 5 loại bẫy du kích phổ biến và nguyên lý kích hoạt trên thực địa rừng Củ Chi.",
            "/cu-chi-tunnels-travel-guide",
            "Bài 14 (How Built), Bài 16 (Hoang Cam)",
            "/tour/half-day-cu-chi-tunnels-tour",
            "Sprint 3", "Sẵn sàng viết"
        ),
        (
            "16", "Tier C: Authority & History",
            "Hoang Cam Stove: The Genius Smokeless Kitchen of the Vietnam War",
            "/hoang-cam-smokeless-stove-cu-chi",
            "hoang cam stove",
            "smokeless stove vietnam war; how hoang cam stove works",
            "Câu chuyện sáng tạo của anh nuôi Hoàng Cầm: 'Nấu không khói, đi không dấu'. Nguyên lý vật lý của hệ thống rãnh tản khói ngầm uốn lượn dưới tán lá và đất ẩm. Tận mắt xem bếp Hoàng Cầm hoạt động tại khu rừng Củ Chi.",
            "Nguyên lý 3 bước tản khói ngầm của bếp Hoàng Cầm và ý nghĩa chiến thuật trong rừng.",
            "/cu-chi-tunnels-travel-guide",
            "Bài 15 (Traps), Bài 18 (Cassava)",
            "/tour/half-day-cu-chi-tunnels-tour",
            "Sprint 3", "Sẵn sàng viết"
        ),
        (
            "17", "Tier C: Authority & History",
            "Ben Duoc Memorial Temple: The Sacred Monument in the Forest",
            "/ben-duoc-memorial-temple-guide",
            "ben duoc memorial temple",
            "ben duoc temple cu chi; sacred temple cu chi tunnels",
            "Kiến trúc tam quan và tháp 9 tầng uy nghiêm giữa rừng cao su bạt ngàn. Ý nghĩa lịch sử: Bức tường đá hoa cương khắc danh tính 44.520 liệt sĩ. Không gian tâm linh trang nghiêm, không thương mại hóa tại Bến Dược.",
            "Điểm nhấn kiến trúc đền Bến Dược; Số lượng liệt sĩ vinh danh; Quy tắc trang phục khi viếng đền.",
            "/cu-chi-tunnels-travel-guide",
            "Bài 02 (Ben Duoc vs Ben Dinh)",
            "/tour/half-day-cu-chi-tunnels-tour (Anchor: Ben Duoc historical tour)",
            "Sprint 3", "Sẵn sàng viết"
        ),
        (
            "18", "Tier C: Authority & History",
            "Eating Boiled Cassava with Sesame Salt: The Taste of Wartime Sustenance",
            "/eating-boiled-cassava-sesame-salt-cu-chi",
            "boiled cassava cu chi tunnels",
            "cassava with peanut salt vietnam; wartime food cu chi",
            "Ý nghĩa của củ khoai mì (sắn) trong việc duy trì sức bền của quân dân vùng đất thép. Trải nghiệm thưởng thức đĩa khoai mì hấp lá dứa nóng hổi chấm muối mè đậu phộng và ngụm trà sen ấm dưới tán rừng.",
            "Nguồn gốc món khoai mì luộc; Thành phần muối mè đậu phộng; Trải nghiệm ẩm thực tại di tích.",
            "/cu-chi-tunnels-travel-guide",
            "Bài 16 (Hoang Cam Stove)",
            "/tour/half-day-cu-chi-tunnels-tour",
            "Sprint 3", "Sẵn sàng viết"
        ),

        # TIER D: LONG-TAIL NICHES & CROSS-SELL
        (
            "19", "Tier D: Niche & Cross-sell",
            "Visiting Cu Chi Tunnels with Kids: Safety, Pace & Age Recommendations",
            "/visiting-cu-chi-tunnels-with-kids",
            "cu chi tunnels with kids",
            "family tour cu chi tunnels; cu chi tunnels suitable for children",
            "Khuyến nghị độ tuổi: Trẻ từ 7 tuổi trở lên; trẻ nhỏ hơn có thể đi dạo ngắm rừng mát mẻ. Lợi ích của tour xe riêng: Bé có thể ngủ nghỉ thoải mái trên xe, điều chỉnh thời gian nghỉ chân linh hoạt.",
            "Checklist an toàn cho trẻ: Tránh tiếng ồn trường bắn, mang nón rộng vành, thuốc xịt muỗi sinh học.",
            "/cu-chi-tunnels-travel-guide",
            "Bài 05 (Private Car), Bài 12 (Claustrophobia)",
            "/tour/half-day-cu-chi-tunnels-tour",
            "Sprint 4", "Sẵn sàng viết"
        ),
        (
            "20", "Tier D: Niche & Cross-sell",
            "Cu Chi Tunnels for Seniors & Travelers with Mobility Needs",
            "/cu-chi-tunnels-for-seniors",
            "cu chi tunnels for seniors",
            "accessible cu chi tunnels tour; cu chi tunnels elderly travelers",
            "Đánh giá thực địa: Đường đi bộ trong rừng bằng phẳng rợp bóng râm, có nhiều ghế đá nghỉ chân. Xe điện trung chuyển nội khu tại Bến Dược hỗ trợ giảm tải quãng đường đi bộ.",
            "Đánh giá lối tiếp cận: Đường mòn bằng phẳng, dịch vụ xe điện nội khu, hỗ trợ xe riêng đưa sát cổng.",
            "/cu-chi-tunnels-travel-guide",
            "Bài 05 (Private Car), Bài 17 (Ben Duoc Temple)",
            "/tour/half-day-cu-chi-tunnels-tour",
            "Sprint 4", "Sẵn sàng viết"
        ),
        (
            "21", "Tier D: Niche & Cross-sell",
            "Cu Chi Tunnels Shooting Range: Firearms, Rules & Verification Guide",
            "/cu-chi-tunnels-shooting-range-prices",
            "cu chi tunnels shooting range price",
            "shooting ak47 cu chi tunnels; cu chi tunnels gun range cost",
            "Tuân thủ Fact Base: Ghi rõ mức giá dao động ~50.000 - 65.000 VNĐ/viên đạn tùy loại súng (AK47, M16), tối thiểu 10 viên. Quy định an toàn do sĩ quan quân đội phụ trách. Ghi rõ nhãn Prices subject to official military range counter.",
            "Bảng tra cứu loại súng; Khoảng giá đạn tham khảo; Yêu cầu độ tuổi tối thiểu từ 16 tuổi.",
            "/cu-chi-tunnels-travel-guide",
            "Bài 10 (Fee & Hours)",
            "/tour/half-day-cu-chi-tunnels-tour",
            "Sprint 4", "Sẵn sàng viết"
        ),
        (
            "22", "Tier D: Niche & Cross-sell",
            "Cu Chi Tunnels and War Remnants Museum: A Seamless 1-Day History Journey",
            "/cu-chi-tunnels-and-war-remnants-museum-in-one-day",
            "cu chi tunnels and war remnants museum in one day",
            "vietnam war day tour saigon; cu chi and war museum itinerary",
            "Hành trình kết nối lịch sử liền mạch: Buổi sáng đi thực địa Củ Chi -> Buổi trưa ăn phở ngon tại trung tâm -> Buổi chiều tham quan Bảo tàng Chứng tích Chiến tranh. Di chuyển bằng xe riêng giúp giữ trọn thể lực và không gian suy ngẫm.",
            "Timeline 1 ngày kết hợp: 07:30 đi Củ Chi -> 12:30 ăn trưa -> 14:00 Bảo tàng Chứng tích Chiến tranh.",
            "/cu-chi-tunnels-travel-guide",
            "Bài 03 (Half-Day vs Full-Day)",
            "/tour/1-day-premium-cu-chi-tunnels",
            "Sprint 4", "Sẵn sàng viết"
        ),
        (
            "23", "Tier D: Niche & Cross-sell",
            "Is Cu Chi Tunnels and Mekong Delta in One Day Actually Worth It?",
            "/cu-chi-tunnels-and-mekong-delta-in-one-day",
            "cu chi tunnels and mekong delta in one day",
            "can you do cu chi and mekong in 1 day; cuchi and mekong delta 1 day tour private",
            "Đánh giá khách quan theo 3 hồ sơ khách lữ hành: 1. Khách đi lần đầu, ít thời gian: Có thể đi nhưng ngày sẽ rất dài (07:00 - 18:30). 2. Khách đi xe riêng cao cấp: Rất khả thi nhờ né kẹt xe và đi thẳng cao tốc về Mỹ Tho. 3. Khách du lịch chậm (Slow traveler): Khuyến nghị tách thành 2 ngày riêng biệt.",
            "Khuyến nghị theo 3 đối tượng khách; So sánh tổng thời gian ngồi xe giữa tour bus và xe riêng.",
            "/cu-chi-tunnels-travel-guide",
            "Bài 03 (Half-Day vs Full-Day)",
            "/tour/half-day-cu-chi-tunnels-tour & /tour/full-day-mekong-delta-tour-ben-tre-my-tho",
            "Sprint 4", "Sẵn sàng viết"
        ),

        # TIER E: FIRST-HAND EXPERIENCE & ORIGINAL DATA
        (
            "24", "Tier E: First-Hand Data",
            "What a Cu Chi Tunnels Private Tour Is Actually Like: An Hour-by-Hour Guest Journey",
            "/what-a-cu-chi-tunnels-private-tour-is-actually-like",
            "cu chi tunnels private tour experience",
            "honest cu chi tunnels review; inside a private cu chi tour",
            "Tường thuật chân thực từng giờ: 07:00 đón tại sảnh, gặm bánh mì giòn trên xe ngắm phố xá thức giấc -> 08:30 đến rừng cao su Bến Dược vắng bóng người -> 09:15 cùng Hướng dẫn viên riêng khám phá bẫy ngụy trang -> 11:30 thưởng thức khoai mì nóng -> 13:15 về đến khách sạn. Ảnh tư liệu thực tế.",
            "Timeline nhật ký thực địa chi tiết từng mốc 30 phút từ lúc đón khách đến khi kết thúc tour.",
            "/cu-chi-tunnels-travel-guide",
            "Bài 04 (Worth It), Bài 05 (Private Car), Bài 25 (Hour-by-Hour)",
            "/tour/half-day-cu-chi-tunnels-tour (Anchor: explore our private Cu Chi itinerary)",
            "Sprint 2", "Sẵn sàng viết"
        ),
        (
            "25", "Tier E: First-Hand Data",
            "Cu Chi Tunnels by the Hour: What Changes Between 7:00 AM, 9:00 AM, and 1:00 PM?",
            "/cu-chi-tunnels-by-the-hour-traffic-crowds-timing",
            "best time of day to visit cu chi tunnels",
            "cu chi tunnels 7am vs 9am; cu chi tunnels crowd patterns by hour",
            "Bài phân tích dữ liệu vận hành cực hiếm: 07:00 - 08:30 AM (Đường thông thoáng, rừng Bến Dược mát 26°C, không có đoàn xe lớn); 09:30 - 11:30 AM (Giờ cao điểm tại Bến Đình, nhiệt độ tăng 32°C, hàng chờ chui hầm đông); 13:00 - 15:00 PM (Các đoàn sáng rút về, yên tĩnh trở lại nhưng nắng hơn).",
            "Biểu đồ phân bố mật độ du khách và nhiệt độ thực địa theo 3 khung giờ chính trong ngày.",
            "/cu-chi-tunnels-travel-guide",
            "Bài 06 (Without Crowds), Bài 09 (Morning vs Afternoon)",
            "/tour/half-day-cu-chi-tunnels-tour",
            "Sprint 2", "Sẵn sàng viết"
        )
    ]

    row_start = 2
    for idx, item in enumerate(articles_data):
        curr_row = row_start + idx
        ws1.append(list(item))
        ws1.row_dimensions[curr_row].height = 55
        
        is_zebra = (idx % 2 == 1)
        row_fill = zebra_pattern if is_zebra else white_fill
        
        for c_idx in range(1, len(item) + 1):
            cell = ws1.cell(row=curr_row, column=c_idx)
            cell.fill = row_fill
            cell.border = cell_border
            
            if c_idx == 1:
                cell.alignment = align_center
                cell.font = bold_font
            elif c_idx == 2:
                cell.alignment = align_center
                cell.font = bold_font
                if "Tier A" in str(item[1]):
                    cell.font = gold_badge_font
                elif "Tier E" in str(item[1]):
                    cell.font = green_badge_font
            elif c_idx in [3, 5]:
                cell.alignment = align_left
                cell.font = bold_font
            elif c_idx in [4, 9, 10, 11]:
                cell.alignment = align_left
                cell.font = link_font if ("/" in str(cell.value) or "tour" in str(cell.value).lower()) else regular_font
            elif c_idx in [12, 13]:
                cell.alignment = align_center
                cell.font = bold_font
            else:
                cell.alignment = align_left
                cell.font = regular_font

    # Column widths for Sheet 1
    col_widths1 = {
        1: 8,   # STT
        2: 24,  # Tier
        3: 38,  # Title
        4: 34,  # Slug
        5: 28,  # Primary Keyword
        6: 36,  # LSI Keywords
        7: 50,  # Brief
        8: 42,  # Quick Answer
        9: 25,  # Parent
        10: 25, # Siblings
        11: 35, # Commercial
        12: 12, # Sprint
        13: 16  # Status
    }
    for col_idx, width in col_widths1.items():
        col_letter = get_column_letter(col_idx)
        ws1.column_dimensions[col_letter].width = width

    ws1.freeze_panes = "C2"

    # -------------------------------------------------------------------------
    # SHEET 2: Lo_Trinh_Sprint_Gantt
    # -------------------------------------------------------------------------
    ws2 = wb.create_sheet(title="Lo_Trinh_Sprint_Gantt")
    ws2.views.sheetView[0].showGridLines = True
    
    headers2 = [
        "Sprint ID",
        "Giai Đoạn Chiến Lược",
        "Số Lượng Bài",
        "Danh Sách Bài Viết Thuộc Sprint",
        "Mục Tiêu Tác Nghiệp Cốt Lõi",
        "Thời Gian Dự Kiến",
        "Trạng Thái Nghiệm Thu"
    ]
    
    ws2.append(headers2)
    ws2.row_dimensions[1].height = 32
    for col_idx in range(1, len(headers2) + 1):
        cell = ws2.cell(row=1, column=col_idx)
        cell.fill = header_fill
        cell.font = header_font
        cell.alignment = align_header
        cell.border = header_border

    sprints_data = [
        (
            "Sprint 1",
            "Money Cluster (Chuyển Đổi Trực Tiếp)",
            "6 bài",
            "Bài 01 (Pillar), Bài 02 (Ben Dinh vs Ben Duoc), Bài 03 (Half vs Full), Bài 04 (Worth It), Bài 05 (Private Car), Bài 06 (Without Crowds)",
            "Xây dựng xong xương sống Pillar mẹ và 5 bài phễu chuyển đổi cao nhất trực tiếp kéo lead về 2 tour chủ lực.",
            "16/09/2026 – 21/09/2026",
            "Ưu tiên cao nhất (Sprint hiện tại)"
        ),
        (
            "Sprint 2",
            "First-Party Data & Logistics Decision",
            "7 bài",
            "Bài 24 (Guest Journey), Bài 25 (Hour-by-Hour), Bài 07 (Distance), Bài 08 (How to Get There), Bài 09 (Best Time), Bài 10 (Fee & Hours), Bài 11 (Small Group vs Private), Bài 12 (Claustrophobia)",
            "Tạo dựng vũ khí độc quyền GEO Moat (dữ liệu vận hành thực địa của The Rice Tour) và giải tỏa toàn bộ băn khoăn đi lại.",
            "22/09/2026 – 28/09/2026",
            "Sắp thực thi"
        ),
        (
            "Sprint 3",
            "Topical Authority & War History",
            "6 bài",
            "Bài 13 (Map 3 Levels), Bài 14 (How Tunnels Built), Bài 15 (Booby Traps), Bài 16 (Hoang Cam Stove), Bài 17 (Ben Duoc Memorial Temple), Bài 18 (Boiled Cassava)",
            "Khẳng định chiều sâu tri thức lịch sử chuẩn 'Du lịch có GUU', phủ trọn các truy vấn giáo dục và di sản.",
            "29/09/2026 – 04/10/2026",
            "Lên kế hoạch"
        ),
        (
            "Sprint 4",
            "Niches, Combos & Cross-sell",
            "6 bài",
            "Bài 19 (Kids & Family), Bài 20 (Seniors & Accessibility), Bài 21 (Shooting Range), Bài 22 (War Remnants Museum), Bài 23 (Cu Chi + Mekong 1 Day)",
            "Móc nối bán chéo tour Mekong, tour Bảo tàng và giải quyết các tệp khách hàng đặc thù.",
            "05/10/2026 – 09/10/2026",
            "Lên kế hoạch"
        )
    ]

    for s_idx, s_item in enumerate(sprints_data):
        curr_row = 2 + s_idx
        ws2.append(list(s_item))
        ws2.row_dimensions[curr_row].height = 45
        
        is_zebra = (s_idx % 2 == 1)
        row_fill = zebra_pattern if is_zebra else white_fill
        
        for c_idx in range(1, len(s_item) + 1):
            cell = ws2.cell(row=curr_row, column=c_idx)
            cell.fill = row_fill
            cell.border = cell_border
            if c_idx == 1:
                cell.alignment = align_center
                cell.font = bold_font
            elif c_idx == 2:
                cell.alignment = align_left
                cell.font = bold_font
            elif c_idx == 3:
                cell.alignment = align_center
                cell.font = bold_font
            elif c_idx == 7:
                cell.alignment = align_center
                cell.font = gold_badge_font if "Sprint 1" in str(s_item[0]) else regular_font
            else:
                cell.alignment = align_left
                cell.font = regular_font

    col_widths2 = {
        1: 14,  # Sprint ID
        2: 30,  # Giai đoạn
        3: 14,  # Số lượng
        4: 45,  # Danh sách
        5: 45,  # Mục tiêu
        6: 25,  # Thời gian
        7: 28   # Trạng thái
    }
    for col_idx, width in col_widths2.items():
        col_letter = get_column_letter(col_idx)
        ws2.column_dimensions[col_letter].width = width

    ws2.freeze_panes = "B2"

    # -------------------------------------------------------------------------
    # SHEET 3: Cu_Chi_Fact_Base
    # -------------------------------------------------------------------------
    ws3 = wb.create_sheet(title="Cu_Chi_Fact_Base")
    ws3.views.sheetView[0].showGridLines = True
    
    # Table 1: Geography & Sites
    ws3.append(["1. THÔNG SỐ ĐỊA LÝ & SO SÁNH HAI ĐIỂM THĂM QUAN (BẾN ĐÌNH VS. BẾN DƯỢC)"])
    ws3.merge_cells("A1:E1")
    ws3.cell(row=1, column=1).fill = header_fill
    ws3.cell(row=1, column=1).font = header_font
    ws3.cell(row=1, column=1).alignment = align_header
    ws3.row_dimensions[1].height = 30
    
    t1_headers = ["Tiêu Chí So Sánh", "Bến Đình (Ben Dinh)", "Bến Dược (Ben Duoc)", "Tác Động Trải Nghiệm", "Khuyến Nghị The Rice Tour"]
    ws3.append(t1_headers)
    ws3.row_dimensions[2].height = 25
    for c_idx in range(1, len(t1_headers) + 1):
        cell = ws3.cell(row=2, column=c_idx)
        cell.fill = sub_header_fill
        cell.font = sub_header_font
        cell.alignment = align_header
        cell.border = cell_border

    t1_data = [
        ("Khoảng cách từ trung tâm Q1", "Khoảng 45 – 50 km về phía Tây Bắc", "Khoảng 65 – 70 km về phía Tây Bắc", "Bến Dược xa hơn Bến Đình ~15–20 km", "Cần xe riêng cao cấp êm ái để không mệt mỏi"),
        ("Thời gian đi (07:00 AM xe riêng)", "Khoảng 1h15 – 1h30", "Khoảng 1h30 – 1h45", "Tiết kiệm 45 phút kẹt xe An Sương", "Bắt buộc tư vấn khách xuất phát 07:00 AM"),
        ("Thời gian đi (sau 08:00 AM)", "Khoảng 2h00 – 2h30", "Khoảng 2h15 – 2h45", "Dính giờ cao điểm xe tải QL22", "Không nhận tour muộn nếu khách muốn thư thả"),
        ("Tính chất di tích lịch sử", "Căn cứ Huyện ủy Củ Chi", "Căn cứ Khu ủy & Quân khu Sài Gòn – Gia Định", "Bến Dược là cơ quan chỉ huy cấp cao hơn", "Câu chuyện lịch sử tại Bến Dược sâu sắc hơn"),
        ("Đặc điểm hệ thống hầm ngầm", "Đã được cơi nới mở rộng 20-30% cho khách tour", "Hệ thống hầm 3 tầng giữ nhiều nét nguyên bản", "Bến Dược hẹp hơn, chân thực và cảm xúc hơn", "Khách sành luôn đánh giá Bến Dược cao hơn"),
        ("Mật độ du khách & xe bus", "Đông đúc, tập trung phần lớn tour bus 45 chỗ", "Yên tĩnh, thoáng đãng giữa rừng nguyên sinh", "Bến Đình ồn ào; Bến Dược thanh tịnh, tôn nghiêm", "Định vị Bến Dược làm MOAT độc quyền"),
        ("Công trình văn hóa đi kèm", "Xác xe tăng M41, hố bom, quầy lưu niệm", "Đền Tưởng niệm Bến Dược (44.520 liệt sĩ)", "Bến Dược có chiều sâu tâm linh và tri ân", "Dành 25 phút dâng hương tại Đền Bến Dược")
    ]
    for idx, row in enumerate(t1_data):
        curr_row = 3 + idx
        ws3.append(list(row))
        ws3.row_dimensions[curr_row].height = 35
        is_zebra = (idx % 2 == 1)
        row_fill = zebra_pattern if is_zebra else white_fill
        for c_idx in range(1, len(row) + 1):
            cell = ws3.cell(row=curr_row, column=c_idx)
            cell.fill = row_fill
            cell.border = cell_border
            cell.alignment = align_left
            cell.font = bold_font if c_idx == 1 else regular_font

    # Table 2: Ticket & Operation
    row_t2_title = len(t1_data) + 5
    ws3.cell(row=row_t2_title, column=1, value="2. QUY CHUẨN THÔNG TIN VÉ, GIỜ MỞ CỬA & TRƯỜNG BẮN (2026 VERIFIED)")
    ws3.merge_cells(start_row=row_t2_title, start_column=1, end_row=row_t2_title, end_column=5)
    ws3.cell(row=row_t2_title, column=1).fill = header_fill
    ws3.cell(row=row_t2_title, column=1).font = header_font
    ws3.cell(row=row_t2_title, column=1).alignment = align_header
    ws3.row_dimensions[row_t2_title].height = 30

    t2_headers = ["Hạng Mục", "Thông Tin Niêm Yết 2026", "Ghi Chú Nghiệp Vụ Bắt Buộc", "Rủi Ro Factual Cần Tránh", "Áp Dụng Trong Bài Viết"]
    ws3.cell(row=row_t2_title+1, column=1)
    for c_idx, h in enumerate(t2_headers):
        cell = ws3.cell(row=row_t2_title+1, column=c_idx+1, value=h)
        cell.fill = sub_header_fill
        cell.font = sub_header_font
        cell.alignment = align_header
        cell.border = cell_border
    ws3.row_dimensions[row_t2_title+1].height = 25

    t2_data = [
        ("Giờ mở cửa di tích", "07:00 – 17:00 hàng ngày", "Mở cửa tất cả các ngày trong tuần, kể cả Lễ Tết", "Không ghi mở cửa lúc 08:00 (thực tế 07:00 mở)", "Ghi rõ 07:00 AM trong bài Entrance Fee"),
        ("Giá vé cổng Bến Dược", "125.000 VNĐ / khách", "Bao gồm vé vào cổng + hướng dẫn viên nội bộ", "Không nhầm lẫn với giá tour trọn gói", "Đồng bộ 125k trên mọi bài viết"),
        ("Giá vé cổng Bến Đình", "125.000 VNĐ / khách", "Đã bao gồm thuế và phí bảo tồn di tích", "Không ghi giá cũ 110k hay 90k", "Đồng bộ 125k trên mọi bài viết"),
        ("Trường bắn thể thao", "Khoảng 50.000 – 65.000 VNĐ/viên đạn", "Tối thiểu 10 viên, quân nhân kèm 1:1, từ 16 tuổi", "TUYỆT ĐỐI KHÔNG ghi giá cố định chết cứng", "Luôn kèm nhãn: Subject to range counter"),
        ("Khoai mì & Trà lá dứa", "Đã bao gồm trong vé tham quan", "Phục vụ tại khu vực Bếp Hoàng Cầm dưới rừng", "Không tính thêm tiền của khách", "Nhấn mạnh trải nghiệm ẩm thực kháng chiến")
    ]
    for idx, row in enumerate(t2_data):
        curr_row = row_t2_title + 2 + idx
        ws3.append(list(row))
        ws3.row_dimensions[curr_row].height = 35
        is_zebra = (idx % 2 == 1)
        row_fill = zebra_pattern if is_zebra else white_fill
        for c_idx in range(1, len(row) + 1):
            cell = ws3.cell(row=curr_row, column=c_idx)
            cell.fill = row_fill
            cell.border = cell_border
            cell.alignment = align_left
            cell.font = bold_font if c_idx == 1 else regular_font

    col_widths3 = {
        1: 28,  # Tiêu chí
        2: 32,  # Bến Đình / Niêm yết
        3: 35,  # Bến Dược / Ghi chú
        4: 35,  # Tác động
        5: 35   # Khuyến nghị
    }
    for col_idx, width in col_widths3.items():
        col_letter = get_column_letter(col_idx)
        ws3.column_dimensions[col_letter].width = width

    ws3.freeze_panes = "A3"

    output_path = "/Users/huynhtronghieu/Documents/thericetour/KE_HOACH_25_BAI_VIET_CU_CHI_SEO_GEO.xlsx"
    wb.save(output_path)
    print(f"Excel file created successfully at: {output_path}")

if __name__ == "__main__":
    create_cu_chi_excel()
