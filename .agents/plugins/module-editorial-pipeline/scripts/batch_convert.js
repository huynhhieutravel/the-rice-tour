const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const inputDir = '/Users/huynhtronghieu/Documents/thericetour/content-pipeline/04-english';
const demoArticlesFile = '/Users/huynhtronghieu/Documents/thericetour/src/data/demo-articles.ts';

// Tailored Metadata Dictionary for all 10 articles to ensure authentic NatGeo / FIT Tour aesthetic
const articleMetadata = {
  "happy-land-ben-luc-travel-guide": {
    subtitle: "Current Status, Ticketing Realities & 2026 Travel Updates",
    lead: "Once envisioned as the 'Land of Happiness' along the untamed waters of the Vàm Cỏ Đông river, the Happy Land Entertainment Complex has weathered significant turbulence. As of 2026, this grand project no longer operates as a regular tourist attraction for individual travelers.",
    readTime: 8,
    badges: [
      { icon: "📍", text: "Binh Duc, Tay Ninh" },
      { icon: "🚫", text: "Closed to Public" },
      { icon: "🎟️", text: "Private Events Only" },
      { icon: "⚠️", text: "2026 Travel Warning" }
    ],
    stats: [
      { icon: "📍", label: "New Coordinates", val: "Binh Duc, Tay Ninh" },
      { icon: "🚫", label: "2026 Status", val: "Closed to Individuals" },
      { icon: "🎟️", label: "Ticketing / Access", val: "Private Events Only" },
      { icon: "⚠️", label: "Travel Advisory", val: "Verify Before Visiting" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "New Coordinates", val: "Binh Duc, Tay Ninh (Post-2025)" },
      { icon: "🚫", label: "Operational Status", val: "Permanently Closed to Public" },
      { icon: "🌿", label: "Alternative Destinations", val: "Tan Lap Floating Village, Ben Tre" },
      { icon: "⚠️", label: "Advisory Level", val: "Strictly Avoid Unverified Tours" }
    ],
    epilogueTitle: "Journeying with Intention",
    epilogue: "The story of Happy Land is a poignant reminder that true cultural immersion cannot be manufactured within theme park boundaries. The genuine soul of Vietnam resides in its living waterways, active artisan looms, and the warm hospitality of riverside communities."
  },

  "nam-du-island-expedition-guide": {
    subtitle: "Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes",
    lead: "Far removed from the neon corridors of mass tourism, the 21 islands of the Nam Du archipelago emerge from the southwestern gulf as a rugged sanctuary of limestone cliffs, crystalline turquoise waters, and ancient seafaring traditions.",
    readTime: 14,
    badges: [
      { icon: "🏝️", text: "21 Southwestern Islands" },
      { icon: "🛥️", text: "Superdong & Phu Quoc Link" },
      { icon: "🐠", text: "Hon Mau & Hon Dau Corals" },
      { icon: "🌿", text: "2026 Untamed Field Notes" }
    ],
    stats: [
      { icon: "📍", label: "The Archipelago", val: "An Son (Kien Giang / Southwest Sea)" },
      { icon: "🌤️", label: "Golden Season", val: "December – April (Calm Sea)" },
      { icon: "🛥️", label: "Transit Time", val: "2h from Rach Gia Port" },
      { icon: "🎟️", label: "2026 Tariff Baseline", val: "2,000,000 – 3,500,000 VND (3D2N)" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "The Archipelago", val: "21 Islands, An Son, Kien Giang" },
      { icon: "🌤️", label: "Ideal Expedition Window", val: "Dec to April (Smooth Seas)" },
      { icon: "🏊", label: "Signature Highlights", val: "Hon Mau coral dives & Cay Men beach" },
      { icon: "🛥️", label: "Maritime Access", val: "Express ferry from Rach Gia / Phu Quoc" }
    ],
    epilogueTitle: "The Raw Soul of the Gulf",
    epilogue: "Nam Du will not cradle you in five-star luxury, but it will reward the conscious voyager with something infinitely rarer: the primal pulse of an open sea, the scent of morning salt on timber decks, and an unhurried intimacy with islanders who still look to the stars to navigate the tide."
  },

  "mekong-delta-fruits-harvest-map": {
    subtitle: "Orchard Coordinates, Seasonal Matrices & 24 Riverine Masterpieces",
    lead: "Fed by the ceaseless alluvial embrace of the Mekong and Bassac rivers, the Southern Delta yields the most biodiverse fruit basket in Southeast Asia. This is your definitive 2026 harvest map to navigating orchards across 13 provinces.",
    readTime: 16,
    badges: [
      { icon: "🍈", text: "24 Iconic Cultivars" },
      { icon: "🗺️", text: "Alluvial Harvest Map" },
      { icon: "🏆", text: "Protected GI Signatures" },
      { icon: "🌿", text: "2026 Orchard Field Guide" }
    ],
    stats: [
      { icon: "📍", label: "Heartland Provinces", val: "Tien Giang, Ben Tre, Can Tho, Vinh Long" },
      { icon: "👑", label: "Crown Jewel", val: "Ri6 Durian & Green-skin Pomelo" },
      { icon: "🌤️", label: "Peak Harvest", val: "May – August (Fruit Season)" },
      { icon: "🛶", label: "Tasting Experience", val: "Tree-to-Palate Boat Orchards" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Primary Riverine Basins", val: "Tien & Hau River Alluvium" },
      { icon: "🌤️", label: "Peak Tasting Window", val: "May through August annually" },
      { icon: "🍈", label: "Top Geographic Icons", val: "Lo Ren Star Apple, Macapuno Coconut" },
      { icon: "🛶", label: "Curated Access", val: "Private sampan orchard landings" }
    ],
    epilogueTitle: "The Gift of the River",
    epilogue: "To taste a fruit in the Mekong Delta is to partake in a sacred dialogue between volcanic soil, mountain silt carried across six nations, and generational horticultural patience. Step into the shade of the canopy, pluck with reverence, and savor the sweetness of living earth."
  },

  "truong-tien-bridge-hue-heritage": {
    subtitle: "Eiffel's Iron Lace, Dynastic Memory & 2026 Engineering Heritage",
    lead: "Spanning the tranquil waters of the Perfume River, the Truong Tien Bridge is far more than a transport artery. It is the poetic heart of Hue—a testament to Gustave Eiffel's metallurgical mastery, the resilience of imperial memory, and the romantic soul of Central Vietnam.",
    readTime: 10,
    badges: [
      { icon: "🌉", text: "Eiffel Iron Architecture" },
      { icon: "👑", text: "Imperial Hue Heritage" },
      { icon: "🎨", text: "6 Girders, 12 Spans" },
      { icon: "🌿", text: "2026 Preservation Field Notes" }
    ],
    stats: [
      { icon: "📍", label: "Coordinates", val: "Perfume River, Hue City" },
      { icon: "⏳", label: "Erected", val: "1899 (King Thanh Thai & Eiffel Co.)" },
      { icon: "📐", label: "Scale", val: "402.6 Meters / 6 Steel Spans" },
      { icon: "🌙", label: "Golden Hours", val: "Dawn mist (5:30 AM) & Twilight (18:00)" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Historic Location", val: "Hue Imperial Capital, Thua Thien Hue" },
      { icon: "⏳", label: "Construction Genesis", val: "1899 (127 Years of Endurance)" },
      { icon: "🌉", label: "Architectural Typology", val: "French Girded Iron Arch" },
      { icon: "🚴", label: "Bespoke Experience", val: "Sunset cycling & Royal cyclos" }
    ],
    epilogueTitle: "The Unbending Arch of Time",
    epilogue: "Empires fall and rivers shift their courses, yet Truong Tien remains—slender, graceful, and indestructible. It reminds every traveler that true elegance lies not in heavy stone or towering glass, but in the harmonious union of human craftsmanship and natural serenity."
  },

  "my-quynh-safari-definitive-guide": {
    subtitle: "The Semi-Wild Savannah, Water Park Dynamics & 2026 Expeditions",
    lead: "Spanning over 50 hectares in Duc Hoa (Tay Ninh / Long An border), My Quynh Safari represents Southern Vietnam's premier semi-wild zoological sanctuary. Here is your curated 2026 field manual for exploring African wildlife, botanical gardens, and aquatic recreation.",
    readTime: 11,
    badges: [
      { icon: "🦁", text: "50-Hectare Semi-Wild Zoo" },
      { icon: "🚐", text: "Caged Bus Safari Drive" },
      { icon: "🏊", text: "Integrated Water Park" },
      { icon: "🌿", text: "2026 Family Field Guide" }
    ],
    stats: [
      { icon: "📍", label: "New Coordinates", val: "My Hanh Bac, Duc Hoa (Post-2025)" },
      { icon: "🕒", label: "Operating Hours", val: "07:30 – 18:00 (Daily)" },
      { icon: "🎟️", label: "2026 All-In Ticket", val: "250,000 – 350,000 VND / Guest" },
      { icon: "🚗", label: "Transit from HCMC", val: "1h 15m (~40 km via DT824)" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Savannah Location", val: "Duc Hoa, Tay Ninh / Long An Border" },
      { icon: "🦁", label: "Key Inhabitants", val: "White Bengal Tigers, Rhinos, Zebras" },
      { icon: "🌤️", label: "Optimal Visiting Window", val: "Morning (8:00 – 11:00 AM) for animal activity" },
      { icon: "👨‍👩‍👧", label: "Target Audience", val: "Eco-families & bespoke educational groups" }
    ],
    epilogueTitle: "Guardians of the Wild",
    epilogue: "Beyond the thrill of eye-to-eye encounters with apex predators, My Quynh Safari serves as an urgent reminder of our shared responsibility toward global biodiversity. Step lightly, observe with wonder, and let the untamed world kindle your spirit of conservation."
  },

  "mekong-khan-ran-scarf-legacy": {
    subtitle: "Behind its modest checkered pattern lies a three-century-old odyssey of cultural intersection",
    lead: "The khăn rằn is far more than a ubiquitous souvenir scattered across the tourist markets of the Mekong Delta. It is a silent witness to the era of untamed wilderness reclamation, an emblem of wartime resilience, and the lifeblood of a century-old weaving village recently crowned as a National Intangible Cultural Heritage.",
    readTime: 12,
    badges: [
      { icon: "🏛️", text: "National Intangible Heritage" },
      { icon: "🧵", text: "Century-Old Loom Craft" },
      { icon: "📍", text: "Long Khanh A, Dong Thap" },
      { icon: "🌿", text: "2026 Bespoke Field Notes" }
    ],
    stats: [
      { icon: "📍", label: "The Heartland", val: "Long Khanh A, Dong Thap" },
      { icon: "⏳", label: "Historical Genesis", val: "17th Century (Khmer Krama)" },
      { icon: "🏆", label: "Heritage Status", val: "National Heritage (2023)" },
      { icon: "🎟️", label: "2026 Reference Price", val: "35,000 – 90,000 VND" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "The Heartland", val: "Hong Ngu, Dong Thap" },
      { icon: "🌤️", label: "Best Visiting Time", val: "Year-round (7:30 – 10:30 AM)" },
      { icon: "🚴", label: "Signature Experiences", val: "Islet cycling & hands-on loom weaving" },
      { icon: "🏆", label: "Heritage Inscription", val: "National Intangible Heritage (2023)" }
    ],
    epilogueTitle: "The Soul of the Southern Loom",
    epilogue: "Through over 300 years of turbulent history, the khăn rằn has never relinquished its pivotal role in the spiritual and daily life of the southern frontier. It is not merely the story of a woven cloth; it is a profound narrative of cultural inclusivity, an unwavering defense of the homeland, and the resilient hands of artisans along the Mekong."
  },

  "huynh-thuy-le-ancient-house": {
    subtitle: "East-West Architectural Alchemy & The Eternal Muse of 'The Lover'",
    lead: "Rising gracefully along the Sa Dec riverfront, the Huynh Thuy Le Ancient House stands as an exquisite monument to Sino-French architectural fusion and the immortal romance chronicled in Marguerite Duras’s world-renowned novel, L'Amant.",
    readTime: 11,
    badges: [
      { icon: "🏛️", text: "National Historic Monument" },
      { icon: "📖", text: "Muse of L'Amant (The Lover)" },
      { icon: "🪵", text: "1895 Sino-French Timber" },
      { icon: "🌿", text: "2026 Overnight Guest Chambers" }
    ],
    stats: [
      { icon: "📍", label: "Riverfront Location", val: "Sa Dec City, Dong Thap" },
      { icon: "⏳", label: "Construction Genesis", val: "1895 (Restored in 1917)" },
      { icon: "🎟️", label: "2026 Entry Tariff", val: "20,000 VND (Includes tea & ginger)" },
      { icon: "🛏️", label: "Vintage Stay", val: "2 Heritage Suites Available" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Historic Location", val: "255A Nguyen Hue, Sa Dec, Dong Thap" },
      { icon: "⏳", label: "Era of Elegance", val: "1895 (131-Year Legacy)" },
      { icon: "📖", label: "Literary Acclaim", val: "Prix Goncourt 1984 (The Lover)" },
      { icon: "🫖", label: "Curated Ritual", val: "Lotus tea tasting & twilight river strolls" }
    ],
    epilogueTitle: "Where Memory Transcends Time",
    epilogue: "Walking across the patterned French encaustic tiles under the golden glow of wooden Chinese chandeliers, one realizes that love and art do not perish. The Huynh Thuy Le Mansion endures as an indelible testament to the beauty that blossoms when diverse civilizations meet upon the river."
  },

  "lan-vuong-ecopark-mekong-mud": {
    subtitle: "Alluvial Obstacle Courses, Team Dynamics & Visceral Agrarian Energy",
    lead: "Breaking sharply from conventional passive retreats, Lan Vuong Eco-Park immerses voyagers directly into the elemental thrill of the Mekong—where monkey bridges, swamp fisheries, and team-building camaraderie forge indelible memories.",
    readTime: 10,
    badges: [
      { icon: "🛶", text: "Riverine Mud Obstacles" },
      { icon: "🎋", text: "Bamboo Monkey Bridges" },
      { icon: "🐟", text: "Ditch-Bailing Fish Catch" },
      { icon: "🌿", text: "2026 Corporate Field Manual" }
    ],
    stats: [
      { icon: "📍", label: "Updated Coordinates", val: "An Hoi, Vinh Long (Ex-Ben Tre)" },
      { icon: "🕒", label: "Operating Hours", val: "07:00 AM – 18:00 PM Daily" },
      { icon: "🎟️", label: "Gate Admission", val: "Free Entry (A la carte activities)" },
      { icon: "⚡", label: "Physical Intensity", val: "High (Bring change of clothes)" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Eco-Park Coordinates", val: "Hamlet 2, An Hoi Ward, Vinh Long" },
      { icon: "🕒", label: "Operating Schedule", val: "Open 365 days a year" },
      { icon: "🚣", label: "Signature Activities", val: "Alluvial zipline, bamboo bridge bike race" },
      { icon: "🥥", label: "Culinary Highlights", val: "Crispy river elephant-ear fish & roasted duck" }
    ],
    epilogueTitle: "The Joy of the Elemental Earth",
    epilogue: "There is profound liberation in shedding urban sophistication, plunging knee-deep into fertile river silt, and sharing unconditional laughter with comrades. Lan Vuong reminds us that the happiest moments are often the rawest, the muddiest, and the most human."
  },

  "hon-son-island-lodging-homestays": {
    subtitle: "Cliffside Wooden Bungalows, Tidal Sanctuaries & 2026 Island Living",
    lead: "Defying monotonous concrete assimilation, the untamed island of Hon Son (Kien Giang) invites the discerning voyager to experience bespoke coastal living—where cliffside wooden cabins and beachfront acoustic campfires replace commercial resort glitz.",
    readTime: 12,
    badges: [
      { icon: "🏝️", text: "Untamed Kien Giang Gem" },
      { icon: "🪵", text: "Cliffside Wood Bungalows" },
      { icon: "🌊", text: "Tideline Sunset BBQ" },
      { icon: "🌿", text: "7 Bespoke 2026 Sanctuaries" }
    ],
    stats: [
      { icon: "📍", label: "Coordinates", val: "Lai Son Island, Kien Giang" },
      { icon: "🛥️", label: "Maritime Transit", val: "1h 30m Express Ferry from Rach Gia" },
      { icon: "💵", label: "2026 Tariff Baseline", val: "300,000 – 1,500,000 VND / Night" },
      { icon: "🛵", label: "Island Mobility", val: "100% Pier-side Scooter Delivery" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Island Coordinates", val: "Hon Son (Lai Son), Kien Hai, Kien Giang" },
      { icon: "🌤️", label: "Best Travel Window", val: "November through May (Azure Waters)" },
      { icon: "🏡", label: "Top Sanctuaries", val: "Sohora Sea Mountain, Rai Ca, Bac's Homestay" },
      { icon: "🦐", label: "Gastronomy Ritual", val: "Fresh sea urchin BBQ & wild octopus" }
    ],
    epilogueTitle: "The Unhurried Rhythm of the Tide",
    epilogue: "To sleep in a cliffside bungalow on Hon Son is to surrender to the nocturnal symphony of crashing waves, whispering sea winds, and incandescent starlight. Here, time softens, and the traveler rediscovers the restorative simplicity of island life."
  },

  "can-tho-beach-artificial-oasis": {
    subtitle: "Alluvial Sandbanks, Cable-Stayed Panoramas & Riverine Leisure",
    lead: "Perched gracefully at the confluence of the Hau and Can Tho rivers, Can Tho Beach offers an artificial riverine oasis where golden sunsets, watercraft excursions, and cable-stayed bridge vistas converge beneath the Southern evening sky.",
    readTime: 9,
    badges: [
      { icon: "🏖️", text: "400m Engineered Sand Oasis" },
      { icon: "🌉", text: "Can Tho Bridge Vistas" },
      { icon: "🚤", text: "Jet Ski & Hau River Cruises" },
      { icon: "🌿", text: "2026 Leisure Field Notes" }
    ],
    stats: [
      { icon: "📍", label: "Coordinates", val: "Cai Khe Ward, Ninh Kieu, Can Tho" },
      { icon: "🕒", label: "Hours", val: "07:00 AM – 23:00 PM Daily" },
      { icon: "🎟️", label: "2026 Entry Fee", val: "20,000 VND (Includes beverage)" },
      { icon: "🌅", label: "Golden Hour", val: "17:00 – 18:00 (Sunset over Bridge)" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Oasis Location", val: "Song Hau Park, Cai Khe, Can Tho" },
      { icon: "🌉", label: "Iconic Perspective", val: "Direct panorama of Can Tho Cable Bridge" },
      { icon: "🌅", label: "Optimal Arrival", val: "Late afternoon for cool breeze & sunset" },
      { icon: "🍹", label: "Leisure Highlights", val: "Riverside cafes, speedboats, acoustic nights" }
    ],
    epilogueTitle: "The Gentle Western Capital",
    epilogue: "Can Tho Beach is not about replicating ocean surf; it is about celebrating the gentle, breezy romance of the mighty Hau River. As dusk settles and bridge lights shimmer across the water, the voyager is reminded why Can Tho is celebrated as the unforgettable heart of the Southwest."
  }
};

function decodeHtmlEntities(str) {
  if (!str) return '';
  return str
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');
}

function cleanSlug(str) {
  const decoded = decodeHtmlEntities(str)
    .replace(/<[^>]+>/g, '')
    .replace(/^[⚡\d\.\s]+/, '')
    .trim();
  return decoded
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, 'and')
    .replace(/['’"]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function formatTOC(body) {
  const tokens = marked.lexer(body);
  const headings = tokens.filter(t => t.type === 'heading' && (t.depth === 2 || t.depth === 3));
  let tocHtml = '';
  
  headings.forEach(h => {
    const rawText = decodeHtmlEntities(h.text).replace(/<[^>]+>/g, '').trim();
    if (rawText.toLowerCase().includes('quick overview stats')) return;
    
    const id = cleanSlug(h.text);
    const displayText = rawText.replace(/^[⚡\d\.\s]+/, '').trim();
    
    if (h.depth === 2) {
      tocHtml += `  <a href="#${id}" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">${displayText}</a>\n`;
    } else {
      tocHtml += `  <a href="#${id}" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">${displayText}</a>\n`;
    }
  });
  return tocHtml;
}

function processMarkdownToMagazineHtml(file) {
  const filePath = path.join(inputDir, file);
  const raw = fs.readFileSync(filePath, 'utf8');
  
  // Extract Frontmatter
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
  const fm = {};
  if (fmMatch) {
    fmMatch[1].split('\n').forEach(line => {
      const idx = line.indexOf(':');
      if (idx > -1) {
        const k = line.slice(0, idx).trim();
        let v = line.slice(idx + 1).trim();
        if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
        fm[k] = v;
      }
    });
  }
  
  const slug = fm.slug || file.replace(/^\d+_/, '').replace('.md', '');
  const meta = articleMetadata[slug] || {};
  
  let body = raw.replace(/^---\n[\s\S]*?\n---/, '').trim();
  
  // Remove H1 title and meta blockquotes from body
  body = body.replace(/^#\s+.*$/m, '');
  body = body.replace(/^>\s+🏷️.*$/m, '');
  body = body.replace(/^>\s+🖼️.*$/m, '');
  body = body.replace(/<figure[^>]*>[\s\S]*?<\/figure>/gi, '');
  body = body.replace(/<img[^>]*>/gi, '');
  
  // Extract custom renderer
  const customRenderer = new marked.Renderer();
  
  customRenderer.heading = function({ tokens, depth }) {
    const rawText = this.parser.parseInline(tokens);
    const text = decodeHtmlEntities(rawText).replace(/<[^>]+>/g, '').trim();
    if (text.toLowerCase().includes('quick overview stats')) {
      return ''; // We build the stats bar manually
    }
    
    const id = cleanSlug(text);
    
    if (depth === 2) {
      return `
        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="${id}" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            ${text}
          </h2>
        </div>
      `;
    }
    if (depth === 3) {
      const numMatch = text.match(/^(\d+(\.\d+)?)\s*(.*)$/);
      if (numMatch) {
        return `
          <div id="${id}" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">${numMatch[1]}</span>
              ${numMatch[3]}
            </h3>
          </div>
        `;
      }
      return `
        <h3 id="${id}" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          ${text}
        </h3>
      `;
    }
    return `<h${depth} id="${id}">${text}</h${depth}>`;
  };
  
  customRenderer.blockquote = function({ tokens }) {
    const text = this.parser.parse(tokens);
    return `<div class="font-medium text-slate-900 text-lg border-l-4 border-amber-500 pl-4 my-5 bg-amber-50/50 py-3 rounded-r-xl">${text}</div>\n`;
  };
  
  customRenderer.table = function({ header, rows }) {
    let headerHtml = '';
    header.forEach(cell => {
      headerHtml += `<th class="p-4 font-bold text-left">${this.parser.parseInline(cell.tokens)}</th>`;
    });
    
    let rowsHtml = '';
    rows.forEach(row => {
      rowsHtml += '<tr class="hover:bg-slate-50/80 transition-colors">';
      row.forEach(cell => {
        rowsHtml += `<td class="p-4">${this.parser.parseInline(cell.tokens)}</td>`;
      });
      rowsHtml += '</tr>\n';
    });

    return `
      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 text-sm">
          <thead>
            <tr class="bg-slate-900 text-white font-serif">
              ${headerHtml}
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;
  };

  marked.use({ renderer: customRenderer });
  
  const tocHtml = formatTOC(body);
  const parsedContent = marked.parse(body);
  
  // Build Badges
  const badges = meta.badges || [
    { icon: "🌿", text: "2026 Bespoke Field Notes" },
    { icon: "📍", text: "Curated Inbound Journey" },
    { icon: "✨", text: "Slow Travel Signature" },
    { icon: "🏆", text: "The Rice Tour Verified" }
  ];
  const badgesHtml = badges.map(b => `
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">${b.icon}</span> ${b.text}
    </div>
  `).join('\n');

  // Build 4-Card Stats Bar
  const stats = meta.stats || [
    { icon: "📍", label: "Location", val: "Vietnam Inbound" },
    { icon: "⏳", label: "Ideal Timing", val: "Year-Round" },
    { icon: "🎟️", label: "Access Policy", val: "Curated Entry" },
    { icon: "🌿", label: "Experience Type", val: "Cultural Immersion" }
  ];
  const statsHtml = stats.map((s, idx) => `
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ${idx > 1 ? 'mt-2 lg:mt-0' : ''}">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">${s.icon}</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">${s.label}</div>
        <div class="text-[13px] font-bold text-slate-900">${s.val}</div>
      </div>
    </div>
    ${idx < stats.length - 1 ? '<div class="hidden lg:block w-px h-8 bg-slate-200"></div>' : ''}
  `).join('\n');

  // Build Right Sidebar Quick Facts
  const sidebarFacts = meta.sidebarFacts || stats;
  const sidebarFactsHtml = sidebarFacts.map(f => `
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">${f.icon}</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">${f.label}</div>
        <div class="font-bold text-slate-800 text-[13px]">${f.val}</div>
      </div>
    </div>
  `).join('\n');

  // Build Related Guides
  const otherSlugs = Object.keys(articleMetadata).filter(s => s !== slug).slice(0, 2);
  const relatedHtml = otherSlugs.map(os => {
    const om = articleMetadata[os];
    const otTitle = os.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return `
      <a href="/${os}" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          ${otTitle}: ${om.subtitle || '2026 Travel Guide'}
        </div>
      </a>
    `;
  }).join('\n');

  const title = fm.title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const subtitle = meta.subtitle || "A Comprehensive 2026 Cultural & Practical Expedition Guide";
  const leadSnippet = meta.lead || "A curated field guide designed for intentional voyagers seeking deep cultural resonance and seamless navigation across Vietnam's iconic landscapes.";
  const readTime = meta.readTime || 10;
  const pubDate = fm.published_date ? new Date(fm.published_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Aug 26, 2026';

  const fullHtml = `<!-- layout: landing -->
<div class="bg-[#F8F9FA] text-[#1E293B] font-sans antialiased selection:bg-[#F7931E] selection:text-white">

    <!-- ================= HERO SECTION ================= -->
    <section class="relative w-full min-h-[550px] lg:min-h-[650px] overflow-hidden flex flex-col justify-center pt-32 pb-20 bg-slate-950">
      <div class="absolute inset-0 z-0 bg-gradient-to-br from-slate-950 via-[#1a1c23] to-[#0f172a]">
        <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
      </div>

      <div class="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
        
        {/* Breadcrumb */}
        <div class="flex items-center gap-2 text-[13px] text-white/70 font-medium mb-6">
          <a href="/" class="hover:text-white transition-colors">Home</a>
          <span class="text-white/40">/</span>
          <a href="/blog" class="hover:text-white transition-colors">Travel Guides</a>
          <span class="text-white/40">/</span>
          <span class="text-white font-semibold line-clamp-1">${title}</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          ${title}
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          ${subtitle}
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          ${leadSnippet}
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: ${pubDate}</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">${readTime} min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          ${badgesHtml}
        </div>

      </div>
    </section>

    <!-- ================= MAIN CONTENT GRID (3 COLUMNS) ================= -->
    <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

        <!-- ---------------- LEFT SIDEBAR (TOC) ---------------- -->
        <aside class="hidden lg:block lg:col-span-3 sticky top-24">
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 overflow-hidden">
            <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-amber-500 pl-3 text-sm tracking-wide uppercase">
              Table of Contents
            </div>
            
            <nav class="space-y-1 text-[13.5px] font-medium max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
              <a href="#introduction" class="flex items-center gap-2 text-amber-900 bg-amber-50/80 px-3 py-2 rounded-lg transition-colors font-bold">
                <span class="text-amber-600 text-base">🏠</span> Introduction
              </a>
              
              <div class="pt-1.5 space-y-1 border-l border-slate-200 ml-3 pl-3">
                ${tocHtml}
              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            ${statsHtml}
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            ${parsedContent}
          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: ${meta.epilogueTitle || "Journeying with Purpose"}</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                ${meta.epilogue || "True exploration is not simply the accumulation of photographs, but the conscious discovery of history, craftsmanship, and human kinship along the living rivers of Vietnam."}
              </p>
            </div>
          </section>

          <!-- CTA Banner -->
          <div class="my-14 bg-gradient-to-br from-amber-500/10 via-white to-amber-500/5 border border-amber-300 p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(247,147,30,0.15)] text-center relative overflow-hidden">
            <div class="absolute -right-10 -top-10 text-amber-500/10"><svg width="140" height="140" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z"/></svg></div>
            <h3 class="font-serif text-2xl lg:text-3xl font-bold text-slate-900 mb-3 relative z-10">
              Ready to Experience the Cultural Depth of Vietnam?
            </h3>
            <p class="text-slate-600 mb-8 max-w-xl mx-auto relative z-10 text-sm sm:text-base">
              Journey with The Rice Tour on curated, slow-paced cultural expeditions through living riverine waterways and artisan sanctuaries.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <a 
                href="/tours?country=mien-nam" 
                class="w-full sm:w-auto px-7 py-3.5 bg-[#F7931E] hover:bg-[#e08216] text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>🛶</span> Explore Curated Journeys
              </a>
              <a 
                href="/tailor-made" 
                class="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <span>✨</span> Curate Your Bespoke Itinerary
              </a>
            </div>
          </div>

        </main>

        <!-- ---------------- RIGHT SIDEBAR ---------------- -->
        <aside class="col-span-1 lg:col-span-3">
          <div class="sticky top-24 space-y-8">
            
            <!-- Quick Facts -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-amber-500 pl-3 text-sm tracking-wide uppercase">
                Quick Expedition Facts
              </div>
              
              <div class="space-y-4">
                ${sidebarFactsHtml}
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                ${relatedHtml}
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/${slug}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/${slug}');" 
                  aria-label="Copy link"
                  class="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition-colors group focus:bg-emerald-100 focus:text-emerald-700"
                >
                  <svg class="w-4 h-4 group-focus:hidden" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
                  <span class="hidden group-focus:block text-[9px] font-bold">OK!</span>
                </button>
              </div>
            </div>

          </div>
        </aside>

      </div>
    </div>

</div>`;

  return { slug, fullHtml, varName: file.replace(/^\d+_/, '').replace(/-([a-z])/g, (m, g1) => g1.toUpperCase()).replace('.md', '') + 'Html' };
}

// Generate for all 10 files
const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.md')).sort();

let code = `// Canonical 3-Column Magazine Articles (National Geographic / Travel + Leisure Style)
`;

files.forEach(file => {
  const { slug, fullHtml, varName } = processMarkdownToMagazineHtml(file);
  console.log(`Rendered 3-column Magazine HTML for: ${slug} -> ${varName}`);
  code += `\nexport const ${varName} = \`${fullHtml.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`;\n`;
});

// Write to src/data/demo-articles.ts
fs.writeFileSync(demoArticlesFile, code);
console.log('Successfully wrote all 10 Magazine 3-Column templates to src/data/demo-articles.ts');
