# v3 — "THE FEATURE" · a printed-magazine portfolio (deep design plan)

Direction locked from owner's two references + words: **paper-textured magazine** (ref #1: deckled
paper, masthead + folio rules, layered oversized editorial type, amber script swash, handwritten
column) **fused with Lendex** (big serif name + hand-drawn squiggle underline, framed cutout portrait,
clickable social icons orbiting on ring lines, Get Résumé / Watch). Borderless, bespoke, animated,
smooth, responsive, RTL, accessible. The whole site reads as a design magazine profiling Yasser.

## 0. Non-negotiables (never miss)
FRONTEND · BACKEND(n/a) · WIRING · UI/UX · LIVE-TESTING each verified. Responsive ≤320→1440+, 0
horizontal overflow. Full light (paper) + dark (night edition) themes. Full EN + Arabic/RTL. Reduced-
motion path. Works with JS disabled (content + logos static). WCAG-AA contrast. Real tech logos.
Prominent framed photo + clear swap-in. LinkedIn = https://www.linkedin.com/in/yasser-ahmed-raafat-592a2b164/.

## 1. Palette — "warm press" (owner explicitly asked for the paper look; overrides cliché caution)
Light (paper):
- `--paper` #F4F0E6  warm paper base (grain overlay on top)
- `--paper-2` #EAE4D6  deeper paper (panels / bleeds)
- `--ink` #1C1712  press black (warm)
- `--ink-2` #5A5145  warm grey body
- `--ink-3` #8B8171  captions / folio
- `--accent` #D2551E  press amber-orange (the "refine" swash) — AA-checked for text use → may darken to #B4470F for small text
- `--accent-ink` #FFF7EE
- `--rule` #CFC6B4  hairline rules
- `--cool` #2E6E7E  tiny secondary ink (used once, like ref's blue bleed)
Dark (night edition — risograph):
- `--paper` #14110C, `--paper-2` #1C1811, `--ink` #F1EAD9, `--ink-2` #B9AF9B, `--ink-3` #8A806E,
  `--accent` #F0813E, `--accent-ink` #1A1006, `--rule` #332C20, `--cool` #63B6C6.
Grain: inline SVG feTurbulence data-URI, frozen, low opacity, mix-blend multiply (light) / soft-light (dark).

## 2. Type roles (magazine uses many voices — disciplined)
- **Anton** — the giant condensed masthead word(s) (name stacked, poster scale). Uppercase only here.
- **Fraunces** (opsz) — elegant serif: the amber italic script accents ("refine"-style), section titles,
  pull quotes, drop cap. High-contrast, editorial.
- **Inter** — body, UI, labels, nav, metrics context. The readable workhorse.
- **Caveat** — handwritten annotations, the squiggle-underlined asides, little margin notes (the human touch).
- **IBM Plex Sans Arabic** — RTL body/display.
Scale: fluid clamps; hero name huge (Anton, clamp to ~7rem+ desktop). Line length <70ch for prose.

## 3. Hero = magazine COVER (masthead + interlocked portrait)
```
┌───────────────────────────────────────────────────────────── folio bar ──┐
│ THE FEATURE — Yasser Ahmad Raafat      Issue 01 · Cairo · Updated 2026     │  thin rules top+bottom
├───────────────────────────────────────────────────────────────────────────┤
│  (script, amber, Fraunces italic)  hello — I'm            ╭───────────────╮ │
│  ██ Y A S S E R ██   (Anton, huge)                        │  FRAMED photo  │ │
│  ██ R A A F A T ██   with amber hand-drawn squiggle       │  (cutout, tape │ │
│  ~~~~~~~~~ (SVG underline draws in)                        │   corners,     │ │
│  Senior AI Engineer · Systems Architect (Inter)           │   torn frame)  │ │
│  short handwritten aside (Caveat) w/ arrow → portrait     │   ● orbit ring │ │
│  [ Get résumé ↓ ]  [ Let's talk ]                         ╰───────────────╯ │
│                                            ◦ social icons ON the ring lines: │
│                                            in / ✉ / tel / ⌥ github — clickable│
└───────────────────────────────────────────────────────────────────────────┘
```
- Masthead/type INTERLOCKS with the portrait (research: image+masthead as one unit) — name overlaps
  the portrait's edge on desktop.
- Portrait: framed like a magazine cutout — off-white paper frame, subtle inner shadow, 2 "tape"
  strips (amber, rotated), faint torn edge. Big + prominent. Placeholder until owner adds photo.
