import { execSync } from 'child_process';
import https from 'https';
import fs from 'fs';

const DB_NAME = 'dulichcoguu-d1';

// ============================
// PHASE 1: Check for ANY remaining legacy URLs in DB
// ============================
console.log("=== PHASE 1: Scanning for remaining legacy/broken URLs in DB ===\n");

const legacyPatterns = [
  { label: "wp-content/uploads", where: "content LIKE '%wp-content/uploads%' OR featuredImage LIKE '%wp-content/uploads%'" },
  { label: "wp-media", where: "content LIKE '%wp-media%' OR featuredImage LIKE '%wp-media%'" },
  { label: "pub-fe9003... R2 dev domain", where: "content LIKE '%pub-fe90037727604a2586cc601e6a3c6575.r2.dev%' OR featuredImage LIKE '%pub-fe90037727604a2586cc601e6a3c6575.r2.dev%'" },
  { label: "http:// (insecure)", where: "content LIKE '%http://media.fittour.vn%' OR featuredImage LIKE 'http://media.fittour.vn%'" },
  { label: ".jpg on media.fittour.vn", where: "(content LIKE '%media.fittour.vn%.jpg%' OR featuredImage LIKE '%media.fittour.vn%.jpg%')" },
  { label: ".png on media.fittour.vn", where: "(content LIKE '%media.fittour.vn%.png%' OR featuredImage LIKE '%media.fittour.vn%.png%')" },
];

for (const table of ['Page', 'Post', 'Tour']) {
  console.log(`--- Table: ${table} ---`);
  for (const p of legacyPatterns) {
    try {
      const q = `SELECT COUNT(*) as cnt FROM ${table} WHERE ${p.where}`;
      const out = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="${q}"`, {maxBuffer: 10*1024*1024});
      const data = JSON.parse(out.toString());
      const count = data[0].results[0].cnt;
      const status = count === 0 ? '✅' : '❌';
      console.log(`  ${status} ${p.label}: ${count} rows`);
    } catch(e) {
      console.log(`  ⚠️  ${p.label}: ERROR - ${e.message.substring(0, 80)}`);
    }
  }
}

// ============================
// PHASE 2: Sample 10 diverse affected URLs for manual QA
// ============================
console.log("\n=== PHASE 2: Collecting 10 diverse affected pages for manual QA ===\n");

const samples = [];

// Get diverse Pages
try {
  const out = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="SELECT slug, title FROM Page WHERE slug IN ('portfolio','our-team','about-us','tuyen-dung') LIMIT 4;"`, {maxBuffer: 10*1024*1024});
  const data = JSON.parse(out.toString());
  for (const r of data[0].results) {
    samples.push({ type: 'Page', slug: r.slug, title: r.title, url: 'https://fittour.vn/' + r.slug + '/' });
  }
} catch(e) {}

// Get diverse Posts (mix of blog, emagazine)
try {
  const out = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="SELECT slug, title FROM Post ORDER BY RANDOM() LIMIT 10;"`, {maxBuffer: 10*1024*1024});
  const data = JSON.parse(out.toString());
  for (const r of data[0].results) {
    samples.push({ type: 'Post', slug: r.slug, title: r.title, url: 'https://fittour.vn/' + r.slug + '/' });
  }
} catch(e) {}

// Get diverse Tours
try {
  const out = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="SELECT slug, title FROM Tour ORDER BY RANDOM() LIMIT 10;"`, {maxBuffer: 10*1024*1024});
  const data = JSON.parse(out.toString());
  for (const r of data[0].results) {
    samples.push({ type: 'Tour', slug: r.slug, title: r.title, url: 'https://fittour.vn/tour/' + r.slug + '/' });
  }
} catch(e) {}

// ============================
// PHASE 3: HTTP-check a random sample of image URLs from the DB
// ============================
console.log("=== PHASE 3: Spot-checking image URLs from DB (HTTP HEAD) ===\n");

const imageUrls = new Set();

for (const table of ['Page', 'Post', 'Tour']) {
  try {
    const q = `SELECT content, featuredImage FROM ${table} ORDER BY RANDOM() LIMIT 20`;
    const out = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="${q}"`, {maxBuffer: 50*1024*1024});
    const data = JSON.parse(out.toString());
    for (const row of data[0].results) {
      const texts = [row.content, row.featuredImage].filter(Boolean).join(' ');
      const re = /(https:\/\/media\.fittour\.vn\/[^\s"'<>;)]+\.webp)/gi;
      let m;
      while ((m = re.exec(texts)) !== null) {
        imageUrls.add(m[1]);
        if (imageUrls.size >= 30) break;
      }
      if (imageUrls.size >= 30) break;
    }
  } catch(e) {}
}

function checkUrl(url) {
  return new Promise((resolve) => {
    https.request(url, { method: 'HEAD' }, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', () => {
      resolve({ url, status: 'ERROR' });
    }).end();
  });
}

async function run() {
  const urlArr = Array.from(imageUrls);
  const results = await Promise.all(urlArr.map(checkUrl));
  const ok = results.filter(r => r.status === 200);
  const fail = results.filter(r => r.status !== 200);
  
  console.log(`Checked ${results.length} random .webp URLs from DB:`);
  console.log(`  ✅ OK (200): ${ok.length}`);
  console.log(`  ❌ Failed: ${fail.length}`);
  
  if (fail.length > 0) {
    console.log("\nFailed URLs:");
    for (const f of fail) {
      console.log(`  ${f.status} ${f.url}`);
    }
  }
  
  // Output the samples
  console.log("\n=== FINAL: 10 Diverse Links for Manual QA ===\n");
  console.log(JSON.stringify(samples, null, 2));
}

run();
