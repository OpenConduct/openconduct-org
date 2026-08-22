# Conduct Ecosystem — Adversarial Integrity Audit

## Audit status

| Field | Value |
|---|---|
| Status | In progress |
| Audit start | August 2, 2026 |
| Specification reviewed | Conduct Ecosystem System Specification, version 0.2-foundation |
| Specification SHA-256 | 5c9f74a79a9fbbcce403cd9df04b81e6318b4911bf3f79226e3befc4c12a740d |
| Decision register SHA-256 | 650d5652a57f356c5042f64155fe0ddc1e2187fa57a547c2e7b153f22ecdef56 |
| Open-questions SHA-256 | ed655a3adae3ed4c24de680bc1eeae8693f376f754e5c00c79ce6926a1122aab |
| Audit posture | Assume the system is unsafe, unwanted, unbuildable, legally exposed, commercially unattractive, emotionally corrosive, and gameable until evidence supports a narrower conclusion. |

This document evaluates the internal integrity of the proposal. It is not advocacy, legal advice, certification, or evidence that the system should launch.

## 1. Audit objective

The audit asks whether the specification describes one coherent system that could be simulated, built, governed, explained, funded, tested, corrected, and stopped without violating its own principles.

It will not treat the length or sophistication of the specification as evidence of correctness. Detailed safeguards can still depend on impossible data, contradictory incentives, nonexistent institutions, untestable concepts, or rights that fail when someone most needs them.

The primary output is a prioritized set of:

- Fatal challenges to the underlying premise
- Launch and simulation blockers
- Cross-section contradictions
- Missing dependencies and owners
- Unfounded legal, technical, mathematical, behavioral, and commercial assumptions
- Stakeholder harms and refusal reasons
- Regional incompatibilities
- Required redesigns
- Questions that can be resolved only through simulation, research, counsel, partner discovery, or pilot evidence
- Parts of the design that remain defensible after hostile review

## 2. Severity scale

| Severity | Meaning | Required response |
|---|---|---|
| FATAL | The proposed value depends on a premise that may be intrinsically harmful, unlawful, incoherent, or impossible to validate. | Change or abandon the affected premise before simulation or external promotion. |
| BLOCKER | The system cannot responsibly enter the next stage without resolution. | Resolve, narrow, or create an explicit gate and owner before the dependent work begins. |
| MAJOR | The issue could invalidate outcomes, create significant harm, prevent adoption, or force substantial redesign. | Address in architecture, policy, simulation, research, or pilot design before live effect. |
| MODERATE | The issue weakens clarity, efficiency, fairness, resilience, or credibility but does not independently prevent progress. | Correct during specification reconciliation or assigned downstream work. |
| MINOR | The issue is editorial, terminological, duplicative, or locally incomplete. | Correct in normal revision. |

Severity describes consequence, not likelihood. Each final finding should separately state likelihood, detectability, affected stakeholders, geographic reach, and evidence confidence.

## 3. Finding status

| Status | Meaning |
|---|---|
| CANDIDATE | A plausible issue identified for hostile testing; not yet sustained. |
| SUSTAINED | The audit found sufficient internal or external support for the issue. |
| PARTIALLY MITIGATED | The specification addresses part of the issue but leaves a material gap. |
| MITIGATED | The current specification adequately addresses the issue for its stated stage and scope. |
| REJECTED | The challenge does not survive review or rests on an inaccurate reading. |
| NEEDS EVIDENCE | The issue cannot be resolved from the specification and requires simulation, research, counsel, implementation, or pilot evidence. |

## 4. Non-negotiable invariants under test

The audit will treat the following as constitutional claims. If the mechanics cannot preserve them, the mechanics—not the invariant—must ordinarily change.

1. Conduct describes verified interactions, not human worth.
2. NCS human experience and VCI operational evidence remain distinct.
3. Participation and proof presentation are voluntary in practice.
4. Baseline service does not degrade because of participation, refusal, insufficient history, technical failure, challenge, withdrawal, or CQ result.
5. CQ creates additional approved benefits only.
6. The consumer controls contextual and minimized disclosure.
7. Consumers can understand, inspect, disagree, correct, appeal, recover, and withdraw.
8. Workers can participate without unpaid labor, surveillance, scripting, quotas, confrontation, or retaliation.
9. Disability, language, culture, directness, complaint, accommodation, wealth, spend, loyalty, digital fluency, and cost-to-serve do not become conduct proxies.
10. Context, confidence, recency, redemption, concentration, correction, and business-caused failures materially affect interpretation.
11. No participating company, platform, vendor, founder, or funder controls the standard or outcomes unilaterally.
12. The system does not depend on public profiles, raw-history pooling, hidden secondary use, or black-box character prediction.
13. Rights, remedy, security, audit, and responsible exit exist before consumer impact.
14. Expansion follows evidence and can stop even when partners or users want growth.
15. A low or absent CQ cannot become an informal adverse signal through inference, interface, pricing, service, or institutional practice.

The fifteenth invariant is intentionally stronger than a written upside-only policy. The audit must test whether a positive credential inevitably creates a negative shadow category for everyone without it.

## 5. Audit lenses

### 5.1 Human and stakeholder lenses

- Consumer with strong history
- Consumer with weak, disputed, sparse, or no history
- Consumer who refuses participation
- Consumer with disability, language difference, direct communication style, limited digital access, or need for assistance
- Consumer making a legitimate complaint or asserting a right
- Consumer traveling or transacting with family, caregivers, assistants, colleagues, or another payer
- Frontline employee
- Contractor, host, driver, franchise worker, and outsourced support agent
- Worker representative, union, works council, or labor regulator
- Small independent business
- Franchisee and multi-location operator
- Large enterprise executive
- Customer-experience, loyalty, operations, legal, privacy, security, finance, and HR leaders
- Product manager, designer, engineer, data scientist, support operator, auditor, and appeal reviewer
- Platform, issuer, synthesis provider, wallet, verifier, benefit fulfiller, and vendor
- Consumer, disability, civil-rights, privacy, competition, and labor advocate
- Researcher, journalist, regulator, plaintiff, attacker, fraud ring, and hostile partner
- Founder and future governing institution

### 5.2 System lenses

- Value proposition and demand
- Meaning and construct validity
- Measurement and statistics
- Product and interaction design
- Accessibility and cross-cultural interpretation
- Data provenance and evidence
- Identity, attribution, delegation, and recovery
- Privacy, correlation, security, and abuse
- Legal classification and regulatory perimeter
- Labor, power, and emotional consequences
- Competition and market structure
- Enterprise architecture and integration
- Governance, capture, due process, and institutional capacity
- Economics, incentives, insurance, remedy, and wind-down
- Pilot causality and success measurement
- Public narrative and claim substantiation

### 5.3 Geographic lenses

The audit will use jurisdictional archetypes rather than pretend one document can provide legal clearance everywhere:

- United States federal framework and Massachusetts launch posture
- High-regulation United States states and cities
- European Union and European Economic Area
- United Kingdom and Switzerland
- Canada
- Brazil and major Latin American privacy and consumer-protection environments
- India
- China
- Japan and South Korea
- Singapore and major Southeast Asian environments
- Australia and New Zealand
- Gulf states and Middle Eastern privacy environments
- South Africa and representative African data-protection environments

