#!/usr/bin/env python3
"""
Comprehensive Fix Script:
1. Updates batch_convert.cjs & batch_convert.js:
   - Sets articleMetadata stats to exactly 3 curated items across all 28 articles.
   - Redesigns Quick Overview Stats Bar to a 3-column responsive layout:
     desktop: grid-cols-3 with clean vertical dividers (md:divide-x)
     mobile: grid-cols-1 gap-5, compact and not overly tall.
   - Boosts contrast:
     * Label: text-[11px] sm:text-[12px] font-bold text-slate-600 uppercase tracking-wider
     * Value: text-[13.5px] sm:text-[14.5px] font-bold text-slate-900 leading-snug
     * Icon: rounded-xl bg-amber-50 text-amber-700 border-amber-200/80
     * Table header: style="background-color: #0f172a !important; color: #ffffff !important;"
     * Table th: style="color: #ffffff !important;" with !text-white
     * Epilogue text: text-slate-100 (bright, high contrast)
     * Sidebar facts labels: text-slate-600 font-bold uppercase tracking-wider
     * TOC links: text-slate-700 hover:text-amber-700
   - Strips any duplicate "Quick Overview Stats" / "Tổng quan nhanh" markdown table or section from the article body.
2. Cleans up markdown files across content-pipeline directories.
3. Re-runs batch conversion to compile pristine HTML in src/data/demo-articles.ts.
4. Updates admin/posts/index.astro demoData to reflect 3 stats and updated HTML.
5. Re-runs Word doc generation.
"""

import os
import re
import subprocess

