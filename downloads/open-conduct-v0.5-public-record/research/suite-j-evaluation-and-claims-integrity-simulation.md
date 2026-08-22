# Conduct Ecosystem — Suite J Evaluation and Claims Integrity Simulation Report v0.1

**Status:** Complete structural comparison  
**Date:** August 9, 2026  
**Run package:** `simulation/run_packages/suite-j-v0.1-results.json`  
**Runner:** `simulation/suite_j.py`  
**Runner SHA-256:** `4f281647a5e65a88e4d88eab261d8d1f03109a12f7995b7eaf179aac0d3570cf`  
**Result SHA-256:** `7d6546e16dc0580a005007fbca1975f4d26f3aba710f0d34ce2616e025139dda`

## 1. Executive result

Suite J completes the structural simulation program. It finds no evidence that the Conduct idea must be abandoned or redirected. It does find that the first pilot must make substantially narrower claims than its public vision.

The lead evaluation architecture is:

1. **J1 invitation or assignment** is the preferred primary population estimand when the actual design, ethical authority, assignment, and outcome observation support it.
2. **J2 through J6 remain required secondary populations**: enrollment, exposure and sufficient history, proof presentation, benefit receipt, and per-protocol completion each answer a different legitimate question. None may be generalized upward.
3. The complete denominator ladder is independently reconciled from eligibility and invitation through withdrawal, missingness, correction, remedy, and follow-up.
4. The claim ladder remains ordered: **J7 workflow → J8 construct → J9 intervention → J10 portability**. Each claim requires its own evidence and does not inherit authorization from the previous one.
5. Low subgroup power, credible outcome-dependent missingness, weak harm detection, inadequate follow-up, unseparated novelty, and missing replication produce uncertainty or narrower claims—not approval.
6. The preregistered primary result leads public reporting even when an exploratory slice is more favorable.
7. Reproducibility uses versioned code, queries, schemas, exclusions, configurations, aggregate validation, and governed rerun access without publishing or permanently centralizing a behavioral dossier.
8. One site produces one site-specific result. Production and portability claims require materially different replication appropriate to the claim.

The central evaluation rule is:

> Every number belongs to a defined population, and every claim belongs to the exact design, context, period, and evidence that earned it.

## 2. What this means in human terms

Imagine that 1,200 people are eligible for an experiment. Some are invited. Fewer enroll. Fewer generate enough history. Fewer qualify. Fewer choose to present a proof. Fewer receive and complete a benefit.

The last group may love the experience. That matters. It tells us whether the experience worked for people who reached it. It does not tell us whether the system helped the 1,200 people, whether sparse-history consumers benefited, whether nonparticipants were treated normally, or whether the people who disappeared from the funnel experienced problems.

Suite J prevents the project, a pilot partner, a report client, or an enthusiastic founder from turning a true narrow result into a false broad story.

It also protects the project from the opposite mistake. A small first pilot does not need enough statistical power to prove every fairness question or every long-term harm impossible. It needs to identify what it can estimate, what remains uncertain, which serious harms have independent detection and containment, and what must be repeated before expansion.

## 3. Questions tested

Suite J tested whether each proposed result survives:

- Selection from eligibility through benefit receipt
- Partner-controlled eligibility, exclusions, sources, denominators, and periods
- Small protected and intersectional groups
- Repeated consumers, shared workers, locations, businesses, platforms, incidents, and time
- Outcome-dependent participation, withdrawal, failure, and follow-up
- Many outcomes, models, groups, periods, interim looks, and report cuts
- Weak recognition, reporting, and detection of harm
- Follow-up shorter than worker, correction, recovery, privacy, incident, and wind-down risk
- Novelty, training, staffing, management attention, consumer reactivity, and baseline change
- Pressure to randomize a protected right
- Reproducibility that could create a permanent identity-linked dataset
- Site, period, operator, platform, implementation, and population heterogeneity
- A favorable first-site result being generalized to production or portability

## 4. Candidates

### Population estimands

| Candidate | Population | Proper use |
|---|---|---|
| J1 | Invitation or assignment | Lead population impact when identifiable |
| J2 | Enrollment | Adoption and enrolled-participant experience |
| J3 | Exposure and sufficient history | Evidence opportunity and qualification pathway |
| J4 | Proof presentation | Presentation workflow and presenter experience |
| J5 | Benefit receipt | Fulfillment and recipient value |
| J6 | Per protocol | Mechanism performance among complete participants |

### Claim levels

