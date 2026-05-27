// About / for teachers wireframes

// ─────────────────────────────────────────────────────────────
// A. LETTER — handwritten note from the teacher
// ─────────────────────────────────────────────────────────────
function AboutLetter() {
  return (
    <WFBrowser url="algebra2playgrounds.school/about">
      <div className="paper-lined" style={{ height: '100%', padding: '24px 48px', position: 'relative' }}>
        {/* Date */}
        <div className="f-hand" style={{ fontSize: 14, color: 'var(--ink-soft)', textAlign: 'right' }}>
          Fall 2025 · re: this website
        </div>

        <div className="f-display" style={{ fontSize: 36, marginTop: 6 }}>Hey — </div>

        <div className="f-hand" style={{ fontSize: 17, lineHeight: 1.6, marginTop: 4, maxWidth: 620 }}>
          <p style={{ margin: '6px 0' }}>
            This is a little corner of the internet I made for our Algebra 2 class. Every "playground" here is a <span className="highlight">tiny tool</span> that lets you mess with one idea from class — factoring, imaginary numbers, exponents, all of it.
          </p>
          <p style={{ margin: '6px 0' }}>
            <span className="f-marker">There's no login. Nothing is graded.</span> Nothing here is tracked. Drag stuff. Break it. See what happens. Then come tell me what you saw.
          </p>
          <p style={{ margin: '6px 0' }}>
            If something on this site is confusing, or broken, or just kind of meh — <span className="underline-wavy">tell me</span>. I'll fix it. This thing is alive.
          </p>
          <div style={{ marginTop: 14 }}>
            <div className="f-marker" style={{ fontSize: 22, color: 'var(--accent)' }}>~ Mr. K</div>
            <div className="f-type" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>room 207 · kothari@school.edu</div>
          </div>
        </div>

        {/* Sticky on the side */}
        <div className="sk-box rot-r" style={{
          position: 'absolute', right: 28, top: 90, width: 180, padding: 12,
          background: 'var(--highlight)',
        }}>
          <span className="tape" />
          <div className="f-marker" style={{ fontSize: 11 }}>FOR TEACHERS</div>
          <div className="f-hand" style={{ fontSize: 13, lineHeight: 1.3, marginTop: 4 }}>
            Steal anything. Email me for source code, lesson plans, & the rubric.
          </div>
          <div className="f-type" style={{ fontSize: 11, marginTop: 6, color: 'var(--accent)' }}>→ teacher pack</div>
        </div>

        {/* Bottom: quick facts */}
        <div className="row gap-12" style={{ position: 'absolute', bottom: 24, left: 48, right: 48 }}>
          {[
            { n: '12', l: 'tools (so far)' },
            { n: '4', l: 'units mapped' },
            { n: '0', l: 'accounts, ever' },
            { n: '$0', l: 'cost' },
          ].map((s, i) => (
            <div key={i} className={`sk-box-dashed center col ${i % 2 ? 'rot-l' : 'rot-r'}`} style={{ flex: 1, padding: 10 }}>
              <div className="f-display" style={{ fontSize: 32, lineHeight: 1, color: 'var(--accent)' }}>{s.n}</div>
              <div className="f-hand" style={{ fontSize: 12 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </WFBrowser>
  );
}

// ─────────────────────────────────────────────────────────────
// B. FAQ + RESOURCES — for teachers + parents + students
// ─────────────────────────────────────────────────────────────
function AboutFAQ() {
  const faqs = [
    { q: 'Do I need an account?',         a: 'Nope. There are no accounts on this site. Nothing is saved.' },
    { q: 'Will this be on the test?',     a: 'The ideas inside the tools, yes. The tools themselves, no.' },
    { q: 'It says I got it wrong but...', a: 'Take a screenshot, send it to Mr. K. Bugs happen — I want to know.' },
    { q: 'Can my parents use it?',        a: 'Yes! These tools are made for the math, not the assignment. Anyone can poke at them.' },
    { q: 'Are you tracking me?',          a: 'No analytics, no logins, no cookies. The site doesn\'t know who you are.' },
  ];
  return (
    <WFBrowser url="algebra2playgrounds.school/about">
      <div className="paper" style={{ height: '100%', padding: '20px 32px' }}>
        {/* Header */}
        <div className="f-type" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>← back to playgrounds</div>
        <div className="row between" style={{ alignItems: 'flex-end', marginTop: 4 }}>
          <div>
            <div className="f-display" style={{ fontSize: 48, lineHeight: 1 }}>About <span className="highlight">these</span> playgrounds.</div>
            <div className="f-hand" style={{ fontSize: 15, color: 'var(--ink-soft)' }}>What this site is, who made it, & how to use it.</div>
          </div>
          <div className="row gap-6">
            <span className="sk-pill f-hand" style={{ fontSize: 12 }}>students</span>
            <span className="sk-pill f-hand" style={{ fontSize: 12, background: 'var(--ink)', color: 'var(--paper)' }}>teachers</span>
            <span className="sk-pill f-hand" style={{ fontSize: 12 }}>parents</span>
          </div>
        </div>

        <div className="row gap-16" style={{ marginTop: 18 }}>
          {/* Left: FAQ */}
          <div style={{ flex: 1 }}>
            <div className="f-marker" style={{ fontSize: 13 }}>QUESTIONS PEOPLE ACTUALLY ASK</div>
            <div className="col gap-8" style={{ marginTop: 8 }}>
              {faqs.map((f, i) => (
                <div key={i} className="sk-box" style={{ padding: 10 }}>
                  <div className="f-display" style={{ fontSize: 17, lineHeight: 1.1 }}>{f.q}</div>
                  <div className="f-hand" style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 4 }}>{f.a}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: teacher pack */}
          <div style={{ flex: '0 0 280px' }}>
            <div className="sk-box-thick" style={{ padding: 12, background: 'var(--paper-2)' }}>
              <div className="f-marker" style={{ fontSize: 12, color: 'var(--accent)' }}>★ TEACHER PACK</div>
              <div className="f-display" style={{ fontSize: 22, lineHeight: 1, marginTop: 2 }}>Steal this stuff.</div>
              <div className="f-hand" style={{ fontSize: 13, marginTop: 6 }}>
                All tools are MIT-licensed. Source code on GitHub. Lesson plans + the rubric + a slide deck below.
              </div>
              <div className="col gap-4 f-hand" style={{ fontSize: 13, marginTop: 8 }}>
                <span>📄 Pacing plan (PDF)</span>
                <span>📄 Lesson plans (12 ·PDF)</span>
                <span>📄 Quiz rubric</span>
                <span>{'</> source code'}</span>
                <span>📧 email Mr. K</span>
              </div>
              <div style={{ marginTop: 10 }}>
                <SkBtn accent big>→ download teacher pack (.zip)</SkBtn>
              </div>
            </div>

            <div className="sk-box-dashed" style={{ marginTop: 12, padding: 10 }}>
              <div className="f-marker" style={{ fontSize: 11 }}>CREDITS</div>
              <div className="f-hand" style={{ fontSize: 12, lineHeight: 1.3 }}>
                Built by Mr. K. Inspired by CC Fest, Bret Victor, & the kids who said "wait can I see that again?"
              </div>
            </div>
          </div>
        </div>
      </div>
    </WFBrowser>
  );
}

Object.assign(window, { AboutLetter, AboutFAQ });
