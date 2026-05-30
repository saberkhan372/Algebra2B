# Batch 12: Unit 1 (25-26) Video Insights

Source transcripts (all current-year 25-26 versions):
- `transcripts/U1-D1 Video (25-26).txt` — slope, standard form → slope-intercept, graphing, systems (checking solutions)
- `transcripts/U1-D4 Video (25-26).txt` — piecewise functions intro, domain concept, bounded graphs, open/closed circles
- `transcripts/U1-D5 Video (25-26).txt` — piecewise functions deep dive, plug-in-boundary technique, multi-piece graphs, f(x) notation
- `transcripts/U1-D6 Video (25-26).txt` — point-slope form, parallel/perpendicular slopes, negative reciprocal
- `transcripts/U1-D7 Video (25-26).txt` — inequalities (flip rule), graphing on number line, absolute value as distance, two-branch solving
- `transcripts/U1-D8 Video (25-26).txt` — function notation, evaluating f(x), piecewise evaluation with function notation

---

## U1-D1: Slope and Linear Equations

Classroom flow:
- Slope is introduced as rise over run using a stairs analogy: steep stairs vs. gentle stairs vs. downhill.
- Negative slope = going downhill to the right. Larger negative = steeper downhill.
- Teacher converts from standard form to slope-intercept explicitly: "we want y by itself."
- Slope formula: `(y2 − y1) / (x2 − x1)` — "it doesn't matter which point is first, it's arbitrary."
- Graphing uses the y-intercept first, then rise/run from there.
- "A solution is any point on the line — there are unlimited points."
- System of equations: a point is a solution only if it satisfies **both** equations. Teacher checks in both.
- VUXHOY acronym introduced: Vertical = Undefined slope, Horizontal = zero slope. "You can't talk about the steepness of a vertical wall."

Tool implications:
- The Substitution Stepper and Elimination Race already cover systems. No tool covers **graphing a line from slope-intercept form** or **converting standard → slope-intercept**.
- New tool candidate: **Linear Equations Explorer** — input any form (slope-intercept, standard, point-slope), see conversion to other forms and the graph. VUXHOY chip for vertical/horizontal special cases.

---

## U1-D4: Piecewise Functions — Introduction

Classroom flow:
- Real-world anchor: income tax brackets. "Three separate lines with different slopes, bounded at different junctions."
- Domain introduced here: "the set of all x values where a graph exists."
- "A function is defined if you can actually draw a line in that area." Square roots of negative numbers = not defined.
- Domain of a linear function is all real numbers. But square root functions are restricted.
- Key vocabulary: **bounded on the left** vs. **bounded on the right** vs. **bounded on both sides**.
- Open circle = strict inequality (`>` or `<`). Closed circle = includes the value (`≥` or `≤`).
  - Teacher memory rule: "if there's more detail to this symbol (the ≥ line underneath), you fill in the circle."
- Student workflow: find the boundary value, draw a dotted vertical line, decide which side the graph goes (from the inequality), plot the y-intercept, use slope.

Tool implications for existing Piecewise Grapher:
- The tool is already good. Add a **"boundary first" prompt** that explicitly asks where the boundary is before the student draws anything.
- Add the teacher's vocabulary: "bounded on the left" / "bounded on the right" / "bounded on both sides" as labels on the graph.

---

## U1-D5: Piecewise Functions — Deep Dive

Key new technique not in any existing tool:
- **Plug in the boundary value for x** when the y-intercept is outside the active interval.
- "I don't want to start at the y-intercept of 3 — let me plug in the border, negative 1, into x and see what I get."
- This gives the actual starting point of that piece. Teacher uses this consistently across all examples.
- Multi-piece functions: graph pieces independently, connect with open/closed endpoints.
- `f(x)` notation introduced: "whenever you see f(x), that is the same thing as y."
- Lines vs. horizontal lines: "y = 3 is a horizontal line; y = 3x is a slope of 3. They look similar but are very different."

Tool implications for existing Piecewise Grapher:
- Add a **"plug in boundary" mode**: after a student enters a piece's formula and boundary, the tool prompts "what is f([boundary])?" and uses that answer as the anchor point — matching the classroom technique.
- Show `f(x) = y` equivalence as a persistent label on the formula input.

---

## U1-D6: Point-Slope Form and Parallel/Perpendicular Lines

Classroom flow:
- Point-slope form: `y − y₁ = m(x − x₁)` — "x₁ and y₁ go in with the minus signs. Be careful."
- Converting from standard form to slope-intercept to read the slope before applying perpendicular rule.
- Parallel slopes = same slope. Perpendicular = opposite reciprocal: "flip it and make it negative."
- Teacher distinguishes: opposite means sign changes (`3 vs. −3`), reciprocal means flipped (`½ vs. 2`).
- Finding slope from two points: `(y2 − y1) / (x2 − x1)`, then use either point in point-slope form.
- "More than graphing, we'll be finding point-slope" — emphasizes algebraic work over graphing.

Tool candidate: **Point-Slope Form Trainer**
- Input: either (slope + point), (two points), or (slope + y-intercept).
- Three output modes: point-slope form, slope-intercept form, graph.
- Parallel/perpendicular lane: given a line, generate the parallel slope (same) or perpendicular slope (flip + negate).
- Catch sign error: when `x₁` is negative, `x − (−3) = x + 3` — the double negative confuses students.

Unit: `u1.html`

---

## U1-D7: Inequalities and Absolute Value Equations

### Inequalities

