import type { Chapter, Photo, BackpackItem, LadakhLocation } from './types';

export const STORIES: Chapter[] = [
  {
    id: 'chapter-1',
    number: '01',
    title: 'Cảm nhận nhịp sống chậm rãi tại các góc phố Leh',
    subtitle: 'Nơi thời gian như ngưng đọng trên độ cao 3.500m',
    abstract: 'Chợ Leh trong mắt tôi không đơn thuần là một điểm đến để tiêu tiền. Nếu bạn đang tham khảo <a href="https://thericetour.com/du-lich-ladakh" class="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-500/30 underline-offset-4">kinh nghiệm du lịch Ladakh</a>, thì đây là nơi tuyệt vời để bạn sống chậm lại, hít căng lồng ngực bầu không khí trong trẻo của vùng cao nguyên.',
    paragraphs: [
      'Điểm khiến cả đoàn chúng tôi vô cùng thích thú là những chú chó hoang to lớn với bộ lông xù tơ sưởi nắng giữa phố. Trái với vẻ ngoài to xác, chúng cực kỳ hiền lành, thân thiện và cứ nằm dài lười biếng mặc kệ dòng người qua lại.',
      'Thay vì vội vã lướt qua các gian hàng, tôi thường chọn cách nép mình vào một quán cà phê trên tầng hai ngay góc ngã tư. Gọi một ly trà bơ muối ngầy ngậy hay tách cà phê nóng, ngồi sát cửa sổ ngắm nhìn những vị lạt ma áo đỏ rảo bước - có lẽ họ vừa trở về từ <a href="https://thericetour.com/tu-vien-hemis" class="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-500/30 underline-offset-4">tu viện Hemis</a>, và lắng nghe tiếng những vòng quay kinh luân không ngừng xoay.'
    ],
    quote: 'Chỉ cần ngồi xuống vuốt ve bộ lông dày sụ ấy, bạn sẽ cảm nhận được nhịp sống ở đây bình yên đến lạ.',
    locationName: 'Thị trấn Leh - 3,500m',
    imgUrl: 'https://media.fittour.vn/uploads/2022/06/con-pho-chinh-o-leh-ladakh.webp'
  },
  {
    id: 'chapter-2',
    number: '02',
    title: 'Khăn len Pashmina và khăn len Yak',
    subtitle: 'Món quà sưởi ấm từ vùng cao nguyên tuyết trắng',
    abstract: 'Ladakh nổi tiếng với hai chất liệu giữ ấm tuyệt đỉnh mà bất cứ ai đến đây cũng muốn sở hữu để mang theo hơi ấm của Himalaya về nhà.',
    paragraphs: [
      'Bên cạnh Pashmina, khăn len Yak lại là "chân ái" mà tôi cực kỳ ưa chuộng. Khăn Yak thường to, dày dặn, họa tiết thổ cẩm sặc sỡ, mang lại cảm giác ấm áp tuyệt đối trong cái lạnh buốt của vùng núi. Đặc biệt, chiếc khăn len Yak vừa giúp bạn giữ ấm, vừa là món phụ kiện rất thời trang khi chụp ảnh ở nhiều địa điểm tuyệt đẹp tại Ladakh. Mức giá của khăn Yak cũng mềm hơn rất nhiều, cực kỳ lý tưởng để làm quà tặng mùa đông mang về từ <a href="https://thericetour.com/tag/series-phuong-thanh-ladakh-lan-3" class="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-500/30 underline-offset-4">chuyến đi Ladakh Series</a>.',
      'Dệt từ lớp lông tơ lót của loài dê Changthangi, Pashmina chuẩn rất nhẹ, mềm, không gây ngứa và không bị tích điện. Một phép thử phổ biến mà giới sành sỏi thường dùng là luồn khăn trơn tru qua một chiếc nhẫn. Để tránh hàng giả, bạn hãy ưu tiên ghé các hợp tác xã của chính quyền (Government Emporium).'
    ],
    quote: 'Chạm tay vào chiếc khăn Pashmina là chạm vào sự kỳ diệu của bàn tay những người thợ dệt cao nguyên.',
    locationName: 'Khu đồ thủ công mỹ nghệ',
    imgUrl: 'https://media.fittour.vn/uploads/du-khach-chup-anh-tai-sangam-view-point-ladakh.webp'
  },
  {
    id: 'chapter-3',
    number: '03',
    title: 'Mỹ phẩm thiên nhiên Himalaya & Nông sản sạch',
    subtitle: 'Món quà vô giá từ đất mẹ khô cằn',
    abstract: 'Khí hậu ở Leh cực kỳ khô rát, độ ẩm siêu thấp, nhưng thiên nhiên lại ban tặng cho nơi đây những thảo dược phục hồi tuyệt vời.',
    paragraphs: [
      'Ngay trong khu chợ có cửa hàng chính hãng của Himalaya – thương hiệu mỹ phẩm thảo mộc nổi tiếng của Ấn Độ. Bạn có thể ghé vào mua ngay tuýp kem dưỡng ẩm sâu, sữa rửa mặt tràm trà hay son dưỡng nẻ để cứu nguy cho làn da nứt nẻ vì sương muối.',
      'Bạn nhất định phải mua thử quả mơ sấy khô (khubani) ngọt thanh. Ngoài ra, các sản phẩm từ quả hắc mai biển (sea buckthorn) như trà hay mứt là đặc sản tuyệt vời. Loài cây này mọc vươn lên trên sỏi đá khắc nghiệt nên cực kỳ giàu vitamin C, giúp tăng sức đề kháng rất tốt cho chặng hành trình dài qua <a href="https://thericetour.com/deo-khardung-la-va-chang-la" class="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-500/30 underline-offset-4">đèo Khardung La</a> hay tới <a href="https://thericetour.com/thung-lung-nubra" class="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-500/30 underline-offset-4">thung lũng Nubra</a>. Nếu lo lắng về sức khoẻ người lớn tuổi, câu chuyện về <a href="https://thericetour.com/co-may" class="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-500/30 underline-offset-4">hành trình Ladakh của Cô Mây U70</a> sẽ tiếp thêm động lực cho bạn.'
    ],
    quote: 'Thiên nhiên khắc nghiệt tạo ra những sản vật kiên cường. Từng quả hắc mai biển mang trong mình sức sống mãnh liệt của vùng sỏi đá.',
    locationName: 'Khu thảo dược & Nông sản',
    imgUrl: 'https://media.fittour.vn/uploads/2022/06/duong-pho-dong-duc-o-leh-ladakh.webp'
  },
  {
    id: 'chapter-4',
    number: '04',
    title: 'Đồ thủ công mỹ nghệ và trang sức tâm linh',
    subtitle: 'Nét chạm khắc tinh xảo mang năng lượng bình an',
    abstract: 'Bước vào các con hẻm nhỏ, bạn sẽ choáng ngợp trước một thế giới của chuông xoay Tây Tạng, cờ phướn Lungta hay tranh cuộn Thangka rực rỡ.',
    paragraphs: [
      'Tôi đặc biệt ấn tượng với những món trang sức bằng bạc chạm khắc tinh xảo, đính đá ngọc lam (turquoise) và san hô đỏ. Những vật phẩm này không chỉ là trang sức, mà mang theo năng lượng bình an sâu sắc của rặng tuyết sơn quanh <a href="https://thericetour.com/hinh-anh-ho-pangong-tso" class="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-500/30 underline-offset-4">hồ Pangong Tso</a> hùng vĩ.',
      'Bạn có thể dễ dàng tìm thấy nhiều hình ảnh liên quan đến Bảo tháp Shanti hay các linh vật Phật giáo Tây Tạng được khắc họa tinh tế trên từng món quà lưu niệm. Cầm trên tay chiếc chuông xoay, âm thanh ngân vang của nó như gột rửa mọi muộn phiền.'
    ],
    quote: 'Mỗi món đồ thủ công không chỉ là hàng hóa, mà là sự lưu giữ tinh hoa tín ngưỡng ngàn năm của người dân Tiểu Tây Tạng.',
    locationName: 'Phố trang sức & Lưu niệm',
    imgUrl: 'https://media.fittour.vn/uploads/2022/06/kien-truc-phat-giao-o-leh-ladakh.webp'
  },
  {
    id: 'chapter-5',
    number: '05',
    title: 'Ẩm thực sưởi ấm cơ thể giữa tiết trời se lạnh',
    subtitle: 'Hương vị hòa quyện giữa Tây Tạng và Ấn Độ',
    abstract: 'Sau vài giờ dạo chợ, khi cái lạnh của vùng cao nguyên bắt đầu ngấm vào lớp áo khoác, tấp vào một quán ăn nhỏ của người địa phương là lựa chọn hoàn hảo nhất.',
    paragraphs: [
      'Bữa tối quen thuộc của tôi là những chiếc bánh bao Momo nhân thịt cừu hấp nóng hổi, chấm cùng tương ớt cay nồng đặc trưng. Khói bốc lên nghi ngút từ xửng tre làm mờ cả cặp kính cận.',
      'Ăn kèm là bát mì nước Thukpa đậm đà với thứ nước dùng thanh ngọt nấu từ xương. Ẩm thực ở Leh giản dị, không cầu kỳ nhưng có khả năng làm ấm cơ thể ngay tức thì, là thứ mỹ vị hoàn hảo nhất cho những đêm gió lạnh.'
    ],
    quote: 'Mùi hương của một bát Thukpa nóng trong buổi tối giá rét còn quyến rũ hơn bất kỳ nhà hàng năm sao nào trên thế giới.',
    locationName: 'Quán ăn địa phương',
    imgUrl: 'https://media.fittour.vn/uploads/2022/06/duong-pho-dong-duc-leh-ladakh.webp'
  }
];

