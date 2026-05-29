# Project Memory

Last updated: 2026-05-28

## What This Project Is

Algebra 2B Playgrounds is a static GitHub Pages site of interactive classroom tools for Algebra 2. It is designed around Mr. K's classroom voice and uses a hand-drawn notebook visual style.

Live site: `https://saberkhan372.github.io/Algebra2B/`
Local path: `/Users/saberkhan/Documents/coding/Algebra2B`

## Current State (as of 2026-05-28)

- **50 tools** built and wired into the homepage.
- **8 unit pages**: `u1.html` through `u7.html` plus `u9.html` (Statistics & Probability).
- Homepage reorganized: unit-grouped collapsible sections + dual filter rows (kind + unit).
- All units marked "done" — year is complete.
- Video-learning pipeline complete through batch 10 — 57 transcripts processed.

## Agent Lanes

- **Claude:** pedagogical/conceptual design, novel canvas interactions, math edge cases, teacher voice.
- **ChatGPT:** audits, consistency checks, stale data, plan/doc review, post-build verification.
- **Codex:** repetitive structure, data entry, boilerplate wiring, homepage/unit-page plumbing, tools that follow existing patterns.

## Good Habits Before Starting

1. Run `git status --short --branch`.
2. Read `CODEBASE.md` (file structure, TOOLS array, tool anatomy).
3. Check `PLAN.md` for the latest build context.
4. Read the relevant unit page and the `TOOLS` array in `index.html`.

## Good Habits Before Calling Done

1. Homepage `TOOLS` array has a new entry with correct `id`, `prev`, `name`, `unit`, `topic`, `kind`, `diff`, `code`, `desc`, `href`.
2. The matching unit page lesson row is linked and marked live.
3. `PLAN.md` current state section reflects the new count.
4. Run the inline-script parse check from `.claude/design_constraints.md`.
