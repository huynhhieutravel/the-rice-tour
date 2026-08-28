// Canonical 3-Column Magazine Articles (National Geographic / Travel + Leisure Style)

export const happyLandBenLucTravelGuideHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">Happy Land Bến Lức: Current Status, Ticketing & 2026 Travel Updates</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          Happy Land Bến Lức: Current Status, Ticketing & 2026 Travel Updates
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          Current Status, Ticketing Realities & 2026 Travel Updates
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          Once envisioned as the 'Land of Happiness' along the untamed waters of the Vàm Cỏ Đông river, the Happy Land Entertainment Complex has weathered significant turbulence. As of 2026, this grand project no longer operates as a regular tourist attraction for individual travelers.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Aug 12, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">8 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">📍</span> Binh Duc, Tay Ninh
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🚫</span> Closed to Public
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🎟️</span> Private Events Only
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">⚠️</span> 2026 Travel Warning
    </div>
  
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
                  <a href="#the-reality-of-happy-land-entertainment-complex-in-2026" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Reality of Happy Land Entertainment Complex in 2026</a>
  <a href="#is-happy-land-still-open-to-the-public" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Is Happy Land Still Open to the Public?</a>
  <a href="#updated-administrative-coordinates-since-2025" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Updated Administrative Coordinates (Since 2025)</a>
  <a href="#echoes-of-a-miniature-vietnam" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Echoes of a "Miniature Vietnam"</a>
  <a href="#architectural-replicas-of-the-north-and-central-regions" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Architectural Replicas of the North and Central Regions</a>
  <a href="#the-soul-of-the-southern-riverine" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Soul of the Southern Riverine</a>
  <a href="#at-a-glance-then-vs-now" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">At a Glance: Then vs. Now</a>
  <a href="#field-notes-and-travel-warnings" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Field Notes & Travel Warnings</a>
  <a href="#epilogue" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Epilogue</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">New Coordinates</div>
        <div class="text-[13px] font-bold text-slate-900">Binh Duc, Tay Ninh</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🚫</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">2026 Status</div>
        <div class="text-[13px] font-bold text-slate-900">Closed to Individuals</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Ticketing / Access</div>
        <div class="text-[13px] font-bold text-slate-900">Private Events Only</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⚠️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Travel Advisory</div>
        <div class="text-[13px] font-bold text-slate-900">Verify Before Visiting</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            <hr>
<ul>
<li><strong>Current Location:</strong> Binh Duc Commune, Tay Ninh Province (updated administrative address following the 2025 redistricting).</li>
<li><strong>Status (2026):</strong> <strong>Permanently closed to independent travelers.</strong></li>
<li><strong>Admission / Hours:</strong> Not applicable (no official announcements).</li>
<li><strong>Travel Advisory:</strong> Do not attempt unauthorized visits or wire money for tickets through unverified third parties.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-reality-of-happy-land-entertainment-complex-in-2026" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            The Reality of Happy Land Entertainment Complex in 2026
          </h2>
        </div>
      <p>Once envisioned as the &quot;Land of Happiness&quot; along the untamed waters of the Vàm Cỏ Đông river, the <strong>Happy Land Entertainment Complex</strong> (formerly situated in Ben Luc District, Long An) has weathered significant turbulence. As of 2026, this grand project <strong>no longer operates as a regular tourist attraction for individual travelers</strong>.</p>
<p>For those mapping out a contemplative journey through the Mekong Delta or seeking a weekend retreat near Ho Chi Minh City, staying abreast of these operational shifts is paramount to preserving the rhythm of your itinerary.</p>

        <h3 id="is-happy-land-still-open-to-the-public" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Is Happy Land Still Open to the Public?
        </h3>
      <p>The short answer is: <strong>No.</strong> While the complex briefly opened its gates for a short-lived event early in 2026, no fixed operational schedules have been established since.</p>
<p>The project is currently undergoing a prolonged phase of restructuring and legal enforcement. Recent field observations reveal that vast sections of the interior lie dormant, with creeping signs of decay due to a lack of routine maintenance. Though this does not spell permanent closure, Happy Land is currently entirely unsuited for inclusion in any bespoke voyage.</p>

        <h3 id="updated-administrative-coordinates-since-2025" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Updated Administrative Coordinates (Since 2025)
        </h3>
      <p>Should you consult older travel logs, Happy Land&#39;s address is often listed as: <em>Thanh Duc Commune, Ben Luc District, Long An Province</em>.</p>
<p>However, following a major administrative reshuffle in 2025, the regional boundaries were drastically redrawn. The former Thanh Duc Commune, along with neighboring areas, was consolidated, and the project&#39;s precise coordinates now fall within: <strong>Binh Duc Commune, Tay Ninh Province</strong>. Understanding this geographical shift is crucial for accurate navigation and mapping.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="echoes-of-a-miniature-vietnam" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            Echoes of a "Miniature Vietnam"
          </h2>
        </div>
      <p>Though its gates remain shut, Happy Land once boasted a sprawling &quot;Vietnamese Cultural Zone,&quot; meticulously reconstructing iconic architectural marvels from the North, Central, and South regions. Below is a glimpse into the cultural legacy that once animated this space.</p>

        <h3 id="architectural-replicas-of-the-north-and-central-regions" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Architectural Replicas of the North and Central Regions
        </h3>
      <ul>
<li><strong>One Pillar Pagoda (<em>Chùa Một Cột</em>):</strong> A delicate, scaled-down homage to Hanoi&#39;s timeless symbol, rising serenely from a tranquil lotus pond.</li>
<li><strong>Hoi An Ancient Town:</strong> Rows of mustard-yellow facades, crowned with traditional yin-yang roof tiles and illuminated by the signature crimson lanterns. This enclave once served as a nostalgic sanctuary for photography enthusiasts.</li>
<li><strong>Cham Towers:</strong> A striking recreation of the terracotta brick sanctuaries of the ancient Champa kingdom, echoing the spiritual havens found in Ninh Thuan and Khanh Hoa.</li>
</ul>

        <h3 id="the-soul-of-the-southern-riverine" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The Soul of the Southern Riverine
        </h3>
      <p>The crown jewel of the complex was undoubtedly its tribute to the waterborne culture of the Mekong Delta.</p>
<ul>
<li><strong>Simulated Floating Market:</strong> A vibrant diorama of bustling wooden boats and bamboo poles (<em>cây bẹo</em>) laden with hanging produce. Naturally, this architectural homage could only echo—not fully capture—the raw, chaotic spirit of genuine trading hubs like Cai Rang or Long Xuyen.</li>
<li><strong>Heritage Homes and Rural Landscapes:</strong> Thatched-roof dwellings, precarious monkey bridges (<em>cầu khỉ</em>), and hauntingly beautiful performances of <em>đờn ca tài tử</em> (Southern amateur music) once imbued the space with the serene cadence of delta life.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="at-a-glance-then-vs-now" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            At a Glance: Then vs. Now
          </h2>
        </div>
      <p>To ensure a seamless expedition and mitigate travel risks, we have compiled a comparative overview of Happy Land&#39;s operational status:</p>

      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 text-sm">
          <thead>
            <tr class="bg-slate-900 text-white font-serif">
              <th class="p-4 font-bold text-left">Feature</th><th class="p-4 font-bold text-left">The Golden Era</th><th class="p-4 font-bold text-left">2026 Update</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Public Access</strong></td><td class="p-4">Open daily</td><td class="p-4"><strong>Closed</strong> to independent travelers. Sporadic private events only.</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Admission Fees</strong></td><td class="p-4">Adults: ~180,000 VND<br>Children: ~130,000 VND</td><td class="p-4"><strong>Unpublished.</strong> Exercise extreme caution regarding online ticket vendors.</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Signature Events</strong></td><td class="p-4">Hot air balloon festivals, rally racing, regional cultural shows.</td><td class="p-4">No recurring events are currently scheduled.</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Travel Advisory</strong></td><td class="p-4">An idyllic weekend retreat for families.</td><td class="p-4"><strong>Exclude from itineraries.</strong> Divert to alternative sanctuaries (e.g., Tan Lap Floating Village).</td></tr>

          </tbody>
        </table>
      </div>
    <hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="field-notes-and-travel-warnings" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            2026 Field Notes & Travel Warnings
          </h2>
        </div>
      <p>From the perspective of seasoned expedition leaders, we strongly advise adhering to the following principles if you are drawn to this area:</p>
<ol>
<li><strong>Beware of Unauthorized Ticket Sales:</strong> There is currently no official platform distributing tickets for Happy Land. Refrain from transferring funds or trusting promises made on social media networks.</li>
<li><strong>Do Not Trespass:</strong> As a dormant construction site, navigating unmaintained fences, decaying structures, or unpatrolled lakeside areas poses severe safety risks.</li>
<li><strong>Seek Authentic Alternatives:</strong> If you are yearning for an untamed, flooded ecological haven, <strong>Tan Lap Floating Village</strong> (<em>Làng nổi Tân Lập</em>) offers a breathtaking substitute, featuring vast melaleuca forests, elevated forest walkways, and a consistently high standard of service.</li>
</ol>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="epilogue" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            Epilogue
          </h2>
        </div>
      <p>Accurate intelligence is the compass by which a flawless journey is charted. Given the current stagnation at Happy Land, your time is far better spent exploring uncharted territories—whether delving into the emerald canopy of melaleuca forests or wandering through heavy-laden orchards that pulse with the true heartbeat of the Mekong Delta. Authentic travel is not merely about arriving; it is about choosing the right destination, at the right moment, to experience the raw, unvarnished beauty of the local culture.</p>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: Journeying with Intention</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                The story of Happy Land is a poignant reminder that true cultural immersion cannot be manufactured within theme park boundaries. The genuine soul of Vietnam resides in its living waterways, active artisan looms, and the warm hospitality of riverside communities.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">New Coordinates</div>
        <div class="font-bold text-slate-800 text-[13px]">Binh Duc, Tay Ninh (Post-2025)</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🚫</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Operational Status</div>
        <div class="font-bold text-slate-800 text-[13px]">Permanently Closed to Public</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Alternative Destinations</div>
        <div class="font-bold text-slate-800 text-[13px]">Tan Lap Floating Village, Ben Tre</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">⚠️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Advisory Level</div>
        <div class="font-bold text-slate-800 text-[13px]">Strictly Avoid Unverified Tours</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    

      <a href="/mekong-delta-fruits-harvest-map" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Mekong Delta Fruits Harvest Map: Orchard Coordinates, Seasonal Matrices & 24 Riverine Masterpieces
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/happy-land-ben-luc-travel-guide" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/happy-land-ben-luc-travel-guide');" 
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

export const namDuIslandExpeditionGuideHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">The Ultimate Nam Du Expedition: Logistics, Itineraries & 2026 Travel Field Notes</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          The Ultimate Nam Du Expedition: Logistics, Itineraries & 2026 Travel Field Notes
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          Far removed from the neon corridors of mass tourism, the 21 islands of the Nam Du archipelago emerge from the southwestern gulf as a rugged sanctuary of limestone cliffs, crystalline turquoise waters, and ancient seafaring traditions.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Aug 12, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">14 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏝️</span> 21 Southwestern Islands
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🛥️</span> Superdong & Phu Quoc Link
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🐠</span> Hon Mau & Hon Dau Corals
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Untamed Field Notes
    </div>
  
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
                  <a href="#nam-du-an-untamed-sanctuary-in-the-southwestern-sea" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Nam Du - An Untamed Sanctuary in the Southwestern Sea</a>
  <a href="#administrative-note-post-redistricting-update" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Administrative Note (Post-Redistricting Update)</a>
  <a href="#transit-guide-setting-sail" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Transit Guide: Setting Sail</a>
  <a href="#from-rach-gia-to-nam-du" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">From Rach Gia to Nam Du</a>
  <a href="#the-phu-quoc-nam-du-connection" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Phu Quoc – Nam Du Connection</a>
  <a href="#unveiling-the-archipelago-key-landfalls" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Unveiling the Archipelago: Key Landfalls</a>
  <a href="#bai-chet-hon-lon-the-logistical-hub" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Bai Chet (Hon Lon) – The Logistical Hub</a>
  <a href="#bai-cay-men-the-tranquil-cove" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Bai Cay Men – The Tranquil Cove</a>
  <a href="#hon-mau-and-hon-dau-coral-sanctuaries" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Hon Mau & Hon Dau – Coral Sanctuaries</a>
  <a href="#hon-ngang-the-voice-of-the-fishing-village" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Hon Ngang – The Voice of the Fishing Village</a>
  <a href="#recommended-3-day-2-night-itinerary" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Recommended 3-Day, 2-Night Itinerary</a>
  <a href="#survival-guide-and-budgeting" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Survival Guide & Budgeting</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">The Archipelago</div>
        <div class="text-[13px] font-bold text-slate-900">An Son (Kien Giang / Southwest Sea)</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🌤️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Golden Season</div>
        <div class="text-[13px] font-bold text-slate-900">December – April (Calm Sea)</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🛥️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Transit Time</div>
        <div class="text-[13px] font-bold text-slate-900">2h from Rach Gia Port</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">2026 Tariff Baseline</div>
        <div class="text-[13px] font-bold text-slate-900">2,000,000 – 3,500,000 VND (3D2N)</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            <hr>
<ul>
<li><strong>Geographical Coordinates (2026 Update):</strong> Kien Hai Special District, An Giang Province (Note: Formerly under Kien Giang Province).</li>
<li><strong>Optimal Season:</strong> December to March (Calm seas, radiant sunlight, and minimal storm risk).</li>
<li><strong>Gateway:</strong> Rach Gia Port (Accessible via a 2–2.5 hour high-speed ferry ride).</li>
<li><strong>Recommended Duration:</strong> 3 Days 2 Nights (Allowing a buffer for weather-induced ferry delays).</li>
<li><strong>Physical Demands:</strong> Moderate (Suitable for most ages, though resilience against seasickness is advised).</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="nam-du-an-untamed-sanctuary-in-the-southwestern-sea" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            Nam Du - An Untamed Sanctuary in the Southwestern Sea
          </h2>
        </div>
      <p>The Nam Du Archipelago comprises 21 scattered islands and islets resting in the tranquil expanse of Vietnam&#39;s southwestern waters. In stark contrast to the frenetic pace and rampant commercialization of neighboring destinations, Nam Du preserves the rugged authenticity of a coastal fishing village, defined by pristine coral reefs, dramatic rocky outcrops, and coconut palms swaying in the maritime breeze.</p>
<p>Hon Lon (also known as Cu Tron) serves as the beating heart of the archipelago, anchoring the primary harbor, accommodations, and culinary hubs. From Hon Lon, a network of fishing boats and speedboats branches out, connecting travelers to lesser-known, untamed paradises such as Hon Mau, Hon Dau, Hon Ngang, and Hai Bo Dap.</p>

        <h3 id="administrative-note-post-redistricting-update" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Administrative Note (Post-Redistricting Update)
        </h3>
      <p>Amidst sweeping geographical reclassifications, <strong>the Nam Du Archipelago now falls under the Kien Hai Special District, An Giang Province</strong>. While older travel maps and faded local signboards may still display &quot;Kien Giang Province,&quot; it is essential to use the updated administrative details when researching legalities, making bookings, or purchasing ferry tickets. The actual maritime distance from Rach Gia Port to the An Son – Nam Du area is approximately 90 kilometers.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="transit-guide-setting-sail" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            2026 Transit Guide: Setting Sail
          </h2>
        </div>
      <p>Embarking on a journey to Nam Du demands meticulous planning, particularly regarding ferry schedules and an acquired tolerance for the ocean&#39;s swell.</p>

        <h3 id="from-rach-gia-to-nam-du" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          From Rach Gia to Nam Du
        </h3>
      <p>This remains the most popular and efficient maritime route. Superdong is currently the primary operator, with voyage times ranging from 2 to 2.5 hours, heavily dependent on sea conditions.</p>
<p><strong>High-Speed Ferry Fares (Rach Gia – Nam Du, effective from June 20, 2026):</strong></p>

      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 text-sm">
          <thead>
            <tr class="bg-slate-900 text-white font-serif">
              <th class="p-4 font-bold text-left">Passenger Category</th><th class="p-4 font-bold text-left">One-Way Fare (VND)</th><th class="p-4 font-bold text-left">Notes</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Adults</strong></td><td class="p-4">245,455 VND</td><td class="p-4">Original ID card required</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Seniors (60+ years)</strong></td><td class="p-4">207,163 VND</td><td class="p-4">Proof of age required</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Children (6 - under 12 years)</strong></td><td class="p-4">183,600 VND</td><td class="p-4">Children under 6 (sharing a seat) travel free</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Passengers with Disabilities</strong></td><td class="p-4">183,600 VND</td><td class="p-4">Subject to supporting policies</td></tr>

          </tbody>
        </table>
      </div>
    <p><strong>Standard Departure Schedule:</strong></p>
<ul>
<li><strong>Rach Gia to Nam Du:</strong> Typically departs at 07:30 and 08:30 AM.</li>
<li><strong>Nam Du to Rach Gia:</strong> Departs at 11:00 AM and 11:50 AM.</li>
</ul>
<p><em>Field Note:</em> Departure times indicate when the vessel lifts its anchor. You must arrive at the port at least 45 minutes prior for document verification. Crucially, schedules are subject to unannounced changes or total cancellations dictated by the port authority&#39;s weather forecasts.</p>

        <h3 id="the-phu-quoc-nam-du-connection" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The Phu Quoc – Nam Du Connection
        </h3>
      <p>For voyagers aiming to craft a comprehensive loop of the southwestern islands, the Phu Quoc – Nam Du route offers a morning departure at 08:00 AM and a return leg at 2:00 PM. Due to time constraints, this route is incompatible with a day trip; a minimum stay of 1 to 2 nights on Nam Du is essential.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="unveiling-the-archipelago-key-landfalls" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            Unveiling the Archipelago: Key Landfalls
          </h2>
        </div>
      
        <h3 id="bai-chet-hon-lon-the-logistical-hub" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Bai Chet (Hon Lon) – The Logistical Hub
        </h3>
      <p>Bai Chet anchors the main pier. The moment you step off the ferry, you are engulfed by the vibrant cacophony of seafood stalls, motorbike rental vendors, and densely packed guesthouses. This enclave acts as an indispensable staging ground. Fill your fuel tank, rehydrate, and procure necessary provisions here before venturing into the more isolated corners of the island.</p>

        <h3 id="bai-cay-men-the-tranquil-cove" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Bai Cay Men – The Tranquil Cove
        </h3>
      <p>Cradled between rocky cliffs and rows of towering, curved coconut palms, Bai Cay Men (<em>Bãi Cây Mến</em>) is widely regarded as the most breathtaking beach on Hon Lon. Stripped of the chaotic energy of Bai Chet, it offers calm waters, gently sloping sands, and an atmosphere isolated enough to escape the midday heat.
<em>Field Tip:</em> The golden hours for this cove are early morning or post 3:30 PM. Refrain from swimming too far from the shore in areas lacking local supervision.</p>

        <h3 id="hon-mau-and-hon-dau-coral-sanctuaries" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Hon Mau & Hon Dau – Coral Sanctuaries
        </h3>
      <p>Joining a shared boat tour to hop between islands is a non-negotiable experience in Nam Du.</p>
<ul>
<li><strong>Hon Mau</strong> unveils small, secluded beaches woven into the fabric of a traditional fishing village. Here, smooth black pebbles gleam beneath crystalline waters, forming a unique coastal ecosystem.</li>
<li><strong>Hon Dau</strong> and <strong>Hai Bo Dap</strong> serve as the coordinates for shallow coral reefs. Armed with a snorkeling mask and a life jacket, you can drift along the surface and observe the kaleidoscopic coral beds below.</li>
</ul>
<p><em>Responsible Travel Warning:</em> It is strictly forbidden to stand on the coral reefs, harvest coral to take ashore, or participate in bringing starfish out of the water for photographs.</p>

        <h3 id="hon-ngang-the-voice-of-the-fishing-village" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Hon Ngang – The Voice of the Fishing Village
        </h3>
      <p>Hon Ngang may lack the allure of white sandy beaches, yet it possesses profound anthropological value. It is the most densely populated enclave, serving as the mooring ground for hundreds of trawlers and fishing vessels. Since 2025, regular ferry connections between Hon Lon and Hon Ngang have transformed this island into an essential stop for documentary photography enthusiasts and those craving the freshest seafood straight from the floating rafts.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="recommended-3-day-2-night-itinerary" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            Recommended 3-Day, 2-Night Itinerary
          </h2>
        </div>
      <p>We highly advise dedicating a full 3 days and 2 nights to Nam Du. The southwestern sea is notorious for sudden, unpredictable swells; a generous time buffer mitigates the risk of missing subsequent travel connections should ferries be grounded.</p>
<p><strong>Day 1: Rach Gia – Hon Lon (Cu Tron)</strong></p>
<ul>
<li><strong>Morning:</strong> Board the Superdong ferry at Rach Gia Port. Dock at Bai Chet, collect your pre-arranged motorbike, and transfer luggage to your homestay.</li>
<li><strong>Afternoon:</strong> Navigate the island’s ring road. Visit Bai Ngu (<em>Bãi Ngự</em>) to absorb the historical lore of King Gia Long, then immerse yourself in the cooling waters of Bai Cay Men.</li>
<li><strong>Evening:</strong> Savor cobia hotpot and grilled sea urchin near the bustling harbor.</li>
</ul>
<p><strong>Day 2: The Inter-Island Odyssey</strong></p>
<ul>
<li><strong>Morning:</strong> Join a local boat or canoe charter heading to Hon Mau. Trek through the fishing village and swim at the black pebble beach.</li>
<li><strong>Noon:</strong> Enjoy a rustic seafood lunch directly aboard the boat or hosted by a local family on Hon Mau.</li>
<li><strong>Afternoon:</strong> Snorkel the reefs at Hai Bo Dap and Hon Dau. The boat anchors offshore, allowing travelers to drift freely with life jackets.</li>
<li><strong>Evening:</strong> Experience nighttime squid fishing with local fishermen (weather permitting), or pitch a tent at Bai Soi (<em>Bãi Sỏi</em>) (prior permission from the beach manager is required).</li>
</ul>
<p><strong>Day 3: The Nam Du Imprint – Return to the Mainland</strong></p>
<ul>
<li><strong>Morning:</strong> Ride to the highest peak of Hon Lon to witness the archipelago emerging through the morning mist. Breakfast on traditional Nam Du fish cake noodle soup (<em>bún chả cá</em>).</li>
<li><strong>Late Morning:</strong> Pack your belongings, purchase dried seafood souvenirs (fish and shrimp) at Bai Chet, and board the ferry back to Rach Gia.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="survival-guide-and-budgeting" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            2026 Survival Guide & Budgeting
          </h2>
        </div>
      <p>To ensure a seamless expedition, adhere to these fundamental principles:</p>
<ol>
<li><strong>Carry Cash:</strong> POS terminals and QR code payments are highly susceptible to fluctuating telecommunication signals. Do not leave yourself financially stranded.</li>
<li><strong>Seasickness Medication:</strong> A 2.5-hour maritime journey can severely test your equilibrium. Administer medication 30 minutes prior to boarding.</li>
<li><strong>Personal Waste Management:</strong> Nam Du is grappling with marine waste disposal. Bring a reusable water bottle, minimize plastic bags, and absolutely never discard refuse into the sea.</li>
</ol>
<p><strong>Baseline Budget Estimate (Per Person, departing from Rach Gia):</strong></p>
<ul>
<li><strong>Round-trip Ferry:</strong> ~490,000 VND</li>
<li><strong>Accommodation (2 nights, shared room):</strong> 400,000 - 800,000 VND</li>
<li><strong>Motorbike Rental (2 days):</strong> 300,000 - 400,000 VND</li>
<li><strong>Inter-island Snorkeling Tour:</strong> ~400,000 VND</li>
<li><strong>Independent Seafood Dining:</strong> 600,000 - 1,000,000 VND</li>
</ul>
<p>The total estimated expenditure ranges from <strong>2,190,000 VND to 3,090,000 VND per person</strong>. This is an exceptionally reasonable investment for an authentic, off-the-grid experience, far removed from urban claustrophobia. Nam Du is not curated for those seeking opulent luxury; it is a sanctuary for souls yearning for the untamed freedom of the open ocean.</p>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: The Raw Soul of the Gulf</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                Nam Du will not cradle you in five-star luxury, but it will reward the conscious voyager with something infinitely rarer: the primal pulse of an open sea, the scent of morning salt on timber decks, and an unhurried intimacy with islanders who still look to the stars to navigate the tide.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">The Archipelago</div>
        <div class="font-bold text-slate-800 text-[13px]">21 Islands, An Son, Kien Giang</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌤️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Ideal Expedition Window</div>
        <div class="font-bold text-slate-800 text-[13px]">Dec to April (Smooth Seas)</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🏊</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Signature Highlights</div>
        <div class="font-bold text-slate-800 text-[13px]">Hon Mau coral dives & Cay Men beach</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🛥️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Maritime Access</div>
        <div class="font-bold text-slate-800 text-[13px]">Express ferry from Rach Gia / Phu Quoc</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/mekong-delta-fruits-harvest-map" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Mekong Delta Fruits Harvest Map: Orchard Coordinates, Seasonal Matrices & 24 Riverine Masterpieces
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/nam-du-island-expedition-guide" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/nam-du-island-expedition-guide');" 
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

export const mekongDeltaFruitsHarvestMapHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">The 24 Signature Fruits of the Mekong Delta: 2026 Harvest Map & Orchard Guide</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          The 24 Signature Fruits of the Mekong Delta: 2026 Harvest Map & Orchard Guide
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          Orchard Coordinates, Seasonal Matrices & 24 Riverine Masterpieces
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          Fed by the ceaseless alluvial embrace of the Mekong and Bassac rivers, the Southern Delta yields the most biodiverse fruit basket in Southeast Asia. This is your definitive 2026 harvest map to navigating orchards across 13 provinces.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Aug 12, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">16 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🍈</span> 24 Iconic Cultivars
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🗺️</span> Alluvial Harvest Map
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏆</span> Protected GI Signatures
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Orchard Field Guide
    </div>
  
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
                  <a href="#the-riverine-orchards-when-is-the-golden-hour" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Riverine Orchards: When is the Golden Hour?</a>
  <a href="#the-harvest-calendar-24-mekong-delta-treasures" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Harvest Calendar: 24 Mekong Delta Treasures</a>
  <a href="#in-depth-tasting-the-must-try-masterpieces" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">In-Depth Tasting: The Must-Try Masterpieces</a>
  <a href="#green-skin-pomelo-the-emerald-of-the-delta" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Green-skin Pomelo – The Emerald of the Delta</a>
  <a href="#ri6-durian-the-king-of-fruits" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Ri6 Durian – The King of Fruits</a>
  <a href="#lo-ren-star-apple-vinh-kim" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Lo Ren Star Apple (Vinh Kim)</a>
  <a href="#macapuno-coconut-tra-vinh" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Macapuno Coconut (Tra Vinh)</a>
  <a href="#ha-chau-burmese-grape-phong-dien" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Ha Chau Burmese Grape (Phong Dien)</a>
  <a href="#lai-vung-pink-mandarin" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Lai Vung Pink Mandarin</a>
  <a href="#soc-trang-purple-longan" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Soc Trang Purple Longan</a>
  <a href="#bay-nui-palmyra-palm" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Bay Nui Palmyra Palm</a>
  <a href="#wild-mangrove-apple-trai-ban" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Wild Mangrove Apple (Trái Bần)</a>
  <a href="#field-guide-orchard-etiquette-and-logistics" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Field Guide: Orchard Etiquette & Logistics</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Heartland Provinces</div>
        <div class="text-[13px] font-bold text-slate-900">Tien Giang, Ben Tre, Can Tho, Vinh Long</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">👑</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Crown Jewel</div>
        <div class="text-[13px] font-bold text-slate-900">Ri6 Durian & Green-skin Pomelo</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🌤️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Peak Harvest</div>
        <div class="text-[13px] font-bold text-slate-900">May – August (Fruit Season)</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🛶</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Tasting Experience</div>
        <div class="text-[13px] font-bold text-slate-900">Tree-to-Palate Boat Orchards</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            <hr>
<ul>
<li><strong>Peak Harvest Season:</strong> May – August (Summer harvest featuring rambutan, durian, and mangosteen).</li>
<li><strong>Primary Geographical Distribution:</strong> Vinh Long, Dong Thap, Can Tho, and Tien Giang (now part of the Dong Thap ecological zone).</li>
<li><strong>Field Experience:</strong> Orchard tours, hands-on harvesting, and farm-to-table tasting sessions.</li>
<li><strong>Travel Advisory:</strong> While administrative boundaries for areas like Tien Giang and Ben Tre underwent restructuring in 2025, their deeply rooted agricultural heritage and unique terroir remain immaculately preserved.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-riverine-orchards-when-is-the-golden-hour" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            The Riverine Orchards: When is the Golden Hour?
          </h2>
        </div>
      <p>In the Mekong Delta, fruit is far more than mere agricultural yield; it is the distilled essence of the Mekong’s nutrient-rich silt, the fertile terroir, and the unwavering dedication of generational farmers. Blessed with a tropical monsoon climate, this riverine expanse yields a vibrant bounty almost year-round.</p>
<p>However, if you are a traveler yearning to witness the orchards at their most magnificent, the window from <strong>May to August</strong> constitutes the &quot;golden hour.&quot; During this summer crescendo, sprawling plantations of durian, rambutan, and mangosteen ripen in unison. As the year wanes and the Lunar New Year approaches, orchards of King oranges and Lai Vung pink mandarins paint the verdant Delta with striking, fiery hues.</p>
<p>Below is an expertly curated guide detailing 24 iconic fruit varieties, their projected harvest seasons, and their renowned geographical coordinates (updated to reflect 2026 administrative boundaries).</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-harvest-calendar-24-mekong-delta-treasures" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            The Harvest Calendar: 24 Mekong Delta Treasures
          </h2>
        </div>
      <p>To optimize your expedition and ensure you arrive at the peak of perfection, utilize this data-driven calendar as your navigational compass:</p>

      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 text-sm">
          <thead>
            <tr class="bg-slate-900 text-white font-serif">
              <th class="p-4 font-bold text-left">Signature Fruit</th><th class="p-4 font-bold text-left">Primary Season (Estimated)</th><th class="p-4 font-bold text-left">Renowned Coordinates (2026 Boundaries)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Green-skin Pomelo (<em>Bưởi da xanh</em>)</strong></td><td class="p-4">Year-round, cyclical peaks</td><td class="p-4">Vinh Long (Formerly Ben Tre area)</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>King Orange / Xoan Orange</strong></td><td class="p-4">Year-end to early year / Year-round</td><td class="p-4">Vinh Long, Can Tho</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Rambutan (<em>Chôm chôm</em>)</strong></td><td class="p-4">May – August</td><td class="p-4">Vinh Long, Dong Thap</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Hoa Loc Sand Mango (<em>Xoài cát Hòa Lộc</em>)</strong></td><td class="p-4">February – May</td><td class="p-4">Dong Thap (Formerly Tien Giang area)</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Lo Ren Star Apple (<em>Vú sữa Lò Rèn</em>)</strong></td><td class="p-4">January – March</td><td class="p-4">Dong Thap (Vinh Kim, formerly Tien Giang)</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Ha Chau Burmese Grape (<em>Dâu Hạ Châu</em>)</strong></td><td class="p-4">5th, 8th, 11th Lunar Months</td><td class="p-4">Phong Dien, Can Tho</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Macapuno Coconut / Green Coconut</strong></td><td class="p-4">Year-round</td><td class="p-4">Vinh Long (Formerly Tra Vinh, Ben Tre)</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Tan Phuoc Pineapple (<em>Khóm Tân Phước</em>)</strong></td><td class="p-4">Year-round</td><td class="p-4">Dong Thap (Formerly Tien Giang area)</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Mangosteen (<em>Măng cụt</em>)</strong></td><td class="p-4">Mid-May – Late June</td><td class="p-4">Vinh Long</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Ri6 Durian (<em>Sầu riêng Ri6</em>)</strong></td><td class="p-4">Summer (May – August)</td><td class="p-4">Vinh Long</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Lai Vung Pink Mandarin (<em>Quýt hồng</em>)</strong></td><td class="p-4">Pre-Lunar New Year</td><td class="p-4">Lai Vung, Dong Thap</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Purple Longan (<em>Nhãn tím</em>)</strong></td><td class="p-4">Year-round via forced blooming (limited supply)</td><td class="p-4">Can Tho (Formerly Soc Trang area)</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Go Cong Acerola (<em>Sơ ri Gò Công</em>)</strong></td><td class="p-4">May – November</td><td class="p-4">Dong Thap (Formerly Go Cong area)</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Palmyra Palm (<em>Thốt nốt</em>)</strong></td><td class="p-4">Dry Season</td><td class="p-4">Seven Mountains Region (<em>Bảy Núi</em>), An Giang</td></tr>

          </tbody>
        </table>
      </div>
    <p><em>Expert Note:</em> Actual harvest windows may shift by 2 to 3 weeks, heavily influenced by annual microclimate variations and the off-season cultivation techniques employed by master orchardists.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="in-depth-tasting-the-must-try-masterpieces" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            In-Depth Tasting: The Must-Try Masterpieces
          </h2>
        </div>
      
          <div id="green-skin-pomelo-the-emerald-of-the-delta" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">1</span>
              . Green-skin Pomelo – The Emerald of the Delta
            </h3>
          </div>
        <p>The Green-skin Pomelo (<em>Bưởi da xanh</em>) is the crowning agricultural jewel of the Ben Tre region (now administratively merged into Vinh Long). Its defining characteristic is a vibrant green rind that remains verdant even at full ripeness, protecting luscious, rosy-pink vesicles that are bursting with a perfectly balanced sweetness and contain few, if any, seeds.
<em>Purchasing Tip:</em> Seek out fruits with taut, glossy skin and well-defined dimples. A superior pomelo will feel remarkably heavy and dense in your hand.</p>

          <div id="ri6-durian-the-king-of-fruits" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">2</span>
              . Ri6 Durian – The King of Fruits
            </h3>
          </div>
        <p>A discourse on Mekong Delta durians is incomplete without reverence for the legendary Ri6 cultivar, originating from Binh Hoa Phuoc (Vinh Long). Distinguishing itself from Thai varieties, the Ri6 boasts brilliant saffron-yellow flesh, remarkably flat seeds, a decadently creamy texture, and an intoxicatingly pungent aroma that is entirely unmistakable.
<em>Tasting Note:</em> We highly recommend indulging directly at the source—orchards that offer a &quot;quality guarantee&quot; (replacing any subpar fruit immediately) ensure a flawless tasting experience.</p>

          <div id="lo-ren-star-apple-vinh-kim" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">3</span>
              . Lo Ren Star Apple (Vinh Kim)
            </h3>
          </div>
        <p>Making a fleeting appearance exclusively between January and March, the Lo Ren Star Apple (<em>Vú sữa Lò Rèn</em>) from Dong Thap features an exquisitely thin, polished skin. A gentle massage of the fruit releases a milky, profoundly sweet nectar. It is a delicate, cooling delicacy, perfect for tempering the onset of the summer heat.</p>

          <div id="macapuno-coconut-tra-vinh" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">4</span>
              . Macapuno Coconut (Tra Vinh)
            </h3>
          </div>
        <p>The Macapuno Coconut (<em>Dừa sáp</em>) from Cau Ke (now under Vinh Long) is a fascinating botanical mutation. Rather than yielding clear coconut water, it is densely packed with thick, wax-like, gelatinous flesh, while its liquid is viscous and syrupy. A smoothie blending this waxy coconut with crushed ice and condensed milk ranks among the most decadent tropical desserts imaginable.</p>

          <div id="ha-chau-burmese-grape-phong-dien" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">5</span>
              . Ha Chau Burmese Grape (Phong Dien)
            </h3>
          </div>
        <p>The Ha Chau Burmese Grape (<em>Dâu Hạ Châu</em>) is visually arresting with its pale golden hue, renowned for a masterful balance of subtle tartness and clean sweetness. Should you find yourself in Phong Dien (Can Tho) during May, you can wander beneath sprawling canopies where clusters of this fruit cascade heavily from trunk to branch tip.</p>

          <div id="lai-vung-pink-mandarin" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">6</span>
              . Lai Vung Pink Mandarin
            </h3>
          </div>
        <p>From late December leading up to the Lunar New Year, the Lai Vung region (Dong Thap) seemingly dons a vibrant new wardrobe. The Pink Mandarin (<em>Quýt hồng</em>) features a thin, red-orange rind, bursting with succulent juices and a potent fragrance that instantly evokes the festive spirit of Tet.</p>

          <div id="soc-trang-purple-longan" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">7</span>
              . Soc Trang Purple Longan
            </h3>
          </div>
        <p>The Purple Longan (<em>Nhãn tím</em>) is a stunning natural mutation discovered in Soc Trang (now under Can Tho). Every element—from the fruit’s skin and young leaves to the branches—is suffused with a striking purple pigment. While its sweetness and flesh profile mirror the classic &#39;cow-hide&#39; longan (<em>nhãn tiêu da bò</em>), its arresting visual appeal ensures this rarity remains perpetually in high demand and short supply.</p>

          <div id="bay-nui-palmyra-palm" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">8</span>
              . Bay Nui Palmyra Palm
            </h3>
          </div>
        <p>When journeying through the Seven Mountains Region (<em>Vùng Bảy Núi</em>, An Giang), the Palmyra Palm (<em>Thốt nốt</em>) commands attention. The translucent endosperm of the young palm seed is as tender and chewy as artisan jelly. While freshly harvested palm sap is an exceptional thirst quencher, its rapid fermentation means locals often boil it down into fragrant, caramelized discs of palm sugar—an essential ingredient for crafting traditional sweet soups (<em>chè</em>) or caramelizing fish.</p>

          <div id="wild-mangrove-apple-trai-ban" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">9</span>
              . Wild Mangrove Apple (Trái Bần)
            </h3>
          </div>
        <p>Thriving untamed along the brackish riverbanks, the Mangrove Apple (<em>Trái bần</em>) is not intended as a dessert; rather, it is the rustic soul of riverine gastronomy. Its sharp, tart flavor, underscored by a subtle astringency, is the irreplaceable foundation for the legendary sour catfish soup (<em>canh chua cá bông lau</em>) or the iconic <em>lẩu bần</em> (mangrove apple hotpot)—culinary masterpieces unrivaled elsewhere.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="field-guide-orchard-etiquette-and-logistics" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            Field Guide: Orchard Etiquette & Logistics
          </h2>
        </div>
      <p>To ensure your horticultural expedition is both immersive and respectful, travelers must internalize the following principles:</p>
