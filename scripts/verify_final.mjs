import { execSync } from 'child_process';

const DB_NAME = 'dulichcoguu-d1';

console.log("=== FINAL VERIFICATION: Checking for any remaining issues ===\n");

// Check specifically for media.fittour.vn URLs with wrong extensions
// Use a smarter query that looks for the COMBINATION (not just separate patterns)
for (const table of ['Page', 'Post', 'Tour']) {
  console.log(`--- ${table} ---`);
  
  // wp-content/uploads (unescaped)
  let q = `SELECT COUNT(*) as cnt FROM ${table} WHERE content LIKE '%media.fittour.vn/wp-content%' OR featuredImage LIKE '%media.fittour.vn/wp-content%'`;
  let out = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="${q}"`, {maxBuffer: 10*1024*1024});
  let cnt = JSON.parse(out.toString())[0].results[0].cnt;
  console.log(`  ${cnt===0?'✅':'❌'} media.fittour.vn/wp-content: ${cnt}`);
  
  // wp-media (unescaped)
  q = `SELECT COUNT(*) as cnt FROM ${table} WHERE content LIKE '%media.fittour.vn/wp-media%' OR featuredImage LIKE '%media.fittour.vn/wp-media%'`;
  out = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="${q}"`, {maxBuffer: 10*1024*1024});
  cnt = JSON.parse(out.toString())[0].results[0].cnt;
  console.log(`  ${cnt===0?'✅':'❌'} media.fittour.vn/wp-media: ${cnt}`);

  // old R2 domain
  q = `SELECT COUNT(*) as cnt FROM ${table} WHERE content LIKE '%pub-fe90037727604a2586cc601e6a3c6575%' OR featuredImage LIKE '%pub-fe90037727604a2586cc601e6a3c6575%'`;
  out = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="${q}"`, {maxBuffer: 10*1024*1024});
  cnt = JSON.parse(out.toString())[0].results[0].cnt;
  console.log(`  ${cnt===0?'✅':'❌'} Old R2 dev domain: ${cnt}`);

  // http (insecure) on media.fittour.vn
  q = `SELECT COUNT(*) as cnt FROM ${table} WHERE content LIKE '%http://media.fittour.vn%' OR featuredImage LIKE 'http://media.fittour.vn%'`;
  out = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="${q}"`, {maxBuffer: 10*1024*1024});
  cnt = JSON.parse(out.toString())[0].results[0].cnt;
  console.log(`  ${cnt===0?'✅':'❌'} http:// insecure: ${cnt}`);
  
  // .jpg.webp double extension
  q = `SELECT COUNT(*) as cnt FROM ${table} WHERE content LIKE '%.jpg.webp%' OR content LIKE '%.png.webp%' OR featuredImage LIKE '%.jpg.webp%'`;
  out = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="${q}"`, {maxBuffer: 10*1024*1024});
  cnt = JSON.parse(out.toString())[0].results[0].cnt;
  console.log(`  ${cnt===0?'✅':'❌'} Double extensions (.jpg.webp): ${cnt}`);

  // escaped wp-content
  q = `SELECT COUNT(*) as cnt FROM ${table} WHERE content LIKE '%fittour.vn\\\\/wp-content%'`;
  out = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="${q}"`, {maxBuffer: 10*1024*1024});
  cnt = JSON.parse(out.toString())[0].results[0].cnt;
  console.log(`  ${cnt===0?'✅':'❌'} Escaped wp-content: ${cnt}`);

  // media.fittour.vn + .jpg (SPECIFIC check — only count if .jpg is in the SAME URL as media.fittour.vn)
  q = `SELECT COUNT(*) as cnt FROM ${table} WHERE content LIKE '%media.fittour.vn/%.jpg%' OR featuredImage LIKE '%media.fittour.vn/%.jpg%'`;
  out = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="${q}"`, {maxBuffer: 10*1024*1024});
  cnt = JSON.parse(out.toString())[0].results[0].cnt;
  console.log(`  ${cnt===0?'✅':'❌'} media.fittour.vn/*.jpg: ${cnt}`);

  q = `SELECT COUNT(*) as cnt FROM ${table} WHERE content LIKE '%media.fittour.vn/%.png%' OR featuredImage LIKE '%media.fittour.vn/%.png%'`;
  out = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="${q}"`, {maxBuffer: 10*1024*1024});
  cnt = JSON.parse(out.toString())[0].results[0].cnt;
  console.log(`  ${cnt===0?'✅':'❌'} media.fittour.vn/*.png: ${cnt}`);
}
