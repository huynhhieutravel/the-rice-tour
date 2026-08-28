import { execSync } from 'child_process';
import fs from 'fs';

console.log("Starting Deep Clean of Legacy URLs...");

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
    const query = `SELECT id, content, featuredImage FROM ${table} WHERE content LIKE '%wp-content/uploads%' OR content LIKE '%wp-media%' OR content LIKE '%pub-fe90037727604a2586cc601e6a3c6575.r2.dev%' OR content LIKE 'http://media.fittour.vn%' OR featuredImage LIKE '%wp-content/uploads%' OR featuredImage LIKE '%wp-media%' OR featuredImage LIKE '%pub-fe90037727604a2586cc601e6a3c6575.r2.dev%' OR featuredImage LIKE 'http://media.fittour.vn%'`;
    
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
      
      const regex = /(https?:\/\/[^\s"'<>;)]+\.(jpg|jpeg|png|webp))/gi;
      
      let matches = [];
      let match;
      const texts = [row.content, row.featuredImage].filter(Boolean).join(' ');
      
      while ((match = regex.exec(texts)) !== null) {
        const originalUrl = match[1];
        let newUrl = originalUrl;
        let needsUpdate = false;
        
        // 1. Change domain
        if (newUrl.includes('pub-fe90037727604a2586cc601e6a3c6575.r2.dev')) {
          newUrl = newUrl.replace('pub-fe90037727604a2586cc601e6a3c6575.r2.dev', 'media.fittour.vn');
          needsUpdate = true;
        }
        
        // 2. Change path
        if (newUrl.includes('/wp-content/uploads/')) {
          newUrl = newUrl.replace('/wp-content/uploads/', '/uploads/');
          needsUpdate = true;
        } else if (newUrl.includes('/wp-media/')) {
          const m = newUrl.match(/\/wp-media\/(?:\d+-)?(.+)$/i);
          if (m) {
            newUrl = 'https://media.fittour.vn/uploads/legacy/' + m[1];
            needsUpdate = true;
          }
        }
        
        // 3. Ensure extension is webp (only for media.fittour.vn)
        if (newUrl.includes('media.fittour.vn') && /\.(jpg|jpeg|png)$/i.test(newUrl)) {
          newUrl = newUrl.replace(/\.(jpg|jpeg|png)$/i, '.webp');
          needsUpdate = true;
        }
        
        // 4. Ensure https
        if (newUrl.startsWith('http://media.fittour.vn')) {
          newUrl = newUrl.replace('http://', 'https://');
          needsUpdate = true;
        }
        
        if (needsUpdate) {
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
    
    console.log(`Prepared ${updatedCount} UPDATE queries for ${table}.`);
    
    // Execute in batches
    for (let i = 0; i < updateQueries.length; i += BATCH_SIZE) {
      const batch = updateQueries.slice(i, i + BATCH_SIZE);
      const batchSql = batch.join('\n');
      const tempSqlFile = `temp_update_legacy_${table}_${i}.sql`;
      
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
