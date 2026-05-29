# Codebase Guide for Agents

This document explains the repository structure, conventions, and patterns for anyone (human or agent) working on this project. Read this before touching any file.

---

## What the project is

**Algebra 2 Playgrounds** is a fully static, zero-dependency, GitHub Pages site of 50 interactive math tools for an Algebra 2 classroom. There is no build step, no bundler, no framework, and no backend. Everything is plain HTML, CSS, and vanilla JavaScript.

**Live site:** `https://saberkhan372.github.io/Algebra2B/`  
**Local path:** `/Users/saberkhan/Documents/coding/Algebra2B`  
**Local preview:** `python3 -m http.server 3333` → `http://127.0.0.1:3333/`

---

## File structure

```
Algebra2B/
├── index.html          ← Homepage: TOOLS array, unit sections, filter logic, hover previews
├── map.html            ← Visual course roadmap (horizontal scroll unit cards)
├── about.html          ← Teacher letter, FAQ
├── u1.html – u7.html   ← Unit landing pages
├── u9.html             ← Statistics & Probability unit page
├── styles.css          ← Entire design system (CSS vars, layout, component classes)
├── manifest.json       ← PWA manifest
├── sw.js               ← Service worker (offline caching)
├── tools/              ← 50 standalone tool pages (one file per tool)
├── video-learning/     ← Transcripts, PDF extracts, contact sheets, batch insights
├── algebra-2-tools/    ← Claude design artifacts — reference only, not served to students
├── PLAN.md             ← Build plan, completed work log, agent lanes
├── CODEBASE.md         ← This file
└── .claude/            ← Agent memory files (memory.md, project_overview.md, design_constraints.md)
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

**When adding a new tool**, append an entry here. The homepage JS (`buildSections`) auto-populates all unit sections from this array. You do NOT manually write HTML cards.

### Hover preview system

`index.html` contains a large `const R = { ... }` object mapping `prev` keys to canvas renderer functions. Each renderer receives `(ctx, W, H, t)` and draws an animated mini-preview. When you add a new tool, either reuse an existing `prev` key (if the animation is appropriate) or add a new renderer.

---

## Unit system

| Unit | Name | Dates | Color |
|---|---|---|---|
| U1 | Systems & Quadratics | Sept 2 – Sept 26 | `#d94f2a` (orange-red) |
| U2 | Graphs & Exponents | Sept 29 – Oct 17 | `#2a6fb4` (blue) |
| U3 | Rationals & Complex | Oct 20 – Nov 7 | `#8b4513` (brown) |
| U4 | Rational Exponents | Nov 10 – Dec 5 | `#2a8a4a` (green) |
| U5 | Exponential & Log | January – February | `#b08800` (gold) |
| U6 | Rationals & Polynomials | February – March | `#7a2a8a` (purple) |
| U7 | Trigonometry | March – April | `#1a8a8a` (teal) |
| U9 | Statistics & Probability | April – May | `#5a6a7a` (slate) |

U8 exists in the video-learning materials (rational functions taught in 24-25) but is folded into U6 on this site. There is no `u8.html`.

---

## Tool kinds

| Kind | CSS class | Meaning |
|---|---|---|
| `explorer` | `kind-explorer` | Multi-mode drag-and-discover; students manipulate and observe |
| `visualizer` | `kind-visualizer` | Parameterized canvas showing a concept move |
| `practice` | `kind-practice` | Step-by-step problem trainer with hints and feedback |
| `game` | `kind-game` | Timed challenge or scoring mechanic |
| `reference` | `kind-reference` | Formula sheets and lookup tools |

Explorers are the "flagship" kind — they get the purple border accent on the homepage.

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
<body class="paper-[grid|lined|dots]">  <!-- rotate for variety -->

  <nav class="site-nav"> ... </nav>

  <div class="tool-page">
    <main class="tool-main">
      <!-- canvas or interactive widget -->
    </main>
    <aside class="tool-sidebar">
      <!-- breadcrumb back to unit page -->
      <!-- "Try This" prompts -->
      <!-- "Key Ideas" section -->
      <!-- related-tool links -->
    </aside>
  </div>

  <script>
    // all tool logic inline
  </script>
