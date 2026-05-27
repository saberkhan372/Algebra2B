# Batch 4 Tool Insights: Exponentials, Logs, Composition, Polynomials, And Trig

Source transcripts:

- `transcripts/U5-D1 Video (23-24).txt`
- `transcripts/U5-D5 Video (23-24).txt`
- `transcripts/U5-D6 Video (23-24).txt`
- `transcripts/U6-D1 Video.txt`
- `transcripts/U6-D2  Video (23-24).txt` *(filename says U6-D2, but transcript content is function composition)*
- `transcripts/U6-D7 Video (graphing polynomials).txt`
- `transcripts/U7-D1 Video (23-24).txt`

## U5-D1: Exponential Functions

### Classroom Flow

- Exponential means the variable is in the exponent, not the base.
- The lesson contrasts `a^x` with polynomial expressions like `x^2` and `x^3`.
- Students review exponent rules first:
  - anything to the zero power is `1`;
  - anything to the first power stays itself;
  - negative exponents move across the fraction bar.
- The parent exponential graph is built by plugging in strategic values:
  - `x = 0` makes the exponent zero and gives the anchor value;
  - `x = 1` makes the exponent one and gives a second point.
- Exponential growth gets large quickly, while negative x-values create smaller and smaller fractions.
- The graph approaches but never reaches the horizontal asymptote.
- In transformed form, `k` is the horizontal asymptote.
- `h` shifts the graph left/right, `k` shifts it up/down, and `a` stretches or flips.
- Domain is always all real numbers for these intro examples.
- Range is read from the horizontal asymptote toward infinity when the graph opens upward.
- End behavior is taught as approaching the asymptote on one side and infinity on the other.

### Tool Implications

#### New Tool Candidate: Exponential Function Explorer

- Start graphing with two deliberate points:
  - first point makes the exponent `0`;
  - second point makes the exponent `1`.
- Always draw the horizontal asymptote before the curve.
- Show `k` as an asymptote chip, not only as a vertical shift.
- Add a "variable in exponent?" sorter:
  - exponential: `3^x`, `2^(x - 4) + 1`;
  - not exponential: `x^2`, `x^3`, `x` in the base only.
- Add a growth/decay preview:
  - base greater than `1` grows;
  - base between `0` and `1` decays.
- Let students drag `h`, `k`, and `a` and watch the asymptote move separately from the curve.

## U5-D5: Log Properties

### Classroom Flow

- Students must move fluently between exponential and log form.
- The teacher reads log form as "base to the exponent equals answer."
- `ln` is introduced as log base `e`.
- Product, quotient, and power rules only work cleanly when the logs have the same base.
- Expanding and condensing are taught as reversible moves.
- Product becomes addition; quotient becomes subtraction.
- The power rule is taught as the "blog rule":
  - an exponent can drop down in front of the log;
  - a coefficient can pop up into the exponent.
- When expanding a quotient, numerator logs are positive and denominator logs are negative.
- When condensing, positive logs go to the numerator and negative logs go to the denominator.
- Students must simplify recognizable logs:
  - `log(100) = 2`;
  - `log_b(1) = 0`;
  - `log_b(b) = 1`;
  - `ln(e) = 1`.

### Tool Implications

#### New Tool Candidate: Log Properties Sandbox

- Include a log/exponential converter as the first gate.
- Require a base match before applying product, quotient, or power rules.
- Add an expand/condense toggle so students see the same identity in both directions.
- Make numerator/denominator placement visual:
  - positive log cards lift to the numerator;
  - negative log cards drop to the denominator.
- Add a "blog rule" animation:
  - exponent drops to coefficient in expand mode;
  - coefficient pops up to exponent in condense mode.
- Include a simplification check after every step so students do not stop at `log(100)`.

## U5-D6: Solving Exponential Equations

### Classroom Flow

- If both sides can be rewritten with the same base, set the exponents equal.
- If bases do not match, log both sides.
- Logging both sides lets the exponent come down in front.
- After the exponent is in front, divide by the log of the base.
- If `e` is the base, use `ln`.
- If `x` appears in exponents on both sides, log both sides, distribute the log values, then solve the resulting linear equation.
- Calculator precision matters:
  - keep more decimals in intermediate steps;
  - round final answers to the requested place.
- Word problems reuse growth/decay and interest formulas:
  - divide by the starting amount first;
  - log both sides to solve for time;
  - use `n` for compounding frequency;
  - use `Pe^(rt)` for continuous compounding.

### Tool Implications

#### New Tool Candidate: Exponential Equation Solver

- Start with a decision screen:
  - can both sides become the same base?
  - if yes, rewrite and set exponents equal;
  - if no, log both sides.
- Add an "exponent comes down" move as a visible transformation.
- Support both `log` and `ln`, with `ln` suggested when the base is `e`.
- Add a calculator-safe exact form:
  - keep answers like `log(15) / log(2) + 7` before decimal rounding.
- Include an `x`-on-both-sides lane:
  - log both sides;
  - bring exponents down;
  - distribute log constants;
  - solve the linear equation.
- Add word-problem templates for doubling time, compound interest, and continuous compounding.

## U6-D1: Rational Function Graphs

### Classroom Flow

- Rational connects to ratio: one expression over another.
- For this lesson, a rational function has an `x` in the denominator.
- The parent function is `1/x`.
- `1/0` is undefined, which creates the vertical asymptote at `x = 0`.
- Large positive and negative x-values make the output approach zero, creating the horizontal asymptote at `y = 0`.
- In `a / (x - h) + k`:
  - `x = h` is the vertical asymptote;
  - `y = k` is the horizontal asymptote.
