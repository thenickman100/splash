# splash

Testing environment for the redesign of Old Sites, the museum at https://hackahobo.info/projects/splash/.

- `index.html` lists the candidates.
- `candidates/` holds the 8 candidate designs, each exactly as exported from the design tool (`*.dc.html`, `assets/`, `support.js`, `vendor/`).
- `candidates/v0.1/` is the museum live now, from `splash-v0.1.zip`, for comparison. For the test site, its `../sites/` and `../../` links point at `https://hackahobo.info/`, and logos and icons missing from the zip load from `https://hackahobo.info/projects/splash/`. Don't upload this copy to the server.
- `docs/` holds the project brief (`museum-handoff.md`), Nick's backstories, the writing guide and `sites-tree.txt` (the file list of `/projects/sites/`).

The candidates link to the restored sites on hackahobo.info (`/projects/sites/...`), so those links work from the test site without copying the sites here.

Every push to `main` deploys the repo to GitHub Pages through `.github/workflows/pages.yml`.

To view locally, run `python3 -m http.server` in the repo root and open http://localhost:8000.
