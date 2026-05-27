# Batch 6 Video Insights: Trig Graphs, Probability, and Statistics

Source transcripts:
- `transcripts/U7-D2 Video (23-24).txt`
- `transcripts/U7-D3 Video (23-24).txt`
- `transcripts/U7-D4 Video.txt`
- `transcripts/U9-D1 Video (23-24).txt`
- `transcripts/U9-D2 Video.txt`
- `transcripts/U9-D3 Video (23-24).txt`

## U7-D2: Angles and Radians

Classroom flow:
- Start every angle in standard position: initial side on the positive x-axis.
- Counterclockwise is positive; clockwise is negative.
- Estimate by quadrant and axis benchmarks before calculating.
- Coterminal angles are introduced as angles that end in the same place; students add or subtract 360 degrees.
- Radians come from the radius wrapping around the circle: full turn is `2pi`, half turn is `pi`, and `1` radian is about `57.3` degrees.
- Degree/radian conversion is taught by dimensional analysis:
  - degrees to radians: multiply by `pi/180`.
  - radians to degrees: multiply by `180/pi`.

Tool implications:
- Unit Circle Walker should show direction arrows and a path trace, not just a final terminal side.
- Add a coterminal-angle chip that shows `theta + 360k` or `theta + 2pi k` and highlights that the endpoint is unchanged.
- Add a degree/radian converter with cancellation visible, because the lesson leans on dimensional analysis.
- Standard-position vocabulary should be visible whenever students drag an angle.

## U7-D3: Periodic Functions and the Ferris Wheel

Classroom flow:
- The lesson builds periodic functions from a Ferris wheel before naming the graph.
- Diameter, radius, height from the ground, and center height become the physical source of amplitude and midline.
- At `1/8` of a turn, students use a 45-45-90 triangle to find the vertical drop/rise.
- The table of wheel rotations becomes a wave graph.
- Periodic function: values repeat at regular intervals.
- Period is one full cycle or the distance from peak to peak.
- Amplitude is the distance from the midline to a maximum/minimum, not the full height.
- One full rotation connects to `2pi`.

Tool implications:
- Sine/Cosine Graph Builder should include a Ferris-wheel mode before formula mode.
- Let students scrub rotations: `0`, `1/8`, `1/4`, `3/8`, `1/2`, ... and watch the table fill before the curve is drawn.
- Draw the midline before drawing the wave.
- Label amplitude as radius in Ferris-wheel mode, then translate that label to trig vocabulary.
- Period controls should support both "one rotation" language and `2pi` language.

## U7-D4: Unit Circle to Sine/Cosine Graphs

Classroom flow:
- Exact-value triangles are reviewed first:
  - `pi/6`: `(sqrt(3)/2, 1/2)`
  - `pi/4`: `(sqrt(2)/2, sqrt(2)/2)`
  - `pi/3`: `(1/2, sqrt(3)/2)`
- Reference angle means the positive angle back to the x-axis from the terminal side.
- Unit-circle coordinates are `(x, y) = (cos theta, sin theta)`.
- Sine is built from y-values around the circle.
- Cosine is built from x-values around the circle.
- Sine starts at `0`, reaches `1` at `pi/2`, returns to `0` at `pi`, reaches `-1` at `3pi/2`, and returns to `0` at `2pi`.
- Cosine starts at `1`, falls to `-1`, then returns to `1`.
- Informal memory language: sine looks like a snake; cosine looks like a cup.

Tool implications:
- Unit Circle Walker should make `sin = y` and `cos = x` impossible to miss.
- The sine/cosine graph should be trace-built from circle coordinates, not drawn all at once.
- Snap mode should include fourths, sixths, and thirds with exact coordinates.
- Reference-angle mode should show the acute angle to the x-axis and keep quadrant signs separate from the reference triangle.
- Sine/Cosine Graph Builder should start with parent graphs before adding amplitude, period, phase shift, and midline.

