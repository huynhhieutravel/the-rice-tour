import { execSync } from 'child_process';
import fs from 'fs';

console.log("Starting Bulk WebP Extension Fix via REPLACE()...");

const TABLES = ['Page', 'Post', 'Tour'];
const DB_NAME = 'dulichcoguu-d1';
const BATCH_SIZE = 50;

function escapeSqlString(str) {
  if (!str) return 'NULL';
  return "'" + str.replace(/'/g, "''") + "'";
}

for (const table of TABLES) {
  console.log(`\nProcessing table: ${table}`);
  
  try {
    const query = `SELECT id, content, featuredImage FROM ${table} WHERE content LIKE '%media.fittour.vn%.jpg%' OR content LIKE '%media.fittour.vn%.png%' OR content LIKE '%media.fittour.vn%.jpeg%' OR featuredImage LIKE '%.jpg%' OR featuredImage LIKE '%.png%'`;
    
    console.log(`Fetching records to update...`);
    const output = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="${query}"`, {maxBuffer: 50 * 1024 * 1024});
    
    const data = JSON.parse(output.toString());
    const rows = data[0].results || [];
    
    console.log(`Found ${rows.length} rows in ${table}.`);
    
    if (rows.length === 0) continue;
    
    let updateQueries = [];
    let updatedCount = 0;
    
    for (const row of rows) {
      const idCol = typeof row.id === 'string' ? escapeSqlString(row.id) : row.id;
      let queriesForThisRow = [];

      // Extract all unique media.fittour.vn .jpg/.png URLs in this content
      const regex = /(https:\/\/media\.fittour\.vn\/[^\s"'<>]+\.)(jpg|jpeg|png)(?=[?"'\s>])/gi;
      
      let matches = [];
      let match;
      
      if (row.content) {
        while ((match = regex.exec(row.content)) !== null) {
          const originalUrl = match[0];
          const newUrl = originalUrl.replace(/\.(jpg|jpeg|png)$/i, '.webp');
          matches.push({originalUrl, newUrl});
        }
      }

      if (row.featuredImage) {
        // featuredImage could be just the URL string itself
        let featuredMatches = row.featuredImage.match(regex) || [];
        for (const fm of featuredMatches) {
          const originalUrl = fm;
          const newUrl = originalUrl.replace(/\.(jpg|jpeg|png)$/i, '.webp');
          matches.push({originalUrl, newUrl});
        }
      }
      
      // Remove duplicate URLs to avoid redundant REPLACE calls
      const uniqueUrls = [];
      const seen = new Set();
      for (const m of matches) {
        if (!seen.has(m.originalUrl)) {
          seen.add(m.originalUrl);
          uniqueUrls.push(m);
        }
      }

      if (uniqueUrls.length > 0) {
        let updateSql = `UPDATE ${table} SET `;
        
        // Build nested REPLACE for content
        if (row.content && uniqueUrls.some(m => row.content.includes(m.originalUrl))) {
          let contentExpr = 'content';
          for (const u of uniqueUrls) {
            contentExpr = `REPLACE(${contentExpr}, ${escapeSqlString(u.originalUrl)}, ${escapeSqlString(u.newUrl)})`;
          }
          updateSql += `content = ${contentExpr}`;
        } else {
          updateSql += `content = content`;
        }

        updateSql += `, `;

        // Build nested REPLACE for featuredImage
        if (row.featuredImage && uniqueUrls.some(m => row.featuredImage.includes(m.originalUrl))) {
          let featuredExpr = 'featuredImage';
          for (const u of uniqueUrls) {
            featuredExpr = `REPLACE(${featuredExpr}, ${escapeSqlString(u.originalUrl)}, ${escapeSqlString(u.newUrl)})`;
          }
          updateSql += `featuredImage = ${featuredExpr}`;
        } else {
          updateSql += `featuredImage = featuredImage`;
        }

        updateSql += ` WHERE id = ${idCol};`;
        updateQueries.push(updateSql);
        updatedCount++;
      }
    }
    
    console.log(`Prepared ${updatedCount} UPDATE queries using REPLACE() for ${table}.`);
    
    // Execute in batches
    for (let i = 0; i < updateQueries.length; i += BATCH_SIZE) {
      const batch = updateQueries.slice(i, i + BATCH_SIZE);
      const batchSql = batch.join('\n');
      const tempSqlFile = `temp_update_${table}_${i}.sql`;
      
      fs.writeFileSync(tempSqlFile, batchSql);
      
      console.log(`Executing batch ${i / BATCH_SIZE + 1} for ${table}...`);
      execSync(`npx wrangler d1 execute ${DB_NAME} --remote --file=${tempSqlFile}`);
      
      fs.unlinkSync(tempSqlFile);
    }
    
    console.log(`Finished ${table}.`);
  } catch (err) {
    console.error(`Error processing ${table}:`, err.message);
  }
}

console.log("\nDone all tables.");
