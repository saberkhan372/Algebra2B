# Project Memory

Last updated: 2026-05-30

## What This Project Is

Algebra 2 Playgrounds is a static GitHub Pages site of interactive classroom tools for Algebra 2. Designed around Mr. K's classroom voice with a hand-drawn notebook visual style.

Live site: `https://saberkhan372.github.io/Algebra2B/`  
Local path: `/Users/saberkhan/Documents/coding/Algebra2B`  
Local preview: `python3 -m http.server 3333` → `http://127.0.0.1:3333/`

## Current State (as of 2026-05-29)

- **59 tools** across 8 units (U1–U7, U9). All units complete.
- **8 unit pages**: `u1.html`–`u7.html` + `u9.html`. All counts/statuses accurate.
- Homepage: unit sections collapse by default; filter/search auto-expands matching units; three filter rows (kind / unit / level).

### Shared scripts in `tools/` (loaded by every tool page)

| Script | Purpose |
|---|---|
| `url-state.js` | Encode/decode slider state in URL hash; `UrlState.auto()` auto-wires all `input[type=range][id]` elements |
| `progress.js` | Visited tracking (localStorage), start-here banners, share+print buttons in sidebar |
| `related.js` | Injects "TRY NEXT" section — 3 related tools at bottom of info sidebar |
| `fullscreen.js` | Board mode: `⛶ board` button hides chrome, expands canvas; `⊞ tools` quick-nav panel in board mode |

**Script load order in every tool page:**
```html
<script src="url-state.js"></script>
<script src="progress.js"></script>
<script src="related.js"></script>
<script src="fullscreen.js"></script>
```

### Student-facing improvements added May 2026

- **Board mode** — fullscreen canvas, `⊞ tools` panel lists all 59 tools grouped by unit
- **9 new tools from batch-11/12 video-insight passes**: Inequality Solver (u1/D7), Abs Value Equation Stepper (u1/D7), Point-Slope Form Trainer (u1/D6), Function Notation Evaluator (u1/D8), Literal Equation Isolator (u3/D9), Domain Restriction Sorter (u4/D4), Coterminal & Radians (u7/D2), Exponential Equations Stepper (u5/D6, was orphaned), Sincos Grapher (u7/D3–4, was orphaned)
- **Visited badges** — ✓ badge on cards you've opened (localStorage, no logins)
- **Start here** — orange banner on the best entry-point card per unit
- **Try Next** — 3 related tools at bottom of every info sidebar
- **Share / copy link** — copies canonical GitHub Pages URL (+ slider state if encoded)
- **Print key ideas** — browser print shows only sidebar content (HOW TO USE, TRY THIS)
- **URL state** — slider positions encoded in URL hash; shareable pre-configured examples
- **Quick-nav overlay** — `⊞ tools` in board mode opens full-screen tool picker
- **Difficulty filter** — LEVEL: ●/●●/●●● filter row on homepage
- **Search includes descriptions** — "asymptote" finds relevant tools
- **Search highlighting** — matched text highlighted in yellow
- **Progress summary** — per-unit progress bars in homepage sidebar (shown once ≥1 tool visited)
- **404.html** — friendly page with unit jump chips; served by GitHub Pages automatically
- **offline.html** — served by service worker when network unavailable

### Design system
- Body font: **Lexend** (`--f-body`). Handwriting kept for titles/labels. Canvas `ctx.font` stays handwritten.
- Kind colors: `--k-explorer` through `--k-reference` — canonical, WCAG AA on paper.
- Board mode: `body.board-mode` CSS scales sliders (32px) and sidebar text.
- Wide-screen: ≥1400px sidebar grows 300→400px; ≥1800px → 460px.
- Touch: `touch-action: none` on all 12 draggable canvases.

## Agent Lanes

- **Claude:** pedagogical/conceptual design, novel canvas interactions, math edge cases, teacher voice.
- **ChatGPT:** audits, consistency checks, stale data, plan/doc review, post-build verification.
- **Codex:** repetitive structure, data entry, boilerplate wiring, homepage/unit-page plumbing.

## Good Habits Before Starting

1. `git status --short --branch`
2. Read `CODEBASE.md` — file structure, TOOLS array, shared scripts, design system.
3. Check `PLAN.md` for latest build context.

## Good Habits Before Calling Done

1. TOOLS array entry correct (all 9 fields + `card.dataset.diff` set automatically).
2. Unit page lesson row linked and live.
3. PLAN.md current state updated.
4. New draggable canvas → add `touch-action: none`.
5. Run inline-script parse check from `.claude/design_constraints.md`.
