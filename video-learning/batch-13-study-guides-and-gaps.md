# Batch 13: Study Guides, Unit 4 Gap, and Conics

Source transcripts analyzed in this pass:
- `transcripts/Unit 1 Test Review Video (25-26).txt` — cumulative U1 review
- `transcripts/U4-D5 Video.txt` — exponent rules, rational exponents, inverse functions, radical equations
- `transcripts/Unit 5 Study Guide Video.txt` — logs, interest formulas, graphing logs, solving exp/log equations
- `transcripts/Unit 6 Study Guide Video (23-24).txt` — polynomial operations, composition notation, roots, division, graphing
- `transcripts/Unit 7 Study Guide Video (23-24).txt` — trig review: triangles, special angles, standard position, periodic functions
- `transcripts/Unit 9 Review Video (Conics).txt` — parabolas, circles, ellipses, hyperbolas

---

## Unit 1 Test Review (25-26) — Validation Pass

### What the review covers

Systems (substitution, elimination, graphing), linear equations (slope-intercept, point-slope, parallel/perp), piecewise functions, inequalities, absolute value equations, function notation, exponent rules, factoring.

### Key confirmations for existing tools

- **Piecewise**: Teacher says "plug this number into the function" to get the starting point — the new anchor-pts chip directly supports this.
- **Inequalities**: Teacher circles every step where you divide by a negative in red — matches the ⚠ flip-alert in the Inequality Solver exactly.
- **Absolute value**: "You always want to isolate the absolute value" — matches the Stepper.
- **Function notation**: "Plug this number wherever you see an x" — matches the Function Notation Evaluator.
- **Factoring**: "There will be two numbers that work, so be patient and try things" — the √(product) search heuristic hint in Factoring Lab directly addresses this.

### New insight not yet in any tool

- **Perpendicular slope language**: Teacher says "flip the fraction and make it opposite." The Point-Slope Form Trainer shows the steps, but the "flip and negate" framing is specific. The Parallel/Perp tab uses "flip-and-negate" — confirmed correct.
- **Fractions in substitution**: "Your answer should be clean even though in the middle steps you do get fractions." This is an important reassurance to add to the Substitution Stepper sidebar: "Messy middle steps are normal — the final answer will usually be clean."
- **How to read point-slope form**: "Remember, it's opposite. Because it's minus, my point is 1, negative 3." This is the same h-direction confusion from abs value and transformations. The point-slope form's signed-substitution display already shows this.

### Verdict

All U1 tools are well-aligned with the test. **No new tools needed.** Small text addition: add "Messy middle steps are normal — the final answer is usually clean" to the Substitution Stepper sidebar.

---

## U4-D5 — Exponent Rules + Inverse Functions + Radical Equations

### Classroom flow

**Exponent rules review:**
- Power to a power → multiply exponents.
- Same base next to each other → add exponents. "1, 2, 3, 4, 5 ks times another 3 ks makes 8 total ks — so the rule is add."
- Division → subtract. Negative exponent → flip to other side of fraction.
- Zero power → 1. "Anything to the 0 power is just 1."
- Distributing an exponent breaks it into: coefficient^n, variable^(old·n).

**Rational exponents:**
- x^(m/n): numerator is the exponent, denominator is the root.
- Teacher explicitly says "I want you to demonstrate that you know that the top number is the exponent and the bottom number is the root — you can't just plug it into a calculator."

**Inverse functions:**
- Swap x and y, then solve for y.
- **Domain and range swap**: "The domain and range of a function become the range and domain of its inverse."
- Proving two functions are inverses: compose both ways (f∘g and g∘f), both must give x.
- "You need to show both ways because that is the textbook definition of proving two functions are inverses."

**Radical equations (extraneous solutions):**
- Square both sides to eliminate the radical.
- **Extraneous solutions**: "If you don't check your answer, you're risking the fact that your answers — you're assuming the answers will work."
- Teacher demos: A = 2 works, A = 1 doesn't. "We tried A equals 1 in the original equation and it didn't work, so we cross it out."
- "This is super important. You might see this on the test."

**Vertical/horizontal line test for inverses:**
- Vertical line test → checks if it's a function.
- Horizontal line test → checks if the inverse is also a function.

### Tool implications

#### Inverse Function Revealer — add domain/range swap annotation
The teacher explicitly states: "The domain and range of a function become the range and domain of its inverse." The existing tool shows the reflection over y=x but doesn't display domain/range swap as a labeled chip. Add a chip pair: `domain of f = range of f⁻¹` and `range of f = domain of f⁻¹` that updates live.

