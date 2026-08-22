# PITFALLS.md — Open Conduct (openconduct.org)

> **Things you must NEVER do in this codebase.**
> These anti-patterns have all caused confusion, drift, or harm. Do NOT introduce them.
> For agent behavioral rules, see [AGENTS.md](AGENTS.md).

---

## Infrastructure

1. **DO NOT modify `_headers` without understanding CSP.** The Content-Security-Policy header controls what resources the browser allows. A broken CSP can silently prevent fonts, images, or scripts from loading. Always test changes with `curl -I https://openconduct.org/` after deploy.

2. **DO NOT modify `_redirects` without checking both repos.** Conduct.is redirects `/open` to `openconduct.org`. OpenConduct redirects `/open` internally. A redirect change on one site can break navigation from the other.

3. **DO NOT modify `robots.txt` or `sitemap.xml` without verifying every URL.** A sitemap URL that doesn't match a real page will degrade search indexing. A robots rule that blocks the wrong path can hide content.

4. **DO NOT change domain URLs** (`conduct.is`, `openconduct.org`, `brentturner.is`, `thenewnew.is`) without explicit approval. These appear in metadata, structured data, canonical links, OG tags, footer copy, security.txt, and the public record.

5. **DO NOT remove or rename favicon, OG, or icon files** without updating every HTML `<head>` that references them. These paths are hardcoded in every page.

6. **DO NOT add a build step, framework, bundler, or package manager.** These sites are deliberately static. The repository root is the Cloudflare Pages output — what you see is what gets served.

---

## CSS & Design System

7. **DO NOT hardcode hex, rgb, or rgba color values.** Always use CSS custom properties from `:root`. If a color is needed that doesn't have a token, add one to `:root` first, then reference it.

8. **DO NOT introduce new font families** without discussing the design implications. The current stack is Avenir Next (body), Georgia (editorial headlines), and SFMono (labels).

9. **DO NOT add photography, gradients, glossy SaaS card styles, or generic startup illustrations.** Both sites use geometry. The visual language is circle (indigo), square (coral), C-shaped frame, solid horizontal bar, and lines/grids.

10. **DO NOT make visual changes to one CSS file without applying them to the other.** Both repos share an identical `assets/site.css`. A change to one must be deliberately copied to the other. After every CSS change, verify with `diff`.

11. **DO NOT add `!important` unless there is no alternative.** Document why in a CSS comment if used.

12. **DO NOT use `transition: all`.** Scope transitions to specific properties.

---

## HTML & Accessibility

13. **DO NOT omit `alt` attributes on images.** Every `<img>` must have a meaningful `alt` or `alt=""` if decorative (with `aria-hidden="true"`).

14. **DO NOT use `<div onclick>` for interactive elements.** Use native `<a>` or `<button>` elements for keyboard accessibility.

15. **DO NOT break skip-link targets.** The OpenConduct site uses `id="open-main"` for editorial pages and `id="spec-main"` for specification pages. If you change a skip-link target, update the corresponding `<a class="skip-link" href="#...">`.

16. **DO NOT add a `<link rel="canonical">` to error pages.** 404 pages should never declare themselves as canonical URLs.

17. **DO NOT leave orphan `aria-*` attributes.** If an element changes state (e.g., a `<details>` opens), ARIA attributes must reflect the new state.

18. **DO NOT use `target="_blank"` on external links without `rel="noopener noreferrer"`.** This prevents reverse tabnapping.

---

## Content & Product Language

19. **DO NOT let aspirational language read like an available product.** The system is a proposal. No one can receive a Conduct Quotient. No official Net Conduct Score is being issued. No customer data is being collected. Every page must preserve this context.

20. **DO NOT present CQ as two competing headline metrics.** CQ is one score (1.00–5.00) from two separately governed inputs (NCS and VCI). If copy drifts toward "two primary metrics," it is wrong.

21. **DO NOT show a bare NCS number as a consumer score.** NCS is a protected worker input, not a consumer-facing metric. The customer sees CQ.

22. **DO NOT use "verified follow-through."** This language was retired. Say "Verified Conduct Index" or describe the mechanism.

23. **DO NOT write "Choose a proof to share."** Consumers choose a business and benefit they may qualify for. The consumer does not interact directly with "proofs."

24. **DO NOT describe the receiving business as receiving the score.** The business receives a limited eligibility result. It does not see the customer's CQ, NCS, or full history.

