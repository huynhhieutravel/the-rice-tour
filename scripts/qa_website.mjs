import { DatabaseSync } from 'node:sqlite';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

const dbPath = '.wrangler/state/v3/d1/miniflare-D1DatabaseObject/ff7962b7b1b213a0c7275053885f635e4d68cb0811b671e41abdd0a235aa8f1e.sqlite';
const db = new DatabaseSync(dbPath);

const validSlugs = new Set();
const posts = db.prepare('SELECT id, slug, title, content FROM Post').all();
const pages = db.prepare('SELECT id, slug, title, content FROM Page').all();
const tours = db.prepare('SELECT id, slug, title, content FROM Tour').all();
const links = db.prepare('SELECT slug FROM Link').all();

posts.forEach(p => validSlugs.add(p.slug));
pages.forEach(p => validSlugs.add(p.slug));
tours.forEach(t => validSlugs.add('tour/' + t.slug));
links.forEach(l => validSlugs.add(l.slug));

validSlugs.add('');
validSlugs.add('/');
validSlugs.add('blog');
validSlugs.add('contact');
validSlugs.add('about');
validSlugs.add('tours');

// read src/pages to get static routes
const pagesDir = path.join(process.cwd(), 'src', 'pages');
function readAstroPages(dir, basePath = '') {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if (f.startsWith('[') || f.startsWith('_')) continue;
    const fullPath = path.join(dir, f);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      readAstroPages(fullPath, path.join(basePath, f));
      validSlugs.add(path.join(basePath, f).replace(/\\/g, '/'));
    } else if (f.endsWith('.astro')) {
      let slug = path.join(basePath, f.replace('.astro', '')).replace(/\\/g, '/');
      if (slug.endsWith('/index') || slug === 'index') {
        slug = slug.replace(/\/?index$/, '');
      }
      validSlugs.add(slug);
    }
  }
}
readAstroPages(pagesDir);

const brokenLinks = [];
const brokenImages = [];

function isInternal(url) {
  if (!url) return false;
  if (url.startsWith('#')) return false; // anchor
  if (url.startsWith('mailto:')) return false;
  if (url.startsWith('tel:')) return false;
  if (url.startsWith('/')) return true;
  if (url.includes('fittour.vn') || url.includes('dulichcoguu.com')) return true;
  return false;
}

function extractPath(url) {
  try {
    if (url.startsWith('/')) {
      const u = new URL(url, 'http://localhost');
      return u.pathname.replace(/^\/+/, '').replace(/\/+$/, '');
    }
    const u = new URL(url);
    return u.pathname.replace(/^\/+/, '').replace(/\/+$/, '');
  } catch (e) {
    return url.replace(/^\/+/, '').replace(/\/+$/, '');
  }
}

const checkedImages = new Map();

async function checkImage(url) {
  if (!url) return false;
  if (checkedImages.has(url)) return checkedImages.get(url);
  
  let result = false;
  try {
    if (url.startsWith('/')) {
      const publicPath = path.join(process.cwd(), 'public', url);
      if (fs.existsSync(publicPath)) {
        result = true;
      } else {
        const res = await fetch(`http://localhost:4321${url}`, { method: 'HEAD' });
        result = res.ok;
      }
    } else {
      const res = await fetch(url, { method: 'HEAD' });
      if (res.status === 405 || res.status === 403 || res.status === 400) { 
        const getRes = await fetch(url, { method: 'GET' });
        result = getRes.ok;
      } else {
        result = res.ok;
      }
    }
  } catch (e) {
    result = false;
  }
  checkedImages.set(url, result);
  return result;
}

const imageQueue = [];

async function processContent(type, item) {
  if (!item.content) return;
  const $ = cheerio.load(item.content);
  
  $('a').each((i, el) => {
    let href = $(el).attr('href');
    if (isInternal(href)) {
      const p = extractPath(href);
      if (p !== '' && !validSlugs.has(p) && !p.startsWith('category/') && !p.startsWith('tag/') && !p.startsWith('admin/')) {
        brokenLinks.push({
          source: `${type}: ${item.title} (${item.slug})`,
          href: href
        });
      }
    }
  });

  const imgs = $('img').toArray();
  for (const el of imgs) {
    let src = $(el).attr('src');
    if (src && (src.includes('fittour.vn') || src.includes('dulichcoguu.com') || src.startsWith('/'))) {
      imageQueue.push({
        source: `${type}: ${item.title} (${item.slug})`,
        src: src
      });
    }
  }
}

async function run() {
  console.log('Processing Posts...');
  for (const p of posts) await processContent('Post', p);
  
  console.log('Processing Pages...');
  for (const p of pages) await processContent('Page', p);
  
  console.log('Processing Tours...');
  for (const t of tours) await processContent('Tour', t);

  console.log(`Checking ${imageQueue.length} internal images...`);
  
  const BATCH_SIZE = 50;
  for (let i = 0; i < imageQueue.length; i += BATCH_SIZE) {
    const batch = imageQueue.slice(i, i + BATCH_SIZE);
    await Promise.all(batch.map(async (img) => {
      const ok = await checkImage(img.src);
      if (!ok) {
        brokenImages.push(img);
      }
    }));
    process.stdout.write(`\rChecked ${Math.min(i + BATCH_SIZE, imageQueue.length)}/${imageQueue.length}`);
  }
  console.log('\nDone checking images.');

  fs.writeFileSync('/tmp/qa_broken_links.json', JSON.stringify({brokenLinks, brokenImages}, null, 2));
  console.log(`Found ${brokenLinks.length} potential broken links and ${brokenImages.length} broken images.`);
}

run();
