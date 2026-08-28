import fs from 'fs';

const urls = `https://fittour.vn/blog/chu-duyen-nao-dua-phuong-thanh-tro-lai-ladakh-lan-3
https://fittour.vn/blog/trai-nghiem-thieu-oxy-o-ladakh
https://fittour.vn/blog/tro-chuyen-cung-vi-su-o-ladakh
https://fittour.vn/blog/local-guide-ladakh-phuong-thanh-x-fit-tour-phan-4
https://fittour.vn/blog/cao-nguyen-lanh-ladakh-ve-dep
https://fittour.vn/blog/phuong-thanh-lan-3-den-ladakh
https://fittour.vn/blog/ngay-dau-tien-o-ladakh-nen-luu-y-gi
https://fittour.vn/blog/cot-moc-80-chuyen-di-ladakh
https://fittour.vn/blog/co-may
https://fittour.vn/blog/du-lich-ladakh
https://fittour.vn/blog/doi-tien-ladakh
https://fittour.vn/blog/mac-gi-de-chup-hinh-dep-o-ladakh
https://fittour.vn/blog/internet-o-ladakh
https://fittour.vn/blog/ladakh-lanh-nhu-the-nao
https://fittour.vn/blog/say-do-cao-ladakh
https://fittour.vn/blog/nhat-ky-kham-pha-ladakh
https://fittour.vn/blog/sama-resort-pangong
https://fittour.vn/blog/wilderness-camp-diskit
https://fittour.vn/blog/tu-vien-giau-co-nhat-ladakh-hemis
https://fittour.vn/blog/the-tibetan-kitchen-leh-ladakh
https://fittour.vn/blog/vi-sao-ladakh-duoc-goi-la-tieu-tay-tang
https://fittour.vn/blog/deo-mig-la
https://fittour.vn/blog/kargil
https://fittour.vn/blog/tai-sao-goi-ladakh-la-vung-dat-cua-cac-lat-ma
https://fittour.vn/blog/deo-umling-la
https://fittour.vn/blog/tu-vien-alchi
https://fittour.vn/blog/tu-vien-lamayuru
https://fittour.vn/blog/tu-vien-matho
https://fittour.vn/blog/tu-vien-chemrey
https://fittour.vn/blog/hinh-anh-ho-pangong-tso
https://fittour.vn/blog/hinh-anh-le-hoi-hemis
https://fittour.vn/blog/nhat-ky-hanh-trinh-ladakh-bang-xe-may`.split('\n').filter(Boolean);

async function run() {
  for (const url of urls) {
    const rawUrl = url.replace('https://fittour.vn', '').trim();
    try {
      console.log(`Processing ${rawUrl}`);
      // fetch node
      const fetchUrl = `https://fittour.vn/api/admin/nodes?url=${encodeURIComponent(rawUrl)}`;
      const res = await fetch(fetchUrl, {
        headers: {
          'x-bypass-auth': 'antigravity'
        }
      });
      const data = await res.json();
      
      let existingTags = '';
      if (data && data.success && data.node && data.node.tags) {
        existingTags = data.node.tags;
      }
      
      // If doesn't have Ladakh, add it
      const tagsArray = existingTags ? existingTags.split(',').map(t => t.trim()).filter(Boolean) : [];
      if (!tagsArray.some(t => t.toLowerCase() === 'ladakh')) {
        tagsArray.push('Ladakh');
        const newTags = tagsArray.join(', ');
        
        const saveRes = await fetch('https://fittour.vn/api/admin/nodes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-bypass-auth': 'antigravity'
          },
          body: JSON.stringify({
            url: rawUrl,
            tags: newTags
          })
        });
        const saveData = await saveRes.json();
        console.log(`Saved ${rawUrl}: ${saveData.success}`, saveData);
      } else {
        console.log(`Skipped ${rawUrl} - already has tag Ladakh`);
      }
    } catch(e) {
      console.error(`Error processing ${rawUrl}`, e);
    }
  }
}

run();
