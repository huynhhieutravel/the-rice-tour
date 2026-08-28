const fs = require('fs');
const { execSync } = require('child_process');
const cheerio = require('cheerio');

let envContent = '';
try { envContent = fs.readFileSync('.env', 'utf8'); } catch(e){}
const maskedEnv = envContent.replace(/^CLOUDFLARE_API_TOKEN=/m, '# CLOUDFLARE_API_TOKEN=');
fs.writeFileSync('.env', maskedEnv);

try {
  const resultJson = execSync(`npx wrangler d1 execute dulichcoguu-d1 --command="SELECT content FROM Post WHERE slug = 'the-tibetan-kitchen-leh-ladakh';" --remote --json`, { encoding: 'utf8' });
  const data = JSON.parse(resultJson)[0].results[0];
  const $ = cheerio.load(data.content);
  
  const images = [];
  $('img').each((i, el) => {
    const alt = $(el).attr('alt');
    const src = $(el).attr('src');
    if (!alt || alt.trim() === '') {
      images.push(src);
    }
  });

  console.log("Images missing alt:", images);

  // For each image, try to find it in Media table
  // The src might be https://media.fittour.vn/uploads/... we need the filename or path
  for (const src of images) {
    if (!src) continue;
    const urlParts = src.split('/');
    let filename = urlParts[urlParts.length - 1];
    // Remove query params if any
    filename = filename.split('?')[0];
    
    try {
      const mediaJson = execSync(`npx wrangler d1 execute dulichcoguu-d1 --command="SELECT id, title, alt_text, filename FROM Media WHERE filename LIKE '%${filename}%';" --remote --json`, { encoding: 'utf8' });
      const mediaData = JSON.parse(mediaJson)[0].results;
      console.log(`\nMedia DB for ${filename}:`, mediaData.length > 0 ? mediaData : "NOT FOUND");
    } catch(err) {
      console.log(`\nMedia DB for ${filename}: ERROR`);
    }
  }

} catch(e) {
  console.error(e.message);
} finally {
  fs.writeFileSync('.env', envContent);
}
