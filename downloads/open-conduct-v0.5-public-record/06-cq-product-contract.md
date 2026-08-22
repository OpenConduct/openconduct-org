# Conduct Ecosystem — CQ Product Contract v0.1

**Status:** Proposed product contract for Review Gate 1  
**Date:** August 11, 2026  
**Controls:** Product intent, consumer representation, scope, information boundaries, and the brief for renewed CQ simulation  
**Does not yet control:** Production formula, coefficients, thresholds, context-transfer values, pilot authorization, or claims of validity

## 1. The product promise

**Conduct Quotient is one simple, consumer-readable score produced from two independently governed kinds of evidence: what eligible people reported about working with the consumer and what approved business records show about the consumer’s conduct in eligible interactions.**

The proposed primary display is a three-digit rating on a five-point scale, shown with two decimal places: for example, **CQ 4.96**.

The score is the simple product surface. Net Conduct Score (NCS), Verified Conduct Index (VCI), and the more advanced rules for context, confidence, recency, disputes, concentration, contradiction, and recovery remain underneath it.

The system must do complex work so that the consumer does not have to interpret two competing ratings, unexplained categories, or operational event counts.

## 2. What this contract corrects

The original Conduct idea proposed a recognizable quotient. Later work correctly found that NCS and VCI cannot be casually averaged or allowed to erase one another. The public representation then drifted from one quotient into two prominent dimensions.

This contract separates the internal and external decisions:

- **Internally,** NCS and VCI remain distinct, inspectable, and independently gated.
- **Externally,** the consumer experience is designed and tested around one CQ.
- **When the evidence cannot responsibly support one score,** the system shows an honest non-score state instead of manufacturing a number.

Suite C remains a valid warning: an unconstrained combined score allowed a stronger component to compensate for a below-threshold component in approximately 69% of eligible synthetic results. The renewed CQ program must solve that problem; it must not ignore it.

## 3. The CQ scale

### 3.1 Working display

The lead consumer-display candidate is:

```text
Conduct Quotient
4.96
Overall
Established history
```

The working scale is **1.00 through 5.00**, with two decimal places always shown when a score exists.

The format deliberately borrows a familiar consumer-rating convention. A person should understand that `4.96` is strong without learning a new scoring language.

### 3.2 What the hundredths place means

Two decimal places provide useful differentiation only if the evidence and calculation support them. They do not establish scientific certainty.

The renewed simulation program must establish:

- The underlying calculation precision
- The published rounding rule
- Whether displayed hundredths are stable
- The minimum change allowed to move a displayed score
- The update cadence
- How corrections and material new evidence change the display
- When a score must remain unchanged despite immaterial mathematical movement

The interface must make the five-point scale discoverable through onboarding, accessible labeling, or score details. It does not need to place “out of 5.00” beside every repeated display.

### 3.3 No default score

A new or nonparticipating consumer does not begin at `3.00`, `5.00`, a population average, or any other invented value.

No personal score is shown until the applicable evidence, validity, confidence, diversity, and independence requirements are met.

## 4. Score scopes

CQ is not one undifferentiated universal record. Every CQ must name its scope.

### 4.1 Company-specific CQ

Represents eligible direct history within one participating company or approved corporate group.

It can help the consumer and company understand an established relationship. It does not prove portability or independent support from other businesses.

### 4.2 Industry-specific CQ

Represents eligible evidence from approved mappings within a defined industry context, such as air travel, lodging, or dining.

An industry label alone does not make every event portable. Exact source-to-target mappings, relevance, rights, fairness, and legal requirements still apply.

### 4.3 Overall CQ

Represents the proposed broad view across more than one approved context family.

Overall CQ is restored as a central product ambition and consumer-experience hypothesis. It is not automatically authorized for a live pilot or production merely because it appears in prototypes.

An overall CQ can advance only if renewed simulation and human research show that:

- The contributing contexts are meaningfully related enough to synthesize
- No company, industry, or interaction pattern dominates
- Context-specific problems are not hidden
- The score is understandable and emotionally tolerable
- The result improves the consumer experience without becoming a universal moral judgment
- Its use is lawful, fair, bounded, and necessary

The research remains allowed to conclude that the overall CQ needs narrower inputs, stronger constraints, a different calculation, or no production use. Context-specific CQ can advance independently.

### 4.4 Scope presentation