#### New Tool Candidate: Radical Equation Solver with Extraneous Check
The teacher spends significant time on extraneous solutions in radical equations. The Domain Restriction Sorter covers algebraic restrictions, but there's no tool that walks through:
1. Isolate the radical.
2. Square both sides.
3. Solve the resulting equation.
4. **Check each solution in the original** — if it fails, it's extraneous.

Tool shape: 4–5 preset radical equations. Steps reveal one at a time. After solving, a mandatory "Check" step shows substitution back into the original. Extraneous solutions get a red ✗ chip.

Unit: `u4.html`

---

## Unit 5 Study Guide — Log + Exponential Confirmation

### Key insights not in existing tools

**"Make the inside equal to 1 for your first graph point":**
The teacher says explicitly: "I want to make the inside of this 1, so I'll make x = 2. So f(2) means log base 5 of (2−1) which is just 1. This in itself says 5 to the what power is 1. It's 0."

This is the teacher's specific strategy for plotting the first anchor point of any log graph — set the inside expression equal to 1, solve for x, y = 0. The Log↔Exp Converter and Log Properties Sandbox don't teach the graphing technique. 

**"Log without a base is base 10":**
Confirmed explicitly. Already in Log Properties sidebar, but worth repeating in tool copy wherever a bare `log` appears.

**Interest formulas — frequency keywords:**
- Monthly = n is 12
- Daily = n is 365
- Weekly = n is 52
- Quarterly = n is 4
- Continuously = use Pe^(rt), not the compound formula

The Exponential Model Builder already has these. No change needed.

**Condensing with a fractional coefficient:**
"If you see log of something with a fraction out front, that's the same as the fraction power inside." For example, (1/2)log x = log(√x). The Log Properties Sandbox handles this — confirming it's correct.

### Tool implications

#### Upgrade: Exponential Function Explorer — add "make exponent 0 / make exponent 1" annotation
The teacher's consistent graphing strategy: "Plug in 0 because you want the exponent to be 0. Plug in 1 because you want to make the exponent 1." These are the two strategic points. Add a chip: "strategic x-values: makes exponent 0, makes exponent 1" with arrows showing those points on the graph.

---

## Unit 6 Study Guide — Polynomial Confirmation

### Composition vs multiplication confusion (confirmed critical)

Teacher uses function notation with a circle (∘ = compose) and a dot (· = multiply). Students confuse these.

"This means F times G of negative 1. So first, find what F of negative 1 is. Notice, this is different than of. This is a closed circle. So this is multiplying."

The Composition Machine currently uses f∘g notation. A persistent warning should distinguish:
- `f ∘ g` = compose (f after g, inner to outer)
- `f · g` = multiply the outputs

#### Complex roots come in conjugate pairs (confirmed)

"Complex roots come in pairs of 2 because of the quadratic formula. So there could be 2 complex and 3 real or 4 complex and 1 real. Those are the only combinations." — already in tools.

#### Polynomial degree naming

Teacher gives names: linear, quadratic (parabola), cubic, fourth degree, etc. The Polynomial Sketch Pad doesn't name the degree — small annotation worth adding.

---

## Unit 7 Study Guide — Trig Confirmation

### Inverse vs reciprocal (confirmed critical teaching moment)

"What's the difference between cosine inverse and secant? Remember, cosine inverse is not the same thing as 1 over cosine. 1 over cosine is secant. This is used to cancel. Cosine inverse and cosine — it becomes x."

- `cos⁻¹` = inverse trig, used to cancel cosine and get an angle
- `sec` = 1/cos, the reciprocal function

The SOH CAH TOA Triangle Solver already has this as a sidebar note. Confirmed correct.

### Rationalizing in special right triangles (confirmed required)

"If you have a square root in the denominator, multiply top and bottom by that square root — I will require that, because technically you can't divide by an irrational number."

The SOH CAH TOA tool doesn't enforce rationalization in its answers. Consider adding a "rationalize the denominator" note when an answer contains a radical in the denominator.

### Periodic function vocabulary (confirmed)

Period = "peak to peak, or valley to valley, or from any point to where it repeats." Amplitude = half the total height from valley to peak. Midline = halfway between max and min. All confirmed in existing Trig Explorer and Sine/Cosine Graph Builder.

---

## Unit 9 Review — Conics (ENTIRELY NEW CONTENT)

The site has **zero tools for conics**. The Unit 9 transcript covers a full unit. This is the largest tool gap on the site.

### What the unit covers

