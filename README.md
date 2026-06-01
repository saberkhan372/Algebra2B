# Algebra 2 Playgrounds

Interactive classroom tools for Algebra 2 — 66 tools across 8 units, built for Mr. K's students at TNDV.

**Live site:** `https://saberkhan372.github.io/Algebra2B/`

## Local preview

```bash
python3 -m http.server 3333
```

Open `http://127.0.0.1:3333/`

## What's here

| Path | What it is |
|---|---|
| `index.html` | Homepage — unit sections, kind / unit / level filter rows, progress summary, 66-tool grid |
| `map.html` | Visual course roadmap — scrollable unit cards |
| `concept-map.html` | Concept subway map — 66 nodes in 8 threads, 20 cross-thread bridges; hover tooltips, click to open tool |
| `shapes.html` | The Graph Shapes — 10 interactive canvases (one per function family) with live equation editor + sliders |
| `about.html` | Teacher letter, FAQ, credits |
| `u1.html` – `u7.html`, `u8.html` | Unit landing pages with lesson stacks and tool cards |
| `404.html` | Friendly 404 page (GitHub Pages serves automatically for broken links) |
| `offline.html` | Offline fallback page (served by service worker when network unavailable) |
| `tools/` | 66 standalone interactive tool pages |
| `tools/url-state.js` | URL hash state — encode slider positions; shareable pre-configured examples |
| `tools/progress.js` | Visited badges, start-here banners, share + print buttons |
| `tools/save-png.js` | `📷 save PNG` button on 31 canvas tools — downloads graph as image |
| `tools/replay.js` | Record / play / share slider sessions as `#r=` replay URLs (19 slider tools) |
| `tools/related.js` | "Try Next" section — 3 related tools injected into every info sidebar |
| `tools/fullscreen.js` | Board mode (`⛶ board`), teacher quick-nav overlay (`⊞ tools`) |
| `styles.css` | Full design system — CSS variables, layout, board/print/wide-screen rules |
| `manifest.json`, `sw.js` | PWA support — precaches all 66 tools + scripts for offline use |
| `PLAN.md` | Working build plan, completed work log, agent lanes |
| `CODEBASE.md` | Codebase guide for agents — read before touching anything |
| `video-learning/` | Whisper transcripts, PDF extracts, contact sheets, synthesis notes |
| `algebra-2-tools/` | Claude design/wireframe artifacts — reference only, not served |

## Tool counts by unit

| Unit | Name | Tools |
|---|---|---|
| U1 | Systems & Quadratics | 15 |
| U2 | Graphs & Exponents | 7 |
| U3 | Rationals & Complex | 10 |
| U4 | Rational Exponents | 7 |
| U5 | Exponential & Log | 8 |
| U6 | Rationals & Polynomials | 8 |
| U7 | Trigonometry | 7 |
| U8 | Statistics, Probability & Conics | 4 |

## Student features

- **Visited tracking** — ✓ badge on cards you've opened (localStorage, no logins)
- **Start here** — orange banner on the best entry-point card per unit
- **Try Next** — 3 contextually related tools at bottom of every tool sidebar
- **Progress bars** — per-unit progress summary in homepage sidebar
- **Search** — searches tool names AND descriptions; results highlight matched text
- **Difficulty filter** — filter by ● easy / ●● medium / ●●● hard
- **Share link** — copies canonical URL; encodes current slider state
- **Save PNG** — download any canvas tool as an image for assignments
- **Collapsible sections** — unit sections on homepage, HOW TO USE, TRY THIS, lesson schedules, and sidebar info all start collapsed; tap to expand; state saved in localStorage

## Classroom / teacher features

- **Board mode** (`⛶ board`) — hides chrome, canvas fills screen; info sidebars collapse, control sidebars stay
- **Quick-nav** (`⊞ tools`) — in board mode, opens full-screen tool picker grouped by unit
- **Print key ideas** (`🖨 print`) — prints only sidebar content (HOW TO USE, TRY THIS, KEY IDEA)
- **URL state** — slider positions encoded in URL hash; share a specific example with one click
- **Replay recording** — `⏺ rec` captures a slider session; `🔗 share` generates a `#r=` URL students open to watch the walkthrough auto-play
- **Wide-screen layout** — at ≥1400px sidebar grows for smartboard legibility
- **Touch support** — all draggable canvases have `touch-action: none`

## Excluded from git

- Raw classroom videos in `teacher and student work/`
- Local Whisper runtime/model cache in `video-learning/.venv/` and `video-learning/models/`
