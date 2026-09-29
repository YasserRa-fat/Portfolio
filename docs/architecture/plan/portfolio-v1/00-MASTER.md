# portfolio-v1 — master  ·  DONE-VERIFIED 2026-09-28

Reference docs (durable, keep): design → [01-design-system.md] · content/copy → [02-content-map.md].
Deliverable shipped: `/index.html` (+ `/assets`). Single-page, self-contained, offline-capable.

**done-verified** — all planes (FRONTEND · WIRING · UI/UX · LIVE-TESTING) complete and proven LIVE via
Playwright (see 00-MASTER-INDEX.md for the evidence list). No open items. The checklist below is retained
only as the record of what was built; nothing on it is outstanding.

---

## Build checklist (planes kept separate — §5)
### FRONTEND (structure + style)
- [ ] Base HTML: `<html dir lang>`, meta, skip-link, landmarks, self-hosted fonts (Space Grotesk + IBM Plex Mono).
- [ ] Design tokens (CSS vars) dark+light; contrast AA verified.
- [ ] Sticky status bar (identity ● · nav · ⌘K · theme · EN/ع).
- [ ] Hero console + operator-ID photo placeholder + value line + CTAs + availability dot.
- [ ] Positioning · Impact readout · Selected work (CoreFusion deep + others) · Capability registry
      (filterable) · Deployment history timeline · Credentials · Open-a-channel contact · footer hint bar.
- [ ] Responsive: fluid clamp scale; layouts reflow ≤320 → 1440+; no horizontal scroll.

### WIRING (behavior/JS — vanilla, no build step)
- [ ] Hero boot stream (typed→streamed), skippable, reduced-motion safe.
- [ ] Command palette (⌘K/`/`): nav, copy email, LinkedIn, theme, lang/dir, résumé; dialog + focus trap + Esc.
- [ ] Theme toggle (persist localStorage, try/catch, respect prefers-color-scheme first).
- [ ] EN/ع language+dir toggle → flips `dir`, translates key strings, mirrors icons.
- [ ] Copy-email → confirm toast. Capability registry filter. Smooth-scroll nav + active section.
- [ ] Section reveal (IntersectionObserver), single restrained motion, off under reduced-motion.

### UI/UX (craft)
- [ ] One orchestrated motion moment only; quiet elsewhere. Honest status dots w/ labels.
- [ ] Focus-visible rings, tap targets ≥44px, hit areas, empty/hover states meaningful.

### LIVE-TESTING (§13-A — the honesty gate)
- [ ] Serve locally; Playwright drive at widths 320, 360, 390, 414, 768, 1024, 1280, 1440.
- [ ] Screenshots captured AND looked at each width (dark + light + RTL). Fix → re-shoot. Iterate.
- [ ] Check: no horizontal overflow; palette opens/traps/Esc; theme+lang persist; reduced-motion path;
      keyboard-only nav; contrast; console clean.
- [ ] Only then flip index row → done-verified with screenshot evidence.

## Where owner updates things (report at end)
- Drop photo → `/assets/yasser.jpg` (hero has marked placeholder + instructions).
- Résumé PDF → `/assets/yasser-resume.pdf` for the download button.
- Confirm/adjust availability line + reply-time promise + any links.
