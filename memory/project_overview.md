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
- `index.html` — homepage with 42-tool grid, search/filter, animated TOTW canvas, per-card canvas hover previews
- `about.html` — teacher letter, FAQ, credits
- `map.html` — full visual map of all tools organized by unit
- `u1.html`–`u7.html` — unit pages (lesson stacks with tool links); `u9.html` for Statistics
- `tools/` — 42 standalone interactive HTML tools
- `styles.css` — all shared CSS variables and classes
- `algebra-2-tools/` — Claude Design wireframe exports (reference only)
- `video-learning/` — transcripts, batch insight notes, contact sheets, PDF extracts

**44 tools currently built (as of 2026-05-28):**
U1 (7): Quadratic Slider Studio, Substitution Stepper, Elimination Race, Factoring Quadratics Lab, Piecewise Function Grapher, **Function X-Ray**, **Inequality Region Explorer**
U2 (6): Abs Value Grapher, Transformations Explorer, Neg Exponent Flipper, Diff of Squares, Diff of Cubes, **Parent Function Atlas**
U3 (7): Imaginary Number Sandbox, Quadratic Standard Form, Rational Expression Builder, Complete the Square Trainer, Quadratic Word Problems Trainer, Rationalizing Denominators, **Quadratic Forms Explorer**
U4 (4): Rational Exponents Tower, Cubic & Radical Grapher, Composition Machine, Inverse Function Revealer
U5 (6): Log↔Exp Converter, Exponential Function Explorer, Log Properties Sandbox, Exponential Equation Solver, Exponential Model Builder, **Log↔Exp Mirror**
U6 (7): Rational Simplifier, Adding Rational Expressions, Rational Mult/Div Stepper, Solving Rational Equations, Polynomial Sketch Pad, Polynomial Division Stepper, **Rational Behavior**
U7 (4): SOH CAH TOA Triangle Solver, Unit Circle Walker, Sine/Cosine Graph Builder, **Trig Explorer**
U9 (3): Box Plot Builder, Probability Rules Sandbox, Sampling Bias Lab

**No tools missing** — all 44 tools are live. No coming-soon rows on any unit page.

**Explorer tools** (built 2026-05-28):
- `tools/parent-function-atlas.html` — 5 families: x², |x|, √x, 2ˣ, 1/x with a/h/k sliders; live feature chips (domain, range, zeros, y-intercept, asymptotes); dashed asymptote lines, colored intercept dots
- `tools/quadratic-forms-explorer.html` — standard ↔ vertex ↔ factored form conversions with live canvas
- `tools/log-exp-mirror.html` — log and exponential as inverses, mirrored over y=x
- `tools/rational-behavior.html` — rational function behavior explorer (asymptotes, holes, end behavior)
- `tools/trig-explorer.html` — amplitude/period/phase shift explorer for sin/cos

**index.html hover previews** (built 2026-05-28): each tool card's icon box animates a canvas preview on mouseenter — 23 renderers (parabola, sine, exponential, log, rational, functions, xray, inequality, etc.) using `requestAnimationFrame`, DPR-aware canvas sized at event time.

**Cross-unit mega-tools** (built 2026-05-28):
- `tools/function-xray.html` — 9 function families (quad, abs, exp, log, rational, poly, radical, sin, cos) with a/h/k/b sliders, X-ray anatomy overlays (asymptotes, vertex, midline, axis of sym, period bracket), live feature chips
- `tools/inequality-explorer.html` — Linear, Quadratic, Abs Value inequalities + 2-linear System; live shaded region, solid/dashed boundary, click-to-place test point with ✓/✗, intersection region highlighted in system mode

**PLAN.md tracks all build phases** — see it for priority order, who builds what, and design constraints.

**Why:** Classroom supplement giving students visual/interactive exposure to concepts. No logins, no tracking, no cost.

**How to apply:** Always check PLAN.md for current priorities and constraints before suggesting or building new tools.
