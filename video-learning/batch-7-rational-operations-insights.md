# Batch 7 Video Insights: Rational Expression Operations and Solving

Source transcripts:
- `transcripts/U8-D2 Video.txt`
- `transcripts/U8-D3 Video.txt`
- `transcripts/U8-D4 Video.txt`
- `transcripts/Unit 8 Study Guide Video.txt`

---

## U8-D2: Multiplying and Dividing Rational Expressions

Classroom flow:
- Opens with a parallel to numerical fractions: same rules, bigger scale.
- The anchor rhyme is **"simplify before you multiply"** — factor first so canceling is easy.
- Factoring mantra: **"filly factor"** (fully factor) numerator and denominator completely before touching anything.
- Canceling is allowed top-to-bottom or diagonally, because both represent a factor appearing once in numerator and once in denominator.
- Answers stay in **factored form** — re-FOILing is never required.
- Division: **keep, change, flip** before factoring. Trying to factor before flipping causes errors.
- Complex fractions (a/b over c/d) are treated as division: flip and multiply.
- GCF must come out before canceling — students miss cancellations when they forget to pull a leading coefficient GCF (e.g., `6x + 10 → 2(3x + 5)`).
- Mixed multiply-and-divide chains: work strictly left to right, one operation at a time.
- Domain: excluded values come from the original denominators **before any canceling**.

Key classroom language:
- "Cancel diagonally or top to bottom."
- "Filly factor at the top and bottom — they cancel out any terms."
- "Keep change flip before you do any factoring, because you might forget to flip."
- "Leave it in factored form — you don't have to re-FOIL."

Tool implications for **Rational Simplifier** (existing):
- The tool already shows factoring + canceling. Consider adding a "multiply two expressions" mode alongside simplification.
- The GCF reminder should be visible — students frequently miss a leading-coefficient GCF and get stuck.
- Excluded-values check should note: always evaluate domain from the *original* expression, not after canceling.

New tool candidate: **Rational Multiplication & Division Stepper**
- Mode toggle: Multiply / Divide / Mixed chain.
- Divide mode: always show "flip first" as an explicit Step 1 before any factoring.
- GCF spotlight: after factoring, highlight any solo numbers or single-variable factors that can cancel (not just binomial factors).
- Cancel animation: matched factors cross out in the same color, one pair at a time.
- "Filly factor" gate: the tool should refuse to let students cancel until both sides are fully factored.
- Final-answer panel shows factored form with excluded values listed from the original.

---

## U8-D3: Adding and Subtracting Rational Expressions

Classroom flow:
- Rule 1: **factor denominators only** — numerators stay as-is for now.
- Rule 2: build the LCD from the factored denominators — each missing factor goes on top AND bottom of the fraction that lacks it.
- Rule 3: multiply out the numerators (usually FOILing), keep the denominator in factored form.
- Rule 4: combine like terms in the numerator; then check whether the result factors and cancels anything in the denominator.
- Subtraction shortcut: distribute the negative sign across the entire second numerator first, then treat everything as addition. This avoids sign errors mid-problem.
- Order of operations for complex rational expressions: division is evaluated before addition/subtraction; parentheses override everything. Students must identify the outer operation before picking a strategy.

Key classroom language:
- "Factor the denominators only."
- "Multiply the top and the bottom — because that's like multiplying by one."
- "Multiply out the numerators ... keep the denominator factored."
- "Take this negative and distribute it to everything — now it's just an addition problem."
- "Always check: does the new fraction simplify?"

Tool implications for **Adding Rational Expressions** (existing):
- The existing tool already covers the core LCD-building mechanic.
- Missing: a subtraction mode. Currently only addition. The negative-distribution step is the #1 source of sign errors and needs its own explicit step.
- Missing: a complex-rational-expression level where one term is a fraction divided by another, using order of operations.
- The "check if numerator factors and cancels" step at the end should be more prominent — right now students often stop before simplifying.

Upgrade suggestions for `tools/adding-rationals.html`:
- Add a Subtract tab (negative-distribution as Step 1).
- Add a Mixed Operations level (addition/subtraction combined, then divided by something, testing order of operations).
- After combining the numerator, add a Step: "Does the numerator factor? Check for cancellation."

---

## Unit 8 Study Guide: Rational Function Identification, Asymptotes, and Graphing

