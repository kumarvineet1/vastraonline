# Copilot / AI Agent Instructions for Vastra Online

Purpose
- Short, actionable guidance for AI coding agents working on this repository.

Big picture
- Static single-page style site located under `src/`. No build step: pages are plain HTML/CSS/JS. The `main` entry is `src/index.html`.
- Dev server: `npm start` runs `http-server src -p 8000 -o` (see `package.json`).

Key files & directories (examples to inspect)
- `src/index.html`, `src/HomePage.html`, `src/Catalog.html`, `src/Order.html`, `src/contact.html` — page templates.
- `src/scripts/main.js` — global UI behaviors and event wiring.
- `src/scripts/products.js` — product listing / data manipulation patterns.
- `src/scripts/contactf.js` — contact form logic.
- `src/styles/main.css` — global styling conventions.
- `src/assets/` — fonts and static assets; references use relative paths from files in `src/`.

Project-specific patterns
- Vanilla JS only: code uses DOM APIs and simple module-like separation by file, not bundlers.
- Mutations: scripts directly query and mutate DOM nodes (e.g., product lists in `products.js`). Follow existing function names and event patterns.
- No build/transpile: keep ES features compatible with target browsers unless adding a bundler intentionally.

Developer workflows
- Start local server: run `npm install` (if not installed) then `npm start`. This runs `http-server` serving `src/` on port 8000.
- Editing: modify files directly under `src/`; reload browser to see changes.
- Committing: keep commits scoped to a single page/feature. Include which file changed in the commit title (e.g., "catalog: add price filter to products.js").

Integration points & external deps
- External dependency appears only in `package.json`: `http-server` (dev runtime for quick local serving). There are no other Node build tools.
- Integrations with backends are not present in this codebase; product data is handled client-side in `products.js`.

When to be conservative vs. make bigger changes
- Conservative: small UI tweaks, fixes to scripts, CSS adjustments — edit files in place.
- Bigger changes (add build system, introduce frameworks): open an issue first and outline migration steps; do not rewrite multiple pages in a single PR without review.

Examples for common tasks
- Add a new page: create `src/MyPage.html`, add styles in `src/styles/main.css` or a new CSS file, and wire any JS under `src/scripts/`.
- Test locally:
```
npm install
npm start
# open http://localhost:8000
```

Notes for AI agents
- Prefer minimal, focused edits. Preserve file-level style (plain HTML structure, inline script usage patterns if present).
- Reference existing functions in `src/scripts/` when adding new behavior; mirror naming and event wiring.
- Do not invent server-side code or build configs unless the user asks for a migration.

Questions for maintainers
- Do you want me to commit and push this file to the remote GitHub repository? If yes, I can run `git add`, `git commit` and `git push` — confirm and provide remote access if needed.
