import { execSync } from 'child_process';
const DB_NAME = 'dulichcoguu-d1';

for (const table of ['Page', 'Post', 'Tour']) {
  const outImg = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="SELECT COUNT(*) as cnt FROM ${table} WHERE (featuredImage IS NULL OR featuredImage = '') AND status = 'publish';"`);
  console.log(`${table} without Featured Image: ${JSON.parse(outImg.toString())[0].results[0].cnt}`);
}
