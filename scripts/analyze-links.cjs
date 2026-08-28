const fs = require('fs');
const { execSync } = require('child_process');

let envContent = '';
try { envContent = fs.readFileSync('.env', 'utf8'); } catch(e){}
const maskedEnv = envContent.replace(/^CLOUDFLARE_API_TOKEN=/m, '# CLOUDFLARE_API_TOKEN=');
fs.writeFileSync('.env', maskedEnv);

try {
  const resultJson = execSync(`npx wrangler d1 execute dulichcoguu-d1 --command="SELECT content FROM Post WHERE slug = 'the-tibetan-kitchen-leh-ladakh';" --remote --json`, { encoding: 'utf8' });
  const data = JSON.parse(resultJson)[0].results[0];
  let html = data.content;

  console.log("--- Explore Leh Ladakh ---");
  const exploreIdx = html.indexOf('Explore Leh Ladakh');
  if (exploreIdx > -1) {
    console.log(html.substring(Math.max(0, exploreIdx - 100), exploreIdx + 100));
  } else {
    console.log("Not found");
  }

  console.log("\n--- Himalaya ---");
  let himalayaIdx = html.indexOf('Himalaya');
  let count = 0;
  while (himalayaIdx > -1 && count < 3) {
    console.log(html.substring(Math.max(0, himalayaIdx - 50), himalayaIdx + 50).replace(/\n/g, ' '));
    himalayaIdx = html.indexOf('Himalaya', himalayaIdx + 1);
    count++;
  }

  console.log("\n--- Tây Tạng ---");
  let tibetIdx = html.indexOf('Tây Tạng');
  count = 0;
  while (tibetIdx > -1 && count < 3) {
    console.log(html.substring(Math.max(0, tibetIdx - 50), tibetIdx + 50).replace(/\n/g, ' '));
    tibetIdx = html.indexOf('Tây Tạng', tibetIdx + 1);
    count++;
  }

  console.log("\n--- Ấn Độ ---");
  let indiaIdx = html.indexOf('Ấn Độ');
  count = 0;
  while (indiaIdx > -1 && count < 3) {
    console.log(html.substring(Math.max(0, indiaIdx - 50), indiaIdx + 50).replace(/\n/g, ' '));
    indiaIdx = html.indexOf('Ấn Độ', indiaIdx + 1);
    count++;
  }

} catch(e) {
  console.error(e.message);
} finally {
  fs.writeFileSync('.env', envContent);
}
