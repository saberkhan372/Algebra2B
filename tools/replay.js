/**
 * replay.js — A2 Playgrounds
 * Adds ⏺ rec / ▶ play / 🔗 share controls to any tool with range sliders.
 * Records slider sessions as a compact timeline and encodes them in
 * #r=base64url so teachers can share live walkthroughs with no backend.
 *
 * Auto-detects all input[type="range"][id] on the page.
 * Silently exits if none are found (safe to include on any tool page).
 * Appends a REPLAY panel to .tool-sidebar; auto-plays if #r= is in the URL.
 */
(function () {
  'use strict';

  var sliders = Array.from(document.querySelectorAll('input[type="range"][id]'));
  if (!sliders.length) return;

  var MAX_GAP  = 2000;   // cap pauses to 2 s when normalising
  var timeline = [], recording = false, recStart = 0;
  var lastVals = null, rafId = null, pollTimer = null;

  function $ (id) { return document.getElementById(id); }

  // ── Encode / decode ────────────────────────────────────────────────────────
  // Compact format: [[t_ms, v0, v1, …], …] → base64url
  function encode(tl) {
    return btoa(JSON.stringify(tl.map(function (f) { return [f.t].concat(f.v); })))
      .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }

  function decode(str) {
    try {
      var b   = str.replace(/-/g, '+').replace(/_/g, '/');
      var arr = JSON.parse(atob(b));
      return arr.map(function (row) { return { t: row[0], v: row.slice(1) }; });
    } catch (e) { return null; }
  }

  function replayFromHash() {
    try {
      var r = new URLSearchParams(location.hash.slice(1)).get('r');
      return r ? decode(r) : null;
    } catch (e) { return null; }
  }

  // ── Helpers ────────────────────────────────────────────────────────────────
  function vals() {
    return sliders.map(function (s) { return +s.value; });
  }

  function valsEq(a, b) {
    return a && b && a.every(function (v, i) { return v === b[i]; });
  }

  function setPanel(name) {
    ['idle', 'recording', 'done', 'auto'].forEach(function (n) {
      var el = $('rp-' + n);
      if (el) el.style.display = n === name ? 'flex' : 'none';
    });
  }

  // ── Inject UI ──────────────────────────────────────────────────────────────
  function buildUI() {
    var sidebar = document.querySelector('.tool-sidebar');
    if (!sidebar) return false;

    var style = document.createElement('style');
    style.textContent =
      '.rp-dot{animation:rp-blink .9s ease-in-out infinite}' +
      '@keyframes rp-blink{0%,100%{opacity:1}50%{opacity:.08}}' +
      '.rp-bar-wrap{height:4px;background:var(--paper-3);border-radius:2px;overflow:hidden;margin-top:6px}' +
      '.rp-bar-fill{height:100%;background:var(--accent);border-radius:2px;width:0%;transition:width 80ms linear}';
    document.head.appendChild(style);

    var panel = document.createElement('div');
    panel.id = 'replay-wrap';
    panel.style.cssText = 'padding:9px 13px;border-bottom:1.5px solid var(--ink-soft)';
    panel.innerHTML =
      '<div style="font-family:var(--f-body);font-size:10px;font-weight:700;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px;">replay</div>' +

      // idle
      '<div id="rp-idle" style="display:flex;align-items:center;gap:8px;">' +
        '<button id="rp-rec" class="btn accent" style="font-size:12px;padding:4px 10px;">&#9210; rec</button>' +
        '<span style="font-family:var(--f-body);font-size:11px;color:var(--ink-soft);">record &amp; share a walkthrough</span>' +
      '</div>' +

      // recording
      '<div id="rp-recording" style="display:none;align-items:center;gap:8px;">' +
        '<span class="rp-dot" style="color:#c02040;font-size:16px;line-height:1;">&#9679;</span>' +
        '<span id="rp-fcount" style="font-family:\'JetBrains Mono\',monospace;font-size:11px;color:var(--ink-soft);">0 frames</span>' +
        '<button id="rp-stop" class="btn" style="font-size:12px;padding:4px 10px;margin-left:auto;">&#9209; stop</button>' +
      '</div>' +

      // done
      '<div id="rp-done" style="display:none;flex-direction:column;gap:5px;">' +
        '<div style="display:flex;align-items:center;gap:6px;">' +
          '<span id="rp-dcount" style="font-family:\'JetBrains Mono\',monospace;font-size:11px;color:var(--ink-soft);"></span>' +
          '<button id="rp-new" class="btn" style="font-size:11px;padding:2px 7px;margin-left:auto;">&#9210; new</button>' +
        '</div>' +
        '<div style="display:flex;gap:6px;">' +
          '<button id="rp-play" class="btn accent" style="font-size:12px;padding:4px 10px;">&#9654; play</button>' +
          '<button id="rp-share" class="btn" style="font-size:12px;padding:4px 10px;">&#128279; share</button>' +
        '</div>' +
        '<div class="rp-bar-wrap"><div id="rp-bar" class="rp-bar-fill"></div></div>' +
      '</div>' +

      // auto-playing from URL
      '<div id="rp-auto" style="display:none;flex-direction:column;gap:5px;">' +
        '<div style="font-family:var(--f-body);font-size:12px;color:var(--ink-2);">&#9654; playing replay&#8230;</div>' +
        '<div class="rp-bar-wrap"><div id="rp-abar" class="rp-bar-fill"></div></div>' +
        '<button id="rp-skip" class="btn" style="font-size:11px;padding:2px 8px;align-self:flex-start;">&#9632; skip</button>' +
      '</div>';

    sidebar.appendChild(panel);
    return true;
  }

  if (!buildUI()) return;

  // ── Capture (poll every 50 ms — catches slider drags AND canvas drags) ─────
  function snapFrame() {
    if (!recording) return;
    var v = vals();
    if (valsEq(v, lastVals)) return;
    timeline.push({ t: Date.now() - recStart, v: v.slice() });
    lastVals = v.slice();
    $('rp-fcount').textContent = timeline.length + ' frame' + (timeline.length !== 1 ? 's' : '');
  }

  // ── Recording controls ─────────────────────────────────────────────────────
  $('rp-rec').addEventListener('click', function () {
    timeline  = [];
    recStart  = Date.now();
    lastVals  = null;
    recording = true;
    snapFrame();
    setPanel('recording');
    pollTimer = setInterval(snapFrame, 50);
  });

  $('rp-stop').addEventListener('click', function () {
    recording = false;
    clearInterval(pollTimer);
    if (timeline.length < 2) { setPanel('idle'); return; }

    // Normalise: rebuild with gaps capped at MAX_GAP
    var norm = [{ t: 0, v: timeline[0].v }], cumT = 0;
    for (var i = 1; i < timeline.length; i++) {
      cumT += Math.min(timeline[i].t - timeline[i - 1].t, MAX_GAP);
      norm.push({ t: cumT, v: timeline[i].v });
    }
    timeline = norm;
    var totalSec = (timeline[timeline.length - 1].t / 1000).toFixed(1);
    $('rp-dcount').textContent = timeline.length + ' frames · ' + totalSec + 's';
    $('rp-bar').style.width = '0%';
    $('rp-play').textContent = '▶ play';
    $('rp-play').disabled = false;
    setPanel('done');
  });

  $('rp-new').addEventListener('click', function () {
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    timeline = [];
    setPanel('idle');
  });

  // ── Playback ───────────────────────────────────────────────────────────────
  function applyFrame(f) {
    f.v.forEach(function (val, i) {
      if (!sliders[i]) return;
      sliders[i].value = val;
      sliders[i].dispatchEvent(new Event('input', { bubbles: true }));
    });
  }

  function runPlay(tl, barEl, onDone) {
    if (rafId) cancelAnimationFrame(rafId);
    var t0  = performance.now();
    var dur = tl[tl.length - 1].t || 1;
    var idx = 1;
    applyFrame(tl[0]);
    function tick(now) {
      var elapsed = now - t0;
      while (idx < tl.length && tl[idx].t <= elapsed) applyFrame(tl[idx++]);
      if (barEl) barEl.style.width = Math.min(100, elapsed / dur * 100) + '%';
      if (idx < tl.length) {
        rafId = requestAnimationFrame(tick);
      } else {
        if (barEl) barEl.style.width = '100%';
        rafId = null;
        onDone();
      }
    }
    rafId = requestAnimationFrame(tick);
  }

  $('rp-play').addEventListener('click', function () {
    if (!timeline.length) return;
    $('rp-play').disabled = true;
    runPlay(timeline, $('rp-bar'), function () {
      $('rp-play').disabled = false;
      $('rp-play').textContent = '▶ again';
    });
  });

  $('rp-share').addEventListener('click', function () {
    if (!timeline.length) return;
    var url = location.origin + location.pathname + '#r=' + encode(timeline);
    var btn = $('rp-share');
    function flash(ok) {
      btn.textContent = ok ? '✓ copied!' : '⚠ failed';
      setTimeout(function () { btn.textContent = '🔗 share'; }, 2200);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(
        function () { flash(true); },
        function () { flash(false); }
      );
    } else {
      try {
        var ta = document.createElement('textarea');
        ta.value = url;
        ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
        document.body.appendChild(ta); ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        flash(true);
      } catch (e) { flash(false); }
    }
  });

  // ── Auto-play from shared URL ──────────────────────────────────────────────
  var autoTL = replayFromHash();
  if (autoTL && autoTL.length >= 2) {
    setPanel('auto');
    applyFrame(autoTL[0]);

    $('rp-skip').addEventListener('click', function () {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
      finishAuto(autoTL);
    });

    setTimeout(function () {
      runPlay(autoTL, $('rp-abar'), function () { finishAuto(autoTL); });
    }, 600);
  }

  function finishAuto(tl) {
    timeline = tl;
    var totalSec = (tl[tl.length - 1].t / 1000).toFixed(1);
    $('rp-dcount').textContent = tl.length + ' frames · ' + totalSec + 's';
    $('rp-bar').style.width = '100%';
    $('rp-play').textContent = '▶ again';
    $('rp-play').disabled = false;
    setPanel('done');
  }

})();
