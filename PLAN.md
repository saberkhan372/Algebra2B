# Algebra 2B Playgrounds — Build Plan

Last updated: 2026-05-28  
Based on: pacing plan, final exam, lesson PDFs (Blocks 1–26), current site audit, and video-learning transcripts/contact sheets.

---

## Current state

**Site:** 8 unit pages (u1–u7 + u9), **50 tools** wired into the homepage grid.  
**Curriculum:** All 8 units complete (Sept → May). Year is done.  
**Unit pages:** U1–U7 + U9 fully wired. No coming-soon rows remain.  
**Homepage:** Reorganized May 2026 — unit-grouped collapsible sections, dual filter rows (kind + unit chip), correct "all 50" count.  
**Video-learning:** Complete through batch 10 — 57 transcripts, extracted PDF text, 37 contact sheets, 10 synthesis notes.

**50 tools built/integrated:**
- Absolute Value Grapher (U2)
- Quadratic Slider Studio (U1/U2, vertex form)
- Negative Exponent Flipper (U2)
- Imaginary Number Sandbox (U3)
- Factoring Quadratics Lab (U1)
- Difference of Squares — game (U2)
- Difference of Cubes — reference (U2)
- Substitution Stepper (U1)
- Elimination Race (U1)
- Rational Expression Builder — grapher (U3/U6)
- Complete the Square Trainer (U3)
- Rational Exponents Tower — matching game (U4)
- Piecewise Function Grapher (U1)
- Transformations Explorer (U2)
- Quadratic Standard Form (U3)
- Cubic & Radical Grapher (U4)
- Function Composition Machine (U4)
- Inverse Function Revealer (U4)
- Log ↔ Exponential Converter (U5)
- Exponential Function Explorer (U5)
- Log Properties Sandbox (U5)
- Exponential Equation Solver (U5)
- Exponential Model Builder (U5)
- Rational Simplifier (U6)
- Adding Rational Expressions (U6)
- Rational Multiplication/Division Stepper (U6)
- Solving Rational Equations Stepper (U6)
- Polynomial Sketch Pad (U6)
- Polynomial Division Stepper (U6) — long division + synthetic, 4 problems each, factor verdict
- SOH CAH TOA Triangle Solver (U7)
- Unit Circle Walker (U7)
- Sine/Cosine Graph Builder (U7)
- Box Plot Builder (U9) — first U9 tool; 5-number summary, IQR, outlier fences, dot/box views
- Probability Rules Sandbox (U9)
- Sampling Bias Lab (U9)
- Quadratic Word Problems Trainer (U3)
- Rationalizing Denominators (U3)
- Parent Function Atlas (U2) — Phase 1: 5 families (x², |x|, √x, 2ˣ, 1/x), a/h/k sliders, live domain/range/zeros/asymptote feature chips, asymptote canvas lines, intercept dots
- Quadratic Forms Explorer (U3) — same parabola in all 3 forms simultaneously; discriminant banner changes state live; color-coded standard/vertex/factored strips; intercept dots + axis of symmetry on canvas
- Log ↔ Exp Mirror Explorer (U5) — y=bˣ and y=log_b(x) on one canvas with y=x reflection line; base slider 0.2–8; quick-pick b=2/e/10/½; purple reflection point pairs with dashed connectors; "Everything Swaps" domain↔range table
- Rational Function Behavior Explorer (U6) — 4 toggleable factors (N/D independently), holes/VAs/zeros emerge live; HA rule card highlights active rule; segment-split canvas drawing avoids asymptote artifacts
- Trig Function Explorer (U7) — a/b/h/k sliders with π-formatted h display; sin/cos toggle; colored equation with parameter color-coding; live amplitude/period/phase shift/midline/first-peak/first-trough chips; period bracket + amplitude arrow annotations; peak/trough dots on canvas

**No planned tools missing** — all 50 tools are live.

**Explorer roadmap (in priority order):**
1. ✓ Parent Function Atlas — built
2. ✓ Quadratic Forms Explorer — built
3. ✓ Log↔Exponential Mirror Explorer (U5) — built
4. ✓ Rational Function Behavior Explorer (U6) — built
5. ✓ Trig Function Explorer (U7) — built
6. Inequality Region Explorer (cross-unit) — linear/quadratic inequalities with live shading

**Archived/orphan prototype files not in student navigation:**
- `tools/exponential-equations.html` - earlier exponential-equation solver prototype.
- `tools/sincos-grapher.html` - alternate sine/cosine grapher prototype; canonical student link is `tools/sine-cosine-builder.html`.

---

