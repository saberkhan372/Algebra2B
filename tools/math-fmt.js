/**
 * A2 Playgrounds — Math Formatter
 * mathFmt(str) → HTML string
 *
 * Converts a plain-text math expression to formatted HTML.
 * Handles: exponents (^), square/cube roots, stacked fractions (a/b),
 * Greek letters, and proper minus signs.
 *
 * Design goal: lightweight, zero dependencies, Algebra-2-scoped.
 * Does NOT require KaTeX/MathJax.
 */
(function () {
  'use strict';

  function mathFmt(raw) {
    if (raw === null || raw === undefined) return '';
    let s = String(raw);
    if (!s.trim()) return '';

    // ── 1. Normalise minus signs FIRST (before HTML is inserted) ─────────
    // Keyboard hyphen is always a minus sign in a math expression.
    // Do this BEFORE any HTML is inserted so class-name hyphens are safe.
    s = s.replace(/-/g, '−');

    // ── 2. Greek letters ──────────────────────────────────────────────────
    s = s
      .replace(/\btheta\b/gi, 'θ')
      .replace(/\bphi\b/gi,   'φ')
      .replace(/\bpi\b/g,     'π')   // lowercase only — Pi is a name
      .replace(/\balpha\b/gi, 'α')
      .replace(/\bbeta\b/gi,  'β')
      .replace(/\bgamma\b/gi, 'γ')
      .replace(/\bdelta\b/gi, 'δ')
      .replace(/\bsigma\b/gi, 'σ')
      .replace(/\bomega\b/gi, 'ω')
      .replace(/\blambda\b/gi,'λ');

    // ── 3. Multiplication dot ─────────────────────────────────────────────
    s = s.replace(/\*/g, '·');

    // ── 4. Square / cube roots ────────────────────────────────────────────
    // sqrt(expr) — matches innermost parens (non-nested)
    s = s.replace(/(?:sqrt|√)\(([^()]+)\)/g, (_m, inner) =>
      `<span class="mf-sqrt"><span class="mf-rad"></span><span class="mf-sqrt-inner">${inner}</span></span>`
    );
    // sqrt followed by a single token (no parens): sqrt5, √x
    s = s.replace(/(?:sqrt|√)([a-zA-Z0-9]+)/g, (_m, tok) =>
      `<span class="mf-sqrt"><span class="mf-rad"></span><span class="mf-sqrt-inner">${tok}</span></span>`
    );
    // cbrt(expr) — cube root
    s = s.replace(/cbrt\(([^()]+)\)/g, (_m, inner) =>
      `<span class="mf-sqrt mf-cbrt"><span class="mf-rad"></span><span class="mf-sqrt-inner">${inner}</span></span>`
    );

    // ── 5. Exponents ──────────────────────────────────────────────────────
    // ^{...}  e.g. x^{2n+1}
    s = s.replace(/\^\{([^}]+)\}/g,  (_m, e) => `<sup>${e}</sup>`);
    // ^(...)  e.g. x^(n+1)
    s = s.replace(/\^\(([^)]+)\)/g,  (_m, e) => `<sup>${e}</sup>`);
    // ^word   e.g. x^2, x^n, x^−2 (already converted − above)
    s = s.replace(/\^([−a-zA-Z0-9]+)/g, (_m, e) => `<sup>${e}</sup>`);

    // ── 6. Stacked fractions ─────────────────────────────────────────────
    // Only match simple  token/token  forms to avoid false positives.
    // A "token" is: digits, letters, or an already-processed HTML span.
    // We run this AFTER exponent processing so x^2/y won't mis-match.
    //
    // Pattern: word-char(s)  /  word-char(s)
    // e.g.  1/2  b/2  (b/2) patterns inside parens get caught here too
    s = s.replace(/([a-zA-Z0-9]+)\/([a-zA-Z0-9]+)/g, (_m, n, d) =>
      `<span class="mf-frac"><span class="mf-num">${n}</span><span class="mf-den">${d}</span></span>`
    );

    return s;
  }

  // Expose globally
  window.mathFmt = mathFmt;

})();
