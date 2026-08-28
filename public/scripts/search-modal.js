// search-modal.js - Lazy loaded search module
export function initSearch() {
  if (document.getElementById('coguu-search-overlay')) {
    return; // Already initialized
  }

  const overlayHTML = `
  <div id="coguu-search-overlay" class="coguu-search-overlay" style="display:none" role="dialog" aria-modal="true">
    <div class="coguu-search-backdrop" id="coguu-search-backdrop"></div>
    <div class="coguu-search-modal">
      <div class="coguu-search-input-wrap">
        <svg class="coguu-search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <input id="coguu-search-input" type="text" placeholder="Tìm kiếm bài viết, tour, gallery..." autocomplete="off" />
        <kbd class="coguu-search-kbd" style="display:none">ESC</kbd>
        <button id="coguu-search-close" class="coguu-search-close" aria-label="Đóng">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <div id="coguu-search-results" class="coguu-search-results">
        <div id="coguu-search-recent" class="coguu-search-section"></div>
        <div id="coguu-search-loading" class="coguu-search-section" style="display:none">
          <div class="coguu-search-skeleton"></div>
          <div class="coguu-search-skeleton"></div>
          <div class="coguu-search-skeleton"></div>
        </div>
        <div id="coguu-search-grouped" class="coguu-search-section" style="display:none"></div>
        <div id="coguu-search-empty" class="coguu-search-section" style="display:none">
          <div class="coguu-search-empty">
            <svg class="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p class="font-medium text-gray-500">Không tìm thấy kết quả</p>
            <p class="text-sm text-gray-400 mt-1">Thử từ khóa khác hoặc ngắn hơn</p>
          </div>
        </div>
      </div>
      <div class="coguu-search-footer">
        <div class="coguu-search-footer-keys">
          <span><kbd>↑</kbd><kbd>↓</kbd> di chuyển</span>
          <span><kbd>↵</kbd> mở bài</span>
          <span><kbd>esc</kbd> đóng</span>
        </div>
        <span class="text-xs text-gray-400">Powered by <strong style="color:var(--color-brand-500)">Du Lịch Có Guu</strong></span>
      </div>
    </div>
  </div>`;
  document.body.insertAdjacentHTML('beforeend', overlayHTML);

  // === Search Engine ===
  const RECENT_KEY = 'coguu_recent_searches';
  const MAX_RECENT = 5;
  const DEBOUNCE_MS = 300;
  const cache = new Map();
  let debounceTimer = null;
  let activeIndex = -1;
  let currentSearchType = 'all';
  let lastQuery = '';
  let lastTotalCount = 0;

  const overlay = document.getElementById('coguu-search-overlay');
  const input = document.getElementById('coguu-search-input');
  const grouped = document.getElementById('coguu-search-grouped');
  const recent = document.getElementById('coguu-search-recent');
  const loading = document.getElementById('coguu-search-loading');
  const empty = document.getElementById('coguu-search-empty');

  function openSearch(type = 'all') {
    window.__coguuSearchIsOpen = true;
    currentSearchType = type;
    overlay.style.display = 'flex';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.classList.add('active');
        input.focus();
      });
    });
    document.body.style.overflow = 'hidden';
    showRecent();
    
    if (input.value.trim().length >= 2) {
      onInput();
    }
  }

  function closeSearch() {
    window.__coguuSearchIsOpen = false;
    overlay.classList.remove('active');
    setTimeout(() => { overlay.style.display = 'none'; }, 200);
    document.body.style.overflow = '';
    input.value = '';
    activeIndex = -1;
    hideAll();
  }

  function hideAll() {
    grouped.style.display = 'none';
    recent.style.display = 'none';
    loading.style.display = 'none';
    empty.style.display = 'none';
  }

  function onInput() {
    const q = input.value.trim();
    lastQuery = q;
    activeIndex = -1;
    if (debounceTimer) clearTimeout(debounceTimer);
    if (q.length < 2) {
      hideAll();
      if (q.length === 0) showRecent();
      return;
    }
    const cacheKey = `${currentSearchType}:${q}`;
    if (cache.has(cacheKey)) { renderResults(cache.get(cacheKey), q); return; }
    hideAll(); loading.style.display = 'block';
    debounceTimer = window.setTimeout(() => fetchResults(q), DEBOUNCE_MS);
  }

  async function fetchResults(query) {
    const cacheKey = `${currentSearchType}:${query}`;
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}&type=${currentSearchType}&limit=12`);
      const json = await res.json();
      if (json.success && json.data) {
        cache.set(cacheKey, json.data);
        renderResults(json.data, query);
        if (json.data.total > 0) saveRecent(query);
      } else { hideAll(); empty.style.display = 'block'; }
    } catch { hideAll(); empty.style.display = 'block'; }
  }

  function escHtml(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

  function highlight(text, query) {
    if (!text || !query) return escHtml(text || '');
    let r = escHtml(text);
    for (const w of query.split(/\s+/).filter(x => x.length >= 1)) {
      r = r.replace(new RegExp('(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi'), '<mark>$1</mark>');
    }
    return r;
  }

  function renderResults(data, query) {
    hideAll();
    if (!data.total) { empty.style.display = 'block'; return; }
    
    lastTotalCount = data.totalCount || data.total;
    
    let h = '<div class="coguu-search-count">' + data.total + ' kết quả' + 
      (lastTotalCount > data.total ? ' (trong tổng ' + lastTotalCount + ')' : '') + '</div>';
    for (const g of data.groups) {
      h += '<div class="coguu-search-group"><div class="coguu-search-group-label">' + escHtml(g.label) + '</div>';
      for (const item of g.items) {
        const thumb = item.thumbnail
          ? '<img src="' + item.thumbnail + '" alt="" class="coguu-search-thumb" loading="lazy"/>'
          : '<div class="coguu-search-thumb-placeholder"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>';
        h += '<a href="/' + item.slug + '" class="coguu-search-item">' + thumb +
          '<div class="coguu-search-item-text"><div class="coguu-search-item-title">' + highlight(item.title, query) + '</div>' +
          (item.excerpt ? '<div class="coguu-search-item-excerpt">' + highlight(item.excerpt, query) + '</div>' : '') +
          '</div></a>';
      }
      h += '</div>';
    }
    
    // "Xem tất cả" button
    const safeQ = encodeURIComponent(query);
    h += '<a href="/search?q=' + safeQ + '" class="coguu-search-viewall">' +
      '<span>Xem tất cả ' + lastTotalCount + ' kết quả cho "' + escHtml(query) + '"</span>' +
      '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>' +
      '</a>';
    
    grouped.innerHTML = h;
    grouped.style.display = 'block';
  }

  function navigateToSearchPage() {
    const q = input.value.trim();
    if (q.length >= 2) {
      closeSearch();
      window.location.href = '/search?q=' + encodeURIComponent(q);
    }
  }

  function onKeydown(e) {
    const items = grouped.querySelectorAll('.coguu-search-item');
    if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0 && items[activeIndex]) {
        items[activeIndex].click();
      } else {
        // No item selected → navigate to dedicated search page
        navigateToSearchPage();
      }
      return;
    }
    if (!items.length) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); activeIndex = Math.min(activeIndex + 1, items.length - 1); updateActive(items); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); activeIndex = Math.max(activeIndex - 1, 0); updateActive(items); }
  }

  function updateActive(items) {
    items.forEach((el, i) => el.classList.toggle('active', i === activeIndex));
    if (activeIndex >= 0 && items[activeIndex]) items[activeIndex].scrollIntoView({ block: 'nearest' });
  }

  function getRecent() { try { return JSON.parse(localStorage.getItem(RECENT_KEY) || '[]'); } catch { return []; } }
  function saveRecent(q) {
    try { let r = getRecent().filter(x => x !== q); r.unshift(q); localStorage.setItem(RECENT_KEY, JSON.stringify(r.slice(0, MAX_RECENT))); } catch {}
  }

  function showRecent() {
    const r = getRecent();
    if (!r.length) { recent.innerHTML = ''; return; }
    let h = '<div class="coguu-search-group-label">Tìm kiếm gần đây</div>';
    for (const t of r) {
      h += '<button class="coguu-search-recent-item" data-q="' + escHtml(t) + '">' +
        '<svg class="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>' +
        '<span>' + escHtml(t) + '</span></button>';
    }
    recent.innerHTML = h;
    recent.style.display = 'block';
    recent.querySelectorAll('.coguu-search-recent-item').forEach(btn => {
      btn.addEventListener('click', () => { input.value = btn.dataset.q || ''; onInput(); });
    });
  }

  // Bind events
  document.getElementById('coguu-search-close')?.addEventListener('click', closeSearch);
  document.getElementById('coguu-search-backdrop')?.addEventListener('click', closeSearch);
  input.addEventListener('input', onInput);
  input.addEventListener('keydown', onKeydown);

  // Expose methods
  window.__coguuSearchOpen = openSearch;
  window.__coguuSearchClose = closeSearch;
}
