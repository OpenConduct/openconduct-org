---
name: qa-audit
description: Executes site-wide verification for static Conduct/OpenConduct sites — HTML validity, CSS token compliance, accessibility, responsive layout, metadata consistency, link integrity, and specification.website standards. MUST be invoked by agents after making HTML, CSS, or content changes.
---

# QA Audit Skill — Conduct Sites

> **This skill executes verification across HTML validity, design-system compliance, accessibility, responsive layout, metadata, links, and external standards for static Conduct sites.**
> Adapted for zero-dependency, no-build static sites deployed to Cloudflare Pages.

---

## 1. When to Run

- **Mandatory**: After ANY HTML, CSS, content, or metadata change — before declaring a task complete.
- **Manual Trigger**: When the user requests a QA pass, audit, or review.
- **Cross-Site**: When a change to one repo (conduct-is or openconduct) may affect the other.

---

## 2. Audit Execution Protocol

Execute these 7 verification steps in order. Use browser tools, shell commands, or both.

### Step 1: CSS Token Compliance

Scan the CSS file for hardcoded color values that bypass design tokens.

```bash
# Should return ONLY lines from :root variable definitions
grep -n '#[0-9a-fA-F]\{3,8\}' assets/site.css | grep -v 'var(--' | grep -v '^\s*--'
```

**Verify**:
- No hardcoded hex values outside `:root` variable definitions.
- No raw `rgba()` values that should use a token.
- The two stylesheets are **deliberately different** and must not be forced to match. Check only that design tokens are used consistently within each file. See AGENTS.md §2.

---

### Step 2: HTML Structure & Validity

For every changed HTML file:

```bash
# Check for common validity issues
grep -n 'target="_blank"' *.html */index.html | grep -v 'noopener'
grep -n '<img' *.html */index.html | grep -v 'alt='
grep -rn 'canonical.*404' *.html
```

**Verify**:
- Every `target="_blank"` link includes `rel="noopener noreferrer"`.
- Every `<img>` has an `alt` attribute.
- No 404 page has a `<link rel="canonical">`.
- The `<dl>` elements contain valid `<dt>`/`<dd>` pairs (no `<dd>` without a preceding `<dt>`).
- Every page has exactly one `<h1>`.
- The document starts with `<!DOCTYPE html>` and `<html lang="en">`.

---

### Step 3: Skip-Link & Accessibility Basics

**Verify**:
- Every page with a skip-link has a matching `id` on the target element.
- Conduct-is pages use `id="conduct-main"` consistently.
- OpenConduct editorial pages use `id="open-main"`, spec pages use `id="spec-main"`.
- `:focus-visible` styles are defined and produce a visible outline.
- Interactive elements (links, buttons) are keyboard-reachable via native HTML.
- Decorative elements use `aria-hidden="true"`.

---

### Step 4: Responsive Layout Check

Navigate to each changed page and verify at these viewports:

| Viewport | Width | Key checks |
|----------|-------|------------|
| **Mobile** | 375px | No horizontal overflow, touch targets ≥ 48px, readable text |
| **Tablet** | 768px | Grid layouts collapse correctly, navigation accessible |
| **Small laptop** | 1024px | Content fills appropriately, no orphan columns |
| **Desktop** | 1440px | Max-width constraints respected, no stretched elements |

**Verify**:
- No horizontal scrollbar at any viewport.
- No text truncation or overlap.
- Navigation is accessible at every viewport (desktop nav or mobile nav).
- Footer stacks cleanly on mobile.

---

### Step 5: Metadata & Structured Data Consistency

For every changed page:

**Verify**:
- `<title>` matches `og:title` and `twitter:title`.
- `<meta name="description">` matches `og:description` and `twitter:description`.
- `<link rel="canonical">` matches `og:url`.
- Structured data (`ld+json`) `name` and `description` match the `<title>` and `<meta description>`.
- `dateModified` in structured data reflects the actual modification date.
- The page appears in `sitemap.xml` with a current `<lastmod>` date (unless `noindex`).

---

### Step 6: Link & Reference Integrity

```bash
# Check for broken internal links
grep -roh 'href="[^"]*"' *.html */index.html | sort -u | grep -v 'http' | grep -v '#' | grep -v 'mailto'
```

**Verify**:
- Every internal `href` points to a file or directory that exists.
- Every cross-site link (conduct.is ↔ openconduct.org) uses the correct domain.
- `llms.txt` references match the current site structure.
- `sitemap.xml` URLs match existing pages.
- `robots.txt` Sitemap directive points to the correct URL.

---

### Step 7: Specification.website Standards Spot-Check

Consult https://specification.website/ for the following categories relevant to static sites:

| Category | Key checks |
|----------|------------|
| **Foundations** | DOCTYPE, charset, viewport, lang attribute, title, meta description |
| **SEO** | Canonical, OG/Twitter tags, structured data, sitemap, robots.txt |
| **Accessibility** | Skip link, heading hierarchy, focus indicators, color contrast, ARIA |
| **Security** | HTTPS, security headers (CSP, X-Frame-Options, Referrer-Policy), security.txt |
| **Well-Known URIs** | security.txt format and expiry, robots.txt, sitemap |
| **Agent Readiness** | llms.txt, Link headers for discoverability |
| **Performance** | Cache headers, image optimization, font loading |
| **Resilience** | Custom 404 page, redirect handling |

**Verify**: No regressions from the current state. If any specification.website item was already met, it must remain met after the change.

---

## 3. Cross-Site Sync Check (when applicable)

If the change could affect both sites:

```bash
# The stylesheets are deliberately different. Review a diff for accidental drift only, never to force a match.
diff conduct-is/assets/site.css openconduct/assets/site.css

# Footer text should match
grep 'footer-origin' conduct-is/index.html
grep 'footer-origin' openconduct/index.html

# Security.txt contacts should match
diff conduct-is/.well-known/security.txt openconduct/.well-known/security.txt

# Headers should be functionally equivalent
diff conduct-is/_headers openconduct/_headers
```

---

## 4. QA Audit Report Format

Output a structured summary:

| Category | Test | Status | Details |
|----------|------|--------|---------|
| CSS Tokens | No hardcoded colors outside :root | PASS / FAIL | |
| CSS Tokens | Each file uses its own tokens consistently | PASS / FAIL | |
| HTML Validity | Valid structure, no orphan elements | PASS / FAIL | |
| Skip Links | Targets exist and match | PASS / FAIL | |
| Accessibility | Focus visible, ARIA correct, keyboard nav | PASS / FAIL | |
| Mobile (375px) | No overflow, readable, touch targets | PASS / FAIL | |
| Tablet (768px) | Grids collapse, nav accessible | PASS / FAIL | |
| Desktop (1440px) | Max-width respected, no stretch | PASS / FAIL | |
| Metadata | Title/OG/Twitter/LD+JSON consistent | PASS / FAIL | |
| Sitemap | All pages listed, dates current | PASS / FAIL | |
| Links | No broken internal links | PASS / FAIL | |
| Standards | No regressions from specification.website | PASS / FAIL | |

If any item **FAILS**, detail the exact issue and fix it before declaring completion.

---

*Last updated: 2026-08-22*
