const fs = require('fs');
let content = fs.readFileSync('src/pages/api/seed-all-tours.ts', 'utf8');

const countriesIndex = content.indexOf('// 1. Ensure Countries exist');
const beforeVarsIndex = content.indexOf('export const GET: APIRoute = async () => {');
if (countriesIndex === -1 || beforeVarsIndex === -1) {
  console.log("Anchors not found");
  process.exit(1);
}

const header = content.substring(0, beforeVarsIndex + 'export const GET: APIRoute = async () => {'.length);
const rest = content.substring(countriesIndex);

const translateContent = fs.readFileSync('/Users/huynhtronghieu/.gemini/antigravity-ide/brain/0d09ba30-4439-4421-a48e-cb23a117297b/scratch/translate_tour.js', 'utf8');
const newHtmlMatch = translateContent.match(/const newHtml = `([\s\S]*?)`;\n/);
if (!newHtmlMatch) {
  console.log("newHtml not found in translate_tour.js");
  process.exit(1);
}

const newHtml = newHtmlMatch[1];
const finalHtmlString = newHtml.replace(/"/g, '\\"').replace(/\n/g, '\\n');

const vars = `\n    const cuChiFeaturedImg = "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80";\n    const cuChiTitle = "1-Day Premium Cu Chi Tunnels & Ho Chi Minh City Discovery";\n    const cuChiContentHtml = "${finalHtmlString}";\n\n    `;

content = header + vars + rest;

fs.writeFileSync('src/pages/api/seed-all-tours.ts', content, 'utf8');
console.log("Successfully cleaned and fixed seed-all-tours.ts");
