const fs = require('fs');
const Database = require('better-sqlite3');

function generateSikkimHtml() {
  const html = `<div class="elementor-tour-wrapper custom-tour-layout max-w-[1200px] mx-auto px-4 py-8 lg:py-12">
  <!-- 1. BREADCRUMB -->
  <nav class="flex text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center"><a href="/" class="hover:text-brand-500 transition-colors">Trang chủ</a></li>
      <li><div class="flex items-center"><span class="mx-2">/</span><a href="/tour" class="hover:text-brand-500 transition-colors">Tour</a></div></li>
      <li aria-current="page"><div class="flex items-center"><span class="mx-2">/</span><span class="text-gray-800 font-medium">Tour du lịch Sikkim - The last Shangrila in Himalaya</span></div></li>
    </ol>
  </nav>

  <!-- 2. MOBILE COVER IMAGE -->
  <div class="mobile-image">
    <div class="rounded-2xl overflow-hidden shadow-sm border border-gray-100 aspect-[16/9] bg-gray-100 relative mb-8">
      <img src="{{TOUR_FEATURED_IMAGE}}" alt="Tour du lịch Sikkim - The last Shangrila in Himalaya" class="w-full h-full object-cover absolute inset-0" width="800" height="450" fetchpriority="high" />
    </div>
  </div>

  <!-- 3. TOUR GRID CONTAINER -->
  <div class="tour-grid-container">
    
    <!-- ================= MAIN COLUMN (LEFT) ================= -->
    <div class="tour-main-col">
      <!-- 3.1 DESKTOP COVER IMAGE -->
      <div class="desktop-image">
        <div class="rounded-2xl overflow-hidden shadow-sm border border-gray-100 aspect-[16/9] bg-gray-100 relative mb-8">
          <img src="{{TOUR_FEATURED_IMAGE}}" alt="Tour du lịch Sikkim - The last Shangrila in Himalaya" class="w-full h-full object-cover absolute inset-0" width="800" height="450" fetchpriority="high" />
        </div>
      </div>

      <!-- 3.2 CTA BAR -->
      <div class="premium-cta-bar">
        <div class="cta-title hidden md:block">Tư vấn Tour</div>
        <div class="cta-links">
          <a href="/zalo" target="_blank" class="social-btn zalo" aria-label="Tư vấn Zalo">
            <div class="social-icon-wrapper">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M21.5 12.3c0-4.9-4.3-8.8-9.5-8.8s-9.5 3.9-9.5 8.8c0 4.1 2.9 7.6 6.8 8.6.2.1.5.3.4.6-.1.4-.4 1.3-.5 1.8-.1.3-.2.4.1.6.3.1.5-.1.8-.3 1.3-.8 2.8-1.8 3.3-2.1.3-.2.6-.2.9-.1 2.3.8 5-.4 6.3-2.3.8-1.5 1-4.1.9-6.8z"/></svg>
            </div>
            <div class="social-text">
              <span class="social-name">Zalo</span>
              <span class="social-desc">0934.8888.54</span>
            </div>
          </a>
          <a href="/msg" target="_blank" class="social-btn msg" aria-label="Tư vấn Messenger">
            <div class="social-icon-wrapper">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.923 1.472 5.518 3.753 7.185v3.42l3.41-1.86a10.871 10.871 0 0 0 2.837.382c5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.096 12.443-2.823-3.003-5.514 3.003 6.068-6.438 2.89 3.002 5.445-3.002-6.066 6.438z"/></svg>
            </div>
            <div class="social-text">
              <span class="social-name">Messenger</span>
              <span class="social-desc">Du Lịch Có Guu</span>
            </div>
          </a>
        </div>
        <button type="button" class="cta-form-btn js-open-booking-modal" data-tour-name="Tour du lịch Sikkim - The last Shangrila in Himalaya" aria-label="Điền Form tư vấn tour">
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
          Điền Form
        </button>
      </div>

      <!-- 3.3 HIGHLIGHTS SECTION -->
      <section class="tour-highlights-section mb-10 mt-10">
        <h2 class="text-2xl font-bold text-slate-800 mb-6">Trải nghiệm hấp dẫn của Tour Sikkim (Ấn Độ)</h2>
        
        [snippet name="trip-planner-box"]

        <!-- UNFOLD EDITORIAL SAPO -->
        <div class="tour-highlights-unfold relative mb-10 mt-6">
          <input type="checkbox" id="unfold-toggle" class="unfold-checkbox hidden" />
          <div class="unfold-content">
            <div class="custom-blog-prose max-w-none text-slate-700 leading-relaxed space-y-4 pb-4">
              <p style="margin-bottom:14px">Ẩn mình sâu dưới bóng râm hùng vĩ của rặng tuyết sơn Himalaya, <strong>Vương quốc cổ Sikkim</strong> được mệnh danh là <em>"The Last Shangri-La"</em> – miền đất thanh tịnh cuối cùng còn lưu giữ trọn vẹn vẻ đẹp nguyên sơ và chiều sâu tâm linh của Phật giáo Kim Cương Thừa.</p>
              <p style="margin-bottom:14px">Nơi đây từng in đậm dấu chân hoằng pháp của <strong>Đại sư Liên Hoa Sinh (Guru Rinpoche)</strong> từ thế kỷ thứ 8, người đã ban phúc lành và phong ấn những kho báu tâm linh (Terma) cho vùng đất thiêng. Hành trình 9 ngày 8 đêm cùng FIT TOUR sẽ đưa bạn lạc bước qua những nẻo đường huyền thoại: từ <strong>thị trấn đồi chè di sản Darjeeling</strong> cổ kính, cố đô <strong>Pelling</strong> thanh bình, quần thể tượng Phật <strong>Ravangla</strong> kỳ vĩ, thủ phủ <strong>Gangtok</strong> rực rỡ sắc màu, hồ băng ngọc bích <strong>Tsomgo</strong> linh thiêng cho đến miền hoa <strong>Kalimpong</strong> ngập tràn hương sắc.</p>
              <p style="margin-bottom:14px">Không chỉ là một chuyến du lịch ngắm cảnh đơn thuần, đây là hành trình <strong>"chữa lành và tìm lại sự bình an nội tâm"</strong> – nơi bạn được hòa mình vào thiên nhiên nguyên bản, lắng nghe tiếng chuông chùa ngân vang giữa ngàn mây tuyết và chiêm bái các thánh tích Phật giáo Mật Thừa cổ kính bậc nhất thế giới.</p>
            </div>
            <div class="unfold-overlay"></div>
          </div>
          <div class="unfold-btn-wrapper flex justify-center mt-2">
            <label for="unfold-toggle" class="unfold-btn shadow-sm cursor-pointer">
              <span class="btn-text-show">SHOW</span>
              <span class="btn-text-hide">HIDE</span>
              <svg class="w-4 h-4 ml-1 transition-transform duration-300 transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </label>
          </div>
        </div>

        <!-- HIGHLIGHTS CHECKLIST -->
        <div class="highlights-list">
          <div class="highlight-list-item">
            <svg class="highlight-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span class="highlight-text"><strong>Đón bình minh "Nhật chiếu Kim Sơn" tại Tiger Hill:</strong> Chiêm ngưỡng ánh bình minh dát vàng rực rỡ lên đỉnh tuyết Kangchenjunga (8.586m) – ngọn núi cao thứ 3 thế giới.</span>
          </div>
          <div class="highlight-list-item">
            <svg class="highlight-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span class="highlight-text"><strong>Trải nghiệm Tàu hơi nước Di sản Thế giới Darjeeling (UNESCO):</strong> Chuyến tàu Toy Train huyền thoại băng qua những đồi chè xanh mướt ngút ngàn và rừng thông mù sương.</span>
          </div>
          <div class="highlight-list-item">
            <svg class="highlight-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span class="highlight-text"><strong>Chiêm bái các Đại Tu Viện Cổ Mật phái Nyingma &amp; Kagyu:</strong> Viếng Tu viện Pemayangtse (kiệt tác Zangdokpalri), Tu viện Rumtek Pháp Luân Xa, Tu viện cổ Enchey và Druk Sang-Ngag Choeling.</span>
          </div>
          <div class="highlight-list-item">
            <svg class="highlight-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span class="highlight-text"><strong>Thánh địa Hồ ước nguyện Khecheopalri &amp; Cầu kính Skywalk (2.133m):</strong> Dấu chân Nữ thần Tara giữa rừng nguyên sinh và cầu kính không trung ôm trọn thung lũng mây Tây Sikkim.</span>
          </div>
          <div class="highlight-list-item">
            <svg class="highlight-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span class="highlight-text"><strong>Đại Tượng Phật Thích Ca 40m &amp; Tượng Quan Âm 42m:</strong> Hai công trình tâm linh vĩ đại ngự uy nghiêm giữa núi non trùng điệp tại Ravangla và đỉnh đồi Pelling.</span>
          </div>
          <div class="highlight-list-item">
            <svg class="highlight-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span class="highlight-text"><strong>Chinh phục Hồ băng tuyết Tsomgo (3.770m) &amp; Cưỡi bò Yak:</strong> Viên ngọc bích linh thiêng đổi màu kỳ ảo phản chiếu rặng tuyết sơn biên giới Tây Tạng.</span>
          </div>
          <div class="highlight-list-item">
            <svg class="highlight-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span class="highlight-text"><strong>Lạc bước giữa miền hoa Kalimpong &amp; Tu viện Durpin:</strong> Khám phá xứ sở hoa lan quý hiếm và tu viện Zang Dog Palri lưu giữ 108 tập kinh điển Kangyur linh thiêng.</span>
          </div>
          <div class="highlight-list-item">
            <svg class="highlight-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span class="highlight-text"><strong>Dịch vụ trọn gói chuẩn Guu – 100% Không Shopping:</strong> Bao gồm vé máy bay khứ hồi (quốc tế &amp; nội địa), Visa Ấn Độ, Giấy phép Sikkim (ILP), khách sạn 3*-4* cùng Trip Planner chuyên nghiệp.</span>
          </div>
        </div>
      </section>

      <!-- 3.4 QR CODE BOX -->
      <div class="premium-qr-box">
        <div class="qr-wrapper">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&amp;data=https://fittour.vn/tour/tour-du-lich-sikkim-2&amp;margin=0" alt="QR Link Tour du lịch Sikkim" width="96" height="96" loading="lazy" />
        </div>
        <div class="qr-text">
          <div class="qr-title">Quét mã QR</div>
          <div class="qr-desc">Lưu và chia sẻ lịch trình trên thiết bị di động của bạn.</div>
        </div>
      </div>

      <!-- 3.5 QUOTE BOX (MOOD TEXT) -->
      <div class="premium-quote-box">
        <svg class="quote-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
        <p class="quote-text">Tìm sự bình an nội tâm của bạn, kết nối với thiên nhiên và trải nghiệm vẻ đẹp của Sikkim.</p>
      </div>

      <!-- 3.6 NƠI Ở CỦA BẠN -->
      <section class="tour-accommodation-section mb-12 mt-10">
        <h2 class="text-2xl font-bold text-slate-800 mb-6">Nơi ở của bạn</h2>
        <div class="flex flex-col gap-6">
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style="background-color: #ffedd5; color: #ea580c;">
              <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            </div>
            <div>
              <h3 class="text-lg font-bold text-slate-800 mb-1">Khách sạn tiêu chuẩn 3* - 4*</h3>
              <p class="text-slate-600" style="margin-bottom:6px">Hệ thống khách sạn và retreat tiện nghi, ấm cúng theo phong cách bản địa (02 khách/phòng):</p>
              <ul class="text-sm text-slate-600 space-y-1" style="list-style-type:disc;padding-left:20px;margin:8px 0">
                <li><strong>Darjeeling:</strong> Sinclairs Darjeeling hoặc tương đương</li>
                <li><strong>Pelling:</strong> Summit Newa Regency hoặc tương đương</li>
                <li><strong>Gangtok:</strong> Dewachen Retreat hoặc tương đương</li>
                <li><strong>Kalimpong:</strong> Summit Barsana Resort &amp; Spa hoặc tương đương</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 3.7 LỊCH TRÌNH CHI TIẾT (ITINERARY ACCORDION) -->
      <section class="tour-itinerary-section mb-12 mt-12">
        <h2 class="text-2xl font-bold text-slate-800 mb-6">Lịch trình chi tiết</h2>
        <div class="tour-itinerary">
          <div class="flex flex-col gap-4">
            
            <!-- Ngày 1 -->
            <details class="premium-itinerary-item" open>
              <summary class="premium-itinerary-summary">
                <div class="itinerary-toggle-icon">+</div>
                <span>Ngày 1: Việt Nam – Delhi / Kolkata – Darjeeling | Bắt đầu hành trình</span>
              </summary>
              <div class="premium-itinerary-content custom-blog-prose max-w-none">
                <div class="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 class="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
                    <svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    Điểm nhấn trong ngày
                  </h4>
                  <ul class="text-sm text-slate-600 space-y-1.5" style="list-style-type:disc;padding-left:20px;margin:8px 0">
                    <li>Khởi hành chuyến bay quốc tế từ Việt Nam đến Ấn Độ (Kolkata/Delhi).</li>
                    <li>Nối chuyến bay nội địa đến Sân bay Bagdogra dưới chân dãy Himalaya hùng vĩ.</li>
                    <li>Hành trình 93 km uốn lượn vượt qua những đồi chè xanh ngát tiến vào thị trấn di sản Darjeeling.</li>
                    <li>Nhận phòng khách sạn và tự do dạo phố đêm khám phá thị trấn sương mù Darjeeling.</li>
                  </ul>
                </div>

                <p style="margin-bottom:14px"><strong>Khởi đầu (Việt Nam – Ấn Độ):</strong> Quý khách tập trung tại sân bay quốc tế Tân Sơn Nhất / Nội Bài trước giờ bay 3 tiếng. Hướng dẫn viên <strong>FIT TOUR</strong> đón đoàn, hỗ trợ làm thủ tục đáp chuyến bay thẳng khởi hành đi Ấn Độ (<strong>SGN/HAN – CCU/DEL</strong>).</p>
                <p style="margin-bottom:14px"><strong>Buổi trưa:</strong> Đến sân bay nối chuyến, đoàn dùng bữa sáng/nghỉ ngơi và làm thủ tục nối chuyến bay nội địa đi <strong>Sân bay Bagdogra (IXB)</strong>.</p>
                <p style="margin-bottom:14px"><strong>Buổi chiều:</strong> Hạ cánh tại Bagdogra, hướng dẫn viên địa phương nồng hậu chào đón đoàn với những chiếc khăn khata may mắn. Đoàn bắt đầu hành trình di chuyển lên <strong>Darjeeling</strong> (khoảng cách 93 km, xấp xỉ 3,5 – 4 giờ di chuyển) trên những cung đường đèo uốn lượn giữa những đồi chè xanh mướt và những rặng thông mù sương đặc trưng của vùng Himalaya. Đến Darjeeling (độ cao hơn 2.000m), quý khách nhận phòng khách sạn và nghỉ ngơi thư giãn.</p>
                
                <figure class="my-6">
                  <img src="https://media.fittour.vn/wp-content/uploads/2023/02/du-lich-Darjeeling.jpg" alt="Thị trấn đồi chè di sản Darjeeling" width="1280" height="720" class="rounded-xl shadow-sm" loading="lazy" />
                  <figcaption class="text-sm text-center text-gray-500 mt-2">Darjeeling – Thành phố đồi chè cổ kính nép mình dưới rặng Himalaya</figcaption>
                </figure>

                <p style="margin-bottom:14px"><strong>Buổi tối:</strong> Đoàn dùng bữa tối ấm cúng tại nhà hàng địa phương. Sau đó, quý khách tự do dạo bước khám phá quảng trường Chowrasta – phố đi bộ Mall Road nhộn nhịp về đêm của "thủ phủ trà" Darjeeling.</p>

                <div class="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200/60 text-slate-800 text-sm leading-relaxed">
                  <div class="font-bold text-amber-900 mb-1 flex items-center gap-2">
                    <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    Thông tin thú vị
                  </div>
                  <p class="text-slate-700 italic" style="margin-bottom:0">Darjeeling được mệnh danh là "Nữ hoàng của các trạm nghỉ dưỡng trên đồi" (Queen of the Hills), nơi từng là thủ phủ nghỉ dưỡng mùa hè nổi tiếng của giới quý tộc Anh vào thế kỷ 19 nhờ khí hậu mát lạnh quanh năm và cảnh quan núi rừng tuyệt mỹ.</p>
                </div>
              </div>
            </details>

            <!-- Ngày 2 -->
            <details class="premium-itinerary-item">
              <summary class="premium-itinerary-summary">
                <div class="itinerary-toggle-icon">+</div>
                <span>Ngày 2: Khám phá Darjeeling – Đón bình minh ngọn núi thứ 3 thế giới Kangchenjunga</span>
              </summary>
              <div class="premium-itinerary-content custom-blog-prose max-w-none">
                <div class="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 class="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
                    <svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    Điểm nhấn trong ngày
                  </h4>
                  <ul class="text-sm text-slate-600 space-y-1.5" style="list-style-type:disc;padding-left:20px;margin:8px 0">
                    <li>Đón bình minh huyền ảo và chiêm ngưỡng hiện tượng "Nhật chiếu Kim Sơn" trên đỉnh tuyết Kangchenjunga từ Đồi Tiger Hill.</li>
                    <li>Trải nghiệm Di sản Thế giới tàu hơi nước cổ Darjeeling Himalayan Railway (Toy Train).</li>
                    <li>Viếng Tu viện cổ Ghoom (Yiga Choeling) 170 năm tuổi – cái nôi Phật giáo Tây Tạng tại Darjeeling.</li>
                    <li>Khám phá Viện Bảo tàng Himalaya &amp; Công viên Bảo tồn Động vật Hoang dã (Báo tuyết, Gấu trúc đỏ).</li>
                    <li>Chiêm bái Thánh địa Phật giáo Rồng Thiêng – Tu viện Druk Sang-Ngag Choeling.</li>
                  </ul>
                </div>

                <p style="margin-bottom:14px"><strong>Sáng sớm (04:00):</strong> Đoàn thức dậy sớm, xe đưa quý khách lên đỉnh <strong>Tiger Hill (Đồi Hổ)</strong> ở độ cao 2.590m. Khi những tia nắng đầu tiên ló rạng, quý khách sẽ được tận mắt chiêm ngưỡng hiện tượng thiên nhiên kỳ vĩ <strong>"Nhật chiếu Kim Sơn"</strong> – ánh bình minh dát vàng rực rỡ lên đỉnh tuyết <strong>Kangchenjunga (8.586m)</strong> (ngọn núi cao thứ 3 trên thế giới) cùng rặng Himalaya trùng điệp.</p>

                <figure class="my-6">
                  <img src="https://media.fittour.vn/wp-content/uploads/2023/01/dinh-nui-Kangchenjunga.jpg" alt="Đỉnh Kangchenjunga rực ánh bình minh dát vàng" width="1280" height="720" class="rounded-xl shadow-sm" loading="lazy" />
                  <figcaption class="text-sm text-center text-gray-500 mt-2">Hiện tượng "Nhật chiếu Kim Sơn" trên đỉnh tuyết Kangchenjunga</figcaption>
                </figure>

                <p style="margin-bottom:14px"><strong>Buổi sáng:</strong> Đoàn trở về khách sạn dùng bữa sáng nóng hổi. Tiếp tục hành trình, đoàn trải nghiệm chuyến tàu hơi nước huyền thoại <strong>Darjeeling Himalayan Railway (Toy Train)</strong> – Di sản Thế giới UNESCO đưa đoàn đến viếng <strong>Tu viện Ghoom (Yiga Choeling)</strong>. Được xây dựng từ năm 1850, đây là tu viện cổ nhất Darjeeling lưu giữ pho tượng Phật Di Lặc Bồ Tát cao 4,5m mạ vàng linh thiêng.</p>
                <p style="margin-bottom:14px"><strong>Buổi chiều:</strong> Đoàn ghé thăm <strong>Viện Leo núi Himalaya (HMI)</strong> – nơi lưu giữ những kỷ vật lịch sử của nhà leo núi huyền thoại Tenzing Norgay, kết hợp tham quan <strong>Công viên Động vật Himalaya Padmaja Naidu</strong> – nơi bảo tồn các loài động vật quý hiếm vùng núi tuyết như Báo tuyết (Snow Leopard) và Gấu trúc đỏ (Red Panda). Cuối ngày, đoàn viếng <strong>Tu viện Druk Sang-Ngag Choeling (Khu Vườn Pháp của Truyền thừa Drukpa)</strong> – thánh địa tâm linh linh thiêng mang kiến trúc Phật giáo Kim Cương Thừa rực rỡ sắc màu.</p>
                <p style="margin-bottom:14px"><strong>Buổi tối:</strong> Quý khách trở lại khách sạn, dùng bữa tối ấm cúng, tự do thưởng thức một tách trà đen Darjeeling hảo hạng bên lò sưởi và nghỉ ngơi.</p>

                <div class="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200/60 text-slate-800 text-sm leading-relaxed">
                  <div class="font-bold text-amber-900 mb-1 flex items-center gap-2">
                    <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    Thông tin thú vị
                  </div>
                  <p class="text-slate-700 italic" style="margin-bottom:0">Hiện tượng "Nhật chiếu Kim Sơn" (Golden Sunrise on Snow Peaks) là khoảnh khắc cực kỳ linh thiêng trong văn hóa Himalaya, khi ánh mặt trời đầu ngày phản chiếu vào đỉnh tuyết trắng tạo nên vầng hào quang vàng kim rực rỡ, tượng trưng cho sự may mắn và thanh lọc tâm hồn.</p>
                </div>
              </div>
            </details>

            <!-- Ngày 3 -->
            <details class="premium-itinerary-item">
              <summary class="premium-itinerary-summary">
                <div class="itinerary-toggle-icon">+</div>
                <span>Ngày 3: Darjeeling – Pelling: Chạm vào vẻ đẹp cổ kính giữa mây trời Tây Sikkim</span>
              </summary>
              <div class="premium-itinerary-content custom-blog-prose max-w-none">
                <div class="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 class="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
                    <svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    Điểm nhấn trong ngày
                  </h4>
                  <ul class="text-sm text-slate-600 space-y-1.5" style="list-style-type:disc;padding-left:20px;margin:8px 0">
                    <li>Rời Darjeeling, băng qua thung lũng sông Rangeet tiến vào vùng đất thiêng Tây Sikkim.</li>
                    <li>Chiêm bái Tu viện Pemayangtse – tu viện cổ và danh tiếng bậc nhất phái Nyingma (thế kỷ 17).</li>
                    <li>Viếng Tu viện Mindroling – cái nôi gìn giữ truyền thừa Mật tông Tây Tạng nguyên bản.</li>
                    <li>Khám phá Di tích cố đô Hoàng gia Rabdentse cổ kính nép mình giữa rừng già.</li>
                  </ul>
                </div>

                <p style="margin-bottom:14px"><strong>Buổi sáng:</strong> Sau bữa sáng thảnh thơi tại khách sạn, đoàn khởi hành đi <strong>Pelling</strong> – thị trấn nhỏ thanh bình ở vùng <strong>Tây Sikkim</strong>, nằm ở chân rặng tuyết sơn <strong>Kangchenjunga</strong>. Cung đường đèo đưa quý khách vượt qua những đồn điền chè, băng qua dòng sông Rangeet cuồn cuộn chảy để tiến vào ranh giới Sikkim. Đến Pelling (độ cao 2.150m), quý khách nhận phòng khách sạn, ngắm nhìn toàn cảnh ngọn núi tuyết và các tu viện rải rác giữa núi rừng hoang sơ.</p>
                <p style="margin-bottom:14px"><strong>Buổi chiều:</strong> Bắt đầu hành trình chiêm bái và khám phá lịch sử Tây Sikkim:</p>
                <ul style="list-style-type:disc;padding-left:20px;margin:16px 0">
                  <li><strong>Tu viện Pemayangtse (2.085m):</strong> Là một trong những tu viện cổ kính và quan trọng nhất của dòng Cổ Mật <strong>Nyingmapa</strong> tại Sikkim được xây dựng từ năm 1705. Tu viện lưu giữ kiệt tác điêu khắc gỗ 7 tầng vô giá tái hiện cõi Tịnh Độ Zangdokpalri của Đại sư Liên Hoa Sinh.</li>
                  <li><strong>Tu viện Mindroling:</strong> Một trong sáu tu viện mẹ cốt lõi của trường phái Phật giáo Nyingmapa, nơi gìn giữ truyền thống thiền định và các nghi lễ Mật tông cổ truyền.</li>
                  <li><strong>Di tích Cố đô Hoàng gia Rabdentse:</strong> Quý khách tản bộ xuyên qua rừng sồi cổ thụ để chiêm ngưỡng khu tàn tích kinh đô thứ hai của Vương quốc Sikkim thế kỷ 17 với những bức tường thành đá rêu phong và cụm bảo tháp Chorten cổ kính nhìn xuống thung lũng sâu thẳm.</li>
                </ul>

                <figure class="my-6">
                  <img src="https://media.fittour.vn/wp-content/uploads/2023/02/tu-vien-pemayangtse.jpg" alt="Tu viện Pemayangtse cổ kính tại Pelling Tây Sikkim" width="1200" height="675" class="rounded-xl shadow-sm" loading="lazy" />
                  <figcaption class="text-sm text-center text-gray-500 mt-2">Tu viện Pemayangtse – Trung tâm Cổ Mật phái Nyingmapa tại Tây Sikkim</figcaption>
                </figure>

                <p style="margin-bottom:14px"><strong>Buổi tối:</strong> Đoàn dùng bữa tối tại nhà hàng địa phương, thưởng thức phong vị ẩm thực mộc mạc vùng Tây Sikkim và nghỉ đêm tại khách sạn ở Pelling.</p>

                <div class="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200/60 text-slate-800 text-sm leading-relaxed">
                  <div class="font-bold text-amber-900 mb-1 flex items-center gap-2">
                    <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    Thông tin thú vị
                  </div>
                  <p class="text-slate-700 italic" style="margin-bottom:0">Tác phẩm điêu khắc gỗ "Zangdokpalri" tại tầng trên cùng của Tu viện Pemayangtse được cố viện trưởng Dungzin Rinpoche tự tay chạm khắc thủ công ròng rã suốt 5 năm trời mà không cần dùng đến bất kỳ một chiếc đinh kim loại nào!</p>
                </div>
              </div>
            </details>

            <!-- Ngày 4 -->
            <details class="premium-itinerary-item">
              <summary class="premium-itinerary-summary">
                <div class="itinerary-toggle-icon">+</div>
                <span>Ngày 4: Pelling – Nhịp sống bình yên nơi thung lũng &amp; Cầu kính Skywalk</span>
              </summary>
              <div class="premium-itinerary-content custom-blog-prose max-w-none">
                <div class="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 class="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
                    <svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    Điểm nhấn trong ngày
                  </h4>
                  <ul class="text-sm text-slate-600 space-y-1.5" style="list-style-type:disc;padding-left:20px;margin:8px 0">
                    <li>Viếng Hồ ước nguyện Khecheopalri linh thiêng – Dấu chân Nữ thần Tara giữa rừng thiêng.</li>
                    <li>Chiêm ngưỡng Thác nước Rimbi thơ mộng giữa thiên nhiên trong lành.</li>
                    <li>Trải nghiệm văn hóa mộc mạc của người bản địa tại Làng cổ Darap Subba.</li>
                    <li>Chiêm bái Đại Tượng Quán Thế Âm Chenrezig khổng lồ cao 42m trên đỉnh đồi.</li>
                    <li>Thử thách lòng can đảm trên Cầu kính Skywalk đầu tiên của Ấn Độ (độ cao 2.133m).</li>
                    <li>Viếng Tu viện Sangachoeling – một trong những tu viện cổ nhất Sikkim (năm 1697).</li>
                  </ul>
                </div>

                <p style="margin-bottom:14px"><strong>Buổi sáng:</strong> Sau bữa sáng trong lành, đoàn khởi hành đi tham quan các danh thắng linh thiêng của Pelling:</p>
                <ul style="list-style-type:disc;padding-left:20px;margin:16px 0">
                  <li><strong>Hồ Khecheopalri (Hồ Dấu Chân Nữ Thần Tara):</strong> Hồ nước ngọt linh thiêng được cả Phật tử và người theo đạo Hindu tôn kính. Mặt hồ phẳng lặng như gương nằm ẩn mình giữa rừng già nguyên sinh, nước hồ được tin là có khả năng hiện thực hóa những ước nguyện tốt lành.</li>
                  <li><strong>Thác Rimbi:</strong> Dòng thác tự nhiên tung bọt trắng xóa giữa núi rừng, nơi quý khách hòa mình vào thiên nhiên và hít thở bầu không khí tinh khiết.</li>
                  <li><strong>Làng cổ Darap Subba:</strong> Ngôi làng thanh bình của người dân tộc bản địa Limboo/Subba, nơi lánh mình hoàn toàn khỏi sự ồn ào đô thị để trải nghiệm nếp sống truyền thống mộc mạc và lòng hiếu khách chân thành.</li>
                </ul>

                <figure class="my-6">
                  <img src="https://media.fittour.vn/wp-content/uploads/2023/02/ho-Khecheopalri.jpg" alt="Hồ Khecheopalri linh thiêng tại Sikkim" width="1280" height="720" class="rounded-xl shadow-sm" loading="lazy" />
                  <figcaption class="text-sm text-center text-gray-500 mt-2">Hồ Khecheopalri – Viên ngọc ước nguyện dấu chân Thánh Mẫu Tara</figcaption>
                </figure>

                <p style="margin-bottom:14px"><strong>Buổi chiều:</strong> Đoàn tiếp tục tiến lên ngọn đồi đối diện thị trấn Pelling:</p>
                <ul style="list-style-type:disc;padding-left:20px;margin:16px 0">
                  <li><strong>Đại Tượng Chenrezig (Quán Thế Âm Bồ Tát):</strong> Chiêm bái bức tượng Phật khổng lồ cao 42m ngự trên đài sen uy nghiêm nhìn bao quát thung lũng Himalaya hùng vĩ.</li>
                  <li><strong>Cầu kính Skywalk Pelling:</strong> Trải nghiệm bước đi trên cây cầu kính trong suốt đầu tiên của Ấn Độ ở độ cao 2.133m mang lại cảm giác lơ lửng giữa biển mây ngoạn mục.</li>
                  <li><strong>Tu viện Sangachoeling:</strong> Nằm trên đỉnh sống núi cao nhất Pelling được xây dựng từ năm 1697, là một trong những tu viện cổ kính nhất Sikkim với tầm nhìn panorama 360 độ ôm trọn rặng tuyết sơn.</li>
                </ul>

                <p style="margin-bottom:14px"><strong>Buổi tối:</strong> Quý khách trở về khách sạn, dùng bữa tối ấm cúng và nghỉ đêm tại Pelling.</p>

                <div class="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200/60 text-slate-800 text-sm leading-relaxed">
                  <div class="font-bold text-amber-900 mb-1 flex items-center gap-2">
                    <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    Thông tin thú vị
                  </div>
                  <p class="text-slate-700 italic" style="margin-bottom:0">Hồ Khecheopalri có một hiện tượng kỳ lạ được lưu truyền qua nhiều thế hệ: Dù nằm giữa rừng rậm rạp, trên mặt hồ không bao giờ có lá rụng trôi nổi vì những đàn chim rừng luôn bay sà xuống nhặt sạch từng chiếc lá mang đi để giữ cho hồ nước của Nữ thần Tara luôn thanh tịnh.</p>
                </div>
              </div>
            </details>

            <!-- Ngày 5 -->
            <details class="premium-itinerary-item">
              <summary class="premium-itinerary-summary">
                <div class="itinerary-toggle-icon">+</div>
                <span>Ngày 5: Pelling – Ravangla (Tượng Phật khổng lồ) – Thủ phủ Gangtok</span>
              </summary>
              <div class="premium-itinerary-content custom-blog-prose max-w-none">
                <div class="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 class="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
                    <svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    Điểm nhấn trong ngày
                  </h4>
                  <ul class="text-sm text-slate-600 space-y-1.5" style="list-style-type:disc;padding-left:20px;margin:8px 0">
                    <li>Rời Pelling, băng qua thung lũng Nam Sikkim đến thị trấn sương mù Ravangla.</li>
                    <li>Chiêm bái Đại Tượng Phật Thích Ca Mâu Ni cao 40m tại Công viên Phật giáo Ravangla (Tathagata Tsal).</li>
                    <li>Viếng Tu viện cổ Ralang – trung tâm tâm linh quan trọng của dòng Karma Kagyu.</li>
                    <li>Tiến vào thủ phủ Gangtok (1.750m) – ngắm nhìn phố núi hoàng tráng với kiến trúc Phật giáo độc đáo.</li>
                  </ul>
                </div>

                <p style="margin-bottom:14px"><strong>Buổi sáng:</strong> Sau bữa sáng tại khách sạn, đoàn làm thủ tục trả phòng và khởi hành di chuyển đi <strong>Gangtok</strong>. Trên đường đi, đoàn dừng chân tại vùng Nam Sikkim để tham quan:</p>
                <ul style="list-style-type:disc;padding-left:20px;margin:16px 0">
                  <li><strong>Công viên Phật giáo Ravangla (Tathagata Tsal):</strong> Quần thể tâm linh rộng lớn nằm giữa núi non trùng điệp, nổi bật với bức tượng Đức Phật Thích Ca Mâu Ni bằng đồng mạ vàng khổng lồ cao 40m khánh thành nhân dịp kỷ niệm 2550 năm ngày Đức Phật đản sinh. Dưới chân tượng là không gian triển lãm tranh bích họa tái hiện trọn vẹn cuộc đời Đức Thế Tôn.</li>
                  <li><strong>Tu viện Ralang (Ralang Monastery):</strong> Tu viện quan trọng và danh tiếng của dòng Karma Kagyu thuộc Phật giáo Tây Tạng, nổi tiếng với kiến trúc uy nghiêm và các nghi lễ Mật tông cổ truyền.</li>
                </ul>

                <figure class="my-6">
                  <img src="https://media.fittour.vn/wp-content/uploads/2023/01/thi-tran-gangtok.jpg" alt="Thủ phủ Gangtok ngắm từ đồi cao" width="1280" height="720" class="rounded-xl shadow-sm" loading="lazy" />
                  <figcaption class="text-sm text-center text-gray-500 mt-2">Thủ phủ Gangtok tráng lệ ngự trên sườn đông rặng Himalaya</figcaption>
                </figure>

                <p style="margin-bottom:14px"><strong>Buổi chiều:</strong> Đoàn tiếp tục hành trình di chuyển dọc theo thung lũng sông Teesta tiến vào <strong>Gangtok</strong> – thành phố thủ phủ tráng lệ của bang Sikkim nằm ở độ cao 1.750m. Đến Gangtok, quý khách nhận phòng khách sạn và nghỉ ngơi sau chặng đường dài ngắm cảnh.</p>
                <p style="margin-bottom:14px"><strong>Buổi tối:</strong> Thời gian tự do khám phá phố đi bộ <strong>MG Marg</strong> – trung tâm náo nhiệt nhất Gangtok. Quý khách tản bộ trên khu phố sạch sẽ không khói xe, chiêm ngưỡng các tòa nhà hành chính khổng lồ trang trí hoa văn Phật giáo truyền thống, thưởng thức những đĩa bánh Momo nóng hổi và cảm nhận nhịp sống độc đáo của vùng đất Phật giáo Himalaya. Nghỉ đêm tại khách sạn ở Gangtok.</p>

                <div class="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200/60 text-slate-800 text-sm leading-relaxed">
                  <div class="font-bold text-amber-900 mb-1 flex items-center gap-2">
                    <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    Thông tin thú vị
                  </div>
                  <p class="text-slate-700 italic" style="margin-bottom:0">Đại tượng Phật tại Công viên Phật giáo Ravangla được đích thân Đức Đạt Lai Lạt Ma thứ 14 thánh hóa vào năm 2013, trở thành một trong những điểm hành hương Phật giáo quan trọng và thanh tịnh bậc nhất trên toàn dãy Himalaya.</p>
                </div>
              </div>
            </details>

            <!-- Ngày 6 -->
            <details class="premium-itinerary-item">
              <summary class="premium-itinerary-summary">
                <div class="itinerary-toggle-icon">+</div>
                <span>Ngày 6: Khám phá Gangtok – Nơi thiên nhiên và huyền thoại cùng tồn tại</span>
              </summary>
              <div class="premium-itinerary-content custom-blog-prose max-w-none">
                <div class="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 class="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
                    <svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    Điểm nhấn trong ngày
                  </h4>
                  <ul class="text-sm text-slate-600 space-y-1.5" style="list-style-type:disc;padding-left:20px;margin:8px 0">
                    <li>Viếng Đại Tu viện Rumtek Dharma Chakra Centre – Trụ sở phái Karma Kagyu lớn nhất tại Sikkim.</li>
                    <li>Chiêm bái Tu viện cổ Enchey 200 năm tuổi giữa rừng thông bạt ngàn.</li>
                    <li>Viếng Bảo tháp Do Drul Chorten linh thiêng – biểu tượng chiến thắng của Chánh Pháp trước cái ác.</li>
                    <li>Tận hưởng cảnh sắc hoang sơ và khám phá truyền thuyết pháp sư rừng tại Thác nước Banjhakri.</li>
                  </ul>
                </div>

                <p style="margin-bottom:14px"><strong>Buổi sáng:</strong> Sau bữa sáng trong lành tại khách sạn, đoàn bắt đầu ngày khám phá những thánh tích tâm linh quan trọng nhất của thủ phủ Gangtok:</p>
                <ul style="list-style-type:disc;padding-left:20px;margin:16px 0">
                  <li><strong>Tu viện Rumtek (Dharma Chakra Centre):</strong> Ngự trên sườn đồi đối diện nhìn bao quát toàn cảnh thành phố Gangtok. Được xây dựng từ thế kỷ 16 và tái thiết bởi Đức Karmapa đời thứ 16 vào thập niên 1960, đây là tu viện lớn nhất Sikkim, nơi lưu giữ xá lợi và kho tàng nghệ thuật Phật giáo Mật Thừa quý báu nhất của dòng truyền thừa Kagyu.</li>
                  <li><strong>Tu viện Enchey ('Ngôi đền đơn độc'):</strong> Nằm ẩn mình giữa những rặng thông cao vút 200 năm tuổi thuộc dòng Nyingmapa, nổi tiếng với sự thanh tịnh và tầm nhìn thoáng đãng hướng về đỉnh Kangchenjunga.</li>
                  <li><strong>Bảo tháp Do Drul Chorten:</strong> Được xây dựng vào năm 1945 bởi Đức Trulshik Rinpoche, bảo tháp màu trắng muốt với đỉnh mạ vàng uy nghiêm được bao quanh bởi 108 bánh xe cầu nguyện mani. Đây là nơi tôn kính bậc nhất của người dân Gangtok để cầu nguyện bình an và xua tan những năng lượng tiêu cực.</li>
                </ul>

                <figure class="my-6">
                  <img src="https://media.fittour.vn/wp-content/uploads/2023/02/tu-vien-rumtek.jpg" alt="Tu viện Rumtek Gangtok Sikkim" width="1280" height="720" class="rounded-xl shadow-sm" loading="lazy" />
                  <figcaption class="text-sm text-center text-gray-500 mt-2">Tu viện Rumtek – Trung tâm Phật giáo Kim Cương Thừa lớn nhất tại Sikkim</figcaption>
                </figure>

                <p style="margin-bottom:14px"><strong>Buổi chiều:</strong> Đoàn tiếp tục di chuyển đến <strong>Thác Banjhakri (Banjhakri Falls &amp; Energy Park)</strong> nằm giữa thung lũng rừng nguyên sinh xanh ngắt. Quý khách tản bộ ngắm dòng thác đổ tung bọt trắng xóa, khám phá những bức tượng độc đáo tái hiện văn hóa Shaman giáo dân gian của người bản địa với hình tượng <em>Ban Jhakri</em> (Pháp sư chữa lành của rừng) và <em>Banjhakrini</em> (Nữ thần bảo hộ núi rừng).</p>
                <p style="margin-bottom:14px"><strong>Buổi tối:</strong> Đoàn trở về khách sạn dùng bữa tối và nghỉ ngơi tại Gangtok.</p>

                <div class="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200/60 text-slate-800 text-sm leading-relaxed">
                  <div class="font-bold text-amber-900 mb-1 flex items-center gap-2">
                    <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    Thông tin thú vị
                  </div>
                  <p class="text-slate-700 italic" style="margin-bottom:0">Theo truyền thuyết dân gian Sikkim, "Ban Jhakri" là vị pháp sư rừng có năng lực siêu nhiên, thường bảo vệ những đứa trẻ thuần khiết đi lạc trong rừng sâu và truyền dạy cho chúng các phép thuật chữa bệnh bằng thảo dược bí truyền của dãy Himalaya.</p>
                </div>
              </div>
            </details>

            <!-- Ngày 7 -->
            <details class="premium-itinerary-item">
              <summary class="premium-itinerary-summary">
                <div class="itinerary-toggle-icon">+</div>
                <span>Ngày 7: Gangtok – Chạm vào vẻ đẹp nguyên sơ của Hồ băng Tsomgo (3.770m)</span>
              </summary>
              <div class="premium-itinerary-content custom-blog-prose max-w-none">
                <div class="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 class="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
                    <svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    Điểm nhấn trong ngày
                  </h4>
                  <ul class="text-sm text-slate-600 space-y-1.5" style="list-style-type:disc;padding-left:20px;margin:8px 0">
                    <li>Chinh phục cung đèo ngoạn mục đến Hồ băng linh thiêng Tsomgo (Hồ Changu) ở độ cao 3.770m.</li>
                    <li>Chiêm ngưỡng mặt hồ màu ngọc bích đổi màu kỳ ảo phản chiếu rặng tuyết sơn biên giới Tây Tạng.</li>
                    <li>Trải nghiệm cưỡi bò Yak lông xù truyền thống trong trang phục thổ cẩm rực rỡ sắc màu.</li>
                    <li>Trở về Gangtok thưởng thức đêm ẩm thực và dạo phố tự do cuối cùng tại thủ phủ Sikkim.</li>
                  </ul>
                </div>

                <p style="margin-bottom:14px"><strong>Buổi sáng:</strong> Sau bữa sáng nóng hổi, đoàn lên xe khởi hành đi <strong>Hồ Tsomgo (còn gọi là Hồ Changu)</strong> nằm cách Gangtok khoảng 35 km về phía Đông Bắc, ở độ cao ấn tượng <strong>3.770m</strong> so với mực nước biển.</p>
                <p style="margin-bottom:14px">Con đường uốn lượn đưa đoàn vượt qua những cánh rừng thông, rừng đỗ quyên và những vách đá hùng vĩ. Hồ Tsomgo hiện ra như một viên ngọc bích khổng lồ lọt thỏm giữa những dãy núi tuyết vĩnh cửu. Nước hồ được nuôi dưỡng hoàn toàn bởi tuyết tan từ các đỉnh núi xung quanh.</p>
                <p style="margin-bottom:14px">Quý khách tản bộ quanh hồ, tận hưởng không khí trong lành mát lạnh và trải nghiệm chụp ảnh cùng những chú <strong>bò Yak</strong> lông dài được khoác lên mình những tấm thảm thổ cẩm rực rỡ mang đậm dấu ấn văn hóa du mục Himalaya.</p>

                <figure class="my-6">
                  <img src="https://media.fittour.vn/wp-content/uploads/2023/01/ho-Tsomgo-sikkim.jpg" alt="Hồ băng Tsomgo và bò Yak tại Sikkim" width="1280" height="720" class="rounded-xl shadow-sm" loading="lazy" />
                  <figcaption class="text-sm text-center text-gray-500 mt-2">Hồ băng Tsomgo linh thiêng phẳng lặng giữa rặng tuyết sơn</figcaption>
                </figure>

                <p style="margin-bottom:14px"><strong>Buổi chiều:</strong> Đoàn lên xe quay trở về thành phố Gangtok. Quý khách tự do ghé các xưởng thủ công mỹ nghệ, tìm mua những món quà lưu niệm độc đáo như tranh Thangka, khăn choàng len Pashmina hay vòng đá may mắn.</p>
                <p style="margin-bottom:14px"><strong>Buổi tối:</strong> Đoàn dùng bữa tối ấm cúng, tận hưởng đêm cuối cùng tại thủ phủ Gangtok và chuẩn bị hành lý cho chặng đường tiếp theo.</p>

                <div class="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200/60 text-slate-800 text-sm leading-relaxed">
                  <div class="font-bold text-amber-900 mb-1 flex items-center gap-2">
                    <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    Thông tin thú vị
                  </div>
                  <p class="text-slate-700 italic" style="margin-bottom:0">Hồ Tsomgo được người dân Sikkim và các Lạt Ma tôn sùng như một "Hồ thiêng tiên tri". Các vị cao tăng xưa kia thường quan sát sự chuyển màu kỳ diệu của làn nước hồ vào các thời điểm trong năm để dự báo về vận mệnh, thời tiết và tương lai của vương quốc.</p>
                </div>
              </div>
            </details>

            <!-- Ngày 8 -->
            <details class="premium-itinerary-item">
              <summary class="premium-itinerary-summary">
                <div class="itinerary-toggle-icon">+</div>
                <span>Ngày 8: Gangtok – Kalimpong: Một ngày lạc bước giữa miền hoa Đông Himalaya</span>
              </summary>
              <div class="premium-itinerary-content custom-blog-prose max-w-none">
                <div class="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 class="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
                    <svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    Điểm nhấn trong ngày
                  </h4>
                  <ul class="text-sm text-slate-600 space-y-1.5" style="list-style-type:disc;padding-left:20px;margin:8px 0">
                    <li>Rời Gangtok đến Kalimpong – thị trấn đồi thanh bình nổi tiếng với khí hậu ôn hòa và các vườn ươm hoa lan rực rỡ.</li>
                    <li>Chiêm bái Tu viện Zang Dog Palri Fo-Brang (Durpin Monastery) ngự trên đỉnh đồi Durpin lộng gió.</li>
                    <li>Viếng Tu viện cổ Tarpa Choling (phái Gelug) và Tu viện Bhutan cổ Thongsa Gumpa (năm 1692).</li>
                    <li>Thưởng thức toàn cảnh thung lũng sông Teesta và dãy Himalaya hùng vĩ từ các đài quan sát.</li>
                  </ul>
                </div>

                <p style="margin-bottom:14px"><strong>Buổi sáng:</strong> Sau bữa sáng tại khách sạn, đoàn trả phòng và khởi hành đi <strong>Kalimpong</strong> (khoảng cách 75 km, khoảng 2,5 – 3 giờ di chuyển). Nằm ở độ cao 1.250m, Kalimpong là một khu nghỉ dưỡng yên tĩnh trên đồi với khí hậu ôn hòa quanh năm, từng là trạm giao thương thịnh vượng trên con đường buôn bán tơ lụa giữa Ấn Độ và Tây Tạng. Kalimpong còn nổi tiếng khắp thế giới là xứ sở của các loài <strong>Hoa Lan (Orchids)</strong> và <strong>Hoa Lay Ơn (Gladioli)</strong>.</p>
                <p style="margin-bottom:14px"><strong>Buổi chiều:</strong> Đoàn bắt đầu hành trình tham quan các di sản tâm linh và thiên nhiên đặc sắc tại Kalimpong:</p>
                <ul style="list-style-type:disc;padding-left:20px;margin:16px 0">
                  <li><strong>Vườn ươm hoa Kalimpong:</strong> Chiêm ngưỡng hàng trăm loài lan rừng quý hiếm, xương rồng và các loài hoa đặc hữu của vùng Đông Himalaya.</li>
                  <li><strong>Tu viện Zang Dog Palri Fo-Brang (Tu viện Durpin):</strong> Tọa lạc trên đỉnh đồi Durpin Dara ở độ cao 1.372m, được chính Đức Đạt Lai Lạt Ma thánh hóa năm 1976. Nơi đây lưu giữ 108 tập kinh điển Kangyur linh thiêng do Đức Đạt Lai Lạt Ma mang từ Tây Tạng sang, cùng tầm nhìn tuyệt mỹ xuống dòng sông Teesta và đỉnh Kangchenjunga tuyết trắng.</li>
                  <li><strong>Tu viện Tarpa Choling:</strong> Tu viện cổ thuộc phái Mũ Vàng (Gelugpa) được thành lập từ năm 1912, lưu giữ kho tàng tư liệu Phật học quý giá.</li>
                  <li><strong>Tu viện Thongsa Gumpa:</strong> Tu viện cổ nhất khu vực do người Bhutan xây dựng từ năm 1692, mang đậm dấu ấn kiến trúc Bhutan cổ truyền.</li>
                </ul>

                <figure class="my-6">
                  <img src="https://media.fittour.vn/wp-content/uploads/2023/02/dia-diem-tham-quan-o-sikkim.jpg" alt="Tu viện Zang Dog Palri Fo-Brang tại Kalimpong" width="1280" height="720" class="rounded-xl shadow-sm" loading="lazy" />
                  <figcaption class="text-sm text-center text-gray-500 mt-2">Tu viện Zang Dog Palri Fo-Brang tráng lệ trên đỉnh đồi Durpin</figcaption>
                </figure>

                <p style="margin-bottom:14px"><strong>Buổi tối:</strong> Đoàn nhận phòng khách sạn, dùng bữa tối và tận hưởng buổi tối bình yên, lãng mạn tại thị trấn Kalimpong.</p>

                <div class="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200/60 text-slate-800 text-sm leading-relaxed">
                  <div class="font-bold text-amber-900 mb-1 flex items-center gap-2">
                    <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    Thông tin thú vị
                  </div>
                  <p class="text-slate-700 italic" style="margin-bottom:0">Thị trấn Kalimpong cung cấp tới 80% sản lượng hoa lan và củ hoa giống xuất khẩu của toàn Ấn Độ sang các nước phương Tây nhờ thổ nhưỡng và khí hậu vi mô lý tưởng dưới chân dãy Himalaya.</p>
                </div>
              </div>
            </details>

            <!-- Ngày 9 -->
            <details class="premium-itinerary-item">
              <summary class="premium-itinerary-summary">
                <div class="itinerary-toggle-icon">+</div>
                <span>Ngày 9: Kalimpong – Bagdogra – Delhi – Việt Nam: Ngày chia tay Sikkim</span>
              </summary>
              <div class="premium-itinerary-content custom-blog-prose max-w-none">
                <div class="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 class="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
                    <svg class="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    Điểm nhấn trong ngày
                  </h4>
                  <ul class="text-sm text-slate-600 space-y-1.5" style="list-style-type:disc;padding-left:20px;margin:8px 0">
                    <li>Tạm biệt miền đất thiên đường Sikkim và dãy Himalaya huyền thoại.</li>
                    <li>Di chuyển ra Sân bay Bagdogra (IXB) đáp chuyến bay nội địa về thủ đô Delhi.</li>
                    <li>Nối chuyến bay thẳng quốc tế từ Delhi về lại Việt Nam (DEL – SGN/HAN).</li>
                    <li>Kết thúc hành trình trọn vẹn và hẹn gặp lại trong những chuyến phiêu lưu tiếp theo!</li>
                  </ul>
                </div>

                <p style="margin-bottom:14px"><strong>Buổi sáng:</strong> Quý khách thưởng thức bữa sáng thảnh thơi tại khách sạn, ngắm nhìn bình minh lần cuối trên những triền đồi Kalimpong. Đoàn làm thủ tục trả phòng và lên xe khởi hành xuôi đèo về lại <strong>Sân bay Bagdogra (IXB)</strong> (khoảng cách 75 km, khoảng 2,5 giờ di chuyển).</p>
                <p style="margin-bottom:14px"><strong>Buổi trưa:</strong> Đến sân bay Bagdogra, đoàn làm thủ tục đáp chuyến bay nội địa về <strong>Thủ đô Delhi</strong>.</p>
                <p style="margin-bottom:14px"><strong>Buổi chiều / Buổi tối:</strong> Hạ cánh tại sân bay quốc tế Indira Gandhi (Delhi). Quý khách tự do dùng bữa tối, mua sắm miễn thuế (Duty Free) và làm thủ tục xuất cảnh đáp chuyến bay thẳng quốc tế về lại <strong>Việt Nam (DEL – SGN / DEL – HAN)</strong>.</p>
                <p style="margin-bottom:14px"><strong>Về đến Việt Nam:</strong> Máy bay hạ cánh tại sân bay Tân Sơn Nhất / Nội Bài. Hướng dẫn viên <strong>FIT TOUR</strong> chào tạm biệt những người bạn đồng hành, cảm ơn quý khách và hẹn gặp lại trong những hành trình khám phá các miền đất kỳ vĩ tiếp theo cùng FIT TOUR!</p>
              </div>
            </details>

          </div>
        </div>
        
        <!-- Lưu ý chương trình ngoài accordion -->
        <p class="mt-6 italic text-slate-700 font-medium bg-slate-50 p-4 rounded-lg border border-slate-100" style="margin-bottom:14px"><em>Lưu ý: Chương trình tour có thể thay đổi tùy theo điều kiện thực tế và chuyến bay, nhưng vẫn đảm bảo đầy đủ số lượng các điểm tham quan.</em></p>
      </section>

      <!-- 3.8 LỊCH KHỞI HÀNH (SCHEDULE TABLE) -->
      <section class="tour-schedule-section mb-12 mt-10">
        <h2 class="text-2xl font-bold text-slate-800 mb-6">Lịch khởi hành</h2>
        <div class="tour-schedule-table">
          <table style="width:100%;border-collapse:collapse;margin:8px 0 16px 0;font-size:15px">
            <thead>
              <tr style="background-color:#f8fafc">
                <th style="padding:12px 16px;border-bottom:2px solid #e2e8f0;text-align:left;font-weight:700;color:#1e293b">Lịch khởi hành</th>
                <th style="padding:12px 16px;border-bottom:2px solid #e2e8f0;text-align:left;font-weight:700;color:#1e293b">Giá vé (Người lớn)</th>
                <th style="padding:12px 16px;border-bottom:2px solid #e2e8f0;text-align:left;font-weight:700;color:#1e293b">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#475569;line-height:1.6;vertical-align:top">11/2 – 20/2</td>
                <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#0f172a;font-weight:600;line-height:1.6;vertical-align:top">64.450.000 VNĐ</td>
                <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#16a34a;font-weight:600;line-height:1.6;vertical-align:top">Nhận đăng ký</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#475569;line-height:1.6;vertical-align:top">12/3 – 21/3</td>
                <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#0f172a;font-weight:600;line-height:1.6;vertical-align:top">64.450.000 VNĐ</td>
                <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#16a34a;font-weight:600;line-height:1.6;vertical-align:top">Nhận đăng ký</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#475569;line-height:1.6;vertical-align:top">20/10 – 29/10</td>
                <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#0f172a;font-weight:600;line-height:1.6;vertical-align:top">64.450.000 VNĐ</td>
                <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#16a34a;font-weight:600;line-height:1.6;vertical-align:top">Mùa đẹp nhất</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#475569;line-height:1.6;vertical-align:top">17/11 – 26/11</td>
                <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#0f172a;font-weight:600;line-height:1.6;vertical-align:top">67.750.000 VNĐ</td>
                <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#16a34a;font-weight:600;line-height:1.6;vertical-align:top">Nhận đăng ký</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#475569;line-height:1.6;vertical-align:top">15/12 – 24/12</td>
                <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#0f172a;font-weight:600;line-height:1.6;vertical-align:top">68.450.000 VNĐ</td>
                <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#16a34a;font-weight:600;line-height:1.6;vertical-align:top">Lễ hội / Giáng sinh</td>
              </tr>
            </tbody>
          </table>
          <p class="mt-4 italic text-slate-700 font-medium text-sm" style="margin-bottom:8px"><em>* Chương trình giới hạn số lượng nhóm, từ 10 – 12 người tham gia để đảm bảo chất lượng trải nghiệm tốt nhất.</em></p>
          <p class="italic text-slate-700 font-medium text-sm" style="margin-bottom:14px"><em>* Nếu quý khách có nhu cầu thiết kế tour riêng hoặc đoàn đông hơn, vui lòng liên hệ đội ngũ Trip Planner của FIT TOUR để tùy chỉnh lịch trình riêng.</em></p>
        </div>
      </section>

      <!-- 3.9 THÔNG TIN THÊM -->
      <section class="tour-faq-wrapper mb-12 mt-10">
        <h2 class="text-2xl font-bold text-slate-800 mb-6">Thông Tin Thêm</h2>
        <div class="flex flex-col gap-4">
          
          <!-- 1. Bao Gồm -->
          <details open class="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <summary class="flex justify-between items-center p-5 cursor-pointer font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 transition-colors">
              <div class="flex items-center gap-3">
                <svg width="22" height="22" fill="none" stroke="var(--color-brand-500, #ea580c)" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Dịch vụ Bao Gồm</span>
              </div>
              <span class="faq-toggle-icon font-bold text-xl text-gray-500">+</span>
            </summary>
            <div class="faq-content custom-blog-prose p-6 border-t border-gray-100">
              <ol class="list-decimal pl-5 space-y-2 text-slate-700" style="list-style-type:decimal;padding-left:20px;margin:16px 0">
                <li><strong>Vé máy bay khứ hồi:</strong><br />– Chặng bay quốc tế: SGN – BAGDOGRA – SGN (hoặc qua Delhi/Kolkata)<br />– Chặng bay nội địa: KOLKATA – BAGDOGRA – KOLKATA (hoặc Delhi – Bagdogra – Delhi)</li>
                <li><strong>Tất cả các loại thuế</strong> của chính phủ và địa phương.</li>
                <li><strong>Visa Ấn Độ:</strong> Loại Double Entry (nhập cảnh 2 lần).</li>
                <li><strong>Các bữa ăn:</strong> Được liệt kê trong hành trình 3 bữa/ngày.</li>
                <li><strong>Chỗ ở:</strong> Khách sạn tiêu chuẩn 3* - 4* (2 người/phòng, lẻ nam/nữ ghép phòng 3 hoặc phụ thu phòng đơn).</li>
                <li><strong>Vận chuyển:</strong> Tất cả các phương tiện vận chuyển trong nước bao gồm cả đưa đón sân bay.</li>
                <li><strong>Hướng dẫn địa phương:</strong> Nói tiếng Anh am hiểu sâu sắc văn hóa bản địa.</li>
                <li><strong>Điều hành / Trip Planner:</strong> Nhân sự từ FIT Tour hỗ trợ nói tiếng Việt – Anh suốt chuyến đi.</li>
                <li><strong>Tất cả vé tham quan</strong> theo chương trình.</li>
                <li><strong>Giấy phép vào Sikkim</strong> (Inner Line Permit / PAP).</li>
                <li><strong>Phí Visa Ấn Độ:</strong> Toàn bộ chi phí làm thủ tục visa.</li>
                <li><strong>Quà tặng lưu niệm:</strong> Quà tặng lưu niệm cùng Himalaya từ đối tác của FIT Tour.</li>
              </ol>
            </div>
          </details>

          <!-- 2. Không Bao Gồm -->
          <details class="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <summary class="flex justify-between items-center p-5 cursor-pointer font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 transition-colors">
              <div class="flex items-center gap-3">
                <svg width="22" height="22" fill="none" stroke="#ef4444" stroke-width="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                <span>Dịch vụ Không Bao Gồm</span>
              </div>
              <span class="faq-toggle-icon font-bold text-xl text-gray-500">+</span>
            </summary>
            <div class="faq-content custom-blog-prose p-6 border-t border-gray-100">
              <ol class="list-decimal pl-5 space-y-2 text-slate-700" style="list-style-type:decimal;padding-left:20px;margin:16px 0">
                <li>Các mục không nêu trong phần “Đã bao gồm”.</li>
                <li>Các loại thuế phí theo quy định Pháp Luật Việt Nam (VAT nếu có nhu cầu xuất hóa đơn).</li>
                <li>Trà, cà phê &amp; đồ uống có cồn khi đi.</li>
                <li>Phụ thu phòng đơn 450 USD/khách – nếu quý khách có nhu cầu ngủ riêng phòng.</li>
                <li>Các chi phí mang tính chất cá nhân như giặt là, điện thoại, bar, Wifi, v.v.</li>
                <li>Tip cho (các) hướng dẫn (mức đề nghị: 10 USD/khách * 9 ngày ~ 90 USD/khách).</li>
                <li>Các chi phí cá nhân.</li>
              </ol>
            </div>
          </details>

          <!-- 3. Quy định Huỷ tour -->
          <details class="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <summary class="flex justify-between items-center p-5 cursor-pointer font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 transition-colors">
              <div class="flex items-center gap-3">
                <svg width="22" height="22" fill="none" stroke="#64748b" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Quy định Huỷ Tour &amp; Thanh Toán</span>
              </div>
              <span class="faq-toggle-icon font-bold text-xl text-gray-500">+</span>
            </summary>
            <div class="faq-content custom-blog-prose p-6 border-t border-gray-100">
              <ul class="list-disc pl-5 space-y-2 text-slate-700" style="list-style-type:disc;padding-left:20px;margin:16px 0">
                <li><strong>Hủy ngay sau khi được cấp visa:</strong> Chi phí hủy tour là 100% tiền cọc tour.</li>
                <li><strong>Hủy từ 30 – 45 ngày trước ngày khởi hành:</strong> Phí hủy là 20% trên tổng giá tour.</li>
                <li><strong>Hủy từ 16 – 29 ngày trước ngày khởi hành:</strong> Phí hủy là 40% trên tổng giá tour.</li>
                <li><strong>Hủy từ 08 – 15 ngày trước ngày khởi hành:</strong> Phí hủy là 60% trên tổng giá tour.</li>
                <li><strong>Hủy từ 04 – 07 ngày trước ngày khởi hành:</strong> Phí hủy là 90% trên tổng giá tour.</li>
                <li><strong>Hủy từ 01 – 03 ngày trước ngày khởi hành:</strong> Phí hủy là 100% trên tổng giá tour.</li>
                <li><em>Thời gian hủy tour tính theo ngày làm việc, không tính thứ Bảy, Chủ Nhật và các ngày Lễ Tết.</em></li>
              </ul>
              <p class="mt-4 text-sm" style="margin-bottom:14px"><strong>Xem thêm chi tiết:</strong> <a href="/dieu-khoan-dich-vu/" target="_blank" rel="noopener" class="text-brand-700 font-semibold hover:underline">Điều khoản dịch vụ FIT TOUR</a>.</p>
            </div>
          </details>

        </div>
      </section>

      <!-- 3.10 CÂU HỎI THƯỜNG GẶP (FAQS) -->
      <section class="tour-faq-wrapper mb-12 mt-10">
        <h2 class="text-2xl font-bold text-slate-800 mb-6">Câu Hỏi Thường Gặp (FAQs)</h2>
        <div class="flex flex-col gap-4">
          
          <!-- FAQ 1: Visa & Giấy phép PAP/ILP -->
          <details class="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <summary class="flex justify-between items-center p-5 cursor-pointer font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 transition-colors">
              <div class="flex items-center gap-3">
                <svg width="22" height="22" fill="none" stroke="#0284c7" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                <span>Thủ tục Visa Ấn Độ &amp; Giấy phép vào bang Sikkim (PAP / ILP)</span>
              </div>
              <span class="faq-toggle-icon font-bold text-xl text-gray-500">+</span>
            </summary>
            <div class="faq-content custom-blog-prose p-6 border-t border-gray-100 text-slate-700">
              <p style="margin-bottom:14px"><strong>Hồ sơ cần chuẩn bị đơn giản bao gồm:</strong></p>
              <ul class="list-disc pl-5 space-y-2 mb-4" style="list-style-type:disc;padding-left:20px;margin:16px 0">
                <li>Hộ chiếu gốc còn hạn trên 6 tháng tính từ ngày kết thúc tour (còn ít nhất 2 trang trống).</li>
                <li>File ảnh chân dung 5x5cm phông nền trắng chuẩn quốc tế (chụp không đeo kính).</li>
                <li>File scan trang thông tin hộ chiếu rõ nét.</li>
              </ul>
              <p style="margin-bottom:14px"><strong>Giấy phép khu vực bảo vệ (PAP/ILP):</strong> Do Sikkim giáp biên giới Tây Tạng và Bhutan, tất cả du khách quốc tế bắt buộc phải có giấy phép <em>Inner Line Permit (ILP)</em>. Đội ngũ FIT TOUR sẽ đại diện nộp hồ sơ xin cấp phép trước ngày khởi hành, quý khách chỉ cần mang theo hộ chiếu gốc.</p>
            </div>
          </details>

          <!-- FAQ 2: Độ cao & Sức khỏe -->
          <details class="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <summary class="flex justify-between items-center p-5 cursor-pointer font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 transition-colors">
              <div class="flex items-center gap-3">
                <svg width="22" height="22" fill="none" stroke="#eab308" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <span>Độ cao, say độ cao (AMS) và chuẩn bị sức khỏe</span>
              </div>
              <span class="faq-toggle-icon font-bold text-xl text-gray-500">+</span>
            </summary>
            <div class="faq-content custom-blog-prose p-6 border-t border-gray-100 text-slate-700">
              <p style="margin-bottom:14px">Độ cao trong tour tăng dần từ Darjeeling (2.050m), Pelling (2.150m), Gangtok (1.750m) lên điểm cao nhất là Hồ Tsomgo (3.770m).</p>
              <p style="margin-bottom:14px"><strong>Bí quyết thích nghi độ cao từ FIT TOUR:</strong></p>
              <ul class="list-disc pl-5 space-y-2 mb-4" style="list-style-type:disc;padding-left:20px;margin:16px 0">
                <li>Lịch trình được thiết kế nghỉ ngơi theo bậc thang để cơ thể thích nghi tự nhiên.</li>
                <li>Uống nhiều nước ấm (2 – 3 lít/ngày), hạn chế đồ uống có cồn và vận động mạnh đột ngột trong 2 ngày đầu.</li>
                <li>Đoàn luôn được trang bị bình oxy y tế dự phòng và thuốc hỗ trợ thích nghi độ cao dưới sự hướng dẫn của Tour Leader.</li>
              </ul>
            </div>
          </details>

          <!-- FAQ 3: Thời tiết, Trang phục & Hành lý -->
          <details class="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <summary class="flex justify-between items-center p-5 cursor-pointer font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 transition-colors">
              <div class="flex items-center gap-3">
                <svg width="22" height="22" fill="none" stroke="#10b981" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                <span>Thời tiết, trang phục và hành lý cần chuẩn bị</span>
              </div>
              <span class="faq-toggle-icon font-bold text-xl text-gray-500">+</span>
            </summary>
            <div class="faq-content custom-blog-prose p-6 border-t border-gray-100 text-slate-700">
              <p style="margin-bottom:14px">Thời tiết vùng núi Himalaya thay đổi theo độ cao: ban ngày nắng ráo mát mẻ (15°C – 22°C), sáng sớm và ban đêm trời trở lạnh (5°C – 10°C, vùng hồ Tsomgo có thể xuống dưới 0°C vào mùa đông).</p>
              <p style="margin-bottom:14px"><strong>Gợi ý trang phục:</strong> Áo giữ nhiệt Heattech, áo len/fleece, áo khoác gió/chống nước, áo lông vũ ấm, khăn quàng cổ, găng tay, mũ len, kính mát chống tia UV và giày đi bộ có độ bám tốt.</p>
            </div>
          </details>

          <!-- FAQ 4: Tiền tệ, SIM & Ẩm thực -->
          <details class="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <summary class="flex justify-between items-center p-5 cursor-pointer font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 transition-colors">
              <div class="flex items-center gap-3">
                <svg width="22" height="22" fill="none" stroke="#8b5cf6" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Tiền tệ, SIM điện thoại và ẩm thực địa phương</span>
              </div>
              <span class="faq-toggle-icon font-bold text-xl text-gray-500">+</span>
            </summary>
            <div class="faq-content custom-blog-prose p-6 border-t border-gray-100 text-slate-700">
              <p style="margin-bottom:14px"><strong>Tiền tệ:</strong> Sử dụng đồng Rupee Ấn Độ (INR). Quý khách có thể mang theo USD để đổi tại sân bay hoặc nhờ HDV FIT Tour hỗ trợ đổi tiền thuận tiện.</p>
              <p style="margin-bottom:14px"><strong>SIM &amp; Liên lạc:</strong> FIT Tour hướng dẫn cài đặt E-sim quốc tế hoặc mua SIM 4G Ấn Độ (Airtel/Jio). Mạng Internet ổn định tại Gangtok, Pelling, Darjeeling, Kalimpong.</p>
              <p style="margin-bottom:14px"><strong>Ẩm thực:</strong> Ẩm thực Sikkim mang phong vị Tây Tạng và Nepal, hương vị thanh nhẹ, dễ ăn hơn nhiều so với ẩm thực Ấn Độ truyền thống. Thực đơn đa dạng với bánh bao Momo, mì Thukpa, cơm chiên, súp nóng, thịt gà, trứng, rau tươi và các món trà bơ truyền thống thơm lừng.</p>
            </div>
          </details>

        </div>
      </section>

      <!-- 3.11 CẨM NANG & MẸO DU LỊCH SIKKIM (SCROLL NGANG CAROUSEL) -->
      <section class="tour-tips-section mb-12 mt-12">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h2 class="text-2xl font-bold text-slate-800 mb-1">Cẩm nang &amp; Mẹo du lịch Sikkim nên xem</h2>
            <p class="text-sm text-slate-500">Kinh nghiệm thực tế, văn hóa và điểm đến không thể bỏ lỡ tại Sikkim</p>
          </div>
          <div class="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-400">
            <span>Cuộn ngang</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </div>
        </div>

        <!-- Scroll Ngang Container -->
        <div class="flex gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory" style="scrollbar-width:thin;-webkit-overflow-scrolling:touch">
          
          <!-- Card 1 -->
          <div class="flex-shrink-0 w-[280px] sm:w-[320px] bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 snap-start flex flex-col group">
            <a href="/kinh-nghiem-du-lich-sikkim/" class="aspect-[16/9] block overflow-hidden bg-gray-100 relative">
              <img src="https://media.fittour.vn/wp-content/uploads/2023/02/kinh-nghiem-du-lich-sikkim.jpg" alt="Kinh nghiệm du lịch Sikkim – Hướng dẫn toàn diện" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width="768" height="432" loading="lazy" />
              <span class="absolute top-3 left-3 bg-brand-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">Kinh Nghiệm</span>
            </a>
            <div class="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 class="font-bold text-slate-800 text-base mb-2 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
                  <a href="/kinh-nghiem-du-lich-sikkim/">Kinh nghiệm du lịch Sikkim – Hướng dẫn toàn diện cho bạn</a>
                </h3>
                <p class="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-4">Tổng hợp bí kíp khám phá Sikkim: thời điểm đẹp, các điểm đến hấp dẫn, di chuyển và lưu ý an toàn vùng cao.</p>
              </div>
              <a href="/kinh-nghiem-du-lich-sikkim/" class="inline-flex items-center text-xs font-bold text-brand-700 hover:text-brand-800 transition-colors">
                Xem bài viết
                <svg class="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="flex-shrink-0 w-[280px] sm:w-[320px] bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 snap-start flex flex-col group">
            <a href="/thoi-gian-tot-nhat-de-du-lich-sikkim/" class="aspect-[16/9] block overflow-hidden bg-gray-100 relative">
              <img src="https://media.fittour.vn/wp-content/uploads/2023/02/thoi-gian-tot-nhat-de-du-lich-sikkim.jpg" alt="Thời gian tốt nhất để du lịch Sikkim" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width="768" height="432" loading="lazy" />
              <span class="absolute top-3 left-3 bg-amber-500 text-slate-900 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">Thời Điểm Vàng</span>
            </a>
            <div class="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 class="font-bold text-slate-800 text-base mb-2 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
                  <a href="/thoi-gian-tot-nhat-de-du-lich-sikkim/">Thời gian tốt nhất để du lịch Sikkim</a>
                </h3>
                <p class="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-4">Kinh nghiệm chọn thời điểm lý tưởng để chiêm ngưỡng mùa hoa đỗ quyên rực rỡ và những ngày trời thu ngắm Kangchenjunga trong vắt.</p>
              </div>
              <a href="/thoi-gian-tot-nhat-de-du-lich-sikkim/" class="inline-flex items-center text-xs font-bold text-brand-700 hover:text-brand-800 transition-colors">
                Xem bài viết
                <svg class="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="flex-shrink-0 w-[280px] sm:w-[320px] bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 snap-start flex flex-col group">
            <a href="/du-lich-gangtok/" class="aspect-[16/9] block overflow-hidden bg-gray-100 relative">
              <img src="https://media.fittour.vn/wp-content/uploads/2023/01/thi-tran-gangtok.jpg" alt="Cẩm nang du lịch Gangtok Sikkim" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width="768" height="432" loading="lazy" />
              <span class="absolute top-3 left-3 bg-blue-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">Điểm Đến</span>
            </a>
            <div class="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 class="font-bold text-slate-800 text-base mb-2 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
                  <a href="/du-lich-gangtok/">Cẩm nang du lịch Gangtok (Sikkim)</a>
                </h3>
                <p class="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-4">Khám phá thủ phủ Gangtok xinh đẹp với phố đi bộ MG Marg nhộn nhịp, các tu viện cổ và góc nhìn panorama ngắm núi tuyết.</p>
              </div>
              <a href="/du-lich-gangtok/" class="inline-flex items-center text-xs font-bold text-brand-700 hover:text-brand-800 transition-colors">
                Xem bài viết
                <svg class="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="flex-shrink-0 w-[280px] sm:w-[320px] bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 snap-start flex flex-col group">
            <a href="/dia-diem-du-lich-sikkim/" class="aspect-[16/9] block overflow-hidden bg-gray-100 relative">
              <img src="https://media.fittour.vn/wp-content/uploads/2023/02/dia-diem-tham-quan-o-sikkim.jpg" alt="Top 10 địa điểm du lịch Sikkim ĐẦY MÊ HOẶC" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width="768" height="432" loading="lazy" />
              <span class="absolute top-3 left-3 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">Top Địa Danh</span>
            </a>
            <div class="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 class="font-bold text-slate-800 text-base mb-2 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
                  <a href="/dia-diem-du-lich-sikkim/">Top 10 địa điểm du lịch Sikkim ĐẦY MÊ HOẶC</a>
                </h3>
                <p class="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-4">Khám phá 10 danh thắng ngoạn mục: Darjeeling, Pelling, Ravangla, Gangtok, Hồ Tsomgo và Kalimpong.</p>
              </div>
              <a href="/dia-diem-du-lich-sikkim/" class="inline-flex items-center text-xs font-bold text-brand-700 hover:text-brand-800 transition-colors">
                Xem bài viết
                <svg class="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>

          <!-- Card 5 -->
          <div class="flex-shrink-0 w-[280px] sm:w-[320px] bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 snap-start flex flex-col group">
            <a href="/mon-an-sikkim/" class="aspect-[16/9] block overflow-hidden bg-gray-100 relative">
              <img src="https://media.fittour.vn/wp-content/uploads/2023/02/mon-an-sikkim.jpg" alt="Top 9 món ăn Sikkim – Khám phá ẩm thực" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width="768" height="432" loading="lazy" />
              <span class="absolute top-3 left-3 bg-rose-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">Ẩm Thực</span>
            </a>
            <div class="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 class="font-bold text-slate-800 text-base mb-2 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
                  <a href="/mon-an-sikkim/">Top 9 món ăn Sikkim – Khám phá ẩm thực</a>
                </h3>
                <p class="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-4">Thưởng thức hương vị ẩm thực độc đáo: Bánh Momo nóng hổi, mì Thukpa, Phagshapa, Sha Phaley và trà bơ Tây Tạng.</p>
              </div>
              <a href="/mon-an-sikkim/" class="inline-flex items-center text-xs font-bold text-brand-700 hover:text-brand-800 transition-colors">
                Xem bài viết
                <svg class="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>

          <!-- Card 6 -->
          <div class="flex-shrink-0 w-[280px] sm:w-[320px] bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 snap-start flex flex-col group">
            <a href="/le-hoi-sikkim/" class="aspect-[16/9] block overflow-hidden bg-gray-100 relative">
              <img src="https://media.fittour.vn/wp-content/uploads/2023/02/le-hoi-sikkim.jpg" alt="Top 10 lễ hội Sikkim nổi bật nhất" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width="768" height="432" loading="lazy" />
              <span class="absolute top-3 left-3 bg-purple-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">Lễ Hội</span>
            </a>
            <div class="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 class="font-bold text-slate-800 text-base mb-2 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
                  <a href="/le-hoi-sikkim/">Top 10 lễ hội Sikkim nổi bật nhất</a>
                </h3>
                <p class="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-4">Hòa mình vào không khí văn hóa tâm linh rực rỡ: Lễ hội Losoong, Tết Losar, Lễ hội nước thiêng Bhumchu và Saga Dawa.</p>
              </div>
              <a href="/le-hoi-sikkim/" class="inline-flex items-center text-xs font-bold text-brand-700 hover:text-brand-800 transition-colors">
                Xem bài viết
                <svg class="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>

          <!-- Card 7 -->
          <div class="flex-shrink-0 w-[280px] sm:w-[320px] bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 snap-start flex flex-col group">
            <a href="/mua-sam-o-sikkim/" class="aspect-[16/9] block overflow-hidden bg-gray-100 relative">
              <img src="https://media.fittour.vn/wp-content/uploads/2023/02/mua-sam-o-sikkim.jpg" alt="Mua sắm ở Sikkim: Mua gì và ở đâu?" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width="768" height="432" loading="lazy" />
              <span class="absolute top-3 left-3 bg-teal-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">Mua Sắm</span>
            </a>
            <div class="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 class="font-bold text-slate-800 text-base mb-2 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
                  <a href="/mua-sam-o-sikkim/">Mua sắm ở Sikkim: Mua gì và ở đâu?</a>
                </h3>
                <p class="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-4">Gợi ý những món quà kỷ niệm ý nghĩa: Tranh Thangka Phật giáo, thảm len thủ công, trang sức đá quý và trà Darjeeling hảo hạng.</p>
              </div>
              <a href="/mua-sam-o-sikkim/" class="inline-flex items-center text-xs font-bold text-brand-700 hover:text-brand-800 transition-colors">
                Xem bài viết
                <svg class="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>

          <!-- Card 8 -->
          <div class="flex-shrink-0 w-[280px] sm:w-[320px] bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 snap-start flex flex-col group">
            <a href="/darjeeling/" class="aspect-[16/9] block overflow-hidden bg-gray-100 relative">
              <img src="https://media.fittour.vn/wp-content/uploads/2023/02/du-lich-Darjeeling.jpg" alt="Hướng dẫn du lịch Darjeeling – Sikkim" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width="768" height="432" loading="lazy" />
              <span class="absolute top-3 left-3 bg-indigo-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">Darjeeling</span>
            </a>
            <div class="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 class="font-bold text-slate-800 text-base mb-2 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
                  <a href="/darjeeling/">Hướng dẫn du lịch Darjeeling – Sikkim</a>
                </h3>
                <p class="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-4">Trải nghiệm xứ sở đồi chè Di sản UNESCO với chuyến tàu hơi nước Toy Train cổ kính và tu viện Druk Sangag Choeling linh thiêng.</p>
              </div>
              <a href="/darjeeling/" class="inline-flex items-center text-xs font-bold text-brand-700 hover:text-brand-800 transition-colors">
                Xem bài viết
                <svg class="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>

    <!-- ================= SIDEBAR COLUMN (RIGHT) ================= -->
    <div class="tour-sidebar-col">
      <div class="sticky top-[100px] flex flex-col gap-8">
        
        <!-- TITLE & SAPO SIDEBAR -->
        <div>
          <h1 class="text-3xl md:text-4xl font-extrabold text-slate-800 leading-[1.2] mt-0 tracking-tight" style="margin-bottom: 24px;">Tour du lịch Sikkim - The last Shangrila in Himalaya</h1>
          <div class="custom-blog-prose space-y-4 text-slate-600 text-[16px] leading-relaxed">
            <p style="margin-bottom:14px"><strong>Tuyến điểm: Kolkata/Delhi – Bagdogra – Darjeeling – Pelling – Ravangla – Gangtok – Hồ Tsomgo – Kalimpong.</strong></p>
            <p style="margin-bottom:14px">Hành trình 9 ngày 8 đêm đưa bạn khám phá trọn vẹn "Vương quốc bí ẩn Sikkim" cùng thị trấn đồi chè di sản Darjeeling nép mình dưới chân ngọn núi Kangchenjunga cao thứ 3 thế giới.</p>
            <p style="margin-bottom:14px">Chiêm bái các đại tu viện Phật giáo Mật Thừa cổ kính, đón bình minh "Nhật chiếu Kim Sơn", chinh phục hồ băng tuyết Tsomgo (3.770m) và trải nghiệm cầu kính Skywalk lơ lửng giữa biển mây.</p>
            <p style="margin-bottom:14px"><strong>FIT TOUR cam kết dịch vụ trọn gói chuẩn Guu: Đã bao gồm vé máy bay khứ hồi (quốc tế &amp; nội địa), Visa Ấn Độ, giấy phép Sikkim (ILP), khách sạn 3*-4* và Trip Planner hỗ trợ suốt tuyến.</strong></p>
          </div>
        </div>

        <!-- STICKY PRICE CARD -->
        <div class="sticky-price-card">
          <div class="service-grid">
            <div class="service-item">
              <div class="service-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div class="service-title">Dịch vụ</div>
              <div class="service-sub">Trọn gói</div>
            </div>
            <div class="service-item">
              <div class="service-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
              <div class="service-title">Thời gian</div>
              <div class="service-sub">{{TOUR_DURATION}}</div>
            </div>
          </div>

          <div style="margin-bottom: 24px;">
            <div class="price-label">Giá Từ</div>
            <div class="price-amount">{{TOUR_PRICE_FORMATTED}}</div>
          </div>

          <div class="action-buttons">
            <a href="/zalo" target="_blank" class="btn-primary btn-zalo" aria-label="Tư vấn Zalo">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M21.5 12.3c0-4.9-4.3-8.8-9.5-8.8s-9.5 3.9-9.5 8.8c0 4.1 2.9 7.6 6.8 8.6.2.1.5.3.4.6-.1.4-.4 1.3-.5 1.8-.1.3-.2.4.1.6.3.1.5-.1.8-.3 1.3-.8 2.8-1.8 3.3-2.1.3-.2.6-.2.9-.1 2.3.8 5-.4 6.3-2.3.8-1.5 1-4.1.9-6.8z"/></svg>
              Tư vấn Zalo
            </a>
            <a href="/msg" target="_blank" class="btn-primary btn-msg" aria-label="Tư vấn Messenger">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.923 1.472 5.518 3.753 7.185v3.42l3.41-1.86a10.871 10.871 0 0 0 2.837.382c5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.096 12.443-2.823-3.003-5.514 3.003 6.068-6.438 2.89 3.002 5.445-3.002-6.066 6.438z"/></svg>
              Messenger
            </a>
          </div>

        </div>

      </div>
    </div>

  </div>
</div>`;

  return html;
}

