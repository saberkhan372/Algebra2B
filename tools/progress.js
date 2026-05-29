// progress.js — visited tracking + start-here banners
// Included in every tool page AND loaded by index.html + unit pages.
(function () {

  var STORAGE_KEY = 'a2pg-visited';

  // ── One "start here" tool per unit ──────────────────────────────
  // These are the best conceptual entry points for a student new to each unit.
  var START_HERE = {
    'tools/systems-explorer.html':   'U1 · start here',
    'tools/abs-value-grapher.html':  'U2 · start here',
    'tools/imaginary-sandbox.html':  'U3 · start here',
    'tools/composition.html':        'U4 · start here',
    'tools/log-exp-mirror.html':     'U5 · start here',
    'tools/rational-simplifier.html':'U6 · start here',
    'tools/unit-circle.html':        'U7 · start here',
    'tools/box-plot-builder.html':   'U9 · start here',
  };

  // ── Storage helpers ──────────────────────────────────────────────
  function getVisited() {
    try { return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')); }
    catch (e) { return new Set(); }
  }

  function markVisited(href) {
    var v = getVisited();
    v.add(href);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(v))); } catch (e) {}
  }

  // Normalize a card href to the canonical 'tools/foo.html' format
  function normalizeHref(href) {
    if (!href) return '';
    return href.replace(/^\.\.\//, '').replace(/^\//, '');
  }

  // ── Apply badges to any card grid on the current page ───────────
  function applyBadges() {
    var visited = getVisited();
    document.querySelectorAll('a.tool-card[href]').forEach(function (card) {
      var href = normalizeHref(card.getAttribute('href'));
      if (!href) return;

      // Visited badge
      if (visited.has(href) && !card.querySelector('.visited-badge')) {
        var badge = document.createElement('span');
        badge.className = 'visited-badge';
        badge.textContent = '✓';
        badge.title = 'You\'ve opened this tool';
        card.appendChild(badge);
      }

      // Start-here banner
      if (START_HERE[href] && !card.querySelector('.start-here-banner')) {
        var banner = document.createElement('div');
        banner.className = 'start-here-banner';
        banner.textContent = '★ start here';
        card.insertBefore(banner, card.firstChild);
      }
    });
  }

  // ── Share button (item 7) ────────────────────────────────────────
  // Injects a "🔗 copy link" button into the tool sidebar.
  // Uses UrlState.copyBtn() if available (url-state.js), else its own fallback.
  function injectShareBtn() {
    var sidebar = document.querySelector('.tool-sidebar');
    if (!sidebar || sidebar.querySelector('.share-btn-wrap')) return;

    var wrap = document.createElement('div');
    wrap.className = 'share-btn-wrap';

    var btn;
    if (window.UrlState && window.UrlState.copyBtn) {
      btn = window.UrlState.copyBtn();
    } else {
      btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'url-state-btn save-png-btn';
      btn.textContent = '🔗 copy link';
      btn.addEventListener('click', function () {
        var url = 'https://saberkhan372.github.io/Algebra2B/' +
                  location.pathname.replace(/^\//, '');
        navigator.clipboard && navigator.clipboard.writeText(url)
          .then(function () { btn.textContent = '✓ copied!'; setTimeout(function () { btn.textContent = '🔗 copy link'; }, 2000); })
          .catch(function () { btn.textContent = '⚠ try again'; setTimeout(function () { btn.textContent = '🔗 copy link'; }, 2000); });
      });
    }

    wrap.appendChild(btn);
    sidebar.insertBefore(wrap, sidebar.firstChild);
  }

  // ── Main entry ───────────────────────────────────────────────────
  function init() {
    var path = location.pathname;
    var isToolPage = /\/tools\/[^/]+/.test(path)
      && !path.endsWith('.js');

    if (isToolPage) {
      // Mark this tool as visited — normalize to 'tools/foo.html'
      var seg = path.split('/tools/')[1] || '';
      if (!seg.endsWith('.html')) seg += '.html';
      markVisited('tools/' + seg);

      // Share button (item 7)
      injectShareBtn();

      // Auto-wire URL state for sliders (item 8) — defer so tool scripts run first
      if (window.UrlState && window.UrlState.auto) {
        setTimeout(window.UrlState.auto, 0);
      }
    } else {
      // Homepage or unit page — tag cards now + after JS renders them
      applyBadges();
      setTimeout(applyBadges, 200);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose so index.html can call after buildSections()
  window.A2PG = window.A2PG || {};
  window.A2PG.applyBadges = applyBadges;

})();