THREE_STATS = {
    "happy-land-ben-luc-travel-guide": [
        {"icon": "📍", "label": "Coordinates", "val": "Binh Duc, Tay Ninh"},
        {"icon": "🚫", "label": "2026 Status", "val": "Closed to Public / Private Only"},
        {"icon": "⚠️", "label": "Advisory", "val": "Verify Status Before Travel"}
    ],
    "nam-du-island-expedition-guide": [
        {"icon": "📍", "label": "Archipelago", "val": "21 Islands, An Son, Kien Giang"},
        {"icon": "🌤️", "label": "Golden Window", "val": "Dec – April (Calm Azure Seas)"},
        {"icon": "🛥️", "label": "Maritime Link", "val": "2h Express Ferry from Rach Gia"}
    ],
    "mekong-delta-fruits-harvest-map": [
        {"icon": "📍", "label": "River Heartland", "val": "Tien Giang, Ben Tre, Can Tho"},
        {"icon": "🌤️", "label": "Peak Harvest", "val": "May – August (Fruit Season)"},
        {"icon": "🍈", "label": "Iconic Cultivars", "val": "Ri6 Durian & Green Pomelo"}
    ],
    "truong-tien-bridge-hue-heritage": [
        {"icon": "📍", "label": "Coordinates", "val": "Perfume River, Hue Imperial City"},
        {"icon": "⏳", "label": "Construction", "val": "1899 (Eiffel Iron Metallurgy)"},
        {"icon": "📐", "label": "Scale", "val": "402.6 Meters / 6 Steel Spans"}
    ],
    "my-quynh-safari-definitive-guide": [
        {"icon": "📍", "label": "Coordinates", "val": "Duc Hoa, Tay Ninh / Long An"},
        {"icon": "🕒", "label": "Hours", "val": "07:30 – 18:00 Daily"},
        {"icon": "🎟️", "label": "2026 Ticket", "val": "250,000 – 350,000 VND / Guest"}
    ],
    "mekong-khan-ran-scarf-legacy": [
        {"icon": "📍", "label": "Heartland", "val": "Long Khanh A, Dong Thap"},
        {"icon": "⏳", "label": "Genesis", "val": "17th Century (Khmer Krama)"},
        {"icon": "🏆", "label": "Heritage", "val": "National Intangible Heritage (2023)"}
    ],
    "huynh-thuy-le-ancient-house": [
        {"icon": "📍", "label": "Coordinates", "val": "Sa Dec Waterfront, Dong Thap"},
        {"icon": "⏳", "label": "Construction", "val": "1895 (Sino-French Timber)"},
        {"icon": "🎟️", "label": "2026 Admission", "val": "20,000 VND (Includes Lotus Tea)"}
    ],
    "lan-vuong-ecopark-mekong-mud": [
        {"icon": "📍", "label": "Coordinates", "val": "An Hoi, Vinh Long (Ex-Ben Tre)"},
        {"icon": "🕒", "label": "Hours", "val": "07:00 – 18:00 Daily (365 Days)"},
        {"icon": "🎟️", "label": "Admission", "val": "Free Entry (A la carte activities)"}
    ],
    "hon-son-island-lodging-homestays": [
        {"icon": "📍", "label": "Coordinates", "val": "Lai Son Island, Kien Giang"},
        {"icon": "🛥️", "label": "Transit", "val": "1h 30m Ferry from Rach Gia"},
        {"icon": "💵", "label": "2026 Tariff", "val": "300,000 – 1,500,000 VND / Night"}
    ],
    "can-tho-beach-artificial-oasis": [
        {"icon": "📍", "label": "Coordinates", "val": "Song Hau Park, Ninh Kieu, Can Tho"},
        {"icon": "🕒", "label": "Hours", "val": "07:00 – 23:00 Daily"},
        {"icon": "🎟️", "label": "2026 Entry", "val": "20,000 VND (Includes beverage)"}
    ],

    # The 18 Ben Thanh Cluster Guides
    "things-to-do-near-ben-thanh-market": [
        {"icon": "📍", "label": "Coordinates", "val": "Quach Thi Trang Square, District 1"},
        {"icon": "🚶", "label": "Walking Radius", "val": "1.2 km Heritage Perimeter"},
        {"icon": "🎟️", "label": "2026 Tariff", "val": "Free – 65,000 VND / landmark"}
    ],
    "hcmc-museum-of-fine-arts-guide": [
        {"icon": "📍", "label": "Coordinates", "val": "97A Pho Duc Chinh, District 1"},
        {"icon": "🚶", "label": "Walk from Market", "val": "350 meters (5-minute stroll)"},
        {"icon": "🎟️", "label": "2026 Ticket", "val": "30,000 VND / adult"}
    ],
    "ben-thanh-market-food-guide": [
        {"icon": "📍", "label": "Dining Zone", "val": "South & East Portals, Ben Thanh"},
        {"icon": "🕒", "label": "Operating Hours", "val": "06:00 – 23:30 (Day & Night Market)"},
        {"icon": "🎟️", "label": "2026 Pricing", "val": "30,000 – 120,000 VND / dish"}
    ],
    "ben-thanh-one-day-walking-tour": [
        {"icon": "🚶", "label": "Total Distance", "val": "4.5 km (4 Curated Stages)"},
        {"icon": "⏳", "label": "Expedition Time", "val": "Full Day (07:30 AM – 20:30 PM)"},
        {"icon": "🎟️", "label": "Estimated Budget", "val": "500,000 – 850,000 VND / person"}
    ],
    "independence-palace-saigon-guide": [
        {"icon": "📍", "label": "Palace Location", "val": "135 Nam Ky Khoi Nghia, District 1"},
        {"icon": "🚶", "label": "Walk from Market", "val": "700 meters (9-minute walk)"},
        {"icon": "🎟️", "label": "2026 Admission", "val": "65,000 VND / adult"}
    ],
    "ben-thanh-central-metro-station-guide": [
        {"icon": "📍", "label": "Station Epicenter", "val": "Quach Thi Trang Roundabout, D1"},
        {"icon": "🕒", "label": "Transit Hours", "val": "05:00 AM – 23:00 PM Daily"},
        {"icon": "🎟️", "label": "2026 Ticket Fare", "val": "6,000 – 20,000 VND / trip"}
    ],
    "mariamman-hindu-temple-saigon": [
        {"icon": "📍", "label": "Sanctuary Location", "val": "45 Truong Dinh, District 1"},
        {"icon": "🚶", "label": "Distance to Market", "val": "250 meters (3-minute walk)"},
        {"icon": "🎟️", "label": "Admission", "val": "Free Entry (Modest Attire)"}
    ],
    "ben-thanh-market-shopping-guide": [
        {"icon": "📍", "label": "Market Core", "val": "Intersection of 4 Iconic Gates"},
        {"icon": "🕒", "label": "Prime Shopping", "val": "08:30 – 16:30 (Daytime Stalls)"},
        {"icon": "🤝", "label": "Bargaining Rule", "val": "Respectful 20% – 30% discount"}
    ],
    "saigon-hop-on-hop-off-bus-guide": [
        {"icon": "📍", "label": "Main Terminal", "val": "West Gate (23 Phan Chu Trinh)"},
        {"icon": "🕒", "label": "Operating Schedule", "val": "08:00 – 22:30 (Every 30 mins)"},
        {"icon": "🎟️", "label": "2026 Ticket Range", "val": "200,000 – 450,000 VND"}
    ],
    "secret-apartment-cafes-near-ben-thanh": [
        {"icon": "📍", "label": "Walking Perimeter", "val": "300m – 800m from Ben Thanh"},
        {"icon": "☕", "label": "Coffee Spectrum", "val": "Robusta Phin, V60 & Cold Drip"},
        {"icon": "💵", "label": "2026 Price Baseline", "val": "45,000 – 95,000 VND / drink"}
    ],
    "best-rooftop-bars-near-ben-thanh": [
        {"icon": "📍", "label": "Walking Radius", "val": "200m – 700m from Ben Thanh"},
        {"icon": "🌅", "label": "Golden Hour", "val": "17:30 – 19:00 PM (Twilight)"},
        {"icon": "🍸", "label": "Cocktail Tariff", "val": "180,000 – 380,000 VND"}
    ],
    "boutique-hotels-near-ben-thanh": [
        {"icon": "📍", "label": "Market Proximity", "val": "200m – 900m Walking Radius"},
        {"icon": "🚶", "label": "Transit Access", "val": "Direct link to Metro Line 1"},
        {"icon": "💵", "label": "2026 Tariff", "val": "2,200,000 – 6,800,000 VND / night"}
    ],
    "things-to-do-in-ben-thanh-market": [
        {"icon": "📍", "label": "Geographic Scope", "val": "Ben Thanh Core & 1km Radius"},
        {"icon": "⏳", "label": "Suggested Time", "val": "4 Hours to Full Day Immersion"},
        {"icon": "🎟️", "label": "2026 Budget", "val": "250,000 – 850,000 VND / Guest"}
    ],
    "ben-thanh-market-ultimate-travel-guide": [
        {"icon": "📍", "label": "Exact Location", "val": "Le Loi Blvd, Ben Thanh, District 1"},
        {"icon": "🕒", "label": "Operating Window", "val": "06:00 – 18:00 & 18:00 – 23:30"},
        {"icon": "🎟️", "label": "Admission Policy", "val": "Free Public Entry"}
    ],
    "ben-thanh-market-scams-safety-guide": [
        {"icon": "📍", "label": "High-Alert Zone", "val": "All 4 Gates & Roundabout"},
        {"icon": "🛡️", "label": "Bargaining Rule", "val": "Negotiate 40–50% or Fixed Price"},
        {"icon": "👮", "label": "Market Police Desk", "val": "South Gate Station (Phan Chu Trinh)"}
    ],
    "money-exchange-ben-thanh-ha-tam-guide": [
        {"icon": "📍", "label": "Exact Coordinates", "val": "2 Nguyen An Ninh, Opp. West Gate"},
        {"icon": "🕒", "label": "Operating Hours", "val": "07:30 – 20:30 Daily (7 Days)"},
        {"icon": "💱", "label": "Top Currencies", "val": "USD, EUR, AUD, JPY, SGD, THB"}
    ],
    "parking-guide-near-ben-thanh-market": [
        {"icon": "📍", "label": "Survey Zone", "val": "500m Perimeter of Market Gates"},
        {"icon": "🛵", "label": "Scooter Fee", "val": "5,000 – 10,000 VND / entry"},
        {"icon": "🚗", "label": "Car Parking", "val": "35,000 – 50,000 VND / 2 hours"}
    ],
    "tan-son-nhat-airport-to-ben-thanh-transfer-guide": [
        {"icon": "📍", "label": "Transit Distance", "val": "7.5 km – 8.5 km to Ben Thanh"},
        {"icon": "⏱️", "label": "Transit Duration", "val": "25 – 45 mins (Traffic dependent)"},
        {"icon": "💰", "label": "Fare Spectrum", "val": "15,000 VND (Bus) – 350,000 VND"}
    ]
}

