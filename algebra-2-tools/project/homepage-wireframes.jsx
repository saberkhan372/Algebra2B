// 6 distinct homepage wireframe directions for Algebra 2 Playgrounds.

// ─────────────────────────────────────────────────────────────
// 1. NOTEBOOK — looks like a student's math notebook
// ─────────────────────────────────────────────────────────────
function HomeNotebook() {
  return (
    <WFBrowser url="algebra2playgrounds.school">
      <div className="paper-grid" style={{ height: '100%', padding: '20px 28px', position: 'relative' }}>
        {/* Margin redline */}
        <div style={{
          position: 'absolute', left: 64, top: 0, bottom: 0,
          width: 1, background: 'var(--redline)', opacity: 0.45,
        }} />
        {/* Spiral binding */}
        <div style={{ position: 'absolute', left: 8, top: 0, bottom: 0, width: 24,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-around', padding: '20px 0' }}>
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} style={{ width: 14, height: 14, borderRadius: '50%',
              border: '2px solid var(--ink)', background: 'var(--paper-2)' }} />
          ))}
        </div>

        <div style={{ marginLeft: 70 }}>
          {/* Header */}
          <div className="between" style={{ marginBottom: 10 }}>
            <div>
              <div className="f-display" style={{ fontSize: 46, lineHeight: 1 }}>
                Algebra 2 <span className="underline-wavy">Playgrounds</span>
              </div>
              <div className="f-hand" style={{ fontSize: 16, color: 'var(--ink-soft)' }}>
                Mr. K's tool shed · Period 3 & 4
              </div>
            </div>
            <div className="row gap-8">
              <span className="sk-pill" style={{ fontSize: 14 }}>🔎 search...</span>
              <span className="sk-pill" style={{ fontSize: 14 }}>about</span>
            </div>
          </div>

          {/* "What we're on" callout */}
          <div className="sk-box rot-l" style={{ padding: '8px 14px', marginBottom: 16, background: 'var(--highlight)', display: 'inline-block' }}>
            <span className="f-marker" style={{ fontSize: 14 }}>👉 RIGHT NOW we're on:</span>
            <span className="f-display" style={{ fontSize: 22, marginLeft: 8 }}>U2 · Graphs & Exponents</span>
          </div>

          {/* Tool of the week + intro */}
          <div className="row gap-16" style={{ marginBottom: 20 }}>
            <div className="sk-box-thick rot-r" style={{ flex: 1.3, padding: 14, position: 'relative' }}>
              <span className="tape" />
              <div className="f-marker" style={{ fontSize: 13, color: 'var(--accent)' }}>★ TOOL OF THE WEEK</div>
              <div className="f-display" style={{ fontSize: 28, lineHeight: 1.1, marginTop: 2 }}>Absolute Value Grapher</div>
              <PhImg label="interactive preview" style={{ height: 110, marginTop: 8 }} />
              <PhLines count={2} last="60%" gap={6} />
              <div style={{ marginTop: 8 }}><SkBtn accent big>→ open it</SkBtn></div>
            </div>
            <div className="sk-box rot-l" style={{ flex: 1, padding: 12, position: 'relative' }}>
              <span className="pin" style={{ top: -6, right: 20 }} />
              <div className="f-marker" style={{ fontSize: 13 }}>HOW TO USE THIS SITE</div>
              <ol className="f-hand" style={{ fontSize: 14, paddingLeft: 18, lineHeight: 1.45, margin: '6px 0' }}>
                <li>Pick a unit OR a topic.</li>
                <li>Open a tool — they're <span className="highlight">tiny</span>.</li>
                <li>Mess with it. Try to break it.</li>
                <li>Show me what you found.</li>
              </ol>
              <div className="f-type" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>
                ~ no logins, nothing saved ~
              </div>
            </div>
          </div>

          {/* Tool grid — "today's pile" */}
          <div className="f-display" style={{ fontSize: 22, marginBottom: 4 }}>The pile of tools so far <span style={{ fontSize: 14, color: 'var(--ink-soft)' }}>(12)</span></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            {TOOLS.slice(0, 8).map((t, i) => (
              <div key={t.id} className={`sk-box ${i % 2 ? 'rot-l' : 'rot-r'}`} style={{ padding: 8, position: 'relative' }}>
                <PhImg label={t.kind} style={{ height: 50 }} mini />
                <div className="f-hand" style={{ fontSize: 13, marginTop: 4, lineHeight: 1.1 }}>{t.name}</div>
                <div className="row gap-4" style={{ marginTop: 4 }}>
                  <span className="sk-tag f-type" style={{ fontSize: 10 }}>{t.unit}</span>
                  <span className="sk-tag f-type" style={{ fontSize: 10 }}>{t.topic}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WFBrowser>
  );
}

// ─────────────────────────────────────────────────────────────
// 2. PERIODIC TABLE — every tool is an "element" cell
// ─────────────────────────────────────────────────────────────
function HomePeriodic() {
  const kindColor = {
    visualizer: '#cfe3f1',
    practice:   '#f1e1cf',
    game:       '#e8cfe9',
    reference:  '#dde8cf',
  };
  const cells = [
    [TOOLS[10], TOOLS[3], null, null, null, null, null, TOOLS[0]],
    [TOOLS[1],  TOOLS[2], null, null, null, null, TOOLS[8], TOOLS[11]],
    [TOOLS[5],  TOOLS[4], TOOLS[6], TOOLS[7], null, null, TOOLS[9], null],
  ];
  return (
    <WFBrowser url="algebra2playgrounds.school">
      <div className="paper" style={{ height: '100%', padding: '18px 28px', position: 'relative' }}>
        {/* Header */}
        <div className="between" style={{ marginBottom: 6 }}>
          <div>
            <div className="f-display" style={{ fontSize: 42, lineHeight: 1 }}>The Periodic Table of <span style={{ color: 'var(--accent)' }}>A2 Playgrounds</span></div>
            <div className="f-hand" style={{ fontSize: 15, color: 'var(--ink-soft)' }}>12 tools, organized by what they help you do.</div>
          </div>
          <div className="row gap-8">
            <span className="sk-pill" style={{ fontSize: 13 }}>🔎 find a tool</span>
            <span className="sk-pill" style={{ fontSize: 13 }}>units ▾</span>
            <span className="sk-pill" style={{ fontSize: 13 }}>about</span>
          </div>
        </div>

        {/* Legend */}
        <div className="row gap-8" style={{ marginBottom: 10 }}>
          {Object.entries(kindColor).map(([k, c]) => (
            <span key={k} className="sk-tag f-hand" style={{ background: c, fontSize: 12 }}>■ {k}</span>
          ))}
          <span className="sk-tag f-hand" style={{ fontSize: 12 }}>difficulty: ● ●● ●●●</span>
        </div>

        {/* Big featured cell */}
        <div className="row gap-12" style={{ alignItems: 'stretch' }}>
          <div className="sk-box-thick" style={{
            flex: '0 0 220px', padding: 14, background: 'var(--accent)', color: 'var(--paper)',
            position: 'relative',
          }}>
            <div className="f-marker" style={{ fontSize: 12 }}>★ TOOL OF WEEK</div>
            <div className="f-display" style={{ fontSize: 82, lineHeight: 0.9, marginTop: 4 }}>Av</div>
            <div className="f-hand" style={{ fontSize: 15, marginTop: 4, lineHeight: 1.1 }}>Absolute Value Grapher</div>
            <PhImg label="preview" style={{ height: 70, marginTop: 8, background: 'rgba(255,255,255,0.15)' }} />
            <div className="f-hand" style={{ fontSize: 12, marginTop: 6 }}>Unit 2 · visualizer · ●</div>
          </div>

          {/* Periodic grid */}
          <div className="grow" style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gridAutoRows: '90px', gap: 6 }}>
            {cells.flat().map((t, i) => t ? (
              <div key={t.id} className="sk-box" style={{
                padding: 6, background: kindColor[t.kind], position: 'relative',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              }}>
                <div className="row between f-type" style={{ fontSize: 9 }}>
                  <span>{t.unit}</span>
                  <span>{'●'.repeat(t.diff)}</span>
                </div>
                <div className="f-display center" style={{ fontSize: 34, lineHeight: 1 }}>{t.code}</div>
                <div className="f-hand" style={{ fontSize: 9, lineHeight: 1, textAlign: 'center' }}>{t.name.split(' ').slice(0, 2).join(' ')}</div>
              </div>
            ) : <div key={'e' + i} />)}
          </div>
        </div>

        {/* Bottom: pacing strip + intro */}
        <div className="row gap-12" style={{ marginTop: 14 }}>
          <div className="sk-box-dashed grow" style={{ padding: 10 }}>
            <div className="f-marker" style={{ fontSize: 13 }}>NOW PLAYING → <span style={{ color: 'var(--accent)' }}>Unit 2 · Graphs & Exponents</span></div>
            <div className="row gap-4" style={{ marginTop: 6 }}>
              {UNITS.map(u => (
                <span key={u.id} className="sk-tag f-hand" style={{
                  background: u.current ? 'var(--highlight)' : 'var(--paper-2)',
                  fontSize: 12,
                }}>{u.id} · {u.name}</span>
              ))}
            </div>
          </div>
          <div className="sk-box" style={{ padding: 10, flex: '0 0 240px' }}>
            <div className="f-marker" style={{ fontSize: 12 }}>HOW IT WORKS</div>
            <div className="f-hand" style={{ fontSize: 13, lineHeight: 1.3 }}>
              click a cell. play. nothing to install. nothing tracked.
            </div>
          </div>
        </div>
      </div>
    </WFBrowser>
  );
}