<ol>
<li><strong>Verify the Harvest Prior to Arrival:</strong> Do not be swayed by digitally enhanced, year-round promotional imagery. Establish direct contact with the orchard proprietors to confirm the current ripening status.</li>
<li><strong>Financial Transparency:</strong> The majority of orchards levy a standalone admission fee. The concept of &quot;unlimited consumption&quot; (<em>bao bụng</em>) typically applies only to specific, abundant fruit varieties. Any harvest you intend to carry away is weighed and priced according to prevailing market rates.</li>
<li><strong>Responsible Harvesting:</strong> Strictly confine your picking to designated zones outlined by the caretakers. Forcibly breaking or tearing branches inflicts long-term trauma on the trees.</li>
<li><strong>Transit Preservation:</strong> Should your journey involve long-haul flights or extended transit, opt for robust selections like pomelos, oranges, mature mangoes, or macapuno coconuts. Fragile, aromatic delicacies like durian, rambutan, and mangosteen demand meticulous packaging in sealed styrofoam containers to prevent bruising and contain their potent scents.</li>
</ol>
<p>The fruits of the Mekong Delta are not merely natural commodities; they are the tangible culmination of an ancient riverine culture. Journeying to the source, harvesting with your own hands, and savoring the bounty beneath the dappled shade of an orchard is an authentic, bespoke odyssey—a sensory awakening that cannot be replicated in the sterile aisles of any modern metropolis.</p>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: The Gift of the River</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                To taste a fruit in the Mekong Delta is to partake in a sacred dialogue between volcanic soil, mountain silt carried across six nations, and generational horticultural patience. Step into the shade of the canopy, pluck with reverence, and savor the sweetness of living earth.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Primary Riverine Basins</div>
        <div class="font-bold text-slate-800 text-[13px]">Tien & Hau River Alluvium</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌤️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Peak Tasting Window</div>
        <div class="font-bold text-slate-800 text-[13px]">May through August annually</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🍈</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Top Geographic Icons</div>
        <div class="font-bold text-slate-800 text-[13px]">Lo Ren Star Apple, Macapuno Coconut</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🛶</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Curated Access</div>
        <div class="font-bold text-slate-800 text-[13px]">Private sampan orchard landings</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/mekong-delta-fruits-harvest-map" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/mekong-delta-fruits-harvest-map');" 
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

export const truongTienBridgeHueHeritageHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">Truong Tien Bridge (Hue): Architectural Legacy & 2026 Maintenance Guide</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          Truong Tien Bridge (Hue): Architectural Legacy & 2026 Maintenance Guide
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          Eiffel's Iron Lace, Dynastic Memory & 2026 Engineering Heritage
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          Spanning the tranquil waters of the Perfume River, the Truong Tien Bridge is far more than a transport artery. It is the poetic heart of Hue—a testament to Gustave Eiffel's metallurgical mastery, the resilience of imperial memory, and the romantic soul of Central Vietnam.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Aug 12, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">10 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌉</span> Eiffel Iron Architecture
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">👑</span> Imperial Hue Heritage
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🎨</span> 6 Girders, 12 Spans
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Preservation Field Notes
    </div>
  
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
                  <a href="#a-century-spanning-icon-above-the-perfume-river" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">A Century-Spanning Icon Above the Perfume River</a>
  <a href="#trang-tien-or-truong-tien-deciphering-the-nomenclature" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Trang Tien or Truong Tien? Deciphering the Nomenclature</a>
  <a href="#architectural-anatomy-decoding-the-six-arches-twelve-spans" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Architectural Anatomy: Decoding the "Six Arches, Twelve Spans"</a>
  <a href="#travel-warning-2026-traffic-regulations-and-maintenance-overhaul" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Travel Warning: 2026 Traffic Regulations and Maintenance Overhaul</a>
  <a href="#the-journalists-lens-capturing-truong-tien" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Journalist’s Lens: Capturing Truong Tien</a>
  <a href="#the-navigation-matrix-connecting-the-imperial-heritage" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Navigation Matrix: Connecting the Imperial Heritage</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Coordinates</div>
        <div class="text-[13px] font-bold text-slate-900">Perfume River, Hue City</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Erected</div>
        <div class="text-[13px] font-bold text-slate-900">1899 (King Thanh Thai & Eiffel Co.)</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📐</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Scale</div>
        <div class="text-[13px] font-bold text-slate-900">402.6 Meters / 6 Steel Spans</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🌙</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Golden Hours</div>
        <div class="text-[13px] font-bold text-slate-900">Dawn mist (5:30 AM) & Twilight (18:00)</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            <hr>
<ul>
<li><strong>Official Name:</strong> Truong Tien Bridge (<em>Cầu Trường Tiền</em>, often colloquially known as <em>Tràng Tiền</em>).</li>
<li><strong>Location:</strong> Spanning the Perfume River, connecting Phu Xuan (North Bank) and Thuan Hoa (South Bank) wards in Hue City.</li>
<li><strong>Inauguration:</strong> 1900 (Commissioned in 1896 under the reign of Emperor Thanh Thai).</li>
<li><strong>Structural Specifications:</strong> 6 steel girder arches, each spanning 66.08 meters (Total length: 406.45 meters).</li>
<li><strong>2026 Operational Status:</strong> <strong>Currently undergoing major structural overhaul (Estimated 150 days commencing June 1, 2026).</strong> Nighttime transit is strictly prohibited.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="a-century-spanning-icon-above-the-perfume-river" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            A Century-Spanning Icon Above the Perfume River
          </h2>
        </div>
      <p>The Truong Tien Bridge transcends its function as a vital transit artery; it stands as an enduring historical witness, an inextricably woven thread in the cultural fabric of Hue. Arching gracefully over the languid Perfume River (<em>Sông Hương</em>), its six silver-painted steel spans have served as an endless muse for poets, musicians, and photographers for over a century.</p>
<p>When venturing to the ancient capital, traversing the Truong Tien Bridge on foot—while the distant tolling of the Thien Mu Pagoda bell echoes across the water and royal dragon boats glide silently below—is a deeply visceral experience that every bespoke traveler must undertake.</p>

        <h3 id="trang-tien-or-truong-tien-deciphering-the-nomenclature" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Trang Tien or Truong Tien? Deciphering the Nomenclature
        </h3>
      <p>The duality between the names &quot;Trang Tien&quot; and &quot;Truong Tien&quot; remains a fascinating cultural idiosyncrasy for foreign and domestic travelers alike. Historically and administratively, <strong>Truong Tien</strong> is the officially recognized nomenclature. The title originates from the bridge&#39;s proximity to a former royal mint (<em>Trường Tiền</em>) established by the Nguyen Dynasty.</p>
<p>Conversely, in regional vernacular and folk poetry, the moniker <strong>Trang Tien</strong> dominates (with &quot;Trang&quot; being a localized phonetic corruption of &quot;Truong&quot;). Furthermore, this resilient structure has borne the names Thanh Thai (the Emperor who decreed its construction), Clémenceau (a French Prime Minister), and Nguyen Hoang during various tumultuous chapters of Vietnamese history.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="architectural-anatomy-decoding-the-six-arches-twelve-spans" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            Architectural Anatomy: Decoding the "Six Arches, Twelve Spans"
          </h2>
        </div>
      <p>A renowned piece of folk poetry rhythmically decrees:
<em>&quot;The Truong Tien bridge with six arches, twelve spans...</em>
<em>If we love each other, let us cross before it&#39;s too late.&quot;</em></p>
<p>Analyzing the present-day engineering blueprints reveals a total length of 406.45 meters, comprising exactly <strong>6 steel spans</strong> (contrary to the poetic &quot;twelve&quot;). Each comb-shaped steel arch boasts a 66.08-meter span. The central vehicular carriageway measures 5.4 meters wide, flanked by two 1.6-meter pedestrian walkways.</p>
<p>Another compelling historical reality: numerous antiquated texts erroneously credit Gustave Eiffel with the bridge’s direct design. In truth, the initial construction contract was awarded to Société Schneider et Cie et Letellier. The hallmark of the Eiffel company only emerged during subsequent consultations and major reconstructions. The riveting steel arch structure witnessed today is an architectural palimpsest, forged through successive restorations following warfare and catastrophic floods.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="travel-warning-2026-traffic-regulations-and-maintenance-overhaul" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            Travel Warning: 2026 Traffic Regulations and Maintenance Overhaul
          </h2>
        </div>
      <p>In mid-2026, the bridge entered an extensive maintenance and repainting phase critical to preserving the integrity of its steel framework. Voyagers arriving in Hue during this period must strictly adhere to the following transit directives:</p>

      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 text-sm">
          <thead>
            <tr class="bg-slate-900 text-white font-serif">
              <th class="p-4 font-bold text-left">Timeframe (During the 2026 Maintenance Phase)</th><th class="p-4 font-bold text-left">Transit Status</th><th class="p-4 font-bold text-left">Directives for Travelers</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>05:00 AM - 09:00 PM</strong></td><td class="p-4">Standard vehicular and pedestrian traffic permitted.</td><td class="p-4">Comply with reduced speed limits. One pedestrian walkway is cordoned off (utilize the opposing side).</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>09:00 PM - 05:00 AM</strong></td><td class="p-4"><strong>Total prohibition of all vehicles and pedestrians.</strong></td><td class="p-4">Divert routes via the Phu Xuan, Da Vien, or Cho Dinh bridges.</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Strictly Prohibited Actions</strong></td><td class="p-4">-</td><td class="p-4">Do not halt vehicles on the carriageway for photography. Do not trespass into active construction zones.</td></tr>

          </tbody>
        </table>
      </div>
    <p><em>Field Note:</em> The meticulous rust-removal and silver-repainting processes temporarily alter the bridge&#39;s visual aesthetic. We urge visitors to respect the boundaries established by on-site engineers and laborers.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-journalists-lens-capturing-truong-tien" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            The Journalist’s Lens: Capturing Truong Tien
          </h2>
        </div>
      <p>To secure a definitive photograph of the Truong Tien Bridge without compromising traffic safety, adhere to these field photography principles:</p>
<ol>
<li><strong>The Golden Hour:</strong> Target the early dawn (05:30 - 06:30) when ethereal mist lingers over the Perfume River, or late afternoon (17:00 - 18:00) as the sun descends behind Vong Canh Hill.</li>
<li><strong>The Optimal Vantage Points:</strong> Rather than standing amidst the vehicular lanes (a dangerous and obstructive practice), position yourself at <strong>Thuong Bac Park</strong> (North Bank) or along the <strong>Nguyen Dinh Chieu Pedestrian Promenade</strong> (South Bank). These coordinates afford a sweeping perspective, allowing you to capture all six steel arches mirroring flawlessly on the water&#39;s surface.</li>
<li><strong>The Riverine Perspective:</strong> Chartering a royal dragon boat or a stand-up paddleboard (SUP) offers a completely unique, low-angle vantage point from beneath the bridge—a particularly mesmerizing view when the dynamic LED illumination activates at twilight.</li>
</ol>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-navigation-matrix-connecting-the-imperial-heritage" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            The Navigation Matrix: Connecting the Imperial Heritage
          </h2>
        </div>
      <p>Truong Tien Bridge occupies a vital strategic nexus, functioning as the perfect launchpad for exploring Hue’s grand historical complexes:</p>
<ul>
<li><strong>The North Bank:</strong> Stepping off the northern abutment (onto Tran Hung Dao Street), you are immediately thrust into the vibrant chaos of the Dong Ba Market and positioned to breach the walls of the Hue Imperial Citadel (<em>Đại Nội</em>).</li>
<li><strong>The South Bank:</strong> This flank reveals the bustling Western Quarter, the Nguyen Dinh Chieu Pedestrian Promenade, and the arterial route leading westward toward the Thien Mu Pagoda, Vong Canh Hill, and the sprawling network of royal tombs (such as the Tu Duc and Minh Mang mausoleums).</li>
</ul>
<p>Rising above the dense fog of time and the scars of war, the Truong Tien Bridge stands resolute, solemn, and enduring. A contemplative stroll across its span is not merely a physical crossing of a river; it is a profound bridge connecting the traveler’s spirit to the deep, historical resonance of the ancient capital.</p>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: The Unbending Arch of Time</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                Empires fall and rivers shift their courses, yet Truong Tien remains—slender, graceful, and indestructible. It reminds every traveler that true elegance lies not in heavy stone or towering glass, but in the harmonious union of human craftsmanship and natural serenity.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Historic Location</div>
        <div class="font-bold text-slate-800 text-[13px]">Hue Imperial Capital, Thua Thien Hue</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Construction Genesis</div>
        <div class="font-bold text-slate-800 text-[13px]">1899 (127 Years of Endurance)</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌉</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Architectural Typology</div>
        <div class="font-bold text-slate-800 text-[13px]">French Girded Iron Arch</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🚴</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Bespoke Experience</div>
        <div class="font-bold text-slate-800 text-[13px]">Sunset cycling & Royal cyclos</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/truong-tien-bridge-hue-heritage" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/truong-tien-bridge-hue-heritage');" 
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

export const myQuynhSafariDefinitiveGuideHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">My Quynh Safari (2026): The Definitive Guide to the Zoo & Water Park</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          My Quynh Safari (2026): The Definitive Guide to the Zoo & Water Park
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          The Semi-Wild Savannah, Water Park Dynamics & 2026 Expeditions
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          Spanning over 50 hectares in Duc Hoa (Tay Ninh / Long An border), My Quynh Safari represents Southern Vietnam's premier semi-wild zoological sanctuary. Here is your curated 2026 field manual for exploring African wildlife, botanical gardens, and aquatic recreation.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Aug 12, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">11 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🦁</span> 50-Hectare Semi-Wild Zoo
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🚐</span> Caged Bus Safari Drive
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏊</span> Integrated Water Park
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Family Field Guide
    </div>
  
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
                  <a href="#a-suburban-oasis-journey-to-my-quynh-safari" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">A Suburban Oasis: Journey to My Quynh Safari</a>
  <a href="#crucial-note-regarding-administrative-boundaries" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Crucial Note Regarding Administrative Boundaries</a>
  <a href="#decoding-the-fare-structure-2026-rates" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Decoding the Fare Structure (2026 Rates)</a>
  <a href="#general-admission-mandatory" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">General Admission (Mandatory)</a>
  <a href="#the-semi-wild-safari-expedition" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Semi-Wild Safari Expedition</a>
  <a href="#water-park-and-amusement-zones" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Water Park & Amusement Zones</a>
  <a href="#expedition-map-what-lies-within-my-quynh-safari" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Expedition Map: What Lies Within My Quynh Safari?</a>
  <a href="#the-armored-safari-trek" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Armored Safari Trek</a>
  <a href="#zen-sanctuary-bonsai-gardens-and-koi-ponds" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Zen Sanctuary: Bonsai Gardens & Koi Ponds</a>
  <a href="#the-adrenaline-zone" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Adrenaline Zone</a>
  <a href="#the-strategic-itinerary-time-block-methodology" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Strategic Itinerary (Time-block Methodology)</a>
  <a href="#field-notes-for-the-family-unit" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Field Notes for the Family Unit</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">New Coordinates</div>
        <div class="text-[13px] font-bold text-slate-900">My Hanh Bac, Duc Hoa (Post-2025)</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🕒</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Operating Hours</div>
        <div class="text-[13px] font-bold text-slate-900">07:30 – 18:00 (Daily)</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">2026 All-In Ticket</div>
        <div class="text-[13px] font-bold text-slate-900">250,000 – 350,000 VND / Guest</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🚗</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Transit from HCMC</div>
        <div class="text-[13px] font-bold text-slate-900">1h 15m (~40 km via DT824)</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            <hr>
<ul>
<li><strong>Location (2025-2026 Update):</strong> Bau Cong Hamlet, Hau Nghia Commune, Tay Ninh Province (Note: Formerly located in Tan My Commune, Duc Hoa District, Long An).</li>
<li><strong>Operating Hours:</strong> 08:00 AM - 05:00 PM (Tuesday to Sunday, <strong>Closed on Mondays</strong>).</li>
<li><strong>Basic Admission (2026):</strong> 100,000 VND (Adults). <em>Note: Safari and Water Park services are ticketed separately.</em></li>
<li><strong>Ideal Duration:</strong> Half a day to a full day.</li>
<li><strong>Perfect For:</strong> Families with young children, student field trips, and educational excursions.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="a-suburban-oasis-journey-to-my-quynh-safari" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            A Suburban Oasis: Journey to My Quynh Safari
          </h2>
        </div>
      <p>Situated roughly 40-45 kilometers from the urban sprawl of Ho Chi Minh City, <strong>My Quynh Safari</strong> has emerged as a multifaceted ecological entertainment hub. Far beyond a mere animal sanctuary or traditional zoo, the complex seamlessly integrates a semi-wild safari experience, an expansive water park, and dynamic outdoor obstacle courses.</p>
<p>For families seeking a weekend retreat from the relentless tropical heat without enduring a grueling cross-country journey, My Quynh Safari presents an exceptionally rational choice. However, to optimize both your budget and your stamina, an intimate understanding of its tiered ticketing and service structure is essential.</p>

        <h3 id="crucial-note-regarding-administrative-boundaries" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Crucial Note Regarding Administrative Boundaries
        </h3>
      <p>When scouring the internet for intel, many travelers instinctively search for &quot;My Quynh Safari Long An.&quot; However, following a comprehensive administrative realignment, this territory now officially falls under <strong>Hau Nghia Commune, Tay Ninh Province</strong>.</p>
