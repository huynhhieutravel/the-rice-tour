const fs = require('fs');

const buildScript = fs.readFileSync('scripts/build_sikkim_tour.cjs', 'utf8');
const generateFnStr = buildScript.substring(
  buildScript.indexOf('function generateSikkimHtml() {'),
  buildScript.indexOf('return html;\n}') + 'return html;\n}'.length
);

eval(generateFnStr);
const html = generateSikkimHtml();

const chunkSize = 10000;
const chunks = [];
for (let i = 0; i < html.length; i += chunkSize) {
  chunks.push(html.substring(i, i + chunkSize));
}

let sqlStatements = [];
// First set content to empty string explicitly
sqlStatements.push(`UPDATE Tour SET format = 'elementor', content = '' WHERE slug = 'tour-du-lich-sikkim-2';`);

chunks.forEach((chunk, index) => {
  const escapedChunk = chunk.replace(/'/g, "''");
  sqlStatements.push(`UPDATE Tour SET content = coalesce(content, '') || '${escapedChunk}' WHERE slug = 'tour-du-lich-sikkim-2';`);
});

const sqlContent = sqlStatements.join('\n');
fs.writeFileSync('update_sikkim_remote.sql', sqlContent, 'utf8');
console.log(`Generated ${chunks.length} chunks. Total SQL size: ${sqlContent.length} bytes.`);
