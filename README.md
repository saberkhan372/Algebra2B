# Algebra 2 Playgrounds

Interactive classroom tools for Algebra 2 — 50 tools across 8 units, built for Mr. K's students at TNDV.

**Live site:** `https://saberkhan372.github.io/Algebra2B/`

## Local preview

```bash
python3 -m http.server 3333
# or
ruby -run -e httpd . -p 3333
```

Open `http://127.0.0.1:3333/`

## What's here

| Path | What it is |
|---|---|
| `index.html` | Homepage — unit sections, kind + unit filter chips, 50-tool grid |
| `map.html` | Visual course roadmap — scrollable unit cards |
| `about.html` | Teacher letter, FAQ, credits |
| `u1.html` – `u7.html`, `u9.html` | Unit landing pages with lesson stacks |
| `tools/` | 50 standalone interactive tool pages |
| `tools/fullscreen.js` | Board mode — injected into every tool, adds `⛶ board` button |
| `styles.css` | Full design system — CSS variables, layout, components |
| `manifest.json`, `sw.js` | PWA support (offline via service worker) |
| `PLAN.md` | Working build plan, agent lanes, completed work log |
| `CODEBASE.md` | Codebase guide for agents — read this before touching anything |
| `video-learning/` | Whisper transcripts, PDF extracts, contact sheets, synthesis notes |
| `algebra-2-tools/` | Claude design/wireframe artifacts — reference only, not served |

## Tool counts by unit

| Unit | Name | Tools |
|---|---|---|
| U1 | Systems & Quadratics | 8 |
| U2 | Graphs & Exponents | 6 |
| U3 | Rationals & Complex | 8 |
| U4 | Rational Exponents | 5 |
| U5 | Exponential & Log | 7 |
| U6 | Rationals & Polynomials | 8 |
| U7 | Trigonometry | 5 |
| U9 | Statistics & Probability | 3 |

## Excluded from git

- Raw classroom videos in `teacher and student work/`
- Local Whisper runtime/model cache in `video-learning/.venv/` and `video-learning/models/`