## Work completed so far

### Site audit

Codex reviewed Claude's static site and found these issues:

- `tools/rational-expressions.html` treated every denominator root as a vertical asymptote and did not distinguish holes/canceled factors.
- `tools/substitution-stepper.html` accepted blank/partial answers because of overly loose answer matching.
- `u2.html` had nested anchor markup in one lesson row.
- `tools/factoring-lab.html` did not handle some `c = 0` factorable quadratics.
- Tool/unit metadata is duplicated across pages and should eventually be centralized.

### Video-learning pipeline

Created `video-learning/` as the curriculum-learning workspace.

Artifacts now include:

- `video-learning/video_inventory.csv` - inventory of local videos with unit/day guesses, durations, sizes, resolutions, and paths.
- `video-learning/transcripts/` - Whisper transcripts.
- `video-learning/pdf-text/` - extracted text from key lesson PDFs.
- `video-learning/contact-sheets/` - visual contact sheets from selected videos.
- `video-learning/U2-D4-negative-exponents-notes.md` - first pilot notes.
- `video-learning/batch-1-tool-insights.md` - insights from absolute value, factoring, negative exponents, imaginary numbers, rational expressions, and domain restrictions.
- `video-learning/batch-2-tool-insights.md` - insights from substitution/elimination, quadratic graphing, completing the square, and special factoring.
- `video-learning/batch-3-radicals-rationals-insights.md` - insights from radical graphing, rational exponents, radical equations, rational expression simplification, and rational-function graphing.
- `video-learning/batch-4-exponents-polynomials-trig-insights.md` - insights from exponential/log lessons, rational-function graphing, function composition, polynomial sketching, and right-triangle trig.
- `video-learning/batch-5-exponential-log-polynomial-division-insights.md` - insights from exponential models, log graphing/solving, polynomial roots, long division, and synthetic division.
- `video-learning/batch-6-trig-statistics-insights.md` - insights from angle/radian lessons, periodic functions, sine/cosine graphs, probability rules, data displays, and sampling/distribution lessons.
- `video-learning/batch-7-rational-operations-insights.md` - insights from U8-D2 through U8-D4 and the Unit 8 Study Guide: multiply/divide rationals, add/subtract rationals, solving rational equations, asymptote rules, domain/range interval notation, rational function identification, and graphing technique.
- `video-learning/batch-8-functions-transformations-unit2-insights.md` - insights from U2-D1, U2-D2, U2-D5, and U2-D8: functions, domain/range/end behavior, calculator workflow, transformations, and cumulative Unit 2 review.
- `video-learning/batch-9-25-26-revisit-insights.md` - insights from 25-26 versions of U1-D2/D3, U2-D3/D4/D6/D7, U3-D1, and U3-D3: confirms patterns from earlier batches; new insights include the definitive "why h is opposite" explanation, "plus/minus ruin the party" exponent rule, imaginary-solutions/no-x-intercepts bridge, GCF-always-first principle, and three-form quadratic map (vertex ↔ standard ↔ intercept).
- `video-learning/batch-10-unit3-remaining-review-insights.md` - insights from U3-D2, U3-D4, U3-D7, U3-D8, U3-D9, U3-D10, and Unit 3 Test Review: intercept form, quadratic word problems, rationalizing denominators, powers of `i`, conjugates, literal equations, piecewise parabolas, and cumulative review patterns.

Transcribed lessons so far:

