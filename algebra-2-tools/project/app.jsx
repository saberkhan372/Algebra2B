// Main app — lays out all wireframes on the design canvas + tweaks panel.

const ACCENTS = [
  { name: 'tomato',   value: '#d94f2a' },
  { name: 'pacific',  value: '#2a6fb4' },
  { name: 'mustard',  value: '#caa325' },
  { name: 'spring',   value: '#3f8a5a' },
];

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#d94f2a",
  "paperTone": "warm",
  "density": "comfy",
  "sketchiness": 1.6,
  "showScaffold": false,
  "showGrid": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Live-apply tweaks via CSS vars on :root
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', t.accent);

    const tones = {
      warm:  ['#f6f1e4', '#efe7d3'],
      cool:  ['#eef1f5', '#e2e7ee'],
      cream: ['#fbf6e8', '#f3ecd6'],
      ink:   ['#272421', '#1e1c19'],
    };
    const [p, p2] = tones[t.paperTone] || tones.warm;
    root.style.setProperty('--paper', p);
    root.style.setProperty('--paper-2', p2);
    // Dark mode flip
    if (t.paperTone === 'ink') {
      root.style.setProperty('--ink', '#f0e9d6');
      root.style.setProperty('--ink-2', '#cfc7b3');
      root.style.setProperty('--ink-soft', '#9c9482');
      root.style.setProperty('--grid', 'rgba(240,233,214,0.10)');
    } else {
      root.style.setProperty('--ink', '#1d1a14');
      root.style.setProperty('--ink-2', '#3a342a');
      root.style.setProperty('--ink-soft', '#6b6357');
      root.style.setProperty('--grid', 'rgba(29,26,20,0.09)');
    }

    // Sketchiness — adjust the SVG filter scale on the fly
    const f1 = document.querySelector('#wf-rough feDisplacementMap');
    const f2 = document.querySelector('#wf-rough-soft feDisplacementMap');
    if (f1) f1.setAttribute('scale', String(t.sketchiness));
    if (f2) f2.setAttribute('scale', String(Math.max(0, t.sketchiness * 0.6)));
  }, [t]);

  const wrapClasses = [
    t.showScaffold ? 'scaffold' : '',
    t.density === 'dense' ? 'dense' : t.density === 'sparse' ? 'sparse' : '',
    t.showGrid ? '' : 'no-grid',
  ].filter(Boolean).join(' ');

  // Wrap an artboard in optional roughness filter
  const Rough = ({ children }) => (
    <div className={wrapClasses} style={{ width: '100%', height: '100%' }}>
      {children}
    </div>
  );

  return (
    <>
      <WFDefs />
      <DesignCanvas
        title="Algebra 2 Playgrounds — wireframe directions"
        subtitle="Low-fi sketches across 4 screens. Drag, focus any one, or tweak the look in the panel →"
      >
        <DCSection id="home" title="① Homepage" subtitle="6 directions for the landing page">
          <DCArtboard id="home-notebook"  label="A · Notebook"        width={960} height={680}><Rough><HomeNotebook /></Rough></DCArtboard>
          <DCArtboard id="home-periodic"  label="B · Periodic Table"  width={960} height={680}><Rough><HomePeriodic /></Rough></DCArtboard>
          <DCArtboard id="home-zine"      label="C · Zine"            width={960} height={680}><Rough><HomeZine /></Rough></DCArtboard>
          <DCArtboard id="home-arcade"    label="D · Arcade"          width={960} height={680}><Rough><HomeArcade /></Rough></DCArtboard>
          <DCArtboard id="home-feed"      label="E · Feed"            width={960} height={680}><Rough><HomeFeed /></Rough></DCArtboard>
          <DCArtboard id="home-map"       label="F · Map"             width={960} height={680}><Rough><HomeMap /></Rough></DCArtboard>
        </DCSection>

        <DCSection id="unit" title="② Unit / Topic Index" subtitle="How a unit page could organize its lessons & tools">
          <DCArtboard id="unit-stack"     label="A · Day-by-day stack" width={960} height={680}><Rough><UnitStack /></Rough></DCArtboard>
          <DCArtboard id="unit-grid"      label="B · Topic tiles"      width={960} height={680}><Rough><UnitGrid /></Rough></DCArtboard>
          <DCArtboard id="unit-sketch"    label="C · Sketchnote map"   width={960} height={680}><Rough><UnitSketchnote /></Rough></DCArtboard>
        </DCSection>

        <DCSection id="tool" title="③ Individual Tool Page" subtitle="Where a widget actually lives">
          <DCArtboard id="tool-split"     label="A · Split panel"      width={960} height={680}><Rough><ToolSplit /></Rough></DCArtboard>
          <DCArtboard id="tool-full"      label="B · Full-bleed"       width={960} height={680}><Rough><ToolFullBleed /></Rough></DCArtboard>
          <DCArtboard id="tool-notebook"  label="C · Notebook layout"  width={960} height={680}><Rough><ToolNotebook /></Rough></DCArtboard>
        </DCSection>

        <DCSection id="about" title="④ About / For Teachers" subtitle="Letter vs. structured FAQ">
          <DCArtboard id="about-letter"   label="A · Teacher's letter" width={960} height={680}><Rough><AboutLetter /></Rough></DCArtboard>
          <DCArtboard id="about-faq"      label="B · FAQ + pack"       width={960} height={680}><Rough><AboutFAQ /></Rough></DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Look">
          <TweakColor label="accent" value={t.accent} options={ACCENTS.map(a => a.value)} onChange={v => setTweak('accent', v)} />
          <TweakRadio label="paper" value={t.paperTone}
            options={[{ label: 'warm', value: 'warm' }, { label: 'cool', value: 'cool' }, { label: 'cream', value: 'cream' }]}
            onChange={v => setTweak('paperTone', v)} />
          <TweakToggle label="dark mode" value={t.paperTone === 'ink'} onChange={v => setTweak('paperTone', v ? 'ink' : 'warm')} />
          <TweakSlider label="sketchiness" value={t.sketchiness} min={0} max={4} step={0.2} onChange={v => setTweak('sketchiness', v)} />
        </TweakSection>
        <TweakSection label="Density">
          <TweakRadio label="density" value={t.density}
            options={[{ label: 'dense', value: 'dense' }, { label: 'comfy', value: 'comfy' }, { label: 'sparse', value: 'sparse' }]}
            onChange={v => setTweak('density', v)} />
        </TweakSection>
        <TweakSection label="Scaffolding">
          <TweakToggle label="show scaffold" value={t.showScaffold} onChange={v => setTweak('showScaffold', v)} />
          <TweakToggle label="paper grid" value={t.showGrid} onChange={v => setTweak('showGrid', v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
