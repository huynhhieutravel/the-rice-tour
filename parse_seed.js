const fs = require('fs');
const content = fs.readFileSync('src/pages/api/seed-all-tours.ts', 'utf8');
const match = content.match(/const cuChiContentHtml = "(.*?)";\n/);
if (match) {
  const html = match[1].replace(/\\"/g, '"').replace(/\\n/g, '\n');
  const count = (html.match(/id="journeys"/g) || []).length;
  console.log("Number of #journeys:", count);
  console.log("HTML length:", html.length);
} else {
  console.log("Not found");
}
