# AGENTS.md — Open Conduct (openconduct.org)

> **This is the single source of truth for all AI coding agents working in this repository.**
> All tool-specific files (`.cursorrules`, `CLAUDE.md`, `.windsurfrules`, `.clinerules`, etc.) point here.

---

## 0. Development Process (CRITICAL)

> **Before making ANY change, follow this process.**

### Diagnostic Intake

Before proposing any change, read:

1. **This file** (`AGENTS.md`) — if you haven't already read it in full this session.
2. **`PITFALLS.md`** — 46 numbered anti-patterns. Scan the category relevant to your task.
3. **The relevant HTML file(s)** — understand the current structure before modifying.
4. **The source-of-truth order** (§2) — if the change involves product mechanics or copy.
5. **The other repo** (`conduct-is/`) — if the change could affect shared CSS, footer text, metadata patterns, or product language.
6. **The versioned public record** (§6) — if the change touches the `downloads/` directory.

### Impact Mapping

Before writing code, identify every surface affected by the change:

- Does this change affect **both sites**? (CSS, footer, security.txt, metadata patterns)
- Does this change affect **product language**? (Check the working specification, decision register, all standard pages, conduct.is interface examples, common questions, protections, `llms.txt`, `llms-full.txt`, structured data)
- Does this change affect **the versioned archive**? (Controlling documents, MANIFEST, ZIP, checksum)
- Does this change affect **metadata**? (Title → og:title → twitter:title → ld+json name → sitemap)
- Does this change affect **accessibility**? (Skip links, heading hierarchy, focus indicators, ARIA)
- Does this change affect **infrastructure**? (_headers, _redirects, robots.txt, sitemap.xml)

If the answer to any of these is yes, map out the full set of coordinated changes before starting.

### Review Gate (for broad changes only)

For changes that affect more than one file or involve product language:

1. **Completeness check** — What is missing? What scenarios has the plan not considered?
2. **Standards check** — Consult https://specification.website/ for relevant categories (Foundations, SEO, Accessibility, Security, Agent Readiness, Performance).
3. **Voice check** — Read every changed sentence aloud. Does it sound like Brent? Does it pass the say-it-out-loud test?
4. **Protection check** — Did the change accidentally imply the system is operational, weaken a protection, or create product drift?

Present the plan for approval before coding. Do NOT write implementation code until the plan clears this gate.

### Done Criteria (MANDATORY)

A task is only complete when ALL of the following are true:

1. The QA audit skill (`.agents/skills/qa-audit/SKILL.md`) has been executed and passes.
2. No hardcoded color values exist outside `:root` definitions.
3. Both repos' CSS files remain identical (if CSS was changed).
4. Every changed page renders correctly at 375px, 768px, 1024px, and 1440px.
5. Metadata is consistent (title ↔ og:title ↔ twitter:title ↔ ld+json).
6. No ghost files (scratch scripts, .bak, temp files) remain in the repo.
7. `git diff` shows only changes related to the user's request — no cosmetic churn.
8. If the versioned archive was modified: manifest regenerated, ZIP rebuilt, checksum updated.

---

## 1. Project Overview

**Name:** `openconduct`
**Host:** `https://openconduct.org`
**Purpose:** The canonical standards, research, governance, and contribution site for the Conduct proposal.

This site serves researchers, policy experts, lawyers, labor and privacy advocates, designers, engineers, potential business participants, and people who want to challenge the proposal. It should feel like a minimal, carefully designed specification or documentation site — more rigorous and dense than conduct.is, but still using plain language, strong hierarchy, and useful examples.

**Audience:** Researchers, policy experts, lawyers, labor and privacy advocates, designers, engineers, potential business participants, and challengers.

**Key facts:**
- Zero-dependency static site. No framework, no package manager, no build command, no database, no application server.
- The repository root is the Cloudflare Pages output.
- Cloudflare Pages settings: Framework preset: None. Build command: blank. Build output directory: `.`. Repository root: blank.
- Version 0.5 is the current proposal. Version 0.4 is historical and superseded.

Never introduce a framework, package manager, compilation step, component system, or hosting dependency without discussing the need and tradeoffs first.

---

## 2. The Coordinated System

Conduct.is and OpenConduct.org are separate repositories and separate Cloudflare Pages projects, but they function as one coordinated system.

