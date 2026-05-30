# Batch 11: Site Audit and Improvement Roadmap

This pass is not video-derived in the usual sense. It is a cross-cutting audit that compares:

- All transcripts in `transcripts/` (batches 1–10)
- All lesson PDFs in `teacher and student work/` and `pdf-text/`
- The full list of built tools in `tools/`
- What each unit page (`u1.html` – `u9.html`) actually links to

The goal is a prioritized action list for what to add, fix, or link on the site.

---

## Audit Findings

### 1. Orphaned Tools — Built but Not Linked

Two finished tools exist in `tools/` but are not referenced from any unit page:

- **`tools/exponential-equations.html`** — should be linked from `u5.html`. This is distinct from `exponential-equation-solver.html`; both exist and cover different aspects of the same topic.
- **`tools/sincos-grapher.html`** — should be linked from `u7.html`. The existing `sine-cosine-builder.html` is already linked; `sincos-grapher.html` appears to be a second, complementary tool.

Fix: add links to both from the appropriate unit pages.

---

### 2. New Tools to Build

#### 2a. Literal Equation Isolator *(U3-D9, batch-10)*

Nothing on the site covers this. U3-D9 teaches it as a standalone multi-step skill:
- Identify the target variable.
- If it appears once: clear denominators, move everything else aside, isolate.
- If it appears in multiple terms: collect all target terms on one side, factor the target out, divide by the remaining group.
- Example workflow: `ax + bx = c` → `x(a + b) = c` → `x = c/(a+b)`.

The teacher also uses completing the square with letters to derive the quadratic formula (U3-D9 transcript). A "where did the quadratic formula come from?" reveal mode would work well as part of this tool or as a mode in the Complete the Square Trainer.

Tool shape:
- Student identifies the target variable from a dropdown.
- Steps: clear denominators → collect terms → factor out target → divide.
- Feedback when student collects terms to the wrong side.
- "Quadratic formula derivation" mode as a bonus reveal.

Unit: `u3.html`

---

#### 2b. Quadratic Three-Form Navigator *(U3-D2, U3-D3, U3-D9, batch-9, batch-10)*

This is the most-cited gap across the batch files. The teacher explicitly connects all three forms in every Unit 3 lesson, but the tools handle them in isolation. Students need one view that shows all three forms of the same quadratic simultaneously with labeled conversion paths between them.

Forms and paths:
- **Standard form** `ax² + bx + c`: central hub; hardest to graph directly
- **Vertex form** `a(x−h)² + k`: reached from standard via completing the square; gives the vertex
- **Intercept form** `a(x−p)(x−q)`: reached from standard via factoring; gives the zeros

Conversion paths (with labels):
- Standard → Vertex: complete the square
- Vertex → Standard: expand/FOIL
- Standard → Intercept: factor
- Intercept → Standard: FOIL
- Intercept → Vertex: midpoint of zeros → plug in for vertex

Teacher vocabulary to preserve: "zeros = roots = solutions = x-intercepts" should appear as a unified label on the intercept/zero side.

Batch-9 specifically says: "a three-form connector panel visible in multiple tools would reinforce this recurring theme."

Unit: `u3.html`

---

#### 2c. Domain Restriction Sorter *(U4-D4, batch-1)*

`function-xray.html` shows domains graphically for individual functions. What is missing is a practice tool for the *algebraic decision process* — given a function, which restriction rule applies, and what is the resulting domain in interval notation?

