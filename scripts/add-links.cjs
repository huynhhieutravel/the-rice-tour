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
  
  if (html.includes('của Leh Ladakh,')) {
    html = html.replace('của Leh Ladakh,', 'của <a href="/du-lich-ladakh" target="_blank" rel="noopener noreferrer">Leh Ladakh</a>,');
    changes++;
    console.log("Replaced Leh Ladakh");
  } else if (html.includes('của Leh Ladakh')) {
    html = html.replace('của Leh Ladakh', 'của <a href="/du-lich-ladakh" target="_blank" rel="noopener noreferrer">Leh Ladakh</a>');
    changes++;
    console.log("Replaced Leh Ladakh (no comma)");
  }
  
  if (html.includes('hồ Pangong hay')) {
    html = html.replace('hồ Pangong hay', '<a href="/ho-pangong-tso" target="_blank" rel="noopener noreferrer">hồ Pangong</a> hay');
    changes++;
    console.log("Replaced hồ Pangong");
  }
  
  if (html.includes('hay Nubra Valley.')) {
    html = html.replace('hay Nubra Valley.', 'hay <a href="/thung-lung-nubra" target="_blank" rel="noopener noreferrer">Nubra Valley</a>.');
    changes++;
    console.log("Replaced Nubra Valley");
  }

  if (changes > 0) {
    const escapedHtml = html.replace(/'/g, "''");
    fs.writeFileSync('/tmp/update-kitchen.sql', `UPDATE Post SET content = '${escapedHtml}' WHERE slug = 'the-tibetan-kitchen-leh-ladakh';`);
    execSync(`npx wrangler d1 execute dulichcoguu-d1 --file=/tmp/update-kitchen.sql --remote`, { stdio: 'inherit' });
    console.log(`Successfully updated ${changes} links!`);
  } else {
    console.log("No strings matched to replace.");
  }

} catch(e) {
  console.error(e.message);
} finally {
  fs.writeFileSync('.env', envContent);
}