| Candidate | Claim | Meaning |
|---|---|---|
| J7 | Workflow | The specified journey can execute with its rights and controls |
| J8 | Construct | NCS, VCI, or another component measures its limited stated concept in the tested context |
| J9 | Intervention | Proof or benefit causally changes a defined outcome under the tested design |
| J10 | Portability | Evidence remains relevant, fair, understandable, private, and useful in another defined context |

These are not interchangeable rankings. J5 is not a bad estimand; it is a bad substitute for J1. J10 is not a better workflow claim; it is a much harder and different claim.

## 5. Execution

The final run used:

- **20 comparison groups**
- **1,322 common synthetic histories**
- **7,974 candidate-case evaluations**
- Central, boundary, one-factor, pairwise-corner, and deterministic space-filling cases
- Common-history verification: **passed**
- Participant-selection log odds from **−1.5 to +1.5**
- Outcome-dependent missingness log odds from **−1.5 to +1.5**
- Cluster intraclass correlation from **0 to 0.60**
- Harm-detection coverage from **5% to 100%**
- Follow-up from **1 to 365 days**
- Analysis opportunities from **1 to 500**
- Novelty and attention effects from **−0.25 to +0.75**
- Site-effect heterogeneity from **0 to 1.0**

All values are broad structural stress settings. They are not real effect sizes, prevalence estimates, power calculations, service levels, or final methodological thresholds.

## 6. The funnel changes the apparent result

In the controlled reference population, the complete synthetic funnel was:

| Stage | People |
|---|---:|
| Eligible | 1,200 |
| Invited | 943 |
| Enrolled | 623 |
| Exposed | 559 |
| Sufficient history | 471 |
| Qualified | 117 |
| Presented proof | 54 |
| Received benefit | 49 |
| Per protocol | 39 |

The invitation-level effect proxy was **0.042**. The same underlying population produced:

- Enrollment effect: **0.042**
- Sufficient-history effect: **0.051**
- Presentation effect: **0.087**
- Recipient effect: **0.085**
- Per-protocol effect: **0.090**

Nothing was falsified. The narrower groups really had larger synthetic effects. But only 4% to 4.5% of the eligible population reached those final estimands. Calling the recipient result “customer impact” would approximately double the apparent population effect while excluding nearly everyone who never reached the benefit.

J1 therefore becomes the lead population estimand when feasible. J2 through J6 remain mandatory because they explain where participation, evidence, proof, benefit, and implementation succeed or fail.

## 7. Selection can reverse the answer

With participant selection set to favor people with lower synthetic effects, the invitation result remained **+0.042** while:

- Enrollment became **−0.014**
- Sufficient history became **−0.012**

Both reversed direction.

With selection favoring people with larger effects, the same invitation result remained **+0.042** while:

- Enrollment rose to **+0.112**
- Sufficient history rose to **+0.121**
- Presentation rose to **+0.129**
- Recipient rose to **+0.128**
- Per protocol rose to **+0.132**

This is the core “successful population” failure. Selection does not require fraud. Digital access, transaction frequency, trust, loyalty, confidence of qualifying, interest in a benefit, and willingness to remain in research can produce it naturally.

Every report therefore shows the full ladder and names the exact estimand beside the result.

## 8. Denominator control is an evidence-control problem

A rate can be arithmetically correct and still answer the wrong question.

The evaluation charter must freeze:

- Source population
- Eligibility and invitation
- Prompt opportunity and presentation
- Event registration, delivery, exception, dispute, correction, and reversal
- Proof opportunity, request, consent, presentation, nonpresentation, and failure
- Benefit offer, acceptance, fulfillment, replacement, and remedy
- Challenge, appeal, incident, withdrawal, censoring, and follow-up
- Numerator, denominator, exclusion, missing state, source, and version for every measure

The independent evaluator reconciles those states to direct source evidence. A partner cannot improve results by counting displayed prompts instead of eligible interactions, activated benefits instead of benefit obligations, completed corrections instead of all correction cases, or observed proof attempts instead of all proof opportunities.

Every material denominator change is versioned, justified, and visible in the result history.

## 9. Fairness uncertainty is not fairness clearance

Even the controlled 1,200-person structural case could not clear broad fairness claims.

For J1:

- Nominal observed cases: approximately **799**
- Dependence-adjusted effective sample: approximately **716**
- Protected-group effective sample: approximately **200**
- Intersectional effective sample: approximately **31**
- Fairness clearance: **not authorized**

For the recipient population:

- Dependence-adjusted effective sample: approximately **35**
- Intersectional effective sample: **0**
- Fairness clearance: **not authorized**

This does not establish unfairness. It establishes that a small or selected pilot cannot use a nonsignificant disparity test as evidence of parity.

The response is a combined evidence plan:

