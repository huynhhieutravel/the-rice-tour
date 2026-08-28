const fs = require('fs');
const { execSync } = require('child_process');

let envContent = '';
try { envContent = fs.readFileSync('.env', 'utf8'); } catch(e){}
const maskedEnv = envContent.replace(/^CLOUDFLARE_API_TOKEN=/m, '# CLOUDFLARE_API_TOKEN=');
fs.writeFileSync('.env', maskedEnv);

try {
  const resultJson = execSync(`npx wrangler d1 execute dulichcoguu-d1 --command="SELECT content FROM Page WHERE slug = 'gallery-ladakh';" --remote --json`, { encoding: 'utf8' });
  const data = JSON.parse(resultJson)[0].results;
  if (data.length > 0) {
    console.log("Found in Page!");
    fs.writeFileSync('gallery-ladakh-content.txt', data[0].content);
  } else {
    const resultJson2 = execSync(`npx wrangler d1 execute dulichcoguu-d1 --command="SELECT content FROM Post WHERE slug = 'gallery-ladakh';" --remote --json`, { encoding: 'utf8' });
    const data2 = JSON.parse(resultJson2)[0].results;
    if (data2.length > 0) {
      console.log("Found in Post!");
      fs.writeFileSync('gallery-ladakh-content.txt', data2[0].content);
    } else {
      console.log("Not found anywhere!");
    }
  }
} catch(e) {
  console.error(e.message);
} finally {
  fs.writeFileSync('.env', envContent);
}
