# Yasser Ahmad Raafat — Portfolio

Monochrome, motion-led portfolio. A landing page routes to two niche tracks:

- **`/agentic/`** — Agentic AI & RAG Systems Engineer.
- **`/eval/`** — LLM Post-Training & Evaluation Specialist.

Each is a self-contained single-page site (no build step). Shared design system:
near-black + warm off-white, **Clash Display + General Sans** (Fontshare), **Lenis**
smooth scroll + **GSAP ScrollTrigger**, custom cursor, magnetic buttons, kinetic
mixed fill/outline headlines, and text-scramble reveals. Reduced-motion and no-JS safe.

## View locally
```
python -m http.server 8080
# then open http://127.0.0.1:8080/
```
(Fonts + motion libraries load from CDN, so an internet connection is needed.)

## Hosting
Served via GitHub Pages at `https://yasserra-fat.github.io/Portfolio/`.

## Honesty note
All claims trace to the résumé. CoreFusion is a full agentic platform **built solo as
personal R&D — not publicly deployed**; its proof is the codebase (~1,110 tests) and an
architecture walkthrough. No pricing is shown on the sites (shared on contact).
