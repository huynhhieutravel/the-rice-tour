const urls = [
  {
    url: '/blog/dieu-can-biet-khi-du-lich-ladakh',
    tags: 'Ladakh, Cẩm Nang',
    notes: 'T1: /country/ladakh | T2: /du-lich-ladakh | T3: /ngay-dau-tien-o-ladakh-nen-luu-y-gi (Biết xong thì chuẩn bị cho ngày đầu)'
  },
  {
    url: '/blog/ngay-dau-tien-o-ladakh-nen-luu-y-gi',
    tags: 'Ladakh, Cẩm Nang',
    notes: 'T1: /tour/tour-ladakh-khoi-hanh-ha-noi | T2: /du-lich-ladakh | T3: /noi-o-ladakh (Lưu ý xong phải tìm KS nghỉ)'
  },
  {
    url: '/blog/noi-o-ladakh',
    tags: 'Ladakh, Cẩm Nang',
    notes: 'T1: /tour/tour-ladakh-roadtrip | T2: /du-lich-ladakh | T3: /cho-leh-ladakh (Ở KS xong ra chợ mua đồ)'
  },
  {
    url: '/blog/am-thuc-ladakh',
    tags: 'Ladakh, Cẩm Nang',
    notes: 'T1: /country/ladakh | T2: /du-lich-ladakh | T3: /the-tibetan-kitchen-leh-ladakh (Link thẳng vào quán ăn cụ thể)'
  },
  {
    url: '/blog/mua-sam-o-ladakh',
    tags: 'Ladakh, Cẩm Nang',
    notes: 'T1: /country/ladakh | T2: /du-lich-ladakh | T3: /cho-leh-ladakh (Đọc mua sắm phải dẫn ra Chợ)'
  },
  {
    url: '/blog/cho-leh-ladakh',
    tags: 'Ladakh, Sham Valley',
    notes: 'T1: /country/ladakh | T2: /du-lich-ladakh | T3: /bao-thap-shanti (Thường đi chung buổi chiều ở Leh)'
  },
  {
    url: '/blog/bao-thap-shanti',
    tags: 'Ladakh, Sham Valley',
    notes: 'T1: /country/ladakh | T2: /tu-vien-ladakh | T3: /cho-leh-ladakh (Ngắm hoàng hôn xong về chợ)'
  },
  {
    url: '/blog/tu-vien-thiksey',
    tags: 'Ladakh, Sham Valley',
    notes: 'T1: /country/ladakh | T2: /tu-vien-ladakh | T3: /tu-vien-hemis (Thường đi chung cung đường Nam Leh)'
  },
  {
    url: '/blog/tu-vien-giau-co-nhat-ladakh-hemis',
    tags: 'Ladakh, Sham Valley',
    notes: 'T1: /tour/tour-ladakh-mua-le-hoi-hemis | T2: /tu-vien-ladakh | T3: /vuon-quoc-gia-hemis (Tu viện nằm trong vùng VQG)'
  },
  {
    url: '/blog/doi-tu-tinh-magnetic-hill',
    tags: 'Ladakh, Sham Valley',
    notes: 'T1: /tour/motor-trip-ladakh | T2: /trai-nghiem-du-lich-ladakh | T3: /tu-vien-alchi (Đồi Magnetic nằm trên đường đi Alchi)'
  },
  {
    url: '/blog/tu-vien-alchi',
    tags: 'Ladakh, Sham Valley',
    notes: 'T1: /country/ladakh | T2: /tu-vien-ladakh | T3: /tu-vien-lamayuru (Đi hết Alchi sẽ tới Lamayuru)'
  },
  {
    url: '/blog/tu-vien-lamayuru',
    tags: 'Ladakh, Sham Valley',
    notes: 'T1: /country/ladakh | T2: /tu-vien-ladakh | T3: /kargil (Lamayuru là cửa ngõ đi Kargil)'
  },
  {
    url: '/blog/thung-lung-nubra',
    tags: 'Ladakh, Nubra',
    notes: 'T1: /tour/tour-motor-ladakh-10n9d-chinh-phuc-deo-cao-nhat | T2: /thung-lung-ladakh | T3: /tu-vien-diskit (Tâm điểm của Nubra)'
  },
  {
    url: '/blog/tu-vien-diskit',
    tags: 'Ladakh, Nubra',
    notes: 'T1: /country/ladakh | T2: /tu-vien-ladakh | T3: /lang-turtuk (Rời Diskit để đi sâu vào Turtuk)'
  },
  {
    url: '/blog/lang-turtuk',
    tags: 'Ladakh, Nubra',
    notes: 'T1: /country/ladakh | T2: /thung-lung-ladakh | T3: /thung-lung-nubra (Làng nằm ở mỏm biên giới của Nubra)'
  },
  {
    url: '/blog/deo-khardung-la-va-chang-la',
    tags: 'Ladakh, Nubra',
    notes: 'T1: /tour/tour-motor-ladakh-10n9d-chinh-phuc-deo-cao-nhat | T2: /trai-nghiem-du-lich-ladakh | T3: /thung-lung-nubra (Khardung La là cổng vào Nubra)'
  },
  {
    url: '/blog/ho-pangong-tso',
    tags: 'Ladakh, Changthang',
    notes: 'T1: /country/ladakh | T2: /ho-ladakh | T3: /deo-khardung-la-va-chang-la (Phải qua Chang La mới tới Pangong)'
  },
  {
    url: '/blog/ho-tso-moriri',
    tags: 'Ladakh, Changthang',
    notes: 'T1: /country/ladakh | T2: /ho-ladakh | T3: /deo-tanglang-la (Tuyến vòng về từ Tso Moriri hay qua Tanglang La)'
  },
  {
    url: '/blog/kargil',
    tags: 'Ladakh, Zanskar',
    notes: 'T1: /country/ladakh | T2: /thung-lung-ladakh | T3: /deo-zojila (Đèo Zojila là cửa ngõ nối Srinagar vào Kargil)'
  },
  {
    url: '/blog/deo-zojila',
    tags: 'Ladakh, Zanskar',
    notes: 'T1: /tour/motor-trip-ladakh | T2: /trai-nghiem-du-lich-ladakh | T3: /kargil (Vượt đèo Zojila sẽ tới Kargil)'
  },
  {
    url: '/blog/tu-vien-stongdey',
    tags: 'Ladakh, Zanskar',
    notes: 'T1: /country/ladakh | T2: /tu-vien-ladakh | T3: /di-be-tren-song-o-ladakh (Sông Zanskar ngay gần đó)'
  },
  {
    url: '/blog/di-be-tren-song-o-ladakh',
    tags: 'Ladakh, Zanskar',
    notes: 'T1: /country/ladakh | T2: /trai-nghiem-du-lich-ladakh | T3: /tu-vien-stongdey (Kết hợp khám phá Zanskar)'
  },
  {
    url: '/blog/leo-nui-o-ladakh',
    tags: 'Ladakh, Trekking',
    notes: 'T1: /tour/tour-ladakh-roadtrip | T2: /trai-nghiem-du-lich-ladakh | T3: /stok-kangri (Link thẳng vào ngọn núi nổi tiếng nhất)'
  },
  {
    url: '/blog/stok-kangri',
    tags: 'Ladakh, Trekking',
    notes: 'T1: /country/ladakh | T2: /trai-nghiem-du-lich-ladakh | T3: /thung-lung-markha (Markha là thung lũng trekking dưới chân Stok)'
  },
  {
    url: '/blog/thung-lung-markha',
    tags: 'Ladakh, Trekking',
    notes: 'T1: /country/ladakh | T2: /thung-lung-ladakh | T3: /leo-nui-o-ladakh (Hoạt động chính ở Markha là leo núi)'
  },
  {
    url: '/blog/cot-moc-80-chuyen-di-ladakh',
    tags: 'Ladakh, Bọc Lót',
    notes: 'T1: /country/ladakh | Rải link bài này vào bài Kinh nghiệm đi tự túc'
  },
  {
    url: '/blog/ly-do-ban-nen-du-lich-ladakh-cung-fit-tour',
    tags: 'Ladakh, Bọc Lót',
    notes: 'T1: /tour/tour-ladakh-khoi-hanh-ha-noi | T2: /du-lich-ladakh | Rải link vào bài Điều cần biết'
  },
  {
    url: '/blog/gallery-ladakh',
    tags: 'Ladakh, Bọc Lót',
    notes: 'T1: /country/ladakh | T2: /trai-nghiem-du-lich-ladakh | Dùng làm link ảnh nội bộ khi bài ngách thiếu hình ảnh đẹp'
  }
];

async function updateTags() {
  for (const item of urls) {
    try {
      const res = await fetch('https://fittour.vn/api/admin/nodes', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-bypass-auth': 'antigravity'
        },
        body: JSON.stringify({
          url: item.url,
          tags: item.tags,
          notes: item.notes
        })
      });
      const result = await res.json();
      console.log(`Updated ${item.url}:`, result);
    } catch (err) {
      console.error(`Failed ${item.url}:`, err.message);
    }
  }
}

updateTags();
