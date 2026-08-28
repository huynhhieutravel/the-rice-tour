import { execSync } from 'child_process';
const DB_NAME = 'dulichcoguu-d1';
let missingAlt = 0;
let totalImg = 0;

for (const table of ['Page', 'Post', 'Tour']) {
  const out = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="SELECT content FROM ${table} WHERE content LIKE '%<img%';"`, {maxBuffer: 50*1024*1024});
  const rows = JSON.parse(out.toString())[0].results;
  
  for (const row of rows) {
    if (!row.content) continue;
    const imgs = row.content.match(/<img[^>]+>/g) || [];
    totalImg += imgs.length;
    for (const img of imgs) {
      if (!img.includes('alt="') && !img.includes("alt='")) {
        missingAlt++;
      }
    }
  }
}
console.log(`Total images in content: ${totalImg}`);
console.log(`Images missing alt attribute: ${missingAlt}`);
