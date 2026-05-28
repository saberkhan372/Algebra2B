---
name: project-overview
description: Algebra 2B Playgrounds — static GitHub Pages site with interactive math tools for Algebra 2 students
metadata: 
  node_type: memory
  type: project
  originSessionId: a8d26e5a-0d3f-4874-9e5e-67198243620d
---

**Algebra 2B Playgrounds** is a static site (GitHub Pages) at `Algebra2B/`. Serves as classroom supplement for 7-unit Algebra 2 course (Sept–May).

**Site structure:**
- `index.html` — homepage with 38-tool grid, search/filter, animated TOTW canvas
- `about.html` — teacher letter, FAQ, credits
- `u1.html`–`u7.html` — unit pages (lesson stacks with tool links); `u9.html` for Statistics
- `tools/` — 38 standalone interactive HTML tools
- `styles.css` — all shared CSS variables and classes
- `algebra-2-tools/` — Claude Design wireframe exports (reference only)
- `video-learning/` — transcripts, batch insight notes, contact sheets, PDF extracts

**38 tools currently built (as of 2026-05-28):**
U1 (5): Quadratic Slider Studio, Substitution Stepper, Elimination Race, Factoring Quadratics Lab, Piecewise Function Grapher
U2 (6): Abs Value Grapher, Transformations Explorer, Neg Exponent Flipper, Diff of Squares, Diff of Cubes, **Parent Function Atlas**
U3 (6): Imaginary Number Sandbox, Quadratic Standard Form, Rational Expression Builder, Complete the Square Trainer, Quadratic Word Problems Trainer, Rationalizing Denominators
U4 (4): Rational Exponents Tower, Cubic & Radical Grapher, Composition Machine, Inverse Function Revealer
U5 (5): Log↔Exp Converter, Exponential Function Explorer, Log Properties Sandbox, Exponential Equation Solver, Exponential Model Builder
U6 (6): Rational Simplifier, Adding Rational Expressions, Rational Mult/Div Stepper, Solving Rational Equations, Polynomial Sketch Pad, Polynomial Division Stepper
U7 (3): SOH CAH TOA Triangle Solver, Unit Circle Walker, Sine/Cosine Graph Builder
U9 (3): Box Plot Builder, Probability Rules Sandbox, Sampling Bias Lab

**No tools missing** — all 38 tools are live. No coming-soon rows on any unit page.

**Parent Function Atlas** (built 2026-05-28, Phase 1):
- File: `tools/parent-function-atlas.html`
- 5 families: x², |x|, √x, 2ˣ, 1/x with a/h/k sliders (no b yet)
- Live feature chips: domain, range, zeros, y-intercept, asymptotes (update every slider tick)
- Canvas: dashed asymptote lines with labels, colored intercept dots, vertex/start-point anchor
- Phases 2–5 planned: cubic/log/linear families (Codex), trig families (Claude), compare/inverse mode, equation parser

**PLAN.md tracks all build phases** — see it for priority order, who builds what, and design constraints.

**Why:** Classroom supplement giving students visual/interactive exposure to concepts. No logins, no tracking, no cost.

**How to apply:** Always check PLAN.md for current priorities and constraints before suggesting or building new tools.
