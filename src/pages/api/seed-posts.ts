import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

const happyLandHtml = `<!-- layout: landing -->
<div class="bg-[#F8F9FA] text-[#1E293B] font-sans antialiased selection:bg-[#F7931E] selection:text-white">
    <section class="relative w-full min-h-[85vh] flex items-end justify-center overflow-hidden bg-[#0a0f16]">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://r2.nucuoimekong.com/wp-content/uploads/happy-land-1.jpg" 
          alt="Happy Land Ben Luc: current status, ticket prices, and new address" 
          class="w-full h-full object-cover opacity-60 scale-105 transform origin-center" 
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0a0f16] backdrop-blur-[2px]"></div>
      </div>
      <div class="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-400 text-xs font-bold uppercase tracking-widest mb-6">
          <span class="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span>
          Travel Advisory
        </div>
        <h1 class="font-serif text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl mb-6 shadow-black/50 drop-shadow-xl">
          Happy Land Bến Lức:<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-200 to-rose-500">Current Status & 2026 Travel Updates</span>
        </h1>
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published Aug 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span>8 minutes read</span>
          </div>
        </div>
      </div>
    </section>

    <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <main class="col-span-1 lg:col-span-8 lg:col-start-3 space-y-10">
          <div class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[18px] prose-p:text-slate-700">
            <p class="font-medium text-slate-900 text-lg border-l-4 border-rose-500 pl-4 my-5 bg-rose-50/50 py-4 pr-4 rounded-r-xl italic">
              Once envisioned as the "Land of Happiness" along the untamed waters of the Vàm Cỏ Đông river, the <strong>Happy Land Entertainment Complex</strong> has weathered significant turbulence. As of 2026, this grand project <strong>no longer operates as a regular tourist attraction for individual travelers</strong>.
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            <div class="flex items-center gap-3 w-[48%] lg:w-auto">
              <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
              <div>
                <div class="text-[11px] text-slate-500 font-medium">New Address (2025+)</div>
                <div class="text-[13px] font-bold text-slate-900">Binh Duc, Tay Ninh</div>
              </div>
            </div>
            <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
            <div class="flex items-center gap-3 w-[48%] lg:w-auto">
              <div class="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-700 text-xl border border-rose-200/60 shrink-0">🚫</div>
              <div>
                <div class="text-[11px] text-slate-500 font-medium">Status (2026)</div>
                <div class="text-[13px] font-bold text-rose-600">Permanently Closed</div>
              </div>
            </div>
            <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
            <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
              <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 text-xl border border-blue-200/60 shrink-0">🎟️</div>
              <div>
                <div class="text-[11px] text-slate-500 font-medium">Admission</div>
                <div class="text-[13px] font-bold text-slate-900">Not Applicable</div>
              </div>
            </div>
          </div>

          <div class="scroll-mt-24 pt-4 border-t border-slate-200/60">
            <h2 class="font-serif text-2xl md:text-3xl font-bold text-[#1e293b] mb-6 flex items-center gap-3">
              <span class="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-base font-sans">1</span>
              The Reality in 2026
            </h2>
            <div class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[17px] prose-p:text-slate-700">
              <p>For those mapping out a contemplative journey through the Mekong Delta or seeking a weekend retreat near Ho Chi Minh City, staying abreast of these operational shifts is paramount to preserving the rhythm of your itinerary.</p>
              
              <figure class="my-8">
                <img src="https://r2.nucuoimekong.com/wp-content/uploads/khu-du-lich-happy-land.jpg" alt="Happy Land Entertainment Complex" class="w-full rounded-2xl shadow-md object-cover">
                <figcaption class="text-center text-sm text-slate-500 mt-3 font-serif italic">A panoramic view of the Happy Land complex during its ambitious early years, before it ceased regular public access.</figcaption>
              </figure>
              
              <p>The short answer to whether it is still open is: <strong>No.</strong> While the complex briefly opened its gates for a short-lived event early in 2026, no fixed operational schedules have been established since. The project is currently undergoing a prolonged phase of restructuring and legal enforcement. Recent field observations reveal that vast sections of the interior lie dormant, with creeping signs of decay due to a lack of routine maintenance. Though this does not spell permanent closure, Happy Land is currently entirely unsuited for inclusion in any bespoke voyage.</p>
            </div>
          </div>

          <div class="scroll-mt-24 pt-4 border-t border-slate-200/60">
            <h2 class="font-serif text-2xl md:text-3xl font-bold text-[#1e293b] mb-6 flex items-center gap-3">
              <span class="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-base font-sans">2</span>
              Echoes of a "Miniature Vietnam"
            </h2>
            <div class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[17px] prose-p:text-slate-700">
              <p>Though its gates remain shut, Happy Land once boasted a sprawling "Vietnamese Cultural Zone," meticulously reconstructing iconic architectural marvels from the North, Central, and South regions.</p>
              
              <div class="grid md:grid-cols-2 gap-6 my-8">
                <div>
                  <h4 class="font-bold text-slate-900 mb-2">North & Central Marvels</h4>
                  <ul class="space-y-2 list-disc pl-5 text-slate-700">
                    <li><strong>One Pillar Pagoda:</strong> A delicate, scaled-down homage to Hanoi's timeless symbol.</li>
                    <li><strong>Hoi An Ancient Town:</strong> Rows of mustard-yellow facades, crowned with traditional yin-yang roof tiles.</li>
                    <li><strong>Cham Towers:</strong> A striking recreation of the terracotta brick sanctuaries.</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-bold text-slate-900 mb-2">Southern Riverine</h4>
                  <ul class="space-y-2 list-disc pl-5 text-slate-700">
                    <li><strong>Floating Market:</strong> A vibrant diorama of bustling wooden boats and bamboo poles.</li>
                    <li><strong>Heritage Homes:</strong> Thatched-roof dwellings and precarious monkey bridges (cầu khỉ).</li>
                  </ul>
                </div>
              </div>

              <figure class="my-8">
                <img src="https://r2.nucuoimekong.com/wp-content/uploads/happy-land-long-an-2.jpg" alt="Hoi An Ancient Town" class="w-full rounded-2xl shadow-md object-cover">
                <figcaption class="text-center text-sm text-slate-500 mt-3 font-serif italic">The meticulously crafted Hoi An quarter, once a favored backdrop for travelers wandering through Happy Land.</figcaption>
              </figure>
            </div>
          </div>

          <div class="scroll-mt-24 pt-4 border-t border-slate-200/60">
            <h2 class="font-serif text-2xl md:text-3xl font-bold text-[#1e293b] mb-6 flex items-center gap-3">
              <span class="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-base font-sans">3</span>
              2026 Field Notes & Travel Warnings
            </h2>
            <div class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[17px] prose-p:text-slate-700">
              <div class="bg-rose-50/50 border border-rose-100 rounded-xl p-6 my-6">
                <h4 class="font-bold text-rose-900 mb-3">Expedition Leader Advisories</h4>
                <ul class="space-y-3 list-none pl-0 text-slate-700">
                  <li class="flex items-start gap-3">
                    <span class="text-rose-500 mt-1">⚠️</span>
                    <span><strong>Beware of Unauthorized Ticket Sales:</strong> There is currently no official platform distributing tickets for Happy Land. Refrain from transferring funds or trusting promises made on social media.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-rose-500 mt-1">⛔</span>
                    <span><strong>Do Not Trespass:</strong> As a dormant construction site, navigating unmaintained fences, decaying structures, or unpatrolled lakeside areas poses severe safety risks.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="text-green-500 mt-1">🌿</span>
                    <span><strong>Seek Authentic Alternatives:</strong> If you are yearning for an untamed, flooded ecological haven, <strong>Tan Lap Floating Village</strong> offers a breathtaking substitute.</span>
                  </li>
                </ul>
              </div>

              <figure class="my-8">
                <img src="https://r2.nucuoimekong.com/wp-content/uploads/khu-du-lich-happy-land-7-1.jpg" alt="Tan Lap Floating Village" class="w-full rounded-2xl shadow-md object-cover">
                <figcaption class="text-center text-sm text-slate-500 mt-3 font-serif italic">In lieu of Happy Land, the pristine wetland sanctuary of Tan Lap Floating Village presents a far superior ecological retreat.</figcaption>
              </figure>
            </div>
          </div>
        </main>
      </div>
    </div>
</div>`;

