const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

async function main() {
  const pagesDir = path.join(__dirname, '../src/pages');
  const files = fs.readdirSync(pagesDir);
  
  const ignoredFiles = [
    '404.astro', '500.astro', 'index.astro', 'index_old.astro', '_index_old.astro',
    'search.astro', '[...slug].astro', 'test-shortcode.astro', '_test-shortcode.astro',
    'about-demo.astro', '_about-demo.astro', 'design.astro', 'signature.astro', 'dia-diem-to-chuc.astro', 'huynh-hieu.astro', 'co-may.astro'
  ];

  const slugsToSync = files
    .filter(file => file.endsWith('.astro') && !ignoredFiles.includes(file))
    .map(file => file.replace('.astro', ''));

  console.log(`Found ${slugsToSync.length} hardcoded astro pages.`);

  const chunksDir = path.join(__dirname, 'sql_chunks');
  if (fs.existsSync(chunksDir)) {
    fs.rmSync(chunksDir, { recursive: true, force: true });
  }
  fs.mkdirSync(chunksDir);

  let currentChunk = 1;
  let currentSql = [];
  const MAX_QUERIES_PER_CHUNK = 3; // Keep chunks very small to avoid SQLITE_TOOBIG
  
  let bashLines = ['#!/bin/bash', 'mv .env .env.backup'];

  for (let i = 0; i < slugsToSync.length; i++) {
    const slug = slugsToSync[i];
    console.log(`[${i + 1}/${slugsToSync.length}] Fetching live HTML for /${slug}...`);
    
    try {
      const response = await fetch(`https://fittour.vn/${slug}`);
      if (!response.ok) {
        continue;
      }
      
      const html = await response.text();
      const $ = cheerio.load(html);
      
      $('header, footer, nav, .site-header, .site-footer, #header, #footer, .header, .footer, svg').remove();
      
      const links = [];
      $('body').find('a').each((i, el) => {
        const href = $(el).attr('href');
        const text = $(el).text();
        if (href) {
          links.push(`<a href="${href}">${text}</a>`);
        }
      });
      
      const bodyHtml = links.join(' ');
      
      if (!bodyHtml.trim()) {
        console.warn(`⚠️ No links found for /${slug}. Skipping.`);
        continue;
      }

      const escapedHtml = bodyHtml.replace(/'/g, "''");
      
      currentSql.push(`UPDATE Post SET content = '${escapedHtml}' WHERE slug = '${slug}';`);
      currentSql.push(`UPDATE Tour SET content = '${escapedHtml}' WHERE slug = '${slug}';`);
      currentSql.push(`UPDATE Page SET content = '${escapedHtml}' WHERE slug = '${slug}';`);
      
      if (currentSql.length >= MAX_QUERIES_PER_CHUNK * 3) {
        const chunkPath = path.join(chunksDir, `chunk_${currentChunk}.sql`);
        fs.writeFileSync(chunkPath, currentSql.join('\n'));
        bashLines.push(`echo "Executing chunk ${currentChunk}..."`);
        bashLines.push(`npx wrangler d1 execute dulichcoguu-d1 --remote --file=scripts/sql_chunks/chunk_${currentChunk}.sql`);
        currentSql = [];
        currentChunk++;
      }
      
    } catch (e) {
      console.error(e.message);
    }
  }

  if (currentSql.length > 0) {
    const chunkPath = path.join(chunksDir, `chunk_${currentChunk}.sql`);
    fs.writeFileSync(chunkPath, currentSql.join('\n'));
    bashLines.push(`echo "Executing chunk ${currentChunk}..."`);
    bashLines.push(`npx wrangler d1 execute dulichcoguu-d1 --remote --file=scripts/sql_chunks/chunk_${currentChunk}.sql`);
  }

  bashLines.push('mv .env.backup .env');
  bashLines.push('echo "Done!"');

  const bashPath = path.join(__dirname, 'run-sync.sh');
  fs.writeFileSync(bashPath, bashLines.join('\n'));
  fs.chmodSync(bashPath, 0o755);
  
  console.log(`\\n✅ Generated bash script at scripts/run-sync.sh`);
}

main().catch(console.error);
