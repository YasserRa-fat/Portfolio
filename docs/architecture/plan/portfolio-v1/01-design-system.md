# Design System — "The Control Plane" (from scratch, research-grounded)

## The singular idea
Yasser is a **Systems Architect** whose entire brand is *provable, sovereign, production-grade
systems* — he enforces sovereign/executor splits, writes architecture constitutions, ships
self-describing repos with plan ledgers, and lives by a "**not done until proven live end-to-end**"
rule. So the portfolio presents **Yasser himself as a control plane / operator console** — an honest
instrument, not a hacker-cosplay terminal. Every design choice serves ONE idea: *this is an operator
who ships systems that are provably live.* That directly repairs "zero reachability": the whole page
is an instrument whose most prominent control is "open a channel to the operator."

Boldness is spent in ONE place (the hero console + a single orchestrated streamed "boot" reveal).
Everything else is quiet, editorial, precise. (Juror rule: static frames must stand alone; motion
must not mask weak design.)

## Color — semantic, not neon nostalgia (research: Terminal Renaissance)
Base is a refined graphite instrument surface (NOT #000, NOT the tinted-black #0B0B0B cliché, NOT
navy). Accent is a warm **phosphor amber-gold** — terminal *heritage* without the neon-green cliché,
and gold reads "high value" (fits high-paying clients). Cool slate-blue for structure/links. Status
hues used ONLY as honest state dots.

Dark (default — "Ops / night shift"):
- `--bg`        #0D1013  base graphite (cool-neutral, deliberate — not pure/tinted black)
- `--surface`   #14181C  raised panel
- `--surface-2` #1B2026  higher panel / inputs
- `--line`      #2A3138  hairline borders
- `--ink`       #E8EDF1  primary text
- `--ink-dim`   #9AA6B0  secondary text
- `--ink-mute`  #67727C  tertiary / captions
- `--signal`    #F2B33D  phosphor amber-gold — the ONE hero accent (live/attention/brand)
- `--signal-ink`#1A1204  text on amber (dark, for AA on amber buttons)
- `--wire`      #6FB7C7  desaturated slate-cyan — links / structural lines / secondary
- `--ok`        #5FCf8f  status: live/success (dot only)
- `--warn`      #E7B94D  status: transitioning (dot only)
- `--err`       #E8746A  status: error (dot only)

Light ("Day shift" — grounded in his real "theme-aware design" skill):
- `--bg` #F5F3EE (warm paper-neutral, NOT the cream+terracotta cliché), `--surface` #FFFFFF,
  `--surface-2` #EFEBE3, `--line` #DED8CD, `--ink` #1A1E22, `--ink-dim` #4A545C, `--ink-mute` #78838C,
  `--signal` #B7791A (darkened amber for AA on light), `--wire` #256E7D, status hues darkened for AA.

All pairings verified WCAG AA (≥4.5 body, ≥3 large/UI) during build via a contrast check.

## Type — distinctive but engineered (research: 2026 defaults are Inter/Geist/JetBrains → avoid)
- **Space Grotesk** (Google) — display, headlines, UI, short body. Characterful geometric grotesk,
  not the default Inter. Carries personality.
- **IBM Plex Mono** (Google) — the "console voice": the terminal, data readouts, labels, code,
  metrics. Engineered/IBM heritage fits the systems-instrument theme; less clichéd than JetBrains.
- Two families, clearly distinct roles. Self-hosted or Google Fonts w/ `font-display:swap`.
- Type scale (Elements of Typographic Style, ~1.25 minor-third, fluid clamp):
  hero 3.0–5.5rem / h2 2–2.6 / h3 1.35 / body 1.0–1.0625 / small 0.875 / mono-label 0.72–0.78.
- Line length capped <70ch for prose. No ALL-CAPS tracked eyebrows; no single-word accenting; no
  "WORD — fragment"; no middle-dot meta strings; no "→" appended to link text. (All are AI tells.)

## Layout & wireframe (one-column editorial spine, confident grid that breaks deliberately)
Alignment: content left-aligned to a strong start-edge (logical `start`, RTL-safe); metrics/registry
use grids. Max content width ~1080px; generous vertical rhythm.