| Site | Role | Tone |
|------|------|------|
| **conduct.is** (separate repo) | Public consumer-facing explanation | Bolder, darker, consumer-facing |
| **openconduct.org** (this repo) | Standards, research, governance, contributions | Warmer, editorial, documentation-like |

Both repositories contain their own copy of `assets/site.css`. A design change affecting both sites must be applied deliberately to both copies.

### Source-of-Truth Order

For changes to the proposal itself, consult in this order:

1. The v0.5 working specification (`downloads/open-conduct-v0.5-public-record/01-working-specification.md`)
2. Decision register (`02-decision-register.md`)
3. Open questions (`03-open-questions.md`)
4. The supporting architecture, product-contract, adversarial-audit, and research files
5. The v0.5 HTML standard pages (this site)
6. The public explanation on conduct.is

Do not silently change product mechanics in one page without checking every downstream surface. A material product change may require coordinated updates to the working specification, decision register, standard pages, conduct.is copy, interface examples, common questions, protections, status language, `llms.txt`, `llms-full.txt`, metadata, structured data, and the downloadable public archive and its hashes.

---

## 3. Directory Map

```
openconduct/
├── index.html                       ← Homepage content
├── library/index.html               ← Public-record library
├── contribute/index.html            ← Contribution form and guidance
├── protections/index.html           ← Protections and prohibited uses
├── status/index.html                ← Status and governance
├── netconductscore/index.html       ← Net Conduct Score
├── standard/
│   ├── 0.5/
│   │   ├── conduct-quotient/index.html     ← Current CQ standard
│   │   └── verified-conduct-index/index.html ← Current VCI standard
│   └── 0.4/
│       └── conduct-quotient/index.html     ← Historical v0.4 (noindex)
├── downloads/
│   ├── open-conduct-v0.5-public-record/    ← Versioned archive folder
│   ├── open-conduct-v0.5-public-record.zip ← Downloadable archive
│   └── open-conduct-v0.5-public-record.zip.sha256 ← Checksum
├── assets/site.css                  ← All visual styles and responsive layouts
├── 404.html                         ← Page-not-found screen
├── llms.txt                         ← Concise machine-readable summary
├── llms-full.txt                    ← Extended machine-readable summary
├── robots.txt                       ← Crawler rules
├── sitemap.xml                      ← Search engine sitemap
├── site.webmanifest                 ← Web app manifest
├── _headers                         ← Cloudflare security and cache headers
├── _redirects                       ← Cloudflare URL redirects
├── .well-known/security.txt         ← Security contact
├── og.png                           ← Open Graph social image
├── favicon.ico / favicon.svg        ← Favicons
├── apple-touch-icon.png             ← iOS icon
├── icon-192.png / icon-512.png      ← PWA icons
├── LICENSE.md                       ← Licensing overview
├── LICENSE-CODE                     ← Apache 2.0 full text
├── LICENSE-CONTENT                  ← CC BY 4.0 full text
├── NOTICE.md                        ← Attribution and rights
├── CONTRIBUTING.md                  ← Contribution terms
└── README.md                        ← Technical operation guide
```

---

## 4. The Central Idea

Businesses already know how much customers spend, how often they return, and which loyalty tier they have reached. Conduct asks whether businesses could also recognize the history people build through their conduct as customers. The proposal has three parts:

**Net Conduct Score (NCS)** records an eligible employee's human experience of working with a customer. The protected question: "Based only on how this customer interacted with you and others, would you want to serve them again?" Four directional responses (+10, +3, −3, −10) plus a safe abstention path. NCS must come from an authenticated human who directly participated. It cannot be inferred, generated, or submitted by AI.

**Verified Conduct Index (VCI)** uses approved records to evaluate only disclosed, eligible responsibilities within the customer's control. Spending, loyalty status, tips, complaints, refunds, accessibility requests, and business-caused failures do not count simply because a company recorded them.

**Conduct Quotient (CQ)** combines independently qualifying NCS and VCI inputs into one private score for one named context. Scale: 1.00–5.00, always two decimal places. Appears only when both inputs and surrounding evidence qualify. Uses an honest non-score status when evidence is insufficient.

---

## 5. Product-Language Guardrails

These are the most common failure modes. Every edit should be checked against this list.

