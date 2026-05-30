# Codebase Guide for Agents

This document explains the repository structure, conventions, and patterns for anyone (human or agent) working on this project. Read this before touching any file.

---

## What the project is

**Algebra 2 Playgrounds** is a fully static, zero-dependency, GitHub Pages site of 62 interactive math tools for an Algebra 2 classroom. There is no build step, no bundler, no framework, and no backend. Everything is plain HTML, CSS, and vanilla JavaScript.

**Live site:** `https://saberkhan372.github.io/Algebra2B/`  
**Local path:** `/Users/saberkhan/Documents/coding/Algebra2B`  
**Local preview:** `python3 -m http.server 3333` → `http://127.0.0.1:3333/`

---

## File structure

```
Algebra2B/
├── index.html              ← Homepage: TOOLS array, unit sections, 3 filter rows, progress bars
├── map.html                ← Visual course roadmap (horizontal scroll unit cards)
├── about.html              ← Teacher letter, FAQ
├── 404.html                ← Friendly 404 page (GitHub Pages serves automatically)
├── offline.html            ← Offline fallback (service worker serves when network fails)
├── u1.html – u7.html       ← Unit landing pages
├── u9.html                 ← Statistics & Probability unit page
├── styles.css              ← Entire design system (board/print/wide-screen rules included)
├── manifest.json           ← PWA manifest
├── sw.js                   ← Service worker — precaches all 62 tools + scripts
├── tools/                  ← 62 standalone tool pages + shared scripts
├── tools/url-state.js      ← URL hash state: UrlState.load/save/auto/copyBtn
├── tools/progress.js       ← Visited badges, start-here, share button, print button
├── tools/related.js        ← "TRY NEXT" section — 3 related tools per tool
├── tools/fullscreen.js     ← Board mode, teacher quick-nav overlay
├── video-learning/         ← Transcripts, PDF extracts, contact sheets, batch insights
├── algebra-2-tools/        ← Claude design artifacts — reference only, not served
├── PLAN.md                 ← Build plan, completed work log, agent lanes
├── CODEBASE.md             ← This file
└── .claude/                ← Agent memory files
```

---

## The TOOLS array (index.html)

The homepage is driven by a single `const TOOLS = [...]` array in `index.html`. Every entry is one card in the tool grid. Each object has:

```js
{
  id:    'sysexp',                          // unique slug, used for hover preview lookup
  prev:  'systems',                         // key into the preview renderer map (R object)
  name:  'Systems Explorer',               // display name on card and in search
  unit:  'U1',                              // one of: U1 U2 U3 U4 U5 U6 U7 U9
  topic: 'Systems',                         // short topic label (appears in search index)
  kind:  'explorer',                        // see Tool kinds below
  diff:  1,                                 // difficulty dots: 1 = easy, 2 = medium, 3 = hard
  code:  'Se',                              // 2-letter code shown in the card icon area
  desc:  'Drag two lines...',               // one-sentence card description (student-facing)
  href:  'tools/systems-explorer.html'      // relative path to the tool file
}
```

**When adding a new tool**, append an entry here. The homepage JS (`buildSections`) auto-populates all unit sections from this array. Unit grids start **collapsed** (`display:none`, arrow `▸`); `applyFilter` auto-expands sections with matches whenever any filter or search is active.

### Hover preview system

`index.html` contains `const R = { ... }` mapping `prev` keys to canvas renderer functions `(ctx, W, H, t)`. If you add a new tool, either reuse an existing `prev` key or add a new renderer.

---

## Unit system

| Unit | Name | Dates | Color |
|---|---|---|---|
| U1 | Systems & Quadratics | Sept 2 – Sept 26 | `#d94f2a` |
| U2 | Graphs & Exponents | Sept 29 – Oct 17 | `#2a6fb4` |
| U3 | Rationals & Complex | Oct 20 – Nov 7 | `#8b4513` |
| U4 | Rational Exponents | Nov 10 – Dec 5 | `#2a8a4a` |
| U5 | Exponential & Log | January – February | `#8f6c00` |
| U6 | Rationals & Polynomials | February – March | `#7a2a8a` |
| U7 | Trigonometry | March – April | `#1a8a8a` |
| U9 | Statistics & Probability | April – May | `#5a6a7a` |

U8 exists in video-learning materials but is folded into U6 on this site. There is no `u8.html`.

---

## Tool kinds