- U1-D2 - substitution and elimination.
- U1-D3 - factoring and solving.
- U2-D1 - functions, relations, vertical line test, domain/range, interval notation, and end behavior.
- U2-D2 - calculator workflow, graphing/intersections, fraction syntax, and rounding discipline.
- U2-D3 - absolute value transformations.
- U2-D4 - negative exponents, calculator review, and transformation review.
- U2-D5 - parent functions, transformation vocabulary, transformation order, and writing transformed functions.
- U2-D6 - difference of squares and cubes.
- U2-D7 - quadratic graphing and vertex form patterns.
- U2-D8 - Unit 2 test review: functions, transformations, exponents, factoring, quadratics, piecewise evaluation, and cumulative skills.
- U1-D2 - substitution and elimination. (25-26)
- U1-D3 - factoring and solving. (25-26)
- U2-D3 - absolute value transformations and the "why h is opposite" vertex explanation. (25-26)
- U2-D4 - negative exponents, plus/minus-ruin-the-party rule, and quiz review. (25-26)
- U2-D6 - difference of squares and cubes, odd-exponent caveat, calculator cube-root check. (25-26)
- U2-D7 (Part 1 & 2) - quadratic graphing, even function intro, right-1-up-a / right-2-up-4a pattern confirmation. (25-26)
- U3-D1 - imaginary numbers and quadratic formula bridge. (24-25)
- U3-D1 - imaginary numbers, quadratic formula, and "no x-intercepts when solutions contain i" connection. (25-26)
- U3-D2 - intercept form, zeros/roots/solutions/x-intercepts vocabulary, and vertex midpoint from intercepts. (25-26)
- U3-D3 (Part 1 & 2) - completing the square: three-form quadratic map, pattern-discovery approach, imaginary results from negative right side. (25-26)
- U3-D3 - completing the square.
- U3-D4 - quadratic word problems, projectile motion, target heights, vertex interpretation, physical domain/range, and velocity. (25-26)
- U3-D5 - intro to rational expressions.
- U3-D7 - rational expression simplification review, original excluded values, radical denominators, and `i` denominators. (25-26)
- U3-D8 (Part 1 & 2) - powers of `i`, mod-4 cycle, complex conjugates, and radical/complex denominator rationalizing. (25-26)
- U3-D9 - literal equations, factoring out a target variable, deriving quadratic formula by completing the square, and solving for `a` in quadratic forms. (25-26)
- U3-D10 - piecewise graphs with parabolas/absolute value, visible vs hidden vertex, rational/complex review, and literal-equation review. (25-26)
- Unit 3 Test Review - cumulative systems, piecewise, quadratics, factoring, rational expressions, radicals/complex numbers, quadratic formula, completing the square, projectile problems, literal equations, and transformations.
- U4-D1 - radical functions and square-root graph patterns.
- U4-D2 - square-root functions, inverses, and HK graphing.
- U4-D3 - radical equations and rational exponent notation.
- U4-D4 - domain restrictions for square-root and rational functions.
- U8-D1 - simplifying rational expressions and excluded values.
- U8-D5 - graphing reciprocal/rational functions with asymptotes.
- Misnamed `U5-D2 Video (23-24)(1)` - actually exponential growth/decay, not radical equations.
- U5-D1 - exponential functions, horizontal asymptotes, strategic graph points, domain/range, and end behavior.
- U5-D5 - log properties, expanding/condensing, product/quotient/power rules, and simplification checks.
- U5-D6 - solving exponential equations by rewriting bases or logging both sides, including interest word problems.
- U6-D1 - rational function parent graph, vertical/horizontal asymptotes, flips, domain, and range.
- Misnamed `U6-D2  Video (23-24)` - actually function composition, not a rational-functions lesson.
- U6-D7 - graphing polynomials from factored form, zeros, multiplicity, cross/bounce behavior, and end behavior.
- U7-D1 - right-triangle trig, reciprocal trig, inverse trig, solving triangles, and special right triangles.
- U5-D2 - exponential decay, base flipping, growth/decay classification, and `e` as an exponential constant.
- U5-D3 - simple, compound, and continuous interest/growth models.
- U5-D4 - logarithmic functions, inverse exponential graphs, vertical asymptotes, domain/range, and anchor points.
- U5-D7 - solving logarithmic equations, condensing, exponentiating, and extraneous-solution checks.
- U6-D3 - fundamental theorem of algebra, complex conjugate roots, and multiplicity.
- U6-D4 - polynomial long division, placeholder zeros, remainders, and factor testing.
- U6-D5 - sum and difference of cubes, GCF-first factoring, and alternate factoring paths.
- U6-D6 - polynomial graphing from intercept form, smoothness, end behavior, and calculator zero-finding.
- U6-D8 - synthetic division, box numbers, missing powers, quotient degree, and non-monic divisors.
- U7-D2 - standard position, positive/negative angle direction, coterminal angles, radians, and degree/radian conversion.
- U7-D3 - periodic functions, Ferris wheel models, amplitude, midline, period, and table-to-wave graphing.
- U7-D4 - sine/cosine graphs, reference angles, unit-circle exact values, and `(cos theta, sin theta)` coordinate meaning.
- U9-D1 - statistics intro, categorical/quantitative variables, frequency and relative-frequency tables, bar/pie charts, and misleading graphs.
- U9-D2 - probability rules, experimental/theoretical probability, law of large numbers, complements, and `or`/`and` probability language.
- U9-D3 - sampling bias, data displays, mean/median/mode, skew, quartiles/IQR, outlier fences, and box plots.
- U8-D2 - multiplying/dividing rational expressions, keep-change-flip, factor cancellation, and original-domain restrictions.
- U8-D3 - adding/subtracting rational expressions, LCD building, numerator combining, sign distribution, and final simplification.
- U8-D4 - solving rational equations, common denominators, excluded values, extraneous candidates, and no-solution cases.
- Unit 8 Study Guide - rational-function identification (no square roots/fractional exponents), interval notation, three-case horizontal asymptote rule, slant asymptote identification, and graphing-from-asymptotes technique.

