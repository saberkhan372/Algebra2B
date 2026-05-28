/**
 * A2 Playgrounds — Math Input Preview
 *
 * Automatically enhances every  input[type=text].math-input  element:
 *   1. Wraps it in a flex-column container
 *   2. Inserts a live-preview panel above it
 *   3. On every keystroke, calls mathFmt() and updates the preview
 *
 * Works with dynamically rendered content via MutationObserver —
 * no need to call anything after renderSteps() or similar.
 *
 * Requires: math-fmt.js (loaded first)
 */
(function () {
  'use strict';

  var SELECTOR = 'input[type="text"].math-input';

  function enhance(inp) {
    // Don't double-enhance
    if (inp.dataset.mathEnhanced) return;
    inp.dataset.mathEnhanced = '1';

    // ── Build wrapper (flex column: preview on top, input below) ──
    var wrap = document.createElement('div');
    wrap.className = 'math-input-wrap';

    // ── Build preview panel ────────────────────────────────────────
    var preview = document.createElement('div');
    preview.className = 'math-preview';
    preview.setAttribute('aria-hidden', 'true');
    // Empty placeholder visible from the start so layout doesn't jump
    preview.innerHTML = '';

    // Insert wrapper before the input, move input into wrapper
    inp.parentNode.insertBefore(wrap, inp);
    wrap.appendChild(preview);
    wrap.appendChild(inp);

    // ── Live update ───────────────────────────────────────────────
    function refresh() {
      var val = inp.value;
      if (!val.trim()) {
        preview.innerHTML = '';
        preview.classList.remove('math-preview--active');
      } else {
        var fmt = window.mathFmt ? window.mathFmt(val) : val;
        preview.innerHTML = fmt;
        preview.classList.add('math-preview--active');
      }
    }

    inp.addEventListener('input', refresh);
    refresh(); // render initial value if any
  }

  // ── Scan for existing inputs ───────────────────────────────────
  function scanAll() {
    document.querySelectorAll(SELECTOR).forEach(enhance);
  }

  // ── Watch for dynamically added inputs (e.g. renderSteps()) ───
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      m.addedNodes.forEach(function (node) {
        if (node.nodeType !== 1) return; // elements only
        // The node itself might be the input
        if (node.matches && node.matches(SELECTOR)) {
          enhance(node);
        }
        // Or it might contain inputs (e.g. a step-block div)
        if (node.querySelectorAll) {
          node.querySelectorAll(SELECTOR).forEach(enhance);
        }
      });
    });
  });

  function init() {
    scanAll();
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
