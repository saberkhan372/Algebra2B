# Batch 2 Tool Insights

Source transcripts:

- `transcripts/U1-D2 Video (25-26).txt`
- `transcripts/U2-D6 Video (25-26).txt`
- `transcripts/U2-D7 Video (Part 1) 25-26.txt`
- `transcripts/U2-D7 Video (Part 2) 25-26.txt`
- `transcripts/U3-D3 Video (Part 1) 25-26.txt`
- `transcripts/U3-D3 Video (Part 2) 25-26.txt`

## U1-D2: Substitution And Elimination

### Classroom Flow

- Start from the graphing idea: a system solution is where two lines cross.
- Move to algebra because graphs do not always fit neatly.
- Elimination is framed as "combining" equations, because add/subtract language can confuse students when signs are already negative.
- Students repeatedly solve one variable, plug it into either original equation, then check the ordered pair in both equations.
- Substitution begins with easy cases where `x = ...` or `y = ...` is already isolated, then moves into choosing the more convenient variable to isolate.
- Fraction work appears quickly once neither variable is isolated, so common denominators and distribution need support.

### Tool Implications

#### Substitution Stepper

- Add a "choose the substitution target" step before algebra begins:
  - Highlight any already-isolated variable.
  - If neither is isolated, ask which variable is least painful to isolate.
- Make parentheses unavoidable when substituting an expression:
  - Bad input like `3x - 5 2x - 8` should trigger "put the whole expression in parentheses before distributing."
- Include a distribution checkpoint, especially with negatives:
  - `-5(2x - 8)` should show both products before simplifying.
- End every problem with a two-equation check panel:
  - Substitute `(x, y)` into equation 1 and equation 2.
  - Show true statements like `-16 = -16`.
- Add teacher-language hints:
  - "No graph needed."
  - "Plug it into either original equation."
  - "Check both equations before you trust the point."

#### Elimination Race

- Rename the operation step from "add/subtract" to "combine equations."
- Add a multiplier-choice phase:
  - If coefficients are already opposites, combine immediately.
  - If coefficients match, suggest multiplying one equation by `-1`.
  - If neither matches, ask for one or two multipliers that create opposites.
- Make the cancellation visible:
  - Draw a strike-through or fade on terms like `-3y + 3y`.
- Reward checking:
  - Give a small bonus when the student verifies the ordered pair in both original equations.

## U2-D7: Quadratic Graphs And Vertex Form

### Classroom Flow

- Quadratic means the `x` term is squared; this is the first major shift from lines to curves.
- The parent function is built from a table:
  - `-3 -> 9`, `-2 -> 4`, `-1 -> 1`, `0 -> 0`, `1 -> 1`, `2 -> 4`, `3 -> 9`.
- Students learn the parabola pattern from the vertex:
  - right 1, up 1
  - right 2, up 4
  - mirror left 1 and left 2
- `a` scales that pattern:
  - right 1, up/down `a`
  - right 2, up/down `4a`
- Positive `a` opens up; negative `a` opens down.
- Large `|a|` is taller/narrower; fractional `|a|` is wider.
- `h` moves left/right, `k` moves up/down, and the vertex is central.
- Domain is always all real numbers for these parabolas; range is read low-to-high from the vertex and opening direction.

### Tool Implications

#### Quadratic Slider Studio

- Keep the live slider model, but add a five-point pattern overlay:
  - Vertex point.
  - `h +/- 1`, `k + a`.
  - `h +/- 2`, `k + 4a`.
- Let students toggle between:
  - table mode,
  - pattern mode,
  - slider mode.
- Label `a` as "stretch/compress and flip" instead of slope.
- Add a range/domain chip:
  - Domain: `(-infinity, infinity)`.
  - Range: `[k, infinity)` if `a > 0`; `(-infinity, k]` if `a < 0`.
- Add "taller/wider" feedback:
  - `|a| > 1`: taller/narrower.
  - `0 < |a| < 1`: wider.
  - `a < 0`: opens down.
- Add a homework-friendly fractional `a` mode, but keep the default examples on grid points for easier reading.

