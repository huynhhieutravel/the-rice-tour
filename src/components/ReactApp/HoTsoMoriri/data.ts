import type { Chapter, Photo, BackpackItem, LadakhLocation } from './types';

export const STORIES: Chapter[] = [
  {
    id: 'chapter-1',
    number: '01',
    title: 'Khám Phá Nét Đẹp Và Độ Cao Của Hồ Tso Moriri',
    subtitle: 'Vẻ đẹp tĩnh lặng và linh thiêng',
    abstract: 'Hồ Tso Moriri ở vùng Changthang của <a href="/country/ladakh/" class="text-amber-700 hover:text-amber-800 underline decoration-amber-500/30 underline-offset-2">Ladakh</a> là một trong những hồ nước có độ cao đẹp, tĩnh lặng và linh thiêng (đối với người Ladakh) ở Ấn Độ.',
    paragraphs: [
      'Nằm giữa cao nguyên Changthang của Ladakh, hồ Tso Moriri được xem là một trong những hồ nước đẹp và hoang sơ nhất vùng Himalaya. Với độ cao khoảng 4.595 mét so với mực nước biển, đây là hồ nước ngọt lớn nhất nằm hoàn toàn trong lãnh thổ Ấn Độ và thậm chí còn cao hơn cả Pangong Tso.',
      'Dài khoảng 19 km và rộng gần 7 km, Tso Moriri nổi bật với làn nước xanh thẫm thay đổi màu sắc theo ánh sáng trong ngày. Bao quanh hồ là những dãy núi khô cằn, đồng cỏ cao nguyên và các khu định cư nhỏ của cộng đồng du mục Changpa, tạo nên một khung cảnh yên bình rất khác so với những điểm đến đông khách tại Ladakh.',
      'Tso Moriri nằm trong Khu bảo tồn đất ngập nước Tso Moriri thuộc hệ thống Ramsar – một trong những vùng đất ngập nước có tầm quan trọng quốc tế cao nhất thế giới. Đây là nơi sinh sống của nhiều loài động vật hoang dã đặc trưng của cao nguyên Tây Tạng như sếu cổ đen, lừa hoang Kiang và cừu xanh Himalaya.',
      'Do nằm gần khu vực biên giới và ở độ cao lớn, du khách cần có Giấy phép Nội tuyến (Inner Line Permit) để tham quan. Việc thích nghi độ cao trước khi đến Tso Moriri cũng rất quan trọng nhằm hạn chế nguy cơ say độ cao và giúp hành trình khám phá Ladakh trở nên an toàn hơn.'
    ],
    quote: 'Với độ cao khoảng 4.595 mét so với mực nước biển, đây là hồ nước ngọt lớn nhất nằm hoàn toàn trong lãnh thổ Ấn Độ và thậm chí còn cao hơn cả Pangong Tso.',
    locationName: 'Hồ Tso Moriri',
    imgUrl: 'https://media.fittour.vn/uploads/2022/06/doan-duong-deo-den-ho-tso-moriri.webp?v=2',
    imgCaption: 'Khung cảnh hùng vĩ của Tso Moriri'
  },
  {
    id: 'chapter-2',
    number: '02',
    title: 'Nơi Lưu Trú Tốt Nhất Ở Hồ Tso Moriri',
    subtitle: 'Kinh nghiệm lưu trú tại Korzok',
    abstract: 'Hồ Tso Moriri nằm cách Leh khoảng 220–240 km và thường được kết hợp trong hành trình khám phá cao nguyên Changthang.',
    paragraphs: [
      'Với độ cao khoảng 4.595 mét cùng quãng đường di chuyển khá dài, du khách không nên thực hiện chuyến đi trong ngày từ Leh. Lựa chọn phổ biến nhất là lưu trú ít nhất 1 đêm tại làng Korzok hoặc kết hợp tham quan Tso Kar, Hanle và Nyoma trong hành trình nhiều ngày.',
      'Làng Korzok nằm bên bờ hồ Tso Moriri và là điểm dừng chân chính của du khách khi khám phá khu vực này. Nơi đây có các homestay, guesthouse và một số khu lưu trú hoạt động theo mùa, đồng thời là nơi sinh sống của cộng đồng du mục Changpa nổi tiếng với nghề chăn nuôi dê Pashmina trên cao nguyên Changthang. Không chỉ là cửa ngõ đến hồ Tso Moriri, Korzok còn mang đến cơ hội tìm hiểu đời sống văn hóa đặc trưng của vùng Ladakh xa xôi.',
      'Du khách có thể tham khảo vị trí hồ trên Google Maps tại: <a href="https://maps.google.com/?q=Tso+Moriri+Lake" target="_blank" rel="noopener noreferrer" class="text-amber-700 hover:text-amber-800 underline decoration-amber-500/30 underline-offset-2">https://maps.google.com/?q=Tso+Moriri+Lake</a>'
    ],
    quote: 'Không chỉ là cửa ngõ đến hồ Tso Moriri, Korzok còn mang đến cơ hội tìm hiểu đời sống văn hóa đặc trưng của vùng Ladakh xa xôi.',
    locationName: 'Làng Korzok',
    imgUrl: 'https://media.fittour.vn/uploads/2022/06/phia-sau-ho-tso-moriri-la-nhung-ngon-nui.webp?v=2',
    imgCaption: 'Làng Korzok yên bình bên hồ'
  },
  {
    id: 'chapter-3',
    number: '03',
    title: 'Thời Điểm Đẹp Nhất Để Khám Phá Hồ Tso Moriri',
    subtitle: 'Lựa chọn thời gian phù hợp để ghé thăm',
    abstract: 'Mỗi thời điểm trong năm mang lại một vẻ đẹp rất riêng cho vùng hồ cao nguyên.',
    paragraphs: [
      'Mỗi mùa trong năm đều mang đến một vẻ đẹp riêng cho hồ Tso Moriri, nhưng khoảng thời gian từ tháng 6 đến tháng 9 thường được xem là lý tưởng nhất để khám phá vùng hồ cao nguyên này. Đây là lúc thời tiết ổn định, các tuyến đường đã mở hoàn toàn và mặt hồ hiện lên với những gam màu xanh đặc trưng dưới ánh nắng Himalaya.',
      '<h4 class="font-bold text-lg md:text-xl text-stone-900 mt-6 mb-2">Mùa Du Lịch Lý Tưởng Tại Hồ Tso Moriri</h4>',
      'Nằm ở độ cao khoảng 4.595 mét trên cao nguyên Changthang, hồ Tso Moriri cách Leh khoảng 220–240 km và không phù hợp cho chuyến đi trong ngày. Hầu hết du khách sẽ lưu trú ít nhất một đêm tại làng Korzok – ngôi làng nhỏ bên bờ hồ, nơi sinh sống của cộng đồng du mục Changpa nổi tiếng với nghề chăn nuôi dê Pashmina.',
      'Từ tháng 6 đến tháng 8 là mùa du lịch cao điểm tại Ladakh. Tuy nhiên, so với Pangong Tso, hồ Tso Moriri vẫn yên tĩnh và ít đông đúc hơn, mang lại cảm giác hoang sơ đặc trưng của vùng Changthang.',
      '<h4 class="font-bold text-lg md:text-xl text-stone-900 mt-6 mb-2">Tháng 9 – Thời Điểm Đẹp Nhất Trong Năm</h4>',
      'Nếu chỉ chọn một thời điểm để ghé thăm Tso Moriri, tháng 9 thường được xem là lựa chọn đẹp nhất. Bầu trời trong xanh, tầm nhìn xa, ánh sáng dịu hơn và lượng khách giảm đáng kể sau mùa cao điểm giúp khung cảnh hồ trở nên đặc biệt ấn tượng.',
      'Đây cũng là thời điểm được nhiều nhiếp ảnh gia và du khách yêu thích khi khám phá Ladakh, nhờ điều kiện thời tiết thuận lợi và màu sắc thiên nhiên nổi bật hơn so với những tháng mùa hè.',
      '<h4 class="font-bold text-lg md:text-xl text-stone-900 mt-6 mb-2">Có Nên Đi Tso Moriri Vào Mùa Đông?</h4>',
      'Từ cuối tháng 10 đến đầu mùa xuân, nhiệt độ giảm sâu, một phần mặt hồ có thể đóng băng và nhiều cơ sở lưu trú quanh Korzok tạm ngừng hoạt động. Dù khung cảnh mùa đông mang vẻ đẹp rất khác biệt, du khách cần theo dõi kỹ tình trạng thời tiết, đường sá và khả năng lưu trú trước khi lên kế hoạch.'
    ],
    quote: 'Nếu chỉ chọn một thời điểm để ghé thăm Tso Moriri, tháng 9 thường được xem là lựa chọn đẹp nhất.',
    locationName: 'Korzok',
    imgUrl: 'https://media.fittour.vn/uploads/2022/06/khung-canh-yen-binh-ho-tso-moriri.webp?v=2',
    imgCaption: 'Màu xanh đặc trưng của hồ vào mùa hè',
    imgUrl2: 'https://media.fittour.vn/uploads/2021/11/ho-tso-moriri-ladakh-tuyet-dep.webp?v=2',
    imgCaption2: 'Vẻ đẹp tĩnh lặng khi sang thu'
  },
  {
    id: 'chapter-4',
    number: '04',
    title: 'Hướng Dẫn Di Chuyển Đến Hồ Tso Moriri',
    subtitle: 'Các tuyến đường và lộ trình gợi ý',
    abstract: 'Tso Moriri là một trong những điểm đến xa nhất, đòi hỏi sự chuẩn bị kỹ lưỡng về lộ trình và nhiên liệu.',
    paragraphs: [
      'Hồ Tso Moriri nằm cách Leh khoảng 220–240 km và là một trong những điểm đến xa nhất trong hành trình khám phá Ladakh. Tùy điều kiện đường sá và thời tiết, thời gian di chuyển thường dao động từ 6–8 giờ.',
      '<h4 class="font-bold text-lg md:text-xl text-stone-900 mt-6 mb-2">Tuyến Đường Phổ Biến Nhất Từ Leh</h4>',
      'Hầu hết du khách sẽ đến Tso Moriri theo tuyến: <strong>Leh → Karu → Upshi → Chumathang → Mahe → Sumdo → Korzok (Tso Moriri)</strong>',
      'Đây là cung đường dễ đi nhất với chất lượng mặt đường tương đối tốt và cảnh quan thay đổi liên tục từ thung lũng Indus đến cao nguyên Changthang. Trên đường đi, du khách còn có thể ghé thăm các tu viện nổi tiếng như Shey, Hemis hoặc Thiksey nếu chưa có dịp khám phá trước đó.',
      'Do quãng đường khá dài và độ cao tăng dần, FIT TOUR khuyến nghị dành ít nhất 2 ngày cho hành trình Tso Moriri thay vì cố gắng đi về trong ngày từ Leh.',
      '<h4 class="font-bold text-lg md:text-xl text-stone-900 mt-6 mb-2">Đi Tso Moriri Từ Pangong Tso</h4>',
      'Nếu đang khám phá Pangong Tso, du khách có thể tiếp tục hành trình đến Tso Moriri mà không cần quay lại Leh. Tuyến đường qua Changthang được nhiều người đánh giá là một trong những cung đường đẹp nhất Ladakh với khung cảnh cao nguyên hoang sơ, đàn Kiang hoang dã và những vùng đất gần như không có dấu vết đô thị.',
      'Tuyến phổ biến: <strong>Pangong Tso → Chushul → Tsaga → Loma → Nyoma → Mahe → Korzok</strong>',
      'Tuy nhiên, quy định giấy phép và việc lưu thông trên tuyến này có thể thay đổi theo từng thời điểm. Du khách nên kiểm tra thông tin mới nhất trước khi khởi hành, đặc biệt đối với người nước ngoài.',
      '<h4 class="font-bold text-lg md:text-xl text-stone-900 mt-6 mb-2">Kết Hợp Tso Moriri Với Hanle Và Tso Kar</h4>',
      'Ngày nay, nhiều hành trình Ladakh không chỉ dừng lại ở Tso Moriri mà còn kết hợp với Hanle, Tso Kar và vùng Changthang. Đây được xem là một trong những cung đường đẹp và ít khách du lịch nhất Ladakh, phù hợp với những ai muốn khám phá những vùng đất hoang sơ ngoài các điểm đến quen thuộc như Leh, Nubra Valley hay Pangong Tso.',
      '<h4 class="font-bold text-lg md:text-xl text-stone-900 mt-6 mb-2">Lưu Ý Về Nhiên Liệu</h4>',
      'Khu vực Changthang có rất ít trạm nhiên liệu. Nếu tự lái xe hoặc đi xe máy, du khách nên đổ đầy nhiên liệu tại Leh, Karu hoặc Upshi trước khi khởi hành và luôn dự phòng cho những hành trình dài qua Pangong, Hanle hoặc Tso Moriri.'
    ],
    quote: 'Tuyến đường Upshi – Chumathang cung cấp điều kiện đường tốt nhất cho tất cả các tuyến đường khác.',
    locationName: 'Đường từ Leh',
    imgUrl: 'https://media.fittour.vn/uploads/legacy/chay-xe-may-doc-theo-ho-tso-moriri.webp?v=2',
    imgCaption: 'Hành trình roadtrip đến Tso Moriri',
    imgUrl2: 'https://media.fittour.vn/uploads/du-khach-fit-tour-say-hi-tu-cua-so-xe-ladakh.webp?v=2',
    imgCaption2: 'Du khách tận hưởng chuyến đi Ladakh',
    imgUrl3: 'https://media.fittour.vn/uploads/ho-pangong-duoi-bau-troi-xanh-ladakh.webp?v=2',
    imgCaption3: 'Hồ Pangong Tso dưới bầu trời xanh'
  },
  {
    id: 'chapter-5',
    number: '05',
    title: 'Điều Kiện Đường Xá Và Phương Tiện Phù Hợp Để Đến Tso Moriri',
    subtitle: 'Chuẩn bị cho chuyến hành trình',
    abstract: 'Các loại xe có khoảng sáng gầm cao hơn được ưu tiên hơn và loại 4 × 4 sẽ rất hữu ích.',
    paragraphs: [
      'Mặc dù nằm ở một trong những khu vực xa xôi nhất Ladakh, đường đến hồ Tso Moriri hiện nay tương đối thuận lợi nếu di chuyển theo tuyến Leh – Upshi – Chumathang – Korzok. Phần lớn cung đường đã được trải nhựa và có thể tiếp cận bằng hầu hết các loại ô tô thông thường trong điều kiện thời tiết tốt.',
      'Tuy nhiên, các dòng xe gầm cao như SUV vẫn được ưu tiên hơn, đặc biệt khi di chuyển qua những đoạn đường gồ ghề, suối cạn hoặc các tuyến ít người qua lại trong khu vực Changthang. Đối với những hành trình kết hợp Pangong Tso, Hanle và Tso Moriri, xe 4x4 sẽ mang lại trải nghiệm an toàn và thoải mái hơn.',
      'Xe máy adventure và touring cũng là lựa chọn phổ biến đối với những du khách yêu thích khám phá Ladakh bằng đường bộ. Tuy nhiên, cần chuẩn bị kỹ về nhiên liệu, thời tiết và thể trạng vì các khu vực như Nyoma, Hanle hay Korzok cách xa các trung tâm dịch vụ lớn.',
      'Nếu tự lái, du khách nên đổ đầy nhiên liệu tại Leh, Karu hoặc Upshi trước khi khởi hành. Các trạm nhiên liệu trong khu vực Changthang khá hạn chế và khoảng cách giữa các điểm đến có thể lên tới hàng trăm kilomet.',
      'Nhìn chung, với điều kiện đường sá hiện nay, việc di chuyển đến Tso Moriri không còn quá khó khăn như trước. Điều quan trọng hơn là chuẩn bị tốt cho độ cao, thời tiết và hành trình dài trên cao nguyên Himalaya.'
    ],
    quote: 'Điều quan trọng hơn là chuẩn bị tốt cho độ cao, thời tiết và hành trình dài trên cao nguyên Himalaya.',
    locationName: 'Nyoma',
    imgUrl: 'https://media.fittour.vn/uploads/2022/06/doan-duong-len-nui-quanh-ho.webp?v=2',
    imgCaption: 'Đoạn đường đèo ngoạn mục',
    imgUrl2: 'https://media.fittour.vn/uploads/2022/06/khung-canh-xinh-dep-nui-non.webp?v=2',
    imgCaption2: 'Khung cảnh xinh đẹp núi non quanh hồ'
  },
  {
    id: 'chapter-6',
    number: '06',
    title: 'Gợi Ý Lịch Trình Khám Phá Hồ Tso Moriri',
    subtitle: 'Lịch trình chuyến đi và trải nghiệm',
    abstract: 'Khoảnh khắc bình minh và hoàng hôn trên hồ thường được xem là trải nghiệm đáng nhớ nhất tại Tso Moriri.',
    paragraphs: [
      'Do nằm cách Leh hơn 220 km và ở độ cao gần 4.600 mét, hồ Tso Moriri không phù hợp cho chuyến đi trong ngày. Để cảm nhận trọn vẹn vẻ đẹp của vùng hồ cao nguyên này, du khách nên dành ít nhất một đêm lưu trú tại Korzok.',
      'Khoảnh khắc bình minh và hoàng hôn trên hồ thường được xem là trải nghiệm đáng nhớ nhất tại Tso Moriri. Khi ánh sáng thay đổi, mặt hồ liên tục chuyển màu từ xanh ngọc, xanh lam đến những gam màu trầm hơn, tạo nên khung cảnh đặc trưng của vùng Changthang.',
      '<h4 class="font-bold text-lg md:text-xl text-stone-900 mt-6 mb-2">Lịch Trình 2 Ngày 1 Đêm Phổ Biến</h4>',
      '<strong>Ngày 1:</strong> Leh → Chumathang → Mahe → Korzok → Hồ Tso Moriri',
      '<ul class="list-disc pl-5 mt-2 space-y-1"><li>Khởi hành từ Leh</li><li>Dừng chân tại Chumathang</li><li>Đến Korzok vào buổi chiều</li><li>Ngắm hoàng hôn bên hồ Tso Moriri</li><li>Nghỉ đêm tại Korzok</li></ul>',
      '<strong>Ngày 2:</strong> Tso Moriri → Tso Kar → Tanglang La → Leh',
      '<ul class="list-disc pl-5 mt-2 mb-4 space-y-1"><li>Ngắm bình minh tại hồ</li><li>Khởi hành qua Tso Kar</li><li>Vượt đèo Tanglang La</li><li>Trở về Leh vào chiều hoặc tối</li></ul>',
      'Đây là hành trình được nhiều du khách lựa chọn nhất vì vừa khám phá được Tso Moriri vừa trải nghiệm thêm hồ Tso Kar và những cảnh quan đặc trưng của cao nguyên Changthang.',
      '<h4 class="font-bold text-lg md:text-xl text-stone-900 mt-6 mb-2">Có Nên Kết Hợp Tso Moriri Với Pangong Và Hanle?</h4>',
      'Nếu có nhiều thời gian hơn, du khách có thể kết hợp Tso Moriri cùng Pangong Tso, Hanle và Nubra Valley trong hành trình khám phá Ladakh từ 7–10 ngày. Đây được xem là cung đường toàn diện nhất để trải nghiệm vẻ đẹp của vùng Himalaya, từ các hồ nước trên cao nguyên, thung lũng sa mạc lạnh đến những tu viện Phật giáo cổ kính.'
    ],
    locationName: 'Leh - Tso Moriri',
    imgUrl: 'https://media.fittour.vn/uploads/2022/06/doan-duong-len-nui-quanh-ho.webp',
    imgCaption: 'Roadtrip đến Tso Moriri',
    imgUrl2: 'https://media.fittour.vn/uploads/pho-di-bo-main-bazaar-leh-ladakh.webp?v=2',
    imgCaption2: 'Phố đi bộ Main Bazaar Leh'
  },
  {
    id: 'chapter-7',
    number: '07',
    title: 'Lưu Trú, Kết Nối Và Các Tiện Ích Tại Tso Moriri',
    subtitle: 'Những thông tin thiết yếu khi đến Tso Moriri',
    abstract: 'Các thông tin quan trọng về chỗ ở, cơ sở y tế, địa điểm ăn uống, kết nối điện thoại, máy bơm xăng và máy ATM.',
    paragraphs: [
      'Mặc dù nằm ở một trong những khu vực xa xôi nhất Ladakh, du khách vẫn có thể tìm thấy các dịch vụ cơ bản tại làng Korzok – điểm dân cư chính bên bờ hồ Tso Moriri.',
      '<h4 class="font-bold text-lg md:text-xl text-stone-900 mt-6 mb-2">Lưu Trú Tại Korzok</h4>',
      'Korzok hiện có nhiều lựa chọn lưu trú từ homestay địa phương, guesthouse đến các khu cắm trại hoạt động theo mùa. Do hồ Tso Moriri nằm trong khu bảo tồn đất ngập nước Ramsar, các hoạt động xây dựng và lưu trú sát bờ hồ bị hạn chế nhằm bảo vệ hệ sinh thái tự nhiên.',
      'Phần lớn du khách sẽ nghỉ qua đêm tại Korzok để thuận tiện ngắm bình minh và hoàng hôn trên hồ.',
      '<h4 class="font-bold text-lg md:text-xl text-stone-900 mt-6 mb-2">Ăn Uống</h4>',
      'Các lựa chọn ăn uống tại Tso Moriri không nhiều như Leh hay Nubra Valley. Hầu hết bữa ăn được phục vụ tại homestay, guesthouse hoặc khu lưu trú nơi du khách nghỉ qua đêm. Thực đơn thường gồm các món ăn Ladakh, Tây Tạng và Ấn Độ đơn giản.',
      'Du khách nên mang theo nước uống cá nhân và hạn chế sử dụng chai nhựa dùng một lần nhằm góp phần bảo vệ môi trường mong manh của cao nguyên Changthang.',
      '<h4 class="font-bold text-lg md:text-xl text-stone-900 mt-6 mb-2">Kết Nối Điện Thoại Và Internet</h4>',
      'Chất lượng sóng điện thoại và Internet tại Tso Moriri còn hạn chế. Một số khu vực ở Korzok có thể bắt được tín hiệu Airtel, Jio hoặc BSNL nhưng không ổn định. Du khách nên chuẩn bị tinh thần cho việc gián đoạn liên lạc trong thời gian lưu trú.',
      '<h4 class="font-bold text-lg md:text-xl text-stone-900 mt-6 mb-2">ATM Và Nhiên Liệu</h4>',
      'Không có ATM tại Korzok và các dịch vụ thanh toán điện tử có thể không hoạt động ổn định. Du khách nên chuẩn bị đủ tiền mặt từ Leh trước khi khởi hành.',
      'Đối với những hành trình tự lái, nên đổ đầy nhiên liệu tại Leh, Karu hoặc Upshi. Khu vực Changthang có rất ít trạm nhiên liệu và khoảng cách giữa các điểm đến khá xa.',
      '<h4 class="font-bold text-lg md:text-xl text-stone-900 mt-6 mb-2">Y Tế Và An Toàn</h4>',
      'Korzok có một số cơ sở hỗ trợ y tế cơ bản nhưng không thể thay thế các bệnh viện tại Leh. Những người có tiền sử bệnh tim mạch, hô hấp hoặc chưa thích nghi với độ cao nên tham khảo ý kiến bác sĩ trước khi đến Tso Moriri.',
      'Trong trường hợp xuất hiện các triệu chứng say độ cao nghiêm trọng, việc hạ độ cao và quay về Leh luôn là giải pháp an toàn nhất.'
    ],
    quote: 'Du khách nên mang theo nước uống cá nhân và hạn chế sử dụng chai nhựa dùng một lần nhằm góp phần bảo vệ môi trường mong manh của cao nguyên Changthang.',
    locationName: 'Korzok',
    imgUrl: 'https://media.fittour.vn/uploads/legacy/ve-dep-cua-ho-tso-moriri.webp?v=2',
    imgCaption: 'Vẻ đẹp hùng vĩ của hồ Tso Moriri',
    imgUrl2: 'https://media.fittour.vn/uploads/2022/06/khach-du-lich-ngo-ngang-truoc-ve-dep-cua-ho.webp?v=2',
    imgCaption2: 'Giữ gìn vệ sinh cho vẻ đẹp Tso Moriri',
    imgUrl3: 'https://media.fittour.vn/uploads/2021/11/chay-xe-may-doc-theo-ho-Tso-moriri.webp?v=2',
    imgCaption3: 'Roadtrip ven hồ Tso Moriri'
  }
];

