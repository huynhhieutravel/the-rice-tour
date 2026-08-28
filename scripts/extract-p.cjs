const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('live_cho_leh.html', 'utf8');
const $ = cheerio.load(html);
$('p').each((i, el) => {
  console.log($(el).text());
});