## U3-D3: Completing The Square

### Classroom Flow

- Completing the square is introduced as a bridge from standard form to vertex form.
- The lesson also connects to solving quadratics.
- Students first learn `-b / 2a` as the x-coordinate of the vertex.
- Then they learn the perfect-square relationship:
  - Take `b`.
  - Divide by `2`.
  - Square the result.
  - That number completes a perfect square trinomial.
- The expression inside the squared factor uses `b / 2`, not `(b / 2)^2`.
- When solving:
  - Move the constant to the other side.
  - Add `(b / 2)^2` to both sides.
  - Factor the left side as a repeated binomial.
  - Square root both sides.
  - Always include `plus or minus`.
- When converting to vertex form without solving:
  - Add and subtract the completing number on the same side to create net zero.
- Fractions and signs are the main danger zones.

### Tool Implications

#### Complete The Square Trainer

- Split into two modes:
  - Solve by completing the square.
  - Rewrite in vertex form.
- Add a step gate for identifying `b`.
- Add a visual "halve then square" control:
  - Show `b / 2`.
  - Show `(b / 2)^2`.
  - Make clear which one goes inside the binomial and which one gets added.
- For solving mode, include a balance scale:
  - If a student adds `25` on the left, require `+25` on the right.
- For vertex-form mode, use a "net zero" tag:
  - Add `(b / 2)^2` and subtract `(b / 2)^2` on the same side.
- Add a `+/-` checkpoint after taking square roots.
- Support fraction arithmetic explicitly:
  - `5/2 squared = 25/4`.
  - Common denominator hints when combining constants.
- Connect the result back to the graph:
  - If vertex form is created, show the vertex immediately.
  - If solving, show roots as x-intercepts.

## U2-D6: Difference Of Squares And Cubes

### Classroom Flow

- Start by FOILing `(x + 7)(x - 7)` and noticing that the middle terms cancel.
- Contrast with `(x - 7)^2`, where the middle terms do not cancel.
- Difference of squares requires:
  - two terms,
  - subtraction,
  - both terms are perfect squares.
- Students should ask "what squared minus what squared?"
- Exponents must be even to be perfect squares.
- Factor completely, including GCF first.
- Sum/difference of cubes begins with perfect cube recognition:
  - `8`, `27`, `64`, `125`.
- Students identify `a` and `b` first.
- For cubes:
  - first sign matches the original sign,
  - middle sign is opposite,
  - last sign is always plus.

### Tool Implications

#### Difference Of Squares Game

- Add a pre-check round before factoring:
  - Is it two terms?
  - Is it subtraction?
  - Are both terms perfect squares?
- Add a GCF-first warning:
  - Example: `3x^2 - 75` should become `3(x^2 - 25)` before difference of squares.
- Add a "middle terms cancel" animation:
  - FOIL `(a + b)(a - b)` and fade `+ab` and `-ab`.
- Catch the classic false pattern:
  - `(x - 7)^2` is not `x^2 - 49`; it has a middle term.
- Add exponent reasoning:
  - `x^6` is `(x^3)^2`.
  - `x^7` is not a perfect square unless a GCF is removed first.

#### Difference Of Cubes Reference

- Keep the formula card, but make the first interaction identify `a` and `b`.
- Add a cube-number quick reference:
  - `2^3 = 8`, `3^3 = 27`, `4^3 = 64`, `5^3 = 125`.
- Add sign pattern labels:
  - same, opposite, always positive.
- Add GCF-first support:
  - Pull out common factors before applying cube formulas.
- Include "any root" calculator note only as an optional help drawer, not the main path.

## Cross-Site Patterns From This Batch

- Every tool should end with a check when possible.
- "Choose the best first move" matters as much as raw computation.
- Students need sign support more than formula support.
- Visual cancellation is valuable:
  - equation terms canceling in elimination,
  - middle terms canceling in difference of squares,
  - square roots and squares canceling in completing the square.
- The site should preserve the classroom vocabulary:
  - combine,
  - smush together,
  - no graph needed,
  - net zero,
  - plus or minus,
  - same/opposite/always plus.
