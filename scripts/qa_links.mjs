import { execSync } from 'child_process';
const DB_NAME = 'dulichcoguu-d1';

let oldDomain = 0;
let insecureDomain = 0;

for (const table of ['Page', 'Post', 'Tour']) {
  let out = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="SELECT COUNT(*) as cnt FROM ${table} WHERE content LIKE '%fittour.com.vn%';"`, {maxBuffer: 50*1024*1024});
  oldDomain += JSON.parse(out.toString())[0].results[0].cnt;
  
  out = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="SELECT COUNT(*) as cnt FROM ${table} WHERE content LIKE '%http://fittour.vn%';"`, {maxBuffer: 50*1024*1024});
  insecureDomain += JSON.parse(out.toString())[0].results[0].cnt;
}
console.log(`Old domain (fittour.com.vn) links: ${oldDomain}`);
console.log(`Insecure internal links (http://fittour.vn): ${insecureDomain}`);
