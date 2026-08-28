import fs from 'fs';
import https from 'https';

const urls = JSON.parse(fs.readFileSync('legacy_urls.json', 'utf8'));

// Generate candidate R2 URL for each legacy URL
function getCandidateUrl(url) {
  let newUrl = url;
  
  // 1. Change domain
  if (url.includes('pub-fe90037727604a2586cc601e6a3c6575.r2.dev')) {
    newUrl = newUrl.replace('pub-fe90037727604a2586cc601e6a3c6575.r2.dev', 'media.fittour.vn');
  }
  
  // 2. Change path
  if (newUrl.includes('/wp-content/uploads/')) {
    newUrl = newUrl.replace('/wp-content/uploads/', '/uploads/');
  } else if (newUrl.includes('/wp-media/')) {
    // We strip the prefix number and put it in uploads/legacy/
    // Example: /wp-media/9559-mai-anh-dao-o-my.jpg -> /uploads/legacy/mai-anh-dao-o-my.webp
    const match = newUrl.match(/\/wp-media\/(?:\d+-)?(.+)$/i);
    if (match) {
      newUrl = 'https://media.fittour.vn/uploads/legacy/' + match[1];
    }
  }
  
  // 3. Change extension
  newUrl = newUrl.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  return newUrl;
}

const candidateUrls = urls.map(url => ({
  legacy: url,
  candidate: getCandidateUrl(url)
}));

let foundCount = 0;
let missingCount = 0;

async function checkUrl(item) {
  return new Promise((resolve) => {
    https.request(item.candidate, { method: 'HEAD' }, (res) => {
      resolve({ ...item, status: res.statusCode });
    }).on('error', () => {
      resolve({ ...item, status: 500 });
    }).end();
  });
}

async function run() {
  const BATCH_SIZE = 20;
  const results = [];
  for (let i = 0; i < candidateUrls.length; i += BATCH_SIZE) {
    const batch = candidateUrls.slice(i, i + BATCH_SIZE);
    const batchResults = await Promise.all(batch.map(checkUrl));
    results.push(...batchResults);
  }
  
  const missing = results.filter(r => r.status !== 200);
  const found = results.filter(r => r.status === 200);
  
  console.log(`Checked ${results.length} URLs.`);
  console.log(`Found on R2: ${found.length}`);
  console.log(`Missing on R2: ${missing.length}`);
  
  fs.writeFileSync('qa_missing_r2.json', JSON.stringify(missing, null, 2));
}

run();