U9 note: the newly transcribed U9-D1 through U9-D3 classroom videos are statistics/probability lessons. The local video inventory also contains a separate `Unit 9 Review Video (Conics)`, so future U9 planning should keep those strands distinct until the source materials are reconciled.

PDF text extracted so far:

- U4-D1 Radical Functions.
- U4-D2 nth Roots and Radical Expressions.
- U4-D4 Rational Exponents.
- U4-D4 Rational Exponents alternate/filled lesson.
- U4-D4 Quiz Review.
- U5-D2 Radical Equations.

Contact sheets created:

- U1-D2 substitution/elimination.
- U2-D1 functions/domain/range.
- U2-D2 calculator workflow.
- U2-D4 negative exponents.
- U2-D5 parent transformations.
- U2-D6 squares/cubes.
- U2-D8 test review.
- U3-D2 intercept form.
- U3-D3 completing the square.
- U3-D4 quadratic word problems.
- U3-D7 rationalizing review.
- U3-D8 powers of i part 1.
- U3-D8 powers of i and conjugates part 2.
- U3-D9 literal equations.
- U3-D10 piecewise quadratic review.
- Unit 3 test review.
- U4-D1 radical functions.
- U4-D2 square-root functions.
- U5-D1 exponential functions.
- U5-D4 log functions.
- U5-D5 log properties.
- U5-D7 log equations.
- U6-D4 polynomial division.
- U6-D7 polynomial graphs.
- U6-D8 synthetic division.
- U7-D1 right-triangle trig.
- U7-D2 angles and radians.
- U7-D3 periodic functions and Ferris wheel modeling.
- U7-D4 sine/cosine graphs and unit-circle exact values.
- U8-D1 rational expressions.
- U8-D2 multiplying and dividing rational expressions.
- U8-D3 adding and subtracting rational expressions.
- U8-D4 rational equations.
- U9-D1 statistics displays.
- U9-D2 probability rules.
- U9-D3 sampling and distributions.
- Unit 8 study guide.

### Unit page sync (May 2026)

ChatGPT ran a repo-wide static audit and found:
- Homepage tool count was stuck at 23, then 26/27/28; current actual is 29.
- u4.html, u5.html, u6.html, u7.html all had `future`/coming-soon rows for tools that already existed and were wired into the homepage.

Fixed: index.html counts updated, all four unit pages synced. Remaining "coming soon" rows are for tools that genuinely don't exist yet.

---

### Site changes made from video insights

Updated `tools/substitution-stepper.html`:

- Blank/partial answers no longer pass.
- Final solution now shows "Check both originals" with both original equations verified.

Updated `tools/quadratic-slider.html`:

- Added five-point parabola pattern from the U2-D7 video:
  - vertex,
  - right 1 up/down `a`,
  - right 2 up/down `4a`,
  - mirrored pattern points.
- Added chips for vertex, domain, range, opening direction, and taller/wider behavior.

Updated `tools/elimination-race.html`:

- Changed wording from "add/subtract" to "combine equations" to match the U1-D2 lesson.
- Tightened answer matching.

Updated `tools/diff-of-squares.html`:

- Added pre-check chips:
  - two terms,
  - minus sign,
  - both terms are perfect squares.
- Feedback now calls out the `(a-b)^2` misconception.

Updated `tools/diff-of-cubes.html`:

- Added cube-number reference chips.
- Added an "identify a and b first" section.
- Added same/opposite/always-positive sign logic to the checker.

Updated `tools/complete-square.html`:

- Added reminder chips distinguishing:
  - `b/2` goes inside the squared binomial;
  - `(b/2)^2` is the add/subtract balance piece.

Verification:

- Local server was started at `http://127.0.0.1:8091/`.
- Changed tool pages were smoke-tested with headless Chrome.

---

## Who does what

Three agents. Each has a lane — don't mix them up.

### Claude builds these
Claude handles anything that requires:
- **pedagogical judgment** (how to sequence a conceptual reveal, what a student gets confused by)
- **novel interaction design** (animations, canvas tools, multi-panel layouts)
- **math correctness** (asymptote logic, domain restrictions, extraneous solutions, numerical edge cases)
- **voice and framing** (the "Try This", "Key Ideas", sidebar copy — it has to sound like Mr. K)

