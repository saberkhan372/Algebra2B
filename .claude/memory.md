# Project Memory

Last updated: 2026-05-27

## What This Project Is

Algebra 2B Playgrounds is a static GitHub Pages site of interactive classroom tools for Algebra 2. It is designed around Mr. K's classroom voice and uses a hand-drawn notebook visual style.

Live site:

`https://saberkhan372.github.io/Algebra2B/`

## Recent Work

Claude and Codex completed a major sync and build pass:

- Fixed stale homepage and unit-page counts.
- Replaced stale U2 pacing banners with year-complete messaging.
- Synced unit lesson rows so built tools are linked and marked live.
- Added and wired `tools/sine-cosine-builder.html`.
- Added and wired `tools/exponential-equation-solver.html`.
- Added and wired Claude's `tools/polynomial-division-stepper.html`.
- Updated `index.html`, `u2.html` through `u7.html`, and `PLAN.md`.
- Pushed the completed site sync to `origin/main` in commit `57d8c4b`.

## Agent Lanes

From `PLAN.md`:

- Claude: conceptual/pedagogical interaction design, novel canvas interactions, heavier math edge cases, teacher voice.
- ChatGPT: audits, consistency checks, stale data checks, plan/doc review, post-build verification.
- Codex: repetitive structure, data entry, boilerplate plumbing, homepage/unit-page wiring, tools that follow existing patterns.

## Current Tool State

The site currently has 28 built/integrated tools.

Newest direct tool URLs:

- `https://saberkhan372.github.io/Algebra2B/tools/sine-cosine-builder.html`
- `https://saberkhan372.github.io/Algebra2B/tools/exponential-equation-solver.html`
- `https://saberkhan372.github.io/Algebra2B/tools/polynomial-division-stepper.html`

## Remaining Work Snapshot

Check `PLAN.md` for the latest source of truth. At the time this file was created, the main remaining planned tool was:

- Exponential Model Builder, U5 D3

## Good Next-Step Habit

Before starting work:

1. Run `git status --short --branch`.
2. Read `PLAN.md`.
3. Check the relevant unit page and homepage `TOOLS` array.
4. Preserve user/Claude changes already in the worktree.

Before calling work done:

1. Run static script/link checks.
2. Smoke-test the changed page locally.
3. Confirm counts in `index.html`, `tools/`, and `PLAN.md`.
4. Commit and push only when asked or when the user explicitly wants deployment.
