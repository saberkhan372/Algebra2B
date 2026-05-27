// Shared primitives for the Algebra 2 Playgrounds wireframes.
// Sketchy SVG filter, placeholder squiggles, fake browser chrome, etc.

// Inject the rough SVG filter once. Imported pages reference it via filter:url(#wf-rough).
function WFDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <filter id="wf-rough" x="-2%" y="-2%" width="104%" height="104%">
          <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="2" seed="3" result="t" />
          <feDisplacementMap in="SourceGraphic" in2="t" scale="1.6" />
        </filter>
        <filter id="wf-rough-soft" x="-2%" y="-2%" width="104%" height="104%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="7" result="t" />
          <feDisplacementMap in="SourceGraphic" in2="t" scale="0.9" />
        </filter>
      </defs>
    </svg>
  );
}

// Fake browser chrome — used as the frame around each artboard so it looks like a webpage
function WFBrowser({ url = 'algebra2playgrounds.school', children, style = {}, accent }) {
  return (
    <div className="artboard rough-soft" style={{ ...style }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '8px 12px',
        borderBottom: '2px solid var(--ink)',
        background: '#e5dec8',
        fontFamily: "'Patrick Hand', cursive",
      }}>
        <div style={{ display: 'flex', gap: 5 }}>
          <span style={{ width: 10, height: 10, border: '1.5px solid var(--ink)', borderRadius: '50%' }} />
          <span style={{ width: 10, height: 10, border: '1.5px solid var(--ink)', borderRadius: '50%' }} />
          <span style={{ width: 10, height: 10, border: '1.5px solid var(--ink)', borderRadius: '50%' }} />
        </div>
        <div style={{
          flex: 1, marginLeft: 8,
          border: '1.5px solid var(--ink)', borderRadius: 999,
          padding: '2px 12px', fontSize: 13, background: 'var(--paper)',
          color: 'var(--ink-soft)',
        }}>
          {url}
        </div>
        <span style={{ fontSize: 12, color: 'var(--ink-soft)' }}>↻</span>
      </div>
      <div style={{ position: 'relative', height: 'calc(100% - 37px)', overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
}

// Placeholder text line — multiple sketchy strokes
function PhLines({ count = 3, width = '100%', last = '70%', gap = 8 }) {
  const lines = [];
  for (let i = 0; i < count; i++) {
    const w = i === count - 1 ? last : width;
    lines.push(<div key={i} className="ph-line" style={{ width: w }} />);
  }
  return <div className="col" style={{ gap }}>{lines}</div>;
}

// Sketchy image / widget placeholder (the big diagonal-X box)
function PhImg({ label = 'widget', style = {}, mini = false }) {
  return (
    <div className="ph-img" style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'var(--ink-soft)', fontFamily: "'Special Elite', monospace",
      fontSize: mini ? 10 : 13, letterSpacing: 0.5,
      ...style,
    }}>
      <span style={{ background: 'var(--paper)', padding: '2px 6px', border: '1px dashed var(--ink-soft)' }}>
        {label}
      </span>
    </div>
  );
}

// Sketchy button
function SkBtn({ children, accent, style = {}, big = false }) {
  return (
    <span className="sk-pill" style={{
      fontSize: big ? 18 : 14,
      padding: big ? '6px 18px' : '3px 12px',
      background: accent ? 'var(--accent)' : 'var(--paper)',
      color: accent ? 'var(--paper)' : 'var(--ink)',
      borderColor: 'var(--ink)',
      ...style,
    }}>
      {children}
    </span>
  );
}

// Tool data — the topics we know about, used across wireframes
const TOOLS = [
  { id: 'imag', name: 'Imaginary Number Sandbox', unit: 'U3', topic: 'Imaginary Numbers', kind: 'visualizer', diff: 1, code: 'Im' },
  { id: 'subs', name: 'Substitution Stepper',     unit: 'U1', topic: 'Systems',          kind: 'practice',   diff: 1, code: 'Sb' },
  { id: 'elim', name: 'Elimination Race',         unit: 'U1', topic: 'Systems',          kind: 'game',       diff: 2, code: 'El' },
  { id: 'fact', name: 'Factoring Quadratics Lab', unit: 'U1', topic: 'Factoring',        kind: 'practice',   diff: 2, code: 'Fq' },
  { id: 'absv', name: 'Absolute Value Grapher',   unit: 'U2', topic: 'Graphs',           kind: 'visualizer', diff: 1, code: 'Av' },
  { id: 'negx', name: 'Negative Exponent Flipper',unit: 'U2', topic: 'Exponents',        kind: 'visualizer', diff: 1, code: 'Nx' },
  { id: 'dos',  name: 'Difference of Squares',    unit: 'U2', topic: 'Factoring',        kind: 'game',       diff: 2, code: 'DS' },
  { id: 'doc',  name: 'Difference of Cubes',      unit: 'U2', topic: 'Factoring',        kind: 'reference',  diff: 3, code: 'DC' },
  { id: 'rex',  name: 'Rational Expression Builder', unit: 'U3', topic: 'Rationals',     kind: 'visualizer', diff: 2, code: 'Rx' },
  { id: 'ratx', name: 'Rational Exponents Tower', unit: 'U4', topic: 'Exponents',        kind: 'game',       diff: 3, code: 'Re' },
  { id: 'quad', name: 'Quadratic Slider Studio',  unit: 'U1', topic: 'Quadratics',       kind: 'visualizer', diff: 1, code: 'Qs' },
  { id: 'comp', name: 'Complete the Square Trainer', unit: 'U3', topic: 'Quadratics',    kind: 'practice',   diff: 2, code: 'Cs' },
];

const UNITS = [
  { id: 'U1', name: 'Systems & Quadratics', dates: 'Sept 2 – Sept 26', current: false },
  { id: 'U2', name: 'Graphs & Exponents',   dates: 'Sept 29 – Oct 17', current: true },
  { id: 'U3', name: 'Rationals & Imaginary',dates: 'Oct 20 – Nov 7',   current: false },
  { id: 'U4', name: 'Rational Exponents',   dates: 'Nov 10 – Dec 5',   current: false },
];

Object.assign(window, { WFDefs, WFBrowser, PhLines, PhImg, SkBtn, TOOLS, UNITS });