| Rule | Why |
|------|-----|
| CQ is **one score** from two separately governed inputs. | Do not describe CQ as "two primary metrics." |
| The customer-facing experience leads with CQ. | NCS and VCI remain available as explanations beneath. |
| Do not show a bare NCS number as a consumer score. | NCS is a protected worker input, not a public metric. |
| Do not show VCI as a completed-task counter. | "32 of 34 completed" created confusion and anxiety. |
| Do not use "verified follow-through." | Retired language. |
| The receiving business applies the benefit. | The customer does not "apply" it. |
| Overall CQ is a future research concept. | Not an initial live feature. |
| Non-score states are legitimate outcomes. | Not low ratings. |
| Do not write "Choose a proof to share." | Consumers choose a business and benefit they may qualify for. |
| "Good customer" can sound like high-spending customer. | Say "customer conduct" or explain the behavior directly. |
| The system is a proposal. Nothing is operational. | Do not let aspirational language read like an available product. |

### Current Maturity — Always Preserve This

- No one can receive a Conduct Quotient
- No official Net Conduct Score is being issued
- No customer records or worker responses are being collected
- No operating Conduct network exists
- No certified implementation exists
- No benefit program exists
- No business partnership exists
- No Open Conduct Alliance operates
- No network-report product is being sold
- No real-person pilot has been authorized

### Companies As Examples Only

Uber, Airbnb, Resy, Toast, Delta, United, Marriott, Starbucks, Help Scout, NICE, Talon.One, and similar businesses are illustrative possibilities only. Never imply a partnership, endorsement, active discussion, or commitment unless Brent supplies evidence.

Talon.One is one example of a possible incentive-orchestration partner category. It is not part of the standard, is not required infrastructure, and has no current partnership with or endorsement of Conduct.

---

## 6. The Versioned Public Record

The `downloads/` directory contains a versioned public archive:

```
downloads/
├── open-conduct-v0.5-public-record/          ← Folder with all files
├── open-conduct-v0.5-public-record.zip       ← Downloadable ZIP
└── open-conduct-v0.5-public-record.zip.sha256 ← Checksum
```

The folder contains its own licensing files, README, SHA-256 manifest, specification, decisions, open questions, architecture records, adversarial audit, product contract, and research Suites A–L.

### Do not casually edit this versioned record

If an authorized change is made inside the public-record folder:

1. Update the appropriate controlling documents
2. Update the package README if needed
3. Regenerate `MANIFEST.sha256`
4. Rebuild the ZIP with the top-level public-record folder preserved
5. Regenerate the ZIP checksum
6. Verify every manifest entry
7. Test the ZIP for corruption
8. Preserve version history — do not present a rewritten historical record as unchanged

For a future substantive standard release, prefer a new versioned archive rather than silently changing v0.5.

---

## 7. Version 0.4 — Historical Record

Version 0.4 is preserved as a historical record at `standard/0.4/conduct-quotient/`. It must:

- Remain clearly labeled as superseded
- Not appear current in any navigation or copy
- Stay excluded from search indexing (`noindex`)
- Link clearly to the current v0.5 standard

---

## 8. The Contribution Form

The form at `contribute/index.html` is prepared for Formspree but **intentionally disabled**. It has no action endpoint and should collect nothing until Brent supplies the project-specific Formspree endpoint.

### Before enabling the form

1. Add the correct Formspree endpoint
2. Verify Formspree settings
3. Test delivery with synthetic information
4. Confirm retention and deletion behavior
5. Confirm spam controls
6. Review the privacy notice against the actual configuration
7. Verify the monitored mailbox and forwarding aliases
8. Keep attachments disabled
9. Keep the warnings against customer records, worker responses, identity documents, secrets, confidential information, and information about another person

---

## 9. Editorial Voice

> **For any copy change on openconduct.org, read [EDITORIAL.md](EDITORIAL.md) first.**
> It carries the standards-site rules: who is reading and why, precision over warmth, headline limits, banned constructions, role-noun point of view, status language, citation requirements, and worked before-and-after examples. It wins on this site if it disagrees with the summary below.
> conduct.is has its own editorial file with deliberately different rules. Do not cross-apply them.

The sites inherit Brent's writing voice. Write as if explaining the idea aloud to an intelligent colleague.

**The voice is:** Direct. Thoughtful. Conversational. Precise. Curious. Confident without being prescriptive. Smart without sounding academic or smug. Human, never hype-driven.