Every production jurisdiction will still require local classification, worker, privacy, discrimination, consumer, identity, competition, benefit, and dispute review.

## 6. Audit sequence

1. Establish invariants, severity, and issue taxonomy.
2. Build a requirements and dependency map across all sections.
3. Test internal consistency among scope, components, rights, formulas, proofs, benefits, threats, pilots, integrations, economics, success measures, and narrative.
4. Run stakeholder refusal and harm analyses.
5. Run technical, operational, incentive, and adversarial analyses.
6. Run current global legal and cultural stress tests using primary sources where available.
7. Classify each finding and identify the earliest stage at which it must be resolved.
8. Separate fatal or premise-level findings from simulation questions and implementation details.
9. Produce a repair order and decision agenda.
10. Reconcile approved changes into the specification before simulation design.

## 7. Candidate premise-level challenges

These challenges are not conclusions. They are the questions most capable of defeating the idea and therefore receive the earliest scrutiny.

### AIA-001: Upside-only may be structurally unstable

**Severity:** FATAL candidate  
**Status:** CANDIDATE

If some consumers receive preferred recognition, businesses and employees may infer that consumers without a proof are less trustworthy even when policy calls their service “baseline.” Scarce attention, upgrades, flexibility, time, and discretion are positional. Giving them to one group may necessarily alter the experience or opportunity of another. The audit must determine whether a meaningful return can remain genuinely additive rather than creating a shadow penalty.

### AIA-002: NCS may measure social conformity more reliably than conduct

**Severity:** FATAL candidate  
**Status:** CANDIDATE

“Would you want to serve this person again?” may capture warmth, similarity, ease, status, tipping, attractiveness, accent, disability, race, gender, complaint behavior, or whether the employee obtained the desired business outcome. VCI and audits may identify some distortion without making the subjective construct valid. The audit must test whether NCS can add unique value without institutionalizing deference to service workers, managers, and local norms.

### AIA-003: Portability may destroy contextual validity

**Severity:** FATAL candidate  
**Status:** CANDIDATE

Conduct that appears relevant within one business may not transfer across businesses, roles, cultures, price points, channels, or industries. The system's distinctive value depends on portability, but portability may be the feature most likely to turn bounded interaction evidence into generalized reputation.

### AIA-004: Consumer control may be formal rather than substantive

**Severity:** FATAL candidate  
**Status:** CANDIDATE

If businesses, loyalty programs, or social expectations normalize proof presentation, consumers may feel compelled to enroll and disclose. Refusal, insufficient history, or privacy preference may become suspicious. The audit must test whether consumer control survives network effects, repeated prompts, unequal bargaining power, and valuable benefits.

### AIA-005: The system may reward businesses for transferring governance costs to consumers and workers

**Severity:** MAJOR candidate  
**Status:** CANDIDATE

Businesses may obtain loyalty differentiation while workers provide emotional judgments and consumers bear identity, monitoring, challenge, and proof burdens. The independent system may absorb appeals, audits, and remedy. The claimed mutual value may depend on costs being hidden or subsidized.

### AIA-006: VCI may convert business-authored rules into moralized evidence

**Severity:** FATAL candidate  
**Status:** CANDIDATE

A verified record can accurately show compliance with a rule that is confusing, unfair, inaccessible, selectively enforced, or commercially self-serving. The responsibility model may not be capable of separating reliable follow-through from obedience to business terms.

### AIA-007: A portable positive proof may enter consumer-reporting and automated-decision regimes despite avoiding punishment

**Severity:** BLOCKER candidate  
**Status:** CANDIDATE

The system assembles and evaluates information about individuals for third-party use. Legal classification may depend on purpose, effect, institutional role, and local law rather than the project's label or intention. “Benefit only” reduces some risks but may not remove consumer-reporting, profiling, discrimination, or automated-decision obligations.

### AIA-008: Meaningful correction may be impossible for subjective experience

**Severity:** MAJOR candidate  
**Status:** CANDIDATE

The specification allows process review without rerating an employee's eligible subjective experience. A consumer may experience a consequential result that cannot be factually disproved, while the employee must be protected from confrontation. The audit must determine whether contextualization, exclusion rules, confidence, concentration, and appeal provide a genuine remedy or only procedural acknowledgment.

### AIA-009: The rights and governance model may be too expensive for the proposed value

**Severity:** FATAL candidate  
**Status:** CANDIDATE

Identity, security, accessibility, worker protection, issuer validation, correction, independent appeal, audit, fairness research, certification, governance, insurance, remedy, and wind-down may cost more than a modest optional benefit can support. Removing those functions breaks the constitutional design; retaining them may make adoption economically irrational.

### AIA-010: Enterprise adoption incentives may conflict with the system's safeguards

**Severity:** FATAL candidate  
**Status:** CANDIDATE

Businesses may value CQ most for exclusion, risk selection, cost reduction, pricing, fraud, employee control, advertising, or competitor intelligence—the uses the specification prohibits. The approved low-risk benefit may not create enough enterprise value to fund the infrastructure. The audit must identify a credible buyer whose desired use aligns with consumer and worker rights.

### AIA-011: Positive-history systems may entrench incumbency and transaction privilege

**Severity:** MAJOR candidate  
**Status:** CANDIDATE

Frequent travelers, affluent consumers, digitally identified users, people with stable accounts, and customers of participating brands can accumulate evidence faster. Confidence and insufficient-history labels may reproduce privilege even when scores do not directly include spend. The audit must test whether evidence opportunity, not conduct, becomes the dominant advantage.

### AIA-012: The system may be too complex for informed consent and meaningful explanation

**Severity:** FATAL candidate  
**Status:** CANDIDATE

The proposal asks people to understand human ratings, operational events, context, confidence, recency, concentration, disputes, proofs, benefits, data custody, identity, and governance. Simplification may hide material behavior; full explanation may exceed realistic attention. The audit must test whether the essential mental model can fit into ordinary interaction without legalistic theater.

### AIA-013: Cross-company infrastructure creates a high-value correlation and abuse layer even without raw-history pooling

**Severity:** BLOCKER candidate  
**Status:** CANDIDATE

Pairwise identifiers, proof requests, issuer activity, credential status, timing, and verifier logs can form a relationship graph. Platforms, wallets, colluding businesses, governments, litigants, attackers, or data brokers may reconstruct sensitive patterns. Selective disclosure does not automatically provide unlinkability in operational reality.

### AIA-014: The proposed governing institution may have authority without democratic legitimacy or practical enforcement power

**Severity:** MAJOR candidate  
**Status:** CANDIDATE

OCA may set behavioral schemas, certify companies, influence consumer benefits, adjudicate disputes, and sanction participants across jurisdictions. It may simultaneously lack public mandate, stable funding, investigative power, regional representation, and enforceable reach. Multi-stakeholder structure can distribute seats without producing legitimate or timely decisions.

### AIA-015: A one-person founder stage may create irreversible framing and ownership before affected groups can participate