</body>
</html>
```

**Breadcrumb pattern** (always include):
```html
<a href="../u1.html" class="breadcrumb">← U1: Systems & Quadratics</a>
```

**Canvas DPR pattern** (always use for canvas tools):
```js
const DPR = window.devicePixelRatio || 1;
canvas.width  = canvas.offsetWidth  * DPR;
canvas.height = canvas.offsetHeight * DPR;
const ctx = canvas.getContext('2d');
ctx.scale(DPR, DPR);
```

---

## CSS design system (styles.css)

Never hardcode colors in tool HTML. Use CSS variables and existing component classes.

### Key CSS variables
```css
var(--ink)        /* main text */
var(--ink-2)      /* secondary text / borders */
var(--ink-soft)   /* muted text */
var(--paper)      /* page background */
var(--paper-2)    /* slightly darker paper */
var(--paper-3)    /* even darker */
var(--accent)     /* orange-red highlight */
var(--redline)    /* margin-line red */
```

### Key component classes
| Class | What it does |
|---|---|
| `sk-box` | Hand-drawn border box (slight rotation, shadow) |
| `sk-box-thick` | Thicker border variant |
| `sk-box-dashed` | Dashed border variant |
| `sk-pill` | Filter button pill |
| `sk-tag` | Inline label chip |
| `sk-tag kind-[explorer|visualizer|practice|game|reference]` | Color-coded kind chip |
| `f-display` | Caveat font — big headings |
| `f-hand` | Patrick Hand — body text |
| `f-marker` | Permanent Marker — labels, eyebrows |
| `f-mono` | JetBrains Mono — code, counts |
| `tool-page` | Two-col layout wrapper |
| `tool-main` | Left/main column |
| `tool-sidebar` | Right sidebar |
| `paper-grid` | Background with grid lines |
| `paper-lined` | Background with horizontal rules |
| `paper-dots` | Background with dot grid |
| `btn` / `btn accent` | Action buttons |
| `lesson-row` | Row in a unit page lesson stack |
| `tool-card` | Homepage grid card |

---

## Sync checklist (after adding or modifying a tool)

1. **TOOLS array** in `index.html` — add/update the entry with all 9 fields correct.
2. **Unit page** (`u1.html`…`u9.html`) — add/update the lesson row and link it live.
3. **PLAN.md** current state — update tool count and list.
4. **Verify**: run the inline-script parse check and tool count commands from `.claude/design_constraints.md`.

The homepage card count and `tools/*.html` file count should match unless a tool is intentionally hidden/deprecated.

---

## Agent lanes

Three agents have distinct roles — don't cross-assign.

### Claude
Handles anything requiring:
- Pedagogical judgment (what confuses students, how to sequence a reveal)
- Novel interaction design (custom animations, multi-panel canvas tools)
- Math correctness in edge cases (asymptotes, domain restrictions, extraneous solutions)
- Teacher voice and framing ("Mr. K" tone in sidebars, Try This prompts)

### ChatGPT
Handles anything that is:
- Static analysis across files (counts, stale links, coming-soon vs. live mismatches)
- Consistency checks (do unit pages match the TOOLS array?)
- Doc and plan review (is PLAN.md behind reality?)
- Pre-build review (naming conflicts, existing patterns to follow)
- Post-build audit (verify unit page, TOOLS array, and PLAN.md are all updated)

ChatGPT reports findings — Claude or Codex act on them. ChatGPT does not edit HTML.

### Codex
Handles anything that is:
- Structurally repetitive (new unit pages following the exact same pattern)
- Data entry (problem banks for stepper tools once the template exists)
- Boilerplate plumbing (nav links, breadcrumbs, related-tool links, TOOLS array entry)
- Copy-paste extension (adding a slider to an existing tool, extending a quiz bank)

Do NOT ask Codex to invent: pedagogical framing, Try This questions, Key Ideas copy, or any tool where math edge cases matter.

---

## Common pitfalls

- **Stale counts** — the homepage "all N" button text and `(N)` count are auto-derived from `TOOLS.length` in JS. The HTML placeholder text doesn't matter, but the TOOLS array must be complete.
- **Missing `prev` key** — if you add a TOOLS entry with a `prev` value that doesn't exist in the `R` renderer map, the hover preview silently shows nothing. Either reuse an existing key or add a renderer.
- **`localStorage`** — do not use it except in `tools/elimination-race.html` (personal best), which is the only intentional exception.
- **Inline color hex values** — only acceptable inside canvas drawing code (e.g., `ctx.fillStyle = '#d94f2a'`). Not acceptable as HTML style attributes elsewhere — use CSS vars or component classes.
- **Orphan tool files** — `tools/exponential-equations.html` and `tools/sincos-grapher.html` are deprecated prototypes not in student navigation. Don't link to them.