- Deliberate recruitment where justified
- Accessibility and scenario testing
- Qualitative evidence
- Matched cases and manual review
- Independent complaint and outreach channels
- Prior evidence and known risk
- Precision and detection limits
- Narrower claims
- Precautionary stops for severe plausible harm

Privacy suppression does not convert an unmeasurable group into a safe group.

## 10. Events do not equal independent evidence

In the dependence probe, the J1 nominal sample remained approximately **799** while effective sample size fell as cluster correlation increased:

| Intraclass correlation | Effective J1 sample | Effective recipient sample |
|---:|---:|---:|
| 0.00 | 716 | 35 |
| 0.10 | 648 | 32 |
| 0.30 | 471 | 23 |
| 0.60 | 334 | 16 |

The same person may interact repeatedly. One worker rates many people. Workers share managers and locations. Businesses share a platform. A single outage can create thousands of records.

The analysis plan therefore defines assignment, observation, analysis, and inference separately across consumer, worker, interaction, shift, location, business, platform, incident, and period. Event-level analysis cannot create false precision or let one mass incident masquerade as thousands of independent confirmations.

## 11. Missingness can change the conclusion

In the controlled J1 case, approximately **15%** of the relevant observations were missing at follow-up. A credible unfavorable bound included zero even though the complete-case effect was positive. Fairness and population-effect clearance therefore remained unavailable.

When missingness depended strongly on outcome, complete-case bias changed direction depending on which outcomes disappeared. The structural case does not select one universal correction technique. It requires the future analysis to:

- Map missingness at every funnel stage
- Distinguish autonomous refusal from inaccessible or failed participation
- Measure permitted preceding states and characteristics
- Compare complete case, weighting, bounded, imputed, pattern-mixture, and other justified analyses
- State the unfavorable assumption that changes the conclusion
- Remain inconclusive when a credible missingness profile reverses the primary claim

Withdrawal is not automatically missing product data to recover. It may be a protected choice. The evaluation still has to explain what can and cannot be inferred after that choice.

## 12. Many analyses can manufacture a headline

The counterfactual probability of at least one nominal 5% false positive increased rapidly with the number of analysis opportunities:

| Opportunities | Counterfactual probability |
|---:|---:|
| 1 | 0.050 |
| 5 | 0.226 |
| 20 | 0.642 |
| 100 | 0.994 |
| 500 | approximately 1.000 |

CQ creates many plausible cuts: components, representations, contexts, benefits, populations, subgroups, locations, periods, models, thresholds, and interim looks.

The repair is not to prohibit learning. It is to separate:

- Confirmatory decision analyses
- Decision-support analyses
- Descriptive results
- Exploratory discoveries

The primary hierarchy, multiplicity treatment, interim rules, and advancement criteria are registered before applicable outcomes are reviewed. Exploratory findings remain visible and may justify a prospective test. They cannot displace a null, mixed, adverse, or failed primary result in the public headline.

## 13. Zero complaints are not evidence of zero harm

At 5% detection coverage, the system observed only 5% of the generated harm signal. At 20%, it observed one fifth. A clean complaint dashboard under those conditions is evidence of weak visibility—not safety.

Harm detection must combine:

- Independent consumer and worker channels
- Accessibility support
- Protected outreach and sampling
- Mystery shopping and journey testing
- Audit and conformance evidence
- Near-miss and technical-event review
- Baseline and nonparticipant monitoring
- Challenge, correction, appeal, incident, and remedy patterns
- Qualitative research
- Authority to contain a credible severe report before statistical confirmation

Every absence-of-harm statement includes detection coverage, power, follow-up, and censoring.

## 14. Follow-up follows the risk, not the campaign

The structural proxy required progressively longer observation as claims became broader:

- Workflow: **90 days**
- Construct: **180 days**
- Intervention: **180 days**
- Portability: **365 days**

These are comparison values, not final durations.

At 80% detection and 90 days, only the workflow proxy completed its modeled tail. Construct and intervention were at 50%, and portability was at approximately 25%. All four completed only in the 365-day, full-detection reference.

The actual follow-up plan is risk-specific. Proof delivery may be immediate, while retaliation, prompting pressure, correction, recovery, privacy, incident, partner exit, appeal, remedy, credential expiry, and wind-down require different observation periods. Funding continues through the longest claim the project intends to make.

## 15. The pilot itself is part of the intervention

Observed change can come from:

- NCS or VCI evidence
- The proof interaction
- The benefit
- Extra staffing
- Worker training
- Management attention
- Consumer awareness and performance
- Temporary baseline improvement
- Novelty and expectation
- Spillover to nonparticipants or nearby locations

