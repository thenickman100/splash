# splash

Testing environment for the redesign of Old Sites, the museum at https://hackahobo.info/projects/splash/.

- `index.html` lists the candidates and the site pages.
- `candidates/` holds the 8 candidate designs, each exactly as exported from the design tool (`*.dc.html`, `assets/`, `support.js`, `vendor/`).
- `candidates/v0.1/` is the museum live now, from `splash-v0.1.zip`, for comparison. For the test site, its `../sites/` and `../../` links point at `https://hackahobo.info/`, and logos and icons missing from the zip load from `https://hackahobo.info/projects/splash/`. Don't upload this copy to the server.

- `sitepages/` holds the six site-page designs (AI to AN) that Read more opens. Each is one HTML file that shows any site from `?site=`. The text is v0.1's, in `sitepages/data.js`; `sitepages/common.js` has the shared navigation, live windows, image viewer and v0.1's interactive features.

Big browser windows show the live site from hackahobo.info in a scaled frame, as v0.1 did; small thumbnails stay as screenshots. Each site's colors live in one file, `palette.js`, read from the site's own CSS and image files; `palette.html` shows where each color comes from. The candidates and site pages all take their colors from `palette.js` by position: color 1 is the site's color (text, big numbers, marks and fills) and color 2 is text on a color-1 fill, so changing a palette there updates every page. Every page also has a Palette button (bottom right) for trying a different order in place; the trial order is kept in the browser, and Export gives the text to send back so it can be made the published order.

On the focus pages, each part that uses a site color (big year, buttons, marks, glow and so on) also picks its color by palette number, separately for each site. The Palette panel's "Parts on this page" (for the site on screen) and the "Page parts" block under each site on palette.html let you change that number per part; the page reloads on the same site and scroll position. Trial choices are kept in the browser and included in Export. The defaults are the `PARTS` list in `palette.js`, with each page's `sites` holding any site's own published choices. Every part can also take N, its neutral: the page's own gray, white or black. AN, the site page paired with AG, has a part for nearly every piece of text, and its year, glow, year line and buttons start from AG's choices for each site. AG's Read more opens AN unless another design is picked in its test bar. Each site's `top` list in `sitepages/data.js` holds the windows at the top of AN, with the site's song and links beside them; holiday logos whose window is at the top load into it there. AN doesn't repeat a window from its top fan inside the story: those sections get See it at the top instead. The windows the holiday logos load into stay in their sections.

`content.html` lists every piece of each site page (sections, paragraphs, pictures, windows, buttons, lists, logos) to cut or rewrite. Changes are kept in the browser and applied by `sitepages/content.js`, right after `data.js`, so every site-page design shows them; Export gives the text to send back so they can be published in `data.js`. Yellow notes are suggested cuts, not applied until chosen.

The browser windows have working back and forward buttons (`browsernav.js`), using the page's own history since the old sites load from another domain.

On phones (under 760px wide, or under 480px tall when held sideways), start pages K, AG and AE switch to their own phone layouts, and the site pages stack into one column. The test bar and the Palette button move to the bottom of the screen. On touch screens a live window takes touches only after Tap to use this site, so swiping over it scrolls the page; Done hands the page back. AE also moves between sites with a swipe across the row.

The focus for now is start pages K, AG and AE and site pages AI, AK and AN; `index.html` lists them first.

On K, AG and AE the browser tab's icon is the selected site's own favicon (`favicon.js`).

Every main page has a test bar for choosing which site-page design Read more opens. The choice is remembered in the browser.

The candidates link to the restored sites on hackahobo.info (`/projects/sites/...`), so those links work from the test site without copying the sites here.

Every push to `main` deploys the repo to GitHub Pages through `.github/workflows/pages.yml`.

To view locally, run `python3 -m http.server` in the repo root and open http://localhost:8000.

## Publishing

Splash v1 is AG (the main page) with AN (the site pages). The published AG is `candidates/AG-fanned-windows-main-page/AG.html`, a plain JavaScript rewrite of the design tool's export (`R8-AG.dc.html`, which needs React and the tool's runtime); the build has no React. `python3 tools/release.py v1` builds it into
`dist/splash-v1/` (and `dist/splash-v1.zip`, not committed) without any editing tools: code between `@edit` and
`@end` marker lines is dropped, and lines between `@release` and `@end` are kept uncommented. The build uses
v0.1's page names (index.html, awesomestuff.html, …) and includes the museum logos and icons it needs, so it can
replace v0.1 at projects/splash/. The editing tools stay in this repo for the next designs: change `MAIN` and
`SITE_PAGE` in `tools/release.py` to publish a different pairing.
