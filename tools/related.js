// related.js — "Try next" section injected into every tool's sidebar
(function () {
  var TOOLS = [{"id":"quad","name":"Quadratic Slider Studio","unit":"U1","topic":"Quadratics","kind":"visualizer","diff":1,"code":"Qs","href":"tools/quadratic-slider.html"},{"id":"subs","name":"Substitution Stepper","unit":"U1","topic":"Systems","kind":"practice","diff":1,"code":"Sb","href":"tools/substitution-stepper.html"},{"id":"elim","name":"Elimination Race","unit":"U1","topic":"Systems","kind":"game","diff":2,"code":"El","href":"tools/elimination-race.html"},{"id":"fact","name":"Factoring Quadratics Lab","unit":"U1","topic":"Factoring","kind":"practice","diff":2,"code":"Fq","href":"tools/factoring-lab.html"},{"id":"piece","name":"Piecewise Function Grapher","unit":"U1","topic":"Functions","kind":"visualizer","diff":3,"code":"Pw","href":"tools/piecewise-grapher.html"},{"id":"absv","name":"Absolute Value Grapher","unit":"U2","topic":"Graphs","kind":"visualizer","diff":1,"code":"Av","href":"tools/abs-value-grapher.html"},{"id":"trans","name":"Transformations Explorer","unit":"U2","topic":"Functions","kind":"explorer","diff":3,"code":"Tx","href":"tools/transformations.html"},{"id":"negx","name":"Negative Exponent Flipper","unit":"U2","topic":"Exponents","kind":"visualizer","diff":1,"code":"Nx","href":"tools/neg-exponent-flipper.html"},{"id":"dos","name":"Difference of Squares","unit":"U2","topic":"Factoring","kind":"game","diff":2,"code":"DS","href":"tools/diff-of-squares.html"},{"id":"doc","name":"Difference of Cubes","unit":"U2","topic":"Factoring","kind":"reference","diff":3,"code":"DC","href":"tools/diff-of-cubes.html"},{"id":"imag","name":"Imaginary Number Sandbox","unit":"U3","topic":"Imaginary","kind":"visualizer","diff":1,"code":"Im","href":"tools/imaginary-sandbox.html"},{"id":"qstd","name":"Quadratic Standard Form","unit":"U3","topic":"Quadratics","kind":"visualizer","diff":2,"code":"Qf","href":"tools/quadratic-standard.html"},{"id":"rex","name":"Rational Expression Builder","unit":"U3","topic":"Rationals","kind":"visualizer","diff":2,"code":"Rx","href":"tools/rational-expressions.html"},{"id":"comp","name":"Complete the Square Trainer","unit":"U3","topic":"Quadratics","kind":"practice","diff":2,"code":"Cs","href":"tools/complete-square.html"},{"id":"cinv","name":"Composition & Inverse Lab","unit":"U4","topic":"Functions","kind":"explorer","diff":2,"code":"Ci","href":"tools/composition-inverse.html"},{"id":"ratx","name":"Rational Exponents Tower","unit":"U4","topic":"Exponents","kind":"game","diff":3,"code":"Re","href":"tools/rational-exponents.html"},{"id":"cubic","name":"Cubic & Radical Grapher","unit":"U4","topic":"Radicals","kind":"visualizer","diff":3,"code":"Cr","href":"tools/cubic-radical.html"},{"id":"fcomp","name":"Composition Machine","unit":"U4","topic":"Functions","kind":"visualizer","diff":2,"code":"Cm","href":"tools/composition.html"},{"id":"inv","name":"Inverse Function Revealer","unit":"U4","topic":"Functions","kind":"visualizer","diff":3,"code":"Iv","href":"tools/inverse-function.html"},{"id":"logcv","name":"Log ↔ Exponential Converter","unit":"U5","topic":"Logs","kind":"practice","diff":2,"code":"Lg","href":"tools/log-converter.html"},{"id":"expo","name":"Exponential Function Explorer","unit":"U5","topic":"Exponentials","kind":"explorer","diff":2,"code":"Ef","href":"tools/exponential-explorer.html"},{"id":"logp","name":"Log Properties Sandbox","unit":"U5","topic":"Logs","kind":"practice","diff":2,"code":"Lp","href":"tools/log-properties.html"},{"id":"expeq","name":"Exponential Equation Solver","unit":"U5","topic":"Exponentials","kind":"practice","diff":2,"code":"Ee","href":"tools/exponential-equation-solver.html"},{"id":"emb","name":"Exponential Model Builder","unit":"U5","topic":"Exponentials","kind":"practice","diff":3,"code":"Em","href":"tools/exponential-model-builder.html"},{"id":"logmirror","name":"Log ↔ Exp Mirror Explorer","unit":"U5","topic":"Logs","kind":"explorer","diff":2,"code":"Lm","href":"tools/log-exp-mirror.html"},{"id":"growrace","name":"Growth Race","unit":"U5","topic":"Growth","kind":"explorer","diff":2,"code":"Gr","href":"tools/growth-race.html"},{"id":"rsimp","name":"Rational Simplifier","unit":"U6","topic":"Rationals","kind":"practice","diff":2,"code":"Rs","href":"tools/rational-simplifier.html"},{"id":"addr","name":"Adding Rational Expressions","unit":"U6","topic":"Rationals","kind":"practice","diff":3,"code":"Ar","href":"tools/adding-rationals.html"},{"id":"rmul","name":"Rational Mult\/Div Stepper","unit":"U6","topic":"Rationals","kind":"practice","diff":3,"code":"Md","href":"tools/rational-multdiv.html"},{"id":"req","name":"Solving Rational Equations","unit":"U6","topic":"Rationals","kind":"practice","diff":3,"code":"Re","href":"tools/rational-equations.html"},{"id":"poly","name":"Polynomial Sketch Pad","unit":"U6","topic":"Polynomials","kind":"visualizer","diff":2,"code":"Ps","href":"tools/polynomial-sketch.html"},{"id":"pdiv","name":"Polynomial Division Stepper","unit":"U6","topic":"Polynomials","kind":"practice","diff":3,"code":"Pd","href":"tools/polynomial-division-stepper.html"},{"id":"polyr","name":"Polynomial Root Sculptor","unit":"U6","topic":"Polynomials","kind":"explorer","diff":2,"code":"Pr","href":"tools/polynomial-roots.html"},{"id":"rfb","name":"Rational Function Behavior","unit":"U6","topic":"Rationals","kind":"explorer","diff":2,"code":"Rb","href":"tools/rational-behavior.html"},{"id":"soht","name":"SOH CAH TOA Triangle Solver","unit":"U7","topic":"Trigonometry","kind":"practice","diff":2,"code":"St","href":"tools/soh-cah-toa.html"},{"id":"unitc","name":"Unit Circle Walker","unit":"U7","topic":"Trigonometry","kind":"visualizer","diff":3,"code":"Uc","href":"tools/unit-circle.html"},{"id":"trigb","name":"Sine\/Cosine Graph Builder","unit":"U7","topic":"Trigonometry","kind":"visualizer","diff":2,"code":"Sc","href":"tools/sine-cosine-builder.html"},{"id":"ucwave","name":"Unit Circle Wave Sync","unit":"U7","topic":"Trigonometry","kind":"explorer","diff":2,"code":"Uw","href":"tools/unit-circle-wave.html"},{"id":"trigx","name":"Trig Function Explorer","unit":"U7","topic":"Trigonometry","kind":"explorer","diff":2,"code":"Tx","href":"tools/trig-explorer.html"},{"id":"bxplt","name":"Box Plot Builder","unit":"U8","topic":"Statistics","kind":"visualizer","diff":2,"code":"Bp","href":"tools/box-plot-builder.html"},{"id":"probx","name":"Probability Rules Sandbox","unit":"U8","topic":"Statistics","kind":"visualizer","diff":2,"code":"Ps","href":"tools/probability-sandbox.html"},{"id":"smpbx","name":"Sampling Bias Lab","unit":"U8","topic":"Statistics","kind":"visualizer","diff":3,"code":"Sb","href":"tools/sampling-bias-lab.html"},{"id":"qwpx","name":"Quadratic Word Problems Trainer","unit":"U3","topic":"Quadratics","kind":"practice","diff":2,"code":"Qw","href":"tools/quadratic-word-problems.html"},{"id":"ratd","name":"Rationalizing Denominators","unit":"U3","topic":"Radicals","kind":"practice","diff":2,"code":"Rd","href":"tools/rationalizing-denominators.html"},{"id":"cplane","name":"Complex Number Explorer","unit":"U3","topic":"Complex","kind":"explorer","diff":2,"code":"Cx","href":"tools/complex-plane.html"},{"id":"qfe","name":"Quadratic Forms Explorer","unit":"U3","topic":"Quadratics","kind":"explorer","diff":2,"code":"Qe","href":"tools/quadratic-forms-explorer.html"},{"id":"atlas","name":"Parent Function Atlas","unit":"U2","topic":"Functions","kind":"explorer","diff":2,"code":"Pf","href":"tools/parent-function-atlas.html"},{"id":"xray","name":"Function X-Ray","unit":"U1","topic":"Functions","kind":"explorer","diff":2,"code":"Xr","href":"tools/function-xray.html"},{"id":"sysexp","name":"Systems Explorer","unit":"U1","topic":"Systems","kind":"explorer","diff":1,"code":"Se","href":"tools/systems-explorer.html"},{"id":"ineqx","name":"Inequality Region Explorer","unit":"U1","topic":"Inequalities","kind":"explorer","diff":2,"code":"Iq","href":"tools/inequality-explorer.html"},{"id":"ineqsol","name":"Inequality Solver","unit":"U1","topic":"Inequalities","kind":"practice","diff":1,"code":"Is","href":"tools/inequality-solver.html"},{"id":"absveq","name":"Absolute Value Equation Stepper","unit":"U1","topic":"Equations","kind":"practice","diff":2,"code":"Ae","href":"tools/abs-value-equations.html"},{"id":"psform","name":"Point-Slope Form Trainer","unit":"U1","topic":"Linear","kind":"practice","diff":1,"code":"Ps","href":"tools/point-slope.html"},{"id":"fnote","name":"Function Notation Evaluator","unit":"U1","topic":"Functions","kind":"practice","diff":1,"code":"Fn","href":"tools/function-notation.html"},{"id":"liteq","name":"Literal Equation Isolator","unit":"U3","topic":"Equations","kind":"practice","diff":2,"code":"Le","href":"tools/literal-equations.html"},{"id":"domr","name":"Domain Restriction Sorter","unit":"U4","topic":"Domain","kind":"practice","diff":2,"code":"Dr","href":"tools/domain-restriction.html"},{"id":"expstep","name":"Exponential Equations Stepper","unit":"U5","topic":"Exponentials","kind":"practice","diff":2,"code":"Eq","href":"tools/exponential-equations.html"},{"id":"cotrad","name":"Coterminal Angles & Radians","unit":"U7","topic":"Trigonometry","kind":"practice","diff":2,"code":"Co","href":"tools/coterminal-radian.html"},{"id":"scgraph","name":"Sine / Cosine Graph Builder","unit":"U7","topic":"Trigonometry","kind":"visualizer","diff":2,"code":"Sg","href":"tools/sincos-grapher.html"},{"id":"lineq","name":"Linear Equations Explorer","unit":"U1","topic":"Linear","kind":"explorer","diff":1,"code":"Lx","href":"tools/linear-equations.html"},{"id":"conics","name":"Conic Sections Explorer","unit":"U8","topic":"Conics","kind":"explorer","diff":2,"code":"Cn","href":"tools/conics.html"},{"id":"radeq","name":"Radical Equation Solver","unit":"U4","topic":"Radicals","kind":"practice","diff":2,"code":"Rq","href":"tools/radical-equations.html"},{"id":"drt","name":"Distance · Rate · Time Trainer","unit":"U1","topic":"Systems","kind":"practice","diff":2,"code":"Dt","href":"tools/drt-trainer.html"},{"id":"ti84","name":"TI-84 & PLYSMLT2 Guide","unit":"U1","topic":"Systems","kind":"reference","diff":1,"code":"Ti","href":"tools/ti84-plysmlt.html"},{"id":"exprules","name":"Exponent Rules Trainer","unit":"U2","topic":"Exponents","kind":"practice","diff":2,"code":"Er","href":"tools/exponent-rules.html"},{"id":"cxarith","name":"Complex Arithmetic Stepper","unit":"U3","topic":"Complex","kind":"practice","diff":2,"code":"Ca","href":"tools/complex-arithmetic.html"}];

  var KIND_ORDER = { explorer: 0, visualizer: 1, practice: 2, game: 3, reference: 4 };

  function getRelated(current) {
    var others = TOOLS.filter(function (t) { return t.id !== current.id; });

    // 1. Same-unit, different kind — explorers first, then diff ascending
    var sameUnit = others
      .filter(function (t) { return t.unit === current.unit && t.kind !== current.kind; })
      .sort(function (a, b) {
        return (KIND_ORDER[a.kind] || 5) - (KIND_ORDER[b.kind] || 5) || a.diff - b.diff;
      });

    var related = sameUnit.slice(0, 2);

    // 2. Fill to 3 with same-unit same-kind (if needed) or same-topic cross-unit
    if (related.length < 3) {
      var crossUnit = others.filter(function (t) {
        return t.unit !== current.unit
          && t.topic === current.topic
          && !related.some(function (r) { return r.id === t.id; });
      }).sort(function (a, b) {
        return (KIND_ORDER[a.kind] || 5) - (KIND_ORDER[b.kind] || 5);
      });
      if (crossUnit.length) related.push(crossUnit[0]);
    }

    if (related.length < 3) {
      var sameUnitAny = others
        .filter(function (t) {
          return t.unit === current.unit && !related.some(function (r) { return r.id === t.id; });
        })
        .sort(function (a, b) { return a.diff - b.diff; });
      if (sameUnitAny.length) related.push(sameUnitAny[0]);
    }

    return related.slice(0, 3);
  }

  function buildSection(related) {
    var sec = document.createElement('div');
    sec.className = 'try-next-section';

    var label = document.createElement('div');
    label.className = 'try-next-label';
    label.textContent = 'Try next';
    sec.appendChild(label);

    var list = document.createElement('div');
    list.className = 'try-next-cards';

    related.forEach(function (t) {
      var card = document.createElement('a');
      card.href = '../' + t.href;
      card.className = 'try-next-card';

      var codeEl = document.createElement('span');
      codeEl.className = 'try-next-code';
      codeEl.textContent = t.code;

      var info = document.createElement('div');
      info.className = 'try-next-info';

      var name = document.createElement('div');
      name.className = 'try-next-name';
      name.textContent = t.name;

      var meta = document.createElement('div');
      meta.className = 'try-next-meta';
      meta.textContent = t.unit + ' · ' + t.kind + ' · ' + '●'.repeat(t.diff);

      info.appendChild(name);
      info.appendChild(meta);
      card.appendChild(codeEl);
      card.appendChild(info);
      list.appendChild(card);
    });

    sec.appendChild(list);
    return sec;
  }

  function init() {
    // Identify current tool from URL (handle both /foo.html and /foo)
    var path = location.pathname;
    var match = path.match(/\/tools\/([^/]+?)(?:\.html)?$/);
    if (!match || match[1].endsWith('.js')) return;
    var filename = 'tools/' + match[1] + '.html';
    var current = TOOLS.find(function (t) { return t.href === filename; });
    if (!current) return;

    var related = getRelated(current);
    if (!related.length) return;

    // Inject into info sidebar (no range inputs = info sidebar)
    var sidebar = document.querySelector('.tool-sidebar');
    if (!sidebar) return;
    sidebar.appendChild(buildSection(related));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
