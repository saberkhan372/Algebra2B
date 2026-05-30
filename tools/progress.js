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
    'tools/box-plot-builder.html':   'U8 · start here',
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

  // ── Tool action buttons: share (item 7) + print (item 12) ──────
  function injectShareBtn() {
    var sidebar = document.querySelector('.tool-sidebar');
    if (!sidebar || sidebar.querySelector('.share-btn-wrap')) return;

    // Set data-print-title so @media print CSS can show tool name
    var titleEl = document.querySelector('.tool-title, h1.tool-title, [class*="tool-title"]');
    if (titleEl) sidebar.setAttribute('data-print-title', titleEl.textContent.trim());

    var wrap = document.createElement('div');
    wrap.className = 'share-btn-wrap';
    wrap.style.cssText = 'display:flex;gap:6px;flex-wrap:wrap;';

    // Share / copy-link button
    var shareBtn;
    if (window.UrlState && window.UrlState.copyBtn) {
      shareBtn = window.UrlState.copyBtn();
    } else {
      shareBtn = document.createElement('button');
      shareBtn.type = 'button';
      shareBtn.className = 'url-state-btn save-png-btn';
      shareBtn.textContent = '🔗 copy link';
      shareBtn.addEventListener('click', function () {
        var url = 'https://saberkhan372.github.io/Algebra2B/' +
                  location.pathname.replace(/^\//, '').replace(/([^.html])$/, '$1.html');
        navigator.clipboard && navigator.clipboard.writeText(url)
          .then(function () { shareBtn.textContent = '✓ copied!'; setTimeout(function () { shareBtn.textContent = '🔗 copy link'; }, 2000); })
          .catch(function () { shareBtn.textContent = '⚠ try again'; setTimeout(function () { shareBtn.textContent = '🔗 copy link'; }, 2000); });
      });
    }

    // Print button (item 12)
    var printBtn = document.createElement('button');
    printBtn.type = 'button';
    printBtn.className = 'url-state-btn save-png-btn';
    printBtn.textContent = '🖨 print';
    printBtn.title = 'Print key ideas and try-this prompts';
    printBtn.addEventListener('click', function () { window.print(); });

    wrap.appendChild(shareBtn);
    wrap.appendChild(printBtn);
    sidebar.insertBefore(wrap, sidebar.firstChild);
  }

  // ── Collapse helper: make a section header toggle its body ────────
  // hdrEl: the clickable header element
  // bodyEl: the element whose height will animate
  // key:    localStorage key for open/closed state
  // defaultOpen: whether to start expanded if no saved preference
  function makeCollapsible(hdrEl, bodyEl, key, defaultOpen) {
    var arrow = document.createElement('span');
    arrow.className = 'sk-coll-arrow';
    arrow.textContent = '▾';
    hdrEl.classList.add('sk-coll-hdr');
    hdrEl.appendChild(arrow);
    bodyEl.classList.add('sk-coll-body');

    var saved = localStorage.getItem(key);
    var isOpen = saved !== null ? saved === '1' : defaultOpen;

    function setOpen(open, animate) {
      isOpen = open;
      if (open) {
        bodyEl.classList.remove('sk-closed');
        hdrEl.classList.remove('sk-closed');
        bodyEl.style.maxHeight = '2000px';  // large enough for any sidebar section
        bodyEl.style.opacity = '1';
      } else {
        if (animate) {
          requestAnimationFrame(function () {
            bodyEl.classList.add('sk-closed');
            hdrEl.classList.add('sk-closed');
          });
        } else {
          bodyEl.classList.add('sk-closed');
          hdrEl.classList.add('sk-closed');
        }
      }
      try { localStorage.setItem(key, open ? '1' : '0'); } catch (e) {}
    }

    setOpen(isOpen, false);
    hdrEl.addEventListener('click', function () { setOpen(!isOpen, true); });
  }

  // ── Auto-collapse HOW TO USE box on tool pages ────────────────────
  // Covers the 25 tools that use .how-to-box; no per-tool HTML edits needed.
  function collapseHowToUse() {
    var box = document.querySelector('.how-to-box');
    if (!box) return;

    // Build a slim header row above the box
    var hdr = document.createElement('div');
    hdr.style.cssText = 'font-family:var(--f-body);font-size:10px;font-weight:700;' +
      'color:var(--ink-soft);text-transform:uppercase;letter-spacing:.05em;' +
      'margin-bottom:4px;padding:0 2px;';
    hdr.innerHTML = '<span>how to use &amp; try this</span>';

    // Wrap box contents into a body div
    var body = document.createElement('div');
    while (box.firstChild) body.appendChild(box.firstChild);
    box.appendChild(hdr);
    box.appendChild(body);

    makeCollapsible(hdr, body, 'a2pg-htu', false);  // default: closed
  }

  // ── Auto-collapse lesson stack on unit pages ──────────────────────
  function collapseLessonStack() {
    var stack = document.querySelector('.lesson-stack');
    if (!stack) return;

    var rowCount = stack.querySelectorAll('.lesson-row').length;
    if (!rowCount) return;

    var hdr = document.createElement('div');
    hdr.style.cssText = 'font-family:var(--f-body);font-size:10px;font-weight:700;' +
      'color:var(--ink-soft);text-transform:uppercase;letter-spacing:.05em;' +
      'padding:6px 0 4px;';
    hdr.innerHTML = '<span>lesson schedule (' + rowCount + ' days)</span>';

    // Wrap the lesson stack in a body div
    var body = document.createElement('div');
    stack.parentNode.insertBefore(hdr, stack);
    stack.parentNode.insertBefore(body, stack);
    body.appendChild(stack);

    makeCollapsible(hdr, body, 'a2pg-ls', false);   // default: closed
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

      // Collapse informational sidebar sections
      collapseHowToUse();
    } else {
      // Homepage or unit page — tag cards now + after JS renders them
      applyBadges();
      setTimeout(applyBadges, 200);

      // Collapse lesson stack on unit pages
      collapseLessonStack();
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