**Use concrete actors and plain verbs:**
- "The employee answers one question."
- "The customer chooses whether to ask."
- "The business receives an eligibility result."

**Define an acronym before using it.** Do not introduce NCS, VCI, CQ, or OCA without first naming it.

**Subheads must clearly say what the section contains.** Avoid abstract flourishes like "The records come together."

**Every sentence should pass the say-it-out-loud test.**

### Avoid

- "It's not X, it's Y" constructions
- "No longer X, now Y" constructions
- Marketing-deck language and LinkedIn-hook language
- Abstract claims of transformation
- Announcing what the reader should think
- Repetitive thesis restatements
- Stacked short sentences for artificial drama
- Three parallel constructions in a row
- Vague nouns such as "the thing" or "signal" as standalone
- Em dashes used as habitual punctuation
- Claims that something is "moving fast" without evidence
- AI-style phrases: "at its core," "in today's landscape," "this represents," "this underscores"
- Grading an example before presenting it ("the perfect example")

**One idea should appear once, in its strongest position.** Do not repeat the same diagnostic in the opening, a list, and the conclusion.

---

## 10. Visual System

Both sites use geometry rather than photography.

### Core Primitives

| Primitive | Meaning |
|-----------|---------|
| **Indigo circle** | Protected human experience and NCS |
| **Coral square** | Approved business records and VCI |
| **C-shaped frame** | Context and the Conduct system |
| **Solid horizontal bar** | A limited approved positive proof or eligibility result |
| **Lines and grids** | Relationships, structure, and movement |

**Open Conduct** (this site) shows the components in an open relationship: the circle sits outside the C-shaped frame, while the square sits inside it.

### Palette

| Token | Value | Use |
|-------|-------|-----|
| `--midnight` | `#090c18` | Primary dark background |
| `--night-surface` | `#121725` | Elevated dark surface |
| `--paper` | `#f4f2ed` | Light background |
| `--ink` | `#171a1d` | Primary text on light |
| `--indigo` | `#4b5ce8` | Primary brand, interactive |
| `--bright-indigo` | `#7585ff` | Accent on dark backgrounds |
| `--coral` | `#d96543` | VCI, alerts, warmth |
| `--soft-coral` | `#ff9a7c` | Accent on dark backgrounds |

### Typography

- **Avenir Next** with system sans-serif fallbacks for body text
- **Georgia** for editorial headlines on this site
- **SFMono** or equivalent for technical labels

### Do Not

- Introduce photography
- Introduce The New New's electric teal line
- Make the sites visually resemble The New New
- Add gradients, glossy SaaS cards, excessive shadows, or generic startup illustrations
- Replace useful interface examples with vague decorative diagrams
- Redesign the logo system without discussing the conceptual relationship first

---

## 11. Protected Files — Do Not Modify Without Approval

| File | Reason |
|------|--------|
| `_headers` | Cloudflare infrastructure, CSP |
| `_redirects` | URL routing |
| `robots.txt` | Crawler policy |
| `sitemap.xml` | Search engine indexing |
| `.well-known/security.txt` | Security contact |
| `LICENSE.md`, `LICENSE-CODE`, `LICENSE-CONTENT` | Legal |
| `NOTICE.md` | Attribution |
| `CONTRIBUTING.md` | Contribution terms |
| `og.png` | Social sharing artwork |
| `favicon.ico`, `favicon.svg` | Brand |
| `site.webmanifest` | PWA configuration |
| `downloads/` | Versioned public record — see §6 |

Read `LICENSE.md` before editing licensing language. The repository uses CC BY 4.0 for specification and writing, Apache 2.0 for code, and reserved rights for brand assets.

---

## 12. Non-Negotiable Protections

The proposal must retain these boundaries in all site content:

- No public customer profiles or searchable rankings
- No universal moral or social score
- No automatic cross-company portability
- No hidden negative result
- No penalty for declining to participate, declining to share, or failing to qualify
- No reduction in ordinary service, rights, dignity, complaints, refunds, accommodations, safety, or baseline access
- No use in employment, housing, credit, insurance, healthcare, education, government, policing, immigration, or essential services
- No punishment for complaints, refunds, accessibility requests, accommodations, protected activity, or asserting a right
- No central cross-company history warehouse
- No business access to raw worker responses or full customer history through ordinary proof
- No claim the proposal is fair, valid, legal, secure, production-ready, or operational until evidence supports it