Do NOT ask Claude to audit the repo for consistency issues or stale data — that belongs to ChatGPT.

### ChatGPT audits these
ChatGPT handles anything that is:
- **static analysis** (reading across all files without editing — tool counts, stale links, coming-soon vs live mismatches)
- **consistency checks** (do unit pages match the homepage TOOLS array? do plan counts match reality?)
- **doc and plan review** (is PLAN.md behind the actual site? are markdown files accurate?)
- **pre-build review** (before Claude builds a new tool, ChatGPT can check for naming conflicts, existing patterns to follow)
- **post-build audit** (after a tool ships, ChatGPT verifies the unit page, homepage card, and plan doc are all updated)

ChatGPT reports findings; Claude or Codex act on them. ChatGPT does not edit HTML.

### Codex builds these
Codex handles anything that is:
- **structurally repetitive** (new unit pages following the exact same lesson-stack pattern)
- **data entry** (filling in problem banks for stepper/quiz tools once the template exists)
- **boilerplate plumbing** (nav links, breadcrumbs, related-tool links, updating index.html TOOLS array)
- **copy-paste extension** (adding a new slider to an existing tool, adding more wrong-answer choices to a quiz)

---

## Phase 1 — Fix site structure
*Do this before anything else. All new tools need homes.*

| Task | Who | Notes |
|---|---|---|
| Add u5.html (Exponential & Log) | **Codex** | Done |
| Add u6.html (Rational Functions & Polynomials) | **Codex** | Done |
| Add u7.html (Trigonometry) | **Codex** | Done |
| Update index.html nav + unit cards | **Codex** | Done — homepage now renders 29 tools |
| Correct existing unit day maps | **Codex** | Done for existing tool homes; future tools remain coming soon |
| Update all unit breadcrumb links | **Codex** | Done — full-site local-link smoke test passed |

---

## Phase 2 — High-priority tools (conceptual bridges)

These are days where students get genuinely stuck and a worksheet can't do what a live tool can.

---

### Tool: Piecewise Function Grapher
**Unit:** U1, D4–D5 · **Who: Claude**

Why Claude: The hard part is the UX — showing which piece is "active" as the student drags x, drawing open vs closed endpoints correctly, and making the domain intervals feel intuitive. The math has edge cases (what if pieces share an endpoint value? what if a piece is just a constant?).

What to build:
- 2–3 configurable pieces, each with: rule (simple linear or constant), left bound, right bound, endpoint types (open/closed)
- Canvas draws assembled graph; dragging x highlights the active piece
- Equation display assembles the piecewise notation automatically
- Sidebar: try-this prompts asking students to evaluate f(−3), find where the function is undefined, etc.

---

### Tool: Transformations Explorer
**Unit:** U2, D4 · **Who: Claude**

Why Claude: This is the most important unifying tool in the course. It has to work across 5+ parent functions without becoming confusing. The b parameter (horizontal stretch) is especially tricky — it compresses the graph in the counterintuitive direction, and the annotation has to explain that clearly. Design needs care.

What to build:
- Parent function selector: linear / quadratic / absolute value / square root / cubic
- Sliders: a (vertical stretch/flip), b (horizontal stretch), h (horizontal shift), k (vertical shift)
- Each slider animates one transformation at a time; others freeze
- Live equation display: `y = a·f(b(x−h)) + k`
- "What just happened" annotation updates with each slider move
- Toggle: show/hide the untransformed parent function in gray

---

### Tool: Quadratic Standard Form Explorer
**Unit:** U3 gap · **Who: Claude**

Why Claude: Must compute vertex via −b/2a correctly, show the 5-point pattern, connect the discriminant to number of real roots (and color-code accordingly). The transition between standard ↔ vertex form is the core insight that needs visual reinforcement.

What to build:
- Sliders for a, b, c in `y = ax² + bx + c`
- Canvas plots the parabola with labeled vertex (from −b/2a), axis of symmetry, y-intercept
- Color-coded discriminant chip: b²−4ac > 0 (2 roots), = 0 (1 root, tangent), < 0 (no real roots — imaginary)
- "Convert to vertex form" button triggers animated step-by-step completing the square overlay
- Sidebar connects to the existing Complete the Square Trainer

---

### Tool: Cubic & Radical Function Grapher
**Unit:** U4, D3 · **Who: Claude**

Why Claude: The inflection point of a cubic looks like a vertex but behaves differently — the annotation needs to explain this. Two-mode tool (cubic / square root) with a shared draggable "center point" metaphor.

