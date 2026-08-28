import type { Photo } from './types';

export interface Chapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  abstract: string;
  contentHTML: string;
  quote?: string;
  locationName: string;
  imgUrl: string;
}

export const STORIES: Chapter[] = [
  {
    id: 'cung-duong-huyen-thoai',
    number: '01',
    title: `Chinh Phục Những Cung Đường Huyền Thoại Của Himalaya`,
    subtitle: `Vượt qua các đèo núi cao ngoạn mục`,
    abstract: `Đối với nhiều du khách, Ladakh là một trong những hành trình road trip đáng nhớ nhất thế giới. Những con đường xuyên Himalaya liên tục đưa du khách vượt qua các đèo núi cao, nơi cảnh quan thay đổi từ thung lũng xanh, núi đá khô cằn đến những cao nguyên rộng lớn trải dài tới tận chân trời.`,
    contentHTML: `<p>Những cung đường nổi tiếng nhất tại Ladakh gồm:</p>
<ul>
<li><strong>Khardung La (5.359m)</strong> – Biểu tượng road trip của Ladakh và là cửa ngõ dẫn vào Nubra Valley.</li>
<li><strong>Chang La (5.360m)</strong> – Một trong những con đèo cao nhất thế giới, nổi tiếng trên hành trình đến Pangong Lake.</li>
<li><strong>Taglang La (5.328m)</strong> – Điểm nhấn của cung đường <a href="https://thericetour.com/cho-leh-ladakh" class="text-amber-700 font-semibold hover:text-amber-600 underline underline-offset-4 decoration-amber-700/30 transition-colors">Leh</a> – Manali huyền thoại.</li>
<li><strong>Fotu La (4.108m)</strong> – Đèo cao nhất trên tuyến Srinagar – Leh, mở ra khung cảnh Moonland Lamayuru độc đáo.</li>
<li><strong>Namika La (3.700m)</strong> – Con đèo gắn liền với những tuyến giao thương cổ trên Con Đường Tơ Lụa.</li>
</ul>
<p>Không ít du khách chia sẻ rằng điều họ nhớ nhất sau chuyến đi không phải một hồ nước hay tu viện nào cụ thể, mà là cảm giác đứng giữa những con đèo cao hơn 5.000 mét, nơi chỉ còn gió lạnh, núi non và bầu trời xanh bất tận của Himalaya.</p>`,
    quote: `Chỉ còn lại gió lạnh, núi non và bầu trời xanh bất tận của Himalaya.`,
    locationName: `Khardung La / Chang La`,
    imgUrl: 'https://media.fittour.vn/uploads/deo-khardungla-tuyet-phu-trang-ladakh.webp'
  },
  {
    id: 'ho-pangong-tso',
    number: '02',
    title: `Chiêm Ngưỡng Pangong Lake – Hồ Nước Biểu Tượng Của Ladakh`,
    subtitle: `Hồ nước biểu tượng của Ladakh`,
    abstract: `Nếu phải chọn một hình ảnh đại diện cho Ladakh, đó có lẽ là <a href="https://thericetour.com/ho-pangong-tso" class="text-amber-700 font-semibold hover:text-amber-600 underline underline-offset-4 decoration-amber-700/30 transition-colors">Pangong Lake</a>. Nằm ở độ cao hơn 4.200 mét giữa vùng Himalaya khô cằn, hồ nước này nổi tiếng với mặt hồ xanh ngọc trải dài giữa những dãy núi trùng điệp và khung cảnh gần như không có dấu vết của đô thị hiện đại.`,
    contentHTML: `<p>Điều khiến Pangong trở thành biểu tượng của Ladakh không chỉ nằm ở vẻ đẹp tự nhiên mà còn ở những điều rất đặc biệt:</p>
<ul>
<li>Hồ nước dài hơn 130km, trải qua cả Ladakh và Tây Tạng.</li>
<li>Màu nước thay đổi liên tục theo thời tiết và ánh sáng trong ngày.</li>
<li>Là một trong những hồ nước cao nổi tiếng nhất thế giới.</li>
<li>Xuất hiện trong nhiều bộ phim Bollywood và trở thành biểu tượng du lịch của Ladakh.</li>
</ul>
<p>Nhiều du khách cho biết khoảnh khắc đáng nhớ nhất không phải khi chụp ảnh mà là lúc hồ Pangong bất ngờ hiện ra sau nhiều giờ vượt đèo Chang La. Giữa không gian rộng lớn của cao nguyên Himalaya, mặt hồ xanh nổi bật tạo nên cảm giác vừa hùng vĩ vừa tĩnh lặng.</p>
<p>Một <a href="https://thericetour.com/ly-do-ban-nen-du-lich-ladakh-cung-fit-tour" class="text-amber-700 font-semibold hover:text-amber-600 underline underline-offset-4 decoration-amber-700/30 transition-colors">du khách của FIT TOUR</a> từng chia sẻ: “Tôi nghĩ Pangong sẽ giống những bức ảnh trên mạng, nhưng khi ngồi bên hồ vào cuối chiều, mọi thứ hoàn toàn khác. Không gian quá yên tĩnh và rộng lớn, đến mức mình chỉ muốn ngồi đó thật lâu mà không cần làm gì cả.”</p>`,
    quote: `Không gian quá yên tĩnh và rộng lớn, đến mức mình chỉ muốn ngồi đó thật lâu mà không cần làm gì cả.`,
    locationName: `Pangong Tso - 4.225m`,
    imgUrl: 'https://media.fittour.vn/uploads/legacy/ho-pangong.webp'
  },
  {
    id: 'thung-lung-nubra',
    number: '03',
    title: `Khám Phá Nubra Valley – Dấu Ấn Của Con Đường Tơ Lụa`,
    subtitle: `Dấu ấn của Con Đường Tơ Lụa`,
    abstract: `Sau khi vượt qua Khardung La, Nubra Valley mở ra với một diện mạo hoàn toàn khác của Ladakh. Thay vì những cao nguyên đá khô cằn quen thuộc, nơi đây xuất hiện những dòng sông xanh, các ngôi làng nhỏ, những cánh đồng trồng cây ăn trái và cả những đồi cát nằm giữa Himalaya.`,
    contentHTML: `<p>Những trải nghiệm nổi bật nhất tại Nubra Valley gồm:</p>
<ul>
<li><strong>Hunder</strong> – nổi tiếng với những đồi cát và đàn lạc đà hai bướu.</li>
<li><strong>Diskit Monastery</strong> – tu viện cổ với tượng Phật Di Lặc cao nhìn xuống toàn thung lũng.</li>
<li><strong>Turtuk Village</strong> – ngôi làng Balti gần biên giới Pakistan với bản sắc văn hóa riêng biệt.</li>
<li><strong>Shyok River</strong> – dòng sông tạo nên những mảng xanh hiếm hoi giữa vùng đất khô cằn của Ladakh.</li>
</ul>
<p>Trong quá khứ, Nubra từng là một phần quan trọng của Con Đường Tơ Lụa kết nối Trung Á, Tây Tạng và tiểu lục địa Ấn Độ. Dấu ấn lịch sử ấy vẫn còn hiện diện qua các tuyến thương mại cổ, văn hóa địa phương và cả đàn lạc đà hai bướu vẫn sinh sống tại Hunder cho đến ngày nay.</p>`,
    quote: `Một ốc đảo xanh tươi kỳ diệu nép mình giữa những rặng núi khô cằn.`,
    locationName: `Nubra Valley`,
    imgUrl: 'https://media.fittour.vn/uploads/legacy/cuoi-lac-da-xuyen-qua-nubra-valley-ladakh.webp'
  },
  {
    id: 'ngam-sao-hanle',
    number: '04',
    title: `Ngắm Dải Ngân Hà Tại Hanle`,
    subtitle: `Khu bảo tồn bầu trời đêm tối nhất Ấn Độ`,
    abstract: `Hanle là một trong những nơi ngắm sao đẹp nhất Ladakh nhờ nằm ở độ cao hơn 4.500 mét và gần như không có ô nhiễm ánh sáng. Đây cũng là nơi đặt Hanle Dark Sky Reserve và Đài quan sát thiên văn Indian Astronomical Observatory.`,
    contentHTML: `<p>Những điểm nổi bật của Hanle:</p>
<ul>
<li>Bầu trời đêm trong và tối bậc nhất Ấn Độ.</li>
<li>Có thể quan sát Dải Ngân Hà bằng mắt thường vào những đêm quang mây.</li>
<li>Điều kiện lý tưởng để chụp ảnh thiên văn.</li>
<li>Không gian yên tĩnh, tách biệt hoàn toàn với đô thị.</li>
</ul>
<p>Vào những đêm thời tiết thuận lợi, Dải Ngân Hà hiện lên rõ nét trên nền trời Himalaya, tạo nên trải nghiệm khó quên đối với bất kỳ ai yêu thiên nhiên và bầu trời đêm.</p>`,
    quote: `Ngước nhìn lên bầu trời Hanle, bạn sẽ thấy mình nhỏ bé đến chừng nào trước vũ trụ bao la.`,
    locationName: `Hanle - 4.500m`,
    imgUrl: 'CSS_STARS'
  },
  {
    id: 'kham-pha-zanskar',
    number: '05',
    title: `Khám Phá Zanskar – Vùng Đất Hoang Sơ Nhất Ladakh`,
    subtitle: `Vùng đất hoang sơ nhất Ladakh`,
    abstract: `Zanskar được xem là một trong những vùng đất nguyên sơ nhất Ladakh. Nằm tách biệt giữa những dãy núi cao, nơi đây vẫn giữ được vẻ đẹp hoang dã cùng nhịp sống chậm rãi đặc trưng của Himalaya.`,
    contentHTML: `<p>Những trải nghiệm nổi bật tại Zanskar gồm:</p>
<ul>
<li>Tham quan các tu viện cổ như Karsha, Stongdey và Phugtal.</li>
<li>Khám phá những ngôi làng biệt lập giữa núi non.</li>
<li>Chinh phục các cung đường ngoạn mục của Ladakh.</li>
<li>Tìm hiểu đời sống địa phương còn lưu giữ nhiều nét truyền thống.</li>
</ul>
<p>Đặc biệt, tu viện Phugtal nằm trong vách đá giữa thung lũng hẻo lánh là điểm đến nổi tiếng nhất khu vực. Không có những điểm check-in đông đúc, Zanskar hấp dẫn bởi cảm giác được khám phá một Ladakh nguyên bản và ít người biết đến.</p>`,
    quote: `Zanskar là nơi thời gian dường như ngưng đọng, giữ nguyên những giá trị cổ xưa nhất của Himalaya.`,
    locationName: `Thung lũng Zanskar`,
    imgUrl: 'https://media.fittour.vn/uploads/2023/06/vung-thao-nguyen-zanskar.webp'
  },
  {
    id: 'nguoi-du-muc-changpa',
    number: '06',
    title: `Gặp Gỡ Người Du Mục Changpa Trên Cao Nguyên Changthang`,
    subtitle: `Cuộc sống bền bỉ trên cao nguyên Changthang`,
    abstract: `Ngoài cảnh quan hùng vĩ, Ladakh còn gây ấn tượng bởi cộng đồng du mục Changpa sinh sống trên cao nguyên Changthang. Họ đã thích nghi với <a href="https://thericetour.com/dieu-can-biet-khi-du-lich-ladakh" class="text-amber-700 font-semibold hover:text-amber-600 underline underline-offset-4 decoration-amber-700/30 transition-colors">điều kiện tự nhiên khắc nghiệt</a> và duy trì lối sống truyền thống qua nhiều thế hệ.`,
    contentHTML: `<p>Những điều thú vị về người Changpa:</p>
<ul>
<li>Sinh sống ở độ cao từ 4.500–5.000 mét.</li>
<li>Chăn nuôi dê pashmina nổi tiếng thế giới.</li>
<li>Di chuyển theo mùa để tìm đồng cỏ cho vật nuôi.</li>
<li>Vẫn duy trì văn hóa du mục đặc trưng của vùng Himalaya.</li>
</ul>
<p>Một người chăn dê Changpa từng chia sẻ với đoàn khách: “Chúng tôi đi theo đàn vật nuôi và thời tiết. Cuộc sống ở đây không dễ dàng, nhưng đây là quê hương của chúng tôi từ nhiều thế hệ.”</p>
<p>Gặp gỡ người Changpa mang đến góc nhìn khác về Ladakh, nơi con người và thiên nhiên vẫn gắn bó chặt tiếp trong cuộc sống thường ngày.</p>`,
    quote: `Cuộc sống ở đây không dễ dàng, nhưng đây là quê hương của chúng tôi từ nhiều thế hệ.`,
    locationName: `Cao nguyên Changthang`,
    imgUrl: 'https://media.fittour.vn/uploads/legacy/nguoi-dan-o-ladakh.webp'
  },
  {
    id: 'tu-vien-tay-tang',
    number: '07',
    title: `Khám Phá Những Tu Viện Tây Tạng Cổ Kính`,
    subtitle: `Trung tâm Phật giáo ngoài Tây Tạng`,
    abstract: `Ladakh là một trong những trung tâm Phật giáo Tây Tạng quan trọng nhất ngoài Tây Tạng. Trên các sườn núi và đỉnh đồi khắp vùng, những tu viện hàng trăm năm tuổi vẫn đóng vai trò quan trọng trong đời sống tinh thần của người dân địa phương.`,
    contentHTML: `<p>Những tu viện nổi tiếng nhất tại Ladakh gồm:</p>
<ul>
<li><strong>Hemis Monastery</strong> – tu viện lớn và giàu có nhất Ladakh.</li>
<li><strong>Thiksey Monastery</strong> – được ví như "Tiểu Potala" của Ladakh.</li>
<li><strong>Alchi Monastery</strong> – nổi tiếng với các bích họa Phật giáo cổ.</li>
<li><strong>Diskit Monastery</strong> – biểu tượng của Nubra Valley.</li>
<li><strong>Lamayuru Monastery</strong> – tu viện lâu đời nằm giữa vùng Moonland độc đáo.</li>
</ul>
<p>Không chỉ là điểm tham quan, các tu viện còn là nơi lưu giữ lịch sử, nghệ thuật và đời sống tâm linh của vùng đất Himalaya suốt nhiều thế kỷ.</p>`,
    quote: `Tiếng kinh luân xoay đều và mùi hương trầm mặc đưa tâm hồn người lữ khách về chốn an yên.`,
    locationName: `Các Tu Viện Ladakh`,
    imgUrl: 'https://media.fittour.vn/uploads/2022/04/tu-vien-ladakh.webp'
  },
  {
    id: 'le-hoi-hemis',
    number: '08',
    title: `Hòa Mình Vào Không Khí Sôi Động Của Hemis Festival`,
    subtitle: `Sắc màu lễ hội Phật giáo sôi động`,
    abstract: `Diễn ra hàng năm tại Hemis Monastery, Hemis Festival là lễ hội Phật giáo nổi tiếng và quan trọng nhất Ladakh. Đây là dịp người dân địa phương cùng du khách từ khắp nơi đổ về để tham gia các nghi lễ và hoạt động văn hóa truyền thống.`,
    contentHTML: `<p>Những điểm đặc sắc của Hemis Festival:</p>
<ul>
<li>Các điệu múa Cham với mặt nạ truyền thống đầy màu sắc.</li>
<li>Nghi lễ tưởng nhớ Guru Padmasambhava.</li>
<li>Trang phục, nhạc cụ và văn hóa Tây Tạng được tái hiện sống động.</li>
<li>Cơ hội hiếm có để quan sát đời sống tinh thần của người Ladakhi.</li>
</ul>
<p>Không khí lễ hội, tiếng kèn dài vang vọng trong sân tu viện cùng những điệu múa linh thiêng tạo nên một trải nghiệm văn hóa đặc biệt mà không phải thời điểm nào trong năm cũng có thể chứng kiến.</p>`,
    quote: `Từng nhịp điệu múa Cham mang theo cả một di sản văn hóa tâm linh khổng lồ của người Tạng.`,
    locationName: `Tu viện Hemis`,
    imgUrl: 'https://media.fittour.vn/uploads/2024/06/man-mua-truyen-thong-tai-le-hoi-hemis.webp'
  },
  {
    id: 'thuong-thuc-am-thuc',
    number: '09',
    title: `Thưởng Thức Trà Bơ Và Ẩm Thực Địa Phương`,
    subtitle: `Hương vị của sự khắc nghiệt`,
    abstract: `Ẩm thực Ladakh phản ánh rõ nét điều kiện tự nhiên khắc nghiệt và sự giao thoa văn hóa giữa Tây Tạng, Trung Á và Ấn Độ. Đây cũng là một trong những cách thú vị nhất để hiểu thêm về cuộc sống thường nhật của người dân địa phương.`,
    contentHTML: `<p>Một số món ăn và thức uống đặc trưng của Ladakh gồm:</p>
<ul>
<li><strong>Butter Tea (Trà bơ Tây Tạng)</strong> – thức uống truyền thống giúp giữ ấm cơ thể.</li>
<li><strong>Thukpa</strong> – món mì nước phổ biến tại vùng Himalaya.</li>
<li><strong>Momos</strong> – bánh hấp nhân thịt hoặc rau củ.</li>
<li><strong>Skyu</strong> – món mì hầm đặc trưng của Ladakh.</li>
<li><strong>Khambir</strong> – loại bánh mì truyền thống thường dùng trong bữa sáng.</li>
</ul>
<p>Nhiều du khách ban đầu khá bất ngờ với vị mặn và béo của trà bơ, nhưng chính những món ăn giản dị này lại giúp họ hiểu hơn về cách người Ladakhi thích nghi với cuộc sống trên độ cao hơn 3.500 mét.</p>`,
    quote: `Vị mằn mặn ngai ngái của tách trà bơ là thứ hương vị bạn sẽ mang theo suốt chặng đường.`,
    locationName: `Leh Main Bazaar`,
    imgUrl: 'https://media.fittour.vn/uploads/2022/04/am-thuc-ladakh.webp'
  },
  {
    id: 'nhip-song-khac-biet',
    number: '10',
    title: `Cảm Nhận Nhịp Sống Khác Biệt Trên Mái Nhà Thế Giới`,
    subtitle: `Bình yên trên mái nhà thế giới`,
    abstract: `Sau những cung đường huyền thoại, hồ nước nổi tiếng và các tu viện cổ kính, điều đọng lại với nhiều du khách về Ladakh lại không phải một địa danh cụ thể. Đó là cảm giác chậm rãi, bình yên và tách biệt khỏi nhịp sống hối hả thường ngày.`,
    contentHTML: `<p>Những điều khiến Ladakh trở nên khác biệt:</p>
<ul>
<li>Không gian rộng lớn và gần gũi với thiên nhiên.</li>
<li>Nhịp sống chậm rãi của người dân địa phương.</li>
<li>Nền văn hóa Tây Tạng vẫn hiện diện rõ nét.</li>
<li>Cảm giác tự do giữa những dãy núi Himalaya hùng vĩ.</li>
</ul>
<p>Một du khách của FIT TOUR từng chia sẻ: “Điều khiến tôi nhớ nhất về Ladakh không phải Pangong hay Khardung La, mà là cảm giác mỗi buổi sáng thức dậy đều thấy cuộc sống diễn ra chậm hơn. Đó là một trải nghiệm rất khó tìm thấy ở những điểm đến khác.” (Xem thêm: <a href="https://thericetour.com/ngay-dau-tien-o-ladakh-nen-luu-y-gi" class="text-amber-700 font-semibold hover:text-amber-600 underline underline-offset-4 decoration-amber-700/30 transition-colors">Ngày đầu tiên ở Ladakh nên lưu ý gì để thích nghi độ cao?</a>)</p>
<p>Có lẽ vì thế mà Ladakh không chỉ là nơi để khám phá, mà còn là điểm đến khiến nhiều người muốn quay trở lại thêm một lần nữa.</p>`,
    quote: `Ladakh không chỉ là nơi để khám phá, mà còn là điểm đến khiến nhiều người muốn quay trở lại thêm một lần nữa.`,
    locationName: `Toàn Vùng Ladakh`,
    imgUrl: 'https://media.fittour.vn/uploads/lulu-ladakh-monastery-life.webp'
  }
];