The consumer’s CQ home should make scope selection obvious:

```text
Overall                    4.96
Transportation             4.98
Dining                     4.94
Hotels + vacation rentals  Building history
```

All numbers above are synthetic interface examples. They do not imply an approved formula or a live Conduct service.

## 5. The two protected inputs

CQ is one score, but it is not one source of evidence.

### 5.1 Net Conduct Score

NCS captures eligible human experience through the protected post-interaction question:

> Based only on how this customer interacted with you and others, would you want to serve them again?

The lead response labels remain:

- Definitely yes
- Probably yes
- Probably not
- Definitely not
- Not enough interaction to say

The current research weighting remains `+10, +3, −3, −10`. Workers see labels, not points, consumer standing, spending, status, or prior ratings.

### 5.2 Verified Conduct Index

VCI uses approved operational evidence to evaluate eligible events and responsibilities that were disclosed, attributable, and within the consumer’s control.

VCI is not a raw count of everything a customer “completed.” A fulfilled reservation or another disclosed responsibility may contribute only when an approved context defines why it matters, what was within the consumer’s control, and how exceptions work. Purchase volume, loyalty activity, spending, tips, complaints, accessibility requests, and other prohibited proxies do not become positive or negative conduct merely because a business can record them.

VCI remains an internal evidence profile feeding CQ. A consumer may inspect its relevant event categories and challenge individual records, but the primary CQ interface does not lead with a fraction such as “32 of 34 completed.”

### 5.3 Consumer explanation

The first-skim CQ view does not show two competing scores. A consumer may open **How your CQ was formed** to see the two inputs separately.

Working explanation labels are:

- **Human experience** — what eligible people reported about working with you
- **Verified customer record** — what approved records show about eligible interactions within your control

These labels are candidates for human and cross-cultural comprehension testing. They are deliberately neutral and do not characterize a person as nice, difficult, good, bad, reliable, or unreliable.

## 6. Non-compensation and score integrity

CQ must not be a simple 50/50 average or any other formula that allows a strong component to automatically erase a material problem in the other.

Before a CQ can exist for a scope:

1. Each required component must separately pass its construct, provenance, attribution, sampling, sufficiency, independence, fairness, rights, and dispute gates.
2. Missing evidence must not count as adverse evidence.
3. Invalid, prohibited, pending, reversed, or materially disputed evidence must not create an adverse effect.
4. A failed gate cannot be repaired by confidence weighting or strength elsewhere.
5. Material contradiction must affect the calculation, cap the result, change its status, or prevent a score according to a rule established before the result is known.
6. The same inputs, rules, context, and version must reproduce the same CQ.
7. Every displayed CQ must retain an auditable route to its active inputs and calculation version.

The exact synthesis approach is reserved for Phase 2. Candidate mechanisms include minimum component gates, weakest-link caps, conjunctive constraints, geometric synthesis, and hierarchical estimation.

## 7. Consumer score states

The product must be able to decline to show a number.

Initial non-score states for research are:

- **Building history** — eligible evidence exists but has not met the display threshold
- **Under review** — a material input or calculation is being challenged or investigated
- **Temporarily unavailable** — the result cannot currently be produced or verified safely
- **Not available in this context** — the evidence is not relevant or sufficient for the requested scope
- **Not participating** — the consumer has not enrolled or has withdrawn

These are not low scores. They must not be converted into a negative marker, disclosed as a failure, or used to reduce baseline service.

When only one context is insufficient, other independently valid contexts need not disappear. When a dispute affects only one event or component, the system should use the smallest safe pause or recalculation consistent with meaningful remedy.

## 8. Who sees what

### Consumer

The consumer may see:

- Their available overall, industry, and company-specific CQs
- Score scope, status, and last material update
- A plain explanation of how the score was formed
- The NCS- and VCI-derived inputs beneath the score
- Relevant event categories and active records when they choose to inspect them
- Confidence, limitations, disputes, corrections, and calculation version in deeper detail
- Proof requests, permissions, outcomes, benefits, and receipts
- Challenge and appeal routes

### Worker

The worker sees only the bounded response experience and the information needed to complete it safely. The worker does not see the consumer’s CQ, NCS, VCI, spending, loyalty status, prior ratings, proof eligibility, benefit, or other workers’ responses.

### Source or participating business