25. **DO NOT imply partnerships, endorsements, or active business discussions** unless Brent supplies evidence. Uber, Airbnb, Resy, Toast, Delta, United, Marriott, Starbucks, Help Scout, NICE, Talon.One, and similar companies are illustrative examples only.

26. **DO NOT use an acronym before defining it.** NCS, VCI, CQ, and OCA must be introduced by their full names before abbreviation.

27. **DO NOT repeat the same idea in the opening, a list, and the conclusion.** One idea should appear once, in its strongest position.

28. **DO NOT use AI-style filler phrases.** Banned: "at its core," "in today's landscape," "this represents," "this underscores," "the perfect example," "here is why this matters."

---

## SEO & Metadata

29. **DO NOT change structured data (`ld+json`) without checking every page.** The schema graph includes `@id` references that link WebSite, Person, and WebPage nodes. A broken `@id` produces orphan entities in search results.

30. **DO NOT let OG or Twitter meta tags drift from the page title and description *by accident*.** If you change a `<title>`, update `og:title`, `twitter:title`, and the `name` in the structured data to match. Purpose-written share copy is the one permitted exception: an `og:description` or `twitter:description` may deliberately differ from the meta description when it is written for a share card rather than for a search result. Where that is intentional, leave it alone. The prohibition is on drift, not on deliberate divergence.

31. **DO NOT add a page without updating `sitemap.xml`.** Every public, indexable page must appear in the sitemap with an accurate `<lastmod>` date.

32. **DO NOT set `<lastmod>` to a future date.** Search engines treat future dates as errors.

---

## Versioned Public Record

33. **DO NOT casually edit files inside `downloads/open-conduct-v0.5-public-record/`.** This is a versioned archive with checksums. If an authorized change is made: update the controlling documents, regenerate `MANIFEST.sha256`, rebuild the ZIP, regenerate the ZIP checksum, verify every manifest entry, test the ZIP for corruption.

34. **DO NOT silently replace the v0.5 archive with different content.** For a substantive change, prefer a new versioned archive (v0.6, etc.) rather than rewriting history.

35. **DO NOT make v0.4 appear current.** The v0.4 specification is preserved at `standard/0.4/conduct-quotient/` as a historical record. It must remain clearly labeled as superseded, excluded from search indexing (`noindex`), and linked to the current v0.5 standard.

---

## Contribution Form

36. **DO NOT enable the contribution form** (`contribute/index.html`) without following the full checklist in AGENTS.md §8. The form is intentionally disabled — it has no Formspree endpoint and should collect nothing until Brent supplies the configuration.

37. **DO NOT remove the form's warnings** against submitting customer records, worker responses, identity documents, secrets, confidential information, or information about another person.

---

## Cross-Site Coordination

38. **DO NOT silently change product mechanics on one site without checking the other.** A material change may require coordinated updates to: the working specification, decision register, standard pages, conduct.is copy, interface examples, common questions, protections, status language, `llms.txt`, `llms-full.txt`, metadata, and the downloadable public record.

39. **DO NOT change the footer copyright year on one site without changing the other.** Both sites share identical footer text.

40. **DO NOT change `security.txt` on one site without checking the other.** Both files share the same contacts and policy URL.

---

## Agent Discipline

41. **DO NOT perform cosmetic churn.** Do not reformat, rename variables, reorder properties, adjust whitespace, or "improve" code in files you were not asked to change. Keep `git diff` focused on the user's request.

42. **DO NOT leave ghost files.** Delete any scratch scripts, `.bak` files, debug logs, or temporary test files before committing.

43. **DO NOT start self-directed work.** Do not refactor, audit, modernize, or "clean up" code unless the user explicitly asked for it. Complete the user's request first; propose improvements after.

44. **DO NOT treat this as a codebase to "fix."** These sites are carefully designed static HTML. They are not broken. They are not behind. Do not introduce complexity to solve problems that do not exist.

45. **DO NOT skip the diagnostic intake.** Before any change, read the relevant files and check the specification source-of-truth order. See AGENTS.md §13 "Development Process."

---

## External Standards

46. **DO NOT ignore specification.website best practices.** Before making changes to HTML structure, metadata, security headers, accessibility, SEO, or agent-readiness features, consult https://specification.website/ for current standards. Use it as a reference, not a checklist to implement blindly — apply what is relevant to static, no-build sites.

---

*Last updated: 2026-08-22*
