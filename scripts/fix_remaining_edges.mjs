import { execSync } from 'child_process';
import fs from 'fs';

console.log("=== PHASE A: Fix double extensions (.jpg.webp -> .webp) ===\n");

const DB_NAME = 'dulichcoguu-d1';

// Fix 1: .jpg.webp and .png.webp double extensions
for (const table of ['Page', 'Post', 'Tour']) {
  try {
    const countOut = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="SELECT COUNT(*) as cnt FROM ${table} WHERE content LIKE '%.jpg.webp%' OR content LIKE '%.png.webp%' OR content LIKE '%.jpeg.webp%' OR featuredImage LIKE '%.jpg.webp%' OR featuredImage LIKE '%.png.webp%';"`, {maxBuffer: 10*1024*1024});
    const countData = JSON.parse(countOut.toString());
    const count = countData[0].results[0].cnt;
    
    if (count > 0) {
      console.log(`${table}: ${count} rows with double extensions. Fixing...`);
      
      const sql = `UPDATE ${table} SET content = REPLACE(REPLACE(REPLACE(content, '.jpg.webp', '.webp'), '.jpeg.webp', '.webp'), '.png.webp', '.webp'), featuredImage = REPLACE(REPLACE(REPLACE(featuredImage, '.jpg.webp', '.webp'), '.jpeg.webp', '.webp'), '.png.webp', '.webp') WHERE content LIKE '%.jpg.webp%' OR content LIKE '%.png.webp%' OR content LIKE '%.jpeg.webp%' OR featuredImage LIKE '%.jpg.webp%' OR featuredImage LIKE '%.png.webp%';`;
      
      fs.writeFileSync('temp_fix_double_ext.sql', sql);
      execSync(`npx wrangler d1 execute ${DB_NAME} --remote --file=temp_fix_double_ext.sql`);
      fs.unlinkSync('temp_fix_double_ext.sql');
      console.log(`  ✅ Fixed ${table}.`);
    } else {
      console.log(`${table}: ✅ No double extensions found.`);
    }
  } catch(e) {
    console.error(`  ❌ Error on ${table}:`, e.message.substring(0, 120));
  }
}

// Fix 2: JSON-escaped legacy paths like \/\/fittour.vn\/wp-content\/uploads\/...jpg
console.log("\n=== PHASE B: Fix JSON-escaped legacy paths ===\n");

for (const table of ['Page', 'Post', 'Tour']) {
  try {
    const countOut = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="SELECT COUNT(*) as cnt FROM ${table} WHERE content LIKE '%fittour.vn\\\\/wp-content%' OR content LIKE '%fittour.vn\\\\/wp-media%';"`, {maxBuffer: 10*1024*1024});
    const countData = JSON.parse(countOut.toString());
    const count = countData[0].results[0].cnt;
    
    if (count > 0) {
      console.log(`${table}: ${count} rows with JSON-escaped legacy paths. Fixing...`);
      
      // We need to fetch and fix row by row because these are complex escaped patterns
      const fetchOut = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="SELECT id, content FROM ${table} WHERE content LIKE '%fittour.vn\\\\/wp-content%' OR content LIKE '%fittour.vn\\\\/wp-media%';"`, {maxBuffer: 50*1024*1024});
      const fetchData = JSON.parse(fetchOut.toString());
      const rows = fetchData[0].results || [];
      
      for (const row of rows) {
        let newContent = row.content;
        
        // Replace escaped wp-content paths: \/\/fittour.vn\/wp-content\/uploads\/ -> \/\/media.fittour.vn\/uploads\/
        newContent = newContent.replace(/\\\/\\\/fittour\.vn\\\/wp-content\\\/uploads\\\//g, '\\/\\/media.fittour.vn\\/uploads\\/');
        
        // Replace escaped wp-media paths
        newContent = newContent.replace(/\\\/\\\/fittour\.vn\\\/wp-media\\\//g, '\\/\\/media.fittour.vn\\/uploads\\/legacy\\/');
        
        // Also fix .jpg -> .webp in these escaped contexts
        // Pattern: something.jpg" (end of escaped URL)
        newContent = newContent.replace(/(\\\/\\\/media\.fittour\.vn\\\/[^"]*?)\.jpg"/g, '$1.webp"');
        newContent = newContent.replace(/(\\\/\\\/media\.fittour\.vn\\\/[^"]*?)\.png"/g, '$1.webp"');
        
        if (newContent !== row.content) {
          const escapedContent = newContent.replace(/'/g, "''");
          const sql = `UPDATE ${table} SET content = '${escapedContent}' WHERE id = ${row.id};`;
          fs.writeFileSync('temp_fix_escaped.sql', sql);
          execSync(`npx wrangler d1 execute ${DB_NAME} --remote --file=temp_fix_escaped.sql`);
          fs.unlinkSync('temp_fix_escaped.sql');
          console.log(`  ✅ Fixed ${table} id=${row.id}`);
        }
      }
    } else {
      console.log(`${table}: ✅ No JSON-escaped legacy paths found.`);
    }
  } catch(e) {
    console.error(`  ❌ Error on ${table}:`, e.message.substring(0, 120));
  }
}

// Fix 3: Remaining unmigrated .jpg/.png on media.fittour.vn (wider regex, including URLs ending at ) or ; or other chars)
console.log("\n=== PHASE C: Final sweep — fix any remaining .jpg/.png on media.fittour.vn ===\n");

for (const table of ['Page', 'Post', 'Tour']) {
  try {
    const fetchOut = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="SELECT id, content, featuredImage FROM ${table} WHERE content LIKE '%media.fittour.vn%.jpg%' OR content LIKE '%media.fittour.vn%.png%' OR featuredImage LIKE '%media.fittour.vn%.jpg%' OR featuredImage LIKE '%media.fittour.vn%.png%';"`, {maxBuffer: 50*1024*1024});
    const fetchData = JSON.parse(fetchOut.toString());
    const rows = fetchData[0].results || [];
    
    if (rows.length === 0) {
      console.log(`${table}: ✅ Clean. No remaining .jpg/.png URLs.`);
      continue;
    }
    
    console.log(`${table}: ${rows.length} rows still have .jpg/.png. Processing...`);
    
    for (const row of rows) {
      let needsUpdate = false;
      let newContent = row.content;
      let newFeaturedImage = row.featuredImage;
      
      if (newContent) {
        // Very broad regex: match any media.fittour.vn URL ending in .jpg/.jpeg/.png
        // followed by ANY non-alphanumeric char (or end of string)
        const fixed = newContent.replace(/(https:\/\/media\.fittour\.vn\/[^\s"'<>;)]+)\.(jpg|jpeg|png)/gi, '$1.webp');
        if (fixed !== newContent) {
          newContent = fixed;
          needsUpdate = true;
        }
      }
      
      if (newFeaturedImage) {
        const fixed = newFeaturedImage.replace(/(https:\/\/media\.fittour\.vn\/[^\s"'<>;)]+)\.(jpg|jpeg|png)/gi, '$1.webp');
        if (fixed !== newFeaturedImage) {
          newFeaturedImage = fixed;
          needsUpdate = true;
        }
      }
      
      if (needsUpdate) {
        const escapedContent = (newContent || '').replace(/'/g, "''");
        const escapedFeatured = (newFeaturedImage || '').replace(/'/g, "''");
        const sql = `UPDATE ${table} SET content = '${escapedContent}', featuredImage = '${escapedFeatured}' WHERE id = ${row.id};`;
        fs.writeFileSync('temp_fix_final.sql', sql);
        try {
          execSync(`npx wrangler d1 execute ${DB_NAME} --remote --file=temp_fix_final.sql`);
          console.log(`  ✅ Fixed ${table} id=${row.id}`);
        } catch(e2) {
          console.log(`  ❌ Failed ${table} id=${row.id}: ${e2.message.substring(0, 80)}`);
        }
        fs.unlinkSync('temp_fix_final.sql');
      }
    }
  } catch(e) {
    console.error(`  ❌ Error on ${table}:`, e.message.substring(0, 120));
  }
}

console.log("\n=== DONE. Running final verification... ===\n");

// Final verification
for (const table of ['Page', 'Post', 'Tour']) {
  for (const pattern of ['.jpg', '.png', 'wp-content', 'wp-media']) {
    const q = `SELECT COUNT(*) as cnt FROM ${table} WHERE content LIKE '%media.fittour.vn%${pattern}%' OR featuredImage LIKE '%media.fittour.vn%${pattern}%'`;
    try {
      const out = execSync(`npx wrangler d1 execute ${DB_NAME} --remote --json --command="${q}"`, {maxBuffer: 10*1024*1024});
      const data = JSON.parse(out.toString());
      const count = data[0].results[0].cnt;
      const status = count === 0 ? '✅' : '❌';
      console.log(`${status} ${table} — ${pattern}: ${count} rows`);
    } catch(e) {}
  }
}
