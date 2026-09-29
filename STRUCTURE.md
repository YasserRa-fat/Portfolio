# portfolio — structure index

A single-page, self-contained, offline-capable personal portfolio for Yasser Ahmad Raafat.
Design concept: **"The Control Plane"** — an operator console that presents Yasser as a
provably-live production system. Dark-first graphite + phosphor amber-gold. No framework, no
build step: open `index.html` or serve the folder.

| file | purpose | flow | status | lines |
|------|---------|------|--------|-------|
| index.html | the page: markup, all sections, i18n hooks, no-JS console fallback, head theme/dir script | entry | current | ~340 |
| assets/styles.css | full design system: tokens (dark+light), logical properties (RTL/LTR), fluid responsive, hero entrance, reduced-motion | style | current | ~430 |
| assets/app.js | behavior: boot stream, command palette (⌘K), theme + EN/ع(RTL) toggles, copy-email, registry filter, case-study expand | behavior | current | ~330 |
| README.md | owner guide: what/where to update (photo, résumé, links) | docs | current | — |
| STRUCTURE.md | this index | nav | current | — |

## Subdirectories
- `assets/` — styles, script, self-hosted fonts, placeholder art, résumé PDF. See `assets/_STRUCTURE.md`.
- `docs/architecture/plan/` — the plan pipeline (design system, content map, build checklist, master index).

## How to run / verify
- Serve: `python -m http.server 8777` then open `http://127.0.0.1:8777/`.
- Verified live via Playwright across 320–1440px + RTL, dark/light, reduced-motion, no-JS — 0 overflow, 0 console errors.