**Severity:** MAJOR candidate  
**Status:** CANDIDATE

The specification is unusually developed before consumers, workers, businesses, advocates, or regional participants have formal power. Later participation may be constrained to reacting within assumptions already embedded in the language, marks, architecture, and public story. Founder transparency and staged transfer may not cure path dependence.

### AIA-016: “Human-to-human” may be impossible to isolate in AI-mediated service

**Severity:** MAJOR candidate  
**Status:** CANDIDATE

Workers increasingly use scripts, automated recommendations, copilots, translation, sentiment tools, and shared queues. Consumers use agents, accessibility tools, assistants, and delegated accounts. The direct human interaction and authorship rules may be difficult to prove without intrusive monitoring or arbitrary exclusion.

### AIA-017: Local cultural meaning may defeat a portable global NCS standard

**Severity:** FATAL candidate  
**Status:** CANDIDATE

Expectations around directness, hierarchy, service, tipping, eye contact, emotional expression, complaint, gender, language, and hospitality differ substantially. A standard prompt and scale may not preserve meaning across cultures, even with translation and normalization. Regional versions may protect validity but weaken portability and a universal name.

### AIA-018: The proposal may produce behavioral performance rather than authentic better relationships

**Severity:** MAJOR candidate  
**Status:** CANDIDATE

Once customers know conduct can unlock benefits, they may perform friendliness, avoid complaints, tip strategically, or manage impressions. Workers may reciprocate or become another audience for customer optimization. Measured behavior may improve while autonomy, authenticity, and legitimate voice decline.

### AIA-019: The specification may contain too many unresolved variables to support interpretable simulation

**Severity:** BLOCKER candidate  
**Status:** CANDIDATE

Prompt behavior, event taxonomy, responsibility, confidence, recency, thresholds, context transfer, representation, proofs, benefits, identity, and pilot context remain partly open. A simulation can generate precise output from arbitrary assumptions and create false confidence unless the audit identifies a minimal formal model and separates structural tests from parameter selection.

### AIA-020: The project may be solving a vivid problem with an unnecessarily durable identity system

**Severity:** FATAL candidate  
**Status:** CANDIDATE

Businesses may improve customer conduct through clearer norms, employee support, incident processes, environment design, reciprocal feedback, or local recognition without creating portable individual histories. The audit must compare CQ with materially simpler interventions and require incremental value for every layer.

## 8. Audit findings register

The findings below are the first sustained results. They are findings about the current specification, not final judgments about every possible version of the idea. External legal references identify classification pressure and required questions; they are not legal opinions or launch clearance.

### AIA-F001: The NCS formula contradicts the locked treatment of middle responses

| Field | Assessment |
|---|---|
| Severity | BLOCKER |
| Status | SUSTAINED |
| Likelihood | Certain in the written formula |
| Detectability | High once tested; low for an ordinary reader |
| Geographic reach | Universal |
| Earliest resolution | Before any numerical simulation |

NCS-005 says only “Definitely yes” and “Definitely not” affect baseline NCS and that the middle responses record uncertainty. Section 7.5 repeats that the middle choices “do not change the baseline numerical value.” The Section 7.10 formula divides the definite-response balance by **total eligible response weight**, and explicitly says the middle responses contribute to the denominator.

That makes middle responses numerically consequential. One “Definitely yes” with no other response produces +100. The same definite-positive response plus nine “Probably yes” responses produces +10. No numerator changed; the score fell 90 points because the middle responses diluted it.

This is not a parameter question. The system must first choose among different constructs:

1. **Definite-only balance:** denominator includes only definite responses; middle responses affect confidence and coverage, not baseline direction.
2. **All-response intensity:** denominator includes every response; middle responses deliberately pull the score toward zero.
3. **Full ordinal model:** all four categories receive modeled values or thresholds.
4. **No scalar NCS:** retain the response distribution and derive only purpose-specific evidence states.

**Required action:** Remove formula selection from LOCKED status. Correct the contradiction before generating simulated NCS values. Simulation may compare the four coherent alternatives, but it cannot repair an undefined construct.

### AIA-F002: The locked NCS prompt does not directly ask the construct the specification says NCS measures

| Field | Assessment |
|---|---|
| Severity | BLOCKER |
| Status | NEEDS EVIDENCE |
| Likelihood | High risk; magnitude unknown |
| Detectability | Requires cognitive interviews, experiments, and field validation |
| Geographic reach | Universal, amplified cross-culturally |
| Earliest resolution | Before live NCS collection; prompt candidates before simulation |

The stated construct is how the consumer treated the employee. The locked prompt—“Would you want to serve this person again?”—asks for a future service preference. That preference can rationally include workload, transaction complexity, tip, spend, status, complaint, outcome, disability, language, expected conflict, manager reaction, profitability, safety, or simple interpersonal affinity. The instruction telling a rater what not to consider does not establish that people can or will mentally separate those factors in a two-second interaction.

The prompt may ultimately work. The specification currently has no evidence that it does. It also has no validated comparison with direct alternatives such as “Did this person treat you with respect?” or behaviorally anchored variants. A prompt can be memorable and still be an invalid instrument.

**Required action:** Reclassify the exact prompt and scale as PROVISIONAL. Define the construct first; then use cognitive interviews, vignettes, randomized prompt tests, test-retest analysis where appropriate, convergent and discriminant validity, subgroup analysis, and worker review. The test must include legitimate complaints, accommodations, company failures, language differences, low tips, high-complexity transactions, and ambiguous interactions.

### AIA-F003: “LOCKED” currently mixes constitutional rules with untested empirical hypotheses

| Field | Assessment |
|---|---|
| Severity | BLOCKER |
| Status | SUSTAINED |
| Likelihood | Certain |
| Detectability | High |
| Geographic reach | Universal |
| Earliest resolution | Before simulation design and external technical review |

The decision register contains **239 LOCKED** and **26 PROVISIONAL** labels. Some locks are appropriate constitutional commitments: no public profiles, no employment use, no adverse baseline treatment, and meaningful correction. Others are unvalidated product and measurement choices: the exact NCS prompt, the four-choice response design, definite-only treatment, and availability of overall CQ views.

The conflict becomes explicit in Section 15.21, which defers the “exact NCS prompt” to Stage 2 evidence even though NCS-003 already calls it approved and LOCKED. Section 7.16 says NCS remains provisional until a pilot demonstrates reliability and fairness. These statuses cannot all be true at once.

**Required action:** Replace the binary status logic with at least four classes:

- **CONSTITUTIONAL:** a protection or boundary that evidence cannot silently optimize away.
- **REQUIRED FOR COHERENCE:** an architectural or semantic rule necessary for the current concept to make sense.
- **CANDIDATE:** a testable design or model hypothesis.
- **DEFERRED:** a decision intentionally not yet made and blocked from dependent implementation.

Nothing should be labeled constitutional merely because it appears in an early detailed draft.

### AIA-F004: An upside-only proof still creates a shadow negative category

| Field | Assessment |
|---|---|
| Severity | FATAL to the current claim; potentially MAJOR under a narrower claim |
| Status | PARTIALLY MITIGATED |
| Likelihood | High if proof adoption becomes meaningful |
| Detectability | Moderate; requires baseline and nonparticipant measurement |
| Geographic reach | Universal |
| Earliest resolution | Before benefit design |

