// Unit/topic index page wireframes

// ─────────────────────────────────────────────────────────────
// A. STACK — vertical list with day-by-day pacing
// ─────────────────────────────────────────────────────────────
function UnitStack() {
  const lessons = [
    { d: 'D1', name: 'Substitution & Elimination', tool: 'Substitution Stepper', done: true },
    { d: 'D2', name: 'Factoring Quadratics',       tool: 'Factoring Lab',         done: true },
    { d: 'D3', name: 'Absolute Value Graphs',      tool: 'Abs Value Grapher',     done: true, current: false },
    { d: 'D4', name: 'Negative Exponents',         tool: 'Exponent Flipper',      done: false, current: true },
    { d: 'D5', name: 'Quiz Review',                tool: '—',                     done: false },
    { d: 'D6', name: 'Difference of Squares',      tool: 'DoS / DoC',             done: false },
  ];
  return (
    <WFBrowser url="algebra2playgrounds.school/u2">
      <div className="paper-lined" style={{ height: '100%', padding: '18px 28px' }}>
        {/* Crumbs */}
        <div className="f-type" style={{ fontSize: 12, color: 'var(--ink-soft)' }}>
          ← back to playgrounds
        </div>
        <div className="row between" style={{ alignItems: 'flex-end', marginTop: 4 }}>
          <div>
            <div className="f-marker" style={{ fontSize: 13 }}>UNIT 2</div>
            <div className="f-display" style={{ fontSize: 48, lineHeight: 0.95 }}>Graphs & <span style={{ color: 'var(--accent)' }}>Exponents</span></div>
            <div className="f-hand" style={{ fontSize: 15, color: 'var(--ink-soft)' }}>Sept 29 – Oct 17 · 6 lessons · 4 tools</div>
          </div>
          <div className="row gap-6">
            <span className="sk-pill f-hand" style={{ fontSize: 13 }}>← U1</span>
            <span className="sk-pill f-hand" style={{ fontSize: 13 }}>U3 →</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="sk-box-dashed" style={{ marginTop: 16, padding: '6px 10px' }}>
          <div className="row between">
            <span className="f-marker" style={{ fontSize: 12 }}>WHERE WE ARE</span>
            <span className="f-type" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>3 of 6 done</span>
          </div>
          <div style={{ display: 'flex', gap: 4, marginTop: 6 }}>
            {lessons.map((l, i) => (
              <div key={i} style={{
                flex: 1, height: 14,
                border: '2px solid var(--ink)',
                background: l.done ? 'var(--ink)' : l.current ? 'var(--highlight)' : 'transparent',
                position: 'relative',
              }}>
                {l.current && <span className="f-marker" style={{ position: 'absolute', top: -18, left: '50%', transform: 'translateX(-50%)', fontSize: 11 }}>👉 today</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Lessons */}
        <div className="col gap-8" style={{ marginTop: 22 }}>
          {lessons.map((l, i) => (
            <div key={i} className={`sk-box row ${l.current ? 'rot-r' : ''}`} style={{
              padding: '10px 14px', alignItems: 'center', gap: 14,
              background: l.current ? 'var(--highlight)' : l.done ? 'var(--paper)' : 'var(--paper-2)',
              opacity: !l.done && !l.current ? 0.7 : 1,
            }}>
              <div className="f-display" style={{ fontSize: 28, width: 56, color: 'var(--accent)' }}>{l.d}</div>
              <div className="grow">
                <div className="f-display" style={{ fontSize: 22, lineHeight: 1, textDecoration: l.done ? 'line-through' : 'none', textDecorationColor: 'var(--ink-soft)' }}>{l.name}</div>
                <div className="f-hand" style={{ fontSize: 13, color: 'var(--ink-soft)' }}>
                  🔧 tool: {l.tool}
                </div>
              </div>
              {l.tool !== '—' && <SkBtn accent={l.current}>open tool →</SkBtn>}
            </div>
          ))}
        </div>
      </div>
    </WFBrowser>
  );
}

// ─────────────────────────────────────────────────────────────
// B. GRID — topic tiles (less linear, more browse-y)
// ─────────────────────────────────────────────────────────────
function UnitGrid() {
  const topics = [
    { name: 'Absolute Value Graphs', tools: 1, done: true, color: 'var(--paper-2)' },
    { name: 'Quadratic Graphs',      tools: 2, done: true, color: 'var(--paper-2)' },
    { name: 'Negative Exponents',    tools: 1, current: true, color: 'var(--highlight)' },
    { name: 'Rules of Exponents',    tools: 0, done: false, color: 'var(--paper-2)' },
    { name: 'Difference of Squares', tools: 1, done: false, color: 'var(--paper-2)' },
    { name: 'Difference of Cubes',   tools: 1, done: false, color: 'var(--paper-2)' },
  ];
  return (
    <WFBrowser url="algebra2playgrounds.school/u2">
      <div className="paper-grid" style={{ height: '100%', padding: '18px 28px' }}>
        {/* Header */}
        <div className="row between">
          <div>
            <div className="f-type" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>UNIT 2 OF 4</div>
            <div className="f-display" style={{ fontSize: 52, lineHeight: 1 }}>Graphs & Exponents</div>
            <div className="f-hand" style={{ fontSize: 14, color: 'var(--ink-soft)' }}>
              "this unit is where x's start moving in funny ways."
            </div>
          </div>
          <div className="sk-box" style={{ padding: 8, width: 160 }}>
            <div className="f-marker" style={{ fontSize: 11 }}>WE'RE ON DAY</div>
            <div className="f-display" style={{ fontSize: 32, lineHeight: 1, color: 'var(--accent)' }}>4 / 6</div>
            <div className="f-hand" style={{ fontSize: 12 }}>Negative Exponents</div>
          </div>
        </div>

        {/* View toggle */}
        <div className="row gap-6" style={{ marginTop: 14 }}>
          {['Topics', 'Day-by-day', 'Just the tools', 'Practice'].map((k, i) => (
            <span key={k} className="sk-pill f-hand" style={{
              fontSize: 13,
              background: i === 0 ? 'var(--ink)' : 'var(--paper)',
              color: i === 0 ? 'var(--paper)' : 'var(--ink)',
            }}>{k}</span>
          ))}
        </div>

        {/* Topic tiles */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 14 }}>
          {topics.map((t, i) => (
            <div key={i} className={`sk-box ${t.current ? 'rot-l' : i % 2 ? 'rot-r' : ''}`} style={{
              padding: 12, background: t.color, minHeight: 130, position: 'relative',
            }}>
              {t.current && <span className="pin" style={{ top: -7, right: 14 }} />}
              <div className="row between">
                <span className="sk-tag f-type" style={{ fontSize: 10 }}>{t.tools} tool{t.tools === 1 ? '' : 's'}</span>
                {t.done && <span className="f-marker" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>✓ done</span>}
                {t.current && <span className="f-marker" style={{ fontSize: 11, color: 'var(--accent)' }}>← today</span>}
              </div>
              <div className="f-display" style={{ fontSize: 22, lineHeight: 1, marginTop: 6 }}>{t.name}</div>
              <PhImg label="" style={{ height: 40, marginTop: 8 }} mini />
              <div className="f-hand" style={{ fontSize: 12, color: 'var(--ink-soft)', marginTop: 6 }}>
                tap to open the tool →
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="sk-box-dashed" style={{ marginTop: 14, padding: 10 }}>
          <div className="f-marker" style={{ fontSize: 12 }}>📎 ALSO IN THIS UNIT</div>
          <div className="f-hand" style={{ fontSize: 13 }}>Quiz review · D5 — Mr. K shares the review tool the day before.</div>
        </div>
      </div>
    </WFBrowser>
  );
}

// ─────────────────────────────────────────────────────────────
// C. SKETCHNOTE — mind-map of how topics connect
// ─────────────────────────────────────────────────────────────
function UnitSketchnote() {
  return (
    <WFBrowser url="algebra2playgrounds.school/u2">
      <div className="paper" style={{ height: '100%', padding: '14px 24px', position: 'relative' }}>
        {/* Top header */}
        <div className="row between">
          <div>
            <div className="f-marker" style={{ fontSize: 12 }}>UNIT 2 SKETCHNOTES</div>
            <div className="f-display" style={{ fontSize: 38, lineHeight: 1 }}>Graphs & Exponents — <span className="highlight">the map</span></div>
          </div>
          <div className="row gap-6">
            <span className="sk-pill f-hand" style={{ fontSize: 12 }}>linear view</span>
            <span className="sk-pill f-hand" style={{ fontSize: 12 }}>tools only</span>
          </div>
        </div>

        {/* Sketchnote canvas */}
        <div style={{ position: 'relative', height: 'calc(100% - 70px)', marginTop: 8 }}>
          <svg viewBox="0 0 800 460" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            {/* Edges */}
            <path d="M 200 100 Q 280 60 360 110" stroke="#1d1a14" strokeWidth="2" fill="none" strokeDasharray="3 5" />
            <path d="M 200 130 Q 240 230 350 240" stroke="#1d1a14" strokeWidth="2" fill="none" strokeDasharray="3 5" />
            <path d="M 360 140 Q 420 200 450 240" stroke="#d94f2a" strokeWidth="3" fill="none" />
            <path d="M 470 250 Q 600 270 650 220" stroke="#1d1a14" strokeWidth="2" fill="none" strokeDasharray="3 5" />
            <path d="M 470 280 Q 500 360 600 360" stroke="#1d1a14" strokeWidth="2" fill="none" strokeDasharray="3 5" />
            <path d="M 360 160 Q 360 280 200 380" stroke="#1d1a14" strokeWidth="2" fill="none" strokeDasharray="3 5" />

            {/* Arrows */}
            <text x="290" y="80"  fontFamily="Caveat" fontSize="14" fill="#6b6357">leads to</text>
            <text x="240" y="190" fontFamily="Caveat" fontSize="14" fill="#6b6357">connects to</text>
            <text x="400" y="200" fontFamily="Caveat" fontSize="14" fill="#d94f2a">★ today</text>
            <text x="560" y="245" fontFamily="Caveat" fontSize="14" fill="#6b6357">unlocks</text>
          </svg>

          {/* Nodes (positioned absolutely over the SVG) */}
          {[
            { x: 70,  y: 70,  title: 'Linear graphs',     sub: 'from Alg 1',  done: true,  size: 'sm' },
            { x: 290, y: 80,  title: 'Quadratic graphs',  sub: 'parabolas, vertex form', done: true, size: 'md' },
            { x: 290, y: 220, title: 'Absolute Value',    sub: 'the V', done: true, size: 'md' },
            { x: 410, y: 240, title: 'Negative Exponents',sub: 'where we are', current: true, size: 'lg' },
            { x: 580, y: 200, title: 'Diff. of Squares',  sub: 'a² − b²', size: 'md' },
            { x: 580, y: 330, title: 'Diff. of Cubes',    sub: 'a³ − b³', size: 'md' },
            { x: 70,  y: 360, title: 'Function transforms', sub: 'shift / flip / stretch', size: 'sm', dashed: true },
          ].map((n, i) => (
            <div key={i} className={`${n.current ? 'sk-box-thick rot-r' : n.dashed ? 'sk-box-dashed' : 'sk-box'}`} style={{
              position: 'absolute',
              left: `${(n.x / 800) * 100}%`,
              top:  `${(n.y / 460) * 100}%`,
              transform: `translate(-50%, -50%) ${n.current ? 'rotate(1.5deg)' : ''}`,
              padding: n.size === 'lg' ? '8px 14px' : n.size === 'md' ? '6px 10px' : '4px 8px',
              background: n.current ? 'var(--highlight)' : n.dashed ? 'transparent' : 'var(--paper)',
              minWidth: n.size === 'lg' ? 150 : 120,
            }}>
              <div className="f-display" style={{ fontSize: n.size === 'lg' ? 19 : n.size === 'md' ? 16 : 14, lineHeight: 1 }}>{n.title}</div>
              <div className="f-hand" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>{n.sub}</div>
              {n.current && <div className="f-type" style={{ fontSize: 9, marginTop: 2 }}>→ open tool</div>}
            </div>
          ))}

          {/* Legend */}
          <div className="sk-box-dashed" style={{ position: 'absolute', bottom: 8, right: 8, padding: 8 }}>
            <div className="f-marker" style={{ fontSize: 11 }}>LEGEND</div>
            <div className="f-hand" style={{ fontSize: 11 }}>━━ direct prerequisite</div>
            <div className="f-hand" style={{ fontSize: 11 }}>┄┄ related idea</div>
          </div>
        </div>
      </div>
    </WFBrowser>
  );
}

Object.assign(window, { UnitStack, UnitGrid, UnitSketchnote });