<p><em>Navigation Tip:</em> When consulting Google Maps or digital routing applications, ensure you drop the pin precisely on &quot;My Quynh Safari&quot; rather than searching by its antiquated administrative address to avoid misdirection. The most reliable overland route from Ho Chi Minh City is navigating National Route 22 to the Cu Chi overpass, then diverting onto Provincial Road 8 to merge onto Nguyen Thien Khiem street.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="decoding-the-fare-structure-2026-rates" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            Decoding the Fare Structure (2026 Rates)
          </h2>
        </div>
      <p>The most distinctive operational trait of My Quynh Safari, distinguishing it from conventional theme parks, is its <strong>fragmented ticketing policy</strong>. Rather than purchasing a comprehensive &quot;All-in-one&quot; passport at the gate, visitors pay a la carte for specific zones. This modular approach is financially advantageous for those who simply wish to stroll and observe, yet it demands meticulous budget forecasting for families intent on experiencing everything.</p>

          <div id="general-admission-mandatory" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">1</span>
              . General Admission (Mandatory)
            </h3>
          </div>
        <p>This foundational ticket grants access solely to the traditional enclosed zoo, the Bonsai gardens, and the Koi ponds.</p>

      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 text-sm">
          <thead>
            <tr class="bg-slate-900 text-white font-serif">
              <th class="p-4 font-bold text-left">Passenger Category</th><th class="p-4 font-bold text-left">Standard Fare</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Adults</strong></td><td class="p-4">100,000 VND</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Children (1m - 1.4m)</strong></td><td class="p-4">60,000 VND</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Children under 1m</strong></td><td class="p-4">Complimentary</td></tr>

          </tbody>
        </table>
      </div>
    
          <div id="the-semi-wild-safari-expedition" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">2</span>
              . The Semi-Wild Safari Expedition
            </h3>
          </div>
        <p>This is the undeniable soul of the reserve. Here, you board specially modified, steel-mesh buses that plunge deep into the free-roaming territories of lions, bears, and tigers.</p>

      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 text-sm">
          <thead>
            <tr class="bg-slate-900 text-white font-serif">
              <th class="p-4 font-bold text-left">Passenger Category</th><th class="p-4 font-bold text-left">Fare / Seat</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Adults &amp; Children (1m and above)</strong></td><td class="p-4">150,000 VND</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Children under 1m (occupying a seat)</strong></td><td class="p-4">100,000 VND</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Infants (seated on a parent&#39;s lap)</strong></td><td class="p-4">Complimentary</td></tr>

          </tbody>
        </table>
      </div>
    
          <div id="water-park-and-amusement-zones" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">3</span>
              . Water Park & Amusement Zones
            </h3>
          </div>
        <p>Should your expedition extend into the sweltering afternoon, the water park serves as an indispensable refuge.</p>

      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 text-sm">
          <thead>
            <tr class="bg-slate-900 text-white font-serif">
              <th class="p-4 font-bold text-left">Zone</th><th class="p-4 font-bold text-left">Passenger Category</th><th class="p-4 font-bold text-left">Fare</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Water Park</strong></td><td class="p-4">Guests 1m and above</td><td class="p-4">100,000 VND</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Water Park</strong></td><td class="p-4">Children under 1m</td><td class="p-4">40,000 VND</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Indoor/Outdoor Rides</strong></td><td class="p-4">All guests</td><td class="p-4">40,000 VND / Ride / Turn</td></tr>

          </tbody>
        </table>
      </div>
    <hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="expedition-map-what-lies-within-my-quynh-safari" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            Expedition Map: What Lies Within My Quynh Safari?
          </h2>
        </div>
      
          <div id="the-armored-safari-trek" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">1</span>
              . The Armored Safari Trek
            </h3>
          </div>
        <p>Subverting the archaic model of caged captivity, the semi-wild sanctuary turns the tables. Here, it is the humans who are &quot;caged&quot; within secure armored buses, crawling methodically into the sprawling, uninhibited habitats of apex predators and towering herbivores.</p>
<p>The visceral thrill of a Bengal tiger pressing its weight against reinforced glass, or a herd of giraffes languidly crossing the vehicle&#39;s path, guarantees unadulterated exhilaration for young explorers.</p>
<p><em>Absolute Safety Protocol:</em> DO NOT pry open the mesh windows, DO NOT extend limbs outside the vehicle, and strictly refrain from hurling food or foreign objects at the wildlife.</p>

          <div id="zen-sanctuary-bonsai-gardens-and-koi-ponds" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">2</span>
              . Zen Sanctuary: Bonsai Gardens & Koi Ponds
            </h3>
          </div>
        <p>If the adrenaline of the safari demands a contemplative pause, the Japanese-inspired Bonsai gardens, seamlessly integrated with massive Koi ponds, offer a sanctuary of stillness. The landscape is masterfully curated with rustic wooden bridges and monolithic natural stones, providing a flawless backdrop for documenting family memories.</p>

          <div id="the-adrenaline-zone" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">3</span>
              . The Adrenaline Zone
            </h3>
          </div>
        <p>Beyond the aquatic park, the outdoor amusement sector challenges the bold with high-octane installations: free-fall drop towers, roller coasters, a zipline soaring over the lake, and interconnected trampoline labyrinths.
<em>Expert Warning:</em> All outdoor mechanical apparatuses are subject to immediate, unannounced shutdowns if park management detects approaching thunderstorms or heavy squalls, a vital protocol to prevent electrical hazards and slip-and-fall incidents.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-strategic-itinerary-time-block-methodology" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            The Strategic Itinerary (Time-block Methodology)
          </h2>
        </div>
      <p>To avoid succumbing to exhaustion during a frenetic &quot;dash and grab&quot; visit, we advise structuring your day around circadian rhythms and tropical weather patterns:</p>
<ul>
<li><strong>09:00 - 10:30 (Evading the Zenith Sun):</strong> Secure admission and proceed directly to the Safari bus depot. Witness the semi-wild fauna during their most active morning phase.</li>
<li><strong>10:30 - 11:30:</strong> Transition to a leisurely walk through the open zoo, capturing memories at the Koi pond and Bonsai enclaves.</li>
<li><strong>11:30 - 14:00:</strong> Seek refuge from the midday inferno. Dine at the on-site culinary facilities. Note: Strenuous physical activity for children immediately following a meal is strongly discouraged.</li>
<li><strong>14:00 - 16:30:</strong> Pivot to the Water Park to neutralize the heat, or deploy to the high-adrenaline amusement rides.</li>
<li><strong>16:45:</strong> Shower, don dry attire, and initiate departure protocols (the complex ceases operations at 17:00).</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="field-notes-for-the-family-unit" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            Field Notes for the Family Unit
          </h2>
        </div>
      <ol>
<li><strong>Survival Gear:</strong> High-SPF sunscreen, wide-brimmed hats, and polarized sunglasses are non-negotiable. Ensure children are equipped with at least two sets of dry contingency clothing and regulation swimwear.</li>
<li><strong>Budget Calibration:</strong> Given the fragmented ticketing structure, a family of four (2 adults, 2 children over 1m) intending to experience the Safari and Water Park will face an initial baseline cost of approximately 1,400,000 VND (excluding rations and a la carte rides). Pre-calculate your trajectory to avoid financial shock.</li>
<li><strong>Child Oversight:</strong> The aquatic and amusement zones reach critical mass during weekends. Maintain unbroken visual contact with dependents and strictly adhere to minimum height restrictions mandated for water flumes.</li>
</ol>
<p>Through deliberate infrastructure investment, My Quynh Safari succeeds in transplanting a microcosm of the wild to the very threshold of the metropolis. It is a fleeting yet potent expedition—one that deepens a child&#39;s comprehension of the natural world while forging indelible familial bonds.</p>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: Guardians of the Wild</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                Beyond the thrill of eye-to-eye encounters with apex predators, My Quynh Safari serves as an urgent reminder of our shared responsibility toward global biodiversity. Step lightly, observe with wonder, and let the untamed world kindle your spirit of conservation.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Savannah Location</div>
        <div class="font-bold text-slate-800 text-[13px]">Duc Hoa, Tay Ninh / Long An Border</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🦁</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Key Inhabitants</div>
        <div class="font-bold text-slate-800 text-[13px]">White Bengal Tigers, Rhinos, Zebras</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌤️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Optimal Visiting Window</div>
        <div class="font-bold text-slate-800 text-[13px]">Morning (8:00 – 11:00 AM) for animal activity</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">👨‍👩‍👧</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Target Audience</div>
        <div class="font-bold text-slate-800 text-[13px]">Eco-families & bespoke educational groups</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/my-quynh-safari-definitive-guide" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/my-quynh-safari-definitive-guide');" 
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

export const mekongKhanRanScarfLegacyHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">The Mekong Khăn Rằn: Unweaving a 300-Year Legacy of the Southern Delta</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          The Mekong Khăn Rằn: Unweaving a 300-Year Legacy of the Southern Delta
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          Behind its modest checkered pattern lies a three-century-old odyssey of cultural intersection
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          The khăn rằn is far more than a ubiquitous souvenir scattered across the tourist markets of the Mekong Delta. It is a silent witness to the era of untamed wilderness reclamation, an emblem of wartime resilience, and the lifeblood of a century-old weaving village recently crowned as a National Intangible Cultural Heritage.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Aug 5, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">12 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏛️</span> National Intangible Heritage
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🧵</span> Century-Old Loom Craft
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">📍</span> Long Khanh A, Dong Thap
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Bespoke Field Notes
    </div>
  
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
                  <a href="#a-quick-overview-of-the-khan-ran" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">A Quick Overview of the Khăn Rằn</a>
  <a href="#a-300-year-genesis-from-the-sacred-krama-to-a-southern-icon" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">A 300-Year Genesis: From the Sacred Krama to a Southern Icon</a>
  <a href="#the-spiritual-imprint-of-lord-vishnu" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Spiritual Imprint of Lord Vishnu</a>
  <a href="#a-natural-evolution-in-the-age-of-reclamation" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">A Natural Evolution in the Age of Reclamation</a>
  <a href="#the-checkered-scarf-in-wartime-an-emblem-of-unyielding-resilience" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Checkered Scarf in Wartime: An Emblem of Unyielding Resilience</a>
  <a href="#a-comparative-matrix-the-four-iconic-scarves-of-southeast-asia" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">A Comparative Matrix: The Four Iconic Scarves of Southeast Asia</a>
  <a href="#a-bespoke-field-guide-exploring-the-century-old-weaving-village-of-long-khanh-a" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">A Bespoke Field Guide: Exploring the Century-Old Weaving Village of Long Khanh A</a>
  <a href="#logistical-essentials-for-2026" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Logistical Essentials for 2026</a>
  <a href="#the-six-step-artisanal-mastery" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Six-Step Artisanal Mastery</a>
  <a href="#the-voyagers-guide-four-authentic-ways-to-wear-the-khan-ran" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Voyager’s Guide: Four Authentic Ways to Wear the Khăn Rằn</a>
  <a href="#style-1-the-classic-southern-drape" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Style 1: The Classic Southern Drape</a>
  <a href="#style-2-the-expedition-side-knot" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Style 2: The Expedition Side-Knot</a>
  <a href="#style-3-the-traditional-laborers-headband" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Style 3: The Traditional Laborer’s Headband</a>
  <a href="#style-4-the-ultimate-sun-shield" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Style 4: The Ultimate Sun Shield</a>
  <a href="#curated-tips-for-the-conscious-traveler-sourcing-and-caring-for-your-scarf" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Curated Tips for the Conscious Traveler: Sourcing and Caring for Your Scarf</a>
  <a href="#epilogue" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Epilogue</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">The Heartland</div>
        <div class="text-[13px] font-bold text-slate-900">Long Khanh A, Dong Thap</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Historical Genesis</div>
        <div class="text-[13px] font-bold text-slate-900">17th Century (Khmer Krama)</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🏆</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Heritage Status</div>
        <div class="text-[13px] font-bold text-slate-900">National Heritage (2023)</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">2026 Reference Price</div>
        <div class="text-[13px] font-bold text-slate-900">35,000 – 90,000 VND</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            <div class="coguu-lead-box mb-8 p-6 bg-amber-50/80 border-l-4 border-amber-600 rounded-r-2xl shadow-xs font-serif text-[17px] text-slate-800 leading-relaxed italic">
  The <em>khăn rằn</em> is far more than a ubiquitous souvenir scattered across the tourist markets of the Mekong Delta. Behind its modest black-and-white checkered pattern lies a three-century-old odyssey of cultural intersection among the indigenous tribes of the lower Mekong. It is a silent witness to the era of untamed wilderness reclamation, an emblem of wartime resilience, and the lifeblood of a century-old weaving village recently crowned as a National Intangible Cultural Heritage. This is your curated field guide to understanding its origins, distinguishing its authentic variations, and embarking on a bespoke journey to Dong Thap, the undisputed heartland of the traditional loom.
</div><hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="a-quick-overview-of-the-khan-ran" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            A Quick Overview of the Khăn Rằn
          </h2>
        </div>
      
      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 text-sm">
          <thead>
            <tr class="bg-slate-900 text-white font-serif">
              <th class="p-4 font-bold text-left">Category</th><th class="p-4 font-bold text-left">Curated Details</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Historical Genesis</strong></td><td class="p-4">Evolved from the Khmer <em>Krama</em> in the 17th century; a profound intersection of Vietnamese and Cham cultures.</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>The Heartland</strong></td><td class="p-4">Long Khanh A islet, Hong Ngu District, Dong Thap Province (over a century of continuous craftsmanship).</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Heritage Status</strong></td><td class="p-4">Officially recognized as a National Intangible Cultural Heritage by the Ministry of Culture in 2023.</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Authentic Material</strong></td><td class="p-4">100% natural cotton or traditional rice-starched cotton yarn.</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Standard Dimensions</strong></td><td class="p-4">160 x 60 cm or 170 x 65 cm.</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>2026 Reference Price</strong></td><td class="p-4">35,000 – 90,000 VND / piece (at the artisan village); 120,000 – 250,000 VND (premium bespoke lines).</td></tr>

          </tbody>
        </table>
      </div>
    <hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="a-300-year-genesis-from-the-sacred-krama-to-a-southern-icon" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            1. A 300-Year Genesis: From the Sacred Krama to a Southern Icon
          </h2>
        </div>
      
          <div id="the-spiritual-imprint-of-lord-vishnu" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">1.1</span>
              . The Spiritual Imprint of Lord Vishnu
            </h3>
          </div>
        <p>Many travelers, upon holding the checkered scarf, assume it is a purely Vietnamese invention born from the early migrants. However, from an anthropological perspective, the <em>khăn rằn</em> traces its direct lineage to the <strong>Krama</strong>, the ancestral scarf of the indigenous Khmer people in the lower Mekong basin.</p>
<p>In ancient Khmer Hinduism, Lord <strong>Vishnu</strong> is the supreme protector, the embodiment of compassion who often rests upon the seven-headed serpent, Naga. The Krama, meticulously woven with intersecting grid patterns, was designed to mimic the scales of this divine serpent. The early Khmer believed that carrying the Krama was akin to receiving the invisible, divine protection of Vishnu against wild beasts, monsoons, and the unpredictable perils of the riverine wilderness.</p>

          <div id="a-natural-evolution-in-the-age-of-reclamation" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">1.2</span>
              . A Natural Evolution in the Age of Reclamation
            </h3>
          </div>
        <p>When Vietnamese pioneers embarked on the arduous journey to reclaim the marshlands of the Mekong Delta in the 17th and 18th centuries, the unforgiving environment—characterized by labyrinthine canals and a punishing bipolar climate of monsoon rains and scorching sun—necessitated cultural adaptation. The <em>áo bà ba</em> (the traditional slit-sided silk tunic) paired with a checkered scarf draped over the shoulder became the ultimate survival attire for those taming the wild frontier.</p>
<p>The term <em>rằn</em> in the southern dialect translates to distinct, intersecting stripes. The traditional black-and-white palette was not merely a pragmatic choice for washing out the heavy alum mud, but also a poignant reflection of the pioneers&#39; unpretentious and resilient character.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-checkered-scarf-in-wartime-an-emblem-of-unyielding-resilience" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            2. The Checkered Scarf in Wartime: An Emblem of Unyielding Resilience
          </h2>
        </div>
      <p>Throughout the resistance wars against French and American forces, the <em>khăn rằn</em> transcended its daily utility to become an immortal military and cultural emblem of the southern battlefield:</p>
<ul>
<li><strong>A Silent Identifier:</strong> Amidst the dense foliage of the U Minh forest or the flooded plains of Dong Thap Muoi, the checkered scarf served as a covert insignia among guerilla factions and urban operatives.</li>
<li><strong>The Ultimate Survival Tool:</strong> The scarf was ingeniously utilized to filter heavy alluvial silt from river water before boiling, as a makeshift tourniquet for battlefield injuries, as a wrapper for foraging rations, and even as camouflage beneath enemy artillery.</li>
<li><strong>The Legend of the &quot;Long-Haired Army&quot;:</strong> The indelible image of southern female guerillas—clad in the humble black <em>áo bà ba</em>, wearing the iconic floppy hat, and with the <em>khăn rằn</em> wrapped defiantly around their necks—remains a profound symbol of the indomitable courage of Vietnamese women.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="a-comparative-matrix-the-four-iconic-scarves-of-southeast-asia" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            3. A Comparative Matrix: The Four Iconic Scarves of Southeast Asia
          </h2>
        </div>
      <p>To navigate the rich tapestry of regional textiles without confusion, we present a curated comparison of the prominent checkered scarves found across the region:</p>

      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 text-sm">
          <thead>
            <tr class="bg-slate-900 text-white font-serif">
              <th class="p-4 font-bold text-left">Criterion</th><th class="p-4 font-bold text-left">Khăn Rằn (Southern Vietnam)</th><th class="p-4 font-bold text-left">Krama (Cambodia)</th><th class="p-4 font-bold text-left">Cham Scarf (An Giang, Vietnam)</th><th class="p-4 font-bold text-left">Piêu Scarf (Northwest Vietnam)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Core Material</strong></td><td class="p-4">Blended cotton or 100% raw cotton, often treated with rice starch.</td><td class="p-4">Thick cotton yarn or handwoven mulberry silk.</td><td class="p-4">Natural woven fibers, dyed with tree bark and minerals.</td><td class="p-4">Thick, handwoven cotton fabric.</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Tactile Sensation</strong></td><td class="p-4">Initially crisp due to the rice starch; becomes remarkably soft and breathable after 2-3 washes.</td><td class="p-4">High-density weave, textured surface, built to endure decades of use.</td><td class="p-4">Naturally draped, excellent color retention.</td><td class="p-4">Substantial and weighty, offering warmth rather than sun protection.</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Pattern &amp; Palette</strong></td><td class="p-4">Classic grid of black-white, red-white, or blue-white.</td><td class="p-4">Minute, intricate checkers in earth tones (terracotta, indigo, brown).</td><td class="p-4">Stylized geometric motifs with exquisite colorful embroidered borders.</td><td class="p-4">Vibrant, intricate embroidery localized at both ends of the scarf.</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Primary Function</strong></td><td class="p-4">Sun protection, sweat absorption, an essential expedition accessory.</td><td class="p-4">Traditional attire, temple rituals, daily utility.</td><td class="p-4">Daily wear and sacred Cham festivals.</td><td class="p-4">A traditional cultural accessory and a symbol of betrothal.</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>2026 Reference Price</strong></td><td class="p-4">35,000 – 90,000 VND</td><td class="p-4">150,000 – 400,000 VND</td><td class="p-4">60,000 – 180,000 VND</td><td class="p-4">80,000 – 220,000 VND</td></tr>

          </tbody>
        </table>
      </div>
    <hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="a-bespoke-field-guide-exploring-the-century-old-weaving-village-of-long-khanh-a" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            4. A Bespoke Field Guide: Exploring the Century-Old Weaving Village of Long Khanh A
          </h2>
        </div>
      <p>For travelers seeking to witness the authentic, meticulous creation of a traditional <em>khăn rằn</em>, a pilgrimage to the <strong>Long Khanh A Weaving Village (Hong Ngu District, Dong Thap Province)</strong> is an absolute imperative.</p>

          <div id="logistical-essentials-for-2026" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">4.1</span>
              . Logistical Essentials for 2026
            </h3>
          </div>
        <ul>
<li><strong>Location:</strong> Situated on the Long Khanh riverine islet, amidst the mighty Tien River, approximately 65 km from Cao Lanh City and 12 km from Hong Ngu City.</li>
<li><strong>The Journey:</strong> From Hong Ngu City, navigate to the Long Khanh ferry terminal for a brief 10-minute crossing. Upon reaching the islet, the newly paved roads offer a seamless route for a motorbike or bicycle exploration through the artisan hamlets.</li>
<li><strong>The Golden Hours:</strong> Aim to arrive between <strong>7:30 AM and 10:30 AM</strong>. This window unveils a spectacular visual feast: vibrant yards of yarn drying under the morning sun, accompanied by the rhythmic, enchanting clatter of wooden looms.</li>
</ul>

          <div id="the-six-step-artisanal-mastery" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">4.2</span>
              . The Six-Step Artisanal Mastery
            </h3>
          </div>
        <p>Unlike mass-produced textiles, an authentic Long Khanh A scarf undergoes an incredibly laborious manual process:</p>
<ol>
<li><strong>Unspooling:</strong> Massive spools of cotton thread are meticulously unraveled into smaller, manageable skeins using traditional wooden reels.</li>
<li><strong>Dyeing:</strong> The skeins are submerged in boiling vats of pigment, allowing the colors to penetrate the very core of the fiber before being wrung dry.</li>
<li><strong>The Rice Starch Baptism (The Secret Signature):</strong> A technique entirely unique to this village. Artisans dip the yarn into a boiled, diluted rice flour solution. As the starch dries, it lends the thread a robust, smooth resilience, preventing fraying when threaded through the loom.</li>
<li><strong>Sun-Curing:</strong> Bundles of kaleidoscopic yarn are stretched across bamboo racks extending dozens of meters along the riverbank—an undeniably breathtaking spectacle.</li>
<li><strong>Warping the Loom:</strong> Thousands of vertical threads are manually and flawlessly threaded through the heddles and the reed by master weavers.</li>
<li><strong>The Rhythmic Weave:</strong> Operating the loom requires a synchronized dance: the weaver&#39;s feet manipulate the pedals to separate the warp, while their hands instinctively shoot the shuttle back and forth, locking the horizontal weft in place with blistering speed.</li>
</ol>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-voyagers-guide-four-authentic-ways-to-wear-the-khan-ran" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            5. The Voyager’s Guide: Four Authentic Ways to Wear the Khăn Rằn
          </h2>
        </div>
      <p>Wearing the <em>khăn rằn</em> correctly transcends mere comfort; it is an unspoken nod to the local culture, projecting the poised demeanor of a seasoned explorer:</p>

        <h3 id="style-1-the-classic-southern-drape" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Style 1: The Classic Southern Drape
        </h3>
      <ul>
<li><strong>The Technique:</strong> Drape the scarf around the back of your neck, allowing both ends to fall naturally and symmetrically across your chest.</li>
<li><strong>The Vibe:</strong> Ideal for a leisurely stroll through a floating market or orchard. It exudes a relaxed elegance while keeping the ends accessible for wiping away the tropical heat.</li>
</ul>

        <h3 id="style-2-the-expedition-side-knot" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Style 2: The Expedition Side-Knot
        </h3>
      <ul>
<li><strong>The Technique:</strong> Wrap the scarf once around your neck, thread one end through the loop, and secure it with a loose knot positioned over one shoulder.</li>
<li><strong>The Vibe:</strong> Exceptionally pragmatic for motorbike journeys, rowing sampans, or jungle trekking. It secures the fabric against strong winds and provides a subtle layer of warmth during the crisp morning hours.</li>
</ul>

        <h3 id="style-3-the-traditional-laborers-headband" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Style 3: The Traditional Laborer’s Headband
        </h3>
      <ul>
<li><strong>The Technique:</strong> Fold the scarf lengthwise into a 5–7 cm band. Place it across your forehead, wrap the ends to the back of your head, and tie it firmly.</li>
<li><strong>The Vibe:</strong> The ultimate barrier against stinging sweat when kayaking, cycling through rural villages, or engaging in intense physical excursions under a relentless sun.</li>
</ul>

        <h3 id="style-4-the-ultimate-sun-shield" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Style 4: The Ultimate Sun Shield
        </h3>
      <ul>
<li><strong>The Technique:</strong> Drape the scarf entirely over your head, pull the edges forward to shield your cheeks, cross the ends under your chin, and tie them gently at the nape of your neck.</li>
<li><strong>The Vibe:</strong> Essential for prolonged exposure on riverboats, offering unparalleled protection for your head and neck from the piercing tropical glare.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="curated-tips-for-the-conscious-traveler-sourcing-and-caring-for-your-scarf" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            6. Curated Tips for the Conscious Traveler: Sourcing and Caring for Your Scarf
          </h2>
        </div>
      <ul>
<li><strong>Identifying Authentic Craftsmanship:</strong> A genuine handwoven scarf from Long Khanh A will initially feel slightly stiff due to its protective rice starch coating. After its first wash, this starch dissolves, revealing a fabric that is phenomenally soft, breathable, and highly absorbent. Conversely, cheap synthetic blends remain slick, repel water, and induce suffocating heat under the sun.</li>
<li><strong>The First Wash Ritual:</strong> To lock in the vibrant colors, soak your new scarf in cold water with a pinch of salt for 15 minutes prior to its first wash. Always dry it in a shaded, breezy area.</li>
<li><strong>Where to Source Authentically:</strong> <ol>
<li>Purchase directly from the artisan households within the Long Khanh A Weaving Cooperative (Dong Thap)—this guarantees an authentic piece while directly supporting the local micro-economy.</li>
<li>Seek out reputable cultural spaces and artisan rest stops in Can Tho, Ben Tre, or Chau Doc.</li>
</ol>
</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="epilogue" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            Epilogue
          </h2>
        </div>
      <p>Through over 300 years of turbulent history, the <em>khăn rằn</em> has never relinquished its pivotal role in the spiritual and daily life of the southern frontier. It is not merely the story of a woven cloth; it is a profound narrative of cultural inclusivity, an unwavering defense of the homeland, and the resilient hands of artisans who continuously stoke the fires of tradition along the legendary Mekong.</p>
<p>On your upcoming expedition into the Delta, carve out a quiet morning to visit the Long Khanh A islet. Touch the century-old looms, witness the vibrant threads catching the dawn, and curate an authentic <em>khăn rằn</em> for yourself. Only then will your journey achieve true depth—both in its physical exploration and its emotional resonance.</p>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: The Soul of the Southern Loom</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                Through over 300 years of turbulent history, the khăn rằn has never relinquished its pivotal role in the spiritual and daily life of the southern frontier. It is not merely the story of a woven cloth; it is a profound narrative of cultural inclusivity, an unwavering defense of the homeland, and the resilient hands of artisans along the Mekong.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">The Heartland</div>
        <div class="font-bold text-slate-800 text-[13px]">Hong Ngu, Dong Thap</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌤️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Best Visiting Time</div>
        <div class="font-bold text-slate-800 text-[13px]">Year-round (7:30 – 10:30 AM)</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🚴</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Signature Experiences</div>
        <div class="font-bold text-slate-800 text-[13px]">Islet cycling & hands-on loom weaving</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🏆</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Heritage Inscription</div>
        <div class="font-bold text-slate-800 text-[13px]">National Intangible Heritage (2023)</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/mekong-khan-ran-scarf-legacy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/mekong-khan-ran-scarf-legacy');" 
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

export const huynhThuyLeAncientHouseHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">Huynh Thuy Le Ancient House: Architectural Heritage & The Muse of 'The Lover' (2026)</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          Huynh Thuy Le Ancient House: Architectural Heritage & The Muse of 'The Lover' (2026)
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          East-West Architectural Alchemy & The Eternal Muse of 'The Lover'
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          Rising gracefully along the Sa Dec riverfront, the Huynh Thuy Le Ancient House stands as an exquisite monument to Sino-French architectural fusion and the immortal romance chronicled in Marguerite Duras’s world-renowned novel, L'Amant.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Aug 4, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">11 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏛️</span> National Historic Monument
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">📖</span> Muse of L'Amant (The Lover)
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🪵</span> 1895 Sino-French Timber
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Overnight Guest Chambers
    </div>
  
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
                  <a href="#touching-time-along-the-sa-dec-river" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Touching Time Along the Sa Dec River</a>
  <a href="#the-genesis-and-evolution-of-the-huynh-dynasty" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Genesis and Evolution of the Huynh Dynasty</a>
  <a href="#architectural-analysis-western-shell-chinese-core-vietnamese-foundation" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Architectural Analysis: "Western Shell, Chinese Core, Vietnamese Foundation"</a>
  <a href="#stepping-across-the-threshold-of-time" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Stepping Across the Threshold of Time</a>
  <a href="#the-lover-when-passion-transcends-fiction" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Lover: When Passion Transcends Fiction</a>
  <a href="#a-tear-stained-romance-on-the-my-thuan-ferry" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">A Tear-Stained Romance on the My Thuan Ferry</a>
  <a href="#field-guide-logistics-and-etiquette" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Field Guide: Logistics and Etiquette</a>
  <a href="#navigating-from-ho-chi-minh-city" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Navigating from Ho Chi Minh City</a>
  <a href="#code-of-conduct-at-the-heritage-site" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Code of Conduct at the Heritage Site</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Riverfront Location</div>
        <div class="text-[13px] font-bold text-slate-900">Sa Dec City, Dong Thap</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Construction Genesis</div>
        <div class="text-[13px] font-bold text-slate-900">1895 (Restored in 1917)</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">2026 Entry Tariff</div>
        <div class="text-[13px] font-bold text-slate-900">20,000 VND (Includes tea & ginger)</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🛏️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Vintage Stay</div>
        <div class="text-[13px] font-bold text-slate-900">2 Heritage Suites Available</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            <hr>
<ul>
<li><strong>Location:</strong> 255A Nguyen Hue, Ward 2, Sa Dec City, Dong Thap Province.</li>
<li><strong>Construction Era:</strong> Built in 1895 (by Mr. Huynh Cam Thuan). Major restoration in 1917.</li>
<li><strong>Admission Fee (2026):</strong> 20,000 VND / Person (Includes a traditional serving of tea and candied ginger).</li>
<li><strong>Operating Hours:</strong> 08:30 – 17:30 (Open daily).</li>
<li><strong>Cultural Status:</strong> National Historic Monument (Recognized in 2009).</li>
<li><strong>Accommodation Experience:</strong> Overnight stays in the vintage guest chambers are available (Only 2 rooms; advanced booking is strictly required).</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="touching-time-along-the-sa-dec-river" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            Touching Time Along the Sa Dec River
          </h2>
        </div>
      <p>Amidst the relentless rhythm of the floral city of Sa Dec, the <strong>Huynh Thuy Le Ancient House</strong> (also known as the Huynh Family Mansion) stands in silent vigil along the riverbank, an enduring guardian of the opulent memories of the Southern elite. This edifice captivates not only architectural purists studying the fusion of East and West, but also serves as a pilgrimage site for romantic souls seeking the echoes of a tragic love affair that resonated globally in Marguerite Duras’s novel, <em>L&#39;Amant (The Lover)</em>.</p>

        <h3 id="the-genesis-and-evolution-of-the-huynh-dynasty" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The Genesis and Evolution of the Huynh Dynasty
        </h3>
      <p>The mansion was erected in 1895 by Mr. Huynh Cam Thuan, an immensely wealthy Fujianese (Chinese) merchant who commanded the regional rice trade. In its original incarnation, it was a traditional three-bay wooden structure, typical of the Southwestern delta.</p>
<p>In 1917, driven by a desire to project the family&#39;s soaring power and status, Mr. Thuan commissioned a comprehensive overhaul. The exterior shell was encased in solid brickwork bearing Roman-Renaissance motifs, while the inner sanctum retained its intricately carved Chinese wooden core. This audacious architectural marriage forged a rare masterpiece of East-meets-West eclecticism, preserved almost immaculately to this day.</p>
<p>Mr. Huynh Thuy Le (the inheriting son) resided here, and it is he who became the archetype for the male protagonist in the celebrated novel.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="architectural-analysis-western-shell-chinese-core-vietnamese-foundation" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            Architectural Analysis: "Western Shell, Chinese Core, Vietnamese Foundation"
          </h2>
        </div>
      <p>The most profound asset of the Huynh Thuy Le Ancient House is its masterful embrace of Eclecticism. What might seem a forced juxtaposition instead yields a breathtakingly harmonious entity.</p>

      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 text-sm">
          <thead>
            <tr class="bg-slate-900 text-white font-serif">
              <th class="p-4 font-bold text-left">Architectural Element</th><th class="p-4 font-bold text-left">Design Ethos</th><th class="p-4 font-bold text-left">Materials &amp; Significance</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Facade</strong></td><td class="p-4">Renaissance (French / Roman)</td><td class="p-4">Square pillars, arched portals, and Western floral reliefs. Projects modernity and authority during the French colonial era.</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Trusses &amp; Pillars</strong></td><td class="p-4">Traditional Chinese (Fujian)</td><td class="p-4">Monolithic ironwood, meticulously carved with classical motifs: &quot;The Four Holy Beasts&quot; and &quot;The Eight Immortals.&quot; A direct homage to the Huynh family&#39;s ancestral roots.</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Roof &amp; Foundation</strong></td><td class="p-4">Traditional Vietnamese</td><td class="p-4">Wavy yin-yang clay roof tiles engineered for rapid tropical drainage. French-imported cement tiles line the floors, yet the entire foundation is elevated to combat the Delta&#39;s notorious flood season.</td></tr>

          </tbody>
        </table>
      </div>
    
        <h3 id="stepping-across-the-threshold-of-time" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Stepping Across the Threshold of Time
        </h3>
      <p>As the traveler crosses the heavy wooden threshold, a stark spatial contrast is immediately apparent. Opposing the cold, white-washed brick exterior, the interior is awash in the warm, somber hues of precious timber. Natural light filters through the stained glass of louvered doors, casting a glow upon the imposing, gold-leafed ancestral altar. Here, every microscopic detail—from the mahogany daybed (<em>sập gụ</em>) and tea cabinets to the antique gramophone—has remained frozen in its precise position for over a century.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-lover-when-passion-transcends-fiction" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            The Lover: When Passion Transcends Fiction
          </h2>
        </div>
      <p>It is undeniable that the international renown of this residence stems largely from the autobiographical novel <strong>&quot;The Lover&quot; (L&#39;Amant - 1984)</strong> by French author Marguerite Duras. The masterpiece claimed the prestigious Prix Goncourt and has been translated into over 40 languages.</p>

        <h3 id="a-tear-stained-romance-on-the-my-thuan-ferry" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          A Tear-Stained Romance on the My Thuan Ferry
        </h3>
      <p>In 1929, aboard the My Thuan ferry crossing the Tien River, a 16-year-old French schoolgirl (Marguerite) locked eyes with the wealthy, 32-year-old heir of the Huynh family. They plummeted into an intense, clandestine romance, defying an insurmountable barrage of age disparities, racial divides, and crushing social prejudices.</p>
<p>However, the Huynh dynasty of that era was profoundly conservative. They refused to accept a foreign daughter-in-law of impoverished origins. Bowing to the immense pressure of his authoritative father, Huynh Thuy Le was forced to sever ties with Marguerite and enter into an arranged marriage with a Chinese woman of equal social standing. Marguerite accepted a substantial sum from the Huynh family to clear her mother&#39;s debts and boarded a ship back to France, heartbroken.</p>
<p>Decades later, in the twilight of their lives, Huynh Thuy Le visited Paris with his wife. He placed a phone call to Marguerite, delivering a single, devastating declaration:</p>
<div class="font-medium text-slate-900 text-lg border-l-4 border-amber-500 pl-4 my-5 bg-amber-50/50 py-3 rounded-r-xl"><p><em>&quot;I told her that it was as before, that I still loved her, that I could never stop loving her, that I would love her until death...&quot;</em></p>
</div>
<p><em>Cinematic Fact-Check:</em> Although the 1992 film <strong>The Lover</strong> is centered entirely on this residence, the director was denied permission to shoot on location (as the building was then requisitioned as a government administrative office). Consequently, the film utilized the Binh Thuy Ancient House in Can Tho as its primary set.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="field-guide-logistics-and-etiquette" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            Field Guide: Logistics and Etiquette
          </h2>
        </div>
      
        <h3 id="navigating-from-ho-chi-minh-city" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Navigating from Ho Chi Minh City
        </h3>
      <ul>
<li><strong>By Coach:</strong> Depart from the Mien Tay Bus Station (HCMC) via reputable carriers bound for Sa Dec (e.g., Phuong Trang, Phu Vinh Long). The journey takes approximately 3 hours. From the Sa Dec terminal, a brief 5-minute taxi ride will deliver you to Nguyen Hue street.</li>
<li><strong>Private Transport:</strong> Navigate the HCMC - Trung Luong Expressway, exit onto National Route 1A toward the My Thuan bridge, and follow the directional signage into Sa Dec City.</li>
</ul>

        <h3 id="code-of-conduct-at-the-heritage-site" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Code of Conduct at the Heritage Site
        </h3>
      <p>Unlike raucous eco-tourism parks, the atmosphere within the Huynh Thuy Le Ancient House demands a measured, respectful reverence:</p>
<ol>
<li><strong>Strictly No Touching or Repositioning Artifacts:</strong> The wooden and ceramic antiquities housed here boast a lineage exceeding 100 years.</li>
<li><strong>The Golden Hour for Photography:</strong> Aim to arrive around 09:00 AM or 15:00 PM to circumvent harsh sunlight. Natural rays piercing the window treatments forge spectacularly vivid, nostalgic imagery.</li>
<li><strong>The Tea Ritual:</strong> Your admission ticket encompasses hot tea and candied ginger. Do not forgo the moment to sit on the shaded veranda, sip your tea, and listen as the guides recount the immortal love story.</li>
<li><strong>A Bespoke Overnight Experience:</strong> If you harbor a desire to experience the life of an authentic &quot;Delta Landlord,&quot; secure an overnight reservation. With an extremely limited capacity (just 2 rooms adjacent to the main altar), this experience offers genuine time-travel, though it is not recommended for the faint of heart.</li>
</ol>
<p>A pilgrimage to the Huynh Thuy Le Ancient House is not merely an exercise in admiring colossal ironwood pillars or intricate floor tiles. Standing in the courtyard, gazing out at the languid Sa Dec river, one can almost hear the whispered echoes of the past—of a tear-stained romance that defied every boundary and prejudice of its era.</p>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: Where Memory Transcends Time</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                Walking across the patterned French encaustic tiles under the golden glow of wooden Chinese chandeliers, one realizes that love and art do not perish. The Huynh Thuy Le Mansion endures as an indelible testament to the beauty that blossoms when diverse civilizations meet upon the river.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Historic Location</div>
        <div class="font-bold text-slate-800 text-[13px]">255A Nguyen Hue, Sa Dec, Dong Thap</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Era of Elegance</div>
        <div class="font-bold text-slate-800 text-[13px]">1895 (131-Year Legacy)</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📖</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Literary Acclaim</div>
        <div class="font-bold text-slate-800 text-[13px]">Prix Goncourt 1984 (The Lover)</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🫖</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Curated Ritual</div>
        <div class="font-bold text-slate-800 text-[13px]">Lotus tea tasting & twilight river strolls</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/huynh-thuy-le-ancient-house" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/huynh-thuy-le-ancient-house');" 
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

export const lanVuongEcoparkMekongMudHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">Lan Vuong Eco-Park (2026): A Visceral Dive into Mekong Mud & Team Dynamics</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          Lan Vuong Eco-Park (2026): A Visceral Dive into Mekong Mud & Team Dynamics
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          Alluvial Obstacle Courses, Team Dynamics & Visceral Agrarian Energy
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          Breaking sharply from conventional passive retreats, Lan Vuong Eco-Park immerses voyagers directly into the elemental thrill of the Mekong—where monkey bridges, swamp fisheries, and team-building camaraderie forge indelible memories.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Aug 4, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">10 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🛶</span> Riverine Mud Obstacles
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🎋</span> Bamboo Monkey Bridges
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🐟</span> Ditch-Bailing Fish Catch
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Corporate Field Manual
    </div>
  
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
                  <a href="#lan-vuong-redefining-ecological-play" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Lan Vuong: Redefining "Ecological Play"</a>
  <a href="#crucial-note-regarding-2026-administrative-boundaries" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Crucial Note Regarding 2026 Administrative Boundaries</a>
  <a href="#the-gauntlet-4-physical-challenge-zones" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Gauntlet: 4 Physical Challenge Zones</a>
  <a href="#the-art-of-team-building-at-lan-vuong" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Art of Team Building at Lan Vuong</a>
  <a href="#foraging-the-culinary-frontier-southern-agrarian-cuisine" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Foraging the Culinary Frontier: Southern Agrarian Cuisine</a>
  <a href="#field-survival-guide" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Field Survival Guide</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Updated Coordinates</div>
        <div class="text-[13px] font-bold text-slate-900">An Hoi, Vinh Long (Ex-Ben Tre)</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🕒</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Operating Hours</div>
        <div class="text-[13px] font-bold text-slate-900">07:00 AM – 18:00 PM Daily</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Gate Admission</div>
        <div class="text-[13px] font-bold text-slate-900">Free Entry (A la carte activities)</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⚡</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Physical Intensity</div>
        <div class="text-[13px] font-bold text-slate-900">High (Bring change of clothes)</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            <hr>
<ul>
<li><strong>Location (2025-2026 Update):</strong> Hamlet 2, An Hoi Ward, Vinh Long Province (Note: Historically part of Ben Tre City).</li>
<li><strong>Operating Hours:</strong> 07:00 AM - 06:00 PM (Open daily).</li>
<li><strong>Ticketing Policy:</strong> <strong>Free Admission</strong>. Fees are charged a la carte for specific activities, equipment rentals, and culinary services.</li>
<li><strong>Physical Demands:</strong> High (Demands stamina and a willingness to get profoundly dirty).</li>
<li><strong>Ideal For:</strong> Corporate team-building excursions, student organizations, and families seeking rugged, hands-on agrarian experiences.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="lan-vuong-redefining-ecological-play" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            Lan Vuong: Redefining "Ecological Play"
          </h2>
        </div>
      <p>Over the past decade, the agrarian eco-tourism model in the Mekong Delta has exploded, spawning hundreds of similar establishments. Yet, the <strong>Lan Vuong Ecological Resort</strong> relentlessly maintains its dominance in the &quot;Visceral Physical Experience&quot; sector. Unlike tranquil, contemplative resorts, Lan Vuong greets travelers with the deafening roar of aquatic obstacle courses, the unmistakable earthy scent of low-tide mud, and the chaotic energy of team-building battalions numbering in the hundreds.</p>
<p>To visit Lan Vuong is to consciously shed urban propriety. You don the traditional brown <em>áo bà ba</em> (the Southern peasant tunic) and prepare for a day of authentic, unapologetic mud-wrestling.</p>

        <h3 id="crucial-note-regarding-2026-administrative-boundaries" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Crucial Note Regarding 2026 Administrative Boundaries
        </h3>
      <p>The cartography of the Mekong Delta has undergone significant tectonic shifts. Countless travelers still punch &quot;Lan Vuong Ben Tre&quot; into their search engines; however, following the latest administrative redistricting, An Hoi Ward is now officially governed by <strong>Vinh Long Province</strong>. Internalizing this detail ensures seamless navigation when utilizing modern GPS applications.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-gauntlet-4-physical-challenge-zones" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            The Gauntlet: 4 Physical Challenge Zones
          </h2>
        </div>
      <p>Lan Vuong operates on an open-gate policy, extracting revenue strictly through the utilities you deploy (tunic rentals, life jackets, game props). The entire recreational ecosystem here is engineered around group interaction and physical comedy.</p>

      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 text-sm">
          <thead>
            <tr class="bg-slate-900 text-white font-serif">
              <th class="p-4 font-bold text-left">The Challenge</th><th class="p-4 font-bold text-left">Difficulty</th><th class="p-4 font-bold text-left">Key Characteristics</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Cycling the Monkey Bridge</strong></td><td class="p-4">High</td><td class="p-4">The ultimate test of equilibrium: navigating a bicycle across a wooden plank less than 20cm wide, suspended over a canal. 90% of challengers end up submerged.</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Draining the Ditch (Catching Fish)</strong></td><td class="p-4">Moderate</td><td class="p-4">Teams wade into waist-deep mud, utilizing traditional bamboo traps (<em>nôm</em>) and woven baskets to hunt snakehead fish. The spoils are immediately grilled on-site.</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Rowing the Three-Plank Sampan</strong></td><td class="p-4">Low</td><td class="p-4">Gliding through narrow canals shaded by dense water coconut fronds. Requires synchronized paddling and clear communication between 2-3 crew members.</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>The Tarzan Swing</strong></td><td class="p-4">High</td><td class="p-4">Swinging across the lake via a suspended rope. Demands significant upper-body strength and split-second timing on the release.</td></tr>

          </tbody>
        </table>
      </div>
    
        <h3 id="the-art-of-team-building-at-lan-vuong" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The Art of Team Building at Lan Vuong
        </h3>
      <p>Lan Vuong is the undisputed Mecca for event management agencies. Sprawling across more than 10 hectares with expansive grass fields, the complex can simultaneously host multiple corporate battalions of up to 500 personnel each.</p>
<p><strong>Tactical Advice for Expedition Leaders / HR Directors:</strong></p>
<ol>
<li><strong>Advance Booking:</strong> Never arrive expecting to hire an MC and sound equipment on the spot. Finalize your script, headcount, lunch menu, and resting pavilions at least one week prior to deployment.</li>
<li><strong>Wardrobe Protocol:</strong> The resort offers mass rentals of the <em>áo bà ba</em> (available in all sizes, laundered and dried). Do not bring light-colored clothing from home; the stubborn alluvial mud here is notoriously difficult to wash out.</li>
<li><strong>Aquatic Safety:</strong> Water-based challenges carry inherent risks. It is mandatory that 100% of participants wear life jackets (regardless of swimming proficiency) when attempting the bridge cycle or rowing the sampans.</li>
</ol>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="foraging-the-culinary-frontier-southern-agrarian-cuisine" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            Foraging the Culinary Frontier: Southern Agrarian Cuisine
          </h2>
        </div>
      <p>Following hours of total physical depletion, Lan Vuong’s thatched-roof culinary pavilions will anchor you with menus deeply rooted in the era of wilderness reclamation.</p>
<p>The gastronomic philosophy here eschews delicate refinement in favor of <strong>raw freshness and untamed flavor</strong>.</p>
<ul>
<li><strong>Charcoal-Grilled Snakehead Fish (<em>Cá lóc nướng trui</em>):</strong> The quintessential Delta classic. A wild snakehead fish (unscaled and un-gutted) is skewered on a fresh bamboo stick and buried in a blazing mound of dry straw. The charred exterior is scraped away to reveal steaming, snow-white flesh, which is then rolled in rice paper with wild herbs and dipped in a pungent tamarind sauce.</li>
<li><strong>Mekong Crêpes (<em>Bánh xèo miền Tây</em>):</strong> Gigantic, sizzling crêpes poured onto massive cast-iron woks using pork fat. The crust is paper-thin and shattering, enveloping a sweet filling of shrimp, pork, and termite mushrooms.</li>
<li><strong>Fermented Fish Hotpot (<em>Lẩu mắm cá linh</em>):</strong> (Exclusive to the floating season). The aggressive, umami-rich broth of fermented gourami fish paired with dozens of wild, foraged vegetables plucked directly from the resort&#39;s perimeter.</li>
</ul>
<p><em>Financial Note:</em> The resort permits outside snacks. However, if you import alcohol or request the kitchen brigade to prepare your &quot;spoils of war&quot; (the fish you caught), you will incur processing and corkage fees. Clarify these quotes before placing orders.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="field-survival-guide" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            2026 Field Survival Guide
          </h2>
        </div>
      <p>To ensure a day of uninhibited chaos without logistical breakdowns, travelers must memorize the &quot;Rule of 3 Preparations&quot;:</p>
<ol>
<li><strong>Physical Preparation:</strong> This is not a luxury retreat. Arrive with a mindset prepared to endure dirt, wetness, and high-intensity exertion. Guests with cardiovascular or blood pressure conditions, as well as pregnant women, should restrict their participation to enthusiastic spectating.</li>
<li><strong>Gear Preparation:</strong><ul>
<li>Flip-flops or cheap rubber sandals (Do not wear expensive sneakers; the mud will destroy them).</li>
<li>High-quality waterproof pouches for electronics (Crucial: the smartphone casualty rate in the Lan Vuong ponds is staggering).</li>
<li>Heavy-duty plastic bags to transport saturated clothing back to the city.</li>
<li>Travel-sized shampoo and body wash for the communal rinse stations before boarding your transport.</li>
</ul>
</li>
<li><strong>Time Management:</strong> Avoid weekends during the peak summer months (June - July) if you are claustrophobic. If a weekend assault is unavoidable, deploy from Ho Chi Minh City by 06:00 AM to arrive by 08:00 AM, securing the prime lakeside pavilions before the masses descend.</li>
</ol>
<p>Ditch the smartphone, kick off the corporate oxfords, don the <em>áo bà ba</em>, and slide fearlessly across the cool mud. Lan Vuong Ecological Resort dispenses a potent antidote to urban stress—a sanctuary where adults are granted absolute permission to regress into carefree children amidst the untamed wilderness.</p>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: The Joy of the Elemental Earth</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                There is profound liberation in shedding urban sophistication, plunging knee-deep into fertile river silt, and sharing unconditional laughter with comrades. Lan Vuong reminds us that the happiest moments are often the rawest, the muddiest, and the most human.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Eco-Park Coordinates</div>
        <div class="font-bold text-slate-800 text-[13px]">Hamlet 2, An Hoi Ward, Vinh Long</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🕒</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Operating Schedule</div>
        <div class="font-bold text-slate-800 text-[13px]">Open 365 days a year</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🚣</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Signature Activities</div>
        <div class="font-bold text-slate-800 text-[13px]">Alluvial zipline, bamboo bridge bike race</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🥥</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Culinary Highlights</div>
        <div class="font-bold text-slate-800 text-[13px]">Crispy river elephant-ear fish & roasted duck</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/lan-vuong-ecopark-mekong-mud" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/lan-vuong-ecopark-mekong-mud');" 
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

export const honSonIslandLodgingHomestaysHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">The 2026 Hon Son Lodging Matrix: 7 Bespoke Coastal Sanctuaries</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          The 2026 Hon Son Lodging Matrix: 7 Bespoke Coastal Sanctuaries
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          Cliffside Wooden Bungalows, Tidal Sanctuaries & 2026 Island Living
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          Defying monotonous concrete assimilation, the untamed island of Hon Son (Kien Giang) invites the discerning voyager to experience bespoke coastal living—where cliffside wooden cabins and beachfront acoustic campfires replace commercial resort glitz.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Aug 4, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">12 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏝️</span> Untamed Kien Giang Gem
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🪵</span> Cliffside Wood Bungalows
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌊</span> Tideline Sunset BBQ
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 7 Bespoke 2026 Sanctuaries
    </div>
  
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
                  <a href="#hon-son-the-unpolished-gem-defying-concrete-assimilation" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Hon Son: The Unpolished Gem Defying Concrete Assimilation</a>
  <a href="#the-strategic-comparison-discovering-your-bespoke-sanctuary" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Strategic Comparison: Discovering Your Bespoke Sanctuary</a>
  <a href="#the-field-assessment-top-7-flawless-coordinates" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Field Assessment: Top 7 Flawless Coordinates</a>
  <a href="#sohora-sea-mountain-bungalow-the-cliffside-enclave" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Sohora Sea Mountain Bungalow: The Cliffside Enclave</a>
  <a href="#rai-ca-homestay-a-radiant-youth-on-the-shore" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Rai Ca Homestay: A Radiant Youth on the Shore</a>
  <a href="#bacs-homestay-contemporary-minimalist-refuge" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Bac's Homestay: Contemporary Minimalist Refuge</a>
  <a href="#sao-bien-coffee-and-homestay-cocobay" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Sao Bien Coffee & Homestay (Cocobay)</a>
  <a href="#thuongs-house-the-perfect-dawn-interceptor" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Thuong's House: The Perfect Dawn Interceptor</a>
  <a href="#thanh-duyen-homestay-the-pulse-of-the-fishing-village" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Thanh Duyen Homestay: The Pulse of the Fishing Village</a>
  <a href="#fly-up-resort-high-altitude-luxury" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Fly Up Resort: High-Altitude Luxury</a>
  <a href="#the-field-manual-tactical-protocols-for-hon-son-homestays" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Field Manual: Tactical Protocols for Hon Son Homestays</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Coordinates</div>
        <div class="text-[13px] font-bold text-slate-900">Lai Son Island, Kien Giang</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🛥️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Maritime Transit</div>
        <div class="text-[13px] font-bold text-slate-900">1h 30m Express Ferry from Rach Gia</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">💵</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">2026 Tariff Baseline</div>
        <div class="text-[13px] font-bold text-slate-900">300,000 – 1,500,000 VND / Night</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🛵</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Island Mobility</div>
        <div class="text-[13px] font-bold text-slate-900">100% Pier-side Scooter Delivery</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            <hr>
<ul>
<li><strong>Coordinates:</strong> Hon Son Island (Lai Son), Kien Hai District, Kien Giang Province.</li>
<li><strong>2026 Baseline Tariffs:</strong> From 300,000 VND (Standard lodgings) to 1,500,000 VND (All-inclusive panoramic ocean bungalows).</li>
<li><strong>Core Experiences:</strong> Pitching tents on the surf line, retreating to cliffside wooden bungalows, and executing private beachfront seafood barbecues.</li>
<li><strong>Transit Logistics:</strong> The high-speed maritime crossing from Rach Gia Port to Hon Son demands approximately 1 hour and 30 minutes. 100% of the sanctuaries listed herein facilitate pier-side motorbike delivery.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="hon-son-the-unpolished-gem-defying-concrete-assimilation" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            Hon Son: The Unpolished Gem Defying Concrete Assimilation
          </h2>
        </div>
      <p>Devoid of the hyper-commercialized gloss of Phu Quoc and escaping the dense foot traffic of Nam Du, Hon Son (Kien Giang) entraps the nomadic soul through its fiercely untamed romanticism. In recent years, actively rebelling against monotonous concrete-box hotels, the vanguard of travelers has pivoted toward highly individualized homestays—havens crafted by urban expatriates who abandoned the metropolis for the sea.</p>
<p>Rather than presenting an exhaustive, superficial directory, we have ruthlessly curated the <strong>7 Most Architecturally &amp; Culturally Distinctive Homestays on Hon Son for 2026</strong>. Each establishment fulfills three uncompromising mandates: An unrivaled geographical position (perched on cliffs or caressing the tideline), elevated aesthetic architecture, and a profound immersion into the island&#39;s indigenous rhythm.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-strategic-comparison-discovering-your-bespoke-sanctuary" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            The Strategic Comparison: Discovering Your Bespoke Sanctuary
          </h2>
        </div>
      
      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 text-sm">
          <thead>
            <tr class="bg-slate-900 text-white font-serif">
              <th class="p-4 font-bold text-left">Sanctuary Designation</th><th class="p-4 font-bold text-left">Geographical Vangtage</th><th class="p-4 font-bold text-left">Ideal Demographic</th><th class="p-4 font-bold text-left">2026 Tariff Range</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>1. Sohora Sea Mountain</strong></td><td class="p-4">Clinging to the Ma Thien Lanh cliff face</td><td class="p-4">Couples and seekers of absolute isolation</td><td class="p-4">600,000đ - 1,200,000đ</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>2. Rai Ca Homestay</strong></td><td class="p-4">Straddling the tidal edge</td><td class="p-4">Festive cohorts prioritizing beachfront BBQ</td><td class="p-4">350,000đ - 800,000đ</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>3. Bac&#39;s Homestay</strong></td><td class="p-4">Bai Bac (The island&#39;s most pristine cove)</td><td class="p-4">Aesthetic purists favoring warm, minimalist architecture</td><td class="p-4">500,000đ - 1,000,000đ</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>4. Sao Bien (Cocobay)</strong></td><td class="p-4">Panoramic hillside elevation</td><td class="p-4">Sunset chasers and acoustic music aficionados</td><td class="p-4">500,000đ - 800,000đ</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>5. Thuong&#39;s House</strong></td><td class="p-4">Adjacent to the primary pier, Bai Nha</td><td class="p-4">Families requiring rapid logistical connectivity</td><td class="p-4">400,000đ - 900,000đ</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>6. Thanh Duyen</strong></td><td class="p-4">Bai Bang (Within the local settlement)</td><td class="p-4">Rugged backpackers pursuing authentic village immersion</td><td class="p-4">250,000đ - 600,000đ</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>7. Fly Up Resort</strong></td><td class="p-4">Exclusive private beach enclave</td><td class="p-4">Luxury retreaters demanding uncompromised privacy</td><td class="p-4">1,200,000đ - 2,500,000đ</td></tr>

          </tbody>
        </table>
      </div>
    <hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-field-assessment-top-7-flawless-coordinates" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            The Field Assessment: Top 7 Flawless Coordinates
          </h2>
        </div>
      
          <div id="sohora-sea-mountain-bungalow-the-cliffside-enclave" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">1</span>
              . Sohora Sea Mountain Bungalow: The Cliffside Enclave
            </h3>
          </div>
        <p>Suspended precariously along the trekking route to the summit of Ma Thien Lanh, Sohora (formerly known as Lamien Homestay) is a masterclass in custom wooden architecture that physically embraces the natural bedrock.</p>
<p><strong>The Highlights:</strong></p>
<ul>
<li>Unobstructed 180-degree panoramas commanding the Kien Hai maritime expanse. Floor-to-ceiling glass facades allow you to absorb the dawn directly from your mattress.</li>
<li>Total geographical isolation from civilian clusters. The auditory environment is dictated solely by crashing waves and the calls of jungle avian species.</li>
</ul>
<p><strong>Field Logistics:</strong> Due to its severe elevation, navigating the access roads demands high-level motorbike handling skills. It is fundamentally engineered for agile youth and couples rather than the elderly.</p>

          <div id="rai-ca-homestay-a-radiant-youth-on-the-shore" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">2</span>
              . Rai Ca Homestay: A Radiant Youth on the Shore
            </h3>
          </div>
        <p>To document Hon Son without dedicating ink to Rai Ca (<em>The Otter</em>) is a dereliction of duty. Rai Ca does not merely peddle sleeping quarters; it curates an &quot;ecosystem of unbridled youth.&quot;</p>
<p><strong>The Highlights:</strong></p>
<ul>
<li>The compound features a decommissioned minibus transformed into a tactical bar, illuminated by lanterns strung across ancient coconut palms.</li>
<li>The hallmark Rai Ca experience involves deploying on motorized skiffs for afternoon coral diving, followed by grilling sea urchins and wild octopus directly on the sand while acoustic guitars dictate the rhythm. An astronomical telescope for stargazing serves as a unique nocturnal asset.</li>
</ul>

          <div id="bacs-homestay-contemporary-minimalist-refuge" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">3</span>
              . Bac's Homestay: Contemporary Minimalist Refuge
            </h3>
          </div>
        <p>Anchored at Bai Bac—undeniably the softest, most expansive stretch of sand on Hon Son—Bac&#39;s Homestay injects a refreshing wave of modern Minimalism that manages to remain fiercely intimate.</p>
<p><strong>The Highlights:</strong></p>
<ul>
<li>Luminous wooden interiors and 4-star standard bedding guarantee profound physical recovery following rigorous ocean exploration.</li>
<li>The homestay&#39;s galley is legendary for the matriarch&#39;s masterful seafood execution. Flash-steamed squid with scallions or the delicately sweet grouper hotpot routinely secure 5-star traveler ratings.</li>
</ul>

          <div id="sao-bien-coffee-and-homestay-cocobay" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">4</span>
              . Sao Bien Coffee & Homestay (Cocobay)
            </h3>
          </div>
        <p>Positioned mid-elevation along the serpentine coastal pass, Sao Bien represents the seamless hybridization of a specialized coffee outpost and a lodging facility.</p>
<p><strong>The Highlights:</strong></p>
<ul>
<li>The ultimate strategic coordinate for intercepting the Hon Son sunset. Precisely at 17:30, the sprawling bay below is saturated in violent shades of orange and gold.</li>
<li>An open-air architecture that captures relentless ocean gales, making it the premier staging ground for cohorts who intend to play music until dawn.</li>
</ul>

          <div id="thuongs-house-the-perfect-dawn-interceptor" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">5</span>
              . Thuong's House: The Perfect Dawn Interceptor
            </h3>
          </div>
        <p>Straddling the absolute edge of the surf, Thuong&#39;s House utilizes massive glass panels to weaponize its visual dominance. You are precisely three strides from your doorframe to the saltwater.</p>
<p><strong>The Highlights:</strong></p>
<ul>
<li>The compound boasts a sprawling, elevated terrace thrusting out over the ocean—an impeccable theater for staging family BBQ operations.</li>
<li>Elite logistical support: The proprietors facilitate the direct procurement of marine life from fishing trawlers making dawn landfall, executing custom culinary preparation for a negligible surcharge.</li>
</ul>

          <div id="thanh-duyen-homestay-the-pulse-of-the-fishing-village" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">6</span>
              . Thanh Duyen Homestay: The Pulse of the Fishing Village
            </h3>
          </div>
        <p>If your mandate is to experience the unfiltered, abrasive reality of an authentic fisherman, Thanh Duyen is your harbor. Devoid of pretense or gloss, Thanh Duyen delivers the raw, fervent hospitality of the island&#39;s indigenous population.</p>
<p><strong>The Highlights:</strong></p>
<ul>
<li>Aggressively economical tariffs suitable for student budgets.</li>
<li>Mr. Duyen (the operator) acts as the ultimate &quot;local fixer,&quot; routinely deploying guests to classified rock formations for angling, crab hunting, or hacking through uncharted primary jungle routes omitted from conventional tourist maps.</li>
</ul>

          <div id="fly-up-resort-high-altitude-luxury" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">7</span>
              . Fly Up Resort: High-Altitude Luxury
            </h3>
          </div>
        <p>Despite adopting the &quot;Resort&quot; nomenclature, Fly Up vigorously defends the ethos of an ecological homestay. It is the ultimate tactical upgrade for honeymooning couples or those harboring uncompromising standards for modern amenities.</p>
<p><strong>The Highlights:</strong></p>
<ul>
<li>Commands a strictly regulated private beach, completely neutralizing the threat of overcrowding or civilian waste.</li>
<li>The bungalows are lined with imported pine, heavily armed with climate control, solar-powered thermal water systems, and open-air soaking tubs.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-field-manual-tactical-protocols-for-hon-son-homestays" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            The Field Manual: Tactical Protocols for Hon Son Homestays
          </h2>
        </div>
      <ol>
<li><strong>The Power and Water Paradigm:</strong> While Hon Son is tethered to the national grid, peak operational seasons (major holidays) occasionally trigger voltage drops or localized blackouts. Freshwater is harvested from natural island aquifers; ruthless conservation is mandatory.</li>
<li><strong>Booking Protocols:</strong> High-value targets like Sohora and Rai Ca frequently hit 100% capacity a month in advance. Executing a rapid wire transfer (typically 50% deposit) is non-negotiable to secure your beachhead.</li>
<li><strong>Biological Threats:</strong> Due to the dense juxtaposition of jungle and sea, high-grade insect repellent and bite-relief ointments must remain on your person at all times.</li>
<li><strong>Cultural Engagement:</strong> A homestay is, fundamentally, a civilian&#39;s private residence. Maintain rigorous communal hygiene, separate your plastic waste to defend the marine biome, and terminate high-decibel karaoke operations by 22:00 hours.</li>
</ol>
<p>Securing the correct coordinates to rest your head transcends mere physical recovery; the architectural soul of your chosen homestay, interwoven with the narratives of your hosts, will ultimately cement itself as the most profound memory of your Hon Son expedition.</p>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: The Unhurried Rhythm of the Tide</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                To sleep in a cliffside bungalow on Hon Son is to surrender to the nocturnal symphony of crashing waves, whispering sea winds, and incandescent starlight. Here, time softens, and the traveler rediscovers the restorative simplicity of island life.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Island Coordinates</div>
        <div class="font-bold text-slate-800 text-[13px]">Hon Son (Lai Son), Kien Hai, Kien Giang</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌤️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Best Travel Window</div>
        <div class="font-bold text-slate-800 text-[13px]">November through May (Azure Waters)</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🏡</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Top Sanctuaries</div>
        <div class="font-bold text-slate-800 text-[13px]">Sohora Sea Mountain, Rai Ca, Bac's Homestay</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🦐</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Gastronomy Ritual</div>
        <div class="font-bold text-slate-800 text-[13px]">Fresh sea urchin BBQ & wild octopus</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/hon-son-island-lodging-homestays" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/hon-son-island-lodging-homestays');" 
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

export const canThoBeachArtificialOasisHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">Can Tho Beach: An Artificial Oasis Beneath the Cable-Stayed Giant (2026)</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          Can Tho Beach: An Artificial Oasis Beneath the Cable-Stayed Giant (2026)
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          Alluvial Sandbanks, Cable-Stayed Panoramas & Riverine Leisure
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          Perched gracefully at the confluence of the Hau and Can Tho rivers, Can Tho Beach offers an artificial riverine oasis where golden sunsets, watercraft excursions, and cable-stayed bridge vistas converge beneath the Southern evening sky.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Aug 3, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">9 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏖️</span> 400m Engineered Sand Oasis
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌉</span> Can Tho Bridge Vistas
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🚤</span> Jet Ski & Hau River Cruises
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Leisure Field Notes
    </div>
  
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
                  <a href="#a-delightful-paradox-the-ocean-of-the-western-capital" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">A Delightful Paradox: The "Ocean" of the Western Capital</a>
  <a href="#the-convergence-of-ocean-and-river" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Convergence of "Ocean" and "River"</a>
  <a href="#expedition-map-navigating-the-beach-ecosystem" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Expedition Map: Navigating the Beach Ecosystem</a>
  <a href="#the-million-dollar-vista-the-illumination-of-can-tho-bridge" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The "Million-Dollar" Vista: The Illumination of Can Tho Bridge</a>
  <a href="#beachfront-gastronomy-a-unique-culinary-hybrid" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Beachfront Gastronomy: A Unique Culinary Hybrid</a>
  <a href="#tactical-field-guide" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Tactical Field Guide</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Coordinates</div>
        <div class="text-[13px] font-bold text-slate-900">Cai Khe Ward, Ninh Kieu, Can Tho</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🕒</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Hours</div>
        <div class="text-[13px] font-bold text-slate-900">07:00 AM – 23:00 PM Daily</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">2026 Entry Fee</div>
        <div class="text-[13px] font-bold text-slate-900">20,000 VND (Includes beverage)</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🌅</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Golden Hour</div>
        <div class="text-[13px] font-bold text-slate-900">17:00 – 18:00 (Sunset over Bridge)</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            <hr>
<ul>
<li><strong>Coordinates:</strong> Bai Cat Zone, Cai Khe Ward, Ninh Kieu District, Can Tho City (Adjacent to the Song Hau Park).</li>
<li><strong>Scale:</strong> A 400-meter stretch of sand, engineered with over 1 million cubic meters of purified sand deposited along the Hau River bank.</li>
<li><strong>Admission Fee (2026):</strong> 20,000 VND / Person (Includes one complimentary beverage and sanitation surcharge).</li>
<li><strong>Operating Hours:</strong> 07:00 AM - 11:00 PM daily.</li>
<li><strong>The Golden Visual Coordinates:</strong> 17:00 – 18:00 (The precise hour dusk descends over the cable-stayed bridge).</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="a-delightful-paradox-the-ocean-of-the-western-capital" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            A Delightful Paradox: The "Ocean" of the Western Capital
          </h2>
        </div>
      <p>&quot;Does Can Tho have a beach?&quot; – A question that seems geographically absurd for a metropolis anchored deep within the landlocked expanse of the Mekong Delta, yet yields an answer that consistently astonishes voyagers. It is not an ocean of crashing saltwater surf; rather, &quot;Can Tho Beach&quot; (<em>Biển Cần Thơ</em>) is a massive, meticulously engineered artificial bathing zone situated squarely at the confluence of the Hau and Can Tho rivers.</p>
<p>Officially commissioned in 2014, this infrastructure quenched the &quot;thirst for the sea&quot; harbored by the Delta&#39;s populace. Millions of cubic meters of silt-free white sand were imported to forge a gentle 400-meter shoreline, fracturing the urban concrete and birthing an entirely incongruous recreational expanse in the heart of the city.</p>

        <h3 id="the-convergence-of-ocean-and-river" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The Convergence of "Ocean" and "River"
        </h3>
      <p>The most profound paradox of Can Tho Beach lies not in its imported sand, but in the experiential anomaly of <strong>&quot;bathing in freshwater while absorbing the pulse of riverine life.&quot;</strong> Stripped of the stinging salinity of the ocean, travelers plunge into the cool, mineral-rich alluvial waters of the Hau River. Replacing the deafening roar of oceanic swells, the acoustic backdrop here is the rhythmic, mechanical chugging of wooden cargo boats ferrying agricultural bounties upriver.</p>
<p>This profound cultural hybridization renders Can Tho Beach an absolutely singular coordinate—an atmosphere entirely irreplicable in coastal strongholds like Vung Tau or Nha Trang.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="expedition-map-navigating-the-beach-ecosystem" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            Expedition Map: Navigating the Beach Ecosystem
          </h2>
        </div>
      <p>The Can Tho Beach compound extends far beyond sand and water. It is engineered as a micro-entertainment complex, servicing a spectrum of traveler demands from dawn until deep into the night.</p>

      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 text-sm">
          <thead>
            <tr class="bg-slate-900 text-white font-serif">
              <th class="p-4 font-bold text-left">Sector</th><th class="p-4 font-bold text-left">Core Activities</th><th class="p-4 font-bold text-left">Optimal Timeframe</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Aquatic Sports Zone</strong></td><td class="p-4">Kayak expeditions, high-velocity Jetski maneuvers, and adrenaline-fueled banana boat towing.</td><td class="p-4">07:00 - 10:00 (Dead calm waters, brilliant sunlight)</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Bathing &amp; Solarium</strong></td><td class="p-4">Near-shore swimming and recovering on beanbags shaded by thatched palm umbrellas.</td><td class="p-4">15:30 - 17:30 (Evading the solar apex)</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Gastronomy Sector</strong></td><td class="p-4">Sourcing fresh coconuts, scallion-grilled seafood, and hyper-local Delta bar snacks.</td><td class="p-4">17:00 - 20:00 (The dinner offensive)</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Performance Stage</strong></td><td class="p-4">Synchronized water fountains, belly dance showcases, contemporary choreography, and live acoustic sets.</td><td class="p-4">19:00 - 21:00 (Post-illumination)</td></tr>

          </tbody>
        </table>
      </div>
    
        <h3 id="the-million-dollar-vista-the-illumination-of-can-tho-bridge" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The "Million-Dollar" Vista: The Illumination of Can Tho Bridge
        </h3>
      <p>If one must isolate a singular mandate for deploying to Can Tho Beach, it is the <strong>unobstructed, frontal visual command of the Can Tho Bridge</strong>.</p>
<p>As twilight initiates, the entire beachfront is bathed in the violent, glowing embers of the sunset reflecting off the Hau River. When total darkness falls, thousands of LED nodes strung along the bridge&#39;s massive stay cables ignite, carving a luminous ribbon across the night sky. Sitting firmly on the sand, armed with a cocktail or a chilled coconut, and staring down this colossal feat of modern engineering constitutes a visual experience of immense gravity.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="beachfront-gastronomy-a-unique-culinary-hybrid" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            Beachfront Gastronomy: A Unique Culinary Hybrid
          </h2>
        </div>
      <p>The culinary kiosks flanking the &quot;Mini Beach&quot; execute a menu engineered for sheer indulgence. Despite being embedded in the heart of the alluvial plains, you are guaranteed access to platters of freshly charred seafood: milk oysters, cuttlefish, and live-caught octopus.</p>
<p>However, the seasoned epicurean opts for a distinctly localized pairing: matching grilled seafood not with conventional beverages, but with... a macerated Macapuno coconut (<em>dừa sáp dầm</em>) or a hyper-fresh orchard smoothie. This deliberate contradiction delivers a cooling sensation that is unmistakably rooted in Delta culture. The beverage outposts are camouflaged as diminutive thatched huts scattered beneath towering coconut palms, establishing flawless backdrops for &quot;Tropical&quot; expedition photography.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="tactical-field-guide" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            Tactical Field Guide
          </h2>
        </div>
      <p>To maximize operational efficiency at Can Tho Beach, internalize the following logistical realities:</p>
<ol>
<li><strong>Traffic and Extraction Logistics:</strong> The primary infiltration route (Song Hau Street) routinely suffers severe vehicular gridlock on weekend evenings as massive civilian crowds converge on the promenade. Secure a parking perimeter further out (near the stadium sector) and execute a dismounted approach to conserve time.</li>
<li><strong>Aquatic Safety Protocols:</strong> Do not be deceived; this is a mighty river. The Hau River&#39;s current is aggressive, particularly during the flood season (August - November). The designated bathing zone is fortified with a perimeter buoy line. <strong>Under no circumstances should you swim beyond the buoys</strong>, lest you risk being dragged into the deep-water shipping lanes utilized by heavy commercial freighters. Flotation devices are strictly mandatory for all minors, who must remain under constant adult supervision.</li>
<li><strong>Atmospheric Variables:</strong> This open-air theater offers minimal hardened shelter. Should you deploy during the monsoon season, rigorously cross-reference meteorological forecasts, or pivot to the hardened coffee outposts along the river embankment rather than committing to the sand.</li>
</ol>
<p>Can Tho Beach does not harbor delusions of rivaling a genuine coastline. Its absolute core value lies in violently carving out a breathing space within an expanding metropolis—a liberated waystation where both civilians and voyagers can synchronize their pulse with the tranquil, relentless flow of the great mother Mekong.</p>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: The Gentle Western Capital</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                Can Tho Beach is not about replicating ocean surf; it is about celebrating the gentle, breezy romance of the mighty Hau River. As dusk settles and bridge lights shimmer across the water, the voyager is reminded why Can Tho is celebrated as the unforgettable heart of the Southwest.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Oasis Location</div>
        <div class="font-bold text-slate-800 text-[13px]">Song Hau Park, Cai Khe, Can Tho</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌉</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Iconic Perspective</div>
        <div class="font-bold text-slate-800 text-[13px]">Direct panorama of Can Tho Cable Bridge</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌅</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Optimal Arrival</div>
        <div class="font-bold text-slate-800 text-[13px]">Late afternoon for cool breeze & sunset</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🍹</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Leisure Highlights</div>
        <div class="font-bold text-slate-800 text-[13px]">Riverside cafes, speedboats, acoustic nights</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/can-tho-beach-artificial-oasis" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/can-tho-beach-artificial-oasis');" 
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

export const buuLongTouristAreaDongNaiHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">Buu Long Tourist Area: The Miniature Ha Long Bay of Dong Nai (2026 Guide)</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          Buu Long Tourist Area: The Miniature Ha Long Bay of Dong Nai (2026 Guide)
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          A Comprehensive 2026 Cultural & Practical Expedition Guide
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          A curated field guide designed for intentional voyagers seeking deep cultural resonance and seamless navigation across Vietnam's iconic landscapes.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Aug 3, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">10 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Bespoke Field Notes
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">📍</span> Curated Inbound Journey
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">✨</span> Slow Travel Signature
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏆</span> The Rice Tour Verified
    </div>
  
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
                  <a href="#the-resurgence-of-dong-nais-miniature-ha-long-bay" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Resurgence of Dong Nai's "Miniature Ha Long Bay"</a>
  <a href="#2026-transit-and-logistics-navigating-to-buu-long" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🗺️ 2026 Transit & Logistics: Navigating to Buu Long</a>
  <a href="#by-private-vehicle-motorbikecar" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">By Private Vehicle (Motorbike/Car)</a>
  <a href="#by-public-bus" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">By Public Bus</a>
  <a href="#the-core-sanctuaries-lakes-and-sacred-peaks" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🏔️ The Core Sanctuaries: Lakes and Sacred Peaks</a>
  <a href="#the-twin-waters-long-an-and-long-van-lakes" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Twin Waters: Long An & Long Van Lakes</a>
  <a href="#binh-dien-mountain-and-buu-phong-ancient-pagoda" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Binh Dien Mountain & Buu Phong Ancient Pagoda</a>
  <a href="#long-an-mountain-and-long-son-thach-dong-pagoda" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Long An Mountain & Long Son Thach Dong Pagoda</a>
  <a href="#curated-experiences-for-the-2026-explorer" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🏕️ Curated Experiences for the 2026 Explorer</a>
  <a href="#essential-field-notes-for-the-discerning-traveler" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🌟 Essential Field Notes for the Discerning Traveler</a>
  <a href="#regional-synergy" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Regional Synergy</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Location</div>
        <div class="text-[13px] font-bold text-slate-900">Vietnam Inbound</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Ideal Timing</div>
        <div class="text-[13px] font-bold text-slate-900">Year-Round</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Access Policy</div>
        <div class="text-[13px] font-bold text-slate-900">Curated Entry</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Experience Type</div>
        <div class="text-[13px] font-bold text-slate-900">Cultural Immersion</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            <hr>
<ul>
<li><strong>Coordinates:</strong> Huynh Van Nghe Street, Tran Bien Ward, Dong Nai Province (6km from Bien Hoa center).</li>
<li><strong>Scale:</strong> 84 hectares of lakes, mountains, and ancient temples.</li>
<li><strong>2026 Ticket Pricing:</strong> 150,000 VND (Adults) | 60,000 VND (Children 1.0m - 1.4m) | Free (Under 1.0m).</li>
<li><strong>Operating Hours:</strong> 07:00 AM – 05:00 PM (Closed on Tuesdays for maintenance, except on national holidays).</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-resurgence-of-dong-nais-miniature-ha-long-bay" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            The Resurgence of Dong Nai's "Miniature Ha Long Bay"
          </h2>
        </div>
      <p>Long before it became a sculpted ecological sanctuary, the landscape of <strong>Buu Long Tourist Area</strong> was a rugged, untamed quarry. Prior to 1975, local residents heavily mined the limestone cliffs. Recognizing the profound cultural and geological value of these formations, local authorities transformed the 84-hectare expanse into a protected national heritage site by 1990. Today, it stands as a poetic juxtaposition of man-made preservation and natural splendor, earning its moniker as the &quot;Miniature Ha Long Bay of the South.&quot;</p>
<p>For the discerning traveler in 2026, Buu Long offers a serene counterpoint to the frenetic pace of Ho Chi Minh City. Just a 30-kilometer ride away, this sanctuary invites you to wander through ancient pagodas, paddle across still waters, and find quietude beneath the shade of secular trees.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="2026-transit-and-logistics-navigating-to-buu-long" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🗺️ 2026 Transit & Logistics: Navigating to Buu Long
          </h2>
        </div>
      <p>Situated conveniently close to the southern metropolis, Buu Long remains highly accessible for both spontaneous weekend retreats and planned day trips.</p>

        <h3 id="by-private-vehicle-motorbikecar" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          By Private Vehicle (Motorbike/Car)
        </h3>
      <p>From Ho Chi Minh City, navigate towards Pham Van Dong Avenue, merging onto National Highway 1A. Proceed straight until you cross the Hoa An Bridge. At the ensuing roundabout, take Huynh Van Nghe Street. Continue for approximately 2.4 kilometers, and the majestic gates of the ecological park will appear on your right.</p>

        <h3 id="by-public-bus" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          By Public Bus
        </h3>
      <p>For a carbon-conscious journey, the public transit network offers a reliable route. From Mien Tay Bus Station, board Route 601, or take Route 5 from Cho Lon Bus Station heading to Bien Hoa. Upon reaching the Bien Hoa city terminal, transfer to Route 7, which conveniently drops you directly at the Buu Long entrance.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-core-sanctuaries-lakes-and-sacred-peaks" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🏔️ The Core Sanctuaries: Lakes and Sacred Peaks
          </h2>
        </div>
      <p>The true soul of Buu Long is segmented into distinct geographical and spiritual clusters, each offering a unique atmospheric experience.</p>

        <h3 id="the-twin-waters-long-an-and-long-van-lakes" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The Twin Waters: Long An & Long Van Lakes
        </h3>
      <p>Nestled in the southeastern quadrant, these artificial lakes form the lifeblood of the park. Long An Lake, sprawling across 18.5 hectares at the foot of Long An Mountain, mirrors the imposing limestone karsts above. The neighboring Long Van Lake rests peacefully between Binh Dien and Long An mountains. The crystalline, windless waters here provide a canvas for quiet contemplation and leisurely swan boat rides.</p>

        <h3 id="binh-dien-mountain-and-buu-phong-ancient-pagoda" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Binh Dien Mountain & Buu Phong Ancient Pagoda
        </h3>
      <p>Spanning 8.7 hectares in the northeast, Binh Dien Mountain is characterized by its ancient, sprawling banyan trees and bizarre rock formations resembling dragons, tigers, and tortoises. </p>
<p>The crown jewel of this cluster is the <strong>Buu Phong Ancient Pagoda</strong>. Featuring a rare hexagonal architectural design and three four-story stupas, this sacred site exudes a palpable sense of mysticism. Scattered statues of sleeping Buddhas enhance the solemnity of the forest, making it a focal point for local spiritual gatherings.</p>

        <h3 id="long-an-mountain-and-long-son-thach-dong-pagoda" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Long An Mountain & Long Son Thach Dong Pagoda
        </h3>
      <p>Rising 52 meters above sea level, the eastern Long An cluster is thickly forested and rugged. Here lies the <strong>Long Son Thach Dong Pagoda</strong>, seemingly carved directly into the chaotic pile of boulders. The juxtaposition of ancient masonry against the raw, jagged earth creates a profound visual impact. It is here that travelers often pause, capturing the quiet interplay of light and stone.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="curated-experiences-for-the-2026-explorer" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🏕️ Curated Experiences for the 2026 Explorer
          </h2>
        </div>
      <p>Beyond passive observation, Buu Long is designed for active engagement with nature. </p>
<ul>
<li><strong>Aquatic Exploration:</strong> Rent a swan pedal boat (approximately 50,000 VND) to navigate the karsts of Long An Lake up close. </li>
<li><strong>The Sunflower Valley:</strong> If visiting between October and December, the seasonal sunflower fields burst into a vibrant yellow, contrasted occasionally by the deep purple of salvia blooms. </li>
<li><strong>The Bridge of Love:</strong> Inspired by the Pont des Arts in Paris, this ornamental bridge stretching across Long An Lake is adorned with crimson heart-shaped fixtures, offering a highly stylized backdrop for photography.</li>
<li><strong>Overnight Camping:</strong> For those wishing to experience the park after dusk, the administration offers complete tent and grill rental services. Pitching a tent under the canopy allows you to experience the nocturnal sounds of the ecosystem.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="essential-field-notes-for-the-discerning-traveler" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🌟 Essential Field Notes for the Discerning Traveler
          </h2>
        </div>
      <p>To maximize your experience in this 84-hectare expanse, consider the following logistical nuances:</p>
<ol>
<li><strong>Footwear is Paramount:</strong> The terrain oscillates between paved walkways, steep stone stairs near the pagodas, and grassy knolls. Sturdy, flat walking shoes are non-negotiable.</li>
<li><strong>Picnic Provisions:</strong> Unlike many commercial parks, Buu Long allows visitors to bring outside food and utilize the lakeside huts without incurring arbitrary surcharges. </li>
<li><strong>Weather Matrices:</strong> The ideal visiting window is during the dry season (December to April). If visiting during the monsoon (May to November), sudden but brief downpours are common; carry a lightweight poncho.</li>
</ol>

        <h3 id="regional-synergy" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Regional Synergy
        </h3>
      <p>If your itinerary permits, Buu Long pairs exceptionally well with other Dong Nai heritage sites such as the Chua Chan Mountain or the Nam Cat Tien National Park. </p>
<p>To walk through Buu Long is to witness the deliberate healing of a fractured landscape. What was once a scarred quarry is now a testament to ecological restoration—a living, breathing sanctuary waiting to be respectfully explored.</p>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: Journeying with Purpose</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                True exploration is not simply the accumulation of photographs, but the conscious discovery of history, craftsmanship, and human kinship along the living rivers of Vietnam.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Location</div>
        <div class="font-bold text-slate-800 text-[13px]">Vietnam Inbound</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Ideal Timing</div>
        <div class="font-bold text-slate-800 text-[13px]">Year-Round</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Access Policy</div>
        <div class="font-bold text-slate-800 text-[13px]">Curated Entry</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Experience Type</div>
        <div class="font-bold text-slate-800 text-[13px]">Cultural Immersion</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/buu-long-tourist-area-dong-nai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/buu-long-tourist-area-dong-nai');" 
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

export const daLatSpecialtiesHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">Da Lat Specialties: The Definitive Highland Culinary Guide (2026)</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          Da Lat Specialties: The Definitive Highland Culinary Guide (2026)
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          A Comprehensive 2026 Cultural & Practical Expedition Guide
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          A curated field guide designed for intentional voyagers seeking deep cultural resonance and seamless navigation across Vietnam's iconic landscapes.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Aug 2, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">10 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Bespoke Field Notes
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">📍</span> Curated Inbound Journey
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">✨</span> Slow Travel Signature
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏆</span> The Rice Tour Verified
    </div>
  
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
                  <a href="#the-culinary-terroir-of-the-mist-city" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Culinary Terroir of the Mist City</a>
  <a href="#the-warmth-in-a-bowl-soups-and-broths" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🥣 The Warmth in a Bowl: Soups and Broths</a>
  <a href="#banh-can-mini-pancake-with-quail-egg" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Banh Can (Mini Pancake with Quail Egg)</a>
  <a href="#banh-mi-xiu-mai-pork-meatball-baguette" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Banh Mi Xiu Mai (Pork Meatball Baguette)</a>
  <a href="#the-charcoal-evening-night-market-signatures" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🔥 The Charcoal Evening: Night Market Signatures</a>
  <a href="#banh-trang-nuong-vietnamese-pizza" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Banh Trang Nuong (Vietnamese Pizza)</a>
  <a href="#kem-bo-avocado-ice-cream" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Kem Bo (Avocado Ice Cream)</a>
  <a href="#the-discerning-diners-matrix-top-3-must-eats" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🌟 The Discerning Diner's Matrix: Top 3 Must-Eats</a>
  <a href="#insider-protocols-for-the-2026-traveler" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🧠 Insider Protocols for the 2026 Traveler</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Location</div>
        <div class="text-[13px] font-bold text-slate-900">Vietnam Inbound</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Ideal Timing</div>
        <div class="text-[13px] font-bold text-slate-900">Year-Round</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Access Policy</div>
        <div class="text-[13px] font-bold text-slate-900">Curated Entry</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Experience Type</div>
        <div class="text-[13px] font-bold text-slate-900">Cultural Immersion</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            <hr>
<ul>
<li><strong>Gastronomic Region:</strong> Langbiang Plateau, Lam Dong Province.</li>
<li><strong>Signature Flavors:</strong> Earthy, umami-rich, warming broths, and farm-to-table highland produce.</li>
<li><strong>2026 Price Range:</strong> 30,000 – 150,000 VND (Street Food) | 250,000+ VND (Restaurants).</li>
<li><strong>Optimal Tasting Window:</strong> Early morning for hot broths, late evening for charcoal-grilled street food.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-culinary-terroir-of-the-mist-city" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            The Culinary Terroir of the Mist City
          </h2>
        </div>
      <p>Perched 1,500 meters above sea level on the Langbiang Plateau, Da Lat’s culinary identity is inextricably bound to its crisp, alpine climate and its volcanic red basalt soil. Unlike the sweet-leaning palate of the Mekong Delta or the heavily spiced dishes of Central Vietnam, the gastronomy of this misty city is designed for one primary function: thermal comfort. </p>
<p>For the 2026 culinary traveler, Da Lat is no longer just a haven of French colonial nostalgia; it is a dynamic intersection of indigenous highland agriculture and generational street food mastery.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-warmth-in-a-bowl-soups-and-broths" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🥣 The Warmth in a Bowl: Soups and Broths
          </h2>
        </div>
      <p>When the morning fog still clings to the pine valleys, the locals turn to steaming bowls of complex broths.</p>

        <h3 id="banh-can-mini-pancake-with-quail-egg" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Banh Can (Mini Pancake with Quail Egg)
        </h3>
      <p>Baked in porous clay molds over glowing charcoal, <em>Banh Can</em> is the quintessential Da Lat morning ritual. </p>
<ul>
<li><strong>The Technique:</strong> Rice flour batter is poured into terracotta cups, cracked with a quail egg, and served with a dipping broth made of fish sauce, copious scallions, and xiu mai (pork meatballs).</li>
<li><strong>2026 Insider Spot:</strong> Banh Can Le (27/44 Yersin) – expect to wait at least 20 minutes, as each batch is fired to order.</li>
</ul>

        <h3 id="banh-mi-xiu-mai-pork-meatball-baguette" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Banh Mi Xiu Mai (Pork Meatball Baguette)
        </h3>
      <p>A far cry from the stuffed, cold-cut baguettes of Saigon, Da Lat’s iteration deconstructs the sandwich.</p>
<ul>
<li><strong>The Experience:</strong> The baguette is served piping hot alongside a bowl of bone broth containing succulent pork meatballs, pork rind, and fiery highland chili paste.</li>
<li><strong>2026 Insider Spot:</strong> Hoang Dieu Xiu Mai (26 Hoang Dieu). Price: ~35,000 VND.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-charcoal-evening-night-market-signatures" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🔥 The Charcoal Evening: Night Market Signatures
          </h2>
        </div>
      <p>As the temperature plummets post-sunset, the culinary scene shifts to open flames.</p>

        <h3 id="banh-trang-nuong-vietnamese-pizza" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Banh Trang Nuong (Vietnamese Pizza)
        </h3>
      <p>Often trivialized as a tourist novelty, authentic <em>Banh Trang Nuong</em> requires immense dexterity. A thin rice paper disc is placed over coals, layered with quail eggs, fermented shrimp paste, scallions, and dried beef, then rotated continuously to achieve uniform crispness without charring.</p>

        <h3 id="kem-bo-avocado-ice-cream" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Kem Bo (Avocado Ice Cream)
        </h3>
      <p>A paradoxical dessert for a cold city. The volcanic soil of Lam Dong produces butter-soft, high-fat avocados. When blended without ice and topped with a scoop of coconut ice cream, the result is a dense, velvety treat.</p>
<ul>
<li><strong>2026 Insider Spot:</strong> Kem Bo Thanh Thao (76 Nguyen Van Troi).</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-discerning-diners-matrix-top-3-must-eats" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🌟 The Discerning Diner's Matrix: Top 3 Must-Eats
          </h2>
        </div>
      
      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 text-sm">
          <thead>
            <tr class="bg-slate-900 text-white font-serif">
              <th class="p-4 font-bold text-left">Dish</th><th class="p-4 font-bold text-left">Core Ingredient</th><th class="p-4 font-bold text-left">Highland Twist</th><th class="p-4 font-bold text-left">2026 Baseline Price</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Lau Ga La E</strong></td><td class="p-4">Free-range chicken</td><td class="p-4">Lemon basil (La E) native to the highlands</td><td class="p-4">250,000 VND / pot</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Banh Can</strong></td><td class="p-4">Rice flour, quail egg</td><td class="p-4">Served with hot xiu mai broth</td><td class="p-4">40,000 VND / portion</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Lau Bo Ba Toa</strong></td><td class="p-4">Mountain-raised beef</td><td class="p-4">Thick, herb-infused bone broth</td><td class="p-4">300,000 VND / pot</td></tr>

          </tbody>
        </table>
      </div>
    <hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="insider-protocols-for-the-2026-traveler" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🧠 Insider Protocols for the 2026 Traveler
          </h2>
        </div>
      <ul>
<li><strong>Beware of the &quot;Tourist Trap&quot; Strawberries:</strong> Never purchase pre-packaged strawberries at the market perimeter. Always opt for farm-gate purchases where you can verify the cultivar (e.g., New Zealand or Japanese varieties).</li>
<li><strong>The Chili Warning:</strong> Da Lat’s climate produces exceptionally potent <em>satế</em> (chili paste). Taste the paste before liberally adding it to your <em>Banh Mi Xiu Mai</em>.</li>
</ul>
<p>To eat in Da Lat is to understand the geography of the plateau. Every bowl of broth and every charcoal-charred rice paper is a direct response to the fog outside the window—a fleeting, edible warmth in the City of Eternal Spring.</p>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: Journeying with Purpose</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                True exploration is not simply the accumulation of photographs, but the conscious discovery of history, craftsmanship, and human kinship along the living rivers of Vietnam.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Location</div>
        <div class="font-bold text-slate-800 text-[13px]">Vietnam Inbound</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Ideal Timing</div>
        <div class="font-bold text-slate-800 text-[13px]">Year-Round</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Access Policy</div>
        <div class="font-bold text-slate-800 text-[13px]">Curated Entry</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Experience Type</div>
        <div class="font-bold text-slate-800 text-[13px]">Cultural Immersion</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/da-lat-specialties" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/da-lat-specialties');" 
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

export const sauHoaiRiceNoodleOvenHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">Sau Hoai Rice Noodle Oven: The Heritage of Can Tho's 'Pizza Hu Tieu' (2026)</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          Sau Hoai Rice Noodle Oven: The Heritage of Can Tho's 'Pizza Hu Tieu' (2026)
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          A Comprehensive 2026 Cultural & Practical Expedition Guide
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          A curated field guide designed for intentional voyagers seeking deep cultural resonance and seamless navigation across Vietnam's iconic landscapes.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Jul 29, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">10 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Bespoke Field Notes
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">📍</span> Curated Inbound Journey
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">✨</span> Slow Travel Signature
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏆</span> The Rice Tour Verified
    </div>
  
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
                  <a href="#the-resilient-looms-of-the-mekong-starch" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Resilient Looms of the Mekong Starch</a>
  <a href="#the-architecture-of-the-noodle-a-craft-unveiled" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🛶 The Architecture of the Noodle: A Craft Unveiled</a>
  <a href="#step-1-the-rice-slurry-xay-bot" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Step 1: The Rice Slurry (Xay Bot)</a>
  <a href="#step-2-the-steam-bath-trang-banh" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Step 2: The Steam Bath (Trang Banh)</a>
  <a href="#step-3-solar-curing-phoi-banh" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Step 3: Solar Curing (Phoi Banh)</a>
  <a href="#step-4-the-mechanical-cut-cat-soi" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Step 4: The Mechanical Cut (Cat Soi)</a>
  <a href="#the-genesis-of-pizza-hu-tieu" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🍕 The Genesis of "Pizza Hu Tieu"</a>
  <a href="#the-heritage-matrix-tracing-the-flavors" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🌟 The Heritage Matrix: Tracing the Flavors</a>
  <a href="#field-notes-for-the-2026-voyager" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🧠 Field Notes for the 2026 Voyager</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Location</div>
        <div class="text-[13px] font-bold text-slate-900">Vietnam Inbound</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Ideal Timing</div>
        <div class="text-[13px] font-bold text-slate-900">Year-Round</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Access Policy</div>
        <div class="text-[13px] font-bold text-slate-900">Curated Entry</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Experience Type</div>
        <div class="text-[13px] font-bold text-slate-900">Cultural Immersion</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            <hr>
<ul>
<li><strong>Coordinates:</strong> 476/14 Lo Vong Cung Street, An Binh Ward, Ninh Kieu District, Can Tho.</li>
<li><strong>Legacy:</strong> Over 40 years of traditional rice noodle (Hu Tieu) craftsmanship.</li>
<li><strong>Signature Dish:</strong> The legendary &quot;Pizza Hu Tieu&quot; (Deep-fried rice noodles).</li>
<li><strong>2026 Admission / Dish Price:</strong> Free entry | 50,000 VND / portion of Pizza Hu Tieu.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-resilient-looms-of-the-mekong-starch" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            The Resilient Looms of the Mekong Starch
          </h2>
        </div>
      <p>In the labyrinthine waterways surrounding the Cai Rang Floating Market, the <strong>Sau Hoai Rice Noodle Oven</strong> stands as a living museum of Mekong Delta culinary heritage. For over four decades, the Hoai family has maintained a delicate, analog rhythm in a rapidly industrializing region. While modern factories churn out dried noodles by the ton, Sau Hoai preserves the tactile, labor-intensive art of hand-milled, sun-dried <em>Hu Tieu</em>.</p>
<p>For the cultural voyager in 2026, this is not merely a rest stop; it is an immersive study in agricultural ingenuity, culminating in one of the most innovative street food crossovers in the region: the so-called &quot;Pizza Hu Tieu.&quot;</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-architecture-of-the-noodle-a-craft-unveiled" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🛶 The Architecture of the Noodle: A Craft Unveiled
          </h2>
        </div>
      <p>The lifecycle of a Sau Hoai noodle is dictated entirely by the sun and the delta’s humidity. Visitors arriving before 09:00 AM are privy to the complete, unadulterated process.</p>

        <h3 id="step-1-the-rice-slurry-xay-bot" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Step 1: The Rice Slurry (Xay Bot)
        </h3>
      <p>Locally sourced Mekong rice is soaked overnight and stone-milled into a velvety slurry. The ratio of water to starch is a fiercely guarded family secret, adjusting dynamically based on the morning’s ambient temperature.</p>

        <h3 id="step-2-the-steam-bath-trang-banh" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Step 2: The Steam Bath (Trang Banh)
        </h3>
      <p>The slurry is ladled onto a taut cloth stretched over boiling water. Within seconds, it coagulates into a translucent, gelatinous disc. This requires immense physical dexterity, as the artisan must swiftly lift the hot disc with a bamboo roller without tearing the fragile matrix.</p>

        <h3 id="step-3-solar-curing-phoi-banh" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Step 3: Solar Curing (Phoi Banh)
        </h3>
      <p>The discs are laid out on large bamboo lattices (<em>liếp</em>) and surrendered to the intense tropical sun. The timing here is critical; overexposure results in brittle noodles, while underexposure leads to spoilage.</p>

        <h3 id="step-4-the-mechanical-cut-cat-soi" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Step 4: The Mechanical Cut (Cat Soi)
        </h3>
      <p>Once perfectly cured, the semi-hardened rice sheets are fed into a hand-cranked cutting machine, emerging as the uniform, elastic strands that define Southern Vietnamese <em>Hu Tieu</em>.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-genesis-of-pizza-hu-tieu" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🍕 The Genesis of "Pizza Hu Tieu"
          </h2>
        </div>
      <p>The defining innovation of Sau Hoai is an accidental masterpiece. Seeking a way to repurpose the irregular noodle strands left at the end of the cutting process, Mr. Sau Hoai experimented with deep-frying.</p>
<p>The result is a spectacular golden disc of aerated, crispy starch. Topped with a savory medley of stewed pork, braised peanuts, quail eggs, coconut milk, and a scattering of fresh cilantro, it visually mimics a pizza. Texturally, it is a masterclass in contrasts: the shatteringly crisp noodle base yielding to the rich, umami-laden pork reduction.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-heritage-matrix-tracing-the-flavors" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🌟 The Heritage Matrix: Tracing the Flavors
          </h2>
        </div>
      
      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 text-sm">
          <thead>
            <tr class="bg-slate-900 text-white font-serif">
              <th class="p-4 font-bold text-left">Experience</th><th class="p-4 font-bold text-left">Sensory Profile</th><th class="p-4 font-bold text-left">2026 Pricing</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Pizza Hu Tieu</strong></td><td class="p-4">Crisp, savory, coconut-infused umami</td><td class="p-4">50,000 VND</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Traditional Hu Tieu Nam Vang</strong></td><td class="p-4">Chewy strands in clear, bone-marrow pork broth</td><td class="p-4">45,000 VND</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Noodle Crafting Workshop</strong></td><td class="p-4">Tactile, steamy, physically demanding</td><td class="p-4">Included (Tips appreciated)</td></tr>

          </tbody>
        </table>
      </div>
    <hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="field-notes-for-the-2026-voyager" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🧠 Field Notes for the 2026 Voyager
          </h2>
        </div>
      <ul>
<li><strong>The Golden Hour:</strong> To witness the steam rising from the cauldrons and to actively participate in the noodle-making process, arrive between 07:00 AM and 09:00 AM.</li>
<li><strong>Logistical Synergy:</strong> The oven is optimally positioned as a post-sunrise stop following a 05:30 AM excursion to the Cai Rang Floating Market. Tell your boat captain to dock directly at the Sau Hoai riverside pier.</li>
<li><strong>Souvenir Procurement:</strong> The oven sells beautifully packaged, naturally dyed <em>Hu Tieu</em> (using magenta plant, pandan, and gac fruit). These make for an excellent, lightweight culinary souvenir.</li>
</ul>
<p>To step into the Sau Hoai oven is to inhale the essence of the Delta—a fragrant amalgamation of woodsmoke, steamed rice, and generational resilience.</p>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: Journeying with Purpose</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                True exploration is not simply the accumulation of photographs, but the conscious discovery of history, craftsmanship, and human kinship along the living rivers of Vietnam.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Location</div>
        <div class="font-bold text-slate-800 text-[13px]">Vietnam Inbound</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Ideal Timing</div>
        <div class="font-bold text-slate-800 text-[13px]">Year-Round</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Access Policy</div>
        <div class="font-bold text-slate-800 text-[13px]">Curated Entry</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Experience Type</div>
        <div class="font-bold text-slate-800 text-[13px]">Cultural Immersion</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/sau-hoai-rice-noodle-oven" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/sau-hoai-rice-noodle-oven');" 
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

export const hoiAnBanhMiGuideHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">Banh Mi Hoi An: The Definitive Artisan Bread Guide (2026)</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          Banh Mi Hoi An: The Definitive Artisan Bread Guide (2026)
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          A Comprehensive 2026 Cultural & Practical Expedition Guide
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          A curated field guide designed for intentional voyagers seeking deep cultural resonance and seamless navigation across Vietnam's iconic landscapes.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Jul 29, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">10 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Bespoke Field Notes
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">📍</span> Curated Inbound Journey
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">✨</span> Slow Travel Signature
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏆</span> The Rice Tour Verified
    </div>
  
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
                  <a href="#the-anatomy-of-the-ancient-town-loaf" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Anatomy of the Ancient Town Loaf</a>
  <a href="#the-master-ovens-2026-curated-tiers" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🥖 The Master Ovens: 2026 Curated Tiers</a>
  <a href="#tier-1-the-global-icons" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Tier 1: The Global Icons</a>
  <a href="#tier-2-the-local-sanctuaries" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Tier 2: The Local Sanctuaries</a>
  <a href="#the-banh-mi-matrix-decoding-the-fillings" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🌟 The Banh Mi Matrix: Decoding the Fillings</a>
  <a href="#field-notes-for-the-discerning-eater" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🧠 Field Notes for the Discerning Eater</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Location</div>
        <div class="text-[13px] font-bold text-slate-900">Vietnam Inbound</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Ideal Timing</div>
        <div class="text-[13px] font-bold text-slate-900">Year-Round</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Access Policy</div>
        <div class="text-[13px] font-bold text-slate-900">Curated Entry</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Experience Type</div>
        <div class="text-[13px] font-bold text-slate-900">Cultural Immersion</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            <hr>
<ul>
<li><strong>Gastronomic Coordinates:</strong> Hoi An Ancient Town, Quang Nam Province.</li>
<li><strong>The Signature Architecture:</strong> Pointed ends, hyper-crispy exterior, intensely dense crumb.</li>
<li><strong>2026 Price Baseline:</strong> 30,000 – 45,000 VND.</li>
<li><strong>Culinary Fusion:</strong> French baking techniques hybridized with complex Champa/Vietnamese marinades.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-anatomy-of-the-ancient-town-loaf" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            The Anatomy of the Ancient Town Loaf
          </h2>
        </div>
      <p>While Saigon claims the industrial birth of the <em>Banh Mi</em>, it is within the mustard-yellow alleys of Hoi An that the sandwich achieves its absolute artisanal zenith. Praised by the late Anthony Bourdain as &quot;a symphony in a sandwich,&quot; the Hoi An Banh Mi diverges radically from its southern counterpart. </p>
<p>For the 2026 epicurean, understanding this sandwich requires looking beyond the hype. The bread itself is distinct—shorter, sharply pointed at the ends, and baked in wood-fired ovens to achieve a glass-like crust that shatters upon impact, protecting a remarkably dense, chewy crumb capable of absorbing heavily spiced pork gravies without disintegrating.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-master-ovens-2026-curated-tiers" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🥖 The Master Ovens: 2026 Curated Tiers
          </h2>
        </div>
      <p>The alleys of the Ancient Town are saturated with vendors, but true mastery is concentrated in a select few ovens.</p>

        <h3 id="tier-1-the-global-icons" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Tier 1: The Global Icons
        </h3>
      <p>These are the heavyweights, institutions that have defined the global perception of the sandwich.</p>
<ol>
<li><p><strong>Banh Mi Phuong (2B Phan Chau Trinh)</strong></p>
<ul>
<li><strong>The Profile:</strong> Maximalist and heavy. Known for its overwhelming array of cold cuts, homemade mayonnaise, and a highly complex, five-spice infused pork gravy.</li>
<li><strong>2026 Insider Tip:</strong> The queues remain formidable. Arrive before 07:30 AM or after 08:00 PM to avoid the relentless tour bus crowds.</li>
<li><strong>Price:</strong> ~35,000 VND.</li>
</ul>
</li>
<li><p><strong>Madam Khanh - The Banh Mi Queen (115 Tran Cao Van)</strong></p>
<ul>
<li><strong>The Profile:</strong> Refined, matriarchal perfection. The paté here is arguably the finest in Central Vietnam—deeply livery, rich, and impeccably smooth, balanced by sweet pickled papaya.</li>
<li><strong>2026 Insider Tip:</strong> Ask for extra chili jam; Madam Khanh’s proprietary chili oil elevates the fatty liver paté exponentially.</li>
<li><strong>Price:</strong> ~30,000 VND.</li>
</ul>
</li>
</ol>

        <h3 id="tier-2-the-local-sanctuaries" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Tier 2: The Local Sanctuaries
        </h3>
      <p>Where the residents of Hoi An quietly consume their morning staples.</p>
<ol start="3">
<li><p><strong>Banh Mi Lanh (Near Nam Quang Pagoda)</strong></p>
<ul>
<li><strong>The Profile:</strong> A minimalist, old-school approach. Operating since the 1990s, Madam Lanh focuses on wet paté and a singular, exceptionally tender braised pork belly (<em>thit xiu</em>).</li>
<li><strong>Price:</strong> ~25,000 VND.</li>
</ul>
</li>
<li><p><strong>Banh Mi Bich (51 Phan Chau Trinh)</strong></p>
<ul>
<li><strong>The Profile:</strong> The paté here is roasted rather than steamed, giving it a deeply caramelized, almost smoky profile.</li>
<li><strong>Price:</strong> ~25,000 VND.</li>
</ul>
</li>
</ol>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-banh-mi-matrix-decoding-the-fillings" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🌟 The Banh Mi Matrix: Decoding the Fillings
          </h2>
        </div>
      
      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 text-sm">
          <thead>
            <tr class="bg-slate-900 text-white font-serif">
              <th class="p-4 font-bold text-left">Element</th><th class="p-4 font-bold text-left">The Hoi An Standard</th><th class="p-4 font-bold text-left">The Saigon Contrast</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>The Bread</strong></td><td class="p-4">Pointed ends, dense crumb, wood-fired</td><td class="p-4">Rounded ends, airy/hollow interior</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>The Paté</strong></td><td class="p-4">Wet, heavily spiced (five-spice, cinnamon)</td><td class="p-4">Firm, dry, liver-forward</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>The Gravy</strong></td><td class="p-4">Thick, dark pork braising liquid (<em>Nước xíu</em>)</td><td class="p-4">Soy sauce and Maggi seasoning</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>The Greens</strong></td><td class="p-4">Mint, coriander, sweet basil</td><td class="p-4">Primarily cilantro and cucumber</td></tr>

          </tbody>
        </table>
      </div>
    <hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="field-notes-for-the-discerning-eater" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🧠 Field Notes for the Discerning Eater
          </h2>
        </div>
      <ul>
<li><strong>The Humidity Factor:</strong> Hoi An’s proximity to the Thu Bon river means the bread loses its crunch rapidly. A Banh Mi must be consumed within 10 minutes of assembly. Never pack it for a long journey.</li>
<li><strong>The Vegetarian Evolution:</strong> As of 2026, both Banh Mi Phuong and Madam Khanh offer exceptional vegan alternatives utilizing braised tofu, seitan, and mushroom patés, ensuring the complex flavor profiles remain intact without animal fats.</li>
</ul>
<p>To bite into a Hoi An Banh Mi is to consume the town’s layered history—a French colonial vessel containing the spices of the ancient Silk Road, masterfully balanced by the hands of Vietnamese matriarchs.</p>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: Journeying with Purpose</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                True exploration is not simply the accumulation of photographs, but the conscious discovery of history, craftsmanship, and human kinship along the living rivers of Vietnam.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Location</div>
        <div class="font-bold text-slate-800 text-[13px]">Vietnam Inbound</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Ideal Timing</div>
        <div class="font-bold text-slate-800 text-[13px]">Year-Round</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Access Policy</div>
        <div class="font-bold text-slate-800 text-[13px]">Curated Entry</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Experience Type</div>
        <div class="font-bold text-slate-800 text-[13px]">Cultural Immersion</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/hoi-an-banh-mi-guide" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/hoi-an-banh-mi-guide');" 
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

export const longXuyenBrokenRiceGuideHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">Long Xuyen Broken Rice: The Unsung Masterpiece of An Giang (2026)</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          Long Xuyen Broken Rice: The Unsung Masterpiece of An Giang (2026)
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          A Comprehensive 2026 Cultural & Practical Expedition Guide
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          A curated field guide designed for intentional voyagers seeking deep cultural resonance and seamless navigation across Vietnam's iconic landscapes.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Jul 28, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">10 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Bespoke Field Notes
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">📍</span> Curated Inbound Journey
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">✨</span> Slow Travel Signature
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏆</span> The Rice Tour Verified
    </div>
  
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
                  <a href="#deconstructing-the-an-giang-variation" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Deconstructing the An Giang Variation</a>
  <a href="#the-anatomy-of-the-plate" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🥩 The Anatomy of the Plate</a>
  <a href="#the-meat-caramelized-and-julienned" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Meat: Caramelized and Julienned</a>
  <a href="#the-egg-braised-not-fried" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Egg: Braised, Not Fried</a>
  <a href="#the-accoutrements" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Accoutrements</a>
  <a href="#the-2026-culinary-map-top-3-local-sanctuaries" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🌟 The 2026 Culinary Map: Top 3 Local Sanctuaries</a>
  <a href="#insider-protocols-for-the-2026-voyager" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🧠 Insider Protocols for the 2026 Voyager</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Location</div>
        <div class="text-[13px] font-bold text-slate-900">Vietnam Inbound</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Ideal Timing</div>
        <div class="text-[13px] font-bold text-slate-900">Year-Round</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Access Policy</div>
        <div class="text-[13px] font-bold text-slate-900">Curated Entry</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Experience Type</div>
        <div class="text-[13px] font-bold text-slate-900">Cultural Immersion</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            <hr>
<ul>
<li><strong>Gastronomic Coordinates:</strong> Long Xuyen City, An Giang Province.</li>
<li><strong>The Signature Architecture:</strong> Ultra-fine broken rice grains, julienned caramelized pork, braised duck eggs.</li>
<li><strong>2026 Price Baseline:</strong> 35,000 – 50,000 VND per plate.</li>
<li><strong>Optimal Tasting Window:</strong> Early morning (06:00 AM) or late night (after 09:00 PM).</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="deconstructing-the-an-giang-variation" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            Deconstructing the An Giang Variation
          </h2>
        </div>
      <p>If Saigon’s <em>Cơm Tấm</em> (Broken Rice) is a flamboyant, oversized spectacle dominated by a massive grilled pork chop, the Long Xuyen variation is an exercise in meticulous, bite-sized harmony. Born in the bustling riverside capital of An Giang province, this dish reflects the pragmatic yet highly refined palate of the Mekong Delta’s merchant class.</p>
<p>For the 2026 culinary traveler, a plate of Long Xuyen broken rice is immediately distinguishable. The rice grains are milled significantly finer—almost resembling couscous—allowing them to absorb the accompanying scallion oil and sweet fish sauce with unprecedented efficiency. </p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-anatomy-of-the-plate" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🥩 The Anatomy of the Plate
          </h2>
        </div>
      <p>The brilliance of Long Xuyen broken rice lies in its hyper-fragmentation. Every element is reduced to a uniform size, ensuring that every spoonful contains a perfect ratio of flavors and textures.</p>

        <h3 id="the-meat-caramelized-and-julienned" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The Meat: Caramelized and Julienned
        </h3>
      <p>Instead of a monolithic slab of grilled pork, Long Xuyen utilizes pork belly or lean shoulder that is marinated in palm sugar, soy, and garlic, then braised and grilled before being meticulously sliced into thin strips. This exposes more surface area, resulting in a deeper caramelization.</p>

        <h3 id="the-egg-braised-not-fried" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The Egg: Braised, Not Fried
        </h3>
      <p>You will rarely find a sunny-side-up egg here. The protein complement is a duck egg, hard-boiled and then slow-braised in a coconut water reduction alongside the pork, rendering the whites deeply stained and intensely savory. It is then quartered before serving.</p>

        <h3 id="the-accoutrements" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The Accoutrements
        </h3>
      <p>A generous ladle of scallion oil (<em>mỡ hành</em>) acts as the binding agent, while the pickled vegetables—usually a mix of daikon, carrot, and occasionally morning glory stems—provide the necessary acidic counterpoint to the fatty pork.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-2026-culinary-map-top-3-local-sanctuaries" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🌟 The 2026 Culinary Map: Top 3 Local Sanctuaries
          </h2>
        </div>
      <p>While Long Xuyen is dotted with rice vendors, the true connoisseurs congregate at a select few institutions that have maintained the old-world wood-fired rice cookers.</p>
<ol>
<li><p><strong>Com Tam Loan (21 Thai Thien An, My Long Ward)</strong></p>
<ul>
<li><strong>The Profile:</strong> Perhaps the most revered in the city. The rice is consistently fluffy, and the fish sauce is viscous, sweet, and fiery.</li>
<li><strong>Price:</strong> ~45,000 VND.</li>
</ul>
</li>
<li><p><strong>Com Tam Cay Diep (67 Ly Tu Trong, My Chau Ward)</strong></p>
<ul>
<li><strong>The Profile:</strong> Operating for decades under a sprawling almond tree, this spot is famous for its exceptionally tender julienned pork skin (<em>bì</em>) and rich scallion oil.</li>
<li><strong>Price:</strong> ~40,000 VND.</li>
</ul>
</li>
<li><p><strong>Com Tam 8 Huong (Nguyen Thai Hoc Street)</strong></p>
<ul>
<li><strong>The Profile:</strong> A late-night sanctuary. When the rest of the city sleeps, 8 Huong serves up steaming plates to night-shift workers and travelers. The braised eggs here are steeped for hours, achieving a glorious dark hue.</li>
<li><strong>Price:</strong> ~35,000 VND.</li>
</ul>
</li>
</ol>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="insider-protocols-for-the-2026-voyager" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🧠 Insider Protocols for the 2026 Voyager
          </h2>
        </div>
      <ul>
<li><strong>The Sauce Technique:</strong> Unlike in Saigon where you might dip the meat, the Long Xuyen protocol dictates pouring the sweet fish sauce directly over the entire plate before mixing vigorously.</li>
<li><strong>The Fine Grain Nuance:</strong> Because the rice grains are so small, they cool rapidly. It is imperative to consume the dish immediately upon serving while the scallion oil is still hot.</li>
</ul>
<p>To eat <em>Cơm Tấm</em> in Long Xuyen is to experience the delta&#39;s culinary philosophy in miniature: sweet, savory, and remarkably balanced, proving that the most profound flavors often require the most delicate knife work.</p>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: Journeying with Purpose</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                True exploration is not simply the accumulation of photographs, but the conscious discovery of history, craftsmanship, and human kinship along the living rivers of Vietnam.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Location</div>
        <div class="font-bold text-slate-800 text-[13px]">Vietnam Inbound</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Ideal Timing</div>
        <div class="font-bold text-slate-800 text-[13px]">Year-Round</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Access Policy</div>
        <div class="font-bold text-slate-800 text-[13px]">Curated Entry</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Experience Type</div>
        <div class="font-bold text-slate-800 text-[13px]">Cultural Immersion</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/long-xuyen-broken-rice-guide" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/long-xuyen-broken-rice-guide');" 
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

export const canThoFermentedHotpotHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">Can Tho Fermented Fish Hotpot: The Ultimate 'Lau Mam' Guide (2026)</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          Can Tho Fermented Fish Hotpot: The Ultimate 'Lau Mam' Guide (2026)
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          A Comprehensive 2026 Cultural & Practical Expedition Guide
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          A curated field guide designed for intentional voyagers seeking deep cultural resonance and seamless navigation across Vietnam's iconic landscapes.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Jul 28, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">10 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Bespoke Field Notes
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">📍</span> Curated Inbound Journey
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">✨</span> Slow Travel Signature
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏆</span> The Rice Tour Verified
    </div>
  
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
                  <a href="#the-pungent-soul-of-the-delta" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Pungent Soul of the Delta</a>
  <a href="#the-botanical-matrix-the-true-star-of-the-show" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🌿 The Botanical Matrix: The True Star of the Show</a>
  <a href="#the-2026-culinary-map-top-3-authentic-establishments" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🌟 The 2026 Culinary Map: Top 3 Authentic Establishments</a>
  <a href="#insider-protocols-for-the-2026-voyager" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🧠 Insider Protocols for the 2026 Voyager</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Location</div>
        <div class="text-[13px] font-bold text-slate-900">Vietnam Inbound</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Ideal Timing</div>
        <div class="text-[13px] font-bold text-slate-900">Year-Round</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Access Policy</div>
        <div class="text-[13px] font-bold text-slate-900">Curated Entry</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Experience Type</div>
        <div class="text-[13px] font-bold text-slate-900">Cultural Immersion</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            <hr>
<ul>
<li><strong>Gastronomic Coordinates:</strong> Can Tho City (The epicenter of Mekong Delta cuisine).</li>
<li><strong>The Signature Flavor:</strong> Intensely pungent, umami-rich fermented fish broth (<em>Mắm Châu Đốc</em>).</li>
<li><strong>2026 Price Baseline:</strong> 150,000 – 350,000 VND per hotpot (serves 2-4).</li>
<li><strong>The Botanical Accompaniment:</strong> Up to 30 varieties of wild, aquatic, and garden-grown vegetables.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-pungent-soul-of-the-delta" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            The Pungent Soul of the Delta
          </h2>
        </div>
      <p>To the uninitiated, <em>Lẩu Mắm</em> (Fermented Fish Hotpot) is an olfactory shock. To the people of the Mekong Delta, it is the undisputed king of communal dining—a boiling cauldron that encapsulates the region’s agricultural biodiversity and its historical reliance on preserved river fish.</p>
<p>Can Tho, as the logistical and cultural capital of the Delta, is the ultimate arena for this dish. For the 2026 culinary adventurer, understanding <em>Lẩu Mắm</em> requires venturing beyond the initial pungency to appreciate the incredibly complex, savory depths of a broth built upon fermented Gourami or Snakehead fish, tempered with coconut water, lemongrass, and pork bones.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-botanical-matrix-the-true-star-of-the-show" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🌿 The Botanical Matrix: The True Star of the Show
          </h2>
        </div>
      <p>While the broth is the foundation, the soul of the dish lies in the accompanying mountain of greens. A proper Can Tho <em>Lẩu Mắm</em> is a masterclass in foraging.</p>
<ul>
<li><strong>The Aquatics:</strong> Water lilies (<em>bông súng</em>), water mimosa (<em>rau nhút</em>), and yellow velvetleaf (<em>kèo nèo</em>), which absorb the broth like sponges.</li>
<li><strong>The Blossoms:</strong> Sesbania flowers (<em>bông điên điển</em>), pumpkin flowers, and banana blossoms, providing crunch and a subtle bitterness.</li>
<li><strong>The Earthy Tones:</strong> Eggplant, bitter melon, and winged beans add necessary textural contrast to the soft fish and pork belly swimming in the pot.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-2026-culinary-map-top-3-authentic-establishments" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🌟 The 2026 Culinary Map: Top 3 Authentic Establishments
          </h2>
        </div>
      <p>While many tourist restaurants offer a diluted version of the broth, these three institutions maintain the uncompromising, pungent authenticity demanded by locals.</p>
<ol>
<li><p><strong>Lau Mam Da Ly (89 3/2 Street, Ninh Kieu District)</strong></p>
<ul>
<li><strong>The Profile:</strong> Perhaps the most famous name in Can Tho. Operating for over two decades, Da Ly is renowned for its impeccably balanced broth—pungent yet surprisingly sweet from a slow-simmered pork bone base.</li>
<li><strong>The Proteins:</strong> Features an exceptionally generous serving of fresh river fish (basa, snakehead), roasted pork, and squid.</li>
<li><strong>2026 Price:</strong> ~250,000 - 350,000 VND.</li>
</ul>
</li>
<li><p><strong>Lau Mam Da Co (135/20 Tran Hung Dao, Ninh Kieu District)</strong></p>
<ul>
<li><strong>The Profile:</strong> Tucked away in an alley, this is where the locals go. The aesthetic is purely utilitarian, but the broth is uncompromisingly bold, utilizing premium fermented gourami from Chau Doc.</li>
<li><strong>2026 Price:</strong> ~180,000 - 250,000 VND.</li>
</ul>
</li>
<li><p><strong>Lau Mam Can Tho - Tran Ngoc Que (162/18 Tran Ngoc Que)</strong></p>
<ul>
<li><strong>The Profile:</strong> Known for its staggering vegetable platter, often featuring over 20 different wild greens. The atmosphere is highly communal, noisy, and authentic to the Delta spirit.</li>
<li><strong>2026 Price:</strong> ~200,000 VND.</li>
</ul>
</li>
</ol>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="insider-protocols-for-the-2026-voyager" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🧠 Insider Protocols for the 2026 Voyager
          </h2>
        </div>
      <ul>
<li><strong>The Simmering Rule:</strong> The broth thickens and intensifies as it boils. If it becomes too salty, ask for additional coconut water (<em>nước dừa non</em>) rather than plain broth.</li>
<li><strong>The Vegetable Timing:</strong> Do not dump all the greens in at once. Flash-boil the delicate flowers (like <em>điên điển</em>) for just 10 seconds to retain their crunch, while letting the eggplant simmer longer to absorb the fat.</li>
<li><strong>The Clothing Advisory:</strong> The aroma of boiling fermented fish will permanently embed itself in your clothing. Wear something you don&#39;t mind washing immediately afterward.</li>
</ul>
<p><em>Lẩu Mắm</em> is not merely a meal; it is an edible geography lesson. Every bubbling pot tells the story of the annual floods, the ingenuity of preservation, and the unparalleled bounty of the Mekong River.</p>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: Journeying with Purpose</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                True exploration is not simply the accumulation of photographs, but the conscious discovery of history, craftsmanship, and human kinship along the living rivers of Vietnam.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Location</div>
        <div class="font-bold text-slate-800 text-[13px]">Vietnam Inbound</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Ideal Timing</div>
        <div class="font-bold text-slate-800 text-[13px]">Year-Round</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Access Policy</div>
        <div class="font-bold text-slate-800 text-[13px]">Curated Entry</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Experience Type</div>
        <div class="font-bold text-slate-800 text-[13px]">Cultural Immersion</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/can-tho-fermented-hotpot" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/can-tho-fermented-hotpot');" 
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

export const baChuaXuTempleAnGiangHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">Ba Chua Xu Temple: The Spiritual Epicenter of the Mekong Delta (2026)</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          Ba Chua Xu Temple: The Spiritual Epicenter of the Mekong Delta (2026)
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          A Comprehensive 2026 Cultural & Practical Expedition Guide
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          A curated field guide designed for intentional voyagers seeking deep cultural resonance and seamless navigation across Vietnam's iconic landscapes.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Jul 27, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">10 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Bespoke Field Notes
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">📍</span> Curated Inbound Journey
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">✨</span> Slow Travel Signature
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏆</span> The Rice Tour Verified
    </div>
  
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
                  <a href="#the-monolith-of-delta-spirituality" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Monolith of Delta Spirituality</a>
  <a href="#the-evolution-of-the-lotus-shrine" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🏛️ The Evolution of the Lotus Shrine</a>
  <a href="#the-enigma-of-the-statue" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🗿 The Enigma of the Statue</a>
  <a href="#the-via-ba-festival-a-devotional-spectacle" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🎆 The Vía Bà Festival: A Devotional Spectacle</a>
  <a href="#insider-protocols-for-the-2026-voyager" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🧠 Insider Protocols for the 2026 Voyager</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Location</div>
        <div class="text-[13px] font-bold text-slate-900">Vietnam Inbound</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Ideal Timing</div>
        <div class="text-[13px] font-bold text-slate-900">Year-Round</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Access Policy</div>
        <div class="text-[13px] font-bold text-slate-900">Curated Entry</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Experience Type</div>
        <div class="text-[13px] font-bold text-slate-900">Cultural Immersion</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            <hr>
<ul>
<li><strong>Coordinates:</strong> Foot of Sam Mountain, Chau Doc City, An Giang Province.</li>
<li><strong>Architectural Style:</strong> Lotus-shaped structure, three-tiered green tiled roof.</li>
<li><strong>The Core Festival (Via Ba):</strong> 23rd to 27th of the 4th Lunar Month.</li>
<li><strong>2026 Operational Status:</strong> Open 24/7 (Peak pilgrimage season: January - April Lunar Calendar).</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-monolith-of-delta-spirituality" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            The Monolith of Delta Spirituality
          </h2>
        </div>
      <p>Anchored at the base of the imposing Sam Mountain near the Cambodian border, the <strong>Temple of Ba Chua Xu</strong> (The Lady of the Realm) is not merely a local shrine—it is the beating spiritual heart of the entire Mekong Delta. Drawing an estimated 5 million pilgrims annually, this sanctuary represents a profound synthesis of indigenous animism, orthodox Buddhism, and deeply rooted local mythology.</p>
<p>For the cultural observer in 2026, the temple offers an unfiltered, highly kinetic window into the devotional mechanics of Southern Vietnam. It is a place of intense sensory overload: the thick, unbroken haze of sandalwood incense, the glittering mounds of offered gold leaf, and the rhythmic chanting of thousands seeking prosperity, fertility, and protection.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-evolution-of-the-lotus-shrine" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🏛️ The Evolution of the Lotus Shrine
          </h2>
        </div>
      <p>The current architectural manifestation of the temple is a relatively modern marvel, concealing ancient roots. Originally constructed of bamboo and leaves in the early 19th century, it underwent a massive redesign in 1972 by architects Huynh Kim Mang and Nguyen Ba Lang.</p>
<ul>
<li><strong>The Lotus Motif:</strong> The structure is engineered to resemble a blooming lotus flower—a universal symbol of purity in Buddhist cosmology.</li>
<li><strong>The Roof:</strong> The striking, three-tiered roof is clad in emerald green lapis tiles, its upward-curving eaves resembling the prow of a traditional wooden riverboat.</li>
<li><strong>The Interior Sanctum:</strong> Dominated by highly ornate, gold-lacquered columns and intricately carved wooden panels depicting the four mythical creatures (Dragon, Unicorn, Tortoise, Phoenix).</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-enigma-of-the-statue" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🗿 The Enigma of the Statue
          </h2>
        </div>
      <p>At the epicenter of this devotional vortex sits the statue of Ba Chua Xu. </p>
<p>Archeological analyses conducted by French and Vietnamese scholars suggest the statue actually dates back to the 6th century, belonging to the ancient Oc Eo culture. Remarkably, it was originally a male Hindu deity (likely Shiva) carved from a single piece of dark granite. Over centuries of cultural hybridization, the local populace reimagined and venerated the figure as a female protector goddess, draping her in heavily embroidered, gem-encrusted silk robes.</p>
<p>According to the central myth, the statue was discovered atop Sam Mountain. It required the strength of nine virgins—as decreed through a spirit medium—to carry her down to her current resting place.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-via-ba-festival-a-devotional-spectacle" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🎆 The Vía Bà Festival: A Devotional Spectacle
          </h2>
        </div>
      <p>While the temple is active year-round, its kinetic peak occurs during the <strong>Lễ Hội Vía Bà Chúa Xứ</strong>, designated as a National Intangible Cultural Heritage.</p>
<p>Taking place from the 23rd to the 27th of the 4th Lunar Month, the festival involves highly choreographed rituals:</p>
<ol>
<li><strong>The Washing of the Goddess (Lễ Tắm Bà):</strong> At exactly midnight on the 23rd, the statue is ceremonially undressed, washed with scented floral water, and dressed in new robes donated by wealthy benefactors.</li>
<li><strong>The Procession:</strong> Elaborate dragon dances, traditional martial arts displays, and opera performances fill the courtyard.</li>
<li><strong>The Offerings:</strong> Whole roasted pigs (complete with glowing red lights in their eye sockets), massive fruit towers, and mounds of sticky rice are presented in a display of extreme devotion.</li>
</ol>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="insider-protocols-for-the-2026-voyager" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🧠 Insider Protocols for the 2026 Voyager
          </h2>
        </div>
      <ul>
<li><strong>The Crowd Factor:</strong> If you wish to observe the architecture without the crushing crowds, visit during the off-season (October to December). During the Lunar New Year and the April festival, the density can be physically overwhelming.</li>
<li><strong>The Offering Etiquette:</strong> You are not required to bring a roasted pig. A simple offering of fruit or lighting a single stick of incense is considered highly respectful. <strong>Warning:</strong> Beware of aggressive hawkers selling overpriced incense and &quot;lucky&quot; amulets outside the gates. Politely but firmly decline.</li>
<li><strong>The Synergy Map:</strong> A visit here is incomplete without taking the cable car to the summit of Sam Mountain for a panoramic view of the borderlands, or visiting the nearby Thoai Ngoc Hau Tomb, resting place of the visionary general who dug the region’s vital canal system.</li>
</ul>
<p>To stand before Ba Chua Xu is to witness the resilient, syncretic soul of the Mekong Delta—a place where ancient stone gods are clothed in modern silk, and centuries-old prayers continue to echo against the granite face of Sam Mountain.</p>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: Journeying with Purpose</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                True exploration is not simply the accumulation of photographs, but the conscious discovery of history, craftsmanship, and human kinship along the living rivers of Vietnam.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Location</div>
        <div class="font-bold text-slate-800 text-[13px]">Vietnam Inbound</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Ideal Timing</div>
        <div class="font-bold text-slate-800 text-[13px]">Year-Round</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Access Policy</div>
        <div class="font-bold text-slate-800 text-[13px]">Curated Entry</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Experience Type</div>
        <div class="font-bold text-slate-800 text-[13px]">Cultural Immersion</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/ba-chua-xu-temple-an-giang" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/ba-chua-xu-temple-an-giang');" 
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

export const canThoHotelsGuideHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">Can Tho Hotels: The 2026 Curated Lodging Matrix</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          Can Tho Hotels: The 2026 Curated Lodging Matrix
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          A Comprehensive 2026 Cultural & Practical Expedition Guide
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          A curated field guide designed for intentional voyagers seeking deep cultural resonance and seamless navigation across Vietnam's iconic landscapes.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Jul 27, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">10 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Bespoke Field Notes
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">📍</span> Curated Inbound Journey
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">✨</span> Slow Travel Signature
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏆</span> The Rice Tour Verified
    </div>
  
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
                  <a href="#the-evolution-of-delta-hospitality" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Evolution of Delta Hospitality</a>
  <a href="#tier-1-the-riverfront-patriarchs-luxury-and-heritage" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🏨 Tier 1: The Riverfront Patriarchs (Luxury & Heritage)</a>
  <a href="#azerai-can-tho-con-au-islet" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Azerai Can Tho (Con Au Islet)</a>
  <a href="#victoria-can-tho-resort-cai-khe-ward" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Victoria Can Tho Resort (Cai Khe Ward)</a>
  <a href="#tier-2-the-urban-pragmatists-business-and-boutique" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🏙️ Tier 2: The Urban Pragmatists (Business & Boutique)</a>
  <a href="#ttc-hotel-premium-can-tho-hai-ba-trung-street" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">TTC Hotel – Premium Can Tho (Hai Ba Trung Street)</a>
  <a href="#kp-hotel-nam-ky-khoi-nghia-street" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">KP Hotel (Nam Ky Khoi Nghia Street)</a>
  <a href="#the-locational-strategy-matrix" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🌟 The Locational Strategy Matrix</a>
  <a href="#insider-protocols-for-the-2026-voyager" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🧠 Insider Protocols for the 2026 Voyager</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Location</div>
        <div class="text-[13px] font-bold text-slate-900">Vietnam Inbound</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Ideal Timing</div>
        <div class="text-[13px] font-bold text-slate-900">Year-Round</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Access Policy</div>
        <div class="text-[13px] font-bold text-slate-900">Curated Entry</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Experience Type</div>
        <div class="text-[13px] font-bold text-slate-900">Cultural Immersion</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            <hr>
<ul>
<li><strong>Lodging Epicenter:</strong> Ninh Kieu District, Can Tho City.</li>
<li><strong>2026 Baseline Rates:</strong> 800,000 VND (Boutique) – 3,500,000+ VND (Luxury Riverfront).</li>
<li><strong>Peak Booking Seasons:</strong> December – April (Dry Season) &amp; Lunar New Year.</li>
<li><strong>Logistical Proximity:</strong> Optimal locations are within a 1.5km radius of the Ninh Kieu Wharf.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-evolution-of-delta-hospitality" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            The Evolution of Delta Hospitality
          </h2>
        </div>
      <p>As the undisputed capital of the Mekong Delta, Can Tho has rapidly transitioned from a purely transit-oriented city to a standalone destination demanding multi-night stays. The hospitality sector in 2026 reflects this maturity. Gone are the days when visitors were restricted to utilitarian guesthouses; the current landscape offers everything from colonial-revival luxury perched on the Hau River to fiercely independent, design-forward boutique hideaways.</p>
<p>For the discerning traveler, selecting accommodation in Can Tho is no longer just about securing a bed—it is about positioning yourself strategically to intercept the city’s early morning floating markets and vibrant nocturnal street food scene.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="tier-1-the-riverfront-patriarchs-luxury-and-heritage" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🏨 Tier 1: The Riverfront Patriarchs (Luxury & Heritage)
          </h2>
        </div>
      <p>For those seeking uncompromised comfort with unobstructed views of the Hau River.</p>

          <div id="azerai-can-tho-con-au-islet" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">1</span>
              . Azerai Can Tho (Con Au Islet)
            </h3>
          </div>
        <ul>
<li><strong>The Profile:</strong> Unrivaled exclusivity. Accessible only by private speedboat, this resort occupies its own islet, offering a masterclass in understated, tropical modernist architecture integrated into the mangrove ecosystem.</li>
<li><strong>2026 Rate Matrix:</strong> Starting at 5,000,000 VND/night.</li>
<li><strong>The Verdict:</strong> The absolute pinnacle of Delta luxury, ideal for extended retreats, though logistically detached from the immediate bustle of the city center.</li>
</ul>

          <div id="victoria-can-tho-resort-cai-khe-ward" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">2</span>
              . Victoria Can Tho Resort (Cai Khe Ward)
            </h3>
          </div>
        <ul>
<li><strong>The Profile:</strong> A heavily nostalgic, Indochine-style property. With its dark wood verandas, expansive manicured lawns, and a legendary riverfront pool, Victoria maintains a stately, old-world cadence.</li>
<li><strong>2026 Rate Matrix:</strong> Starting at 2,800,000 VND/night.</li>
<li><strong>The Verdict:</strong> Perfect for classic romantics and families. Their private Lady Hau cruise boat remains the most elegant way to approach the Cai Rang Floating Market.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="tier-2-the-urban-pragmatists-business-and-boutique" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🏙️ Tier 2: The Urban Pragmatists (Business & Boutique)
          </h2>
        </div>
      <p>For travelers who prioritize immediate access to the urban core and Ninh Kieu Wharf.</p>

          <div id="ttc-hotel-premium-can-tho-hai-ba-trung-street" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">3</span>
              . TTC Hotel – Premium Can Tho (Hai Ba Trung Street)
            </h3>
          </div>
        <ul>
<li><strong>The Profile:</strong> The tallest vantage point directly overlooking the Ninh Kieu Wharf. It offers functional, business-class luxury with unparalleled proximity to the night market.</li>
<li><strong>2026 Rate Matrix:</strong> Starting at 1,200,000 VND/night.</li>
</ul>

          <div id="kp-hotel-nam-ky-khoi-nghia-street" class="scroll-mt-28 space-y-2 pt-4">
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs shrink-0">4</span>
              . KP Hotel (Nam Ky Khoi Nghia Street)
            </h3>
          </div>
        <ul>
<li><strong>The Profile:</strong> A rising star in the boutique sector. KP focuses on highly efficient spatial design, minimalist aesthetics, and an exceptional in-house specialty coffee program.</li>
<li><strong>2026 Rate Matrix:</strong> Starting at 850,000 VND/night.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-locational-strategy-matrix" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🌟 The Locational Strategy Matrix
          </h2>
        </div>
      
      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 text-sm">
          <thead>
            <tr class="bg-slate-900 text-white font-serif">
              <th class="p-4 font-bold text-left">Zone</th><th class="p-4 font-bold text-left">Vibe</th><th class="p-4 font-bold text-left">Pros</th><th class="p-4 font-bold text-left">Cons</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Ninh Kieu Wharf (Hai Ba Trung St)</strong></td><td class="p-4">Hyper-kinetic, tourist-centric</td><td class="p-4">Instant access to night markets and boat docks</td><td class="p-4">High ambient noise until 11:00 PM</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Cai Khe Islet</strong></td><td class="p-4">Resort-focused, spacious</td><td class="p-4">Large pools, river views, upscale dining</td><td class="p-4">Requires a short taxi ride to the urban core</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>An Binh (Suburban)</strong></td><td class="p-4">Agricultural, quiet</td><td class="p-4">Proximity to fruit orchards and traditional ovens</td><td class="p-4">Limited late-night dining options</td></tr>

          </tbody>
        </table>
      </div>
    <hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="insider-protocols-for-the-2026-voyager" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🧠 Insider Protocols for the 2026 Voyager
          </h2>
        </div>
      <ul>
<li><strong>The Floating Market Variable:</strong> If your primary objective is the 05:30 AM Cai Rang Floating Market, prioritize hotels near the Ninh Kieu Wharf to minimize pre-dawn transit time.</li>
<li><strong>The Acoustic Warning:</strong> Hotels situated directly on the main boulevards (Hoa Binh, 30/4) are subject to heavy, late-night motorbike traffic. Always request high-floor, inward-facing rooms if you are a light sleeper.</li>
</ul>
<p>Choosing your base in Can Tho dictates your rhythm. Whether you prefer the isolated silence of a private islet or the immediate, chaotic energy of the night market, the city’s 2026 hospitality matrix accommodates every cadence.</p>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: Journeying with Purpose</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                True exploration is not simply the accumulation of photographs, but the conscious discovery of history, craftsmanship, and human kinship along the living rivers of Vietnam.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Location</div>
        <div class="font-bold text-slate-800 text-[13px]">Vietnam Inbound</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Ideal Timing</div>
        <div class="font-bold text-slate-800 text-[13px]">Year-Round</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Access Policy</div>
        <div class="font-bold text-slate-800 text-[13px]">Curated Entry</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Experience Type</div>
        <div class="font-bold text-slate-800 text-[13px]">Cultural Immersion</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/can-tho-hotels-guide" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/can-tho-hotels-guide');" 
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

export const saDecFlowerVillageHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">Sa Dec Flower Village: The Botanical Matrix of the Mekong (2026)</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          Sa Dec Flower Village: The Botanical Matrix of the Mekong (2026)
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          A Comprehensive 2026 Cultural & Practical Expedition Guide
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          A curated field guide designed for intentional voyagers seeking deep cultural resonance and seamless navigation across Vietnam's iconic landscapes.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Jul 27, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">10 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Bespoke Field Notes
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">📍</span> Curated Inbound Journey
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">✨</span> Slow Travel Signature
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏆</span> The Rice Tour Verified
    </div>
  
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
                  <a href="#a-century-of-floral-engineering" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">A Century of Floral Engineering</a>
  <a href="#the-botanical-stratigraphy" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🌸 The Botanical Stratigraphy</a>
  <a href="#the-lunar-new-year-core-tet-season" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Lunar New Year Core (Tet Season)</a>
  <a href="#the-year-round-perennials" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Year-Round Perennials</a>
  <a href="#the-2026-navigational-matrix" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🌟 The 2026 Navigational Matrix</a>
  <a href="#field-notes-for-the-discerning-voyager" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🧠 Field Notes for the Discerning Voyager</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Location</div>
        <div class="text-[13px] font-bold text-slate-900">Vietnam Inbound</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Ideal Timing</div>
        <div class="text-[13px] font-bold text-slate-900">Year-Round</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Access Policy</div>
        <div class="text-[13px] font-bold text-slate-900">Curated Entry</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Experience Type</div>
        <div class="text-[13px] font-bold text-slate-900">Cultural Immersion</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            <hr>
<ul>
<li><strong>Coordinates:</strong> Tan Quy Dong Ward, Sa Dec City, Dong Thap Province.</li>
<li><strong>Scale:</strong> Over 313 hectares, cultivating 2,000+ floral species.</li>
<li><strong>The Signature Architecture:</strong> Aquatic floriculture—flowers grown on elevated bamboo trellises over flooded fields.</li>
<li><strong>2026 Optimal Window:</strong> Late December to mid-January (leading up to Lunar New Year).</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="a-century-of-floral-engineering" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            A Century of Floral Engineering
          </h2>
        </div>
      <p>To the uninitiated, the <strong>Sa Dec Flower Village</strong> might seem like a mere visual spectacle—a sprawling, hyper-chromatic tourist attraction. But for the agricultural historians and botanists of the Mekong Delta, it is a 100-year-old marvel of climate-adaptive engineering. </p>
<p>Situated in a region historically prone to the unpredictable flood pulses of the Tien River, the farmers of Sa Dec developed a unique methodology: cultivating flowers not in the ground, but in woven baskets suspended on bamboo trellises (giàn) above the rising waters. In 2026, this necessity-born technique remains the defining characteristic of the village, creating the surreal image of farmers navigating their &quot;fields&quot; via wooden rowboats during the wet season.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-botanical-stratigraphy" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🌸 The Botanical Stratigraphy
          </h2>
        </div>
      <p>Spanning over 313 hectares, the village operates as the primary floral artery for all of Southern Vietnam, supplying everything from ornamental bonsai to industrial-scale marigold yields.</p>

        <h3 id="the-lunar-new-year-core-tet-season" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The Lunar New Year Core (Tet Season)
        </h3>
      <p>In the immediate weeks preceding the Lunar New Year (<em>Tết</em>), the village enters overdrive. The landscape is dominated by auspicious blooms:</p>
<ul>
<li><strong>Chrysanthemums (Cúc Mâm Xôi):</strong> The undisputed king of Tet, engineered to form perfect, dense golden hemispheres.</li>
<li><strong>Marigolds (Vạn Thọ):</strong> Valued for their longevity and vibrant orange hues, symbolizing longevity.</li>
<li><strong>Bougainvillea (Hoa Giấy):</strong> Sa Dec boasts mutant strains grafted to produce up to five distinct colors on a single trunk.</li>
</ul>

        <h3 id="the-year-round-perennials" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The Year-Round Perennials
        </h3>
      <p>Beyond the Tet frenzy, Sa Dec maintains a robust year-round output, focusing heavily on intricate bonsai (often utilizing ancient tamarind or starfruit bases) and a staggering variety of over 50 rose species, including highly prized French and Bulgarian cultivars that have adapted to the tropical heat.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-2026-navigational-matrix" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🌟 The 2026 Navigational Matrix
          </h2>
        </div>
      <p>The sheer scale of the village can be overwhelming. Here is how to strategically navigate the botanical maze:</p>

      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 text-sm">
          <thead>
            <tr class="bg-slate-900 text-white font-serif">
              <th class="p-4 font-bold text-left">The Zone</th><th class="p-4 font-bold text-left">Primary Focus</th><th class="p-4 font-bold text-left">Photographic Viability</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Sa Nhien - Cai Dao Road</strong></td><td class="p-4">The main tourist artery, highly commercialized</td><td class="p-4">Excellent, but expect heavy crowds</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Tan Quy Dong Deep Alleys</strong></td><td class="p-4">Wholesale nurseries, traditional trellis farming</td><td class="p-4">Exceptional, authentic, requires a motorbike</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Happy Land Hung Thy</strong></td><td class="p-4">An integrated eco-tourism park within the village</td><td class="p-4">Curated setups, artificial props</td></tr>

          </tbody>
        </table>
      </div>
    <hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="field-notes-for-the-discerning-voyager" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🧠 Field Notes for the Discerning Voyager
          </h2>
        </div>
      <ul>
<li><strong>The Transit Timing:</strong> If visiting during the peak Tet season (usually mid-January), arrive at sunrise (06:00 AM). By 09:00 AM, the narrow village roads become completely paralyzed by tour buses and wholesale transport trucks.</li>
<li><strong>The Observation Deck:</strong> Several local cafes have constructed 15-meter high observation towers. Paying a nominal fee (around 20,000 VND) grants you access to an unparalleled panoramic view of the trellis matrix.</li>
<li><strong>The Protocol of Purchase:</strong> Do not attempt to buy individual pots from wholesale farmers actively loading trucks. Stick to the designated retail zones along the main Sa Nhien road to avoid disrupting their logistical flow.</li>
</ul>
<p>Sa Dec is a testament to the Mekong Delta’s capacity for adaptation. It is a place where seasonal flooding is not fought, but utilized—transforming a logistical nightmare into one of Southeast Asia&#39;s most spectacular agricultural ballets.</p>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: Journeying with Purpose</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                True exploration is not simply the accumulation of photographs, but the conscious discovery of history, craftsmanship, and human kinship along the living rivers of Vietnam.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Location</div>
        <div class="font-bold text-slate-800 text-[13px]">Vietnam Inbound</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Ideal Timing</div>
        <div class="font-bold text-slate-800 text-[13px]">Year-Round</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Access Policy</div>
        <div class="font-bold text-slate-800 text-[13px]">Curated Entry</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Experience Type</div>
        <div class="font-bold text-slate-800 text-[13px]">Cultural Immersion</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/sa-dec-flower-village" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/sa-dec-flower-village');" 
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

export const canThoMarketsGuideHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">Can Tho Markets: The 2026 definitive Commercial Matrix</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          Can Tho Markets: The 2026 definitive Commercial Matrix
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          A Comprehensive 2026 Cultural & Practical Expedition Guide
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          A curated field guide designed for intentional voyagers seeking deep cultural resonance and seamless navigation across Vietnam's iconic landscapes.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Jul 26, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">10 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Bespoke Field Notes
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">📍</span> Curated Inbound Journey
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">✨</span> Slow Travel Signature
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏆</span> The Rice Tour Verified
    </div>
  
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
                  <a href="#the-arteries-of-the-deltas-commerce" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Arteries of the Delta's Commerce</a>
  <a href="#tier-1-the-aquatic-giants" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🛶 Tier 1: The Aquatic Giants</a>
  <a href="#cai-rang-floating-market" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Cai Rang Floating Market</a>
  <a href="#phong-dien-floating-market" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Phong Dien Floating Market</a>
  <a href="#tier-2-the-terrestrial-institutions" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🏛️ Tier 2: The Terrestrial Institutions</a>
  <a href="#can-tho-ancient-market-cho-co-can-tho" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Can Tho Ancient Market (Chợ Cổ Cần Thơ)</a>
  <a href="#xuan-khanh-market" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Xuan Khanh Market</a>
  <a href="#tier-3-the-nocturnal-bazaars" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🌙 Tier 3: The Nocturnal Bazaars</a>
  <a href="#tay-do-night-market-ninh-kieu-wharf" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Tay Do Night Market (Ninh Kieu Wharf)</a>
  <a href="#tran-phu-night-market" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Tran Phu Night Market</a>
  <a href="#strategic-navigational-matrix" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">🧠 Strategic Navigational Matrix</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Location</div>
        <div class="text-[13px] font-bold text-slate-900">Vietnam Inbound</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Ideal Timing</div>
        <div class="text-[13px] font-bold text-slate-900">Year-Round</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Access Policy</div>
        <div class="text-[13px] font-bold text-slate-900">Curated Entry</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Experience Type</div>
        <div class="text-[13px] font-bold text-slate-900">Cultural Immersion</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            <hr>
<ul>
<li><strong>Commercial Epicenter:</strong> Can Tho City (The logistical hub of the Mekong Delta).</li>
<li><strong>The Typology:</strong> Floating wholesale markets, historic covered halls, and hyper-kinetic night bazaars.</li>
<li><strong>2026 Core Focus:</strong> Preserving agricultural authenticity amidst rapid urban modernization.</li>
<li><strong>Logistical Proximity:</strong> Most terrestrial markets are concentrated within the Ninh Kieu District.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-arteries-of-the-deltas-commerce" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            The Arteries of the Delta's Commerce
          </h2>
        </div>
      <p>To truly comprehend Can Tho, one must look past the modern concrete facades and focus on its markets. Historically, this city functioned as the central nexus where the immense agricultural yield of the Mekong River basin was aggregated, traded, and distributed. </p>
<p>For the 2026 traveler, the markets of Can Tho offer a visceral, unfiltered plunge into the Delta’s socio-economic heartbeat. Unlike the sterilized, air-conditioned supermarkets that are rapidly encroaching on the urban periphery, these traditional hubs remain intensely tactile, chaotic, and relentlessly alive.</p>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="tier-1-the-aquatic-giants" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🛶 Tier 1: The Aquatic Giants
          </h2>
        </div>
      <p>The defining characteristic of Mekong commerce is waterborne trade.</p>

        <h3 id="cai-rang-floating-market" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Cai Rang Floating Market
        </h3>
      <ul>
<li><strong>The Profile:</strong> The undisputed titan of riverine commerce. Despite a slight reduction in boat density in recent years due to improved road infrastructure, Cai Rang remains the largest wholesale floating market in the region.</li>
<li><strong>The Mechanics:</strong> Commerce is conducted via <em>cây bẹo</em> (a bamboo pole on which vendors impale a sample of what they are selling—be it a pineapple, a cabbage, or a sweet potato).</li>
<li><strong>2026 Field Note:</strong> Do not arrive at 08:00 AM. The true wholesale frenzy peaks between 05:00 AM and 06:30 AM.</li>
</ul>

        <h3 id="phong-dien-floating-market" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Phong Dien Floating Market
        </h3>
      <ul>
<li><strong>The Profile:</strong> The quieter, more intimate counterpoint to Cai Rang. Located further out (about 17km from the city center), Phong Dien operates with non-motorized rowing boats and focuses heavily on retail and breakfast transactions.</li>
<li><strong>The Verdict:</strong> If Cai Rang is an industrial wholesale hub, Phong Dien is a communal village gathering. It is rapidly becoming the favored choice for photographers seeking authentic, unhurried interactions.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="tier-2-the-terrestrial-institutions" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🏛️ Tier 2: The Terrestrial Institutions
          </h2>
        </div>
      <p>When the sun dictates a retreat from the river, commerce moves to land.</p>

        <h3 id="can-tho-ancient-market-cho-co-can-tho" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Can Tho Ancient Market (Chợ Cổ Cần Thơ)
        </h3>
      <ul>
<li><strong>The Profile:</strong> Also known as the Hang Duong Market. Constructed around 1915 alongside the Binh Thuy Ancient House, this structure is a masterclass in French colonial-era market architecture, featuring a soaring, vaulted iron roof designed to maximize airflow.</li>
<li><strong>The Goods:</strong> Primarily focused on tourist-oriented souvenirs, high-quality silk garments, and regional handicrafts.</li>
</ul>

        <h3 id="xuan-khanh-market" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Xuan Khanh Market
        </h3>
      <ul>
<li><strong>The Profile:</strong> The gritty, unapologetic stomach of the city. Xuan Khanh is where the locals actually shop for their daily provisions.</li>
<li><strong>The Experience:</strong> It is an intense sensory environment—expect the scent of fermented fish (<em>mắm</em>), the gleam of freshly butchered pork, and mountains of indigenous greens like water lilies and sesbania flowers.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="tier-3-the-nocturnal-bazaars" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🌙 Tier 3: The Nocturnal Bazaars
          </h2>
        </div>
      <p>As evening falls, the commercial energy pivots entirely toward gastronomy.</p>

        <h3 id="tay-do-night-market-ninh-kieu-wharf" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Tay Do Night Market (Ninh Kieu Wharf)
        </h3>
      <ul>
<li><strong>The Profile:</strong> The most famous, and consequently the most crowded, night market in the Delta. Stretching along the Hau River promenade, it is a gauntlet of street food, cheap apparel, and organized chaos.</li>
<li><strong>The Culinary Focus:</strong> Excellent for introductory street food: grilled rice paper (<em>bánh tráng nướng</em>), fresh sugarcane juice, and an endless array of skewers.</li>
<li><strong>2026 Insider Tip:</strong> The interior apparel section is highly repetitive; spend your time at the outer culinary ring facing the river.</li>
</ul>

        <h3 id="tran-phu-night-market" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Tran Phu Night Market
        </h3>
      <ul>
<li><strong>The Profile:</strong> A specialized seafood corridor. Located slightly away from the main tourist strip, this is a kilometers-long stretch of open-air restaurants displaying live tanks of river prawns, snakehead fish, and various snails.</li>
<li><strong>The Verdict:</strong> Considerably more expensive than standard street food, but essential for those seeking fresh, large-format aquatic dining.</li>
</ul>
<hr>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="strategic-navigational-matrix" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            🧠 Strategic Navigational Matrix
          </h2>
        </div>
      
      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 text-sm">
          <thead>
            <tr class="bg-slate-900 text-white font-serif">
              <th class="p-4 font-bold text-left">Market</th><th class="p-4 font-bold text-left">Optimal Hour</th><th class="p-4 font-bold text-left">Primary Objective</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Cai Rang</strong></td><td class="p-4">05:30 AM</td><td class="p-4">Wholesale tropical fruits, riverine photography</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Xuan Khanh</strong></td><td class="p-4">07:00 AM</td><td class="p-4">Authentic local grocery immersion, raw ingredients</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Can Tho Ancient</strong></td><td class="p-4">10:00 AM</td><td class="p-4">Architectural appreciation, souvenir procurement</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Tay Do Night</strong></td><td class="p-4">08:00 PM</td><td class="p-4">Casual street food grazing, river promenade walking</td></tr>

          </tbody>
        </table>
      </div>
    <p>To navigate the markets of Can Tho is to map the agricultural DNA of Southern Vietnam. From the bamboo poles of Cai Rang to the vaulted ceilings of the Ancient Market, these spaces are the enduring, chaotic, and beautiful engines of the Delta.</p>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: Journeying with Purpose</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                True exploration is not simply the accumulation of photographs, but the conscious discovery of history, craftsmanship, and human kinship along the living rivers of Vietnam.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Location</div>
        <div class="font-bold text-slate-800 text-[13px]">Vietnam Inbound</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Ideal Timing</div>
        <div class="font-bold text-slate-800 text-[13px]">Year-Round</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Access Policy</div>
        <div class="font-bold text-slate-800 text-[13px]">Curated Entry</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Experience Type</div>
        <div class="font-bold text-slate-800 text-[13px]">Cultural Immersion</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/can-tho-markets-guide" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/can-tho-markets-guide');" 
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

export const chuaSomRongSocTrangHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">Som Rong Pagoda: The Majestic Khmer Architectural Marvel of Soc Trang (2026)</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          Som Rong Pagoda: The Majestic Khmer Architectural Marvel of Soc Trang (2026)
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          A Comprehensive 2026 Cultural & Practical Expedition Guide
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          A curated field guide designed for intentional voyagers seeking deep cultural resonance and seamless navigation across Vietnam's iconic landscapes.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Aug 26, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">10 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Bespoke Field Notes
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">📍</span> Curated Inbound Journey
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">✨</span> Slow Travel Signature
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏆</span> The Rice Tour Verified
    </div>
  
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
                  <a href="#introduction-to-som-rong-pagoda" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Introduction to Som Rong Pagoda</a>
  <a href="#the-architectural-masterpieces" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Architectural Masterpieces</a>
  <a href="#the-grand-sala-and-main-hall" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Grand Sala and Main Hall</a>
  <a href="#the-majestic-stupa-bao-thap" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Majestic Stupa (Bảo Tháp)</a>
  <a href="#the-giant-reclining-buddha" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Giant Reclining Buddha</a>
  <a href="#experiencing-khmer-culture-in-2026" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Experiencing Khmer Culture in 2026</a>
  <a href="#festivals-and-celebrations" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Festivals and Celebrations</a>
  <a href="#photography-and-etiquette" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Photography and Etiquette</a>
  <a href="#travel-logistics-and-nearby-attractions" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Travel Logistics and Nearby Attractions</a>
  <a href="#epilogue" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Epilogue</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Location</div>
        <div class="text-[13px] font-bold text-slate-900">Vietnam Inbound</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Ideal Timing</div>
        <div class="text-[13px] font-bold text-slate-900">Year-Round</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Access Policy</div>
        <div class="text-[13px] font-bold text-slate-900">Curated Entry</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Experience Type</div>
        <div class="text-[13px] font-bold text-slate-900">Cultural Immersion</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            
        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="introduction-to-som-rong-pagoda" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            1. Introduction to Som Rong Pagoda
          </h2>
        </div>
      <p>Located in Ward 5, Soc Trang City, <strong>Som Rong Pagoda</strong> (officially known as Wat Pătum Wôngsa Som Rông) is a crowning jewel of Khmer Theravada Buddhism in the Mekong Delta. Originally constructed around 1785 using bamboo and lá nipa, the pagoda has undergone several major renovations over its 240-year history to become the magnificent architectural complex it is today. </p>
<p>The name &quot;Som Rong&quot; is derived from a local tree species that once grew abundantly in the area. Today, the pagoda is renowned not just for its spiritual significance but also as a masterpiece of Khmer artistry, drawing thousands of pilgrims and photography enthusiasts annually.</p>
<div class="font-medium text-slate-900 text-lg border-l-4 border-amber-500 pl-4 my-5 bg-amber-50/50 py-3 rounded-r-xl"><p>🌟 <strong>Key Curated Dimensions / Fast Facts</strong></p>
<ul>
<li><strong>Location:</strong> 367 Ton Duc Thang Street, Ward 5, Soc Trang City.</li>
<li><strong>Scale:</strong> Covers a sprawling 5-hectare compound.</li>
<li><strong>Dress Code:</strong> Modest attire is strictly enforced (knees and shoulders covered).</li>
</ul>
</div>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-architectural-masterpieces" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            2. The Architectural Masterpieces
          </h2>
        </div>
      
        <h3 id="the-grand-sala-and-main-hall" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The Grand Sala and Main Hall
        </h3>
      <p>The Main Hall (Chánh điện) is the spiritual epicenter of the pagoda. Its sweeping multi-tiered roof is adorned with intricate Naga (serpent) motifs, symbolizing protection. Inside, the altar houses multiple Buddha statues, illuminated by natural light and golden accents, creating an atmosphere of profound serenity. The walls are meticulously painted with frescoes depicting the life of Siddhartha Gautama, offering a visual narrative of Buddhist teachings.</p>

        <h3 id="the-majestic-stupa-bao-thap" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The Majestic Stupa (Bảo Tháp)
        </h3>
      <p>Completed in recent years, the stupa at Som Rong Pagoda is a breathtaking structure that blends traditional Khmer design with modern aesthetics. Painted in a striking palette of grey and gold, the stupa features four gates facing the cardinal directions, each guarded by mythical creatures. The intricate bas-reliefs and the sheer scale of the stupa make it a favorite backdrop for photographers, especially during the golden hour when the fading sun casts dramatic shadows across its textured surface.</p>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-giant-reclining-buddha" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            3. The Giant Reclining Buddha
          </h2>
        </div>
      <p>The undeniable centerpiece of Som Rong Pagoda is the monumental <strong>Reclining Buddha statue</strong>, which was inaugurated in recent years. Measuring an astonishing 73 meters in length, 22 meters in height, and weighing over 490 tons, it is currently the largest reclining Buddha in Vietnam.</p>
<ul>
<li><strong>Artistic Details:</strong> The statue is painted in a serene pale blue-white hue, contrasting beautifully with the golden accents of the Buddha&#39;s robes and the ornate halo.</li>
<li><strong>Symbolism:</strong> The reclining posture represents the Buddha entering Parinirvana (Nirvana after death), a state of ultimate peace and liberation from the cycle of rebirth.</li>
<li><strong>Visitor Experience:</strong> Walking along the length of the statue provides a humbling perspective of its scale. Beneath the statue, a hollowed-out base is designed to serve as a meditation hall and accommodation for monks.</li>
</ul>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="experiencing-khmer-culture-in-2026" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            4. Experiencing Khmer Culture in 2026
          </h2>
        </div>
      <p>Visiting Som Rong Pagoda offers more than just architectural appreciation; it is a deep dive into the living culture of the Khmer Krom people. </p>

        <h3 id="festivals-and-celebrations" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Festivals and Celebrations
        </h3>
      <p>If you visit during major Khmer festivals such as <strong>Chol Chnam Thmay</strong> (New Year, usually in April), <strong>Sen Dolta</strong> (Ancestor Worship, around August/September), or <strong>Ok Om Bok</strong> (Moon Worship, November), the pagoda transforms into a vibrant hub of community activity. You can witness traditional music, classical Apsara dancing, and the famous Ngo boat racing rituals.</p>

        <h3 id="photography-and-etiquette" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Photography and Etiquette
        </h3>
      <p>Som Rong Pagoda is incredibly photogenic. However, as a place of active worship, visitors must adhere to strict etiquette:</p>
<ul>
<li>Always remove your shoes before entering the Main Hall or Sala.</li>
<li>Speak softly and avoid disruptive behavior.</li>
<li>Do not point your feet towards the Buddha statues when sitting.</li>
<li>Ask for permission before photographing monks.</li>
</ul>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="travel-logistics-and-nearby-attractions" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            5. Travel Logistics and Nearby Attractions
          </h2>
        </div>
      <p>Soc Trang is approximately 230 kilometers from Ho Chi Minh City, making it accessible via a 4-5 hour drive along the national highway. </p>

      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 text-sm">
          <thead>
            <tr class="bg-slate-900 text-white font-serif">
              <th class="p-4 font-bold text-left">Mode of Transport</th><th class="p-4 font-bold text-left">Duration</th><th class="p-4 font-bold text-left">Estimated Cost (2026)</th><th class="p-4 font-bold text-left">Notes</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Sleeper Bus</strong></td><td class="p-4">5 Hours</td><td class="p-4">180,000 - 250,000 VND</td><td class="p-4">Depart from Mien Tay Bus Station (HCMC)</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Private Car</strong></td><td class="p-4">4 Hours</td><td class="p-4">1,800,000 - 2,500,000 VND</td><td class="p-4">Ideal for families or small groups</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Motorbike</strong></td><td class="p-4">6 Hours</td><td class="p-4">~150,000 VND (Gas)</td><td class="p-4">Recommended only for experienced riders</td></tr>

          </tbody>
        </table>
      </div>
    <p><strong>Complementary Destinations:</strong>
While in Soc Trang, you should also explore other architectural wonders such as the <strong>Bat Pagoda (Chùa Dơi)</strong>, famous for its resident fruit bats, and the <strong>Clay Pagoda (Chùa Đất Sét)</strong>. Don&#39;t forget to sample the local culinary pride: <em>Bánh Pía</em> (durian and salted egg yolk pastry) and <em>Bún Nước Lèo</em> (fermented fish noodle soup).</p>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="epilogue" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            6. Epilogue
          </h2>
        </div>
      <p>Som Rong Pagoda is a transcendent destination where the spiritual depth of Khmer Buddhism converges with awe-inspiring artistry. Whether you seek a moment of quiet reflection beneath the gaze of the giant Reclining Buddha or wish to marvel at the intricate details of the grand stupa, this sanctuary promises an unforgettable cultural expedition in the heart of the Mekong Delta.</p>
<div class="font-medium text-slate-900 text-lg border-l-4 border-amber-500 pl-4 my-5 bg-amber-50/50 py-3 rounded-r-xl"><p>🚐 <strong>Embark on a Cultural Odyssey with The Rice Tour</strong>
Ready to explore the hidden gems of Soc Trang? Our expert guides at The Rice Tour offer curated itineraries that delve deep into the rich tapestry of Khmer heritage. Contact us today to customize your exclusive Mekong Delta expedition.</p>
</div>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: Journeying with Purpose</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                True exploration is not simply the accumulation of photographs, but the conscious discovery of history, craftsmanship, and human kinship along the living rivers of Vietnam.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Location</div>
        <div class="font-bold text-slate-800 text-[13px]">Vietnam Inbound</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Ideal Timing</div>
        <div class="font-bold text-slate-800 text-[13px]">Year-Round</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Access Policy</div>
        <div class="font-bold text-slate-800 text-[13px]">Curated Entry</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Experience Type</div>
        <div class="font-bold text-slate-800 text-[13px]">Cultural Immersion</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/chua-som-rong-soc-trang" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/chua-som-rong-soc-trang');" 
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

export const nhaHatCaoVanLauHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">Cao Van Lau Theater: The Iconic 'Conical Hat' Architectural Masterpiece of Bac Lieu</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          Cao Van Lau Theater: The Iconic 'Conical Hat' Architectural Masterpiece of Bac Lieu
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          A Comprehensive 2026 Cultural & Practical Expedition Guide
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          A curated field guide designed for intentional voyagers seeking deep cultural resonance and seamless navigation across Vietnam's iconic landscapes.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Aug 26, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">10 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Bespoke Field Notes
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">📍</span> Curated Inbound Journey
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">✨</span> Slow Travel Signature
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏆</span> The Rice Tour Verified
    </div>
  
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
                  <a href="#introduction-to-cao-van-lau-theater" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Introduction to Cao Van Lau Theater</a>
  <a href="#the-architectural-masterpiece" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Architectural Masterpiece</a>
  <a href="#the-three-conical-hats-design" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The "Three Conical Hats" Design</a>
  <a href="#the-surrounding-complex" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Surrounding Complex</a>
  <a href="#the-cultural-heartbeat-of-bac-lieu" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Cultural Heartbeat of Bac Lieu</a>
  <a href="#a-fusion-of-artistic-troupes" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">A Fusion of Artistic Troupes</a>
  <a href="#don-ca-tai-tu-and-cai-luong-performances" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Don Ca Tai Tu and Cai Luong Performances</a>
  <a href="#visitor-guidelines-and-photography-2026-updates" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Visitor Guidelines and Photography (2026 Updates)</a>
  <a href="#travel-logistics-and-nearby-attractions" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Travel Logistics and Nearby Attractions</a>
  <a href="#epilogue" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Epilogue</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Location</div>
        <div class="text-[13px] font-bold text-slate-900">Vietnam Inbound</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Ideal Timing</div>
        <div class="text-[13px] font-bold text-slate-900">Year-Round</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Access Policy</div>
        <div class="text-[13px] font-bold text-slate-900">Curated Entry</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Experience Type</div>
        <div class="text-[13px] font-bold text-slate-900">Cultural Immersion</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            
        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="introduction-to-cao-van-lau-theater" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            1. Introduction to Cao Van Lau Theater
          </h2>
        </div>
      <p>The <strong>Cao Van Lau Theater</strong> is undeniably the most striking architectural landmark in Bac Lieu City. Dominating the spacious Hung Vuong Square, the theater’s design is inspired by the <em>Nón Lá</em> (the traditional Vietnamese conical hat), an enduring symbol of Vietnamese culture and the grace of Southern women. </p>
<p>Named in honor of the legendary musician Cao Van Lau—the composer of the immortal <em>Da Co Hoai Lang</em>—the theater stands as a bastion for preserving and promoting <strong>Don Ca Tai Tu</strong>, a musical art form recognized by UNESCO as an Intangible Cultural Heritage of Humanity in 2013.</p>
<div class="font-medium text-slate-900 text-lg border-l-4 border-amber-500 pl-4 my-5 bg-amber-50/50 py-3 rounded-r-xl"><p>🌟 <strong>Key Curated Dimensions / Fast Facts</strong></p>
<ul>
<li><strong>Location:</strong> Hung Vuong Square, Ward 1, Bac Lieu City (Note: Following the 2025 administrative merger, Bac Lieu is now part of the greater Ca Mau province).</li>
<li><strong>Scale:</strong> Features three massive conical hat structures.</li>
<li><strong>Performance Schedule:</strong> Traditional Cai Luong and Don Ca Tai Tu performances are typically held on Saturday evenings.</li>
</ul>
</div>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-architectural-masterpiece" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            2. The Architectural Masterpiece
          </h2>
        </div>
      
        <h3 id="the-three-conical-hats-design" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The "Three Conical Hats" Design
        </h3>
      <p>The theater&#39;s structural concept is brilliant in its simplicity and profound in its symbolism. The complex consists of three distinct cylindrical buildings, each crowned with a massive, stylized conical hat roof. </p>
<ul>
<li><strong>The Significance of Three:</strong> In Vietnamese culture, the number three holds deep meaning, often associated with stability (&quot;firm as a three-legged stool&quot;) and representing the unity of the three regions of Vietnam (North, Central, and South). It also symbolizes the harmony between the Kinh, Khmer, and Hoa ethnic groups coexisting in the Mekong Delta.</li>
<li><strong>Record-Breaking Scale:</strong> In 2014, the Vietnam Records Organization (VietKings) officially recognized the theater as having the &quot;three largest conical hat structures in Vietnam.&quot;</li>
</ul>

        <h3 id="the-surrounding-complex" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The Surrounding Complex
        </h3>
      <p>The theater sits within the expansive Hung Vuong Square, bordered by meticulously manicured gardens, a serene artificial lake, and walking paths. The reflection of the three giant hats on the water&#39;s surface, particularly when illuminated by the state-of-the-art LED lighting system at night, creates a cinematic and mesmerizing visual spectacle.</p>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-cultural-heartbeat-of-bac-lieu" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            3. The Cultural Heartbeat of Bac Lieu
          </h2>
        </div>
      
        <h3 id="a-fusion-of-artistic-troupes" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          A Fusion of Artistic Troupes
        </h3>
      <p>The theater is not merely an architectural shell; it is a thriving cultural institution. In 2017, it became the unified home for two major local artistic groups: the Cao Van Lau Cai Luong Troupe and the Khmer General Arts Troupe. Today, a robust ensemble of over 80 actors, musicians, and artists continually breathe life into the venue.</p>

        <h3 id="don-ca-tai-tu-and-cai-luong-performances" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Don Ca Tai Tu and Cai Luong Performances
        </h3>
      <p>For travelers seeking authentic cultural immersion, attending a performance at the Cao Van Lau Theater is paramount. The acoustics inside the main auditoriums are engineered to enhance the soulful melodies of traditional instruments like the <em>đàn bầu</em> (monochord) and <em>đàn kìm</em> (moon lute). On Saturday nights, the theater often hosts free or subsidized performances, allowing both locals and tourists to revel in the golden eras of Cai Luong theater.</p>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="visitor-guidelines-and-photography-2026-updates" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            4. Visitor Guidelines and Photography (2026 Updates)
          </h2>
        </div>
      <p>The Cao Van Lau Theater is incredibly photogenic, but timing your visit is crucial for the best experience.</p>
<ul>
<li><strong>Daytime Exploration (07:30 - 17:30):</strong> The exterior grounds are free to explore. The bright daylight accentuates the sheer scale and architectural details of the conical hats against the blue sky. </li>
<li><strong>Evening Magic (Post 18:00):</strong> The square comes alive as locals gather for evening strolls. The theater&#39;s dynamic lighting system transforms the structures into glowing, colorful beacons.</li>
<li><strong>Photography Tips:</strong> Use a wide-angle lens to capture the entirety of the three hats from across the square. The reflection pool offers the perfect foreground for symmetrical, cinematic shots.</li>
</ul>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="travel-logistics-and-nearby-attractions" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            5. Travel Logistics and Nearby Attractions
          </h2>
        </div>
      <p>Bac Lieu is approximately 280 kilometers from Ho Chi Minh City. With the completion of recent expressway extensions in 2025, travel time has been significantly reduced.</p>

      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 text-sm">
          <thead>
            <tr class="bg-slate-900 text-white font-serif">
              <th class="p-4 font-bold text-left">Mode of Transport</th><th class="p-4 font-bold text-left">Duration</th><th class="p-4 font-bold text-left">Estimated Cost (2026)</th><th class="p-4 font-bold text-left">Notes</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Limousine/Sleeper Bus</strong></td><td class="p-4">~4.5 Hours</td><td class="p-4">200,000 - 300,000 VND</td><td class="p-4">Frequent departures from Mien Tay Bus Station</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Private Car</strong></td><td class="p-4">4 Hours</td><td class="p-4">2,000,000 - 2,800,000 VND</td><td class="p-4">Most convenient for customized itineraries</td></tr>

          </tbody>
        </table>
      </div>
    <p><strong>Complementary Destinations:</strong>
Maximize your Bac Lieu itinerary by visiting the <strong>Bac Lieu Wind Farm</strong> (Cánh Đồng Điện Gió), the opulent <strong>Mansion of the Bac Lieu Dude</strong> (Nhà Công Tử Bạc Liêu), and the <strong>Quan Am Phat Dai</strong> (Mother Goddess statue facing the sea). </p>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="epilogue" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            6. Epilogue
          </h2>
        </div>
      <p>The Cao Van Lau Theater is a profound architectural statement that bridges the past and the future. It honors the deep roots of Southern Vietnamese music while providing a modern, world-class venue for its continuation. A visit here is a multisensory journey—where the eyes feast on architectural grandeur and the ears are serenaded by the timeless, nostalgic echoes of <em>Da Co Hoai Lang</em>.</p>
<div class="font-medium text-slate-900 text-lg border-l-4 border-amber-500 pl-4 my-5 bg-amber-50/50 py-3 rounded-r-xl"><p>🚐 <strong>Embark on a Cultural Odyssey with The Rice Tour</strong>
Discover the musical soul of the Mekong Delta with The Rice Tour. Our bespoke itineraries ensure you experience the architectural marvels and authentic local culture of Bac Lieu at their absolute best. Let us craft your perfect 2026 expedition.</p>
</div>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: Journeying with Purpose</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                True exploration is not simply the accumulation of photographs, but the conscious discovery of history, craftsmanship, and human kinship along the living rivers of Vietnam.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Location</div>
        <div class="font-bold text-slate-800 text-[13px]">Vietnam Inbound</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Ideal Timing</div>
        <div class="font-bold text-slate-800 text-[13px]">Year-Round</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Access Policy</div>
        <div class="font-bold text-slate-800 text-[13px]">Curated Entry</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Experience Type</div>
        <div class="font-bold text-slate-800 text-[13px]">Cultural Immersion</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/nha-hat-cao-van-lau" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/nha-hat-cao-van-lau');" 
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

export const choNoiCaiRangCanThoHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">Cai Rang Floating Market: The Ultimate 2026 Exploration and Survival Guide</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          Cai Rang Floating Market: The Ultimate 2026 Exploration and Survival Guide
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          A Comprehensive 2026 Cultural & Practical Expedition Guide
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          A curated field guide designed for intentional voyagers seeking deep cultural resonance and seamless navigation across Vietnam's iconic landscapes.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Aug 26, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">10 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Bespoke Field Notes
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">📍</span> Curated Inbound Journey
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">✨</span> Slow Travel Signature
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏆</span> The Rice Tour Verified
    </div>
  
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
                  <a href="#introduction-to-cai-rang-floating-market" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Introduction to Cai Rang Floating Market</a>
  <a href="#navigating-the-logistics-boat-rentals-in-2026" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Navigating the Logistics: Boat Rentals in 2026</a>
  <a href="#the-cultural-nuances-deciphering-the-beo-system" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Cultural Nuances: Deciphering the "Bẹo" System</a>
  <a href="#unmissable-signature-experiences" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Unmissable Signature Experiences</a>
  <a href="#breakfast-on-the-water" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Breakfast on the Water</a>
  <a href="#pineapple-tasting-on-the-roof" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Pineapple Tasting on the Roof</a>
  <a href="#visiting-a-traditional-noodle-factory" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Visiting a Traditional Noodle Factory</a>
  <a href="#epilogue" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Epilogue</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Location</div>
        <div class="text-[13px] font-bold text-slate-900">Vietnam Inbound</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Ideal Timing</div>
        <div class="text-[13px] font-bold text-slate-900">Year-Round</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Access Policy</div>
        <div class="text-[13px] font-bold text-slate-900">Curated Entry</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Experience Type</div>
        <div class="text-[13px] font-bold text-slate-900">Cultural Immersion</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            
        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="introduction-to-cai-rang-floating-market" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            1. Introduction to Cai Rang Floating Market
          </h2>
        </div>
      <p>Located on the Can Tho River, approximately 6 kilometers from the iconic Ninh Kieu Wharf, <strong>Cai Rang Floating Market</strong> is the largest and most bustling floating market in the Mekong Delta. The name &quot;Cai Rang&quot; traces its roots back to the Khmer word <em>karan</em> (meaning an earthen stove), a nod to the historical trade of pottery and clay stoves in the region. </p>
<p>Formed in the early 20th century when intricate waterway networks were the primary means of transportation, the market was officially recognized as a National Intangible Cultural Heritage in 2016. While modern road networks have halved the number of traditional merchant boats, the market has evolved, maintaining its cultural essence while accommodating a booming tourism sector.</p>
<div class="font-medium text-slate-900 text-lg border-l-4 border-amber-500 pl-4 my-5 bg-amber-50/50 py-3 rounded-r-xl"><p>🌟 <strong>Key Curated Dimensions / Fast Facts</strong></p>
<ul>
<li><strong>Golden Hour:</strong> 05:00 AM to 08:00 AM. Arrive by 06:00 AM to witness the sunrise and peak trading activity.</li>
<li><strong>Distance:</strong> 15-20 minutes by boat from Ninh Kieu Wharf.</li>
<li><strong>Caution:</strong> Beware of overly cheap boat rental offers from unlicensed street touts at the wharf.</li>
</ul>
</div>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="navigating-the-logistics-boat-rentals-in-2026" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            2. Navigating the Logistics: Boat Rentals in 2026
          </h2>
        </div>
      <p>Renting a boat is the only way to truly experience the floating market. Visitors typically depart from Ninh Kieu Wharf. Here is the updated pricing matrix for 2026 to help you avoid tourist traps:</p>

      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 text-sm">
          <thead>
            <tr class="bg-slate-900 text-white font-serif">
              <th class="p-4 font-bold text-left">Boat Type / Group Size</th><th class="p-4 font-bold text-left">Estimated Price (2026)</th><th class="p-4 font-bold text-left">Duration</th><th class="p-4 font-bold text-left">Notes</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Small Sampan (1-4 pax)</strong></td><td class="p-4">600,000 - 800,000 VND</td><td class="p-4">2-3 Hours</td><td class="p-4">Intimate experience, can navigate narrower canals</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Medium Boat (5-9 pax)</strong></td><td class="p-4">900,000 - 1,200,000 VND</td><td class="p-4">3-4 Hours</td><td class="p-4">Includes roof cover and life jackets</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Large Tourist Boat (10+ pax)</strong></td><td class="p-4">1,490,000 - 2,000,000 VND</td><td class="p-4">4 Hours</td><td class="p-4">Best for large families, stable and spacious</td></tr>
<tr class="hover:bg-slate-50/80 transition-colors"><td class="p-4"><strong>Join-in Tour Ticket</strong></td><td class="p-4">~150,000 VND / pax</td><td class="p-4">3 Hours</td><td class="p-4">Budget-friendly, departs when full</td></tr>

          </tbody>
        </table>
      </div>
    <p><em>Pro Tip:</em> Always negotiate the itinerary clearly before boarding. A standard route includes the floating market, a traditional rice noodle (hủ tiếu) factory, and a local fruit orchard.</p>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-cultural-nuances-deciphering-the-beo-system" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            3. The Cultural Nuances: Deciphering the "Bẹo" System
          </h2>
        </div>
      <p>The chaotic beauty of the market is governed by a brilliant, century-old advertising system known as the <strong>Cây Bẹo</strong> (bamboo pole). With hundreds of boats bobbing on the water, merchants hang their goods on a tall bamboo pole at the bow of their boat, allowing buyers to identify what is being sold from afar.</p>
<p>The system follows the fascinating &quot;4 Hangs&quot; (4 Treo) rule:</p>
<ol>
<li><strong>Hang what is sold:</strong> (Treo gì bán nấy) E.g., hanging a pineapple means they sell pineapples.</li>
<li><strong>Hang but don&#39;t sell:</strong> (Treo mà không bán) E.g., hanging clothes means the boat is their home.</li>
<li><strong>Don&#39;t hang but sell:</strong> (Không treo mà bán) E.g., small boats selling breakfast, coffee, and snacks don&#39;t use poles.</li>
<li><strong>Hang one thing, sell another:</strong> (Treo cái này bán cái khác) E.g., hanging a piece of roofing material implies the owner wants to sell the boat itself.</li>
</ol>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="unmissable-signature-experiences" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            4. Unmissable Signature Experiences
          </h2>
        </div>
      
        <h3 id="breakfast-on-the-water" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Breakfast on the Water
        </h3>
      <p>One of the most cinematic and memorable experiences is enjoying breakfast served directly from a swaying sampan. The signature dish is <em>Hủ Tiếu</em> (pork and tapioca noodle soup), costing around 40,000 - 50,000 VND per bowl. Enjoying a steaming bowl of noodles while balancing on the river, followed by a robust Vietnamese iced coffee (cà phê sữa đá), is a sensory delight.</p>

        <h3 id="pineapple-tasting-on-the-roof" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Pineapple Tasting on the Roof
        </h3>
      <p>Many merchant boats selling pineapples offer an experiential treat. For a small fee, the owner will expertly peel the pineapple right before your eyes. You can climb atop the boat&#39;s wooden roof, savor the incredibly sweet, fresh fruit, and enjoy a panoramic view of the bustling market—a perfect photo opportunity.</p>

        <h3 id="visiting-a-traditional-noodle-factory" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Visiting a Traditional Noodle Factory
        </h3>
      <p>Most boat itineraries include a stop at a riverside family-run factory (like Sáu Hoài or Chín Của). Here, you can witness the entire process of making rice noodles, from milling the rice to drying the batter on bamboo mats. You can even try your hand at operating the manual noodle-cutting machine.</p>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="epilogue" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            5. Epilogue
          </h2>
        </div>
      <p>The Cai Rang Floating Market is a living, breathing museum of the Mekong Delta&#39;s aquatic heritage. While it is undoubtedly a major tourist attraction in 2026, looking past the surface reveals a resilient community that still relies on the river&#39;s ebb and flow. By waking up before dawn and navigating the waters with respect, you become part of a centuries-old tradition that continues to define the spirit of Southern Vietnam.</p>
<div class="font-medium text-slate-900 text-lg border-l-4 border-amber-500 pl-4 my-5 bg-amber-50/50 py-3 rounded-r-xl"><p>🚐 <strong>Embark on a Cultural Odyssey with The Rice Tour</strong>
Want to experience Cai Rang Floating Market without the hassle of haggling and logistics? The Rice Tour offers premium, early-morning guided expeditions on private, comfortable boats, ensuring you get the best lighting for photos and the most authentic culinary stops. Contact us to book your unforgettable Mekong sunrise.</p>
</div>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: Journeying with Purpose</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                True exploration is not simply the accumulation of photographs, but the conscious discovery of history, craftsmanship, and human kinship along the living rivers of Vietnam.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Location</div>
        <div class="font-bold text-slate-800 text-[13px]">Vietnam Inbound</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Ideal Timing</div>
        <div class="font-bold text-slate-800 text-[13px]">Year-Round</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Access Policy</div>
        <div class="font-bold text-slate-800 text-[13px]">Curated Entry</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Experience Type</div>
        <div class="font-bold text-slate-800 text-[13px]">Cultural Immersion</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/cho-noi-cai-rang-can-tho" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/cho-noi-cai-rang-can-tho');" 
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

export const mercuryPhuQuocResortVillasHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">Mercury Phu Quoc Resort & Villas: The Premium 2026 Accommodation Partner</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          Mercury Phu Quoc Resort & Villas: The Premium 2026 Accommodation Partner
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          A Comprehensive 2026 Cultural & Practical Expedition Guide
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          A curated field guide designed for intentional voyagers seeking deep cultural resonance and seamless navigation across Vietnam's iconic landscapes.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Aug 26, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">10 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Bespoke Field Notes
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">📍</span> Curated Inbound Journey
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">✨</span> Slow Travel Signature
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏆</span> The Rice Tour Verified
    </div>
  
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
                  <a href="#introduction-to-mercury-phu-quoc" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Introduction to Mercury Phu Quoc</a>
  <a href="#why-the-rice-tour-chooses-mercury-phu-quoc" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Why The Rice Tour Chooses Mercury Phu Quoc</a>
  <a href="#the-perfect-beachfront-rhythm" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Perfect Beachfront Rhythm</a>
  <a href="#versatile-accommodation-models" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Versatile Accommodation Models</a>
  <a href="#flawless-logistics-for-group-travel" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Flawless Logistics for Group Travel</a>
  <a href="#signature-amenities-and-experiences" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Signature Amenities and Experiences</a>
  <a href="#the-infinity-pool-and-beach-bar" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Infinity Pool & Beach Bar</a>
  <a href="#wellness-and-rejuvenation" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Wellness and Rejuvenation</a>
  <a href="#culinary-excellence" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Culinary Excellence</a>
  <a href="#integrating-mercury-into-your-2026-itinerary" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Integrating Mercury into Your 2026 Itinerary</a>
  <a href="#epilogue" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Epilogue</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Location</div>
        <div class="text-[13px] font-bold text-slate-900">Vietnam Inbound</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Ideal Timing</div>
        <div class="text-[13px] font-bold text-slate-900">Year-Round</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Access Policy</div>
        <div class="text-[13px] font-bold text-slate-900">Curated Entry</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Experience Type</div>
        <div class="text-[13px] font-bold text-slate-900">Cultural Immersion</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            
        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="introduction-to-mercury-phu-quoc" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            1. Introduction to Mercury Phu Quoc
          </h2>
        </div>
      <p>When orchestrating complex itineraries on Phu Quoc Island, <strong>The Rice Tour</strong> prioritizes accommodations that offer impeccable service, logistical convenience, and profound relaxation. <strong>Mercury Phu Quoc Resort &amp; Villas</strong> consistently exceeds these criteria, making it one of our most trusted partners for 2026.</p>
<p>Located along the pristine shores of Duong To Beach, the resort is a sanctuary where lush tropical gardens meet the azure waters of the Gulf of Thailand. It is specifically designed to cater to diverse travel needs—from multi-generational families requiring spacious villas to couples seeking a romantic beachfront hideaway.</p>
<div class="font-medium text-slate-900 text-lg border-l-4 border-amber-500 pl-4 my-5 bg-amber-50/50 py-3 rounded-r-xl"><p>🌟 <strong>Key Curated Dimensions / Fast Facts</strong></p>
<ul>
<li><strong>Location:</strong> Tran Hung Dao Street, Duong To, Phu Quoc City (Note: Following the 2025 administrative restructuring, Phu Quoc is now under the jurisdiction of An Giang Province).</li>
<li><strong>Airport Proximity:</strong> Merely 10 minutes from Phu Quoc International Airport, minimizing transit fatigue.</li>
<li><strong>Design Ethos:</strong> Classic Vietnamese architecture blended seamlessly with modern tropical resort aesthetics.</li>
</ul>
</div>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="why-the-rice-tour-chooses-mercury-phu-quoc" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            2. Why The Rice Tour Chooses Mercury Phu Quoc
          </h2>
        </div>
      <p>Our partnership with Mercury Phu Quoc is grounded in the resort&#39;s ability to seamlessly integrate into our bespoke travel itineraries. Here is why it remains a top recommendation for our inbound guests:</p>

        <h3 id="the-perfect-beachfront-rhythm" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The Perfect Beachfront Rhythm
        </h3>
      <p>Phu Quoc itineraries are often packed with dynamic activities—island hopping in the South, exploring the safari, and indulging in night markets. Mercury Phu Quoc provides the perfect counterbalance. Returning to the resort feels like retreating to a private haven where you can unwind by the ocean, ensuring the travel pace never feels rushed.</p>

        <h3 id="versatile-accommodation-models" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Versatile Accommodation Models
        </h3>
      <p>The resort&#39;s hybrid model of standard resort rooms and private villas is a logistical dream for travel planners:</p>
<ul>
<li><strong>For Couples:</strong> Deluxe Ocean View rooms offer intimate spaces with breathtaking sunset vistas.</li>
<li><strong>For Families and Groups:</strong> The 3-to-4 bedroom pool villas provide exclusive, shared living spaces, allowing multi-generational families to stay connected while maintaining privacy.</li>
</ul>

        <h3 id="flawless-logistics-for-group-travel" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Flawless Logistics for Group Travel
        </h3>
      <p>For our larger tour groups, efficiency is paramount. Mercury Phu Quoc excels in streamlining group check-ins, offering expansive dining venues that can accommodate our customized culinary requests, and providing ample space for specialized group activities.</p>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="signature-amenities-and-experiences" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            3. Signature Amenities and Experiences
          </h2>
        </div>
      
        <h3 id="the-infinity-pool-and-beach-bar" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The Infinity Pool & Beach Bar
        </h3>
      <p>The resort’s centerpiece is its expansive infinity pool that seems to spill directly into the ocean. Adjacent to it is the Beach Bar, the ultimate vantage point to witness Phu Quoc&#39;s legendary sunsets while sipping on a signature Mekong-inspired cocktail.</p>

        <h3 id="wellness-and-rejuvenation" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Wellness and Rejuvenation
        </h3>
      <p>After a day of exploring the coral reefs of the An Thoi archipelago, guests can retreat to the resort&#39;s holistic Spa. The treatments utilize local organic ingredients, offering traditional Vietnamese massages that perfectly alleviate travel fatigue.</p>

        <h3 id="culinary-excellence" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Culinary Excellence
        </h3>
      <p>The on-site restaurants celebrate the island&#39;s abundant seafood. Through our partnership, The Rice Tour guests can enjoy exclusive dining experiences, from private beach BBQs to curated menus that blend Western fine dining with robust Southern Vietnamese flavors.</p>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="integrating-mercury-into-your-2026-itinerary" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            4. Integrating Mercury into Your 2026 Itinerary
          </h2>
        </div>
      <p>Whether you are planning a comprehensive 4-Day/3-Night exploration of the Pearl Island or a leisurely week-long retreat, Mercury Phu Quoc serves as the ideal anchor. Its central location on the western coast means you are perfectly positioned halfway between the bustling Duong Dong town and the natural wonders of the South Island.</p>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="epilogue" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            5. Epilogue
          </h2>
        </div>
      <p>Choosing the right accommodation is pivotal to the success of any island expedition. Mercury Phu Quoc Resort &amp; Villas does not merely offer a place to sleep; it provides an immersive environment of tropical luxury and restorative peace. It is a partner that shares The Rice Tour&#39;s commitment to delivering flawless, memorable, and culturally enriching travel experiences.</p>
<div class="font-medium text-slate-900 text-lg border-l-4 border-amber-500 pl-4 my-5 bg-amber-50/50 py-3 rounded-r-xl"><p>🚐 <strong>Embark on a Coastal Odyssey with The Rice Tour</strong>
Ready to experience the pinnacle of Phu Quoc hospitality? Book your 2026 island expedition with The Rice Tour and enjoy exclusive rates, complimentary upgrades (subject to availability), and personalized itineraries featuring Mercury Phu Quoc Resort &amp; Villas. Contact our travel concierges today.</p>
</div>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: Journeying with Purpose</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                True exploration is not simply the accumulation of photographs, but the conscious discovery of history, craftsmanship, and human kinship along the living rivers of Vietnam.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Location</div>
        <div class="font-bold text-slate-800 text-[13px]">Vietnam Inbound</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Ideal Timing</div>
        <div class="font-bold text-slate-800 text-[13px]">Year-Round</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Access Policy</div>
        <div class="font-bold text-slate-800 text-[13px]">Curated Entry</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Experience Type</div>
        <div class="font-bold text-slate-800 text-[13px]">Cultural Immersion</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/mercury-phu-quoc-resort-villas" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/mercury-phu-quoc-resort-villas');" 
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

export const tongHopDichVuTaiNuCuoiMeKongHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">The Rice Tour 2026: Comprehensive Inbound Travel Services Matrix</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          The Rice Tour 2026: Comprehensive Inbound Travel Services Matrix
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          A Comprehensive 2026 Cultural & Practical Expedition Guide
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          A curated field guide designed for intentional voyagers seeking deep cultural resonance and seamless navigation across Vietnam's iconic landscapes.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Aug 26, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">10 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Bespoke Field Notes
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">📍</span> Curated Inbound Journey
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">✨</span> Slow Travel Signature
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏆</span> The Rice Tour Verified
    </div>
  
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
                  <a href="#introduction-to-the-rice-tours-philosophy" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Introduction to The Rice Tour's Philosophy</a>
  <a href="#core-tour-offerings-exploring-the-authentic-vietnam" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Core Tour Offerings: Exploring the Authentic Vietnam</a>
  <a href="#the-mekong-delta-masterpieces" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Mekong Delta Masterpieces</a>
  <a href="#central-heritage-and-coastal-retreats" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Central Heritage & Coastal Retreats</a>
  <a href="#northern-expeditions" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Northern Expeditions</a>
  <a href="#specialized-travel-services" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Specialized Travel Services</a>
  <a href="#private-transport-logistics" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Private Transport Logistics</a>
  <a href="#corporate-travel-and-mice" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Corporate Travel & MICE</a>
  <a href="#ticketing-and-concierge-services" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Ticketing and Concierge Services</a>
  <a href="#the-2026-commitment-to-sustainable-tourism" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The 2026 Commitment to Sustainable Tourism</a>
  <a href="#epilogue" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Epilogue</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Location</div>
        <div class="text-[13px] font-bold text-slate-900">Vietnam Inbound</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Ideal Timing</div>
        <div class="text-[13px] font-bold text-slate-900">Year-Round</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Access Policy</div>
        <div class="text-[13px] font-bold text-slate-900">Curated Entry</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Experience Type</div>
        <div class="text-[13px] font-bold text-slate-900">Cultural Immersion</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            
        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="introduction-to-the-rice-tours-philosophy" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            1. Introduction to The Rice Tour's Philosophy
          </h2>
        </div>
      <p>At <strong>The Rice Tour</strong>, we believe that a profound travel experience is architected through meticulous attention to detail, deep local knowledge, and an unwavering commitment to authenticity. We do not sell off-the-shelf packages; we curate narratives. </p>
<p>As a premier inbound tour operator in 2026, our service ecosystem is designed to handle every logistical nuance, allowing you to focus entirely on the joy of discovery. Whether you are navigating the intricate waterways of the Mekong Delta, exploring the ancient ruins of Hue, or trekking the terraced mountains of the Northwest, our dedicated team ensures your journey is seamless, luxurious, and culturally enriching.</p>
<div class="font-medium text-slate-900 text-lg border-l-4 border-amber-500 pl-4 my-5 bg-amber-50/50 py-3 rounded-r-xl"><p>🌟 <strong>The FIT (Free Independent Traveler) Advantage</strong>
We specialize in FIT travel, meaning every itinerary is highly flexible, tailored specifically to your pace, preferences, and passions.</p>
</div>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="core-tour-offerings-exploring-the-authentic-vietnam" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            2. Core Tour Offerings: Exploring the Authentic Vietnam
          </h2>
        </div>
      
        <h3 id="the-mekong-delta-masterpieces" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The Mekong Delta Masterpieces
        </h3>
      <p>As our geographical heartland, we possess unparalleled expertise in the Mekong Delta. We take you beyond the crowded tourist traps to experience the true rhythm of river life.</p>
<ul>
<li><strong>Floating Market Expeditions:</strong> Sunrise private boat charters to Cai Rang and Phong Dien.</li>
<li><strong>Deep Cultural Immersions:</strong> Homestays in ancient houses (like Huynh Thuy Le), cycling through immense fruit orchards, and hands-on traditional craft workshops.</li>
<li><strong>Cross-Border River Cruises:</strong> Seamless speedboat and luxury cruise connections from Can Tho and Chau Doc directly to Phnom Penh, Cambodia.</li>
</ul>

        <h3 id="central-heritage-and-coastal-retreats" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Central Heritage & Coastal Retreats
        </h3>
      <p>We connect the dots between Vietnam&#39;s most iconic UNESCO World Heritage sites and pristine coastlines.</p>
<ul>
<li><strong>The Imperial Journey:</strong> Curated historical tours of Hue&#39;s Citadel and the Royal Tombs, featuring exclusive dining experiences in restored royal residences.</li>
<li><strong>Hoi An Artisan Trails:</strong> Private photography walks, lantern-making workshops, and deep-dives into the region&#39;s culinary mastery (including the definitive Banh Mi guide).</li>
<li><strong>Coastal Luxury:</strong> Bespoke beach retreats in Da Nang, Nha Trang, and the newly redefined Phu Quoc Island.</li>
</ul>

        <h3 id="northern-expeditions" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Northern Expeditions
        </h3>
      <p>For those seeking dramatic landscapes and diverse ethnic cultures, our Northern itineraries are unmatched.</p>
<ul>
<li><strong>Hanoi Old Quarter Immersion:</strong> Culinary street-food safaris and deep historical walking tours.</li>
<li><strong>Ha Long Bay Private Charters:</strong> Exclusive luxury junk boat rentals avoiding the congested main routes.</li>
<li><strong>Highland Trekking:</strong> Guided eco-tours through the terraced fields of Sapa, Ha Giang, and Ninh Binh&#39;s karst mountains.</li>
</ul>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="specialized-travel-services" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            3. Specialized Travel Services
          </h2>
        </div>
      <p>Beyond standard itineraries, The Rice Tour offers a suite of specialized services to ensure complete logistical peace of mind.</p>

        <h3 id="private-transport-logistics" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Private Transport Logistics
        </h3>
      <p>We maintain a fleet of premium, late-model vehicles to ensure your comfort on the road.</p>
<ul>
<li><strong>Luxury Limousine Vans:</strong> Ideal for small groups and families prioritizing space and comfort.</li>
<li><strong>Private Car Transfers:</strong> Door-to-door airport transfers and inter-city transport with professional, English-speaking chauffeurs.</li>
<li><strong>Helicopter and Seaplane Charters:</strong> For the ultimate VIP experience and aerial views of Ha Long Bay or Vung Tau.</li>
</ul>

        <h3 id="corporate-travel-and-mice" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Corporate Travel & MICE
        </h3>
      <p>(Meetings, Incentives, Conferences, and Exhibitions)
The Rice Tour expertly handles large-scale logistics for corporate retreats, team-building expeditions, and executive offsites. We combine professional conference facilities with unique, localized team-building activities—such as culinary competitions in the Mekong or regattas in Nha Trang.</p>

        <h3 id="ticketing-and-concierge-services" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Ticketing and Concierge Services
        </h3>
      <p>Our 24/7 concierge desk is always at your disposal to handle the minutiae of travel.</p>
<ul>
<li><strong>Domestic Flights:</strong> Securing the best routes and managing unexpected schedule changes.</li>
<li><strong>High-Speed Ferries:</strong> Premium ticketing for routes like Rach Gia to Phu Quoc, or Vung Tau to Con Dao.</li>
<li><strong>Exclusive Reservations:</strong> Securing tables at Michelin-starred restaurants or highly sought-after local culinary institutions.</li>
</ul>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-2026-commitment-to-sustainable-tourism" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            4. The 2026 Commitment to Sustainable Tourism
          </h2>
        </div>
      <p>As we navigate the travel landscape of 2026, The Rice Tour is deeply committed to sustainable and responsible tourism. </p>
<ul>
<li><strong>Community Empowerment:</strong> We actively partner with local artisans, family-run eateries, and homestays to ensure tourism revenue directly benefits the communities you visit.</li>
<li><strong>Eco-Conscious Practices:</strong> We prioritize low-impact travel methods, discourage single-use plastics on our tours, and support wildlife conservation efforts (such as ethical guidelines at My Quynh Safari).</li>
</ul>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="epilogue" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            5. Epilogue
          </h2>
        </div>
      <p>Your journey to Vietnam should be as unique as you are. The Rice Tour&#39;s comprehensive matrix of services guarantees that from the moment you land until your final departure, you are enveloped in the warmth of Vietnamese hospitality and the precision of world-class travel management. </p>
<div class="font-medium text-slate-900 text-lg border-l-4 border-amber-500 pl-4 my-5 bg-amber-50/50 py-3 rounded-r-xl"><p>🚐 <strong>Start Crafting Your Blueprint</strong>
Do not settle for a generic vacation. Let our travel architects design your definitive 2026 Vietnam expedition. Contact The Rice Tour today to schedule your personalized itinerary consultation.</p>
</div>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: Journeying with Purpose</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                True exploration is not simply the accumulation of photographs, but the conscious discovery of history, craftsmanship, and human kinship along the living rivers of Vietnam.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Location</div>
        <div class="font-bold text-slate-800 text-[13px]">Vietnam Inbound</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Ideal Timing</div>
        <div class="font-bold text-slate-800 text-[13px]">Year-Round</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Access Policy</div>
        <div class="font-bold text-slate-800 text-[13px]">Curated Entry</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Experience Type</div>
        <div class="font-bold text-slate-800 text-[13px]">Cultural Immersion</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/the-rice-tour-comprehensive-travel-services" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/the-rice-tour-comprehensive-travel-services');" 
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

export const dinhCauPhuQuocHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">Dinh Cau Phu Quoc: The Spiritual Guardian of the Pearl Island (2026 Guide)</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          Dinh Cau Phu Quoc: The Spiritual Guardian of the Pearl Island (2026 Guide)
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          A Comprehensive 2026 Cultural & Practical Expedition Guide
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          A curated field guide designed for intentional voyagers seeking deep cultural resonance and seamless navigation across Vietnam's iconic landscapes.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Aug 26, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">10 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Bespoke Field Notes
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">📍</span> Curated Inbound Journey
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">✨</span> Slow Travel Signature
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏆</span> The Rice Tour Verified
    </div>
  
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
                  <a href="#introduction-to-dinh-cau-shrine" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Introduction to Dinh Cau Shrine</a>
  <a href="#the-architectural-and-natural-harmony" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Architectural and Natural Harmony</a>
  <a href="#the-ultimate-sunset-vantage-point" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Ultimate Sunset Vantage Point</a>
  <a href="#the-night-market-and-culinary-scene" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Night Market and Culinary Scene</a>
  <a href="#travel-logistics-and-etiquette" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Travel Logistics and Etiquette</a>
  <a href="#epilogue" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Epilogue</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Location</div>
        <div class="text-[13px] font-bold text-slate-900">Vietnam Inbound</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Ideal Timing</div>
        <div class="text-[13px] font-bold text-slate-900">Year-Round</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Access Policy</div>
        <div class="text-[13px] font-bold text-slate-900">Curated Entry</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Experience Type</div>
        <div class="text-[13px] font-bold text-slate-900">Cultural Immersion</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            
        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="introduction-to-dinh-cau-shrine" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            1. Introduction to Dinh Cau Shrine
          </h2>
        </div>
      <p><strong>Dinh Cau</strong> (often referred to as Dinh Cau Temple or Shrine) is arguably the most recognizable natural and cultural landmark in Phu Quoc. Located right at the mouth of the Duong Dong River, the shrine is built atop a massive, uniquely shaped rock formation that juts out into the azure sea, shaded by an ancient, twisted frangipani tree.</p>
<p>For over three centuries, it has served as a spiritual sanctuary for the island&#39;s fishermen. Before every long voyage, locals come here to burn incense and pray to Thuy Long Thanh Mau (the Goddess of the Sea) and the Cau deities for calm waters, bountiful catches, and a safe return.</p>
<div class="font-medium text-slate-900 text-lg border-l-4 border-amber-500 pl-4 my-5 bg-amber-50/50 py-3 rounded-r-xl"><p>🌟 <strong>Key Curated Dimensions / Fast Facts</strong></p>
<ul>
<li><strong>Location:</strong> Bach Dang Street, Quarter 2, Duong Dong Ward, Phu Quoc City.</li>
<li><strong>Accessibility:</strong> A short walk from the center of Duong Dong town; reachable via a staircase of 29 stone steps leading up the rock.</li>
<li><strong>Festivals:</strong> The main festival occurs on the 15th and 16th of the 10th lunar month, featuring vibrant rituals and boat races.</li>
</ul>
</div>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-architectural-and-natural-harmony" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            2. The Architectural and Natural Harmony
          </h2>
        </div>
      <p>Dinh Cau is a masterpiece of environmental integration. The shrine does not dominate the landscape; rather, it feels like an organic extension of the rugged coastline.</p>
<ul>
<li><strong>The Stone Staircase:</strong> Visitors ascend 29 winding stone steps, flanked by the crashing waves on one side and ancient stone walls on the other.</li>
<li><strong>The Shrine Exterior:</strong> The architecture reflects traditional Vietnamese communal houses with curved, red-tiled roofs adorned with twin dragons flanking a moon (Lưỡng Long Tranh Châu). </li>
<li><strong>The Ancient Tree:</strong> The shrine is perpetually shaded by a century-old sộp tree, its roots deeply intertwined with the rock, adding an aura of mystique and ancient resilience.</li>
</ul>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-ultimate-sunset-vantage-point" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            3. The Ultimate Sunset Vantage Point
          </h2>
        </div>
      <p>While Dinh Cau is fundamentally a place of worship, it is equally famous as the premier sunset viewing location on Phu Quoc Island. </p>
<ul>
<li><strong>The Golden Hour:</strong> Around 17:30, the sky above the Gulf of Thailand begins its daily transformation, painting the horizon in violent shades of crimson, gold, and violet. </li>
<li><strong>The Lighthouse Silhouette:</strong> The adjacent Dinh Cau Lighthouse, silhouetted against the setting sun with fishing boats returning to the harbor, provides photographers with the quintessential Phu Quoc postcard shot.</li>
<li><strong>The Vibe:</strong> The cool ocean breeze, the rhythmic sound of waves crashing against the rocks, and the scent of incense create a deeply meditative and romantic atmosphere.</li>
</ul>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-night-market-and-culinary-scene" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            4. The Night Market and Culinary Scene
          </h2>
        </div>
      <p>As the sun sets, the area surrounding Dinh Cau transitions into a vibrant hub of culinary activity. </p>
<ul>
<li><strong>Dinh Cau Night Market:</strong> Just a short walk from the shrine, the night market is a sensory overload of fresh seafood. Here, you can select live lobsters, sea urchins, and squid, which are grilled to perfection right before your eyes.</li>
<li><strong>Local Snacks:</strong> Don&#39;t miss trying <em>Bánh Khọt</em> (savory mini pancakes), grilled rice paper (Vietnamese pizza), and the famously refreshing Chou Chou peanuts (flavored peanuts originating from a French expat).</li>
<li><strong>Cafe Culture:</strong> Along the breakwater, numerous pop-up cafes and juice stands offer the perfect spot to sit back with a fresh coconut or iced coffee and watch the squid fishing boats turn on their bright green lights offshore.</li>
</ul>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="travel-logistics-and-etiquette" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            5. Travel Logistics and Etiquette
          </h2>
        </div>
      <ul>
<li><strong>Dress Code:</strong> Because Dinh Cau is an active religious site, visitors are expected to dress modestly (shoulders and knees covered) when entering the main altar area.</li>
<li><strong>Best Time to Visit:</strong> The dry season (November to April) guarantees clear skies for the best sunset views. However, visiting during the rainy season offers dramatic, stormy seascapes that are equally compelling.</li>
<li><strong>Getting There:</strong> It is centrally located in Duong Dong. Most travelers staying in the town center can easily walk there, while those in distant resorts can take a taxi or a VinBus.</li>
</ul>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="epilogue" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            6. Epilogue
          </h2>
        </div>
      <p>Dinh Cau is more than just a scenic viewpoint; it is the spiritual anchor of Phu Quoc. It encapsulates the island&#39;s dual identity—a serene natural paradise and a vibrant, deeply traditional fishing community. Standing on the rocky precipice as the sun dips below the horizon, one can truly feel the timeless rhythm of the Pearl Island.</p>
<div class="font-medium text-slate-900 text-lg border-l-4 border-amber-500 pl-4 my-5 bg-amber-50/50 py-3 rounded-r-xl"><p>🚐 <strong>Embark on a Coastal Odyssey with The Rice Tour</strong>
Experience the magic of Phu Quoc beyond the luxury resorts. The Rice Tour&#39;s curated island itineraries seamlessly blend cultural landmarks like Dinh Cau with exclusive culinary safaris and pristine beach retreats. Contact us to craft your bespoke 2026 island getaway.</p>
</div>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: Journeying with Purpose</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                True exploration is not simply the accumulation of photographs, but the conscious discovery of history, craftsmanship, and human kinship along the living rivers of Vietnam.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Location</div>
        <div class="font-bold text-slate-800 text-[13px]">Vietnam Inbound</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Ideal Timing</div>
        <div class="font-bold text-slate-800 text-[13px]">Year-Round</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Access Policy</div>
        <div class="font-bold text-slate-800 text-[13px]">Curated Entry</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Experience Type</div>
        <div class="font-bold text-slate-800 text-[13px]">Cultural Immersion</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/dinh-cau-phu-quoc" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/dinh-cau-phu-quoc');" 
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

export const dacSanBunNuocLeoSocTrangHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">Bun Nuoc Leo Soc Trang: The Definitive 2026 Guide to the Delta's Masterpiece Noodle Soup</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          Bun Nuoc Leo Soc Trang: The Definitive 2026 Guide to the Delta's Masterpiece Noodle Soup
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          A Comprehensive 2026 Cultural & Practical Expedition Guide
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          A curated field guide designed for intentional voyagers seeking deep cultural resonance and seamless navigation across Vietnam's iconic landscapes.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Aug 26, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">10 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Bespoke Field Notes
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">📍</span> Curated Inbound Journey
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">✨</span> Slow Travel Signature
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏆</span> The Rice Tour Verified
    </div>
  
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
                  <a href="#the-anatomy-of-a-masterpiece" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Anatomy of a Masterpiece</a>
  <a href="#the-soul-of-the-dish-the-broth" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Soul of the Dish: The Broth</a>
  <a href="#the-toppings-a-triumvirate-of-cultures" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Toppings: A Triumvirate of Cultures</a>
  <a href="#the-greens-the-essential-crunch" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Greens: The Essential Crunch</a>
  <a href="#the-2026-curated-michelin-equivalent-stops" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The 2026 Curated Michelin-Equivalent Stops</a>
  <a href="#bun-nuoc-leo-cay-nhan" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Bún Nước Lèo Cây Nhãn</a>
  <a href="#bun-nuoc-leo-thao" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Bún Nước Lèo Thảo</a>
  <a href="#bun-nuoc-leo-ca-ong" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Bún Nước Lèo Cá Đồng</a>
  <a href="#how-to-eat-like-a-local" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">How to Eat Like a Local</a>
  <a href="#culinary-tourism-in-soc-trang" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Culinary Tourism in Soc Trang</a>
  <a href="#epilogue" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Epilogue</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Location</div>
        <div class="text-[13px] font-bold text-slate-900">Vietnam Inbound</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Ideal Timing</div>
        <div class="text-[13px] font-bold text-slate-900">Year-Round</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Access Policy</div>
        <div class="text-[13px] font-bold text-slate-900">Curated Entry</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Experience Type</div>
        <div class="text-[13px] font-bold text-slate-900">Cultural Immersion</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            
        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-anatomy-of-a-masterpiece" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            1. The Anatomy of a Masterpiece
          </h2>
        </div>
      <p><em>Bún Nước Lèo</em> translates literally to &quot;noodles in broth,&quot; but this humble name completely belies the complexity of the dish. It is a masterclass in balancing intense flavors and diverse textures, representing the harmonious coexistence of the three major ethnic groups in Soc Trang: the Khmer, the Kinh (Vietnamese), and the Hoa (Chinese).</p>

        <h3 id="the-soul-of-the-dish-the-broth" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The Soul of the Dish: The Broth
        </h3>
      <p>The absolute foundation of <em>Bún Nước Lèo</em> is the broth, which derives its unique umami depth from <strong>Mắm Bò Hóc</strong> (prahok), a traditional Khmer fermented fish paste. </p>
<ul>
<li><strong>The Secret Technique:</strong> To prevent the broth from being overly pungent or cloudy, local chefs use a technique called <em>&quot;ngải bún&quot;</em>. They add a specific type of fingerroot (ngải bún) and lemongrass to clarify the broth and neutralize the fishy odor, leaving behind a fragrant, golden liquid that is profoundly savory yet surprisingly light.</li>
</ul>

        <h3 id="the-toppings-a-triumvirate-of-cultures" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The Toppings: A Triumvirate of Cultures
        </h3>
      <p>A standard bowl is an assembly of premium local ingredients:</p>
<ul>
<li><strong>From the Khmer &amp; Kinh:</strong> Fresh, de-boned snakehead fish (cá lóc) harvested from the local rivers, and plump river shrimp (tép bạc đất) boiled and peeled.</li>
<li><strong>From the Hoa:</strong> Crispy roasted pork belly (heo quay), cut into bite-sized pieces. The contrast between the crispy skin and the hot broth is a textural delight.</li>
</ul>

        <h3 id="the-greens-the-essential-crunch" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The Greens: The Essential Crunch
        </h3>
      <p>No Mekong Delta noodle soup is complete without an overflowing basket of fresh herbs and vegetables. You must add blanched bean sprouts, shredded banana blossom, water lily stems (cọng súng), and garlic chives (hẹ). A squeeze of fresh kumquat and a dash of fiery minced chili complete the symphony.</p>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-2026-curated-michelin-equivalent-stops" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            2. The 2026 Curated Michelin-Equivalent Stops
          </h2>
        </div>
      <p>For travelers embarking on a culinary safari through Soc Trang, here are the definitively best establishments to experience authentic <em>Bún Nước Lèo</em>:</p>

        <h3 id="bun-nuoc-leo-cay-nhan" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Bún Nước Lèo Cây Nhãn
        </h3>
      <p>Arguably the most famous establishment in the province, named after the large longan tree shading the eatery.</p>
<ul>
<li><strong>Why it’s special:</strong> They are renowned for their impeccably clear broth and generous portions of thick-cut roasted pork. The ambiance is bustling and unapologetically local.</li>
<li><strong>Location:</strong> Vo Dinh Sam Street, Soc Trang City.</li>
</ul>

        <h3 id="bun-nuoc-leo-thao" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Bún Nước Lèo Thảo
        </h3>
      <p>A favorite among food purists who prefer a slightly more intense, traditional Khmer flavor profile.</p>
<ul>
<li><strong>Why it’s special:</strong> The <em>mắm</em> flavor here is more pronounced, and they are famous for serving the dish with incredibly fresh, large river shrimp.</li>
<li><strong>Location:</strong> Phu Loi Street, Soc Trang City.</li>
</ul>

        <h3 id="bun-nuoc-leo-ca-ong" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Bún Nước Lèo Cá Đồng
        </h3>
      <p>Perfect for those who prefer the delicate sweetness of fresh river fish over heavier meats.</p>
<ul>
<li><strong>Why it’s special:</strong> They exclusively use wild-caught snakehead fish, ensuring the meat is firm and naturally sweet, elevating the broth to new heights.</li>
<li><strong>Location:</strong> National Route 1A, near the Soc Trang gateway.</li>
</ul>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="how-to-eat-like-a-local" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            3. How to Eat Like a Local
          </h2>
        </div>
      <p>Eating <em>Bún Nước Lèo</em> requires a specific ritual to maximize the flavor:</p>
<ol>
<li><strong>Taste the Broth First:</strong> Before adding any condiments, take a sip of the pure broth to appreciate the delicate balance of the <em>mắm</em> and lemongrass.</li>
<li><strong>Add the Greens:</strong> Submerge a generous handful of shredded banana blossom and water lily stems into the hot broth to slightly wilt them while retaining their crunch.</li>
<li><strong>Customize the Heat:</strong> Add a squeeze of lime or kumquat and a small spoonful of fresh chili. The acidity cuts through the richness of the roast pork and balances the fermented fish.</li>
<li><strong>The Perfect Bite:</strong> Ensure every spoonful contains a bit of noodle, a piece of crispy pork, a slice of fish, and a crunchy vegetable stalk.</li>
</ol>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="culinary-tourism-in-soc-trang" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            4. Culinary Tourism in Soc Trang
          </h2>
        </div>
      <p>While <em>Bún Nước Lèo</em> is the undisputed king, a culinary tour of Soc Trang should also include other local marvels. Do not leave the province without purchasing freshly baked <strong>Bánh Pía</strong> (a flaky pastry filled with durian, mung bean, and salted egg yolk) and trying <strong>Bún Cà Ri</strong> (Khmer-style chicken curry noodles). </p>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="epilogue" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            5. Epilogue
          </h2>
        </div>
      <p><em>Bún Nước Lèo Sóc Trăng</em> is not just a meal; it is a consumable piece of history. It tells the story of centuries of cultural migration, adaptation, and harmony in the Mekong Delta. A steaming bowl of this complex, fragrant soup is the ultimate reward for any traveler venturing deep into the heart of Southern Vietnam.</p>
<div class="font-medium text-slate-900 text-lg border-l-4 border-amber-500 pl-4 my-5 bg-amber-50/50 py-3 rounded-r-xl"><p>🚐 <strong>Embark on a Culinary Safari with The Rice Tour</strong>
Food is the gateway to culture. The Rice Tour designs exclusive culinary expeditions across the Mekong Delta, taking you from hidden street food stalls to the kitchens of master artisans. Let us guide your palate through the authentic flavors of Vietnam.</p>
</div>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: Journeying with Purpose</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                True exploration is not simply the accumulation of photographs, but the conscious discovery of history, craftsmanship, and human kinship along the living rivers of Vietnam.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Location</div>
        <div class="font-bold text-slate-800 text-[13px]">Vietnam Inbound</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Ideal Timing</div>
        <div class="font-bold text-slate-800 text-[13px]">Year-Round</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Access Policy</div>
        <div class="font-bold text-slate-800 text-[13px]">Curated Entry</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Experience Type</div>
        <div class="font-bold text-slate-800 text-[13px]">Cultural Immersion</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/dac-san-bun-nuoc-leo-soc-trang" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/dac-san-bun-nuoc-leo-soc-trang');" 
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

export const chuaDoiSocTrangHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">The Bat Pagoda (Chua Doi): Soc Trang’s Enigmatic Sanctuary of Nature and Faith</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          The Bat Pagoda (Chua Doi): Soc Trang’s Enigmatic Sanctuary of Nature and Faith
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          A Comprehensive 2026 Cultural & Practical Expedition Guide
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          A curated field guide designed for intentional voyagers seeking deep cultural resonance and seamless navigation across Vietnam's iconic landscapes.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Aug 26, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">10 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Bespoke Field Notes
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">📍</span> Curated Inbound Journey
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">✨</span> Slow Travel Signature
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏆</span> The Rice Tour Verified
    </div>
  
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
                  <a href="#introduction-to-the-bat-pagoda-wat-mahatup" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Introduction to the Bat Pagoda (Wat Mahatup)</a>
  <a href="#the-architectural-splendor" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Architectural Splendor</a>
  <a href="#the-main-hall-chanh-ien" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Main Hall (Chánh Điện)</a>
  <a href="#the-stupas-and-the-grounds" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Stupas and the Grounds</a>
  <a href="#the-enigma-of-the-bats" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Enigma of the Bats</a>
  <a href="#the-pig-with-five-claws-a-local-legend" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Pig with Five Claws: A Local Legend</a>
  <a href="#travel-logistics-and-etiquette" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Travel Logistics and Etiquette</a>
  <a href="#epilogue" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Epilogue</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Location</div>
        <div class="text-[13px] font-bold text-slate-900">Vietnam Inbound</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Ideal Timing</div>
        <div class="text-[13px] font-bold text-slate-900">Year-Round</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Access Policy</div>
        <div class="text-[13px] font-bold text-slate-900">Curated Entry</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Experience Type</div>
        <div class="text-[13px] font-bold text-slate-900">Cultural Immersion</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            
        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="introduction-to-the-bat-pagoda-wat-mahatup" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            1. Introduction to the Bat Pagoda (Wat Mahatup)
          </h2>
        </div>
      <p>Officially known in Khmer as <strong>Wat Mahatup</strong> (meaning &quot;gathered by the virtue of monks&quot;), the Bat Pagoda is a cornerstone of Theravada Buddhism in the Mekong Delta. Built in 1569, it has stood the test of time, surviving wars and a devastating fire in 2007 (after which it was meticulously restored to its former glory).</p>
<p>However, what truly sets this temple apart from hundreds of other Khmer pagodas in the region is its unique ecological phenomenon. The expansive, densely wooded compound is home to a massive colony of <strong>Giant Flying Foxes</strong> (fruit bats), creating a mystical atmosphere where religion and nature are profoundly intertwined.</p>
<div class="font-medium text-slate-900 text-lg border-l-4 border-amber-500 pl-4 my-5 bg-amber-50/50 py-3 rounded-r-xl"><p>🌟 <strong>Key Curated Dimensions / Fast Facts</strong></p>
<ul>
<li><strong>Location:</strong> Van Ngoc Chinh Street, Ward 3, Soc Trang City.</li>
<li><strong>Wildlife Note:</strong> The bats are entirely harmless to humans. They sleep during the day and forage for fruit at night.</li>
<li><strong>Dress Code:</strong> As with all active Buddhist temples, visitors must dress modestly (covering shoulders and knees).</li>
</ul>
</div>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-architectural-splendor" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            2. The Architectural Splendor
          </h2>
        </div>
      <p>The Bat Pagoda is a textbook example of classic Khmer temple architecture, characterized by vibrant colors, intricate carvings, and deep symbolic meaning.</p>

        <h3 id="the-main-hall-chanh-ien" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The Main Hall (Chánh Điện)
        </h3>
      <p>Approaching the Main Hall, visitors are greeted by a striking, multi-tiered roof painted in brilliant shades of gold and orange, designed to resemble a stylized Naga (serpent) slithering downwards. The Naga represents protection and the bridge between the human world and the heavens.
Inside, the hall houses a massive monolithic stone Buddha statue resting on a lotus pedestal. The walls are covered in vivid murals depicting the life journey of Siddhartha Gautama—from his birth to his attainment of Nirvana.</p>

        <h3 id="the-stupas-and-the-grounds" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The Stupas and the Grounds
        </h3>
      <p>Surrounding the main hall are various stupas holding the ashes of past head monks. The entire complex is enveloped in a primeval forest of towering ancient mahogany (sao) and hopea (dầu) trees, providing a cool, shaded canopy even during the intense heat of the dry season.</p>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-enigma-of-the-bats" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            3. The Enigma of the Bats
          </h2>
        </div>
      <p>The defining feature of Wat Mahatup is, undeniably, the bats. </p>
<ul>
<li><strong>The Phenomenon:</strong> Look up into the high branches of the ancient trees, and you will see thousands of giant fruit bats (Pteropus) hanging upside down, resembling oversized, dark fruits. These creatures have wingspans that can reach up to 1.5 meters.</li>
<li><strong>The Mystery:</strong> Despite the abundance of similar trees in surrounding areas, the bats stubbornly refuse to roost anywhere else but within the sacred grounds of this specific pagoda. They never damage the fruit trees within the pagoda&#39;s compound, flying miles away at dusk to forage before returning at dawn.</li>
<li><strong>The Best Viewing Time:</strong> To witness the most spectacular sight, visit around 17:30. As the sun begins to set, the entire colony awakens and takes flight, creating a massive, swirling cloud against the twilight sky—a scene straight out of a gothic novel.</li>
</ul>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-pig-with-five-claws-a-local-legend" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            4. The Pig with Five Claws: A Local Legend
          </h2>
        </div>
      <p>Beyond the bats, the pagoda is famous for another peculiar phenomenon: the graves of pigs with five claws. In local Khmer folklore, a pig born with five claws is considered a manifestation of a mischievous spirit or bad luck. Families owning such a pig will often bring it to the Bat Pagoda, where the monks bless it and care for it until it dies of natural causes. Visitors can walk behind the main compound to see the small, well-kept graves dedicated to these unique animals.</p>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="travel-logistics-and-etiquette" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            5. Travel Logistics and Etiquette
          </h2>
        </div>
      <p>Soc Trang is an easy detour for travelers exploring the lower Mekong Delta, often combined with trips to Can Tho or Bac Lieu.</p>
<ul>
<li><strong>Getting There:</strong> The pagoda is located just 3 kilometers from the center of Soc Trang City. It is easily accessible by taxi, xe ôm (motorbike taxi), or even a rented bicycle.</li>
<li><strong>Etiquette:</strong> <ul>
<li><strong>Do NOT disturb the bats.</strong> Do not throw objects, shine bright lights, or make loud noises to wake them up during the day.</li>
<li>Maintain a respectful silence while walking the grounds, as monks are often meditating or studying.</li>
</ul>
</li>
<li><strong>Culinary Stop:</strong> Outside the pagoda gates, you will find numerous vendors selling Soc Trang’s famous <em>Bánh Pía</em> (durian pastry) and <em>Lạp Xưởng</em> (Chinese sausage)—perfect souvenirs for your journey.</li>
</ul>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="epilogue" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            6. Epilogue
          </h2>
        </div>
      <p>The Bat Pagoda is a rare destination where architectural beauty, profound spirituality, and a touch of the bizarre coalesce perfectly. It stands as a testament to the Khmer people&#39;s deep respect for all living creatures, offering modern travelers a sanctuary of peace and a fascinating glimpse into the mystical folklore of the Mekong Delta.</p>
<div class="font-medium text-slate-900 text-lg border-l-4 border-amber-500 pl-4 my-5 bg-amber-50/50 py-3 rounded-r-xl"><p>🚐 <strong>Embark on a Mystical Journey with The Rice Tour</strong>
Delve into the rich cultural and natural mysteries of Soc Trang. Our expert-guided Mekong Delta itineraries offer deep cultural context, ensuring your visit to the Bat Pagoda is respectful, insightful, and entirely unforgettable. Connect with The Rice Tour today.</p>
</div>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: Journeying with Purpose</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                True exploration is not simply the accumulation of photographs, but the conscious discovery of history, craftsmanship, and human kinship along the living rivers of Vietnam.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Location</div>
        <div class="font-bold text-slate-800 text-[13px]">Vietnam Inbound</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Ideal Timing</div>
        <div class="font-bold text-slate-800 text-[13px]">Year-Round</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Access Policy</div>
        <div class="font-bold text-slate-800 text-[13px]">Curated Entry</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Experience Type</div>
        <div class="font-bold text-slate-800 text-[13px]">Cultural Immersion</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/chua-doi-soc-trang" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/chua-doi-soc-trang');" 
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

export const canhDongDienGioBacLieuHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">Bac Lieu Wind Farm: The Photogenic Coastal Turbine Field of the Mekong (2026 Guide)</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          Bac Lieu Wind Farm: The Photogenic Coastal Turbine Field of the Mekong (2026 Guide)
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          A Comprehensive 2026 Cultural & Practical Expedition Guide
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          A curated field guide designed for intentional voyagers seeking deep cultural resonance and seamless navigation across Vietnam's iconic landscapes.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Aug 26, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">10 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Bespoke Field Notes
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">📍</span> Curated Inbound Journey
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">✨</span> Slow Travel Signature
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏆</span> The Rice Tour Verified
    </div>
  
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
                  <a href="#introduction-to-the-bac-lieu-wind-farm" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Introduction to the Bac Lieu Wind Farm</a>
  <a href="#the-visual-spectacle-a-photographers-dream" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Visual Spectacle: A Photographer's Dream</a>
  <a href="#the-concrete-walkways" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Concrete Walkways</a>
  <a href="#the-best-angles" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">The Best Angles</a>
  <a href="#timing-your-visit-for-the-perfect-shot" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Timing Your Visit for the Perfect Shot</a>
  <a href="#expanding-your-bac-lieu-itinerary" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Expanding Your Bac Lieu Itinerary</a>
  <a href="#travel-logistics-and-tips" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Travel Logistics and Tips</a>
  <a href="#epilogue" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Epilogue</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Location</div>
        <div class="text-[13px] font-bold text-slate-900">Vietnam Inbound</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Ideal Timing</div>
        <div class="text-[13px] font-bold text-slate-900">Year-Round</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Access Policy</div>
        <div class="text-[13px] font-bold text-slate-900">Curated Entry</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Experience Type</div>
        <div class="text-[13px] font-bold text-slate-900">Cultural Immersion</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            
        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="introduction-to-the-bac-lieu-wind-farm" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            1. Introduction to the Bac Lieu Wind Farm
          </h2>
        </div>
      <p>Located in Vinh Trach Dong commune, about 20 kilometers from the center of Bac Lieu City, the <strong>Bac Lieu Wind Farm</strong> (Cánh Đồng Điện Gió Bạc Liêu) was initially constructed as a pioneering renewable energy project. It holds the title of being the very first offshore wind farm built in Southeast Asia.</p>
<p>However, thanks to the striking visual of dozens of massive, sleek white turbines stretching out into the ocean against the backdrop of the vast delta sky, it quickly evolved into a viral tourist attraction. Today, it stands as a symbol of modern Bac Lieu, offering a refreshing, contemporary contrast to the region&#39;s ancient historical sites.</p>
<div class="font-medium text-slate-900 text-lg border-l-4 border-amber-500 pl-4 my-5 bg-amber-50/50 py-3 rounded-r-xl"><p>🌟 <strong>Key Curated Dimensions / Fast Facts</strong></p>
<ul>
<li><strong>Location:</strong> Bien Dong A Hamlet, Vinh Trach Dong Commune, Bac Lieu City (Note: Following the 2025 administrative merger, Bac Lieu is now part of Ca Mau province).</li>
<li><strong>The Turbines:</strong> There are 62 turbines, each standing 80 meters tall with blades measuring 42 meters in length.</li>
<li><strong>Ticket Price (2026):</strong> 30,000 VND per adult.</li>
</ul>
</div>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-visual-spectacle-a-photographers-dream" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            2. The Visual Spectacle: A Photographer's Dream
          </h2>
        </div>
      <p>The primary draw of the wind farm for travelers is its incredible photogenicity. The landscape often draws comparisons to the Netherlands or coastal Europe, a stark and unexpected aesthetic in the heart of the tropical Mekong Delta.</p>

        <h3 id="the-concrete-walkways" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The Concrete Walkways
        </h3>
      <p>To service the offshore turbines, developers built a network of elevated concrete pathways stretching for kilometers out into the shallow, muddy sea. These pathways are open to visitors and serve as the perfect runway for photography. Walking along these bridges, with the massive blades swooshing rhythmically overhead and the ocean breeze blowing, is an exhilarating experience.</p>

        <h3 id="the-best-angles" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          The Best Angles
        </h3>
      <ul>
<li><strong>The Infinite Perspective:</strong> Shoot straight down the concrete path with the leading lines drawing the eye toward the turbines fading into the horizon.</li>
<li><strong>The Golden Silhouette:</strong> During sunset, position the camera to capture the dark silhouettes of the spinning blades against the fiery orange sky.</li>
</ul>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="timing-your-visit-for-the-perfect-shot" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            3. Timing Your Visit for the Perfect Shot
          </h2>
        </div>
      <p>The coastal environment means the wind farm is completely exposed to the elements. Timing your visit is critical for both comfort and photography:</p>
<ul>
<li><strong>The Golden Hours (Highly Recommended):</strong> <ul>
<li><strong>16:00 to 17:30:</strong> This is undeniably the best time to visit. The harsh midday sun softens, the temperature drops thanks to the sea breeze, and the fading light casts a magical, warm glow on the white turbines.</li>
<li><strong>06:00 to 07:30:</strong> For early risers, the sunrise offers a serene, quiet experience with excellent soft lighting and significantly fewer crowds.</li>
</ul>
</li>
<li><strong>Midday (Avoid):</strong> From 10:00 to 14:00, the sun is scorching, there is no shade on the concrete pathways, and the harsh overhead light washes out photographs.</li>
</ul>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="expanding-your-bac-lieu-itinerary" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            4. Expanding Your Bac Lieu Itinerary
          </h2>
        </div>
      <p>While the wind farm can be explored in about 1 to 1.5 hours, its location in Vinh Trach Dong makes it highly convenient to combine with other prominent Bac Lieu attractions:</p>
<ul>
<li><strong>Quan Am Phat Dai (Mother Goddess of the Sea):</strong> Located nearby on the coast, this towering statue of the Goddess of Mercy is a major pilgrimage site for fishermen and offers a deep dive into local coastal spirituality.</li>
<li><strong>The Siamese Mud-Skipper Pagoda (Chùa Xiêm Cán):</strong> Just a few kilometers away, this is one of the largest and most ornate Khmer pagodas in the region, featuring stunning golden architecture.</li>
<li><strong>The Longan Garden (Vườn Nhãn Cổ):</strong> Relax in the shade of century-old longan trees and enjoy local specialties like Vietnamese savory pancakes (Bánh Xèo).</li>
</ul>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="travel-logistics-and-tips" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            5. Travel Logistics and Tips
          </h2>
        </div>
      <ul>
<li><strong>Getting There:</strong> From Bac Lieu city center, the drive takes about 30 minutes via Cao Van Lau Street heading towards the sea. Taxis and private cars are the best options.</li>
<li><strong>Dress Code for Photography:</strong> Bright, solid colors (like red, yellow, or deep blue) contrast beautifully against the white turbines and the sky, making for striking portraits.</li>
<li><strong>Sun Protection:</strong> Bring sunglasses, sunscreen, and a hat (but hold onto it tightly, as the sea breeze is very strong!).</li>
</ul>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="epilogue" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            6. Epilogue
          </h2>
        </div>
      <p>The Bac Lieu Wind Farm is a testament to how infrastructure can inadvertently become art. It offers travelers a unique opportunity to witness Vietnam’s push toward sustainable energy while capturing some of the most dramatic and modern landscape photography available in the Mekong Delta. </p>
<div class="font-medium text-slate-900 text-lg border-l-4 border-amber-500 pl-4 my-5 bg-amber-50/50 py-3 rounded-r-xl"><p>🚐 <strong>Capture the Wind with The Rice Tour</strong>
Let The Rice Tour optimize your Bac Lieu itinerary. Our expert guides know exactly when to arrive at the wind farm to avoid the crowds and catch the perfect sunset light, seamlessly blending this modern marvel with the rich traditional heritage of the region. Connect with us today.</p>
</div>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: Journeying with Purpose</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                True exploration is not simply the accumulation of photographs, but the conscious discovery of history, craftsmanship, and human kinship along the living rivers of Vietnam.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Location</div>
        <div class="font-bold text-slate-800 text-[13px]">Vietnam Inbound</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Ideal Timing</div>
        <div class="font-bold text-slate-800 text-[13px]">Year-Round</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Access Policy</div>
        <div class="font-bold text-slate-800 text-[13px]">Curated Entry</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Experience Type</div>
        <div class="font-bold text-slate-800 text-[13px]">Cultural Immersion</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/canh-dong-dien-gio-bac-lieu" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/canh-dong-dien-gio-bac-lieu');" 
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

export const tauTruongTuyenHtml = `<!-- layout: landing -->
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
          <span class="text-white font-semibold line-clamp-1">Truong Tuyen Cruise: The Premier Can Tho River Dining Experience (2026 Guide)</span>
        </div>

        {/* Titles */}
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl">
          Truong Tuyen Cruise: The Premier Can Tho River Dining Experience (2026 Guide)
        </h1>
        <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
          A Comprehensive 2026 Cultural & Practical Expedition Guide
        </h2>
        <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
          A curated field guide designed for intentional voyagers seeking deep cultural resonance and seamless navigation across Vietnam's iconic landscapes.
        </p>

        {/* Author Meta */}
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="font-bold text-white flex items-center gap-1">
              The Rice Tour Editorial
            </span>
          </div>
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published: Aug 26, 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span class="text-amber-400">10 min read</span>
          </div>
        </div>

        {/* Badges Line */}
        <div class="flex flex-wrap items-center gap-3 mt-8 pt-4">
          
    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🌿</span> 2026 Bespoke Field Notes
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">📍</span> Curated Inbound Journey
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">✨</span> Slow Travel Signature
    </div>
  

    <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl">
      <span class="text-amber-400 text-base">🏆</span> The Rice Tour Verified
    </div>
  
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
                  <a href="#introduction-to-truong-tuyen-cruise" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Introduction to Truong Tuyen Cruise</a>
  <a href="#the-culinary-experience" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Culinary Experience</a>
  <a href="#signature-dishes-to-order" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Signature Dishes to Order</a>
  <a href="#dining-ambiance" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px]">Dining Ambiance</a>
  <a href="#the-cultural-soundtrack-don-ca-tai-tu" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Cultural Soundtrack: Don Ca Tai Tu</a>
  <a href="#the-cruising-itinerary-and-scenery" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">The Cruising Itinerary and Scenery</a>
  <a href="#travel-logistics-and-tips" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Travel Logistics and Tips</a>
  <a href="#epilogue" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]">Epilogue</a>

              </div>
            </nav>
          </div>
        </aside>

        <!-- ---------------- CENTER COLUMN (MAIN CONTENT) ---------------- -->
        <main class="col-span-1 lg:col-span-6 space-y-10">
          
          <!-- Quick Overview Stats Bar -->
          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            
    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Location</div>
        <div class="text-[13px] font-bold text-slate-900">Vietnam Inbound</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto ">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Ideal Timing</div>
        <div class="text-[13px] font-bold text-slate-900">Year-Round</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Access Policy</div>
        <div class="text-[13px] font-bold text-slate-900">Curated Entry</div>
      </div>
    </div>
    <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
  

    <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
      <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 font-medium">Experience Type</div>
        <div class="text-[13px] font-bold text-slate-900">Cultural Immersion</div>
      </div>
    </div>
    
  
          </div>

          <!-- Main Article Flow -->
          <div id="introduction" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700">
            
        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="introduction-to-truong-tuyen-cruise" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            1. Introduction to Truong Tuyen Cruise
          </h2>
        </div>
      <p>Moored at the bustling Ninh Kieu Wharf, the <strong>Truong Tuyen Cruise</strong> is a highly popular floating restaurant that offers both locals and travelers a quintessential Can Tho evening experience. Designed as a multi-deck vessel, it provides a unique dining venue where the gentle sway of the Hau River complements a feast of Mekong Delta specialties.</p>
<p>Unlike standard land-based restaurants, the appeal of Truong Tuyen lies in its mobility. While guests dine, the ship slowly cruises along the river, offering unparalleled, breezy views of the city&#39;s illuminated skyline and the iconic Can Tho Bridge.</p>
<div class="font-medium text-slate-900 text-lg border-l-4 border-amber-500 pl-4 my-5 bg-amber-50/50 py-3 rounded-r-xl"><p>🌟 <strong>Key Curated Dimensions / Fast Facts</strong></p>
<ul>
<li><strong>Location:</strong> Pier 3, Ninh Kieu Wharf, Hai Ba Trung Street, Can Tho City.</li>
<li><strong>Schedule:</strong> The boat remains docked from 17:00 for early diners, sets sail for a river cruise at 19:30, and returns to the wharf by 21:00.</li>
<li><strong>Booking:</strong> Advanced reservations are highly recommended during weekends and public holidays.</li>
</ul>
</div>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-culinary-experience" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            2. The Culinary Experience
          </h2>
        </div>
      <p>The menu aboard the Truong Tuyen Cruise is a deep dive into the robust and rustic flavors of Southern Vietnam. It caters to a wide range of palates, from adventurous foodies to those seeking comforting, familiar dishes.</p>

        <h3 id="signature-dishes-to-order" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Signature Dishes to Order
        </h3>
      <ul>
<li><strong>Grilled Snakehead Fish (Cá Lóc Nướng Trui):</strong> The undisputed king of Mekong cuisine. The fish is grilled whole over an open fire, retaining its natural sweetness. It is served with a mountain of fresh herbs, star fruit, and green banana, rolled in rice paper, and dipped in a pungent tamarind fish sauce.</li>
<li><strong>Mekong River Fish Hotpot (Lẩu Cá Ngát / Cá Lăng):</strong> A sour and spicy hotpot utilizing fresh river fish and local vegetables like river hemp (bông điên điển) and water lily stems.</li>
<li><strong>Deep-Fried Elephant Ear Fish (Cá Tai Tượng Chiên Xù):</strong> Presented spectacularly upright, the crispy flesh is pulled apart and eaten in fresh spring rolls.</li>
</ul>

        <h3 id="dining-ambiance" class="text-lg font-bold text-slate-900 flex items-center gap-2 pt-4">
          Dining Ambiance
        </h3>
      <p>The vessel features multiple decks. The lower decks are often enclosed and air-conditioned, suitable for private parties or those sensitive to the wind. However, the upper open-air deck is where the magic happens, offering a 360-degree view of the river and the cool night breeze.</p>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-cultural-soundtrack-don-ca-tai-tu" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            3. The Cultural Soundtrack: Don Ca Tai Tu
          </h2>
        </div>
      <p>What elevates the Truong Tuyen experience from a simple dinner to a cultural event is the live entertainment. Every evening, the cruise hosts performances of <strong>Don Ca Tai Tu</strong>—the traditional, UNESCO-recognized amateur music of Southern Vietnam.</p>
<p>As you dine, vocalists accompanied by traditional instruments like the <em>đàn bầu</em> (monochord) and <em>đàn kìm</em> (moon lute) perform nostalgic ballads that speak of the river, love, and the hardships of the delta&#39;s ancestors. The melancholic yet beautiful melodies perfectly match the dark, rippling waters of the Hau River outside.</p>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="the-cruising-itinerary-and-scenery" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            4. The Cruising Itinerary and Scenery
          </h2>
        </div>
      <ul>
<li><strong>18:30 - 19:30 (Docked):</strong> This is the best time to arrive. You can enjoy the golden hour transitioning into night, take photos with the lit-up Ninh Kieu Wharf in the background, and have your appetizers served before the boat gets too crowded.</li>
<li><strong>19:30 - 21:00 (Cruising):</strong> The boat detaches from the pier and begins its slow journey. It typically glides past the Ninh Kieu pedestrian bridge (Cau Tinh Yeu), which is brilliantly illuminated with lotus flower designs. The climax of the cruise is passing near the <strong>Can Tho Bridge</strong>, the longest cable-stayed bridge in Southeast Asia, glowing spectacularly in the night.</li>
</ul>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="travel-logistics-and-tips" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            5. Travel Logistics and Tips
          </h2>
        </div>
      <ul>
<li><strong>Motion Sickness:</strong> The Hau River is generally very calm, and the boat is large and stable. Motion sickness is rarely an issue, even for sensitive travelers.</li>
<li><strong>Pricing:</strong> There is no &quot;ticket&quot; to board the Truong Tuyen Cruise; you only pay for the food and drinks you order. However, prices are naturally slightly higher (about 15-20%) than mainland restaurants to account for the cruising experience and entertainment.</li>
<li><strong>Alternatives:</strong> If Truong Tuyen is fully booked, Ninh Kieu Wharf hosts several other reputable dining cruises, such as the Can Tho Tourist Cruise or the Lady Hau (a more premium, smaller vessel).</li>
</ul>

        <div class="border-l-4 border-amber-500 pl-4 my-8">
          <h2 id="epilogue" class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
            6. Epilogue
          </h2>
        </div>
      <p>A night on the Truong Tuyen Cruise is the perfect coda to a day spent exploring the intense heat and chaotic charm of Can Tho. It provides a rare moment to sit back, savor the rich flavors of the delta, and let the traditional music wash over you as the city lights reflect on the gentle currents of the Hau River.</p>
<div class="font-medium text-slate-900 text-lg border-l-4 border-amber-500 pl-4 my-5 bg-amber-50/50 py-3 rounded-r-xl"><p>🚐 <strong>Dine in Style with The Rice Tour</strong>
Elevate your Can Tho evenings with The Rice Tour. We can secure the best upper-deck tables on the Truong Tuyen Cruise or arrange completely private, luxury dining sampans for an exclusive and intimate river experience. Contact our concierge to orchestrate your perfect evening.</p>
</div>

          </div>

          <!-- Epilogue -->
          <section id="epilogue" class="scroll-mt-28 space-y-4">
            <div class="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 my-8 space-y-4">
              <h3 class="font-serif text-2xl font-bold text-amber-400 m-0">Epilogue: Journeying with Purpose</h3>
              <p class="text-slate-300 text-base leading-relaxed m-0">
                True exploration is not simply the accumulation of photographs, but the conscious discovery of history, craftsmanship, and human kinship along the living rivers of Vietnam.
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
                
    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">📍</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Location</div>
        <div class="font-bold text-slate-800 text-[13px]">Vietnam Inbound</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">⏳</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Ideal Timing</div>
        <div class="font-bold text-slate-800 text-[13px]">Year-Round</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🎟️</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Access Policy</div>
        <div class="font-bold text-slate-800 text-[13px]">Curated Entry</div>
      </div>
    </div>
  

    <div class="flex gap-3">
      <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">🌿</div>
      <div>
        <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Experience Type</div>
        <div class="font-bold text-slate-800 text-[13px]">Cultural Immersion</div>
      </div>
    </div>
  
              </div>
            </div>

            <!-- Related Articles -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
                Related Travel Guides
              </div>
              <div class="space-y-4">
                
      <a href="/happy-land-ben-luc-travel-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Happy Land Ben Luc Travel Guide: Current Status, Ticketing Realities & 2026 Travel Updates
        </div>
      </a>
    

      <a href="/nam-du-island-expedition-guide" class="block p-3 rounded-xl bg-slate-50 hover:bg-amber-50/60 transition-colors border border-slate-100 group">
        <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
          Nam Du Island Expedition Guide: Logistics, Marine Sanctuaries & 2026 Archipelago Field Notes
        </div>
      </a>
    
              </div>
            </div>

            <!-- Share Block -->
            <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6">
              <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Share This Guide</div>
              <div class="flex justify-center gap-3">
                <a 
                  href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/tau-truong-tuyen" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Share on Facebook"
                  class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <button 
                  onclick="navigator.clipboard.writeText('https://thericetour.com/tau-truong-tuyen');" 
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
