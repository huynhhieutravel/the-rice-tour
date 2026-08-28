const fs = require('fs');
const { execSync } = require('child_process');

let envContent = '';
try { envContent = fs.readFileSync('.env', 'utf8'); } catch(e){}
const maskedEnv = envContent.replace(/^CLOUDFLARE_API_TOKEN=/m, '# CLOUDFLARE_API_TOKEN=');
fs.writeFileSync('.env', maskedEnv);

const images = [
  'doan-fit-tour-an-toi-tai-the-tibetan-kitchen-leh.webp',
  'bang-hieu-the-tibetan-kitchen-leh-ladakh.webp',
  'mon-an-tai-the-tibetan-kitchen-leh-ladakh.webp',
  'bep-mo-the-tibetan-kitchen-leh-ladakh.webp',
  'mat-tien-the-tibetan-kitchen-leh-ladakh.webp'
];

try {
  for (const filename of images) {
    try {
      const mediaJson = execSync(`npx wrangler d1 execute dulichcoguu-d1 --command="SELECT id, title, altText, description FROM Media WHERE filename LIKE '%${filename}%';" --remote --json`, { encoding: 'utf8' });
      const mediaData = JSON.parse(mediaJson)[0].results;
      console.log(`\n--- ${filename} ---`);
      if (mediaData.length > 0) {
        console.log("Title:", mediaData[0].title);
        console.log("Alt:", mediaData[0].altText);
        console.log("Desc:", mediaData[0].description);
      } else {
        console.log("NOT FOUND IN DB");
      }
    } catch(err) {
      console.log(`Error querying ${filename}`);
    }
  }
} finally {
  fs.writeFileSync('.env', envContent);
}
