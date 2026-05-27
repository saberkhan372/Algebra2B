# Batch 3 Tool Insights: Radicals, Rational Exponents, And Rationals

Source transcripts:

- `transcripts/U4-D1 Video.txt`
- `transcripts/U4-D2 Video.txt`
- `transcripts/U4-D3 Video.txt`
- `transcripts/U8-D1 Video.txt`
- `transcripts/U8-D5 video.txt`
- `transcripts/U5-D2 Video (23-24)(1).txt` *(filename says U5-D2, but transcript content is exponential growth/decay)*

Source PDFs:

- `pdf-text/U4-D1 Lesson – Radical Functions.txt`
- `pdf-text/U4-D2 Lesson - nth Roots and Radical Expressions.txt`
- `pdf-text/U4-D4 Lesson – Rational Exponents.txt`
- `pdf-text/U4-D4 Lesson d – Rational Exponents.txt`
- `pdf-text/U5-D2 Lesson – Radical Equations.txt`

## U4-D1 / U4-D2: Square Root And Radical Graphs

### Classroom Flow

- Radical means a root symbol; square roots are the first focus.
- Students build the parent square-root graph by plugging in perfect squares:
  - `0 -> 0`, `1 -> 1`, `4 -> 2`, `9 -> 3`, `16 -> 4`.
- Non-perfect-square inputs create awkward decimals, so graphing focuses on strategic perfect-square inputs.
- The "vertex" language is used informally for the square-root starting point.
- Square-root graphs use an HK form:
  - starting point is `(h, k)`;
  - `h` is opposite inside the radical;
  - `k` is regular outside the radical.
- Pattern from the starting point:
  - right 1, up/down by `a`;
  - right 4, up/down by `2a`.
- If a negative is inside with `x`, factor out the negative to understand the graph pointing left.
- Domain and range come from the starting point and direction.
- The inverse connection is emphasized:
  - square and square-root functions reflect over `y = x`;
  - domain and range swap;
  - `+/-` from inverse square roots can fail the vertical line test.

### Tool Implications

#### New Tool Candidate: Radical Function Grapher

- Start from three anchor points, not a dense table:
  - starting point,
  - one step based on inside value `1`,
  - one step based on inside value `4`.
- Use a "starting point" label instead of only "vertex"; optionally show "vertex-ish" as teacher language.
- Add a direction compass:
  - outside sign controls up/down;
  - inside sign controls right/left.
- Add a domain/range reader:
  - points right/up: domain `[h, infinity)`, range `[k, infinity)`;
  - points right/down: domain `[h, infinity)`, range `(-infinity, k]`;
  - points left/up: domain `(-infinity, h]`, range `[k, infinity)`;
  - points left/down: domain `(-infinity, h]`, range `(-infinity, k]`.
- Include an inverse overlay toggle showing the related parabola reflected over `y = x`.

#### Existing Tool Tie-In: Quadratic Slider Studio

- Add future cross-link: square-root graph is the inverse shape of a parabola.
- A small "inverse mirror" challenge would connect Unit 2 quadratics to Unit 4 radicals.

## U4-D2 / U4-D4 PDFs: nth Roots And Rational Exponents

### Classroom Flow

- The index is the small number in the radical "nook"; square roots have an invisible `2`.
- Square root = second root, cube root = third root, then fourth/fifth/etc.
- Radicals roughly divide exponents.
- If an exponent does not divide evenly by the index, break off the biggest divisible power and leave the remainder inside.
- Multiple variables can be simplified separately, then outside factors multiply.
- Rational exponents are fractional exponents.
- Rational exponents are just another notation for roots.
- The key conversion rule:
  - top number = exponent/power;
  - bottom number = root/index.
- Negative fractional exponents move to the denominator first, then convert the positive fractional exponent.
- PDF framing: rational exponents let students reuse exponent rules instead of inventing new radical rules.

### Tool Implications

#### Rational Exponents Tower

- Add a conversion mode before matching:
  - `x^(m/n)` -> nth root of `x^m`;
  - `x^(-m/n)` -> `1 / x^(m/n)` -> radical form.
- Add a visible "top = power, bottom = root" label.
- Add an index/nook callout:
  - square root has invisible index `2`;
  - cube root has index `3`.
- Add a "break off powers" activity:
  - Example pattern: `root_n(x^k)` becomes `x^q root_n(x^r)` where `k = nq + r`.
- Let the tower show remainders:
  - outside blocks are complete groups of the index;
  - leftover blocks stay inside the radical.
