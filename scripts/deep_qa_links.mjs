import { execSync } from 'child_process';
const DB_NAME = 'dulichcoguu-d1';

const queries = [
  "SELECT 'Page' as tbl, slug, content, featuredImage FROM Page",
  "SELECT 'Post' as tbl, slug, content, featuredImage FROM Post",
  "SELECT 'Tour' as tbl, slug, content, featuredImage FROM Tour"
];

let suspicious = [];

for (const query of queries) {
  try {
    const output = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="${query}"`, {maxBuffer: 50 * 1024 * 1024});
    const data = JSON.parse(output.toString());
    const rows = data[0].results || [];
    
    for (const row of rows) {
      const texts = [row.content, row.featuredImage].filter(Boolean).join(' ');
      
      // Check for legacy paths
      if (texts.includes('wp-content/uploads') || texts.includes('wp-media') || texts.includes('pub-fe90037727604a2586cc601e6a3c6575.r2.dev')) {
        suspicious.push({ table: row.tbl, slug: row.slug, issue: 'Legacy Path (wp-content or old R2 domain)' });
      }
      
      // Check for unmigrated jpg/png on media.fittour.vn (we fixed this, but check if any slipped through, like single quotes, no quotes, background-image)
      const unmigratedExt = /(https:\/\/media\.fittour\.vn\/[^\s"'<>;)]+\.(jpg|jpeg|png))/gi;
      let match;
      while ((match = unmigratedExt.exec(texts)) !== null) {
        suspicious.push({ table: row.tbl, slug: row.slug, issue: 'Unmigrated Extension (.jpg/.png)', url: match[1] });
      }
      
      // Check for HTTP instead of HTTPS on media.fittour.vn
      if (texts.includes('http://media.fittour.vn')) {
        suspicious.push({ table: row.tbl, slug: row.slug, issue: 'Insecure HTTP link' });
      }
    }
  } catch(e) {
    console.error(e);
  }
}

console.log(JSON.stringify(suspicious, null, 2));
