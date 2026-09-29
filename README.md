# Yasser Ahmad Raafat — Portfolio

A single-page, self-contained portfolio. No framework, no build step, works offline.
**To view:** double-click `index.html`, or serve the folder (`python -m http.server 8777`) and open
`http://127.0.0.1:8777/`.

Design concept: **"The Control Plane"** — you're presented as a provably-live production system:
a streaming operator console, a command palette (press **⌘K** / **Ctrl+K**), live-status deployments,
and a capability registry. Dark-first graphite with a phosphor amber-gold accent; a full light mode
and a full **Arabic / RTL** mode are built in (toggles top-right).

---

## What to update (and where)

Everything below is a small, clearly-marked edit. No code knowledge needed beyond copy/paste.

### 1. Your photo  ← do this first for the "wow"
- Drop a portrait into `assets/` named **`yasser.jpg`** (a **4:5** ratio, e.g. 800×1000, looks best).
- Open `index.html`, find the comment `<!-- PHOTO:` (in the hero), and change
  `src="assets/operator-placeholder.svg"` to **`src="assets/yasser.jpg"`**.
- Until you do, an elegant placeholder is shown — nothing looks broken.

### 2. Your résumé
- The "Download résumé" button serves `assets/yasser-resume.pdf` (your current résumé is already there).
- Replace that file anytime to update the download.

### 3. Links, email, phone
In `index.html`, in the **Open a channel** section near the bottom, update:
- email: `yasserwork123@gmail.com` (appears in the link and in `assets/app.js` as `EMAIL` — update both).
- LinkedIn: `linkedin.com/in/yasser-ahmed-raafat`.
- phone: `+20 127 972 6242`.

### 4. Availability / reply-time line
- Hero badge text and the contact line ("I reply within a day") are plain text in `index.html`
  (search for `available for select` and `reply within a day`). Adjust to taste.

### 5. Content (projects, metrics, skills)
- All copy is plain HTML in `index.html`, grouped by clearly-labelled `<!-- SECTION -->` comments.
- Every number and claim comes straight from your résumé — edit freely if anything changes.

### 6. Arabic translations (optional)
- The EN/ع toggle uses a dictionary in `assets/app.js` (the `AR` object). If you edit English copy
  and want the Arabic to match, update the matching key there. Untranslated keys safely fall back to English.

---

## Publishing it (so clients can reach it)
Any static host works, free ones included:
- **GitHub Pages / Cloudflare Pages / Netlify / Vercel:** drag-and-drop this folder or connect a repo.
- Point your own domain at it for the strongest impression (e.g. `yasser.dev`).
- Add the live URL to your LinkedIn "Featured" + headline, your résumé header, and email signature —
  that's what turns "zero reachability" into inbound.

## Accessibility & quality (already handled)
Responsive to <320px, keyboard-navigable with visible focus, reduced-motion respected, WCAG-AA
contrast in both themes, RTL/LTR safe, and fully functional even with JavaScript disabled.
