# Project Memory

Last updated: 2026-05-28

## What This Project Is

Algebra 2B Playgrounds is a static GitHub Pages site of interactive classroom tools for Algebra 2. Designed around Mr. K's classroom voice with a hand-drawn notebook visual style.

Live site: `https://saberkhan372.github.io/Algebra2B/`  
Local path: `/Users/saberkhan/Documents/coding/Algebra2B`

## Current State (as of 2026-05-28)

- **50 tools** built and wired into the homepage.
- **8 unit pages**: `u1.html` through `u7.html` plus `u9.html`.
- Homepage: unit-grouped collapsible sections + dual filter rows (kind + unit chip).
- All units marked "done" — year is complete.
- Video-learning pipeline complete through batch 10 — 57 transcripts processed.

### Classroom / board-mode improvements (completed May 2026)
- **Board mode**: every tool has `⛶ board` button in nav — hides chrome, expands canvas to 100vh, `✕ exit board` top-right. Info sidebars collapse; control sidebars (sliders/equations) stay. See `tools/fullscreen.js`.
- **Fonts**: body text switched from Patrick Hand to Lexend (`--f-body`). Caveat/Permanent Marker/JetBrains Mono kept. Canvas `ctx.font` labels stay handwritten intentionally.
- **Contrast**: `--ink-soft` and `--ink-2` darkened. Kind colors unified into canonical `--k-*` variables — one palette used on both homepage and map. U5 badge gold and game amber fixed for WCAG AA.
- **Touch**: `touch-action: none` added to all 12 draggable canvases. All had touchstart/touchmove/touchend + preventDefault already.
- **#5 in progress**: wide-screen canvas layout (≥1400px).

## Agent Lanes

- **Claude:** pedagogical/conceptual design, novel canvas interactions, math edge cases, teacher voice.
- **ChatGPT:** audits, consistency checks, stale data, plan/doc review, post-build verification.
- **Codex:** repetitive structure, data entry, boilerplate wiring, homepage/unit-page plumbing, tools that follow existing patterns.

## Good Habits Before Starting

1. `git status --short --branch`
2. Read `CODEBASE.md` — file structure, TOOLS array, tool anatomy, design system.
3. Check `PLAN.md` for latest build context.
4. Read the relevant unit page and the `TOOLS` array in `index.html`.

## Good Habits Before Calling Done

1. Homepage `TOOLS` array entry correct (all 9 fields).
2. Matching unit page lesson row linked and live.
3. `PLAN.md` current state updated.
4. Run inline-script parse check from `.claude/design_constraints.md`.