const khanRanHtml = `<!-- layout: landing -->
<div class="bg-[#F8F9FA] text-[#1E293B] font-sans antialiased selection:bg-[#F7931E] selection:text-white">
    <section class="relative w-full min-h-[85vh] flex items-end justify-center overflow-hidden bg-[#0a0f16]">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://r2.nucuoimekong.com/wp-content/uploads/khan-ran-nam-bo-nu-cuoi-me-kong.webp" 
          alt="The Mekong Khăn Rằn" 
          class="w-full h-full object-cover opacity-60 scale-105 transform origin-center" 
        />
        <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0a0f16] backdrop-blur-[2px]"></div>
      </div>
      <div class="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
          <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          Indigenous Culture
        </div>
        <h1 class="font-serif text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl mb-6 shadow-black/50 drop-shadow-xl">
          The Mekong Khăn Rằn:<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Unweaving a 300-Year Legacy</span>
        </h1>
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl">
          <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <span>Published 2026</span>
          </div>
          <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span>12 minutes read</span>
          </div>
        </div>
      </div>
    </section>

    <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <main class="col-span-1 lg:col-span-8 lg:col-start-3 space-y-10">
          <div class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[18px] prose-p:text-slate-700">
            <p class="font-medium text-slate-900 text-lg border-l-4 border-amber-500 pl-4 my-5 bg-amber-50/50 py-4 pr-4 rounded-r-xl italic">
              The <em>khăn rằn</em> is far more than a ubiquitous souvenir scattered across the tourist markets of the Mekong Delta. Behind its modest black-and-white checkered pattern lies a three-century-old odyssey of cultural intersection among the indigenous tribes of the lower Mekong. It is a silent witness to the era of untamed wilderness reclamation, an emblem of wartime resilience, and the lifeblood of a century-old weaving village recently crowned as a National Intangible Cultural Heritage.
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            <div class="flex items-center gap-3 w-[48%] lg:w-auto">
              <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div>
              <div>
                <div class="text-[11px] text-slate-500 font-medium">The Heartland</div>
                <div class="text-[13px] font-bold text-slate-900">Long Khanh A, Dong Thap</div>
              </div>
            </div>
            <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
            <div class="flex items-center gap-3 w-[48%] lg:w-auto">
              <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 text-xl border border-blue-200/60 shrink-0">⏳</div>
              <div>
                <div class="text-[11px] text-slate-500 font-medium">Historical Genesis</div>
                <div class="text-[13px] font-bold text-slate-900">17th Century</div>
              </div>
            </div>
            <div class="hidden lg:block w-px h-8 bg-slate-200"></div>
            <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0">
              <div class="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-700 text-xl border border-rose-200/60 shrink-0">🏆</div>
              <div>
                <div class="text-[11px] text-slate-500 font-medium">Status</div>
                <div class="text-[13px] font-bold text-slate-900">National Heritage</div>
              </div>
            </div>
          </div>

          <div class="scroll-mt-24 pt-4 border-t border-slate-200/60">
            <h2 class="font-serif text-2xl md:text-3xl font-bold text-[#1e293b] mb-6 flex items-center gap-3">
              <span class="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-base font-sans">1</span>
              A 300-Year Genesis
            </h2>
            <div class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[17px] prose-p:text-slate-700">
              <p>Many travelers, upon holding the checkered scarf, assume it is a purely Vietnamese invention born from the early migrants. However, from an anthropological perspective, the <em>khăn rằn</em> traces its direct lineage to the <strong>Krama</strong>, the ancestral scarf of the indigenous Khmer people in the lower Mekong basin.</p>
              
              <figure class="my-8">
                <img src="https://r2.nucuoimekong.com/wp-content/uploads/khan-ran-campuchia-krama.jpg" alt="The original Krama scarf of the ancient Khmer" class="w-full rounded-2xl shadow-md object-cover">
                <figcaption class="text-center text-sm text-slate-500 mt-3 font-serif italic">The ancestral Khmer Krama—a woven testament to the spiritual protection of Lord Vishnu.</figcaption>
              </figure>
            </div>
          </div>

          <div class="scroll-mt-24 pt-4 border-t border-slate-200/60">
            <h2 class="font-serif text-2xl md:text-3xl font-bold text-[#1e293b] mb-6 flex items-center gap-3">
              <span class="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-base font-sans">2</span>
              A Bespoke Field Guide: Exploring Long Khanh A
            </h2>
            <div class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[17px] prose-p:text-slate-700">
              <p>For travelers seeking to witness the authentic, meticulous creation of a traditional <em>khăn rằn</em>, a pilgrimage to the <strong>Long Khanh A Weaving Village</strong> is an absolute imperative.</p>
              
              <div class="bg-blue-50/50 border border-blue-100 rounded-xl p-6 my-6">
                <h4 class="font-bold text-blue-900 mb-3">Logistical Essentials for 2026</h4>
                <ul class="space-y-2 list-disc pl-5 text-slate-700">
                  <li><strong>Location:</strong> Situated on the Long Khanh riverine islet, amidst the mighty Tien River.</li>
                  <li><strong>The Journey:</strong> From Hong Ngu City, navigate to the Long Khanh ferry terminal for a brief 10-minute crossing.</li>
                  <li><strong>The Golden Hours:</strong> Aim to arrive between 7:30 AM and 10:30 AM to witness the vibrant yards of yarn drying under the morning sun.</li>
                </ul>
              </div>

              <figure class="my-8">
                <img src="https://r2.nucuoimekong.com/wp-content/uploads/lang-nghe-det-khan-ran-nu-cuoi-me-kong.webp" alt="An artisan meticulously inspecting the woven threads" class="w-full rounded-2xl shadow-md object-cover">
                <figcaption class="text-center text-sm text-slate-500 mt-3 font-serif italic">Long Khanh A—where the rhythmic clatter of the loom has echoed for over a century.</figcaption>
              </figure>
            </div>
          </div>
        </main>
      </div>
    </div>
</div>`;

