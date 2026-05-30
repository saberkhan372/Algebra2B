# Batch 14: Final Review, U1–U4 Review Videos, Transformation vid

Source transcripts analyzed in this pass:
- `transcripts/A2B Final Review Video (23-24).txt` — year-end cumulative exam review
- `transcripts/Unit 3 Post-Break Warm-up Video.txt` — what students forget over winter break
- `transcripts/U4 Review Video.txt` — U4 test prep (radical equations, domain, inverses)
- `transcripts/U1 Review Video.txt` — U1 test prep (all U1 topics)
- `transcripts/U2 Review Video.txt` — U2 test prep (transformations, domain/range, functions)
- `transcripts/U3 Review Video.txt` — U3 test prep (all three quadratic forms, word problems)
- `transcripts/Transformation vid.txt` — standalone transformation-by-coordinates demo
- `transcripts/U1 - D1 Summer Review Video.txt` — summer/pre-course algebra 1 review

---

## A2B Final Review Video (23-24) — Year-End Cumulative

### What the review covers

Polynomial factoring (diff of squares/cubes, GCF), radical equations with extraneous check, exponential equations (same-base and log-both-sides), rational expressions (add/subtract/solve), completing the square, quadratic word problems (projectile), interest formulas (simple/compound/continuous), graphing (abs value, parabola, polynomial, exponential, log, reciprocal), coterminal angles, degree/radian conversion, SOH CAH TOA, periodic functions.

### Confirmations for existing tools

- **Radical Equation Solver (just built)** — teacher explicitly demos extraneous solutions with √(k−8) − (k) = 0: two answers, one fails the check, cross it out. Tool confirmed correct.
- **Exponential Model Builder** — PERT mnemonic confirmed. n = 12 monthly, 365 daily, 4 quarterly, 52 weekly. Tool has these.
- **Log graphing strategy** — "make inside equal to 1" → y=0; "make inside equal to the base" → y=1. Confirmed; Exponential Explorer HOW TO USE matches.
- **Coterminal Angles & Radians** — add/subtract 360 for coterminal; π/180 and 180/π multipliers. Tool confirmed.
- **SOH CAH TOA** — teacher catches secant error in the video: "Secant is hypotenuse over adjacent." Tool's sidebar already has the right formula.
- **Polynomial Sketch Pad** — end behavior rules, multiplicity cross/bounce confirmed.

### New insights not in any tool

#### 1. Max turns = degree − 1 (polynomial graphing)
Teacher says explicitly: "The number of turns is the highest degree minus one." The Polynomial Sketch Pad shows degree and end behavior but never states this rule. Worth adding as a chip or sidebar note.

#### 2. Reciprocal function 1/(x−h) + k — two-point anchor strategy
Teacher shows: VA at h, HA at k, then plots two anchor points (pick x values 1 unit from VA). This is the same graphing strategy Mr. K uses for exponentials and logs. The Rational Expressions tool covers asymptotes but not this explicit anchor-point approach for simple reciprocal functions.

#### 3. DRT word problems are on the U1 final
Teacher works two DRT problems: plane + wind / plane − wind. "720 = (P + W) × 8, 720 = (P − W) × 24 → divide → elimination." These are explicitly test content. No tool on the site covers word-problem setup (assigning variables, writing equations from a scenario). This is a genuine curriculum gap.

---

## Unit 3 Post-Break Warm-up Video — What Students Forget

### What this surfaces

This is the first lesson after winter break in U3. The teacher picks topics students reliably forget:

1. **Standard form vertex**: Students forget −b/2a. Confirmed by tool already.
2. **Rationalizing denominators**: Teacher says "can't have a root in the denominator" and shows conjugate method for complex denominators. SOH CAH TOA note we added today directly addresses this pattern.
3. **Transformation order**: Teacher re-explains PEMDAS order: horizontal shift (inside) → stretch → vertical shift. Not vertical shift first. The Transformations Explorer already explains this, but the HOW TO USE box could make the PEMDAS framing more explicit.
4. **Point-slope → slope-intercept conversion**: Students forget to distribute the slope before combining constants. No standalone tool specifically drills this conversion.
5. **Slope with fractions**: Teacher uses slope = −1/7 and students struggle with it. Confirmed by Point-Slope Form Trainer already.

### No new tools needed

All flagged areas already have tools or sidebar notes. The main takeaway: **transformation order (PEMDAS framing)** is a persistent post-break gap worth reinforcing in the Transformations Explorer sidebar.

---

## U4 Review Video — Radical Equations, Domain, Inverses

### Key confirmations

- **Radical Equation Solver (just built)** — teacher works a problem with isolate → ÷ both sides → square → check. Steps match exactly. "Had you gotten another solution, you'd just cross it out."
- **Domain Restriction Sorter** — teacher explicitly names the three cases and the three rules. Tool confirmed correct.
- **Inverse Function Revealer** — teacher says "show both ways, because that is the textbook definition of proving two functions are inverses." The tool shows both f∘g and g∘f in Inverse mode, but this phrasing ("textbook definition") should appear in the sidebar.

### New insight: "You must show BOTH compositions"