// ─────────────────────────────────────────────────────────────
// 3. ZINE — bold magazine cover with hero feature
// ─────────────────────────────────────────────────────────────
function HomeZine() {
  return (
    <WFBrowser url="algebra2playgrounds.school">
      <div className="paper" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Masthead */}
        <div style={{ borderBottom: '3px solid var(--ink)', padding: '8px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="f-marker" style={{ fontSize: 16, letterSpacing: 2 }}>ISSUE №08 · OCT 2025</div>
          <div className="row gap-12 f-type" style={{ fontSize: 12 }}>
            <span>UNITS</span><span>TOPICS</span><span>NEWEST</span><span>SEARCH 🔎</span><span>ABOUT</span>
          </div>
        </div>

        {/* Huge title */}
        <div style={{ padding: '8px 24px 4px', borderBottom: '2px solid var(--ink)' }}>
          <div className="f-display" style={{ fontSize: 96, lineHeight: 0.85, letterSpacing: -1 }}>
            ALGEBRA 2
          </div>
          <div className="f-display" style={{ fontSize: 96, lineHeight: 0.85, letterSpacing: -1, marginTop: -8, color: 'var(--accent)' }}>
            PLAYGROUNDS
          </div>
          <div className="row between" style={{ marginTop: 4 }}>
            <div className="f-hand" style={{ fontSize: 14, color: 'var(--ink-soft)' }}>tiny tools to mess with hard ideas · Mr. K's class</div>
            <div className="f-type" style={{ fontSize: 12 }}>12 tools inside →</div>
          </div>
        </div>

        {/* Main body: 3 columns */}
        <div className="row" style={{ flex: 1, minHeight: 0 }}>
          {/* Left column — pacing + intro */}
          <div style={{ flex: '0 0 200px', borderRight: '2px solid var(--ink)', padding: 14 }}>
            <div className="f-marker" style={{ fontSize: 13 }}>WE'RE ON →</div>
            <div className="f-display" style={{ fontSize: 26, lineHeight: 1, color: 'var(--accent)' }}>U2</div>
            <div className="f-hand" style={{ fontSize: 14, lineHeight: 1.2 }}>Graphs & Exponents</div>
            <div className="f-type" style={{ fontSize: 11, marginTop: 4, color: 'var(--ink-soft)' }}>Sept 29 – Oct 17</div>

            <div style={{ marginTop: 16, borderTop: '1px dashed var(--ink)', paddingTop: 10 }}>
              <div className="f-marker" style={{ fontSize: 12 }}>HOW THIS WORKS</div>
              <div className="f-hand" style={{ fontSize: 13, lineHeight: 1.35, marginTop: 4 }}>
                Each tool is small. Most have <span className="highlight">sliders</span>. Push them. See what changes.
                Then come back and tell me what you noticed.
              </div>
            </div>

            <div style={{ marginTop: 14 }}>
              <div className="f-marker" style={{ fontSize: 12 }}>NEW THIS WEEK</div>
              <ul className="f-hand" style={{ fontSize: 13, paddingLeft: 16, margin: '4px 0', lineHeight: 1.3 }}>
                <li>Absolute Value Grapher</li>
                <li>Difference of Cubes</li>
                <li className="f-type" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>+ 2 fixes</li>
              </ul>
            </div>
          </div>

          {/* Center — HERO */}
          <div style={{ flex: 1, padding: 16, borderRight: '2px solid var(--ink)', position: 'relative' }}>
            <div className="f-marker" style={{ fontSize: 14, color: 'var(--accent)' }}>★ FEATURE</div>
            <div className="f-display" style={{ fontSize: 44, lineHeight: 1, marginTop: 2 }}>The Absolute Value Grapher.</div>
            <div className="f-hand" style={{ fontSize: 15, color: 'var(--ink-soft)', marginTop: 4 }}>Drag the V. Watch the equation fight back.</div>
            <PhImg label="hero widget preview" style={{ height: 200, marginTop: 10 }} />
            <div className="row gap-8" style={{ marginTop: 10, alignItems: 'center' }}>
              <SkBtn accent big>→ play it</SkBtn>
              <span className="f-hand" style={{ fontSize: 13, color: 'var(--ink-soft)' }}>or scroll for 11 more →</span>
            </div>
          </div>

          {/* Right — list of tools, magazine TOC style */}
          <div style={{ flex: '0 0 220px', padding: 14 }}>
            <div className="f-marker" style={{ fontSize: 13 }}>INSIDE THIS ISSUE</div>
            <div className="col gap-6" style={{ marginTop: 6 }}>
              {TOOLS.slice(0, 9).map((t, i) => (
                <div key={t.id} className="row between" style={{ borderBottom: '1px dotted var(--ink-soft)', paddingBottom: 3 }}>
                  <span className="f-hand" style={{ fontSize: 13 }}>{t.name}</span>
                  <span className="f-type" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>p.{(i + 1) * 3}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </WFBrowser>
  );
}

// ─────────────────────────────────────────────────────────────
// 4. ARCADE — tools as cartridges in a game arcade
// ─────────────────────────────────────────────────────────────
function HomeArcade() {
  return (
    <WFBrowser url="algebra2playgrounds.school">
      <div className="paper-dots" style={{ height: '100%', padding: '16px 24px' }}>
        {/* Top: marquee */}
        <div className="sk-box-thick" style={{
          padding: 12, background: 'var(--ink)', color: 'var(--paper)',
          textAlign: 'center', position: 'relative',
        }}>
          <div className="f-marker" style={{ fontSize: 12, letterSpacing: 3, color: 'var(--highlight)' }}>★ INSERT BRAIN TO CONTINUE ★</div>
          <div className="f-display" style={{ fontSize: 44, lineHeight: 1, marginTop: -2 }}>ALGEBRA 2 PLAYGROUNDS</div>
          <div className="f-type" style={{ fontSize: 11, color: 'var(--ghost)' }}>~ 12 tools loaded · est. 2025 · Mr. K ~</div>
        </div>

        {/* Nav + search */}
        <div className="row between" style={{ marginTop: 10 }}>
          <div className="row gap-6">
            {['ALL', 'GAMES', 'VISUALIZERS', 'PRACTICE', 'REFERENCE'].map((k, i) => (
              <span key={k} className="sk-pill f-type" style={{
                fontSize: 11, background: i === 0 ? 'var(--accent)' : 'var(--paper)',
                color: i === 0 ? 'var(--paper)' : 'var(--ink)',
              }}>{k}</span>
            ))}
          </div>
          <span className="sk-pill f-type" style={{ fontSize: 11 }}>&gt; search_</span>
        </div>

        {/* Featured cabinet */}
        <div className="row gap-12" style={{ marginTop: 12 }}>
          <div className="sk-box-thick" style={{
            flex: '0 0 280px', padding: 14, background: 'var(--paper-2)',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
          }}>
            <div className="f-marker" style={{ fontSize: 12, color: 'var(--accent)' }}>▶ NOW PLAYING</div>
            <div className="f-display" style={{ fontSize: 26, textAlign: 'center', lineHeight: 1, marginTop: 2 }}>
              Absolute Value Grapher
            </div>
            <PhImg label="screen" style={{ height: 110, width: '100%', marginTop: 8 }} />
            <div className="row gap-4 f-type" style={{ fontSize: 10, marginTop: 6 }}>
              <span className="sk-tag">UNIT 2</span>
              <span className="sk-tag">GRAPHS</span>
              <span className="sk-tag">EASY</span>
            </div>
            {/* Joystick + buttons */}
            <div className="row gap-12" style={{ marginTop: 10, alignItems: 'center' }}>
              <div style={{ width: 28, height: 28, border: '3px solid var(--ink)', borderRadius: '50%', background: 'var(--ink-2)', position: 'relative' }}>
                <span style={{ position: 'absolute', inset: 6, background: 'var(--accent)', borderRadius: '50%' }} />
              </div>
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--redline)', border: '2px solid var(--ink)' }} />
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--highlight)', border: '2px solid var(--ink)' }} />
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--accent-2)', border: '2px solid var(--ink)' }} />
            </div>
          </div>

          {/* Grid of cartridges */}
          <div className="grow" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            {TOOLS.slice(0, 8).map((t, i) => (
              <div key={t.id} className="sk-box" style={{
                padding: 8, display: 'flex', flexDirection: 'column', gap: 4,
                background: i % 2 ? 'var(--paper)' : 'var(--paper-2)',
                position: 'relative',
              }}>
                {/* Cartridge top tab */}
                <div style={{
                  position: 'absolute', top: -10, left: 20, right: 20, height: 10,
                  borderTop: '2px solid var(--ink)', borderLeft: '2px solid var(--ink)',
                  borderRight: '2px solid var(--ink)', borderRadius: '4px 4px 0 0',
                  background: 'var(--paper-2)',
                }} />
                <div className="row between f-type" style={{ fontSize: 10 }}>
                  <span>#{(i + 1).toString().padStart(2, '0')}</span>
                  <span>{'●'.repeat(t.diff)}</span>
                </div>
                <PhImg label={t.kind.toUpperCase()} style={{ height: 50 }} mini />
                <div className="f-display" style={{ fontSize: 16, lineHeight: 1 }}>{t.name}</div>
                <div className="f-type" style={{ fontSize: 10, color: 'var(--ink-soft)' }}>{t.unit} / {t.topic}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom pacing ticker */}
        <div className="sk-box" style={{
          marginTop: 12, padding: '6px 14px', background: 'var(--ink)', color: 'var(--paper)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span className="f-marker" style={{ fontSize: 12, color: 'var(--highlight)' }}>● HIGH SCORE</span>
          <span className="f-type" style={{ fontSize: 11 }}>
            CURRENT LEVEL: U2 — GRAPHS & EXPONENTS &nbsp;·&nbsp; NEXT: U3 RATIONALS &nbsp;·&nbsp; 12/24 LESSONS CLEARED
          </span>
        </div>
      </div>
    </WFBrowser>
  );
}

// ─────────────────────────────────────────────────────────────
// 5. FEED — chronological scroll, newest huge at top
// ─────────────────────────────────────────────────────────────
function HomeFeed() {
  return (
    <WFBrowser url="algebra2playgrounds.school">
      <div className="paper-lined" style={{ height: '100%', display: 'flex' }}>
        {/* Left rail */}
        <div style={{ flex: '0 0 180px', borderRight: '2px solid var(--ink)', padding: 14, background: 'var(--paper-2)' }}>
          <div className="f-display" style={{ fontSize: 28, lineHeight: 0.95 }}>A2<br />Playgrounds</div>
          <div className="f-hand" style={{ fontSize: 12, color: 'var(--ink-soft)', marginTop: 4 }}>Mr. K's tool feed</div>

          <div style={{ marginTop: 18 }}>
            <div className="f-marker" style={{ fontSize: 11 }}>FILTER</div>
            <div className="col gap-4" style={{ marginTop: 4 }}>
              {['All tools', 'By unit', 'By topic', 'By type', 'Warm-ups', 'Challenges'].map((k, i) => (
                <span key={k} className="f-hand" style={{ fontSize: 13, paddingLeft: 8,
                  borderLeft: i === 0 ? '3px solid var(--accent)' : '3px solid transparent' }}>
                  {k}
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 18 }}>
            <div className="f-marker" style={{ fontSize: 11 }}>UNITS</div>
            <div className="col gap-3" style={{ marginTop: 4 }}>
              {UNITS.map(u => (
                <span key={u.id} className="f-hand" style={{ fontSize: 12 }}>
                  {u.current ? '▶ ' : '  '}<b>{u.id}</b> {u.name}
                </span>
              ))}
            </div>
          </div>

          <div className="sk-box-dashed" style={{ marginTop: 18, padding: 8, fontSize: 11 }}>
            <div className="f-marker" style={{ fontSize: 11 }}>HOW TO USE</div>
            <div className="f-hand">Scroll. Tap a tool. Mess with it. No login.</div>
          </div>
        </div>

        {/* Feed */}
        <div className="grow" style={{ padding: 18, overflow: 'hidden' }}>
          {/* Search */}
          <div className="sk-box between" style={{ padding: '6px 12px', marginBottom: 14 }}>
            <span className="f-type" style={{ fontSize: 13, color: 'var(--ink-soft)' }}>🔎  search 12 tools...</span>
            <span className="f-type" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>⌘K</span>
          </div>

          {/* Featured / newest */}
          <div className="sk-box-thick" style={{ padding: 14, marginBottom: 12, position: 'relative' }}>
            <div className="row gap-4" style={{ marginBottom: 4 }}>
              <span className="sk-tag f-type" style={{ fontSize: 10, background: 'var(--accent)', color: 'var(--paper)' }}>★ TOOL OF THE WEEK</span>
              <span className="sk-tag f-type" style={{ fontSize: 10 }}>NEW · today</span>
              <span className="sk-tag f-type" style={{ fontSize: 10 }}>U2 · visualizer</span>
            </div>
            <div className="f-display" style={{ fontSize: 32, lineHeight: 1 }}>Absolute Value Grapher</div>
            <div className="f-hand" style={{ fontSize: 14, color: 'var(--ink-soft)' }}>
              Drag the V around. The equation updates live.
            </div>
            <PhImg label="preview" style={{ height: 110, marginTop: 8 }} />
          </div>

          {/* Feed items */}
          {[
            { t: TOOLS[7], when: 'yesterday', note: 'Quick reference for those signs you keep flipping.' },
            { t: TOOLS[6], when: '3 days ago', note: 'A 30-second game. Beat your own time.' },
            { t: TOOLS[5], when: 'last week',  note: 'See why x⁻² is just 1/x², visually.' },
          ].map(({ t, when, note }) => (
            <div key={t.id} className="sk-box" style={{ padding: 10, marginBottom: 8, display: 'flex', gap: 12 }}>
              <PhImg label="" style={{ width: 80, height: 60, flex: '0 0 80px' }} mini />
              <div className="grow">
                <div className="row gap-4" style={{ marginBottom: 2 }}>
                  <span className="sk-tag f-type" style={{ fontSize: 10 }}>{t.unit}</span>
                  <span className="sk-tag f-type" style={{ fontSize: 10 }}>{t.kind}</span>
                  <span className="f-type" style={{ fontSize: 10, color: 'var(--ink-soft)' }}>· {when}</span>
                </div>
                <div className="f-display" style={{ fontSize: 20, lineHeight: 1 }}>{t.name}</div>
                <div className="f-hand" style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{note}</div>
              </div>
            </div>
          ))}
          <div className="f-hand center" style={{ fontSize: 12, color: 'var(--ink-soft)', marginTop: 6 }}>… 8 more tools below ↓</div>
        </div>
      </div>
    </WFBrowser>
  );
}

// ─────────────────────────────────────────────────────────────
// 6. MAP — units as regions on a hand-drawn map
// ─────────────────────────────────────────────────────────────
function HomeMap() {
  return (
    <WFBrowser url="algebra2playgrounds.school">
      <div className="paper" style={{ height: '100%', display: 'flex' }}>
        {/* Map area */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden', background: 'var(--paper-2)' }}>
          {/* compass + title */}
          <div style={{ position: 'absolute', top: 14, left: 18 }}>
            <div className="f-display" style={{ fontSize: 38, lineHeight: 0.9 }}>A2 Playgrounds</div>
            <div className="f-hand" style={{ fontSize: 14, color: 'var(--ink-soft)' }}>~ a map of the year ~</div>
          </div>
          <div style={{ position: 'absolute', top: 14, right: 18, textAlign: 'center' }}>
            <div className="f-marker" style={{ fontSize: 11 }}>N</div>
            <div style={{ width: 36, height: 36, border: '2px solid var(--ink)', borderRadius: '50%', position: 'relative', margin: '0 auto' }}>
              <div style={{ position: 'absolute', left: '50%', top: 2, bottom: '50%', width: 2, background: 'var(--redline)', transform: 'translateX(-50%)' }} />
              <div style={{ position: 'absolute', left: '50%', top: '50%', bottom: 2, width: 2, background: 'var(--ink)', transform: 'translateX(-50%)' }} />
            </div>
          </div>

          {/* Sketchy regions as SVG */}
          <svg viewBox="0 0 600 480" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            {/* sea texture */}
            <defs>
              <pattern id="wave" width="20" height="8" patternUnits="userSpaceOnUse">
                <path d="M0 4 Q 5 0 10 4 T 20 4" stroke="rgba(42,111,180,0.4)" fill="none" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="600" height="480" fill="url(#wave)" />
            {/* U1 island */}
            <path d="M70 90 Q 60 60 100 50 Q 160 35 220 60 Q 260 80 250 130 Q 240 170 180 175 Q 120 180 90 150 Z"
              fill="#efe2c5" stroke="#1d1a14" strokeWidth="2" />
            {/* U2 island (current — highlighted) */}
            <path d="M320 80 Q 310 50 360 50 Q 460 50 490 100 Q 510 140 470 170 Q 410 195 360 175 Q 310 155 320 100 Z"
              fill="#f5d34c" stroke="#1d1a14" strokeWidth="3" />
            {/* U3 island */}
            <path d="M80 270 Q 60 240 110 230 Q 200 220 260 260 Q 300 290 270 330 Q 230 365 160 355 Q 90 340 80 300 Z"
              fill="#efe2c5" stroke="#1d1a14" strokeWidth="2" />
            {/* U4 island */}
            <path d="M340 290 Q 330 250 400 245 Q 480 245 510 290 Q 530 330 480 360 Q 400 380 360 350 Q 330 320 340 290 Z"
              fill="#efe2c5" stroke="#1d1a14" strokeWidth="2" />
            {/* Dotted path connecting */}
            <path d="M170 130 Q 250 160 380 130 Q 420 180 320 280 Q 250 320 200 300 Q 350 320 410 320"
              stroke="#1d1a14" strokeWidth="2" fill="none" strokeDasharray="2 8" />
            {/* Tool pins */}
            {[
              { x: 120, y: 110, t: TOOLS[10] },
              { x: 180, y: 130, t: TOOLS[3] },
              { x: 220, y: 100, t: TOOLS[1] },
              { x: 380, y: 100, t: TOOLS[4], current: true },
              { x: 430, y: 130, t: TOOLS[5] },
              { x: 460, y: 95,  t: TOOLS[6] },
              { x: 130, y: 295, t: TOOLS[8] },
              { x: 200, y: 320, t: TOOLS[0] },
              { x: 240, y: 290, t: TOOLS[11] },
              { x: 400, y: 305, t: TOOLS[9] },
            ].map((p, i) => (
              <g key={p.t.id}>
                <circle cx={p.x} cy={p.y} r={p.current ? 8 : 6}
                  fill={p.current ? '#d94f2a' : '#1d1a14'}
                  stroke="#1d1a14" strokeWidth="1.5" />
                <text x={p.x + 10} y={p.y + 4} fontSize="11" fontFamily="Patrick Hand">{p.t.code}</text>
              </g>
            ))}

            {/* Region labels */}
            <text x="155" y="118" fontSize="20" fontFamily="Caveat" fontWeight="700">Unit 1</text>
            <text x="155" y="138" fontSize="11" fontFamily="Patrick Hand" opacity="0.7">Systems & Quadratics</text>

            <text x="385" y="115" fontSize="22" fontFamily="Caveat" fontWeight="700" fill="#d94f2a">Unit 2 ✦</text>
            <text x="385" y="135" fontSize="11" fontFamily="Patrick Hand">Graphs & Exponents</text>

            <text x="155" y="298" fontSize="20" fontFamily="Caveat" fontWeight="700">Unit 3</text>
            <text x="155" y="318" fontSize="11" fontFamily="Patrick Hand" opacity="0.7">Rationals & Imaginary</text>

            <text x="385" y="305" fontSize="20" fontFamily="Caveat" fontWeight="700">Unit 4</text>
            <text x="385" y="325" fontSize="11" fontFamily="Patrick Hand" opacity="0.7">Rational Exponents</text>
          </svg>

          {/* You are here */}
          <div className="sk-box rot-r" style={{
            position: 'absolute', left: 360, top: 175, padding: '4px 10px',
            background: 'var(--accent)', color: 'var(--paper)',
          }}>
            <span className="f-marker" style={{ fontSize: 12 }}>★ YOU ARE HERE</span>
          </div>
        </div>

        {/* Right rail */}
        <div style={{ flex: '0 0 220px', borderLeft: '2px solid var(--ink)', padding: 14, background: 'var(--paper)' }}>
          <div className="sk-box between" style={{ padding: '4px 10px', marginBottom: 12 }}>
            <span className="f-type" style={{ fontSize: 12, color: 'var(--ink-soft)' }}>🔎 search the map...</span>
          </div>

          <div className="sk-box-thick" style={{ padding: 10, marginBottom: 10 }}>
            <div className="f-marker" style={{ fontSize: 12, color: 'var(--accent)' }}>★ TOOL OF WEEK</div>
            <div className="f-display" style={{ fontSize: 22, lineHeight: 1 }}>Absolute Value Grapher</div>
            <PhImg label="preview" style={{ height: 70, marginTop: 6 }} mini />
            <div className="f-hand" style={{ fontSize: 12, marginTop: 4 }}>📍 Unit 2 island</div>
          </div>

          <div className="sk-box-dashed" style={{ padding: 10, marginBottom: 10 }}>
            <div className="f-marker" style={{ fontSize: 12 }}>HOW THE MAP WORKS</div>
            <div className="f-hand" style={{ fontSize: 13, lineHeight: 1.3 }}>
              Each island = a unit. Each pin = a tool. Yellow island is where we are now.
            </div>
          </div>

          <div className="f-marker" style={{ fontSize: 12 }}>LEGEND</div>
          <div className="col gap-3 f-hand" style={{ fontSize: 12, marginTop: 4 }}>
            <span>● visualizer</span>
            <span>★ game</span>
            <span>▣ practice</span>
            <span>📖 reference</span>
          </div>
        </div>
      </div>
    </WFBrowser>
  );
}

Object.assign(window, { HomeNotebook, HomePeriodic, HomeZine, HomeArcade, HomeFeed, HomeMap });