The specification repeatedly prohibits degrading baseline service. That is necessary but does not prove that a positive proof is non-adverse. A verifier inevitably receives one of several states: eligible, not established, unavailable, refused, expired, or ineligible. Once the credential has value, absence can become an informal risk signal even if the interface never says “bad customer.”

Many proposed benefits are also positional. Earlier access, scarce upgrades, flexibility, employee time, exception handling, and priority cannot always be given to one group without changing another group's relative experience. A “benefit only” rule can therefore describe accounting treatment while obscuring distributional effect.

The specification has unusually strong baseline monitoring and low-risk-benefit language, so the issue is not unaddressed. The absolute public claim—CQ never hurts anyone without a positive proof—is not yet defensible.

**Required action:** Narrow the claim to a testable obligation: no intentional denial or degradation, measured baseline parity, no verifier exposure to the reason a proof was not presented, and only non-scarce or separately funded pilot benefits. Test refusal and absence inference directly with employees and consumers. Establish a stop condition if meaningful value makes participation coercive.

### AIA-F005: NCS has a construct-contamination problem that policy language cannot solve by itself

| Field | Assessment |
|---|---|
| Severity | FATAL candidate retained |
| Status | NEEDS EVIDENCE |
| Likelihood | High |
| Detectability | Difficult without designed validation and protected-group data |
| Geographic reach | Universal |
| Earliest resolution | Before NCS may affect portable proof |

Frontline preference may encode social conformity: agreeableness, emotional display, accent, gender performance, race, caste, class, disability, neurotype, tipping norms, directness, deference, or willingness to accept a company's failure without escalating. The system can ban these inputs from the event schema, but that does not remove them from a human judgment.

