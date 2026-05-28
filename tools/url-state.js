/**
 * A2 Playgrounds — URL State helper
 * Encodes/decodes tool state in the URL hash so teachers can share
 * pre-loaded configurations with students. No server needed.
 *
 * Usage (in a tool's inline <script>):
 *   const s = UrlState.load();           // returns plain object or null
 *   UrlState.save({ a: 1, b: 2 });       // writes #s=<base64url> into URL
 *   el.appendChild(UrlState.copyBtn());  // copy-link button element
 */
(function () {
  'use strict';

  function encode(obj) {
    return btoa(JSON.stringify(obj))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }

  function decode(s) {
    var b = s.replace(/-/g, '+').replace(/_/g, '/');
    while (b.length % 4) b += '=';
    return atob(b);
  }

  window.UrlState = {
    /** Read state from #s=... hash. Returns object or null. */
    load: function () {
      try {
        var hash = location.hash.slice(1);
        if (!hash) return null;
        var params = new URLSearchParams(hash);
        var s = params.get('s');
        if (!s) return null;
        return JSON.parse(decode(s));
      } catch (e) { return null; }
    },

    /** Encode state into URL hash (no page reload). */
    save: function (state) {
      try {
        history.replaceState(null, '', '#s=' + encode(state));
      } catch (e) {}
    },

    /**
     * Returns a styled "🔗 copy link" button that copies the current URL.
     * Append it wherever makes sense in the tool's controls area.
     */
    copyBtn: function () {
      var btn = document.createElement('button');
      btn.className = 'url-state-btn save-png-btn';
      btn.textContent = '🔗 copy link';
      btn.title = 'Share a link that opens this tool with these settings pre-loaded';
      btn.addEventListener('click', function () {
        var url = location.href;
        function flash(ok) {
          btn.textContent = ok ? '✓ copied!' : '⚠ try again';
          setTimeout(function () { btn.textContent = '🔗 copy link'; }, 2200);
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(
            function () { flash(true); },
            function () { flash(false); }
          );
        } else {
          // http fallback
          try {
            var ta = document.createElement('textarea');
            ta.value = url;
            ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
            document.body.appendChild(ta);
            ta.focus(); ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            flash(true);
          } catch (e) { flash(false); }
        }
      });
      return btn;
    }
  };
})();