export const PHOTOS: Photo[] = [
  {
    id: 'p1',
    url: 'https://media.fittour.vn/uploads/2022/06/con-pho-chinh-o-leh-ladakh.webp',
    caption: 'Con phố chính thênh thang, nơi bạn có thể dạo bộ và cảm nhận nhịp sống chậm rãi.',
    category: 'natural',
    location: 'Leh Main Bazaar',
    date: 'Chiều Leh'
  },
  {
    id: 'p2',
    url: 'https://media.fittour.vn/uploads/2022/06/ba-cu-ban-hang-rong-o-leh-ladakh.webp',
    caption: 'Bà cụ hiền hậu bán những món nông sản sạch được vun trồng từ vùng đất khắc nghiệt.',
    category: 'people',
    location: 'Ven đường phố',
    date: 'Góc chợ nhỏ'
  },
  {
    id: 'p3',
    url: 'https://media.fittour.vn/uploads/2022/06/kien-truc-phat-giao-o-leh-ladakh.webp',
    caption: 'Dấu ấn kiến trúc Phật giáo phảng phất khắp các con ngõ và mái nhà tại khu chợ Leh.',
    category: 'spiritual',
    location: 'Khu chợ cổ',
    date: 'Mùa thu'
  },
  {
    id: 'p4',
    url: 'https://media.fittour.vn/uploads/2022/06/duong-pho-dong-duc-o-leh-ladakh.webp',
    caption: 'Du khách và người bản địa tấp nập mua sắm những món trang sức và đồ thủ công.',
    category: 'moments',
    location: 'Ngã tư chợ',
    date: 'Giờ vàng'
  },
  {
    id: 'p5',
    url: 'https://media.fittour.vn/uploads/2022/06/duong-pho-dong-duc-leh-ladakh.webp',
    caption: 'Nhịp sống hối hả lúc chiều tà, trước khi nhiệt độ ngoài trời giảm sút nhanh chóng.',
    category: 'people',
    location: 'Main Bazaar',
    date: 'Hoàng hôn'
  },
  {
    id: 'p6',
    url: 'https://media.fittour.vn/uploads/2022/06/trung-tam-leh-ladakh-nhin-ra-den-co.webp',
    caption: 'Ánh đèn bắt đầu lên, thắp sáng cả một góc trung tâm thị trấn nhộn nhịp.',
    category: 'natural',
    location: 'Leh City',
    date: 'Tối muộn'
  }
];