// Function to validate tags
function validateHtml(html) {
  const tagsToBalance = ['div', 'section', 'details', 'figure', 'figcaption', 'ul', 'ol', 'li', 'p', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'a', 'strong', 'em', 'span', 'button', 'nav', 'label', 'h1', 'h2', 'h3', 'h4'];
  const errors = [];
  
  for (const tag of tagsToBalance) {
    const openRegex = new RegExp(`<${tag}(\\s[^>]*)?>`, 'gi');
    const closeRegex = new RegExp(`</${tag}>`, 'gi');
    const openCount = (html.match(openRegex) || []).length;
    const closeCount = (html.match(closeRegex) || []).length;
    if (openCount !== closeCount) {
      errors.push(`Tag mismatch: <${tag}> (open: ${openCount}, close: ${closeCount})`);
    }
  }

  // Check for leak of other tour templates
  const forbiddenWords = ['Seoul', 'Mông Cổ', 'Thanh Tạng', 'Hàn Quốc', 'Nami', 'Jeonju', 'Taiga', 'Tsaatan', 'Lhasa'];
  const leaks = [];
  for (const word of forbiddenWords) {
    if (html.includes(word)) {
      leaks.push(word);
    }
  }

  return { errors, leaks };
}

const html = generateSikkimHtml();
const check = validateHtml(html);

console.log("Validation Errors:", check.errors);
console.log("Leak Detection:", check.leaks);

if (check.errors.length === 0 && check.leaks.length === 0) {
  const db = new Database(".wrangler/state/v3/d1/miniflare-D1DatabaseObject/ff7962b7b1b213a0c7275053885f635e4d68cb0811b671e41abdd0a235aa8f1e.sqlite");
  
  const stmt = db.prepare("UPDATE Tour SET content = ? WHERE slug = ?");
  const info = stmt.run(html, "tour-du-lich-sikkim-2");
  console.log("DB Update info:", info);
  console.log("SUCCESSFULLY enhanced Sapo and Highlights!");
} else {
  console.error("FAILED validation. Fix errors before updating DB.");
}