export const PHOTOS: Photo[] = [
  {
    id: 'p1',
    url: 'https://media.fittour.vn/uploads/2024/06/canh-quan-hoang-so-ho-pangong.webp?v=2',
    caption: 'Cảnh quan hoang sơ và hùng vĩ của vùng hồ trên cao nguyên Changthang.',
    category: 'natural',
    location: 'Hồ Pangong',
    date: 'Bình minh'
  },
  {
    id: 'p2',
    url: 'https://media.fittour.vn/uploads/cung-duong-ven-song-tai-sangam-view-point-ladakh.webp?v=2',
    caption: 'Cung đường đèo uốn lượn ven sông băng kỳ vĩ tại ngã ba sông Indus và Zanskar.',
    category: 'natural',
    location: 'Sangam View Point',
    date: 'Trưa muộn'
  },
  {
    id: 'p3',
    url: 'https://media.fittour.vn/uploads/du-khach-fit-tour-chup-anh-cung-lac-da-hai-buouu-nubra.webp?v=2',
    caption: 'Du khách FIT Tour cùng những chú lạc đà hai bướu tại đụn cát Hunder.',
    category: 'people',
    location: 'Thung lũng Nubra',
    date: 'Buổi chiều'
  },
  {
    id: 'p4',
    url: 'https://media.fittour.vn/uploads/toan-canh-tu-vien-thiksey-ladakh.webp?v=2',
    caption: 'Tu viện Thiksey sừng sững trên đỉnh đồi, được ví như Potala thu nhỏ của Ladakh.',
    category: 'spiritual',
    location: 'Tu viện Thiksey',
    date: 'Sáng sớm'
  },
  {
    id: 'p5',
    url: 'https://media.fittour.vn/uploads/bien-may-duoi-day-nui-himalaya-ladakh.webp?v=2',
    caption: 'Biển mây cuộn tràn dưới chân dãy Himalaya hùng vĩ.',
    category: 'moments',
    location: 'Đèo cao Ladakh',
    date: 'Bình minh'
  },
  {
    id: 'p6',
    url: 'https://media.fittour.vn/uploads/toan-canh-hop-luu-song-indus-va-zanskar-tai-sangam.webp?v=2',
    caption: 'Hợp lưu hai dòng sông Indus và Zanskar tạo nên bức tranh hai gam màu ấn tượng.',
    category: 'natural',
    location: 'Sangam Confluence',
    date: 'Buổi trưa'
  },
  {
    id: 'p7',
    url: 'https://media.fittour.vn/uploads/thung-lung-nubra-ladakh-lac-da-hai-buouu-nghi-ngoi.webp?v=2',
    caption: 'Đàn lạc đà Bactrian thong thả nghỉ ngơi giữa sa mạc cát trắng Hunder.',
    category: 'natural',
    location: 'Hunder Sand Dunes',
    date: 'Chiều tà'
  },
  {
    id: 'p8',
    url: 'https://media.fittour.vn/uploads/nha-su-di-bo-tai-tu-vien-hemis.webp?v=2',
    caption: 'Nhà sư thiền hành tĩnh lặng tại tu viện Hemis cổ kính.',
    category: 'spiritual',
    location: 'Tu viện Hemis',
    date: 'Sáng sớm'
  },
  {
    id: 'p9',
    url: 'https://media.fittour.vn/uploads/tuong-phat-di-lac-khong-lo-tai-diskit-monastery-ladakh.webp?v=2',
    caption: 'Tượng Phật Di Lặc khổng lồ tại tu viện Diskit nhìn xuống thung lũng Nubra.',
    category: 'spiritual',
    location: 'Tu viện Diskit',
    date: 'Hoàng hôn'
  }
];