```
┌──────────────────────────────────────────────────────────────┐
│ [●yasser ~/control-plane]        nav  ⌘K   ☀/☾   EN|ع        │  sticky slim status bar
├──────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌── console window ─────────────────┐   YASSER AHMAD RAAFAT  │  HERO
│  │ ● ● ●  operator@corefusion:~$      │   Senior AI Engineer · │
│  │ $ whoami                          │   Systems Architect ·  │
│  │ > booting profile… (streamed)     │   Full-Stack Engineer  │
│  │ > 3 roles · 5 systems · live      │                        │
│  │ [ photo / operator ID framed ]    │   one-line value prop  │
│  │ █ cursor                          │   [Open a channel] [Work]│
│  └───────────────────────────────────┘   ● available for work │
│                                                                │
├──────────────────────────────────────────────────────────────┤
│  POSITIONING — one confident paragraph, client-outcome voice   │
├──────────────────────────────────────────────────────────────┤
│  IMPACT READOUT — precise metric instrument (2000+ / 13x / …)  │
├──────────────────────────────────────────────────────────────┤
│  SELECTED WORK — CoreFusion (deep flagship) · Clove · …        │  "deployments" w/ live dots
├──────────────────────────────────────────────────────────────┤
│  CAPABILITY REGISTRY — grouped, filterable inventory           │
├──────────────────────────────────────────────────────────────┤
│  DEPLOYMENT HISTORY — experience timeline / commit-log framing │
├──────────────────────────────────────────────────────────────┤
│  CREDENTIALS — Redis/FCC/HackerRank/ICPC                       │
├──────────────────────────────────────────────────────────────┤
│  OPEN A CHANNEL — big, frictionless contact (email copy, links)│  the reachability fix
├──────────────────────────────────────────────────────────────┤
│  footer hint bar:  ? help · ⌘K palette · e email · g github    │
└──────────────────────────────────────────────────────────────┘
```

## Motion (choreographed, one moment; reduced-motion respected)
- ONE orchestrated hero "boot" stream on load (typed command → streamed lines → cursor), skippable.
- Section reveals: a single restrained fade/translate on first view, staggered subtly — NOT on every
  card. Respect `prefers-reduced-motion: reduce` → all entrance motion off, content fully visible.
- Interaction motion welcome: command palette open, copy-email confirmation, tab switches, theme flip.
- Live status dots gently pulse (dark only, reduced-motion off).

## Signature interactions (reward curiosity, honest function)
- **Command palette (⌘K / `/`)**: jump to sections, copy email, open LinkedIn, toggle theme,
  toggle language/dir, download résumé. Keyboard-native; mouse-friendly.
- **Footer hint bar**: 3–5 real keybindings + `?` for full list (research: premium TUI pattern).
- **Theme toggle** + **EN/ع language+dir toggle** (demonstrates RTL/LTR + translation-readiness live).

## Accessibility / i18n floor (non-negotiable)
- `dir` on `<html>`, CSS **logical properties** everywhere (margin/padding/inset-inline, text-align
  start/end), no hard left/right. Icons/arrows mirror in RTL.
- Visible `:focus-visible` rings; skip-link; semantic landmarks; alt text; labelled controls; palette
  is a proper dialog with focus trap + Esc. Color never the only signal (dots have labels/shapes).
- Fluid responsive ≤320px → 1440px+; no horizontal scroll; tap targets ≥44px.

## Critique pass (per frontend-design skill — revise the defaults)
- ✅ Rejected cream+serif+terracotta (Anthropic accent) — chose graphite + amber-gold.
- ✅ Rejected black+neon-green hacker terminal — semantic amber/slate on graphite, monochrome-first.
- ✅ Rejected SaaS card kit (identical radius+grey shadow on all) — panels earn borders by function,
  differentiated hierarchy, hairline instrument lines not soft drop shadows.
- ✅ Rejected template chrome: NO caps-tracked eyebrows, NO middle-dot meta, NO "→" on links, NO
  numbered 01/02/03 unless it's a real sequence (timeline IS a sequence → ok there only).
- ✅ Default type (Inter/Geist/JetBrains) rejected → Space Grotesk + IBM Plex Mono.
- Risk watch: amber can drift "retro CRT" — keep it a precise accent on few elements, high-craft, not
  a full amber wash; base stays neutral graphite so it reads "instrument," not "nostalgia."
