# Yasser Raafat — Portfolio

This site preserves the original monochrome editorial direction: oversized typography, restrained motion, thin rules, grain/vignette texture and two clear portfolio tracks.

## Local preview

From this directory run:

```powershell
py -m http.server 8000
```

Open http://localhost:8000/ and visit `/agentic/` and `/eval/`.

The pages use one relative stylesheet (`site.css` from root and `../site.css` from subpages). Diagrams are inline SVG, so there are no missing diagram assets. All content remains visible without JavaScript. The Fontshare import is optional; system fallbacks keep the layout intact offline.

## Files
- `index.html` — original two-track landing page
- `agentic/index.html` — systems engineering and architecture case studies
- `eval/index.html` — post-training and evaluation
- `site.css` — shared original-style design system
- `robots.txt`, `sitemap.xml`, `llms.txt` — discovery metadata

Private projects are described at the architecture level only. Client names, confidential materials, credentials and source code are not included.