export const BACKPACK_ITEMS: BackpackItem[] = [
  {
    id: 'item-1',
    name: 'Cơ sở y tế & Oxy',
    vietnameseName: 'Chống say độ cao',
    description: 'Trung tâm y tế cơ bản gần nhất có thể có ở Làng Korzok. Bạn có thể được sơ cứu cơ bản bao gồm liều Oxy tại một số lều / trại, nếu không thì bạn nên mang theo bình oxy của riêng mình từ Leh.',
    qty: '1-2 bình/người',
    category: 'health',
    importance: 'high'
  },
  {
    id: 'item-2',
    name: 'Tiền mặt (Máy ATM)',
    vietnameseName: 'Không có ATM',
    description: 'Bạn sẽ không tìm thấy bất kỳ máy ATM nào gần hồ Tso Moriri và do đó, tốt hơn hết là bạn nên mang theo tiền mặt từ Leh (nơi duy nhất bạn tìm thấy máy ATM ở Ladakh).',
    qty: 'Đủ dùng cho chuyến đi',
    category: 'essential',
    importance: 'high'
  },
  {
    id: 'item-3',
    name: 'Bơm xăng gần Tso Moriri',
    vietnameseName: 'Nhiên liệu dự phòng',
    description: 'Máy bơm xăng gần nhất ở Karu (khoảng 204 km) từ Tso Moriri. Bạn nên nạp đầy nhiên liệu từ Leh. Quãng đường tổng thể bạn sẽ đi mà không cần bơm xăng sẽ là 550 km trên tuyến đường Leh – Tso Moriri – Sarchu – Manali.',
    qty: 'Cho 550-600 km',
    category: 'gear',
    importance: 'high'
  },
  {
    id: 'item-4',
    name: 'Ăn ở đâu',
    vietnameseName: 'Homestay / Khu trại',
    description: 'Là một nơi hẻo lánh, bạn có thể sẽ ăn trong các homestay tại Làng Korzok hoặc tại các trại gần đó. Các lựa chọn khá hạn chế. Bạn nên luôn mang theo chai nước của mình để cứu Himalayas khỏi rác nhựa!',
    qty: 'Bình nước cá nhân',
    category: 'essential',
    importance: 'high'
  },
  {
    id: 'item-5',
    name: 'Kết nối điện thoại',
    vietnameseName: 'Mất tín hiệu',
    description: 'Bạn sẽ không tìm thấy bất kỳ tín hiệu điện thoại hoặc di động nào ở Hồ Tso Moriri. Các kết nối trả sau duy nhất hoạt động ở Leh Ladakh là BSNL (phạm vi phủ sóng rộng nhất), Airtel và Reliance Jio.',
    qty: 'Sim BSNL trả sau',
    category: 'essential',
    importance: 'high'
  },
  {
    id: 'item-6',
    name: 'Nơi ở (Lưu trú)',
    vietnameseName: 'Homestay / Lều',
    description: 'Bạn không thể tìm thấy chỗ ở trên bờ hồ vì đây là khu bảo tồn Ramsar. Bạn có thể dựng lều gần các thuộc địa lều khác được dựng ngay trước làng Korzok hoặc tìm chỗ ở tại làng Korzok.',
    qty: 'Đặt trước',
    category: 'essential',
    importance: 'high'
  },
  {
    id: 'item-7',
    name: 'Giấy phép Nội tuyến',
    vietnameseName: 'Inner Line Permit',
    description: 'Vì nó nằm gần ranh giới Kiểm soát thực tế, bạn cần phải có Giấy phép Nội tuyến để đến thăm Hồ Tso Moriri, cho cả người Ấn Độ và người nước ngoài.',
    qty: 'Nhiều bản copy',
    category: 'essential',
    importance: 'high'
  }
];

