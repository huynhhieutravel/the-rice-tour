const fs = require('fs');
const content = fs.readFileSync('src/pages/api/seed-all-tours.ts', 'utf8');
const match = content.match(/const cuChiContentHtml = "(.*?)";\n/);
if (match) {
  const html = match[1].replace(/\\"/g, '"').replace(/\\n/g, '\n');
  const index1 = html.indexOf('id="journeys"');
  const index2 = html.indexOf('id="journeys"', index1 + 1);
  console.log("Index 1:", index1);
  console.log("Index 2:", index2);
  console.log("Around index 2:");
  console.log(html.substring(index2 - 100, index2 + 100));
}
