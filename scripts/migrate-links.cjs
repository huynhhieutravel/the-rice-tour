const { execSync } = require('child_process');
const fs = require('fs');
const cheerio = require('cheerio');

// Load environment to hide API token during exec
let envContent = '';
try { envContent = fs.readFileSync('.env', 'utf8'); } catch(e){}
const maskedEnv = envContent.replace(/^CLOUDFLARE_API_TOKEN=/m, '# CLOUDFLARE_API_TOKEN=');
fs.writeFileSync('.env', maskedEnv);

try {
  console.log("Fetching data from D1...");
  const query = `
    SELECT id, 'Page' as tableName, content, 0 as isElementor, 'html' as contentFormat FROM Page WHERE content LIKE '%/kinh-nghiem-du-lich-ladakh%'
    UNION ALL
    SELECT id, 'Post' as tableName, content, isElementor, contentFormat FROM Post WHERE content LIKE '%/kinh-nghiem-du-lich-ladakh%'
    UNION ALL
    SELECT id, 'Tour' as tableName, content, 0 as isElementor, 'html' as contentFormat FROM Tour WHERE content LIKE '%/kinh-nghiem-du-lich-ladakh%';
  `;
  const resultJson = execSync(`npx wrangler d1 execute dulichcoguu-d1 --command="${query}" --remote --json`, { encoding: 'utf8', maxBuffer: 1024 * 1024 * 50 });
  const data = JSON.parse(resultJson)[0].results;
  console.log(`Found ${data.length} rows.`);

  const oldPath = "/kinh-nghiem-du-lich-ladakh";
  const newPath = "/du-lich-ladakh";
  const oldUrl = "https://fittour.vn/kinh-nghiem-du-lich-ladakh";
  const newUrl = "https://fittour.vn/du-lich-ladakh";

  function processJsonContent(obj) {
    if (typeof obj === 'string') {
      let str = obj;
      if (str.includes(oldUrl)) str = str.replace(new RegExp(oldUrl, 'g'), newUrl);
      if (str.includes(oldPath)) {
        str = str.replace(/\/kinh\-nghiem\-du\-lich\-ladakh/g, newPath);
      }
      return str;
    } else if (Array.isArray(obj)) {
      return obj.map(processJsonContent);
    } else if (obj !== null && typeof obj === 'object') {
      const newObj = {};
      for (const [key, val] of Object.entries(obj)) {
        newObj[key] = processJsonContent(val);
      }
      return newObj;
    }
    return obj;
  }

  function processHtmlContent(htmlStr) {
    const $ = cheerio.load(htmlStr, null, false);
    let changed = false;
    $('a').each((i, el) => {
      let href = $(el).attr('href');
      if (href) {
        if (href === oldPath || href === oldPath + '/' || href.includes(oldPath)) {
          $(el).attr('href', href.replace(/\/kinh\-nghiem\-du\-lich\-ladakh/g, newPath));
          changed = true;
        } else if (href === oldUrl || href === oldUrl + '/' || href.includes(oldUrl)) {
          $(el).attr('href', href.replace(new RegExp(oldUrl, 'g'), newUrl));
          changed = true;
        }
      }
    });
    return changed ? $.html() : htmlStr;
  }

  let sqlStatements = [];

  for (const row of data) {
    const { id, tableName, content, isElementor, contentFormat } = row;
    if (!content) continue;

    let newContentStr = content;
    let changed = false;

    // Determine how to parse
    if (isElementor === 1 || contentFormat === 'json') {
      try {
        const jsonObj = JSON.parse(content);
        const newJsonObj = processJsonContent(jsonObj);
        const newJsonStr = JSON.stringify(newJsonObj);
        if (newJsonStr !== content) {
          newContentStr = newJsonStr;
          changed = true;
        }
      } catch (e) {
        console.error(`Row ${tableName} ${id}: Failed to parse JSON. Falling back to HTML/String parsing.`);
        newContentStr = processHtmlContent(content);
        if (newContentStr !== content) changed = true;
      }
    } else {
      // It's HTML
      newContentStr = processHtmlContent(content);
      if (newContentStr !== content) changed = true;
    }

    if (changed) {
      // Escape single quotes for SQL
      const escapedContent = newContentStr.replace(/'/g, "''");
      sqlStatements.push(`UPDATE ${tableName} SET content = '${escapedContent}' WHERE id = '${id}';`);
    }
  }

  if (sqlStatements.length > 0) {
    fs.writeFileSync('migration_links.sql', sqlStatements.join('\n'));
    console.log(`Generated migration_links.sql with ${sqlStatements.length} UPDATE statements.`);
  } else {
    console.log("No changes needed in the content.");
  }

} catch (e) {
  console.error(e);
} finally {
  fs.writeFileSync('.env', envContent);
}
