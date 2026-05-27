// Individual tool page wireframes

// ─────────────────────────────────────────────────────────────
// A. SPLIT — widget left, prompts + controls right
// ─────────────────────────────────────────────────────────────
function ToolSplit() {
  return (
    <WFBrowser url="algebra2playgrounds.school/u2/abs-value-grapher">
      <div className="paper" style={{ height: '100%', display: 'flex' }}>
        {/* Left: widget */}
        <div style={{ flex: 1, padding: 18, display: 'flex', flexDirection: 'column' }}>
          <div className="f-type" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>← U2 · Graphs</div>
          <div className="f-display" style={{ fontSize: 36, lineHeight: 1, marginTop: 2 }}>Absolute Value Grapher</div>
          <div className="f-hand" style={{ fontSize: 14, color: 'var(--ink-soft)' }}>
            Drag the V. The equation changes with you.
          </div>

          {/* Widget area */}
          <div className="sk-box-thick" style={{ flex: 1, marginTop: 12, padding: 12, position: 'relative' }}>
            <PhImg label="GRAPH (live, interactive)" style={{ height: '100%' }} />
            {/* Imaginary equation badge */}
            <div className="sk-box" style={{
              position: 'absolute', top: 18, left: 18, padding: '4px 10px', background: 'var(--paper)',
            }}>
              <span className="f-mono" style={{ fontSize: 14 }}>y = a · |x − h| + k</span>
            </div>
          </div>

          {/* Inline controls */}
          <div className="row gap-12" style={{ marginTop: 10, alignItems: 'center' }}>
            <span className="f-marker" style={{ fontSize: 12 }}>SLIDERS:</span>
            {['a', 'h', 'k'].map(k => (
              <div key={k} className="row gap-4" style={{ alignItems: 'center', flex: 1 }}>
                <span className="f-mono" style={{ fontSize: 13 }}>{k}</span>
                <div style={{ flex: 1, height: 4, background: 'var(--ink)', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '40%', top: -6, width: 14, height: 14, borderRadius: '50%', background: 'var(--accent)', border: '2px solid var(--ink)' }} />
                </div>
                <span className="f-mono" style={{ fontSize: 12, width: 28 }}>0.5</span>
              </div>
            ))}
            <SkBtn>reset</SkBtn>
          </div>
        </div>

        {/* Right: prompts + meta */}
        <div style={{ flex: '0 0 280px', borderLeft: '2px solid var(--ink)', padding: 16, background: 'var(--paper-2)', overflow: 'hidden' }}>
          <div className="sk-box-dashed" style={{ padding: 8, marginBottom: 10 }}>
            <div className="f-marker" style={{ fontSize: 11 }}>HOW TO USE</div>
            <ol className="f-hand" style={{ fontSize: 13, paddingLeft: 16, margin: '4px 0', lineHeight: 1.3 }}>
              <li>Drag the V around.</li>
              <li>Watch the equation.</li>
              <li>Try to make the V upside-down.</li>
            </ol>
          </div>

          <div className="f-marker" style={{ fontSize: 12 }}>👀 TRY THIS</div>
          <div className="col gap-6" style={{ marginTop: 6 }}>
            {[
              'Move the V two units LEFT. What changed in the equation?',
              'Make a = −1. What happened?',
              'Can you get the V to open sideways? Why or why not?',
            ].map((q, i) => (
              <div key={i} className="sk-box" style={{ padding: 8 }}>
                <span className="f-display" style={{ fontSize: 14, color: 'var(--accent)' }}>Q{i + 1}.</span>{' '}
                <span className="f-hand" style={{ fontSize: 13 }}>{q}</span>
              </div>
            ))}
          </div>

          <div className="sk-box rot-l" style={{ padding: 8, marginTop: 12, background: 'var(--highlight)' }}>
            <div className="f-marker" style={{ fontSize: 11 }}>💬 SHARE WITH MR. K</div>
            <div className="f-hand" style={{ fontSize: 12 }}>Screenshot anything weird. We'll talk about it tomorrow.</div>
          </div>

          <div style={{ marginTop: 14, borderTop: '1px dashed var(--ink-soft)', paddingTop: 8 }}>
            <div className="f-type" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>related →</div>
            <div className="col gap-3 f-hand" style={{ fontSize: 13, marginTop: 4 }}>
              <span>→ Quadratic Slider Studio</span>
              <span>→ Function Transforms</span>
            </div>
          </div>
        </div>
      </div>
    </WFBrowser>
  );
}