export const PHOTOS: Photo[] = [
  {
    id: 'p1',
    url: 'https://media.fittour.vn/uploads/legacy/thung-lung-nubra-valley.webp',
    caption: 'Thung lũng Nubra mênh mông như một dải lụa xanh giữa lòng sa mạc đá.',
    category: 'natural',
    location: 'Nubra Valley',
    date: 'Mùa thu'
  },
  {
    id: 'p2',
    url: 'https://media.fittour.vn/uploads/legacy/nguoi-dan-thu-hoach-nong-san-o-ho-pangong.webp',
    caption: 'Người bản địa cặm cụi thu hoạch lúa mạch bên bờ hồ Pangong yên bình.',
    category: 'people',
    location: 'Pangong Tso',
    date: 'Bình minh'
  },
  {
    id: 'p3',
    url: 'https://media.fittour.vn/uploads/legacy/nhung-kinh-phat-co-xua-o-ladakh.webp',
    caption: 'Những bộ kinh Phật cổ xưa được lưu giữ cẩn thận trong các tu viện hàng trăm năm tuổi.',
    category: 'spiritual',
    location: 'Tu viện cổ',
    date: 'Thanh tịnh'
  },
  {
    id: 'p4',
    url: 'https://media.fittour.vn/uploads/legacy/chay-xe-may-kham-pha-ho-pangong.webp',
    caption: 'Chinh phục những cung đường ven hồ bằng xe máy mang lại cảm giác tự do vô giá.',
    category: 'moments',
    location: 'Changthang',
    date: 'Buổi sáng'
  },
  {
    id: 'p5',
    url: 'https://media.fittour.vn/uploads/2021/11/shanti-stupa-ladakh.webp',
    caption: 'Đại bảo tháp Shanti Stupa vươn cao rực rỡ dưới ánh mặt trời chói chang.',
    category: 'natural',
    location: 'Leh City',
    date: 'Trưa muộn'
  },
  {
    id: 'p6',
    url: 'https://media.fittour.vn/uploads/legacy/tho-lam-co-khi-o-nubra-valley.webp',
    caption: 'Nhịp sống đời thường và nụ cười hiền hậu của người thợ thủ công vùng cao.',
    category: 'people',
    location: 'Nubra',
    date: 'Hoàng hôn'
  }
];
