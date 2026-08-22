# OpenConduct.org

This folder is the complete static website for **openconduct.org**.

There is no framework, package manager, or build process. The files in this folder are the files Cloudflare Pages publishes.

## Where to edit

- `index.html` — homepage content
- `components/index.html` — components index (NCS, VCI, CQ)
- `library/index.html` — public-record library (Research)
- `contribute/index.html` — contribution form and guidance
- `protections/index.html` — protections and prohibited uses
- `status/index.html` — status and governance
- `case-for-conduct/index.html` — the case for Open Conduct
- `regulatory-posture/index.html` — regulatory posture
- `netconductscore/index.html` — Net Conduct Score
- `verifiedconductindex/index.html` — Verified Conduct Index
- `standard/0.5/verified-conduct-index/index.html` — Verified Conduct Index
- `standard/0.5/conduct-quotient/index.html` — current Conduct Quotient standard
- `standard/0.4/conduct-quotient/index.html` — historical version 0.4
- `assets/site.css` — all visual styles and responsive layouts
- `downloads/` — versioned public-record downloads
- `404.html` — page-not-found screen

Primary navigation: Overview · Components · Protections · Research · Contribute · Read the standard

The remaining files provide icons, social-sharing artwork, search metadata, redirects, security headers, and machine-readable descriptions.

## Preview locally

Double-click `index.html`. Internal links and visual assets use relative paths so the site can be reviewed directly from this folder.

## Publish with Cloudflare Pages

Connect the GitHub repository containing this folder to Cloudflare Pages.

- Framework preset: None
- Build command: leave blank
- Build output directory: `.`
- Repository root: leave blank

Pushing changes to the GitHub repository updates the site through Cloudflare Pages.

## Licensing

The repository uses CC BY 4.0 for the specification, research, original writing,
and explanatory material; Apache 2.0 for website code; and reserved rights for
project names and brand assets. See [LICENSE.md](LICENSE.md) for the exact scope.

## Contribution form

The form is intentionally disabled until a project-specific Formspree endpoint is configured. An AI assistant can update the form directly in `contribute/index.html` after the Formspree form is created. The privacy notice must be reviewed against the actual Formspree configuration before submissions open.

## Editing safely

An AI assistant can edit these files directly. Ask it to preserve:

- the existing page paths and version labels;
- relative links between pages, assets, and downloads;
- canonical URLs beginning with `https://openconduct.org`;
- the visible distinction between the current and historical standards;
- accessibility structure and keyboard behavior;
- `_headers`, `_redirects`, `robots.txt`, `sitemap.xml`, and `.well-known/security.txt`.

No files from the older shared development project need to be copied here after this repository becomes the source of truth.