export const BACKPACK_ITEMS: BackpackItem[] = [
  {
    id: 'item-1',
    name: 'Khăn len Yak',
    vietnameseName: 'Khăn Yak thủ công',
    description: 'Dày dặn, ấm áp và sặc sỡ. Giúp bạn tránh gió buốt trên những con đèo cao.',
    qty: '1 chiếc',
    category: 'gear',
    importance: 'high'
  },
  {
    id: 'item-2',
    name: 'Tiền mặt INR',
    vietnameseName: 'Rupee Ấn Độ',
    description: 'Mạng internet chập chờn, máy POS thường vô dụng. Tiền mặt là chân ái ở Leh.',
    qty: 'Nhiều',
    category: 'essential',
    importance: 'high'
  },
  {
    id: 'item-3',
    name: 'Túi Tote vải',
    vietnameseName: 'Túi cá nhân',
    description: 'Chính quyền cấm nhựa hoàn toàn. Bạn phải tự mang túi đi mua sắm mỹ nghệ.',
    qty: '1 chiếc',
    category: 'essential',
    importance: 'medium'
  },
  {
    id: 'item-4',
    name: 'Thuốc AMS (Diamox)',
    vietnameseName: 'Thuốc chống sốc',
    description: 'Mua tại các tiệm Pharmacy quanh chợ để phòng ngừa sốc độ cao.',
    qty: '1 vỉ',
    category: 'health',
    importance: 'high'
  },
  {
    id: 'item-5',
    name: 'Kem dưỡng ẩm Himalaya',
    vietnameseName: 'Mỹ phẩm',
    description: 'Thời tiết siêu khô rát. Sữa rửa mặt tràm trà và kem dưỡng sâu là cứu cánh cho da.',
    qty: '1 tuýp',
    category: 'health',
    importance: 'medium'
  }
];