The controlled layered profile could separate these effects. When novelty and attention reached **0.30**, the workflow claim still survived because it did not claim causal benefit, while intervention and portability claims failed their separation gates. At **0.75**, construct, intervention, and portability claims all failed.

The pilot evaluation therefore uses staged, shadow, matched, blinded where possible, implementation-fidelity, persistence, and spillover designs. A positive result may validate the complete implementation package. It cannot be attributed to CQ itself until the design separates the alternatives.

## 16. Protected rights are not experimental variables

The simulation preserves a nonrandomizable floor.

The pilot may compare ethically approved optional interfaces, messages, timing, or genuinely additional benefits. It may not withhold or degrade:

- Ordinary baseline service
- Accessibility
- Safety
- Explanation
- Correction
- Challenge and appeal
- Benefit replacement for an owed benefit
- Incident response and notice
- Remedy
- Privacy and withdrawal
- Legally required treatment

When causal identification conflicts with a protected right, the method changes. The right does not.

## 17. Reproducibility does not require publishing a dossier

In the controlled comparison, governed rerun equivalence declined modestly as the claim became more complex:

- Workflow: **0.958**
- Construct: **0.918**
- Intervention: **0.888**
- Portability: **0.858**

Controlled person-level row reach remained bounded, and public row-level release remained zero.

The reproducibility package includes:

- Versioned code and queries
- Schemas and metric definitions
- Configuration and release identifiers
- Source and denominator manifests
- Eligibility and exclusion rules
- Missingness and sensitivity methods
- Primary and exploratory hierarchy
- Aggregate validation outputs
- Amendments and correction history
- Governed independent rerun access

Raw person-level data remains with authorized custodians or in a bounded controlled environment when necessary. A partner dashboard or PDF is not reproducibility. Neither is a permanent central copy of every person's cross-company history.

## 18. Replication burden rises with the claim

As modeled site heterogeneity rose from 0 to 1.0, replication-success proxies declined:

| Claim | At 0 heterogeneity | At 1.0 heterogeneity |
|---|---:|---:|
| Workflow | 0.970 | 0.740 |
| Construct | 0.946 | 0.575 |
| Intervention | 0.928 | 0.471 |
| Portability | 0.905 | 0.366 |

No one-site generalization was authorized at any setting.

Replication is claim-specific:

- Workflow replication changes implementation, operator, or platform enough to test the journey.
- Construct replication changes relevant people, raters, contexts, and conditions.
- Intervention replication changes site, period, implementation attention, and operating environment.
- Portability replication changes independent source and target businesses and validates the exact mapping and purpose.
- Production readiness also requires economics, rights, security, governance, provider, and exit evidence under less intensive support.

Replication is not required before learning. It is required before generalizing.

## 19. Candidate verdicts

| Candidate | Verdict | Proper claim boundary |
|---|---|---|
| J1 invitation or assignment | **Lead primary population estimand when identifiable** | Population impact under the exact assignment, observation, context, and period |
| J2 enrollment | **Required secondary estimand** | Adoption and experience of enrolled participants only |
| J3 exposure and sufficient history | **Required secondary estimand** | Evidence opportunity, sufficiency, and sparse-history effects only |
| J4 presentation | **Required selected-path estimand** | Proof journey and presenter experience only |
| J5 recipient | **Required fulfillment and value estimand** | Benefit fulfillment and recipient value only |
| J6 per protocol | **Required mechanism estimand** | Performance among people completing the protocol only |
| J7 workflow claim | **Earliest live claim candidate** | Exact tested end-to-end journey, rights, context, and release |
| J8 construct claim | **Conditional** | Requires independent measurement validity beyond workflow success |
| J9 intervention claim | **Conditional and causal** | Requires ethical comparison and separation of attention, proof, benefit, staffing, novelty, and baseline change |
| J10 portability claim | **Blocked until exact independent replication** | Requires validated source-target-purpose mapping and materially different businesses |

No candidate authorizes a general CQ, production, safety, fairness, legal, or universal business-value claim.

## 20. Requirements established by Suite J

