const fs = require('fs');
const { execSync } = require('child_process');

let envContent = '';
try { envContent = fs.readFileSync('.env', 'utf8'); } catch(e){}
const maskedEnv = envContent.replace(/^CLOUDFLARE_API_TOKEN=.*$/m, 'CLOUDFLARE_API_TOKEN=***');
console.log(maskedEnv);

function executeD1Query(query) {
  try {
    const cmd = `npx wrangler d1 execute dulichcoguu-d1 --remote --json --command="${query.replace(/"/g, '\\"')}"`;
    const resultStr = execSync(cmd, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
    const match = resultStr.match(/\[\s*\{.*\}\s*\]/s) || resultStr.match(/\[\]/);
    if (match) {
        return JSON.parse(match[0]);
    }
    return [];
  } catch (err) {
    console.error("D1 Error:", err.stderr);
    return [];
  }
}

const posts = executeD1Query(`SELECT slug, title FROM Post WHERE slug = 'gallery-ladakh'`);
console.log("Post:", posts);

const pages = executeD1Query(`SELECT slug, title FROM Page WHERE slug = 'gallery-ladakh'`);
console.log("Page:", pages);

const tours = executeD1Query(`SELECT slug, title FROM Tour WHERE slug = 'gallery-ladakh'`);
console.log("Tour:", tours);
