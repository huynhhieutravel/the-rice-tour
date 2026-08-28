const fs = require('fs');
const cheerio = require('cheerio');

const data = JSON.parse(fs.readFileSync('post-content.json', 'utf8'))[0].results[0];
const $ = cheerio.load(data.content, null, false);
$('style, script').remove();
let text = $.text().replace(/\s+/g, ' ').trim();

console.log("--- Extracted Text ---");
console.log(text.substring(0, 1500) + "...[truncated]");

console.log("\n--- Full HTML (First 1500 chars) ---");
console.log(data.content.substring(0, 1500));