export const GET: APIRoute = async () => {
  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return new Response('Database missing', { status: 500 });

  const postsToSeed = [
    {
      id: '33734',
      title: 'Happy Land Bến Lức: Current Status, Ticketing & 2026 Travel Updates',
      slug: 'khu-du-lich-happy-land-ben-luc-long-an',
      featuredImage: 'https://r2.nucuoimekong.com/wp-content/uploads/happy-land-1.jpg',
      excerpt: 'Once envisioned as the Land of Happiness along the untamed waters of the Vàm Cỏ Đông river, the Happy Land Entertainment Complex has weathered significant turbulence.',
      content: happyLandHtml,
      status: 'published',
      format: 'landing',
      contentFormat: 'html',
      author: 'The Rice Tour Editorial'
    },
    {
      id: '33735',
      title: 'The Mekong Khăn Rằn: Unweaving a 300-Year Legacy',
      slug: 'khan-ran-nam-bo',
      featuredImage: 'https://r2.nucuoimekong.com/wp-content/uploads/khan-ran-nam-bo-nu-cuoi-me-kong.webp',
      excerpt: 'Behind its modest black-and-white checkered pattern lies a three-century-old odyssey of cultural intersection among the indigenous tribes of the lower Mekong.',
      content: khanRanHtml,
      status: 'published',
      format: 'landing',
      contentFormat: 'html',
      author: 'The Rice Tour Editorial'
    }
  ];

  const results: any[] = [];
  const now = new Date().toISOString();

  for (const p of postsToSeed) {
    await d1Db.prepare(`
      INSERT INTO Post (id, title, slug, featuredImage, excerpt, content, status, format, contentFormat, author, isElementor, createdAt, updatedAt, publishedAt)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET
        title = excluded.title,
        slug = excluded.slug,
        featuredImage = excluded.featuredImage,
        excerpt = excluded.excerpt,
        content = excluded.content,
        status = excluded.status,
        format = excluded.format,
        contentFormat = excluded.contentFormat,
        author = excluded.author,
        updatedAt = excluded.updatedAt
    `).bind(
      p.id, p.title, p.slug, p.featuredImage, p.excerpt, p.content, p.status, p.format, p.contentFormat, p.author, now, now, now
    ).run();
    results.push({ slug: p.slug, status: 'seeded' });
  }

  return new Response(JSON.stringify({ success: true, seeded: results }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
