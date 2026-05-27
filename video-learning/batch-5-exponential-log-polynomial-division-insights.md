# Batch 5 Tool Insights: Exponential Models, Logs, Polynomial Roots, And Division

Source transcripts:

- `transcripts/U5-D2 Video (23-24).txt`
- `transcripts/U5-D3 Video (23-24) 1.41.21 PM.txt`
- `transcripts/U5-D4 Video (23-24).txt`
- `transcripts/U5-D7 Video (23-24).txt`
- `transcripts/U6-D3 Video (23-24).txt`
- `transcripts/U6-D4 Video Part 1 (23-24).txt`
- `transcripts/U6-D4 Video Part 2 (23-24).txt`
- `transcripts/U6-D5 video 22-23.txt`
- `transcripts/U6-D6 Video (23-24).txt`
- `transcripts/U6-D8 Video (synthetic).txt`

## U5-D2: Exponential Decay

### Classroom Flow

- Growth and decay are treated as closely related, not separate formulas.
- Negative exponents are rewritten by flipping the base:
  - `2^(-x)` becomes `(1/2)^x`;
  - `(1/2)^(-x)` becomes `2^x`.
- Students are encouraged to work with positive exponents whenever possible.
- Classification comes from the effective base:
  - base greater than `1` means growth;
  - base between `0` and `1` means decay.
- A negative exponent can reverse the classification by flipping the base.
- Horizontal asymptote is still the `k` value.
- Graphing strategy stays consistent:
  - draw the horizontal asymptote first;
  - make the exponent `0` for the first point;
  - make the exponent `1` for the second point.
- Domain is always all real numbers.
- Range is from the horizontal asymptote toward infinity for the intro examples.
- `e` is introduced as an exponential constant:
  - approximate with `3` for graphing by hand;
  - use the calculator's stored `e` for real calculations.

### Tool Implications

#### Exponential Function Explorer

- Add a growth/decay decision tree:
  - inspect base;
  - inspect exponent sign;
  - flip the base if needed;
  - classify the effective graph.
- Include a "make exponent positive" transformation card.
- Show `2^(-x)` and `(1/2)^x` as equivalent graphs.
- For `e`, provide two modes:
  - hand-graph mode approximates `e` as `3`;
  - calculator mode uses `e` accurately.
- End behavior chips should use direction language:
  - decay approaches the asymptote as x goes right;
  - growth approaches the asymptote as x goes left.

## U5-D3: Exponential Models And Interest

### Classroom Flow

- Exponential functions are grounded in real scenarios: savings, loans, depreciation, bacteria, and carbon dating.
- Three formulas are separated by keywords:
  - simple annual growth/decay: `A = P(1 +/- r)^t`;
  - compound interest: `A = P(1 + r/n)^(nt)`;
  - continuous compounding: `A = Pe^(rt)`.
- Percent rates must be converted to decimals.
- Depreciate/decrease means subtract the rate.
- In compound interest, the rate is divided by `n` and time is multiplied by `n`.
- Compounding-frequency keywords:
  - quarterly: `n = 4`;
  - monthly: `n = 12`;
  - weekly: `n = 52`;
  - daily: `n = 365`.
- Continuously is the keyword for `Pe^(rt)`.
- Students are warned not to round intermediate values.
- Calculator workflow matters:
  - enter the full expression when possible;
  - use the `e^x` button rather than typing `3`.

### Tool Implications

#### New Tool Candidate: Exponential Model Builder

- Start with a keyword classifier:
  - simple;
  - compound;
  - continuous;
  - depreciation/decay.
- Let students drag story numbers into formula slots:
  - starting amount `P`;
  - ending amount `A`;
  - rate `r`;
  - time `t`;
  - compounding frequency `n`.
- Force percent-to-decimal conversion before calculation.
- Add a plus/minus rate toggle tied to wording:
  - growth/appreciate/increase -> plus;
  - depreciate/decrease/decay -> minus.
- Include an `n` keyword menu for quarterly/monthly/weekly/daily.
- Keep an "unrounded expression" panel next to the rounded final answer.
- Make continuous models visibly different with the `e` button and `Pe^(rt)` template.

## U5-D4: Logarithmic Functions

### Classroom Flow

- Logs are introduced as the inverse of exponentials.
- Log form is read as:
  - base to the exponent equals the answer.
- Students convert between:
  - exponential form: `b^x = y`;
  - logarithmic form: `log_b(y) = x`.
