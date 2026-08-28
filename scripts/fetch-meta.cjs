const fs = require('fs');

const urls = [
  "https://fittour.vn/khach-hang-quay-lai-tay-tang-kailash-3-nam",
  "https://fittour.vn/du-lich-mong-co-cung-em-be-18-thang",
  "https://fittour.vn/hanh-trinh-private-tour-giang-nam",
  "https://fittour.vn/1-ngay-khong-song-khong-wi-fi-o-dao-thanh-a-dinh",
  "https://fittour.vn/hanh-trinh-tan-cuong",
  "https://fittour.vn/nhat-ky-hanh-trinh-hanh-huong-nui-kailash",
  "https://fittour.vn/chinh-phuc-rung-tuyet-song-phong-cap-nhi-tan",
  "https://fittour.vn/emagazine-cuu-trai-cau",
  "https://fittour.vn/company-trip-thanh-do"
];

async function fetchMeta(url) {
  try {
    const res = await fetch(url);
    const html = await res.text();
    const titleMatch = html.match(/<title>(.*?)<\/title>/);
    const imageMatch = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/);
    const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/);
    
    return {
      url,
      title: titleMatch ? titleMatch[1].split('-')[0].trim() : '',
      image: imageMatch ? imageMatch[1] : '',
      desc: descMatch ? descMatch[1] : ''
    };
  } catch(e) {
    return { url, title: '', image: '', desc: '' };
  }
}

async function run() {
  const results = [];
  for (const url of urls) {
    results.push(await fetchMeta(url));
  }
  console.log(JSON.stringify(results, null, 2));
}

run();