- Orbit: 1–2 faint concentric ink rings behind/around portrait; social icons sit ON the ring at set
  angles (LinkedIn, Email, Phone, GitHub/resume). Each a round ink button, hover = amber fill + lift,
  fully keyboard-focusable + labelled. Rings rotate v-e-r-y slowly (reduced-motion: static).
- Hand-drawn amber SVG: the underline squiggle under the name + a swash behind the script word +
  a small arrow near the aside. All draw-in once on load (stroke-dashoffset), reduced-motion: shown.

## 4. Sections (each = a magazine page; folio number + editorial heading; BORDERLESS)
1. **Cover / hero** (above).
2. **Contents ribbon** — a thin animated marquee ticker of the tech-logo names/marks ("the toolkit"),
   press-style. Real logos. Pauses on hover; reduced-motion: static row.
3. **Selected Work — "Features"** — each project as an editorial feature: folio no. (F/01), big Fraunces
   title, a framed thumbnail (or generated abstract plate), a lede, a pull-quote of the key result,
   inline stack logos, and a "read more" expand. CoreFusion is the cover feature (largest). No boxy cards
   — use rules, columns, framed images, whitespace.
4. **By the Numbers — infographic spread** — oversized Anton/Fraunces numerals with hand-drawn ring/
   underline marks; editorial captions. (2,000+ / ~13× / 40,000+ / +40% / 95% / 8.)
5. **The Story (About)** — 2-column editorial with a Fraunces **drop cap**, a Caveat margin note, and a
   pull quote ("nothing is done until it's proven live, end to end").
6. **Experience — the CV column** — magazine sidebar list with folio ticks, roles, orgs, dates.
7. **Back cover / Contact** — bold amber page: "Let's make something." + the social orbit icons again +
   copy-email + résumé. Big, warm, unmissable (fixes reachability).
8. **Colophon footer** — masthead repeat, credits, year, set-in-Fraunces line.

## 5. Hand-drawn / texture assets (inline SVG, hand-authored)
- `grain` feTurbulence data-URI (fixed).
- `squiggle` underline path · `swash` behind script · `arrow` margin cue · `ring` orbit circles ·
  `circle-scribble` around a number · `torn edge` mask for section dividers · `tape` strip.
All two-tone-safe (currentColor / accent), draw-in via stroke-dashoffset.

## 6. Motion choreography (smooth, intentional, reduced-motion-safe)
Load (cover reveal, one orchestrated sequence): folio fades → name letters rise (Anton) → squiggle
draws → portrait fades + frame settles → social icons pop onto orbit (stagger) → swash draws.
Scroll: gentle paper parallax on portrait + faint grain drift (tiny). Section headings: single rise.
Marquee ticker loops. Hover: social/logos/links lift + amber. All gated by `prefers-reduced-motion`.

## 7. Responsive
- Desktop ≥1040: masthead overlaps portrait, 2-col hero, orbit full.
- Tablet 640–1040: portrait moves below/right smaller, orbit tighter, name scales down.
- Mobile <640: single column — folio bar wraps, name stacked (still big via clamp), portrait centered
  with a compact orbit (icons in a row under the photo if orbit too tight), sections single column.
- ≤320 + <390 explicitly tested; 0 overflow; tap targets ≥44px; type never clips.

## 8. RTL / i18n
`dir` on <html>, logical properties throughout, Arabic dict for all UI + headings + copy. Masthead,
orbit, columns, timeline all mirror. Latin brand/logo names stay LTR inside RTL. Squiggle/arrow mirror.

## 9. Accessibility
Skip link, landmarks, one <h1>, labelled social buttons, focus-visible amber ring, alt text, color not
sole signal, reduced-motion, AA contrast (verify every pair), keyboard: E copy-email / T theme.
No-JS: full content + static logos + static (non-animated) hero visible.

## 10. Build order (rounds, live-verify each)
R1 FRONTEND: tokens+grain+fonts, masthead, hero cover (framed portrait + orbit + hand-drawn), responsive.
R2 FRONTEND: contents marquee, features, numbers, story, experience, contact back-cover, footer.
R3 WIRING: theme, lang/RTL, copy-email, orbit build+rotate, swash/squiggle draw, marquee, parallax, nav.
R4 LIVE-TESTING: Playwright 320→1440 + dark + RTL + reduced-motion + no-JS; screenshots looked at; iterate.
Done-verified only on looked-at live proof.