- Calculator base entry is explicitly taught with `math`, `alpha`, `math`.
- Special log facts:
  - `log_b(1) = 0`;
  - `log_b(b) = 1`;
  - plain `log` means base `10`;
  - `ln` means log base `e`.
- Logs cannot have zero or negative arguments.
- The log graph is built from inverse points of an exponential:
  - `(0, 1)` becomes `(1, 0)`;
  - `(1, 2)` becomes `(2, 1)`.
- The parent log graph has a vertical asymptote at `x = 0`.
- For transformed logs, the vertical asymptote comes from setting the inside equal to `0`.
- Graphing strategy:
  - draw vertical asymptote;
  - make the log argument `1` for the first point;
  - make the log argument equal to the base for the second point.
- Domain starts at the vertical asymptote and goes right in this course's intro cases.
- Range is all real numbers.

### Tool Implications

#### New Tool Candidate: Log Function Grapher

- Begin with an exponential/log converter.
- Show log graphs as the inverse mirror of exponential graphs over `y = x`.
- Add a "legal argument" gate:
  - argument must be greater than `0`;
  - zero and negatives are undefined.
- Always set the inside equal to `0` to find the vertical asymptote.
- Use two anchor points:
  - argument `1` gives log value `0`;
  - argument equal to base gives log value `1`.
- For `ln`, label it as log base `e` and allow the second point to use `e approx 3` for hand graphing.
- Domain/range chips should say:
  - domain: from asymptote to infinity;
  - range: `(-infinity, infinity)`.

## U5-D7: Solving Logarithmic Equations

### Classroom Flow

- If matching logs are on both sides, students can equate the arguments.
- This only works when:
  - the logs have the same base;
  - both sides are single log expressions;
  - there are no outside "straggler" terms.
- If there are multiple logs on one side, condense first.
- Product, quotient, and power rules are used to create one log per side.
- If one side is a log and the other side is a number, convert to exponential form.
- `ln` is removed by exponentiating with `e`.
- Every candidate solution must be checked in the original equation.
- Any candidate that makes a log argument zero or negative is extraneous.
- Sometimes all candidates are extraneous, so the equation has no solution.
- Word problems can place the unknown inside the log, requiring isolation and exponentiation.

### Tool Implications

#### New Tool Candidate: Log Equation Stepper

- Add a first-move classifier:
  - matching logs on both sides -> equate arguments;
  - multiple logs -> condense first;
  - single log equals number -> convert to exponential form.
- Require same-base confirmation before logs can be "canceled."
- Flag outside terms as stragglers until they are moved or condensed.
- Include a check panel that evaluates every log argument in the original equation.
- Separate outcomes:
  - accepted solution;
  - extraneous because argument is `0`;
  - extraneous because argument is negative;
  - no solution.
- Include `e^x` animation for undoing `ln`.

## U6-D3: Fundamental Theorem Of Algebra And Multiplicity

### Classroom Flow

- Degree is the largest exponent in standard form.
- A polynomial of degree `n` has `n` roots total.
- Roots, zeros, solutions, and x-intercepts are connected vocabulary.
- Factored form reveals degree by adding factor exponents.
- Complex/imaginary roots come in conjugate pairs.
- Real roots plus complex roots must add up to the degree.
- Multiplicity controls graph behavior:
  - even multiplicity bounces;
  - odd multiplicity crosses.
- Graphs may not show every root because complex roots do not appear as x-intercepts.
- Difference of squares is revisited as a factoring path for roots.

### Tool Implications

#### Polynomial Sketch Pad / Roots Mode

- Add a root-count balance:
  - total degree;
  - visible real roots;
  - hidden complex roots.
- Include conjugate-pair cards for complex roots:
  - `a + bi` automatically pairs with `a - bi`.
- Let students build possible real/complex root combinations for a given degree.
- Add multiplicity tags on graph x-intercepts:
  - even -> bounce;
  - odd -> cross.
- Connect factored form directly to graph behavior.

## U6-D4: Polynomial Long Division

### Classroom Flow

- Polynomial division is introduced from ordinary long division.
- Students repeatedly ask:
  - what do I multiply the divisor's front term by to get the current front term?
- Missing powers require placeholder zero terms.
- Subtraction is the danger zone:
  - subtracting a negative changes signs.
- A nonzero remainder means the divisor is not a factor.
- A zero remainder means the divisor is a factor.
- Dividing by a factor reduces the polynomial's degree by one.
- Repeated division can reduce a polynomial until a quadratic remains, where factoring or the quadratic formula can finish the roots.

### Tool Implications

