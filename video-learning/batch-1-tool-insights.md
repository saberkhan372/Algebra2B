# Batch 1 Video-Derived Tool Insights

This pass transcribed six representative lessons with the local Whisper setup in `video-learning/.venv`.

## Transcribed Lessons

- `transcripts/U1-D3 Video (25-26).txt` - Factoring quadratics.
- `transcripts/U2-D3 Video (Part 1) 25-26.txt` - Absolute value functions and transformations.
- `transcripts/U2-D4 Video (25-26).txt` - Negative exponents plus quiz review.
- `transcripts/U3-D1 Video (25-26).txt` - Imaginary numbers and complex numbers.
- `transcripts/U3-D5 Video (24-25).txt` - Rational expressions plus projectile recap.
- `transcripts/U4-D4 Video.txt` - Domain restrictions for square-root/rational functions.

## Absolute Value Grapher

Key ideas from U2-D3:

- Transformations are shifts, stretches, and flips.
- Parent function is the unshifted/basic graph.
- Vertex is "the center in a way."
- `a` controls stretch and vertical flip.
- `h` controls left/right shift, but the sign feels opposite.
- `k` controls up/down shift, and it is not opposite.
- Students should eventually read `y = a|x - h| + k` as vertex plus slope behavior, not rebuild a full table every time.

Tool upgrades:

- Add a "Why is h opposite?" mode where students choose the `x` value that makes `x - h = 0`.
- Add language labels directly on sliders:
  - `a`: stretch / flip
  - `h`: left/right, opposite sign
  - `k`: up/down, same sign
- Add a "read the equation" challenge: predict vertex, right slope, and direction before showing the graph.

## Factoring Quadratics Lab

Key ideas from U1-D3:

- Quadratics are expressions whose highest exponent is 2.
- Many examples are trinomials: three terms separated by addition/subtraction.
- "Numbers multiply numbers; letters multiply letters."
- Product-sum factoring is the central method.
- Always check for a GCF first.
- If `a = 1`, the product-sum search is easier.
- If `a != 1`, multiply `a*c` first; do not jump straight to parentheses.
- When solving, all terms need to be on one side and the equation equal to 0.
- Once factored, set each factor equal to zero.
- Foil can always check a factoring answer.

Tool upgrades:

- Add a mandatory "GCF first?" gate before product-sum.
- Add an `a*c` search panel with factor-pair hints.
- Add a "too close / too far apart" hint for product-sum pairs.
- Add a final "factor or solve?" toggle, because the lesson distinguishes factoring an expression from solving an equation.

## Negative Exponent Flipper

Key ideas from U2-D4:

- Negative exponents become positive by moving the factor across the fraction bar.
- This works for multiplied factors, not addition/subtraction terms.
- The teacher phrase "pluses and minuses ruin the party" appears in both U2-D4 and U3-D5.
- Prior exponent rules still apply before final cleanup.

Tool upgrades:

- Add term separators that block invalid moves across `+` or `-`.
- Add a two-step simplifier:
  1. Combine like bases.
  2. Move negative-exponent factors.
- Add invalid examples like `x^-2 + y^3`.

## Imaginary Number Sandbox

Key ideas from U3-D1:

- `i` is introduced through the question "what if there were a type of number we could square to get a negative?"
- `i = sqrt(-1)` and `i^2 = -1`.
- If there is a negative inside a square root, the negative part comes out as `i`.
- Standard complex form puts the real part first and the imaginary part second.
- `i` can be treated "kind of like a variable" for combining like terms, but `i^2` becomes `-1`.
- Imaginary solutions explain parabolas with no x-intercepts.

Tool upgrades:

- Add a radical simplifier strip:
  - `sqrt(-49) -> 7i`
  - `sqrt(-50) -> 5i sqrt(2)`
- Add FOIL-with-`i` examples that automatically replace `i^2` with `-1`.
- Add a parabola panel: no x-intercepts visually, imaginary solutions algebraically.

## Rational Expression Builder

Key ideas from U3-D5:

- Rational means ratio, so rational expressions are fractions with expressions.
- One-term rational expressions simplify with exponent rules.
- With plus/minus terms, every term must share a common factor before anything cancels.
- Only cancel factors, not pieces of terms.
- Excluded values come from the original denominator, even if a factor cancels later.
- To find excluded values, factor the denominator and set each denominator factor not equal to zero.

Tool upgrades:

- Fix the current tool so canceled factors become holes, not vertical asymptotes.
- Add a "cancel only factors" warning panel.
- Show original denominator restrictions separately from simplified expression.
- Use the phrase "original denominator" prominently for excluded values.

## Domain Restrictions Tool Candidate

The U4-D4 transcript is not rational exponents; it is domains of functions algebraically.

Key ideas:

- Domain is all x-values that produce real, defined outputs.
- Square-root radicands must be `>= 0`.
- Denominators cannot equal 0.
- Square roots in denominators must be `> 0`, not `>= 0`.
- Domain can be represented with number lines and interval notation.
- Open circles represent excluded values; closed circles represent included boundary values.

Tool idea:

- Build a "Domain Restriction Sorter" with three modes:
  - Square root: inside `>= 0`
  - Denominator: denominator `!= 0`
  - Square root in denominator: inside `> 0`
- Students drag a function into the correct restriction rule, solve the inequality/equation, then see the number line and interval notation.

