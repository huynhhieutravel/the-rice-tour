import { execSync } from 'child_process';
import fs from 'fs';

console.log("Deep QA: Fetching ALL potential HTML content from DB...");
try {
  const queries = [
    "SELECT content FROM Post WHERE content IS NOT NULL",
    "SELECT content FROM Page WHERE content IS NOT NULL",
    "SELECT content FROM Tour WHERE content IS NOT NULL",
    "SELECT overview as content FROM Tour WHERE overview IS NOT NULL",
    "SELECT itinerary as content FROM Tour WHERE itinerary IS NOT NULL",
    "SELECT content FROM Snippet WHERE content IS NOT NULL",
    "SELECT content FROM Popup WHERE content IS NOT NULL",
    "SELECT description as content FROM Country WHERE description IS NOT NULL",
    "SELECT customSchema as content FROM Post WHERE customSchema IS NOT NULL",
    "SELECT author_snippet as content FROM \"User\" WHERE author_snippet IS NOT NULL"
  ];
  
  let allHtml = "";
  for (const query of queries) {
    try {
      const output = execSync(`npx wrangler d1 execute dulichcoguu_d1 --remote --json --command="${query}"`, { encoding: 'utf-8', maxBuffer: 1024 * 1024 * 50 });
      const data = JSON.parse(output);
      for(const row of data[0].results) {
        allHtml += (row.content || "") + "\n";
      }
    } catch(err) {
      console.log("Skipped or failed query:", query.substring(0, 50));
    }
  }
  
  fs.writeFileSync('src/styles/db-dump.html', allHtml);
  console.log(`Deep QA: Saved DB HTML content to src/styles/db-dump.html (Length: ${allHtml.length} bytes)`);
} catch (e) {
  console.error("Failed to sync DB classes:", e.message);
}
