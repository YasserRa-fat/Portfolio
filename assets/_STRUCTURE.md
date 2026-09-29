# assets/ — structure

| file | purpose | flow | status | lines |
|------|---------|------|--------|-------|
| styles.css | full design system (tokens, layout, components, RTL, reduced-motion) | style | current | ~430 |
| app.js | all page behavior (vanilla, no build) | behavior | current | ~330 |
| operator-placeholder.svg | tasteful portrait placeholder shown until owner adds a photo | asset | current | — |
| yasser-resume.pdf | résumé served by the "Download résumé" button | asset | current | — |
| yasser.jpg | owner's portrait — NOT yet added; point the hero `<img src>` here once dropped | asset | pending | — |

## Subdirectories
- `fonts/` — self-hosted woff2 subsets + `fonts.css` (@font-face). Families: Space Grotesk (display),
  IBM Plex Mono (console/data), IBM Plex Sans Arabic (RTL). `_google.css` is the raw source (reference only).
