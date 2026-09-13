import re

featured_images = {
    "things-to-do-near-ben-thanh-market": "https://media.thericetour.com/uploads/ben-thanh-market-clock-tower.webp",
    "hcmc-museum-of-fine-arts-guide": "https://media.thericetour.com/uploads/ho-chi-minh-city-museum-of-fine-arts.webp",
    "ben-thanh-market-food-guide": "https://media.thericetour.com/uploads/ben-thanh-market-street-food.webp",
    "ben-thanh-one-day-walking-tour": "https://media.thericetour.com/uploads/central-ho-chi-minh-city-street-scene.webp",
    "independence-palace-saigon-guide": "https://media.thericetour.com/uploads/reunification-palace-saigon.webp",
    "ben-thanh-central-metro-station-guide": "https://media.thericetour.com/uploads/ben-thanh-metro-station-circular-entrance.webp",
    "mariamman-hindu-temple-saigon": "https://media.thericetour.com/uploads/mariamman-hindu-temple-saigon.webp",
    "ben-thanh-market-shopping-guide": "https://media.thericetour.com/uploads/ben-thanh-market-shopping.webp",
    "saigon-hop-on-hop-off-bus-guide": "https://media.thericetour.com/uploads/saigon-hop-on-hop-off-bus.webp",
    "secret-apartment-cafes-near-ben-thanh": "https://media.thericetour.com/uploads/apartment-cafe.webp",
    "best-rooftop-bars-near-ben-thanh": "https://media.thericetour.com/uploads/rooftop-bar-ben-thanh-market-view.webp",
    "boutique-hotels-near-ben-thanh": "https://media.thericetour.com/uploads/hotel-continental-saigon.webp",
    "things-to-do-in-ben-thanh-market": "https://media.thericetour.com/uploads/ben-thanh-market-atmosphere.webp",
    "ben-thanh-market-ultimate-travel-guide": "https://media.thericetour.com/uploads/ben-thanh-market-main-gate.webp",
    "ben-thanh-market-scams-safety-guide": "https://media.thericetour.com/uploads/ben-thanh-market-tourist-tips.webp",
    "money-exchange-ben-thanh-ha-tam-guide": "https://media.thericetour.com/uploads/currency-exchange-near-ben-thanh-market-1.webp",
    "parking-guide-near-ben-thanh-market": "https://media.thericetour.com/uploads/ben-thanh-market-motorbike-parking.webp",
    "tan-son-nhat-airport-to-ben-thanh-transfer-guide": "https://media.thericetour.com/uploads/tan-son-nhat-airport.webp"
}

for script_path in [
    '.agents/plugins/module-editorial-pipeline/scripts/batch_convert.cjs',
    '.agents/plugins/module-editorial-pipeline/scripts/batch_convert.js'
]:
    with open(script_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add featuredImage to articleMetadata
    for slug, img_url in featured_images.items():
        pattern = f'("{slug}":\\s*\\{{)'
        replacement = f'\\1\n    featuredImage: "{img_url}",'
        content = re.sub(pattern, replacement, content)

    # Add featuredImage resolution in processMarkdownToMagazineHtml
    pubdate_pattern = r'(const pubDate = fm\.published_date.*?;)'
    featured_res = '\n  const featuredImage = meta.featuredImage || fm.featured_image || "https://media.thericetour.com/uploads/ben-thanh-market-clock-tower.webp";'
    if 'const featuredImage =' not in content:
        content = re.sub(pubdate_pattern, r'\1' + featured_res, content)

    # Replace Hero background in fullHtml
    old_hero_bg = '''    <section class="relative w-full min-h-[550px] lg:min-h-[650px] overflow-hidden flex flex-col justify-center pt-32 pb-20 bg-slate-950">
      <div class="absolute inset-0 z-0 bg-gradient-to-br from-slate-950 via-[#1a1c23] to-[#0f172a]">
        <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
      </div>'''

    new_hero_bg = '''    <section class="relative w-full min-h-[550px] lg:min-h-[650px] overflow-hidden flex flex-col justify-center pt-32 pb-20 bg-slate-950">
      <div class="absolute inset-0 z-0">
        <img 
          src="${featuredImage}" 
          alt="${title}" 
          class="w-full h-full object-cover object-center scale-105 transform filter brightness-60 contrast-105"
          loading="eager"
          fetchpriority="high"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30"></div>
      </div>'''

    content = content.replace(old_hero_bg, new_hero_bg)

    with open(script_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Updated {script_path}')

