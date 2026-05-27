# Batch 9 Video Insights: 25-26 Revisit — U1/U2/U3 Foundation Lessons

Source transcripts (all 25-26 school year versions):
- `transcripts/U1-D2 Video (25-26).txt`
- `transcripts/U1-D3 Video (25-26).txt`
- `transcripts/U2-D3 Video (Part 1) 25-26.txt`
- `transcripts/U2-D4 Video (25-26).txt`
- `transcripts/U2-D6 Video (25-26).txt`
- `transcripts/U2-D7 Video (Part 1) 25-26.txt`
- `transcripts/U2-D7 Video (Part 2) 25-26.txt`
- `transcripts/U3-D1 Video (25-26).txt`
- `transcripts/U3-D3 Video (Part 1) 25-26.txt`
- `transcripts/U3-D3 Video (Part 2) 25-26.txt`

Earlier batches (1-8) already covered older versions of these same lessons. This batch surfaces only what is **new or deeper** vs. prior synthesis.

---

## U1-D2 (25-26): Substitution and Elimination

Mostly consistent with batch-2. Key confirmations and additions:

- "Combine" instead of "add/subtract" for elimination is deliberate — teacher uses it every year.
- Checking both original equations is mandatory: "you can check every problem to really know you've got it right before you turn it in."
- Strategy tip for elimination: when neither variable cancels directly, multiply both equations simultaneously (not just one). Example: multiply one by 5 and the other by 2 to make y-coefficients 10 and −10.
- Substitution is required even if you prefer elimination: "you need to know both so you can follow directions for full credit."
- Common fraction trap: when isolating a variable that results in a fraction (e.g., `y = (3/2)x + 1/2`), students must distribute the other equation's coefficient carefully over the fraction.

Tool implications:
- Substitution Stepper: already prompts "check both originals." Keep this.
- Elimination Race: the "combine equations" language is confirmed correct. No change needed.

---

## U1-D3 (25-26): Factoring Quadratics

Consistent with batch-2. Key additions:

- Product-sum method applied universally — even when `a = 1`, teacher uses the same ac-then-b framework rather than shortcutting. This eliminates a different mental model for simple vs. complex trinomials.
- **GCF-first is an absolute rule**: "before you do anything, see if you can take out a GCF." This applies even when students think they've already factored completely.
- **Calculator strategy for hard factor pairs**: when the product is large (e.g., 120), take its square root (~11) as a starting estimate. Factor pairs near 11 are close together; if you need a large sum, try pairs further apart. This is a concrete systematic approach students can use instead of guessing.
- "If the sum is too small, move further apart. If the sum is too big, move closer together." This is an efficient search heuristic worth building into tool feedback.
- After factoring and setting factors equal to zero: "you can check your answer by foiling." Teacher explicitly names this as a verification step.

Tool implications:
- Factoring Quadratics Lab: add a "search heuristic" hint mode that shows "try pairs near √(product)" when students are stuck finding factor pairs.
- When a user's factor pair sum is close but not right, hint: "you're close — try spreading the factors further apart" or "try pulling them closer together."

---

## U2-D3 (25-26): Absolute Value Transformations (Part 1)

Mostly consistent with batch-1. Key new insight:

- **Why h shifts opposite direction — the definitive explanation**: "What do I have to plug in for x to make the inside zero?" For `|x − 3|`, plugging in x = 3 gives zero, so the vertex moves to x = 3 (right). This is the clearest explanation of why inside shifts are opposite. It should be the tooltip or hint whenever students get the h-direction wrong in the Transformations Explorer.
- Vertex is introduced here (not in a later unit): the vertex of `|x|` is at (0, 0), and transforming h and k moves the vertex. The center metaphor: "if we were to shift this around, imagine we're moving the vertex left or right or up or down."
- Vertical stretch confirmation: `y = 2|x|` makes every output double; the slope was 1-over-1, now it's 2-over-1. Teacher explicitly names it "vertical stretch by a factor of 2."
- The table-method sanity check: plug in a few values to confirm a transformation is what you expect. "I want you to think, so just said first glance x minus 3 what if I told you shift right 3 — well, why? What do you mean minus 3?"

Tool implications:
- Transformations Explorer: when a student moves the h slider and asks why right is "minus" — the tooltip should say: "think: what x value makes the inside zero? That's where the vertex lands."
- Absolute Value Grapher: when showing a horizontal shift, annotate "inside minus 3 → plug in 3 → inside becomes 0 → vertex is at x = 3."

---

