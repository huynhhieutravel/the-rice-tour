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

  let changes = 0;
  
  if (html.includes('văn hoá Tây Tạng')) {
    html = html.replace('văn hoá Tây Tạng', 'văn hoá <a href="/du-lich-tay-tang" target="_blank" rel="noopener noreferrer">Tây Tạng</a>');
    changes++;
    console.log("Replaced Tây Tạng");
  } else if (html.includes('món ăn Tây Tạng')) {
    html = html.replace('món ăn Tây Tạng', 'món ăn <a href="/du-lich-tay-tang" target="_blank" rel="noopener noreferrer">Tây Tạng</a>');
    changes++;
    console.log("Replaced Tây Tạng (món ăn)");
  }
  
  if (html.includes('giữa Himalaya.')) {
    html = html.replace('giữa Himalaya.', 'giữa <a href="/country/himalaya/" target="_blank" rel="noopener noreferrer">Himalaya</a>.');
    changes++;
    console.log("Replaced Himalaya");
  } else if (html.includes('trải nghiệm Himalaya.')) {
    html = html.replace('trải nghiệm Himalaya.', 'trải nghiệm <a href="/country/himalaya/" target="_blank" rel="noopener noreferrer">Himalaya</a>.');
    changes++;
    console.log("Replaced Himalaya (trải nghiệm)");
  }
  
  // Wrap the button in an <a> tag
  const btnRegex = /<button[^>]*>\s*Explore Leh Ladakh\s*<\/button>/g;
  if (btnRegex.test(html)) {
    html = html.replace(btnRegex, (match) => {
      return `<a href="/du-lich-ladakh" class="inline-block" style="text-decoration: none;">${match}</a>`;
    });
    changes++;
    console.log("Wrapped Explore Leh Ladakh button");
  }

  if (changes > 0) {
    const escapedHtml = html.replace(/'/g, "''");
    fs.writeFileSync('/tmp/update-kitchen2.sql', `UPDATE Post SET content = '${escapedHtml}' WHERE slug = 'the-tibetan-kitchen-leh-ladakh';`);
    execSync(`npx wrangler d1 execute dulichcoguu-d1 --file=/tmp/update-kitchen2.sql --remote`, { stdio: 'inherit' });
    console.log(`Successfully updated ${changes} links!`);
  } else {
    console.log("No strings matched to replace.");
  }

} catch(e) {
  console.error(e.message);
} finally {
  fs.writeFileSync('.env', envContent);
}
