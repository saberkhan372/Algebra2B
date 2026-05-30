// challenge.js — Challenge Mode for tool pages
// Reads window.TOOL_CHALLENGES (array of {id, label, desc, validate}).
// Injects a collapsed "CHALLENGE MODE" section into .tool-sidebar.
// Exposes window.A2CH = { active, solved } for tools that draw canvas targets.
// Calls window.onChallengeActivate(ch) when a challenge is set/cleared.
(function () {
  var challenges = window.TOOL_CHALLENGES;
  if (!challenges || !challenges.length) return;

  var sidebar = document.querySelector('.tool-sidebar');
  if (!sidebar) return;

  // ── State ────────────────────────────────────────────────────────────
  var activeChallenge = null;
  var challengeSolved = false;
  var rafId = null;
  window.A2CH = { active: null, solved: false };

  // ── Inject CSS for pop animation ─────────────────────────────────────
  if (!document.getElementById('a2-ch-style')) {
    var s = document.createElement('style');
    s.id = 'a2-ch-style';
    s.textContent = '@keyframes a2chpop{from{transform:scale(.92);opacity:0}to{transform:scale(1);opacity:1}}';
    document.head.appendChild(s);
  }

  // ── Inject collapsed section ─────────────────────────────────────────
  var toolName = location.pathname.split('/').pop().replace('.html', '');
  var COLL_KEY = 'a2pg-ch-' + toolName;

  var sec = document.createElement('div');
  sec.style.cssText = 'border-top:1.5px solid var(--ink-soft);';
  sec.innerHTML =
    '<div id="a2-ch-hdr" style="padding:9px 13px 7px;cursor:pointer;user-select:none;' +
      'display:flex;justify-content:space-between;align-items:center;margin:0;' +
      'font-family:var(--f-body);font-size:10px;font-weight:700;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.04em;">' +
      'CHALLENGE MODE <span id="a2-ch-arr">▸</span>' +
    '</div>' +
    '<div id="a2-ch-body" style="display:none;padding:0 13px 10px;">' +
      '<div id="a2-ch-pills" style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:8px;"></div>' +
      '<div id="a2-ch-goal" style="display:none;font-family:var(--f-body);font-size:13px;' +
        'color:var(--ink);line-height:1.45;padding:7px 10px;border-radius:4px;' +
        'border-left:3px solid #e07820;background:#e0782010;margin-bottom:6px;"></div>' +
      '<div id="a2-ch-success" style="display:none;background:#1a7a6e;color:#fff;text-align:center;' +
        'padding:7px 10px;border-radius:4px;font-family:var(--f-body);font-size:13px;font-weight:700;' +
        'animation:a2chpop .25s ease;">🎉 Challenge complete!</div>' +
      '<button id="a2-ch-clear" style="display:none;margin-top:6px;" class="btn small">clear challenge</button>' +
    '</div>';

  // Insert BEFORE the guided-tour section if it exists, else append
  var tourHdr = document.getElementById('a2-tr-hdr');
  if (tourHdr) sidebar.insertBefore(sec, tourHdr.parentElement);
  else sidebar.appendChild(sec);

  // Collapsible
  var hdr  = document.getElementById('a2-ch-hdr');
  var body = document.getElementById('a2-ch-body');
  var arr  = document.getElementById('a2-ch-arr');
  var open; try { open = localStorage.getItem(COLL_KEY) === '1'; } catch(e) { open = false; }
  body.style.display = open ? '' : 'none';
  arr.textContent    = open ? '▾' : '▸';
  hdr.addEventListener('click', function () {
    open = !open;
    body.style.display = open ? '' : 'none';
    arr.textContent    = open ? '▾' : '▸';
    try { localStorage.setItem(COLL_KEY, open ? '1' : '0'); } catch(e) {}
  });
  document.getElementById('a2-ch-clear').addEventListener('click', function () { activate(null); });

  // ── Build pills ──────────────────────────────────────────────────────
  var pillsEl = document.getElementById('a2-ch-pills');
  challenges.forEach(function (c) {
    var btn = document.createElement('button');
    btn.style.cssText =
      'padding:3px 10px;border-radius:12px;border:1.5px solid var(--ink-soft);' +
      'font-family:var(--f-body);font-size:12px;cursor:pointer;background:transparent;' +
      'color:var(--ink-2);transition:background .12s,border-color .12s;';
    btn.dataset.id  = c.id;
    btn.textContent = c.label;
    btn.addEventListener('click', function () {
      activate(activeChallenge && activeChallenge.id === c.id ? null : c);
    });
    pillsEl.appendChild(btn);
  });

  // ── Activation ───────────────────────────────────────────────────────
  function activate(ch) {
    activeChallenge = ch;
    challengeSolved = false;
    window.A2CH = { active: ch, solved: false };

    // Update pills styling
    pillsEl.querySelectorAll('button').forEach(function (b) {
      var on = ch && +b.dataset.id === ch.id;
      b.style.background  = on ? '#e0782018' : 'transparent';
      b.style.borderColor = on ? '#e07820'   : 'var(--ink-soft)';
      b.style.color       = on ? '#e07820'   : 'var(--ink-2)';
      b.style.fontWeight  = on ? '700'       : '';
    });

    var goalEl    = document.getElementById('a2-ch-goal');
    var successEl = document.getElementById('a2-ch-success');
    var clearBtn  = document.getElementById('a2-ch-clear');

    if (ch) {
      goalEl.textContent     = ch.desc;
      goalEl.style.display   = '';
      successEl.style.display = 'none';
      clearBtn.style.display = '';
      startPoll();
      checkNow(); // detect if already solved
    } else {
      goalEl.style.display    = 'none';
      successEl.style.display = 'none';
      clearBtn.style.display  = 'none';
      stopPoll();
    }

    // Optional hook for canvas-drawing tools
    if (typeof window.onChallengeActivate === 'function') {
      window.onChallengeActivate(ch);
    }

    // Update URL for teacher sharing (?c=N)
    try {
      var url = new URL(location.href);
      if (ch) url.searchParams.set('c', ch.id);
      else     url.searchParams.delete('c');
      history.replaceState(null, '', url);
    } catch(e) {}
  }

  // ── Validation polling ───────────────────────────────────────────────
  function checkNow() {
    if (!activeChallenge || challengeSolved) return;
    var ok = false;
    try { ok = !!activeChallenge.validate(); } catch(e) {}
    if (ok) {
      challengeSolved = true;
      window.A2CH.solved = true;
      var successEl = document.getElementById('a2-ch-success');
      successEl.style.display   = 'block';
      successEl.style.animation = 'none';
      // Trigger reflow for animation restart
      void successEl.offsetWidth;
      successEl.style.animation = 'a2chpop .25s ease';
      stopPoll();
      if (typeof window.onChallengeActivate === 'function') window.onChallengeActivate(null);
    }
  }

  function poll() {
    checkNow();
    if (activeChallenge && !challengeSolved) rafId = requestAnimationFrame(poll);
    else rafId = null;
  }
  function startPoll() { if (!rafId) rafId = requestAnimationFrame(poll); }
  function stopPoll()  { if (rafId) { cancelAnimationFrame(rafId); rafId = null; } }

  // ── Load ?c=N from URL (teacher-shared link) ─────────────────────────
  (function () {
    var id = +new URLSearchParams(location.search).get('c');
    if (!id) return;
    var ch = challenges.find(function (c) { return c.id === id; });
    if (!ch) return;
    // Open section
    body.style.display = ''; arr.textContent = '▾'; open = true;
    try { localStorage.setItem(COLL_KEY, '1'); } catch(e) {}
    activate(ch);
  })();
})();