## U2-D4 (25-26): Negative Exponents + Quiz Review

Mostly consistent with batch-1. Key new insights:

- **"Plus and minus have ruined the party"**: negative exponents only flip across the fraction bar for **multiplicative** terms. `x⁻² + y³` cannot be rewritten as `y³/x²` because addition separates them. This misconception is common and should be a named error state in any exponent tool.
- Arrow notation clarification: when graphed output comes from Desmos screenshots, endpoints without dots are arrows (continue forever). Teacher adds arrows in slides to signal this — students should not assume endpoints.
- Domain of non-functions: a relation that fails the vertical line test still has a domain. Domain is "how far left and right" regardless of whether it's a function.
- Calculator quiz review confirms: intersection workflow (Y=, 2nd TRACE → intersect, first curve, second curve, guess) — same steps as described in U2-D2.
- Absolute value range: when the V opens downward (negative a), the range is `(−∞, k]` — the highest point is the vertex. "It's always low to high, but this one points down, so the highest is the vertex."

Tool implications:
- Negative Exponent Flipper: add a "cannot flip over addition/subtraction" error state when students try to apply the flip rule to a sum/difference expression.
- Absolute Value Grapher: when `a < 0`, the range chip should say "(−∞, k]" and label the vertex as "highest point."

---

## U2-D6 (25-26): Difference of Squares and Cubes

Mostly consistent with batch-2. Key additions:

- **Odd exponent → no perfect square**: `x⁷` cannot be written as something squared without getting `x^3.5`, which is invalid for factoring. So `49x⁷ − 36` is NOT a difference of squares. The check: exponent must be even for a perfect square variable factor.
- **GCF rescue**: when exponent is odd, look for a GCF to reduce the odd exponent to even before applying the formula. Example: factor out `x` from `2x⁷ − 128x⁴` to get `x(2x⁶ − 128x³)`, then factor again.
- **Calculator cube-root check**: press MATH on the TI to find cube root or any root. If `√[3]{128}` is not a whole number, 128 is not a perfect cube.
- Teacher explicitly says difference of squares formula must be memorized; sum/difference of cubes formula will be provided on tests (for now). This changes over time — "eventually you're going to have to know this one by heart."

Tool implications:
- Difference of Squares tool: add a pre-check for even exponents — "Is the exponent even? x⁷ can't be a perfect square."
- Difference of Cubes tool: add calculator-tip chip: "check with MATH → cube root to confirm it's a perfect cube."

---

## U2-D7 (25-26): Quadratic Functions and Parabola Graphing

New insights beyond batch-4:

- **Real-world anchors for parabolas**: satellite dishes and ski shapes. The dish collects all incoming signals to a single focal point because of the parabolic reflective property. Ski shape provides full contact with the rail edge. These are memorable hooks if ever used in tool copy.
- **"Even function" briefly named**: f(−x) = f(x) for parabolas (and absolute value). The teacher uses the 5-squared = 25 and (−5)² = 25 equivalence. "They treat values the same regardless of sign."
- **Line of symmetry** introduced: the vertical line through the vertex. For the parent function `y = x²`, it's x = 0.
- **Five-point pattern confirmation**: right 1 up 1, right 2 up 4, plus mirror. If `a ≠ 1`: right 1 up `a`, right 2 up `4a`. Confirmed across U2-D7 Part 1 and Part 2.
- **Fractional a values are in homework but not on tests**: "you can't grade half a square." This means tools don't need to stress-test fractional a values in the graphing pattern — they're edge cases. But if a student enters `a = 0.5`, the tool should still work.
- **Opening direction determines range**: opens up → vertex is minimum → range is `[k, ∞)`; opens down → vertex is maximum → range is `(−∞, k]`. Domain is always `(−∞, ∞)`.

Tool implications:
- Quadratic Slider Studio: the five-point pattern with `a ≠ 1` (right 1 up a, right 2 up 4a) is already implemented per batch-2 notes. Keep it.
- Range chip should dynamically say `[k, ∞)` when `a > 0` and `(−∞, k]` when `a < 0`.

---

## U3-D1 (25-26): Imaginary Numbers

Key new insight not in batch-1:

