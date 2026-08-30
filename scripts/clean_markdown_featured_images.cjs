const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../content-pipeline/04-english');

// Clean, high-resolution, unbranded destination images for all 30 posts
const cleanImages = {
  "happy-land-ben-luc-travel-guide": "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
  "nam-du-island-expedition-guide": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  "mekong-delta-fruits-harvest-map": "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1200&q=80",
  "truong-tien-bridge-hue-heritage": "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80",
  "my-quynh-safari-definitive-guide": "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80",
  "mekong-khan-ran-scarf-legacy": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80",
  "huynh-thuy-le-ancient-house": "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=1200&q=80",
  "lan-vuong-ecopark-mekong-mud": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
  "hon-son-island-lodging-homestays": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  "can-tho-beach-artificial-oasis": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
  "buu-long-tourist-area-dong-nai": "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
  "da-lat-specialties": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  "sau-hoai-rice-noodle-oven": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80",
  "hoi-an-banh-mi-guide": "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=1200&q=80",
  "long-xuyen-broken-rice-guide": "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80",
  "can-tho-fermented-hotpot": "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=1200&q=80",
  "ba-chua-xu-temple-an-giang": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
  "can-tho-hotels-guide": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  "sa-dec-flower-village": "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
  "can-tho-markets-guide": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
  "chua-som-rong-soc-trang": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
  "nha-hat-cao-van-lau": "https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=1200&q=80",
  "cho-noi-cai-rang-can-tho": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
  "mercury-phu-quoc-resort-villas": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  "the-rice-tour-comprehensive-travel-services": "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
  "dinh-cau-phu-quoc": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  "dac-san-bun-nuoc-leo-soc-trang": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80",
  "chua-doi-soc-trang": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
  "canh-dong-dien-gio-bac-lieu": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
  "tau-truong-tuyen": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80"
};

const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.md'));
let updatedCount = 0;

files.forEach(file => {
  const filePath = path.join(targetDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  const slugMatch = content.match(/slug:\s*\"?([^\r\n\"]+)\"?/);
  if (!slugMatch) return;
  const slug = slugMatch[1].trim();
  const cleanImg = cleanImages[slug] || "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80";

  // Check if featured_image exists in frontmatter
  if (content.includes('featured_image:')) {
    content = content.replace(/featured_image:\s*\"?[^\r\n\"]+\"?/, `featured_image: "${cleanImg}"`);
  } else {
    // Insert featured_image right below slug or subtitle
    content = content.replace(/(slug:\s*\"?[^\r\n\"]+\"?)/, `$1\nfeatured_image: "${cleanImg}"`);
  }

  // Remove any legacy image note line
  content = content.replace(/>\s*🖼️\s*\*\*Featured Image:\*\*.*(\r?\n)?/g, '');

  fs.writeFileSync(filePath, content, 'utf-8');
  updatedCount++;
  console.log(`✓ Updated ${file} (${slug}) -> ${cleanImg}`);
});

console.log(`\n🎉 Successfully sanitized featured_image for all ${updatedCount} posts!`);
