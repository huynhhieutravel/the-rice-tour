const fs = require('fs');
const { execSync } = require('child_process');
const cheerio = require('cheerio');

let envContent = '';
try { envContent = fs.readFileSync('.env', 'utf8'); } catch(e){}
const maskedEnv = envContent.replace(/^CLOUDFLARE_API_TOKEN=/m, '# CLOUDFLARE_API_TOKEN=');
fs.writeFileSync('.env', maskedEnv);

const altMap = {
  'doan-fit-tour-an-toi-tai-the-tibetan-kitchen-leh': 'Đoàn du khách FIT Tour thưởng thức bữa tối ấm cúng tại nhà hàng The Tibetan Kitchen Leh Ladakh',
  'bang-hieu-the-tibetan-kitchen-leh-ladakh': 'Bảng hiệu The Tibetan Kitchen nổi tiếng tại Leh Ladakh',
  'mon-an-tai-the-tibetan-kitchen-leh-ladakh': 'Các món ăn Tây Tạng và Himalayan food tại The Tibetan Kitchen Leh Ladakh',
  'bep-mo-the-tibetan-kitchen-leh-ladakh': 'Bếp mở tại The Tibetan Kitchen ở Leh Ladakh với phong cách nấu ăn Tây Tạng',
  'mat-tien-the-tibetan-kitchen-leh-ladakh': 'Mặt tiền nhà hàng The Tibetan Kitchen tại Leh Ladakh'
};

try {
  const resultJson = execSync(`npx wrangler d1 execute dulichcoguu-d1 --command="SELECT content FROM Post WHERE slug = 'the-tibetan-kitchen-leh-ladakh';" --remote --json`, { encoding: 'utf8' });
  const data = JSON.parse(resultJson)[0].results[0];
  const $ = cheerio.load(data.content, null, false);
  
  let changes = 0;
  
  $('img').each((i, el) => {
    const src = $(el).attr('src');
    const alt = $(el).attr('alt');
    if (!src) return;
    
    // check if it matches our alt map
    for (const [key, value] of Object.entries(altMap)) {
      if (src.includes(key)) {
        if (!alt || alt.trim() === '') {
          $(el).attr('alt', value);
          changes++;
          console.log(`Added alt for ${key}`);
        } else if (alt !== value) {
          $(el).attr('alt', value);
          changes++;
          console.log(`Updated alt for ${key}`);
        }
      }
    }
  });

  if (changes > 0) {
    const html = $.html();
    const escapedHtml = html.replace(/'/g, "''");
    fs.writeFileSync('/tmp/update-kitchen-alt.sql', `UPDATE Post SET content = '${escapedHtml}' WHERE slug = 'the-tibetan-kitchen-leh-ladakh';`);
    execSync(`npx wrangler d1 execute dulichcoguu-d1 --file=/tmp/update-kitchen-alt.sql --remote`, { stdio: 'inherit' });
    console.log(`Successfully updated ${changes} alt tags!`);
  } else {
    console.log("No images matched or alt tags already set.");
  }

} catch(e) {
  console.error(e.message);
} finally {
  fs.writeFileSync('.env', envContent);
}
