const cheerio = require('cheerio');

async function runQA() {
  const url = 'https://fittour.vn/the-tibetan-kitchen-leh-ladakh';
  console.log(`Fetching ${url}...`);
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.log("Failed to fetch. Status:", res.status);
      return;
    }
    const html = await res.text();
    const $ = cheerio.load(html);
    
    // 1. Check Title and Meta
    const title = $('title').text();
    const desc = $('meta[name="description"]').attr('content');
    console.log(`\n--- SEO Meta ---`);
    console.log(`Title: ${title} (Length: ${title.length})`);
    console.log(`Description: ${desc} (Length: ${desc ? desc.length : 0})`);
    if (!desc || desc.length < 50 || desc.length > 160) {
      console.log("⚠️ Description length is not optimal (should be 50-160 chars)");
    }

    // 2. Check H1
    const h1s = $('h1');
    console.log(`\n--- H1 Tags (${h1s.length}) ---`);
    h1s.each((i, el) => console.log(`H1: ${$(el).text().trim().replace(/\n/g, ' ')}`));
    if (h1s.length !== 1) console.log("⚠️ Should have exactly ONE H1 tag!");

    // 3. Check Images (Alt tags)
    const images = $('img');
    let missingAlt = 0;
    images.each((i, el) => {
      const alt = $(el).attr('alt');
      if (!alt || alt.trim() === '') missingAlt++;
    });
    console.log(`\n--- Images (${images.length}) ---`);
    console.log(`Images missing alt text: ${missingAlt}`);
    if (missingAlt > 0) console.log("⚠️ Images should have alt text for SEO!");

    // 4. Check Internal Links
    console.log(`\n--- Internal Links we added ---`);
    const links = $('a');
    let foundExplore = false;
    let foundTibet = false;
    let foundHimalaya = false;
    links.each((i, el) => {
      const href = $(el).attr('href');
      const text = $(el).text().trim().replace(/\n/g, ' ');
      if (href === '/du-lich-ladakh' && text.includes('Explore Leh Ladakh')) {
        foundExplore = true;
        console.log(`✅ Found Explore Button -> ${href}`);
      }
      if (href === '/du-lich-tay-tang' && text.includes('Tây Tạng')) {
        foundTibet = true;
        console.log(`✅ Found Tây Tạng link -> ${href} (Classes: ${$(el).attr('class')})`);
      }
      if (href === '/country/himalaya/' && text.includes('Himalaya')) {
        foundHimalaya = true;
        console.log(`✅ Found Himalaya link -> ${href} (Classes: ${$(el).attr('class')})`);
      }
    });

    if (!foundExplore) console.log("⚠️ Explore Leh Ladakh link not found or missing text!");
    if (!foundTibet) console.log("⚠️ Tây Tạng link not found!");
    if (!foundHimalaya) console.log("⚠️ Himalaya link not found!");

  } catch(e) {
    console.log("Error:", e.message);
  }
}
runQA();
