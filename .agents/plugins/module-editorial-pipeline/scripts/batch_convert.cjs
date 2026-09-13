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
  },

  "things-to-do-near-ben-thanh-market": {
    subtitle: "An Evocative Stroll Through Indochinese Heritage, Sacred Sanctuaries & 2026 Metro Pulses",
    lead: "If Saigon is a three-century-old chronicle inscribed in brick and stone, Ben Thanh Market and its surrounding tree-shaded boulevards represent its most luminous opening chapter. Within a gentle 1-kilometer radius, colonial elegance, tropical modernism, and a visionary 2026 underground transit hub converge in timeless harmony.",
    readTime: 14,
    badges: [
      { icon: "🏛️", text: "Centennial Urban Heartland" },
      { icon: "🎨", text: "Indochine Art Deco Heritage" },
      { icon: "🚇", text: "2026 Metro Central Hub" },
      { icon: "🌿", text: "Curated Walking Sanctuary" }
    ],
    stats: [
      { icon: "📍", label: "Epicenter Coordinates", val: "Quach Thi Trang Square, District 1" },
      { icon: "⏳", label: "Historical Genesis", val: "1914 (Centennial New Market)" },
      { icon: "🚶", label: "Exploration Radius", val: "1.2 km (Ideal Walking Stroll)" },
      { icon: "🎟️", label: "2026 Admission Baseline", val: "Free – 65,000 VND / landmark" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Heart of Saigon", val: "Ben Thanh Ward, District 1, HCMC" },
      { icon: "🌤️", label: "Golden Visiting Hours", val: "07:30 – 10:30 AM & 16:30 – 21:00 PM" },
      { icon: "🚶", label: "Signature Experience", val: "Indochine heritage stroll & secret cafes" },
      { icon: "🚇", label: "Modern Transit", val: "Ben Thanh Central Metro Station Line 1" }
    ],
    epilogueTitle: "Preserving the Timeless Soul of Saigon",
    epilogue: "No matter how many futuristic glass towers rise into the southern sky, the quarter surrounding Ben Thanh Market preserves an irreplaceable human soul. It is a soul woven from the rhythmic clatter of street life, the sweet call of wandering dessert vendors, the stoic beauty of French brick facades, and the unquenchable optimism of those who call this river city home."
  },

  "hcmc-museum-of-fine-arts-guide": {
    subtitle: "A Mesmerizing Intersection of French Art Deco and Southern Feng Shui",
    lead: "Tucked behind a verdant canopy on Pho Duc Chinh Street, the Ho Chi Minh City Museum of Fine Arts stands as a sanctuary of golden stillness amidst District 1's urban kinetic rush. Once the palatial residence of colonial Saigon’s wealthiest merchant, this architectural masterpiece now shelters over 22,000 national art treasures.",
    readTime: 12,
    badges: [
      { icon: "🏛️", text: "Colonial Gilded Mansion" },
      { icon: "🎨", text: "Art Deco & Oriental Feng Shui" },
      { icon: "🏆", text: "National Lacquer Treasures" },
      { icon: "🌿", text: "2026 Curated Field Notes" }
    ],
    stats: [
      { icon: "📍", label: "Mansion Coordinates", val: "97A Pho Duc Chinh, District 1" },
      { icon: "⏳", label: "Construction Era", val: "1929 – 1934 (Architect Rivera)" },
      { icon: "🚶", label: "Walk from Ben Thanh", val: "350 meters (5-minute stroll)" },
      { icon: "🎟️", label: "2026 Reference Tariff", val: "30,000 VND / adult (15,000 student)" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Historical Identity", val: "Private Estate of Hui Bon Hoa Frères" },
      { icon: "🌤️", label: "Optimal Sunlight Hours", val: "08:30 – 10:30 AM & 15:00 – 16:30 PM" },
      { icon: "🎨", label: "Key Masterpiece", val: "Spring Garden of North, Central & South" },
      { icon: "🛗", label: "Pioneering Feature", val: "Saigon's Earliest Timber-Cage Elevator" }
    ],
    epilogueTitle: "A Serene Dialogue with the Past",
    epilogue: "The HCMC Museum of Fine Arts is far more than a gallery of mounted canvases; the mansion itself breathes with the layered soul of southern history. In an era of breakneck modernization, spending two unhurried hours listening to the breeze whisper through 99 louvered windows reminds the discerning traveler that true beauty remains forever anchored in patience and craftsmanship."
  },

  "ben-thanh-market-food-guide": {
    subtitle: "Unraveling Simmering Broths, Freshwater Crab Cakes & Charcoal Braziers",
    lead: "If you seek the authentic heartbeat of Saigon, do not search within sterile air-conditioned dining halls. Pull up a modest plastic stool beside a steaming cauldron in Ben Thanh Market, inhale the intoxicating perfume of crab essence and fermented herbs, and surrender to the culinary poetry of the Southern Delta.",
    readTime: 12,
    badges: [
      { icon: "🍲", text: "Centennial Market Stalls" },
      { icon: "🔥", text: "Phan Boi Chau Charcoal Night" },
      { icon: "🦐", text: "Alluvial Mekong Produce" },
      { icon: "🌿", text: "2026 Gastronomic Field Notes" }
    ],
    stats: [
      { icon: "📍", label: "Epicenter", val: "South & East Portals, Ben Thanh" },
      { icon: "🕒", label: "Operational Window", val: "06:00 – 18:00 (Day) & 18:00 – 23:30 (Night)" },
      { icon: "🎟️", label: "2026 Tariff Baseline", val: "30,000 – 120,000 VND / dish" },
      { icon: "🌟", label: "Must-Taste Icon", val: "East Gate Bún Riêu & Lemongrass Beef" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Culinary Court", val: "East Gate Stalls & Phan Boi Chau Street" },
      { icon: "🌤️", label: "Off-Peak Tasting Hours", val: "08:30 – 10:30 AM & 14:30 – 16:00 PM" },
      { icon: "🍲", label: "Legacy Vendor", val: "Ba Muoi Dessert Stall (Since 1968)" },
      { icon: "💳", label: "Payment Method", val: "VietQR & Tap-to-Pay Widely Accepted" }
    ],
    epilogueTitle: "The Warmth of Living Memory",
    epilogue: "Gastronomic genius is rarely born in isolation; it is forged across decades of devotion by matriarchs who guard family recipes with quiet dignity. At Ben Thanh Market, every ladle of broth and every delicate rice paper roll handed to you represents the culinary soul of the Southern Delta—an unhurried gift for travelers who journey with appetite and reverence."
  },

  "ben-thanh-one-day-walking-tour": {
    subtitle: "A Curated 4.5km Slow Expedition: Colonial Alleys, Sacred Sanctuaries & River Sunset",
    lead: "The only authentic way to absorb the living soul of Saigon is not through the tinted, sealed windows of an air-conditioned vehicle, but by placing your feet upon its shaded sidewalks. Walk to hear temple bells dissolve into morning traffic, to catch the rich aroma of pour-over coffee escaping vintage apartment corridors, and to welcome the river breeze at dusk.",
    readTime: 13,
    badges: [
      { icon: "🚶", text: "Curated 4.5km Slow Stroll" },
      { icon: "🏛️", text: "6 Iconic Urban Monuments" },
      { icon: "🌅", text: "Bach Dang River Sunset" },
      { icon: "🌿", text: "2026 Field Expedition" }
    ],
    stats: [
      { icon: "🚶", label: "Total Stroll Distance", val: "4.5 km (4 Leisurely Stages)" },
      { icon: "⏳", label: "Expedition Duration", val: "12 Hours (07:30 AM – 20:30 PM)" },
      { icon: "⚡", label: "Physical Intensity", val: "Gentle & Restorative (All Ages)" },
      { icon: "🎟️", label: "2026 Estimated Budget", val: "500,000 – 850,000 VND / person" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Starting & Ending Hub", val: "Quach Thi Trang Plaza, Ben Thanh" },
      { icon: "🌤️", label: "Ideal Season", val: "Dry Season (December – April)" },
      { icon: "🚶", label: "Pacing Rule", val: "Under 15 mins between landmarks" },
      { icon: "🚇", label: "Transit Integration", val: "Subterranean Metro Line 1 Passage" }
    ],
    epilogueTitle: "Falling in Love with Saigon One Step at a Time",
    epilogue: "A day spent walking the avenues surrounding Ben Thanh permanently shatters the myth that Saigon is merely an overwhelming sea of motorbikes. Every alleyway traversed, every centuries-old mahogany tree passed cradles deep alluvial strata of lived human history. As night settles and you gaze out over the illuminated roundabout, you realize you have come to know Saigon through its most gracious, timeless rhythms."
  },

  "independence-palace-saigon-guide": {
    subtitle: "Deciphering Eastern Ideograms, Climate-Responsive Louvers & Fortified Bunkers (2026)",
    lead: "Few architectural monuments mirror the tectonic shifts of modern history with the stoic poetry of the Independence Palace. Situated amidst 12 hectares of ancient dipterocarp forest, this masterpiece of Tropical Modernism remains the definitive symbol of Saigon’s dramatic journey from war to peace.",
    readTime: 13,
    badges: [
      { icon: "🏛️", text: "Special National Monument" },
      { icon: "📐", text: "Tropical Modernist Masterpiece" },
      { icon: "🎖️", text: "Subterranean Wartime Bunkers" },
      { icon: "🌿", text: "2026 Curated Heritage Stroll" }
    ],
    stats: [
      { icon: "📍", label: "Palace Coordinates", val: "135 Nam Ky Khoi Nghia, District 1" },
      { icon: "📐", label: "Chief Architect", val: "Ngo Viet Thu (Grand Prix de Rome)" },
      { icon: "🚶", label: "Walk from Market", val: "700 meters (9-minute shaded walk)" },
      { icon: "🎟️", label: "2026 Admission", val: "65,000 VND / adult (Palace & Bunkers)" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Park Estate", val: "12-Hectare Ancient Canopy" },
      { icon: "🌤️", label: "Optimal Visiting Window", val: "08:00 – 10:30 AM (Cool morning light)" },
      { icon: "📐", label: "Architectural Philosophy", val: "Sino-Vietnamese Ideogrammatic Harmony" },
      { icon: "🎖️", label: "Highlight Sector", val: "Underground Command Center" }
    ],
    epilogueTitle: "Where Architecture Mirrors History",
    epilogue: "Standing beneath the open sky on the second-floor meditation terrace or walking through the subterranean reinforced concrete bunkers, one realizes the Independence Palace is far more than a museum. It is an unvarnished diary of a nation—where every bronze relief, every open louvered breeze, and every quiet corridor whispers of resilience, peace, and cultural dignity."
  },

  "ben-thanh-central-metro-station-guide": {
    subtitle: "Architecture, Underpass Network & Essential Commuter Logistics for Saigon Line 1 (2026)",
    lead: "Descending beneath Quach Thi Trang Square, the Ben Thanh Central Station represents a monumental leap into Saigon's urban future. As the four-story subterranean heart of the newly commissioned Metro Line 1, this architectural marvel harmonizes public transit with modern civic spaces.",
    readTime: 12,
    badges: [
      { icon: "🚇", text: "4-Level Underground Transit Hub" },
      { icon: "🏮", text: "Iconic Lotus Skylight Dome" },
      { icon: "🎟️", text: "Smart IC Card & VietQR Gate" },
      { icon: "🌿", text: "2026 Operational Guide" }
    ],
    stats: [
      { icon: "📍", label: "Station Epicenter", val: "Quach Thi Trang Roundabout, District 1" },
      { icon: "🚇", label: "Operational Line", val: "Metro Line 1 (Ben Thanh – Suoi Tien)" },
      { icon: "🕒", label: "Transit Hours", val: "05:00 AM – 23:00 PM Daily" },
      { icon: "🎟️", label: "2026 Ticket Fare", val: "6,000 – 20,000 VND / trip" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Subterranean Depth", val: "32 Meters Below Street Level (4 Floors)" },
      { icon: "🏮", label: "Central Atrium", val: "Glass Lotus Skylight (Giếng trời Hoa Sen)" },
      { icon: "🚶", label: "Underground Passages", val: "Direct exits to Ben Thanh, Le Loi, Park 23/9" },
      { icon: "💳", label: "Ticketing Tech", val: "Tap-to-pay EMV, VietQR, IC Single/Day Pass" }
    ],
    epilogueTitle: "The Subterranean Beat of Modern Saigon",
    epilogue: "The launch of Ben Thanh Central Station is more than an engineering milestone; it is the symbolic bridge connecting Saigon’s storied colonial avenues with a world-class transit future. Descending into its cool, luminous chambers reminds us that the city's vitality flows as dynamically beneath the earth as it does along its sunlit boulevards."
  },

  "mariamman-hindu-temple-saigon": {
    subtitle: "Raja Gopuram Spire, Sacred Stone Wall Rituals & The Chettiar Legacy (2026)",
    lead: "Just 250 meters from the bustling aisles of Ben Thanh Market, the incandescent crimson towers of the Mariamman Hindu Temple rise into the southern sky. For over a century, this sanctuary has stood as a sacred crossroad where Tamil Chettiar traders and multi-ethnic Saigon communities converge in quiet reverence.",
    readTime: 11,
    badges: [
      { icon: "🛕", text: "12-Meter Raja Gopuram Tower" },
      { icon: "✨", text: "Sacred Stone Whispering Wall" },
      { icon: "🥥", text: "Daily Puja Aarti Rituals" },
      { icon: "🌿", text: "Tamil Heritage Sanctuary" }
    ],
    stats: [
      { icon: "📍", label: "Sanctuary Coordinates", val: "45 Truong Dinh, District 1" },
      { icon: "⏳", label: "Foundation Era", val: "Late 19th Century (Tamil Chettiar)" },
      { icon: "🚶", label: "Distance to Market", val: "250 meters (3-minute walk)" },
      { icon: "🎟️", label: "Admission & Rituals", val: "Free Entry (Respectful Modest Dress)" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Historic Enclave", val: "45 Truong Dinh Street, Ben Thanh Ward" },
      { icon: "🕒", label: "Puja Aarti Times", val: "09:30 AM & 18:30 PM (Daily Fire Ritual)" },
      { icon: "🙏", label: "Unique Practice", val: "Pressing head against back stone wall to pray" },
      { icon: "👗", label: "Dress Code", val: "Cover shoulders & knees, remove footwear outside" }
    ],
    epilogueTitle: "The Harmony of Inclusive Faith",
    epilogue: "In the quiet courtyard of Mariamman Temple, the fragrant smoke of camphor and sandalwood mingles with the ambient hum of Saigon’s avenues. Watching Vietnamese, Sino-Vietnamese, and Indian pilgrims offer lotus blossoms side by side reveals the greatest truth of Saigon: it is a city whose soul is defined by welcoming warmth, generosity, and harmonious coexistence."
  },

  "ben-thanh-market-shopping-guide": {
    subtitle: "Artisan Finds, Tailoring Secrets, Authentic Souvenirs & Respectful Bargaining (2026)",
    lead: "With over 1,400 active stalls sheltered beneath its soaring timber-trussed roof, Ben Thanh Market is both a bustling commercial bazaar and an intimate microcosm of Vietnamese tradecraft. Navigating its vibrant labyrinth requires discernment, cultural appreciation, and the gracious art of civilized negotiation.",
    readTime: 12,
    badges: [
      { icon: "🧵", text: "Bespoke Silk & Ao Dai Tailoring" },
      { icon: "☕", text: "Highland Robusta & Arabica Beans" },
      { icon: "🎨", text: "Lacquerware & Bamboo Handicrafts" },
      { icon: "🌿", text: "2026 Civilized Buyer's Guide" }
    ],
    stats: [
      { icon: "📍", label: "Market Epicenter", val: "Intersection of 4 Iconic Gates, District 1" },
      { icon: "🕒", label: "Prime Shopping Hours", val: "08:30 – 16:30 (Daytime Stalls)" },
      { icon: "🤝", label: "Negotiation Guideline", val: "Respectful 20% – 30% discount baseline" },
      { icon: "💳", label: "Payment Flexibility", val: "VietQR, Mobile Banking & Cash" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Retail Sectors", val: "North: Flowers/Fruit; South: Textiles; East: Food; West: Crafts" },
      { icon: "🌤️", label: "Bargaining Etiquette", val: "Smile genuinely; avoid sharp haggling before 9:00 AM" },
      { icon: "☕", label: "Authenticity Tip", val: "Request whole bean inspection before grinding" },
      { icon: "🛍️", label: "Top Souvenirs", val: "Hand-embroidered linen, artisan lacquer, dried Mekong mango" }
    ],
    epilogueTitle: "The Gracious Commerce of the Market",
    epilogue: "A visit to Ben Thanh Market is far more than a transactional shopping trip; it is an intimate encounter with the hardworking artisans and vendors who keep Saigon's merchant traditions alive. When approached with a smile, cultural curiosity, and mutual respect, every exchange becomes an unforgettable story to carry home."
  },

  "saigon-hop-on-hop-off-bus-guide": {
    subtitle: "Heritage Routes, 2026 Ticketing Guide & Open-Top Panoramic Field Notes",
    lead: "Gliding 4 meters above urban avenues, viewing Saigon from the open deck of a double-decker bus unlocks a completely elevated sensory perspective. From the gilded Renaissance contours of the Central Post Office to the sweeping river breeze across Ba Son Bridge at dusk, this curated transit circuit connects the city’s colonial memory with its modern horizon.",
    readTime: 12,
    badges: [
      { icon: "🚌", text: "Open-Top Double-Decker Fleet" },
      { icon: "🎧", text: "9-Language GPS Audio Guide" },
      { icon: "🌉", text: "Ba Son Bridge River Panorama" },
      { icon: "🌿", text: "2026 Heritage Circuit Guide" }
    ],
    stats: [
      { icon: "📍", label: "Main Hub at Ben Thanh", val: "West Gate (23 Phan Chu Trinh)" },
      { icon: "🕒", label: "Operating Schedule", val: "08:00 – 22:30 Daily (Every 30 mins)" },
      { icon: "⏳", label: "Loop Duration", val: "60 mins (District 1) / 120 mins (Chợ Lớn)" },
      { icon: "🎟️", label: "2026 Ticket Range", val: "200,000 – 450,000 VND / passenger" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Prime Boarding Terminals", val: "Central Post Office & Ben Thanh West Gate" },
      { icon: "🌤️", label: "Optimal Sunset Window", val: "16:30 – 17:30 PM (Golden hour bridge crossing)" },
      { icon: "🎧", label: "Onboard Technology", val: "Multi-lingual automated audio narration & USB ports" },
      { icon: "🎁", label: "Complimentary Amenities", val: "Traditional conical hat, mineral water & rain poncho" }
    ],
    epilogueTitle: "The Urban Rhythm from Above",
    epilogue: "Gliding slowly through the evening air above Saigon’s storied streetscapes, one comes to understand that this city does not merely rush forward—it breathes with layered historic grace. In a single hour aloft, the voyager touches the timeless heart of a metropolis that is perpetually vibrant yet rooted in centuries of enduring soul."
  },

  "secret-apartment-cafes-near-ben-thanh": {
    subtitle: "Saigon’s Vintage Sanctuaries, Drip Brews & Heritage Corridors (2026)",
    lead: "Tucked behind peeling ochre facades and shadowy corridors within a ten-minute radius of Ben Thanh Market, mid-century residential blocks have undergone an enchanting renaissance. Here, independent baristas, ceramicists, and antique collectors breathe vibrant creative life into colonial apartments.",
    readTime: 12,
    badges: [
      { icon: "☕", text: "Artisan Drip & Salted Foam Brews" },
      { icon: "🏛️", text: "Mid-Century Heritage Enclaves" },
      { icon: "🌿", text: "Balcony Jungle Sanctuaries" },
      { icon: "🎨", text: "2026 Creative Field Guide" }
    ],
    stats: [
      { icon: "📍", label: "Walking Radius", val: "300m – 800m from Ben Thanh" },
      { icon: "⏳", label: "Building Eras", val: "1920s French & 1960s Modernist Cư Xá" },
      { icon: "☕", label: "Beverage Spectrum", val: "Robusta Phin, V60 Pour-over, Cold Drip" },
      { icon: "💵", label: "2026 Price Baseline", val: "45,000 – 95,000 VND / beverage" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Epicenter Buildings", val: "42 Ton That Thiep, 26 Ly Tu Trong, 14 Ton That Dam" },
      { icon: "🌤️", label: "Golden Morning Window", val: "08:30 – 11:00 AM (Quiet reading & soft light)" },
      { icon: "🪜", label: "Architectural Charm", val: "Centennial iron-cage elevators & mosaic cement tiles" },
      { icon: "🤫", label: "Resident Etiquette", val: "Tread softly past residential doorways" }
    ],
    epilogueTitle: "The Timeless Pause",
    epilogue: "In a metropolis that hurtles forward with dazzling speed, the vintage apartment cafes near Ben Thanh Market serve as precious temporal anchors. Lingering over an amber glass of slow-dripping coffee while afternoon rain patters against weathered green shutters, one discovers that Saigon’s true charm lies in its capacity for stillness."
  },

  "best-rooftop-bars-near-ben-thanh": {
    subtitle: "Twilight Cocktails, Clocktower Panoramas & Nightlife Guide (2026)",
    lead: "As equatorial twilight yields to indigo dusk, Saigon’s iconic District 1 undergoes an intoxicating nocturnal metamorphosis. Perched high above the animated kinetic currents of Quach Thi Trang Square or concealed behind secret speakeasies, a refined constellation of open-air sky lounges invites the discerning voyager to toast the city beneath a canopy of stars.",
    readTime: 12,
    badges: [
      { icon: "🍸", text: "Artisan Botanical Mixology" },
      { icon: "🌃", text: "Panoramic Clocktower Vistas" },
      { icon: "🎷", text: "Hidden Speakeasy Enclaves" },
      { icon: "🌿", text: "2026 Nightlife Field Guide" }
    ],
    stats: [
      { icon: "📍", label: "Walking Radius", val: "200m – 700m from Ben Thanh" },
      { icon: "🍸", label: "Cocktail Baseline", val: "180,000 – 380,000 VND / signature" },
      { icon: "🌅", label: "Golden Twilight Hour", val: "17:30 – 19:00 PM (Sunset transition)" },
      { icon: "👔", label: "Dress Standard", val: "Smart Casual (Tailored shirts & footwear)" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Epicenter Boulevards", val: "Le Loi, Phan Boi Chau, Ton That Thiep, Huynh Thuc Khang" },
      { icon: "🍹", label: "Botanical Signatures", val: "Phu Quoc black pepper, Tra Bong cinnamon, pomelo gin" },
      { icon: "🚇", label: "Night Transit", val: "Metro Line 1 operating until 23:00 PM" },
      { icon: "🎶", label: "Acoustic Atmosphere", val: "Live jazz, deep soul & vinyl selector nights" }
    ],
    epilogueTitle: "Toasting the Eternal Metropolis",
    epilogue: "Gazing through the rim of a crystal coupe as twilight breeze ruffles the palms, listening to the muffled hum of traffic circling below, one grasps the singular romance of Saigon. She is a city that never completely surrenders to sleep—a resilient, generous metropolis that welcomes the night with grace, warmth, and wonder."
  },

  "boutique-hotels-near-ben-thanh": {
    subtitle: "Saigon’s Premier Indochine Sanctuaries & Design Stays (2026)",
    lead: "For the discerning voyager, accommodation in Saigon is far more than a nocturnal resting place—it is the emotional anchor of the journey. Travelers with a discerning eye seek out intimate boutique sanctuaries and protected heritage mansions tucked along the tamarind-shaded avenues surrounding Ben Thanh Market, where colonial romance and contemporary tropical luxury converge in exquisite harmony.",
    readTime: 13,
    badges: [
      { icon: "🏛️", text: "Historic Colonial Mansions" },
      { icon: "🏊", text: "Skyline Infinity Lap Pools" },
      { icon: "🫖", text: "Complimentary Afternoon High Tea" },
      { icon: "🌿", text: "2026 Luxury Field Guide" }
    ],
    stats: [
      { icon: "📍", label: "Market Proximity", val: "200m – 900m Walking Radius" },
      { icon: "⏳", label: "Architectural Range", val: "1880 Belle Époque to Tropical Zen" },
      { icon: "🚶", label: "Pedestrian Access", val: "Direct link to Metro Line 1 & Quach Thi Trang" },
      { icon: "💵", label: "2026 Tariff Baseline", val: "2,200,000 – 6,800,000 VND / night" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Sanctuary Corridors", val: "Ho Huan Nghiep, Thu Khoa Huan, Dong Khoi, Ly Tu Trong, Le Loi" },
      { icon: "🛎️", label: "Concierge Standard", val: "Bespoke butler service & private airport transfers" },
      { icon: "🛏️", label: "Signature Highlights", val: "Open-air balcony stone tubs & salvage shipyard timber" },
      { icon: "🌤️", label: "Peak Booking Window", val: "3–4 weeks in advance (Nov – Apr dry season)" }
    ],
    epilogueTitle: "Awakening to Saigon’s Living Grace",
    epilogue: "After a vibrant day immersed in the aromas, textiles, and lively chatter of Ben Thanh Market, returning to a room scented with gentle lemongrass oil, sinking into cool Egyptian cotton sheets, and gazing out as twilight softens over ancient tamarind trees brings deep restorative peace. The boutique sanctuaries surrounding Ben Thanh do not merely shelter you; they weave you into the enduring, poetic narrative of Saigon herself."
  },

  "things-to-do-in-ben-thanh-market": {
    subtitle: "15 Curated Daytime Traditions, Gastronomic Rituals & Nocturnal Wonders Across 4 Time Windows",
    lead: "Beyond the bustling souvenir stalls and rolled silks, Ben Thanh Market and its encircling boulevards form one of Southeast Asia's most captivating urban cultural theaters. From misty morning architectural photography to midnight supper, this is your curated 24-hour field manual.",
    readTime: 14,
    badges: [
      { icon: "🏛️", text: "112-Year Living Heritage" },
      { icon: "🍜", text: "Centennial Food Court" },
      { icon: "🚇", text: "2026 Metro Direct Access" },
      { icon: "🌿", text: "15 Curated Experiences" }
    ],
    stats: [
      { icon: "📍", label: "Geographic Scope", val: "Ben Thanh Epicenter & 1km Radius" },
      { icon: "⏳", label: "Suggested Duration", val: "4 Hours to 24-Hour Immersion" },
      { icon: "🎟️", label: "2026 Budget Baseline", val: "250,000 – 850,000 VND / Guest" },
      { icon: "🌙", label: "Night Market Shift", val: "18:00 – 23:30 Daily" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Heart of Saigon", val: "District 1, Ho Chi Minh City" },
      { icon: "🌤️", label: "Peak Photography Window", val: "06:30 – 08:00 AM (Golden Dawn)" },
      { icon: "🍲", label: "Must-Try Gastronomy", val: "Bun Rieu Cua, Banh Beo & Che Ba Muoi" },
      { icon: "🚇", label: "Subterranean Link", val: "Direct access to Metro Line 1" }
    ],
    epilogueTitle: "The Living Pulse of Saigon",
    epilogue: "To truly experience Ben Thanh Market is not merely to buy a souvenir, but to surrender to its living rhythm: to sit on a low stool at dawn sipping sweet milk coffee, to marvel at century-old rafters, and to watch the city dance beneath neon lights at dusk. It is where Saigon's past, present, and future embrace with timeless warmth."
  },

  "ben-thanh-market-ultimate-travel-guide": {
    subtitle: "The Definitive A-Z Survival Handbook: Operating Hours, Stalls, Bargaining & 2026 Field Logistics",
    lead: "Stepping into Saigon's centennial market can feel overwhelming without advance intelligence. From decoding stall numbering systems and verified parking basements to mastering civilized bargaining etiquette, this comprehensive field manual ensures an effortless, authentic voyage.",
    readTime: 15,
    badges: [
      { icon: "🧭", text: "Comprehensive A-Z Handbook" },
      { icon: "🕒", text: "Dual Day & Night Schedules" },
      { icon: "🛡️", text: "Verified Scam Defenses" },
      { icon: "🌿", text: "2026 Field Logistics" }
    ],
    stats: [
      { icon: "📍", label: "Exact Location", val: "Le Loi Blvd, Ben Thanh, District 1" },
      { icon: "🕒", label: "Covered Day Market", val: "06:00 – 18:00 (1,400+ Stalls)" },
      { icon: "🌙", label: "Outdoor Night Market", val: "18:00 – 23:30 (East & West Gates)" },
      { icon: "🎟️", label: "Admission Tariff", val: "Free Public Entry" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Centennial Market", val: "Inaugurated March 1914" },
      { icon: "🚪", label: "Main Portals", val: "4 Main Gates (South, North, East, West)" },
      { icon: "💡", label: "Insider Sweet Spot", val: "08:30 – 10:30 AM (Cool & unhurried)" },
      { icon: "🚇", label: "Modern Transit", val: "Direct escalator from Metro concourse" }
    ],
    epilogueTitle: "Mastering the Art of Market Travel",
    epilogue: "Armed with cultural understanding and practical wisdom, Ben Thanh transforms from a bewildering maze into an open book of southern Vietnamese life. Walk with curiosity, bargain with a smile, and savor the unforgettable tapestry of flavors and human connections waiting around every turn."
  },

  "ben-thanh-market-scams-safety-guide": {
    subtitle: "7 Common Tourist Traps, Price Inflation Countermeasures & 2026 Personal Security Protocols",
    lead: "While Ben Thanh Market is a cultural treasure, unwary travelers often face sleeve-pulling, aggressive price gouging, and tourist traps. Here is your definitive field guide to recognizing, preventing, and neutralizing the 7 most frequent scams with dignity and confidence.",
    readTime: 14,
    badges: [
      { icon: "🛡️", text: "Consumer Protection Manual" },
      { icon: "⚠️", text: "7 Traps Decoded & Neutralized" },
      { icon: "🏷️", text: "Civilized Price Counter-Offers" },
      { icon: "🌿", text: "2026 Security Protocols" }
    ],
    stats: [
      { icon: "📍", label: "Critical Perimeter", val: "All 4 Gates & Quach Thi Trang Square" },
      { icon: "🚨", label: "Risk Typology", val: "Price Inflation & Curbside Soliciting" },
      { icon: "🛡️", label: "Golden Rule", val: "Negotiate 40–50% or seek Fixed Price" },
      { icon: "👮", label: "Market Police Desk", val: "South Gate Station (Phan Chu Trinh)" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Watch Out Areas", val: "South Gate pavement & Fruit pole vendors" },
      { icon: "🥥", label: "Fair Coconut Price", val: "25,000 – 35,000 VND / fruit" },
      { icon: "💳", label: "Payment Safety", val: "Inspect banknote denominations carefully" },
      { icon: "🎒", label: "Bag Security", val: "Sling diagonally across chest in crowds" }
    ],
    epilogueTitle: "Travel with Awareness and Heart",
    epilogue: "Awareness is not about viewing every merchant with suspicion; it is about cultivating the grounded confidence that allows you to engage with generosity while protecting your peace. When you know the fair value of goods and respect local boundaries, your interactions inside Ben Thanh become joyful, authentic, and mutually rewarding."
  },

  "money-exchange-ben-thanh-ha-tam-guide": {
    subtitle: "Insider Exchange Rates, Banknote Quality Rules & Security Guide at Ha Tam Gold Shop (2026)",
    lead: "Across the West Gate of Ben Thanh Market lies Saigon's premier open currency exchange nexus: Ha Tam Gold Shop. Learn how to secure near-zero spread market rates for USD, EUR, JPY, and AUD with zero commission and lightning-fast execution.",
    readTime: 13,
    badges: [
      { icon: "💵", text: "Near-Zero Spread Rates" },
      { icon: "⚡", text: "Sub-60s Transaction Speed" },
      { icon: "🚫", text: "Zero Hidden Commissions" },
      { icon: "🌿", text: "2026 Currency Field Notes" }
    ],
    stats: [
      { icon: "📍", label: "Exact Coordinates", val: "2 Nguyen An Ninh, Ben Thanh, District 1" },
      { icon: "🕒", label: "Operating Schedule", val: "07:30 – 20:30 Daily (7 Days/Week)" },
      { icon: "💱", label: "Top Currencies", val: "USD, EUR, AUD, JPY, SGD, THB, KRW" },
      { icon: "🛡️", label: "Security Rating", val: "High CCTV & Regulated Transactions" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Location", val: "Directly opposite West Gate" },
      { icon: "💵", label: "Banknote Standards", val: "Crisp, unmarked, uncreased bills only" },
      { icon: "👥", label: "Alternative Option", val: "Mai Van Gold Shop (Next door at 1A)" },
      { icon: "💡", label: "Pro-Tip", val: "Count and pocket cash before leaving counter" }
    ],
    epilogueTitle: "Financial Savvy on the Southern Frontier",
    epilogue: "Navigating the lively bustle of Ha Tam Gold Shop is an essential ritual of the seasoned traveler in Saigon. Stepping away with freshly minted Vietnamese Dong in hand, you are fully prepared to immerse yourself in the rich culinary and artisan treasures of the Mekong Delta with confidence and fiscal peace of mind."
  },

  "parking-guide-near-ben-thanh-market": {
    subtitle: "6 Official Basements, Regulated Municipal Rates & Curbside Scam Prevention (2026 Master Guide)",
    lead: "District 1's dense urban grid makes finding legitimate parking a major headache. Navigate directly to 6 verified, surveillance-guarded facilities—from the state-of-the-art Metro basement to climate-controlled malls—and avoid aggressive curbside parking touts.",
    readTime: 12,
    badges: [
      { icon: "🅿️", text: "6 Regulated Parking Hubs" },
      { icon: "🛵", text: "Scooter & Car Basements" },
      { icon: "🛡️", text: "Zero Curbside Rip-Offs" },
      { icon: "🌿", text: "2026 Parking Tariff Map" }
    ],
    stats: [
      { icon: "📍", label: "Survey Zone", val: "500m Perimeter of Market Gates" },
      { icon: "🛵", label: "Official Scooter Tariff", val: "5,000 – 10,000 VND / entry" },
      { icon: "🚗", label: "Official Car Tariff", val: "35,000 – 50,000 VND / 2-hour block" },
      { icon: "🚇", label: "Top Regulated Facility", val: "Ben Thanh Metro Central Basement" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Closest Facility", val: "Saigon General Hospital (125 Le Loi)" },
      { icon: "🏢", label: "Premier Mall Parking", val: "Takashimaya / Saigon Centre Basement" },
      { icon: "🌳", label: "Shaded Surface Lot", val: "September 23rd Park Gate 1 (Le Lai)" },
      { icon: "⚠️", label: "Warning Sign", val: "Refuse chalk-mark sidewalk operators" }
    ],
    epilogueTitle: "Seamless Mobility in the City Core",
    epilogue: "A memorable urban journey begins with effortless arrival and ends with unburdened peace of mind. By choosing verified municipal and commercial parking garages, your vehicle remains safeguarded beneath high-tech surveillance, leaving you free to wander the historic heart of Saigon with complete serenity."
  },

  "tan-son-nhat-airport-to-ben-thanh-transfer-guide": {
    subtitle: "5 Best Transfer Options from SGN to District 1: Express Bus 109, Reputable Cabs & VIP Private Cars (2026)",
    lead: "Arriving at Tan Son Nhat Airport (SGN) can be daunting with unlicensed taxi touts and complex terminal pickup lanes. Here is your definitive breakdown of the 5 fastest, safest, and most cost-effective routes straight to Ben Thanh Market in District 1.",
    readTime: 14,
    badges: [
      { icon: "✈️", text: "SGN -> District 1 Transit" },
      { icon: "🚌", text: "Yellow Express Bus 109" },
      { icon: "🚕", text: "Vinasun & Mai Linh Verified" },
      { icon: "🌿", text: "2026 Ground Transit Guide" }
    ],
    stats: [
      { icon: "📍", label: "Transit Distance", val: "7.5 km – 8.5 km to Ben Thanh" },
      { icon: "⏱️", label: "Transit Duration", val: "25 – 45 mins (Traffic dependent)" },
      { icon: "💰", label: "Fare Spectrum", val: "15,000 VND (Bus) – 350,000 VND (VIP Sedan)" },
      { icon: "🚌", label: "Optimal Public Route", val: "Air-conditioned Yellow Bus 109" }
    ],
    sidebarFacts: [
      { icon: "📍", label: "Arrival Airport", val: "Tan Son Nhat (SGN), Tan Binh Dist" },
      { icon: "🚌", label: "Bus 109 Frequency", val: "Every 20 – 30 mins (05:45 – 23:45)" },
      { icon: "🚗", label: "Ride-Hailing Pickup", val: "Floors 3–5, TCP Garage (Domestic)" },
      { icon: "🛑", label: "Drop-Off Epicenter", val: "Ben Thanh Transit Hub, Ham Nghi St" }
    ],
    epilogueTitle: "The Welcoming Gateway to Saigon",
    epilogue: "Gliding from the runway into the tree-shaded corridors of District 1 marks the opening stanza of your Vietnamese odyssey. With reliable ground logistics and transparent pricing, your transition into the city is smooth, calm, and filled with eager anticipation for the adventures ahead."
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
  const isBenThanh = slug.includes('ben-thanh') || slug.includes('fine-arts') || slug.includes('independence') || slug.includes('mariamman') || slug.includes('hop-on') || slug.includes('apartment') || slug.includes('rooftop') || slug.includes('boutique') || slug.includes('tan-son-nhat');
  const pool = isBenThanh 
    ? Object.keys(articleMetadata).filter(s => (s.includes('ben-thanh') || s.includes('fine-arts') || s.includes('independence') || s.includes('mariamman') || s.includes('hop-on') || s.includes('apartment') || s.includes('rooftop') || s.includes('boutique') || s.includes('tan-son-nhat')) && s !== slug)
    : Object.keys(articleMetadata).filter(s => s !== slug);
  const otherSlugs = pool.slice(0, 3);
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
