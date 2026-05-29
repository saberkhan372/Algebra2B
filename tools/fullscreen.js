// fullscreen.js — board mode for every tool page
(function () {
  function init() {
    var navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;

    var active = false;
    var saved  = {};

    // ── Board button ───────────────────────────────────────────────
    var btn = document.createElement('button');
    btn.id        = 'fs-btn';
    btn.type      = 'button';
    btn.title     = 'Board mode — fullscreen, canvas only';
    btn.innerHTML = '&#x26F6; board';
    btn.style.cssText = 'font-family:Lexend,system-ui,sans-serif;font-size:13px;background:none;'
      + 'border:1.5px solid #999;border-radius:3px;padding:3px 9px;'
      + 'cursor:pointer;color:#999;white-space:nowrap;';
    btn.addEventListener('mouseover', function () {
      btn.style.background = '#1d1a14'; btn.style.color = '#f6f1e4'; btn.style.borderColor = '#1d1a14';
    });
    btn.addEventListener('mouseout', function () {
      if (!active) { btn.style.background = ''; btn.style.color = '#999'; btn.style.borderColor = '#999'; }
    });
    navLinks.appendChild(btn);

    // ── Exit button (fixed, top-right) ────────────────────────────
    var exitBtn = document.createElement('button');
    exitBtn.id        = 'fs-exit';
    exitBtn.type      = 'button';
    exitBtn.innerHTML = '&#x2715; exit board';
    exitBtn.style.cssText = 'display:none;position:fixed;top:14px;right:16px;z-index:99999;'
      + 'font-family:Lexend,system-ui,sans-serif;font-size:14px;'
      + 'background:rgba(29,26,20,.85);color:#f6f1e4;'
      + 'border:none;border-radius:5px;padding:6px 14px;cursor:pointer;';
    document.body.appendChild(exitBtn);

    // ── Elements always hidden in board mode ─────────────────────
    var ALWAYS_HIDE = ['.site-nav', '.notebook-binding', '.pacing-banner'];

    // Sidebar: hide only if it's a pure info panel.
    // Sidebars with interactive controls (sliders, family pickers, dynamic control areas)
    // stay visible in board mode — students and teachers need them.
    var sidebar = document.querySelector('.tool-sidebar');
    var sidebarIsInfoOnly = sidebar && !sidebar.querySelector(
      'input[type="range"], input[type="number"], canvas, select, '
      + '.slider-grid, #slider-area, .family-grid, .piece-controls, #controls-area'
    );

    // ── Fullscreen API ────────────────────────────────────────────
    function requestFS() {
      var el = document.documentElement;
      try { (el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen || el.msRequestFullscreen).call(el); } catch (e) {}
    }
    function releaseFS() {
      try { (document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen).call(document); } catch (e) {}
    }
    function isFS() {
      return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement);
    }

    // ── Enter ─────────────────────────────────────────────────────
    function enter() {
      active = true;
      document.body.classList.add('board-mode');  // hook for board-scaling CSS

      // Hide nav + static chrome
      ALWAYS_HIDE.forEach(function (sel) {
        var el = document.querySelector(sel);
        if (!el) return;
        saved[sel] = el.style.display;
        el.style.setProperty('display', 'none', 'important');
      });

      // Hide info-only sidebar (keep control sidebars intact)
      if (sidebarIsInfoOnly) {
        saved._sb = sidebar.style.display;
        sidebar.style.setProperty('display', 'none', 'important');
      }

      // Expand tool-page to fill screen
      var tp = document.querySelector('.tool-page');
      if (tp) {
        saved._tpH = tp.style.height;
        saved._tpD = tp.style.display;
        saved._tpG = tp.style.gridTemplateColumns;
        tp.style.setProperty('height', '100vh', 'important');
        // Only collapse to single column when sidebar is hidden
        if (sidebarIsInfoOnly) {
          tp.style.setProperty('display', 'block', 'important');
          tp.style.gridTemplateColumns = '';
        }
      }

      // Expand tool-main
      var tm = document.querySelector('.tool-main');
      if (tm) {
        saved._tmB = tm.style.borderRight;
        saved._tmH = tm.style.height;
        saved._tmO = tm.style.overflow;
        if (sidebarIsInfoOnly) {
          tm.style.setProperty('border-right', 'none', 'important');
          tm.style.setProperty('height', '100vh', 'important');
        } else {
          // Control sidebar kept: just let tool-page height drive it
          tm.style.setProperty('height', '100%', 'important');
        }
        tm.style.overflow = 'hidden';
      }

      exitBtn.style.display = 'block';
      navBtn.style.display  = 'block';
      btn.style.background = '#1d1a14'; btn.style.color = '#f6f1e4'; btn.style.borderColor = '#1d1a14';
      requestFS();
      setTimeout(function () { window.dispatchEvent(new Event('resize')); }, 80);
    }

    // ── Exit ──────────────────────────────────────────────────────
    function exit() {
      active = false;
      document.body.classList.remove('board-mode');

      ALWAYS_HIDE.forEach(function (sel) {
        var el = document.querySelector(sel);
        if (!el) return;
        el.style.removeProperty('display');
        if (saved[sel]) el.style.display = saved[sel];
      });

      if (sidebarIsInfoOnly && sidebar) {
        sidebar.style.removeProperty('display');
        if (saved._sb) sidebar.style.display = saved._sb;
      }

      var tp = document.querySelector('.tool-page');
      if (tp) {
        tp.style.removeProperty('height'); tp.style.removeProperty('display');
        if (saved._tpH) tp.style.height             = saved._tpH;
        if (saved._tpD) tp.style.display            = saved._tpD;
        if (saved._tpG) tp.style.gridTemplateColumns = saved._tpG;
      }
      var tm = document.querySelector('.tool-main');
      if (tm) {
        tm.style.removeProperty('border-right'); tm.style.removeProperty('height');
        if (saved._tmB) tm.style.borderRight = saved._tmB;
        if (saved._tmH) tm.style.height      = saved._tmH;
        if (saved._tmO) tm.style.overflow    = saved._tmO;
      }

      exitBtn.style.display = 'none';
      navBtn.style.display  = 'none';
      btn.style.background = ''; btn.style.color = '#999'; btn.style.borderColor = '#999';
      if (isFS()) releaseFS();
      setTimeout(function () { window.dispatchEvent(new Event('resize')); }, 80);
    }

    // ── Quick-nav panel (teacher tool picker) ─────────────────────
    // Minimal tool data — name, unit, href — embedded for self-containment
    var NAV_TOOLS = [
      {n:'Systems Explorer',u:'U1',h:'systems-explorer.html'},
      {n:'Function X-Ray',u:'U1',h:'function-xray.html'},
      {n:'Inequality Region Explorer',u:'U1',h:'inequality-explorer.html'},
      {n:'Quadratic Slider Studio',u:'U1',h:'quadratic-slider.html'},
      {n:'Substitution Stepper',u:'U1',h:'substitution-stepper.html'},
      {n:'Elimination Race',u:'U1',h:'elimination-race.html'},
      {n:'Factoring Quadratics Lab',u:'U1',h:'factoring-lab.html'},
      {n:'Piecewise Function Grapher',u:'U1',h:'piecewise-grapher.html'},
      {n:'Absolute Value Grapher',u:'U2',h:'abs-value-grapher.html'},
      {n:'Transformations Explorer',u:'U2',h:'transformations.html'},
      {n:'Negative Exponent Flipper',u:'U2',h:'neg-exponent-flipper.html'},
      {n:'Difference of Squares',u:'U2',h:'diff-of-squares.html'},
      {n:'Difference of Cubes',u:'U2',h:'diff-of-cubes.html'},
      {n:'Parent Function Atlas',u:'U2',h:'parent-function-atlas.html'},
      {n:'Complex Number Explorer',u:'U3',h:'complex-plane.html'},
      {n:'Imaginary Number Sandbox',u:'U3',h:'imaginary-sandbox.html'},
      {n:'Quadratic Standard Form',u:'U3',h:'quadratic-standard.html'},
      {n:'Quadratic Forms Explorer',u:'U3',h:'quadratic-forms-explorer.html'},
      {n:'Complete the Square Trainer',u:'U3',h:'complete-square.html'},
      {n:'Rational Expression Builder',u:'U3',h:'rational-expressions.html'},
      {n:'Quadratic Word Problems',u:'U3',h:'quadratic-word-problems.html'},
      {n:'Rationalizing Denominators',u:'U3',h:'rationalizing-denominators.html'},
      {n:'Composition & Inverse Lab',u:'U4',h:'composition-inverse.html'},
      {n:'Composition Machine',u:'U4',h:'composition.html'},
      {n:'Inverse Function Revealer',u:'U4',h:'inverse-function.html'},
      {n:'Cubic & Radical Grapher',u:'U4',h:'cubic-radical.html'},
      {n:'Rational Exponents Tower',u:'U4',h:'rational-exponents.html'},
      {n:'Log ↔ Exp Mirror Explorer',u:'U5',h:'log-exp-mirror.html'},
      {n:'Exponential Function Explorer',u:'U5',h:'exponential-explorer.html'},
      {n:'Growth Race',u:'U5',h:'growth-race.html'},
      {n:'Log ↔ Exponential Converter',u:'U5',h:'log-converter.html'},
      {n:'Log Properties Sandbox',u:'U5',h:'log-properties.html'},
      {n:'Exponential Equation Solver',u:'U5',h:'exponential-equation-solver.html'},
      {n:'Exponential Model Builder',u:'U5',h:'exponential-model-builder.html'},
      {n:'Rational Function Behavior',u:'U6',h:'rational-behavior.html'},
      {n:'Polynomial Root Sculptor',u:'U6',h:'polynomial-roots.html'},
      {n:'Polynomial Sketch Pad',u:'U6',h:'polynomial-sketch.html'},
      {n:'Rational Simplifier',u:'U6',h:'rational-simplifier.html'},
      {n:'Adding Rational Expressions',u:'U6',h:'adding-rationals.html'},
      {n:'Rational Mult/Div Stepper',u:'U6',h:'rational-multdiv.html'},
      {n:'Solving Rational Equations',u:'U6',h:'rational-equations.html'},
      {n:'Polynomial Division Stepper',u:'U6',h:'polynomial-division-stepper.html'},
      {n:'Unit Circle Wave Sync',u:'U7',h:'unit-circle-wave.html'},
      {n:'Trig Function Explorer',u:'U7',h:'trig-explorer.html'},
      {n:'Unit Circle Walker',u:'U7',h:'unit-circle.html'},
      {n:'Sine/Cosine Graph Builder',u:'U7',h:'sine-cosine-builder.html'},
      {n:'SOH CAH TOA Triangle Solver',u:'U7',h:'soh-cah-toa.html'},
      {n:'Box Plot Builder',u:'U9',h:'box-plot-builder.html'},
      {n:'Probability Rules Sandbox',u:'U9',h:'probability-sandbox.html'},
      {n:'Sampling Bias Lab',u:'U9',h:'sampling-bias-lab.html'},
    ];
    var UNIT_COLORS = {U1:'#d94f2a',U2:'#2a6fb4',U3:'#8b4513',U4:'#2a8a4a',U5:'#8f6c00',U6:'#7a2a8a',U7:'#1a8a8a',U9:'#5a6a7a'};

    // ── "⊞ tools" nav button (shown in board mode, top-left) ─────
    var navBtn = document.createElement('button');
    navBtn.id   = 'fs-nav';
    navBtn.type = 'button';
    navBtn.innerHTML = '&#x229E; tools';
    navBtn.style.cssText = 'display:none;position:fixed;top:14px;left:16px;z-index:99999;'
      + 'font-family:Lexend,system-ui,sans-serif;font-size:14px;'
      + 'background:rgba(29,26,20,.85);color:#f6f1e4;'
      + 'border:none;border-radius:5px;padding:6px 14px;cursor:pointer;';
    document.body.appendChild(navBtn);

    // ── Panel overlay ────────────────────────────────────────────
    var panel = document.createElement('div');
    panel.id  = 'fs-nav-panel';
    panel.style.cssText = 'display:none;position:fixed;inset:0;z-index:199999;'
      + 'background:rgba(15,12,8,.92);overflow-y:auto;padding:20px 16px 40px;';

    // Panel header
    var panelHead = document.createElement('div');
    panelHead.style.cssText = 'display:flex;align-items:center;justify-content:space-between;'
      + 'margin-bottom:20px;';
    var panelTitle = document.createElement('div');
    panelTitle.style.cssText = 'font-family:Lexend,sans-serif;font-size:18px;font-weight:700;color:#f6f1e4;';
    panelTitle.textContent = 'Go to tool';
    var closePanel = document.createElement('button');
    closePanel.type = 'button';
    closePanel.innerHTML = '&#x2715;';
    closePanel.style.cssText = 'background:none;border:none;color:#f6f1e4;font-size:22px;cursor:pointer;padding:4px 8px;';
    panelHead.appendChild(panelTitle);
    panelHead.appendChild(closePanel);
    panel.appendChild(panelHead);

    // Current tool path (to highlight active)
    var currentHref = location.pathname.split('/').pop();

    // Group by unit
    var units = [];
    NAV_TOOLS.forEach(function(t) { if (units.indexOf(t.u) < 0) units.push(t.u); });
    units.forEach(function(unit) {
      var col = UNIT_COLORS[unit] || '#666';
      var sec = document.createElement('div');
      sec.style.cssText = 'margin-bottom:18px;';

      var hdr = document.createElement('div');
      hdr.style.cssText = 'font-family:Lexend,sans-serif;font-size:12px;font-weight:700;'
        + 'text-transform:uppercase;letter-spacing:.08em;color:' + col + ';'
        + 'margin-bottom:8px;padding-left:4px;';
      hdr.textContent = unit;
      sec.appendChild(hdr);

      var grid = document.createElement('div');
      grid.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:7px;';

      NAV_TOOLS.filter(function(t){ return t.u === unit; }).forEach(function(t) {
        var tb = document.createElement('a');
        tb.href = t.h;
        var isCurrent = t.h === currentHref;
        tb.style.cssText = 'display:block;padding:10px 14px;border-radius:5px;text-decoration:none;'
          + 'font-family:Lexend,sans-serif;font-size:14px;font-weight:' + (isCurrent ? '700' : '400') + ';'
          + 'background:' + (isCurrent ? col : 'rgba(255,255,255,.08)') + ';'
          + 'color:' + (isCurrent ? '#fff' : '#e8e0d0') + ';'
          + 'border:1.5px solid ' + (isCurrent ? col : 'rgba(255,255,255,.12)') + ';'
          + 'transition:background .1s;';
        tb.textContent = t.n;
        tb.addEventListener('mouseover', function() {
          if (!isCurrent) tb.style.background = 'rgba(255,255,255,.16)';
        });
        tb.addEventListener('mouseout', function() {
          if (!isCurrent) tb.style.background = 'rgba(255,255,255,.08)';
        });
        grid.appendChild(tb);
      });
      sec.appendChild(grid);
      panel.appendChild(sec);
    });
    document.body.appendChild(panel);

    function openPanel()  { panel.style.display = 'block'; }
    function closePanel_() { panel.style.display = 'none'; }

    navBtn.addEventListener('click', openPanel);
    closePanel.addEventListener('click', closePanel_);
    panel.addEventListener('click', function(e) {
      if (e.target === panel) closePanel_();
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && panel.style.display !== 'none') closePanel_();
    });

    btn.addEventListener('click', function () { active ? exit() : enter(); });
    exitBtn.addEventListener('click', exit);

    // Only exit board mode via Escape if we actually entered native fullscreen
    // (avoids the race where requestFullscreen is blocked and fires change immediately)
    ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange']
      .forEach(function (ev) {
        document.addEventListener(ev, function () {
          if (active && !isFS()) exit();
        });
      });
  }

  // Run immediately if DOM is ready, otherwise wait for it
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