- Add a negative-exponent warning:
  - move first, then root/power.

## U4-D3 / U5-D2 PDF: Radical Equations

### Classroom Flow

- Solving with square roots is different from square-rooting both sides.
- When you square both sides to remove a radical, there is no `+/-`.
- `+/-` appears when you square root both sides, not when you square both sides.
- Radical equations must be checked because squaring can create extraneous solutions.
- When a whole binomial is squared, students must FOIL; skipping FOIL is called out as a major mistake.
- If an isolated square root equals a negative number, there is no solution.
- Use the step right before squaring as the cleanest check point.

### Tool Implications

#### New Tool Candidate: Radical Equation Checker

- Step gates:
  - isolate radical,
  - square both sides,
  - FOIL if the other side has two terms,
  - solve the resulting equation,
  - check in the original.
- Include a `+/-` warning:
  - "You are squaring both sides, so no plus/minus here."
- Include an extraneous-solution sorter:
  - candidate solutions appear as cards;
  - students drag to "works" or "extraneous."
- Add a no-solution fast path:
  - isolated square root equals negative -> no solution.

## U8-D1: Simplifying Rational Expressions

### Classroom Flow

- Rational functions are fractions with polynomials, especially `x` in the denominator.
- The denominator creates restrictions because division by zero is undefined.
- Excluded values come from setting the original denominator not equal to zero.
- Domain is all real numbers except excluded values, written by skipping those values on a number line.
- Simplifying begins only after factoring the whole numerator and denominator.
- Students must not cancel individual terms.
- Teacher language is very direct:
  - "You cannot cancel these x's."
  - "You can only cancel whole factors."
  - "Before you cancel stuff, find excluded values."
- Simplified answer often stays in factored form.

### Tool Implications

#### Rational Expression Builder

- Add an "original denominator" panel separate from the simplified expression.
- Excluded values should always come from the original denominator.
- Holes should be factors that cancel, but their x-values are still excluded.
- Add a cancelability checker:
  - terms connected by `+` or `-` cannot cancel individually;
  - identical factors connected by multiplication can cancel.
- Show a warning when a student tries to cancel only `x` from `(x + 3)/(x - 2)`.
- Number-line domain display should skip each excluded value with open circles.

## U8-D5: Graphing Rational Functions

### Classroom Flow

- Start with `1/x`.
- Values near zero become huge; huge x-values make the fraction approach zero.
- `x = 0` and `y = 0` are asymptotes for the parent graph.
- An asymptote is a dotted line the graph approaches but does not cross in these intro examples.
- HK shifts move asymptotes:
  - vertical asymptote `x = h`;
  - horizontal asymptote `y = k`.
- `a` controls flip and scale:
  - positive `a`: upper-right / lower-left branches;
  - negative `a`: upper-left / lower-right branches.
- Graphing strategy:
  - draw dotted asymptotes first;
  - plug in one value next to the vertical asymptote;
  - mirror the point across the asymptote intersection;
  - let the curve nestle into the asymptotes.
- Domain skips `h`; range skips `k`.

### Tool Implications

#### Rational Expression Builder

- Add an intro mode for transformed reciprocal functions:
  - `f(x) = a/(x - h) + k`.
- Overlay the asymptote intersection `(h, k)`.
- Add a point-builder:
  - choose one x-value next to the vertical asymptote;
  - compute y;
  - mirror the point.
- Add branch quadrant labels:
  - positive `a`: upper-right/lower-left;
  - negative `a`: upper-left/lower-right.
- Domain/range chips should say:
  - domain: `(-infinity, h) union (h, infinity)`;
  - range: `(-infinity, k) union (k, infinity)`.

## Exponential Growth/Decay Transcript Mislabel

The file `U5-D2 Video (23-24)(1).txt` is not a radical-equations lesson. It teaches exponential growth/decay:

- negative exponents can be rewritten by flipping the base;
- base greater than 1 means growth unless the exponent forces a flip;
- base between 0 and 1 means decay unless the exponent forces a flip;
- horizontal asymptote is the `k` value;
- choose points by making the exponent equal to `0` and `1`;
- domain is all real numbers, range starts at the horizontal asymptote.

### Future Tool Candidate

An Exponential Growth/Decay Sorter could ask students to classify by:

- base greater than 1 vs between 0 and 1;
- positive vs negative exponent;
- rewritten/flipped base;
- asymptote `y = k`;
- two strategic graph points.