---

## 13. Working Method

### For a small, isolated change

1. Inspect the relevant file and nearby patterns
2. Make the smallest coherent change
3. Test it
4. Report the outcome plainly

### For a broad change

1. Inspect both repositories and the controlling specification
2. Identify every surface affected
3. Explain the plan and product implications to Brent
4. Make coordinated changes
5. Run an adversarial review
6. Review the sites as a first-time visitor who is skimming
7. Review every changed sentence for Brent's voice
8. Test desktop, tablet, and mobile layouts
9. Check links, metadata, accessibility, and version consistency
10. Present the changes in one useful review batch

### Copy Review Checklist

- Does every acronym get defined before use?
- Is the actor clear? Is the audience clear?
- Would Brent say this aloud?
- Does the sentence require hidden context?
- Is the wording concrete?
- Does the section advance the story?
- Does a skimming reader understand the point?
- Are we repeating something already established?
- Did marketing language replace a plain explanation?
- Did we accidentally imply the system is operational?
- Did we create product drift from one CQ into two headline scores?
- Did we preserve protections while simplifying?

### Interface Review Checklist

- Can a new visitor understand the screen without surrounding copy?
- Does the customer know what the score represents?
- Is a future overall CQ clearly labeled?
- Is the employee question aligned with NCS?
- Is abstention safe and visible?
- Does the business receive only the limited result?
- Is the correct actor applying the benefit?
- Are non-score states understandable and non-punitive?
- Is the interface illustrative rather than deceptively operational?

### Test at These Viewports

- 375px mobile
- 768px tablet
- 1024px tablet or small laptop
- 1440px desktop

Always inspect the actual rendered page. Code correctness alone is not enough.

---

## 14. Common Pitfalls

See **[PITFALLS.md](PITFALLS.md)** — 46 numbered anti-patterns organized by category:

- **Infrastructure** (§1–6): Headers, redirects, robots, sitemap, domains, no-build constraint
- **CSS & Design System** (§7–12): Design tokens, fonts, visual language, CSS sync
- **HTML & Accessibility** (§13–18): Alt text, skip links, canonical URLs, ARIA, keyboard nav
- **Content & Product Language** (§19–28): Operational claims, score presentation, partnerships, editorial voice
- **SEO & Metadata** (§29–32): Structured data, OG sync, sitemap, dates
- **Versioned Public Record** (§33–35): Archive integrity, v0.4 historical handling
- **Contribution Form** (§36–37): Disabled form, warning preservation
- **Cross-Site Coordination** (§38–40): Product mechanics, footer, security.txt
- **Agent Discipline** (§41–45): Cosmetic churn, ghost files, self-directed work, diagnostic intake
- **External Standards** (§46): specification.website reference

Read it before writing any code. These anti-patterns have all caused real problems.

---

## 15. Who You Are Working With

Brent Turner created and currently stewards Open Conduct from Massachusetts. Brent is not a developer.

**Brent generally prefers:**
- Working through substantial batches before stopping for review
- Seeing the outcome and its implications, not a log of technical mechanics
- Plans for changes that could produce ripple effects
- Direct, evidence-based feedback rather than automatic agreement
- Adversarial analysis when an idea, interface, or claim could create harm
- Simple, maintainable solutions over unnecessary infrastructure
- Clean files that can be edited directly without a build system

---

## 16. Privacy and Contacts

- No accounts and no operational customer data exist
- No advertising or third-party behavioral analytics
- Cloudflare Web Analytics is the only planned analytics service
- `contact@openconduct.org` — planned project mailbox
- `privacy@openconduct.org` — privacy forwarding alias
- `security@openconduct.org` — security forwarding alias

Do not describe the mailbox as a live support desk or promise response times.

---

## See Also

- [EDITORIAL.md](EDITORIAL.md) — Copy rules for openconduct.org: audience, precision, status language, citations
- [PITFALLS.md](PITFALLS.md) — 46 specific anti-patterns organized by category
- [.agents/skills/qa-audit/SKILL.md](.agents/skills/qa-audit/SKILL.md) — Mandatory QA verification skill (7-step audit)
- [README.md](README.md) — Technical operation guide
- https://specification.website/ — External standards reference for HTML, SEO, accessibility, security, agent readiness

---

*Last updated: 2026-08-22*
