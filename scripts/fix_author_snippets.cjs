const { execSync } = require('child_process');
const fs = require('fs');

function runFix() {
  console.log('Fetching users from Production D1...');
  try {
    // We use JSON output to safely parse
    const rawOutput = execSync('npx wrangler d1 execute dulichcoguu_d1 --remote --command "SELECT id, slug, author_snippet FROM User WHERE author_snippet IS NOT NULL;" --json', { encoding: 'utf-8' });
    const users = JSON.parse(rawOutput)[0].results;
    
    let updateQueries = [];
    
    for (const user of users) {
      if (!user.author_snippet) continue;
      
      let newSnippet = user.author_snippet;
      // Replace fixed heights with aspect-square
      newSnippet = newSnippet.replace(/h-\[180px\]/g, 'aspect-square');
      newSnippet = newSnippet.replace(/md:h-\[200px\]/g, '');
      
      // Also ensure object-cover is there if there's an img
      if (newSnippet.includes('<img') && !newSnippet.includes('object-cover')) {
        newSnippet = newSnippet.replace('<img ', '<img class="w-full h-full object-cover rounded-full" ');
      }
      
      if (newSnippet !== user.author_snippet) {
        console.log(`Fixing aspect ratio for user: ${user.slug || user.id}`);
        // Escape single quotes for SQL
        const escapedSnippet = newSnippet.replace(/'/g, "''");
        updateQueries.push(`UPDATE "User" SET author_snippet = '${escapedSnippet}' WHERE id = '${user.id}';`);
      }
    }
    
    if (updateQueries.length === 0) {
      console.log('No users needed fixing.');
      return;
    }
    
    const sqlFile = 'scripts/sql_chunks/fix_avatars.sql';
    if (!fs.existsSync('scripts/sql_chunks')) {
      fs.mkdirSync('scripts/sql_chunks');
    }
    fs.writeFileSync(sqlFile, updateQueries.join('\n'));
    
    console.log(`\nFound ${updateQueries.length} users to update. Executing update on Production D1...`);
    execSync(`npx wrangler d1 execute dulichcoguu_d1 --remote --file=${sqlFile}`, { stdio: 'inherit' });
    console.log('\n✅ Successfully fixed avatar shapes!');
    
  } catch (error) {
    console.error('Error executing script:', error.message);
  }
}

runFix();
