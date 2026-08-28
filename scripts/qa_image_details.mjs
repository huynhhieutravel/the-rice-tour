import { DatabaseSync } from 'node:sqlite';
import * as cheerio from 'cheerio';
import fs from 'fs';

const dbPath = '.wrangler/state/v3/d1/miniflare-D1DatabaseObject/ff7962b7b1b213a0c7275053885f635e4d68cb0811b671e41abdd0a235aa8f1e.sqlite';
const db = new DatabaseSync(dbPath);

const data = JSON.parse(fs.readFileSync('/tmp/qa_broken_links_webp.json', 'utf8'));
const brokenImages = data.brokenImages; // array of { source, src }

// We need to group by src to avoid redundant checks
const imageMap = new Map();
for (const img of brokenImages) {
  if (!imageMap.has(img.src)) {
    imageMap.set(img.src, { src: img.src, sources: [], alt: 'Không tìm thấy thẻ img', webpOk: false, originalOk: false });
  }
  imageMap.get(img.src).sources.push(img.source);
}

// 1. Find alt tags in DB
const posts = db.prepare('SELECT slug, title, content FROM Post').all();
const pages = db.prepare('SELECT slug, title, content FROM Page').all();
const tours = db.prepare('SELECT slug, title, content FROM Tour').all();

function findAlt(items) {
  for (const item of items) {
    if (!item.content) continue;
    const $ = cheerio.load(item.content);
    $('img').each((_, el) => {
      const src = $(el).attr('src');
      if (src && imageMap.has(src)) {
        const alt = $(el).attr('alt');
        imageMap.get(src).alt = alt ? `"${alt}"` : '❌ Trống (Không có alt)';
      }
    });
  }
}
findAlt(posts);
findAlt(pages);
findAlt(tours);

// 2. Check URLs
async function checkUrl(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    if (res.status === 405 || res.status === 403 || res.status === 400) { 
        const getRes = await fetch(url, { method: 'GET' });
        return getRes.ok;
    }
    return res.ok;
  } catch (e) {
    return false;
  }
}

async function run() {
  const values = Array.from(imageMap.values());
  for (const img of values) {
    const originalOk = await checkUrl(img.src);
    img.originalOk = originalOk;
    
    let webpSrc = img.src;
    if (!webpSrc.endsWith('.webp')) {
      webpSrc = webpSrc.replace(/\.(jpe?g|png)$/i, '.webp');
    }
    const webpOk = webpSrc !== img.src ? await checkUrl(webpSrc) : originalOk;
    img.webpOk = webpOk;
    img.webpSrc = webpSrc;
  }
  
  fs.writeFileSync('/tmp/qa_image_details.json', JSON.stringify(values, null, 2));
  console.log('Finished checking images.');
}

run();