The teacher is emphatic: "You need to show both ways because that is the textbook definition of proving two functions are inverses." The Composition & Inverse Lab shows both, but doesn't frame it as a requirement. Add a note in the sidebar: "To prove f and g are inverses, you must show f(g(x)) = x AND g(f(x)) = x — both."

---

## U1 Review Video — Full U1 Scope

### What this confirms

Factoring (GCF first, then product-sum), solving quadratics by factoring, slope formula, x/y intercepts, absolute value inequalities (already in Inequality Solver), literal equations (already in Literal Equation Isolator), systems by substitution + elimination (already in tools), graphing linear inequalities (already in Inequality Region Explorer).

### New insights

#### DRT word problems — confirmed test content
Teacher works a plane/wind problem: "The plane speed plus the wind speed is 90 mph. The plane speed minus the wind speed is 30 mph. Add the equations — plane speed is 60 mph." Two-equation system where the setup (defining variables, writing distance = rate × time) is the hard part. **No tool teaches this setup step.**

Teacher also works an adult/child ticket problem: same structure — two unknowns, two equations, elimination. Again, the setup step is the gap.

#### "No solution" and "all real numbers" for linear equations
Summer Review video covers: when you simplify to `2 = 5` → no solution; when you simplify to `−3 = −3` → all real numbers. This is a U1 concept and the existing Inequality Solver only handles inequalities. No tool addresses the no-solution / infinite-solutions outcome for linear equations. The Substitution Stepper always gives a unique solution — none of the 4 problems demonstrate this edge case.

---

## U2 Review Video — Transformations and Functions

### Key confirmations

- Domain/range in interval notation, end behavior — all covered.
- Writing transformed equation from graph (find a, h, k from picture) — Transformations Explorer handles this conceptually.

### New insight: Transformation via coordinate table
Teacher shows a clean method for transforming a set of discrete points: define formulas `(x_new, y_new) = (x + h, a·y + k)` and apply them to each point in a table. For example: shift right 2, multiply y by ½, shift up 1 → formula is `(x + 2, ½y + 1)`. Apply to A = (−3, −2) → (−1, 2). This is the **table-of-points** transformation approach, which is different from the graph-based approach in the Transformations Explorer. Students who learn from tables (not graphs) benefit from this framing. No existing tool shows it this way.

### System of abs value / quadratics
Teacher shows two parabolas intersecting — "where do they cross? Two solutions sometimes, one solution, or no solution." The Inequality Region Explorer handles system shading, but no tool shows solving a system of two quadratics for intersection points.

---

## U3 Review Video — Three Quadratic Forms

### Confirmations

- Standard form graphing with −b/2a vertex, then a-value pattern for additional points.
- Intercept form: vertex x-value is the midpoint of the two intercepts.
- Completing the square: isolate x² + bx, add (b/2)² to both sides.
- Quadratic word problems: draw a picture, find vertex for max, set height = target for specific time.

### No new tools needed

All three quadratic form tools (Quadratic Standard Form, Quadratic Forms Explorer, Complete the Square Trainer, Quadratic Word Problems Trainer) are aligned. The U3 review is well-covered.

---

## Transformation vid (Standalone)

Brief teacher-made video reinforcing the coordinate-formula approach to transformations:
- Identify h, k, a from the function
- Write the formula as `(x + h, a·y + k)`
- Apply to each point in the table

This is consistent with the U2 Review insight above. Confirms this approach is taught in class.

---

## U1 Summer Review Video — Pre-Course Scope

Covers Algebra 1 review: slope, intercepts, multi-step equations (fractions, cross-multiplication), no-solution / all-real-numbers, inequalities (flip rule), FOIL, exponents, factoring. This is the very beginning-of-year content.

No new tool gaps — all covered by existing U1 tools. The no-solution / all-real edge case (confirmed again here) is the one gap.

---

## Recommended Action List

| # | Item | Priority | Type |
|---|---|---|---|
| 1 | **DRT Word Problem Trainer** (U1) | 🔴 High — explicit test content, no tool exists | New tool |
| 2 | **Polynomial Sketch Pad** — add "max turns = degree − 1" rule | 🟢 Trivial | Upgrade |
| 3 | **Composition & Inverse Lab** — add "must show BOTH ways" note | 🟢 Small | Upgrade |
| 4 | **Transformations Explorer** — add PEMDAS order framing to sidebar | 🟢 Small | Upgrade |
| 5 | **Substitution Stepper** — add no-solution / all-real-numbers problem | 🟡 Medium | Upgrade |
| 6 | **Transformation via coordinate table** — new mode in Transformations Explorer | 🟡 Medium | Upgrade/New mode |

---

## Remaining Unanalyzed Transcripts

After batch-14, these transcripts remain unread (all older versions of already-analyzed lessons — lower priority):

- U1: D2 (old), D4 (old), D5 (old), D6 (old), D7 (old)
- U2: D1 (old), D2 (old), D3 (old), D4 (old), D5 PART 1+2 (old), D3 Part 2 25-26
- U3: D1 24-25, D2 (old), D3 24-25, D4 (old), D5 (old/24-25)
- Misc: PLYSMLT, Ln+PLYSMLT, U5 Calculator Help, Copy of HW Submission

These are very low priority — all topics fully covered by tools already. The PLYSMLT and calculator help videos teach TI-84 workflow (no tool needed). The HW Submission video is administrative.
