import { execSync } from 'child_process';

const DB_NAME = 'dulichcoguu-d1';

const queries = [
  "SELECT slug, content, featuredImage FROM Page",
  "SELECT slug, content, featuredImage FROM Post",
  "SELECT slug, content, featuredImage FROM Tour"
];

let legacyUrls = new Set();

for (const query of queries) {
  try {
    const output = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="${query}"`, {maxBuffer: 50 * 1024 * 1024});
    const data = JSON.parse(output.toString());
    const rows = data[0].results || [];
    
    for (const row of rows) {
      const texts = [row.content, row.featuredImage].filter(Boolean).join(' ');
      
      const regex = /(https:\/\/[^\s"'<>;)]+\.(jpg|jpeg|png|webp))/gi;
      let match;
      while ((match = regex.exec(texts)) !== null) {
        const url = match[1];
        if (url.includes('wp-content/uploads') || url.includes('wp-media') || url.includes('pub-fe90037727604a2586cc601e6a3c6575.r2.dev') || url.includes('http://media.fittour.vn')) {
          legacyUrls.add(url);
        }
      }
    }
  } catch(e) {}
}

const urls = Array.from(legacyUrls);
console.log(JSON.stringify(urls, null, 2));