What to build:
- Mode toggle: Cubic (`y = a(x−h)³+k`) / Square Root (`y = a√(x−h)+k`)
- Draggable center/vertex point on canvas; a slider for stretch
- Cubic mode: label the inflection point, show the curve passing through rather than bouncing
- Radical mode: label the domain restriction (x ≥ h) with a clear visual start point
- Sidebar contrast: "how is this different from a parabola vertex?"

---

### Tool: Function Composition Machine
**Unit:** U4, D6–D7 · **Who: Claude**

Why Claude: The animation of data flowing through boxes in order is the entire pedagogical point. This is not a standard canvas tool — it's a custom animated flow diagram. Also needs to handle domain restrictions.

What to build:
- Input two simple functions f and g (dropdown from a preset list, e.g., `2x+1`, `x²`, `x−3`, `√x`)
- Animated flow: input value → **g-box** → intermediate output → **f-box** → final output
- Show the full composed expression: `f(g(x)) = ...`
- "Swap" button shows g(f(x)) — result is different, which is the lesson
- Numeric spot-check: student types a value, watches it route through the chain

---

### Tool: Inverse Function Revealer
**Unit:** U4, D8 · **Who: Claude**

Why Claude: Requires drawing a function and its inverse as reflections over y = x, and a correct implementation of the Horizontal Line Test. Edge cases: what if f isn't one-to-one? The tool needs to handle that gracefully.

What to build:
- Preset function options: `2x+3` (linear), `x²` (domain-restricted to x ≥ 0), `x³`, `√x`
- Canvas shows f(x), y = x mirror line, and f⁻¹(x) overlaid
- Draggable point on f — its reflection on f⁻¹ animates in sync
- Horizontal Line Test mode: draggable horizontal line; if it hits f more than once, warn "not one-to-one"
- Shows the algebraic inverse derivation in the sidebar (swap x/y, solve for y)

---

## Phase 3 — Unit 5: Exponential & Logarithmic Functions

This is the largest missing chunk. Three tools needed.

---

### Tool: Exponential Explorer
**Unit:** U5, D1–D3 · **Who: Codex with Claude's template**

Codex can handle this once Claude defines the canvas pattern. It's similar in structure to the Quadratic Slider Studio — sliders, canvas, labeled asymptote.

What to build:
- Sliders for a (initial value) and b (base; restricted 0.1 → 5, skip b=1)
- Canvas plots `y = a·bˣ`; horizontal asymptote y=0 drawn as dashed line with label
- Chips: growth vs decay, y-intercept, end behavior (x→∞ and x→−∞)
- Presets: `y = 2ˣ` (growth), `y = (0.5)ˣ` (half-life), `y = 1.05ˣ` (compound interest)

---

### Tool: Log ↔ Exponential Converter
**Unit:** U5, D5 · **Who: Claude**

Why Claude: The conceptual flip — "log is asking for the exponent" — is the single hardest idea in U5. The animated bridge between forms needs to make the correspondence feel inevitable, not arbitrary. The UX metaphor matters a lot here.

What to build:
- Split panel: left shows exponential form (`bˣ = y`), right shows log form (`log_b(y) = x`)
- Three input boxes (base, exponent, result) — fill any two, it solves for the third
- Animated arrow shows the exponent "crossing over" to the other side when converting
- Powers reference table (log₂: 1→0, 2→1, 4→2, 8→3, 16→4) that students can reveal
- Practice mode: given log form, write exponential; given exponential, write log

---

### Tool: Log Properties Sandbox
**Unit:** U5, D6 · **Who: Codex**

Standard mechanics tool. Codex can build this following the diff-of-cubes pattern (reference + checker).

What to build:
- Three panels with expandable/collapsible examples:
  - Product rule: `log(AB) = log(A) + log(B)`
  - Quotient rule: `log(A/B) = log(A) − log(B)`
  - Power rule: `log(Aⁿ) = n·log(A)`
- Input a log expression, expand OR condense it, verify with numerical check
- Common mistakes callout box (e.g., `log(A+B) ≠ log(A)+log(B)`)

---

### Tool: Exponential Equation Solver
**Unit:** U5, D9 · **Who: Codex with Claude's step format**

Same architecture as Complete the Square Trainer. Codex can write the step data once Claude defines the step structure.

What to build:
- 5 preset problems: exact answer (`2ˣ = 16`), approximate (`3ˣ = 20`), coefficient (`5·2ˣ = 40`), with e (`e^(2x) = 10`), word problem (compound interest)
- Same step-input + hint reveal pattern as Complete the Square Trainer
- Final answer shows exact log form AND decimal approximation