Classroom flow:
- Opens with identification: a rational function must be a quotient of two polynomials. Square roots and fractional exponents disqualify something — even if the overall shape looks like a fraction.
- Excluded values = denominator roots. Factors that cancel still produce excluded values — students must check the *original* denominator, not the simplified one.
- Domain expressed in interval notation: `(-∞, VA) ∪ (VA, ∞)`. Range mirrors the structure with the horizontal asymptote.
- Horizontal asymptote three-case rule:
  - deg(num) > deg(denom): **no horizontal asymptote** (grows without bound)
  - deg(num) = deg(denom): **HA = ratio of leading coefficients**
  - deg(num) < deg(denom): **HA = 0** (or the k-shift value for `a/(x−h)+k` form)
- Slant asymptotes: exist when deg(num) = deg(denom) + 1. Students only need to identify their existence, not calculate them.
- No real vertical asymptote: denominator roots can be imaginary (e.g., `x² + 9 = 0 → x = ±3i`), in which case no vertical asymptote appears on the real plane.
- Graphing technique: draw asymptotes as dashed lines first; plug in one x-value to the right of the VA; mirror that distance to the left; sketch the curve toward both asymptotes.

Key classroom language:
- "Can't have a square root; can't have a fractional exponent — that limits the domain."
- "The factor cancels on the numerator and denominator — it's still considered an excluded value."
- "The domain is always up to the vertical asymptote... the range is negative infinity up to the horizontal asymptote, and then onto infinity."
- "Slant asymptotes — you just need to know what they are."
- "Plug in a number to the right of the vertical asymptote, then mirror it."

Tool implications for **Rational Expression Builder** (existing):
- The tool already graphs with asymptotes. Add a **"identify this function" mode**: show a list of expressions including non-rational ones (with square roots, fractional exponents) and ask students which are rational.
- Add interval-notation display for domain and range alongside the current domain chips.
- Asymptote rule summary chip: show which of the three HA cases applies and why (degree comparison with leading coefficients labeled).
- Add a graphing-from-scratch mode: student places the asymptotes first, then plots one point, then sketches — matching the classroom sequence.
- Slant asymptote indicator: a chip that notes "slant asymptote exists (not shown)" when deg(num) > deg(denom) by 1.

---

## U8-D4: Solving Rational Equations

Classroom flow:
- Reframes the operation: now there's an equals sign, so we're *solving*, not just *simplifying*.
- Fraction analogy: `5/8 + 6/8 = x/8` means the tops are equal, so `5 + 6 = x`. Scaling up to rational expressions, once everything shares a denominator, compare tops only.
- Step order:
  1. Identify **excluded values** immediately — factor all denominators and note what x can never be.
  2. Multiply every term by the LCD to clear denominators.
  3. Solve the resulting polynomial equation (may be linear or quadratic).
  4. Check every solution against the excluded values; cross out any that are excluded.
  5. If all solutions are excluded: answer is **no solution**.

Common student errors caught in the lesson:
- Forgetting to check solutions against excluded values ("I circled it twice — this one's all good").
- Negative leading coefficient on x²: teacher explicitly moves the x² to the other side rather than dividing everything by -1, to keep signs cleaner.
- Quadratic solutions where *both* roots are excluded → no solution.

Key classroom language:
- "Excluded values — because those would make the denominator zero."
- "Once all the denominators are the same, we basically don't need them anymore."
- "Check the answer against the excluded values before calling it done."
- "When you have both solutions crossed out, you basically get no solution."

New tool candidate: **Solving Rational Equations Stepper**
- Step 1: Identify excluded values (factor denominators, list what x cannot be) — shown as a "fence" chip before any algebra.
- Step 2: Find LCD, multiply through, clear denominators.
- Step 3: Solve the resulting polynomial (linear or quadratic path shown separately).
- Step 4: Excluded-value check — each solution gets a green checkmark or red cross based on the fence.
- "No solution" verdict shown prominently when all roots are fenced out.
- 4–5 preset problems: one linear result, one quadratic with one excluded root, one quadratic with both roots excluded (no solution), one with a negative x² that needs to be moved.
- Connects to Rational Simplifier and Adding Rationals tools in a sidebar "see also" section.

---

## Cross-Cutting Patterns from U8

- **Excluded values appear in every operation** — they come from denominators, must be evaluated before canceling, and must be checked at the end when solving. The site needs one consistent visual treatment for them across all rational-expression tools.
- **"Factor first, cancel after"** is the mantra for multiply/divide; **"factor denominators, build LCD, multiply numerators"** is the mantra for add/subtract. These parallel structures deserve a summary reference card somewhere in the rational-expression tools.
- Difficulty arc in U8: Simplify (D1) → Multiply/Divide (D2) → Add/Subtract (D3) → Solve (D4). The site currently has D1, D3 covered. D2 and D4 are gaps.
- Teacher always validates with: "Is any solution an excluded value?" — this should be the final step made visible in every rational-expression practice tool that involves solving.
