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
    btn.style.cssText = 'font-family:"Patrick Hand",cursive;font-size:13px;background:none;'
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
      + 'font-family:"Patrick Hand",cursive;font-size:14px;'
      + 'background:rgba(29,26,20,.85);color:#f6f1e4;'
      + 'border:none;border-radius:5px;padding:6px 14px;cursor:pointer;';
    document.body.appendChild(exitBtn);

    // ── Elements to toggle ─────────────────────────────────────────
    var SELECTORS = ['.site-nav', '.tool-sidebar', '.notebook-binding', '.pacing-banner'];

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
      SELECTORS.forEach(function (sel) {
        var el = document.querySelector(sel);
        if (!el) return;
        saved[sel] = el.style.display;
        el.style.setProperty('display', 'none', 'important');
      });

      var tp = document.querySelector('.tool-page');
      if (tp) {
        saved._tpH = tp.style.height; saved._tpD = tp.style.display; saved._tpG = tp.style.gridTemplateColumns;
        tp.style.setProperty('height', '100vh', 'important');
        tp.style.setProperty('display', 'block', 'important');
        tp.style.gridTemplateColumns = '';
      }
      var tm = document.querySelector('.tool-main');
      if (tm) {
        saved._tmB = tm.style.borderRight; saved._tmH = tm.style.height; saved._tmO = tm.style.overflow;
        tm.style.setProperty('border-right', 'none', 'important');
        tm.style.setProperty('height', '100vh', 'important');
        tm.style.overflow = 'hidden';
      }

      exitBtn.style.display = 'block';
      btn.style.background = '#1d1a14'; btn.style.color = '#f6f1e4'; btn.style.borderColor = '#1d1a14';
      requestFS();
      setTimeout(function () { window.dispatchEvent(new Event('resize')); }, 80);
    }

    // ── Exit ──────────────────────────────────────────────────────
    function exit() {
      active = false;
      SELECTORS.forEach(function (sel) {
        var el = document.querySelector(sel);
        if (!el) return;
        el.style.removeProperty('display');
        if (saved[sel]) el.style.display = saved[sel];
      });

      var tp = document.querySelector('.tool-page');
      if (tp) {
        tp.style.removeProperty('height'); tp.style.removeProperty('display');
        if (saved._tpH) tp.style.height = saved._tpH;
        if (saved._tpD) tp.style.display = saved._tpD;
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
      btn.style.background = ''; btn.style.color = '#999'; btn.style.borderColor = '#999';
      if (isFS()) releaseFS();
      setTimeout(function () { window.dispatchEvent(new Event('resize')); }, 80);
    }

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