---

## Phase 4 — Unit 6: Rational Functions (deeper)

The Rational Expression Builder already handles graphing. What's missing is the algebra.

---

### Tool: Rational Expression Simplifier
**Unit:** U6, D1–D2 · **Who: Claude**

Why Claude: Has to show the factoring work step-by-step, identify which factors cancel (with correct excluded values), and handle edge cases like difference of squares in the numerator.

What to build:
- Coefficient inputs for `(ax² + bx + c) / (dx² + ex + f)`
- Step-by-step: factor numerator → factor denominator → cancel common factors → state excluded values
- Color-coding: cancelled factors shown crossed out in matching colors
- Link to Rational Expression Builder for the graph view of the same expression

---

### Tool: Adding Rational Expressions
**Unit:** U6, D5–D6 · **Who: Claude**

Why Claude: Finding the LCD from factors is the conceptual hard part — students need to see it built up from denominator factors, not just given. The visualization of fraction rewriting is tricky to do well.

What to build:
- Two rational expressions with simple denominators (presets like `1/(x−2) + 1/(x+3)`)
- Step-by-step: factor denominators → build LCD → rewrite each fraction → combine → simplify
- Visual: factor boxes that assemble into the LCD like building blocks
- 4–5 preset problems; student can also enter custom coefficients

---

### Tool: Polynomial Sketch Pad
**Unit:** U6, D9 · **Who: Codex**

Mostly data/canvas work following existing canvas patterns.

What to build:
- Up to 4 root sliders (each with value and multiplicity: 1 or 2)
- Leading coefficient slider (positive/negative)
- Canvas draws the polynomial; end behavior arrows auto-update
- Labels: x-intercepts cross (odd mult) vs bounce (even mult) — visually annotated
- Degree counter and leading term display

---

## Phase 5 — Unit 7: Trigonometry

Three tools. The Unit Circle Walker is the most ambitious build on the entire list.

---

### Tool: SOH CAH TOA Solver
**Unit:** U7, Right Triangle Trig · **Who: Codex**

Straightforward. Similar pattern to existing tools.

What to build:
- Interactive right triangle (canvas); set any two knowns via sliders or inputs
- Solves for all remaining sides/angles
- Shows which ratio was used and why (annotates the calculation)
- Triangle redraws to scale

---

### Tool: Unit Circle Walker
**Unit:** U7 · **Who: Claude**

Why Claude: Dual-panel (circle + sine wave) updating in sync, smooth arc dragging, degree/radian dual display, quadrant sign patterns — most complex build on the list. The pedagogical goal is for students to see that the sine wave is just the y-coordinate traced over time. That story has to be told through animation, not just a static picture.

What to build:
- Left panel: unit circle with draggable angle handle
- Right panel: sine wave traces as angle moves (cos wave mode toggle)
- As you drag: shows angle in degrees and radians, (cos θ, sin θ) coordinate, reference angle
- Quadrant color-coding with sign patterns (++, −+, −−, +−)
- Special angle snap: option to snap to 30°/45°/60° multiples and show exact values

---

### Tool: Sine/Cosine Graph Builder
**Unit:** U7, Sinusoidal Graphs · **Who: Codex with Claude's template**

Same architecture as Transformations Explorer but trig-specific.

What to build:
- Sliders: a (amplitude), b (frequency, period = 2π/b), h (phase shift), k (vertical shift)
- Canvas with labeled amplitude brackets, period bracket, midline
- Toggle between sine and cosine
- "One full period" highlight region

---

## What's done vs. remaining

### All completed (30 tools + all site structure)

| Tool | Unit | Who built |
|---|---|---|
| Add u5–u7 pages + fix unit maps | — | Codex |
| Sync unit page statuses to match live tools | — | Claude |
| Piecewise Function Grapher | U1 | Claude |
| Transformations Explorer | U2 | Claude |
| Quadratic Standard Form Explorer | U3 | Claude |
| Log ↔ Exponential Converter | U5 | Claude |
| Exponential Function Explorer | U5 | Codex |
| Cubic & Radical Grapher | U4 | Claude |
| Function Composition Machine | U4 | Claude |
| Inverse Function Revealer | U4 | Claude |
| Log Properties Sandbox | U5 | Codex |
| Exponential Equation Solver | U5 | ChatGPT |
| Exponential Model Builder | U5 | Codex |
| Rational Expression Simplifier | U6 | Claude |
| Adding Rational Expressions | U6 | Claude |
| Polynomial Sketch Pad | U6 | Codex |
| Polynomial Division Stepper | U6 | Claude |
| SOH CAH TOA Solver | U7 | Codex |
| Unit Circle Walker | U7 | Claude |
| Sine/Cosine Graph Builder | U7 | ChatGPT |

