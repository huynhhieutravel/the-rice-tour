import fs from 'fs';
import Database from 'better-sqlite3';
import { v4 as uuidv4 } from 'uuid';

const markdown = fs.readFileSync('../itinerary-bac-noi-mong-preview.md', 'utf-8');

let html = markdown
    .replace(/^### (.*$)/gim, '<h4 style="margin-top:2rem;"><strong>$1</strong></h4>')
    .replace(/^\> 🌟 \*\*(.*)\*\*/gim, '<p>🌟 <strong>$1</strong></p>')
    .replace(/^\> 💡 \*\*(.*)\*\*/gim, '<p>💡 <strong>$1</strong></p>')
    .replace(/^\> (.*$)/gim, '<p>$1</p>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/^\- (.*$)/gim, '<li>$1</li>');

html = html.replace(/(<li>.*<\/li>\s*)+/gim, '<ul>$&</ul>');

html = html.split('\n\n').map(p => {
    if (p.trim() && !p.trim().startsWith('<') && !p.trim().startsWith('---')) {
        return `<p>${p.trim()}</p>`;
    }
    return p;
}).join('\n\n');

html = html.replace(/\n\n+/g, '\n').replace(/---/g, '');

const fullContent = `
<h2>Trải nghiệm hấp dẫn của Tour Bắc Nội Mông</h2>
<p>Bắc Nội Mông – Nơi được mệnh danh là <strong>"Thiên Cao Địa Khoát"</strong> (trời cao đất rộng), đưa quý khách đến với vùng thảo nguyên bao la, trải nghiệm đời sống du mục thực thụ và khám phá sự giao thoa văn hóa độc đáo giữa Trung Quốc, Nga và Mông Cổ.</p>
<p><strong>Những điểm đến không thể bỏ lỡ:</strong></p>
<ul>
    <li>🚗 <strong>Đồng cỏ Hô Luân Bối Nhĩ</strong> - Một trong ba thảo nguyên lớn nhất thế giới, "vương quốc của cỏ".</li>
    <li>🚗 <strong>Hắc Sơn Đầu</strong> - Thử thách cưỡi ngựa trên thảo nguyên và ngắm hoàng hôn tuyệt đẹp.</li>
    <li>🚗 <strong>Mãn Châu Lý</strong> - Thành phố cửa khẩu lung linh sầm uất bậc nhất về đêm.</li>
    <li>🚗 <strong>Hồ Hô Luân</strong> - Một trong những hồ nước ngọt lớn nhất Trung Quốc.</li>
</ul>

<h2>Nơi ở của bạn</h2>
<p>Khách sạn tiêu chuẩn 4 sao tại các điểm đến và trải nghiệm nghỉ đêm tại <strong>Nhà gỗ Căn Hà</strong>, lều Mông Cổ cao cấp <strong>"Prairie Is Here"</strong>.</p>

<h2>Lịch trình chi tiết</h2>
${html}

<h2>Lịch khởi hành & Bảng Giá</h2>
<p><em>Vui lòng liên hệ trực tiếp với FIT TOUR để nhận lịch khởi hành và báo giá ưu đãi nhất cho Tour Bắc Nội Mông.</em></p>

<h2>Thông Tin Thêm</h2>
[elementor-template id="21966"]

<h2>Đánh giá của những khách hàng từng đồng hành cùng Fit Tour</h2>
[elementor-template id="21545"]

<a role="button" href="https://fittour.vn/zalo" target="_blank">Tư vấn về tuỳ chọn qua Zalo</a>
`;

const tour = {
    title: 'Tour Bắc Nội Mông 8N7Đ - Thiên Cao Địa Khoát',
    slug: 'tour-bac-noi-mong',
    excerpt: 'Hành trình khám phá thảo nguyên bao la Hô Luân Bối Nhĩ, cưỡi ngựa tại Hắc Sơn Đầu, giao lưu bộ lạc tuần lộc Ngao Lỗ Cổ Nhã và chiêm ngưỡng thành phố cửa khẩu Mãn Châu Lý rực rỡ.',
    content: fullContent,
    format: 'elementor'
};

const sql = `UPDATE Tour SET excerpt='${tour.excerpt.replace(/'/g, "''")}', content='${tour.content.replace(/'/g, "''")}', format='${tour.format}', title='${tour.title.replace(/'/g, "''")}', price_text='Liên hệ', days='8 ngày 7 đêm' WHERE slug='${tour.slug}';`;
fs.writeFileSync('update.sql', sql);
console.log('Saved update.sql for remote execution.');