Classroom flow:
- `>` or `<` → open circle. `≥` or `≤` → closed circle. Teacher memory: "more detail in the symbol = fill it in."
- **The flip rule**: when you multiply or divide both sides by a negative number, flip the inequality symbol. Teacher marks every such step with a red star.
- "Put your variable on the left — then the arrow goes in the same direction as the symbol."
- Multiple flips are possible in one problem (e.g., multiply by negative denom → flip; divide by negative coefficient → flip again). Result: "we actually flipped the sign twice."
- Fractions in denominators: "multiply by the denominator to clear it — if the denominator is negative, that's a negative multiplication, so flip."

### Absolute Value Equations

Classroom flow:
- Absolute value = distance from zero. Analogy: driving from L.A. to Santa Barbara (100 miles) or San Diego (120 miles) — "we'd never call it a negative distance."
- Oversimplification: "it turns numbers positive." But never distribute: "2|x − 3| ≠ |2x − 6| — you can't distribute inside absolute value."
- **Isolate the absolute value first** before branching. Teacher: "it's very important — isolate the absolute value."
- **Two branches**: if |expression| = k, then expression = k OR expression = −k.
- Teacher uses two downward arrows called "branches" as a visual.
- No solution: |x| = negative is impossible — "it's like asking what's 5 units to the left and right of zero but the answer is negative — doesn't exist."
- Check answers: "you can always, always, always check by plugging in."

Tool candidates:

#### New Tool: **Absolute Value Equation Stepper** (highest priority)
- Step 1: Is the absolute value isolated? If not, show the isolation move.
- Step 2: Draw two branches visually — label them `+` branch and `−` branch.
- Step 3: Solve each branch.
- Step 4: Check both answers in the original.
- No-solution detector: if the isolated right side is negative, show "no solution" immediately with explanation.
- Include the "never distribute" warning as a persistent chip.
- 6 preset problems: simple `|x| = k`, isolated with coefficient, must isolate first (subtract, then divide), fraction result, imaginary result (no solution), piecewise-style with two different answers.

Unit: `u1.html`

#### New Tool: **One-Variable Inequality Solver** (high priority)
- Shows the equation at the top. Student clicks the next step to reveal it.
- Every multiply/divide by a negative gets a highlighted "⚠ flip the symbol" card.
- Variable-on-left check: if the variable ends up on the right, suggest flipping.
- Number line rendered as final output with correct open/closed endpoint.
- 6 preset problems: simple, flip once, flip twice, fraction denominator (negative), multi-step with distribution, variable on right.

Unit: `u1.html`

---

## U1-D8: Function Notation

Classroom flow:
- "Evaluating an expression means plugging in values and simplifying. Always use parentheses."
- `f(x)` — "it's a name, not multiplication. f times x is different from f of x."
- "Whatever is in the parentheses is what you plug in for your variable." Teacher uses f(happy face) as a memorable example.
- Evaluating at negative numbers: "negative 7 squared is negative 7 times negative 7 = positive 49."
- Undefined: `f(2)` for `f(x) = 24 / (x − 2)` → "you can't divide by 0 — so undefined."
- Piecewise evaluation with f(x) notation: first identify which interval the input falls in, then use that piece's formula.
  - "If x = 99 and x > 6 gives just 5, you plug it in and just get 5 — there's nothing to substitute."

Tool candidate: **Function Notation Evaluator**
- Input: define f(x) with a formula (or pick a preset).
- Student enters a value, clicks "evaluate."
- Shows the substitution step: replace x with the input (with parentheses visible).
- Evaluates PEMDAS step by step.
- Special case: if input causes division by zero → "undefined."
- Piecewise mode: 2–3 piece function, student must first identify which piece applies, then evaluate.
- Connects to: Piecewise Grapher (show the evaluated point on the graph).

Unit: `u1.html`

---

## Cross-Cutting Insights from U1 (25-26)

1. **Boundary value as anchor point** (D4, D5, D8): the consistent technique across piecewise lessons is "plug the boundary x into the formula to get the starting point." The Piecewise Grapher should make this an explicit step.

2. **Sign discipline** (D1, D6, D7): minus signs appear in slope formulas (`(y2−y1)/(x2−x1)`), in point-slope form (`y − y₁`), in inequalities, and in absolute value branches. Every tool dealing with negative signs should treat them as the #1 source of errors and make sign choices visible.

3. **Open vs. closed endpoints** (D4, D5, D7): the same visual rule appears in piecewise functions (circle on graph) and inequality graphs (circle on number line). Both should use the same vocabulary: "fills in when ≤ or ≥, open when strict."

4. **f(x) is y** (D5, D8): this equivalence is introduced in D5 mid-lesson and formalized in D8. Tools should label function input boxes `f(x) = ` not just `y =`.

5. **Check your answers** (D1, D7, D8): teacher says "you can always, always, always check" in D7 and demonstrates checking in D1 (system solutions) and D8 (absolute value). Every solver tool should show a "check" step at the end.

---

## Recommended Build Order

| # | Tool | Priority | Why |
|---|---|---|---|
| 1 | Absolute Value Equation Stepper | 🔴 High | D7, no current tool, very specific step sequence, no-solution case |
| 2 | One-Variable Inequality Solver | 🔴 High | D7, flip rule is the #1 error in this unit |
| 3 | Point-Slope Form Trainer | 🟡 Medium | D6, no current tool, parallel/perp confuses students |
| 4 | Function Notation Evaluator | 🟡 Medium | D8, extends piecewise grapher to evaluation practice |
| 5 | Piecewise Grapher — boundary plug-in mode | 🟢 Small | D5, upgrade existing tool |
| 6 | Linear Equations Explorer | 🟡 Medium | D1/D6, form conversion + VUXHOY |