export const LOCATIONS: LadakhLocation[] = [
  {
    id: 'loc-1',
    name: 'Main Bazaar Leh',
    elevation: '3,500m',
    temperature: '10°C đến 22°C',
    coordinate: { x: 50, y: 50 },
    diaryTitle: 'Thời điểm vàng: 16h00 - 19h00',
    diaryEntry: 'Đến đây lúc chiều tà, vừa dạo chợ mua khăn Yak vừa có thể nhìn thấy cung điện Leh lấp lánh sừng sững đằng xa.',
    soundEffectName: 'Tiếng chuông xe đạp & Cười đùa'
  },
  {
    id: 'loc-2',
    name: 'Fort Road (Đổi tiền)',
    elevation: '3,500m',
    temperature: '12°C',
    coordinate: { x: 30, y: 70 },
    diaryTitle: 'Dọc theo đường Fort',
    diaryEntry: 'Có vài quầy thu đổi ngoại tệ và ATM. Nhưng tỷ giá không tốt bằng đổi ở Delhi từ trước đâu nhé.',
    soundEffectName: 'Tiếng đếm tiền rột roẹt'
  },
  {
    id: 'loc-3',
    name: 'Quầy bán đồ bạc (Ngã ba)',
    elevation: '3,500m',
    temperature: '15°C',
    coordinate: { x: 70, y: 30 },
    diaryTitle: 'Mặc cả vui vẻ (10-20%)',
    diaryEntry: 'Với những sạp lề đường, bạn có thể trả giá nhẹ nhàng. Nhưng cửa hàng niêm yết thì cứ mua đúng giá thôi.',
    soundEffectName: 'Tiếng vòng bạc leng keng'
  }
];