| Kind | CSS var | Hex | Meaning |
|---|---|---|---|
| `explorer` | `--k-explorer` | `#7c4db5` | Multi-mode drag-and-discover |
| `visualizer` | `--k-visualizer` | `#2a6fb4` | Parameterized canvas |
| `practice` | `--k-practice` | `#277343` | Step-by-step trainer |
| `game` | `--k-game` | `#9c5800` | Timed challenge / scoring |
| `reference` | `--k-reference` | `#5f5f5f` | Formula lookup |

Kind colors live in `--k-*` CSS variables in `styles.css`. Use these in tool HTML — never hardcode the hex. All are ≥4.5 contrast on `--paper`.

---

## Tool page anatomy

All tool pages live in `tools/` and share this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>[Tool Name] — A2 Playgrounds</title>
  <link rel="stylesheet" href="../styles.css" />
  <!-- per-tool <style> block for overrides only -->
</head>
<body class="paper-[grid|lined|dots]">

  <nav class="site-nav"> ... </nav>

  <div class="tool-page">
    <main class="tool-main">
      <!-- canvas or interactive widget -->
    </main>
    <aside class="tool-sidebar">
      <!-- breadcrumb, Try This, Key Ideas, related-tool links -->
    </aside>
  </div>

  <script> /* all tool logic inline */ </script>
  <!-- Shared scripts — always in this exact order, always last -->
  <script src="url-state.js"></script>
  <script src="progress.js"></script>
  <script src="related.js"></script>
  <script src="fullscreen.js"></script>
</body>
</html>
```

**Breadcrumb** (always include):
```html
<a href="../u1.html" class="breadcrumb">← U1: Systems & Quadratics</a>
```

**Canvas DPR pattern** (always use):
```js
const DPR = window.devicePixelRatio || 1;
canvas.width  = canvas.offsetWidth  * DPR;
canvas.height = canvas.offsetHeight * DPR;
const ctx = canvas.getContext('2d');
ctx.scale(DPR, DPR);
```

**Draggable canvas CSS** (always include when the canvas handles touch):
```css
#my-canvas { touch-action: none; }
```

---

## Shared scripts — what each does

Five shared scripts exist; not all are on every page (see table below). They are self-contained IIFEs; none require configuration from the tool page.

| Script | Every tool? | Purpose |
|---|---|---|
| `url-state.js` | Yes | URL hash state encode/decode |
| `progress.js` | Yes | Visited badges, share/print buttons, `UrlState.auto()` |
| `replay.js` | Slider tools only | Record/play/share slider sessions |
| `related.js` | Yes | "TRY NEXT" injection |
| `fullscreen.js` | Yes | Board mode, teacher quick-nav |

**Script load order** (always maintain this sequence):
```html
<script src="save-png.js"></script>   <!-- canvas tools only -->
<script src="url-state.js"></script>
<script src="progress.js"></script>
<script src="replay.js"></script>     <!-- tools with input[type=range][id] only -->
<script src="related.js"></script>
<script src="fullscreen.js"></script>
```

### url-state.js
- `UrlState.load()` — reads `#s=...` URL hash, returns plain object or null
- `UrlState.save(obj)` — encodes object into URL hash (no page reload)
- `UrlState.auto()` — auto-wires ALL `input[type="range"][id]` elements: restores state from hash on load (dispatches `input` events), saves on change (debounced 250ms). Called by `progress.js` on tool pages.
- `UrlState.copyBtn()` — returns a styled "🔗 copy link" button element

### progress.js
Runs on tool pages AND homepage/unit pages. Detects context from `location.pathname`.

