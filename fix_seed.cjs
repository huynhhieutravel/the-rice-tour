const fs = require('fs');
let content = fs.readFileSync('src/pages/api/seed-all-tours.ts', 'utf8');

// Find the start of cuChiContentHtml
const startIndex = content.indexOf('const cuChiContentHtml = "');
if (startIndex === -1) {
  console.log("Start not found");
  process.exit(1);
}

// Find the start of cuChiFeaturedImg
const nextVarIndex = content.indexOf('const cuChiFeaturedImg = ');
if (nextVarIndex === -1) {
  console.log("Next var not found");
  process.exit(1);
}

// Extract the exact substring
const oldStr = content.substring(startIndex, nextVarIndex);

// Read translate_tour.js to get the newHtml string
const translateContent = fs.readFileSync('/Users/huynhtronghieu/.gemini/antigravity-ide/brain/0d09ba30-4439-4421-a48e-cb23a117297b/scratch/translate_tour.js', 'utf8');
const newHtmlMatch = translateContent.match(/const newHtml = `([\s\S]*?)`;\n/);
if (!newHtmlMatch) {
  console.log("newHtml not found in translate_tour.js");
  process.exit(1);
}

const newHtml = newHtmlMatch[1];
const finalHtmlString = newHtml.replace(/"/g, '\\"').replace(/\n/g, '\\n');

const newStr = `const cuChiContentHtml = "${finalHtmlString}";\n\n`;

content = content.slice(0, startIndex) + newStr + content.slice(nextVarIndex);

fs.writeFileSync('src/pages/api/seed-all-tours.ts', content, 'utf8');
console.log("Successfully fixed seed-all-tours.ts");
