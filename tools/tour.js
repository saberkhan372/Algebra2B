// tour.js — Guided first-run tour for every tool page
// Auto-detects sliders, canvas, how-to-box if window.TOOL_TOUR is not set.
// Collapsed sidebar section injected automatically.
(function () {
  var sidebar = document.querySelector('.tool-sidebar');
  if (!sidebar) return;

  // ── Step discovery ──────────────────────────────────────────────────
  var steps = window.TOOL_TOUR || null;
  if (!steps) {
    steps = [];
    var firstRange = document.querySelector('input[type="range"]');
    var cnv        = document.querySelector('canvas');
    var htu        = document.querySelector('.how-to-box');

    if (firstRange) {
      var anchor = firstRange.closest('[style*="padding"]') ||
                   firstRange.closest('div') || firstRange.parentElement;
      steps.push({
        el: anchor,
        pos: 'right',
        text: 'Use these <strong>sliders</strong> to adjust the parameters — the graph responds in real time.'
      });
    }
    if (cnv) {
      steps.push({
        el: cnv,
        pos: 'center',
        text: 'The <strong>canvas</strong> shows the math visually. On many tools you can also drag elements directly on the graph.'
      });
    }
    if (htu) {
      steps.push({
        el: htu,
        pos: 'right',
        text: 'Tap <strong>HOW TO USE &amp; TRY THIS</strong> to expand guided prompts, vocabulary, and challenge ideas.'
      });
    }
    if (!steps.length) return;
  }

  // ── Inject collapsed section at bottom of sidebar ───────────────────
  var toolName  = location.pathname.split('/').pop().replace('.html', '');
  var TOUR_SEEN = 'a2pg-tour-' + toolName;
  var COLL_KEY  = 'a2pg-trcoll-' + toolName;

  var sec = document.createElement('div');
  sec.style.cssText = 'border-top:1.5px solid var(--ink-soft);';
  sec.innerHTML =
    '<div id="a2-tr-hdr" style="padding:9px 13px 7px;cursor:pointer;user-select:none;' +
      'display:flex;justify-content:space-between;align-items:center;margin:0;' +
      'font-family:var(--f-body);font-size:10px;font-weight:700;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.04em;">' +
      'GUIDED TOUR <span id="a2-tr-arr">▸</span>' +
    '</div>' +
    '<div id="a2-tr-body" style="display:none;padding:0 13px 10px;">' +
      '<p style="font-family:var(--f-body);font-size:13px;color:var(--ink-2);margin:0 0 8px;line-height:1.4;">' +
        'A ' + steps.length + '-step walkthrough of this tool\'s key features.' +
      '</p>' +
      '<button id="a2-tr-btn" class="btn small">▶ start tour</button>' +
    '</div>';
  sidebar.appendChild(sec);

  // Collapsible state
  var hdr  = document.getElementById('a2-tr-hdr');
  var body = document.getElementById('a2-tr-body');
  var arr  = document.getElementById('a2-tr-arr');
  var open; try { open = localStorage.getItem(COLL_KEY) === '1'; } catch(e) { open = false; }
  body.style.display = open ? '' : 'none';
  arr.textContent    = open ? '▾' : '▸';
  hdr.addEventListener('click', function () {
    open = !open;
    body.style.display = open ? '' : 'none';
    arr.textContent    = open ? '▾' : '▸';
    try { localStorage.setItem(COLL_KEY, open ? '1' : '0'); } catch(e) {}
  });
  document.getElementById('a2-tr-btn').addEventListener('click', startTour);

  // ── Tour logic ────────────────────────────────────────────────────────
  var idx = -1;

  function startTour() { idx = 0; render(); }

  function render() {
    ['a2-tour-bg', 'a2-tour-card'].forEach(function (id) {
      var el = document.getElementById(id); if (el) el.remove();
    });
    if (idx < 0) return;

    var step   = steps[idx];
    var anchor = (typeof step.el === 'string')
      ? document.getElementById(step.el) : step.el;
    var rect   = anchor
      ? anchor.getBoundingClientRect()
      : { left: 0, top: 80, right: 300, width: 300, height: 80 };

    // Backdrop
    var bg = document.createElement('div');
    bg.id = 'a2-tour-bg';
    bg.style.cssText = 'position:fixed;inset:0;background:rgba(20,15,5,.5);z-index:900;';
    bg.addEventListener('click', endTour);
    document.body.appendChild(bg);

    // Card
    var card = document.createElement('div');
    card.id = 'a2-tour-card';
    card.style.cssText =
      'position:fixed;z-index:901;background:#faf7f0;' +
      'border:2.5px solid #3a3020;border-radius:8px;' +
      'padding:14px 16px;width:238px;box-shadow:3px 4px 0 rgba(0,0,0,.22);';
    var isLast = idx === steps.length - 1;
    card.innerHTML =
      '<div style="font-family:var(--f-body);font-size:10px;font-weight:700;color:var(--ink-soft);' +
        'text-transform:uppercase;letter-spacing:.05em;margin-bottom:5px;">' +
        'Step ' + (idx + 1) + ' of ' + steps.length +
      '</div>' +
      '<div style="font-family:var(--f-body);font-size:14px;color:var(--ink);line-height:1.5;margin-bottom:12px;">' +
        step.text +
      '</div>' +
      '<div style="display:flex;justify-content:space-between;align-items:center;">' +
        '<button id="a2-tr-skip" style="font-size:12px;color:var(--ink-soft);background:none;border:none;cursor:pointer;padding:0;">skip</button>' +
        '<button id="a2-tr-nxt" style="padding:5px 14px;background:var(--accent);color:#fff;border:none;border-radius:20px;font-family:var(--f-body);font-size:13px;font-weight:700;cursor:pointer;">' +
          (isLast ? 'Got it ✓' : 'Next →') +
        '</button>' +
      '</div>';
    document.body.appendChild(card);
    card.querySelector('#a2-tr-skip').addEventListener('click', endTour);
    card.querySelector('#a2-tr-nxt').addEventListener('click', isLast ? endTour : nextStep);

    // Position card relative to anchor
    var CW = 254, CH = 150;
    var top, left;
    var pos = step.pos || 'right';
    if (pos === 'right') {
      top  = rect.top  + rect.height / 2 - CH / 2;
      left = rect.right + 16;
    } else if (pos === 'left') {
      top  = rect.top  + rect.height / 2 - CH / 2;
      left = rect.left - CW - 16;
    } else { // center
      top  = rect.top  + rect.height / 2 - CH / 2;
      left = rect.left + rect.width  / 2 - CW / 2;
    }
    top  = Math.max(8, Math.min(top,  window.innerHeight - CH - 8));
    left = Math.max(8, Math.min(left, window.innerWidth  - CW - 8));
    card.style.top  = top  + 'px';
    card.style.left = left + 'px';
  }

  function nextStep() { idx++; if (idx >= steps.length) endTour(); else render(); }
  function endTour()  {
    idx = -1; render();
    try { localStorage.setItem(TOUR_SEEN, '1'); } catch(e) {}
  }

  // Auto-play on first visit
  try { if (!localStorage.getItem(TOUR_SEEN)) setTimeout(startTour, 900); } catch(e) {}
})();