**Parabolas** — standard form: x = a(y−k)² + h (horizontal) or y = a(x−h)² + k (vertical).
- Vertex is always (h, k) — opposite the signs in the equation.
- p = distance from vertex to focus. a = 1/(4p).
- Opens in the direction of the positive variable.

**Circles** — (x−h)² + (y−k)² = r²
- Center (h, k). Radius r (always positive).
- Distance formula to find r from center + point.
- Midpoint formula to find center from endpoints of diameter.
- Tangent line = perpendicular to the radius at the point of tangency. Slope = negative reciprocal of radius slope.

**Ellipses** — (x−h)²/a² + (y−k)²/b² = 1 (plus sign)
- a > b. Major axis along the direction with larger denominator.
- Foci: c² = a² − b². Foci are on the major axis, c units from center.
- "The bigger number, the a² is under the x. So it's a horizontal ellipse."

**Hyperbolas** — (x−h)²/a² − (y−k)²/b² = 1 (minus sign)
- Sign is minus (key distinction from ellipse).
- First variable = direction of opening (x first → horizontal, y first → vertical).
- Foci: c² = a² + b² (opposite sign from ellipse).
- Box method: draw a box using a and b, draw corner-to-corner asymptotes, hyperbola hugs the asymptotes.
- "You don't need to worry about whether the a² is a bigger number with hyperbolas. You look at what comes first, y² or x²."

**Identifying conics from an equation:**
- Plus sign between squared terms = ellipse (or circle if a = b).
- Minus sign = hyperbola.
- Only one variable squared = parabola.
- Can require dividing through to get into standard form first.

### Tool candidates — Conics

#### New Tool Candidate: Conic Identifier + Grapher *(highest new-tool priority)*

This is a large gap: one full unit, 26 minutes of review video, zero tools.

Suggested design — single tool with four modes:

**Mode 1: Parabola**
- Input: equation in y = a(x−h)² + k or x = a(y−k)² + h form.
- Shows: vertex (h, k) labeled, opens up/down/left/right, axis of symmetry.
- Optional: input p value to show focus and directrix.

**Mode 2: Circle**
- Input: center (h, k) and radius r, or equation in standard form.
- Shows: center, radius annotation, graph.
- Optional: tangent line at a point on the circle.

**Mode 3: Ellipse**
- Input: standard form.
- Shows: center, major/minor axes labeled, vertices, co-vertices, foci.
- "Bigger number under x → horizontal. Bigger number under y → vertical."

**Mode 4: Hyperbola**
- Input: standard form.
- Shows: center, vertices, asymptotes (dashed), box (dashed), foci.
- "X comes first → opens horizontally. Y comes first → opens vertically."

Plus a **"Identify This Conic"** tab: give students an equation and ask them to select the conic type and key properties.

Unit: `u9.html` — this unit currently has only 3 tools (all stats/probability). Adding conics tools significantly expands U9 coverage.

---

## Recommended Action List

| # | Item | Priority | Type |
|---|---|---|---|
| 1 | Conic Identifier + Grapher | 🔴 Highest — entire unit gap | New tool |
| 2 | Radical Equation Solver with Extraneous Check | 🟡 Medium | New tool |
| 3 | Inverse Function Revealer — domain/range swap chip | 🟢 Small | Upgrade |
| 4 | Substitution Stepper — "messy middle steps are normal" note | 🟢 Trivial | Upgrade |
| 5 | Composition Machine — ∘ ≠ · warning | 🟢 Small | Upgrade |
| 6 | SOH CAH TOA — rationalize-denominator note | 🟢 Small | Upgrade |
| 7 | Exponential Explorer — "make exponent 0/1" anchor annotation | 🟢 Small | Upgrade |

## Still Not Analyzed (from batch-11)

These 33 transcripts remain unanalyzed after batch-13:
- U1 older versions (D1 Summer Review, D2, D4, D5, D6, D7, Review)
- U2 older versions (D1, D2, D3 old, D4 old, D5 PART 1+2, Review)
- U2-D3 Part 2 (25-26)
- U3 older versions (D1 24-25, D2 old, D3 24-25, D4 old, D5 old, Review)
- Unit 3 Post-Break Warm-up Video
- U4 Review Video
- Unit 6 Study Guide Extra Problems Video
- A2B Final Review Video (23-24)
- Misc: PLYSMLT, Ln+PLYSMLT, U5 Calculator Help, Copy of HW Submission, Transformation vid

Most of these are older versions of lessons already analyzed in batches 1–12. The highest remaining value is in `U3 Post-Break Warm-up Video` (likely surfaces what students forgot over break) and `A2B Final Review Video (23-24)` (year-end cumulative).