// ─────────────────────────────────────────────────────────────
// B. FULL-BLEED — widget takes everything, prompts overlay
// ─────────────────────────────────────────────────────────────
function ToolFullBleed() {
  return (
    <WFBrowser url="algebra2playgrounds.school/u2/abs-value-grapher">
      <div className="paper" style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
        {/* Full-bleed widget */}
        <PhImg label="FULL-SCREEN GRAPH (drag, zoom, anything)" style={{ position: 'absolute', inset: 0, border: 'none', borderRadius: 0 }} />

        {/* Floating top-left: title + breadcrumb */}
        <div className="sk-box-thick" style={{ position: 'absolute', top: 14, left: 14, padding: 10, background: 'var(--paper)', maxWidth: 260 }}>
          <div className="f-type" style={{ fontSize: 10, color: 'var(--ink-soft)' }}>← U2 · Graphs</div>
          <div className="f-display" style={{ fontSize: 24, lineHeight: 1 }}>Absolute Value Grapher</div>
          <div className="f-hand" style={{ fontSize: 12, color: 'var(--ink-soft)' }}>Drag the V. The equation follows.</div>
        </div>

        {/* Floating top-right: equation */}
        <div className="sk-box" style={{ position: 'absolute', top: 14, right: 14, padding: '8px 14px', background: 'var(--ink)', color: 'var(--paper)' }}>
          <span className="f-mono" style={{ fontSize: 18 }}>y = 1.0|x − 2| + 3</span>
        </div>

        {/* Floating bottom: controls dock */}
        <div className="sk-box-thick" style={{
          position: 'absolute', left: 14, right: 14, bottom: 14,
          padding: '10px 14px', background: 'var(--paper)',
          display: 'flex', alignItems: 'center', gap: 18,
        }}>
          <span className="f-marker" style={{ fontSize: 13 }}>CONTROLS</span>
          {['a', 'h', 'k'].map(k => (
            <div key={k} className="row gap-6" style={{ alignItems: 'center', flex: 1 }}>
              <span className="f-mono" style={{ fontSize: 13 }}>{k}</span>
              <div style={{ flex: 1, height: 4, background: 'var(--ink)', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '60%', top: -6, width: 14, height: 14, borderRadius: '50%', background: 'var(--accent)', border: '2px solid var(--ink)' }} />
              </div>
            </div>
          ))}
          <SkBtn>↺ reset</SkBtn>
          <SkBtn>📷</SkBtn>
          <SkBtn accent>prompts ▾</SkBtn>
        </div>

        {/* Floating right tab: collapsed prompts */}
        <div className="sk-box rot-r" style={{
          position: 'absolute', right: 14, top: 110, padding: 10, width: 180,
          background: 'var(--highlight)',
        }}>
          <div className="f-marker" style={{ fontSize: 11 }}>👀 TRY THIS (1/3)</div>
          <div className="f-hand" style={{ fontSize: 13, marginTop: 4 }}>Move the V two units LEFT. What changed in the equation?</div>
          <div className="row gap-4" style={{ marginTop: 8 }}>
            <SkBtn>← prev</SkBtn>
            <SkBtn>next →</SkBtn>
          </div>
        </div>
      </div>
    </WFBrowser>
  );
}

// ─────────────────────────────────────────────────────────────
// C. NOTEBOOK — lesson context above, widget middle, reflection below
// ─────────────────────────────────────────────────────────────
function ToolNotebook() {
  return (
    <WFBrowser url="algebra2playgrounds.school/u2/abs-value-grapher">
      <div className="paper-grid" style={{ height: '100%', padding: '14px 28px', overflow: 'hidden' }}>
        {/* Header strip */}
        <div className="row between" style={{ marginBottom: 6 }}>
          <div className="f-type" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>
            ← U2 · D3 — Absolute Value Graphs
          </div>
          <div className="row gap-6 f-hand" style={{ fontSize: 12 }}>
            <span>👈 prev tool</span>
            <span>next tool 👉</span>
          </div>
        </div>

        {/* Top: warm-up */}
        <div className="row gap-12" style={{ marginBottom: 10 }}>
          <div className="sk-box rot-l" style={{ flex: 1, padding: 10 }}>
            <div className="f-marker" style={{ fontSize: 11, color: 'var(--accent)' }}>① WARM-UP</div>
            <div className="f-hand" style={{ fontSize: 14 }}>What's |−7|? What's |0|? What's |x − 3| when x = 1?</div>
          </div>
          <div className="sk-box-dashed" style={{ flex: '0 0 240px', padding: 10 }}>
            <div className="f-marker" style={{ fontSize: 11 }}>WHAT THIS TOOL IS FOR</div>
            <div className="f-hand" style={{ fontSize: 13 }}>To see WHY |x| looks like a V — and what each part of y = a|x−h|+k does.</div>
          </div>
        </div>

        {/* Center: widget */}
        <div className="sk-box-thick" style={{ height: 280, padding: 8, position: 'relative' }}>
          <div className="row between" style={{ marginBottom: 4 }}>
            <span className="f-display" style={{ fontSize: 22 }}>Absolute Value Grapher</span>
            <div className="row gap-6">
              <SkBtn>fullscreen ⤢</SkBtn>
              <SkBtn>↺</SkBtn>
            </div>
          </div>
          <PhImg label="interactive graph + sliders" style={{ height: 'calc(100% - 32px)' }} />
        </div>

        {/* Bottom: reflection + next */}
        <div className="row gap-12" style={{ marginTop: 10 }}>
          <div className="sk-box" style={{ flex: 1, padding: 10 }}>
            <div className="f-marker" style={{ fontSize: 11 }}>② NOTICE & WONDER</div>
            <div className="col gap-2 f-hand" style={{ fontSize: 13 }}>
              <span>• I notice .................................</span>
              <span>• I wonder ...................................</span>
            </div>
          </div>
          <div className="sk-box rot-r" style={{ flex: 1, padding: 10, background: 'var(--highlight)' }}>
            <div className="f-marker" style={{ fontSize: 11 }}>③ TRY THIS</div>
            <div className="f-hand" style={{ fontSize: 13 }}>Can you make the V touch the bottom-right corner? Send Mr. K the equation that does it.</div>
          </div>
          <div className="sk-box-dashed" style={{ flex: '0 0 180px', padding: 10 }}>
            <div className="f-marker" style={{ fontSize: 11 }}>UP NEXT (D4)</div>
            <div className="f-hand" style={{ fontSize: 13 }}>→ Negative Exponent Flipper</div>
          </div>
        </div>
      </div>
    </WFBrowser>
  );
}

Object.assign(window, { ToolSplit, ToolFullBleed, ToolNotebook });
