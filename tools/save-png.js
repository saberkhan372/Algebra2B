/**
 * save-png.js — A2 Playgrounds
 * Attaches a "📷 save PNG" button to every canvas on the page.
 * Overlay variant (dark ghost, appears on hover) for named canvas wrappers.
 * Inline variant (pill button below) for unwrapped canvases.
 */
(function () {
  'use strict';

  // Walk up the DOM to find the first non-transparent background color
  function canvasBg(canvas) {
    let el = canvas.parentElement;
    while (el && el !== document.documentElement) {
      const bg = window.getComputedStyle(el).backgroundColor;
      if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') return bg;
      el = el.parentElement;
    }
    return '#f6f1e4'; // cream paper fallback
  }

  function doSave(canvas) {
    // Composite onto an off-screen canvas so background is always captured
    const off = document.createElement('canvas');
    off.width  = canvas.width;
    off.height = canvas.height;
    const oc = off.getContext('2d');
    oc.fillStyle = canvasBg(canvas);
    oc.fillRect(0, 0, off.width, off.height);
    oc.drawImage(canvas, 0, 0);

    const toolName = document.title
      .replace(/\s*—.*$/, '')
      .trim()
      .replace(/[^a-z0-9]+/gi, '-')
      .toLowerCase() || 'graph';

    const a = document.createElement('a');
    a.download = toolName + '.png';
    a.href = off.toDataURL('image/png');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function attachButtons() {
    document.querySelectorAll('canvas[id]').forEach(function (canvas) {
      const WRAPPER_SELECTOR =
        '.widget-container, .canvas-wrapper, .canvas-wrap, .canvas-panel';
      const wrapper = canvas.closest(WRAPPER_SELECTOR);

      const btn = document.createElement('button');
      btn.textContent = '📷 save PNG';
      btn.title = 'Download this graph as a PNG image';

      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        doSave(canvas);
        btn.textContent = '✓ saved!';
        setTimeout(function () { btn.textContent = '📷 save PNG'; }, 1800);
      });

      if (wrapper) {
        // Overlay: dark ghost button pinned inside the canvas wrapper
        btn.className = 'save-png-btn save-png-overlay';
        if (window.getComputedStyle(wrapper).position === 'static') {
          wrapper.style.position = 'relative';
        }
        wrapper.appendChild(btn);
      } else {
        // Inline: pill button inserted right after the canvas element
        btn.className = 'save-png-btn save-png-inline';
        canvas.insertAdjacentElement('afterend', btn);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachButtons);
  } else {
    attachButtons();
  }
})();
