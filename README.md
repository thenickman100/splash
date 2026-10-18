# splash

Testing environment for the redesign of Old Sites, the museum at https://hackahobo.info/projects/splash/.

- `index.html` lists the candidates and the site pages.
- `candidates/` holds the 8 candidate designs, each exactly as exported from the design tool (`*.dc.html`, `assets/`, `support.js`, `vendor/`).
- `candidates/v0.1/` is the museum live now, from `splash-v0.1.zip`, for comparison. For the test site, its `../sites/` and `../../` links point at `https://hackahobo.info/`, and logos and icons missing from the zip load from `https://hackahobo.info/projects/splash/`. Don't upload this copy to the server.

- `sitepages/` holds the six site-page designs (AI to AN) that Read more opens. Each is one HTML file that shows any site from `?site=`. The text is v0.1's, in `sitepages/data.js`; `sitepages/common.js` has the shared navigation, live windows, image viewer and v0.1's interactive features.

Big browser windows show the live site from hackahobo.info in a scaled frame, as v0.1 did; small thumbnails stay as screenshots. Each site's colors live in one file, `palette.js`, read from the site's own CSS and image files; `palette.html` shows where each color comes from. The candidates and site pages all take their colors from `palette.js` and pick the first palette color that reads on their background (or the site's color 1 as it is), so changing a palette there updates every page. Every page also has a Palette button (bottom right) for trying a different order in place; the trial order is kept in the browser, and Export gives the text to send back so it can be made the published order.

Every main page has a test bar for choosing which site-page design Read more opens. The choice is remembered in the browser.

The candidates link to the restored sites on hackahobo.info (`/projects/sites/...`), so those links work from the test site without copying the sites here.

Every push to `main` deploys the repo to GitHub Pages through `.github/workflows/pages.yml`.

To view locally, run `python3 -m http.server` in the repo root and open http://localhost:8000.