Research on cross-national surveys shows systematic differences in middle and extreme response use and language effects, including across 16-country and eight-country studies. That evidence does not prove NCS will fail, but it defeats an assumption that the same four labels automatically have comparable meaning globally. See [Harzing et al., *Rating versus ranking*](https://doi.org/10.1016/j.ibusrev.2009.03.001) and [Kemmelmeier, *Do culture-dependent response styles distort substantial relationships?*](https://doi.org/10.1016/j.ibusrev.2013.01.008).

**Required action:** Treat measurement invariance—not translation—as the global gate. Do not normalize away differences before determining whether the construct, prompt, thresholds, and response behavior are comparable. If invariance fails, restrict transfer, use regional/contextual instruments, or abandon a global scalar NCS.

### AIA-F006: VCI can accurately verify compliance with an unfair or inaccessible rule

| Field | Assessment |
|---|---|
| Severity | MAJOR |
| Status | PARTIALLY MITIGATED |
| Likelihood | High across heterogeneous issuers |
| Detectability | Moderate when responsibility definitions are audited |
| Geographic reach | Universal |
| Earliest resolution | Before event taxonomy certification |

The current responsibility model requires advance disclosure, attribution, external-cause handling, and protection for complaints, returns, refunds, accommodations, and disputes. Those are strong controls. They do not answer whether the underlying responsibility was substantively fair, understandable, accessible, lawful, proportionate, or negotiable.

A business can precisely prove that a consumer missed a deadline embedded in adhesion terms, violated a confusing cancellation rule, failed a digitally inaccessible step, or declined a commercially self-serving request. Calling that event “verified conduct” can convert a business policy into a moral fact.

**Required action:** Add a responsibility-legitimacy gate. An adverse responsibility may enter VCI only if the rule is necessary for the transaction, proportionate, accessible, plainly disclosed, consistent with applicable rights, reasonably within consumer control, and approved for the context. Business compliance with the same transaction responsibilities must be represented or independently measured; otherwise VCI is structurally one-sided.

### AIA-F007: CQ is inside multiple regulatory perimeters even when it is voluntary and benefit-only

| Field | Assessment |
|---|---|
| Severity | BLOCKER |
| Status | SUSTAINED as classification risk; exact classifications require counsel and facts |
| Likelihood | High that several regimes apply; outcome jurisdiction- and use-specific |
| Detectability | High once roles, data flows, and benefits are concrete |
| Geographic reach | Global |
| Earliest resolution | Before partner commitment or personal-data collection |

The legal posture cannot rest on the words “credential,” “open standard,” “voluntary,” or “positive.” CQ assembles or evaluates information about identifiable people, derives behavioral conclusions, makes those conclusions portable to third parties, and may influence access to benefits. Different actors may be controllers, processors, consumer reporting agencies, furnishers, users, deployers, issuers, verifiers, or joint controllers depending on facts.

Examples of current perimeter pressure include:

- In the United States, Regulation V governs consumer reporting agencies, furnishers, and persons using consumer information to determine eligibility for products, services, or employment. CFPB guidance states that third-party algorithmic scores can be consumer reports and that combining transaction or experience information with other data can remove the narrow transactions-and-experiences exception. See [CFPB Regulation V](https://www.consumerfinance.gov/rules-policy/regulations/1022/) and [CFPB Circular 2024-06](https://www.consumerfinance.gov/compliance/circulars/consumer-financial-protection-circular-2024-06-background-dossiers-and-algorithmic-scores-for-hiring-promotion-and-other-employment-decisions/).
- Massachusetts states that existing consumer-protection, anti-discrimination, and data-security law applies to algorithmic systems, and its public-accommodations regime covers treatment within many consumer businesses. See the [Massachusetts Attorney General advisory](https://www.mass.gov/doc/ago-ai-advisory-41624/download) and [MCAD overview](https://www.mass.gov/info-details/overview-of-anti-discrimination-laws-enforced-by-the-mcad).
- California's finalized privacy regulations took effect January 1, 2026 and include risk assessments plus rights concerning automated decisionmaking used for significant decisions; ADMT compliance for significant decisions begins January 1, 2027. See the [California Privacy Protection Agency rulemaking page](https://cppa.ca.gov/regulations/ccpa_updates.html).
- Colorado gives consumers rights concerning personal data and certain profiling and requires data-protection assessments for heightened-risk processing. See the [Colorado Attorney General's CPA page](https://coag.gov/resources/colorado-privacy-act/).
- The GDPR defines profiling broadly and Article 22 provides protections for solely automated decisions with legal or similarly significant effect. See [GDPR Article 22 and Recital 71](https://eur-lex.europa.eu/legal-content/EN/TXT/?toc=OJ%3AL%3A2016%3A119+%3ATOC&uri=uriserv%3AOJ.L_.2016.119.01.0001.01.ENG).
- The EU AI Act prohibits specified social-scoring practices by public **or private** actors when resulting unfavorable treatment is unrelated to the original context or unjustified or disproportionate to the behavior. Whether a CQ implementation meets every element will depend on design and effect, but cross-context portability is directly adjacent to the statutory boundary. See [EU AI Act Article 5](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689).

**Required action:** Build a role-by-role, use-by-use, jurisdiction-by-jurisdiction classification matrix before selecting an architecture or benefit. Include the synthesis provider, issuer, wallet, verifier, business, OCA, support operator, researcher, and vendor. “We prohibit high-stakes uses” is a control, not a legal classification.

### AIA-F008: Portability and contextual validity are in direct tension

| Field | Assessment |
|---|---|
| Severity | FATAL candidate retained |
| Status | NEEDS EVIDENCE |
| Likelihood | High for cross-industry transfer; uncertain within narrow contexts |
| Detectability | Requires out-of-sample validation across issuers and populations |
| Geographic reach | Universal |
| Earliest resolution | Before industry portability release |

Portability is the product's differentiator. Context is the measurement safeguard. The more evidence is constrained to the original company, role, channel, jurisdiction, and interaction, the more defensible it becomes—and the less portable value it creates. The more it travels, the more it becomes generalized reputation.

The EU AI Act makes this tension legally salient because one prohibited social-scoring condition concerns unfavorable treatment in a context unrelated to where the data originated. Even outside that law, transport validity cannot be assumed from correlation within the source environment.

**Required action:** Define transfer as a falsifiable claim. For every source-target pair, require a theory of relevance, held-out evidence of incremental predictive value, subgroup stability, consumer comprehension, proportionality, and a reason the target cannot obtain the evidence locally. Default transfer should be zero. Overall CQ should remain outside both pilot and public promise unless evidence defeats this finding.

### AIA-F009: The system's rights model and its data-locality model are not yet operationally compatible

| Field | Assessment |
|---|---|
| Severity | BLOCKER |
| Status | SUSTAINED |
| Likelihood | Certain architecture dependency |
| Detectability | High in end-to-end workflow design |
| Geographic reach | Universal |
| Earliest resolution | Before architecture selection |

The specification wants raw events to remain local while also promising unified inspection, correction, independent appeal, recalculation, audit, issuer exit, provider exit, and collective remedy. Those rights require durable access to evidence and accountable actors. A business that deletes data, changes platforms, disputes an appeal result, becomes insolvent, exits the network, or operates under a conflicting retention rule can make a nominal right unusable.

At the same time, centralizing evidence would increase correlation, breach, surveillance, discovery, and governance risk. This is a real architectural tradeoff, not a documentation gap that can be solved by declaring both principles.

**Required action:** For every right, map the minimum evidence, custodian, legal basis, retention period, retrieval service level, exit obligation, cryptographic commitment, human reviewer, and remedy funding. Test failure when an issuer is offline, hostile, bankrupt, compromised, or outside the consumer's jurisdiction. No architecture passes merely because it minimizes central storage.

### AIA-F010: Selective disclosure does not make the ecosystem unlinkable

| Field | Assessment |
|---|---|
| Severity | BLOCKER |
| Status | PARTIALLY MITIGATED |
| Likelihood | High without a specific privacy architecture and operational controls |
| Detectability | Requires privacy threat modeling and implementation tests |
| Geographic reach | Universal |
| Earliest resolution | Before technical prototype architecture is fixed |

Even if a proof reveals only eligibility, operational metadata can link people and relationships: proof timing, issuer, verifier, credential status checks, wallet account, device, network address, corporate identity graph, revocation endpoint, benefit redemption, and rare context combinations. Pairwise identifiers reduce direct reuse but do not prevent collusion or traffic analysis.

The privacy claim must therefore be about measured unlinkability under a named adversary model, not about the absence of raw history in a proof payload.

**Required action:** Define adversaries and observables. Compare at least holder-mediated credentials, brokered proofs, and direct issuer-verifier exchange. Measure linkability across colluding verifiers and corporate families, status-query privacy, timing leakage, device correlation, compelled disclosure, and recovery events. Minimize or blind logs where accountability permits, and publish what remains linkable.

### AIA-F011: The operating institution may cost more than the approved use can support

| Field | Assessment |
|---|---|
| Severity | FATAL candidate retained |
| Status | NEEDS EVIDENCE |
| Likelihood | High at small scale; uncertain at mature scale |
| Detectability | Requires activity-based cost model and buyer discovery |
| Geographic reach | Universal |
| Earliest resolution | Before a funded live pilot |

The design requires identity assurance, accessibility, worker consultation, issuer certification, security, audits, model governance, protected-group research, consumer support, factual correction, independent appeal, collective redress, sanctions, insurance, remedy reserves, regional interpretation, vendor oversight, incident response, and orderly wind-down. These are not optional overhead; they are what makes the concept plausibly responsible.

The approved first benefit is intentionally modest and non-coercive. That reduces consumer risk while also limiting business willingness to pay. The strongest enterprise incentives—fraud selection, price discrimination, exclusion, cost reduction, worker control, and targeting—are prohibited. The design therefore has a possible economic contradiction: the safe uses may not fund the protections, while the profitable uses may violate the constitution.

**Required action:** Build an activity-based cost floor before a pilot budget. Price expected and stress-case volumes for enrollment, event processing, correction, challenge, independent appeal, audit, security, incident, accessibility, translation, insurance, and exit. Conduct buyer discovery without relaxing prohibited uses. If no aligned payer covers the irreducible rights cost, stop or radically narrow the system.

### AIA-F012: Confidence weighting may turn transaction opportunity into moral standing

| Field | Assessment |
|---|---|
| Severity | MAJOR |
| Status | NEEDS EVIDENCE |
| Likelihood | High without exposure correction |
| Detectability | High in simulation if exposure is explicitly modeled |
| Geographic reach | Universal |
| Earliest resolution | Structural simulation |

People with frequent travel, stable accounts, high digital participation, predictable identities, and relationships with participating brands will accumulate evidence faster. People who pay cash, share accounts, travel rarely, lack smartphones, move across countries, use caregivers, or transact with small nonparticipating businesses will remain “not established.” Even if missingness never subtracts points, confidence gates can allocate benefits by opportunity to be observed.

VCI is especially vulnerable because routine fulfillment can be generated at every transaction. A high-volume stream of easy operational evidence can dominate sparse human evidence under confidence-weighted synthesis, a limitation the specification itself acknowledges.

**Required action:** Simulate exposure separately from conduct. Report qualification by eligible interaction opportunity, account stability, channel, accessibility path, delegated use, and issuer coverage. Cap the value of redundant routine events; measure effective sample diversity, not raw count. A model fails if transaction frequency predicts eligibility materially after underlying conduct is held constant.

### AIA-F013: A unified challenge right does not yet provide an effective remedy for subjective NCS

| Field | Assessment |
|---|---|
| Severity | MAJOR |
| Status | PARTIALLY MITIGATED |
| Likelihood | High that emotionally salient disputes occur |
| Detectability | High in prototype and qualitative testing |
| Geographic reach | Universal |
| Earliest resolution | Before consumers see live NCS events or CQ |

The specification correctly distinguishes disagreement from factual invalidity and protects employees from direct confrontation. But that leaves a consumer facing a consequential subjective judgment that cannot be disproved, while the reviewer may only confirm that the employee was eligible to feel it. An “I disagree” flag can preserve voice without changing effect; it may be emotional acknowledgment rather than remedy.

Review can also expose a worker in a one-to-one interaction even when the interface withholds their name. Delayed disclosure, minimum-group rules, and aggregation can protect the worker but weaken the consumer's ability to understand and challenge the evidence.

**Required action:** Define remedy by claim type. Factual claims permit correction; eligibility claims permit invalidation; bias or retaliation claims require pattern and contextual investigation; irreducibly subjective claims may require low individual weight, corroboration thresholds, contextual counterstatement, rapid decay, or exclusion from portable effect. Prototype both consumer and worker experiences under hostile, emotional, and repeated disputes. Do not promise “appeal” if no reviewer has authority to change the consequential output.

### AIA-F014: The pilot's voluntary NCS collection creates selection and signaling bias before scoring begins

| Field | Assessment |
|---|---|
| Severity | MAJOR |
| Status | SUSTAINED as design risk; magnitude needs evidence |
| Likelihood | High |
| Detectability | Moderate with designed logs and comparison groups |
| Geographic reach | Universal |
| Earliest resolution | Before pilot recruitment design |

Only opted-in consumers can receive NCS events. Businesses and sometimes workers will necessarily know, or can infer, that a consumer participates because a rating workflow is available. Participants are unlikely to represent the full customer population. Workers may also choose whether to respond, producing a second selection layer. “Census prompt” does not create census data when worker completion is voluntary.

The system may therefore measure people willing to be rated, in interactions where workers chose to rate them, under conditions altered by awareness of the rating. That can inflate apparent conduct, intensify extreme events, or create a Hawthorne effect that disappears outside the pilot.

**Required action:** Model the selection process explicitly. Record eligibility, prompt, display, completion, nonresponse, withdrawal, and reason states without coercing workers. Compare opted-in and nonparticipant interaction outcomes only under lawful, ethical measurement. Blind participation status from the rater where technically and legally possible. Treat portability estimates as conditional on the observed selection process.

### AIA-F015: “Mutually successful interaction” is not yet a safe or measurable target

| Field | Assessment |
|---|---|
| Severity | MAJOR |
| Status | SUSTAINED |
| Likelihood | Certain semantic gap |
| Detectability | High |
| Geographic reach | Universal |
| Earliest resolution | Before success metrics and model optimization |

The specification proposes testing whether NCS and VCI predict “healthy” or “mutually successful” repeat interactions. Those outcomes are undefined. A business may operationalize success as speed, low cost, no escalation, purchase completion, high spend, repeat use, or positive employee sentiment. A consumer may define it as receiving the promised service, correcting a company error, obtaining an accommodation, or winning a justified dispute. Optimizing an undefined shared outcome can quietly import profitability, compliance, or complaint suppression into the model.

**Required action:** Use a balanced outcome vector rather than a single label. At minimum separate consumer outcome, worker safety and burden, business fulfillment, consumer fulfillment, rights exercise, complaint validity, repeat preference, and avoidable friction. No model should learn from an outcome that treats a waived right or unchallenged company failure as success.

### AIA-F016: The current scope contains incompatible promises about overall CQ

| Field | Assessment |
|---|---|
| Severity | MODERATE now; MAJOR if public narrative outruns pilot scope |
| Status | SUSTAINED |
| Likelihood | Certain in the text |
| Detectability | High |
| Geographic reach | Universal |
| Earliest resolution | Specification reconciliation |

The foundation includes synthesis into a contextual CQ and the CQ requirements lock distinguishable company, industry, and approved overall views. The pilot correctly excludes overall CQ, and the production path says cross-industry and overall capabilities should remain out until context transfer is proven. Those later constraints are stronger and more defensible, but the early architecture can still read as a commitment to an eventual universal score.

**Required action:** State that overall CQ is a research question, not a promised product. Preserve the ability to conclude that only company-specific or narrow industry proofs are valid. Update public language, architecture diagrams, and CQ-006 accordingly.

## 9. Dependency and contradiction map

Simulation should begin only after the items marked **pre-simulation** are coherent. Other questions are proper simulation inputs or later gates.

| Dependency | Current conflict | Gate | Disposition |
|---|---|---|---|
| NCS construct | Treatment of employee versus desire to serve again | Pre-simulation | Define candidate constructs and prompts; do not simulate a single “true” NCS yet. |
| NCS denominator | Middle responses both “do not affect” and dilute score | Pre-simulation | Correct formal alternatives first. |
| Decision status | Prompt is LOCKED and explicitly deferred | Pre-simulation | Reclassify constitutional versus empirical decisions. |
| Outcome definition | “Mutually successful” has no canonical measure | Pre-simulation | Define balanced outcome vector. |
| Event legitimacy | Disclosed responsibility may still be unfair | Pre-simulation | Add legitimacy criteria before generating adverse VCI events. |
| Exposure model | Confidence depends on opportunity to transact and be observed | Structural simulation | Model exposure and missingness separately from conduct. |
| NCS/VCI balance | Confidence-weighted VCI may overwhelm NCS | Model comparison | Compare scalar, two-dimensional, and rule-based representations. |
| Context transfer | Portability asserted before transfer validity | Structural simulation and later field evidence | Default transfer to zero; estimate only bounded source-target mappings. |
| Overall CQ | Architecture anticipates it; pilot and production defer it | Specification reconciliation | Make it optional and falsifiable, not inevitable. |
| Benefit-only claim | Positive proof creates absence states and relative effects | Benefit prototype | Restrict first benefit and measure baseline plus inference. |
| Data locality | Local evidence conflicts with unified rights and exit | Architecture prototype | Map every right to evidence custody and failure behavior. |
| Appeals | Subjective experience may be procedurally valid but unresolvable | Workflow prototype | Define authority and remedy per challenge type. |
| Governance | OCA duties exceed founder and early-stage capacity | Economic and institutional gate | No consumer effect until minimum independent functions are funded. |
| Global use | One prompt and scale may lack measurement invariance | Research gate | No global portability based on translation alone. |

## 10. Stakeholder refusal tests

The system is not ready merely because each objection has a policy response. It must answer why a rational stakeholder would participate after considering their own exposure.

### Consumer who expects to qualify

They may value recognition but still refuse because CQ creates a persistent identity surface, normalizes behavioral proof, exposes interaction history to challenge processes, or produces a result they cannot effectively contest. Competitor portability is attractive only if the disclosed proof reveals enough to matter and little enough not to profile them—an unresolved product tension.

### Consumer with sparse, disputed, or nonstandard history

They face the strongest chance of being “not established” because of opportunity rather than conduct. They may reasonably view the system as a status program for people with stable accounts and frequent transactions. Assisted and non-smartphone access fixes interface exclusion, not lack of evidence opportunity.

### Consumer making a legitimate complaint

The written rule protects complaints; the lived incentive may still encourage politeness performance and complaint suppression. They cannot know whether an employee separated the complaint from “wanting to serve them again.” A later bias audit does not remove the immediate chilling effect.

### Frontline worker

They receive another mandatory or quasi-voluntary tap, another policy to remember, another judgment subject to audit, and another possible route for customer anger. Their employer may infer their ratings even if consumers cannot. A two-second target understates training, ambiguity, emotional labor, correction, and dispute consequences.

### Worker representative, union, or works council

They may reject the system because pseudonymous rater analysis is still workplace monitoring; response distributions can expose teams or individuals; management controls authentication and workflow; and a customer-benefit product is being built from worker judgments. Consultation after the instrument is locked is not co-design.

### Small business

They may lack identity systems, final-state data, accessibility resources, correction APIs, security staff, audit capacity, legal counsel, and benefit budget. Certification could favor large platforms and make “open” participation economically closed.

### Enterprise executive

They must fund integration and governance while accepting limits on pricing, fraud, segmentation, data reuse, exclusivity, and raw history. A modest thank-you benefit may not produce measurable return. They may also fear the headline “company adopts customer social score” more than they value portability.

### Product and app team

The “simple proof” depends on a complex state machine: identity, consent version, event states, disputes, reversals, context, model version, credential status, benefit rules, accessibility, delegation, recovery, offline behavior, safe degradation, and audit. The UI may be simple only because complexity is transferred to support and operations.

### Data and model team

There may be no defensible ground truth for “good conduct,” no stable cross-context label, endogenous selection, human-rating bias, issuer drift, sparse negatives, correlated events, and policy-driven missingness. A model can be reproducible without being valid.

### Legal, privacy, and security leaders

They see a new behavioral-profile system, multiple independent actors, difficult controller allocation, consumer-reporting questions, cross-border transfers, workplace data, discrimination exposure, breach impact, deletion conflicts, and a novel benefit decision. “Open standard” distributes implementation; it does not distribute liability cleanly.

### Regulator or advocate

They may reasonably ask why clearer norms, better incident handling, employee support, reciprocal feedback, or company-local recognition cannot solve the stated problem without a portable personal record. The burden is on CQ to prove incremental necessity, not on critics to prove certain harm.

## 11. Global legal and operational stress map

This map identifies launch questions, not a conclusion that one global implementation is legal or illegal. “EMEA,” “APAC,” and “LATAM” are not legal regimes; country and sometimes state, province, emirate, or sector analysis is unavoidable.

| Region | Immediate stress on the design | Current primary reference or authority | Consequence for the spec |
|---|---|---|---|
| United States federal | Third-party behavioral scores used for eligibility may implicate FCRA roles and permissible-purpose, accuracy, disclosure, dispute, and adverse-action duties. Benefit framing is not conclusive. | [CFPB Regulation V](https://www.consumerfinance.gov/rules-policy/regulations/1022/); [CFPB Circular 2024-06](https://www.consumerfinance.gov/compliance/circulars/consumer-financial-protection-circular-2024-06-background-dossiers-and-algorithmic-scores-for-hiring-promotion-and-other-employment-decisions/) | Obtain use-specific FCRA analysis before sharing any score or proof with a business. Keep employment prohibited. |
| Massachusetts | Public-accommodation, consumer-protection, civil-rights, privacy, and security duties apply to algorithmic systems and differential treatment. | [Massachusetts AG AI advisory](https://www.mass.gov/doc/ago-ai-advisory-41624/download); [MCAD public-accommodations overview](https://www.mass.gov/info-details/overview-of-anti-discrimination-laws-enforced-by-the-mcad) | Massachusetts is not a low-regulation sandbox. Benefits and baseline parity require discrimination and deception review. |
| California | Current CCPA regulations include risk assessments and ADMT rights; significant-decision ADMT compliance begins in 2027. | [CPPA finalized regulations](https://cppa.ca.gov/regulations/ccpa_updates.html) | Architecture must support rights and risk assessment; scope depends on business and decision facts. |
| Colorado | Privacy law includes access, deletion, correction, opt-out rights for certain profiling, and data-protection assessments. | [Colorado Attorney General](https://coag.gov/resources/colorado-privacy-act/) | Treat profiling and loyalty-benefit flows as jurisdiction-specific, not one national consent screen. |
| European Union / EEA | GDPR profiling, legal basis, purpose limitation, transparency, data-subject rights, DPIA, joint-controller, and automated-decision questions; AI Act social-scoring boundary is directly relevant to cross-context behavioral evaluation. | [GDPR](https://eur-lex.europa.eu/legal-content/EN/TXT/?toc=OJ%3AL%3A2016%3A119+%3ATOC&uri=uriserv%3AOJ.L_.2016.119.01.0001.01.ENG); [EU AI Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689); [EDPB profiling guidance](https://www.edpb.europa.eu/documents/guideline/automated-decision-making-and-profiling_en) | Do not assume consent cures power, portability, or proportionality. Cross-context unfavorable effect is a red-line issue. |
| United Kingdom | Profiling and automated-decision safeguards remain relevant; worker monitoring demands separate assessment and transparency. | [ICO automated decisions and profiling](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/rights-related-to-automated-decision-making-including-profiling/); [ICO worker monitoring](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/employment/monitoring-workers/data-protection-and-monitoring-workers/) | Worker and consumer flows need separate lawful-basis, necessity, proportionality, and rights design. |
| Canada | Meaningful consent, accountability, explainability, access, accuracy, and challenge are central to regulator guidance on AI. | [Office of the Privacy Commissioner of Canada AI guidance](https://www.priv.gc.ca/en/privacy-topics/technology/artificial-intelligence/ai_business/) | Validate entity roles and provincial/federal scope; a dense explanation cannot substitute for meaningful consent. |
| Brazil | LGPD Article 20 provides rights concerning review of solely automated decisions affecting interests, including consumer and personality profiles, and information about criteria and procedures. | [Brazil LGPD](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709.htm); [ANPD rights guidance](https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados-1/direito-dos-titulares) | Portuguese localization, controller rights, review, and explanation are product requirements, not support-page additions. |
| Colombia and wider LATAM | Reform is active and national laws differ; a Colombian proposal discusses automated-decision rights but is not enacted law. | [Colombian SIC explanation of the bill](https://sedeelectronica.sic.gov.co/noticias/abc-del-proyecto-de-ley-de-proteccion-de-datos-personales-en-colombia) | Do not treat “LATAM compliance” as a single profile or describe proposed rights as current law. |
| China | PIPL Article 24 requires transparency, fairness, and impartiality in automated decision-making and prohibits unreasonable differential treatment in transaction price or other terms. | [Official English PIPL text](https://en.spp.gov.cn/2021-12/29/c_948419.htm) | Benefit and transaction-term logic needs local classification; data localization and cross-border analysis are separate gates. |
| Japan | PPC cross-border guidance uses behavioral-history analysis to calculate a credit score and provide it to a third party as an example requiring concrete purpose and transfer controls. | [Japan PPC foreign-transfer guidelines](https://www.ppc.go.jp/personalinfo/legal/guidelines_offshore/) | Purpose specificity and third-party transfer cannot be abstracted into generic consumer control. |
| South Korea | The privacy regulator describes rights to explanation and refusal for significant fully automated decisions. | [South Korea PIPC](https://www.pipc.go.kr/eng/user/ltn/new/noticeDetail.do?bbsId=BBSMSTR_000000000001&nttId=2434) | Determine whether each benefit decision is significant and whether human review is genuine. |
| Singapore | PDPC guidance emphasizes internal governance, human involvement, explainability, operations management, and communication for AI recommendation and decision systems. | [PDPC Model AI Governance Framework](https://www.pdpc.gov.sg/help-and-resources/2020/01/model-ai-governance-framework); [PDPC AI personal-data guidelines](https://www.pdpc.gov.sg/guidelines-and-consultation/2024/02/advisory-guidelines-on-use-of-personal-data-in-ai-recommendation-and-decision-systems) | Governance and explanation must be implementable by each participant, not delegated rhetorically to OCA. |
| India | The DPDP Act and 2025 Rules create an evolving implementation environment requiring specific local review. | [India Ministry of Electronics and IT, DPDP Rules 2025](https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa) | Do not freeze an India architecture from global assumptions; validate effective dates, consent, rights, and significant-data-fiduciary duties. |
| Australia | New privacy-policy transparency obligations for substantially automated decisions that could significantly affect rights or interests commence December 10, 2026; beneficial as well as adverse effects can count. | [OAIC ADM consultation and guidance](https://www.oaic.gov.au/engage-with-us/consultations/consultation-on-guidance-for-transparency-in-automated-decision-making); [OAIC APP 1 guidance](https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-guidelines/chapter-1-app-1-open-and-transparent-management-of-personal-information) | “Positive only” does not automatically remove transparency obligations. |
| Saudi Arabia | PDPL governs manual and automated processing; official services explicitly support impact assessment of product and service processing. | [SDAIA current laws and regulations](https://sdaia.gov.sa/en/SDAIA/about/Pages/RegulationsAndPolicies.aspx); [SDAIA DPIA service](https://sdaia.gov.sa/en/Services/Pages/ServiceDetails.aspx?ServiceID=27) | Use current, not archived, instruments; perform local impact, transfer, and legal-basis review. |
| United Arab Emirates | Federal law governs electronic personal-data processing and cross-border sharing; DIFC law separately includes rights concerning solely automated profiling decisions with serious effects and manual review. | [UAE government data-protection overview](https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws.); [DIFC Data Protection Law](https://assets.u.ae/api/public/content/bb94d503629243a7aa548a8cd387ea86?v=df38af26) | UAE federal, free-zone, and emirate contexts cannot be collapsed into one EMEA setting. |
| South Africa | POPIA Section 71 addresses decisions with legal or substantial effects based solely on automated profile processing. | [South African Government POPIA](https://www.gov.za/documents/protection-personal-information-act) | Classify proof and benefit decisions and support applicable information, representation, and review safeguards. |

### Global conclusion at this stage

There is no plausible “build once, consent once, launch everywhere” path. The safe global architecture is a common constitutional core plus jurisdiction-specific participation, worker, event, proof, benefit, retention, appeal, and transfer profiles. Even that architecture is viable only if the underlying measurement is culturally valid; compliance cannot rescue an invalid construct.

## 12. Structural simulations versus parameter simulations

The audit supports simulation, but in a stricter order than the current open-question list implies.

### Structural simulations can begin after the five pre-simulation blockers are repaired

They should test whether any class of design can preserve the invariants under synthetic populations and adversarial conditions:

- Proof-present versus proof-absent shadow effects
- Evidence opportunity and insufficient-history inequality
- Selection and nonresponse bias
- Issuer and corporate-family concentration
- Context transfer failure
- Colluding verifier linkability
- Dispute, reversal, and issuer-exit behavior
- Worker-rating bias and cultural response-style differences
- Business-authored unfair responsibility events
- Scarce versus non-scarce benefits
- Support, appeal, and remedy demand under normal and attack conditions
- Economic viability under irreducible rights costs

### Parameter simulations come later

Only after a structural family survives should simulations estimate:

- Prompt and response treatment
- Recency curves
- Evidence thresholds
- Confidence functions
- Event and issuer caps
- Rapid-change triggers
- Context-transfer coefficients
- Scalar versus two-dimensional versus rule-based proofs
- Tier and proof thresholds

The purpose of simulation is not to discover the “best CQ number.” It is to identify designs that fail, conditions under which they fail, and whether a narrower system remains worth field validation.

## 13. Preliminary repair order

1. **Repair semantics and formal coherence.** Resolve the NCS denominator contradiction, define the actual NCS construct, define the outcome vector, and add VCI responsibility legitimacy.
2. **Reclassify decisions.** Preserve constitutional locks; reopen empirical choices and remove the implied commitment to overall CQ.
3. **Specify the minimum viable system claim.** Decide whether the project must prove company-local recognition, industry portability, or a universal quotient. Do not make all three prerequisites for the first test.
4. **Build structural simulation assumptions.** Model exposure, selection, missingness, bias, context, issuer concentration, absence inference, rights, and operating cost before optimizing coefficients.
5. **Run architecture and privacy prototypes.** Map every right to evidence custody; test unlinkability, issuer failure, exit, recovery, and independent review.
6. **Run stakeholder research before live scoring.** Consumers, workers, advocates, small businesses, enterprise teams, and regional experts must be able to reject premises, not merely comment on implementation.
7. **Complete role- and use-specific legal classification.** Start with Massachusetts and the exact pilot facts, while designing the common core so it does not pretend to be global clearance.
8. **Prove aligned economics.** Identify a payer for the irreducible rights and governance floor without selling prohibited uses.
9. **Only then design a shadow pilot.** No portable proof and no benefit effect until measurement, rights, architecture, and operations meet their gates.

## 14. Defensible strengths after hostile review

This audit is not complete, but several choices have already survived the first hostile pass well enough to retain:

- Keeping NCS and VCI conceptually distinct is correct. Human experience cannot be reconstructed from operational logs, and operational evidence cannot make a subjective impression objectively true.
- Refusing to seed new users with a neutral score prevents absence from masquerading as established evidence.
- Append-only event correction, rather than silent rewriting, is a sound integrity principle.
- Separating NCS from safety, fraud, employment, and incident systems is essential, although operational boundaries still need testing.
- Company-specific, industry-specific, and overall evidence should never be silently interchangeable. The stronger conclusion may be to eliminate overall CQ, but the current context hierarchy creates room to learn that.
- Purpose-bound proofs are safer than raw scores or histories, even though they do not eliminate inference or correlation.
- Staged shadow operation, private consumer visibility, company-local proof, and only then bounded portability is the right rollout order.
- A pilot designed to stop, publish negative results, fulfill active promises, preserve remedies, and exit cleanly is materially more credible than a conventional growth pilot.
- The specification treats worker protection, correction, accessibility, governance, security, and economics as first-class requirements. The problem is not their absence; it is whether they can coexist operationally and be funded.
- The project explicitly permits evidence to show that a feature should not be built. That principle must now be applied to the prompt, scalar CQ, overall CQ, and portability—not just to lower-level parameters.

## 15. Audit work still open

The next pass will test the full specification line by line for additional contradictions and missing owners, including identity aggregation, delegation, shared transactions, business exit, appeal authority, benefit scarcity, worker re-identification, model validation, success denominators, platform incentives, and the relationship between the public narrative and the actual pilot claim. It will also convert each sustained finding into a proposed specification amendment after review rather than editing the frozen source in place.
