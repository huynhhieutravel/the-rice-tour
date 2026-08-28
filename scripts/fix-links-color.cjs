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
  
  // 1. Remove the link from Leh Ladakh
  const lehRegex = /<a href="\/du-lich-ladakh" target="_blank" rel="noopener noreferrer">Leh Ladakh<\/a>/g;
  if (lehRegex.test(html)) {
    html = html.replace(lehRegex, 'Leh Ladakh');
    changes++;
    console.log("Removed link from Leh Ladakh text");
  }

  // 2. Add colors to the other links
  const linkClass = 'text-brand-600 font-medium underline hover:text-brand-700 transition-colors';
  
  const pangongRegex = /<a href="\/ho-pangong-tso" target="_blank" rel="noopener noreferrer">/g;
  if (pangongRegex.test(html)) {
    html = html.replace(pangongRegex, `<a href="/ho-pangong-tso" target="_blank" rel="noopener noreferrer" class="${linkClass}">`);
    changes++;
    console.log("Added color to hồ Pangong");
  }

  const nubraRegex = /<a href="\/thung-lung-nubra" target="_blank" rel="noopener noreferrer">/g;
  if (nubraRegex.test(html)) {
    html = html.replace(nubraRegex, `<a href="/thung-lung-nubra" target="_blank" rel="noopener noreferrer" class="${linkClass}">`);
    changes++;
    console.log("Added color to Nubra Valley");
  }

  const himalayaRegex = /<a href="\/country\/himalaya\/" target="_blank" rel="noopener noreferrer">/g;
  if (himalayaRegex.test(html)) {
    html = html.replace(himalayaRegex, `<a href="/country/himalaya/" target="_blank" rel="noopener noreferrer" class="${linkClass}">`);
    changes++;
    console.log("Added color to Himalaya");
  }

  const taytangRegex = /<a href="\/du-lich-tay-tang" target="_blank" rel="noopener noreferrer">/g;
  if (taytangRegex.test(html)) {
    html = html.replace(taytangRegex, `<a href="/du-lich-tay-tang" target="_blank" rel="noopener noreferrer" class="${linkClass}">`);
    changes++;
    console.log("Added color to Tây Tạng");
  }

  if (changes > 0) {
    const escapedHtml = html.replace(/'/g, "''");
    fs.writeFileSync('/tmp/update-kitchen3.sql', `UPDATE Post SET content = '${escapedHtml}' WHERE slug = 'the-tibetan-kitchen-leh-ladakh';`);
    execSync(`npx wrangler d1 execute dulichcoguu-d1 --file=/tmp/update-kitchen3.sql --remote`, { stdio: 'inherit' });
    console.log(`Successfully updated colors!`);
  } else {
    console.log("No links matched for color update.");
  }

} catch(e) {
  console.error(e.message);
} finally {
  fs.writeFileSync('.env', envContent);
}