A participating business may process only the company-specific inputs, results, operational actions, and governed records necessary for its approved role. Ordinary frontline staff do not see raw CQ or portable history.

### Receiving business

The default receiving-business experience remains a purpose-bound result, such as **Eligible for this approved welcome benefit**. It does not receive underlying events, source companies, NCS, VCI, or the consumer’s broader CQ merely because those data exist.

The longer-term product may test consumer-authorized sharing of an actual company-, industry-, or overall CQ when a specific use independently passes necessity, comprehension, privacy, fairness, legal, and baseline-service review. Proof remains the data-minimizing default.

### Reviewer and evaluator

Authorized reviewers and independent evaluators may inspect the components, evidence, calculation, and system behavior necessary for correction, appeal, audit, fairness testing, and claims review. Access remains purpose-limited and logged.

### Public

Conduct does not create public profiles, leaderboards, searchable people ratings, social graphs, or a platform for comparing individuals.

## 9. Consumer control, challenge, and correction

The consumer can challenge:

- An underlying NCS or VCI record
- Attribution to the wrong person or interaction
- Inclusion, exclusion, status, or context of evidence
- A company-, industry-, or overall CQ
- The calculation or version applied
- A proof result
- A denied, failed, or incorrectly fulfilled benefit

The consumer does not need to argue directly with the employee who submitted an NCS response. Worker identity and safety remain protected, and a challenge is not an employee-performance event.

A credible material dispute removes or pauses the challenged adverse effect according to published rules while review occurs. Exercising review rights never becomes a conduct signal.

The consumer must receive an understandable outcome, any correction or remedy, and the next appeal option.

## 10. Sharing and benefit boundary

The consumer initiates or affirmatively authorizes every ordinary CQ presentation.

The initial proof binds:

- One consumer
- One receiving business or verifier
- One context
- One approved purpose or benefit
- One policy version
- One validity period or interaction

Refusal, withdrawal, insufficient history, nonqualification, dispute, expiry, context mismatch, and technical failure return the consumer to ordinary baseline service. The receiving business does not receive a customer-linked failure reason.

Benefits must be additional, modest, non-scarce, understandable, replaceable when the system fails, and unrelated to safety, legal rights, complaints, accessibility, essential service, material pricing, credit, insurance, deposits, or punishment.

## 11. Pilot posture

Restoring CQ as one score changes the product hypothesis, not the order of responsible testing.

Before a real score affects a benefit:

1. Candidate formulas run on synthetic and adversarial histories.
2. The `x.yz` display is tested against two dimensions, tiers, and proof-only controls.
3. First-time consumers test comprehension, anxiety, perceived fairness, and challenge behavior.
4. Workers test the protected NCS workflow independently of consumer scoring.
5. Real-event collection begins in shadow mode.
6. Consumers privately inspect and challenge the candidate score before another business can act on it.
7. The first live use remains one narrow context and one low-risk additional benefit.
8. Overall CQ remains outside the first live pilot unless a later explicit gate authorizes it.

## 12. Matters reserved for Phase 2

This contract does not select:

- The production CQ formula
- NCS and VCI normalization
- Component weights or priors
- Minimum component gates
- Contradiction caps
- Confidence functions
- Evidence thresholds
- Recency periods
- Context-transfer coefficients
- Overall-CQ composition
- Rounding and score-change rules
- Update cadence
- Exact descriptors or status labels
- Benefit eligibility thresholds
- Whether any approved receiving business should see a raw CQ

Those decisions require the renewed simulation and human-research program.

## 13. Review Gate 1 acceptance test

This contract is ready to become the Phase 2 brief when the project agrees that:

1. CQ returns to one primary `x.yz` consumer score.
2. NCS and VCI remain distinct protected inputs beneath that score.
3. The system may return an honest non-score state.
4. Overall, industry, and company-specific CQs are visibly different scopes.
5. Overall CQ is a core ambition but not an automatic first-pilot capability.
6. Non-compensation is a required property, not an optional formula preference.
7. Consumers can understand and challenge both the result and its inputs.
8. Workers never see the score or numerical response weights.
9. Receiving businesses ordinarily receive a limited proof rather than the score or history.
10. Historical simulations remain intact and the new direction is tested as a documented follow-on.

Approval of this contract authorizes Phase 2 simulation design. It does not authorize ecosystem-wide copy migration, publication claims, real-person scoring, proof issuance, or benefits.
