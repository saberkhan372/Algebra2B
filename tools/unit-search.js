// unit-search.js — wires the nav search bar to filter tool cards on unit pages
(function () {
  'use strict';

  function init() {
    var inp = document.querySelector('.nav-search input');
    var cards = Array.from(document.querySelectorAll('a.tool-card'));
    if (!inp || !cards.length) return;

    // Update placeholder to be unit-specific
    inp.placeholder = 'filter tools in this unit…';

    // Inject a live-count badge after the "Tools in this unit" heading
    var heading = document.querySelector('.section-heading');
    var badge = null;
    if (heading) {
      badge = document.createElement('span');
      badge.id = 'unit-search-badge';
      badge.style.cssText = 'font-family:"JetBrains Mono",monospace;font-size:12px;color:var(--accent);margin-left:10px;font-weight:700;';
      heading.appendChild(badge);
    }

    inp.addEventListener('input', function () {
      var q = this.value.trim().toLowerCase();
      var shown = 0;
      cards.forEach(function (c) {
        var match = !q || c.textContent.toLowerCase().indexOf(q) !== -1;
        c.style.display = match ? '' : 'none';
        if (match) shown++;
      });
      if (badge) {
        badge.textContent = q
          ? shown + ' match' + (shown !== 1 ? 'es' : '')
          : '';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
