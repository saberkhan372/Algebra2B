# Project Overview

Last updated: 2026-05-27

## Repository

`saberkhan372/Algebra2B` is a static GitHub Pages site for Algebra 2 classroom intuition tools.

Local repo:

`/Users/khans/Documents/Algebra2Playground/Algebra2B`

Live site:

`https://saberkhan372.github.io/Algebra2B/`

Local preview:

```bash
ruby -run -e httpd . -p 8091
```

Then open:

`http://127.0.0.1:8091/`

## Current State

- Branch: `main`
- Remote: `origin` -> `https://github.com/saberkhan372/Algebra2B.git`
- Latest pushed commit before these memory docs: `57d8c4b Add final Algebra 2B tools and sync pages`
- The site has 7 unit pages, `u1.html` through `u7.html`.
- The homepage tool grid is driven by the `TOOLS` array in `index.html`.
- The current homepage count is 28 tools.
- `PLAN.md` is the working build plan and should stay synced with actual site state.

## Main Files

- `index.html` - homepage, search/filter tool grid, pacing banner.
- `about.html` - teacher letter, FAQ, credits.
- `u1.html` through `u7.html` - unit landing pages and lesson stacks.
- `tools/` - standalone interactive tool pages.
- `styles.css` - shared design system and layout.
- `PLAN.md` - build plan, completed work, remaining work, agent lanes.
- `video-learning/` - transcripts, PDF extracts, contact sheets, and synthesis notes.
- `algebra-2-tools/` - Claude design/wireframe artifacts, reference only.

## Live Tool Count

28 tools are built and integrated.

Recently added direct URLs:

- `https://saberkhan372.github.io/Algebra2B/tools/sine-cosine-builder.html`
- `https://saberkhan372.github.io/Algebra2B/tools/exponential-equation-solver.html`
- `https://saberkhan372.github.io/Algebra2B/tools/polynomial-division-stepper.html`

## Remaining Work

As of the latest `PLAN.md`, the main remaining planned tool is:

- Exponential Model Builder, U5 D3

Check `PLAN.md` before starting, because Claude/Codex may update the plan between sessions.