export const LOCATIONS: LadakhLocation[] = [
  {
    id: 'loc-1',
    name: 'Leh',
    elevation: '3,500m',
    temperature: '15°C',
    coordinate: { x: 20, y: 20 },
    diaryTitle: 'Xuất phát',
    diaryEntry: 'Chuẩn bị đầy đủ tiền mặt, bình oxy và nhiên liệu trước khi rời thị trấn Leh.',
    soundEffectName: 'Tiếng nhộn nhịp phố núi'
  },
  {
    id: 'loc-2',
    name: 'Upshi',
    elevation: '3,400m',
    temperature: '12°C',
    coordinate: { x: 35, y: 45 },
    diaryTitle: 'Trạm kiểm tra giấy phép',
    diaryEntry: 'Dừng lại trình giấy phép Nội tuyến (Inner Line Permit) và bắt đầu rẽ dọc theo dòng sông Indus.',
    soundEffectName: 'Tiếng sông Indus chảy'
  },
  {
    id: 'loc-3',
    name: 'Chumathang',
    elevation: '3,950m',
    temperature: '10°C',
    coordinate: { x: 55, y: 65 },
    diaryTitle: 'Suối nước nóng',
    diaryEntry: 'Trạm nghỉ giữa đường với những dòng suối nước nóng bốc khói, lý tưởng để nghỉ ngơi và làm ấm cơ thể.',
    soundEffectName: 'Tiếng nước sôi róc rách'
  },
  {
    id: 'loc-4',
    name: 'Mahe Bridge',
    elevation: '4,200m',
    temperature: '5°C',
    coordinate: { x: 70, y: 50 },
    diaryTitle: 'Ngã rẽ quan trọng',
    diaryEntry: 'Rẽ phải tại cầu Mahe để rời thung lũng Indus, tiến vào vùng cao nguyên Changthang hoang sơ và lộng gió.',
    soundEffectName: 'Tiếng gió rít qua đèo'
  },
  {
    id: 'loc-5',
    name: 'Làng Korzok',
    elevation: '4,595m',
    temperature: '-5°C',
    coordinate: { x: 85, y: 80 },
    diaryTitle: 'Đích đến linh thiêng',
    diaryEntry: 'Ngôi làng nằm im lìm bên bờ Tso Moriri tĩnh lặng. Khung cảnh thiêng liêng xua tan mọi mệt mỏi của chặng đường dài.',
    soundEffectName: 'Tiếng chuông tu viện Korzok'
  }
];