## U9-D1: Statistics Intro and Data Displays

Note: these U9 classroom videos are statistics/probability lessons. The local inventory also contains a separate `Unit 9 Review Video (Conics)` file, so U9 materials appear mixed by source.

Classroom flow:
- The Pepsi cap example shows why a small sample can be unconvincing compared with a huge population.
- Dice simulation makes sample size concrete.
- Individuals and variables are defined before any chart-making.
- Variables are split into categorical and quantitative.
- Categorical data moves through frequency table, relative-frequency table, bar chart, and pie graph.
- Misleading graph lesson: changing the y-axis baseline can exaggerate a difference.

Tool candidate: Data Display and Misleading Graph Lab
- Students enter or choose categorical data.
- Tool builds frequency and relative-frequency tables.
- Toggle between bar chart and pie chart.
- Y-axis baseline slider shows how a graph can become misleading.
- "Honest graph" check should call out whether the axis starts at zero for bar charts.

## U9-D2: Probability Rules and Simulation

Classroom flow:
- Dice-product game contrasts experimental probability with theoretical probability.
- A multiplication chart shows odd products as `9/36 = 25%`.
- Law of large numbers: more trials approach the true probability.
- Probability is desired outcomes over total outcomes.
- Complement language: odd/even and on-time/late probabilities add to `1`.
- "Or" means add; "and" means multiply in the classroom shorthand.
- Inclusion-exclusion is introduced for overlap: `P(A or B) = P(A) + P(B) - P(A and B)`.
- Mutually exclusive events have no overlap to subtract.
- The train simulation gives students a feel for whether an outcome is surprising.

Tool candidate: Probability Simulator and Rules Lab
- Dice-product simulator with experimental vs theoretical panels.
- Trial count slider so students see convergence.
- Complement card: if `P(A)` is known, compute `1 - P(A)`.
- "Or" panel should visibly add regions and subtract overlap.
- Mutually-exclusive toggle should remove the overlap term.
- Use classroom language carefully: preserve the add/multiply shorthand, but distinguish independent from mutually exclusive in the tool logic.

## U9-D3: Sampling, Distributions, and Spread

Classroom flow:
- Song-lyrics sampling compares a human "random" sample to a computer random sample.
- The class dot plot shows that convenience/human samples can be biased and more variable.
- Simple random sample is contrasted with convenient sample.
- Bias examples include online polls and parking-lot surveys.
- Data displays include dot plots, stem-and-leaf plots, histograms, and box plots.
- Center:
  - mean: add and divide by count.
  - median: middle after sorting; average the two middles if needed.
  - mode: most frequent, and sometimes none.
- Median is better when an outlier distorts the mean.
- Shape:
  - symmetric.
  - skewed right or left; skew follows the tail.
- Quartiles and IQR lead into box-and-whisker plots.
- Outlier fences:
  - low outlier: below `Q1 - 1.5*IQR`.
  - high outlier: above `Q3 + 1.5*IQR`.

Tool candidate: Sampling Bias and Distribution Lab
- Students compare hand-picked samples against computer random samples.
- Dot plot updates after each sampling run.
- Dataset display can switch between dot plot, stem plot, histogram, and box plot.
- Mean/median/mode chips update live.
- Outlier toggle demonstrates why median can be the better center.
- Box plot mode should expose min, Q1, median, Q3, max, IQR, and outlier fences.

## Cross-Cutting Design Patterns

- Draw the physical or structural model before the formula: angle path, Ferris wheel, table, circle point, frequency table, or probability region.
- Exact values should appear before decimal approximations.
- Graph vocabulary becomes easier when it is attached to motion: amplitude as radius, period as one full rotation, sine as y-coordinate trace, cosine as x-coordinate trace.
- Simulation tools should answer "is this surprising?" visually, not only by returning a number.
- Check panels matter in probability and statistics too: students should compare experimental results, theoretical values, and the original question context.
