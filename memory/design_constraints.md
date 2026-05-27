---
name: design-constraints
description: Hard design rules for every tool and page on the Algebra 2 Playgrounds site
metadata: 
  node_type: memory
  type: project
  originSessionId: a8d26e5a-0d3f-4874-9e5e-67198243620d
---

Rules from PLAN.md that must always be followed:

- CSS variables from `styles.css` only — no inline hex colors except in canvas drawing code
- Canvas tools must be devicePixelRatio-aware (pattern: see `tools/abs-value-grapher.html`)
- No logins, no localStorage (exception: Elimination Race personal best already uses it)
- Teacher voice throughout: casual, warm, "Mr. K" references in share/sidebar boxes
- Background classes rotate for variety: `paper-grid`, `paper-lined`, `paper-dots`
- Tool cards use CSS classes: `sk-box`, `f-hand`, `f-marker`, `tool-page`, `tool-main`, `tool-sidebar`
- Local preview: `python3 -m http.server 8091` → `http://127.0.0.1:8091/`

**Three-agent workflow:**
- **Claude** — novel interaction design, step-by-step trainers, math correctness edge cases, pedagogical framing, "Mr. K" voice copy
- **ChatGPT** — static audits (link checks, count consistency, unit page sync), doc review, cross-file consistency reports. Reports findings only — never edits HTML directly.
- **Codex** — structurally repetitive pages, data entry into templates, boilerplate plumbing, copy-paste extensions

**Audit rhythm:** After any batch of tool additions, ask ChatGPT to verify that (1) the unit page lesson row is `done`, (2) the homepage TOOLS array has the entry, and (3) PLAN.md counts match the actual tool count.

**Why:** Established design system must stay consistent across all pages; mixing breaks visual coherence.