1. Every release has a versioned evaluation charter before applicable outcomes are examined.
2. The charter names the decision, primary estimand, assignment, observation, analysis, inference, population, context, period, and explicit nonclaims.
3. J1 invitation or assignment leads population-effect reporting when identifiable; J2 through J6 remain separately reported secondary estimands.
4. Every numerator, denominator, eligibility rule, exclusion, missing state, source, version, and window is predeclared and reconciled to direct source evidence.
5. Partner-defined rates cannot replace the common denominator ladder or change after outcomes are known.
6. Low power and privacy suppression produce uncertainty, not parity or safety clearance.
7. Severe plausible harm may trigger containment through case, qualitative, accessibility, or scenario evidence without statistical confirmation.
8. Analysis accounts for repeated and shared consumers, workers, shifts, locations, businesses, platforms, incidents, and periods.
9. Missingness is mapped across the complete funnel and tested under credible outcome-dependent assumptions.
10. A conclusion that reverses under credible missingness remains inconclusive or is narrowed.
11. Confirmatory, decision-support, descriptive, and exploratory analyses remain distinct; the preregistered primary result leads public reporting.
12. Multiplicity and interim monitoring are predeclared for every decision family.
13. Harm reporting includes detection sources, coverage, power, censoring, follow-up, and independent containment authority.
14. Follow-up and funded tail are specific to the risk and claim rather than the campaign end date.
15. Workflow, construct, intervention, portability, and production claims remain separate and noninheriting.
16. Novelty, training, staffing, attention, reactivity, baseline change, benefit, and spillover are measured and separated before causal claims.
17. Protected rights and ordinary baseline service are never randomized, withheld, or degraded for methodological convenience.
18. Primary results are independently reproducible through a minimized governed analytical state without public or permanent behavioral dossiers.
19. First-site results remain site-specific; broader claims require materially different replication appropriate to the claim.
20. Public, partner, fundraising, certification, and expansion language cannot exceed the exact population, context, use, duration, maturity, and evidence tested.

## 21. What remains open

Suite J does not determine:

- The exact first-pilot decision or primary estimand
- Whether individual, location, period, or another assignment is ethical and operationally possible
- The real denominator ladder, source fields, metric dictionary, exclusions, or windows
- Sample size, precision, recruitment, power, or deliberate subgroup oversampling
- Sensitive-attribute collection authority or fairness-analysis data architecture
- Cluster levels, dependence models, interference, or effective sample assumptions
- Missingness mechanisms and appropriate bounded, weighted, imputed, or pattern-mixture methods
- Primary outcomes, multiplicity family, alpha, false-discovery, or sequential-monitoring method
- Detection methods, coverage, serious-adverse-event taxonomy, or containment thresholds
- Risk-specific follow-up periods and funded tail
- The ethical experimental variations above the protected floor
- Exact shadow, matched, staged, blinded, persistence, spillover, and implementation-fidelity design
- Controlled research environment, evaluator access, retention, rerun, correction, and deletion architecture
- Replication sites, periods, platforms, operators, contexts, or independence standard
- Consumer and worker comprehension or legitimacy
- Construct validity, causal business value, fairness, safety, legal compliance, portability, or production readiness

Those require an actual pilot profile, independent methods review, consumer and worker participation, legal and ethics review, privacy and security design, source-system access, operational research, and preregistration.

## 22. Final structural conclusion

All ten structural suites are complete.

The simulations did not discover a reason to abandon the original idea. They progressively removed unsafe shortcuts:

- NCS is protected human experience, not unrestricted rating.
- VCI is governed responsibility evidence, not business-defined truth.
- CQ leads as two contextual dimensions and purpose-bound proof, not a universal number.
- Portability starts at zero and advances through exact validated mappings.
- Proof is consumer-authorized, positive-only, and invisible when not presented.
- Recognition is additional and non-positional, with baseline parity measured.
- Identity is proportional, recoverable, and separated from a central dossier.
- Reports use a governed network lens without open-ended person or competitor queries.
- Enterprise integration is a mixed coalition with independent evidence, correction, rights, and exit.
- Stage 3 is diversified, hosted where appropriate, prepaid, capped, and protected from report dependence and founder overwork.
- Evaluation preserves every population, uncertainty, failed primary result, delayed harm, and replication boundary.

The project now has a structurally coherent system worth taking into the next phase. That is not production approval. It is the end of broad structural elimination.

The next work should proceed in this order:

1. Return to the deferred blockchain and distributed-integrity architecture question as a bounded comparison against the lighter signed, credential, transparency-log, federated, and governed-registry mechanisms already in the design.
2. Freeze the post-simulation architecture and remaining explicit open questions.
3. Begin empirical parameter work on NCS, VCI, recency, confidence, thresholds, context mappings, proof policy, and capacity—only inside the surviving structures.
4. Build synthetic and human-comprehension prototypes before any live personal data.
5. Define the exact Stage 2 and prospective Stage 3 pilot profile, budget, partners, legal classification, ethics, evaluation charter, and stop conditions.

The final outcome is neither “the model works” nor “the model failed.” It is more useful:

> The idea has survived the structural challenge, and we now know precisely what still has to be proven.
