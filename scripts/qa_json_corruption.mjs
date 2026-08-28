import { execSync } from 'child_process';
const DB_NAME = 'dulichcoguu-d1';
let hasError = false;

for (const table of ['Page', 'Post', 'Tour']) {
  console.log(`Checking JSON integrity for ${table}...`);
  // Get all content
  const out = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="SELECT id, slug, content FROM ${table} WHERE content IS NOT NULL AND content != '';"`, {maxBuffer: 50*1024*1024});
  const rows = JSON.parse(out.toString())[0].results;
  
  let validCount = 0;
  let invalidCount = 0;
  
  for (const row of rows) {
    if (table === 'Tour') {
      // Tours might use HTML content, not JSON. Let's check if it starts with {
      if (row.content.trim().startsWith('{')) {
        try {
          JSON.parse(row.content);
          validCount++;
        } catch (e) {
          invalidCount++;
          console.log(`  ❌ INVALID JSON in ${table} [${row.slug}] (ID: ${row.id})`);
          hasError = true;
        }
      }
    } else {
      // Pages and Posts use Tiptap JSON usually, or raw HTML.
      // If it looks like JSON, parse it.
      if (row.content.trim().startsWith('{')) {
        try {
          JSON.parse(row.content);
          validCount++;
        } catch (e) {
          invalidCount++;
          console.log(`  ❌ INVALID JSON in ${table} [${row.slug}] (ID: ${row.id})`);
          hasError = true;
        }
      }
    }
  }
  console.log(`  Valid JSON: ${validCount}, Invalid JSON: ${invalidCount}`);
}