**On tool pages:**
- Marks tool href as visited in `localStorage` (`a2pg-visited` key, Set of hrefs)
- Injects `🔗 copy link` + `🖨 print` buttons at top of `.tool-sidebar`
- Sets `data-print-title` on sidebar for `@media print` title display
- Calls `UrlState.auto()` (after tool's own scripts have registered listeners)
- **Auto-collapses `.how-to-box`** (HOW TO USE + TRY THIS) on the 25 tools that use it; starts closed; state saved in `localStorage` key `a2pg-htu`

**On unit pages:**
- **Auto-collapses `.lesson-stack`** into a "LESSON SCHEDULE (N days) ▸" header; starts closed; state saved in `localStorage` key `a2pg-ls`

**On homepage / unit pages:**
- Reads `a2pg-visited` and adds `✓` visited badge to matching `.tool-card` elements
- Adds orange `★ start here` banner to one designated card per unit

**Start-here tools (one per unit):**
`systems-explorer` (U1), `abs-value-grapher` (U2), `imaginary-sandbox` (U3), `composition` (U4), `log-exp-mirror` (U5), `rational-simplifier` (U6), `unit-circle` (U7), `box-plot-builder` (U9)

**Exposed on `window.A2PG`:**
- `A2PG.applyBadges()` — called by `index.html` after `buildSections()` to tag homepage cards

### replay.js
Included on the 19 tools that have `input[type="range"][id]` sliders. Silently exits on all other pages.
- REPLAY panel starts **collapsed** — shows `"replay ▸"` header; click to expand

- **Record:** `⏺ rec` starts a 50ms poll that captures slider state whenever values change
- **Stop + normalise:** gaps > 2 s are capped; timeline stored as `[{t, v:[…]}, …]`
- **Play:** `▶ play` animates through captured frames via `requestAnimationFrame`
- **Share:** `🔗 share` encodes the timeline as `[[t, v0, v1, …], …]` → base64url → `#r=…` in the URL
- **Auto-play:** if the page URL contains `#r=…`, the first frame is applied immediately and playback starts after 600 ms; `■ skip` jumps to the final state
- Injects a REPLAY panel at the bottom of `.tool-sidebar` (above TRY NEXT)
- Uses a separate `#r=` hash key — does not conflict with `UrlState`'s `#s=` key

### related.js
- Embeds full 62-tool dataset (no API call)
- Detects current tool from URL, finds 3 related tools: same-unit different-kind first (explorers preferred), then same-topic cross-unit
- Injects `TRY NEXT` section at bottom of `.tool-sidebar`
- Handles both `/foo.html` and `/foo` URL formats

### fullscreen.js
- Injects `⛶ board` button into `.nav-links`
- **Enter board mode:** hides nav + chrome, expands canvas to 100vh, adds `body.board-mode` class for CSS scaling
- **Info sidebars** (Key Ideas, HOW TO USE, TRY THIS) → hidden in board mode
- **Control sidebars** (sliders, equations, family pickers) → kept visible. Detection selector: `input[type="range"], input[type="number"], canvas, select, .slider-grid, #slider-area, .family-grid, .piece-controls, #controls-area`
- Injects `⊞ tools` button (shown in board mode, top-left) → opens full-screen panel listing all 62 tools grouped by unit as large tap targets
- Syncs with native Fullscreen API; `Escape` exits board mode

---

## Board mode (tools/fullscreen.js)

Every tool page includes `<script src="fullscreen.js"></script>` as the last script tag. This injects a `⛶ board` button into `.nav-links` at runtime.

**Behavior:**
- Clicking `⛶ board`: hides nav + chrome, expands canvas to 100vh, shows `✕ exit board` top-right, adds `body.board-mode` class (triggers scaling CSS), triggers native fullscreen API.
- **Info sidebars** (Key Ideas, Try This) are hidden — canvas fills full width.
- **Control sidebars** (sliders, equation editors, family pickers) stay visible — teachers need them during class. Detection: sidebar with any of `input[type="range"]`, `input[type="number"]`, `canvas`, `select`, `.slider-grid`, `#slider-area`, `.family-grid`, `.piece-controls`, or `#controls-area` is treated as a control sidebar and kept visible.
- `body.board-mode` in `styles.css` scales control-sidebar text, enlarges sliders (32px touch target), scales exit button.

---

## CSS design system (styles.css)

Never hardcode colors in tool HTML. Use CSS variables and existing component classes.

### Key CSS variables
```css
var(--ink)          /* main text — #1d1a14 */
var(--ink-2)        /* secondary text / borders — #322d24 */
var(--ink-soft)     /* muted text — #585044 (~7:1 on paper) */
var(--paper)        /* page background — #f6f1e4 */
var(--paper-2)      /* slightly darker paper */
var(--paper-3)      /* even darker */
var(--accent)       /* orange-red — #d94f2a */
var(--redline)      /* margin-line red */
var(--f-body)       /* Lexend — clean reading font for UI text */
var(--k-explorer)   /* purple #7c4db5 — kind chip color */
var(--k-visualizer) /* blue #2a6fb4 */
var(--k-practice)   /* green #277343 */
var(--k-game)       /* amber #9c5800 */
var(--k-reference)  /* gray #5f5f5f */
```

### Key component classes
| Class | What it does |
|---|---|
| `sk-box` | Hand-drawn border box (slight rotation, shadow) |
| `sk-box-thick` | Thicker border variant |
| `sk-box-dashed` | Dashed border variant |
| `sk-pill` | Filter button pill |
| `sk-tag` | Inline label chip |
| `sk-tag kind-[explorer\|visualizer\|practice\|game\|reference]` | Outlined kind chip with color dot |
| `f-display` | Caveat font — big headings |
| `f-hand` | Lexend — body/reading text (was Patrick Hand) |
| `f-marker` | Permanent Marker — labels, eyebrows |
| `f-mono` | JetBrains Mono — code, math |
| `tool-page` | Two-col layout wrapper |
| `tool-main` | Left/main column |
| `tool-sidebar` | Right sidebar |
| `paper-grid` | Background with grid lines |
| `paper-lined` | Background with horizontal rules |
| `paper-dots` | Background with dot grid |
| `btn` / `btn accent` | Action buttons |
| `lesson-row` | Row in a unit page lesson stack |
| `tool-card` | Homepage grid card |
| `sk-coll-hdr` | Collapsible section header — adds toggle arrow, cursor pointer |
| `sk-coll-body` | Collapsible section body — `max-height` + `opacity` transition |
| `sk-closed` | Applied to both hdr and body when collapsed; arrow rotates -90° |

---

## Sync checklist (after adding or modifying a tool)

1. **TOOLS array** in `index.html` — add/update entry with all 9 fields (`id`, `prev`, `name`, `unit`, `topic`, `kind`, `diff`, `code`, `desc`, `href`).
2. **Unit page** (`u1.html`…`u9.html`) — add/update the lesson row and link it live; add tool card to the grid.
3. **Shared scripts** — last tags must be in order: `url-state.js`, `progress.js`, `replay.js` *(if sliders)*, `related.js`, `fullscreen.js`. Optionally `save-png.js` *(if canvas)* before `url-state.js`.
4. **If canvas is draggable** — add `touch-action: none` to the canvas CSS rule.
5. **If the tool has `input[type="range"][id]` sliders** — add `<script src="replay.js"></script>` between `progress.js` and `related.js`.
6. **Update `related.js`** — add the new tool to the `TOOLS` array embedded in that file (same 8 fields minus `prev` and `desc`).
7. **PLAN.md** current state — update tool count and list.
8. **sw.js** — add the new tool's path to `PRECACHE_URLS` and bump `CACHE_VERSION`.
9. **Markdown docs** — update tool counts in `README.md`, `CODEBASE.md`, `.claude/project_overview.md`, `.claude/memory.md`, `memory/project_overview.md`.
9. **Verify**: run the inline-script parse check from `.claude/design_constraints.md`.

---

## Agent lanes

### Claude
- Pedagogical judgment (what confuses students, how to sequence a reveal)
- Novel interaction design (custom animations, multi-panel canvas tools)
- Math correctness in edge cases (asymptotes, domain restrictions, extraneous solutions)
- Teacher voice ("Mr. K" tone in sidebars, Try This prompts)

### ChatGPT
- Static analysis across files (counts, stale links, mismatches)
- Consistency checks (do unit pages match the TOOLS array?)
- Doc and plan review
- Post-build audit (verify unit page, TOOLS array, PLAN.md all updated)

ChatGPT reports findings — Claude or Codex act on them. ChatGPT does not edit HTML.

### Codex
- Structurally repetitive work (new unit pages, data entry, boilerplate plumbing)
- Copy-paste extension (adding a slider to an existing tool, extending a quiz bank)

Do NOT ask Codex to invent: pedagogical framing, Try This questions, Key Ideas copy, or any tool where math edge cases matter.

---

## Common pitfalls

- **Stale counts** — homepage "all N" button is auto-derived from `TOOLS.length`. HTML placeholder doesn't matter, but the TOOLS array must be complete.
- **Missing `prev` key** — hover preview silently shows nothing. Reuse an existing key or add a renderer to the `R` object in `index.html`.
- **`localStorage`** — do not use it except `tools/elimination-race.html` (personal best) and `a2pg-visited` (managed by progress.js). Do not read/write `a2pg-visited` from tool pages — progress.js handles it.
- **Canvas labels stay handwritten** — `ctx.font` strings in canvas drawing code intentionally keep `'Patrick Hand'`. Do not change these.
- **Inline color hex values** — only acceptable inside canvas drawing code (`ctx.fillStyle = '#d94f2a'`). Use CSS vars everywhere else.
- **Kind colors** — use `--k-*` CSS vars, not hardcoded hex.
- **related.js TOOLS list** — this embedded list must be kept in sync with `index.html`'s TOOLS array when tools are added or removed.
- **sw.js cache version** — bump `CACHE_VERSION` whenever you add/change a file that should be precached, or returning visitors will see stale content.
- **URL state + sliders** — `UrlState.auto()` only wires inputs that have BOTH `type="range"` AND an `id` attribute. New tools with sliders must give their inputs explicit IDs for URL state to work.
