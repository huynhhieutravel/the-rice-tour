import re
import sys

def update_file():
    path = "src/pages/thien-dan-bac-kinh.astro"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Itinerary insight (Point 1)
    content = content.replace(
        "Nên tách làm 2 ngày riêng biệt để giữ trọn vẹn thể lực.",
        "Có thể kết hợp trong cùng một ngày nếu lịch trình gọn, nhưng nếu muốn tham quan thong thả, nên dành Thiên Đàn cho một buổi riêng."
    )

    # 4. Tiền Môn (Point 4)
    tien_mon_html = """
              </div>
              
              <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-2xs mt-6 space-y-2">
                <h3 class="font-bold text-slate-900 text-base">Sau Thiên Đàn Nên Đi Đâu?</h3>
                <p class="text-sm text-slate-700 leading-relaxed">
                  Tiền Môn là lựa chọn tự nhiên nếu vẫn còn buổi chiều. Từ khu vực Thiên Đàn có thể tiếp tục khám phá tuyến phố lịch sử phía Nam trung tâm Bắc Kinh, thay vì quay ngược sang khu Tử Cấm Thành.
                </p>
              </div>
            </div>
          </section>"""
    # Find the end of tuyen-tham-quan section
    content = content.replace("            </div>\n          </section>\n\n          {/* Section 13", tien_mon_html + "\n\n          {/* Section 13")
    
    # 5. Booking text (Point 5)
    content = content.replace(
        "Không cần đặt vé quá nhiều ngày trước như Tử Cấm Thành, nhưng vẫn có thể đặt online để chủ động lịch trình.",
        "Không bắt buộc phải đặt trước nhiều ngày như Tử Cấm Thành. Du khách có thể mua tại chỗ hoặc đặt online; nếu đi cuối tuần, ngày lễ hoặc muốn chắc chắn có vé cho các điểm bên trong, nên đặt trước."
    )

    # 6. Điện Kỳ Niên + Hoàng Khung Vũ -> Bức Tường Vọng Âm (Point 6)
    content = content.replace(
        "Điện Kỳ Niên, Hoàng Khung Vũ (Bức Tường Vọng Âm) và Viên Khâu Đàn",
        "Điện Kỳ Niên, Bức Tường Vọng Âm và Viên Khâu Đàn"
    )
    content = content.replace(
        "Điện Kỳ Niên, Hoàng Khung Vũ, Viên Khâu Đàn",
        "Điện Kỳ Niên, Bức Tường Vọng Âm, Viên Khâu Đàn"
    )
    
    # 7. Lưu ý thứ hai 2026 (Point 7)
    old_monday_box = """⚠️ <strong>Lưu ý về Thứ Hai:</strong>
                <p>
                  Theo quy định thông thường, các điểm di tích bên trong sẽ <strong>đóng cửa vào Thứ Hai</strong> (công viên vẫn mở). Tuy nhiên, vào các dịp lễ tết hoặc các chương trình thí điểm mùa hè của Bắc Kinh, lịch mở cửa có thể được điều chỉnh linh hoạt. Du khách nên kiểm tra thông báo trước ngày đi.
                </p>"""
    new_monday_box = """⚠️ <strong>Lưu Ý Thứ Hai Trong Mùa Hè 2026:</strong>
                <p>
                  Theo chương trình điều tiết dòng khách của Bắc Kinh, Điện Kỳ Niên mở cửa đặc biệt vào thứ Hai từ 03/07 đến 31/08/2026; ngày đóng cửa được chuyển sang thứ Ba.
                </p>"""
    content = content.replace(old_monday_box, new_monday_box)
    content = content.replace("Giờ Mở Cửa & Lưu Ý Thứ Hai", "Giờ Mở Cửa & Lịch Đóng Cửa")

    # 8. Chiếu sáng ban đêm (Point 8)
    old_night = """<p>
                Thiên Đàn không mở cửa tham quan ban đêm thường xuyên. Tuy nhiên, trong các dịp lễ hội hoặc mùa cao điểm hè, Điện Kỳ Niên có thể được thắp sáng nghệ thuật vào tối thứ Sáu, thứ Bảy, tạo nên điểm nhấn rực rỡ trên trục Trung Trục của Bắc Kinh.
              </p>
              <div class="bg-slate-100 p-4 rounded-xl border border-slate-200 text-sm text-slate-800">
                ⚠️ <strong>Lưu ý:</strong> Chương trình chiếu sáng không đồng nghĩa toàn bộ Thiên Đàn mở cửa tham quan vào ban đêm.
              </div>"""
    new_night = """<p>
                Trong mùa hè 2026, Điện Kỳ Niên được chiếu sáng vào tối thứ Sáu, thứ Bảy và một số dịp lễ lớn. Đây là chương trình chiếu sáng đặc biệt, không đồng nghĩa toàn bộ Thiên Đàn mở cửa tham quan ban đêm.
              </p>"""
    content = content.replace(old_night, new_night)

    # 9. Đông Thiên Môn (Point 9)
    # Target: 
    # <div class="flex items-center justify-between">
    #   <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
    #     <span class="text-amber-600">🚪</span> 1. Đông Thiên Môn (Cổng Đông – Thuận tiện Metro nhất)
    #   </h3>
    #   <span class="text-xs bg-amber-100 text-amber-900 font-bold px-2.5 py-1 rounded-full">Khuyên dùng ⭐⭐⭐⭐⭐</span>
    # </div>
    # <p class="text-sm text-slate-600 leading-relaxed">
    #   Nằm sát ngay lối ra của ga Metro Line 5 (Tiantan Dongmen Station). Từ cổng này đi vào Điện Kỳ Niên và Hoàng Khung Vũ rất gần và bằng phẳng.
    # </p>
    old_gate = """<div class="flex items-center justify-between">
                  <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span class="text-amber-600">🚪</span> 1. Đông Thiên Môn (Cổng Đông – Thuận tiện Metro nhất)
                  </h3>
                  <span class="text-xs bg-amber-100 text-amber-900 font-bold px-2.5 py-1 rounded-full">Khuyên dùng ⭐⭐⭐⭐⭐</span>
                </div>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Nằm sát ngay lối ra của ga Metro Line 5 (Tiantan Dongmen Station). Từ cổng này đi vào Điện Kỳ Niên và Hoàng Khung Vũ rất gần và bằng phẳng.
                </p>"""
    new_gate = """<div class="flex items-center justify-between">
                  <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span class="text-amber-600">🚪</span> 1. Đông Thiên Môn (Cổng Đông)
                  </h3>
                </div>
                <p class="text-sm text-slate-600 leading-relaxed">
                  Đông Thiên Môn là lựa chọn thuận tiện nếu đi Metro Line 5. Nằm sát ngay lối ra của ga (Tiantan Dongmen Station), từ cổng này đi vào Điện Kỳ Niên và Hoàng Khung Vũ rất gần và bằng phẳng.
                </p>"""
    content = content.replace(old_gate, new_gate)

    # 10. Booking Tử Cấm Thành box (Point 10)
    booking_box = """<div class="bg-white p-5 rounded-xl border border-slate-200 mt-6 space-y-2 shadow-2xs">
                <h3 class="font-bold text-slate-900 text-base">Thiên Đàn Có Dễ Đặt Vé Hơn Tử Cấm Thành Không?</h3>
                <p class="text-sm text-slate-700 leading-relaxed">
                  Có. Khác với Tử Cấm Thành và Thiên An Môn, Thiên Đàn linh hoạt hơn về vé: có thể đặt online hoặc mua trực tiếp, tùy thời điểm và công suất. Nếu lịch trình Bắc Kinh có nhiều điểm bắt buộc reservation, Thiên Đàn thường là điểm dễ bố trí hơn.
                </p>
              </div>
            </div>
          </section>"""
    content = content.replace("        </ul>\n              </div>\n            </div>\n          </section>", "        </ul>\n              </div>\n\n              " + booking_box)

    # 11. Người lớn tuổi (Point 11)
    content = content.replace(
        "Thiên Đàn có địa hình hoàn toàn bằng phẳng, rợp bóng cây xanh và nhiều ghế nghỉ chân dọc đường.",
        "Phần lớn tuyến tham quan chính khá dễ đi, nhưng quãng đường trong công viên vẫn dài. Không gian tại đây rợp bóng cây xanh và có nhiều ghế nghỉ chân dọc đường."
    )

    # 12. Mùa đông (Point 12)
    content = content.replace(
        "Tuyết trắng phủ lên mái điện xanh tạo nên khung cảnh tương phản độc đáo.",
        "Mùa đông không phải mùa tệ để đi Thiên Đàn; lượng khách thường dễ chịu hơn, nhưng thời gian ngoài trời lạnh và ngắn hơn, nên đi vào giữa buổi sáng."
    )

    # 15. Lịch sử (Point 15)
    content = content.replace(
        "Hai di sản nổi tiếng cùng được xây dựng năm 1420",
        "Hai quần thể đều gắn với công cuộc xây dựng Bắc Kinh thời Vĩnh Lạc đầu thế kỷ XV"
    )

    # 14. Move Section 6 (Thiên Đàn Buổi Sáng) up to be Section 5
    # Find the exact blocks
    sec5_start = "{/* Section 5: Điểm Ít Nhắc Đến */}"
    sec6_start = "{/* Section 6: Thiên Đàn Buổi Sáng */}"
    sec7_start = "{/* Section 7: Có Cần Đặt Vé Trước Không? */}"

    parts = content.split(sec6_start)
    if len(parts) == 2:
        top_half = parts[0]
        bottom_half = parts[1]
        
        # Split bottom half at sec7_start
        bottom_parts = bottom_half.split(sec7_start)
        sec6_content = bottom_parts[0]
        rest_of_bottom = sec7_start + bottom_parts[1]
        
        # Now top half has sec5 inside it.
        top_parts = top_half.split(sec5_start)
        before_sec5 = top_parts[0]
        sec5_content = sec5_start + top_parts[1]
        
        # Modify sec6 content to add the new text
        sec6_content = sec6_content.replace(
            "Đây là lúc công viên thể hiện rõ nét nhất đời sống thường nhật của người dân thủ đô:",
            "Tại Thiên Đàn, buổi sáng không phải chỉ là khung giờ ít khách; đó là lúc di sản chuyển thành không gian sống. Đây là lúc công viên thể hiện rõ nét nhất đời sống thường nhật của người dân thủ đô:"
        )

        # Recombine: before_sec5 + sec6_content + sec5_content + rest_of_bottom
        content = before_sec5 + "{/* Section 5: Thiên Đàn Buổi Sáng */}\n" + sec6_content.replace("Section 6", "Section 5") + sec5_content.replace("Section 5", "Section 6") + rest_of_bottom

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

    print("Success")

if __name__ == "__main__":
    update_file()
