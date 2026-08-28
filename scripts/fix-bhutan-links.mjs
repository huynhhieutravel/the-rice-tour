import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';

// Local D1 database path
const dbPath = '.wrangler/state/v3/d1/miniflare-D1DatabaseObject/ff7962b7b1b213a0c7275053885f635e4d68cb0811b671e41abdd0a235aa8f1e.sqlite';
const db = new Database(dbPath);

const targetLinks = ['du-lich-bhutan-6n5d', 'tour-an-do-bhutan'];
const newLink = 'tour-bhutan-5n4d';

let sqlCommands = [];

// Helper to replace links in content safely
function replaceLinks(content) {
    if (!content) return content;
    let modified = content;
    // Replace "/tour/du-lich-bhutan-6n5d" and "/tour/du-lich-bhutan-6n5d/"
    modified = modified.replace(/\/tour\/du-lich-bhutan-6n5d\/?/g, '/tour/tour-bhutan-5n4d');
    modified = modified.replace(/\/tour\/tour-an-do-bhutan\/?/g, '/tour/tour-bhutan-5n4d');
    return modified;
}

function processTable(tableName, idColumn, contentColumn) {
    const query = `SELECT ${idColumn}, ${contentColumn} FROM ${tableName} WHERE ${contentColumn} LIKE '%du-lich-bhutan-6n5d%' OR ${contentColumn} LIKE '%tour-an-do-bhutan%'`;
    try {
        const rows = db.prepare(query).all();
        console.log(`Found ${rows.length} rows in ${tableName}`);
        
        for (const row of rows) {
            const id = row[idColumn];
            const oldContent = row[contentColumn];
            const newContent = replaceLinks(oldContent);
            
            if (oldContent !== newContent) {
                // Escape single quotes for SQL
                const escapedContent = newContent.replace(/'/g, "''");
                sqlCommands.push(`UPDATE ${tableName} SET ${contentColumn} = '${escapedContent}' WHERE ${idColumn} = '${id}';`);
            }
        }
    } catch (e) {
        console.log(`Error processing ${tableName}: ${e.message}`);
    }
}

processTable('Post', 'id', 'content');
processTable('Page', 'id', 'content');
processTable('Tour', 'id', 'content');

const sqlOutput = sqlCommands.join('\n');
fs.writeFileSync('fix-bhutan-links.sql', sqlOutput);
console.log(`Generated fix-bhutan-links.sql with ${sqlCommands.length} UPDATE statements.`);