- Positive `a` puts branches in the upper-right and lower-left regions.
- Negative `a` flips the graph into the upper-left and lower-right regions.
- Domain skips the vertical asymptote; range skips the horizontal asymptote.

### Tool Implications

#### Rational Expression Builder / Rational Function Mode

- Add a parent `1/x` intro before full rational expressions.
- Let students discover `1/0` as undefined and tie it directly to the vertical asymptote.
- Let students test large x-values and see outputs approach the horizontal asymptote.
- Keep the transformed reciprocal model explicit:
  - `f(x) = a/(x - h) + k`.
- Add branch labels:
  - positive `a`: upper-right / lower-left;
  - negative `a`: upper-left / lower-right.
- Domain and range chips should update from `h` and `k`.

## U6-D2 Transcript: Function Composition

### Classroom Flow

- Composition means putting one function into another.
- `f(g(x))` means put `g(x)` into `f(x)`.
- Students go inner to outer, or right to left.
- Order matters: `f(g(x))` and `g(f(x))` can produce different answers.
- Function notation with the open circle means composition.
- Parentheses are essential when substituting an expression for `x`.
- When substituting a binomial into a squared expression, students must write the binomial twice and FOIL.
- When a composition would require triple FOIL or more, leaving it in factored/composed form is acceptable in this class.
- Evaluating composition at a number happens in stages:
  - find the inner value first;
  - plug that number into the outer function.

### Tool Implications

#### New Tool Candidate: Function Composition Machine

- Use nested function cards that students drop from inner to outer.
- Show directionality clearly:
  - `f(g(x))` reads "put g into f";
  - work happens right to left.
- Add an order comparison mode where `f(g(x))` and `g(f(x))` are evaluated side by side.
- Force parentheses when a full expression is substituted.
- Add a FOIL gate when a binomial is substituted into a square.
- Include a "leave it composed" option for higher-power expansions that are beyond the course target.

## U6-D7: Graphing Polynomials

### Classroom Flow

- Factors, zeros, solutions, and x-intercepts are used as connected vocabulary.
- The total degree tells how many factors/solutions are counted with multiplicity.
- The leading coefficient controls the right-end direction:
  - positive leads up to the right;
  - negative leads down to the right.
- Degree parity controls whether the ends go the same way or opposite ways:
  - even degree: both ends point the same way;
  - odd degree: ends point opposite ways.
- Multiplicity controls behavior at each zero:
  - degree `1` factors cross;
  - even multiplicity factors bounce;
  - higher odd multiplicities swerve, but the class mostly uses cross/bounce.
- Sketching order:
  - identify zeros;
  - mark bounces;
  - determine end behavior;
  - draw slowly through or off each marked point.

### Tool Implications

#### New Tool Candidate: Polynomial Sketch Pad

- Add a vocabulary matcher:
  - factor;
  - zero;
  - solution;
  - x-intercept.
- Build graphs from factored form first.
- Let students tag each zero as cross or bounce based on multiplicity.
- Use a four-cell end-behavior chooser:
  - positive/negative leading coefficient;
  - even/odd degree.
- Emphasize end behavior before detailed curve shape.
- Add a "draw slow" guided trace:
  - start from the correct end arrow;
  - cross or bounce at each zero;
  - finish at the correct end arrow.

## U7-D1: Right Triangle Trigonometry

### Classroom Flow

- Side labels are relative to the chosen angle:
  - opposite;
  - adjacent;
  - hypotenuse.
- The hypotenuse is always across from the right angle.
- SOH CAH TOA determines which ratio to use:
  - sine = opposite / hypotenuse;
  - cosine = adjacent / hypotenuse;
  - tangent = opposite / adjacent.
- The reciprocal trig functions are introduced by flipping the ratios:
  - sine with cosecant;
  - cosine with secant;
  - tangent with cotangent.
- Inverse trig is explicitly not the same as reciprocal trig.
- Solving triangles uses inverse trig for missing angles and the Pythagorean theorem for missing sides.
- Intermediate decimal values should be kept to four decimal places for precision.
- Special right triangles are emphasized:
  - `45-45-90`: `x`, `x`, `x sqrt(2)`;
  - `30-60-90`: `x`, `x sqrt(3)`, `2x`.

### Tool Implications

#### New Tool Candidate: SOH CAH TOA Triangle Solver

- Let students click the reference angle and watch opposite/adjacent labels update.
- Keep the hypotenuse locked across from the right angle.
- Add a ratio selector that only shows valid choices from the known and unknown sides.
- Include reciprocal trig as flipped-ratio cards.
- Add a strong inverse-vs-reciprocal warning:
  - `tan^-1` finds an angle;
  - `cot` is `1/tan`.
- Add a precision helper:
  - four decimals during work;
  - final answer rounded to the requested place.
- Include a special-triangle mode with side-pattern tiles.

## Cross-Site Patterns From This Batch

- Start each tool with an identity check:
  - exponential vs polynomial;
  - log base and answer;
  - rational means `x` in the denominator;
  - chosen angle determines trig side names.
- Draw the structure before solving:
  - asymptotes before rational/exponential curves;
  - zeros before polynomial sketching;
  - side labels before trig ratios.
- Preserve teacher vocabulary in the interface:
  - "logging both sides";
  - "blog rule";
  - "go inner to outer";
  - "cross or bounce";
  - "SOH CAH TOA."
- Make reversible moves visible:
  - logs expand and condense;
  - exponentials and logs are inverses;
  - trig reciprocals flip ratios.