def clean_markdown_files():
    """Strips redundant Quick Overview Stats sections and tables from all markdown files."""
    dirs_to_clean = [
        "/Users/huynhtronghieu/Documents/thericetour/content-pipeline/campaign-ben-thanh/english",
        "/Users/huynhtronghieu/Documents/thericetour/content-pipeline/campaign-ben-thanh/vietnamese",
        "/Users/huynhtronghieu/Documents/thericetour/content-pipeline/04-english",
        "/Users/huynhtronghieu/Documents/thericetour/content-pipeline/03-qa-passed",
        "/Users/huynhtronghieu/Documents/thericetour/content-pipeline/02-vietnamese-guu"
    ]
    
    # Regex to match Quick Overview section and its table
    overview_pattern = re.compile(
        r'---\s*\n\s*##\s*⚡?\s*(?:Quick Overview Stats|Quick Overview|Tổng quan nhanh)[^\n]*\n+([\s\S]*?)(?=\n---\s*\n|\n##|\Z)',
        re.IGNORECASE
    )
    
    count = 0
    for d in dirs_to_clean:
        if not os.path.exists(d):
            continue
        for fname in os.listdir(d):
            if not fname.endswith('.md'):
                continue
            fpath = os.path.join(d, fname)
            with open(fpath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Remove the overview section
            new_content = overview_pattern.sub('', content)
            
            # Also remove standalone Quick Overview heading if not caught
            new_content = re.sub(
                r'##\s*⚡?\s*(?:Quick Overview Stats|Quick Overview|Tổng quan nhanh)[^\n]*\n+',
                '',
                new_content,
                flags=re.IGNORECASE
            )
            
            if new_content != content:
                with open(fpath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                count += 1
    print(f"Cleaned redundant Quick Overview tables from {count} markdown files.")

def update_batch_convert_script(script_path):
    """Updates batch_convert script with 3 stats and high contrast template styling."""
    if not os.path.exists(script_path):
        return
    
    with open(script_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update articleMetadata stats with THREE_STATS
    for slug, stats_list in THREE_STATS.items():
        # Match the slug block in articleMetadata
        slug_match = re.search(r'("' + re.escape(slug) + r'":\s*\{[\s\S]*?)(stats:\s*\[[\s\S]*?\])', content)
        if slug_match:
            formatted_stats = "stats: [\n"
            for s in stats_list:
                formatted_stats += f'      {{ icon: "{s["icon"]}", label: "{s["label"]}", val: "{s["val"]}" }},\n'
            formatted_stats = formatted_stats.rstrip(',\n') + "\n    ]"
            content = content[:slug_match.start(2)] + formatted_stats + content[slug_match.end(2):]
    
    # Update Stats Html generation to 3 columns and high contrast
    old_stats_build = re.search(r'// Build 4-Card Stats Bar[\s\S]*?const statsHtml = stats\.map\([\s\S]*?\)\.join\(\'\\n\'\);', content)
    if not old_stats_build:
        old_stats_build = re.search(r'// Build 3-Card Quick Stats Bar[\s\S]*?const statsHtml = stats\.map\([\s\S]*?\)\.join\(\'\\n\'\);', content)
    
    new_stats_build = """// Build 3-Card Quick Stats Bar (Optimized for Laptop & Mobile)
  const stats = (meta.stats || [
    { icon: "📍", label: "Location", val: "Vietnam Inbound" },
    { icon: "⏳", label: "Ideal Timing", val: "Year-Round" },
    { icon: "🎟️", label: "Access Policy", val: "Curated Entry" }
  ]).slice(0, 3);
  const statsHtml = stats.map((s, idx) => `
    <div class="flex items-center gap-3.5 md:px-5 first:pl-0 last:pr-0">
      <div class="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/80 shrink-0 shadow-xs">${s.icon}</div>
      <div class="min-w-0 flex-1">
        <div class="text-[11px] sm:text-[12px] font-bold text-slate-600 uppercase tracking-wider mb-0.5 truncate">${s.label}</div>
        <div class="text-[13.5px] sm:text-[14.5px] font-bold text-slate-900 leading-snug">${s.val}</div>
      </div>
    </div>
  `).join('\\n');"""

    if old_stats_build:
        content = content[:old_stats_build.start()] + new_stats_build + content[old_stats_build.end():]

    # Update container of Stats Bar
    content = re.sub(
        r'<!-- Quick Overview Stats Bar -->\s*<div class="[^"]*">[\s\S]*?\${statsHtml}[\s\S]*?</div>',
        """<!-- Quick Overview Stats Bar (3 Curated Dimensions) -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 md:divide-x md:divide-slate-200/80 my-8">
            ${statsHtml}
          </div>""",
        content
    )
    content = re.sub(
        r'<!-- Quick Overview Stats Bar \(3 Curated Dimensions\) -->\s*<div class="[^"]*">[\s\S]*?\${statsHtml}[\s\S]*?</div>',
        """<!-- Quick Overview Stats Bar (3 Curated Dimensions) -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 md:divide-x md:divide-slate-200/80 my-8">
            ${statsHtml}
          </div>""",
        content
    )

    # Update body cleaning to strip Quick Overview section and tables
    target_clean = "body = body.replace(/<img[^>]*>/gi, '');"
    replacement_clean = """body = body.replace(/<img[^>]*>/gi, '');
  
  // Remove redundant Quick Overview Stats section and any tables inside it
  body = body.replace(/##\\s*⚡?\\s*(?:Quick Overview Stats|Quick Overview|Tổng quan nhanh)[\\s\\S]*?(?=\\n##|\\n---|\\n<h2|$)/gi, '');"""

    if "Quick Overview Stats|Quick Overview" not in content:
        content = content.replace(target_clean, replacement_clean)

    # Update table renderer for high contrast
    old_table = re.search(r'customRenderer\.table = function\(\{ header, rows \}\) \{[\s\S]*?return `[\s\S]*?</table>[\s\S]*?</div>\s*`;\s*\};', content)
    new_table = """customRenderer.table = function({ header, rows }) {
    let headerHtml = '';
    header.forEach(cell => {
      headerHtml += `<th class="p-4 font-bold text-left !text-white text-white" style="background-color: #0f172a !important; color: #ffffff !important;">${this.parser.parseInline(cell.tokens)}</th>`;
    });
    
    let rowsHtml = '';
    rows.forEach(row => {
      rowsHtml += '<tr class="hover:bg-slate-50/80 transition-colors">';
      row.forEach(cell => {
        rowsHtml += `<td class="p-4 text-slate-800 font-medium">${this.parser.parseInline(cell.tokens)}</td>`;
      });
      rowsHtml += '</tr>\\n';
    });

    return `
      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 text-sm">
          <thead>
            <tr class="bg-slate-900 text-white font-serif" style="background-color: #0f172a !important; color: #ffffff !important;">
              ${headerHtml}
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;
  };"""

    if old_table:
        content = content[:old_table.start()] + new_table + content[old_table.end():]

    # Update Epilogue contrast
    content = content.replace("text-slate-300 text-base leading-relaxed m-0", "text-slate-100 text-base leading-relaxed m-0")

    # Update Right Sidebar facts contrast
    old_sidebar_code = """    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">${f.icon}</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">${f.label}</div>
        <div class="font-bold text-slate-800 text-[13px]">${f.val}</div>
      </div>
    </div>"""
    new_sidebar_code = """    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/80 text-lg">${f.icon}</div>
      <div>
        <div class="text-[11px] text-slate-600 uppercase tracking-wider font-bold">${f.label}</div>
        <div class="font-bold text-slate-900 text-[13.5px]">${f.val}</div>
      </div>
    </div>"""
    content = content.replace(old_sidebar_code, new_sidebar_code)

    # Update TOC link contrast
    content = content.replace("text-slate-600 hover:text-amber-800 font-semibold text-[13px]", "text-slate-700 hover:text-amber-700 font-semibold text-[13px]")

    with open(script_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {script_path} with 3-stats and high contrast styling.")

if __name__ == "__main__":
    clean_markdown_files()
    update_batch_convert_script("/Users/huynhtronghieu/Documents/thericetour/.agents/plugins/module-editorial-pipeline/scripts/batch_convert.cjs")
    update_batch_convert_script("/Users/huynhtronghieu/Documents/thericetour/.agents/plugins/module-editorial-pipeline/scripts/batch_convert.js")
    
    # Run node batch_convert.cjs to generate demo-articles.ts
    print("Running batch_convert.cjs...")
    subprocess.run(["node", "/Users/huynhtronghieu/Documents/thericetour/.agents/plugins/module-editorial-pipeline/scripts/batch_convert.cjs"], check=True)
    print("Batch convert completed successfully.")
