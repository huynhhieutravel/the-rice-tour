-- ==============================================================================
-- THE RICE TOUR - SEED DATA FOR INBOUND VIETNAM TRAVEL
-- ==============================================================================

-- 1. Initial Admin User (username: admin, password: admin123)
INSERT OR REPLACE INTO users (id, username, email, password_hash, role, is_active, failed_login_attempts, created_at)
VALUES (
    'usr_admin_01',
    'admin',
    'admin@thericetour.com',
    '$2b$10$sFXRVvkBoim2uWgvMeJNze1lbiJLZXDBKcbe4jCi1gz4.xg3UN26q',
    'admin',
    1,
    0,
    datetime('now')
);

-- 2. Inbound Destinations (Regions)
INSERT OR REPLACE INTO Country (id, slug, name, continent, featuredImage, description, bestTimeToVisit, visaRequirement, currency, metaTitle, metaDescription, display_order) VALUES
('dest_north', 'north-vietnam', 'North Vietnam (Hanoi, Ha Long, Sapa)', 'Asia', 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80', 'Dramatic limestone karsts, thousands-year history of Hanoi, and mountain ethnic trails.', 'October to April', 'E-visa (90 days)', 'USD', 'North Vietnam Bespoke Tours | The Rice Tour', 'Explore northern Vietnam from Hanoi Old Quarter to Lan Ha Bay cruises.', 1),
('dest_central', 'central-vietnam', 'Central Vietnam (Hue, Hoi An, Da Nang)', 'Asia', 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80', 'Lantern-lit ancient towns, imperial culinary dynasties, and secluded golden coastlines.', 'February to August', 'E-visa (90 days)', 'USD', 'Central Vietnam Heritage Tours | The Rice Tour', 'Discover ancient Hoi An, Hue Citadel, and Da Nang coastlines.', 2),
('dest_south', 'south-vietnam', 'South Vietnam (Saigon, Mekong Delta)', 'Asia', 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80', 'The bustling metropolis of Saigon and idyllic coconut riverways of the Mekong.', 'November to April', 'E-visa (90 days)', 'USD', 'South Vietnam & Mekong Tours | The Rice Tour', 'Immerse in Saigon history, Cu Chi tunnels, and Mekong floating markets.', 3),
('dest_mekong', 'mekong-delta', 'Mekong Delta Waterways', 'Asia', 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80', 'Life on the water with morning floating markets, orchard homestays, and tranquil sampan rides.', 'Year-round', 'E-visa (90 days)', 'USD', 'Mekong Delta Private River Journeys | The Rice Tour', 'Cruise the serene waterways and floating markets of the Mekong Delta.', 4),
('dest_sapa', 'sapa-mountains', 'Sapa & Northern Highlands', 'Asia', 'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=1200&q=80', 'Cascading emerald rice terraces, cool mist mountains, and colorful Hmong hill tribe markets.', 'September to November', 'E-visa (90 days)', 'USD', 'Sapa Mountain Treks & Homestays | The Rice Tour', 'Trek through emerald terraced valleys and stay in boutique highland lodges.', 5),
('dest_halong', 'ha-long-bay', 'Ha Long & Lan Ha Bay', 'Asia', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', 'Emerald waters dotted with thousands of limestone karst pillars and secluded sea lagoons.', 'October to May', 'E-visa (90 days)', 'USD', 'Ha Long & Lan Ha Luxury Cruises | The Rice Tour', 'Private boutique luxury sailing through pristine limestone caves and lagoons.', 6);

-- 2.1 Tour-Country Relationship
INSERT OR REPLACE INTO TourCountry (tour_id, country_slug, display_order) VALUES
('tour_grand_vietnam', 'north-vietnam', 1),
('tour_grand_vietnam', 'central-vietnam', 2),
('tour_grand_vietnam', 'south-vietnam', 3),
('tour_sapa_trek', 'north-vietnam', 1),
('tour_sapa_trek', 'sapa-mountains', 2),
('tour_mekong_river', 'south-vietnam', 1),
('tour_mekong_river', 'mekong-delta', 2);

-- 3. Inbound Blog Categories
INSERT OR REPLACE INTO BlogCategory (id, name, slug, description, priority) VALUES
('cat_guides', 'Destination Guides', 'travel-guides', 'Comprehensive travel guides to Vietnam top destinations', 90),
('cat_culture', 'Culture & Heritage', 'culture-heritage', 'Deep dive into Vietnamese folklore, history, and traditions', 80),
('cat_food', 'Food & Culinary', 'food-culinary', 'Authentic street food, coffee culture, and cooking experiences', 70),
('cat_tips', 'Practical Travel Tips', 'travel-tips', 'Visa, currency, transport, packing, and safety advice', 60);

-- 4. Blog Posts
INSERT OR REPLACE INTO Post (id, title, slug, categoryId, featuredImage, excerpt, content, type, status, author, readingTime, seoTitle, seoDescription) VALUES
(
    'post_visa_2026',
    'The Ultimate Vietnam E-Visa Guide 2026: Everything Foreign Travelers Need to Know',
    'vietnam-visa-guide-2026',
    'cat_tips',
    'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    'A complete step-by-step guide to applying for a 90-day Vietnam e-visa, entry requirements, port of entry details, and common pitfalls to avoid.',
    '<div class="prose max-w-none"><p>Planning your dream journey to Vietnam? Securing your visa is the first essential step. Since Vietnam extended its e-visa duration to 90 days with multiple entries for all countries, exploring from the northern limestone karsts to the southern waterways has never been easier.</p><h2>1. Who is Eligible for Vietnam E-Visa?</h2><p>Citizens of all countries and territories are eligible to apply for a 90-day single or multiple-entry e-visa directly through the official Vietnam Immigration portal.</p><h2>2. Essential Documents Needed</h2><ul><li>Valid passport with at least 6 months validity from entry date.</li><li>Digital passport photo (4x6cm, white background, no glasses).</li><li>Credit card for payment ($25 USD single entry / $50 USD multiple entry).</li><li>Confirmed arrival port (airport, land border, or seaport).</li></ul></div>',
    'blog',
    'published',
    'The Rice Tour Editorial',
    6,
    'Vietnam E-Visa Guide 2026 - The Rice Tour',
    'Complete 2026 Vietnam e-visa application walkthrough, requirements, fees, and processing times.'
),
(
    'post_best_time',
    'Best Time to Visit Vietnam: Month-by-Month Weather & Regional Travel Guide',
    'best-time-to-visit-vietnam',
    'cat_tips',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
    'Discover the best months to experience golden rice harvest in Sapa, calm emerald waters in Ha Long Bay, and sunny beaches in Hoi An.',
    '<div class="prose max-w-none"><p>Because Vietnam stretches over 1,650 km from North to South, its climate varies dramatically across three distinct micro-climates: North, Central, and South. When it is chilly in the northern peaks of Sapa, it can be wonderfully sunny and warm on the southern beaches of Phu Quoc.</p><h2>Spring (February to April): Ideal Countrywide</h2><p>Spring is arguably the best overall season to travel across Vietnam with mild temperatures, low rainfall, and blooming flora.</p><h2>Autumn (September to November): The Golden Season</h2><p>Witness the awe-inspiring golden rice terraces in Mu Cang Chai and Sapa, accompanied by crystal clear skies in Ha Long Bay.</p></div>',
    'blog',
    'published',
    'The Rice Tour Editorial',
    7,
    'Best Time to Visit Vietnam - Month by Month Guide',
    'When to visit Vietnam for ideal weather in Hanoi, Ha Long Bay, Hoi An, and Saigon.'
);

-- 5. Inbound Signature Tours
INSERT OR REPLACE INTO Tour (
    id, wp_id, title, slug, country_slug, excerpt, price_number, price_text, days, featuredImage, seoTitle, seoDescription, status, content
) VALUES
(
    'tour_grand_vietnam',
    101,
    'Grand Vietnam Discovery: North to South Expedition (14 Days)',
    'grand-vietnam-discovery-14d13n',
    'north-vietnam',
    'Experience the essence of Vietnam on an immersive 14-day voyage from the thousand-year-old capital Hanoi, majestic Ha Long Bay, imperial Hue, lantern-lit Hoi An, vibrant Saigon to the fertile Mekong Delta.',
    1850,
    '$1,850 USD',
    '14 Days / 13 Nights',
    'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    'Grand Vietnam Discovery 14 Days Tour | The Rice Tour',
    'The definitive 14-day private guided journey across Vietnam highlights with boutique 4-5 star accommodations.',
    'published',
    '<div class="elementor-tour-wrapper custom-tour-layout max-w-[1200px] mx-auto px-4 py-8 lg:py-12">
      <div class="tour-grid-container">
        <div class="tour-main-col">
          <section class="tour-highlights-section mb-10">
            <h2 class="text-2xl font-bold text-slate-800 mb-6">Trip Highlights</h2>
            <div class="highlights-list">
              <div class="highlight-list-item"><span class="highlight-text"><strong>Hanoi Old Quarter & Culinary Safari:</strong> Sample authentic Pho, Egg Coffee, and Bun Cha in hidden alleys.</span></div>
              <div class="highlight-list-item"><span class="highlight-text"><strong>Lan Ha & Ha Long Bay 5-Star Cruise:</strong> Overnight aboard a luxury boutique cruise with kayaking & cave exploration.</span></div>
              <div class="highlight-list-item"><span class="highlight-text"><strong>Ancient Heritage in Central Vietnam:</strong> Explore Hue Imperial Citadel and stroll through UNESCO Hoi An Ancient Town.</span></div>
              <div class="highlight-list-item"><span class="highlight-text"><strong>Mekong Delta Waterways:</strong> Cruise along coconut canals, visit floating markets, and cycle through tranquil orchard villages.</span></div>
            </div>
          </section>
          
          <div class="premium-quote-box my-8 p-6 bg-amber-50 rounded-2xl border border-amber-200">
            <p class="quote-text italic text-amber-900 font-serif text-lg text-center">"Vietnam is not just a destination; it is a tapestry of warm smiles, timeless heritage, and unforgettable flavors."</p>
          </div>

          <section class="tour-itinerary-section mb-12">
            <h2 class="text-2xl font-bold text-slate-800 mb-6">Detailed Day-by-Day Itinerary</h2>
            <div class="flex flex-col gap-4">
              <details class="premium-itinerary-item bg-white p-5 rounded-2xl border border-slate-200 shadow-sm" open>
                <summary class="font-bold text-slate-900 cursor-pointer text-lg">Day 1: Welcome to Hanoi — The Heart of Vietnam</summary>
                <div class="mt-4 text-slate-700 leading-relaxed"><p>Arrive at Noi Bai International Airport (HAN). Your private private guide and driver warmly greet you and transfer to your boutique hotel in the French Quarter. Evening welcome street food walk.</p></div>
              </details>
              <details class="premium-itinerary-item bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <summary class="font-bold text-slate-900 cursor-pointer text-lg">Day 2: Hanoi Historical Treasures & Coffee Culture</summary>
                <div class="mt-4 text-slate-700 leading-relaxed"><p>Visit the Temple of Literature (Vietnam first university), Ho Chi Minh Mausoleum complex, and the scenic West Lake. Enjoy a signature Vietnamese Egg Coffee in a historic balcony cafe.</p></div>
              </details>
              <details class="premium-itinerary-item bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <summary class="font-bold text-slate-900 cursor-pointer text-lg">Day 3-4: Ha Long & Lan Ha Bay Overnight Luxury Cruise</summary>
                <div class="mt-4 text-slate-700 leading-relaxed"><p>Board a luxury 5-star boutique ship. Sail past thousand-year karst peaks, kayak through hidden lagoons, swim in tranquil emerald waters, and enjoy a sunset cocktail party on the sundeck.</p></div>
              </details>
            </div>
          </section>

          <section class="tour-faq-wrapper mb-12">
            <h2 class="text-2xl font-bold text-slate-800 mb-6">Inclusions & Practical Info</h2>
            <div class="flex flex-col gap-4">
              <details open class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <summary class="font-bold text-emerald-800 cursor-pointer text-lg">✓ What is Included</summary>
                <ul class="mt-3 list-disc pl-5 text-slate-700 space-y-2">
                  <li><strong>Accommodation:</strong> 13 nights in hand-picked 4-5 star boutique hotels & luxury cruise.</li>
                  <li><strong>Transportation:</strong> Private air-conditioned vehicle throughout the journey + domestic flights (HAN-HUI, DAD-SGN).</li>
                  <li><strong>Expert Guides:</strong> 100% fluent English-speaking certified local tour experts.</li>
                  <li><strong>Meals:</strong> All breakfasts, 8 authentic lunches, and special welcome & farewell dinners.</li>
                  <li><strong>All Sightseeing:</strong> Entrance fees, boat excursions, sampan rides, and culinary tastings.</li>
                </ul>
              </details>
              <details class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                <summary class="font-bold text-slate-800 cursor-pointer text-lg">✕ What is Excluded</summary>
                <ul class="mt-3 list-disc pl-5 text-slate-700 space-y-2">
                  <li>International flights to/from Vietnam.</li>
                  <li>Vietnam e-visa fee ($25 USD).</li>
                  <li>Travel insurance (mandatory for all international guests).</li>
                  <li>Personal expenses, alcoholic beverages, and tipping for guide/driver.</li>
                </ul>
              </details>
            </div>
          </section>
        </div>
      </div>
    </div>'
),
(
    'tour_sapa_trek',
    102,
    'Sapa Majestic Rice Terraces & Hill Tribe Heritage (4 Days)',
    'sapa-rice-terraces-trek-4d3n',
    'sapa-mountains',
    'Trek through the world-famous carved mountain terraces of Muong Hoa valley, stay at an eco-lodge with panoramic vistas, and connect with Black Hmong & Red Dao ethnic communities.',
    420,
    '$420 USD',
    '4 Days / 3 Nights',
    'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    'Sapa Rice Terraces Trek 4 Days | The Rice Tour',
    'Authentic Sapa trekking tour with mountain eco-lodges, private guide, and scenic hill tribe trails.',
    'published',
    '<div class="elementor-tour-wrapper custom-tour-layout max-w-[1200px] mx-auto px-4 py-8 lg:py-12">
      <div class="tour-main-col">
        <h2 class="text-2xl font-bold text-slate-800 mb-6">Highlights of Sapa</h2>
        <div class="highlights-list mb-8">
          <div class="highlight-list-item"><span class="highlight-text"><strong>Muong Hoa Valley Trek:</strong> Marvel at cascading green and golden rice terraces.</span></div>
          <div class="highlight-list-item"><span class="highlight-text"><strong>Red Dao Herbal Bath:</strong> Rejuvenate with ancient medicinal herbal soak overlooking the mist.</span></div>
          <div class="highlight-list-item"><span class="highlight-text"><strong>Boutique Mountain Lodge:</strong> Sleep with sweeping views of the Hoang Lien Son range.</span></div>
        </div>
      </div>
    </div>'
),
(
    'tour_mekong_waterways',
    103,
    'Authentic Mekong Delta Waterways & Floating Market (3 Days)',
    'mekong-delta-floating-life-3d2n',
    'mekong-delta',
    'Escape the city hustle to cruise the labyrinth of lush green canals, witness bustling floating markets at dawn, taste tropical fruits right from local orchards, and stay in charming riverside villas.',
    360,
    '$360 USD',
    '3 Days / 2 Nights',
    'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80',
    'Mekong Delta 3 Days Tour | The Rice Tour',
    'Private bespoke Mekong Delta boat journey with floating market sunrise and boutique riverside lodge.',
    'published',
    '<div class="elementor-tour-wrapper custom-tour-layout max-w-[1200px] mx-auto px-4 py-8 lg:py-12">
      <div class="tour-main-col">
        <h2 class="text-2xl font-bold text-slate-800 mb-6">Mekong Highlights</h2>
        <div class="highlights-list mb-8">
          <div class="highlight-list-item"><span class="highlight-text"><strong>Cai Rang Floating Market:</strong> Witness hundreds of boats trading fresh produce at dawn.</span></div>
          <div class="highlight-list-item"><span class="highlight-text"><strong>Hand-rowed Sampan Ride:</strong> Drift under shaded water coconut palms.</span></div>
          <div class="highlight-list-item"><span class="highlight-text"><strong>Farm-to-Table Dining:</strong> Savor giant elephant ear fish, fresh spring rolls, and crispy Banh Xeo.</span></div>
        </div>
      </div>
    </div>'
);

-- 6. Site Settings (Key-Value)
INSERT OR REPLACE INTO SiteSetting (key, value, version) VALUES
('company', '{"name":"The Rice Tour","tagline":"Authentic Vietnam Inbound Journeys & Bespoke Experiences","license":"International Tour Operator License No. 79-1234/TCDL-GP LHQT","foundedYear":2018,"headquarters":"Hanoi & Ho Chi Minh City, Vietnam"}', 1),
('contact', '{"email":"hello@thericetour.com","phone":"+84 909 123 456","whatsapp":"+84909123456","supportHours":"24/7 Dedicated Inbound Concierge","address":"18 Ngo Quyen Street, Hoan Kiem District, Hanoi, Vietnam"}', 1),
('social', '{"whatsapp":"https://wa.me/84909123456","instagram":"https://instagram.com/thericetour","facebook":"https://facebook.com/thericetour","tripadvisor":"https://tripadvisor.com/thericetour","youtube":"https://youtube.com/@thericetour"}', 1),
('currency', '{"primary":"USD","symbol":"$","exchangeRateVnd":25400,"accepted":["USD","EUR","GBP","AUD"]}', 1);

-- 7. Link Manager (Short URL redirects)
INSERT OR REPLACE INTO Link (slug, label, url, statusCode, isActive) VALUES
('whatsapp', 'Direct WhatsApp Concierge', 'https://wa.me/84909123456?text=Hi%20The%20Rice%20Tour,%20I%20would%20like%20to%20inquire%20about%20traveling%20to%20Vietnam', 302, 1),
('brochure', '2026 Inbound Travel Brochure PDF', 'https://thericetour.com/brochure-2026.pdf', 302, 1),
('tripadvisor', 'TripAdvisor Reviews & Ratings', 'https://tripadvisor.com', 302, 1),
('inquire', 'Custom Tailor-made Trip Form', '/tailor-made', 302, 1);

-- 8. Snippets
INSERT OR REPLACE INTO Snippet (slug, name, description, html_content, type, status) VALUES
(
    'trip-planner-box',
    'Inbound Trip Planner Box',
    'Custom tour planner callout for foreign travelers',
    '<div class="trip-planner-callout p-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-2xl shadow-md my-8 flex flex-col md:flex-row items-center justify-between gap-6"><div><h3 class="text-xl font-bold mb-1">Want a 100% Tailored Itinerary?</h3><p class="text-amber-100 text-sm">Let our Vietnam travel specialists design your bespoke journey with hand-picked hotels and private experiences.</p></div><a href="/tailor-made" class="px-6 py-3 bg-slate-900 hover:bg-black text-white font-bold text-sm rounded-xl transition-all shadow whitespace-nowrap">Design My Trip →</a></div>',
    'general',
    1
),
(
    'trust-badge-box',
    'International Trust Badges',
    'TripAdvisor, Responsible Tourism, 24/7 Concierge',
    '<div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 text-center"><div class="p-4 bg-slate-50 rounded-xl border border-slate-200"><div class="text-2xl font-bold text-amber-600">5.0 ★</div><div class="text-xs text-slate-600 mt-1">TripAdvisor Rating</div></div><div class="p-4 bg-slate-50 rounded-xl border border-slate-200"><div class="text-2xl font-bold text-emerald-600">100%</div><div class="text-xs text-slate-600 mt-1">Tailor-Made</div></div><div class="p-4 bg-slate-50 rounded-xl border border-slate-200"><div class="text-2xl font-bold text-blue-600">24/7</div><div class="text-xs text-slate-600 mt-1">VIP Concierge</div></div><div class="p-4 bg-slate-50 rounded-xl border border-slate-200"><div class="text-2xl font-bold text-purple-600">Eco</div><div class="text-xs text-slate-600 mt-1">Sustainable Travel</div></div></div>',
    'general',
    1
);
