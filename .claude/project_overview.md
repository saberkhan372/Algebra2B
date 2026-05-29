# Project Overview

Last updated: 2026-05-28

## Repository

`saberkhan372/Algebra2B` — static GitHub Pages site for Algebra 2 classroom tools.

Local path: `/Users/saberkhan/Documents/coding/Algebra2B`
Live site: `https://saberkhan372.github.io/Algebra2B/`

Local preview:
```bash
python3 -m http.server 3333
```
Then open `http://127.0.0.1:3333/`

## Current State

- Branch: `main` — remote `origin` → `https://github.com/saberkhan372/Algebra2B.git`
- **50 tools** built and integrated (all 8 units complete).
- **8 unit pages**: `u1.html` through `u7.html` plus `u9.html`.
- Homepage has unit-grouped collapsible sections + kind & unit filter chip rows.
- `PLAN.md` is the working build plan and should stay synced with actual site state.
- `CODEBASE.md` is the orientation doc for agents — read it first.

## Main Files

| File | Purpose |
|---|---|
| `index.html` | Homepage: TOOLS array, unit sections, filter logic, hover preview canvases |
| `map.html` | Visual course roadmap — horizontal scroll unit cards |
| `about.html` | Teacher letter, FAQ, credits |
| `u1.html`–`u7.html`, `u9.html` | Unit landing pages with lesson stacks |
| `styles.css` | Full shared design system |
| `PLAN.md` | Build plan, completed work, agent lanes |
| `CODEBASE.md` | Agent orientation — file structure, patterns, TOOLS array anatomy |
| `tools/` | 50 standalone interactive HTML tool pages |
| `video-learning/` | Transcripts, PDF extracts, contact sheets, synthesis notes |
| `algebra-2-tools/` | Design wireframe artifacts — reference only |

## No Remaining Planned Tools

All 50 planned tools are live. Future additions come from teacher requests or video-learning insights. Check `PLAN.md` for any queued items.