- **Imaginary solutions ↔ no x-intercepts** — this is stated explicitly and clearly: "if you have a parabola that doesn't hit the x-axis, we use the quadratic formula, and the solution will contain i. So we can more accurately say it has no x-intercepts, because its solutions are imaginary." This is the conceptual bridge between Unit 2 (graphing parabolas) and Unit 3 (imaginary numbers).
- The teacher names "zeros," "solutions," and "x-intercepts" as synonyms for the same concept. All three terms should be recognized in student-facing tools.
- **Standard notation rule**: write the number, then i, then the radical. `5i√2` not `5√2i` — "hard to tell if i is under the root."
- GCF factoring applies inside radical expressions before applying quadratic formula: "between 18 and 12, but it's got to be in everything — six goes into 18 three times, into −12 twice, into the quadratic-formula expression..."
- Square root simplification order of operations: simplify the radical first (find biggest perfect square factor), then pull out the i.

Tool implications:
- **Imaginary Number Sandbox**: add an explicit "parabola connection" panel: "When the discriminant b²−4ac < 0, the quadratic formula gives imaginary solutions. This means the parabola has no x-intercepts." Show a mini-graph of a parabola floating above the x-axis next to the imaginary solution.
- The Quadratic Standard Form Explorer already has a discriminant chip. When the discriminant is negative, the chip should say "no real zeros — parabola doesn't touch x-axis."

---

## U3-D3 (25-26): Completing the Square

New insights beyond batch-2:

- **Three-form map introduced explicitly**:
  - Standard form → intercept form via factoring (when factorable)
  - Standard form → vertex form via completing the square (always)
  - Vertex form → standard form via FOIL + simplify (always)
  - Key insight: "sometimes factoring accidentally gives you vertex form" — when the quadratic factors into two identical factors (e.g., `x² − 8x + 16 = (x−4)²`).

- **Pattern discovery via foiling**: teacher derives the b/2 squared rule by foiling `(x−3)²` and `(x−8)²` to show that the constant is always half-the-middle-coefficient squared. "What's the relationship? Half of 6 is 3, squared is 9. Half of 16 is 8, squared is 64." This is the best scaffolding for why the rule works.

- **Fractions**: completing the square with fractional b always requires squaring a fraction — `(15/2)² = 225/4`. Students must square both numerator and denominator. "What goes in the perfect square trinomial is just b/2, not (b/2)²."

- **Solving variant**: move constant to right side, add b/2 squared to both sides, factor the left as `(x + b/2)²`, square-root both sides (always ±), solve two branches.

- **Vertex-form variant**: when there's no zero (finding vertex form, not solving), add and subtract b/2 squared on the same side: `x² − 18x + 88 → (x² − 18x + 81) + (88 − 81) → (x−9)² + 7`. Vertex is (9, 7).

- **Imaginary results from completing the square**: if the right side after moving the constant is negative, you get imaginary solutions. Teacher works through a full example: `x² + 5x + 22 → ... → x = −5/2 ± 3i√7/2`. This reinforces the U3-D1 imaginary/no-x-intercept connection.

- **Calculator use**: for vertex from standard form, teacher explicitly says "I'm going to use the calculator" to evaluate negative b/(2a) and then plug in — not done by hand when fractions are messy.

Tool implications:
- Complete the Square Trainer: add a "three-form map" chip at the top: vertex ↔ standard ↔ intercept, with arrows showing the path. This contextualizes where completing the square fits.
- Add the "pattern discovery" mode: show `(x−3)² = x² − 6x + 9`, highlight that 3 = 6/2 and 9 = 3². Then ask students to predict: "what would make `x² + 14x + __` a perfect square trinomial?"
- When the result is imaginary (negative right side after isolating), add a "no x-intercepts" note alongside the imaginary answer.

---

## Cross-Cutting Insights from 25-26 Revisit

1. **The "why" behind h being opposite**: the best explanation is "what value of x makes the inside expression zero?" — that's where the vertex lands. This should be the canonical hint in any tool dealing with horizontal shifts.

2. **GCF-first is always the first step**: factoring, simplifying radicals, applying the cube formula — all start with GCF. Tools should nudge students to check GCF before anything else.

3. **Three forms of a quadratic appear in U1-D3, U2-D7, and U3-D3**: students encounter standard, intercept, and vertex forms across three separate units. A "three-form connector" panel visible in multiple tools would reinforce this recurring theme.

4. **Imaginary solutions = no x-intercepts** is the bridge between Units 2 and 3: the teacher says it explicitly in U3-D1 and implies it in U3-D3. The Imaginary Number Sandbox and Quadratic Standard Form Explorer should make this visible.

5. **"Plus and minus ruin the party" for exponent rules**: negative exponent flip-rule only works for multiplicative terms. This is the most common exponent misconception and should have a named error state in relevant tools.