Three modes (matching the teacher's classroom structure):
1. **Square root only**: radicand ≥ 0, solve the inequality, write `[h, ∞)`
2. **Denominator only**: denominator ≠ 0, solve the equation, write domain with the excluded value removed
3. **Square root in denominator**: radicand > 0 (strict), solve, write `(h, ∞)`

Student flow: drag function into the correct restriction type → solve the inequality/equation → see a number line with open/closed endpoints → read the interval notation.

Batch-1 proposed this explicitly. The existing `function-xray.html` and `rational-expressions.html` touch the concept but don't teach the algebraic decision process as a standalone skill.

Unit: `u4.html`

---

#### 2d. Coterminal Angle and Radian Conversion Drill *(U7-D2, batch-6)*

The unit circle tools don't have focused practice on the two U7-D2 skills:

1. **Coterminal angles**: add or subtract 360° (or 2π) to find an angle in a target range. The teacher uses "theta + 360k" language and emphasizes the endpoint is unchanged.
2. **Degree/radian conversion**: taught via dimensional analysis — multiply by π/180 or 180/π with the units shown canceling. The teacher leans on the cancellation metaphor; tools should show it visibly.

Tool shape:
- Coterminal tab: give a degree or radian angle, ask for a coterminal angle in a specified range. Show the "add/subtract 360 or 2π" move explicitly.
- Converter tab: show the unit-fraction setup (degrees × π/180) with the degree units crossing out, leaving radians.
- Standard-position diagram: draw the terminal side for any entered angle, showing the direction arrow.

Unit: `u7.html`

---

### 3. Existing Tools with Clear Gaps

Ordered from smallest to largest effort.

#### 3a. Factoring Lab — Search Heuristic Hint *(U1-D3, batch-1, batch-9)*

The teacher gives a concrete systematic hint for finding factor pairs: "take the square root of ac as your starting estimate; if the sum is too small, spread the pairs further apart; if too big, pull them closer together."

Change: when a student is stuck on the product-sum search, add a hint chip:
- "Try pairs near √(product) first."
- After a wrong guess, show directional feedback: "that sum was too small — try factors further apart" or "too big — try factors closer together."

Batch-9 also confirms: the GCF-first gate is correct and should stay.

---

#### 3b. Abs Value Grapher + Transformations Explorer — "Why is h Opposite?" Tooltip *(U2-D3, batch-1, batch-9)*

Both tools involve horizontal shifts where students get confused about the sign direction. The teacher's definitive explanation (from U2-D3 transcript): "What value of x makes the inside expression equal zero? That's where the vertex lands."

For `|x − 3|`: plug in x = 3 → inside becomes 0 → vertex is at x = 3 (right), even though the equation shows "minus 3."

Change: when a student moves the h slider or enters an h value, show a tooltip or annotation that says "plug in x = [h] to make inside = 0 — that's why the vertex lands here." This single explanation resolves the most common confusion about h in any HK-form function (absolute value, square root, parabola, exponential, rational).

---

#### 3c. Imaginary Sandbox — Parabola Connection Panel *(U3-D1, batch-9)*

The powers-of-i practice strip already exists. The missing piece is the conceptual bridge between Units 2 and 3:

Teacher quote from U3-D1: "if you have a parabola that doesn't hit the x-axis, we use the quadratic formula, and the solution will contain i. So we can more accurately say it has no x-intercepts, because its solutions are imaginary."

Change: add a panel (or tab) that shows:
- A mini parabola floating above the x-axis
- The discriminant formula `b² − 4ac`
- When discriminant < 0: "no real zeros — solutions are imaginary — parabola has no x-intercepts"
- When discriminant = 0: "one real zero — parabola touches x-axis at vertex"
- When discriminant > 0: "two real zeros — parabola crosses x-axis"

The Quadratic Standard Form tool's discriminant chip should also display this language when the value is negative.

---

#### 3d. Adding Rationals — Subtract Mode *(U8-D3, batch-7)*

The tool currently covers addition only. The teacher identifies negative-distribution as the number-one source of sign errors in U8-D3:

"Take this negative and distribute it to everything in the second numerator — now it's just an addition problem."

Change: add a Subtract tab. The explicit Step 1 in subtract mode should be "distribute the negative sign across the second numerator" before any LCD or combining work begins. This single step, made visible, prevents the majority of sign errors in this operation.

---

#### 3e. Complete the Square — Three-Form Map and Quadratic Formula Derivation *(U3-D3, U3-D9, batch-2, batch-9, batch-10)*

Two additions:

1. **Three-form map chip** at the top of the tool: small diagram showing standard ↔ vertex ↔ intercept with labeled paths. This contextualizes where completing the square fits. Batch-9 calls this the "most important cross-unit pattern" for Unit 3.

2. **"Where did the quadratic formula come from?" reveal**: the teacher derives it live in U3-D9 by completing the square on `ax² + bx + c = 0` with letters. Adding a collapsible "show the derivation" mode would make the tool a lot more meaningful for students who ask why the formula works.

---

#### 3f. Piecewise Grapher — Vertex-Outside-Interval Warning *(U3-D10, batch-10)*

The tool already supports parabola pieces. Batch-10 surfaces a specific edge case the teacher handles explicitly:

"If the vertex falls outside the active interval, you can't use the vertex as a graphing anchor. Plug in the boundary points and nearby x-values instead."

Change: when a parabola piece is defined on an interval and the vertex's x-value falls outside that interval, show a warning chip: "vertex is outside this interval — graph by plugging in boundary and nearby x-values."

---

#### 3g. Rational Simplifier / Equations — Original Denominator Tracker *(U8-D2, U8-D3, U8-D4, batch-7)*

The excluded-values rule appears in every rational-expression lesson and the teacher repeats it in the same words every time: "excluded values come from the original denominator — even canceled factors."

Audit finding: the current tools show excluded values, but after a factor cancels, students lose sight of why. The "original denominator" should remain visible throughout, even after simplification or solving.

Change across all rational-expression tools: keep an "original denominator" strip visible even after cancellation steps. When a factor cancels in numerator and denominator, the excluded value from that canceled factor should remain labeled and visible (perhaps grayed out but present) so students can see it still applies.

---

### 4. Newly Transcribed Videos — Not Yet Analyzed

The following 46 videos were transcribed in this pass (batch-11). They have not yet had a batch-insight analysis run:

**Unit 1 (25-26) — highest priority, these are your current lessons:**
- U1-D1 Video (25-26)
- U1-D4 Video (25-26)
- U1-D5 Video (25-26)
- U1-D6 Video (25-26)
- U1-D7 Video (25-26)
- U1-D8 Video (25-26)
- Unit 1 Test Review Video (25-26)
- U2-D3 Video (Part 2) 25-26
- Unit 3 Post-Break Warm-up Video

**Older lesson versions (may surface different explanations):**
- U1 - D1 Summer Review Video
- U1 - D2 Video, U1 - D4 Video, U1 - D5 video, U1 - D6 Video, U1 - D7 Video (unlabeled/older)
- U2 - D1 Video, U2 - D2 Video (unlabeled/older)
- U2-D3 Video, U2-D4 Video (unlabeled/older)
- U2-D5 Video (PART 1), U2-D5 Video (PART 2)
- U3-D1 Video (24-25), U3-D3 Video (24-25)
- U3-D2 Video, U3-D4 video, U3-D5 Video (unlabeled/older)
- U4-D5 Video

**Review and study guide videos — rich with "watch out for" moments:**
- U1 Review Video
- U2 Review Video
- U3 Review Video
- U4 Review Video
- Unit 3 Review Video
- Unit 5 Study Guide Video
- Unit 6 Study Guide Video (23-24)
- Unit 6 Study Guide Extra Problems Video
- Unit 7 Study Guide Video (23-24)
- Unit 9 Review Video (Conics)
- A2B Final Review Video (23-24)

**Calculator and misc:**
- U5 Calculator Help Video
- PLYSMLT Video
- Ln and PLYSMLT Calculator Help Video
- Transformation vid
- Copy of HW Submission Video

Next step: run a batch-12 analysis on the Unit 1 (25-26) transcripts specifically, since these are the most current versions of those lessons and u1.html has the fewest tools relative to the material it covers.

---

## What We Actually Found When Auditing the Code

Running the audit against the live files revealed that the site was substantially more complete than the batch notes suggested. Items 4–9 from the original list were already implemented:

| Item | What the batch notes said was missing | What the code actually had |
|---|---|---|
| 3b. Abs Value Grapher h-tooltip | No tooltip for h direction | Transformations Explorer had full ❓ button with "what x makes inside zero?" explanation. Abs Value Grapher got a new live tooltip added. |
| 3c. Imaginary Sandbox parabola panel | No discriminant/no-x-intercepts connection | Already built: mini parabola SVG + discriminant b²−4ac panel with all three cases |
| 3a. Factoring Lab heuristic | No √(ac) search hint | Already had full search strategy sidebar: "start near √\|ac\|, sum too small → spread apart, too big → pull closer" |
| 3f. Piecewise Grapher vertex warning | No vertex-outside-interval warning | Already implemented: `vertexInInterval()` check + warning chip rendering |
| 3g. Rational tools original denominator | No persistent original denominator panel | All three tools (`rational-simplifier`, `rational-equations`, `rational-multdiv`) already had original-denominator tracking and excluded-value notes |
| 3e. Complete the Square | No three-form map, no formula derivation | Already had `📐 WHERE DID THE FORMULA COME FROM?` collapsible panel with full letter-by-letter derivation |

The Adding Rationals tool (item 3d) was the only feature gap confirmed in code. It had a `+/−` toggle but buried the distribute step in Step 4. The title, tagline, and step structure were updated.

---

## Completed in This Pass

| # | Item | Change made |
|---|---|---|
| 1 | Link `exponential-equations.html` → `u5.html` | Added lesson row (D6 step-by-step) + tool card "Exponential Equations Stepper" |
| 2 | Link `sincos-grapher.html` → `u7.html` | Added lesson row (D3–4) + tool card "Sine / Cosine Graph Builder — from the circle" |
| — | Global tool count | All pages updated 50 → **52 tools** |
| 3 | Adding Rationals — subtract distribute step | Renamed to "Adding & Subtracting", new tagline, dedicated **Step 2: distribute the negative** card appears before LCD work when operator is −, remaining steps renumber dynamically |
| 4 | Abs Value Grapher — h-tooltip | Added live `#h-why` div below h-slider; shows "plug in x = [h] to make inside = 0" when h ≠ 0; wired to both range slider and number input |

---

## Remaining Action List

| # | Item | Status |
|---|---|---|
| 10 | Literal Equation Isolator | ✅ built — `tools/literal-equations.html`, linked from u3 D9 |
| 11 | Domain Restriction Sorter | ✅ built — `tools/domain-restriction.html`, linked from u4 D4 |
| 12 | Quadratic Three-Form Navigator | ✅ already existed as `tools/quadratic-forms-explorer.html` (one parabola, three forms, all in sync) |
| 13 | Coterminal Angle + Radian Conversion Drill | ✅ built — `tools/coterminal-radian.html`, linked from u7 D2 |
| 14 | Run batch-12 analysis on U1 (25-26) new transcripts | ⏳ pending — 46 new transcripts being generated; run after completion |

Total tool count after this pass: **55**
