# Project Overview

Last updated: 2026-05-30

## Repository

`saberkhan372/Algebra2B` — static GitHub Pages site for Algebra 2 classroom tools.

Local path: `/Users/saberkhan/Documents/coding/Algebra2B`  
Live site: `https://saberkhan372.github.io/Algebra2B/`  
Local preview: `python3 -m http.server 3333` → `http://127.0.0.1:3333/`

## Current State

- Branch: `main` — remote `origin` → `https://github.com/saberkhan372/Algebra2B.git`
- **59 tools** built and integrated across 8 units (all complete).
- **8 unit pages**: `u1.html`–`u7.html` + `u9.html`. All counts accurate.
- `CODEBASE.md` is the orientation doc for agents — read it first.
- `PLAN.md` is the working build plan.

## Main Files

| File | Purpose |
|---|---|
| `index.html` | Homepage: TOOLS array, unit sections, three filter rows, hover previews, progress summary |
| `map.html` | Visual course roadmap |
| `about.html` | Teacher letter, FAQ |
| `u1.html`–`u7.html`, `u9.html` | Unit landing pages |
| `styles.css` | Full shared design system (includes board-mode, print, wide-screen rules) |
| `404.html` | Friendly 404 page (GitHub Pages serves automatically) |
| `offline.html` | Offline fallback (served by service worker) |
| `sw.js` | Service worker v9 — precaches all 59 tools + shared scripts + error pages |
| `tools/url-state.js` | URL hash state encoding/decoding + auto-wiring for range inputs |
| `tools/progress.js` | Visited badges, start-here banners, share/print buttons |
| `tools/related.js` | "TRY NEXT" section injection |
| `tools/fullscreen.js` | Board mode + teacher quick-nav panel |
| `tools/` | 59 standalone tool pages |
| `PLAN.md` | Build plan, completed work, agent lanes |
| `CODEBASE.md` | Agent orientation — all patterns documented |

## Tool Count

59 tools live as of 2026-05-30. The original 50-tool plan is complete. 9 additional tools were added from batch-11/12 video-insight passes. Future additions from teacher requests or continued video-learning analysis. Check `PLAN.md` for queued items.