### Remaining tools

All 30 planned tools are now live. Future additions will be driven by video-learning insights and teacher requests.

**Upgrade candidates from video insights — all completed as of May 2026:**

Pre-batch-10 upgrades (all ✅):
- ✅ `adding-rationals.html`: subtract warning box + final-cancellation check via `tryCancel()`.
- ✅ `rational-expressions.html`: interval-notation domain, three-case HA rule chips, slant asymptote line + label.
- ✅ `imaginary-sandbox.html`: parabola connection panel (discriminant < 0 → imaginary solutions → no x-intercepts); powers-of-i practice strip (6 questions, two-step remainder mechanic).
- ✅ `quadratic-slider.html`: discriminant chip — green "2 real zeros", yellow "1 zero — vertex on x-axis", red "no real zeros — parabola doesn't touch x-axis".
- ✅ `transformations.html`: chips already separated stretch vs reflect; "why h is opposite" ❓ reveal box added to h slider.
- ✅ `factoring-lab.html`: √(|ac|) heuristic hint shown when pair found and when none exist.
- ✅ `negexp.html`: "Flip or No Flip?" quiz (6 questions) added; plus/minus distinction built into quiz feedback.
- ✅ `complete-square.html`: three-form map sidebar; pattern-chip injection at step 3; imaginary-result note; quadratic formula derivation collapsible reveal.

Batch-10 upgrades (all ✅):
- ✅ `imaginary-sandbox.html`: powers-of-i practice strip (see above).
- ✅ `rational-simplifier.html`: original-denominator 🔒 panel after cancellation — cancelled factors flagged "still excluded!".
- ✅ `complete-square.html`: quadratic formula derivation reveal (see above).
- ✅ `piecewise-grapher.html`: parabola-piece mode (≡/⌒ toggle per piece, a/h/k inputs, curve drawing, vertex dot); vertex-outside-interval ⚠ warning; ⌒ example preset.
- ✅ `quadratic-standard.html`: vocabulary bridge chip — "zeros = roots = solutions = x-intercepts" always visible.

**New tools from video insights (now built):**
- ✅ Rational Multiplication/Division Stepper (U6-D7): KCF before factoring, factor/cancel with original-domain restrictions, 4 problems with reveal mechanic.
- ✅ Solving Rational Equations Stepper (U6-D8): excluded-value pre-check, LCD multiply-through, extraneous-solution detection (P3 is a "No Solution" example), 4 problems.

**May 2026 polish pass (committed eb2cc5d):** 5 UX fixes across existing tools —
- `rational-equations.html`: `white-space:pre` on `.eq-big` so ASCII fraction display renders correctly
- `log-properties.html`: "Blog Rule" → "Log Rule" typo fixed (6 occurrences)
- `quadratic-slider.html`: equation shows `y = x²` not `y = (x)²` when h=0
- `quadratic-standard.html`: root label suppressed when it coincides with vertex (tangent case)
- `exponential-explorer.html`: anchor labels grow in opposite directions to prevent overlap

**After each tool ships, run ChatGPT audit:** verify the unit page lesson row, homepage TOOLS array card, and PLAN.md are all updated before calling it done.

---

## Notes on handoff to Codex

When handing a task to Codex, give it:
1. The existing tool file it should pattern-match (e.g. "follow the structure of `complete-square.html`")
2. The exact CSS classes to use (`sk-box`, `f-hand`, `f-marker`, `tool-page`, `tool-main`, `tool-sidebar` — from `styles.css`)
3. The problem bank / data array written out (Codex should not invent math problems)
4. The unit page it should link back to
5. What the related tools links should be

Do NOT ask Codex to invent: the pedagogical framing, the "Try This" questions, the "Key Ideas" sidebar copy, or any tool where math edge cases matter (roots, asymptotes, extraneous solutions, domain restrictions).

---

## Design constraints (maintain these always)

- CSS variables from `styles.css` only — no inline color hex values except for canvas drawing code
- Canvas tools must be devicePixelRatio-aware (see `abs-value-grapher.html` for the pattern)
- All tools: no logins, no localStorage (except Elimination Race personal best — already there)
- Teacher voice throughout: casual, warm, "Mr. K" references in share boxes
- Background classes: `paper-grid`, `paper-lined`, `paper-dots` — rotate to keep pages feeling distinct
