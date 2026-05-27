# Design Constraints

Last updated: 2026-05-27

## Site Style

- Keep the hand-drawn notebook visual style.
- Use the shared classes and variables from `styles.css`.
- Avoid introducing frameworks, bundlers, or dependencies.
- The site is static HTML/CSS/JS and has no build step.

## Preferred Classes

Use existing classes where possible:

- `sk-box`
- `sk-box-thick`
- `sk-box-dashed`
- `sk-pill`
- `sk-tag`
- `f-display`
- `f-hand`
- `f-marker`
- `f-type`
- `f-mono`
- `tool-page`
- `tool-main`
- `tool-sidebar`
- `widget-container`
- `lesson-row`
- `tool-card`

## Tool Patterns

- Tool pages are standalone HTML files in `tools/`.
- Tool pages should link back to their unit page and homepage.
- Use the existing `tool-page`, `tool-main`, and `tool-sidebar` layout.
- Include related-tool links in the sidebar.
- Keep teacher-facing voice warm, concise, and classroom-ready.
- Canvas tools should be device-pixel-ratio aware.
- Do not use `localStorage` unless explicitly intended. Existing exception: Elimination Race personal best.

## Sync Requirements

After each new tool ships, update and audit:

1. The matching unit page lesson row and tool card.
2. The homepage `TOOLS` array and visible count.
3. `PLAN.md` current state and remaining list.

The homepage `TOOLS` count and the number of `tools/*.html` files should match unless there is an intentional hidden/deprecated tool.

## Verification Commands

Check inline scripts:

```bash
node -e 'const fs=require("fs"),path=require("path");function walk(d){return fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>{const p=path.join(d,e.name);return e.isDirectory()&&e.name!==".git"?walk(p):e.isFile()&&p.endsWith(".html")?[p]:[]})}let bad=[];for(const f of walk(".")){const s=fs.readFileSync(f,"utf8");let i=0;for(const m of s.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi)){i++;try{new Function(m[1])}catch(e){bad.push(f+" script "+i+": "+e.message)}}}console.log(bad.length?bad.join("\n"):"All inline scripts parse as valid JavaScript.")'
```

Count homepage tools:

```bash
node -e 'const fs=require("fs");const s=fs.readFileSync("index.html","utf8");const arr=s.match(/const TOOLS = \[([\s\S]*?)\];/)[1];console.log((arr.match(/href:/g)||[]).length)'
```

Count tool files:

```bash
find tools -maxdepth 1 -name "*.html" | wc -l
```