#### New Tool Candidate: Polynomial Division Stepper

- Use a long-division layout with locked columns for each power of x.
- Require placeholder zero terms before division begins.
- At each step ask:
  - "What times the divisor's first term gives the current first term?"
- Animate multiply, subtract, bring down.
- Add a sign-change warning during subtraction.
- End with a factor verdict:
  - remainder `0` -> divisor is a factor;
  - nonzero remainder -> divisor is not a factor.
- Show the degree dropping after each successful division.

## U6-D5: Sum And Difference Of Cubes

### Classroom Flow

- Difference of squares is reviewed before cubes.
- Students practice cube-number recognition and cube-rooting variable powers.
- For variables, cube root divides the exponent by `3`.
- First find `a` and `b` by cube-rooting the entire term.
- Be careful squaring the whole `a` or whole `b` term.
- Sign pattern:
  - same sign in the binomial;
  - opposite sign in the middle term;
  - always plus at the end.
- GCF comes first.
- Students must check whether the result can keep factoring.
- Some expressions can be factored in more than one valid order.

### Tool Implications

#### Difference Of Cubes Reference

- Add "cube root the whole term" practice, including coefficients and variables.
- Keep the same/opposite/always-plus sign pattern prominent.
- Add a GCF-first gate.
- Add a "square the whole term" warning:
  - if `a = 2x`, then `a^2 = 4x^2`.
- Add a "can it keep going?" final gate.
- Allow alternate correct factoring paths when both squares and cubes apply.

## U6-D6: Polynomial Graphing And Intercept Form

### Classroom Flow

- First move is always factoring.
- Factored form reveals x-intercepts.
- Multiplicity tells whether the graph crosses or bounces.
- Polynomial graphs are smooth:
  - no sharp corners;
  - no breaks.
- End behavior comes from degree parity and leading coefficient.
- Imaginary roots count toward total degree but do not show on the x-axis.
- Intercept form is emphasized as the most useful form for graphing.
- Calculator graphing support includes:
  - `y=`;
  - graph;
  - zoom standard / zoom fit;
  - second trace -> zero;
  - left bound, right bound, guess.

### Tool Implications

#### Polynomial Sketch Pad

- Add a smoothness checker:
  - reject sharp corners and breaks as non-polynomial graphs.
- Add an intercept-form builder:
  - each factor becomes a visible x-intercept;
  - repeated factors become bounce markers.
- Include hidden-root count for imaginary roots.
- Add a calculator-help overlay for finding zeros on a graphing calculator.

## U6-D8: Synthetic Division

### Classroom Flow

- Synthetic division is long division without carrying the variables.
- It only works directly for linear divisors.
- The box number comes from setting the divisor equal to zero.
- Coefficients must include placeholder zeros for missing powers.
- Pattern:
  - bring down;
  - multiply;
  - add;
  - repeat.
- The bottom row is the quotient, one degree lower than the original polynomial.
- The last number is the remainder.
- If the divisor has a leading coefficient other than `1`, students:
  - solve for the box number;
  - run synthetic division;
  - divide quotient coefficients by the leading coefficient;
  - keep the remainder over the original divisor.
- Directions matter:
  - use long division when long division is requested;
  - use synthetic division when synthetic division is requested.

### Tool Implications

#### New Tool Candidate: Synthetic Division Machine

- Start with an eligibility check:
  - divisor must be linear;
  - identify whether leading coefficient is `1`.
- Solve the divisor for the box number.
- Force placeholder zeros for missing powers.
- Animate the bring-down, multiply, add cycle.
- Label the quotient as one degree lower.
- Label the final number as the remainder.
- Add special support for divisors like `2x - 1`:
  - box number is `1/2`;
  - quotient coefficients must be divided by `2`;
  - remainder stays over the original divisor.

## Cross-Site Patterns From This Batch

- Many tools should begin with "which form am I in?":
  - simple/compound/continuous;
  - exponential/log;
  - long division/synthetic division;
  - factored/standard/intercept form.
- Students need visible legality checks:
  - logs cannot take zero or negative arguments;
  - synthetic division has divisor restrictions;
  - missing polynomial powers need zero placeholders.
- Repeated teacher moves should become interface rhythms:
  - draw the asymptote first;
  - make the exponent/argument hit a special value;
  - condense before canceling logs;
  - factor before graphing;
  - bring down, multiply, add.
- The site should support exact expressions before decimals:
  - log/e expressions;
  - interest formulas;
  - polynomial quotients with remainders.
