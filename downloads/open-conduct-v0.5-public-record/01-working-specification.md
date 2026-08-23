# The Conduct Ecosystem

## System Specification

| Field | Value |
|---|---|
| Document status | Working specification after Review Gate 2; CQ product architecture provisionally selected; empirical parameters, calibration, human validation, legal classification, and implementation remain open |
| Version | 0.5-working-draft |
| Owner | Brent Turner |
| Last updated | August 11, 2026 |
| Current scope | Consumer-to-business conduct and rewards |
| Future scope | Business-to-business and person-to-person professional relationships |
| Marketing status | Public narrative and websites require Phase 4–5 migration before announcement production resumes |

## How to read this specification

This document defines the intended behavior, safeguards, governance, and implementation requirements of the Conduct Ecosystem. It is the single source of truth for product, policy, technical, legal, operational, and design decisions.

Five decision classes distinguish protections and system meaning from hypotheses and later work:

- **CONSTITUTIONAL:** A purpose, right, protection, prohibition, or accountability boundary that the system may not optimize away.
- **REQUIRED FOR COHERENCE:** A semantic, scope, provenance, lifecycle, or architectural rule necessary for the current system to remain understandable and reproducible.
- **CANDIDATE:** A lead empirical, mathematical, product, operating, economic, partner, interface, or narrative choice that must remain replaceable by evidence.
- **DEFERRED:** Intentionally outside the current stage; dependent implementation is blocked unless a later gate reopens it.
- **REJECTED:** A considered alternative that is not part of the active design.

The decision register applies these classes to every recorded decision. Module requirement tables use the same classes. Importance does not make a hypothesis constitutional.

The words **MUST**, **SHOULD**, and **MAY** carry their standard requirements meanings:

- **MUST** identifies a mandatory requirement.
- **SHOULD** identifies the expected design unless a documented reason supports an exception.
- **MAY** identifies an optional capability.

### Working-draft status and version history

Version 0.5 is the current single source of truth for a proposed open standard. It records the product contract and the provisional structural leads selected after Suites K and L. It is suitable for continued specification work, scrutiny, contribution, prototype design, and nonexclusive partner discovery. It does not authorize real-person scoring, credentials, differentiated benefits, consumer enrollment, certification, an operating alliance, a report product, or claims of demonstrated fairness, safety, validity, business value, portability, legal compliance, or production readiness.

The system's purpose, component meanings, rights, prohibited uses, context boundaries, custody direction, accountability architecture, and claims discipline remain protected. The following are provisional structural leads rather than production approvals:

- one consumer-facing CQ within a valid scope;
- separately governed NCS- and VCI-derived inputs beneath it;
- K3 capped arithmetic synthesis as the one-scope research family;
- L4 contradiction-aware synthesis as the bounded overall-CQ research family;
- a working `1.00–5.00` display with two decimal places;
- purpose-bound proof as the default verifier output; and
- company- and approved context-specific CQ before any overall CQ pilot.

Exact coefficients, thresholds, display calibration, labels, persistence rules, benefits, context maps, technologies, providers, legal classifications, partners, pilots, and institutional implementation remain candidate or deferred decisions. Public materials MUST preserve that distinction.

Version 0.4 remains the historical announcement baseline. Its pre-migration digest and supersession record appear in `Conduct Quotient — Version 0.4 Historical Manifest.md`. Suites A–J and the post-Simulation-J freeze remain valid historical research. Suites K and L are explicit follow-on amendments; they do not retroactively change Suite C.

---

# Part I: Foundation

## 1. Executive overview

### 1.1 The problem

Businesses maintain detailed records of what customers spend, how frequently they transact, what support they require, and what financial or operational risk they create. Those systems rarely recognize how customers treat frontline employees or whether they reliably fulfill their side of a transaction.

Traditional loyalty programs therefore reward economic value while overlooking conduct. A high-spending customer may receive premium treatment despite routinely creating avoidable work or treating employees poorly. A considerate, reliable customer may receive no recognition beyond the value of their purchases.

At the same time, AI agents are beginning to handle more bookings, purchases, comparisons, returns, and negotiations. Personhood credentials may help businesses determine whether a human exists behind an agent. They do not establish what kind of working relationship that person has earned with other humans and businesses.

### 1.2 The proposal

The Conduct Ecosystem is a voluntary, consumer-controlled framework for measuring conduct during verified commercial interactions, allowing consumers to carry earned trust between participating businesses, and enabling businesses to provide additional benefits based on that trust.

The system uses two distinct inputs:

1. **Net Conduct Score (NCS):** A human assessment of whether an eligible employee would want to serve the customer again, based only on how the customer interacted with people during a verified interaction.
2. **Verified Conduct Index (VCI):** Verified operational evidence showing whether the customer fulfilled the observable responsibilities of the interaction.

A synthesis function evaluates those inputs while accounting for their separate validity, context, confidence, recency, patterns, disputes, concentration, and system-wide anomalies. When both required inputs independently clear their gates, the provisional K3 family produces one contextual **Conduct Quotient (CQ)** without allowing the stronger input to lift the result more than the approved cap above the weaker one. The CQ is held for the consumer and disclosed only at the consumer's direction.

Participating businesses use limited, purpose-specific CQ proofs to grant optional benefits. They do not receive the consumer's complete interaction history.

### 1.3 The intended outcome

The Conduct Ecosystem should create a form of behavioral loyalty alongside transactional loyalty. It should:

- Give frontline employees a lightweight way to record the human quality of verified interactions.
- Give reliable customers recognition for conduct that traditional loyalty systems ignore.
- Give businesses a privacy-preserving way to reduce friction and deepen relationships with trusted customers.
- Allow earned trust to travel without creating a public reputation leaderboard or centralized surveillance file.
- Establish an open, independently governed standard that can be audited, challenged, and improved.

### 1.4 Stakeholder value

| Stakeholder | Current problem | Intended value |
|---|---|---|
| Consumers | Reliable, considerate conduct is rarely recognized and cannot travel between businesses. | Consumer-controlled proof of earned trust and access to optional benefits. |
| Frontline employees | Customer behavior affects their work, but most customer systems give them no structured voice. | A fast, verified input mechanism supported by anti-retaliation and fairness safeguards. |
| Participating businesses | Spending data does not reveal which customer relationships are reliable, respectful, and low-friction. | A new loyalty input that can support service discretion and relationship benefits. |
| Ecosystem partners | Cross-company trust normally requires pooling sensitive records or accepting incompatible scoring systems. | Shared schemas, certified calculations, and selective proofs without raw-history exchange. |

## 2. Scope

### 2.1 Initial scope

**REQUIRED FOR COHERENCE:** The first implementation focuses on interactions between individual adult consumers and participating businesses.

The initial specification covers:

- Verified interactions in travel, hospitality, reservations, rentals, and adjacent service categories.
- Human conduct input from an eligible employee who directly participated in the interaction.
- Verified operational evidence produced by participating business systems.
- Synthesis of human and operational inputs into a contextual Conduct Quotient.
- A private consumer-facing CQ within each sufficiently supported company or approved context scope, using a working `1.00–5.00` display with two decimal places.
- Consumer-controlled sharing of company-specific and validated context-specific CQ or, by default, a narrower purpose-bound proof.
- Research on a bounded overall CQ only after company- and context-specific CQ establishes valid mappings, independence, coherence, comprehension, and acceptable legal and fairness performance. Overall CQ remains outside the initial live pilot.
- Optional rewards, service discretion, or reduced friction for qualifying consumers.
- Consumer visibility, correction, dispute, appeal, recovery, and withdrawal controls.
- Independent governance, certification, auditing, incident response, and versioning.

### 2.2 Future scope

**DEFERRED:** The underlying model may later support conduct between:

- Clients and service providers
- Businesses and vendors
- Business partners
- Coworkers and project collaborators
- Members of other verified professional communities

Those relationships introduce different power dynamics, legal duties, and employment risks. They MUST NOT be enabled merely by reusing the consumer implementation.

### 2.3 Non-goals

The initial Conduct Ecosystem is not intended to:

- Produce a public social score or searchable reputation profile.
- Rank the moral worth, personality, social status, or general character of a person.
- Deny baseline service, increase prices, blacklist people, or impose punitive treatment.
- Replace fraud detection, credit scoring, criminal background checks, identity proofing, or existing safety systems.
- Evaluate employee performance.
- Pool raw customer histories in a shared cross-company database.
- Infer conduct from social media, demographics, protected characteristics, location history, purchasing power, or unrelated behavior.
- Treat self-service or reduced human assistance as inherently better conduct.
- Apply one context's conduct history automatically to an unrelated context.
- Launch business-to-business, employment, or coworker scoring during the consumer pilot.
- Finalize public positioning, website architecture, or launch marketing before the system requirements are stable.

## 3. System principles

### SP-01: Conduct is interaction-specific

**CONSTITUTIONAL:** The system evaluates behavior within verified interactions. It does not claim to determine whether someone is a good or bad person.

### SP-02: Human experience and operational evidence remain distinct

**REQUIRED FOR COHERENCE:** NCS and VCI measure different dimensions of conduct. Neither input may silently substitute for, validate, or repair the other. The consumer-facing CQ may combine them only after both independently clear their gates and only through a non-compensating rule. Their separate provenance, validity, evidence state, and challenge path remain inspectable beneath the score.

### SP-03: Participation is voluntary

**CONSTITUTIONAL:** Consumers choose whether to participate and which approved proof to share. Declining participation MUST leave baseline service unchanged.

### SP-04: The system provides additional benefits only

**CONSTITUTIONAL:** CQ may qualify a consumer for separately funded, approved optional benefits. It MUST NOT be used to deny or degrade baseline service, raise a standard price, restrict legal rights, create a blacklist, or expose why an eligible proof was not presented.

Loss of an existing CQ-based benefit may still feel punitive and may have legal consequences. Benefit suspension, expiration, and removal therefore require clear rules, notice, and appeal.

“Additional benefits only” is an enforceable design objective, not a claim that relative harm is impossible. The system MUST measure whether nonparticipants, consumers with insufficient history, consumers who decline proof, and consumers who do not qualify experience worse effective service, stigma, suspicion, reduced opportunity, or coercive pressure. A benefit that materially creates those effects MUST be redesigned, restricted, or stopped.

The reward catalog is open-ended and governed benefit by benefit under Section 13.19. A participating business MAY decide how generously to recognize the customers its own workers most want to serve, and generosity itself is not a defect. The requirement that an initial benefit be modest, nonessential, reversible, and free of scarce or meaningful value taken from other customers is scoped to the **first pilot benefit**, where the objective is to test safety, fairness, and comprehension rather than the appeal of the reward. That restriction MUST NOT be published or interpreted as a permanent ceiling on approved recognition. Rewards drawn from scarce or positional inventory carry materially harder fairness, baseline-parity, and competition questions and are therefore later candidates rather than prohibited ones.

One boundary is permanent at every tier and for every benefit class: expedited, deprioritized, or otherwise differentiated handling of complaints, refunds, corrections, disputes, appeals, accommodations, safety responses, legally owed remedies, or any other rights process is prohibited regardless of CQ, benefit tier, or business preference.

### SP-05: Sharing is contextual and minimal

**CONSTITUTIONAL:** Businesses receive the minimum proof required for an approved use. A verifier should learn whether the consumer satisfies a relevant condition, not receive the consumer's underlying events or full history.

### SP-06: Consumers can understand and challenge the system

**CONSTITUTIONAL:** Consumers must be able to see what categories of information affected their CQ, identify the issuing business, correct factual errors, dispute misuse, and appeal material outcomes.

### SP-07: The system supports recency and redemption

**CONSTITUTIONAL:** Older events lose influence according to published rules. Isolated events are distinguished from sustained patterns. Historical trust cannot permanently excuse new harmful conduct, and old conduct cannot follow a person indefinitely.

### SP-08: Accessibility and equity are design requirements

**CONSTITUTIONAL:** Disability, language, culture, age, income, payment method, device ownership, need for human help, and other protected or accessibility-related factors must not become direct penalties or unexamined proxies.

### SP-09: Calculations are explainable and auditable

**CONSTITUTIONAL:** The scoring and proof rules must be documented, versioned, reproducible, and independently auditable. Black-box predictions of future character or behavior are outside scope.

Statistical techniques may be used for normalization, confidence estimation, anomaly detection, and network monitoring only when their purpose, inputs, limitations, and effects are documented.

### SP-10: Governance is independent and multi-stakeholder

**CONSTITUTIONAL:** No participating company may unilaterally control the standard, calculation rules, audit process, or consumer appeals. Governance must include meaningful representation for consumers, frontline workers, participating businesses, civil-rights and accessibility experts, privacy and security experts, and independent technical reviewers.

### SP-11: The system earns permission through evidence

**CONSTITUTIONAL:** Capabilities expand only after pilots demonstrate accuracy, fairness, consumer comprehension, operational value, and acceptable legal risk. The specification should prefer a narrower validated system over a global claim that cannot be supported.

## 4. Consumer rights

Every participating consumer has the following rights:

### CR-01: The right to baseline service

A consumer's participation status, CQ, or lack of history MUST NOT reduce access to the standard product or service available to a comparable non-participant.

### CR-02: The right to informed participation

Consumers MUST receive a plain-language explanation of what is measured, who contributes information, how CQ may be used, how long information remains relevant, and how to leave the system.

### CR-03: The right to selective disclosure

Consumers MUST control whether they share a company-specific, validated industry-specific, tier, threshold, or eligibility proof. If an overall-CQ research view is ever approved, it requires the same control plus separate heightened disclosure and consent.

### CR-04: The right to inspect provenance

Consumers MUST be able to identify which businesses contributed information, the category and date of each contributing event, its current status, and whether it is disputed. Access to an employee's identity may be limited when necessary for employee safety.

### CR-05: The right to correction, dispute, and appeal

Consumers MUST have one understandable way to raise a concern about an underlying event, identity attribution, NCS or VCI input, contextual CQ result, proof response, or benefit decision. They MUST be able to correct factual information, dispute improperly issued events, request recalculation, submit relevant context, receive an explanation, and appeal material decisions to an entity independent of the issuing business.

### CR-06: The right to understand material changes

When a CQ tier, proof eligibility, or material benefit changes, the consumer MUST receive an understandable explanation of the event categories and rules responsible for the change.

### CR-07: The right to privacy and security

The system MUST minimize collection, limit retention, encrypt sensitive data, prevent unauthorized correlation, record disclosures, and provide secure account recovery and credential revocation.

### CR-08: The right to accessibility and equal treatment

Participation, review, dispute, and proof presentation MUST be available through accessible alternatives. A consumer cannot be penalized for needing human assistance or lacking a compatible personal device.

### CR-09: The right to withdraw

Consumers MUST be able to stop future participation and revoke future sharing permissions. The specification must separately define which historical records may be deleted, anonymized, or retained for legal, audit, security, and anti-fraud purposes.

## 5. Canonical architecture

### 5.1 Five components, not five sequential layers

**REQUIRED FOR COHERENCE:** The Conduct Ecosystem contains five primary components. Four participate in the operating flow; the fifth governs the entire system.

```text
Verified interaction
       |
       +--> Net Conduct Score ---------+
       |                                |
       +--> Verified Conduct Index -----+--> Conduct synthesis --> Conduct Quotient
                                                                    |
                                                                    +--> Consumer-approved proof
                                                                    |
                                                                    +--> Optional business benefit

Open Conduct Alliance governs schemas, certification, audits, rights, appeals, and versions across the full flow.
```

Identity, signed event provenance, selective disclosure, security, revocation, and recovery are cross-cutting infrastructure rather than separate scoring components.

### 5.2 Component responsibilities

| Component | Primary responsibility | Receives | Produces | Primary control |
|---|---|---|---|---|
| Net Conduct Score (NCS) | Capture the direct human experience of a verified interaction. | Eligible employee response linked to an interaction. | Normalized human conduct input with provenance and confidence. | Standardized by OCA; issued through participating businesses. |
| Verified Conduct Index (VCI) | Represent verified operational behavior relevant to the interaction. | Signed operational events, states, corrections, and dispute outcomes. | Contextual operational input with provenance and confidence. | Issuing business owns source record; OCA governs schemas and eligibility. |
| Conduct synthesis function | Validate and combine eligible NCS- and VCI-derived inputs through published non-compensation and context rules. | Separately gated inputs, confidence, context, recency, disputes, and network conditions. | One contextual CQ or an honest non-score state, plus approved proof eligibility. | Certified, versioned implementation governed by OCA. |
| Conduct Quotient (CQ) | Give the consumer one simple, contextual, controllable representation produced from two independently governed kinds of evidence. | Certified synthesis output. | Private company-, context-, or research-approved overall CQ and purpose-bound proofs. | Held for and disclosed by the consumer. |
| Open Conduct Alliance (OCA) | Govern the shared standard and protect network integrity. | Stakeholder decisions, audits, incidents, appeals, and evidence. | Standards, certifications, versions, rulings, sanctions, and public reporting. | Independent multi-stakeholder governance. |

### 5.3 End-to-end operating flow

The target operating flow is:

1. A verified interaction occurs between a participating consumer and business.
2. An eligible employee may submit an NCS response linked to that interaction.
3. Eligible business systems may issue VCI events or update the state of earlier events.
4. Signed inputs become available to a certified synthesis implementation.
5. The synthesis function applies the current rules for context, confidence, recency, patterns, disputes, and network anomalies.
6. The consumer's CQ state updates.
7. The consumer chooses whether to present an approved proof to a participating business.
8. The verifier confirms the proof and may grant an optional benefit.
9. The consumer can inspect provenance, review disclosures, correct factual errors, dispute misuse, and appeal material outcomes.

The exact storage, calculation, credential, and verification architecture is a **CANDIDATE** decision pending the identity, privacy, and security workstream.

## 6. Canonical terminology

| Term | Canonical definition |
|---|---|
| Conduct | Observable behavior within a verified interaction. It includes treatment of people and fulfillment of relevant interaction responsibilities. |
| Verified interaction | An interaction whose participants, time window, business context, and eligible roles can be established with sufficient confidence. A payment is one possible anchor but is not always required. |
| Net Conduct Score (NCS) | The human-input component capturing an eligible employee's willingness to serve the consumer again, based only on how the consumer interacted with people during a verified interaction. |
| NCS response | A single eligible answer to the approved NCS prompt, bound to a verified interaction. |
| Verified Conduct Index (VCI) | The operational-input component representing verified events and states relevant to whether the consumer fulfilled the interaction's observable responsibilities. |
| VCI event | A signed operational assertion with an issuer, event type, timestamp, context, status, confidence, and correction or dispute lifecycle. |
| Conduct synthesis function | The certified rules and calculations that combine eligible NCS and VCI inputs. This replaces the draft term “Sovereign Conduct Protocol” until the technical and public naming architecture is resolved. |
| Conduct Quotient (CQ) | A consumer-controlled contextual score produced from separately valid NCS- and VCI-derived inputs through a governed non-compensating synthesis rule. The working display is `1.00–5.00` with two decimal places; its calibration and production authorization remain open. |
| CQ proof | A signed, purpose-specific verification derived from CQ, such as a threshold, tier, industry, company-specific, or benefit-eligibility proof. |
| Overall CQ | A research-only CQ summary of every currently valid context CQ in one fixed, approved, independently supported source set. It requires at least two context families, equal family influence, non-compensation, and a Context varies state. It remains outside the initial live pilot. |
| Industry CQ | A CQ representation limited to exact approved mappings within an industry or closely related interaction-function context. A broad industry label does not establish relevance. |
| Company-specific CQ | A CQ representation limited to interactions associated with one participating business or approved corporate group. |
| Issuer | A certified entity that creates an eligible NCS response, VCI event, credential, or network assertion. |
| Consumer / holder | The person whose conduct is represented and who controls disclosure of CQ proofs. |
| Verifier | A participating business that requests and validates an approved CQ proof for a disclosed purpose. |
| Baseline service | The standard product, price, access, and service level available to a comparable consumer without CQ consideration. |
| Optional benefit | An additional privilege, convenience, access path, recognition, or experience made available through an approved CQ use case. |
| Context | The business, industry, interaction type, role, jurisdiction, and purpose that determine whether an input or proof is relevant. |
| Open Conduct Alliance (OCA) | The independent body governing standards, certification, audit, appeals, versioning, and network integrity. |

---

# Part II: Core System

## 7. Net Conduct Score specification

### 7.1 Purpose

The Net Conduct Score captures the direct human experience of a verified interaction. It answers one narrow relationship question: based only on how the consumer interacted with people, would the employee want to serve that consumer again?

NCS does not evaluate spending, loyalty status, profitability, service complexity, complaint validity, or whether the consumer made the business happy. It also does not determine whether the consumer is generally a good or bad person.

The NCS output is one input to conduct synthesis. It MUST NOT independently create a CQ proof, benefit decision, service restriction, safety decision, or employee-performance decision.

### 7.2 Core requirements

| ID | Requirement | Status |
|---|---|---|
| NCS-001 | Every NCS response MUST be linked to one verified interaction. | REQUIRED FOR COHERENCE |
| NCS-002 | The rater MUST have participated directly in the interaction and have sufficient contact to answer the prompt. | REQUIRED FOR COHERENCE |
| NCS-003 | The lead prompt is: “Based only on how this customer interacted with you and others, would you want to serve them again?” | CANDIDATE |
| NCS-004 | The scored response scale contains four choices: Definitely yes, Probably yes, Probably not, Definitely not. A separate “Not enough interaction to say” action records an unscored abstention rather than a neutral response. | CANDIDATE |
| NCS-005 | The lead graduated scoring model assigns +10, +3, -3, and -10 response points respectively. The weighted mean is rescaled to a -100 to +100 NCS. | CANDIDATE |
| NCS-006 | A response MUST reflect willingness to serve the consumer again based only on how the consumer interacted with people—not spending, status, tipping, profitability, service complexity, service outcome, need for assistance, language, disability, or complaint activity by itself. | CONSTITUTIONAL |
| NCS-007 | The employee MUST NOT see the consumer's existing NCS, VCI, CQ, tier, or proof eligibility before submitting a response. | CONSTITUTIONAL |
| NCS-008 | NCS MUST NOT replace existing emergency, safety, fraud, harassment, or incident-reporting processes. | CONSTITUTIONAL |
| NCS-009 | NCS MUST NOT be used to score employee performance, set employee compensation, or impose rating quotas. | CONSTITUTIONAL |
| NCS-010 | Businesses MUST use a declared, auditable sampling policy and MUST NOT selectively rate consumers based on status, complaint activity, protected traits, or expected response. | CANDIDATE |
| NCS-011 | Multiple responses associated with the same interaction MUST be capped so one service event cannot gain disproportionate weight. | REQUIRED FOR COHERENCE |
| NCS-012 | Both negative responses MUST require one additional approved structured conduct category for eligibility review, bias analysis, and appeal. The category does not alter numerical severity. | REQUIRED FOR COHERENCE |
| NCS-013 | The standard capture interaction SHOULD take less than two seconds for the employee. | CANDIDATE |
| NCS-014 | A rater may consider only conduct they directly experienced or directly observed during the verified interaction; reports, summaries, notes, and other ratings are ineligible. | CONSTITUTIONAL |
| NCS-015 | The worker MUST NOT learn that the consumer participates in CQ or that the interaction was selected for NCS until the interaction is complete. | CONSTITUTIONAL |
| NCS-016 | Every worker may abstain or not respond without penalty, explanation, lost work, reduced pay, adverse scheduling, or performance effect; NCS activity occurs on compensated time. | CONSTITUTIONAL |
| NCS-017 | A manager or workforce system MUST NOT receive individual NCS response values, completion records, consumer outcomes, or rater-level distributions. This applies to any function inside the business, however it is named, including analytics, insight, and customer-experience teams. | CONSTITUTIONAL |
| NCS-018 | Eligibility, sampling selection, prompt delivery, nonresponse, and unable-to-assess abstention MUST remain distinguishable states. | REQUIRED FOR COHERENCE |
| NCS-019 | Multiple responses from one interaction MUST be treated as one statistical cluster and MUST NOT increase interaction count, issuer diversity, or independence as if they came from separate events. | REQUIRED FOR COHERENCE |
| NCS-020 | Privacy-minimized event context MUST support detection of material business failure, protected consumer activity, and chronology without exposing complaint content as a scoring input. | CANDIDATE |
| NCS-021 | Every response MUST be a deliberate act by a human rater who participated in the interaction. A response MUST NOT be generated, derived, inferred, pre-filled, defaulted, ranked, or suggested by any automated system. | CONSTITUTIONAL |
| NCS-022 | Facial analysis, voice and speech analysis, tone, prosody, word choice, sentiment classification, affect or emotion detection, biometric signals, video, and audio MUST NOT be used as inputs to a response, whether to produce one or to recommend one to a rater. Displaying a proposed response, ordering the choices by predicted likelihood, or marking one as expected constitutes producing the response. | CONSTITUTIONAL |
| NCS-023 | A response, and any record derived from one, MUST NOT be used to train, fine-tune, evaluate, or calibrate a model that infers emotion, affect, personality, or conduct about any person. This restriction travels with the data and binds every downstream recipient. | CONSTITUTIONAL |
| NCS-024 | A rater MUST NOT be given a free-text field describing the consumer, and no narrative account of a person may be captured, stored, transmitted, or scored. Where an approved category requires a short factual note, that note MUST NOT enter any calculation, MUST NOT reach a receiving business, and is available only through protected review. | CONSTITUTIONAL |

### 7.3 Eligible interactions

An interaction is eligible for NCS only when all of the following are true:

1. The consumer has opted into the Conduct Ecosystem for the relevant context.
2. The business is an active, certified participant.
3. The interaction can be bound to a unique interaction identifier and a sufficiently confident consumer identifier.
4. A human employee directly interacted with the consumer and bases the response only on conduct they directly experienced or directly observed during that interaction.
5. The employee had enough contact to answer the approved repeat-interaction prompt; otherwise the employee may record the unscored “Not enough interaction to say” action.
6. The interaction falls within an approved context and interaction type.
7. The response is submitted within the approved capture window.
8. The consumer's conduct can be distinguished from the conduct of other people in the party.

A direct financial payment is not required when another reliable interaction anchor exists. Examples may include a passenger manifest, reservation, support case, rental agreement, verified check-in, or other certified service record.

The following interactions are ineligible:

- Interactions handled entirely by automation with no participating employee.
- Observations made by an employee who did not interact directly with the consumer, or reports, manager summaries, CRM notes, incident labels, reputation, and ratings supplied by other people.
- Group interactions in which the responsible person cannot be identified with sufficient confidence.
- Ratings based on hearsay, reputation, social media, earlier unrelated encounters, or instructions from another employee.
- Interactions outside the approved response window.
- Interactions generated solely to create or manipulate conduct history.
- Interactions associated with a consumer who did not opt into network participation.

### 7.4 Eligible raters

An eligible rater is an employee or authorized frontline representative who directly participated in the verified interaction.

Eligible raters MAY include gate agents, flight attendants, hotel staff, reservation hosts, servers, rental representatives, support agents, or comparable service roles when their participation is verifiable.

Managers and supervisors may respond only when they personally participated. They may not submit a response on behalf of another employee or direct an employee which response to choose.

Each rater must authenticate through the participating business. The event must contain a pseudonymous rater identifier sufficient for duplication controls, bias audits, and investigation. The consumer does not automatically receive the employee's identity.

Authentication does not give the employer ordinary access to the response. Individual response values, completion behavior, consumer outcomes, and rater-level distributions must be separated from managers, workforce analytics, scheduling, compensation, coaching, and discipline. Named trust-and-safety personnel may receive purpose-limited access for a documented investigation under logged, auditable controls.

### 7.5 Prompt and response scale

The lead prompt is:

> **Based only on how this customer interacted with you and others, would you want to serve them again?**

The interface must include concise guidance:

> Consider only how the person interacted with people. Do not consider spending, status, tip, profitability, service complexity, need for assistance, language, disability, a complaint by itself, or whether the company achieved its preferred outcome.

The four responses mean:

| Response | Intended interpretation | Baseline numerical contribution |
|---|---|---:|
| Definitely yes | Based on the consumer's conduct with people, the employee is confident they would want to serve the consumer again. | +10 |
| Probably yes | Based on the consumer's conduct with people, the employee leans toward wanting to serve the consumer again but is not definite. | +3 |
| Probably not | Based on the consumer's conduct with people, the employee leans against wanting to serve the consumer again but is not definite. | -3 |
| Definitely not | Based on the consumer's conduct with people, the employee is confident they would not want to serve the consumer again. | -10 |

The scoring method must be published, but the worker capture interface should ordinarily display the response labels without their numerical points. The employee should answer the human question rather than optimize the consumer's numerical outcome.

The inner choices are intentional. They preserve direction while expressing less conviction than the definite responses. Every scored response affects the baseline NCS; definite responses carry ten points and probable responses carry three. The 10:3 ratio is a simple lead hypothesis, not a claim that an ordinal psychological distance has been scientifically established.

**Not enough interaction to say** is a separate non-scoring action. It is not a fifth scale point, midpoint, or conduct judgment. Its frequency must be retained for eligibility, missingness, sampling, workflow, and fairness analysis.

A consumer who is angry about a company failure but remains respectful to the employee should remain eligible for a positive response. A consumer who receives a smooth outcome but treats the employee poorly may receive a negative response.

The response measures willingness to re-engage based on the consumer's human conduct, not agreement or commercial value. Complaining, requesting escalation, disputing a charge, asking for an accommodation, declining an upsell, or refusing an improper request cannot by itself justify a negative NCS response.

### 7.6 Capture experience

The NCS prompt should appear as close to the end of the interaction as practical. The working response window is **24 hours**, subject to pilot validation.

The standard positive flow is one tap. Either negative response must trigger a second structured selection so the system can support eligibility review, bias analysis, and appeal without requiring free-form employee commentary.

The provisional reason categories are:

- Abusive or degrading treatment
- Threat, intimidation, or harassment
- Targeted discriminatory conduct
- Deliberate interference with the service or with other people
- Other conduct requiring review

Reason categories do not change numerical severity. They support eligibility review, aggregate safety analysis, and consumer appeal. “Other” may require a short factual note available only through protected review, but free text MUST NOT enter the scoring calculation.

The worker should ordinarily learn that an NCS prompt exists only after the verified interaction is complete. The capture interface must not reveal prior conduct history, CQ participation during service, benefit eligibility, loyalty-derived conduct status, or the reason the interaction was selected.

Severe threats, violence, suspected crime, or immediate safety risks must continue through the business's existing incident and emergency systems. NCS is not a substitute.

The rater should be able to correct an accidental tap during a short confirmation window. After submission, the response becomes append-only: it may be withdrawn, disputed, or invalidated with a recorded reason, but it may not be silently edited.

### 7.7 Sampling requirements

Selective sampling and selective completion could distort NCS more than the numerical formula itself. A business must therefore adopt one certified sampling model:

1. **Census model:** Every eligible interaction produces an NCS prompt.
2. **Random-sample model:** A documented random process selects eligible interactions without reference to the consumer's identity, status, complaint activity, expected outcome, or protected traits.

Businesses may not prompt only after complaints, only after positive outcomes, only for high-value customers, or only when an employee expects to submit a negative response. Selection must occur through the certified rule without using the expected response or a later business outcome.

The system must separately record eligible interactions, interactions selected, prompts delivered, scored responses, explicit unable-to-assess abstentions, and nonresponses. A delivered prompt is not equivalent to a completed random observation. Worker participation remains voluntary; missingness must be modeled and audited rather than eliminated through compulsion.

Sampling rules, stage-specific rates, response distributions, and missingness patterns must be available for audit. Material deviations or selective completion beyond validated limits may stop proof eligibility, suspend inputs, or lead to loss of certification.

### 7.8 NCS event record

Every submitted response creates a signed NCS event. The logical event schema includes:

| Field | Purpose |
|---|---|
| Event identifier | Prevent duplication and support lifecycle tracking. |
| Interaction identifier | Bind the response to one verified interaction. |
| Consumer identifier | Bind the response to the correct participating consumer using a context-appropriate pseudonymous identifier. |
| Business issuer identifier | Establish which certified business issued the event. |
| Rater identifier | Support authentication, duplicate detection, audit, and investigation without routine consumer disclosure. |
| Rater role and eligibility assertion | Demonstrate that the employee directly participated and was permitted to respond. |
| Interaction context | Record the industry, business, interaction type, role, jurisdiction, and other approved context tags. |
| Response | Record one of the four approved choices. |
| Reason category | Required for specified responses if the provisional second-tap rule is adopted. |
| Interaction and response timestamps | Enforce eligibility windows and support recency calculations. |
| Sampling method | Demonstrate whether the event came from census or certified random sampling. |
| Sampling and capture state | Distinguish eligibility, selection, delivery, nonresponse, unable-to-assess abstention, and scored completion. |
| Attribution confidence | Record confidence that the response applies to the correct person in an individual or group interaction. |
| Protected-activity and business-failure context | Preserve privacy-minimized source and chronology needed to detect retaliation or outcome contamination without entering complaint content into scoring. |
| Software and schema version | Make the event reproducible and auditable. |
| Lifecycle status | Record whether the event is active, disputed, withdrawn, invalidated, expired, or superseded. |
| Issuer signature | Establish integrity and provenance. |

The NCS scoring input MUST exclude:

- Spending, fare class, loyalty tier, tip amount, profitability, or customer lifetime value
- Protected characteristics
- Social media activity or general reputation
- Unrelated location or purchase history
- Employee free text
- The consumer's existing CQ or proof eligibility
- The business's desired commercial outcome

### 7.9 Event lifecycle

An NCS event moves through the following logical states:

1. **Created:** The authenticated employee submits a response.
2. **Validated:** Eligibility, interaction binding, response window, duplication, issuer status, and schema requirements pass automated checks.
3. **Active:** The event is eligible for NCS aggregation and conduct synthesis.
4. **Disputed:** The consumer or an authorized reviewer challenges eligibility, attribution, retaliation, bias, or misuse.
5. **Withdrawn:** The authenticated rater retracts a response through a protected channel under an approved policy. The original event remains auditable. A manager may report a suspected error but may not initiate, execute, demand, or routinely observe a withdrawal.
6. **Invalidated:** The business or independent reviewer determines that the event was ineligible, misattributed, manipulated, retaliatory, or otherwise noncompliant.
7. **Expired:** The event no longer contributes under the applicable recency rules but remains subject to the approved audit and retention policy.
8. **Superseded:** A later signed correction or ruling replaces the event's active effect without rewriting its history.

Participating businesses may not delete positive or negative events to improve their own statistics, protect favored customers, punish disfavored customers, or hide misuse.

Withdrawal patterns must be audited for consumer value, complaint or protected-activity status, manager, location, and other evidence of coercion. An independent adjudicator may invalidate an event under the review rules; business management cannot use withdrawal as a second scoring channel.

### 7.10 Aggregation and output

The NCS component must provide synthesis with more than a single average. Its output should include:

- The baseline NCS value
- Definite-positive rate
- Probable-positive rate
- Probable-negative rate
- Definite-negative rate
- Unscored unable-to-assess rate
- Eligible response count and effective weight
- Confidence or uncertainty measure
- Recency distribution
- Context distribution
- Issuer and interaction concentration
- Active dispute and invalidation rates
- Applicable schema and calculation versions

The lead provisional baseline calculation is:

```text
For scored response i:
    pᵢ ∈ {+10, +3, -3, -10}

Raw NCS = 10 × Σ(wᵢ × pᵢ) ÷ Σwᵢ
```

The result ranges from -100 to +100. A history composed entirely of Definitely yes responses produces +100; entirely Probably yes produces +30; entirely Probably not produces -30; and entirely Definitely not produces -100. “Not enough interaction to say” is excluded from the scored denominator and reported separately.

In plain language, definite responses carry ten positive or negative points, probable responses carry three, and the average is rescaled to the familiar -100 to +100 NCS range.

The 10:3 formula is the selected lead hypothesis. It must be tested against conviction-net and direction-net challengers and evaluated for construct validity, calibration, interpretability, manipulation resistance, small-sample behavior, cross-cultural response style, and disparate outcomes before production approval.

NCS must report **insufficient history** until a validated minimum evidence threshold is met. A new participant does not begin with a neutral zero that could be mistaken for an established record.

Multiple employee responses from one interaction may describe within-event agreement, but they form one statistical cluster. Their combined weight must be capped, and they cannot increase interaction count, issuer diversity, or independence as if they came from separate events. One difficult flight, hotel stay, meal, or support case cannot dominate the consumer's history merely because many employees participated.

Time decay, cross-context weighting, pattern recognition, corporate-failure handling, and final NCS/VCI balance belong to the conduct synthesis function. NCS must preserve timestamps and context rather than applying a second independent decay model.

### 7.11 Calibration and fairness

Businesses and work environments may use the four choices differently. Any adjustment for issuer severity, leniency, role, region, culture, or interaction type must follow these requirements:

- Calibration must be published, testable, and versioned.
- Small or new issuers must carry greater uncertainty rather than receiving unstable adjustments.
- A strict business must not automatically produce more valuable positive ratings.
- A permissive business must not automatically have its employees' experiences discounted.
- Normalization must not conceal discriminatory response patterns.
- Protected-characteristic data used for fairness auditing must remain segregated from scoring inputs and governed under a separate approved policy.
- An issuer with unexplained disparities, unusual response velocity, selective sampling, or retaliation patterns may have its NCS inputs dampened or suspended pending review.

The original draft's node-level Z-score is therefore a candidate for later testing, not an approved NCS rule.

### 7.12 Consumer visibility, dispute, and appeal

Consumers must be able to inspect each contributing NCS event at an appropriate level of detail, including:

- Issuing business
- Interaction date and category
- Response category or its effect on NCS
- Event lifecycle status
- Whether a reason category was recorded
- Whether the event is active, disputed, invalidated, or expired
- The process and deadline for raising a dispute

Routine consumer disclosure should protect the employee's identity. Disclosure profiles must vary by interaction type and may suppress precise time, role, location, or response detail when their combination would identify a worker. The consumer must still receive enough information to understand the event's direction, effect, status, and review route; an independent reviewer receives the protected detail. No consumer should need to contact the worker or business location directly to challenge an event.

Valid dispute grounds include:

- The consumer was misidentified.
- The rater did not participate directly.
- The response was duplicated or submitted outside the approved window.
- The consumer did not opt into the relevant network context.
- The event was issued in retaliation for a complaint, review, chargeback, accommodation request, or exercise of legal rights.
- The response relied on a protected characteristic or prohibited proxy.
- The conduct of another person was attributed to the consumer.
- The business violated sampling, interface, or issuer rules.

Disagreement alone does not automatically invalidate a subjective human response. The review determines whether the event was eligible, attributable, procedurally fair, and compliant with system rules.

Businesses conduct first-line factual correction. Consumers must have access to an independent appeal for unresolved or material disputes. The final arbiter, evidence rules, service levels, and remedies will be defined in the governance specification.

### 7.13 Employee protection and accountability

The system must protect employees from customer retaliation and employer coercion while preserving enough accountability for audits and appeals.

Worker response is voluntary across employee, contractor, host, franchise, and outsourced work models. A worker may abstain or not respond without penalty, explanation, lost work, reduced pay, adverse scheduling, or performance effect. NCS prompting, training, and required review participation occur on compensated time.

Participating businesses must not:

- Require a target distribution of positive or negative responses.
- Reward or punish employees based on the CQ outcomes of customers they serve.
- Direct employees to rate particular customers or response categories.
- Reveal employee identities to consumers except under an approved investigation or legal process.
- Use NCS participation as a substitute for workplace-safety obligations or management support.
- Retaliate against workers for abstaining, not responding, correcting an accidental response, reporting pressure, or using a protected withdrawal channel.
- Provide ordinary managers or workforce systems with individual response values, completion records, consumer outcomes, or rater-level distributions.

OCA and certified auditors may evaluate pseudonymous rater patterns for duplication, automation, coercion, retaliation, or unexplained disparities. Those analyses must not become an employee reputation score or automated employment decision.

Implementation must account for labor agreements, works councils, employee notice and consent requirements, and jurisdiction-specific workplace monitoring law.

### 7.14 Abuse cases and controls

| Abuse case | Required control direction |
|---|---|
| A friendly business or employee manufactures positive interactions. | Verified interaction binding, sampling audits, issuer anomaly detection, interaction-weight caps, and sanctions. |
| Employees coordinate multiple negative responses after one incident. | Per-interaction weight cap, direct-participation requirement, corroboration analysis, and appeal. |
| A business retaliates after a complaint or public review. | Timing analysis, protected-activity dispute grounds, independent review, immutable event history, and issuer sanctions. |
| An employee rates based on a consumer's visible CQ. | Hide all prior conduct information until the response is irrevocably submitted. |
| A manager pressures staff toward positive or negative targets. | Distribution audits, employee reporting channel, prohibition on quotas, and certification consequences. |
| A customer pressures, tips, threatens, or rewards an employee for a response. | Delayed or hidden disclosure, employee reporting, interaction audit, and invalidation authority. |
| A response reflects bias or prohibited proxies. | Fairness audits, VCI counterevidence, dispute and appeal, issuer remediation, and possible suspension. |
| A group interaction is assigned to the payer or reservation holder without sufficient attribution. | Attribution-confidence requirement and automatic ineligibility below the approved threshold. |
| A compromised terminal or account submits automated responses. | Strong employee authentication, device attestation, rate limits, signed events, and incident revocation. |

### 7.15 Interface with VCI and conduct synthesis

NCS and VCI may support, qualify, or conflict with one another. Neither automatically overrides the other.

Examples:

- A negative NCS response during a documented company-wide failure may carry less confidence after synthesis review, especially when VCI shows the consumer fulfilled their responsibilities.
- A positive operational history cannot permanently shield a sustained pattern of independently issued negative human responses.
- A single negative response against a strong history should be treated as limited evidence, not automatically erased and not treated as a complete conclusion.
- A repeated pattern from one business or one employee may indicate issuer bias or a genuine repeated relationship problem; synthesis must evaluate concentration and independence.

The conduct synthesis specification will define how confidence, corroboration, contradictions, context, and independence affect CQ.

### 7.16 Pilot validation requirements

Before NCS can affect a portable CQ proof, a pilot must evaluate:

- Median and percentile completion time
- Prompt completion and abandonment rates
- Distribution of all four responses
- Rater understanding of the prompt
- Inter-rater consistency in controlled scenarios
- Selective-sampling and missingness patterns
- Separation among eligibility, selection, prompt delivery, nonresponse, unable-to-assess abstention, and scored completion
- Whether prohibited or commercial factors predict responses after directly observed conduct is held constant
- Differences across business, role, region, language, and interaction type
- Disparate outcomes and prohibited proxy effects
- Duplicate, misattributed, retaliatory, and invalidated event rates
- Consumer comprehension, trust, and dispute behavior
- Employee safety, comfort, burden, and perceived employer pressure
- Employer-access compliance, worker voluntariness, compensated time, and withdrawal-pressure patterns
- Worker reidentification and consumer-review usability under each disclosure profile
- Effect of minimum-history and interaction-weight rules
- Effect of treating multiple same-interaction responses as one correlated cluster
- Whether NCS adds useful information beyond VCI without overwhelming it

NCS implementation remains **CANDIDATE** until the pilot demonstrates acceptable reliability, fairness, usability, and appeal performance.

## 8. Verified Conduct Index specification

### 8.1 Purpose

The Verified Conduct Index represents operational evidence about whether a consumer fulfilled the observable responsibilities of a verified interaction. It provides a structured, data-backed counterweight to NCS without pretending that business-system data is neutral, complete, or automatically true.

VCI answers a narrow question: **What does the verified operational record show about the consumer's fulfillment of responsibilities they accepted and could reasonably control?**

VCI does not measure how profitable, convenient, digitally fluent, or low-cost a consumer is. It does not reward avoiding employees, asking fewer questions, using an app, accepting a bad outcome, or declining to complain. It also does not determine whether the consumer is generally trustworthy or morally good.

“Verified” describes the event's provenance, attribution, evidence, and lifecycle. It does not mean that every assertion made by a participating business is indisputably correct.

The VCI output is one input to conduct synthesis. It MUST NOT independently create a CQ proof, benefit decision, service restriction, safety decision, fraud decision, or credit decision.

### 8.2 Core requirements

| ID | Requirement | Status |
|---|---|---|
| VCI-001 | Every VCI event MUST be linked to a verified interaction, responsibility, or resulting obligation. | REQUIRED FOR COHERENCE |
| VCI-002 | A consumer may be evaluated only against an approved legitimate responsibility that was plainly and accessibly disclosed before or when the consumer accepted it, was reasonably connected and proportionate to the interaction, was consistent with applicable rights, and remained reasonably within the consumer's control. | CONSTITUTIONAL |
| VCI-003 | The event MUST be attributable to the correct consumer with an approved level of confidence. | REQUIRED FOR COHERENCE |
| VCI-004 | The event MUST distinguish consumer-controlled conduct from business failures, third-party failures, force majeure, and conditions outside the consumer's reasonable control. | CONSTITUTIONAL |
| VCI-005 | Pending, disputed, incomplete, or unverified adverse assertions MUST NOT reduce VCI or CQ. | CONSTITUTIONAL |
| VCI-006 | Missing data MUST be treated as unknown, not as negative conduct. | CONSTITUTIONAL |
| VCI-007 | Self-service, avoidance of human assistance, and low service cost MUST NOT be treated as inherently positive conduct. | CONSTITUTIONAL |
| VCI-008 | Lawful complaints, accommodation requests, support use, reviews, returns, cancellations, refunds, and payment disputes MUST NOT be negative merely because they create cost or friction for a business. | CONSTITUTIONAL |
| VCI-009 | A business MUST be able to substantiate a materially adverse event with the evidence required by its approved event class. | CANDIDATE |
| VCI-010 | VCI calculations MUST preserve context, event state, evidence quality, issuer concentration, and uncertainty rather than emitting only an unexplained number. | REQUIRED FOR COHERENCE |
| VCI-011 | Routine fulfillment MAY build evidence of operational reliability, but repeated routine events MUST be capped so transaction volume cannot become a proxy for wealth or status. | CANDIDATE |
| VCI-012 | Event definitions, responsibility weights, evidence standards, and calculation versions MUST be published and governed by OCA. | REQUIRED FOR COHERENCE |
| VCI-013 | Participating businesses MUST provide corrections, dispute intake, and signed reversals through the shared lifecycle. | CONSTITUTIONAL |
| VCI-014 | An issuer MUST provide the business-failure, exception, accommodation, waiver, reversal, and external-cause facts necessary to interpret its consumer events; it MUST NOT issue one-sided adverse evidence while systematically omitting qualifying business context. | CONSTITUTIONAL |
| VCI-015 | An eligible responsibility unit MUST be registered before its outcome is known and MUST retain a complete lifecycle state; issuers may not selectively create, close, or transmit units based on the consumer or result. | REQUIRED FOR COHERENCE |
| VCI-016 | A materially adverse consumer event MUST NOT become active unless the required reciprocal business, dependency, exception, accommodation, waiver, notice, cure, correction, and reversal context is present. | CONSTITUTIONAL |
| VCI-017 | A disputed or high-severity adverse event MUST receive the approved independent or qualifying external finalization for its event class before it has adverse effect. | CONSTITUTIONAL |
| VCI-018 | Consumer nonresponse MUST NOT be treated as admission; each event class MUST define effective accessible notice, cure, delivery failure, and limits on automatic finalization. | CONSTITUTIONAL |
| VCI-019 | An event MUST have no adverse effect to the extent an approved business, dependency, third-party, accessibility, emergency, or force-majeure cause explains the outcome. | CONSTITUTIONAL |
| VCI-020 | Issuer conformance MUST define authoritative source systems, conflict precedence, update latency, reconciliation, correction propagation, audit sampling, and safe failure for each event class. | REQUIRED FOR COHERENCE |

### 8.3 What VCI may measure

VCI may represent only conduct that is operationally observable, relevant to the interaction, and connected to a responsibility the consumer accepted.

Potentially eligible evidence includes:

- Whether the consumer arrived, appeared, paid, returned property, or completed another clearly disclosed commitment by the agreed time.
- Whether the consumer canceled or changed a commitment within the disclosed policy.
- Whether a consumer-controlled obligation remained materially unfulfilled after notice and a reasonable opportunity to correct it.
- Whether an allegation of damage, fraud, or policy abuse reached an approved final evidentiary state.
- Whether an earlier adverse assertion was corrected, reversed, resolved, or found to have resulted from a business or third-party failure.

The mere existence of a transaction is not positive conduct. The system records fulfillment only when an eligible responsibility can be identified and its completion can be verified. Equally, using an option expressly permitted by the agreement is not negative conduct. A permitted return, cancellation, refund request, or service escalation cannot be reclassified as misconduct simply because the business dislikes its cost.

VCI must keep factual observation separate from interpretation. For example:

| Operational fact | Permitted interpretation | Prohibited shortcut |
|---|---|---|
| A reservation was canceled within the disclosed window. | The cancellation responsibility was fulfilled. | The consumer created friction and is less valuable. |
| A consumer did not appear for a reservation. | A potential no-show event exists, subject to attribution, policy, notice, and causation checks. | The consumer is unreliable. |
| A payment dispute was filed. | A dispute is pending and the underlying event requires lifecycle handling. | Filing a chargeback is negative conduct. |
| A bank ruled for the merchant. | The payment dispute reached one external outcome. | The consumer committed fraud. |
| A rental company recorded damage. | A damage allegation exists and requires approved evidence and review. | The consumer caused the damage. |
| The consumer contacted support several times. | No conduct conclusion follows without another eligible event. | The consumer is high-friction. |
| The consumer completed check-in through an app. | The check-in requirement was fulfilled. | Digital self-service proves superior conduct. |

### 8.4 Responsibility model

Every eligible VCI event must connect to a defined **responsibility unit**. A responsibility unit is a specific obligation or permitted course of action created by an interaction, such as arriving by an agreed time, canceling within a stated window, paying an amount by a due date, returning an item under agreed conditions, or following a material safety rule.

An eligible responsibility unit must be registered before its outcome is known. Each registered unit retains a continuing or terminal state such as fulfilled, pending, finalized failure, business-caused, external-cause, waived, canceled, disputed, unknown, invalidated, or expired. Participating businesses may not decide whether to create, close, or transmit a unit after learning the outcome or based on consumer value, complaint status, expected proof effect, or another prohibited factor.

A responsibility unit is eligible only when:

1. The consumer received clear and accessible notice before or at acceptance.
2. The consumer affirmatively accepted the interaction or an authorized representative accepted it for them.
3. The responsibility was sufficiently specific to evaluate consistently.
4. The consumer could reasonably control the outcome.
5. The business can verify both the obligation and the observed outcome.
6. The responsibility is approved for that context by the governing event taxonomy.
7. The responsibility and its weight are proportionate to the interaction.
8. The responsibility does not rely on a protected characteristic or prohibited proxy.
9. The responsibility is reasonably necessary or connected to delivery of the interaction rather than merely convenient or commercially advantageous to the business.
10. The responsibility and its enforcement are consistent with applicable consumer, accessibility, nondiscrimination, contract, and sector-specific rights.
11. The consumer had an accessible and realistic means of fulfillment, including approved accommodation, assisted, and non-digital paths where required.
12. The business can provide the corresponding exception, waiver, business-failure, third-party, correction, and reversal states needed to avoid a one-sided account.

Terms hidden in dense legal text, added after acceptance, or inconsistently enforced are not automatically eligible. Any responsibility capable of producing a materially adverse event requires a standardized, accessible consumer-facing disclosure under its certified context profile.

Disclosure and acceptance do not make a responsibility legitimate by themselves. An adhesion term, inaccessible workflow, unnecessary deadline, selectively enforced policy, or rule designed mainly to reduce business cost may remain ineligible even when the consumer technically clicked to accept it.

When a company permits several valid ways to fulfill a responsibility, each approved method must be treated equivalently. Paying through a human agent and paying through an app are both fulfillment. Requesting an accommodation, translation, or manual process does not reduce VCI.

### 8.5 Event classes

VCI uses a governed event taxonomy rather than allowing each business to invent its own definitions. The initial taxonomy should support five functional classes. A live pilot must use a small closed set of context-specific responsibility types approved before issuance; businesses cannot create local responsibility semantics or weights.

#### A. Responsibility created

Records that an eligible obligation exists. Examples include a confirmed booking, payment due date, property-return commitment, or accepted safety condition.

This event does not affect VCI by itself. It establishes the reference against which later fulfillment may be evaluated.

#### B. Responsibility fulfilled

Records that the consumer completed an eligible responsibility as agreed. Examples may include arriving within the approved window, canceling within policy, paying by the due date, or returning property in the agreed condition.

Routine fulfillment can build confidence in operational reliability, but its influence must be capped. High transaction volume, expensive purchases, and long commercial history cannot overwhelm the human-conduct record or create a purchasable advantage.

#### C. Potential responsibility failure

Records an unresolved indication that a responsibility may not have been fulfilled. Examples may include an apparent no-show, overdue payment, unreturned property, or alleged damage.

This class is provisional and non-adverse. It may trigger verification, notice, or dispute processes, but it does not reduce VCI or CQ.

#### D. Finalized responsibility failure

Records that an eligible responsibility was materially unfulfilled after required attribution, causation, notice, evidence, and dispute steps were completed.

The final event must identify the exact responsibility, the evidence standard met, the finalizing authority, and the available appeal path. Different event types may require different standards. A timestamp may establish lateness; an accusation of intentional fraud requires much stronger evidence. A disputed or high-severity event cannot have adverse effect until it receives the independent or qualifying external finalization required by its event class. An internal fraud label, merchant decision, payment-network outcome, insurer decision, or platform ruling is not automatically independent.

#### E. Correction or external-cause event

Records that an earlier assertion was incorrect, resolved, caused by the business, caused by an approved third party, or otherwise ineligible. It reverses the active effect without deleting the history.

Examples include a canceled flight caused by the airline, a payment-processing outage, an inaccessible digital workflow, a reservation-system error, mistaken identity, a merchant-reversed damage claim, or an event resolved in the consumer's favor.

### 8.6 Initial eligibility matrix

The following matrix establishes the policy direction for common events. Each industry will require a narrower certified profile before implementation.

| Candidate event | Default treatment | Conditions |
|---|---|---|
| On-time arrival or appearance | Eligible fulfillment | Time window, identity, and relevant commitment must be verifiable. Approved accommodations and business delays must be excluded. |
| Cancellation within disclosed policy | Eligible fulfillment or neutral completion | It cannot be adverse merely because capacity went unused. |
| Late cancellation or no-show | Potentially eligible | Requires clear prior policy, reliable attribution, notice, causation review, and consideration of emergencies and business failure. |
| Payment completed by the agreed date | Eligible fulfillment | Amount and purchase value do not increase the event's conduct value. |
| Late or failed payment | Potentially eligible | Requires responsibility, notice, cure period where appropriate, processing-error controls, and final state. It must not become a creditworthiness score. |
| Chargeback or payment dispute filed | Excluded while pending | Exercising a dispute right is not adverse conduct. |
| Chargeback resolved for either party | Not automatically conduct evidence | A payment-network outcome may be procedural and does not by itself prove fraud or good faith. A separate approved evidentiary event would be required. |
| Property returned on time and in agreed condition | Eligible fulfillment | Requires reliable return and condition records. |
| Damage alleged by a business | Potential event only | No adverse effect until approved evidence and dispute requirements are satisfied. |
| Damage accepted, independently established, or finally adjudicated | Potentially eligible finalized failure | Evidence threshold and finalizing authority remain open by event class. |
| Return or refund within policy | Eligible fulfillment or excluded | It cannot be adverse merely because it imposes business cost. |
| Repeated policy abuse or fraud | Not eligible as a broad label | Must be decomposed into specific, evidenced, finalized events. |
| Support contacts, escalations, complaints, reviews, or accommodation requests | Excluded | These are protected from friction-based scoring unless a separate eligible conduct event exists. |
| App use, kiosk use, autonomous checkout, or no employee contact | Neutral | Method of service does not establish superior conduct. |
| Tips, spending, loyalty tier, profitability, or customer lifetime value | Prohibited | Commercial value is not conduct. |
| Company-caused cancellation, delay, outage, or service failure | Excluded from adverse consumer input | May reduce confidence in related NCS events through synthesis. |

### 8.7 Event record and evidence package

Every VCI assertion creates a signed event. The logical schema includes:

| Field | Purpose |
|---|---|
| Event identifier | Prevent duplication and support lifecycle tracking. |
| Interaction identifier | Bind the event to the relevant verified interaction. |
| Consumer identifier | Bind the event to the correct participant using a context-appropriate pseudonymous identifier. |
| Issuer identifier | Establish which certified entity made the assertion. |
| Event class and type | Apply the correct eligibility, evidence, and lifecycle rules. |
| Responsibility identifier and version | Show the exact disclosed obligation or permitted path being evaluated. |
| Responsibility-registration timestamp and state | Demonstrate that the unit existed before its outcome was known and preserve complete lifecycle closure. |
| Context | Record industry, business, interaction type, jurisdiction, role, and approved context tags. |
| Observed outcome | Record the operational fact without adding a moral label. |
| Consumer-control assessment | Distinguish consumer conduct from business, third-party, and external causes. |
| Attribution confidence | Express confidence that the event belongs to the correct consumer. |
| Evidence references | Point to the approved records supporting the assertion without placing unnecessary source data in the shared event. |
| Reciprocal context completeness | Confirm the required business, dependency, exception, accommodation, waiver, notice, cure, correction, and reversal fields were evaluated. |
| Evidence standard | Identify the threshold required and whether it has been met. |
| Relevant timestamps | Record responsibility creation, due time, observation, notice, response, and finalization. |
| Lifecycle status | Record whether the event is pending, active, disputed, reversed, invalidated, expired, or superseded. |
| Dispute and ruling references | Connect challenges, evidence, outcomes, and appeals. |
| Schema and calculation version | Make interpretation reproducible and auditable. |
| Issuer signature | Establish integrity and provenance. |

The shared network should store the minimum data needed to verify and process the assertion. Detailed receipts, recordings, payment records, identity documents, and other source evidence should generally remain with the responsible custodian under governed retention and access rules.

### 8.8 Event lifecycle

A VCI event moves through a lifecycle rather than appearing as an instant permanent fact:

1. **Created:** A certified system records an observed operational outcome.
2. **Validated:** Schema, issuer authority, interaction binding, attribution, responsibility disclosure, and duplication checks pass.
3. **Pending:** Required notices, cure periods, evidence collection, or external processes remain incomplete. The event has no adverse effect.
4. **Active:** A fulfilled responsibility or approved finalized failure is eligible for VCI aggregation and conduct synthesis.
5. **Disputed:** The consumer challenges identity, responsibility, evidence, causation, state, or compliance. A disputed adverse event is removed from active effect while reviewed.
6. **Resolved:** The parties or approved reviewer reach an outcome, which may restore, finalize, modify, or reverse the event.
7. **Reversed:** A signed event removes the active effect of an earlier assertion because the facts, state, or external outcome changed.
8. **Invalidated:** The event was ineligible, unsupported, misattributed, manipulated, noncompliant, or issued by an unauthorized source.
9. **Expired:** The event no longer contributes under the approved recency policy but remains subject to retention and audit rules.
10. **Superseded:** A later version replaces the event's active interpretation without erasing history.

The original draft's “cryptographic escrow” concept is therefore retained as a broader **pending or disputed state**. Cryptographic integrity may protect the event record, but it does not resolve the underlying factual or legal dispute.

Consumer nonresponse is not admission. Each event class must define what constitutes effective and accessible notice, how delivery failure and language or accessibility needs are handled, what cure is reasonable, and which facts—if any—can finalize automatically. Disputed, high-severity, or non-machine-verifiable events require the approved finalizing authority even when the consumer does not respond.

### 8.9 Business failure and external cause

VCI must separate a consumer's conduct from the conditions created by the business or its dependencies.

Participating businesses must issue or accept standardized external-cause events for conditions such as:

- Cancellations, delays, closures, or inventory failures caused by the business
- Technology, payment, reservation, identity, or access-system outages
- Inaccessible processes or failures to provide an approved accommodation
- Incorrect instructions, conflicting policies, or employee-authorized exceptions
- Third-party disruptions recognized under the applicable context rules
- Weather, emergencies, or force majeure where consumer control is insufficient

Related consumer events must have no adverse effect to the extent an approved business, dependency, third-party, accessibility, emergency, or force-majeure cause explains the outcome. When causation cannot be separated reliably, the affected portion remains unknown rather than adverse. Network-level anomaly detection may flag a surge of events during a corporate incident, but automatic treatment must be reviewable and must not replace the issuer's duty to correct the underlying records.

### 8.10 Attribution and group interactions

The payer, account holder, reservation holder, passenger, guest, driver, and person physically present may be different people. VCI must not assume that the commercially primary person caused every operational outcome.

For each event class, the issuer must identify the responsible role and meet an approved attribution threshold. If attribution is insufficient, the event remains unknown and cannot adversely affect any participant.

Every certified event class must define which roles can hold the responsibility and how shared or delegated responsibility is allocated. A booking, payment, account, loyalty, or caregiver role does not by itself establish responsibility for another person's outcome.

Authorized agents—including executive assistants, caregivers, guardians, travel arrangers, and corporate payers—must be represented explicitly. Their participation cannot silently transfer conduct between people. The identity specification will define how authority, delegation, guardianship, and shared responsibility are recorded.

### 8.11 VCI aggregation and output

VCI must provide conduct synthesis with an evidence profile, not only a single score. The profile should include:

- Eligible responsibility units created, fulfilled, pending, finalized as unfulfilled, reversed, and invalidated
- Context-specific fulfillment rate
- Counts and effective weights by event type and materiality
- Evidence-quality and attribution-confidence distributions
- Data coverage and missingness
- Recency distribution
- Issuer, industry, and interaction concentration
- Active dispute, reversal, correction, and invalidation rates
- Business-failure and external-cause incidence
- Applicable schema, event-taxonomy, and calculation versions

A provisional context-specific VCI may be calculated as:

```text
Raw VCI = 100 × weighted fulfilled responsibility units
          ÷ weighted finalized responsibility units
```

Only active fulfilled and active finalized-failure events enter this candidate ratio. Pending, disputed, unknown, reversed, invalidated, and externally caused events do not enter the numerator or denominator.

This formula is a hypothesis, not an approved production rule. A single average can hide severity, confidence, concentration, missing data, and recent patterns. Conduct synthesis must therefore receive the underlying VCI evidence profile and may not rely on the raw number alone.

Suite B v0.1 retains this fulfilled-over-finalized ratio as the provisional lead simple research calculation only after the responsibility ledger clears its applicable non-compensating gates. The event-class and evidence-quality profile is the controlling representation; the ratio does not establish source completeness, legitimacy, causation, attribution, reviewability, or correction.

The tested fulfilled-over-registered opportunity ratio is rejected as consumer standing. Pre-outcome responsibility registration remains mandatory, but registration coverage, delivery coverage, lifecycle closure, and source reconciliation are evidence-quality and issuer-conformance controls. Missing, undelivered, pending, or unresolved business-system records remain unknown and do not enter the consumer's ratio as failures.

The model must also prevent transaction volume from becoming status. Potential controls include per-interaction caps, diminishing weight for repeated routine events, context-balanced sampling, event-class caps, and minimum diversity requirements. Their final form depends on simulation and pilot data.

The output must also report responsibility-registration coverage and lifecycle-closure coverage. A ratio based only on transmitted or finalized events is not interpretable when the issuer can omit eligible opportunities or fail to close inconvenient states.

Routine fulfillment remains eligible evidence, but it must be separated by event class and capped or diminished so repeated cheap events cannot overwhelm material responsibilities. Suite B rejects both unlimited routine-event accumulation and automatic exclusion of all routine fulfillment; the exact caps and diversity requirements remain open.

VCI must report **insufficient history** when there are too few eligible, finalized responsibility units or when coverage and attribution are inadequate. No record is not a bad record—and it is not proof of a good record.

### 8.12 Consumer visibility, correction, dispute, and appeal

Consumers must be able to inspect each active or pending VCI event in understandable language, including:

- The issuing business and interaction
- The responsibility the consumer allegedly accepted
- The observed operational outcome
- The event's current state and active effect
- The general evidence category and evidence standard
- Whether consumer control, business failure, or an external cause was considered
- How to correct or dispute the event
- The review deadline, decision, and appeal path

Valid grounds include mistaken identity, unclear or undisclosed responsibility, incorrect operational data, lack of consumer control, business or third-party cause, inaccurate event state, insufficient evidence, duplicate issuance, prohibited use, and failure to honor a permitted exception or accommodation.

The issuer is responsible for first-line factual correction. That role does not authorize it to finalize a disputed or high-severity adverse event when the certified event class requires independent or qualifying external review. Material adverse events must support independent appeal. The system must record the evidence reviewed, governing rule, outcome, reviewer, and effective date without exposing unnecessary personal or proprietary information.

When a correction or reversal changes a CQ proof or benefit eligibility, the consumer must receive understandable notice and a refreshed credential where appropriate. The original assertion remains in the audit trail but loses its active effect.

### 8.13 Issuer controls and accountability

Participating businesses must:

- Use certified event definitions and schemas.
- Demonstrate that eligible responsibilities were clearly disclosed.
- Maintain evidence at the required standard for each material adverse event.
- Issue corrections and reversals promptly when source records change.
- Monitor identity matching, duplication, missing data, and system errors.
- Separate commercial segmentation from VCI issuance.
- Prevent customer value, loyalty tier, complaint status, and predicted profitability from entering VCI.
- Preserve approved evidence and audit records for the required period.
- Submit to independent testing for event accuracy, disparate outcomes, and policy compliance.
- Provide consumers and employees with protected reporting channels for misuse.
- Register eligible responsibility units before outcomes are known and reconcile complete lifecycle states to certified source systems.
- Demonstrate reciprocal-context completeness before activating a materially adverse consumer event.

Each event-class conformance profile must name authoritative source systems, conflict precedence, update latency, reconciliation rules, correction propagation, audit sampling, and safe failure. An issuer that cannot reconcile the required sources cannot issue the affected event class.

OCA may warn, restrict, suspend, or revoke an issuer's authority by event class or across the network. The sanction must be proportionate, reviewable, and accompanied by a remediation process. Suspension does not erase existing events; their continuing eligibility must be evaluated under governance rules.

### 8.14 Abuse cases and controls

| Abuse case | Required control direction |
|---|---|
| A business labels expensive or demanding customers “high-friction.” | Prohibited-field rules, approved event taxonomy, commercial-data separation, audits, and sanctions. |
| A permitted cancellation, return, complaint, or chargeback is treated as misconduct. | Responsibility and policy checks, pending-state rules, appeal, and issuer monitoring. |
| A business asserts damage or fraud without sufficient evidence. | Event-specific evidence thresholds, no adverse effect while pending, independent appeal, and issuer sanctions. |
| A business fails to reverse an outdated or corrected assertion. | Source-state reconciliation, correction deadlines, consumer notice, audit, and automatic suspension triggers. |
| A wealthy consumer manufactures a strong record through transaction volume. | Per-interaction caps, diminishing routine-event weight, context balancing, and confidence rather than volume rewards. |
| A consumer repeatedly creates low-value transactions to improve VCI. | Synthetic-interaction detection, related-event clustering, economic irrelevance, and event caps. |
| A company hides its own failure by blaming the consumer. | External-cause events, network anomaly detection, consumer evidence, cross-record reconciliation, and penalties. |
| An outcome is assigned to the wrong member of a group. | Role-specific attribution, confidence thresholds, delegation records, and correction. |
| Missing records are interpreted as failures. | Explicit unknown state and coverage reporting. |
| An issuer changes an event definition after the interaction. | Versioned responsibilities, prospective rule changes, signed schemas, and reproducible calculations. |

### 8.15 Interface with NCS and conduct synthesis

VCI balances NCS by providing operational context; it does not overrule human experience.

Examples:

- A strong record of fulfilled responsibilities may reduce confidence that one isolated negative NCS event represents a stable pattern, but it cannot prove the employee's experience was false.
- Repeated positive NCS events do not erase a finalized pattern of materially unfulfilled responsibilities.
- A business outage may neutralize related adverse VCI assertions and reduce confidence in NCS responses produced during the same event.
- A consumer may have strong VCI and weak NCS, or weak VCI and strong NCS. CQ must preserve and explain that tension rather than forcing false agreement.
- Repeated negative inputs from one issuer carry different meaning from independent evidence across several businesses and contexts.

The synthesis specification will define confidence, recency, materiality, independence, context transfer, pattern detection, and contradiction handling.

### 8.16 Pilot validation requirements

Before VCI can affect a portable CQ proof, a pilot must evaluate:

- Accuracy of interaction and consumer attribution
- Accuracy and accessibility of responsibility disclosure
- Event coverage, missingness, latency, correction, and reversal rates
- Responsibility-registration coverage, lifecycle-closure coverage, and source-system reconciliation error
- Frequency and duration of pending and disputed states
- Evidence sufficiency by event class
- Business-failure and external-cause detection
- Reciprocal-context completeness and asymmetry between recorded consumer and business failures
- Effective-notice, delivery-failure, cure, nonresponse, and independent-finalization performance
- Differences across industry, business, jurisdiction, payment method, channel, disability, language, and consumer group
- Disparate outcomes and prohibited proxy effects
- Consumer comprehension of responsibilities and event states
- Volume and resolution of corrections, disputes, and appeals
- Issuer implementation burden and data quality
- Manipulation attempts by businesses and consumers
- Sensitivity of the candidate VCI calculation to event weights, caps, concentration, and sample size
- Whether VCI adds meaningful evidence beyond commercial risk, fraud, or loyalty systems without reproducing them
- Whether NCS and VCI together add useful information about the balanced interaction outcome defined in Section 18 without suppressing rights or importing commercial value

VCI implementation remains **CANDIDATE** until the event taxonomy, evidence standards, calculation, fairness controls, and appeal system meet approved pilot thresholds.

## 9. Conduct synthesis requirements

### 9.1 Purpose

The conduct synthesis function evaluates eligible NCS and VCI evidence together while preserving them as separate governed inputs. It is the system's reasoning layer: it evaluates what evidence exists, whether each input is valid and sufficient, how trustworthy and relevant the evidence is, how it changes over time, and what conclusion the evidence can responsibly support.

The synthesis function does not decide whether someone is a good person. It does not produce a universal measure of human worth, replace safety or fraud systems, or create a hidden commercial-risk score.

Its primary consumer output is one **contextual Conduct Quotient** when the applicable profile and every required gate permit a score. The complete contextual state contains:

- A human-interaction dimension derived from NCS
- An operational-reliability dimension derived from VCI
- One provisional combined CQ produced through the approved non-compensating family, or an honest non-score state
- Confidence and coverage
- Applicable context and time horizon
- Material limitations, contradictions, and active disputes
- Eligibility for approved consumer-controlled proofs

Suite C v0.1 remains the historical warning against unconstrained combination: its general combined candidates frequently allowed one below-threshold component to be offset by the other. Suite K v0.1 subsequently tested the restored one-score product contract. It advances the K3 capped arithmetic family as the provisional one-scope structural lead while retaining the two-dimensional view and purpose-bound proof as controls.

The synthesis function therefore pulls NCS and VCI together by validating, filtering, contextualizing, clustering, comparing, and explaining their evidence before calculation. A score exists only when both required inputs independently pass. Internally and in the consumer's deeper explanation, the two inputs remain separately inspectable. A verifier ordinarily receives only an approved purpose-bound proof, not the general CQ or its inputs.

The synthesis function is intentionally unbranded at this stage. The original name, Sovereign Conduct Protocol, remains a naming candidate only after the technical and governance model is settled.

### 9.2 Core requirements

| ID | Requirement | Status |
|---|---|---|
| SYN-001 | NCS and VCI MUST remain separately inspectable dimensions if an approved combined CQ is produced. | REQUIRED FOR COHERENCE |
| SYN-002 | Neither NCS nor VCI may automatically override, erase, or prove the other false. | REQUIRED FOR COHERENCE |
| SYN-003 | Every synthesis result MUST identify its context, evidence window, confidence, coverage, and calculation version. | REQUIRED FOR COHERENCE |
| SYN-004 | Only validated, active, eligible events may affect a synthesis result. | REQUIRED FOR COHERENCE |
| SYN-005 | Pending, disputed, invalidated, reversed, and prohibited events MUST NOT have adverse effect. | CONSTITUTIONAL |
| SYN-006 | Missing evidence MUST reduce confidence or produce insufficient history; it MUST NOT count as negative conduct. | CONSTITUTIONAL |
| SYN-007 | Context transfer MUST be governed, explicit, and bounded. Unrelated contexts MUST NOT be combined by default. | CONSTITUTIONAL |
| SYN-008 | Recency rules MUST reduce evidentiary weight and confidence without automatically lowering a dormant consumer's conduct standing. | CONSTITUTIONAL |
| SYN-009 | Evidence concentration by one interaction, employee, issuer, corporate family, or incident MUST be measured and capped. | CONSTITUTIONAL |
| SYN-010 | Abrupt negative patterns MAY trigger review or proof reevaluation but MUST NOT operate as a safety alert, hidden blacklist, or denial of baseline service. | CONSTITUTIONAL |
| SYN-011 | Every calculation MUST be deterministic for the same inputs, rules, and version, with a reproducible audit trace. | REQUIRED FOR COHERENCE |
| SYN-012 | Mathematical models, weights, thresholds, priors, and context mappings MUST be published, versioned, independently tested, and approved by OCA. | CONSTITUTIONAL |
| SYN-013 | A material change in an input or synthesis result MUST be explainable to the consumer in plain language. | CONSTITUTIONAL |
| SYN-014 | An overall CQ MUST NOT be produced unless at least two approved, sufficiently observed, independently issued context families are coherent enough for synthesis under a fixed source-set version. | CANDIDATE |
| SYN-015 | K3 capped arithmetic synthesis is the provisional one-scope structural lead; K6 weakest-link anchored synthesis, the two-dimensional view, and proof-only output remain research controls. | CANDIDATE |
| SYN-016 | Cross-company and cross-industry production relevance MUST remain zero until a specific source-to-target mapping passes approved validity, fairness, comprehension, and legal gates. | CONSTITUTIONAL |
| SYN-017 | A component that fails a construct, provenance, sampling, completeness, fairness, or rights gate MUST NOT be rehabilitated through confidence weighting or combination. | CONSTITUTIONAL |
| SYN-018 | Evidence direction, sufficiency, provenance, sampling, attribution, independence, recency, completeness, validity, and fairness MUST remain separately inspectable and non-compensating where they operate as gates. | REQUIRED FOR COHERENCE |
| SYN-019 | A verifier MUST request an approved context-and-purpose proof rather than a named-competitor history; source inclusion remains private to the consumer unless separately necessary and approved. | CONSTITUTIONAL |
| SYN-020 | Evaluation MUST separate the pre-treatment meaning of conduct evidence from the causal effect of proof presentation, benefit delivery, and changed expectations. | REQUIRED FOR COHERENCE |
| SYN-021 | A contextual CQ MUST NOT exist unless every required component independently passes construct, provenance, sampling, attribution, sufficiency, independence, fairness, rights, and dispute gates. | CONSTITUTIONAL |
| SYN-022 | Within one scope, the provisional synthesis MUST equal the arithmetic mean of the compatible bounded NCS- and VCI-derived values capped at no more than the approved amount above the weaker input. | CANDIDATE |
| SYN-023 | Confidence or ordinary passage of time MUST NOT directly move an otherwise unchanged conduct standing; it may change availability or require rebuilding history. | CONSTITUTIONAL |
| SYN-024 | Overall CQ MUST use equal approved context-family influence; transaction or evidence volume may establish sufficiency but MUST NOT purchase greater semantic weight. | REQUIRED FOR COHERENCE |
| SYN-025 | Overall CQ MUST enter a Context varies or another approved non-score state when material context conflict cannot be represented honestly by one number. | REQUIRED FOR COHERENCE |
| SYN-026 | The complete approved overall source set MUST be fixed and versioned; removal of a valid contributing context MUST NOT silently improve a published overall CQ. | CONSTITUTIONAL |
| SYN-027 | Unrelated, zero-transfer, duplicated, and administratively dependent contexts MUST contribute zero to overall CQ and MUST NOT create apparent diversity. | CONSTITUTIONAL |
| SYN-028 | Display rounding, persistence, update cadence, and public calibration MUST be published and tested separately from the underlying synthesis rule. | REQUIRED FOR COHERENCE |

### 9.3 Why synthesis is not a simple average

NCS and VCI answer different questions and use different evidence:

| Dimension | Question | Primary evidence | Characteristic failure mode |
|---|---|---|---|
| NCS | How did the consumer treat the person serving them? | Direct human response tied to an interaction | Bias, retaliation, mood, cultural variation, selective sampling |
| VCI | Did the consumer fulfill observable responsibilities they accepted and controlled? | Verified operational events and states | Bad source data, business-defined proxies, attribution error, incomplete context |

A simple 50/50 average without separate gates or a non-compensation cap would imply equal validity regardless of sample size, context, evidence quality, concentration, or dispute status. It could also make a strong operational history erase repeated poor treatment of people, or make favorable human responses erase a material operational problem.

Synthesis must therefore preserve each input and evaluate its validity and sufficiency separately before combination. Suite K permits a combined CQ only through a capped family that limits how far the stronger input can lift the weaker one. The cap does not repair a failed gate, authorize a production coefficient, or make the inputs interchangeable.

### 9.4 Inputs

The synthesis function receives signed, versioned input packages rather than unrestricted source data.

The NCS input package includes:

- Raw NCS value and response distribution
- Effective interaction and response weights
- Sample size and sampling method
- Attribution confidence
- Context and recency distribution
- Issuer, employee, and interaction concentration
- Dispute, withdrawal, and invalidation rates
- Calibration and fairness flags

The VCI input package includes:

- Responsibility units and lifecycle states
- Context-specific fulfillment evidence
- Event types, materiality, and effective weights
- Evidence quality and attribution confidence
- Coverage and missingness
- Recency and issuer concentration
- Dispute, reversal, correction, and invalidation rates
- Business-failure and external-cause events

The synthesis function also receives governed network information, including issuer certification status, schema version, known incidents, approved context mappings, calculation version, and any active audit restrictions.

Protected characteristics and raw commercial-segmentation data are not synthesis inputs. Separately governed fairness testing may use protected-class information in a controlled audit environment, but those fields must remain segregated from individual calculations.

### 9.5 Processing pipeline

Each synthesis result follows the same logical stages:

1. **Validate:** Verify signatures, issuer authority, schema versions, event lifecycle states, and interaction binding.
2. **Filter:** Remove ineligible, prohibited, pending, disputed, reversed, invalidated, expired, or duplicate effects according to the applicable rules.
3. **Cluster:** Group events arising from the same interaction, incident, employee, issuer, or corporate family so apparent volume does not masquerade as independent evidence.
4. **Contextualize:** Determine the requested company, industry, or approved context family and calculate each event's relevance.
5. **Weight evidence quality:** Apply approved attribution, evidence, sampling, issuer-quality, and concentration adjustments.
6. **Apply recency:** Reduce the evidentiary influence of older events under published rules while preserving history and supporting redemption.
7. **Calculate protected inputs:** Produce separate NCS-derived and VCI-derived contextual values with their own validity, confidence, coverage, and provenance.
8. **Evaluate gates, patterns, and contradictions:** Confirm that each required input independently clears its gates; identify corroboration, abrupt change, issuer incidents, and meaningful disagreement.
9. **Synthesize or decline:** Apply the approved capped synthesis only when the scope permits it. Otherwise produce Building history, Under review, Temporarily unavailable, Not available in this context, Context varies, or another approved non-score state.
10. **Map, persist, explain, and sign:** Apply the versioned display mapping and persistence rules; create a plain-language reason summary and a signed result capable of supporting approved proofs.

The audit trace must make it possible for an authorized reviewer to reproduce each stage without exposing more personal data than necessary.

### 9.6 Context model

Conduct is not equally portable across every situation. Patience with a hotel employee, responsible use of a rental car, on-time repayment, and behavior in a medical setting may involve different expectations, power dynamics, data quality, and legal constraints.

The synthesis function supports three contextual views:

#### Company-specific CQ

Represents evidence from the consumer's direct history with one company or governed corporate group. It may include relevant company-specific NCS and VCI evidence, subject to concentration controls.

This view can describe an established relationship but should not be mistaken for independent cross-company validation.

#### Industry-specific CQ

Represents evidence from certified interactions within an approved industry taxonomy, such as airlines, lodging, dining, or vehicle rental. It supports the core portability example: a consumer may choose to present relevant airline conduct earned with Delta when beginning or expanding a relationship with United.

Evidence from another company may be included only with the consumer's explicit consent and through a validated context mapping allowed by competition, privacy, and governance rules. A verifier requests an approved context-and-purpose proof, not a named-competitor history. The consumer may privately choose eligible sources; the response does not reveal which competitor, how many companies, event volume, or source composition unless separately necessary and explicitly approved.

Industry-specific does not mean that every record from the same industry is pooled. It means that one or more exact source-to-target mappings have independently established that specified evidence remains relevant to the requested industry purpose. A broad label such as airline, lodging, dining, travel, hospitality, or retail cannot itself authorize transfer.

#### Overall CQ research architecture

Represents every currently valid context CQ in one fixed, approved, independently supported source set. It is the most intuitive public idea and the highest-risk mathematical construct.

Suite L advances L4 contradiction-aware capped synthesis as the provisional structural research lead. An overall CQ may be calculated in research only when:

- At least two approved and sufficiently observed context families are present.
- The contributing issuers and evidence lineages establish the required independence.
- Each context CQ independently clears its own component and scope gates.
- Every context family receives equal semantic influence; transaction volume affects sufficiency, not weight.
- The context average cannot lift the result more than the approved cap above the weakest included context.
- A material spread produces **Context varies** instead of a number.
- The full approved source set is fixed, versioned, and not cherry-picked after results are known.
- Removing a valid context pauses or versions the result rather than silently improving it.
- Unrelated, zero-transfer, duplicate, dependent, and legally restricted contexts contribute zero.
- The consumer can understand which context families contributed and why a number may be unavailable.

The provisional Suite L research settings are a ten-internal-point weakest-context cap and a 40-point Context varies spread. Neither is a production coefficient. Overall CQ remains outside the initial live pilot and initial production claim. Company- and approved context-specific CQ must establish validity, utility, comprehension, fairness, and lawful operation first. Research must remain allowed to reject overall CQ permanently.

### 9.7 Context relevance and transfer

Each event receives a governed relevance value for the requested context. The conceptual form is:

```text
Effective event weight = base weight
                         × evidence confidence
                         × attribution confidence
                         × context relevance
                         × recency weight
                         × independence adjustment
```

Each factor is bounded between zero and one except the approved base weight. This equation describes the architecture, not final production coefficients.

The starting research policy is:

- Same company and interaction family: highest relevance
- Different company in the same certified interaction family: zero in production until the specific mapping is validated; nonzero values may be tested in labeled research
- Different interaction family in the same industry: zero by default and not made relevant merely by the shared industry label
- Adjacent approved industries: zero in production unless a specific mapping later passes evidence and governance review
- Unrelated or legally restricted contexts: zero relevance by default

Context is defined at least by interaction function, consumer role, event or evidence class, source setting, target setting, proof purpose, population, jurisdiction, and time period—not only by a broad industry label. Context mappings must be public, versioned, prospective, and independently validated. A business cannot declare that an unrelated history is suddenly relevant because doing so would benefit its commercial model.

Suite D v0.1 makes the independent, closely matched role-and-function family the lead cross-company research candidate. It does not approve an airline, company pair, coefficient, proof, or production transfer. The same-business, same-function case remains a company-local reference rather than portability evidence. Same-industry, different-function evidence does not advance through the industry label. Matched functions across adjacent industries remain eligible for bounded research because functional relevance may be stronger than industry membership. Unrelated or materially different contexts remain presumptively zero.

NCS and VCI mappings are authorized separately. A source-target relationship that preserves employee-experience meaning does not automatically preserve operational-responsibility meaning. If an approved proof needs both dimensions, both component mappings and all applicable evidence gates must clear independently. A mapping for one component may remain zero while the other is tested or approved.

Each nonzero mapping MUST exist as a versioned registry profile that names:

- The source and target settings
- The NCS or VCI evidence class
- The consumer role and interaction function
- The proof purpose and approved benefit class
- The applicable population, language, jurisdiction, service channel, labor model, and material power relationship
- Eligible issuers, corporate-family and shared-infrastructure lineage, and independence treatment
- Validation and materially independent replication periods
- Incremental-validity, calibration, error, subgroup, concentration, stability, and comprehension evidence
- Legal and governance review state
- Effective date, expiry, monitoring owner, challenge path, suspension trigger, and rollback rule

A mapping is an authorization for that complete profile, not a general numerical value between industries. It begins at zero, advances only prospectively, and returns to zero when it expires or when validity, fairness, independence, comprehension, proportionality, legal, or operating gates fail.

Evidence from businesses sharing a platform, corporate family, database, rater pool, derived feature, or material implementation dependency MUST NOT be treated as independent merely because it carries different brand or issuer identifiers. Shared infrastructure is recorded in the lineage graph and tested before cross-company corroboration is claimed.

Ordinary verifier proof MUST NOT reveal a named source, competitor, source count, interaction volume, relationship duration, event composition, source dominance, or source-specific result. The eligible source set is fixed before a request; the verifier cannot select or vary sources after observing results. Equivalent and overlapping requests are purpose-limited, metered, and audited to prevent source inference and query-composition attacks.

The Delta-to-United example is therefore an illustration of a future approved airline-purpose proof, not the disclosure of a Delta relationship or transfer of a Delta score. United would receive only the authorized positive proof. The mapping remains hypothetical until the exact NCS and VCI evidence classes, functions, populations, issuers, purposes, independence, comprehension, fairness, and legal conditions are validated.

### 9.8 Confidence and coverage

The system must distinguish **what the evidence suggests** from **how much evidence supports that conclusion**.

The evidence profile reflects factors such as:

- Number of eligible independent interactions
- Attribution and evidence quality
- Sampling quality
- Diversity of issuers and interaction types
- Data recency
- Missingness and coverage
- Concentration in one incident or source
- Dispute, correction, reversal, and invalidation rates
- Stability across approved contexts

These properties must remain separately inspectable. Sufficiency, provenance, sampling, attribution, independence, recency, completeness, construct validity, and fairness cannot be averaged into one omnibus confidence value when one operates as a gate. Large volume cannot repair failed sampling, recent evidence cannot repair bad attribution, and issuer diversity cannot repair an invalid construct.

Confidence must not increase merely because a consumer spends more money or completes many near-identical transactions. Repeated evidence from one recurring relationship may improve knowledge of that relationship while adding little cross-company confidence.

The output should use understandable confidence categories—such as developing, established, or high-confidence—unless research demonstrates that a numerical interval is clearer. The exact labels remain provisional.

When confidence falls below the approved threshold, the result must say **insufficient history**. It must not fill the gap with a population average that appears to be personal evidence.

### 9.9 Combining the two dimensions

Before combination, the NCS- and VCI-derived contextual values are placed on compatible bounded internal scales while their original values, distributions, evidence packages, and versions remain available for audit.

The provisional Suite K K3 research family is:

```text
N = valid and sufficient contextual NCS-derived value on 0–100
V = valid and sufficient contextual VCI-derived value on 0–100
M = (N + V) / 2
κ = approved maximum uplift above the weaker input

Internal CQ synthesis = min(M, min(N,V) + κ)
```

Suite K used `κ = 10` as a preregistered structural setting. That setting:

- preserved monotonicity and deterministic reproduction;
- produced no score when either required input was invalid, unknown, or insufficient;
- limited maximum uplift above the weaker input to ten internal points;
- prevented high or strong results under the preregistered material-weakness and contradiction boundaries; and
- retained a useful relationship to the supplied balanced synthetic target.

The ten-point cap is **CANDIDATE**, not a constitutional truth or production coefficient. An exploratory sensitivity check found that smaller caps behaved increasingly like a pure weakest-link rule and larger caps recovered synthetic correlation by permitting more compensation. K6 weakest-link anchored synthesis remains the performance challenger.

Confidence does not enter the standing formula as a compensating weight. It operates as an availability and evidence gate. Lower confidence may produce Building history or another non-score state; ordinary confidence decay does not pull an unchanged standing toward a neutral value.

The provisional public mapping tested in Suite K is:

```text
Displayed scale before persistence = 1 + 4 × (internal CQ synthesis / 100)
Displayed CQ = versioned rounding to two decimal places
```

The working rounding candidate is nearest hundredth, half-to-even. The linear mapping, real population distribution, public example values, minimum publishable change, settlement window, update cadence, and consumer meaning remain open. Under the working linear mapping, `CQ 4.96` equals an internal synthesis of `99`; it MUST NOT be presented as a generic or empirically typical good-customer score without supporting evidence.

The private consumer surface leads with one contextual CQ when available. The consumer can open **How your CQ was formed** to inspect the separately governed human-experience and verified-customer-record inputs, their limitations, and active evidence. The worker and ordinary verifier do not receive those values.

### 9.10 Contradictory evidence

Contradiction is information, not a calculation error.

Four broad directional states are possible once each dimension has separately met its evidence gates:

| Human evidence direction | Operational evidence direction | Responsible interpretation |
|---|---|---|
| Favorable | Favorable | Eligible evidence supports both positive human treatment and operational reliability. |
| Favorable | Adverse | Human-interaction evidence is favorable, while operational evidence contains material concerns. |
| Adverse | Favorable | Operational evidence is favorable, while human-interaction evidence contains material concerns. |
| Adverse | Adverse | Both dimensions contain material concerns, subject to their separate evidence states and context. |

Mixed direction is represented explicitly. Insufficient, developing, low-quality, or context-inapplicable evidence is not called adverse or weak conduct and does not enter this table as though it were a directional conclusion.

A consumer with strong VCI and weak NCS is not “cleared” by operational efficiency. A consumer with strong NCS and weak VCI is not “cleared” by likability. Proof policies may require a minimum level in each dimension, allow one dimension to be omitted when irrelevant, or provide a qualified result. Those policies must be explicit and benefit-specific.

The leading verifier architecture is a purpose-bound proof. When the approved purpose requires both dimensions, the proof rule is conjunctive and each dimension clears its own minimum and evidence gates. When only one dimension is legitimately relevant, the other is omitted rather than averaged, exposed, or treated as adverse. A verifier cannot redefine the purpose or choose the component producing a preferred result after seeing the consumer's state.

The primary consumer surface still shows one CQ when the capped synthesis can represent the two valid inputs responsibly. The explanation beneath it must make a material mixed direction discoverable without accusation. If the contradiction crosses the approved one-scope boundary, the formula must cap the number, change its status, or produce Under review rather than let the favorable input conceal the other. Example explanations include: “The two parts of your history currently differ” and “One part of your CQ is under review.” Final language requires comprehension and emotional-response research.

### 9.11 Recency, legacy, and redemption

Recency should answer whether historical evidence still represents the present. It should not create permanent punishment, demand continuous consumption, or cause an inactive consumer's score to drift downward.

The synthesis function therefore separates:

- **Evidentiary weight:** how much an older event contributes to the current calculation
- **Confidence:** whether enough current evidence exists
- **Historical visibility:** whether the consumer can still inspect the event
- **Retention:** whether an issuer or OCA may retain it for legal, audit, or security purposes

A candidate decay function remains:

```text
Recency weight at time t = initial weight × e^(-λt)
```

But there should not be one universal half-life. Appropriate decay may differ by event type, context, evidentiary severity, and the purpose of the proof. Any difference between positive and negative decay must be justified, public, and tested for unfair lock-in or strategic reset behavior.

As old evidence loses influence, confidence may move from established to developing or insufficient. The underlying conduct value should not fall merely because the consumer stopped transacting.

Any threshold proof must use separately governed entry and exit conditions, pending and dispute behavior, version-transition rules, and protection for a benefit already completed in good faith. Suite C supports hysteresis as a structural stability control but does not select a universal width. Proof availability and conduct direction remain distinct: recency or inactivity may make evidence insufficient, but it cannot create adverse standing or require unnecessary purchases to restore it.

Redemption should result from three mechanisms:

1. Older evidence becomes less representative over time.
2. New independent positive evidence changes the current balance.
3. Corrections, reversals, and successful appeals remove invalid adverse effect.

The system must not present redemption as requiring a consumer to purchase more transactions. Pilot design should test noncommercial or low-cost ways to reestablish sufficient evidence where appropriate.

### 9.12 Patterns, clusters, and rapid change

The source brief proposed a circuit breaker when several severe negative events appeared quickly across independent businesses. The underlying concern is valid: a large positive history should not completely absorb a meaningful new pattern.

The production rule should be narrower and safer:

- Only active, eligible, high-confidence events count.
- Events must be independent after interaction, issuer, corporate-family, and incident clustering.
- NCS and VCI events are evaluated under their own evidence standards.
- The trigger identifies a **rapid-change review state**, not a danger determination.
- The consumer receives notice and an understandable explanation.
- Disputed events have no adverse effect while reviewed.
- Any proof reevaluation is limited to additional benefits and follows the approved benefit policy.
- The state expires or resolves under published rules and supports appeal.

No fixed “three events in sixty days” or “seven-day danger window” is approved. Thresholds must be derived through simulation, false-positive testing, and governance review.

Conduct synthesis is not a threat-detection system. Businesses must continue to use their own lawful safety and incident procedures rather than interpreting CQ as clearance or warning.

### 9.13 Independence and concentration

The synthesis function must distinguish repeated evidence from independent evidence.

The following may be correlated and require clustering or caps:

- Several employee responses from one interaction
- Several interactions arising from one disruption or dispute
- Multiple brands owned by one corporate family
- A long series of identical automated transactions
- Related issuers relying on the same underlying database
- Events generated through one shared platform or intermediary

The output should report effective independent interaction count in addition to raw event count. A hundred records derived from one relationship must not look equivalent to evidence from ten unrelated businesses.

Issuer concentration should not automatically reduce the accuracy of a company-specific CQ; it primarily limits portability and overall confidence.

### 9.14 Issuer incidents and systemic anomalies

The synthesis function must recognize when a business environment may be generating distorted evidence. Relevant indicators include:

- Sudden statistically unusual changes in NCS response volume or distribution
- Mass cancellations, delays, outages, closures, or inventory failures
- Spikes in VCI failures tied to one system or policy change
- Abnormal correction, dispute, reversal, or invalidation rates
- Selective sampling or missingness
- Retaliatory issuance patterns
- Compromised credentials, terminals, or integrations

An anomaly creates an issuer-incident state for review. It may temporarily reduce confidence in affected inputs when a published rule and sufficient evidence justify doing so. It does not automatically delete negative events or assume that every consumer response was valid.

Once resolved, the system must recompute affected synthesis results and issue updated credentials or proofs where necessary. The incident, rule applied, duration, and consumer impact must be auditable.

### 9.15 Versioning and change control

Every synthesis result must identify:

- Calculation and policy version
- Input schema versions
- Context taxonomy version
- Evaluation timestamp
- Evidence cutoff time
- Applicable issuer restrictions or incident rules

Material rule changes should run in shadow mode before production. OCA must evaluate score migration, proof eligibility changes, disparate outcomes, manipulation risk, and consumer comprehension.

Rules should apply prospectively where possible. If a new interpretation changes historical events, the system must document the reason, recompute affected results consistently, notify materially affected consumers, and provide an appeal path.

No participating business may select an older or newer model version opportunistically. Proof verifiers must accept only currently certified versions and approved transition windows.

### 9.16 Explanation and audit output

Each synthesis result must support two explanations.

#### Consumer explanation

The consumer-facing explanation should state:

- Which context was evaluated
- Whether each dimension is strong, developing, mixed, or insufficient
- The level and sources of confidence
- The principal types of evidence that helped or limited the result
- Whether active disputes, contradictions, concentration, or aging evidence affected it
- What changed since the previous result
- How to inspect, correct, dispute, or appeal contributing events

It must not expose an employee's identity, proprietary source data, protected traits, or security-sensitive controls.

#### Audit explanation

An authorized audit package should include:

- Eligible input references and lifecycle states
- Excluded input references and exclusion reasons
- Each effective-weight factor
- Clustering and concentration adjustments
- Intermediate dimension values
- Confidence and coverage calculations
- Pattern, incident, and contradiction flags
- Final result and proof eligibility
- Complete model, schema, and policy versions

The audit package must enable reproduction without granting ordinary businesses unrestricted access to cross-company event histories.

### 9.17 Mathematical and fairness tests

Any candidate synthesis model must pass defined tests before production:

- **Boundedness:** Results remain within the approved range.
- **Monotonicity:** Adding otherwise identical eligible positive evidence cannot worsen the relevant dimension; adding eligible negative evidence cannot improve it.
- **Missingness:** Missing data reduces confidence rather than conduct value.
- **Dispute safety:** Moving an adverse event into disputed state cannot make the result worse.
- **Reversal fidelity:** A corrected or reversed event loses active effect everywhere it contributed.
- **Volume resistance:** Repeated low-information transactions have diminishing or capped influence.
- **Concentration resistance:** One interaction or issuer cannot dominate a portable result.
- **Context integrity:** Unapproved contexts contribute zero.
- **Recency stability:** Ordinary passage of time does not cause abrupt unexplained changes.
- **Redemption:** New positive evidence can change a negative historical pattern under published rules.
- **Manipulation resistance:** Synthetic interactions, collusion, strategic timing, and issuer gaming do not produce easy gains.
- **Counterfactual fairness:** Protected-characteristic changes and prohibited proxies do not alter results when conduct evidence is held constant.
- **Group fairness:** Error, confidence, dispute, invalidation, and proof-eligibility rates are evaluated across relevant populations and contexts.
- **Calibration:** A representation has comparable meaning across approved issuers and contexts.
- **Explainability:** Consumers and reviewers can identify the material reasons for a result.

Passing an average-performance threshold is insufficient if serious harms are concentrated in a subgroup, context, issuer, or event class.

### 9.18 Abuse cases and controls

| Abuse case | Required control direction |
|---|---|
| A consumer creates many easy transactions to overwhelm negative evidence. | Diminishing weights, interaction clustering, diversity thresholds, and manipulation detection. |
| A company overproduces positive inputs for its preferred customers. | Sampling controls, event eligibility, issuer-distribution audits, concentration caps, and sanctions. |
| Several brands under one owner appear to provide independent evidence. | Corporate-family mapping and shared-source clustering. |
| A business selects the context or model version producing the desired answer. | Consumer-approved proof request, certified context taxonomy, current-version enforcement, and audit logs. |
| Old negative evidence becomes permanent punishment. | Published recency, confidence separation, redemption testing, and appeal. |
| A consumer resets identity to escape history. | Identity continuity and recovery controls defined in Part III. |
| A company outage produces mass negative inputs. | Issuer-incident detection, external-cause records, temporary confidence controls, and recomputation. |
| Strong VCI hides repeated mistreatment of workers. | Separate dimensions, independent minimums for relevant proofs, and contradiction disclosure. |
| Positive NCS hides unfulfilled responsibilities. | Separate dimensions, contextual proof rules, and no automatic offset. |
| A hidden proxy enters through model complexity. | Input allowlists, interpretable baseline, independent audits, counterfactual tests, and published versions. |

### 9.19 Pilot and model-selection requirements

Suites K and L replace the pre-simulation model shortlist with these provisional leads and controls:

1. **K3 capped arithmetic:** Lead within one valid scope.
2. **K6 weakest-link anchored:** One-scope performance challenger.
3. **L4 contradiction-aware capped synthesis:** Lead across approved context families.
4. **L3 equal-context capped synthesis:** Simpler overall challenger.
5. **Two-dimensional explanation:** Information-preserving control beneath the CQ.
6. **Purpose-bound proof:** Data-minimizing verifier control and default external output.

The confidence-shrunk K7 proxy is rejected because confidence-only movement changed standing. Naïve arithmetic combination, unconstrained evidence-volume weighting, and user-selected favorable source subsets are rejected.

The production model should be the least complex model that meets accuracy, fairness, stability, privacy, manipulation-resistance, and explanation requirements. Mathematical sophistication is not itself a benefit.

Pilot evaluation must include:

- Incremental value for the balanced interaction outcome defined in Section 18
- Incremental value of combining NCS and VCI
- Small-sample and new-participant behavior
- Context transfer and competitor portability
- Contradiction frequency and interpretability
- Recency, dormancy, and redemption behavior
- Pattern sensitivity and false-positive rates
- Issuer, employee, event, and corporate-family concentration
- Score and proof migration under model changes
- Disparate outcomes and error rates
- Consumer comprehension and perceived legitimacy
- Business comprehension and implementation consistency
- Dispute, correction, reversal, and appeal effects
- Resistance to consumer, employee, and issuer manipulation
- Ability to produce complete reproducible explanations

The K3 and L4 families remain **CANDIDATE** until their coefficients, inputs, context maps, display behavior, human meaning, fairness, and governance controls satisfy approved research and pilot thresholds. Overall CQ remains outside the initial live pilot even if its shadow calculation advances.

## 10. Conduct Quotient and disclosure controls

### 10.1 Purpose

The Conduct Quotient is the consumer-controlled representation of a person's eligible conduct history. It turns NCS, VCI, and synthesis results into something a consumer can understand, carry, and choose to use with a business.

CQ is designed to create a return on nice: consumers who demonstrate positive human conduct and operational reliability may use that record to unlock approved recognition, convenience, flexibility, or other additional benefits.

CQ is not a public reputation, a social ranking, a universal trust score, or a license to receive baseline service. It is not a safety clearance, fraud determination, credit assessment, employee-screening tool, or statement of moral worth.

The consumer controls presentation of CQ. That does not mean the consumer can alter signed source events or compel a particular result. Issuers remain responsible for their records, OCA governs the shared standard, and consumers receive enforceable rights to inspect, correct, dispute, and appeal.

### 10.2 Core requirements

| ID | Requirement | Status |
|---|---|---|
| CQ-001 | CQ MUST be held and presented under the consumer's control. | CONSTITUTIONAL |
| CQ-002 | A business MUST NOT access CQ, a CQ proof, or underlying cross-company history without an affirmative consumer action or another narrowly defined lawful basis approved by OCA. | CONSTITUTIONAL |
| CQ-003 | Ordinary verification MUST disclose the minimum information necessary for one declared benefit or purpose. | CONSTITUTIONAL |
| CQ-004 | A verifier SHOULD receive a purpose-bound eligibility proof rather than a raw score or event history. | REQUIRED FOR COHERENCE |
| CQ-005 | Every CQ representation and proof MUST identify its context, confidence or evidence sufficiency, version, issuer, and validity period. | REQUIRED FOR COHERENCE |
| CQ-006 | Company-, approved context-, and research-approved overall CQ MUST remain distinguishable and selectively shareable. Overall CQ is a bounded research hypothesis outside the initial live pilot and MUST NOT be implied as inevitable. | REQUIRED FOR COHERENCE |
| CQ-007 | Refusal to participate, insufficient history, refusal to share, or failure to qualify MUST NOT reduce baseline service. | CONSTITUTIONAL |
| CQ-008 | CQ MUST NOT be publicly searchable, transferable to another person, or presented through leaderboards or social comparison. | CONSTITUTIONAL |
| CQ-009 | Consumers MUST be able to inspect contributing evidence, proof requests, presentations, material changes, and benefit decisions. | CONSTITUTIONAL |
| CQ-010 | Businesses MUST declare the requested proof, context, purpose, benefit, retention period, and baseline alternative before consent. | CONSTITUTIONAL |
| CQ-011 | A CQ proof MUST be verifier-bound, time-limited, resistant to replay, and invalid after revocation or material supersession. | CANDIDATE |
| CQ-012 | The system MUST support accessible, assisted, and non-smartphone participation without treating assistance as lower conduct. | CONSTITUTIONAL |
| CQ-013 | A new or inactive participant MUST receive baseline service and an honest evidence state, not an assumed negative or misleading seed score. | CONSTITUTIONAL |
| CQ-014 | Any loss of proof eligibility or an active additional benefit MUST follow published notice, explanation, dispute, and transition rules. | CONSTITUTIONAL |
| CQ-015 | The lead consumer-facing representation is one contextual CQ on a working `1.00–5.00` scale with two decimal places; the two protected inputs remain available beneath it. Mapping, calibration, persistence, labels, and production use remain candidates. | CANDIDATE |
| CQ-016 | Consumers MUST have a unified challenge path covering underlying events, identity attribution, NCS and VCI inputs, company-, industry-, and overall CQ, proof responses, and benefit decisions. | CONSTITUTIONAL |
| CQ-017 | Only an eligible benefit proof may create a CQ-specific verifier record; refusal, insufficient history, nonqualification, dispute, expiry, withdrawal, and technical failure MUST follow the ordinary baseline path and MUST NOT become a retained negative conduct signal. | CONSTITUTIONAL |
| CQ-018 | The initial external protocol MUST support only approved purpose-bound benefit-eligibility proofs; standalone participation, evidence-sufficiency, dimension, relationship, and named-history proofs are outside the initial profile. | REQUIRED FOR COHERENCE |
| CQ-019 | Recurring proof permission MUST be verifier-, context-, policy-, and benefit-specific, time-limited, centrally visible, revocable, and suspended after a material recipient or policy change. | CONSTITUTIONAL |
| CQ-020 | A participating business MUST establish its baseline through preregistered measurement before CQ becomes visible and MUST accept independent baseline definition, monitoring, and reclassification. | CONSTITUTIONAL |
| CQ-021 | Complaint, correction, dispute, appeal, accommodation, safety, legally owed refund, and legal-rights handling MUST NOT be a CQ benefit or receive CQ-based priority. | CONSTITUTIONAL |
| CQ-022 | Proof presentation SHOULD be consumer-initiated or offered privately; employee-requested disclosure and repeated pressure are prohibited. | CONSTITUTIONAL |
| CQ-023 | Benefit fulfillment data MUST be separated from general customer analytics, segmentation, model training, marketing, risk, and workforce systems. | CONSTITUTIONAL |
| CQ-024 | No personal CQ is shown until the applicable component, evidence, confidence, diversity, independence, and context requirements are met. A population average or default seed score is prohibited. | CONSTITUTIONAL |
| CQ-025 | The primary CQ interface MUST identify scope and support Building history, Under review, Temporarily unavailable, Not available in this context, Context varies, and Not participating without treating them as low scores. | REQUIRED FOR COHERENCE |
| CQ-026 | Raw VCI event counts and a second competing input score MUST NOT lead the first-skim consumer experience; inspectable input and event detail remains available through explanation and challenge. | REQUIRED FOR COHERENCE |
| CQ-027 | A rounded displayed CQ MUST NOT be the sole basis of an approved benefit proof; the proof evaluates the unrounded result, separately gated inputs, policy version, scope, and evidence state. | CONSTITUTIONAL |
| CQ-028 | Ordinary frontline workers MUST NOT see CQ, NCS, VCI, proof eligibility, benefit eligibility, prior responses, spending, or status while submitting an NCS response. | CONSTITUTIONAL |

Suite E v0.1 makes an eligible-only proof the lead external protocol: only a successful, consumer-authorized presentation creates a CQ-specific verifier record. All refusal, insufficiency, nonqualification, dispute, expiry, withdrawal, context, and technical-failure states remain consumer-private and follow the ordinary baseline path. A generic failed, unavailable, or no-proof response is not an acceptable substitute because it reveals that a CQ check occurred without succeeding.

The lead initial interaction combines consumer-initiated presentation with one-time authorization. One standardized private offer remains a bounded discovery challenger when it is untargeted by CQ standing, employee-invisible, not repeated, and paired with an effective do-not-ask control. Employee-requested presentation and repeated prompts are rejected. Recurring permission remains outside the initial release and may advance later only through direct comprehension, expiry, receipt, revocation, material-change suspension, and background-use testing.

The lead initial benefit family is modest but meaningful, nonessential, reversible, non-rights, and genuinely non-positional because its capacity is additional. The label is not self-proving: value, scarcity, queues, staff time, inventory, discretion, substitution, third-party burden, and baseline relationship require independent classification. Weakly positional benefits remain restricted future research; scarce, rights-related, queue-changing, or materially coercive benefits do not enter the initial profile.

### 10.3 CQ product model

CQ consists of three related but distinct artifacts.

#### A. Private consumer view

The private view helps the consumer understand their conduct history, current contextual representations, evidence sufficiency, available benefits, recent changes, and unresolved issues.

This view may contain more detail than any business receives. It is not public and should not be designed for social display.

#### B. Portable CQ credential

The credential is a signed, versioned representation of one contextual synthesis result. It may reside in an approved wallet, account, or other secure consumer-controlled environment.

The credential contains or references enough information to generate valid proofs. It does not need to contain a complete cross-company event history. The technical architecture remains open until the identity and privacy module.

#### C. Purpose-bound CQ proof

A proof answers a narrow question for one verifier and one declared purpose. Examples include:

- “This person has sufficient established airline conduct history for Benefit A.”
- “This person satisfies the approved human-conduct and operational-reliability requirements for Benefit B.”
- “This person has an active company-specific relationship credential with this business.”

The proof should reveal eligibility, not the consumer's exact score, event history, prior locations, complaint history, or relationships with other businesses unless the consumer deliberately selects a more specific disclosure.

This separation makes CQ useful without making a person's history broadly visible.

### 10.4 Contextual CQ views

The consumer may hold several CQ representations at the same time.

#### Company-specific view

Shows conduct evidence associated with one company or governed corporate group. It may help the consumer understand an established relationship and unlock company-specific benefits.

The company already possesses much of its own source data, but it must still follow CQ rules when using the synthesized representation. It cannot infer permission to access cross-company evidence.

#### Industry-specific view

Combines eligible evidence within one certified industry context. This is the primary form of portability between competitors.

For example, a consumer with established conduct history from flying Delta may choose to use that history when flying United. The ordinary proof should say that the consumer meets an approved airline-conduct standard. If the consumer wants to disclose that Delta-specific history contributed, that must be a separate explicit choice and legally permitted.

#### Overall-view research concept

Would summarize every currently valid context CQ in one fixed, approved, independently supported source set. The provisional L4 architecture requires at least two context families, equal family influence, a weakest-context cap, deduplication, and a Context varies state when one number would hide material disagreement.

Overall CQ is not an initial live-pilot view or promised destination. It may be tested only after company- and approved context-specific representations demonstrate relevance, diversity, independence, fairness, utility, comprehension, and legal viability. The research may narrow or permanently reject the concept.

The interface must always label the context. “Established airline conduct” and “established conduct with this hotel” must not appear as one interchangeable universal claim.

### 10.5 What the consumer sees

The private CQ experience should answer six questions without requiring the consumer to understand the mathematics:

1. **What is my current conduct standing?**
2. **Which context does it describe?**
3. **How much reliable evidence supports it?**
4. **What human and operational evidence contributed?**
5. **What can I choose to do with it?**
6. **How can I correct something that appears wrong?**

The minimum consumer experience includes:

- One prominent contextual CQ shown to two decimal places when a score exists
- An obvious scope selector or label for company, approved context, and any research-approved overall view
- An honest non-score state when the result cannot responsibly be produced
- An optional **How your CQ was formed** explanation with separate human-experience and verified-customer-record inputs
- Confidence or evidence-sufficiency status
- Company and validated industry views, plus any separately labeled overall research view only when an approved study is active
- Material changes since the previous calculation
- Active, pending, disputed, reversed, and expired event summaries
- Available and previously used proofs
- Approved benefits currently available or active
- A presentation log showing what was shared, with whom, when, and for what purpose
- Correction, dispute, and appeal controls
- Participation, privacy, recovery, and withdrawal controls

The default interface should make the number immediately legible while making its scope, status, and limitations easy to discover. It should not force consumers to monitor daily movement, interpret raw operational fractions, or decode two competing primary scores.

### 10.6 Candidate consumer presentations

The product contract selects one numerical CQ as the lead consumer surface while retaining alternative representations as research controls and fallback states.

#### Numerical CQ

A bounded `1.00–5.00` number with two decimal places offers familiarity and immediate legibility. It also creates risks of false precision, status competition, threshold gaming, anxiety, and inherited expectations from marketplace ratings.

The number must always have a named scope and evidence state. Its two protected inputs are available beneath **How your CQ was formed**; they do not compete with the primary score. The working mapping is linear from internal `0–100`, but calibration, typical values, labels, and display persistence remain open. Synthetic example values MUST be identified as illustrative.

#### Two-dimensional view

Displays the NCS- and VCI-derived inputs separately. It remains the information-preserving research control, audit representation, and deeper consumer explanation rather than the default first-skim view.

#### Conduct tier

Uses governed status or evidence labels such as Building history, Under review, and Context varies. These are honest non-score states, not grades of human worth. Positive standing labels remain optional candidates and require human research.

#### Proof-only experience

Shows an approved receiving business only whether one consumer-authorized proof succeeded for one purpose. It remains the default external representation. The consumer still receives enough private score, evidence, and provenance detail to understand and challenge the system.

The provisional product combines these approaches: one private contextual CQ for the consumer, separate inspectable inputs beneath it, honest non-score states, and a narrow proof-only result for businesses.

### 10.7 Proof types

The initial external proof framework supports one proof family:

| Proof type | What it establishes | What it should not reveal |
|---|---|---|
| Benefit-eligibility proof | The consumer satisfies the policy for one approved benefit. | Raw CQ, exact thresholds, or unrelated dimensions. |

Standalone participation, evidence-sufficiency, dimension, industry-standing, company-relationship, and named-history proofs are outside the initial verifier profile. They reveal facts a business does not need to fulfill one approved benefit and can be combined to reconstruct standing. Any later proof family requires separate necessity, inference, combination, coercion, competition, privacy, and prohibited-use review.

A verifier cannot request named history. The consumer privately selects eligible sources for the approved context-and-purpose policy. Any future consumer-initiated disclosure of a named source sits outside ordinary CQ verification and requires its own high-risk profile.

Proof policies should usually encode the complete benefit rule. A business should ask whether the consumer qualifies for Benefit A, not whether the consumer has “CQ above 850.” This minimizes disclosure and lets governed policies evolve without teaching every verifier how to interpret conduct data.

### 10.8 Proof request and consent flow

Proof presentation should ordinarily be initiated by the consumer. The initial permission is one-time and binds one verifier, benefit, context, proof policy, and presentation. A single quiet private offer may be tested as a discovery mechanism only when it is standardized, not selected using actual or inferred CQ standing, invisible to frontline employees, and followed by a durable “do not ask me here” choice. A frontline employee may explain the benefit if the consumer asks but may not request proof, wait for a disclosure, see that an attempt failed, or receive an incentive tied to presentation. Repeated business prompting is prohibited in the initial profile.

Before the consumer shares a proof, the verifier must present a standardized request containing:

- Verifier identity
- Requested proof and context
- Plain-language purpose
- Specific additional benefit offered
- Baseline service available without sharing
- Data the verifier will receive
- Proof validity and retention period
- Whether presentation will be linked to an existing customer account
- Whether any downstream party will process the proof
- Withdrawal, complaint, and support information

The consumer then approves, declines, or selects a less revealing proof when one is available.

Consent must be affirmative, specific, informed, unbundled from unrelated terms, and as easy to decline as to accept. Preselected consent, urgency manipulation, degraded refusal paths, or repeated prompts designed to wear down the consumer are prohibited.

A recurring permission is outside the initial release. A later research profile may allow one for a recurring relationship only when it is verifier-, context-, proof-policy-, benefit-, and downstream-recipient-specific; short-lived; separately chosen; visible in a central permission view; accompanied by clear first-use, use, expiry, and renewal receipts; and revocable without navigating the verifier's account system. A material change in the policy, benefit, verifier, context, recipient, data, or retention suspends permission until renewed. Revocation stops future presentations; it cannot retroactively erase a proof already lawfully used.

### 10.9 Minimum disclosure and verifier response

The preferred external exchange is asymmetric and narrowly structured. When the consumer is eligible and authorizes presentation, the verifier receives:

```text
Proof: Benefit A eligibility
Result: Eligible
Context: Certified airline conduct
Credential version: [version]
Valid until: [timestamp]
Consumer authorization: [purpose-bound reference]
```

When no eligible proof is presented—whether because of insufficient history, failure to meet the approved policy, refusal, withdrawal, expiration, incompatible context, active dispute, technical failure, or another cause—the consumer privately receives the reason. The verifier follows the ordinary baseline path without receiving a CQ response. It does not receive “No,” “Unavailable,” “Not Eligible,” “Attempted,” or another signal that distinguishes the interaction from no CQ exchange. A declined or unsuccessful exchange must not create a retained conduct-specific request log, field, negative model label, worker-visible status, or customer-treatment signal. Privacy-protected operational telemetry may diagnose system reliability only when it is segregated from customer identity and cannot be joined back into treatment or segmentation.

The zero-record rule is tested at the complete integration boundary rather than only in the proof payload. Timing, offer state, network traffic, CRM and loyalty fields, support logs, worker screens, analytics, downstream models, and shared identifiers are included in privacy and baseline review. A positive proof may create the minimum verifier and consumer receipt required to fulfill, audit, challenge, and remedy that benefit; an unsuccessful attempt may not.

Businesses and frontline employees should ordinarily see only that the benefit is available and what action to take. They should not see the consumer's raw CQ, NCS, VCI, prior events, disputes, or competitor relationships.

### 10.10 Approved benefit framework

CQ exists to support additional benefits, but “upside only” is not sufficient by itself. A large or essential benefit can make nonparticipation functionally punitive. OCA must therefore certify both proof policies and benefit classes.

Every approved benefit must state how it is separately funded, why it does not remove a reasonable baseline from others, whether it uses scarce or positional capacity, and how shadow penalties will be detected. “Upside only” is not established by contract language; it is tested through observed treatment of participants, nonparticipants, people without established history, people who decline proof, and people who do not qualify.

Every benefit profile must classify scarcity, substitutability, queue effect, baseline relationship, third-party burden, economic value, reversibility, and rights impact. Separate funding does not make staff time, inventory, discretion, queue position, or risk capacity non-positional. The first pilot must use a low-stakes, reversible, nonessential, non-rights, and non-positional benefit whose capacity is demonstrably incremental. The benefit must also be meaningful enough to test consumer value and business fulfillment; a token reward cannot justify identity, consent, rights, and operating machinery merely because it is harmless.

Suite E supports no universal numerical boundary for “modest” or “meaningful.” Each proposed benefit must show that its value is high enough to test the proposition but low enough that declining remains practical; its scarcity and third-party burden are immaterial; its identity and rights burden are proportionate; fulfillment and remedy capacity remain available under stress; and an already completed benefit cannot be clawed back after a later CQ change.

#### Generally eligible benefit direction

Lower-risk candidates include:

- Recognition or a personalized thank-you
- Access to optional convenience features beyond a reasonable baseline
- A genuinely incremental, nonessential benefit that does not displace another consumer or alter a rights process
- Proactive service recovery or a dedicated follow-up
- Flexible options that do not transfer material cost or risk unfairly to other consumers
- Surprise-and-delight benefits that do not alter essential access
- Loyalty recognition that adds CQ as one input without replacing earned contractual rights

#### Restricted benefit direction

The following require heightened legal, economic, fairness, and consumer-impact review:

- Reduced deposits, holds, guarantees, or security requirements
- Material price discounts or fee waivers
- Flexible cancellation, return, or payment terms
- Priority access where capacity is materially constrained
- Benefits involving financial risk, contractual rights, or significant economic value
- Removal of an already active or reasonably expected benefit

#### Prohibited uses

CQ must not be used to:

- Deny, cancel, delay, or degrade baseline service
- Set a worse baseline price, fee, deposit, or contractual term
- Restrict essential services, emergency support, accessibility, or legally required accommodation
- Determine employment, housing, education, credit, insurance, healthcare, public benefits, or immigration outcomes
- Replace safety, fraud, sanctions, identity, or legal-compliance systems
- Place consumers into hidden watchlists or coordinated exclusion programs
- Expedite or deprioritize complaints, corrections, disputes, appeals, accommodations, safety response, legally owed refunds, or any other rights process based on conduct standing
- Influence employee NCS responses
- Target advertising, political persuasion, or unrelated behavioral profiling
- Sell, license, or broker conduct histories

These prohibitions apply to direct use and to models trained on, derived from, or correlated with CQ data.

### 10.11 Baseline integrity

Every participating business must define and document its baseline service before introducing a CQ benefit. The baseline must remain reasonable, accessible, and consistent with law and contract. A preregistered baseline period must be measured before CQ becomes visible to frontline staff or affects any workflow. Baseline definitions, comparison groups, outcome and adverse-tail measures, policy changes, and resource changes require independent review; the business cannot establish parity by its own definition alone.

A business may not manufacture friction in the baseline and then offer its removal as a CQ reward. It may not relabel an existing standard entitlement as a new conduct benefit or gradually migrate ordinary service behind a CQ threshold.

OCA should monitor:

- Baseline wait times, support access, prices, deposits, and policies
- Differences between participants, nonparticipants, and consumers with insufficient history
- Whether benefits become commercially necessary rather than genuinely additional
- Whether protected or less digitally connected groups receive worse effective service
- Whether consumers feel coerced to enroll or disclose

If a benefit materially changes the baseline market experience, OCA may reclassify, restrict, or prohibit it.

Eligible-versus-noneligible outcome differences MUST NOT be treated as sufficient evidence of benefit success. Baseline degradation, positional burden, selection, prompting, novelty, employee attention, implementation staffing, and the benefit itself can manufacture a favorable recipient comparison. The preregistered baseline and nonparticipant adverse tails are non-compensating gates: recipient value, business value, adoption, retention, or average satisfaction cannot offset their failure.

### 10.12 Benefit lifecycle and loss of eligibility

A benefit may be:

1. **Available:** The consumer may choose to present the required proof.
2. **Activated:** The verifier accepts the proof and grants the benefit.
3. **In use:** The benefit applies to an active interaction or defined period.
4. **Completed:** The benefit was delivered and cannot be retroactively withdrawn.
5. **Expiring:** A time-limited benefit or proof is approaching its end.
6. **Paused:** Future use is temporarily unavailable because of credential security, active recalculation, or another approved process.
7. **Ended:** Future eligibility no longer meets the published rule.

An already completed benefit may not be clawed back because CQ later changes. An active benefit should generally remain through the promised interaction or term unless fraud in the proof itself, security compromise, or another narrowly defined exception is established.

For future eligibility changes, the consumer must receive notice stating what changed, when the change takes effect, whether the issue is evidence, confidence, context, expiration, or policy version, and how to dispute or appeal. Reasonable transition or grace rules should apply when there is no immediate security concern.

Loss of an additional benefit must never trigger a separate service penalty.

### 10.13 Credential and proof lifecycle

A contextual CQ credential moves through these states:

1. **Eligible for issuance:** The synthesis result satisfies minimum requirements.
2. **Issued:** A certified authority signs a versioned credential for the consumer.
3. **Active:** The credential may generate approved proofs.
4. **Refresh available:** New events or rules support a newer credential.
5. **Superseded:** A newer credential replaces the old one.
6. **Suspended:** Use is temporarily blocked for a defined security or process reason.
7. **Revoked:** The credential is no longer valid because of compromise, invalid issuance, withdrawal, or another approved cause.
8. **Expired:** The validity period ended and a fresh synthesis is required.

Revocation does not imply negative conduct. The verifier should receive only that the proof is invalid or unavailable. The consumer receives the actual explanation.

Proofs should be short-lived, bound to the intended verifier and purpose, and protected against copying or replay. Presentation should not create a stable identifier that lets unrelated businesses track the consumer across contexts.

### 10.14 New, inactive, and returning consumers

New participants begin with **insufficient history**, not a seeded score of 500. They receive baseline service and can begin building eligible history through ordinary interactions.

Early evidence should update confidence honestly; it should not use extreme “high elasticity” that lets one or two interactions create an apparently established reputation. The consumer experience may say Building history while avoiding a numerical implication unsupported by evidence.

Inactive consumers do not lose conduct standing merely because they stop transacting. As evidence ages, confidence may decline and a proof may eventually become unavailable. The interface should explain the distinction.

Returning consumers should be able to refresh their evidence through ordinary eligible interactions. The system should test noncommercial or low-cost paths where requiring purchases would create inequitable access.

### 10.15 Portability and competitor disclosure

Portability is a defining CQ feature. It requires technical interoperability, contextual relevance, consumer permission, and rules that prevent competitive misuse.

A consumer should be able to:

- Use company-specific history with the same company
- Use industry-specific history with another certified company in that industry
- Use an approved overall representation where available
- Privately choose which eligible source history may contribute without revealing source names to the verifier
- Decline to share any representation without losing baseline service

A receiving business must not:

- Demand the complete list of companies in the consumer's history
- Infer or reconstruct competitor relationships from hidden proof fields
- Use proof presentation to target competitor customers for unrelated marketing without separate consent
- Retain or share the proof beyond its declared purpose
- Condition baseline service on revealing a named relationship

Competition and antitrust review must examine proof-policy coordination, benefit standards, issuer access, and the possibility that shared infrastructure could become a mechanism for exclusion or customer allocation.

### 10.16 Quiet, non-gamified experience

CQ should operate as an ambient utility rather than a daily behavioral product.

The consumer experience must not include:

- Public leaderboards or percentile rankings
- Social comparison
- Daily streaks
- Artificial countdowns or loss aversion
- Push alerts celebrating small score changes
- Prompts to purchase transactions to improve CQ
- Confetti, badges, or status theater attached to human worth
- Public profile links or social-media sharing by default
- Dark patterns encouraging broader disclosure

Useful notifications include credential expiration, material evidence changes, proof requests, successful presentations, security events, disputes, appeal outcomes, and newly available approved benefits. Consumers must control nonessential notifications.

The tone should be calm, factual, and respectful. The interface should describe evidence and eligibility—not praise, shame, or diagnose the person.

### 10.17 Accessibility, assistance, and delegation

CQ must support people who cannot or do not want to use a personal smartphone, biometric interface, digital wallet, or fully self-service workflow.

Approved alternatives may include:

- Accessible web or device experiences
- Hardware or printed recovery mechanisms
- Assisted presentation with strong privacy controls
- Authorized caregivers, guardians, or representatives
- Enterprise travel or booking delegates who cannot access the consumer's conduct history
- Offline or limited-connectivity proofs with short validity

Assistance and delegation must not expose more conduct information than necessary or let the delegate inherit, transfer, or alter the consumer's CQ. The detailed identity and recovery mechanisms will be defined in Section 11.

### 10.18 Consumer participation and withdrawal

Consumers must be able to:

- Enroll with informed notice
- Select participating contexts where feasible
- Review current permissions and recurring relationships
- Revoke future proof access
- Stop contributing new events, subject to clear consequences for future evidence sufficiency
- Withdraw from active participation
- Export an understandable record of their credentials, presentations, disputes, and material decisions
- Request deletion where legally and technically available

Withdrawal does not guarantee deletion of every signed source event. Issuers may have legitimate legal, contractual, security, or audit retention duties. The system must explain what stops immediately, what remains, why it remains, who controls it, and when it will be deleted or anonymized.

A person who withdraws returns to baseline service. Withdrawal may end access to future CQ benefits but must not create a negative marker visible to businesses.

### 10.19 Verifier obligations

Every business verifying CQ must:

- Request only certified proofs for approved benefits.
- Present complete standardized disclosure before consent.
- Follow the ordinary baseline path whenever an Eligible proof is not presented, without learning whether the cause was refusal, insufficient history, nonqualification, dispute, expiry, withdrawal, context, or technical failure.
- Accept the certified result without requesting underlying history unless a separately approved process applies.
- Prevent frontline employees from seeing unnecessary CQ information.
- Honor proof validity, expiry, revocation, and benefit-transition rules.
- Keep a consumer-accessible record of a successfully authorized proof and benefit decision; the consumer-controlled experience retains nonpresentation outcomes.
- Use proof data only for the declared purpose and retention period.
- Prevent onward sale, sharing, model training, or unrelated profiling.
- Keep benefit fulfillment fields and receipts separate from general customer analytics, segmentation, marketing, risk, loyalty-model, and workforce systems.
- Avoid retaining refusal, failed presentation, insufficient history, nonqualification, withdrawal, expiry, dispute, or technical failure as a conduct-specific customer field.
- Support consumer questions, complaints, and correction routing.
- Submit to OCA audits and sanctions.

A verifier may not combine CQ with other data to recreate a prohibited use or infer hidden conduct categories.

### 10.20 Challenge and review experience

Conduct feedback can feel personal even when the system is carefully framed. A consumer may experience a negative event or CQ change as an attack on their character. An employee may fear retaliation, exposure, or being told that their experience did not matter. A business may become defensive about its people or records. Reviewers may encounter anger, distress, threats, discrimination claims, and repeated emotionally difficult material.

The review system must therefore pursue accuracy **and** procedural dignity. Every party should experience voice, neutrality, respectful treatment, understandable reasons, protection from retaliation, and timely closure.

The consumer experience should remain simple even though the review system behind it is rigorous. The consumer should not need to understand which company, issuer, model, credential service, or governance body is responsible before raising a concern.

Every private CQ view should provide one clear action:

> **Something doesn't look right**

The first choice should distinguish two needs:

- **Help me understand:** Explain the result without opening a formal dispute.
- **Review this:** Record a challenge and begin the appropriate review path.

The consumer may then identify the concern in ordinary language:

- I do not recognize this interaction or event.
- This information is factually incorrect.
- This rating may not have followed the rules.
- My company- or industry-specific CQ does not look right, or a separately authorized research representation appears incorrect.
- A proof or benefit decision appears incorrect.
- I disagree and would like this reviewed.
- I am not sure; please help me understand it.

The consumer may add context or evidence but should not need to write a legal argument, confront an employee, prove a negative, or identify the correct dispute category. The system is responsible for routing the concern.

The interface must acknowledge the concern immediately, state what will happen next, explain whether anything changes while review is pending, and provide a realistic response time. It must avoid accusatory language, red warning treatments, moral labels, and prompts that intensify conflict.

#### Human-centered review principles

- **Voice:** Each affected person may provide relevant context through a protected channel.
- **Neutrality:** Reviewers apply published standards and disclose conflicts of interest.
- **Respect:** Communications describe evidence, rules, and outcomes without character judgments.
- **Safety:** Consumers, employees, reviewers, and witnesses are protected from direct confrontation, doxxing, harassment, and retaliation.
- **Proportionality:** The process and requested evidence match the materiality of the issue.
- **Timeliness:** Time-sensitive benefits and active harms receive expedited handling.
- **Finality with correction:** A matter can reach closure, while genuinely new evidence or systemic error can still justify reopening it.
- **Learning:** Repeated individual concerns can trigger systemic correction without requiring every affected person to file separately.

#### Review levels

The unified path supports five escalating levels:

1. **Explanation:** Show the context, dimensions, confidence, contributing event categories, recent changes, model version, and applicable rule in clear language.
2. **Automated integrity review:** Recheck identity attribution, event eligibility, duplicates, lifecycle states, calculation version, context mapping, business incidents, credential status, and proof-policy application. Automation may correct obvious errors but cannot issue the final denial of a material challenge.
3. **Source or issuer review:** Ask the responsible business or certified issuer to verify factual source data, responsibility disclosure, evidence, correction, or event eligibility.
4. **Independent appeal:** Submit an unresolved or material decision to an approved reviewer independent of the issuing business and original decision maker.
5. **Systemic complaint:** Escalate suspected bias, retaliation, selective sampling, repeated issuer error, baseline degradation, or policy misuse for broader investigation.

A concern may skip directly to a higher level when urgency, materiality, security, retaliation, or systemic risk warrants.

#### What can be reviewed

Different inputs require different forms of review:

| Subject | Review question | Available outcome |
|---|---|---|
| Identity or interaction attribution | Was the event connected to the correct person and role? | Correct, separate, merge, invalidate, or confirm attribution. |
| VCI event | Are the operational facts, responsibility, consumer control, evidence, and lifecycle state correct? | Correct, reverse, invalidate, finalize, or confirm the event. |
| NCS response | Was the response eligible, directly submitted, timely, nonduplicative, nonretaliatory, and compliant with prohibited-factor rules? | Withdraw, invalidate, exclude, or confirm procedural eligibility. |
| Company-specific CQ | Did the current eligible company evidence, context, confidence, and approved calculation produce the displayed result? | Recalculate, correct an input, explain, or confirm. |
| Industry CQ or separately authorized overall research representation | Were context transfer, concentration, recency, confidence, exclusions, and model version applied correctly? | Recalculate, correct, narrow context, explain, or confirm. |
| Proof response | Was the correct credential, policy, context, version, status, and consumer authorization evaluated? | Reissue, rerun, correct, or confirm the proof. |
| Benefit decision | Did the verifier honor the valid proof and approved benefit policy? | Grant, restore, correct, compensate where appropriate, or confirm. |

A subjective NCS response is not converted into a debate between the consumer and employee. The consumer may challenge attribution, eligibility, retaliation, prohibited reasoning, duplication, process, or evidence that a broader issuer incident or bias pattern affected the response. A reviewer does not replace an eligible employee's subjective experience merely because the consumer remembers the interaction differently, but neither does “subjective” make a response immune from fairness review.

VCI factual assertions receive a more direct merits review because their accuracy and evidentiary state can be tested.

A CQ result is derived rather than independently asserted. Challenging CQ therefore triggers a review of its inputs, exclusions, context, confidence, calculation, version, and proof policy. No business may manually raise or lower a company-specific CQ because it agrees or disagrees with the result.

#### Evidentiary responsibility

The consumer carries the burden of identifying a concern, not proving the entire case.

- The business or VCI issuer must substantiate a materially adverse factual assertion under the approved evidence standard.
- The NCS issuer must demonstrate that the response met eligibility, attribution, sampling, timing, and process requirements while protecting the employee's identity.
- The synthesis or credential operator must demonstrate that the correct active inputs, context, model, version, and proof policy were applied.
- The verifier must demonstrate that it honored the presented proof and approved benefit rules.
- The independent reviewer may request proportionate additional information from any party.

If the required support for a materially adverse VCI event is unavailable or inconclusive, the event cannot retain adverse effect. For an NCS response, the review asks whether the response remains eligible under the human-input standard; it does not require the employee to prove a subjective feeling as an objective fact.

#### Disagreement without an adversarial process

A consumer should be allowed to register “I disagree” even when they cannot identify an error. That signal creates a review record and gives the consumer an explanation or integrity check; it does not automatically delete evidence or change the calculation.

The consumer may add a short statement of context for the review. The statement remains available only to the consumer and authorized reviewers, is never scored, is not disclosed to ordinary verifiers or the employee, and may be deleted by the consumer after the applicable review and audit period.

There is no routine direct messaging or back-and-forth between the consumer and the employee who submitted NCS. Reviewers request only the information needed, protect employee identity, limit detail that could indirectly identify them, and communicate the outcome separately to each affected party.

Employees should be contacted only when their input is necessary. They must receive a neutral explanation, a protected way to respond, appropriate representation or support where required, and assurance that a challenge is not an employee-performance event. Managers may not script, suppress, or retaliate against an employee's response.

Threatening or abusive content submitted through review channels is handled through a separate safety process. It may be restricted or redacted without extinguishing the underlying right to review through a safe representative or structured channel.

#### Effect during review

Opening a general question does not automatically freeze an entire CQ. When initial triage identifies a credible challenge to a materially adverse event, that event enters disputed state and has no adverse effect while reviewed, consistent with the NCS and VCI lifecycle rules.

The system must prevent both premature harm and strategic dispute abuse. Published rules should define when an event becomes formally disputed, what happens to active proof eligibility, and when expedited review applies. Repeated or coordinated submissions concerning the same issue may be consolidated, but consumers cannot be punished in CQ for exercising review rights.

When a challenge could affect a benefit that will expire before ordinary review concludes, an expedited path must preserve a meaningful remedy. Depending on the benefit, that may include temporary continuation, a replacement benefit, priority review, or later compensation.

When many challenges arise from one outage, policy error, compromised integration, or biased practice, OCA should open a systemic case, correct all affected records where possible, and notify affected people rather than requiring thousands of individual appeals.

#### Outcomes and closure

Every completed review produces one of a small number of understandable outcomes:

- **Corrected:** Information or calculation changed.
- **Invalidated or reversed:** An event no longer has active effect.
- **Confirmed:** The reviewed result followed the applicable rule and remains active.
- **Inconclusive:** Required support was insufficient; adverse VCI effect is removed, while NCS follows its separate eligibility standard.
- **Referred:** A material systemic, legal, safety, or security issue moved to the responsible process.

The outcome notice must acknowledge the person's concern, explain the decisive evidence and rule, state what changed or remained, identify any remedy, and explain the next appeal option. It should never declare that the system has determined whether the person is “good,” “bad,” truthful, dishonest, nice, or difficult.

#### Review record

The consumer can see:

- Concern submitted and scope
- Current review level and responsible entity
- Events, result, proof, or benefit affected
- Current effect while review is pending
- Requested information, if any
- Target response time
- Decision and plain-language reasons
- Corrections, recalculation, or remedy
- Appeal eligibility and deadline

The governance specification will define reviewer independence, service levels, evidence standards, emergency handling, remedies, audit access, and enforcement.

### 10.21 Abuse cases and controls

| Abuse case | Required control direction |
|---|---|
| A business requires CQ for ordinary service. | Baseline-service rule, consumer reporting, audits, restitution, and certification sanctions. |
| A verifier asks for a raw score when an eligibility proof would suffice. | Proof allowlists, minimum-disclosure enforcement, and request rejection. |
| A business creates a poor baseline to make CQ participation effectively mandatory. | Baseline monitoring, nonparticipant comparison, benefit reclassification, and sanctions. |
| A consumer lends or sells a high-CQ credential. | Holder binding, liveness appropriate to risk, verifier-bound proofs, replay protection, and revocation. |
| A stolen device presents an active proof. | Secure local authorization, recovery and revocation, short validity, and risk-appropriate step-up checks. |
| Businesses correlate proofs to track a consumer across companies. | Pairwise identifiers, verifier-bound proofs, data minimization, retention limits, and privacy audits. |
| A company uses CQ to train an exclusion or pricing model. | Contractual and technical use restrictions, audit rights, deletion, sanctions, and derived-use prohibition. |
| Named competitor history becomes a marketing signal. | Prohibit named-company and named-competitor requests through the ordinary proof protocol; use unnamed approved context proofs and competition review. |
| A consumer with insufficient history is treated as low conduct. | Private consumer explanation, no CQ-specific verifier response, baseline parity testing, and complaint remedies. |
| A benefit disappears during an unresolved dispute. | No adverse disputed-event effect, transition rules, notice, and appeal. |
| A family member or assistant receives or changes another person's CQ. | Explicit authority, role separation, minimal disclosure, activity logs, and revocation. |
| Public screenshots create social rankings. | No public profiles or platform ranking tools; consumer education and minimal visible precision. |

### 10.22 Pilot validation requirements

Before CQ proofs unlock real benefits, the pilot must evaluate:

- Consumer understanding of the primary CQ, the two protected inputs beneath it, its context, and its evidence status
- Comprehension of Eligible, Not established, and Proof unavailable responses
- The one-score lead presentation against two-dimensional, tier, and proof-only research controls
- Consumer willingness to enroll, inspect, present, decline, and withdraw
- Whether consent is informed and genuinely optional
- Whether nonparticipants and consumers with insufficient history receive equivalent baseline service
- Accessibility and assisted-participation success
- Company- and industry-context portability without named-history or competitor leakage
- Business and frontline comprehension of proof results
- Data minimization and resistance to cross-context correlation
- Benefit attractiveness without coercion
- Benefit distribution and disparate outcomes
- Loss-of-eligibility notices, transitions, disputes, and appeals
- Use and comprehension of the unified “Something doesn't look right” challenge path
- Challenge routing, automated review, source review, independent appeal, and systemic escalation
- Duplicate, repeated, coordinated, automated, strategically timed, retaliatory, and accessibility-related challenge patterns
- Consumer, employee, business, and reviewer perceptions of dignity, neutrality, safety, voice, and closure
- Emotional escalation, threatening-content handling, employee-identification risk, and reviewer wellbeing
- Time-sensitive remedies and systemic correction across similarly affected consumers
- Whether consumers can raise a concern without understanding the underlying architecture
- Credential theft, lending, replay, recovery, and revocation scenarios
- Whether the experience feels like useful recognition rather than monitoring or judgment
- Whether CQ changes consumer conduct or employee experience without creating performance theater
- Whether participating businesses receive measurable value without accessing prohibited data

CQ implementation remains **CANDIDATE** until the presentation, proof architecture, benefit framework, consent experience, baseline protections, and portability rules satisfy approved pilot thresholds.

---

# Part III: Trust and Protection

## 11. Identity, privacy, security, and recovery

### 11.1 Purpose

The Conduct Ecosystem must maintain durable continuity between a person, their verified interactions, and their CQ credentials without creating a universal tracking identifier or centralized behavioral dossier.

This section defines the functional requirements for:

- Establishing that a participant is the correct natural person for an interaction
- Preventing casual duplication, impersonation, credential lending, and reset abuse
- Authenticating the consumer at a level proportionate to the requested action
- Binding events, credentials, and proofs without exposing a global identifier
- Minimizing, separating, encrypting, and governing personal data
- Supporting consumer-controlled presentation and unlinkability
- Recovering from device loss, account compromise, incapacity, or authenticator failure
- Preserving continuity and auditability through correction, migration, and recovery

The goal is not to prove an abstract philosophical definition of personhood. The system needs sufficient confidence that an interaction, credential, or proof belongs to the correct participating person for the declared context and risk.

### 11.2 Core requirements

| ID | Requirement | Status |
|---|---|---|
| IDP-001 | The system MUST separate identity proofing, authentication, interaction attribution, credential holder binding, and proof authorization as distinct functions. | REQUIRED FOR COHERENCE |
| IDP-002 | Identity assurance and authentication strength MUST be proportionate to the risk of the action or benefit. | CONSTITUTIONAL |
| IDP-003 | The ecosystem MUST NOT expose or require a universal public consumer identifier across businesses. | CONSTITUTIONAL |
| IDP-004 | Participating businesses SHOULD receive pairwise or context-specific pseudonymous identifiers rather than a reusable cross-network identifier. | CANDIDATE |
| IDP-005 | Biometrics MAY activate a device or authenticator locally but MUST NOT be treated as proof of global uniqueness or routinely transmitted to the ecosystem. | CONSTITUTIONAL |
| IDP-006 | The ecosystem MUST NOT maintain a central biometric template database for ordinary CQ participation. | CONSTITUTIONAL |
| IDP-007 | Proofs MUST be bound to the intended verifier, purpose, transaction, and freshness challenge at the assurance level required. | CONSTITUTIONAL |
| IDP-008 | Recovery MUST restore legitimate access without creating a new conduct identity or deleting valid history. | REQUIRED FOR COHERENCE |
| IDP-009 | Consumers MUST be able to register more than one approved authenticator and recovery path. | REQUIRED FOR COHERENCE |
| IDP-010 | Raw source records MUST remain with the responsible source custodian unless a defined, minimized, approved shared function requires otherwise. | CONSTITUTIONAL |
| IDP-011 | The shared network MUST minimize personal data, separate functions, encrypt sensitive data, and enforce purpose- and role-based access. | CONSTITUTIONAL |
| IDP-012 | Credential presentation SHOULD support selective disclosure and resistance to correlation across verifiers. | CONSTITUTIONAL |
| IDP-013 | Credential status checking MUST NOT become a mechanism for issuers to monitor where or when consumers present CQ. | CONSTITUTIONAL |
| IDP-014 | Non-smartphone, accessible, assisted, and delegated paths MUST meet the same privacy and outcome standards as the default path. | CONSTITUTIONAL |
| IDP-015 | The technical architecture SHOULD align with mature open standards while avoiding dependence on one wallet, platform, identity provider, cloud, or cryptographic format. | CANDIDATE |
| IDP-016 | Identity continuity MUST protect attribution, credential integrity, justified one-person benefit limits, and resistance to manufactured positive history; it MUST NOT exist to force adverse history to follow a person after withdrawal or to deny a lawful return to baseline. | CONSTITUTIONAL |
| IDP-017 | Assurance MUST be derived from the concrete action and benefit risk; the system MUST NOT collect higher-assurance identity evidence for hypothetical future uses. | CONSTITUTIONAL |
| IDP-018 | The consumer may retain proof requests and outcomes, but the verifier MUST retain a CQ-specific presentation record only for a successfully authorized proof and approved benefit purpose. | CONSTITUTIONAL |
| IDP-019 | Ordinary booking, payment, account-management, travel-management, caregiving, or assistance authority MUST NOT imply CQ disclosure authority. | CONSTITUTIONAL |
| IDP-020 | No ordinary operator or administrator may combine legal identity, raw cross-company history, synthesis state, presentation activity, and rights records into a reconstructable behavioral dossier. | CONSTITUTIONAL |
| IDP-021 | Custody separation MUST be evaluated by actual legal, vendor, cloud, key, administrator, support, backup, analytics, incident, and exit control rather than logical tenant or database labels. | CONSTITUTIONAL |
| IDP-022 | Federated retrieval MUST NOT reveal the verifier, purpose, benefit, or unsuccessful presentation activity to source custodians. | CONSTITUTIONAL |
| IDP-023 | Identity, wallet, status, recovery, or proof failure MUST return the consumer to baseline service without an adverse CQ signal. | CONSTITUTIONAL |
| IDP-024 | OCA MUST NOT become the default central custodian of raw cross-company conduct history; shared services must remain minimized, replaceable, independently governed, and separable from standards and oversight. | CONSTITUTIONAL |
| IDP-025 | Initial participation and evidence linkage MUST be prospective. Legacy NCS is prohibited, and any historical VCI migration requires a separately approved profile. | CONSTITUTIONAL |

Suite F v0.1 makes minimal, benefit-proportionate assurance the lead ordinary-presentation profile for the modest Suite E benefit. Moderate assurance remains a step-up candidate for sensitive recovery, identity change, authenticator, duplicate-resolution, takeover, or future higher-risk actions. High assurance is rejected as the ordinary initial path because its identity and exclusion burden exceeded the benefit in the synthetic comparison.

The lead custody direction composes split functional custody, consumer-local computation where feasible, and privacy-protected federated retrieval. A central event-and-synthesis operator holding reconstructable cross-company history is rejected. Consumer-local computation cannot be the exclusive deployment because accessible custodial, assisted, shared-device, limited-connectivity, migration, and recovery paths remain required. Federated retrieval cannot expose presentation attempts to source businesses.

### 11.3 Five separate identity questions

Identity is not one yes-or-no check. The system must answer five questions independently.

| Function | Question | Example |
|---|---|---|
| Identity proofing | Who is enrolling, at the required level of assurance? | Does the evidence support that this applicant corresponds to the claimed person? |
| Authentication | Is the current claimant authorized to access the account or wallet? | Does the claimant control a bound passkey or other approved authenticator? |
| Interaction attribution | Which person participated in this specific interaction? | Was the passenger, guest, diner, renter, or support customer identified correctly? |
| Holder binding | Is this credential being presented by its legitimate holder? | Is the proof generated using a key bound to the consumer's credential environment? |
| Proof authorization | Did the consumer approve this disclosure to this verifier for this purpose? | Did the consumer authorize an airline-benefit proof for this transaction? |

A biometric device unlock may support authentication or holder binding; it does not by itself establish legal identity, unique personhood, interaction attribution, or informed consent.

### 11.4 Risk-based assurance

The system should not demand passport-level identity proofing or biometric checks for every action. Excessive identity collection increases exclusion, breach harm, and surveillance risk without necessarily improving conduct accuracy. Assurance is derived from the concrete action, selected benefit, and plausible abuse harm; the pilot may not collect stronger identity evidence merely because a future version might support higher-value uses. If the benefit cannot justify the identity burden, the benefit or pilot must be redesigned.

For ordinary presentation of the initial modest benefit, the starting profile is an authenticated consumer account or credential environment, phishing-resistant authentication where feasible, benefit-proportionate holder binding, verifier and transaction binding, freshness, replay resistance, short proof validity, visible authenticator controls, and at least two authenticator or recovery options where practical. It does not collect high-assurance identity evidence for hypothetical future uses.

Step-up applies to the action rather than permanently to the person. Total-authenticator-loss recovery, material identity change, recovery-control change, duplicate merge or separation, contested takeover, and any later materially valuable proof receive their own stronger profile. High assurance is not an ordinary proof default.

Each workflow receives an approved assurance profile covering identity proofing, authentication, federation or presentation, and recovery.

Illustrative assurance direction:

| Workflow | Assurance direction |
|---|---|
| Viewing general information or beginning enrollment | Low assurance; no conduct disclosure |
| Viewing private CQ details | Strong account authentication appropriate to sensitive personal data |
| Presenting a low-risk recognition proof | Authenticated consumer action with verifier- and transaction-bound proof |
| Presenting a materially valuable or financially sensitive benefit proof | Step-up authentication and stronger holder binding |
| Adding a new authenticator or changing recovery controls | High-assurance reauthentication and notification |
| Recovering after loss of all authenticators | Risk-based identity reproofing, delay, notifications, and fraud controls |
| Correcting identity, merging duplicates, or separating a misattributed account | High-assurance evidence and independent review |

The assurance framework should use the concepts of Identity Assurance Level, Authentication Assurance Level, and Federation Assurance Level where useful, while adapting them to a private-sector CQ risk model. NIST's current Digital Identity Guidelines explicitly separate these functions and include subscriber-controlled wallets, fraud controls, recovery, privacy, and customer-experience considerations.

### 11.5 Enrollment and identity continuity

Enrollment establishes a durable internal identity relationship without making that relationship public.

The standard flow is:

1. Present clear notice about participation, data uses, consumer rights, and withdrawal.
2. Collect only the identity evidence required by the approved assurance profile.
3. Validate the evidence and detect likely duplicate or synthetic enrollment under governed controls.
4. Create an internal subject record and context-specific identifiers.
5. Bind at least one approved authenticator and strongly encourage a second.
6. Establish recovery methods and explain their relative security.
7. Begin prospectively for the initial pilot. No legacy NCS may be connected. Any later historical VCI migration requires a separate governed profile, notice, legitimacy review, source completeness, reliable matching, correction, fairness testing, and legal approval.
8. Issue or prepare the consumer-controlled credential environment.
9. Provide a human-readable enrollment record and privacy controls.

The ecosystem should minimize dependence on knowledge-based questions, credit-header data, permanent device ownership, or one commercial identity provider. Identity evidence and methods must be evaluated for disparate failure rates, accessibility, geographic availability, cost, and exposure to forged media.

Enrollment cannot guarantee that one natural person has only one identity everywhere. The practical requirement is risk-based duplicate resistance and governed resolution—not an absolute claim of global uniqueness.

### 11.6 Duplicate, synthetic, and reset resistance

The ecosystem must protect attribution and credential integrity, resist manufactured positive history, and prevent duplicate collection of a one-person benefit where that limit is legitimate—without using identity continuity to force adverse history to follow a person after withdrawal or deny a lawful return to baseline.

Candidate controls include:

- Verified identity attributes held by a certified identity service
- Privacy-preserving duplicate checks using transformed or tokenized attributes
- Device, authenticator, account, and issuer linkage signals held under strict purpose limits
- Interaction-history continuity checks
- Rate limits and cooling-off periods
- Manual review for high-confidence duplicates
- Consumer notice and appeal before merging identities
- Governance audits for false matches and disparate impact

Duplicate detection results are not conduct evidence. They are identity-integrity signals used only to protect account continuity.

The system must support legitimate cases such as name changes, multiple addresses, shared devices, multiple citizenships, legal guardianship, aliases, identity theft, and errors in source records. A shared device cannot by itself prove duplicate identity.

When two accounts are confirmed to belong to one person, the approved process may merge continuity and credentials while retaining an audit trail when necessary for consumer-requested restoration or a defined integrity purpose. It does not automatically restore adverse effect a consumer lawfully left by returning to baseline. When one account contains events from different people, the system must support separation, correction, and reissuance.

### 11.7 Identifier architecture

The ecosystem should use layered identifiers rather than one global customer number.

Potential layers include:

- **Internal subject identifier:** Used within the approved identity or credential service and never disclosed as a general network identifier.
- **Issuer-local identifier:** Used by a business to connect its own interactions and events.
- **Pairwise network identifier:** Unique to a consumer–issuer or consumer–verifier relationship so colluding parties cannot trivially correlate presentations.
- **Interaction identifier:** Unique to one verified interaction and unsuitable for tracking beyond it.
- **Credential identifier:** Optional, minimized, and designed so repeated presentations do not expose a stable correlator.
- **Proof identifier or nonce:** Unique to one presentation and resistant to replay.

Decentralized Identifiers may be used where a selected DID method provides appropriate privacy, resolution, rotation, recovery, and governance. A DID is not inherently decentralized in operation, private, unlinkable, or appropriate for CQ merely because it uses the DID syntax. The architecture must be evaluated by actual data flows and control, not branding.

Public ledgers must not contain names, raw events, scores, relationship history, stable consumer identifiers, or reversible personal-data hashes. Any use of a ledger requires a documented necessity and privacy analysis; no ledger is required by the current architecture.

### 11.8 Interaction attribution

Identity proofing establishes the enrolled person; interaction attribution establishes who participated in a particular event. These are different problems.

An interaction may involve:

- A purchaser and a different traveler or guest
- A corporate payer and an employee traveler
- A parent or guardian and a child
- A caregiver and a person receiving service
- A reservation holder and several participants
- An executive assistant or travel manager
- A shared account or household

Every NCS or VCI event must identify the relevant participant role and attribution confidence. The system must not default to the payer, account owner, booking contact, or person holding the device.

Approved attribution methods may include an authenticated check-in, named manifest, verified reservation participant, consented account link, in-person credential presentation, or another context-specific control. Low-confidence attribution makes the event ineligible or non-adverse; it does not spread responsibility across the group.

Interaction systems should use short-lived, context-specific binding tokens wherever practical so the business can issue an eligible event without learning the consumer's cross-network identity.

### 11.9 Authentication and local biometrics

The default consumer account should support phishing-resistant cryptographic authentication, such as a passkey or another standards-based public-key authenticator, at a level appropriate to the action.

Biometrics may activate a device-held key locally. The biometric sample and template should remain under the operating system, authenticator, or other approved local security boundary and should not be transmitted to CQ services.

The system must not claim that Face ID, Touch ID, or another device biometric proves that the presenter is the same globally unique human who originally earned the history. It proves only what the certified device and enrollment process are designed to assert.

Authentication requirements include:

- Phishing resistance for sensitive access and proof presentation where feasible
- Replay resistance and freshness challenges
- Verifier or audience binding
- Secure session management and reauthentication
- Rate limiting and automated-attack controls
- Local user verification appropriate to the proof or benefit
- Consumer-visible authenticator inventory and recent security activity
- Rapid authenticator revocation after loss or compromise
- Step-up authentication for recovery, identity change, delegation, and high-value proof use

Password-only authentication should not be the default for access to CQ history or credential-management functions.

### 11.10 Credential issuance and holder binding

Credential issuance must bind a contextual CQ result to the correct consumer-controlled credential environment.

The issuance flow must verify:

- Credential issuer authority and certification
- Consumer authentication and authorization
- Relevant synthesis result and version
- Intended context and proof capabilities
- Holder-binding key or approved account binding
- Validity period and status mechanism
- Delivery to the intended wallet or custodial environment

Holder binding should prevent a copied credential from being presented by another person without requiring every verifier to receive the consumer's legal identity. Different benefit classes may use different binding strengths.

The system should support standards-based credential issuance and presentation protocols where they satisfy privacy, security, usability, and interoperability requirements. Credential format and transport must remain replaceable so the ecosystem is not trapped by one vendor or cryptographic suite.

### 11.11 Selective disclosure and unlinkability

Selective disclosure means revealing only the claims required for one purpose. Unlinkability means reducing the ability of issuers, verifiers, and intermediaries to recognize that separate presentations came from the same person when such correlation is unnecessary.

The presentation architecture should support:

- Purpose- and verifier-bound requests
- Consumer preview and authorization
- Predicate or eligibility proofs instead of raw values
- Pairwise subject identifiers
- One-time nonces and short proof validity
- Minimal mandatory fields
- No stable credential identifier in ordinary presentations
- Cryptographic formats capable of selective disclosure where appropriate
- Separation between proof verification and business customer-account linking
- No issuer callback during ordinary presentation where it would reveal the verifier relationship
- Privacy-preserving credential-status checks

Selective disclosure alone does not guarantee privacy. A unique combination of claims, issuer keys, timestamps, status-list entries, device signals, or network metadata can still enable correlation. Implementations must test complete presentation flows, including collusion among issuers, verifiers, wallet providers, identity providers, and status services.

### 11.12 Data architecture and custody

The logical data architecture separates custody by function.

| Data category | Preferred custodian | Shared-system exposure |
|---|---|---|
| Raw transaction, support, payment, damage, or operational records | Source business or legally responsible processor | Evidence references and minimum governed assertions only |
| Employee identity and source authentication | Employing business | Pseudonymous rater reference and eligibility assertion |
| NCS and VCI signed events | Certified event service or governed distributed store | Minimum event schema required for lifecycle and synthesis |
| Identity-proofing evidence | Certified identity service | Assurance result and minimal binding references |
| Synthesis inputs and audit trace | Certified synthesis service or privacy-preserving equivalent | Contextual results and authorized audit access |
| CQ credential | Consumer-controlled or approved custodial wallet | Presented claims only |
| Proof request and presentation record | Consumer environment; verifier only after successful authorization | Consumer may retain all requests and outcomes; verifier retains only the successful proof and benefit receipt required for the approved purpose. Failed-exchange telemetry is segregated, minimized, and unavailable to customer treatment systems. |
| Protected-class fairness data | Segregated audit environment | Aggregate or controlled research access only; never scoring input |

This is a logical allocation, not a final deployment decision. Centralized, federated, and consumer-held implementations may satisfy it differently. The selected architecture must document every controller, processor, subprocessor, data flow, jurisdiction, retention rule, and access path.

No participant should receive all data merely because doing so is convenient. Functional separation reduces the impact of breach, insider misuse, compelled disclosure, and commercial repurposing.

### 11.13 Data minimization and purpose limitation

Each collected or derived field must have:

- A defined purpose
- A lawful and governed basis
- An accountable controller or custodian
- Approved users and access conditions
- A retention and deletion rule
- A sensitivity classification
- A consumer explanation
- A prohibition against incompatible secondary use

The system must not collect data “in case it becomes useful.” New fields, sources, inferences, and derived features require privacy, fairness, security, and governance review before use.

Prohibited or segregated data includes protected characteristics, advertising identifiers, unrelated browsing, social-media activity, contact graphs, precise location beyond interaction necessity, general reputation, employee free text, and commercial lifetime value.

Telemetry used for security or reliability must be narrowly scoped, access-controlled, time-limited, and prohibited from entering CQ calculations unless separately approved as an eligible conduct event.

### 11.14 Encryption, keys, and platform security

The production system must apply current, independently reviewed security practices, including:

- Encryption in transit and at rest
- Authenticated service-to-service communications
- Managed key generation, storage, rotation, backup, and destruction
- Hardware-backed protection for high-value issuer and signing keys where proportionate
- Separation of development, test, pilot, and production environments
- Least-privilege and just-in-time administrative access
- Multi-party approval for sensitive policy, key, and bulk-data operations
- Tamper-evident audit logs
- Secrets management and prohibition on embedded credentials
- Tenant and context isolation
- Secure software-development lifecycle and dependency management
- Independent penetration testing and cryptographic review
- Continuous vulnerability, configuration, and anomaly monitoring
- Tested backup, restoration, failover, and disaster recovery

Cryptographic algorithms and parameter choices must follow current approved profiles and be replaceable through planned cryptographic agility. The system must not invent its own cryptography.

### 11.15 Credential status, refresh, suspension, and revocation

Verifiers need to know whether a credential remains valid without learning unnecessary information about the consumer.

Status architecture must support:

- Expiration for normal freshness
- Refresh when a newer synthesis result is available
- Temporary suspension for security or approved process reasons
- Revocation for compromise, invalid issuance, withdrawal, or permanent invalidity
- Clear separation between credential status and conduct standing
- Rapid propagation proportionate to the benefit risk
- Offline verification rules and maximum age
- Privacy-preserving status retrieval and caching

A unique status URL or issuer callback can reveal every presentation. The selected mechanism must resist issuer monitoring, verifier correlation, and status probing. Large privacy-preserving status lists, short-lived credentials, or other standards-based mechanisms should be evaluated rather than assuming per-consumer online checks.

The consumer receives the reason for suspension or revocation; ordinary verifiers receive only the status necessary to accept or reject the proof.

### 11.16 Recovery principles

Recovery is part of the security model, not an exception to it. A weak recovery process defeats strong authentication; an inaccessible recovery process locks legitimate consumers out of their histories.

Recovery must follow these principles:

- Register multiple authenticators before loss where possible.
- Offer recovery methods appropriate to different abilities, devices, and life circumstances.
- Use stronger controls when every bound authenticator is lost.
- Notify existing devices and verified channels of recovery attempts.
- Apply cooling-off periods or restricted capabilities when risk warrants.
- Preserve conduct history, event links, disputes, and presentation logs.
- Rotate or revoke compromised keys and credentials.
- Prevent a wallet provider, support employee, or recovery contact from silently taking control.
- Provide an independent path for contested takeover or identity theft.
- Record every recovery decision and material evidence for audit.

Recovery must not require the consumer to possess the same phone number, email address, physical ability, legal name, or device indefinitely.

Recovery requirements must be proportionate to the credential and benefit at risk. A consumer may abandon an unrecoverable optional credential and return to baseline service without proving entitlement to the prior history. Restoring or merging that history requires the approved evidence and independent review; inability to recover never creates an adverse verifier signal.

### 11.17 Recovery scenarios

| Scenario | Required response direction |
|---|---|
| Device lost but another authenticator remains | Authenticate with the remaining method, revoke the lost device, rotate affected keys, and reissue credentials as needed. |
| All authenticators lost | Perform risk-based identity reproofing, notify known channels, apply an appropriate delay, and restore the same conduct identity. |
| Device stolen while unlocked | Support urgent remote suspension, proof revocation, session termination, and later controlled recovery. |
| Phone number or email changed | Treat contact information as a recovery channel, not identity proof by itself. |
| Consumer changes legal name or identity attributes | Verify the change, preserve continuity, minimize historical exposure, and reissue credentials. |
| Suspected account takeover | Pause sensitive presentation, preserve baseline access, investigate, notify, and provide independent redress. |
| Consumer dies or becomes incapacitated | Follow a defined legal-representative process; prevent transfer of CQ as an inheritable reputation asset. |
| Duplicate accounts discovered | Review, notify, appeal, merge or separate as appropriate, and preserve the audit trail. |
| Custodial wallet provider exits | Support credential portability, transition assistance, standardized export, and continuity without score reset. |

### 11.18 Delegation, guardianship, and shared devices

Delegation must distinguish the person whose conduct is represented from the person authorized to perform an action.

A delegate may be permitted to:

- Book or manage an interaction
- Assist with enrollment or presentation
- Approve a narrowly defined proof request
- Review information under an authorized role
- Help initiate recovery

A delegate must not automatically:

- Receive the consumer's full CQ history
- Inherit or transfer the consumer's CQ
- Cause their own conduct to be attributed to the consumer
- Change identity, recovery, or consent settings outside the authority granted
- Present a personal-presence proof when the consumer is the required participant

Assistance, transaction agency, legal guardianship, and CQ disclosure authority are separate roles. Ordinary authority to book, pay, manage an account, arrange travel, provide care, or assist with service does not include authority to present CQ. Disclosure authority must be exceptional, purpose-specific, explicit, scoped, time-limited, reviewable, and revocable. Supported decision-making should be preferred to substitution where feasible. Sensitive actions should notify the consumer or another approved guardian channel.

Shared devices must support multiple people without merging their identities, histories, authenticators, or presentation logs. Device identity is not person identity.

### 11.19 Privacy rights and controls

Consumers must be able to:

- Understand what data exists, why it exists, and who controls it
- Inspect identity attributes, authenticators, devices, credentials, permissions, presentations, and security events
- Correct inaccurate identity and contact information
- Challenge misattribution and duplicate resolution
- Revoke authenticators, recurring proof permissions, and delegates
- Export a usable record in an approved interoperable form
- Withdraw from future participation
- Request deletion or anonymization where available
- Understand applicable retention and exceptions
- Obtain human review and appeal for material identity or security decisions

Privacy controls must be accessible and no harder to use than enrollment. Exercising a privacy right cannot itself become a negative conduct event.

### 11.20 Retention and deletion

Retention must be defined by data category and purpose rather than one ecosystem-wide period.

The policy must distinguish:

- Source-business legal and contractual records
- Active NCS and VCI events
- Expired or superseded event history
- Identity-proofing evidence
- Credentials and status records
- Proof request and presentation logs
- Security telemetry and incident records
- Dispute, appeal, audit, and enforcement records
- Segregated fairness-analysis data

Data should be deleted, anonymized, aggregated, or made inaccessible when its approved purpose expires. Cryptographic hashes of personal data can remain personal or correlatable information and are not automatically anonymous.

Withdrawal stops future ordinary processing and presentation as defined by policy, but it may not erase records that must remain for dispute, legal, fraud, security, or audit purposes. Those retained records must be access-restricted and unavailable for new conduct scoring unless a clearly disclosed rule permits it.

### 11.21 Security and privacy incident response

The ecosystem requires a coordinated incident process covering issuers, identity services, wallet providers, synthesis services, verifiers, auditors, and OCA.

The process must define:

- Incident severity and classification
- Reporting and escalation timelines
- Credential, key, issuer, integration, and proof suspension authority
- Consumer and regulator notification responsibilities
- Evidence preservation and forensic access
- Containment, eradication, restoration, and monitoring
- Cross-participant coordination and trusted communications
- Recalculation and reissuance after corrupted inputs
- Consumer support, restitution, and identity-theft response
- Root-cause analysis and public transparency at an appropriate level
- Criteria for reinstating a suspended participant or service

A breach at one issuer must not automatically expose the consumer's full cross-company history. Functional separation and pairwise identifiers are required to limit blast radius.

### 11.22 Standards alignment

The architecture should evaluate the following current standards as implementation foundations rather than assuming a proprietary wallet or protocol:

- [W3C Verifiable Credentials Data Model 2.0](https://www.w3.org/TR/vc-data-model-2.0/) for issuer–holder–verifier credential semantics
- [OpenID for Verifiable Credential Issuance 1.0](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0-final.html) for standards-based issuance
- [OpenID for Verifiable Presentations 1.0](https://openid.net/specs/openid-4-verifiable-presentations-1_0-final.html) for requesting and delivering credential presentations
- [W3C Verifiable Credential Data Integrity 1.0](https://www.w3.org/TR/vc-data-integrity/) and appropriate cryptosuites for integrity and selective-disclosure evaluation
- [W3C Bitstring Status List 1.0](https://www.w3.org/TR/vc-bitstring-status-list/) or another privacy-preserving status mechanism
- [W3C Decentralized Identifiers](https://www.w3.org/TR/did-core/) where a selected DID method meets the actual privacy, governance, and recovery requirements
- [NIST Special Publication 800-63 Revision 4](https://pages.nist.gov/800-63-4/) as a current risk-based reference for identity proofing, authentication, federation, wallets, recovery, fraud, privacy, and customer experience
- [OpenID Federation 1.0](https://openid.net/specs/openid-federation-1_0-final.html) for signed entity statements, trust chains, federation policy, and trust marks
- [IETF RFC 9943](https://www.rfc-editor.org/rfc/rfc9943.html) and [RFC 9162](https://www.rfc-editor.org/rfc/rfc9162.html) as references for signed-statement transparency, receipts, inclusion, consistency, and non-equivocation where a non-personal public artifact justifies that capability

Standards alignment does not itself establish compliance, privacy, security, or interoperability. The implementation must define a tested profile, supported formats, trust registry, key policies, status method, presentation flow, assurance levels, accessibility requirements, and conformance suite.

### 11.23 Architecture decisions intentionally deferred

The following choices should remain open until threat modeling, privacy analysis, prototyping, and pilot requirements are complete:

- Consumer-held, custodial, or hybrid wallet deployment
- Credential issuer and synthesis operator structure
- Specific credential format and cryptographic suite
- Whether DIDs are used and, if so, which method
- Duplicate-detection service and privacy-preserving matching technique
- Storage location for signed events and synthesis audit traces
- Online, cached, short-lived, or status-list revocation strategy
- Identity-proofing providers and assurance profiles
- Offline proof mechanism
- Key recovery, social recovery, and manual recovery mix
- Use of secure hardware, confidential computing, or distributed infrastructure

The pilot architecture may be operationally simpler than the long-term network as long as it preserves the consumer rights, data boundaries, interoperability, and migration requirements established here. Operational simplicity does not authorize one provider or administrative domain to reconstruct the cross-company dossier.

### 11.23A Distributed integrity architecture decision

The bounded post-simulation comparison rejects blockchain as a required or initial CQ foundation. The architecture remains ledger-neutral and assigns separate mechanisms to separate trust questions:

| Question | Lead mechanism |
|---|---|
| Who issued the statement? | Digital signature under a governed key and role profile |
| Is the issuer authorized now? | Signed governed registry initially; signed federation and trust chain as the ecosystem matures |
| What may the verifier learn? | Consumer-authorized, purpose-bound, verifier-bound credential or proof |
| What is currently valid? | Correctable source and synthesis state plus privacy-preserving expiry, refresh, suspension, and revocation |
| Was a public institutional record secretly changed? | Signed versions and independent archives initially; witnessed append-only transparency only when justified |
| Was the underlying evidence legitimate and complete? | Source reconciliation, responsibility gates, independent evaluation, challenge, correction, audit, and remedy |

Cryptography establishes integrity and provenance of recorded statements. It does not establish truth, fairness, source completeness, attribution, causation, legal authority, or construct validity. A signed false assertion remains false, and an omitted eligible interaction never reaches the signed record. Cryptographic acceptance never replaces the non-compensating evidence and governance gates elsewhere in this specification.

The lead architecture has five planes:

1. **Private operational plane:** source and identity evidence remain with responsible custodians; minimized signed assertions move through certified interfaces; synthesis uses split, local, or privacy-protected federated mechanisms; active correction remains effective.
2. **Consumer proof plane:** a consumer authorizes a short-lived purpose-bound proof; the verifier receives only the approved positive fact and minimum fulfillment data; failed or absent presentation leaves no customer-linked verifier record.
3. **Federation and current-authority plane:** signed metadata expresses participants, roles, keys, endpoints, schemas, mappings, assurance, trust marks, policy, expiry, suspension, and revocation through one or more approved trust anchors.
4. **Report plane:** OCA signs fixed analytical packages and purposes; certified custodians execute governed queries; contribution, privacy, cumulative-query, correction, and output controls produce unique network intelligence without general raw-history custody.
5. **Public accountability plane:** public standards, methods, registry snapshots, governance decisions, claims, certifications, correction notices, and published report artifacts are signed and versioned. Append-only transparency is applied only when non-equivocation value exceeds permanence and metadata cost.

The following requirements govern distributed integrity:

| ID | Requirement |
|---|---|
| DII-001 | The standard MUST remain ledger-neutral and MUST NOT require blockchain, a token, a cryptocurrency, a DID, or one wallet or infrastructure provider. |
| DII-002 | Public blockchain MUST NOT be the initial event, synthesis, credential, status, proof, permission, benefit, dispute, report-data, or identity layer. |
| DII-003 | Every signed object MUST identify its object class, issuer role, scope, schema or media type, version, key, lifecycle state, and verification profile without adding an unnecessary person-level correlator. |
| DII-004 | Signature validation MUST remain separate from event eligibility, source completeness, attribution, responsibility, correction, and synthesis admissibility. |
| DII-005 | A signed governed registry SHOULD lead the initial current-state participant, role, key, endpoint, schema, mapping, certification, suspension, and policy functions. |
| DII-006 | A mature multi-party profile SHOULD evaluate signed federation, multiple trust anchors or intermediaries, short-lived entity statements, policy constraints, and trust marks. |
| DII-007 | Consumer proof MUST use a privacy-preserving credential or equivalent signed presentation without requiring the issuer to observe each use. |
| DII-008 | The authoritative active state MUST remain correctable, supersedable, suspendable, revocable, and capable of propagating change through credentials, proofs, benefits, evaluator evidence, and reports. |
| DII-009 | An append-only record MUST NOT be treated as current truth merely because it preserves history. |
| DII-010 | OCA report authority MUST use signed governed query packages, distributed custody, contribution reconciliation, privacy controls, correction, and independent interpretation rather than shared raw-history ledger custody. |
| DII-011 | A public transparency service MAY contain only explicitly approved non-personal institutional artifacts whose publication is already authorized. |
| DII-012 | Public immutable infrastructure MUST NOT contain names, identity evidence, worker responses, conduct events, NCS, VCI, CQ, stable consumer identifiers, person-specific status or credential correlators, presentation activity, permissions, benefits, disputes, incidents, remedies, recovery activity, or person-specific hashes or commitments. |
| DII-013 | Hashing or encrypting a personal artifact MUST NOT be treated as making it safe for public permanent publication. |
| DII-014 | Every transparency artifact class MUST receive privacy, security, labor, competition, legal, confidentiality, metadata, correlation, retention, correction, and shutdown review before admission. |
| DII-015 | Signed public releases and independent archives SHOULD precede deployment of a dedicated transparency service; receipts, witnesses, and monitors are added only for demonstrated rollback or equivocation risk. |
| DII-016 | Every shared registry, federation, credential, status, transparency, or computation service MUST have an open interface, export, cryptographic agility, independent evidence, replacement path, and exercised exit. |
| DII-017 | No consumer or ordinary participant MUST acquire tokens, pay volatile fees, manage blockchain-specific keys, or understand the underlying integrity infrastructure. |
| DII-018 | OCA MAY govern a conformance profile but MUST NOT become the mandatory operator of every identity, wallet, credential, status, federation, log, or computation service. |

A future blockchain role remains zero unless a documented threat requires decentralized consensus, censorship resistance, or survivability that a signed registry, independent mirror, witnessed transparency service, or replicated conventional system cannot adequately provide. The proposed data must be public and non-personal; correction and incident response must remain effective; protocol governance, upgrades, forks, finality, fees, operators, jurisdictions, concentration, cryptographic agility, interoperability, and exit must pass review; and demonstrated value must exceed the added privacy, accessibility, legal, operational, security, procurement, and reputational burden.

The approved candidate public artifact set may later include published standards and schemas, conformance profiles, public registry snapshots, public certification state, mapping-profile releases and withdrawals, public governance and claims records, report-method manifests, published correction notices, report hashes, evaluation preregistrations, and required key or trust-anchor transitions. Inclusion is never automatic.

This decision closes whether blockchain is a required foundation. It does not select the exact registry, federation, credential, status, cryptographic, transparency, witness, or federated-computation implementation.

### 11.24 Validation requirements

Before identity-bound CQ proofs unlock real benefits, the system must test:

- Enrollment completion, abandonment, accessibility, and failure reasons
- False acceptance and false rejection in identity proofing
- Duplicate-detection precision, recall, appeal, and disparate impact
- Interaction-attribution accuracy across payer, participant, delegate, and group scenarios
- Authentication success, phishing resistance, replay resistance, and step-up completion
- Lost-device, stolen-device, changed-contact, and total-authenticator-loss recovery
- Account takeover, synthetic identity, duplicate enrollment, and reset attempts
- Credential copying, lending, replay, correlation, and verifier impersonation
- Issuer–verifier, verifier–verifier, and wallet–verifier collusion scenarios
- Status-check privacy and offline proof behavior
- Pairwise identifier and cross-context unlinkability
- Data minimization, retention, deletion, export, and withdrawal flows
- Custodial-provider failure and credential migration
- Accessibility, shared-device, delegate, guardian, and assisted-use workflows
- Key compromise, issuer suspension, breach response, and mass reissuance
- Consumer understanding of identity, privacy, recovery, and presentation controls
- End-to-end conformance with the selected standards profile

The identity, privacy, security, and recovery architecture remains **CANDIDATE** until its threat model, privacy impact assessment, implementation profile, conformance tests, and independent security review satisfy approved thresholds.

## 12. Governance and accountability

### 12.1 Purpose

The proposed Open Conduct Alliance would govern the shared rules that make NCS, VCI, synthesis, CQ credentials, proofs, and benefits interoperable and trustworthy across companies.

The OCA concept exists because no participating business, technology provider, founder, government, or investor should unilaterally control portable conduct infrastructure. A future OCA's legitimacy would need to come from balanced stakeholder power, transparent standards, enforceable consumer and worker rights, technical competence, independent review, and demonstrated accountability.

A future OCA's mission would be to make it easier for people and businesses to recognize and reward constructive conduct without enabling exclusion, surveillance, discrimination, retaliation, or ranking of human worth.

A mature OCA would be a standards, certification, oversight, and accountability institution. It should not automatically operate every identity, event, synthesis, wallet, or verification service it governs.

#### Current status

At publication, Open Conduct is a founder-led idea and specification project maintained by Brent Turner in Massachusetts, United States. OCA is a **proposed future governing institution**, not an existing independent alliance, certification body, score operator, or appeals authority.

The project may publish ideas, maintain this specification, invite comments, convene interested people, and run simulations using synthetic or appropriately controlled nonproduction data without creating the full OCA structure. Governance requirements become progressively mandatory as the project begins accepting partners, funding, sensitive data, consumer-affecting pilots, credentials, benefits, or certification authority.

Public materials must describe the project's actual maturity honestly. They must not imply that a multi-stakeholder alliance, independent standard, certified score, or consumer-protection system already exists when it does not.

### 12.2 Core requirements

| ID | Requirement | Status |
|---|---|---|
| GOV-001 | OCA MUST be an independent, mission-locked, multi-stakeholder institution. | CONSTITUTIONAL |
| GOV-002 | No stakeholder class, company, founder, funder, or technology provider may hold unilateral control or a permanent veto. | CONSTITUTIONAL |
| GOV-003 | Consumers and frontline workers MUST have formal voting representation, resources, and protected participation—not advisory status alone. | CANDIDATE |
| GOV-004 | Policy development, system operation, certification, audit, enforcement, and appeals MUST have defined separation and conflict controls. | CONSTITUTIONAL |
| GOV-005 | Core standards, calculation rules, context mappings, benefit policies, consumer rights, and change histories MUST be publicly available. | CONSTITUTIONAL |
| GOV-006 | Material rules MUST follow notice, stakeholder review, impact analysis, recorded objections, reasoned decision, versioning, and appeal. | CONSTITUTIONAL |
| GOV-007 | OCA MUST certify each ecosystem role against published requirements before production participation. | CONSTITUTIONAL |
| GOV-008 | OCA MUST maintain independent monitoring, audit, investigation, remediation, suspension, and revocation authority. | CONSTITUTIONAL |
| GOV-009 | Consumers MUST have access to review independent of the business or operator responsible for the challenged decision. | CONSTITUTIONAL |
| GOV-010 | Frontline employees MUST have protected reporting and anti-retaliation channels independent of their employer. | CONSTITUTIONAL |
| GOV-011 | OCA funding and governance MUST include safeguards against financial, corporate, founder, regulatory, and vendor capture. | CONSTITUTIONAL |
| GOV-012 | Emergency authority MUST be narrow, documented, reviewable, and time-limited. | CONSTITUTIONAL |
| GOV-013 | OCA MUST publish aggregate performance, fairness, dispute, incident, enforcement, funding, and governance information. | CONSTITUTIONAL |
| GOV-014 | Confidentiality and security exceptions MUST be specific and may not become a general shield against accountability. | CONSTITUTIONAL |
| GOV-015 | The founding governance model MAY be simpler than the mature model but MUST include independent rights, technical, audit, and appeal functions before consumer-affecting use. | CANDIDATE |
| GOV-016 | The founder-led publication stage MAY operate without a Board, legal entity, certification office, or appeals system because it does not score people or affect benefits. | REQUIRED FOR COHERENCE |
| GOV-017 | Each governance capability becomes mandatory at a defined operational trigger rather than merely through passage of time. | REQUIRED FOR COHERENCE |
| GOV-018 | Founder-led public materials MUST identify the current steward, decision authority, funding, conflicts, project status, and limits of the work. | CONSTITUTIONAL |
| GOV-019 | The founder-led stage MUST NOT issue real CQ credentials, certify organizations, represent itself as independent, or make consumer-affecting conduct decisions. | CONSTITUTIONAL |
| GOV-020 | Early contribution and feedback processes SHOULD be asynchronous, bounded, and maintainable by one person. | CANDIDATE |
| GOV-021 | Failed constitutional rights gates MUST NOT be overridden by adoption, business value, sponsor preference, or an ordinary majority; independent consumer- and worker-rights functions MUST be able to trigger containment and review within their mandates. | CONSTITUTIONAL |
| GOV-022 | Before Stage 3, OCA MUST publish a role-incompatibility matrix covering standards, building, operation, certification, audit, evaluation, enforcement, appeal, data custody, and funding. | REQUIRED FOR COHERENCE |
| GOV-023 | Stage 3 rights, appeal, evaluation, support, incident, and wind-down functions MUST have named providers, contracts, funding, access, capacity, backup, and tested procedures rather than titles or volunteer intent alone. | CONSTITUTIONAL |
| GOV-024 | OCA review MUST state its scope and preserve external legal, regulatory, contractual, labor, union, works-council, ombuds, and court rights. | CONSTITUTIONAL |
| GOV-025 | Letters of intent, exclusivity, data access, funded discovery, public partner naming, and prototype agreements MUST receive stage review before they grant control, data, money, branding rights, delivery expectations, or preferential access. | CONSTITUTIONAL |

### 12.3 Institutional model

The mature OCA should eventually be established as an independent nonprofit or comparable mission-locked public-interest standards organization. The public idea and specification project does not need to incorporate OCA merely to publish, gather feedback, or conduct synthetic simulations.

The trigger for legal formation should be operational need: accepting material funds, entering partner contracts, hiring or paying contributors, holding sensitive data, running a consumer-affecting pilot, issuing credentials, granting benefits, certifying organizations, or assuming enforceable review obligations. The final jurisdiction and legal form require specialist advice, especially because the founder is initially operating from Massachusetts.

When formed, the governing documents must provide:

- A durable public-interest mission
- No equity ownership of the standard
- No distribution of governance assets for private gain
- Published membership and voting rules
- Stakeholder-balanced appointment and removal
- Fiduciary duties and conflict requirements
- Protection of consumer and worker rights from ordinary commercial amendment
- Public reporting and independent financial audit
- Orderly succession, dissolution, and transfer of standards stewardship

The originator of the idea may hold a meaningful founding stewardship role, but not permanent unilateral control. Founding rights should be explicit, limited, time-bound where appropriate, and unable to override consumer rights, independent appeals, certification findings, or approved standards process.

OCA may contract with or certify service operators. If OCA operates a service during an early pilot, that function must have separate management, data access, accounts, audit, and decision rights and a planned path to structural independence.

### 12.4 Stakeholder classes

Formal stakeholder classes should include:

1. **Consumers:** Participants, nonparticipants, consumer advocates, and people affected by accessibility or digital-access barriers.
2. **Frontline workers:** Employees, contractors, worker advocates, labor organizations, and occupational-safety representatives.
3. **Participating businesses:** Large enterprises, small and medium businesses, franchises, platforms, and industry associations.
4. **Civil society and public interest:** Civil rights, disability, privacy, consumer protection, digital rights, and anti-discrimination organizations.
5. **Technical and research community:** Identity, security, privacy, cryptography, standards, data science, behavioral science, human factors, and independent researchers.
6. **Ecosystem service providers:** Identity services, wallets, credential issuers, event processors, synthesis operators, auditors, and verification providers.
7. **Public authorities and observers:** Regulators, government experts, and international or regional bodies participating under rules that preserve institutional independence.

Consumers, workers, small organizations, accessibility participants, and independent experts should receive travel support, stipends, interpretation, accessible formats, childcare support, or other resources required for meaningful participation. Unpaid participation will predictably transfer influence to well-funded institutions.

No stakeholder class should hold a majority of the governing board or control a standards decision by itself. Related companies, corporate groups, trade associations, and funded proxies must be treated as related interests for voting and conflict purposes.

### 12.5 Separation of powers

The mature OCA model should include distinct functions:

| Function | Primary responsibility | Independence requirement |
|---|---|---|
| Governing Board | Mission, strategy, budget, executive oversight, final institutional accountability | Balanced stakeholder composition; no operating vendor majority |
| Standards Council | Technical, mathematical, policy, schema, context, proof, and benefit standards | Open working groups, public records, formal objections, broad review |
| Rights and Appeals Council | Consumer, worker, accessibility, due-process, and systemic appeal oversight | Independent of original issuer, verifier, operator, and enforcement decision |
| Certification and Assurance Office | Conformance testing, certification, surveillance audits, and role registries | Separate from sales and membership recruitment |
| Research and Intelligence Office | Public ecosystem reports, governed member benchmarks, commissioned diagnostics, approved aggregate analysis, and report-method stewardship | Method and conclusions independent of membership sales, sponsors, clients, and participating businesses; no unrestricted raw-network custody or query authority |
| Investigations and Enforcement Office | Misuse investigations, remediation, sanctions, and referrals | Evidentiary independence and appealable decisions |
| Ombuds and Protected Reporting Office | Informal resolution, whistleblowing, anti-retaliation, and access assistance | Confidential access and protected reporting to the Board or independent committee |
| Executive Secretariat | Administration, staff, operations, publication, and member support | Cannot unilaterally change standards or decide appeals |
| Independent external auditors | Financial, security, privacy, fairness, model, and governance assurance | Rotation, conflict rules, direct reporting to independent committees |

One person or organization may contribute to several public working groups, but decision makers must recuse when they participated materially in the decision under appeal, have a financial interest, represent an affected party, or face another meaningful conflict.

### 12.6 Governing Board

The Board should be large enough to represent affected groups and small enough to govern effectively. Its charter must ensure:

- No stakeholder class majority
- Dedicated consumer and frontline-worker seats
- Civil-rights, privacy, accessibility, security, and technical competence
- Representation of small as well as large businesses
- Independent chair or equivalent balancing mechanism
- Staggered terms and term limits
- Transparent nomination and election processes
- Published attendance, votes, recusals, and compensation
- Removal for serious misconduct, undisclosed conflict, or sustained nonparticipation
- Limits on related-party transactions
- Regular independent governance review

A provisional mature-board design could allocate comparable blocks of seats to consumers/public interest, frontline workers, participating businesses, and technical/independent experts, with no block able to act alone. Exact size and voting thresholds remain open.

Regulators and public authorities may hold nonvoting observer or liaison roles unless the final legal structure justifies a different arrangement. The standard should be capable of regulatory cooperation without becoming controlled by one jurisdiction.

### 12.7 Membership and participation

OCA should support multiple forms of participation:

- Certified operating members
- Business and service-provider members not yet certified
- Consumer and worker members
- Public-interest and nonprofit members
- Academic and research members
- Government and standards liaisons
- Individual technical contributors
- Public commenters and affected nonmembers

Payment of membership fees must not purchase certification, a favorable audit, additional event weight, model influence, appeal outcomes, or access to consumer histories.

Standards participation should not require membership when broader public input is material. Any person should be able to submit a documented concern or formal objection to a publicly proposed rule, with accessible alternatives for people unable to participate through technical forums.

Membership eligibility, expulsion, voting, related-entity aggregation, confidentiality, intellectual property, and code-of-conduct rules must be published.

### 12.8 Funding and independence

OCA requires durable funding without becoming dependent on the companies it regulates.

Potential sources include:

- Tiered membership fees
- Certification and audit fees
- Small network or proof-verification assessments
- Grants and public-interest funding
- Research partnerships with strict independence terms
- Training, conformance, and standards-support services

Funding controls must include:

- Published annual financial statements and independent audit
- Disclosure of major funders and restricted grants
- Caps or enhanced review for dependence on one funder or related group
- No payment tied to a consumer's score, event direction, appeal outcome, or benefit denial
- Separation between revenue staff and certification, enforcement, standards, and appeals
- Tiered fees that do not exclude small businesses or civil society
- Reserves sufficient to continue appeals, incident response, and credential continuity if a major member exits
- Board approval and public explanation of material related-party arrangements

The final funding concentration cap remains open. A provisional target should prevent any one company or related group from supplying enough annual revenue to threaten OCA's independence.

### 12.9 Standards-development lifecycle

OCA should use a bottom-up, multi-stakeholder process inspired by the open participation and consensus practices used in Internet governance and web standards—not copy any institution wholesale.

Every material standard follows:

1. **Problem statement:** Define the need, affected people, evidence, and scope.
2. **Working draft:** Publish proposed requirements, alternatives, assumptions, and open issues.
3. **Impact assessments:** Evaluate consumer rights, worker safety, privacy, security, fairness, accessibility, competition, implementation, and environmental or operational effects where relevant.
4. **Public and stakeholder review:** Provide accessible notice, sufficient review time, and targeted outreach to affected groups.
5. **Testing:** Run simulations, prototypes, conformance tests, adversarial review, and pilot or shadow evaluation as appropriate.
6. **Disposition of comments:** Record material comments, objections, changes, and reasons.
7. **Approval:** Seek broad consensus; apply defined voting and stakeholder-class safeguards when consensus is not achievable.
8. **Publication:** Release the standard, schemas, test suite, implementation guidance, effective date, and migration plan.
9. **Monitoring:** Measure real-world outcomes and unintended effects.
10. **Revision or retirement:** Correct errors, version changes, preserve interoperability, and withdraw unsafe rules.

Formal objections must receive a reasoned response and remain visible at the same appropriate level as the decision. Core-rights changes should require a supermajority and affirmative support across multiple stakeholder classes, not merely a majority of the full Board.

The ordinary public-review period and voting thresholds remain open. Emergency changes follow the narrower process in Section 12.20.

### 12.10 Model and algorithm governance

Every production NCS, VCI, synthesis, confidence, context-transfer, pattern, and proof-eligibility model requires:

- Named accountable owner
- Public purpose and prohibited uses
- Approved input allowlist and data lineage
- Mathematical specification and version
- Assumptions, limitations, and known failure modes
- Training or calibration-data description where applicable
- Simulation and validation results
- Fairness and subgroup analysis
- Privacy and security review
- Manipulation and adversarial testing
- Independent reproducibility review
- Consumer and verifier explanation design
- Change, rollback, and incident plan
- Defined monitoring and retirement criteria

Model source code should be public where doing so materially improves trust and does not create a demonstrated security risk. If narrow elements remain confidential, OCA must publish the reason, allow qualified independent review, and disclose enough information to understand material outcomes.

No production participant may select weights, versions, thresholds, context mappings, or confidence rules to improve preferred customers, suppress complaints, reduce benefit cost, or obtain a commercial advantage.

### 12.11 Certification framework

Certification applies separately to each ecosystem role:

- NCS issuer
- VCI issuer by event class
- Identity-proofing or identity service
- Event processor or registry
- Synthesis operator
- Credential issuer
- Wallet or custodial credential provider
- Proof verifier
- Benefit-policy implementer
- Dispute or appeal service
- Security, privacy, fairness, or conformance auditor

One organization performing several roles must qualify for each role and demonstrate functional separation.

Certification stages should include:

1. **Development sandbox:** Synthetic data and no consumer-affecting proofs.
2. **Limited pilot:** Restricted population, contexts, benefits, volume, and monitoring.
3. **Production certification:** Full conformance and approved operating controls.
4. **Conditional certification:** Time-limited permission subject to remediation or enhanced monitoring.
5. **Suspended or revoked:** No new activity in the affected role, event class, context, or network.

Certification requirements include legal authority, financial and operational fitness, schemas and conformance, security, privacy, accessibility, fairness, training, incident response, consumer support, worker protection, audit access, data portability, exit planning, and acceptance of OCA enforcement.

Certification is not a permanent seal. It requires renewal, continuous monitoring, material-change notification, and event-triggered reassessment.

### 12.12 Trust registries and conformance

OCA must publish machine-readable and human-readable registries identifying:

- Certified organizations and roles
- Approved issuer keys and endpoints
- Event classes and contexts authorized
- Certified model and schema versions
- Certification status and effective dates
- Material restrictions, suspensions, or revocations
- Approved auditors and appeal providers
- Transition and deprecation windows

The registry must not expose consumer identities or events.

OCA should maintain open conformance suites, reference test data, implementation profiles, interoperability events, and certification records. Passing technical tests does not replace privacy, fairness, accessibility, operational, or governance review.

### 12.13 Monitoring and independent audit

Oversight must combine continuous monitoring with scheduled and event-triggered audits.

Monitoring should cover:

- NCS sampling, response, concentration, disparity, and invalidation patterns
- VCI event accuracy, evidence, dispute, correction, reversal, and missingness
- Identity proofing, authentication, attribution, duplicate detection, and recovery
- Synthesis stability, context transfer, confidence, concentration, and model drift
- CQ presentation, consent, proof, benefit, baseline-service, and withdrawal outcomes
- Consumer and worker complaints, retaliation, safety, and accessibility
- Security incidents, key events, service availability, and privacy leakage
- Certification conflicts, funding concentration, and governance participation

Independent audits should include financial, security, privacy, accessibility, fairness, model, conformance, and governance scopes. Audit frequency and depth should reflect role and risk.

Auditors must have protected access to necessary records while following minimization and confidentiality rules. OCA must rotate auditors, disclose conflicts, review audit quality, and prevent audited entities from shopping for favorable opinions.

Public audit summaries should state scope, methods, material findings, remediation status, limitations, and the auditor's independence without exposing personal data or exploitable security detail.

### 12.14 Consumer review and appeals governance

The unified challenge path in Section 10.20 requires institutional routing and independence.

The governing allocation should be:

| Review subject | First-line responsibility | Independent review |
|---|---|---|
| Identity or interaction attribution | Responsible identity service or event issuer | Approved identity and attribution appeal provider |
| VCI fact or evidence | Source business or VCI issuer | Approved independent event reviewer |
| NCS eligibility or process | NCS issuer with protected employee process | Independent NCS and fairness reviewer |
| Company-specific CQ calculation | Certified synthesis operator | Independent model and calculation reviewer |
| Industry CQ or separately authorized overall research representation | Certified synthesis operator | Cross-company synthesis appeal panel |
| Credential or proof | Credential issuer, wallet, or verifier according to error source | Independent technical and policy reviewer |
| Benefit implementation | Participating business | Independent benefit-policy reviewer or OCA panel |
| Systemic bias, retaliation, or baseline degradation | OCA Investigations Office | Rights and Appeals Council or external panel |

Reviewers must be trained in the relevant domain, procedural fairness, trauma-aware communication, accessibility, privacy, bias, and conflicts of interest. A reviewer may not participate if they or their employer made the original decision or have a material relationship with an affected party.

Material appeal decisions should be reasoned, internally precedential where comparable cases exist, and subject to quality review. Public summaries may develop a body of guidance without exposing individuals or employees.

### 12.15 Review service levels and remedies

Exact service levels require pilot evidence, but governance must define at least:

- Immediate receipt and status confirmation
- Fast explanation and automated-integrity results
- Expedited review for benefits or harms that will expire
- Standard deadlines for issuer response and factual correction
- Standard deadlines for independent appeal
- Extensions only with notice and reason
- Escalation when an issuer misses a deadline
- Accessible and assisted review
- Final outcome and appeal notice

Potential remedies include correction, invalidation, reversal, recalculation, reissuance, proof rerun, benefit restoration, replacement benefit, compensation, apology, policy correction, collective remediation, audit, training, monitoring, certification restriction, suspension, or referral to an authority.

OCA should not promise remedies it lacks authority or funding to deliver. Participation agreements must create enforceable obligations, and a reserve or insurance mechanism may be required for certain consumer remedies.

### 12.16 Systemic complaints and collective redress

OCA must be able to identify and act on patterns that individual reviews cannot resolve.

Systemic triggers may include:

- Multiple similar challenges involving one issuer, model, event class, or benefit
- Statistical disparities or unexplained group differences
- Retaliation or employee-coercion reports
- Selective sampling or manipulated inputs
- Business-caused incidents producing consumer events
- Baseline-service degradation or coerced disclosure
- Repeated missed correction or appeal deadlines
- Cross-verifier tracking or prohibited secondary use
- Common identity, accessibility, or recovery failures

OCA may consolidate matters, preserve representative individual participation, open a formal investigation, suspend affected inputs or proofs, order broad correction, notify affected consumers, and require restitution or remediation.

Collective action must not make the original consumer publicly identifiable or require them to act as a representative without consent.

### 12.17 Enforcement ladder

The source brief's “node slashing” concept becomes a conventional, reviewable enforcement framework.

Available responses include:

1. Guidance or nonconformance notice
2. Required corrective-action plan
3. Consumer-specific correction or remedy
4. Enhanced monitoring or audit
5. Required training, testing, or system change
6. Public warning or certification condition
7. Restriction of an event class, proof, benefit, context, integration, or role
8. Suspension of new issuance or verification
9. Revocation of certification
10. Financial remedy or contractual assessment where lawful and authorized
11. Referral to regulators, law enforcement, labor authorities, standards bodies, or courts

Sanctions should consider severity, scale, duration, intent, negligence, consumer and worker impact, cooperation, history, self-reporting, remediation, and recurrence.

Emergency suspension may be used when continued activity presents a serious and credible risk to consumers, workers, system integrity, or security. It must be narrow, promptly reviewed, explained to the participant, and followed by ordinary due process.

### 12.18 Participant due process

Businesses and service providers also require predictable process so enforcement remains credible rather than political.

Before a final sanction, the affected participant should receive:

- Notice of the alleged violation and supporting basis
- Access to nonprivileged material evidence
- Opportunity to respond and correct factual errors
- Neutral decision maker
- Written decision and rationale
- Proportionate sanction and remediation terms
- Appeal to a body not responsible for the original decision
- Clear reinstatement criteria where applicable

OCA may protect consumer, employee, whistleblower, trade-secret, and security information while providing enough substance for a fair response.

Membership, funding, prominence, or threat of withdrawal cannot influence enforcement outcome.

### 12.19 Frontline-worker governance and protection

Frontline workers are not merely data suppliers. They are affected people whose safety, labor rights, and practical expertise are essential to the system.

OCA must provide:

- Voting representation and funded participation
- Independent protected reporting outside employer channels
- Anonymous or confidential reporting where lawful
- Anti-retaliation obligations and remedies
- Worker and labor consultation on interface, monitoring, and appeal rules
- Protection from NCS quotas, performance use, manager scripting, and forced disclosure
- Review of workload, emotional burden, safety, and accessibility
- Appropriate involvement of unions, works councils, or representatives
- Clear separation between CQ operations and employment decisions

Worker concerns may trigger issuer audit or systemic investigation without requiring the employee to confront the consumer or manager.

### 12.20 Emergency governance

OCA may need to act quickly after a security compromise, model failure, discriminatory outcome, issuer outage, legal order, or widespread incorrect issuance.

Emergency authority must:

- Identify the authorized decision makers
- Require a documented factual basis and conflict check
- Use the narrowest effective intervention
- Preserve baseline service and consumer review rights
- Record affected systems, contexts, participants, and expected duration
- Notify affected stakeholders as soon as safely possible
- Receive independent review within a defined short period
- Expire automatically unless renewed through ordinary governance
- Produce a public after-action report at an appropriate level
- Correct, recalculate, or reissue affected records when the emergency ends

An emergency rule cannot permanently change the standard. A provisional maximum duration should be defined in the charter and tested through tabletop exercises.

### 12.21 Transparency and public accountability

OCA should publish:

- Charter, bylaws, mission, stakeholder rights, and organizational structure
- Board, council, committee, and working-group membership
- Funding sources, major vendors, compensation, and audited financials
- Conflicts, recusals, related-party transactions, and lobbying policies
- Meeting agendas, minutes, attendance, decisions, votes, and formal objections
- Standards, schemas, models, benefit policies, conformance suites, and version history
- Certified participant and auditor registries
- Aggregate consumer, worker, dispute, appeal, audit, fairness, accessibility, and security metrics
- Enforcement actions and remediation status at a proportionate level
- Incident and emergency after-action summaries
- Annual mission-effectiveness and governance-capture assessment

OCA should maintain a public change log written for both technical and nontechnical audiences.

### 12.22 Confidentiality and protected information

Transparency must coexist with privacy, employee safety, security, legal privilege, trade secrets, and fair investigations.

OCA may restrict access only under a defined classification policy. Each restriction should identify the reason, authorized audience, retention period, review date, and whether a redacted or aggregate version can be published.

Confidentiality may not be used to hide:

- The existence of a material standard or policy
- Undisclosed changes affecting consumer outcomes
- Aggregate evidence of systemic harm
- Governance conflicts or funding dependence
- The substance of final enforcement or appeal rules
- A material incident after disclosure no longer creates a credible security risk

Consumers and participants should receive enough information to understand and challenge decisions even when some evidence must remain protected.

### 12.23 Competition and antitrust integrity

A cross-company standard creates legitimate competition risks. OCA must not become a venue for coordinating prices, deposits, customer allocation, service levels, boycotts, exclusion, or sensitive competitive strategy.

Controls should include:

- Written antitrust and competition policy
- Counsel review of meetings, standards, benefit policies, and data sharing
- Published agendas and minutes
- Prohibition on discussion of competitively sensitive nonpublic information outside approved technical necessity
- Open and objective certification criteria
- Fair access to standards and conformance tools
- No coordinated denial of baseline service
- Default aggregate or anonymized benchmarking
- Independent review of proof policies involving competitors
- Exit, portability, and interoperability protections

OCA certification revocation prevents use of the shared standard; it must not direct unrelated businesses to refuse ordinary commerce with the former participant or its customers.

### 12.24 Intellectual property and open access

Core definitions, schemas, protocols, proof policies, conformance requirements, calculation specifications, and consumer-rights rules should be publicly available under licenses that permit interoperable implementation.

OCA must adopt an intellectual-property and patent policy that:

- Requires disclosure of relevant claims
- Prevents hidden proprietary control of essential standards
- Supports royalty-free or otherwise fair, reasonable, and nondiscriminatory implementation terms appropriate to an open shared utility
- Protects contributor attribution without granting permanent control
- Defines licensing for reference implementations and test suites
- Preserves the ability to fork or transfer stewardship if OCA fails its mission

Trademarks and certification marks may be controlled to protect the meaning of conformance. They must not be used to prevent truthful criticism, compatible independent implementation, or public-interest research.

### 12.25 Research and public-interest access

Qualified independent researchers should be able to evaluate accuracy, fairness, security, privacy, labor effects, consumer understanding, competition, and social impact.

OCA should support:

- Published aggregate datasets and metrics where safe
- Controlled-access research environments for sensitive data
- Privacy-preserving query or synthetic-data programs
- Reproducible model and simulation materials
- Researcher independence and publication rights
- Coordinated vulnerability disclosure and safe-harbor terms
- Review of reidentification, worker exposure, and commercial-conflict risk

Participating companies may not veto unfavorable findings merely because they fund OCA or supplied data. OCA may require responsible disclosure timing for credible security or privacy risks.

### 12.26 Regional and regulatory coordination

The ecosystem will operate across different privacy, labor, discrimination, consumer-reporting, biometric, competition, accessibility, identity, and automated-decision regimes.

OCA should maintain a common global rights floor with jurisdiction-specific profiles that may strengthen or restrict implementation. Regional profiles may define eligible industries, events, identity methods, retention, worker processes, benefits, disclosures, appeals, and data transfers.

No regional profile may silently weaken the public global standard. Differences must be published and visible to consumers and implementers.

OCA should coordinate with regulators and standards bodies, respond to lawful oversight, and refer matters outside its authority. Certification does not replace legal compliance or government enforcement.

### 12.27 Capture, conflict, and ethics controls

Governance capture may occur through votes, funding, staffing, technical complexity, data access, vendor dependence, founder influence, litigation pressure, regulatory pressure, or participation fatigue.

Controls include:

- Stakeholder-balanced voting and cross-class approval
- Related-party aggregation
- Funding concentration limits
- Term limits and rotation
- Public conflicts and recusals
- Cooling-off periods for certain staff, board, auditor, and vendor transitions
- Independent nomination and compensation processes
- Procurement competition and vendor exit plans
- Accessible participation and funded public-interest seats
- Plain-language parallel documentation
- External governance audits
- Protected internal dissent and whistleblowing
- Formal objection and appeal processes
- Periodic review of whether affected groups exercise real influence

OCA should adopt enforceable codes of ethics, conduct, anti-harassment, conflicts, gifts, lobbying, and whistleblower protection. These rules apply to members, staff, officers, contractors, auditors, reviewers, and working-group participants.

### 12.28 Staged governance from one-person project to OCA

Governance should scale with actual power, data, and impact. It should not create an unpaid second job before an ecosystem exists, and it should not arrive after real people are already affected.

#### Stage 0: Founder-led public idea and specification

**Activities:** Publish the newsletter, maintain conduct.is and openconduct.org, develop this specification, gather comments, hold occasional conversations, and run synthetic simulations.

**Stewardship:** Brent Turner is the sole editor and decision maker. That fact is stated plainly rather than obscured behind alliance language.

**Minimum practices:**

- Short public project statement and current-status notice
- Named founder and contact method
- Versioned specification, decision register, open-question register, and change log
- Plain-language feedback and contribution terms
- Basic privacy notice for email, comment, or interest-form data
- Disclosure of material funding, sponsors, partnerships, and conflicts
- No collection of conduct events or sensitive identity evidence
- No consumer score, credential, proof, certification, or benefit decision
- No promise of independent review, service availability, or response deadlines

**Sustainable operating model:**

- Use one structured interest and feedback intake rather than open-ended individual workflows.
- Acknowledge submissions automatically where useful, without promising personal responses.
- Review feedback in batches on a stated periodic cadence rather than continuously.
- Publish decisions and unresolved issues so the founder does not repeat the same explanation privately.
- Invite bounded contributions with clear deliverables instead of immediately creating committees.
- Accept that progress may pause when founder capacity is unavailable.

Stage 0 is a legitimate launch state. Its honesty is a governance strength, not a weakness.

#### Stage 1: Contributor and advisory network

**Trigger:** Several credible people or organizations want to contribute time, expertise, or early support, but no real consumer CQ is operating.

**Added practices:**

- Lightweight contributor agreement and code of conduct
- Small, nonfiduciary advisory circle with consumer, worker, business, technical, privacy, and accessibility perspectives where available
- Published adviser roles, affiliations, conflicts, and nonbinding status
- Bounded working groups or review sprints
- Periodic public progress notes
- Clear separation between advice received and decisions made by the founder

The advisory circle should not be portrayed as an independent governing Board. Its purpose is to improve the work and discover committed future leaders.

#### Stage 2: Pre-pilot working organization

**Trigger:** The project receives material funding, signs development or research partners, pays contributors, builds functioning prototypes, or handles controlled nonproduction data.

**Added practices:**

- Appropriate legal entity, contracts, accounting, insurance, and data controls
- Interim steering group and documented decision rights
- Independent legal, security, privacy, fairness, accessibility, labor, and competition review proportionate to activity
- Research protocol and data-governance plan
- Partner conflict and funding protections
- Intellectual-property and contribution policy
- Pilot-readiness criteria and explicit prohibition on unapproved consumer-affecting use

Synthetic and carefully governed research data may be used to develop formulas and workflows. Stage 2 does not authorize real CQ benefits or adverse consumer consequences.

#### Stage 3: Limited consumer-affecting pilot

**Trigger:** Real people contribute NCS or VCI evidence, receive CQ representations or credentials, present proofs, or gain real benefits.

Before that trigger, the minimum governance package includes:

- Public interim charter and mission
- Published consumer and worker rights
- Interim multi-stakeholder steering group
- Independent consumer-rights and frontline-worker representatives
- Defined consumer-rights and worker-rights authority to trigger containment and independent review when a constitutional gate fails
- Independent technical, security, privacy, accessibility, fairness, labor, and legal review
- Named standards and model decision process
- Participant certification agreements
- Protected reporting and whistleblowing
- Unified consumer challenge path
- Independent appeal panel
- Incident and emergency authority
- Audit access and public pilot reporting
- Conflict, funding, data-use, and competition rules
- Appropriate staffing or funded service providers for support and review
- Published role-incompatibility matrix and named, funded capacity for rights, appeal, evaluation, support, incident response, and wind-down
- Sunset and transition plan into permanent governance

Stage 3 cannot be operated responsibly as an unsupported spare-time activity by one person. Reaching it is a partnership and resourcing gate, not a demand on the founder to perform every function personally.

The minimum viable constitutional coalition includes an interim standards authority, consumer-rights function, worker-rights function, independent technical and privacy assurance, independent evaluation, independent appeal, a defined pilot operator, and the funded benefit provider and participating business. One organization may provide compatible functions, but the issuer or verifier cannot finally adjudicate its own material disputed event; the builder cannot independently validate its own model; the operator cannot certify or audit itself; the sponsor cannot control publication; and the founder cannot remain sole standards authority, data custodian, appeal authority, and evaluator.

#### Stage 4: Production ecosystem and mature OCA

**Trigger:** Multiple businesses, industries, credential or proof providers, material transaction volume, or public production availability.

At this stage, the mature institutional, standards, certification, audit, enforcement, appeal, funding, and regional-governance requirements in this section apply.

Pilot partners may fund the work but cannot receive special event weight, model control, immunity from audit, privileged appeal treatment, or permanent governance rights.

#### Escalation triggers

The project must reassess its stage before any of the following occurs:

- Acceptance of material sponsorship, investment, grants, or membership fees
- Signing a business, research, data, or technology partnership
- Hiring staff or paying recurring contractors
- Collection of identifiable conduct, identity, employment, or transaction data
- Use of real NCS or VCI events
- Calculation or publication of an individual's CQ
- Issuance of a credential or proof
- Grant, continuation, or loss of a real benefit
- Claim that a company, product, model, or implementation is certified
- Promise of formal correction, appeal, or service-level handling

The same precommitment review applies before signing a letter of intent, exclusivity term, funded discovery agreement, data-access arrangement, public partner announcement, or prototype agreement that grants control, money, data, branding rights, delivery expectations, or preferential access. Calling an arrangement exploratory or nonbinding does not avoid the trigger when its practical effect expands project obligations or another party's influence.

Crossing a trigger without the required next-stage controls is a governance failure even if the project still describes itself as a pilot.

### 12.29 Reference governance principles

OCA should learn from—but not simply imitate—existing shared-infrastructure institutions. Useful principles include:

- ICANN's [bottom-up multi-stakeholder model](https://www.icann.org/resources/pages/governance-plan-improve-multistakeholder-model-2019-04-08-en/) and distinction among community, Board, and operating organization
- The [W3C Process](https://www.w3.org/policies/process/) emphasis on consensus, wide review, recorded formal objections, accountable decisions, and appeals
- Internet standards principles of [due process, broad consensus, transparency, and appeal](https://datatracker.ietf.org/doc/rfc6852/)
- Certification alliances that pair open technical requirements with conformance testing and controlled certification marks

OCA requires stronger direct consumer, worker, redress, fairness, and benefit-governance functions than a conventional technical standards body because its outputs can shape how people are treated.

### 12.30 Validation requirements

Before mature governance is approved, OCA must test and evaluate:

- Whether consumers and frontline workers exercise meaningful influence
- Board and committee balance, attendance, voting, and conflict patterns
- Participation barriers and effectiveness of funded participation
- Standards-cycle time, comment disposition, objection resolution, and accessibility
- Certification consistency, auditor independence, and vendor concentration
- Appeal independence, timeliness, consistency, dignity, and remedy completion
- Systemic-case detection and collective correction
- Enforcement proportionality, consistency, and susceptibility to member pressure
- Funding concentration and financial resilience
- Emergency decision quality, scope, duration, and review
- Public comprehension of standards, changes, metrics, and accountability
- Security, privacy, fairness, accessibility, labor, and competition oversight
- Regional consistency and regulatory coordination
- Founder, corporate, vendor, regulator, and expert capture risks
- Ability to continue credentials, appeals, and protections after a major participant exits

OCA's detailed governance design remains **CANDIDATE** until the founding charter, stakeholder structure, funding safeguards, standards process, certification system, appeal independence, audit model, and enforcement authority receive external legal and governance review.

## 13. Legal and ethical design constraints

### 13.1 Purpose and status

This section identifies legal and ethical boundaries that shape the Conduct Ecosystem from publication through production. It is a design and issue-spotting specification, not a legal opinion or substitute for advice from qualified counsel in each relevant jurisdiction.

The legal classification of CQ depends on facts that do not yet exist: who operates each function, which data is collected, how scores or proofs are produced, what benefits are offered, which businesses participate, where consumers and workers are located, and how decisions affect them.

The project must not describe “upside only,” consent, consumer control, cryptography, nonprofit status, or open standards as legal immunity. Each reduces particular risks; none removes the need to analyze the actual system and outcome.

Ethical requirements may exceed minimum law. A use can be technically lawful and still violate the project's purpose, create coercion, reward conformity, burden marginalized people, or undermine human dignity.

This section is summarized publicly at `openconduct.org/regulatory-posture`, which pairs each load-bearing design decision with the regime it engages and the question that remains unresolved. The public summary MUST remain consistent with this section, MUST NOT present any regime as satisfied, and MUST NOT read as legal advice or a compliance claim. Where the two differ, this section controls.

### 13.2 Core requirements

| ID | Requirement | Status |
|---|---|---|
| LEG-001 | Stage 0 public materials MUST clearly describe Open Conduct as a proposal, not an operating score, certified standard, or existing independent alliance. | CONSTITUTIONAL |
| LEG-002 | Objective claims about effectiveness, accuracy, fairness, security, adoption, legal treatment, or business outcomes MUST have an adequate basis before publication. | CONSTITUTIONAL |
| LEG-003 | The project MUST obtain jurisdiction- and use-specific legal review before collecting real conduct events, calculating real-person CQ, issuing credentials, or affecting benefits. | CONSTITUTIONAL |
| LEG-004 | “Upside only,” consent, and consumer presentation MUST NOT be treated as automatic exemptions from consumer-reporting, discrimination, privacy, or competition law. | CONSTITUTIONAL |
| LEG-005 | Before Stage 3, counsel MUST assess whether any operator, input, output, credential, proof, or benefit is governed by the FCRA or analogous state consumer-reporting law. | CONSTITUTIONAL |
| LEG-006 | CQ MUST NOT be used for employment, housing, credit, insurance, education admissions, healthcare access, public benefits, immigration, licensing, or another prohibited high-impact eligibility decision. | CONSTITUTIONAL |
| LEG-007 | Participation, proof requests, benefits, and baseline service MUST comply with applicable nondiscrimination, public-accommodations, accessibility, and retaliation law. | CONSTITUTIONAL |
| LEG-008 | Consumer consent MUST be informed, voluntary, specific, revocable where applicable, and supported by independent substantive protections. | CONSTITUTIONAL |
| LEG-009 | Every production role MUST have defined legal responsibilities, contracts, insurance, jurisdiction, and regulator-facing accountability. | CONSTITUTIONAL |
| LEG-010 | Collection and use MUST follow data minimization, purpose limitation, security, retention, correction, deletion, and breach-response requirements. | CONSTITUTIONAL |
| LEG-011 | Cross-company governance and data exchange MUST receive specialist antitrust and competition review before business collaboration. | CONSTITUTIONAL |
| LEG-012 | Worker participation MUST comply with labor, employment, monitoring, privacy, collective-bargaining, whistleblower, and anti-retaliation requirements. | CONSTITUTIONAL |
| LEG-013 | The initial consumer-affecting pilot SHOULD be limited to adults in one approved jurisdictional profile unless counsel approves otherwise. | CANDIDATE |
| LEG-014 | Legal and ethical impact review MUST recur when data, models, benefits, partners, jurisdictions, or public claims materially change. | CONSTITUTIONAL |
| LEG-015 | Where law and this specification differ, the stronger consumer, worker, dignity, and due-process protection SHOULD govern unless prohibited by law. | CONSTITUTIONAL |
| LEG-016 | Consumer authorization, wallet presentation, nonprofit status, a positive-only output, or a consumer-initiated transaction MUST NOT be treated as resolving consumer-reporting classification; each role, communication, purpose, and recipient requires a written analysis. | CONSTITUTIONAL |
| LEG-017 | No EEA production use may begin until specialist review determines that the actual scoring, context transfer, proof, and benefit design avoids prohibited social scoring and satisfies applicable automated-decision, profiling, data-protection, labor, and equality rules. | CONSTITUTIONAL |
| LEG-018 | OCA MUST NOT rely on withdrawn U.S. antitrust safety zones or numeric aggregation conventions as legal safe harbors. Every benchmark, report family, working group, benefit policy, and competitor exchange requires a current necessity, sensitivity, competition, and governance analysis. | CONSTITUTIONAL |
| LEG-019 | Federated computation and aggregate publication do not erase the legal status of the underlying processing. Every report family MUST have approved purpose, authority, inputs, access, retention, disclosure control, cross-border posture, and role allocation. | CONSTITUTIONAL |
| LEG-020 | OCA reports and member diagnostics MUST NOT furnish person-level eligibility information, searchable conduct histories, small-cell revelations, or named-competitor nonpublic intelligence. | CONSTITUTIONAL |
| LEG-021 | Each benefit profile MUST test the benefit as a possible good, service, privilege, or advantage and its qualification rule as a possible eligibility criterion or method of administration; an equivalent accessible path and baseline parity are required. | CONSTITUTIONAL |
| LEG-022 | Stage 2 MUST maintain current, dated jurisdiction matrices for consumer reporting, privacy, automated decisions, discrimination, accessibility, labor, data transfer, competition, and each proposed benefit. | REQUIRED FOR COHERENCE |
| LEG-023 | Required NCS capture, review, investigation, training, and related worker activity MUST be treated as work for compensation and workload design where applicable, and MUST NOT interfere with protected labor, complaint, safety, accommodation, or collective activity. | CONSTITUTIONAL |

### 13.3 Stage 0 legal posture

The founder-led publication project has a much smaller legal surface than an operating CQ ecosystem, but it is not exempt from ordinary website, marketing, intellectual-property, privacy, accessibility, and communications obligations.

Stage 0 should:

- Identify Brent Turner as the current founder and steward.
- State that CQ and OCA are proposals under development.
- Avoid implying that scores, pilots, certifications, partners, protections, or independent governance already exist.
- Use synthetic examples rather than identifiable stories or records unless separate informed permission is documented.
- Avoid inviting people to upload receipts, employee names, complaint files, identity documents, or sensitive conduct histories.
- Publish an understandable privacy notice for newsletter, email, analytics, comment, and interest-form data.
- Minimize cookies, tracking, advertising identifiers, and third-party scripts.
- Provide accessible websites and feedback mechanisms.
- Publish contribution and intellectual-property terms before accepting substantial outside work.
- Use truthful sender information, unsubscribe controls, and other applicable email practices.
- Preserve evidence supporting objective claims about the proposal.

The websites should not say that CQ “proves” someone is a good customer, is objective, eliminates bias, guarantees privacy, prevents fraud, has legal immunity, or will revolutionize business as a factual outcome. They may present those ideas as goals, hypotheses, design intentions, or questions to test.

Stage 0 does not need a consumer dispute system because no consumer score or conduct event exists. It does need a simple correction channel for inaccurate public statements, attribution, contributions, or personal information on the sites.

### 13.4 Legal-classification gates

Before each new stage, counsel must document the likely legal classifications of:

- Founder, publisher, project, legal entity, and future OCA
- Data controller, processor, service provider, contractor, and joint controller where applicable
- Consumer reporting agency, furnisher, user, or reseller
- Identity provider, credential issuer, wallet, synthesis operator, and verifier
- Public accommodation and provider of benefits or privileges
- Employer, worker-data processor, or monitoring provider
- Trade association, standards organization, certification body, or competitor collaboration
- Data broker, seller, sharer, advertiser, or profiling provider
- Research sponsor, investigator, and human-subject data custodian
- Licensor, certification-mark owner, and software provider

Contract labels do not determine statutory roles. The analysis must follow actual data, control, purpose, decision, and economic relationships.

Each gate produces a written decision: applicable, likely applicable, unresolved, or not applicable with reasons and assumptions. A material change reopens the analysis.

### 13.5 Consumer-reporting risk

CQ is expressly built from information bearing on conduct, human interactions, operational reliability, and personal characteristics. It may be compiled by one party and presented to another business to determine eligibility for a benefit. Those features create a serious question under the federal Fair Credit Reporting Act and analogous state laws. The statutory definition reaches certain communications bearing on character, general reputation, personal characteristics, or mode of living when used or expected to be used for covered eligibility purposes; the controlling text is [15 U.S.C. § 1681a](https://uscode.house.gov/view.xhtml?edition=2023&num=0&req=granuleid%3AUSC-2023-title15-section1681a).

Prohibiting credit, employment, housing, and insurance uses reduces major risk but does not by itself resolve the question. The FCRA also recognizes other permissible-purpose and consumer-initiated business-transaction concepts, and classification depends on the full arrangement. The CFPB emphasizes that permissible purposes are consumer-specific and that a disclaimer does not cure furnishing without one in its [permissible-purpose advisory opinion](https://www.consumerfinance.gov/rules-policy/final-rules/fair-credit-reporting-permissible-purposes-for-furnishing-using-and-obtaining-consumer-reports/). Consumer authorization and wallet presentation do not automatically remove a credential, operator, or report from the statute.

The transaction-or-experience exclusion for a person's own communication about its transactions or experiences with the consumer does not clearly resolve a cross-company synthesis produced or furnished by OCA or another intermediary. Nor does operating as a nonprofit, cooperative, standards body, or member-funded alliance. A written analysis must follow the actual information flow, expected use, regular practice, economic arrangement, and statutory role rather than the product label.

Before any Stage 3 pilot, specialist counsel must determine:

- Whether NCS, VCI, CQ, a credential, or a benefit proof is a consumer report
- Whether an issuer, synthesis operator, credential provider, wallet, OCA, or another service is a consumer reporting agency
- Whether participating businesses are furnishers or users
- Whether each proof request has a permissible purpose
- Whether any source communication fits a transaction-or-experience exclusion and whether aggregation, synthesis, or onward furnishing changes that result
- Whether accuracy, file disclosure, source disclosure, reinvestigation, adverse-action, identity-theft, disposal, and other duties apply
- Whether a consumer-controlled proof architecture changes the analysis
- Which state consumer-reporting laws impose broader duties

If an operator is likely a consumer reporting agency, the ecosystem must either adopt a complete compliant operating model or redesign the use before launch. Furnishers would also need an accuracy, integrity, recordkeeping, dispute, and correction operating model consistent with applicable law; the FTC summarizes core federal duties in its [furnisher guidance](https://www.ftc.gov/business-guidance/resources/consumer-reports-what-information-furnishers-need-know). The ecosystem cannot rely on labels such as loyalty, credential, reputation, or upside-only.

OCA should seek a reasoned written opinion and consider regulatory engagement before relying on a noncoverage position.

### 13.6 Consumer protection and public claims

Federal and state consumer-protection law can apply to express claims, implied claims, omissions, consent flows, scoring explanations, benefit promises, privacy representations, security claims, and dispute handling.

The [FTC's advertising guidance](https://www.ftc.gov/business-guidance/resources/advertising-faqs-guide-small-business) emphasizes truthful, nondeceptive, evidence-based claims. Massachusetts [Chapter 93A](https://www.mass.gov/info-details/the-massachusetts-consumer-protection-law) separately prohibits unfair or deceptive marketplace practices.

Open Conduct communications must therefore distinguish:

- Current facts from future plans
- Design principles from demonstrated outcomes
- Simulations from real-world validation
- Security goals from guarantees
- Voluntary participation from practical pressure
- A proposed OCA from an operating alliance
- A candidate formula from an approved score
- A certified implementation from mere compatibility

Disclaimers cannot cure a misleading overall impression. Material limitations must appear near the relevant claim and in language the intended audience can understand.

Future participant testimonials, endorsements, partner logos, adoption claims, and research results require documented permission, conflict disclosure, and substantiation. OCA certification marks may be used only under an enforceable certification program.

Commercial email must follow applicable rules. The FTC's current [CAN-SPAM compliance guide](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business) requires accurate headers, nondeceptive subjects, sender identification, a postal address, and functioning opt-out processes for covered commercial messages.

### 13.7 Privacy and data-protection law

The ecosystem may process identity data, interaction records, employee responses, behavior-derived inferences, device information, credentials, proof logs, complaints, disputes, and protected-class audit data. Different jurisdictions may treat some of these as sensitive, biometric, employment, profiling, or automated-decision data.

Before Stage 3, the project needs a jurisdictional data inventory covering:

- Data category, source, and sensitivity
- Purpose and lawful basis
- Consumer and employee notice
- Consent and withdrawal where applicable
- Controller, processor, joint-controller, and recipient roles
- Access, correction, deletion, portability, restriction, and opt-out rights
- Automated-decision and profiling rights
- Retention and legal hold
- Cross-border and onward transfer
- Security, vendor, and breach duties
- Children's, biometric, precise-location, and protected-class rules
- Research and fairness-testing exceptions or safeguards

The system should assume that privacy law will vary by residence and context, not merely by the founder's or company's location. A Massachusetts-based project serving a consumer elsewhere may acquire obligations in that consumer's jurisdiction.

Consent is not the only privacy control. Collection can remain unfair, excessive, discriminatory, insecure, or legally restricted even after a person taps Agree.

Report computation remains processing even when OCA never receives raw event rows and publishes only aggregates. Under the EU General Data Protection Regulation, the underlying collection, inference, federated query, linkage, contribution, and analysis require their own lawful basis, fairness, transparency, purpose limitation, minimization, accuracy, role allocation, retention, security, and rights analysis. Research or statistical purpose does not create a blanket exemption; compatible use and the safeguards in Article 89 must be established under the [GDPR](https://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1494678401079&uri=CELEX%3A32016R0679).

Deidentification is an evidence claim, not a label. Small cohorts, dominant contributors, rare events, repeated releases, location, time, and auxiliary data can reveal people or businesses even when names are removed. Report approval therefore requires both privacy and competition disclosure-control testing.

### 13.8 Massachusetts starting requirements

Massachusetts is the initial founder location, not automatically the only applicable jurisdiction.

Relevant starting points include:

- [201 CMR 17.00](https://www.mass.gov/regulations/201-CMR-1700-standards-for-the-protection-of-personal-information-of-ma-residents), which requires covered persons owning or licensing defined personal information about Massachusetts residents to maintain a written information-security program with safeguards proportionate to size, resources, data, and risk.
- [M.G.L. Chapter 93H breach requirements](https://www.mass.gov/info-details/requirements-for-data-breach-notifications), including notices when covered Massachusetts personal information is breached or used without authorization.
- [Massachusetts privacy authorities](https://www.mass.gov/info-details/massachusetts-law-about-privacy), including the statutory right of privacy and category-specific rules.
- Chapter 93A's prohibition on unfair or deceptive practices.
- Massachusetts public-accommodations and antidiscrimination law.

The narrow statutory definition of personal information in one Massachusetts security rule does not define the full ethical or privacy scope of CQ data. Conduct histories and identity assertions require strong protection even when a particular field falls outside one statutory definition.

Before Stage 2 handles covered Massachusetts personal information, the responsible entity should have appropriate counsel, a written information-security program where applicable, vendor terms, incident procedures, and assigned responsibility. Stage 0 should minimize collection enough to avoid creating this burden unnecessarily.

### 13.9 Nondiscrimination and public accommodations

“Additional benefit” does not mean “outside discrimination law.” Goods, services, privileges, advantages, eligibility criteria, and methods of administration can all matter.

The federal [ADA Title III regulations](https://www.ada.gov/law-and-regs/regulations/title-iii-regulations/) address full and equal enjoyment, unequal or separate benefits, eligibility criteria, methods of administration, reasonable modifications, effective communication, and retaliation. Massachusetts law applies broadly to places open to the public and protects additional classes, as summarized in the Commonwealth's [public-accommodations guidance](https://www.mass.gov/info-details/discrimination-in-public-places).

The ecosystem must evaluate:

- Disparate treatment by employees, businesses, reviewers, and verifiers
- Disparate outcomes created by inputs, sampling, context, confidence, or benefits
- Disability, neurodivergence, language, culture, trauma, and communication differences
- Whether a requirement screens out people who use accommodations or human assistance
- Whether nonparticipation or insufficient history correlates with protected status
- Whether benefits become meaningful privileges unavailable on equal terms
- Whether complaint, accommodation, or rights exercise triggers retaliation
- Whether proxy fields recreate protected classifications

The system must not treat eye contact, affect, speech pattern, accent, speed, deference, app use, need for explanation, use of a service animal, assistance request, or accommodation as evidence of poor conduct.

A CQ benefit is still capable of being a privilege or advantage, and its proof threshold can still operate as an eligibility criterion or method of administration. “Optional,” “additional,” and “positive” are not sufficient analyses. Every approved benefit needs a disability-access and public-accommodations review of both the benefit itself and the conduct evidence used to qualify, including a safe equivalent path when the ordinary proof or benefit experience is inaccessible.

Fairness analysis must examine intersections and small groups, not only average differences across one protected trait at a time.

### 13.10 Accessibility

Accessibility is a product, governance, and legal requirement—not a future enhancement.

The public websites, consumer view, wallet interactions, proof requests, employee prompts, disputes, appeals, notices, and governance participation must support effective access and communication. The U.S. Department of Justice states that inaccessible web features can limit access to the goods, services, and privileges of public accommodations and provides [web accessibility guidance](https://www.ada.gov/resources/web-guidance/).

Implementation should adopt an explicit current accessibility standard and include people with disabilities in design and testing. Compliance with a technical checklist does not replace equivalent outcomes, reasonable modifications, accessible support, and effective communication.

Needing an accessible or assisted path cannot lower NCS, VCI, confidence, CQ, or benefit eligibility.

### 13.11 Automated decisions and profiling

CQ synthesis and proof eligibility may qualify as automated decisionmaking, profiling, ranking, or evaluation under applicable law even if the final output is a consumer-presented credential.

The legal review must examine:

- Notice and explanation
- Access to meaningful information about logic and factors
- Opt-out or alternative-path rights
- Human review
- Risk and impact assessments
- Accuracy and cybersecurity audits
- Use of sensitive data and inferences
- Significant-decision definitions
- Retention, correction, and deletion
- Vendor and controller responsibilities

For example, the California Privacy Protection Agency's [2025 rulemaking](https://cppa.ca.gov/regulations/ccpa_updates.html), effective January 1, 2026, includes regulations concerning risk assessments, cybersecurity audits, and rights involving automated decisionmaking technology, with obligations and compliance dates depending on coverage and use. The project must maintain a current, dated state-law matrix rather than assume federal law is the ceiling or freeze a preliminary summary into the specification.

The EU AI Act creates a separate design gate. Article 5 prohibits certain AI-based social scoring by public or private actors when evaluation or classification based on social behavior or personal characteristics leads to detrimental or unfavorable treatment in an unrelated context or treatment that is unjustified or disproportionate. The official text is [Regulation (EU) 2024/1689](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689). Zero-default transfer, purpose-bound proof, consumer initiation, separate dimensions, and additive benefits reduce risk; they do not establish that treatment is related, justified, proportionate, or non-detrimental.

No EEA deployment may assume that the absence of a proof has no unfavorable effect merely because the protocol returns no negative reason. The full service outcome, opportunity, friction, price, availability, and practical baseline must be examined. Before implementation is fixed, specialist counsel must also determine whether the actual synthesis or eligibility mechanism is an AI system and which provider, deployer, transparency, risk, and human-oversight duties apply.

“A human can override it” does not make a system nonautomated if people routinely rely on the output. Conversely, requiring a human click does not provide meaningful review if that person lacks authority, evidence, time, or training.

### 13.12 Competition and antitrust

The ecosystem coordinates standards among businesses that may compete. Legitimate interoperability and consumer portability can be procompetitive, but shared benefit policies, customer information, certification, and exclusion mechanisms create risk.

Trade-association form, third-party aggregation, historical data, minimum contributor counts, and external facilitation do not create automatic antitrust immunity. The DOJ withdrew its older healthcare enforcement-policy statements in 2023 because they no longer reflected current market realities, and the FTC and DOJ [withdrew the 2000 competitor-collaboration guidelines in 2024](https://www.ftc.gov/news-events/news/press-releases/2024/12/ftc-doj-withdraw-guidelines-collaboration-among-competitors). Older numeric conventions may be considered as risk-reduction ideas only; they are not current federal safety zones or substitutes for case-specific analysis.

The EU analysis likewise reaches direct and indirect information exchange through platforms, algorithms, shared tools, and trade associations. The European Commission's [2023 Horizontal Cooperation Guidelines](https://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1720545852777&uri=CELEX%3A52023XC0721%2801%29) require attention to the information's competitive sensitivity, age, aggregation, market characteristics, exchange design, necessity, and proportionality. Benchmarking should use the least competitively sensitive information capable of producing the claimed efficiency.

Before business participation, specialist counsel must review:

- Competitor-specific CQ presentation and named-history proofs
- Shared benefit definitions and thresholds
- Price, fee, deposit, cancellation, upgrade, and service terms
- Benchmarking and data aggregation
- Report questions, cohort construction, repeated releases, query access, contribution dominance, latency, and the ability to infer one participant from an aggregate
- Membership and certification access
- Suspension and revocation
- Standards licensing and essential technology
- Meetings, working groups, and information exchange
- Joint negotiations, boycotts, or customer allocation

OCA must not recommend prices or commercial terms, share nonpublic competitive strategy, coordinate denial of baseline service, or make certification a disguised barrier to entry.

OCA and participants must not exchange or report nonpublic forward-looking price, fee, wage, capacity, inventory, output, customer-allocation, product-roadmap, negotiation, cost, or commercial-strategy information unless specialist counsel approves a narrowly necessary lawful use. Clean teams, disclosure thresholds, contribution caps, query budgets, release latency, audit, and independent methods review are controls—not legal conclusions.

“Upside only” does not provide antitrust immunity. A coordinated advantage withheld from nonparticipants or disfavored groups can still affect competition and consumer choice.

### 13.13 Labor and employment

NCS asks employees to generate information about consumers through employer systems. That may implicate workplace monitoring, labor consultation, collective bargaining, employee privacy, wage and workload, retaliation, safety, and automated-employment rules.

Before employee use, the system must determine:

- Whether participation is voluntary or required and by whom
- Whether the task is compensable work
- What employee notice, consent, consultation, or bargaining is required
- Who can identify the rater and for what purpose
- Whether managers can see individual response patterns
- How bias audits avoid becoming employee profiling
- How challenges, interviews, and investigations affect employees
- What protections apply to contractors and franchise workers
- Which records enter personnel files or legal discovery
- How unions, works councils, and worker representatives participate

NCS may not be used for hiring, firing, scheduling, promotion, compensation, discipline, quotas, or productivity measurement. Contractual prohibition alone is insufficient; technical access limits, audits, reporting, and remedies are required.

Where NCS capture, review, training, investigation, correction, or appeal participation is required or controlled by an employer, the time and workload must be analyzed as work and compensated where required. The U.S. Department of Labor's [hours-worked guidance](https://www.dol.gov/agencies/whd/fact-sheets/22-flsa-hours-worked) is a starting point, not a complete jurisdictional answer. NCS also cannot be used to identify, deter, or retaliate against lawful worker discussion or collective concerns; the NLRB describes federal protections for [concerted activity](https://www.nlrb.gov/about-nlrb/rights-we-protect/the-law/employees/concerted-activity).

Outside the United States, the pilot profile must address worker-data protection, consultation, works councils, collective bargaining, algorithmic-management restrictions, explanation, human oversight, and cross-border transfer before capture begins. Employer-provided consent is not presumed voluntary merely because the worker can technically skip one prompt.

### 13.14 Biometrics and identity law

Biometric, identity-document, liveness, face, voice, and device data can trigger specialized consent, retention, deletion, security, notice, and private-action regimes depending on jurisdiction.

The system's default avoidance of a central biometric database is both an ethical and legal-risk control. Local device biometrics should remain under the device or authenticator boundary. Any collection of biometric or identity-document data by a CQ operator requires a separate necessity analysis, jurisdictional review, explicit policy, retention limit, vendor review, and approved alternative.

A person who cannot or will not provide a biometric must have a proportionate alternative unless a specific lawful and necessary requirement applies.

### 13.15 Children and protected populations

The initial real-person pilot should be adult-only unless specialist child-privacy, guardianship, education, identity, fairness, and developmental review approves a narrower use.

The FTC's current [COPPA resources](https://www.ftc.gov/business-guidance/privacy-security/childrens-privacy) explain heightened rules for online collection of personal information from children under 13, including parental-control requirements. State protections may apply to older minors.

CQ is especially risky for children because early conduct labels can follow developmental behavior, reflect adult bias, and create pressure beyond meaningful consent. A parent or school should not be able to create a portable conduct identity for a child under the general consumer model.

The project must also consider people under guardianship, people experiencing cognitive impairment, survivors of abuse or stalking, undocumented people, and others for whom identity linkage or disclosure creates elevated risk.

### 13.16 Defamation, opinion, and harmful content

NCS includes subjective human judgments, while VCI and CQ communicate factual or fact-like conclusions. False attribution, unsupported misconduct claims, misleading scores, or publication of identifiable histories can create defamation, privacy, tort, and reputational risk.

Controls include:

- Verified interaction and rater eligibility
- Structured responses rather than scored free text
- No public profiles or searchable histories
- Evidence standards for VCI assertions
- Context, confidence, and limitation disclosure
- Correction, dispute, appeal, and timely reversal
- Protection against repeating allegations after invalidation
- Careful language distinguishing opinion, event, inference, and proven fact
- Legal review of platform, publisher, issuer, and republisher roles

The project must not assume that online-platform immunity automatically protects a system that solicits, structures, calculates, or republishes conduct conclusions.

### 13.17 Contracts, allocation of responsibility, and insurance

Production participation agreements must define:

- Roles and authority
- Permitted and prohibited uses
- Data ownership, custody, access, and return
- Accuracy, correction, and lifecycle duties
- Security and breach response
- Consumer and worker rights
- Audit, monitoring, and regulator access
- Service levels and business continuity
- Intellectual property and conformance
- Indemnity, limitation of liability, and remedies consistent with law
- Insurance requirements
- Suspension, termination, transition, and credential continuity
- Governing law and dispute forum

Contracts cannot waive nonwaivable consumer or worker rights or transfer statutory responsibility away from the entity that actually holds it.

The project should evaluate cyber, technology errors and omissions, media, directors and officers, employment, and other insurance appropriate to each stage and role.

### 13.18 Intellectual property, names, and contributions

**Founder-stage launch decision — updated August 22, 2026:** The repository licensing maps activate CC BY 4.0 for identified original specification and explanatory material and Apache 2.0 for identified website and implementation code. Conduct and Open Conduct names, marks, brand assets, certification language, and official-status claims remain reserved. The clean Conduct and Open Conduct website repositories may be public. Intentional code contributions may be incorporated under Apache 2.0 and intentional content contributions under CC BY 4.0; datasets, personal data, brand designs, and patent-sensitive material require separate review and terms. These publication choices remain subject to focused legal review and do not settle the later OCA ownership, patent, conformance, certification, reference-implementation, or asset-transfer questions below.

Before inviting substantial outside contribution, Stage 0 should define:

- Ownership and license of the specification
- Contributor representations and contribution license
- Treatment of suggestions, code, models, datasets, and designs
- Use of Conduct Quotient, CQ, NCS, VCI, Open Conduct, and OCA names
- Domain and social-account custody
- Certification-mark plans
- Patent disclosure and essential-claims policy
- Future transfer to OCA or another mission-locked steward

The goal is to welcome contribution without accidental joint ownership, hidden proprietary claims, or inability to transfer the project into an independent institution later.

Trademark availability and naming clearance should occur before material brand investment. Publication of a name or domain does not establish exclusive rights everywhere.

### 13.19 Benefits require individual legal classification

Each proposed benefit must receive its own legal and ethical analysis. A benefit is not harmless merely because it is favorable.

The review asks:

- Is it a privilege or advantage of a public accommodation?
- Does it affect price, deposit, payment, credit, insurance, contract, or financial risk?
- Is it essential or practically necessary?
- Could withholding it constitute adverse action or unequal treatment?
- Does it screen out protected or less digitally connected groups?
- Does it burden other consumers or workers?
- Does it create competitor coordination?
- Is the consumer's consent genuinely optional?
- Can the benefit be withdrawn, and what remedy remains after the interaction ends?

A thank-you, upgrade, reduced deposit, fee waiver, priority queue, and flexible cancellation term do not share one legal classification. The OCA benefit catalog must record the analysis and approved jurisdictions for each. Expedited or deprioritized handling of disputes, complaints, corrections, appeals, accommodations, safety, legally owed refunds, or other rights processes is prohibited regardless of benefit classification.

### 13.19A Ecosystem intelligence and report classification

Every public report, member benchmark, commissioned diagnostic, sponsored study, and research release requires a report-specific legal profile before production. “Aggregate,” “federated,” “research,” “member-only,” and “industry benchmark” describe design choices; they do not decide privacy, consumer-reporting, competition, labor, trade-secret, database-right, contract, or cross-border treatment.

The profile must document:

- The precise question, claimed public or member value, and why network-wide data is necessary
- Contributing parties, data categories, time periods, jurisdictions, legal roles, authority, and permitted purpose
- Whether person-level information is ever computed, returned, retained, linked, or available to an analyst, member, operator, or verifier
- Whether the result could be used or expected to be used for a person's eligibility and therefore enter consumer-reporting analysis
- Whether the inputs or outputs reveal current or future competitively sensitive information, one dominant contributor, a named competitor, or coordinated commercial behavior
- Minimum cohort and cell sizes, issuer counts, dominance caps, rarity suppression, latency, query budgets, repeated-release testing, and privacy protection
- Worker-data, employment-monitoring, consultation, confidentiality, and secondary-use implications
- Lawful basis, purpose compatibility, notice, rights, retention, deletion, security, cross-border transfer, and contractual restrictions
- Methods independence, client influence, conflict review, publication rights, harm escalation, audit, and withdrawal or correction

Public aggregate research and a company diagnostic using that company's own data against protected cohorts are the intended report families. A person-level member diagnostic, downloadable event feed, open-ended query interface, small-cell cut, named-competitor comparison, or eligibility feed is outside the approved model. If a proposed report cannot produce useful value within those boundaries, OCA should not sell it.

### 13.20 Ethical principles

The Conduct Ecosystem should be evaluated against the following principles even where law is silent:

#### Human dignity

The system evaluates limited evidence from verified interactions. It never defines the person's worth, character, identity, or belonging.

#### Contextual integrity

Evidence should travel only where the context and consumer's purpose make it legitimately relevant.

#### Non-domination

No company, employer, government, platform, or coalition should use CQ to compel conformity or obtain disproportionate power over a person.

#### Substantive voluntariness

Participation is not voluntary when refusal produces material disadvantage, repeated pressure, or an intentionally degraded baseline.

#### Equality and accommodation

The system must not reward cultural conformity, neurotypical presentation, digital fluency, deference, wealth, or lack of support needs.

#### Voice and contestability

People affected by evidence and decisions receive understandable information, protected participation, review, and meaningful remedy.

#### Worker dignity

Frontline experience matters without converting workers into surveillance sensors, targets for retaliation, or sources of unpaid emotional labor.

#### Proportionality

Identity, data, proof, process, and benefit requirements should match the actual value and risk involved.

#### Forgiveness and redemption

No ordinary interaction should create a permanent behavioral sentence. Recency, correction, context, and new evidence must allow change.

#### Institutional humility

The ecosystem must communicate uncertainty, test assumptions, publish limitations, and stop uses that cannot be made fair or safe.

### 13.21 Ethical failure modes

The system must continually test whether it is unintentionally:

- Measuring compliance or deference instead of respectful conduct
- Rewarding consumers who are easiest or cheapest to serve
- Encoding racialized, gendered, class-based, ableist, linguistic, or cultural expectations of “niceness”
- Treating justified anger or assertiveness as misconduct
- Penalizing trauma responses, disability, neurodivergence, or communication differences
- Giving affluent frequent travelers and purchasers more opportunity to establish history
- Creating emotional pressure to monitor or perform for a score
- Encouraging employees to tolerate abuse because a consumer has strong VCI
- Encouraging consumers to suppress legitimate complaints
- Turning optional benefits into a shadow caste system
- Making inactive or privacy-protective people appear suspicious
- Shifting service failures from institutions onto individuals
- Creating an infrastructure later repurposed for government, employment, credit, or social control

If testing shows that a use persistently produces one of these outcomes and mitigation is inadequate, OCA must prohibit the use rather than merely disclose the limitation.

### 13.22 Nonnegotiable prohibited uses

Regardless of technical capability or participant demand, CQ may not be used for:

- Employment or worker management
- Housing or lodging as a residence
- Credit, lending, collections, or financial eligibility
- Insurance underwriting, pricing, coverage, or claims
- Healthcare access, triage, treatment, or pricing
- Education admission, discipline, grading, or credentialing
- Government benefits, immigration, licensing, sentencing, policing, or surveillance
- Essential utilities, communications, transportation access, or emergency services
- Political persuasion, voter profiling, advertising targeting, or data brokerage
- Public ranking, searchable reputation, dating, social matching, or interpersonal popularity
- Safety clearance, fraud clearance, or proof that a person poses no risk
- Denial, delay, or degradation of baseline goods, services, support, complaints, or accommodations
- Retaliation for reviews, disputes, chargebacks, accommodations, organizing, whistleblowing, or legal rights
- Training or deriving a model intended for any prohibited use

Changing the name, using a proxy, obtaining consent, or routing the decision through a partner does not make a prohibited use acceptable.

### 13.23 Stage-based legal deliverables

#### Stage 0: Public idea and specification

- Accurate project-status and limitation language
- Website privacy notice and accessible experience
- Email and newsletter compliance
- Analytics and cookie minimization
- Contribution and intellectual-property terms
- Domain, naming, and preliminary trademark review
- Source and permission records for published examples
- No collection of conduct, identity-document, employee, or transaction evidence

#### Stage 1: Contributor and advisory network

- Contributor and adviser terms
- Confidentiality, conflict, conduct, and publication rules
- Intellectual-property assignments or licenses where appropriate
- Funding and sponsor disclosures
- No implication that advisers constitute independent governance

#### Stage 2: Pre-pilot organization

- Entity and tax advice
- Founder and project-asset ownership plan
- Partner, contractor, vendor, and data agreements
- Research protocol and data-governance plan
- Written information-security program where applicable
- Privacy, security, accessibility, fairness, labor, and competition impact assessments
- Insurance and incident-response plan
- Written consumer-reporting classification analysis
- Named counsel and regulatory-engagement strategy

#### Stage 3: Limited consumer-affecting pilot

- Final jurisdiction and participant eligibility
- Complete consumer and employee notices, terms, and consent flows
- Business participation and certification agreements
- Approved event, model, proof, and benefit policies
- FCRA and state consumer-reporting operating position
- Nondiscrimination and public-accommodations analysis
- Privacy rights, automated-decision, retention, and breach processes
- Employee and labor consultation
- Independent review, appeal, and remedy authority
- Human-subject, research, or experimentation review where applicable
- Production security, vendor, insurance, audit, and incident readiness

#### Stage 4: Production and expansion

- Multi-jurisdiction compliance program and regional profiles
- Regulatory registrations, licenses, or approvals where required
- Continuing legal monitoring and change management
- Mature OCA legal, governance, certification, enforcement, and financial structure
- Cross-border data and credential arrangements
- Periodic external legal and ethical audit

### 13.24 Legal and ethical stop conditions

The project must pause a feature, partner, pilot, or jurisdiction when:

- Its legal classification is material and unresolved.
- It requires a prohibited use or unreliable consent.
- Required consumer or worker rights cannot be delivered.
- Bias, accessibility, accuracy, security, or privacy risks remain unreasonable.
- A benefit cannot be separated from baseline service.
- A company demands raw history or incompatible secondary use.
- Independent review or meaningful remedy is unavailable.
- Funding or partner pressure compromises the standard.
- The founder or operating team lacks the capacity required by the stage.
- Public claims materially exceed available evidence.

A pause is a designed safety mechanism, not project failure.

### 13.25 Validation requirements

Before Stage 3, independent legal and ethical review must confirm or document:

- The legal role of every participant
- FCRA and state consumer-reporting analysis
- Privacy and automated-decision requirements by jurisdiction
- Nondiscrimination, public-accommodations, and accessibility analysis
- Labor and employee-process requirements
- Identity, biometric, child, and protected-population rules
- Antitrust and competitor-collaboration controls
- Marketing, claim, consent, and benefit representations
- Contracts, insurance, remedies, and regulatory authority
- Intellectual-property, trademark, contribution, and standards licensing
- Security and breach obligations
- Research and human-subject considerations
- Ethical failure-mode testing and prohibited-use enforcement
- Stage readiness and available operational capacity

The legal and ethical implementation profile remains **CANDIDATE** until qualified counsel and independent ethics, civil-rights, labor, privacy, accessibility, and consumer-protection reviewers evaluate the relevant implementation and jurisdictions. The section's rights, prohibitions, and stop conditions are **CONSTITUTIONAL**.

## 14. Threat model and abuse cases

### 14.1 Purpose

The Conduct ecosystem creates value only if people and businesses can rely on its records without turning them into tools of surveillance, coercion, retaliation, discrimination, or social control. Its threat model therefore extends beyond conventional cybersecurity.

The system must protect:

- **Confidentiality:** information is not exposed to unauthorized parties.
- **Integrity:** identities, events, calculations, credentials, proofs, benefits, and review outcomes cannot be improperly created or changed.
- **Availability:** legitimate participants can use, recover, and leave the system without depending permanently on one device, vendor, or institution.
- **Privacy:** participation does not create a cross-company tracking system or reveal more than a specific benefit requires.
- **Fairness:** attacks, errors, business practices, and model behavior do not concentrate harm on protected or historically disadvantaged groups.
- **Dignity and safety:** the system does not invite humiliation, confrontation, harassment, doxxing, or coerced performance of “niceness.”
- **Economic and legal safety:** CQ cannot quietly become a gate for baseline service, employment, housing, credit, insurance, or other prohibited decisions.
- **Institutional legitimacy:** governance, audit, standards, and remedies cannot be captured by the parties they are intended to constrain.

This section consolidates abuse cases introduced throughout the specification and adds cross-system threats that are easy to miss when NCS, VCI, synthesis, identity, proofs, benefits, and governance are considered separately.

The design assumption is not that every participant will act in good faith. It is that some participants will make mistakes, some will face conflicting incentives, some will be under pressure, and some will deliberately exploit the system. Controls must work under all four conditions.

### 14.2 Core requirements

1. The ecosystem MUST maintain a living threat model and risk register from the first public release through production.
2. Threat analysis MUST cover technical attacks, privacy failures, commercial manipulation, human retaliation, institutional capture, model failure, prohibited reuse, and foreseeable social harm.
3. Every material threat MUST identify affected people, preconditions, likely impact, preventive controls, detection, response, owner, residual risk, and validation method.
4. No single security, privacy, governance, contractual, or cryptographic control may be treated as sufficient on its own.
5. Access to raw evidence, identity information, administrative functions, and proof data MUST be denied by default and granted only for an approved purpose.
6. A CQ outage, invalid proof, unavailable wallet, failed status check, or security alert MUST return the consumer to baseline service rather than produce an adverse conduct conclusion.
7. Security and fraud signals MUST NOT become NCS, VCI, CQ, or portable conduct evidence unless they independently satisfy the applicable event, evidence, review, and governance requirements.
8. Businesses MUST NOT use missingness, refusal to present, a challenge, a security hold, or an inconclusive investigation as a negative proxy.
9. Material calculations and records MUST be reproducible from signed, versioned sources. Ordinary operators MUST NOT have a manual score-override function.
10. Critical actions MUST use separation of duties, least privilege, durable audit trails, and independently reviewable authorization.
11. The architecture MUST minimize correlation across issuers, verifiers, industries, devices, and presentations.
12. Controls MUST scale by project stage. Stage 0 requires disciplined protection of a public project, not production infrastructure theater; Stage 3 requires independently validated controls before real people or benefits are affected.
13. High-severity threats that cannot be reduced to an approved residual-risk level MUST pause the affected feature, partner, pilot, or jurisdiction.

### 14.3 Threat-model method

The project will use a simple question sequence:

1. **What are we protecting and how does it work?** Define the people, assets, data flows, decisions, dependencies, and trust boundaries.
2. **What can go wrong?** Identify malicious attacks, mistakes, incentive failures, misuse, foreseeable secondary use, and social consequences.
3. **What will reduce the risk?** Define prevention, detection, response, recovery, accountability, and safe failure.
4. **How will we know the controls work?** Test, simulate, audit, red-team, monitor outcomes, and include affected people in evaluation.

This is consistent with the methodology-neutral starting point maintained by the [OWASP Threat Modeling Project](https://owasp.org/www-project-threat-modeling/). Operational risk management should also be continuous rather than a one-time launch review. The project may map its program to the functions in the [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework), the privacy objectives in the [NIST Privacy Framework](https://www.nist.gov/privacy-framework), and, where statistical or machine-learning systems are used, the Govern, Map, Measure, and Manage functions of the [NIST AI Risk Management Framework](https://airc.nist.gov/airmf-resources/airmf/).

These frameworks guide discipline; they do not substitute for CQ-specific rights, legal analysis, or independent judgment.

### 14.4 Risk register and prioritization

Every material risk entry should include:

| Field | Required content |
|---|---|
| Risk ID and status | Stable identifier; proposed, active, accepted, mitigated, transferred, or closed |
| Scope and asset | The system, record, person, right, benefit, or institution at risk |
| Threat actor | Who can cause the harm, including authorized insiders and well-intentioned participants |
| Preconditions and pathway | What access, circumstance, dependency, or design weakness makes the event possible |
| Harm | Privacy, security, fairness, dignity, physical, economic, legal, institutional, or availability effect |
| Affected groups | Who bears the harm and whether it is concentrated or difficult to detect |
| Controls | Prevention, detection, response, recovery, remedy, and governance measures |
| Assessment | Likelihood, severity, scale, reversibility, detectability, and speed |
| Owner | The party accountable for treatment and the independent party able to review it |
| Evidence | Tests, metrics, incidents, research, audit findings, complaints, and limitations |
| Residual risk | What remains after controls and who may accept it |
| Next review | Trigger, date, model version, or stage gate requiring reassessment |

A simple likelihood-times-impact score is not enough. A risk that is unlikely but irreversible, population-scale, hidden, or concentrated on people with less power may deserve priority over a more frequent but easily corrected operational failure.

Residual risk affecting foundational consumer or worker rights cannot be accepted solely by a product team, participating business, vendor, or founder once the system affects real people. Acceptance must follow the authority defined for the project stage, with independent review for critical risks.

### 14.5 Protected assets

The threat model protects more than a database. Assets include:

- A consumer's identity continuity, authenticators, recovery paths, and right not to be universally identified
- NCS submissions and the safety, privacy, and autonomy of the workers providing them
- VCI source events, business records, corrections, reversals, evidence, and provenance
- Model specifications, weights, thresholds, approved context-transfer rules, versions, and test suites
- CQ views, confidence, coverage, history, challenges, and review outcomes
- Credentials, holder bindings, status information, presentations, consent records, and benefit decisions
- Baseline-service definitions and evidence that CQ is truly optional
- Issuer, verifier, auditor, appeal-provider, and certification keys and trust registries
- Administrative accounts, logs, investigation records, protected reports, and security controls
- Public standards, decision history, marks, domains, repositories, and canonical project communications
- The reputation, independence, continuity, and public-interest purpose of Open Conduct and a future OCA

The people affected by these assets are not interchangeable. A control that protects a business from fraud may expose a consumer to surveillance; a disclosure that helps a consumer challenge an event may expose an employee to retaliation. Threat treatment must evaluate both sides rather than optimize one institution's risk in isolation.

### 14.6 Threat actors

Threat actors may include:

- An individual consumer acting opportunistically or under coercion
- Organized fraud rings operating synthetic or stolen identities
- Workers, managers, contractors, franchisees, or business units
- Participating issuers, verifiers, corporate families, and competing businesses
- Identity, wallet, model, cloud, analytics, communications, and support vendors
- OCA staff, reviewers, auditors, investigators, contractors, and governing members
- External attackers, extortionists, data brokers, advertisers, and stalkers
- Researchers, media, online communities, or activists whose disclosure can create secondary harm despite a legitimate purpose
- Governments, law-enforcement bodies, litigants, regulators, and intelligence services
- Funders, large members, founders, dominant vendors, or professional advisers seeking institutional influence
- Well-intentioned participants who misunderstand a rule, automate a judgment, or repurpose information without appreciating the consequences

The system must not assume that a certified participant, authorized administrator, employee, or government request is automatically safe. Authority changes the available attack surface; it does not eliminate threat status.

### 14.7 Trust boundaries and attack surfaces

Material trust boundaries include:

- Between a natural person and the device, wallet, delegate, or recovery service acting for them
- Between an interaction and the employee or system attributing conduct to it
- Between a business's source system and its signed VCI event
- Between subjective NCS and verified operational evidence
- Between issuers and the synthesis service or consumer-held calculation environment
- Between model governance and production implementation
- Between a credential issuer, status service, holder, and verifier
- Between proof eligibility and the business process granting the promised benefit
- Between first-line support, formal review, independent appeal, audit, and enforcement
- Between a participant and its parent company, affiliates, vendors, or data processors
- Between the public standard and privately implemented code
- Between the founder-led Stage 0 project and any future OCA institution

Every implementation must produce current data-flow and decision-flow diagrams showing what crosses these boundaries, what identifiers are present, what party can correlate events, where keys live, what is retained, and what happens when a dependency fails. Architecture changes that add a new party, identifier, callback, data copy, model, or use require threat-model review.

### 14.8 Stage 0: protecting a one-person public project

Stage 0 does not need a security operations center, continuous audit program, production incident staff, or an elaborate compliance platform. It does need to protect the credibility and continuity of a public idea maintained by one person.

The highest-likelihood Stage 0 threats are practical:

- Takeover of project domains, email, newsletter, social accounts, repositories, or future community tools
- Impersonation of Brent Turner, Conduct, Open Conduct, or a nonexistent “Alliance”
- Phishing, malicious attachments, and fake partnership or funding outreach
- Accidental collection of sensitive stories, receipts, worker names, identity documents, or allegations through open feedback
- Doxxing, harassment, threats, defamatory submissions, spam, or abusive debate
- False quotes, unauthorized marks, misleading commercial claims, or sites purporting to certify participants
- Loss of a laptop, phone, password manager, key, document history, or access to a critical service
- Newsletter, contact-list, analytics, or form-service breach
- Contribution and intellectual-property disagreements
- Founder overload, delayed correction, personal emergency, or project abandonment

The Stage 0 minimum operating profile is:

1. Use separate project accounts where practical, with unique credentials, passkeys or strong multi-factor authentication, stored recovery codes, and at least two recovery methods for critical services.
2. Enable registrar lock, change alerts, auto-renewal, and protected access for project domains. Publish the canonical domains and official contact route.
3. Maintain encrypted, versioned backups of the specification, registers, site content, account inventory, and recovery instructions. Test restoration periodically.
4. Maintain a private account-and-dependency inventory identifying provider, purpose, owner, recovery method, renewal date, and successor access.
5. Use one structured feedback form that tells people not to submit names, receipts, identity documents, private employee details, active disputes, or other sensitive evidence. Do not offer file uploads at launch.
6. Collect the minimum contact and analytics data needed, set short retention where practical, and avoid advertising trackers or sale of visitor data.
7. Moderate public contributions and preserve the right to remove threats, doxxing, spam, impersonation, and unlawfully harmful content without treating disagreement as abuse.
8. Publish a correction, impersonation, and security-contact route. Do not promise continuous monitoring, an individual response, or an incident service level the founder cannot sustain.
9. Review feedback in batches. Quarantine unexpected attachments and links rather than opening them from a privileged device or account.
10. Keep a lightweight change log and contribution record. State the terms under which proposed text, research, or code may be used.
11. Prepare a short emergency-continuity note explaining how a trusted person can secure or pause public channels if the founder is incapacitated. This is account stewardship, not transfer of CQ or OCA governance.
12. Do not collect real conduct events, calculate real-person CQ, issue credentials or proofs, certify companies, or operate benefits.

If a person nevertheless sends sensitive information, the default response is to restrict access, avoid copying it into working documents, assess whether deletion or legal preservation is required, and communicate without taking on an informal adjudication role.

### 14.9 Identity, account, and recovery attacks

| Abuse case | Potential harm | Required control direction |
|---|---|---|
| Synthetic or duplicate enrollment | Fabricated history, benefit farming, or distorted model evidence | Risk-based proofing; duplicate signals; rate limits; human review; false-match testing; no claim of perfect global uniqueness |
| Account takeover | Stolen proofs, exposure of history, malicious challenges, or changed recovery | Phishing-resistant authentication; device and session visibility; step-up checks; rapid lock and recovery; holder binding |
| Identity manipulation through recovery | Theft or manufacture of favorable history, duplicate benefit collection, or loss of a legitimate optional history | Recovery restores consumer-requested valid history only after proportionate checks; high-risk recovery is delayed, notified, logged, and reviewable; abandonment returns the person to baseline rather than forcing adverse history forward |
| Credential lending, sale, or coercion | A proof is used by someone other than its subject | Holder-bound, verifier-bound, purpose-bound, short-lived presentations; proportionate presence or device checks |
| Family or shared-device confusion | Events are attributed to the wrong person | Explicit delegation; interaction-specific attribution; accessible account switching; no automatic transfer of conduct |
| Matching false positive | Two people are merged, producing false history or denial | Conservative matching; corroborating signals; reversible linking; prompt human review; outcome testing across groups |
| Matching false negative | One person operates multiple identities | Layered duplicate resistance; benefit-proportional assurance; pattern review; avoid invasive universal identifiers |
| Recovery-service or identity-provider compromise | Population-scale takeover or correlation | Multiple providers where feasible; scoped assertions; key rotation; vendor exit; minimized centralized evidence |

Identity-risk controls must not become a surveillance system more harmful than the abuse they prevent. A low-value recognition benefit cannot justify centralized biometrics, continuous location tracking, social-graph analysis, or a universal consumer identifier.

### 14.10 Consumer manipulation and coordinated gaming

Consumers may attempt to manufacture favorable evidence, suppress unfavorable evidence, or overwhelm review. Examples include fabricated transactions, collusion with employees, repeated low-risk interactions designed only to farm events, account sharing, intentional threshold gaming, coordinated review campaigns, forged documentation, bribery, or mass challenges intended to freeze valid evidence.

Controls may include:

- Transaction and event provenance tied to a genuine eligible interaction
- Caps and diminishing influence for correlated or routine events
- Independence and concentration measures across issuers and corporate families
- Pattern detection that opens review rather than automatically declaring misconduct
- Evidence-specific rate limits and review triage
- Separation between abuse prevention and portable conduct scoring
- Proportionate suspension of a compromised proof or account while preserving baseline service and review rights
- Testing for false positives and unequal effects before any automated control is deployed

A person who uses a normal right repeatedly is not necessarily gaming the system. Complaints, returns, accessibility requests, cancellations, chargebacks, privacy requests, explanations, and challenges remain protected activities unless specific eligible evidence establishes conduct beyond the exercise of the right itself.

### 14.11 NCS and employee-related abuse

NCS creates risks because a worker's human experience is valuable precisely where it is subjective. Abuse cases include:

- A worker rates a consumer negatively due to bias, disagreement, retaliation, identity, disability, accent, protected activity, or a company-caused problem.
- A consumer pressures, tips, rewards, threatens, identifies, stalks, or retaliates against a worker to influence an NCS response.
- A manager imposes rating quotas, scripts responses, rewards negative scores, or uses NCS to manage employee performance.
- Workers collude to elevate favored consumers or organize a pile-on against a disliked person.
- A compromised worker account submits fabricated responses.
- A business invites NCS only after selected interactions or suppresses inconvenient results.
- NCS is collected while a service outage, unsafe staffing level, broken policy, or management direction makes the customer–worker conflict institutionally caused.

Required controls include eligible-interaction rules, worker authentication, neutral prompts, delayed or grouped disclosure, anti-retaliation policy, protected reporting, manager-access limits, statistical bias monitoring, sampling-integrity checks, correction and review, and separation from employment evaluation.

NCS must never create a direct consumer–employee confrontation loop. Ordinary review protects the employee's identity and asks whether the response was eligible and fairly obtained; it does not force the worker to defend a feeling to the customer or require the customer to prove what another person privately felt.

### 14.12 VCI and issuer manipulation

VCI can appear objective while encoding the business's definitions, data quality, incentives, and operational failures. Threats include:

- Fabricating or duplicating events
- Recording an adverse event before the interaction reaches its final state
- Ignoring reversals, refunds, corrections, waivers, or successful challenges
- Redefining a consumer responsibility after the interaction
- Attributing a company, vendor, weather, policy, accessibility, or system failure to the consumer
- Selectively issuing positive or negative evidence
- Converting profitability, loyalty, spend, negotiating behavior, or service cost into conduct proxies
- Creating synthetic transactions to inflate evidence
- Pressuring standards bodies to classify commercially inconvenient conduct as adverse
- Allowing a parent company to multiply one event across brands or accounts

Each VCI event therefore requires an approved schema, provenance, final-state logic, responsible-party attribution, signed issuance, correction and reversal support, duplicate and correlation controls, and an evidence trail adequate for review. Issuers must be audited for missingness and selection patterns, not merely for the correctness of records they choose to send.

The absence of a positive VCI event cannot become adverse. Neither can a business's unsupported suspicion, internal risk segment, expected customer lifetime value, fraud-model output, or service-cost estimate.

### 14.13 Synthesis and model attacks

The synthesis layer can fail even when every input is authentic. Threats include:

- Quietly changing weights, thresholds, context mappings, recency, caps, or confidence rules
- Choosing a model version that produces a commercially preferred outcome
- Poisoning test or training data
- Optimizing the formula for business value while hiding fairness or dignity costs
- Treating missing evidence, inactivity, or limited digital history as adverse
- Allowing one issuer, corporate family, industry, or incident to dominate a portable result
- Creating false precision that users interpret as moral truth
- Transferring evidence into contexts where it has weak or discriminatory meaning
- Threshold gaming around benefits
- Model drift, population shift, measurement error, or feedback loops
- Using protected-class proxies or variables that measure conformity, wealth, fluency, disability, or ease of service
- Producing explanations that sound plausible without accurately describing the calculation

Required controls include versioned public specifications, reproducible calculation, immutable source references, restricted production release authority, shadow testing, outcome and subgroup analysis, counterfactual and edge-case testing, independent review, model cards or equivalent documentation, rollback, and consumer-readable explanation.

No administrator may type a preferred CQ into a profile. Corrections occur at the governed source or rule and trigger recalculation. Emergency intervention may disable a model, event class, proof policy, or benefit; it may not secretly rewrite individual standing.

### 14.14 Credential, proof, and status attacks

| Abuse case | Required response direction |
|---|---|
| Credential theft or copying | Holder binding, protected storage, device migration, notification, suspension, recovery, and short-lived presentations |
| Replay of a valid proof | Verifier nonce or challenge, audience binding, purpose binding, expiry, and replay detection |
| Fake verifier or consent phishing | Authenticated verifier identity, human-readable request, verified benefit terms, explicit authorization, and safe cancellation |
| Counterfeit issuer or credential | Approved trust registry, signature validation, key status, conformance testing, and issuer transparency |
| Compromised issuer key | Rapid key rotation, credential status action, affected-holder notice, reissuance, audit, and bounded blast radius |
| Status probing | Privacy-preserving status method, caching or list-based validation where appropriate, request minimization, and anomaly monitoring |
| Issuer callback during presentation | Unlinkable or privacy-preserving status design so the issuer cannot routinely observe where the consumer presents |
| Copied screenshot or visual badge | Treat static images as non-authoritative; require cryptographic presentation for material benefits |
| Stale offline proof | Short validity, risk-based offline limits, later reconciliation, and no adverse inference from inability to refresh |
| Correlatable presentation identifier | Pairwise identifiers, fresh proofs, unlinkable presentation methods, verifier separation, and correlation testing |

Proof validation returns only the outcome authorized by the benefit policy. It does not create permission for the verifier to retain the proof, infer unrelated facts, query additional contexts, or request raw history.

### 14.15 Verifier, benefit, and commercial abuse

The most dangerous verifier abuse may look like ordinary business optimization. Examples include:

- Requiring CQ while describing it as optional
- Making baseline service slower, more expensive, less respectful, or materially worse
- Demanding a raw score, event history, overall CQ, or named-competitor evidence when a yes/no eligibility proof is sufficient
- Retaining proofs or combining them with advertising, identity graphs, risk models, or brokered data
- Using CQ for a prohibited decision, proxy, or model-training purpose
- Designing benefits that create discriminatory access, predatory lock-in, or economically coercive consent
- Sharing benefit thresholds or customer treatment strategies with competitors in ways that facilitate coordination
- Inferring or exploiting a named competitor relationship from proof requests, account linkage, or presentation metadata
- Punishing nonparticipation, withdrawal, expired evidence, a challenge, or an unavailable system
- Clawing back completed benefits or changing terms after presentation

Controls include approved benefit policies, data minimization, baseline-service audits, purpose- and audience-bound proofs, retention limits, technical and contractual secondary-use restrictions, consumer receipts, mystery-shopper or outcome testing, complaint analysis, certification, enforcement, and antitrust oversight.

The system must measure the baseline in practice, not merely accept a business's written policy. If nonparticipants systematically wait longer, pay more, lose support, receive fewer options, or encounter stigma, an “upside-only” label is not credible.

### 14.16 Privacy, correlation, and surveillance

Privacy harm can arise without a breach. Lawful, accurate data disclosed too broadly can create surveillance. Material threats include:

- A stable identifier used across companies or contexts
- Proofs that can be linked through serial numbers, timestamps, device signatures, network metadata, or status queries
- Companies joining records through a parent company, shared vendor, loyalty network, identity provider, or data broker
- A wallet, issuer, or status provider observing every presentation
- Precise interaction histories exposing travel, health-related activity, relationships, habits, disputes, or location
- Aggregate reporting that reidentifies a worker, consumer, small group, or unusual incident
- Debugging, analytics, support, or research copies becoming shadow databases
- Public screenshots, voluntary sharing, or social pressure creating a de facto public ranking system

The architecture must pursue disassociability: data should not remain tied to a person, device, issuer, or presentation beyond what the approved function requires. Protections include pairwise identifiers, selective disclosure, fresh presentations, data minimization, local processing where appropriate, retention limits, privacy-preserving status, traffic-analysis review, vendor restrictions, reidentification testing, and consumer visibility into presentations.

Consumer choice does not make every disclosure safe. The system should warn against publishing CQ, avoid public badges and searchable profiles, and refuse product patterns designed around public ranking or social comparison.

### 14.17 Insider, administrator, and vendor abuse

Authorized access is a high-impact threat. Risks include mass export, unauthorized browsing, key theft, audit-log alteration, fabricated corrections, silent model deployment, secret exceptions for a partner, suppression of complaints, disclosure to a stalker or employer, vendor use of data for its own models, insecure support tooling, compromised software updates, and dependence on a provider that cannot be replaced.

Production controls must include:

- Named roles with least privilege and time-limited elevated access
- Strong authentication and managed privileged devices
- Dual authorization for critical changes, key operations, bulk access, and emergency action
- Tamper-evident, append-only audit trails separated from ordinary administrators
- No ordinary manual score override
- Segregated production, testing, analytics, support, and research data
- Synthetic data by default outside production
- Employee screening, training, confidentiality, protected reporting, and sanctions proportionate to role
- Vendor due diligence, subprocessor visibility, incident duties, deletion, audit rights, portability, and tested exit
- Secure development, dependency, update-signing, secret-management, vulnerability, and change-control practices
- Monitoring designed to detect inappropriate access without surveilling consumers or workers more broadly
- Independent review of privileged access and high-impact changes

An audit trail is not a control if the people performing the action can also erase or redefine the log.

### 14.18 Governance capture and institutional manipulation

Technical integrity cannot compensate for captured rules. Threats include:

- A founder, large business, funder, vendor, regulator, or stakeholder class gaining de facto veto power
- Paid participation crowding out consumers and frontline workers
- Volunteer fatigue causing nominal representatives to miss key decisions
- Audit shopping, revolving doors, repeat-contractor dependence, or suppressed findings
- Standards becoming so complex that only incumbents can comply
- Certification fees excluding smaller participants
- Emergency powers becoming ordinary governance
- Commercial pressure to expand allowed uses or weaken baseline protections
- Strategic complaints or litigation used to intimidate critics
- A future OCA operating services it also certifies without effective separation

Controls include balanced voting power, funded participation, conflict disclosure and recusal, term limits, public decision records, independent appeals and audit, funding-concentration caps, accessible standards, auditor rotation, protected dissent, external evaluation, and formal sunset and review of emergency action.

Capture is measured through outcomes as well as organizational charts: whose proposals advance, whose objections change decisions, who can afford participation, who controls information, and who bears unresolved harm.

### 14.18A Platform and pilot-partner capture

A platform-first pilot can concentrate nearly every practical dependency in one company even when OCA holds formal policy authority. The platform may control consumer and worker access, identity matching, event creation, interface placement, engineering priorities, raw evidence, correction fields, benefit fulfillment, communications, telemetry, and whether an independent evaluator receives complete data. Its ability to delay an API, change a schema, invoke platform terms, withhold a client permission, or end the integration can outweigh the coalition's votes.

Required controls include:

- Data rights that give the independent evaluator complete, timely, analysis-ready pilot evidence directly rather than at the sponsor's discretion
- Source-completeness reconciliation against the eligible interaction population, including omitted, failed, reversed, and disputed events
- Independent publication rights for favorable, unfavorable, null, mixed, and stopped results, subject only to narrow privacy, security, and lawful confidential review
- Technical and contractual separation from existing ratings, safety, fraud, matching, enforcement, workforce, marketing, loyalty-segmentation, and customer-risk systems
- No import of legacy platform ratings, free-text notes, hidden risk fields, customer tiers, or prior enforcement labels as CQ evidence
- No exclusivity, first refusal, ownership, patent, data, governance, branding, or commercial term that prevents Open Conduct from remaining an open, multi-implementer standard
- Versioned export, deletion, correction, key, and continuity capabilities that survive platform withdrawal
- Separate acceptance by each operating business and applicable worker body; platform agreement does not silently bind clients, franchisees, contractors, or employees
- Ring-fenced funding for rights, evaluation, remedy, incident response, and wind-down that the platform cannot disable by withholding ordinary operating support

The pilot must test the platform as a potentially conflicted source and operator, not merely trust it as a prestigious partner. A platform's scale, API maturity, or existing rating system cannot compensate for failure of a constitutional gate.

### 14.19 Government access, legal compulsion, and function creep

The ecosystem may receive subpoenas, warrants, regulatory demands, civil discovery, national-security demands, emergency requests, or pressure to make CQ useful for licensing, borders, policing, immigration, sanctions, public benefits, or identity surveillance.

The system must:

- Hold the least data necessary so there is less to compel or expose
- Separate custodians so no single provider automatically holds a complete behavioral history
- Authenticate and narrowly interpret requests, seek legal review, and challenge overbroad demands where lawful and reasonable
- Disclose only what is legally required and technically available
- Notify affected people when legally permitted and publish aggregate transparency reporting
- Avoid building undeclared access mechanisms or exceptional keys
- Treat government use of CQ for eligibility, control, investigation, or surveillance as prohibited unless a future rights-preserving use is explicitly reconsidered through extraordinary public, legal, and governance review
- Include government, litigant, and regulatory access in retention and architecture decisions

Function creep is a top-tier threat even when each individual expansion appears useful. A loyalty benefit can become a fraud signal; a fraud signal can become a safety label; a safety label can become an eligibility gate. New uses therefore begin at prohibited or unapproved—not “allowed unless someone objects.”

### 14.20 Social, emotional, and systemic harm

Some harms emerge from the idea's meaning rather than a software flaw:

- People perform exaggerated agreeableness, avoid legitimate complaints, accept bad treatment, or suppress boundaries to protect a score.
- Workers carry the emotional burden of judging customers or become targets when a customer believes a rating affected them.
- Media, employers, families, or online communities reduce a contextual record to a label of “good” or “bad person.”
- Public screenshots and informal score sharing create status competition or shame.
- Markets emerge for fabricated histories, rented credentials, coercive access, or “score repair.”
- Businesses converge on a narrow cultural model of ease, politeness, fluency, appearance, or consumption.
- People with disabilities, limited English proficiency, trauma, different communication styles, lower income, or weak digital records bear disproportionate error.
- A well-designed benefit system still normalizes rating people across more areas of life.

Mitigations include protected complaint and accommodation rules, neutral language, no public rankings, contextual rather than universal proofs, qualitative research, subgroup outcome testing, worker consultation, consumer education, limits on benefit materiality, and recurring review of whether the system changes behavior in unhealthy ways.

The question is not only whether CQ predicts something. It is whether creating, sharing, and rewarding that prediction improves relationships without asking people to trade autonomy or humanity for favorable treatment.

### 14.21 Availability, dependency, and institutional failure

The ecosystem must assume that devices are lost, networks fail, vendors exit, keys are compromised, standards change, a wallet disappears, a business integration breaks, an operator becomes insolvent, and even a future OCA may fail.

Safe degradation follows this order:

1. Preserve safety and prevent unauthorized disclosure or proof use.
2. Continue ordinary baseline service without adverse inference.
3. Preserve completed and active benefit commitments where practical.
4. Tell affected people what is unavailable, what remains valid, and what they can do.
5. Restore access and verifiability from tested backups or interoperable alternatives.
6. Reconcile delayed events and proofs without duplicating, losing, or unfairly backdating harm.
7. Provide correction and remedy for failures that affected rights or benefits.

Continuity requirements include data and credential portability, documented dependency maps, recovery objectives proportionate to benefit class, tested backups, key recovery and rotation, provider exit plans, open conformance profiles, fallback validation where safe, and financial or contractual responsibility for promised remedies.

A verifier must never translate “system unavailable” into “consumer ineligible because of conduct.”

### 14.22 Detection and monitoring

Monitoring should detect system failure without building a new behavioral-surveillance layer. It may include:

- Authentication and recovery anomalies
- Invalid signatures, replay, counterfeit issuers, key-status changes, and verifier anomalies
- Event duplication, unusual concentration, selective issuance, reversal failures, and schema violations
- Model drift, threshold discontinuities, subgroup disparities, and unexpected missingness
- Baseline-service differences between participants and nonparticipants
- Proof retention, cross-context requests, and excessive verifier queries
- Privileged access, bulk exports, unusual administrative changes, and audit gaps
- Complaint, challenge, appeal, retaliation, accommodation, and worker-safety patterns
- Vendor outages, security advisories, capacity risks, and concentration dependencies
- Governance participation, funding, conflicts, dissent, and decision patterns

Detection thresholds should be protected when disclosure would enable trivial evasion, but the existence, purpose, general operation, oversight, error performance, and consumer consequences of detection systems must not be secret. Sensitive thresholds require independent access and audit.

An anomaly creates an investigation or protective state, not a portable conduct judgment. Monitoring systems must themselves be tested for bias, error, and disproportionate burden.

### 14.23 Incident response, correction, and safe recovery

Every later-stage operator must maintain an incident process covering security, privacy, model, fairness, rights, governance, and availability incidents—not only data breaches.

The process must define:

- Intake and protected reporting
- Severity based on scope, sensitivity, reversibility, affected groups, active benefits, and legal duties
- Immediate containment with the least harmful restriction
- Preservation of relevant evidence and audit history
- Named decision authority and independent escalation
- Timely notice to affected parties, OCA, partners, insurers, and authorities where required
- Continuation or replacement of time-sensitive benefits
- Correction, recalculation, reissuance, deletion, compensation, and collective remedy where appropriate
- Key rotation, credential status action, vendor containment, or model rollback
- Root-cause and distributional-harm analysis
- Public after-action reporting proportionate to privacy and security needs
- Verification that remediation worked

Containment must not erase procedural rights. A consumer whose account or proof is restricted receives a safe explanation and review path unless disclosure would create a specific, documented security risk; any delay must be narrow and reviewed.

When a shared defect affects many people, the responsible operator must identify and correct the affected population where reasonably possible instead of waiting for individual challenges.

### 14.24 Red-team, tabletop, and validation program

Before Stage 3, independent testing must include more than penetration testing. The program should include:

- Technical testing of identity, authentication, recovery, APIs, keys, credentials, status, presentation, storage, and administrative access
- Privacy testing for correlation, reidentification, traffic analysis, status probing, retention, and secondary use
- Adversarial tests of event fabrication, selection, duplication, collusion, threshold gaming, and model manipulation
- Bias and accessibility tests involving people with different communication styles, disabilities, languages, histories, and digital access
- Worker-centered exercises involving retaliation, management pressure, indirect identification, and emotionally charged review
- Consumer exercises involving coercive consent, baseline degradation, unclear proofs, account recovery, and disputed events
- Governance table-tops involving funder pressure, audit failure, emergency power, government demand, legal threat, whistleblowing, and institutional insolvency
- Continuity exercises for provider failure, key compromise, data corruption, mass correction, and OCA transition

Red teams should include consumers, frontline workers, civil-rights and disability advocates, privacy and security specialists, fraud experts, legal reviewers, behavioral researchers, and smaller businesses—not only enterprise security staff.

Findings must have owners, remediation dates, retest requirements, and documented residual risk. A critical finding cannot be waived by the party whose launch schedule or revenue depends on acceptance.

### 14.25 Priority systemic risks

The initial threat program should treat the following as top-tier, even before empirical likelihood is known:

1. Function creep into prohibited or materially different uses
2. Discrimination, proxy measurement, and pressure toward cultural conformity
3. Coercive participation or degradation of baseline service
4. Issuer manipulation, worker coercion, and consumer or employee retaliation
5. Cross-company correlation, data concentration, and breach
6. Identity takeover, false matching, and recovery-based reset
7. Insider or administrator mass manipulation
8. Governance, funding, audit, or vendor capture
9. Unresolved consumer-reporting or other legal classification
10. Business coordination, exclusion, or antitrust harm
11. Doxxing, harassment, and consumer–worker confrontation
12. Model false precision, drift, concentration, and context failure
13. Credential theft, replay, counterfeiting, and verifier phishing
14. State surveillance, compelled disclosure, or mandated use
15. Vendor, wallet, operator, or institutional failure

Prioritization does not imply that all controls must be built during Stage 0. It means the project should not select an architecture, partnership, funding model, narrative, or pilot that makes these risks difficult to control later.

### 14.26 Stage gates and stop conditions

#### Stage 0: founder-led publication

Required: account security, domain protection, backups, minimal data collection, structured feedback, moderation, correction and impersonation channel, and a continuity note.

Not required: production credential security, live score monitoring, enterprise incident operations, continuous audit, or an appeal system—because Stage 0 must not operate those functions.

#### Stage 1: contributor and advisory network

Add: role-based access to project materials, contribution terms, conflict disclosure, participant conduct rules, secure collaboration, protected reporting, and a maintained public risk register.

#### Stage 2: pre-pilot organization and synthetic testing

Add: architecture and data-flow threat modeling, vendor review, secure development, test-data controls, formal risk ownership, incident and continuity plans, independent technical/privacy/fairness review, and red-team exercises. Synthetic or properly governed research data remains separate from production.

#### Stage 3: limited consumer-affecting pilot

Require: production security and privacy controls, independent testing, certified roles, monitored baseline service, worker and consumer protections, review and remedy, legal readiness, vendor and key-management controls, breach and incident operations, safe degradation, and stop authority independent of commercial delivery.

#### Stage 4: production and expansion

Add: continuous monitoring and reassessment, multi-jurisdiction operations, recurring external audit, mature threat intelligence, coordinated vulnerability disclosure, tested large-scale recovery, governance-capture metrics, and regional incident and remedy capability.

The affected feature, partner, benefit, context, or jurisdiction must pause when:

- A critical vulnerability or key compromise cannot be contained.
- Baseline service cannot be preserved during failure or nonparticipation.
- A partner uses CQ for an unapproved or prohibited purpose.
- Material cross-company correlation or unauthorized data retention is found.
- Systemic bias, retaliation, coercion, or model error remains unreasonable.
- Required correction, appeal, or remedy cannot be delivered.
- A critical operator, vendor, or institution cannot meet continuity obligations.
- Governance or funding pressure prevents independent risk treatment.
- Legal compulsion or classification materially changes the risk and has not been resolved.
- Available staffing and operating capacity cannot safely support the system's impact.

### 14.27 Validation requirements

Before a consumer-affecting pilot, independent reviewers must verify or document:

- Complete data, decision, identity, credential, benefit, and administrative flows
- Threat actors, trust boundaries, abuse cases, protected groups, and critical dependencies
- Identity, authentication, recovery, duplicate-resistance, and delegation controls
- NCS and VCI provenance, selection, retaliation, reversal, and correction controls
- Model integrity, versioning, reproducibility, fairness, explanation, and rollback
- Credential, proof, status, verifier, replay, phishing, and correlation resistance
- Baseline-service monitoring and protection against coercive participation
- Least privilege, separation of duties, key management, logs, and absence of manual score override
- Vendor, wallet, cloud, communications, and operator continuity and exit
- Privacy, retention, research, analytics, support, and government-access controls
- Consumer, worker, reviewer, and whistleblower safety
- Incident notification, collective correction, remedy, and safe degradation
- Governance-capture, funding, audit-independence, and emergency-power controls
- Penetration, privacy, fairness, accessibility, adversarial, and tabletop testing
- Risk owners, residual-risk authority, stop conditions, and retest schedule

The risk-management implementation is **CANDIDATE** until the architecture, pilot context, vendors, benefits, jurisdictions, and operating roles are known. Its principles and stop conditions are **CONSTITUTIONAL** and constrain those choices now; implementation details must be validated before the system affects real people.

---

# Part IV: Implementation

## 15. Pilot and phased rollout

### 15.1 Purpose

The pilot is not a smaller version of the entire Conduct ecosystem. It is a sequence of deliberately limited tests designed to answer whether the idea creates real value without creating unacceptable harm.

The project should not begin by launching NCS, VCI, an overall CQ, portable credentials, multiple industries, and a catalog of benefits at once. That approach would make it difficult to determine what worked, what failed, and which part caused a consumer, worker, business, or legal problem.

Instead, the rollout should proceed from public idea, to simulation, to human research, to private consumer visibility, to low-risk benefit use, to cross-company portability, and only then toward a broader ecosystem. Each step must have an explicit question, bounded scope, review point, and safe exit.

The goal of the pilot is evidence—not momentum theater, a large waitlist, a headline partnership, or a prematurely impressive score.

### 15.2 Core requirements

1. The rollout MUST follow the governance stages defined in Section 12.28. A pilot label does not authorize work that exceeds the project's actual governance and operating capacity.
2. Every experiment MUST state its hypothesis, population, context, data, intervention, benefit, duration, measures, risks, stop conditions, and decision rule before it begins.
3. The project MUST use the smallest reversible test capable of answering the current question.
4. Stage 0 and Stage 1 MUST NOT collect real conduct events, calculate real-person CQ, issue usable proofs, certify participants, or affect real benefits.
5. Stage 2 MAY use synthetic data, prototypes, role-play, and appropriately governed research data, but MUST NOT operate real CQ benefits or create unapproved consumer consequences.
6. Any use of real NCS or VCI evidence, real-person CQ, credentials, proofs, or benefits is Stage 3 even if the test is small, invitation-only, unpaid, or described as research.
7. A Stage 3 pilot MUST be adult-only and limited to one approved jurisdictional profile unless specialist review expressly authorizes otherwise.
8. The first pilot MUST begin with one narrow industry context and a limited event taxonomy. It MUST NOT launch an overall CQ.
9. Consumers and participating workers MUST knowingly opt in under separate, understandable terms appropriate to their roles. No silent enrollment or hidden employee participation is permitted.
10. Refusal, withdrawal, insufficient history, system failure, and failure to qualify MUST preserve baseline service and MUST NOT create a negative marker.
11. The first benefits MUST be additional, low-materiality, easy to explain, easy to fulfill, and capable of correction or replacement.
12. Pilot formulas and model comparisons MUST run in simulation or shadow mode before they affect benefit eligibility.
13. A consumer-affecting pilot MUST provide explanation, challenge, independent appeal, incident response, and remedy from its first live release—not after scale.
14. Pilot partners MUST NOT receive model control, special event weight, privileged consumer data, immunity from audit, or permanent governance rights.
15. Every pilot MUST end, renew, or expand through an affirmative gate review. It MUST NOT drift into production because people continue using it.
16. Adoption, engagement, commercial interest, or positive anecdotes alone MUST NOT justify expansion.

### 15.3 Two related ladders

The specification uses two connected but different progressions.

#### Organizational stages

- **Stage 0:** Founder-led public idea and specification
- **Stage 1:** Contributor and advisory network
- **Stage 2:** Pre-pilot working organization
- **Stage 3:** Limited consumer-affecting pilot
- **Stage 4:** Production ecosystem and mature OCA

These stages describe who has authority, what capacity exists, what data or impact is permitted, and what safeguards are required.

#### Evidence steps

- **Step A:** Public concept and structured feedback
- **Step B:** Synthetic simulation and edge-case testing
- **Step C:** Prototype and human-understanding research
- **Step D:** Real-event shadow pilot with no business-visible CQ benefit
- **Step E:** Private consumer view and full review rehearsal
- **Step F:** Low-risk company-specific benefit proof
- **Step G:** Cross-company industry portability
- **Step H:** Carefully bounded expansion

Evidence steps do not override organizational requirements. Steps D through H involve real people or real conduct evidence and therefore sit inside Stage 3, with the governance, legal, security, review, and staffing requirements that Stage 3 entails.

### 15.4 The questions the rollout must answer

The pilot program should test a limited set of foundational hypotheses.

| Hypothesis | Question |
|---|---|
| H1: Measurable human conduct | Can verified frontline workers provide NCS input that is useful, voluntary, safe, and sufficiently consistent without rating deference or identity? |
| H2: Verifiable responsibility | Can VCI record a small number of consumer-controlled responsibilities accurately, including causation, reversals, and business-caused failures? |
| H3: Complementary evidence | Does combining NCS and VCI add meaningful information beyond either record alone without hiding contradictions? |
| H4: Human comprehension | Do consumers understand what the dimensions, confidence, context, and proof mean without hearing a judgment of moral worth? |
| H5: Voluntary sharing | Can consumers make an informed, unpressured choice to present a minimized CQ proof? |
| H6: Real benefit | Does a modest benefit feel valuable enough to make good conduct visible without becoming coercive or baseline service by another name? |
| H7: Business value | Do participating businesses and frontline workers experience better interactions, greater recognition, lower friction, or other measurable value? |
| H8: Safe portability | Does evidence from one independent company create useful trust at another without exposing named relationships or enabling tracking? |
| H9: Fairness and accessibility | Are participation, error, eligibility, challenge, and benefit outcomes acceptably distributed across relevant groups and access needs? |
| H10: Operational viability | Can issuance, explanation, review, proof, benefit fulfillment, audit, and remedy operate accurately at a sustainable cost and workload? |

The pilot is unsuccessful if it creates business lift while failing consumer, worker, rights, or safety hypotheses. Commercial value cannot compensate for coercion, discrimination, unreliable evidence, absent remedies, or a system people misunderstand as a universal measure of character.

### 15.5 Stage 0: publish, listen, and simulate

Stage 0 is the current operating state. Its purpose is to make the idea understandable, invite rigorous participation, improve the specification, and determine whether enough credible interest exists to justify a more formal project.

#### Permitted work

- Publish the newsletter and supporting explanation
- Launch conduct.is and openconduct.org as proposal sites
- Publish selected specification materials, decisions, open questions, and status
- Gather structured comments, expertise, interest, and potential-partner signals
- Conduct bounded interviews and public conversations that do not solicit case files
- Build synthetic datasets representing normal, exceptional, disputed, biased, manipulated, and missing-data scenarios
- Simulate NCS, VCI, CQ, recency, confidence, concentration, and context-transfer designs
- Create nonfunctional diagrams, interface concepts, example credentials, and proof-request mockups clearly labeled as prototypes
- Maintain a research and evidence log

#### Prohibited work

- Soliciting or storing identifiable conduct histories, receipts, employee names, identity documents, or transaction evidence
- Rating real consumers or workers
- Connecting mock scores to real identities
- Issuing a credential or proof that could be mistaken for operative
- Claiming that a model, business, benefit, or implementation is validated or certified
- Promising individual review, support, or response times
- Accepting a partnership that quietly crosses into Stage 2 or Stage 3 operations

#### Stage 0 deliverables

A sustainable Stage 0 should produce:

1. A clear public explanation of the idea and its present status
2. A working specification, decision register, open-question register, and change log
3. A single structured interest and feedback path
4. An initial synthetic scenario library
5. A simulation plan for provisional formulas and edge cases
6. A short candidate-industry and candidate-benefit comparison
7. A list of credible contributors, reviewers, funders, and prospective partners who have chosen to identify themselves
8. A founder-capacity and escalation checklist
9. A platform and partner map separating lighthouse targets, executable targets, workflow capabilities, likely incentives, access paths, and disqualifying conditions

Stage 0 does not need a predetermined deadline. It advances only when credible people and organizations are willing to contribute enough capacity to make the next stage real. The founder may pause, narrow, or continue publication without treating the absence of rapid institutional development as failure.

### 15.6 Stage 1: build a bounded contributor network

Stage 1 begins when the idea attracts several credible contributors or organizations prepared to do defined work, but before a prototype or consumer-affecting pilot exists.

The objective is to test whether the idea improves under serious scrutiny and whether potential contributors can collaborate without creating ceremonial governance or an unmanageable community operation.

Work may include:

- Time-boxed reviews of consumer rights, worker experience, law, fairness, accessibility, identity, credentials, security, behavioral science, loyalty, and industry operations
- Scenario and assumption workshops
- Review of the initial NCS and VCI taxonomies
- Evaluation of candidate industries and benefits
- Critique of synthetic simulations and model assumptions
- Recruitment of potential research, technical, and governance leaders
- Exploration of grants, sponsorship, or partner funding under disclosed terms

Contributors should receive bounded requests with a question, requested output, expected time, deadline, and publication status. A general invitation to “join the movement” is not an operating plan.

Stage 1 advances when there is evidence of sustained capacity across the perspectives needed for Stage 2. A list of prominent advisers without work product, consumer and worker representation, or operating capacity is not sufficient.

### 15.7 Stage 2: simulation, prototyping, and pre-pilot proof

Stage 2 converts the concept into testable system behavior without yet granting a real CQ benefit.

#### Required workstreams

1. **Pilot definition:** Select one candidate industry, interaction, jurisdiction, participant population, event set, benefit class, and portability pathway.
2. **Synthetic simulation:** Generate known-truth data and stress the candidate models across sample sizes, recency, context, contradictions, concentration, manipulation, bias, and missingness.
3. **Workflow prototyping:** Test NCS prompts, consumer explanations, private CQ views, proof requests, consent, challenges, employee protection, and benefit fulfillment with prototypes.
4. **Architecture proof:** Demonstrate event signing, correction, calculation, credential issuance, selective proof, status, recovery, audit, and deletion using synthetic identities and events.
5. **Rights and legal readiness:** Complete applicable legal classification, privacy, consumer-reporting, labor, accessibility, fairness, research, competition, and benefit review.
6. **Operating readiness:** Establish the entity, interim governance, staffing, vendors, contracts, insurance, support, appeal, incident, audit, remedy, and continuity required for Stage 3.
7. **Partner readiness:** Validate source data, frontline workflows, baseline service, employee participation, benefit operations, and ability to correct records.
8. **Evaluation design:** Predefine hypotheses, metrics, sample and duration logic, analysis, thresholds, reporting, and stop conditions.

#### The simulation program

The simulation program should not attempt to discover one magical formula. It should expose the behavior and tradeoffs of candidate approaches.

Synthetic scenarios must include:

- New consumers with little evidence
- Long, stable histories and long dormant periods
- NCS and VCI agreement and contradiction
- One severe event among many routine events
- Many easy transactions designed to farm history
- Events concentrated in one issuer or corporate family
- Business outages and mass reversals
- Incorrect attribution and identity merge or split
- Biased NCS patterns and selective sampling
- Accessibility requests, complaints, cancellations, returns, and chargebacks
- Collusive employees, businesses, and consumers
- Different transaction volumes, spending levels, languages, communication styles, and digital access
- Context transfer between related and unrelated industries
- Model changes and credential migration
- Disputes, successful corrections, inconclusive reviews, and collective remediation

Each candidate should be evaluated against the same scenario set. One-scope research should compare K3 capped arithmetic with K6 weakest-link anchored synthesis, the two-dimensional explanation control, and proof-only output. Overall-CQ research should compare L4 contradiction-aware capped synthesis with L3 equal-context capped synthesis and the no-overall control. The least complex candidate that satisfies the approved criteria should advance; either workstream may still conclude that no score should be produced for a particular state or scope.

No formula should be selected because it produces the highest number of eligible consumers, the largest projected revenue, or the result preferred by a prospective partner.

#### Human-understanding research

Prototype research should examine whether people can accurately answer:

- What information comes from human experience and what comes from operational records?
- What does confidence or insufficient history mean?
- Is this company-specific, industry-specific, or broader?
- What will the business learn if the proof is shared?
- What benefit is offered and what happens if the person declines?
- How can an event or result be questioned?
- Does the interface imply that CQ measures whether someone is a good person?

Research should include adults with varied disabilities, languages, communication styles, travel or purchasing frequency, income, digital access, and comfort with identity technology. Accessible and assisted paths must be tested as primary workflows, not deferred exceptions.

Research consent is separate from consent to participate in CQ or present a proof. Participation should be fairly compensated where appropriate, and employment or customer relationships must not create pressure to participate.

### 15.8 Platform-first partner and pilot strategy

The first pilot should be selected by **workflow readiness as well as industry fit**. A company or platform that already knows the consumer, records the interaction, gives a worker or provider a post-interaction interface, supports integrations, and can grant a benefit removes several expensive unknowns at once.

This changes the provisional pilot strategy. The project should not begin only by asking, “Which hotel or restaurant wants to try CQ?” It should also ask, “Which digital platform already sits between verified customers, completed interactions, employees or providers, business data, and downstream partners?”

The attractive platform characteristics are:

- Consumers already have authenticated or reliably matched accounts.
- Interactions have durable identifiers, timestamps, participants, and final states.
- Workers, agents, hosts, drivers, or operators already use a post-interaction product surface.
- The platform distinguishes the customer, worker, business, payer, booker, guest, and other relevant roles.
- APIs, webhooks, applications, or partner-integration programs can support governed event exchange.
- Corrections, reversals, cancellations, accommodations, and business-caused failures are recorded.
- The platform already supports loyalty, rewards, benefits, guest recognition, or linked partner accounts.
- Multiple independent businesses or contexts can eventually participate without one custom integration per location.
- The platform can isolate CQ from safety, fraud, enforcement, employee performance, advertising, and unrelated profiling.
- Its business leadership has a reason to improve interactions, loyalty, worker experience, or trust now.

Digital readiness does not remove the need for rights, evidence quality, worker protection, or independent governance. It improves execution leverage.

#### Independence before integration

The first partner is likely to have more operational leverage than OCA. The readiness process must therefore begin with non-compensating gates before scoring strategic upside. A candidate does not advance merely because it offers a large user base, recognizable brand, capable API, funding, or a persuasive executive sponsor.

The candidate must first accept:

- Independent rights, legal, technical, privacy, labor, accessibility, appeal, and evaluation access appropriate to the pilot
- Complete source-population reconciliation and direct evaluator access to required pilot data
- Publication of unfavorable, null, mixed, and stop findings under a predeclared policy
- Separation from punitive ratings, safety, fraud, matching, enforcement, employee performance, marketing, advertising, loyalty segmentation, and unrelated customer analytics
- No legacy rating, note, tag, risk, enforcement, or customer-tier import into NCS, VCI, CQ, confidence, or eligibility
- Consumer and worker correction, challenge, appeal, remedy, withdrawal, and baseline rights
- No exclusive ownership, proprietary fork, preferential standards control, or restriction on participation by competitors and alternative implementers
- Funded continuity and clean exit, including data export, correction, deletion, benefit completion, incident response, final evaluation, and public reporting

Only candidates that pass every applicable constitutional gate should be compared on execution speed, integration leverage, distribution, executive attention, cost, benefit capability, and expansion potential. A commercially attractive candidate that fails one non-compensating gate is a discovery relationship, not a pilot partner.

#### The pilot coalition

A platform-first pilot should usually be a small coalition with distinct roles:

1. **Workflow and integration platform:** Provides the existing employee or provider interface, interaction events, account connection, and technical distribution surface.
2. **Anchor operating business:** Supplies real interactions, workers, baseline service, benefit fulfillment, corrections, and operational accountability.
3. **Independent portability participant:** Provides the second business or context required to test whether earned conduct can travel.
4. **Open Conduct pilot organization:** Maintains the common specification, rights, event rules, model, proof policy, conformance, and public change record.
5. **Independent evaluation and rights functions:** Provide consumer and worker representation, research, audit, appeal, security, privacy, fairness, and legal review.

One organization may perform more than one role during an early release only where the separation, conflicts, data access, and exit plan are explicit. The platform cannot define the conduct standard unilaterally merely because it controls the interface.

For Release 3D, the anchor and portability participant must be independent in substance: not under common control, not operating one shared customer-treatment policy, and not merely two brands inside the same data or loyalty system. A same-group test may validate integration, but it does not establish independent portability or competition safety.

#### Multiple outreach lanes; one live pilot

The project should pursue several partnership lanes during Stage 0 through Stage 2. That creates several credible ways into the market without multiplying the first live experiment.

| Outreach lane | Candidate examples | Why it is attractive | Primary caution | Recommended use |
|---|---|---|---|---|
| Existing two-sided interaction platforms | Uber, Airbnb | Accounts, completed interactions, provider feedback, identity continuity, large user bases, and an already visible need to govern how customers are treated | Existing ratings may affect matching, booking, safety, suspension, or removal; CQ cannot inherit punitive uses or proprietary lock-in | High-ambition lighthouse conversation and potential pilot if CQ is technically and institutionally separated from enforcement |
| Vertical hospitality and restaurant systems | Toast, Resy, property-management and reservation platforms | Employee-facing software, guest or payment records, reservations, multi-location reach, loyalty or guest-recognition workflows, and access to independent operating businesses | Not every diner is authenticated; staff notes can contain bias or sensitive data; platform access and restaurant permissions vary | Provisional leading execution lane for a narrow reservation or hospitality pilot |
| Customer-support and contact-center systems | Help Scout, NICE CXone, and comparable service platforms | Authenticated or matched customers, named agents, timestamped conversations, resolution states, applications, APIs, webhooks, and distribution across industries | Support interactions are selection-biased toward problems; the business may have caused the issue; complaint and accommodation rights are easily chilled | Parallel Stage 2 workflow lab and possible later live pilot after strong causation and protected-activity controls |
| Loyalty and partner-account networks | Platforms with linked airline, hotel, restaurant, retail, or mobility rewards | Existing account-linking, benefit, reconciliation, and cross-brand relationship infrastructure | Loyalty measures spending and affiliation, not conduct; partner graphs can become correlation and marketing systems | Benefit and portability infrastructure, never a substitute for NCS, VCI, consent, or context rules |

The examples are targets for learning and outreach, not endorsements, commitments, or claims of partnership.

#### Why the platform thesis is credible

Current platform capabilities illustrate the strategic opening:

- Uber already operates two-sided ratings and says its [matching technology may consider ride history, ratings, and prior feedback](https://www.uber.com/us/en/safety/our-commitment/). It supports a current consumer-linked rewards relationship with [Delta](https://www.uber.com/us/en/newsroom/uber-and-delta-partnership/) and has also operated one with [Marriott Bonvoy](https://www.uber.com/us/en/newsroom/uber-and-marriott-bonvoy/). That combination makes the company a particularly clear example of rating infrastructure, verified interactions, account linking, and partner benefits living in one ecosystem. It also means CQ would require strict separation from Uber's existing safety and matching systems.
- Airbnb already has guest accounts, completed reservations, two-sided reviews, and [guest ratings that may affect future booking and account outcomes](https://www.airbnb.com/help/article/3287). Airbnb also maintains a [software partner ecosystem](https://www.airbnb.com/software-partners). This proves both the relevance of the problem and the need for CQ's different proposition: consumer-controlled, contextual, portable, and upside-only rather than another exclusion signal.
- Toast provides APIs for restaurant, order, labor, analytics, guest, and loyalty functions. Its [API overview](https://doc.toasttab.com/doc/devguide/apiOverview.html) and [outbound integration model](https://doc.toasttab.com/doc/devguide/apiUsingToastOutboundApis.html) show how a third-party standard could connect to existing restaurant operations, while Toast's [Guest CRM](https://pos.toasttab.com/products/guest-crm) brings transactions, reservations, and feedback into guest profiles.
- ResyOS already gives restaurant teams reservation records, guest profiles, staff-attributed notes and tags, and group-level sharing controls. Its documentation shows that [phone numbers identify guest profiles](https://helpdesk.resy.com/resyos-faq-B1ciD7Uu), staff select who completed a reservation, and [guest or visit notes](https://helpdesk.resy.com/how-to-add-visit-notes-and-guest-notes-in-resyos-BkmZfvmI_) can appear in the employee workflow. Those features could reduce integration friction, but free-form notes must not be imported as CQ evidence.
- Help Scout exposes customer, agent, conversation, status, rating, and reply events through [signed webhooks](https://developer.helpscout.com/webhooks/) and lets integrations place [applications in the agent's conversation sidebar](https://developer.helpscout.com/apps/). This is almost exactly the kind of existing worker interface a CQ prototype could use without asking support agents to adopt a separate tool.
- [NICE CXone supports interaction and CRM integration across major enterprise service systems](https://www.nice.com/-/media/niceincontact/resources/datasheets/2024/07/datasheet--cxone-crm-integrations.ashx?rev=669f48b8e14b4e6396c419ca7292b41a). That makes contact-center infrastructure a potentially large distribution layer, though its enterprise complexity and the sensitivity of support conversations make it more appropriate for a controlled workflow and causation test before portable scoring.

These examples support a platform-first outreach thesis; they do not establish that their current permissions, data, terms, or business priorities would allow a CQ pilot. Access must be confirmed directly and governed through a specific agreement.

#### Strategic target portfolio

The project should maintain two related target lists:

**Lighthouse targets** are recognizable companies whose attention could validate the size of the problem, attract expertise, and reveal how mature rating, identity, loyalty, and partnership systems work. Uber, Airbnb, Toast, Resy, NICE, major hotel groups, airlines, and comparable platforms belong in this category.

**Executable targets** are platforms or operating businesses with enough product flexibility, leadership access, data quality, worker cooperation, and funding to run a bounded test. They may be smaller than the lighthouse companies and could include a restaurant group using Toast or Resy, a digital hospitality operator, a customer-support platform with two willing clients, or an integration vendor serving several independent businesses.

The attention strategy must not become an execution dependency. A large company can take a long time to engage, require exclusive control, or decline to experiment for reasons unrelated to the idea. The project should be able to learn and build with an executable coalition while continuing lighthouse conversations.

#### A two-arrow initial focus

The recommended initial business-development focus is:

1. **Consumer interaction platforms:** Prioritize companies that already connect authenticated consumers, completed transactions, employee or provider workflows, and loyalty or benefit systems. Toast and Resy represent a potentially practical restaurant route; Uber and Airbnb represent more ambitious native-rating routes.
2. **Customer-support platforms:** Explore Help Scout, NICE, and comparable systems as a horizontal workflow route that could reach many businesses through one integration.

This is a sound way to have “a few arrows to fire” during discovery. It does **not** mean launching a restaurant pilot and a support pilot at the same time. The discovery lanes should compete against one common readiness rubric. The first coalition that can meet the complete rights, data, worker, benefit, governance, and evaluation requirements becomes the pilot candidate.

#### Support is strategically powerful but evidentially difficult

Customer support may be the most reusable integration surface because the customer and employee are already interacting in a recorded digital channel. It is also one of the hardest contexts in which to interpret conduct fairly.

People contact support because something went wrong. The business may have caused the problem. Conversations can involve disability accommodation, fraud, billing, safety, privacy, refunds, complaints, legal rights, or financial hardship. An agent may be following a frustrating script or lacking authority to solve the issue. A model trained on “easy” support customers could reward silence and punish people who advocate for themselves.

For those reasons, the first support-platform work should ordinarily be a Stage 2 integration and scenario lab:

- Prototype the employee prompt in the existing agent interface.
- Test how the system distinguishes legitimate intensity from abuse.
- Use VCI to represent cause, resolution, company responsibility, and reversals.
- Exclude complaint frequency, sentiment, handle time, escalation, refund request, accommodation, legal language, and cost-to-serve as adverse conduct.
- Test whether an interaction is even eligible for NCS before asking the agent.
- Keep agent performance systems and CQ completely separate.
- Run synthetic and carefully governed shadow analysis before any portable proof.

Support could later become a valuable cross-industry CQ context, but it should earn that role through unusually strong evidence that it does not suppress consumer voice.

#### Revised context posture

| Platform/context route | Strengths | Pilot complications | Initial posture |
|---|---|---|---|
| Restaurant platform plus independent venues | Existing employee tools, reservations or payments, guest recognition, loyalty, frequent events, and cross-venue reach | Booker versus diner, account gaps, tipping, worker turnover, notes, no-show causation, and platform concentration | **Provisional leading execution route**, beginning with a narrow reservation or completed-transaction event set |
| Existing two-sided platform such as Uber or Airbnb | Product-native rating behavior, authenticated accounts, completed interactions, provider workflows, and clear consumer relevance | Existing punitive systems, worker classification, safety, discrimination, platform control, and limited willingness to share data | **Leading lighthouse route** and possible pilot if CQ is independently governed and separated from enforcement |
| Customer-support platform plus two business clients | One integration can reach many companies; named agents, customer records, resolution events, APIs, and sidebar workflows | Problem-biased sample, company causation, complaint rights, sensitive content, agent surveillance, and unclear benefits | **Parallel workflow route**, initially Stage 2 and shadow-only |
| Transient hotel platform or digital hospitality operator | Named guest, reserved stay, multi-step service, frontline and operational signals, loyalty, and portability | Shared bookings, damage, multiple workers, franchises, accessibility, corporate travel, and financial terms | **Strong alternate execution route**, never residential housing eligibility |
| Airline ecosystem | Compelling portability, identity-rich records, loyalty, frontline need, and partner networks | Safety, regulation, unions, disruptions, international scope, shared itineraries, and material benefits | **Narrative anchor and expansion target**, unless an unusually ready partner supports a narrow pilot |

The provisional recommendation is therefore no longer “start with hotels.” It is:

> Start with the most capable digital interaction platform and operating coalition that can test one narrow context safely. Prioritize restaurant and hospitality platforms for executable outreach, pursue Uber and Airbnb as lighthouse native-rating conversations, and develop customer support as a parallel workflow prototype.

The final pilot still uses one context, a limited event set, and one low-risk benefit. Platform reach becomes an expansion advantage after the first bounded release works; it is not permission to expose every platform customer at once.

This partnership strategy is a **CANDIDATE** until direct partner conversations confirm product access, data rights, worker participation, legal posture, benefit capability, independent-business reach, funding, and willingness to accept Open Conduct governance.

### 15.9 Minimum viable pilot ecosystem

The minimum viable pilot should be defined by what it can prove, not how few components can be built.

At full Stage 3 portability, the minimum ecosystem includes:

- One approved industry context and jurisdictional profile
- Adult, affirmatively enrolled consumers
- Verified participating frontline workers with protected, voluntary NCS workflows
- A limited set of approved VCI responsibility events
- At least two operationally independent businesses before cross-company portability is claimed
- An issuer function for signed events
- A governed synthesis function or consumer-side equivalent
- A private consumer view showing one contextual CQ first, with the protected NCS- and VCI-derived inputs, evidence status, and history available beneath it
- A proof function that discloses benefit eligibility rather than raw score or history
- One low-risk approved benefit policy
- Documented baseline service and parity monitoring
- Identity, authentication, recovery, correction, and withdrawal
- Unified challenge, independent appeal, incident response, and remedy
- Audit, evaluation, and public aggregate reporting
- A sunset and data-disposition plan

A single business may participate in earlier Stage 3 steps to test real-event collection, private consumer display, correction, and company-specific proofs. It cannot establish the defining portability claim alone. At least two genuinely independent companies are necessary before the project can say that conduct earned with one business travels to another.

Independence must be assessed in substance. Two brands under one parent, one franchise system, one platform-controlled marketplace, or one shared decision maker may be useful operational participants but do not provide the same evidence as independent issuers and verifiers.

### 15.10 Narrow initial event taxonomy

The first live taxonomy should include only events that are understandable, attributable, reversible, and supported by reliable evidence.

For a provisional transient-lodging pilot, candidates may include:

#### NCS

- A single neutral, protected post-interaction prompt completed by an eligible frontline worker
- Optional structured context indicating the type of direct interaction
- No free-form allegation transmitted to the consumer or portable score
- Interaction-level caps when multiple employees participated

#### VCI

- Reservation honored or canceled under the disclosed terms
- Required payment completed or an approved payment plan fulfilled
- Checkout or departure responsibility completed where clearly defined and under consumer control
- An agreed exception, accommodation, waiver, dispute, or business-caused failure properly neutralized

The first pilot should exclude:

- Damage, theft, violence, safety, fraud, intoxication, law-enforcement, or security conclusions
- Profitability, spend, loyalty tier, tips, complaint frequency, negotiation, or service cost
- Accessibility requests, lawful complaints, chargebacks, cancellations, returns, or disputes as adverse events by themselves
- Free-form worker accusations used as VCI
- Events attributed to accompanying guests, corporate arrangers, caregivers, or shared reservations without explicit responsibility
- Cross-industry transfer

Starting with a small taxonomy makes the pilot less dramatic but more interpretable. Additional event classes should be added only when a current hypothesis requires them and their evidence and review rules are ready.

### 15.11 Pilot representation and model posture

The first live consumer experience should test one company- or tightly bounded context-specific CQ while preserving NCS- and VCI-derived inputs as separately understandable records beneath it. The working consumer display is `1.00–5.00` with two decimal places. It is contextual, private, and provisional—not a universal rating.

The provisional live sequence is:

1. Run NCS, VCI, K3 CQ, non-score states, correction, and proof policy in shadow mode without affecting service.
2. Show the consumer a private company-specific CQ, named scope, evidence state, and **How your CQ was formed** explanation.
3. Test whether the consumer understands the score, the two inputs, the five-point scale, hundredths, limitations, changes, and challenge route.
4. Issue a company-specific yes/no benefit proof only after the underlying workflow performs acceptably.
5. Introduce an approved context-specific portable proof when at least two independent businesses and exact transfer mappings are ready.
6. Calculate L4 overall CQ only in research shadow mode after multiple context families qualify; do not use it for the initial benefit pilot.

Named-company and named-competitor disclosure remains outside the ordinary pilot proof; the verifier receives only the approved eligibility result unless a separate high-risk research test is explicitly authorized. A rounded displayed CQ is never the sole benefit rule.

### 15.12 Benefit selection

The first benefit should test whether recognition has value without turning CQ into a high-stakes eligibility system.

Preferred characteristics:

- Genuinely additional to a documented reasonable baseline
- Modest enough that declining CQ remains a realistic choice
- Easy for consumers and employees to understand
- Available with enough consistency to evaluate
- Low fraud value and little resale value
- Not safety-, rights-, complaint-, identity-, or accessibility-related
- Delivered during a defined interaction and not retroactively withdrawn
- Easy to replace or compensate if the system fails
- Operationally funded and not dependent on employee discretion at the moment of service

Potential early directions include a clearly labeled thank-you, an additive welcome amenity, a non-scarce convenience, or another small experience enhancement. Exact benefits require partner, consumer, worker, legal, accessibility, fairness, and baseline review.

The first pilot should not use CQ for:

- Deposits, holds, credit-like terms, damage responsibility, insurance, or material pricing
- Safety or security screening
- Faster complaint, refund, legal-right, or accommodation handling
- Access to scarce essential capacity
- Avoidance of standard fees, requirements, or service friction that nonparticipants ordinarily bear
- A benefit so valuable that reasonable consumers feel compelled to enroll

The pilot should test both whether recipients value the benefit and whether nonparticipants perceive or experience inferior baseline treatment.

### 15.13 Stage 3 pilot release steps

Stage 3 should proceed through separately approved releases.

#### Release 3A: live-event shadow operation

- Real participants and real eligible interactions under full Stage 3 protections
- NCS and VCI collected under full access, notice, challenge, and correction rights; consumers can review individual records on the protected schedule required for worker safety
- Candidate synthesis calculations run in shadow mode and are not yet shown as a consumer CQ view
- No CQ proof affects a business benefit
- Full correction, challenge, security, and withdrawal workflows exercised

Purpose: validate attribution, data quality, employee experience, causation, reversals, privacy, fairness, and operational load before a business acts on CQ.

#### Release 3B: private consumer view

- Consumers can see one private company-specific CQ, its scope and evidence state, and the two separately inspectable inputs beneath **How your CQ was formed**
- Consumers can use explanation, “I disagree,” review, and correction paths
- Businesses do not receive the private view or raw history
- No overall CQ is shown

Purpose: establish comprehension, perceived legitimacy, emotional response, review performance, and record accuracy.

#### Release 3C: company-specific low-risk proof

- A participating consumer may present a minimized eligibility proof back to the same business
- One approved low-risk benefit is available
- Baseline service is monitored before, during, and after the release
- Completed and active benefit protections apply

Purpose: test consent, proof reliability, benefit fulfillment, consumer value, business value, and operational remedy without cross-company disclosure.

#### Release 3D: industry portability

- At least two independent businesses participate under the same certified context profile
- A consumer may present an industry-specific eligibility proof based partly on history earned elsewhere
- The ordinary proof does not name the contributing competitor or reveal raw score or events
- Correlation, competition, issuer concentration, and named-history protections are tested

Purpose: test the defining promise that good conduct can travel.

#### Release 3E: bounded expansion

- Add limited participant volume, another approved event class, another low-risk benefit, or another independent business—but not all at once
- Revalidate models, rights, operations, and baseline after each material change

Purpose: learn which parts of the pilot generalize without losing causal visibility or operational control.

### 15.14 Recruitment, consent, and participation

Pilot recruitment must avoid cherry-picking only high-frequency, affluent, digitally fluent, unusually agreeable, or already loyal consumers. The sample should deliberately include people with insufficient history, infrequent transactions, disabilities, different communication styles, different languages, shared or delegated interactions, and limited smartphone access.

Consumer participation must be:

- Affirmative and separate from ordinary service terms
- Understandable without reading the full specification
- Voluntary without a worse price or experience for refusal
- Specific about data, duration, research, business access, benefit, withdrawal, review, and future use
- Reconfirmed when the pilot moves from private visibility to business proof or from company-specific to portable use

Worker participation requires its own protections. A worker is not freely volunteering merely because a manager enrolled the location.

The pilot must address:

- Notice and consultation before launch
- Applicable consent, bargaining, works-council, labor, and employment requirements
- Whether participation is part of paid work and how time is compensated
- No use of NCS completion, content, or disagreement for performance management
- Ability to decline or stop pilot participation without retaliation
- Protected reporting, safety support, and access to representation
- Clear rules preventing managers from scripting or monitoring individual responses

Research participation, CQ participation, and employment duties must not be blended into one ambiguous acceptance screen.

### 15.15 Partner selection and obligations

A credible pilot partner must be willing to test constraints, not merely obtain a marketing story.

The platform-first strategy requires evaluating two different forms of readiness:

- **Platform readiness:** Can the platform support authenticated roles, attributable interactions, employee or provider workflow, governed APIs or events, correction, permissions, benefit delivery, audit, and clean exit?
- **Operating readiness:** Can the participating business protect workers and consumers, define baseline service, supply accurate evidence, deliver the benefit, correct errors, fund remedies, and accept independent oversight?

A platform may be technically excellent while its client businesses are not ready. A motivated business may be unable to support CQ because its platform cannot reliably identify the customer, worker, interaction, or final state. Both sides of the coalition must qualify.

Minimum partner criteria include:

- Executive authority and operational ownership sufficient to implement corrections and benefits
- Meaningful frontline-worker involvement before design is finalized
- Reliable source data and ability to identify final states, reversals, accommodations, and business-caused failures
- Reconciliation access sufficient to prove which eligible events were created, omitted, failed, delayed, corrected, disputed, reversed, or excluded
- Documented baseline service and willingness to permit independent measurement
- Acceptance of consumer and worker rights, prohibited uses, audit, incident, review, appeal, remedy, and public aggregate reporting
- Direct, durable, and timely evaluator access to the evidence required by the preregistered protocol
- Independent publication of unfavorable, null, mixed, and stopped results under a narrow confidential-review and responsible-disclosure policy
- No sale, advertising use, model training, or unrelated profiling of CQ data
- No demand for raw history or greater disclosure than the benefit requires
- No use of legacy ratings, notes, customer-risk labels, safety decisions, loyalty tiers, or enforcement history as CQ evidence
- No exclusivity, ownership, preferential standards control, or restriction on OCA work with competitors and other implementers
- Technical and vendor capacity to isolate the pilot and remove it safely
- Funding or in-kind resources sufficient to meet the partner's obligations without purchasing governance control
- A named exit and data-disposition plan

Where a platform partner distributes the pilot to client businesses, each participating client must separately accept the applicable issuer, verifier, worker, benefit, audit, and remedy obligations. A platform agreement cannot silently enroll every client or every employee.

Contracts must also allocate rights to interaction data, derived pilot evidence, evaluation datasets, report aggregates, corrections, audit records, and post-exit retention without allowing one partner to claim ownership of the shared standard or suppress required evidence. OCA's report mandate does not create a general right to reuse a participant's data; contribution and analytical rights remain purpose-bound to approved report families.

The initial partner process should permit confidential discovery while requiring public disclosure before a consumer-affecting pilot. Early conversations, letters of interest, technical exploration, and mock integration do not make an organization a certified participant or public partner.

Partners should be rejected or paused if they seek customer blacklisting, fraud replacement, reduced rights, hidden risk segmentation, employee surveillance, proprietary control of the standard, exclusive access, unverifiable publicity claims, or exemption from the common rules.

### 15.16 Baseline measurement and comparison design

Before a real benefit launches, the pilot must document how ordinary consumers are treated. The baseline period should measure relevant service, price, access, support, wait, accommodation, complaint, and outcome conditions without CQ.

During the pilot, comparisons should include:

- Participating consumers who present a proof
- Participating consumers who decline to present
- Participating consumers with insufficient history or unavailable proofs
- Eligible nonparticipants receiving baseline service
- Relevant accessibility and protected-group outcomes where lawful and methodologically appropriate
- Participating and nonparticipating workers where comparison is appropriate

The evaluation design may use staged rollout, matched comparison, randomized interface or communication tests, or other approved methods. Assignment methods must receive legal and ethical review, particularly where a real benefit has economic value.

No consumer should be randomly assigned to inferior baseline service. Deceptive experiments and undisclosed manipulation of conduct standing are prohibited.

The analysis plan should be registered before outcome data is examined wherever practical. Material changes, exclusions, and exploratory findings should be documented to reduce result shopping.

### 15.17 Pilot measures and advancement gates

Section 18 will define the complete success-measure framework. Each pilot gate must at minimum assess:

#### Evidence quality

- Attribution accuracy
- Event completeness, correction, reversal, and causation
- NCS response and sampling behavior
- Issuer and corporate-family concentration
- Missingness and insufficient-history rates
- Agreement, contradiction, stability, and confidence

#### Human outcomes

- Consumer comprehension, trust, autonomy, emotional response, and perceived fairness
- Worker burden, safety, voluntariness, usefulness, and management pressure
- Accessibility and assisted-path completion
- Challenge, correction, appeal, and remedy experience
- Whether people suppress legitimate complaints or perform unwanted deference

#### Fairness and rights

- Participation and qualification differences
- Error, challenge, reversal, and benefit differences
- Proxy, conformity, retaliation, and protected-activity signals
- Baseline parity and absence of coercion
- Privacy, correlation, retention, and secondary-use performance

#### Product and business outcomes

- Proof consent and completion
- Benefit fulfillment and recipient value
- Effects on the balanced interaction outcome, avoidable frontline friction, repeat preference, or appropriately separated loyalty measures
- Business comprehension and consistency
- Consumer demand for portability
- Incremental value of NCS, VCI, synthesis, and portability

#### Operational viability

- Time and cost per event, proof, challenge, appeal, incident, audit, and remedy
- Support and review volume
- System reliability and recovery
- Partner implementation burden
- Staffing capacity and founder dependency
- Vendor and funding sustainability

Advance only when the current release answers its intended question, meets predefined minimum protections, has no unresolved stop condition, and demonstrates capacity for the next release. A mixed result may justify another bounded test rather than expansion or abandonment.

### 15.18 Stop, pause, rollback, and exit

The pilot must be designed to stop cleanly before it starts.

Immediate pause or containment may be required for:

- Baseline degradation or coercive enrollment
- Material discrimination, proxy use, or accessibility failure
- Consumer or worker retaliation, harassment, or unsafe confrontation
- Incorrect attribution or event failure at unacceptable scale
- Systematic issuer selection, manager scripting, or model manipulation
- Data breach, credential compromise, unauthorized correlation, or prohibited secondary use
- Unavailable independent review or remedy
- Material legal-classification change or regulator concern
- Partner refusal to correct, audit, notify, or honor benefit obligations
- Operating volume beyond funded support and review capacity
- Evidence that the system changes behavior in a materially unhealthy way

Rollback may disable a proof policy, benefit, event class, issuer, model version, integration, or entire pilot. It must preserve baseline service, active rights, audit evidence, notices, correction, and appropriate remedies.

At planned end, the pilot must:

1. Stop new collection and proof use on the announced date unless renewed through a gate review.
2. Fulfill or replace active promised benefits.
3. Tell consumers and workers what is ending and what happens to records, credentials, challenges, and contact routes.
4. Complete pending corrections, appeals, incidents, and remedies.
5. Revoke or expire pilot credentials and disable verifier acceptance.
6. Delete, return, anonymize, or retain data under the approved disposition schedule.
7. Publish aggregate findings, limitations, harms, changes, and unresolved questions.
8. Decide explicitly to stop, repeat, redesign, or advance.

The pilot may succeed by showing that a proposed feature should not be built. A negative result is valuable if it arrives before wider harm or lock-in.

### 15.19 Public communication

Public descriptions must use precise maturity language:

- **Concept:** A proposed system with no operating score or partner use
- **Simulation:** Synthetic or controlled analysis of candidate rules
- **Prototype:** A nonproduction workflow or technical demonstration
- **Research pilot:** A bounded, governed study involving real participants
- **Benefit pilot:** A bounded test in which a real proof may unlock a real approved benefit
- **Production:** An ongoing generally available service under mature governance

The project must not announce a “launch” when it has a mockup, describe interested organizations as partners without agreement, call a proprietary implementation an open standard, or call internal partner review independent validation.

Pilot reporting should disclose:

- Purpose, dates, scope, jurisdiction, partners, funders, governance, and conflicts
- Participant and worker recruitment and compensation approach
- Event, model, proof, and benefit versions
- Hypotheses, methods, predefined measures, and material changes
- Aggregate outcomes, uncertainties, subgroup limitations, complaints, corrections, incidents, and remedies
- What the pilot did not test
- Whether the project stopped, repeated, redesigned, or advanced and why

Privacy, worker safety, security, and small-group protections may limit detail, but cannot justify publishing only favorable findings.

### 15.20 Path from pilot to production

Stage 4 is not “the pilot, but larger.” Production requires evidence that the model and operations remain trustworthy when incentives, participants, jurisdictions, vendors, and uses multiply.

Before production, the ecosystem should demonstrate:

- Repeatable value and rights performance across more than one bounded release
- Reliable portability among independent businesses
- An approved production model and migration process
- Mature OCA authority, funding independence, certification, audit, enforcement, appeal, and regional capacity
- Scalable consumer and worker support, incident response, correction, and remedy
- Tested provider exit, credential portability, disaster recovery, and institutional continuity
- Sustainable economics that do not depend on selling data, weakening standards, or making benefits coercive
- Clear boundaries against prohibited industries and uses
- Public evidence that baseline service, fairness, privacy, and comprehension remain acceptable

Production expansion should continue one dimension at a time where possible: volume, business, benefit, event class, jurisdiction, or industry. Adding multiple dimensions simultaneously requires a stronger justification and evaluation design.

Cross-industry and overall CQ capabilities should remain outside production until the system demonstrates that context transfer is meaningful, understandable, fair, and necessary. The ambition of the idea does not require the earliest implementation to be universal.

### 15.21 Decisions intentionally deferred

The following should be settled through Stage 2 evidence and formal readiness review rather than assertion in this specification:

- Final first industry, interaction type, and jurisdiction
- Final pilot partners and responsible legal entities
- Participant recruitment, sample size, duration, and comparison design
- Exact NCS prompt, response window, sampling model, and employee participation rules
- Approved VCI event taxonomy and evidence thresholds
- Candidate model coefficients, thresholds, recency, confidence, and presentation
- Wallet, identity, credential, status, and storage implementation
- First benefit and baseline-parity thresholds
- Service levels, staffing, compensation, remedies, and budget
- Exact advancement, pause, and stopping thresholds
- Public research protocol and publication venue

Deferral does not mean the pilot can begin without these decisions. It means they should be made when the candidate context, data, partners, architecture, law, and operating capacity are concrete enough to evaluate.

### 15.22 Validation requirements

Before Stage 3 begins, the project must have independently reviewed evidence of:

- A precise pilot question and minimal design capable of answering it
- One industry context, one jurisdictional profile, a limited adult population, and a small event taxonomy
- A complete legal, ethical, labor, accessibility, privacy, security, fairness, competition, and research posture
- A credible interim governing organization with adequate funding and no unsupported founder dependency
- A qualified workflow platform, operating business, and, before portability, independent second participant with explicit responsibilities and separation
- Participating businesses and vendors capable of meeting common rights, audit, correction, remedy, and exit obligations
- Baseline-service definition and pre-pilot measurement
- Synthetic simulation and prototype results supporting the proposed live model and workflows
- Consumer and worker comprehension, voluntariness, safety, and accessibility research
- Identity, event, calculation, credential, proof, challenge, audit, and incident prototypes
- Predefined hypotheses, metrics, analysis, advancement criteria, stop conditions, and publication plan
- Independent challenge and appeal capacity before real CQ is visible or actionable
- A benefit that is low-risk, additional, funded, fulfillable, and legally approved
- Technical rollback, partner exit, credential expiration, data disposition, and collective correction plans
- Operating capacity for expected and stress-case support, review, incident, and remedy volume

The rollout plan is a **CANDIDATE** until Stage 2 selects and validates a concrete pilot. Its rollout principles are **REQUIRED FOR COHERENCE**; the industry, implementation, formulas, benefit, sample, and thresholds remain evidence-driven choices.

## 16. Enterprise integration requirements

### 16.1 Purpose

Enterprise integration turns the Conduct specification into repeatable product behavior across platforms, businesses, workers, consumers, and benefits. The integration model must be practical for digital-first companies without allowing the easiest implementation to redefine the standard.

The preferred architecture is **thin common infrastructure over local systems of record**:

- Businesses and platforms retain the operational records they are responsible for.
- Certified adapters convert only approved source facts into signed NCS or VCI events.
- A governed synthesis function calculates contextual results from eligible minimized events.
- Consumers inspect their information and authorize purpose-specific proofs.
- Verifiers receive the minimum result needed to grant an approved benefit.
- Open Conduct governs semantics, versions, conformance, rights, and interoperability rather than pooling raw enterprise data.

Integration convenience must not create a universal customer database, import legacy bias, expose employee identities, or give one platform proprietary control of portable conduct.

### 16.2 Core requirements

1. Enterprise integrations MUST implement the common rights, event semantics, lifecycle, security, privacy, audit, and version rules in this specification. A platform's native field name or workflow does not override them.
2. Raw transaction logs, support transcripts, call recordings, free-form notes, internal risk scores, profitability data, and employee-performance data MUST remain outside CQ by default.
3. Every field entering an NCS or VCI event MUST be listed in an approved source-mapping manifest and allowed by the applicable context profile.
4. Existing ratings, reviews, tags, notes, sentiment, or customer segments MUST NOT be imported as NCS, VCI, or CQ in the initial pilot.
5. NCS MUST represent an authenticated human worker's direct response to the approved prompt. It MUST NOT be inferred, predicted, summarized, or submitted by AI, sentiment analysis, or automation.
6. Every interaction and actor MUST be classified sufficiently to distinguish consumers, workers, delegates, businesses, human agents, automated systems, and AI agents.
7. VCI integrations MUST preserve responsibility, notice, consumer control, causation, final state, evidence, exception, correction, reversal, and dispute status.
8. Participating businesses MUST remain accountable for records issued through their platforms, processors, franchise systems, or vendors.
9. Platform operators MUST isolate tenants, roles, keys, configuration, data, and audit trails. A platform agreement MUST NOT enroll client businesses, workers, or consumers automatically.
10. APIs and events MUST be versioned, idempotent, authenticated, encrypted, auditable, and capable of correction without destructive rewriting.
11. Integration acknowledgments MUST distinguish technical receipt from event eligibility, acceptance, activation, and synthesis effect.
12. Proof integrations MUST request an approved policy and return a minimized eligibility result rather than exposing raw CQ or event history.
13. Every verified benefit MUST produce a fulfillment record and consumer-visible receipt.
14. Integration failure MUST preserve baseline service and MUST NOT create adverse conduct evidence.
15. Production integrations MUST support tenant-level pause, event-class disablement, key rotation, rollback, export, and clean exit.
16. A certified implementation MUST pass common and role-specific conformance testing before processing real events or proofs.
17. Every event-producing integration MUST reconcile the complete eligible source population, including prompts or events omitted, declined, expired, failed, delayed, rejected, disputed, corrected, and reversed, without turning nonresponse into conduct evidence.
18. Only an authorized Eligible proof may create a CQ-specific verifier or benefit-system record. Every other state MUST follow the ordinary baseline path without a customer-linked conduct result.
19. Stage 3 integrations MUST provide the independent evaluator direct, timely, analysis-ready evidence under the preregistered evaluation and publication policy.
20. Legacy ratings, notes, safety, fraud, risk, loyalty, value, sentiment, enforcement, and workforce fields MUST be blocked not only from event payloads but also from pilot selection, sampling, prompt behavior, model features, investigations, benefits, and downstream treatment.
21. A material correction, reversal, invalidation, model change, or incident MUST propagate to active representations and future proofs within the approved service level, with consumer notice and independently testable completion.
22. OCA aggregate-report interfaces MUST be separated from person-level event, synthesis, proof, benefit, and enterprise analytics interfaces and MUST enforce the approved report-family, cohort, disclosure, and query controls.

### 16.3 Integration roles

One enterprise may perform several roles, but each role has separate permissions and accountability.

| Role | Enterprise responsibility | Data boundary |
|---|---|---|
| Interaction source | Establish the consumer, participating worker or system, time, context, and final state of an eligible interaction | Retains detailed transaction, reservation, trip, stay, or support record |
| NCS workflow host | Present the exact approved prompt to an authenticated eligible human and capture the response | Does not expose employee identity to the consumer or use CQ to influence the prompt |
| VCI event issuer | Map approved source facts to responsibility events, sign them, and maintain corrections and reversals | Issues minimized assertions rather than raw operational records |
| Identity or account connector | Bind the enterprise account and interaction to the correct enrolled person | Uses pairwise identifiers and does not disclose a universal network identifier |
| Synthesis operator | Validate, contextualize, cluster, calculate, explain, and sign contextual CQ results | Receives eligible minimized events under defined custody and retention rules |
| Credential issuer or wallet provider | Issue, store, refresh, present, recover, suspend, and revoke CQ credentials or proofs | Cannot repurpose presentation or wallet activity |
| Verifier | Request and validate an approved proof for a disclosed benefit | Receives only the approved result and required verification metadata |
| Benefit fulfiller | Apply the promised additional benefit and record its completion | Cannot expose CQ detail to frontline employees beyond the action required |
| Review and appeal connector | Route explanations, challenges, corrections, evidence, outcomes, and remedies | Restricts each party to the information needed for its review role |
| Auditor or evaluator | Test conformance, outcomes, security, fairness, baseline, and evidence quality | Uses controlled access, minimization, and independence protections |

A platform serving many businesses is ordinarily an integration or processing operator, not automatically the issuer of every event. The operating business remains accountable for its source facts, worker conditions, benefit, and corrections unless a different certified allocation is explicit and legally valid.

### 16.4 Reference enterprise flow

The reference flow is:

1. A participating business and platform activate one certified context profile, event set, worker workflow, benefit policy, and tenant configuration.
2. The business creates or recognizes an interaction in its own system of record.
3. The account connector binds the interaction to the correct participating consumer through an issuer-local or pairwise identifier.
4. The interaction source declares participating roles, actor types, relevant responsibility units, notice version, and eligibility state.
5. At the approved point, the platform offers an authenticated eligible human worker the NCS prompt without revealing the consumer's CQ.
6. Operational systems finalize approved VCI facts and exceptions.
7. The business or certified issuer signs minimized NCS and VCI events and sends them through the approved interface.
8. The receiving service validates schema, signature, issuer, tenant, interaction, timing, duplication, lifecycle, and context policy.
9. The consumer receives event visibility and may request explanation, correction, or review.
10. The synthesis function calculates or refreshes the applicable company or industry representation under the current approved model.
11. A verifier presents a standardized proof request naming itself, purpose, context, benefit, received data, retention, and baseline alternative.
12. The consumer authorizes, declines, or uses a previously approved recurring permission.
13. Only when the approved eligibility condition is satisfied and the consumer authorizes presentation does the verifier receive Eligible with the approved verification metadata. Every other state ends in the ordinary baseline path without a CQ-specific verifier result or customer-linked failure record.
14. After an Eligible proof, the benefit system fulfills the promised action and produces a receipt. The consumer retains the fuller request and outcome history.
15. Corrections, reversals, disputes, withdrawals, expiration, key changes, and model versions propagate through additive lifecycle events.

Each step must be independently observable and testable without requiring one vendor to operate the whole chain.

### 16.5 Integration profiles

The standard should define a small core plus role-specific profiles.

#### Core profile

Required for every production integration:

- Participant, tenant, issuer, verifier, environment, and key identity
- Common event envelope and schema discovery
- Authentication, authorization, signing, encryption, and key rotation
- Versioning, idempotency, retries, errors, status, and audit correlation
- Privacy, retention, incident, export, and deletion controls
- Trust-registry and certification status
- Conformance testing and supported-feature declaration

#### NCS profile

- Interaction eligibility request or local evaluation
- Human actor and rater-role assertion
- Approved prompt and response set
- Sampling and response-window metadata
- Signed response, withdrawal, invalidation, dispute, and supersession
- Worker privacy, manager-access, and anti-retaliation controls

#### VCI profile

- Responsibility creation and notice
- Observed outcome and final state
- Consumer-control and causation assertion
- Evidence class and local source reference
- Exception, business-caused incident, waiver, reversal, correction, dispute, and supersession

#### Synthesis profile

- Event validation and retrieval authorization
- Context, concentration, confidence, recency, model, and policy versions
- Recalculation, explanation, material-change notice, and audit reproduction
- Credential-eligibility and refresh status

#### Credential and proof profile

- Issuance, holder binding, refresh, status, recovery, and revocation
- Proof request, consumer authorization, presentation, nonce, audience, purpose, validity, and replay protection
- Minimal verifier response and consumer presentation receipt

#### Benefit profile

- Benefit policy, version, eligibility proof, activation, fulfillment, failure, replacement, completion, and consumer receipt
- Baseline-service control and monitoring references

#### Review profile

- Explanation, question, disagreement, challenge, evidence request, issuer response, independent appeal, outcome, correction, remedy, and collective case

An implementation may initially certify only the profiles it performs. Certification for NCS does not imply certification for VCI, synthesis, proof verification, benefit fulfillment, or appeals.

### 16.6 Platform integration patterns

The standard should support several implementation patterns without weakening semantics.

| Pattern | Use | Requirements |
|---|---|---|
| Native platform integration | The platform builds CQ directly into its employee and consumer products | Certified implementation, tenant isolation, standard-owned schemas, no proprietary semantic fork, export and exit |
| Embedded application | A CQ application appears inside an existing POS, reservation, marketplace, or support interface | Authenticated context transfer, least privilege, content isolation, accessibility, signed actions, no hidden host-page data collection |
| Event or webhook adapter | The platform emits interaction changes to a certified adapter | Signed delivery, replay protection, idempotency, retries, schema mapping, minimized payloads, explicit tenant consent |
| API connector | A certified service reads or writes through a platform API | Scoped authorization, rate and pagination handling, change detection, source reconciliation, no broad data extraction |
| Enterprise-side adapter | The business maps its local systems to the common events | Approved mapping manifest, secure keys, local evidence retention, conformance, monitoring, and correction support |
| Approved batch interface | Periodic VCI final states or reconciliations where real-time exchange is unnecessary | Bounded time window, manifests, per-record integrity, duplicate controls, rejection report, and no initial legacy NCS import |
| Consumer-authorized account connection | The consumer links enterprise and CQ relationships | Clear parties and data, pairwise identifier, revocation, no silent historical backfill, and no marketing permission inference |

No pattern is inherently more decentralized, private, or compliant. The evaluation follows the actual identifiers, data movement, authority, retention, and failure behavior.

Suite H establishes the following enterprise-integration architecture requirements:

| ID | Requirement | Status |
|---|---|---|
| EII-001 | The lead end-to-end integration MUST compose separately governed worker or consumer experience, authoritative source mapping, minimized exchange, independent proof and evaluation, periodic reconciliation, and correction and exit functions. | REQUIRED FOR COHERENCE |
| EII-002 | The mixed architecture MUST preserve actual legal, administrative, vendor, cloud, key, support, data, funding, and publication separation; nominal modules operated by one practical controller do not satisfy this requirement. | CONSTITUTIONAL |
| EII-003 | An isolated embedded application SHOULD be the lead worker-facing interface component when host observation, manager access, accessibility, labor, and safe-abstention controls pass. | CANDIDATE |
| EII-004 | Enterprise-side adapters SHOULD be the lead source-mapping and correction component for facts held in authoritative business systems. | CANDIDATE |
| EII-005 | Certified webhook or API adapters SHOULD be the lead minimized real-time exchange and isolated proof component, but MUST NOT be treated as evidence that pre-transmission source populations are complete. | CANDIDATE |
| EII-006 | Approved periodic batch MAY support finalized VCI reconciliation, export, and recovery; it MUST NOT create NCS, run interactive proof, import legacy NCS, or substitute for required lifecycle updates. | CONSTITUTIONAL |
| EII-007 | A platform-native implementation MAY perform certified bounded roles, but one platform MUST NOT control the complete worker, source, identity, synthesis, proof, benefit, evaluator, report, rights, standards, and exit stack. | CONSTITUTIONAL |
| EII-008 | Each issuer MUST maintain a privacy-minimized eligible-source-population ledger or equivalent evidence that exposes pre-transmission omission, selection, missingness, lifecycle failure, and correction without creating adverse evidence from absence. | CONSTITUTIONAL |
| EII-009 | Failed or uncompleted proof MUST create no customer-linked CQ record across payloads, codes, timing, callbacks, logs, CRM, loyalty, support, analytics, warehouses, benefits, or frontline interfaces. | CONSTITUTIONAL |
| EII-010 | The prospective-clean gate MUST cover recruitment, sampling, prompting, investigation, interfaces, benefits, evaluator data, and downstream treatment—not only transmitted CQ fields. | CONSTITUTIONAL |
| EII-011 | The independent evaluator MUST have direct contractual and technical access to the complete governed denominators, configurations, lifecycle, missingness, proof, benefit, baseline, correction, challenge, and incident evidence needed for the preregistered evaluation. | CONSTITUTIONAL |
| EII-012 | A correction is complete only after every active source, event, synthesis, consumer, credential, permission, proof, benefit, evaluator, report, notice, challenge, and remedy effect reaches the approved corrected state. | CONSTITUTIONAL |
| EII-013 | Every integration MUST implement the canonical lifecycle, idempotency, ordering, causal reference, version, correction, reversal, collective-correction, receipt, and pause behavior needed to coordinate its complete role graph. | REQUIRED FOR COHERENCE |
| EII-014 | Production conformance MUST test end-to-end worker, consumer, source, proof, benefit, evaluator, report, correction, incident, rights, and exit journeys; component schema or transport conformance is insufficient. | CONSTITUTIONAL |
| EII-015 | The complete privilege graph MUST include tenant, parent, franchise, platform, vendor, cloud, warehouse, backup, key, support, incident, legal-response, bulk-export, and provider-exit access. | CONSTITUTIONAL |
| EII-016 | A production-shaped exit exercise MUST demonstrate correction, appeal, incident response, active-benefit completion, export, deletion, provider replacement, communications, and final reporting before launch. | CONSTITUTIONAL |
| EII-017 | New intake MUST pause before funded correction, rights, incident, and exit capacity exceeds its approved limit; existing obligations continue after the pause. | CONSTITUTIONAL |
| EII-018 | A digital-first platform advances as a Stage 3 candidate only if it accepts the complete separation, source-reconciliation, evaluator-access, publication, correction, and exit profile. | CONSTITUTIONAL |

Suite H v0.1 makes the mixed coalition integration the lead end-to-end architecture. The embedded application becomes the lead worker-facing component, the webhook or API adapter the lead minimized real-time exchange and proof component, the enterprise-side adapter the lead source-mapping and correction component, and approved periodic VCI batch a narrow reconciliation and export backstop. Platform-native integration is rejected as the governing full stack and retained only for separately certified roles. The comparison confirms that a clean payload cannot repair selected source populations, host-visible nonpresentation, legacy-influenced selection, shared administration, evaluator dependence, stale correction, or stranded exit obligations. Suite H authorizes no platform, business, vendor, source mapping, integration, service level, or production use.

### 16.7 Actor and interaction model

Digital-first platforms often blur who bought, booked, traveled, dined, contacted support, paid, or received service. The integration must preserve role rather than assign everything to the account holder.

Each interaction should identify, as applicable:

- Account holder
- Consumer participant
- Purchaser or payer
- Booker, reservation holder, or organizer
- Guest, passenger, rider, diner, renter, or service recipient
- Delegate, caregiver, guardian, assistant, or travel manager
- Human frontline worker
- Human supervisor or reviewer
- Independent provider, host, driver, contractor, or franchise worker
- Automated workflow
- AI agent acting for the consumer, worker, business, or platform
- Business, location, franchise, brand, parent, and platform

The actor taxonomy must at minimum distinguish **human**, **AI agent**, **deterministic automation**, and **mixed human–AI operation**.

NCS is human-to-human evidence. A human worker must knowingly submit the approved response based on direct participation. A platform may use automation to determine prompt eligibility, deliver the prompt, validate fields, or route review. It may not:

- Generate the NCS response from a transcript, voice recording, sentiment model, facial analysis, keystrokes, handle time, or outcome
- Suggest a response based on the consumer's history, predicted behavior, value, or existing CQ
- Present an AI-generated response for one-click confirmation
- Submit NCS on behalf of an employee who did not respond
- Represent an AI agent's experience as a human feeling

Machine and AI interactions may produce approved VCI operational facts when the evidence and responsibility rules are satisfied. Any future measure of bot-to-bot or human-to-agent conduct requires a separately approved context and must not be smuggled into NCS.

### 16.8 Interaction binding

An integration must not create conduct evidence merely because two records share an email, phone number, payment card, device, household, loyalty account, or reservation.

The interaction binding record should include:

- Opaque interaction identifier
- Source-system and issuer-local reference
- Participating business, location, and corporate-family identifiers
- Interaction type, context, jurisdiction, and applicable profile
- Start, completion, finalization, and eligible-response times
- Role assignments and attribution confidence
- Consumer pairwise identifier
- Eligible worker or provider role references
- Responsibility and notice versions
- Business-incident, exception, and dispute indicators
- Lifecycle and schema versions

Portable events must not contain raw email addresses, phone numbers, card fingerprints, loyalty numbers, account handles, reservation codes, ticket numbers, or device identifiers. Those remain local matching inputs. The signed event uses opaque, context-appropriate identifiers.

Where attribution is ambiguous—such as group dining, a family stay, a corporate booking, a shared ride, or a delegated support case—the integration must lower attribution confidence, ask for clarification, assign only a defined responsibility, or decline to issue the event. Convenience is not evidence.

### 16.9 NCS workflow integration

The employee experience should fit the existing post-interaction workflow while remaining visibly separate from internal notes, safety reporting, fraud, and performance management.

Required behavior:

- The worker is authenticated through an approved individual or protected shared-terminal workflow.
- The platform confirms that the worker directly participated in the eligible interaction.
- The exact current prompt and four response options are supplied by the certified configuration.
- No response is preselected, predicted, highlighted, or recommended.
- The consumer's CQ, loyalty tier, spend, tip, complaint, benefit eligibility, and prior rating are hidden.
- A worker can decline or allow the prompt to expire without penalty during the pilot.
- A specified negative response may request a second structured category, but ordinary free text is not required.
- The interface supports accessibility, approved languages, time limits, offline behavior, and safe interruption.
- The system creates one signed response with sampling, timing, role, interaction, attribution, version, and issuer metadata.
- Withdrawal and protected correction remain available under the NCS policy.

Managers may see aggregate workflow health and, where authorized, compliance exceptions. They must not receive a dashboard ranking workers by response positivity, completion, or alignment with management expectations.

If a host system already has guest notes, tags, ratings, disposition codes, or sentiment, the CQ component must neither read nor write those fields unless a separate non-scoring operational need is explicitly approved. Existing notes are not a shortcut to NCS.

### 16.10 VCI source integration

VCI should be generated as close as practical to the system responsible for the underlying fact. The local system retains detailed evidence; the portable event contains the governed assertion.

Every mapping requires a **source-mapping manifest** containing:

| Manifest field | Requirement |
|---|---|
| Source owner | Business and system responsible for the fact |
| Source field or event | Exact production element used |
| Business meaning | Plain-language operational semantics, including known ambiguity |
| CQ responsibility unit | Approved obligation and context to which it maps |
| Notice and acceptance | How the consumer received and accepted the responsibility |
| Control and causation | How consumer, business, shared, and external causes are distinguished |
| Finalization | When the source fact becomes sufficiently final to issue |
| Exceptions | Waivers, accessibility, disputes, outages, fraud review, and other exclusions |
| Correction and reversal | What source change creates a lifecycle update |
| Evidence class | What supporting record remains local and who may review it |
| Data minimization | Which source fields are deliberately not transmitted |
| Retention and access | Local and CQ retention, permissions, and deletion rules |
| Test cases | Normal, boundary, failure, reversal, and abuse examples |
| Owner and approval | Named accountable owner and approved profile version |

Only allowlisted mappings may issue active events. A local field such as `VIP`, `difficult`, `fraud risk`, `high maintenance`, `sentiment`, `escalated`, `repeat contact`, `refund`, `no show`, or `chargeback` has no CQ meaning by itself.

The adapter must wait for the approved finalization point. A reservation cancellation, payment state, order closure, trip completion, ticket resolution, or refund can change after its first appearance. The event model must preserve created, pending, fulfilled, disputed, reversed, invalidated, and superseded states rather than treating the first database value as truth.

### 16.11 Canonical events and transport

The specification should define transport-neutral logical schemas and publish machine-readable representations.

Recommended artifacts include:

- [OpenAPI](https://spec.openapis.org/oas/latest.html) descriptions for synchronous HTTP interfaces
- [JSON Schema](https://json-schema.org/draft/2020-12) definitions for payload validation and test generation
- A [CloudEvents](https://github.com/cloudevents/spec) compatibility profile for asynchronous exchange where useful
- Credential and proof profiles aligned with the open standards selected in Section 11
- Human-readable semantics, examples, negative examples, and lifecycle diagrams

The standard should pin exact supported versions in each conformance release rather than referencing “latest” in production behavior.

Every asynchronous envelope should support:

- Unique event and delivery identifiers
- Event type and schema version
- Source and tenant identifiers that do not expose consumer identity
- Occurrence, recording, issuance, and delivery timestamps as applicable
- Subject reference appropriate to the context
- Correlation reference restricted to the parties that need it
- Content type and schema reference
- Integrity and authentication metadata
- Trace and retry information that does not become a cross-context tracking identifier

Sensitive consumer, worker, business, or security information should not be placed in routable envelope metadata because intermediaries often log and inspect it.

### 16.12 Delivery, ordering, and idempotency

Distributed systems retry. The standard must assume duplicate, delayed, reordered, and temporarily missing messages.

Requirements include:

- Producers assign a stable event identifier and an idempotency key for each intended state change.
- Consumers process repeated delivery of the same event without duplicating conduct effect.
- Corrections and reversals reference the affected event and use their own immutable identifiers.
- Per-interaction sequence or causal references define order where order matters.
- Late valid events can be reconciled without overwriting a newer state.
- Batch files include a signed manifest, record count, time range, schema, checksum, and rejection report.
- Retries use bounded backoff and do not create repeated employee prompts or consumer notices.
- Dead-letter or quarantine handling prevents malformed events from silently disappearing.
- A delivery acknowledgment means only that the receiver obtained the message.

The receiver should return or expose distinct statuses such as:

- Received
- Rejected as malformed or unauthorized
- Quarantined for review
- Validated
- Active
- Disputed
- Invalidated
- Superseded
- Expired

The ecosystem should not promise magical “exactly once” behavior. It should guarantee that repeated and reordered delivery does not create repeated conduct effect.

### 16.13 Lifecycle, correction, and reconciliation

Enterprise records change. CQ integrations must propagate material changes instead of issuing immutable-looking conclusions disconnected from their sources.

Each issuer must:

- Monitor the approved source states that can correct or reverse an event.
- Send additive lifecycle updates promptly under the applicable service level.
- Reconcile active CQ events against local sources on a governed schedule.
- Detect orphaned events, unprocessed reversals, issuer outages, and schema drift.
- Preserve the original event and subsequent actions for audit.
- Notify the synthesis function when a recalculation is required.
- Support collective correction when one integration defect affected many people.

The integration cannot edit history in place, delete an inconvenient event, or issue an offsetting positive event instead of correcting the original. Correction changes the event's active effect everywhere it contributed.

Propagation must reach the consumer view, synthesis state, credential refresh, proof eligibility, active permissions, and any future benefit request. The consumer receives a completion notice identifying what changed and which active representations were recalculated. A correction may prevent a future proof; it does not claw back a completed benefit from a consumer who presented a valid proof in good faith. Where an inaccurate event wrongly prevented a benefit, the approved remedy process determines replacement or compensation without requiring the consumer to reconstruct the entire integration path.

Business data deletion does not automatically authorize deletion of required CQ audit or dispute evidence, and CQ retention does not authorize keeping raw business data. The approved retention matrix governs each copy and purpose.

### 16.14 Synthesis integration

The synthesis layer consumes eligible events, not enterprise-specific customer profiles.

Its interface must support:

- Validation of issuer, signature, schema, event class, context, and lifecycle
- Corporate-family, platform, interaction, employee, incident, and source clustering
- Model, taxonomy, context-transfer, confidence, and recency versions
- Company- and industry-specific calculation requests
- Insufficient-history and unavailable states
- Recalculation triggered by event, rule, incident, dispute, or model change
- Consumer and audit explanations
- Shadow calculation of candidate models without affecting live proofs
- Reproduction from authorized source references and versioned rules
- Bulk correction without bulk exposure of consumer history
- A separately authorized evaluator feed that supplies preregistered evidence, denominators, lifecycle states, configuration, and baseline measures without relying on partner-curated extracts

An enterprise cannot send its preferred weight, customer tier, predicted value, benefit target, or desired CQ result. It may provide only the fields approved for the event and context.

The synthesis service must not expose a cross-company query interface that lets a business enumerate consumers, inspect competitor relationships, or test arbitrary score thresholds.

The synthesis interface used for person-level proof cannot double as OCA's report-query interface. Aggregate intelligence uses a separate approved report family, purpose, authorization, cohort policy, disclosure controls, query budget, audit trail, and output review. No report request may be translated into repeated person-level synthesis calls.

### 16.15 Credential and proof integration

Credential issuance and presentation follow the identity architecture in Section 11 and the disclosure rules in Section 10.

The enterprise proof flow should use an approved policy identifier rather than an arbitrary threshold query.

A proof request includes:

- Certified verifier and tenant identity
- Benefit-policy identifier and version
- Approved context
- Plain-language purpose and benefit
- Requested result and fields
- Baseline alternative
- Retention and secondary-use statement
- Request time, expiry, nonce, and audience
- Consumer support, withdrawal, and complaint route

The consumer authorizes through an approved trusted interface. A host application may initiate the request, but it must not preapprove, conceal, bundle, or repeatedly pressure consent.

When the approved condition is satisfied and the consumer authorizes presentation, the verifier response is limited to:

- Eligible
- Context and policy identifier
- Credential or proof version
- Validity and cryptographic verification metadata
- Consumer-authorization reference

Refusal, nonqualification, insufficient history, dispute, expiry, withdrawal, context mismatch, and technical failure do not produce a CQ-specific verifier response. The requesting experience returns to the ordinary baseline flow without exposing which state occurred or retaining it in the verifier's customer record. Privacy-protected reliability and evaluation telemetry may measure aggregate request outcomes in a segregated system, but cannot be available to customer treatment, marketing, loyalty, risk, frontline, or general analytics systems. The consumer receives the fuller explanation and may retain every request and outcome.

Production authorization and API security should follow current OAuth security practice, including least-privilege scopes and the protections in [RFC 9700](https://www.rfc-editor.org/info/rfc9700/). The final credential transport profile remains the one approved under Section 11; ordinary API authorization is not itself a CQ proof.

### 16.16 Benefit-system integration

Proof validation and benefit fulfillment are separate events. A valid proof does not demonstrate that the enterprise delivered what it promised.

After an authorized Eligible proof enters the approved benefit flow, the benefit integration must record:

- Benefit policy and version
- Successful proof-validation reference
- Consumer authorization reference
- Business, location, interaction, and channel
- Benefit offered
- Benefit accepted or declined
- Activation and fulfillment state
- Completion timestamp
- Failure or substitution reason
- Replacement, correction, or compensation
- Baseline-service comparison reference
- Consumer receipt and support route

No benefit-system customer record is created for refusal, nonqualification, insufficient history, dispute, expiry, withdrawal, context mismatch, or failed proof. A consumer may accept or decline an offered benefit after successful proof; declining the benefit is not a conduct signal and is retained only as required for the consumer receipt, fulfillment integrity, and approved evaluation.

Frontline systems should ordinarily display only the benefit action: for example, “Add approved welcome amenity.” They should not display the raw CQ, underlying dimensions, history, disputes, or contributing businesses.

If the benefit cannot be fulfilled, the system must not blame the consumer, reveal their conduct standing, or substitute a baseline entitlement. It should provide the approved replacement or correction path.

Benefit configurations must come from certified policy, not an unrestricted local rule builder. A business cannot create “CQ above X gets faster complaint review” merely because its CRM can express the condition.

### 16.17 Consumer-facing integration

The enterprise journey should feel coherent even when several systems participate.

The consumer must be able to:

- Understand which business and platform are involved
- Know whether they are enrolling, linking an account, viewing records, authorizing a proof, or accepting a benefit
- Inspect company and industry context, NCS and VCI dimensions, confidence, coverage, event categories, and current status
- See what data will be shared before approval
- Decline without losing baseline service
- View active permissions and revoke future presentation
- See proof and benefit receipts
- Ask for explanation or review through one entry point
- Export or move supported credentials and records
- Recover access and continue through accessible, assisted, and non-smartphone paths

The enterprise may apply its visual brand around the workflow, but standardized rights, consent, proof, result, challenge, and status language cannot be obscured or materially rewritten.

Deep links and embedded views must protect against verifier impersonation, session confusion, clickjacking, hostile framing, and return-path manipulation. The consumer should always be able to verify which party is asking for what.

### 16.18 Review, appeal, and remedy integration

“Something doesn't look right” must work across enterprise boundaries.

The unified challenge record should include:

- Consumer and relevant pairwise relationship
- Question, disagreement, or formal-review choice
- Target: identity, interaction, NCS, VCI, synthesis, proof, benefit, or systemic issue
- Affected event or transaction reference
- Urgency and active-benefit state
- Current lifecycle effect
- Responsible first-line party
- Independent escalation path
- Evidence requests and responses
- Protected worker-contact controls
- Decision, reason, correction, recalculation, remedy, and notice
- Timers, service levels, and audit history

Routing complexity belongs to the system. The consumer should not need to decide whether the platform, restaurant, airline, wallet, issuer, model operator, or verifier caused the problem.

Enterprise support tooling may display the review status and actions appropriate to an authorized reviewer. It must not expose protected employee identity, unrelated cross-company records, or a consumer's private statement to ordinary agents.

Support cases about CQ are not themselves eligible NCS or VCI events. Exercising review rights cannot worsen CQ.

### 16.19 Tenant and client isolation

A platform integration may serve thousands of businesses. Scale increases the need for separation.

Required controls include:

- Separate tenant enrollment and certification status
- Tenant-specific issuer and verifier identifiers
- Tenant or delegated keys with bounded scope and rotation
- Explicit enabled context, event, benefit, and location sets
- Separate worker-role eligibility and sampling configuration
- Isolation of consumer identifiers and local source references
- Corporate-family and franchise relationships declared without collapsing tenants
- Tenant-specific audit, incident, pause, export, and deletion
- No cross-tenant search, profile, history, analytics, or model training outside approved aggregate programs
- Platform administrator access that is logged, time-limited, and independently reviewable

A franchise location, restaurant group, marketplace host, support-platform client, and parent brand may have different responsibilities. The integration must model the real issuer, employer, controller, verifier, and benefit fulfiller instead of treating “the platform” as one legal and operational actor.

### 16.20 Authentication, authorization, and keys

Production integrations require:

- Strong service identity and mutually authenticated encrypted transport where appropriate
- OAuth or equivalent short-lived, scoped authorization aligned with current security best practice
- Phishing-resistant administrator authentication
- Separate development, test, pilot, and production credentials
- Distinct keys by role, tenant, environment, and purpose where practical
- Managed key generation, storage, access, rotation, suspension, revocation, and destruction
- No production secrets in source code, client applications, shared documents, logs, tickets, or chat
- Dual authorization for critical key, trust, bulk, and configuration changes
- Automated certificate and key-expiry monitoring
- Emergency rotation and affected-event or credential response

Static shared API keys are inadequate for high-impact production functions unless wrapped in an approved compensating profile and migration plan. Consumer authentication, enterprise API authorization, issuer event signatures, and credential proof are distinct layers and must not reuse one token or key indiscriminately.

### 16.21 Webhook and asynchronous security

Outbound events and callbacks must use:

- Destination allowlisting or verified registration
- TLS with current approved configuration
- Message signature covering the exact delivered body and relevant metadata
- Delivery identifier, timestamp, and bounded replay window
- Secret or key rotation without simultaneous uncontrolled validity
- Idempotent receiver behavior
- Bounded retries, backoff, and delivery-status visibility
- Payload-size, content-type, and schema enforcement
- Protection from server-side request forgery and malicious callback endpoints
- Quarantine for malformed, unexpected, or unauthenticated events
- No credentials or sensitive personal information in URLs

Webhook delivery should carry the minimum data required. A notification may identify a changed resource that the authorized receiver retrieves separately rather than pushing a complete sensitive record through every intermediary.

### 16.22 Privacy and data minimization

Every integration must maintain a data-flow inventory stating:

- Data element and semantic purpose
- Source and recipient
- Identifier and correlation risk
- Processing role and authority
- Retention and deletion
- Encryption and access
- Consumer and worker visibility
- Review, audit, research, and incident use
- Prohibited secondary uses

Integration logs must avoid event payloads, raw identifiers, access tokens, proofs, support text, and sensitive source data. Debug access uses synthetic data by default; production payload capture requires time-limited approval and deletion.

Analytics should report aggregate conformance, latency, error, issuance, challenge, fairness, baseline, and benefit measures. They must not create a hidden per-consumer risk profile or employee-performance score.

No platform may combine CQ events or presentation activity with advertising, data brokerage, general personalization, recommendation, employee monitoring, model training, or unrelated fraud systems.

### 16.23 Legacy data and migration

Existing platforms already hold ratings, host or driver feedback, guest notes, customer tags, sentiment, call recordings, transcripts, dispositions, loyalty tiers, and risk labels. These records were created under different prompts, purposes, consent, evidence, access, correction, and incentive structures.

Therefore:

- The initial pilot starts prospectively with newly generated governed NCS and VCI events.
- Existing star ratings are not translated into NCS.
- Existing guest, rider, host, restaurant, or support notes are not parsed into conduct events.
- Existing sentiment, quality, escalation, safety, fraud, or customer-value models are not imported.
- Historical transaction facts may be evaluated only under a separately approved migration profile with notice, reliable identity and interaction matching, current responsibility semantics, correction, legal authority, and fairness testing.
- Historical NCS backfill is prohibited because a new human response cannot be recreated after the fact.
- Any approved VCI backfill is clearly labeled, bounded in time, separately tested, and excluded from pilot benefit eligibility until validated.

Legacy data may be used in synthetic or properly governed aggregate research to identify scenarios and estimate operations. It does not become individual CQ evidence by convenience.

### 16.24 Configuration and change control

Certified configuration includes:

- Enabled profiles, event classes, interaction types, roles, and jurisdictions
- Source-mapping manifests
- NCS prompt, language, sampling, response window, and interface version
- VCI notice, responsibility, evidence, finalization, and exception rules
- Model, context-transfer, confidence, recency, and concentration versions
- Proof and benefit policies
- Retention, review, incident, and baseline rules
- Keys, endpoints, tenants, locations, and feature flags

Changes must be proposed, reviewed, tested, approved, versioned, deployed, monitored, and reversible. A business administrator may select among certified options applicable to the tenant; they may not invent a new conduct event, alter a weight, expose a raw score, or broaden a proof purpose through ordinary configuration.

High-impact configuration changes require separation of duties and an audit record. Emergency disablement may stop issuance or proof use immediately, but permanent semantics follow the standards process.

### 16.25 Reliability and safe degradation

The integration program should define service objectives by function rather than one network-wide uptime promise.

| Function | Availability need | Safe failure |
|---|---|---|
| NCS prompt | Timely within the approved response window; not necessarily synchronous with checkout | Prompt may be delayed or omitted; no assumed response and no worker penalty |
| VCI issuance | Accurate final state is more important than immediate issuance | Queue and reconcile later; no premature adverse event |
| Consumer view | Reliable access with clear freshness status | Show last verified state and outage notice; do not imply current proof availability |
| Proof presentation | Interactive reliability appropriate to the benefit | Tell the consumer privately that proof is unavailable; give the verifier no CQ-specific result and preserve baseline service |
| Benefit fulfillment | Must honor valid completed authorization | Use approved manual or replacement path without exposing CQ |
| Correction and reversal | Timely enough to prevent continuing inaccurate effect | Pause affected event or proof where risk warrants; preserve review rights |
| Audit and monitoring | Durable and tamper-evident | Restrict high-risk changes if audit integrity is unavailable |

Exact availability, latency, recovery, retry, and reconciliation objectives remain profile-specific. Higher service levels must not be purchased by weakening privacy, making issuers observe presentations, or denying baseline service when a dependency fails.

Platform and enterprise integrations need capacity limits, backpressure, health reporting, dependency isolation, tested backup and restore, disaster recovery, and provider-exit exercises. A global outage in one platform should not corrupt the trust status of unaffected issuers.

### 16.26 Observability and audit

The system needs end-to-end observability without end-to-end personal surveillance.

Operational correlation should use transaction- or delivery-specific references rather than a stable consumer identifier. Authorized tooling should reconstruct:

- What interaction and profile produced an event
- Which adapter, schema, configuration, issuer, and key were used
- When the event was received, validated, activated, disputed, corrected, and synthesized
- Which model and proof policy applied
- Whether the consumer authorized presentation
- Whether the verifier validated the proof and fulfilled the benefit
- What review, incident, or remedy occurred

Metrics should include:

- Event and proof volume by tenant and class
- Validation and rejection reason
- Duplicate, delay, ordering, and reconciliation behavior
- Correction, reversal, dispute, and orphan rates
- Prompt eligibility, display, response, decline, and expiry
- Proof request, authorization, decline, eligibility, unavailability, and replay failure
- Benefit activation, fulfillment, replacement, and failure
- Baseline parity, complaint, appeal, incident, and fairness indicators
- Key, configuration, version, and certification health

Ordinary business dashboards must not expose cross-company consumer behavior, individual worker response patterns, security-sensitive detection logic, or small groups that can be reidentified.

Outcome metrics for refusal, insufficient history, nonqualification, dispute, expiry, withdrawal, context mismatch, and technical failure belong in a segregated evaluation or reliability environment. They may be aggregated for approved baseline, fairness, privacy, and operational analysis, but the verifier and participating business must not receive customer-linked nonpresentation states or use them in general dashboards.

### 16.27 Sandbox and conformance program

Open Conduct should provide a vendor-neutral implementation kit containing:

- Machine-readable API and event schemas
- Human-readable semantic specification
- Sample context and source-mapping profiles
- Synthetic identities, interactions, NCS, VCI, corrections, proofs, and benefits
- Mock issuer, verifier, wallet, status, and review endpoints or equivalent test harnesses
- Valid and invalid test vectors
- Signature, authorization, replay, ordering, idempotency, and key-rotation tests
- Accessibility and employee-workflow test cases
- Privacy, tenant-isolation, correlation, and data-minimization tests
- Lifecycle, dispute, reversal, collective-correction, outage, and exit scenarios
- Certification report format and version compatibility matrix

Environments should be clearly separated:

1. **Documentation and examples:** Public and nonoperative.
2. **Developer sandbox:** Synthetic data and nonproduction keys.
3. **Conformance environment:** Controlled test vectors and certification evidence.
4. **Pilot shadow environment:** Governed real events with no business-visible CQ benefit.
5. **Pilot production:** Limited real proofs and benefits under Stage 3 controls.
6. **Production:** General service only after Stage 4 readiness.

Passing functional API tests is insufficient. Certification must also examine data mapping, worker workflow, permissions, privacy, security, review, benefit, baseline, and operational evidence.

### 16.28 Platform-specific starting profiles

#### Restaurant, reservation, and POS platform

Potential source capabilities:

- Guest account or reservation contact
- Venue, reservation, order, payment, cancellation, seating, and completion state
- Staff identity and role
- Loyalty or benefit fulfillment
- Multi-location and independent-business reach

Required exclusions and cautions:

- Do not treat the reservation holder as responsible for every diner's conduct.
- Do not use tip, spend, table duration, VIP status, guest notes, allergies, accessibility, or preference tags.
- A no-show requires notice, attribution, causation, and exception handling.
- Staff input must be separated from ordinary guest notes and management dashboards.

#### Two-sided mobility, lodging, or marketplace platform

Potential source capabilities:

- Authenticated consumer and provider accounts
- Completed interaction and participant roles
- Existing post-transaction worker or provider prompt
- Identity, payment, trip, booking, communication, and partner-benefit infrastructure

Required exclusions and cautions:

- Do not import existing ratings or reviews.
- CQ cannot feed safety, matching, booking acceptance, suspension, or deactivation.
- Contractor and host participation requires labor and power analysis, not an employee assumption.
- Group, guest, rider, booker, payer, and property roles require careful attribution.

#### Customer-support and contact-center platform

Potential source capabilities:

- Authenticated or matched customer
- Human agent identity and assignment
- Conversation, channel, case, status, reply, resolution, and survey events
- Embedded agent applications, APIs, webhooks, CRM links, and multi-client distribution

Required exclusions and cautions:

- Contact frequency, sentiment, handle time, escalation, refund request, complaint, legal language, accommodation, and business cost are not conduct evidence.
- The system must establish whether the business caused the issue and whether the interaction is eligible before prompting NCS.
- Transcripts and recordings remain local and are not scored by AI.
- CQ must not enter agent performance, routing, or customer-priority systems.
- A support benefit cannot change complaint, refund, dispute, accommodation, or legal-right handling.

#### Loyalty and partner-account platform

Potential source capabilities:

- Consumer-authorized account linking
- Partner identity and reconciliation
- Benefit catalog, activation, and fulfillment
- Existing cross-brand consumer relationship

Required exclusions and cautions:

- Points, spend, tier, frequency, and affinity are not conduct evidence.
- Account linkage is not permission to pool histories or market across partners.
- Loyalty partners receive only the proof required for the approved benefit.

### 16.29 Enterprise onboarding and offboarding

Onboarding should proceed through:

1. Readiness and incentive assessment
2. Role, tenant, ownership, workforce, corporate-family, and jurisdiction mapping
3. Data and decision-flow inventory
4. Source-mapping manifest and context selection
5. Consumer, worker, legal, privacy, security, accessibility, fairness, competition, and research review
6. Contract, funding, insurance, audit, incident, remedy, and exit commitments
7. Sandbox implementation
8. Functional, adversarial, privacy, accessibility, and conformance testing
9. Worker and consumer prototype research
10. Shadow release and reconciliation
11. Certification and limited activation
12. Monitoring, audit, and periodic renewal

Offboarding must address:

- New-event cutoff and proof-request cutoff
- Active benefits and outstanding promises
- Event, credential, proof, key, and trust status
- Pending reviews, appeals, incidents, and remedies
- Consumer and worker notice
- Export, portability, deletion, retention, and audit preservation
- Replacement provider or direct consumer continuity
- Removal of software, secrets, permissions, callbacks, and cached data
- Public registry and certification status

A business may leave the network, but it cannot abandon unresolved consumer or worker obligations or make valid consumer history unusable solely because one vendor relationship ended.

### 16.30 Nonfunctional requirements

Each certified profile must define and validate:

- Availability, latency, throughput, burst, retry, and recovery objectives
- Maximum event, proof, and batch sizes
- Accessibility and supported-language behavior
- Clock synchronization and timestamp tolerance
- Data residency and regional routing
- Cryptographic agility and supported algorithms
- Key and certificate lifetimes
- Retention, deletion, backup, and restore
- Pagination, filtering, and rate limits
- Version compatibility and deprecation periods
- Error taxonomy and support escalation
- Incident notification and forensic preservation
- Tenant and environment isolation
- Portability, export, and provider exit
- Test, audit, and certification evidence

Exact numerical requirements should be proportionate to the context and benefit. The standard should avoid enterprise theater—such as demanding extreme real-time availability for a post-interaction VCI update—while being strict where failure could expose data, corrupt standing, or break an active benefit.

### 16.31 Decisions intentionally deferred

The following require the Stage 2 platform and pilot architecture:

- Exact API paths, payload shapes, transport bindings, and code-generation targets
- Canonical event-envelope profile and extension fields
- Credential format, signing suite, wallet, issuance, presentation, and status profile
- Enterprise authorization profile, service identity, and high-assurance key requirements
- Synchronous versus asynchronous operation by workflow
- Issuer-local, pairwise, interaction, tenant, and correlation identifier derivation
- Exact timestamps, ordering rules, retry periods, and reconciliation cadence
- Platform and client responsibility allocation
- Sandbox hosting and conformance tooling
- Service objectives, rate limits, incident deadlines, and deprecation periods
- Historical VCI migration policy, if any
- Production data custody and regional deployment

The logical contracts, rights, and prohibited data uses are not deferred. Technology selection must implement them.

### 16.32 Validation requirements

Before a platform or business processes real CQ evidence or proofs, independent validation must confirm:

- Correct role, tenant, corporate-family, jurisdiction, and responsibility allocation
- Complete data and decision flows with raw data remaining at approved custodians
- Approved source-mapping manifests for every issued field and event
- Human-only NCS submission and explicit AI or automation actor classification
- Interaction and role attribution, including group, delegated, and shared-account cases
- VCI notice, consumer control, causation, finalization, evidence, exception, correction, and reversal
- No import of legacy ratings, free-form notes, sentiment, risk, profitability, or employee-performance data
- Pairwise identifiers and resistance to cross-tenant or cross-verifier correlation
- API, webhook, signature, authorization, key, replay, idempotency, ordering, retry, and reconciliation behavior
- Reproducible synthesis and controlled shadow-model operation
- Purpose-bound proof request, consumer authorization, minimum response, and presentation receipt
- Benefit fulfillment, baseline protection, failure, replacement, and receipt
- Unified challenge, independent appeal, correction, collective remedy, and review-data separation
- Privacy, logging, analytics, support, research, retention, deletion, and government-access boundaries
- Tenant isolation, administrator controls, audit integrity, feature disablement, rollback, and incident response
- Accessibility, language, assisted, shared-device, and non-smartphone workflows
- Sandbox, conformance, adversarial, security, privacy, fairness, and load testing
- Service objectives, safe degradation, backup, recovery, export, offboarding, and provider exit
- Public certification status, supported profiles, versions, limitations, and renewal date

The implementation profile is a **CANDIDATE** until Stage 2 chooses a concrete architecture and pilot coalition. Its integration boundaries, human-only NCS rule, data prohibitions, lifecycle guarantees, proof minimization, baseline protection, tenant obligations, and exit requirements are **CONSTITUTIONAL** and constrain that selection now.

## 17. Operating model and economics

### 17.1 Purpose

The Conduct ecosystem needs enough money, people, systems, and institutional capacity to keep its promises. It must do so without creating financial incentives to collect more personal data, issue more negative events, encourage more proof requests, deny more appeals, weaken standards for sponsors, or turn basic consumer rights into paid services.

The operating model should answer five questions:

1. Who performs each function?
2. Who is accountable when it fails?
3. Who pays its real cost?
4. What financial incentive does that payment create?
5. Can the function continue, correct harm, and wind down safely if a partner or funder leaves?

The project should not confuse a compelling business opportunity with a complete business model. Its economics must support the public-interest infrastructure around CQ as well as the enterprise technology.

### 17.2 Core requirements

1. The economic model MUST preserve the foundational rights, prohibited uses, governance independence, and baseline protections in this specification.
2. Consumers MUST NOT pay to see their records, understand CQ, present an ordinary proof, correct an error, challenge a result, appeal a material decision, withdraw, or use the standard recovery path.
3. Workers MUST NOT pay to participate, respond, obtain support, report retaliation, or exercise review rights.
4. Participating businesses, platforms, operators, members, grants, and sponsors SHOULD fund the ecosystem in proportion to the functions, scale, and risks they create or benefit from.
5. Membership, sponsorship, certification, operating fees, and governance authority MUST remain distinguishable. Payment MUST NOT purchase favorable events, weights, thresholds, audit results, appeal outcomes, standards exceptions, or permanent control.
6. OCA MUST NOT sell, license, broker, advertise against, or monetize consumer conduct histories, proof activity, worker responses, or derived behavioral profiles.
7. Revenue MUST NOT depend on whether an event is positive or negative, whether a consumer qualifies, or whether a challenge is denied.
8. Every consumer-affecting pilot MUST be fully funded through operation, review, remedy, reporting, and orderly wind-down before it begins.
9. Founder labor, consumer and worker participation, accessibility, independent review, and community governance MUST NOT be treated as free hidden inputs.
10. Standards, certification, operation, audit, enforcement, and appeals MUST have separate budgets, controls, and conflict protections proportionate to stage.
11. Penalties and settlements MUST NOT be assumed as recurring operating revenue. Where lawful, they SHOULD prioritize consumer or worker remedy, investigation, or prevention.
12. Fees MUST be transparent, consistently applied, and accessible to smaller organizations and public-interest participants.
13. A critical service MUST have financial reserves, insurance, contractual backing, or another credible continuity and remedy mechanism.
14. OCA SHOULD govern an interoperable market of certified operators rather than automatically owning every technical service.
15. Economic sustainability MUST be evaluated alongside fairness, rights, security, adoption, and business value.
16. OCA MAY earn revenue from governed, privacy-preserving aggregate intelligence and reports that only the ecosystem's common taxonomy and network-wide analytical mandate can produce; it MUST NOT require centralized custody of raw conduct histories or permit person-, worker-, small-group-, or competitor-level reconstruction.
17. Material public-interest findings about safety, fairness, rights, baseline degradation, systemic error, or governance performance MUST NOT be withheld behind membership or report paywalls.
18. Stage 3 rights, evaluation, incident, remedy, benefit, and wind-down funding MUST be committed, liquid or contractually dependable, and usable independently of favorable results, partner continuation, renewal, or ordinary operating approval; revocable promises and unvalued in-kind support do not count as protected capacity.
19. A consumer-affecting release MUST have a funded participation and case-volume ceiling with automatic intake pause before support, review, appeal, incident, accessibility, benefit, or remedy capacity is exceeded.
20. Every revenue family MUST have a full-cost, payer-power, incentive, concentration, cross-subsidy, public-good, and failure analysis before it becomes part of the base operating forecast.
21. Report and benchmark revenue MUST be treated as an unproven Stage 4 diversification candidate until a lawful, privacy-safe product has demonstrated willingness to pay; it MUST NOT be required to complete the first pilot or protect pilot rights.
22. Certification, audit, appeal, evaluation, and material investigation providers MUST be assigned and paid through governed mechanisms that prevent the participant or report client from purchasing its preferred reviewer, scope, outcome, or publication treatment.
23. Participant assessments MAY reflect role, scale, volume, assurance, operational risk, and attributable remediation cost, but MUST NOT reward positive scores, denied appeals, suppressed challenges, selective issuance, or excessive proof requests.
24. Restricted appeal, remedy, benefit, incident, evaluation, and wind-down funds MUST be legally and operationally protected from ordinary runway use and tracked separately from unrestricted operations.
25. Insurance and reserves MUST be modeled against named scenarios, deductibles, exclusions, limits, claim timing, cancellation, tail coverage, insolvency, and uncovered obligations rather than treated as generic assurance.
26. Any OCA-operated technical service MUST have separate cost and access accounting, no certification advantage, a published sunset or structural-review date, and an executable path to replacement or separation.
27. Mandatory public-interest reporting, consumer and worker participation, accessibility, and other noncommercial common goods MUST have explicit base funding rather than depend on leftover report profit or restricted sponsor generosity.
28. Revenue-concentration analysis MUST include cash, in-kind engineering, hosted infrastructure, data access, benefit inventory, staff, distribution, indemnity, and other replacement-cost dependencies.

### 17.3 Economic design principles

#### Mission before volume

The ecosystem is not successful because it produces more scores, events, proofs, certifications, or revenue. It is successful when good conduct can create additional value without degrading ordinary service or human rights.

#### Beneficiaries fund the infrastructure

Businesses and platforms seeking loyalty, trust, workforce, operational, or partner value should bear most direct costs. Consumers and workers contribute evidence and face the greatest rights risk; they should not also finance basic participation or redress.

#### Costs follow responsibility

An issuer pays to map, validate, correct, and substantiate its events. A verifier pays to integrate and fulfill its benefits. A platform pays to operate its integration and tenant controls. Shared fees support the common standards and accountability functions no single participant should control.

#### No outcome-based revenue

OCA, auditors, reviewers, and operators cannot earn more because a person scores higher or lower, because more people become eligible, because more negative events are issued, or because more appeals fail.

#### Rights are infrastructure

Explanation, correction, appeal, accessibility, worker protection, incident response, and remedy are not customer-service extras. Their costs belong in the base model.

#### Open standard; accountable certification

Core specifications should be publicly implementable. Fees may support membership, conformance, certification, marks, operations, and services; they should not make the semantic standard available only to paying incumbents.

#### Portability includes institutional exit

Consumers and businesses should not lose valid history or active rights when a wallet, platform, operator, funder, or OCA service changes. Exit and transition are funded operating responsibilities.

### 17.4 Preferred institutional model

The mature ecosystem should separate a public-interest standards institution from a competitive operating market.

Four broad models are possible:

| Model | Advantage | Structural problem | Posture |
|---|---|---|---|
| Central commercial platform | Fast product decisions, integrated user experience, and concentrated funding | One company controls data, formula, access, pricing, partners, appeals, and exit; commercial incentives can drive function creep | Not appropriate as the long-term shared standard |
| Standards-only association | Lightweight, open, and compatible with many implementers | Cannot by itself ensure rights, audit, appeal, remedies, operator continuity, or consistent consumer experience | Useful foundation but insufficient alone |
| Vertically integrated nonprofit | Mission lock and simpler initial accountability | Institution certifies and audits services it also operates, concentrates data and failure risk, and may crowd out better providers | Possible temporary pilot structure with separation, not the default destination |
| Federated public-interest ecosystem | Common rules and rights with replaceable certified services and distributed custody | More coordination, conformance, governance, and funding complexity | **Preferred mature model** |

The preferred model asks OCA to be strong where common legitimacy is necessary and restrained where competitive operation and replaceability are healthier.

#### OCA common functions

OCA should fund and govern:

- Standards, schemas, context profiles, benefit policies, rights, and prohibited uses
- Public decision, change, risk, and open-question records
- Trust and certification registries
- Conformance specifications, test suites, marks, and certification oversight
- Model governance, reference simulations, and change review
- Consumer and worker rights standards
- Appeal, remedy, incident, and enforcement frameworks
- Auditor, reviewer, and operator accreditation
- Public-interest research, transparency, regional profiles, and regulatory coordination
- Governance participation, accessibility, translation, and funded affected-party representation

#### Certified service operators

Competing or replaceable certified operators may provide:

- Identity proofing and account continuity
- Wallets and credential custody
- Event validation or exchange
- Synthesis and credential issuance
- Proof gateways and status services
- Consumer portals and support
- First-line review or independent appeals
- Security, privacy, fairness, accessibility, and financial audits
- Research environments and controlled data access

#### Platforms and participating businesses

Platforms and businesses provide and fund:

- Source-system integration and data quality
- Worker workflow and protection
- NCS and VCI issuance, correction, and substantiation
- Consumer enrollment and account-linking support where applicable
- Proof-request integration
- Baseline service
- Benefit design, funding, fulfillment, replacement, and receipt
- Participant-specific support, incident response, audit access, and remedies

OCA may temporarily operate a shared service during an early funded pilot when no independent provider exists. That service needs separate accounts, management, access, reporting, and a documented path to competition or structural separation.

### 17.5 Operating responsibilities and payer logic

| Function | Primary operator | Primary payer | Economic safeguard |
|---|---|---|---|
| Public specification and governance | OCA or founder-led project by stage | Membership, grants, pooled sponsorship, public-interest funding | No sponsor control; public standard remains available |
| Enterprise integration | Platform and participating business | Platform, business, or pilot sponsor | No standards exception or exclusive ownership |
| NCS workflow | Business/platform issuer | Issuing business | No fee by response polarity or worker completion |
| VCI issuance and correction | Business/platform issuer | Issuing business | Issuer pays the cost of its own data quality and correction |
| Identity and recovery | Certified operator | Ecosystem or participating business | Free standard consumer path; no pay-for-better-standing |
| Synthesis and credentials | Certified operator | Enterprise/network fees or pooled infrastructure budget | No fee tied to score level or eligibility result |
| Proof verification | Verifier, wallet, or proof operator | Verifier or network fee | Volume pricing must not encourage excessive queries |
| Benefit | Participating verifier/business | Benefit provider | Cannot relabel baseline entitlement or charge nonparticipants |
| Consumer explanation and first-line review | Responsible issuer/operator | Issuer/operator plus pooled rights funding | No consumer fee and no denial incentive |
| Independent appeal | Accredited independent provider | Pooled appeal fund | Reviewer not paid based on outcome; no complainant fee |
| Certification and audit | Independent accredited function | Certified participant through published fees | Financial separation, rotation, no opinion shopping |
| Enforcement and systemic investigation | OCA independent function | General operating fund, dedicated reserve, or assessed remediation | Fines are not operating-budget assumptions |
| Research and public reporting | OCA and independent researchers | Grants, general fund, approved research sponsors | Sponsor cannot suppress or preapprove findings |
| Incident and remedy | Responsible operator plus shared mechanisms | Responsible participant, insurance, reserve, or remedy fund | Funds available before harm occurs |

The table defines economic direction, not final legal liability. Contracts and law may allocate specific costs differently, but cannot erase the consumer or worker protections funded by the model.

### 17.6 Stage 0: sustainable founder-led operation

Stage 0 should remain inexpensive, honest, and bounded.

Expected costs include:

- Domains, basic hosting, forms, email, and newsletter tools
- Document, design, research, and security tools
- Limited legal, trademark, privacy, and entity advice where needed
- Occasional accessibility, editorial, technical, or specialist review
- Founder time for writing, synthesis, relationship development, and version control

The default Stage 0 model is founder-supported publication with a recorded expense and contribution ledger. It does not need membership dues, a paid community, a public donation campaign, a full legal entity, or a recurring service organization merely to publish the idea.

If voluntary financial support is accepted, it should use clear terms stating:

- What the supporter is funding
- Whether the payment is a gift, sponsorship, service payment, grant, or refundable pilot commitment
- What recognition, if any, is provided
- That payment does not purchase a score, certification, partnership claim, governance authority, or future commercial right
- How material support and conflicts will be disclosed
- What happens if the project pauses or does not advance

Stage 0 must not promise support, review, uptime, or deliverables that convert personal enthusiasm into an unfunded obligation. The founder may pause work and is not expected to absorb costs required for a later stage.

### 17.7 Stage 1: contributor and advisory economics

Stage 1 may need modest funding for structured review, research, accessibility, and participation. It should still avoid premature organizational overhead.

Possible mechanisms include:

- Small unrestricted grants or sponsorships
- Fiscal sponsorship or an administrative host for defined funds
- Bounded paid review or research sprints
- Stipends for consumers, frontline workers, disability advocates, and other public-interest contributors
- Reimbursement for access, travel, translation, childcare, technology, or other participation costs
- Donated professional services recorded at their nature and materiality

Company experts may contribute as part of their paid employment, but their participation and affiliation must be transparent. Public-interest and worker participants should not be expected to match corporate resources through unpaid labor.

Stage 1 funding should purchase work product and participation capacity—not committees, titles, endorsements, or implied governance power.

### 17.8 Stage 2: funded pre-pilot organization

Stage 2 begins when the project accepts material funding, pays recurring contributors, signs development or research partners, builds working systems, or handles controlled nonproduction data.

At this stage the project needs an appropriate legal and financial home, which may initially be a fiscal sponsor, hosted project, or separate entity depending on counsel and operating needs.

The Stage 2 budget should include:

- Project and operations leadership
- Technical architecture, implementation, sandbox, and conformance work
- Data science, simulation, research, and independent evaluation
- Consumer, worker, accessibility, civil-rights, labor, privacy, security, and ethics participation
- Legal, accounting, tax, contracts, intellectual property, competition, and regulatory work
- Insurance, security, vendor, and incident readiness
- Partner discovery, integration assessment, and prototype research
- Communications, public documentation, contribution management, and translation
- Founder compensation for defined ongoing work where funded
- Contingency and orderly wind-down

Stage 2 should not depend on one person simultaneously acting as executive, product lead, standards editor, fundraiser, security officer, support desk, appeal reviewer, and bookkeeper.

Funding should be sufficient for a defined work plan and decision point. It need not pre-fund full production, but it must cover the work already promised and the cost of stopping responsibly.

### 17.9 Stage 3: fully funded consumer-affecting pilot

A Stage 3 pilot cannot begin on “we will staff it if users show up.” Before real events, CQ, proofs, or benefits exist, the pilot needs committed funds and accountable providers for:

- Platform and business integration
- Identity, event, synthesis, credential, proof, and benefit systems
- Consumer and worker recruitment, compensation, support, and accessibility
- First-line explanation and review
- Independent appeals
- Legal, security, privacy, fairness, accessibility, labor, competition, and research oversight
- Audit, conformance, monitoring, incident response, and public reporting
- Benefit fulfillment and replacement
- Correction, compensation, collective remedy, and insurance
- Data export, credential expiry, vendor exit, participant notice, and wind-down
- Contingency for higher-than-expected challenge, appeal, incident, and support volume

The funding commitment should cover the planned pilot, a defined extension decision, and a wind-down and remedy tail. Launch funding that ends on the final interaction date is inadequate because disputes, corrections, incidents, analysis, reporting, and data disposition continue afterward.

Funding is counted only when it is realistically available for the promised function. Conditional sponsorship, a partner's revocable internal headcount, hoped-for fundraising, projected report sales, unpriced cloud credits, discretionary benefit inventory, or an unfunded promise to absorb incidents does not equal protected pilot capacity. Material in-kind support must be assigned a replacement cost, owner, availability term, exit assumption, and fallback.

The pilot must set maximum enrolled consumers, eligible interactions, worker prompts, active proofs, benefit obligations, ordinary cases, simultaneous urgent matters, and incident exposure based on funded capacity. Monitoring should pause new enrollment, issuance, portability, or proof use before a queue exceeds its safe operating limit. A capacity pause preserves baseline service and is not a negative consumer or worker signal.

Pilot partners should fund their direct integration and benefit costs plus an equitable share of common governance, rights, assurance, and evaluation costs. Common funds should be pooled and governed so no single sponsor can threaten an appeal, audit, standard, or publication decision by withholding a particular invoice.

### 17.10 Stage 4: diversified production economics

Production requires recurring revenue rather than continuing dependence on pilot sponsors.

The mature model should combine several sources:

- Tiered organizational membership dues
- Role- and deployment-specific certification and renewal fees
- Conformance testing and mark licensing
- Cost-based shared-service or network fees where OCA or certified operators provide actual services
- Grants and philanthropic support for public-interest research, access, rights, and regional development
- Sponsored work with transparent scope and no control of conclusions
- Training, events, implementation education, and publications that do not paywall the standard
- Governed aggregate intelligence, member benchmarks, commissioned diagnostics, and recurring reports that do not expose people, workers, competitors, or raw network data
- Public-sector, foundation, or research contracts aligned with the mission

No one source should be necessary to protect basic rights. The final mix should cover ordinary operations, reserves, public-interest participation, and planned renewal without assuming continual emergency fundraising.

### 17.11 Membership model

Membership can fund common standards and governance while creating a committed community. It should not become a club whose largest checks control the rules.

Potential membership classes include:

- Individual contributors
- Consumers and workers
- Nonprofits, advocacy organizations, labor organizations, and research institutions
- Governments and public bodies
- Small businesses and startups
- Large operating businesses
- Platforms and technology providers
- Certified operators and professional-service providers

Dues should vary by organization size, revenue, type, and possibly region. Current W3C practice demonstrates that a standards body can vary [membership fees by revenue, organization type, and headquarters location](https://www.w3.org/Consortium/fees.php?showall=1). OpenID Foundation similarly uses [scaled individual, nonprofit, small-organization, and large-organization tiers](https://openid.net/foundation/benefits-members/).

OCA should borrow the principle, not current fee amounts or governance mechanics.

Membership dues may support participation benefits such as working-group access, educational programming, early conformance pilots, reduced certification fees, approved benchmark reports, recurring ecosystem intelligence, and analyst briefings. Dues must not purchase:

- More event or model weight
- Broader access to consumer data
- Raw network data, named-competitor intelligence, small-cell analysis, or rights-critical findings withheld from the public
- Certification without conformance
- A favorable audit or appeal
- Permanent veto, governing majority, or rights exception
- Exclusive implementation rights
- Priority over consumer or worker interests

Core standards, rights rules, public registries, and public review should remain meaningfully accessible to nonmembers. Funding support should not be required merely to submit public feedback or contribute to an open implementation; the Linux Foundation's hosted-project model offers one example in which [funding is not required to contribute](https://www.linuxfoundation.org/projects/hosting).

### 17.12 Certification and conformance economics

Certification creates real cost: test infrastructure, review, staff, marks, registry, renewal, monitoring, complaints, and enforcement. Fees should recover those costs without turning certification into either a profit center or a barrier protecting incumbents.

The certification model should:

- Charge by certified role, implementation, deployment family, or risk profile rather than consumer outcome
- Publish the fee schedule and included services
- Separate certification payment from the decision
- Offer lower-cost or waived pilot testing where participation improves the standard
- Provide waivers or subsidies for qualifying open-source, nonprofit, small, and public-interest implementations
- Require the same substantive tests regardless of fee tier
- Publish certifications, profiles, versions, limitations, status, and expiry
- Require renewal after material change or on a defined cycle
- Fund complaints, monitoring, suspension, and mark enforcement

OpenID Foundation provides a useful precedent: it maintains public conformance certification, charges deployment fees to support the program, and offers [fee-waiver consideration for qualifying open-source projects](https://openid.net/certification/open-source-project-certification-policy/). OCA must add stronger independence because its certifications affect consumer and worker rights, not only technical interoperability.

An auditor or certification reviewer should not be paid a success fee. The participant may fund the process through a published assessment, but OCA should control assignment, rotation, scope, and reporting to reduce opinion shopping.

Fees for initial review, renewal, surveillance, complaint handling, and enforcement should be costed separately. Certification revenue cannot assume that most applicants pass quickly or that few complaints occur. Participants pay a published assessment into the governed program; they do not directly negotiate the assigned reviewer's fee, scope, findings, or timetable. Remediation and retesting charges may recover additional work under published rules without creating a pay-until-pass path.

### 17.13 Shared-service and usage fees

If OCA or certified operators provide identity, event exchange, synthesis, credential, status, proof, or support services, fees should reflect actual operating cost and risk.

Possible pricing units include:

- Certified tenant or deployment
- Active enterprise integration
- Active credential or account relationship
- Event-processing volume band
- Proof-verification volume band
- Support and review capacity band
- Regional or assurance profile
- Dedicated service or contractual service level

Pricing should ordinarily use predictable tiers, subscriptions, pooled assessments, or committed capacity rather than a fee on every individual human judgment.

The model must avoid:

- A fee per positive or negative NCS response
- A fee that increases when CQ rises or falls
- A commission on benefit value
- A fee for a consumer to become eligible
- A verifier pricing model that encourages querying CQ on every possible interaction
- A review fee that discourages correction
- A penalty fee that becomes necessary to meet the operating budget

Usage fees should fund variable cost, not define governance influence. Certified operators may compete on price and service while remaining bound to common portability, rights, and exit requirements.

Shared-cost assessments should combine a predictable base with role-, scale-, capacity-, and risk-sensitive bands. Charging more where an integration creates more operational work or assurance burden is legitimate; charging more because a consumer scores poorly or appeals successfully is not. Extraordinary remediation caused by a participant's validated defect may be assessed to that participant without making penalties or appeal outcomes part of the ordinary revenue forecast.

### 17.14 Grants, sponsorship, and philanthropic funding

Grants and sponsorship can fund research, standards, accessibility, public-interest participation, early implementation, and work that commercial fees would underprovide.

Every material restricted contribution should document:

- Funder and amount or value
- Purpose and permitted uses
- Duration and deliverables
- Selection and publication authority
- Data and intellectual-property rights
- Conflicts and relevant commercial interests
- Independence, termination, and nonretaliation terms
- Whether funding is renewable and what happens if it ends

Sponsors may fund a pilot, research question, conformance tool, event, or accessibility program. They cannot preapprove findings, suppress unfavorable results, select individual appeal outcomes, obtain confidential competitor information, or require a proprietary standard.

Anonymous material funding is generally incompatible with public infrastructure where the identity could reveal a conflict. Narrow donor privacy may be protected, but governance must be able to assess influence and concentration.

### 17.15 Prohibited and restricted revenue

OCA and required ecosystem services must not rely on:

- Sale, licensing, brokerage, or advertising use of personal or conduct data
- Sale of raw NCS, VCI, CQ, event, proof, challenge, or employee information
- Paid score improvement, repair, boosting, deletion, reset, or accelerated redemption
- Consumer subscriptions for stronger standing or better review rights
- Employer, landlord, lender, insurer, government, advertiser, or data-broker access
- Fees tied to negative events, positive events, eligibility, denial, challenge rejection, or enforcement volume
- Business payments for hidden model adjustments, issuer leniency, context expansion, or audit exceptions
- Exclusive licensing of essential standards or conformance materials
- Commissions on participating-business prices, deposits, credit, insurance, or restricted benefits
- Fines or forfeitures treated as dependable operating income

Restricted revenue requiring heightened review includes:

- Transaction- or proof-volume fees
- Certification discounts linked to membership
- Sponsored research by a party with a direct outcome interest
- Vendor referral or marketplace fees
- Training or consulting sold by the same function that certifies the buyer
- Paid priority support for businesses where it could delay consumer rights
- Licensing of marks, test suites, or implementation software

The question is not only whether a payment is legal. It is what behavior the payment rewards and whether another party bears the risk.

### 17.16 Consumer and worker economic rights

The free standard consumer path includes:

- Enrollment or participation where the business offers CQ
- Viewing events, dimensions, context, confidence, and status
- Plain-language explanation
- Ordinary proof presentation for an offered benefit
- Proof and benefit receipts
- Correction, challenge, and material appeal
- Withdrawal and permission management
- Accessible and assisted participation
- Standard account security, recovery, export, and portability
- Incident notice and available remedy

A consumer may choose a third-party premium wallet or concierge service only if a fully functional free path exists and payment does not change CQ, evidence, proof eligibility, priority of rights, or remedy. OCA should scrutinize such services for coercion and misrepresentation.

Workers should perform pilot NCS activity as paid work or receive appropriate compensation. Time spent in required training, review, appeal participation, safety response, or research must be accounted for under applicable labor rules and partner agreements.

No consumer or worker should need professional representation to use the ordinary process. Where a matter becomes complex or high stakes, the system should support advocates, representatives, or legal rights without penalizing the person.

### 17.17 Pilot-partner funding model

The Stage 3 coalition should use a written common budget plus participant-specific budgets.

#### Common pilot budget

- Standards and context profile
- Interim governance and rights representation
- Shared technical components and conformance
- Independent evaluation and public reporting
- Security, privacy, fairness, accessibility, and legal review
- Appeal capability, remedy reserve, insurance, and incident exercises
- Consumer and worker participation support
- Common documentation, communications, and wind-down

#### Platform budget

- Product and API integration
- Tenant, identity, key, workflow, and data controls
- Worker and client onboarding
- Technical operation, support, incident, export, and removal

#### Operating-business budget

- Source data mapping and correction
- Worker time, training, protection, and support
- Baseline measurement
- Benefit funding and fulfillment
- First-line consumer support and remedies attributable to its operation

#### Independent-provider budget

- Evaluation, audit, appeals, security testing, accessibility testing, research, or other contracted work

Funding shares may reflect size, role, volume, and ability to pay, but no allocation may relieve a participant of the obligations it controls. In-kind contributions should be valued and disclosed so a platform's donated engineering or a founder's unpaid labor does not disappear from the true cost model.

### 17.18 Funding independence and concentration

Financial independence requires more than balanced votes.

Controls should include:

- A cap or escalating review for the share of annual funding from one company, corporate family, sector, vendor, or government
- Public disclosure of material funders and restricted purposes
- A reserve sufficient to withstand the exit of a major funder
- No funder-specific veto over standards, certification, audit, publication, appeal, or enforcement
- Multi-year funding where abrupt withdrawal would threaten rights
- Separate general, restricted, appeal, remedy, and service funds
- Recusal for funding negotiations and decisions presenting conflicts
- Board and public reporting on concentration and dependency
- A transition plan when concentration exceeds the approved tolerance

The exact cap remains open. A temporary early-stage exception may be necessary if one sponsor funds a pilot, but the exception must be visible, time-limited, counterbalanced by governance and contractual independence, and accompanied by a diversification plan.

Concentration must be measured by replacement cost and operational control as well as booked revenue. A platform contributing most engineering, hosting, identity, worker access, data, benefit inventory, indemnity, or distribution may be the dominant funder even if its cash share is modest. The stress test should assume simultaneous loss of the largest cash funder, in-kind contributor, report client, and technical dependency when those roles are related.

### 17.19 Founder role, compensation, and project assets

The operating model should be candid about founder economics.

During Stage 0, Brent may personally fund expenses and contribute time at his discretion. That contribution should be recorded, not treated as an unlimited promise.

Once funding supports substantial project work:

- The founder may receive reasonable compensation for defined editorial, strategy, relationship, operating, or leadership responsibilities.
- Compensation should be approved through the conflict process appropriate to the stage and disclosed at a level appropriate to a public-interest organization.
- Reimbursement for documented project expenses is distinct from compensation.
- Workload, authority, deliverables, term, and succession should be explicit.
- The project should fund administrative and operational help rather than convert every new dollar into additional founder obligations.

At Stage 0, project names, domains, documents, marks, and other assets may remain under founder control. Before material contribution, funding, partnership, or pilot, the project needs written licensing, contribution, succession, and future-transfer terms.

A future OCA may acquire or receive a durable license to essential project assets under a fair documented arrangement. Founder recognition and reasonable compensation are legitimate; a perpetual private toll on every event, proof, consumer, or implementation would undermine the shared-infrastructure mission.

The founder is not financially responsible for scaling the system to Stage 3. A live pilot begins only when partners and funding support an operating team and independent functions.

### 17.20 Compensation and participation

Compensation should reflect responsibility, expertise, time, emotional burden, and power imbalance.

The model should budget for:

- Staff and contractors performing sustained operating work
- Consumers and workers contributing to governance, research, design, and red-team exercises
- Independent reviewers, appeal panelists, auditors, and investigators
- Accessibility, translation, facilitation, trauma-informed support, and representation
- Travel, childcare, technology, connectivity, and other access costs
- Emergency and after-hours work where the operating model requires it

Volunteer contribution can remain valuable for open standards and community work, but critical consumer rights, security, appeal, incident, and remedy functions cannot depend solely on volunteers.

Pay rates and selection should avoid creating a class of nominal representatives who are compensated to endorse predetermined decisions. Participation funding supports independence, not alignment.

### 17.21 Cost model

The ecosystem should model fixed, variable, episodic, and tail costs separately.

#### Fixed common costs

- Governance, standards, legal, finance, administration, public documentation, core technology, registries, conformance, baseline staffing, insurance, and accessibility

#### Variable operating costs

- Event validation, storage, credential issuance, proof verification, communications, support, correction, review, and monitoring

#### Episodic costs

- Certification, audits, model changes, security testing, research studies, incidents, investigations, regional expansion, and major migrations

#### Tail and contingency costs

- Appeals after pilot close, collective correction, breach response, benefit replacement, compensation, litigation, data disposition, vendor exit, and institutional wind-down

A conceptual annual cost model is:

```text
Total ecosystem cost =
  common governance and standards
  + shared technical operations
  + participant integration and benefit costs
  + rights, review, and remedy operations
  + assurance, research, and public reporting
  + reserves, insurance, and contingency
  + funded access and participation
```

Useful unit measures may include cost per certified tenant, active participant, eligible interaction, issued event, active credential, proof request, fulfilled benefit, explanation, challenge, appeal, incident, and correction. These measures support capacity and pricing; they must not be used to ration legitimate rights or pressure workers to avoid negative responses.

The cost model must also state which costs are controllable through volume limits and which remain tail obligations after intake stops. Appeals, correction, incident response, breach notice, benefit replacement, evaluation, record disposition, and final reporting may continue after revenue and new activity end. Normal, stress, severe-but-plausible, sponsor-exit, operator-failure, and wind-down scenarios should be modeled separately.

### 17.22 Business value model

Businesses do not pay for a favorable score. They pay for the ability to participate in a trusted, interoperable relationship system.

Potential value hypotheses include:

- More meaningful loyalty and recognition than spend alone
- Stronger preference, retention, or engagement among participating consumers
- Better experiences for frontline workers
- Lower frequency or severity of harmful interactions
- More confidence when beginning a relationship with an unknown consumer
- Additional value from platform and brand partnerships
- Reduced need for bespoke cross-company trust integrations
- Differentiation in an increasingly automated customer experience
- Better recognition of consumers who use services responsibly without being high spenders
- Insight into business-caused friction that existing customer-value systems hide

These are hypotheses until the pilot measures them. Public or commercial materials must not promise reduced employee turnover, lower support cost, higher retention, fraud reduction, or revenue lift without appropriate evidence.

The model must also identify who captures value. A platform may gain distribution, a brand may gain loyalty, a worker may experience less abuse, and a consumer may receive recognition. Pricing and governance should not allow the platform or largest brand to capture the value while consumers, workers, and small businesses absorb the costs and risks.

### 17.23 Ecosystem intelligence and report revenue

The shared standard may create a valuable form of business intelligence without turning OCA into a centralized infrastructure or behavioral-data company.

OCA's distinctive asset should be a **governed network lens**: common event definitions, validated measures, cross-participant coverage, independent analytical authority, and the ability to run approved questions across distributed data. No individual member—including a large airline, platform, or data vendor—should possess the same complete and independently governed view.

This does not require OCA to receive or warehouse raw NCS responses, VCI events, consumer histories, proof attempts, employee records, or identifiable transaction data. Certified custodians may retain source data while approved analytics use federated queries, secure aggregation, controlled research environments, data-clean-room patterns, privacy-preserving computation, or another validated architecture. OCA may receive only the thresholded aggregate outputs and supporting audit evidence necessary to produce the approved report.

Potential report families include:

1. **Public ecosystem reports:** Periodic reports on consumer–business conduct, worker experience, operational friction, complaints and accommodations, adoption, portability, fairness, and system health. These can create public interest, press attention, consumer understanding, and early business adoption.
2. **Member benchmark reports:** A participating business sees its own results against sufficiently broad, privacy-safe cohorts—for example, how its operational failures relate to NCS, where its customers encounter avoidable friction, how outcomes differ by interaction type, or where its performance diverges from an approved industry benchmark.
3. **Member diagnostic reports:** Governed analysis combining a member's own identifiable or detailed internal data, which remains under that member's control, with OCA-approved aggregate benchmarks. The output may identify issues the member's loyalty, support, and operational systems do not reveal independently.
4. **Industry and cross-industry research:** Reports on validated patterns across interaction functions, channels, regions, or industries where the aggregation has legitimate meaning. Cross-context reporting does not authorize individual CQ context transfer.
5. **Standards and system-performance intelligence:** Reporting on event quality, missingness, challenges, reversals, benefit fulfillment, baseline parity, integration performance, and emerging risks needed to improve the standard and participant operations.

For a participating airline, the value should not be “OCA sells Delta what it knows about United's customers.” A defensible version is: Delta can learn how its own customer and worker outcomes compare with a sufficiently broad airline cohort; which of its operating conditions are associated with avoidable human friction; where company-caused failures are being misread as consumer conduct; how different interaction functions perform; and which approved interventions improve balanced outcomes. Competitor identities, consumer histories, commercially sensitive strategy, and small cells remain protected.

Possible revenue models include:

- Annual member access to governed benchmark and ecosystem-intelligence products
- Higher membership tiers with additional approved report depth, cadence, or analyst support—not broader access to personal data
- Fixed-fee commissioned analysis using the member's own data and approved aggregate benchmarks
- Subscriptions to recurring industry or operating-function reports
- Sponsored public research with disclosed funding and OCA-controlled methods, conclusions, and publication
- Training, briefings, and executive workshops based on published or licensed report findings

The report model must preserve four distinct data products:

| Product | Audience | Access rule |
|---|---|---|
| Mandatory public-interest reporting | Everyone | Public by default; includes material safety, fairness, rights, baseline, error, governance, and ecosystem-health findings |
| Public editorial and adoption reporting | Consumers, press, policymakers, prospective participants | Public, privacy-safe, methodologically documented, and never pay-to-praise |
| Member benchmarks and diagnostics | Participating organizations | Paid access may add depth and service, but only within approved cohorts, purposes, and privacy rules |
| Independent research access | Qualified researchers and public-interest reviewers | Controlled under Section 12.25 with independence and publication protections |

Suite G establishes the following ecosystem-intelligence architecture requirements:

| ID | Requirement | Status |
|---|---|---|
| EIR-001 | Each approved report family MUST use a predetermined purpose, data authority, cohort, query, privacy, retention, output-review, correction, and publication profile. | CONSTITUTIONAL |
| EIR-002 | The lead portfolio architecture MUST combine report-specific protected mechanisms; a client MUST NOT choose the least restrictive mechanism for its requested result. | REQUIRED FOR COHERENCE |
| EIR-003 | Secure aggregation or an equivalently protected mechanism SHOULD be the preferred computation for repeatable public and benchmark statistics when it can answer the approved question. | CANDIDATE |
| EIR-004 | Federated report queries MUST be fixed, signed, versioned, purpose-bound, auditable, and executed against a reconcilable eligible source universe. | CONSTITUTIONAL |
| EIR-005 | A central aggregate store MAY retain specific governed report outputs and reproducibility evidence, but MUST NOT become an indefinitely sliceable or composable network warehouse. | CONSTITUTIONAL |
| EIR-006 | A controlled research environment MAY support exceptional approved research or analysis of a member's own detailed data against protected network benchmarks; it MUST NOT provide ordinary access to network person-level synthesis. | CONSTITUTIONAL |
| EIR-007 | Open-ended member queries, arbitrary cohort construction, network microdata access, and person-level report APIs are prohibited. | REJECTED |
| EIR-008 | Every report MUST enforce minimum cell, independent-participant, dominance, rarity, sensitivity, time-window, query-budget, complementary-suppression, and auxiliary-data rules appropriate to its output. | CONSTITUTIONAL |
| EIR-009 | When any privacy, competition, completeness, contribution, correction, or purpose gate fails, the report system MUST return no output rather than weaken the gate, add a misleading label, or sell an exception. | CONSTITUTIONAL |
| EIR-010 | All data contributors MUST supply the governed eligible source universe, corrections, reversals, missingness, exclusions, and source-change evidence; selective favorable contribution is prohibited. | CONSTITUTIONAL |
| EIR-011 | Query limits MUST accumulate across time, report versions, analysts, clients, interfaces, related parties, and colluding requests; individually compliant outputs MUST NOT evade composition review. | CONSTITUTIONAL |
| EIR-012 | A member diagnostic MAY combine that member's own detailed data with protected network benchmarks, but MUST NOT reveal or enable inference about a named competitor, consumer, worker, incident, or source contribution. | CONSTITUTIONAL |
| EIR-013 | Paid depth MAY add approved report families, cadence, analyst service, interpretation, training, or implementation support; it MUST NOT add raw data, arbitrary queries, smaller cells, weaker privacy, favorable methods, or standards influence. | CONSTITUTIONAL |
| EIR-014 | A material safety, fairness, rights, baseline, security, systemic-error, or governance finding MUST enter an independently controlled public-interest escalation path that payment or confidentiality cannot block. | CONSTITUTIONAL |
| EIR-015 | Report demand or revenue MUST NOT justify broader conduct capture, new personal fields, longer source retention, additional proof observation, weaker suppression, or conversion into an audience or risk product. | CONSTITUTIONAL |
| EIR-016 | Every published or paid output MUST retain a privacy-safe versioned metric, cohort, source, query, suppression, funding, limitation, correction, and restatement manifest sufficient for governed rerun and review. | CONSTITUTIONAL |

OCA MUST NOT use report revenue to:

- Sell, license, or expose person-level conduct histories, proof activity, worker responses, complaint narratives, or derived behavioral profiles
- Reveal or enable inference about a named competitor's nonpublic performance, customers, workers, strategy, or contribution to a cohort
- Produce small-cell, rare-event, location, role, or time-slice analysis that creates material reidentification risk
- Rank consumers, workers, or businesses through a public league table
- Let a paying member choose definitions, exclusions, comparison cohorts, model treatment, findings, or publication timing to manufacture a favorable result
- Give higher-paying members preferential event weight, proof treatment, standards influence, audit outcomes, or access to the raw network
- Withhold material evidence of harm, discrimination, retaliation, baseline degradation, systemic error, security failure, or governance failure because disclosure would reduce report or membership revenue
- Convert approved analytical access into an open-ended query service, advertising product, risk-scoring feed, or data-broker relationship

Every report product requires:

- An approved purpose and data-use authority
- A versioned metric dictionary and context definition
- Data-contribution, completeness, and comparability rules
- Minimum cohort, cell-size, concentration, and dominance thresholds
- Privacy, reidentification, competition, trade-secret, labor, and consumer-rights review
- Query logging, access controls, output review, retention, and audit
- Clear separation between public-interest findings and member-confidential diagnostics
- Disclosure of methodology, funding, limitations, missingness, uncertainty, and prohibited inferences
- A rule for when an initially confidential finding must become public because it reveals material ecosystem harm
- Independent authority to reject or revise a requested analysis

Report revenue is compatible with D-204 only when OCA sells analysis and institutional insight—not access to a consumer, worker, event stream, proof history, or derived personal profile. The data architecture must make that distinction enforceable rather than relying on contractual wording alone.

Report revenue should not appear as committed base revenue until an approved product has demonstrated that buyers will pay for useful outputs within the privacy, competition, cohort, publication, and independence constraints. Early commissioned work may fund its own governed analytical cost and contribute to common overhead; it cannot be used to justify rights capacity whose continuation depends on the same client renewing.

Suite G v0.1 makes the hybrid-by-report-family candidate the lead portfolio architecture. Secure aggregation becomes the preferred recurring-statistics component where adequate, and fixed federated queries become the lead practical early component. A central aggregate store is restricted to governed noncomposable report outputs; controlled research environments are restricted to exceptional approved use; and open-ended member querying is rejected. The comparison confirms that small cells, repeated queries, contributor dominance, selective contribution, administrative concentration, and revenue pressure can defeat an apparently aggregate system. Unsafe outputs therefore fail closed. Suite G demonstrates structural possibility only; it does not establish a buyer, report, threshold, technology, lawful data right, willingness to pay, price, or production architecture. Stage 3 remains modeled with report revenue at zero.

### 17.23A Revenue firewalls and cross-subsidy

OCA may operate several economically related programs, but it must know which program is funding which promise and which payer could threaten it.

Required program ledgers should distinguish:

- Public standard, governance, participation, and mandatory public-interest reporting
- Certification, surveillance, complaint, and mark enforcement
- Shared technical services operated by OCA, if any
- Consumer and worker rights, appeal, accessibility, and remedy
- Independent evaluation, research, and system-health reporting
- Member education, community, and ordinary benefits
- Commercial benchmark, diagnostic, subscription, training, and briefing products
- Restricted grants, sponsored projects, reserves, insurance proceeds, and wind-down funds

Cross-subsidy may be mission-aligned—for example, commercial report surplus supporting public research or participation—but it must be explicit, budgeted, and stress-tested. A rights function cannot be described as independently funded when its staff disappear if one report client, certification applicant, sponsor, or platform leaves. Conversely, unrestricted common funds should not silently subsidize below-cost private diagnostics that primarily benefit one member.

The budget should show direct cost, allocated common cost, variable cost, tail obligation, payer concentration, restricted funding, subsidy, reserve contribution, and replacement cost by program. Internal transfer pricing is an accountability tool, not an invitation to treat OCA functions as profit-maximizing business units.

No commercial team controls the intake, methods, provider assignment, conclusion, publication, appeal, certification, enforcement, or harm-escalation decision of the function its revenue supports. Compensation for sales, membership, reports, certification, or services cannot be tied to favorable results, qualification rates, suppressed findings, renewal after a weak audit, or expansion of data access.

### 17.24 Pricing principles

Enterprise pricing should be:

- Predictable enough to budget
- Proportionate to organization size, role, scale, and risk
- Independent of individual outcomes
- Published or governed through a published method
- Neutral among interoperable vendors
- Accessible to small businesses, nonprofits, open-source projects, and new entrants
- Sufficient to fund rights and exit, not merely API uptime
- Reviewable for competition and disparate effects

The preferred mature structure is likely:

1. Tiered membership for common standards and governance
2. Certification fees for each role or deployment
3. Platform or operator service fees using committed capacity or volume bands
4. Participant-funded benefits and source-system obligations
5. Grants or general funds supporting research, representation, accessibility, and other public goods

The final structure should compare subscription, tier, volume, pooled assessment, and hybrid models through simulations. Per-transaction pricing may be simple but can encourage excessive proof requests and penalize high-volume, low-margin services. A pure annual fee can overcharge small adopters and underfund variable operations. The design should balance both.

### 17.25 Financial controls and reporting

At the appropriate stage, the project or OCA should maintain:

- Approved annual budget and multi-year forecast
- Role-based spending and approval authority
- Separate accounts or fund tracking for restricted grants, appeals, remedies, and service operations
- Conflict, gift, travel, procurement, reimbursement, and related-party policies
- Regular management reporting and Board oversight
- Independent financial review or audit proportionate to size and risk
- Public annual financial reporting
- Funder and revenue-concentration reporting
- Reserve, insurance, contingent-liability, and wind-down planning
- Controls over cash, contracts, payroll, vendors, marks, keys, and valuable data access
- Whistleblowing and protected financial reporting

The organization should publish enough information to show who funds it, how money is allocated, whether rights functions are adequately resourced, and how financially dependent it is—without exposing individual compensation or vendor terms beyond appropriate transparency and law.

### 17.26 Appeal, audit, and enforcement funding

Rights and assurance functions need protected economics.

#### Appeals

- Funded through a pooled assessment or general rights budget
- No filing fee for ordinary consumers
- No compensation tied to affirming or reversing the original decision
- Providers assigned or approved through an independent process
- Capacity forecast includes time-sensitive and systemic matters

#### Audits and certification

- Fees follow a published schedule
- Participant does not freely select the most favorable reviewer from an unrestricted market
- Reviewer rotation, quality monitoring, and conflict rules apply
- Failed conformance may require paid remediation and retesting, but not a fee for favorable certification

#### Enforcement

- Ordinary enforcement capacity comes from predictable general funding
- Penalties do not determine staff budgets or compensation
- Money recovered from harm may support affected-party remedy, investigation, or prevention under published rules
- An inability to pay does not prevent suspension of unsafe participation, while sanctions remain proportionate and reviewable

### 17.27 Remedy, insurance, and reserves

The ecosystem should identify which harms can be corrected operationally and which require financial remedy.

Potential mechanisms include:

- Participant contractual responsibility
- Errors-and-omissions, cyber, privacy, directors-and-officers, employment, and other appropriate insurance
- Pilot remedy reserve
- Operator performance bond or guarantee for higher-risk roles
- Benefit-replacement fund
- Shared catastrophic incident arrangement
- Required financial capacity for certified roles

Remedy design should avoid making OCA the insurer of every business interaction. It should ensure that an eligible error, breach, promised benefit failure, or systemic defect has an accountable and solvent response path.

The reserve required before pilot should cover plausible correction, appeal, notification, benefit replacement, and wind-down scenarios—not only expected cloud and staff costs.

### 17.28 Access, equity, and smaller participants

A standard dominated by large companies will reproduce their assumptions and exclude the organizations needed for credible portability.

Economic access measures may include:

- Dues based on size, revenue, organization type, and region
- Small-business and startup membership tiers
- Nonprofit, worker, consumer, academic, government, and public-interest rates
- Certification waivers or subsidies for qualifying open-source and small implementations
- Shared adapters and reference implementations
- Pooled legal, security, accessibility, and conformance resources
- Participation stipends and travel or access support
- Translation and regional capacity funding
- Transparent eligibility and annual review of subsidies

Subsidy cannot mean weaker testing. It changes who pays, not the rights or conformance standard.

### 17.29 Intellectual property and marks

The economic model should support open implementation while protecting accurate claims.

The preferred direction is:

- Public core specification, schemas, test definitions, rights, and context rules
- Open or broadly implementable reference software where practical
- Royalty-free or otherwise implementable essential patent commitments
- Clear contribution license and provenance
- Protected Conduct, Open Conduct, OCA, CQ, NCS, VCI, and certification marks as appropriate
- Mark use limited to current certified profiles and deployments
- Published action against false certification and misleading affiliation
- No mark license that gives one vendor exclusive implementation rights

Revenue may support certification marks, training, and implementation services. It should not depend on private access to the semantic standard.

If OCA or a related entity sells implementation consulting, the consulting function must be separated from certification decisions and cannot guarantee certification. Reference materials, error explanations, and ordinary conformance guidance should remain equally available to all applicants.

### 17.30 Procurement and vendor economics

OCA and pilot entities should procure technology and services through processes proportionate to cost, risk, and market maturity.

Controls include:

- Written scope and evaluation criteria
- Conflict disclosure and recusal
- Comparison of open-source, commercial, hosted, and build options
- Total-cost and exit analysis, not only launch price
- Data ownership, portability, service levels, incident, audit, subcontractor, and deletion terms
- Avoidance of one vendor controlling several conflicting roles
- Competitive rebid or performance review on a defined cycle
- Documentation of sole-source decisions
- No vendor-funded specification terms that create proprietary dependence

The cheapest pilot proposal may be expensive if it locks identity, events, credentials, proofs, or consumer histories into one platform.

### 17.31 Competition and market integrity

OCA sets the cost of its own common functions and certification. It must not coordinate the commercial prices, deposits, loyalty economics, benefits, customer allocation, or competitive strategies of participating businesses.

Economic meetings and working groups need competition controls covering:

- No exchange of nonpublic future pricing, capacity, customer lists, wages, commercial terms, or partner strategy
- No collective refusal to serve nonparticipants
- No certification designed to exclude a competitor for commercial reasons
- No mandatory use of one vendor or operator without documented necessity and open review
- No benefit rule functioning as coordinated discrimination or market allocation
- Public standards accessible enough that nonmembers can build compatible services
- Legal review of pooled procurement, shared-service fees, and cross-company benefits

The ecosystem may standardize how a CQ proof is requested and verified. It should not standardize what a hotel room, meal, ride, or subscription costs.

### 17.32 Sustainability measures

The operating model should monitor:

#### Financial resilience

- Recurring revenue coverage of recurring cost
- Unrestricted cash runway
- Operating and remedy reserves
- Revenue and funder concentration
- Dependence on one platform, industry, grant, founder, or vendor
- Forecast versus actual cost
- Outstanding liabilities and unfunded obligations

#### Rights capacity

- Funded consumer and worker representation
- Explanation, challenge, appeal, incident, audit, and remedy capacity versus actual volume
- Accessibility, translation, and participation spending
- Time-sensitive case coverage and backlog

#### Operating efficiency

- Cost by certified role, tenant, active participant, event, proof, benefit, review, and incident
- Automation that reduces administrative burden without replacing human judgment
- Vendor and infrastructure utilization
- Correction and collective-remedy savings from systemic fixes

#### Independence

- Share of revenue by top funders and sectors
- Related-party spending
- Audit, appeal, and enforcement budget protection
- Sponsor influence concerns and recusal patterns
- Number and viability of interchangeable operators

No single financial metric should drive expansion. A financially efficient system that underfunds appeals or depends on data brokerage is not sustainable in the relevant sense.

### 17.33 Financial distress, insolvency, and wind-down

The ecosystem must plan for a platform exit, funding loss, operator insolvency, OCA failure, or decision to stop.

The plan should prioritize:

1. Prevent new obligations that cannot be fulfilled.
2. Preserve baseline service and active consumer rights.
3. Protect keys, credentials, records, funds, and evidence.
4. Fulfill or replace active promised benefits.
5. Complete urgent corrections, appeals, incidents, and notices.
6. Transfer or export valid consumer assets to an approved alternative.
7. Revoke or expire unsafe credentials and trust entries.
8. Pay employees, contractors, taxes, consumers, and protected funds according to law and policy.
9. Delete, return, anonymize, or retain data under the approved schedule.
10. Publish an honest status and final report.

Restricted remedy and appeal funds should not be consumed first to extend ordinary operations. Contracts should define step-in, transition, escrow, license, and data-access rights where a critical provider's failure would strand the ecosystem.

### 17.34 Stage-based economic gates

#### Stage 0

- Track founder expenses, material in-kind support, assets, and conflicts.
- Avoid recurring obligations and consumer-affecting operations.
- Use clear support and sponsorship terms if money is accepted.

#### Stage 1

- Fund bounded work, stipends, access, and contributor support.
- Use a fiscal sponsor or lightweight administrative home where appropriate.
- Disclose material funders and avoid governance claims.

#### Stage 2

- Establish legal, banking, accounting, contracting, insurance, payroll, procurement, and financial-control capacity appropriate to activity.
- Fund the complete pre-pilot work plan and responsible stop point.
- Model Stage 3 normal, stress, and wind-down costs.

#### Stage 3

- Commit full pilot, rights, remedy, reporting, and tail funding before launch.
- Protect pooled appeal, audit, and remedy budgets.
- Confirm partner direct budgets and common assessments.
- Test higher-than-expected support, incident, and appeal volume.

#### Stage 4

- Demonstrate diversified recurring revenue, reserves, insurance, independent rights funding, audited controls, and operator continuity.
- Avoid dependence on continual pilot sponsorship or one dominant platform.
- Publish financial and sustainability reporting.

Economic readiness is a stage gate, not a promise to solve costs after adoption.

### 17.34A Suite I operating-economics architecture

Suite I v0.1 makes a composed Stage 3 structure the lead direction: diversified multi-partner and unrestricted funding under I2, administered through an I3 fiscal sponsor or hosted project when the host can satisfy ring-fenced independence, rights, data, publication, and exit controls. I2 and I3 are complementary. One defines the funding pattern; the other defines the administrative home.

I1 single-anchor sponsorship remains a restricted fallback because nominal funding can coexist with revocable in-kind support, evaluator dependence, and practical control. I4 a separate OCA entity remains available when funded operational duties justify its added legal, financial, administrative, governance, insurance, and staffing cost. I5 the diversified recurring mix becomes the Stage 4 destination, not assumed Stage 3 revenue. I6 report-funded launch is rejected.

The comparison establishes the following operating-economics requirements:

| ID | Requirement | Status |
|---|---|---|
| OEC-001 | The Stage 3 launch budget MUST set report revenue to zero and MUST NOT depend on membership, certification, service, training, fine, favorable-outcome, data-sale, or other revenue that has not been lawfully demonstrated and committed. | CONSTITUTIONAL |
| OEC-002 | The lead Stage 3 direction SHOULD combine diversified partner and unrestricted funding with a competent ring-fenced host unless fully funded operational need justifies a separate entity. | CANDIDATE |
| OEC-003 | Before the first live event, committed usable funding MUST cover the complete planned release, severe-but-plausible stress, responsible stop, and post-pilot rights, remedy, evaluation, incident, publication, correction, and wind-down tail. | CONSTITUTIONAL |
| OEC-004 | The funding close MUST include the common pilot budget and every participant-specific integration, source, worker, benefit, support, correction, incident, remedy, and exit budget. | REQUIRED FOR COHERENCE |
| OEC-005 | A promised resource counts only when it is usable for the named function; every material in-kind contribution MUST record replacement value, provider, related party, term, restriction, control, withdrawal, exit duty, fallback, and replacement time. | CONSTITUTIONAL |
| OEC-006 | Funding concentration MUST be measured across related parties and cash, staff, infrastructure, data, benefits, distribution, professional services, guarantees, indemnity, report clients, and operational control—not booked revenue alone. | CONSTITUTIONAL |
| OEC-007 | Appeal, remedy, benefit, evaluation, incident, mandatory public-reporting, and wind-down funds MUST be protected from ordinary operating runway, sponsor retaliation, and unrelated restricted uses. | CONSTITUTIONAL |
| OEC-008 | The pilot MUST establish separate funded maxima and leading pause thresholds for enrolled consumers, eligible interactions, worker prompts, events, credentials, proofs, benefits, ordinary cases, urgent cases, incidents, corrections, and tail obligations. | CONSTITUTIONAL |
| OEC-009 | A capacity pause MUST stop new exposure before a service or dignity failure while preserving every existing baseline, explanation, correction, appeal, benefit, incident, remedy, evaluation, notice, and wind-down obligation. | CONSTITUTIONAL |
| OEC-010 | Consumer and worker participation, accessibility, translation, open standards, independent evaluation, mandatory harm reporting, public-interest work, and smaller-implementer access MUST receive dependable base funding when commercial surplus is zero. | CONSTITUTIONAL |
| OEC-011 | Certification payments MUST enter the governed program under a published assessment; the participant MUST NOT buy its reviewer, scope, opinion, timetable, favorable result, or continued certification. | CONSTITUTIONAL |
| OEC-012 | Pooled appeal readiness SHOULD use prospective role, scale, capacity, and risk bands; repeated independently validated participant defects MAY change future bands or support extraordinary remediation recovery, but reviewer or program pay MUST NOT depend on case outcome. | CONSTITUTIONAL |
| OEC-013 | Every OCA- or host-operated service MUST maintain separate accounts, authority, access, evidence, review dates, replacement interfaces, export, and enforceable competition, separation, spinout, retirement, or replacement conditions. | CONSTITUTIONAL |
| OEC-014 | Every named material obligation MUST have timely liquid funding after realistic policy exclusions, deductibles, delay, claims dates, defense control, shared limits, cancellation, and counterparty insolvency; insurance alone is insufficient. | CONSTITUTIONAL |
| OEC-015 | Pricing SHOULD use predictable base plus committed capacity and risk bands with transparent variable-cost reconciliation; it MUST NOT depend on score, event direction, eligibility, denial, challenge outcome, benefit value, favorable finding, or certification result. | CONSTITUTIONAL |
| OEC-016 | Complete event issuance, correction, withdrawal, ordinary consumer and worker rights, and valid post-pause obligations MUST NOT be usage-rationed or financially discouraged. | CONSTITUTIONAL |
| OEC-017 | Stage 0 MUST remain data-free, bounded, asynchronous, pausable, and free of always-on or consumer-affecting promises; founder time and expense are explicit caps, and excess demand triggers batching, backlog, deferral, stop-doing, or funded work. | REQUIRED FOR COHERENCE |
| OEC-018 | Stage 4 MUST demonstrate diversified recurring-cost coverage, public-good funding, reserves, rights capacity, and institutional independence before broad expansion; no single source may be necessary to protect basic rights. | CONSTITUTIONAL |

In the controlled structural comparison, I2 and I3 each funded Stage 3, public goods, and tail with report revenue at zero and passed the usable-funding and independence gates. I1 funded the ordinary release but failed controlled funding quality and evaluator independence. I4 passed only after its additional entity overhead was included, leaving less launch margin than I2 or I3. I5 passed mature funding-quality tests but failed as a Stage 3 financing assumption. I6 remained structurally invalid even when hypothetical report revenue eventually covered ordinary operation because public goods and tail obligations remained unfunded.

Stage 0 applies OEC-017 now. The remaining requirements become implementation gates only when the project accepts the corresponding funds, duties, data, providers, or live-person effects. Suite I authorizes no funder, fiscal sponsor, entity, budget, insurer, provider, price, volume cap, staffing plan, or Stage 3 launch.

### 17.35 Decisions intentionally deferred

The following depend on partner discovery, pilot architecture, jurisdiction, organization form, cost simulation, and legal advice:

- Stage 0 support mechanism, if any
- Fiscal sponsor versus Massachusetts or other entity timing
- Founder compensation, employment, asset license, and eventual transfer terms
- Membership classes, dues, voting linkage, and regional adjustments
- Certification, renewal, mark, and retesting fees
- Operator, network, tenant, event, credential, proof, support, and service-level pricing
- Pilot cost allocation among platform, businesses, funders, and common budget
- Funder-concentration cap and reserve target
- Insurance types, limits, deductibles, and remedy reserve
- Auditor and appeal-provider compensation and assignment
- Subsidy and fee-waiver eligibility
- Tax, accounting, cross-border, and transfer-pricing structure
- OCA services operated internally versus competitively certified
- Exact staffing plan and salary bands
- Production unit economics and long-term revenue mix
- Public, member, commissioned, sponsored, and research report portfolio
- Federated analytics, secure aggregation, controlled-environment, or other report-computation architecture
- Report pricing, membership inclusion, cohort rules, publication floors, and confidential-to-public escalation rules

Deferral does not authorize underfunding. Each item must be resolved before the stage or function that depends on it.

### 17.36 Validation requirements

Before a consumer-affecting pilot, independent review must confirm:

- Complete responsibility and payer map for every pilot function
- Full common and participant-specific budgets
- Founder workload and compensation are explicit rather than hidden subsidy
- Consumer and worker participation, access, support, and rights are fully funded
- Platform and business integration, data quality, benefit, and correction costs are assigned
- Appeal, audit, incident, remedy, insurance, reporting, and wind-down funds are committed
- Funding terms preserve publication, standards, certification, appeal, and enforcement independence
- No revenue depends on score, event polarity, eligibility, denial, challenge outcome, data sale, or prohibited use
- Pooled funds and conflicts are governed independently of individual sponsors
- Financial control, accounting, contracting, procurement, and related-party policies are operational
- Normal, stress, incident, and wind-down cost models are documented
- Partner and vendor failure, funding loss, and institutional insolvency plans are tested
- Fees and subsidies do not weaken conformance or exclude smaller and public-interest participants
- Consumer and worker free paths are complete
- Founder and project assets have clear contribution, license, succession, and future-transfer terms
- Public claims about value, savings, adoption, and sustainability match available evidence
- Report products do not centralize raw conduct data, expose people or competitors, distort participant incentives, suppress public-interest findings, or turn analytical access into data brokerage

The operating and economic model is a **CANDIDATE** until Stage 2 produces a concrete plan, pilot budget, legal structure, and economic model. Its prohibitions, consumer and worker fee protections, independence requirements, and funding of rights and exit are **CONSTITUTIONAL**; the full-cost pilot and founder-capacity requirements are **REQUIRED FOR COHERENCE** at launch.

## 18. Success measures

### 18.1 Purpose

The Conduct ecosystem needs to prove more than technical operation, participant interest, or commercial demand. It must establish that the system produces meaningful additional value while preserving human dignity, ordinary service, worker protection, evidentiary integrity, fairness, privacy, and practical rights.

Success is therefore not one number. It is a governed body of evidence supporting a specific decision at a specific stage.

A release may attract partners and still fail because consumers do not understand it. It may produce a statistically stable score and still fail because the score rewards conformity. It may delight eligible consumers and still fail because nonparticipants receive worse service. It may appear fair in aggregate and still fail because the challenge process cannot correct errors before a promised benefit expires. It may operate safely at pilot volume and still be unfit to expand because its rights functions, economics, or institutional independence do not scale.

This section defines how the project distinguishes:

- Activity from adoption
- Adoption from useful participation
- Technical validity from social legitimacy
- Correlation from causal business value
- Absence of detected harm from evidence of safety
- A successful research result from authorization to deploy
- Pilot viability from production readiness
- A promising component, including NCS, from a justified combined or portable CQ system

The framework applies to simulation, prototypes, live-event shadow operation, private consumer views, company-specific proofs, industry portability, and later production. Each stage uses the measures relevant to the claim it is trying to establish.

### 18.2 Core requirements

1. Every consumer-affecting release MUST have a written evaluation charter approved before outcome data is examined wherever practical.
2. The charter MUST define hypotheses, units of analysis, measures, data sources, baseline, comparison method, sample and duration logic, minimum protections, advancement criteria, stop conditions, reporting, and responsible decision makers.
3. Rights, baseline treatment, material fairness, evidence integrity, security, and remedy MUST operate as gates. Strong adoption, satisfaction, revenue, or business value MUST NOT offset failure of a gate.
4. Measures MUST be reported with denominators, missingness, uncertainty, material limitations, and relevant context. Counts and percentages MUST NOT be presented without the population to which they apply.
5. Measures MUST distinguish people, eligible interactions, recorded events, NCS responses, VCI events, calculated results, proof attempts, proof completions, benefits, challenges, appeals, incidents, and remedies.
6. Aggregate results MUST NOT conceal material subgroup, location, worker-role, issuer, corporate-family, accessibility, or context differences.
7. A zero observed count MUST NOT be described as proof that a harm cannot occur. Detection coverage and statistical power MUST be disclosed.
8. Predefined confirmatory analysis MUST be separated from exploratory analysis. Material changes to the analysis plan MUST be recorded with timing and reason.
9. Partner-defined success metrics MAY supplement but MUST NOT replace the common evaluation framework.
10. Marketing, fundraising, certification, and expansion claims MUST be limited to the maturity, population, context, use, and evidence actually tested.
11. Consumer and worker qualitative evidence MUST be treated as substantive evidence, not decorative testimonials.
12. Advancement MUST require an explicit decision to stop, repeat, redesign, or advance. A pilot MUST NOT drift into continued operation because no one made a decision.
13. The evidence and decision record MUST include unfavorable, inconclusive, and mixed findings.
14. Independent evaluators MUST have access sufficient to test material claims while respecting privacy, security, worker safety, and data minimization.
15. Measurement itself MUST be governed so that research, logging, experimentation, and analytics do not become a secondary surveillance system.
16. The evaluation charter MUST define the estimand, assignment mechanism, analysis populations, clustering, repeated measures, interference, attrition, missing-data assumptions, multiplicity, and sensitivity analyses needed for each primary claim.
17. Pilot recruitment, eligibility, enrollment, withdrawal, proof presentation, and benefit acceptance MUST be treated as distinct selection stages; results among completers or benefit recipients MUST NOT be generalized to the eligible population without justified analysis.
18. Material incidents, near misses, retaliation, discrimination, inaccessible paths, baseline degradation, privacy leakage, worker harm, and rights failures MUST have a predeclared detection, escalation, independent review, and reporting protocol.
19. An underpowered subgroup analysis or zero observed count MUST NOT establish safety or parity. Severe plausible harms require qualitative evidence, case review, detection-coverage analysis, and precautionary gates in addition to statistical estimates.
20. Confirmatory results MUST be reproducible from a frozen versioned dataset or controlled analytical state, code, configuration, exclusions, and decision log under the approved privacy and retention model.
21. Evaluation MUST include the post-interaction and post-pilot tail necessary to observe delayed challenges, reversals, retaliation, benefit failures, incidents, behavior change, and wind-down obligations.
22. No experiment may randomize, withhold, delay, or degrade baseline service, accessibility, safety, complaint handling, correction, appeal, remedy, legally owed treatment, or another protected right.
23. Advancement to production SHOULD require independent replication or repeated evidence across materially different sites, periods, operators, or implementations appropriate to the claim.
24. Public reporting MUST preserve the preregistered primary results and decision-relevant unfavorable findings even when a later exploratory analysis is more positive or commercially compelling.

### 18.3 What success means

The ecosystem succeeds only when all of the following statements are sufficiently supported for the release under review:

1. **The evidence means what the system says it means.** Interactions and actors are attributed correctly; NCS comes from eligible humans; VCI reflects approved facts and responsibility; corrections and reversals work; confidence reflects actual evidence.
2. **People understand the system well enough to make meaningful choices.** Consumers and workers can distinguish NCS, VCI, CQ, context, confidence, proof, benefit, refusal, correction, and appeal at the level required by their role.
3. **Participation is voluntary in practice.** Refusal, insufficient history, technical failure, challenge, and withdrawal do not create a worse baseline or hidden penalty.
4. **The system does not reward conformity or reproduce unacceptable disparities.** The design does not measure deference, wealth, neurotypical presentation, cultural similarity, digital fluency, low service cost, or unwillingness to complain.
5. **The rights system works under real emotional and operational pressure.** Explanations are useful; challenges reach the right party; independent appeals are available; time-sensitive matters receive timely treatment; remedies produce meaningful repair.
6. **The proposed benefit creates genuine additional value.** Recipients value it, it is delivered reliably, it does not relabel baseline service, and nonrecipients are not degraded.
7. **Each added component earns its place.** NCS, VCI, synthesis, confidence, proof, and portability each provide incremental value sufficient to justify their complexity and risk.
8. **The system can operate sustainably and independently.** Staffing, funding, support, security, audit, appeal, remedy, partner exit, and governance capacity remain adequate in normal and stress conditions.
9. **The next expansion is supported by evidence rather than enthusiasm.** The current test answers its intended question, unresolved risks are understood, and the proposed next change is narrow enough to evaluate.

No one statement can substitute for another. These are conjunctive conditions, not ingredients in an average.

#### Balanced interaction outcome

The project MUST NOT optimize an undefined “mutually successful interaction.” For evaluation, a balanced interaction outcome is a vector of separately measured conditions:

1. The consumer received the promised service or an accessible and fair resolution when delivery changed or failed.
2. The worker could perform the interaction safely, with reasonable support and without avoidable abuse or uncompensated CQ burden.
3. The consumer fulfilled the legitimate responsibilities reasonably within their control.
4. The participating business fulfilled its own material responsibilities and recorded its failures, exceptions, corrections, and reversals.
5. Complaints, disputes, returns, refunds, accommodations, escalation, and other protected or permitted actions remained practically usable without conduct penalty by themselves.
6. Avoidable interpersonal and operational friction did not increase.
7. Neither the consumer nor the worker had to suppress a right, conceal a problem, perform deference, or manipulate a rating to produce the recorded outcome.

These conditions may support a governed composite research endpoint only after each remains separately inspectable. Purchase completion, low support use, low complaint frequency, speed, spend, profitability, or repeat business MUST NOT stand alone as “mutual success.”

### 18.4 Measurement principles

#### Measure the promise and the failure mode

Every material claim needs at least one direct measure of the intended outcome and one measure of the way that outcome could be misleading or harmful.

For example:

| Intended outcome | Direct measure | Paired failure measure |
|---|---|---|
| Workers can express how an interaction felt | Eligible NCS completion and worker-reported usefulness | Manager pressure, retaliation concern, emotional burden, selective prompting, and response-pattern conformity |
| Consumers understand their standing | Comprehension tasks completed correctly | False belief that CQ measures moral worth, wealth, loyalty, or guaranteed future behavior |
| Good conduct becomes portable | Successful consumer-authorized industry proofs | Named-history leakage, issuer concentration, context misunderstanding, and verifier overreach |
| A proof unlocks recognition | Benefit fulfillment and recipient value | Baseline degradation, coercion, stigma, inconsistent delivery, and unavailable remedy |
| Businesses receive value | Approved operational or relationship outcome | Selection bias, confounding, shifted labor cost, rights burden, or adverse treatment of nonparticipants |

#### Prefer direct behavioral evidence

Stated trust, stated intent to use, partner enthusiasm, and positive comments are useful but incomplete. Where ethical and practical, evaluation should test what people can correctly explain, choose, complete, challenge, decline, and recover from.

#### Preserve context

Results must identify the applicable version, jurisdiction, business context, event taxonomy, participant population, interaction type, benefit, proof policy, time period, and release. A successful restaurant reservation workflow is not evidence that a support, airline, employment, or cross-industry use is safe.

#### Separate feasibility, safety, and value

A function can be technically feasible without being safe, and safe enough for research without creating sufficient value to justify deployment. Reports should distinguish:

- **Feasibility:** Can the workflow and infrastructure perform as designed?
- **Validity:** Do the data and calculation support the stated meaning?
- **Safety and rights:** Can the function operate without unacceptable harm or rights failure?
- **Value:** Does the function improve a meaningful human or organizational outcome?
- **Sustainability:** Can the value and protections continue at the required cost and capacity?

#### Treat nonuse as a result

Refusal, abandonment, insufficient history, nonresponse, worker opt-out, business nonadoption, and proof nonpresentation may reveal burden, mistrust, lack of value, accessibility failure, or a healthy exercise of autonomy. They must not automatically be classified as product friction to eliminate.

### 18.5 Evaluation charter

Every Stage 2 or later release requires one versioned evaluation charter containing:

- Decision the evidence will inform
- Primary and secondary hypotheses
- Explicit nonclaims and out-of-scope uses
- Release, population, context, jurisdiction, duration, and benefit
- Unit of assignment, observation, analysis, and inference
- Primary estimand and analysis populations, including eligible, invited, enrolled, assigned, exposed, completed, presented, and treated populations
- Eligibility and exclusion rules
- Baseline and comparison groups
- Data-source and metric dictionary
- Sample-size, precision, duration, and stopping logic
- Clustering, repeated measures, interference, spillovers, crossover, and contamination assumptions
- Attrition, withdrawal, missingness, protocol-deviation, and unavailable-data treatment
- Multiple-comparison, subgroup, sequential-monitoring, and sensitivity-analysis rules
- Confirmatory and exploratory analysis plan
- Fairness, accessibility, privacy, worker, and rights analysis
- Qualitative research plan
- Incident, near-miss, complaint, challenge, and remedy measures
- Adverse-event definitions, detection coverage, escalation, independent review, unblinding, containment, and reporting
- Predefined hard gates, review gates, and learning targets
- Data access, retention, privacy, security, and publication controls
- Independent evaluation, conflict, and sign-off roles
- Public reporting plan
- Decision matrix for stop, repeat, redesign, or advance

The charter should be registered in a tamper-evident internal record before the applicable data is unblinded or reviewed. Public preregistration should be used where it can improve credibility without exposing security details, personal data, worker identities, or commercially sensitive implementation information.

The charter must distinguish the population about which a claim is made from the people whose data are easiest to observe. A result among consumers who enrolled, accumulated enough history, qualified, chose to present, and accepted a benefit is a highly selected result. It does not by itself describe invited consumers, eligible consumers, nonparticipants, people with sparse history, people who withdrew, or ordinary customers.

### 18.6 Units and denominators

The system must not collapse unlike activity into a generic volume figure. At minimum, measurement must separately track:

- Invited, eligible, enrolled, active, withdrawn, and exited consumers
- Eligible, invited, trained, participating, declining, and exited workers
- Eligible, ineligible, completed, canceled, reversed, disputed, and unattributed interactions
- NCS prompts presented, omitted, completed, expired, challenged, excluded, and corrected
- VCI candidate facts, accepted events, exceptions, reversals, disputes, exclusions, and corrections
- Contextual calculations produced, withheld for insufficient evidence, superseded, and disputed
- Proof opportunities, requests, consumer consents, presentations, validations, refusals, errors, and expirations
- Benefits offered, accepted, fulfilled, delayed, substituted, failed, reversed, and remedied
- Explanations, disagreements, challenges, appeals, incidents, collective corrections, and remedies
- Participating businesses, locations, issuers, verifiers, platforms, and corporate families

Each rate must state its denominator. An NCS response rate among presented prompts answers a different question from a response rate among all eligible interactions. Benefit fulfillment among validated proofs answers a different question from fulfillment among consumers who attempted to present a proof.

Person-level and event-level results should both be considered. High-volume consumers and businesses must not dominate a person-level conclusion merely because they generate more events.

Where assignment occurs at consumer, worker, shift, location, business, platform, or time-period level, analysis must match that assignment and the dependence structure. Workers may change behavior after training, consumers may interact repeatedly, locations share managers, and benefits can alter treatment of nearby nonparticipants. Effective sample size and uncertainty must account for clustering and interference rather than treating every event as independent.

### 18.7 Gate architecture

Measures fall into three categories.

#### Hard gates

Hard gates define conditions that ordinarily require immediate containment, pause, rollback, or rejection. Examples include:

- Prohibited use of CQ in employment, housing, credit, insurance, essential service, safety, law enforcement, or another excluded decision
- Retaliation against a consumer or worker for participation, refusal, complaint, disagreement, NCS response, or challenge
- Material degradation of baseline service for nonparticipants, insufficient-history consumers, or people who decline proof
- Systematic use of prohibited attributes or proxies
- Unauthorized disclosure, correlation, sale, advertising use, model training, or cross-context use
- Inability to provide required explanation, correction, appeal, urgent review, or remedy
- Material data breach, credential compromise, false proof acceptance, or uncontrolled issuer behavior
- Manager scripting, generation, prediction, or automation of NCS
- Partner refusal to audit, correct, notify, contain, or honor an active benefit
- Operation beyond funded safety, support, review, or remedy capacity

A hard gate is not necessarily a claim that one isolated error makes the entire concept impossible. It means the release cannot continue unchanged while the condition remains unresolved.

Hard-gate monitoring needs a named independent recipient, detection source, notification time, containment authority, and rule for blinded or unblinded review. Statistical stopping thresholds do not override a credible individual report of severe harm. Conversely, an unverified allegation may trigger containment and investigation without being reported as a proven system effect.

#### Review gates

Review gates require structured examination against a predefined range and context. These include comprehension, attribution accuracy, missingness, subgroup disparity, challenge volume, benefit fulfillment, response concentration, reliability, cost, and worker burden.

Failure may lead to repetition, narrower scope, redesign, added protections, more evidence, or stop. A partner deadline cannot convert an unmet review gate into approval.

#### Learning targets

Learning targets help compare designs and improve operation but do not independently authorize or stop a release. Examples include interface completion time, preferred explanation language, relative demand for different modest benefits, or partner implementation effort.

The charter must label every primary measure as a hard gate, review gate, or learning target before the release begins.

### 18.8 Evidence integrity measures

Evidence integrity establishes whether the system is evaluating the right interaction, person, event, and responsibility.

| Area | Measures | Critical interpretation |
|---|---|---|
| Interaction eligibility | Eligible-event precision and recall; ineligible prompt rate; protected-context exclusion | High collection volume is not success if the wrong interactions enter the system |
| Attribution | Confirmed actor match; ambiguous attribution; merge, split, delegate, payer, booker, and shared-account errors | Ambiguity should reduce or prevent conduct effect rather than be assigned conveniently |
| NCS provenance | Authenticated eligible human rate; timing; response concentration; duplicate or scripted patterns | A response is not human evidence if generated, delegated, coached, or selected by management |
| NCS sampling | Census coverage or random-sample adherence; prompt omissions by outcome, worker, location, or consumer characteristic | Selective prompting can produce a credible-looking but invalid score |
| VCI quality | Source validity; final-state accuracy; responsibility; causation; exception and reversal performance | Operational facts are not conduct evidence until control and responsibility are established |
| Lifecycle | Correction, reversal, supersession, dispute, and recalculation completeness | A reliable initial event is insufficient if the record cannot follow later truth |
| Concentration | Share of evidence by issuer, location, worker, corporate family, interaction type, and time period | Apparent history may represent one organization's practices rather than a portable pattern |
| Confidence | Calibration between displayed confidence and observed error or stability | Confidence should describe evidence, not decorate a result |

Manual adjudication studies should use independently sampled records rather than only challenged or failed cases. Challenge-confirmed error rates are valuable but cannot estimate total error when many people never notice or contest an error.

### 18.9 NCS-specific success measures

NCS may be implemented as an independently useful Open Conduct standard, including through openconduct.org/netconductscore, while remaining governed within the same standards family. Its evaluation must show that the human-experience signal adds information without becoming an unrestricted rating of people.

NCS evaluation should include:

- Whether eligible workers understand the prompt consistently
- Whether the response reflects the direct human interaction rather than business outcome, tip, spend, loyalty, complaint, protected activity, or managerial preference
- Completion and opt-out patterns by role, location, shift, interaction type, language, and accessibility need
- Frequency and distribution of the two definite and two directional responses
- Interactions excluded because the worker lacked direct participation or the context was unsafe or inappropriate
- Evidence of response inflation, retaliation, reciprocity, popularity, stereotyping, rating fatigue, or manager scripting
- Worker-reported emotional burden, usefulness, safety, and voluntariness
- Consumer understanding that NCS represents aggregated eligible human experience rather than an objective judgment of character
- Challenge reasons involving identity, eligibility, retaliation, prohibited reasoning, duplication, or process
- Stability and change over time without treating stability as moral truth
- Incremental explanatory or predictive value beyond VCI and ordinary business data, evaluated only for approved outcomes

An implementation cannot claim conformance with NCS merely because it copies the prompt or calculates a net percentage. Conformance requires verified interaction binding, eligible human input, sampling protection, worker protection, prohibited-use controls, governed calculation, context, explanation, challenge, audit, and correction.

NCS should be evaluated separately in each approved relationship profile. Evidence from customer–worker interactions does not validate employee performance scoring, public interpersonal ratings, vendor blacklists, event access, or universal cross-context reputation. Individual employee performance use remains prohibited.

### 18.10 VCI-specific success measures

VCI evaluation should determine whether operational evidence provides a rational counterweight without laundering business convenience into apparent fact.

Measures should include:

- Source-system completeness and final-state accuracy
- Responsibility and consumer-control classification accuracy
- Business-caused failure and force-majeure neutralization
- Exception, accommodation, waiver, complaint, dispute, and reversal handling
- Event-category-specific error and challenge rates
- Differences among locations, platforms, issuers, and corporate families
- Evidence freshness, latency, duplication, and missingness
- Frequency with which a candidate event is withheld because responsibility is unclear
- Consumer comprehension of what the event establishes and does not establish
- Incremental value over NCS and over a no-VCI design
- Gaming through policy design, impossible requirements, easy-event farming, or selective reporting

A high VCI completion rate may indicate good consumer conduct, easy business rules, weak exception capture, or aggressive issuer interpretation. The evaluation must distinguish these explanations.

### 18.11 Synthesis and model measures

Candidate synthesis models must be compared against the same known-truth simulations, prototype tasks, and shadow data. Evaluation should include:

- K3 cap-binding frequency, uplift above the weaker input, and sensitivity to alternative cap values
- L4 context-family eligibility, independence, source-set stability, Context varies frequency, and sensitivity to the context-spread boundary
- Calibration and uncertainty
- Stability under ordinary new evidence
- Appropriate responsiveness to meaningful recent change
- Treatment of insufficient history
- Robustness to one extreme event
- Robustness to many trivial or easy events
- Resistance to issuer, worker, consumer, and corporate-family concentration
- NCS and VCI contradiction preservation
- Context transfer behavior
- Missing-data behavior
- Correction and reversal propagation
- Gaming and collusion resistance
- Subgroup and accessibility effects
- Consumer and business comprehension
- Incremental decision value relative to separate NCS and VCI dimensions
- Consumer interpretation of `x.yz`, especially whether hundredths communicate useful differentiation or unsupported accuracy
- Display persistence, settlement cadence, corrections, and change anxiety
- Frequency and consequence of company-, context-, and overall-scope disagreement

The project should prefer the least complex model that satisfies the approved requirements. A statistically sophisticated model is not more successful if people cannot understand its material behavior, reviewers cannot reproduce it, or it creates false precision.

Model performance should be evaluated using consequences as well as mathematical fit. False eligibility, false ineligibility, withheld results, unstable results, and delayed correction have different human effects and should not be collapsed into one accuracy measure.

### 18.12 Human understanding, agency, and legitimacy

Comprehension research must test whether participants can correctly answer scenario-based questions rather than merely report that the interface is clear.

Consumer tasks should test whether people understand:

- The difference between NCS, VCI, and CQ
- Whether a result is company-specific, industry-specific, or broader
- What confidence and insufficient history mean
- What information a verifier will and will not receive
- Whether presentation is optional
- What benefit is offered and what baseline remains available
- How to disagree, challenge an event, appeal a decision, withdraw, and recover access
- That CQ does not establish moral worth or guarantee future conduct

Worker tasks should test whether people understand:

- Which interactions and participants are eligible
- What the NCS prompt asks and does not ask
- That tips, spending, complaints, accommodations, business outcome, protected activity, and management preference are not conduct criteria
- How to decline, report pressure, obtain support, and protect safety
- What information will be visible to consumers, managers, businesses, and Open Conduct reviewers
- That NCS is not an employee-performance measure

Measures should include correct task completion, misconception type, accessibility, assisted-path performance, time, burden, confidence, perceived legitimacy, emotional response, and behavior after a mistake or disagreement.

Trust is not a standalone success metric. High trust may reflect misunderstanding, brand reputation, incentives, or lack of awareness. Appropriate calibrated trust includes knowing when not to rely on the system.

### 18.13 Voluntariness and baseline parity

The project must measure voluntariness through actual consequences.

Baseline analysis should compare, where lawful and methodologically appropriate:

- Enrolled consumers who present an approved proof
- Enrolled consumers who decline to present
- Enrolled consumers with insufficient history
- Consumers affected by proof or system unavailability
- Consumers who withdraw or challenge
- Eligible nonparticipants
- Relevant accessibility and demographic groups

Measures may include service availability, wait, queue position, price, deposit, hold, refund, accommodation, complaint handling, employee attention, support access, cancellation, quality, benefit framing, and outcome.

The analysis should test both average parity and adverse tails. Similar average wait times can conceal a small group experiencing extreme delay or denial.

Voluntariness research should examine whether people feel pressured by the benefit's value, loyalty framing, employee behavior, repeated prompts, public signaling, fear of suspicion, or belief that refusal will be remembered. A formally optional button is not meaningful choice if the surrounding experience communicates penalty.

### 18.14 Fairness, accessibility, and protected activity

Fairness evaluation must be planned before launch and combine quantitative, qualitative, process, and adversarial evidence.

Where lawful, ethical, consensual, and statistically responsible, analysis should examine differences in:

- Enrollment and withdrawal
- Eligible-interaction and prompt selection
- NCS response distribution
- VCI event, exception, and responsibility assignment
- Insufficient history and confidence
- Proof availability and completion
- Benefit offer and fulfillment
- Baseline service
- Challenge, correction, appeal, outcome, time, and remedy
- Security and identity-recovery failure
- Worker burden, pressure, safety, and participation

Relevant perspectives include race and ethnicity, gender, age, disability, language, communication style, income proxy, geography, digital access, religion where relevant, and other protected or structurally disadvantaged groups. Data collection must itself be justified, minimized, protected, and governed; the desire to measure fairness does not authorize a permanent sensitive-attribute database.

Qualitative and scenario research must test risks that aggregate statistics may miss, including:

- Direct communication being interpreted as hostility
- Disability or neurodivergence being interpreted as disrespect
- Accents or language differences affecting perceived ease
- Complaints, refunds, chargebacks, accommodation requests, or rights assertion affecting conduct judgments
- Tipping, spending, status, or familiarity influencing ratings
- Workers feeling pressure to reward profitable or powerful customers
- Consumers performing unwanted friendliness or suppressing legitimate disagreement
- Businesses designing easier rules for preferred customers and treating compliance as conduct

No single parity formula defines fairness. The evaluation charter should explain the applicable concepts, groups, denominators, uncertainty, legal constraints, and consequences.

### 18.15 Challenge, appeal, and remedy performance

High challenge volume is not automatically failure; it may show accessible rights. Low challenge volume is not automatically success; it may show that people do not understand, trust, notice, or feel safe using the process.

The system should measure:

- Awareness and findability of the disagreement and challenge paths
- Challenge rate by event, result, issuer, location, population, and reason
- Informal explanation, correction, formal review, and appeal volumes
- Routing accuracy and handoff count
- Time to acknowledgment, evidence preservation, interim protection, decision, correction, recalculation, and remedy
- Outcome by issue and responsible party
- Repeat challenge and reopened-case rate
- Consumer and worker burden, safety, and satisfaction with process rather than outcome alone
- Employee-identity protection and absence of direct confrontation
- Time-sensitive benefit loss before resolution
- Collective correction detection and completion
- Remedy fulfillment and adequacy
- Backlog, aging, abandonment, and capacity

Case outcome must not be used as a performance target that pressures reviewers toward approval or denial. Reviewer quality should be assessed through consistency, reasoning, process, timeliness, audit, stakeholder experience, and correction of demonstrated error.

### 18.16 Benefit and consumer-value measures

The first benefit is part of the experiment, not proof that the underlying score is valid. Evaluation should determine:

- Whether consumers understand the offer and baseline
- Whether presentation is genuinely optional
- Proof initiation, consent, completion, and abandonment
- Benefit acceptance, fulfillment, delay, failure, substitution, and remedy
- Recipient-reported usefulness and emotional meaning
- Whether recognition changes the quality of the interaction in the intended way
- Whether the benefit is valuable enough to matter but not so valuable that it becomes coercive
- Whether workers can deliver it consistently without discretion, burden, conflict, or unpaid labor
- Whether nonrecipients experience stigma, suspicion, or degraded baseline service
- Whether the benefit produces gaming, unnecessary proof requests, or repeated verification
- Whether consumers want company-specific or industry portability after understanding the tradeoffs

Return on nice is a narrative hypothesis. In the pilot it must be translated into a specific, testable claim about an approved additional benefit and human experience—not assumed from positive sentiment.

### 18.17 Worker outcomes

Worker success is not equivalent to prompt completion. The system should measure:

- Paid time required for training, prompting, review, research, and incident participation
- Completion, voluntary decline, and exit
- Perceived ability to answer honestly
- Management instruction, observation, pressure, quotas, and retaliation concern
- Emotional labor and exposure to difficult interaction recall
- Safety concerns and protected escalation
- Understanding of eligible conduct versus business outcome
- Workflow interruption and cognitive burden
- Whether NCS helps workers feel recognized or instead adds another monitored task
- Differences across employee, contractor, host, driver, agent, shift, tenure, location, language, and accessibility need
- Whether the benefit creates extra unrecognized service work
- Whether challenge and audit processes protect worker identity and do not invite confrontation

Worker satisfaction does not excuse consumer harm, and consumer value does not excuse worker coercion. Both must be evaluated independently.

### 18.18 Business and platform value

Business value remains a hypothesis until the approved design supports causal or carefully bounded inference.

Candidate measures may include:

- Balanced interaction outcome components and any governed joint endpoint
- Repeat preference or retention within the measured period
- Benefit-related engagement
- Reduction in avoidable frontline friction
- Employee perception of interaction quality
- Customer-support or exception burden attributable to the pilot
- Benefit cost and operational effort
- Integration, data-quality, training, support, correction, appeal, audit, and compliance burden
- Partner willingness to continue under the full governance and rights model
- Demand for portability among independent businesses
- Incremental value of NCS, VCI, synthesis, and proof compared with simpler alternatives

Revenue, spend, loyalty status, low complaint frequency, and low cost-to-serve must not become hidden conduct inputs. They may be evaluated as business outcomes only when the analysis does not change the score, benefit, treatment, or rights and when causal limits are explicit.

The evaluation should identify who receives value and who bears cost. A platform may gain differentiation while workers perform more labor, a business may gain retention while Open Conduct absorbs review cost, or consumers may gain recognition while nonparticipants experience stigma. Net commercial value cannot conceal an unfair allocation.

### 18.19 Operational, security, and privacy measures

Operational evaluation should cover normal, peak, degraded, incident, and exit conditions.

Measures include:

- Availability and latency by workflow
- Event delivery, duplication, ordering, validation, quarantine, and reconciliation
- Calculation and credential freshness
- Proof validation and benefit-fulfillment reliability
- Correction and reversal propagation
- Authentication, authorization, key, recovery, and revocation performance
- False acceptance, false rejection, replay, forgery, and stale-status behavior
- Data minimization, retention, deletion, export, and access performance
- Unauthorized access, disclosure, correlation, secondary use, and diagnostic-data leakage
- Incident detection, containment, notification, recovery, and remediation
- Tenant and provider isolation
- Accessibility of degraded and recovery paths
- Support volume, backlog, abandonment, escalation, and capacity
- Rollback, provider exit, and wind-down exercises

Average uptime is insufficient where a short failure can deny a time-sensitive benefit or prevent urgent review. Service objectives should follow the human consequence of each function.

### 18.20 Economic, governance, and institutional measures

The ecosystem must measure whether it can continue operating without sacrificing rights or independence.

Measures should include:

- Full cost by function and stage
- Cost and staffing per event, active participant, proof, benefit, challenge, appeal, incident, audit, and remedy
- Forecast versus actual normal, stress, and tail demand
- Rights capacity, case backlog, and protected funding
- Enrolled and active volume against funded ceilings and automatic-pause headroom
- Founder workload and unresolved single-person dependencies
- Platform, vendor, funder, sector, issuer, cash, in-kind, replacement-cost, and practical-control concentration
- Recurring revenue coverage, runway, reserves, insurance, and wind-down funding
- Stage 3 viability with report revenue set to zero and Stage 4 report revenue separated into contracted, demonstrated, pipeline, and speculative amounts
- Program-level direct, allocated, subsidy, restricted, reserve, tail, and replacement costs
- Partner compliance, audit findings, corrective action, and exit readiness
- Governance participation and influence across consumers, workers, businesses, technical contributors, and public-interest perspectives
- Conflicts, recusals, overrides, emergency actions, and decision timeliness
- Publication completeness and independence
- Ability to replace an operator or lose a major funder without stranding consumers

Growth under founder overload, unfunded appeals, sponsor control, or hidden in-kind labor is not sustainable success.

### 18.21 Open-standard and ecosystem measures

Open Conduct should distinguish attention from implementability and implementability from trustworthy conformance.

Relevant measures include:

- Independent readers who can correctly understand the standard
- Public comments, issue quality, and resolution
- Implementers able to build from the published specification and tests without private access
- Interoperability among independently built implementations
- Conformance test completeness and defect discovery
- Version adoption, compatibility, deprecation, and migration
- Diversity of participating businesses, platforms, workers, consumers, researchers, and public-interest contributors
- Time and cost required for a smaller organization to implement
- Concentration of certified roles among one vendor or corporate family
- Misuse of terminology or marks and speed of correction
- Independent replication of research or model behavior

NCS website traffic, domain recognition, newsletter engagement, inbound partner interest, and GitHub or specification activity may indicate reach. They do not demonstrate that NCS is valid, fair, safe, or worthy of consequential use.

### 18.22 Stage- and release-specific success questions

Each stage should answer a different question.

#### Stage 0: concept and stewardship

Success means the idea is coherent enough to invite informed scrutiny, the public narrative does not overclaim, project assets and decisions are recorded, and founder workload remains bounded. Attention is useful; it is not validation.

#### Stage 1: contribution and challenge

Success means qualified contributors—including consumers, workers, civil-rights, disability, labor, legal, technical, enterprise, research, and governance perspectives—produce material work that changes or strengthens the specification. Adviser names alone do not count.

#### Stage 2: simulation and prototype

Success means the project can identify a bounded design that performs acceptably in known-truth simulation, is understandable in representative research, can be integrated and reversed technically, has a viable legal and rights posture, and can be fully funded through responsible stop.

#### Release 3A: live-event shadow operation

Primary question: Can real NCS and VCI evidence be collected, attributed, corrected, protected, and operated without influencing benefits?

Advancement requires acceptable evidence quality, worker conditions, rights performance, data protection, and operational capacity. Demand for a benefit cannot compensate for weak event integrity.

#### Release 3B: private consumer view

Primary question: Can consumers accurately understand and emotionally tolerate a private contextual record and use its rights?

Advancement requires comprehension, explanation, disagreement, challenge, correction, accessibility, and legitimacy performance. A pleasing visual design does not compensate for moral or contextual misunderstanding.

#### Release 3C: company-specific proof

Primary question: Can a consumer voluntarily present a minimized proof for a low-risk benefit that is reliably delivered without degrading baseline service?

Advancement requires proof integrity, genuine choice, benefit value, fulfillment, parity, remedy, and manageable burden.

#### Release 3D: industry portability

Primary question: Can history earned through one independent business support an understandable, fair, privacy-preserving benefit with another?

Advancement requires independent issuers, valid context transfer, consumer demand, minimized proof, concentration control, consistent benefit treatment, and no named-history or competitor leakage.

#### Release 3E: bounded expansion

Primary question: Does one material addition preserve the earlier results?

The expansion should ordinarily change volume, business, event class, benefit, jurisdiction, or industry—not several at once.

#### Stage 4: production

Success requires repeated evidence across releases, sustainable rights and economics, mature governance, operator interchangeability, durable public reporting, and evidence that performance remains acceptable as incentives and scale change.

### 18.23 Statistical and qualitative evidence

Sample size should follow the decision and plausible harm, not a generic pilot number. The evaluation plan should identify:

- Expected event and participant volume
- Minimum detectable effects or required precision for primary measures
- Expected missingness, clustering, repeated interactions, and issuer concentration
- Subgroup analyses that are adequately powered and those that are exploratory
- Duration needed to observe reversals, challenges, recurrence, recency, and operational tails
- Correction for multiple comparisons where appropriate
- Sensitivity to alternative definitions and missing-data assumptions
- Conditions for early pause, futility, extension, or completion

Primary causal analyses should ordinarily report an assignment- or invitation-based effect where the design supports it, alongside clearly labeled exposure, presentation, recipient, and per-protocol analyses. This prevents self-selection into enrollment, accumulated history, proof presentation, and benefit acceptance from being mistaken for the effect of offering CQ to the target population.

Missingness should be treated as an outcome and possible source of bias. The analysis must show where data became unavailable; compare observed and missing groups using permitted information; explain whether missingness could depend on conduct, business failure, accessibility, dissatisfaction, withdrawal, platform error, or worker pressure; and present bounded or sensitivity results under credible alternatives. Complete-case analysis alone is not sufficient for a primary claim.

Repeated interactions, shared workers, locations, corporate families, platform policies, and changing business behavior create clustering and interference. The plan should use the correct unit, cluster-robust or hierarchical methods where justified, and explicit spillover analysis. Adding event count does not necessarily add independent information.

Sequential monitoring, many subgroups, many outcomes, model challengers, report cuts, and repeated partner questions create opportunities to stop on a favorable result. The charter must specify which analyses control decision error, which are descriptive, and which are exploratory. A promising exploratory finding should generate a new test rather than rewrite the original primary result.

Statistical significance alone is not sufficient. A small statistically detectable difference may be operationally irrelevant, while a rare severe harm may matter without a large sample.

Qualitative evidence should include interviews, scenario tasks, observation, diary or follow-up research where appropriate, worker and consumer listening sessions, case review, and analysis of disagreement and near misses. Researchers should actively seek disconfirming evidence and include participants who declined, withdrew, had insufficient history, experienced a failure, or did not receive a benefit.

The evaluation period continues beyond the last live interaction for the defined tail. Delayed worker retaliation, consumer challenge, correction, credential change, benefit failure, privacy incident, participant withdrawal, and partner wind-down may be invisible in a short activation window. Claims must state the follow-up actually observed.

### 18.24 Metric integrity and anti-gaming

Every important metric changes incentives. The measurement system should anticipate attempts to improve the number without improving the outcome.

Examples include:

- Prompting only easy interactions to improve NCS response patterns
- Encouraging workers to avoid definite responses
- Redefining eligibility to exclude difficult cases
- Delaying reversals or challenges beyond the reporting window
- Providing faster baseline service during measured periods only
- Discouraging consumers from presenting proofs likely to fail
- Relabeling ordinary benefits as CQ benefits
- Closing, merging, or rerouting cases to improve review time
- Moving rights, worker, or integration costs outside the pilot budget
- Selecting favorable subgroups or time periods for public claims
- Expanding volume before a known risk becomes statistically visible

Metric definitions, code, data transformations, exclusions, and changes should be versioned and auditable. Material incentive-sensitive measures should have independent sampling or verification.

### 18.25 Claims ladder

Public claims should advance only as evidence advances.

| Evidence level | Permitted claim type | Claims not yet permitted |
|---|---|---|
| Concept | The project proposes a way to measure and recognize conduct | The system works, is fair, or improves loyalty |
| Simulation | A candidate rule behaved in specified ways in synthetic scenarios | It predicts or improves real human behavior |
| Prototype research | Participants could use or understand a nonproduction workflow under tested conditions | Real-world safety, reliability, portability, or business impact |
| Shadow pilot | Real evidence could be collected and governed in the tested context | A score or proof improves treatment or creates value |
| Company-specific benefit pilot | An approved proof and benefit produced the reported outcomes in one bounded setting | Industry portability, cross-industry validity, or production readiness |
| Industry-portability pilot | A contextual proof transferred among the tested independent businesses | Overall CQ, universal conduct, or unrelated-industry applicability |
| Repeated production evidence | The approved system sustained reported outcomes in specified production contexts | Untested populations, uses, jurisdictions, or future performance |

Every material external claim should identify the evidence level, population, context, time, uncertainty, and responsible source. Testimonials and anecdotes may illustrate experience but must not stand in for representative evidence.

### 18.26 Decision matrix

At each gate, the authorized body must select one outcome:

1. **Stop:** The tested use lacks sufficient value, violates a hard boundary, cannot be corrected proportionately, or no longer justifies its risk and cost.
2. **Repeat:** The design remains plausible but the evidence is insufficient, unstable, underpowered, operationally disrupted, or not replicated.
3. **Redesign:** A specific workflow, event, model, explanation, protection, benefit, partner role, or operating function requires material change before retesting.
4. **Advance:** The intended question was answered, every applicable hard gate passes, review gates meet their predefined standards, unresolved limitations are acceptable for the proposed next bounded step, and capacity for that step is funded and ready.

The decision record must state:

- Evidence considered
- Gates passed, failed, or unresolved
- Harms, incidents, near misses, and limitations
- Dissenting views and conflicts
- Required corrections and ownership
- Scope and conditions of any next release
- Claims authorized by the result
- Claims that remain prohibited

An amber or mixed result ordinarily supports repeat or redesign—not quiet continuation and not automatic abandonment. A result can validate NCS while rejecting a particular synthesis, validate a private view while rejecting portability, or validate a workflow while showing that the proposed benefit is not worthwhile.

### 18.27 Reporting and dashboards

Internal monitoring should provide timely operational and rights signals without exposing unnecessary personal or worker-level data. Role-specific dashboards should use access controls, aggregation thresholds, and purpose limits. Managers must not receive individual NCS response or worker-performance views.

Public reports should include:

- Scope, dates, stage, release, versions, jurisdiction, partners, funders, and conflicts
- Hypotheses, methods, units, eligibility, baseline, comparison, and material deviations
- Participation, nonparticipation, withdrawal, and missingness
- Evidence, comprehension, fairness, baseline, rights, benefit, worker, business, operational, security, privacy, economic, and governance findings
- Counts and rates for complaints, challenges, corrections, appeals, incidents, collective actions, and remedies, subject to privacy protection
- Subgroup and accessibility analysis with uncertainty and suppression where needed
- Unfavorable, null, mixed, and exploratory results
- What was not tested and what cannot be inferred
- Preregistered primary results before any more favorable exploratory reframing
- Recruitment, eligibility, enrollment, attrition, withdrawal, exposure, presentation, benefit, and follow-up flow
- Detection coverage, statistical power or precision, clustering, missingness, multiplicity, and material sensitivity results
- Decision to stop, repeat, redesign, or advance
- Authorized and prohibited claims

Publication timing should be defined before the pilot. A partner review period may correct factual or confidential information but must not provide veto over unfavorable findings.

Reports and supporting archives should preserve the evaluation charter, amendments, dated reasons, metric dictionary, code or executable analytical description, configuration and model versions, aggregate or controlled reproduction evidence, and the authorized claim record. Privacy and security may prevent public row-level data; they do not justify an irreproducible conclusion.

### 18.28 Independent evaluation and accountability

The evaluation function should be structurally able to report that the project failed.

Independence requires:

- Conflict disclosure and recusal
- No compensation tied to favorable outcome, advancement, certification, partner renewal, or fundraising
- Access to required data, documentation, staff, consumers, and workers
- Freedom to define or approve methods before analysis
- Authority to report limitations and dissent
- Protection against sponsor or founder suppression
- Privacy, security, worker-safety, and publication responsibilities
- A process for correcting the evaluator's own errors

OCA may maintain operational dashboards and conduct internal analysis, but a consumer-affecting pilot requires independent review of the primary evidence and advancement decision. Partner analytics alone are not independent evidence.

### 18.28A Suite J evaluation-integrity architecture

Suite J v0.1 completes the structural simulation program. It preserves the idea but sharply bounds what a first pilot can claim. Its central rule is: **every number belongs to a defined population, and every claim belongs to the exact design, context, period, and evidence that earned it.**

The preferred primary estimand is the invitation- or assignment-population effect when the actual pilot can identify it ethically and reliably. Enrollment, sufficient-history, proof-presentation, benefit-recipient, and per-protocol effects remain required secondary estimates. They answer real questions, but none may be generalized to an earlier population. If assignment-population observation is not feasible, the primary estimand must be narrowed and named before launch rather than reconstructed after results are visible.

The claim ladder is non-inheriting:

1. **Workflow claim:** the defined process can be delivered under the tested conditions.
2. **Construct claim:** the specified measure behaves as intended for the tested purpose and population.
3. **Intervention claim:** use of the specified measure or proof caused the defined outcome under the tested design.
4. **Portability claim:** the result transfers across the exact contexts named in the claim.

Success at one level does not authorize the next. Each claim has its own evidence, uncertainty, limitation, replication, review, expiry, and prohibited-inference record.

The following requirements apply before and during any consumer- or worker-affecting pilot:

| ID | Requirement |
|---|---|
| EVI-001 | Name the primary estimand, population, assignment mechanism, identification assumptions, outcome-observation path, exclusions, and fallback before launch. |
| EVI-002 | Report invitation or assignment, enrollment, exposure, sufficient history, qualification, proof presentation, benefit receipt, and per-protocol effects separately where applicable. |
| EVI-003 | Reconcile the complete denominator ladder from independent source evidence, including noninvitation, exclusion, withdrawal, technical failure, missing outcome, correction, remedy, and follow-up. |
| EVI-004 | Publish every estimate with its exact numerator, denominator, period, uncertainty, exclusions, and population to which it may and may not be generalized. |
| EVI-005 | Map shared people, workers, managers, locations, businesses, platforms, periods, and incidents; analyze at the real dependency unit and report effective information. |
| EVI-006 | Treat weak subgroup or intersectional evidence as uncertainty. Lack of statistical detection may never become parity, fairness, or safety clearance. |
| EVI-007 | Establish qualitative, accessible, protected, and independently visible harm channels that remain active when subgroup counts are small. |
| EVI-008 | Record missingness reasons and run credible outcome-dependent missingness sensitivity; narrow or prohibit claims when plausible missing data reverse or materially change the result. |
| EVI-009 | Preregister the primary question, hierarchy, model, outcomes, subgroups, periods, interim looks, multiplicity method, amendments, and public result order. |
| EVI-010 | Lead public reporting with the preregistered primary result; label exploratory results and never use them to displace an unfavorable or null primary result. |
| EVI-011 | Pair every harm or safety statement with detection coverage, precision or bounds, accessibility, unresolved cases, independent escalation, follow-up, and stop rules. |
| EVI-012 | Match follow-up to the risk and claim; fund delayed-harm observation, correction, remedy, persistence checks, and final reporting through the complete tail. |
| EVI-013 | Separate novelty, attention, training, staffing, implementation fidelity, spillover, persistence, and partner enthusiasm from the claimed CQ mechanism. |
| EVI-014 | Never randomize or withhold ordinary service parity, accessibility, correction, withdrawal, incident response, remedy, or another protected right. |
| EVI-015 | Use independent ethics, consumer, worker, accessibility, legal, privacy, security, and methods review appropriate to the exact variation and jurisdiction. |
| EVI-016 | Preserve versioned code, queries, schemas, model and configuration versions, exclusions, data lineage, amendment history, aggregate checks, and an executable analytical description. |
| EVI-017 | Permit governed evaluator reruns in a controlled environment while minimizing retention, access, and replication of person-level histories; reproducibility does not authorize a central public dossier. |
| EVI-018 | Treat one site as one site-specific result. Predefine materially independent replication requirements appropriate to workflow, construct, intervention, and portability claims. |
| EVI-019 | Maintain a versioned authorized-claims ledger that records supporting evidence, context, period, limitations, reviewer, replication, expiry, correction, and prohibited inferences. |
| EVI-020 | Publish the decision to stop, repeat, redesign, or advance, including failed gates and unresolved uncertainty; partner or founder review may correct facts but may not suppress an unfavorable result. |

Suite J does not select a real pilot, evaluator, sample, duration, comparison, population, business, jurisdiction, risk horizon, threshold, or statistical model. It authorizes no general CQ-validity, causal-value, fairness, safety, legal-compliance, portability, or production-readiness claim. Those remain empirical and institutional gates.

### 18.29 Decisions intentionally deferred

The following require a concrete pilot context, simulation, research design, legal review, data access, and operating model:

- Exact hard-gate and review-gate thresholds
- Sample size, duration, power, precision, and comparison design
- Final metric dictionary and aggregation windows
- Applicable demographic and accessibility data collection
- Baseline-service measures by industry
- NCS prompt-response, sampling, burden, and bias thresholds
- VCI event-specific accuracy and responsibility thresholds
- Model calibration, stability, recency, and confidence thresholds
- Proof, benefit, and portability success ranges
- Challenge, appeal, incident, and remedy service levels
- Economic, concentration, reserve, and staffing thresholds
- Public preregistration method and independent evaluator
- Production longitudinal monitoring and recertification cadence

These values must be defined before the release that depends on them. They may not be selected after seeing results merely to convert failure into success.

### 18.30 Validation requirements

Before a consumer-affecting pilot, independent review must confirm:

- A complete evaluation charter and metric dictionary
- Clear primary questions for each planned release
- Separate hard gates, review gates, and learning targets
- Measures for intended value and paired failure modes
- Correct units, denominators, missingness, uncertainty, and concentration treatment
- Baseline and comparison design that cannot assign inferior ordinary service
- Evidence-integrity validation for interaction, actor, NCS, VCI, lifecycle, and confidence
- Consumer and worker comprehension, voluntariness, accessibility, emotional-response, and legitimacy research
- Fairness and protected-activity analysis using justified quantitative and qualitative methods
- Challenge, appeal, incident, collective correction, and remedy measures
- Benefit value, fulfillment, coercion, and baseline-parity measures
- Worker labor, pressure, safety, privacy, and retaliation measures
- Business-value methods that distinguish hypothesis, correlation, and causal evidence
- Operational, privacy, security, economic, governance, and exit measures
- Statistical and qualitative evidence plans proportionate to the decision and plausible harms
- Anti-gaming controls, versioned analysis, and deviation logging
- An independent evaluator with access and publication protection
- A public report and claims plan covering unfavorable, null, mixed, and limited findings
- A decision process that explicitly stops, repeats, redesigns, or advances

The evaluation implementation is a **CANDIDATE** until Stage 2 produces a concrete charter, metric dictionary, thresholds, and independent review design. Its multi-dimensional definition of success, non-compensating rights gates, claims discipline, explicit decision requirement, and prohibition on using adoption or business value to override harm are **CONSTITUTIONAL**.

---

# Part V: Marketing and Public Experience

## 19. Positioning and narrative

### 19.1 Purpose

The public narrative must make the Conduct idea understandable before asking people to understand its machinery. It should help a consumer recognize the missing value in current loyalty systems, help a worker see that their experience matters, help a business understand the opportunity, and help a critic find the boundaries and unresolved questions.

Positioning does not simplify the system by hiding its risks. It simplifies the order in which people encounter the idea.

The narrative should move through five questions:

1. What is missing today?
2. What could be better for people?
3. What is the proposed system?
4. What would make it trustworthy?
5. What can someone do at the project's current stage?

The public story must remain accurate as the project moves from idea to standard, prototype, pilot, and possible production. Language that is appropriate for a proposal may become too tentative after evidence exists; language that implies a functioning network is misleading before one exists.

### 19.2 Core positioning requirements

1. The public story MUST begin with the human and consumer opportunity, not the score, formula, governance body, technology, or business case.
2. The central problem MUST be stated plainly: businesses recognize what customers spend and how often they transact, but rarely recognize how customers treat people or fulfill their side of the relationship.
3. Conduct MUST be described as interaction-specific. Public language MUST NOT claim to identify good or bad people, moral worth, personality, social class, or general character.
4. “Nice” MAY be used as an accessible editorial and campaign hook, but MUST NOT be presented as the formal thing the system measures.
5. CQ MUST be introduced as one proposed contextual score, while NCS and VCI remain distinct protected inputs beneath it. NCS captures human experience; VCI is the verified customer record of eligible responsibilities and events.
6. Portability MUST be described as consumer-controlled sharing, not business access to a universal customer record.
7. The upside-only rule MUST appear in every material short explanation: CQ may support additional approved benefits and may not reduce baseline service.
8. Current-stage language MUST distinguish a proposal, draft standard, simulation, prototype, research pilot, benefit pilot, and production system.
9. The narrative MUST acknowledge bias, misuse, measurement, legal, privacy, worker, and governance risks without implying that naming a safeguard proves the problem is solved.
10. Public examples MUST match approved or clearly hypothetical uses. High-stakes, punitive, employment, safety, credit, housing, insurance, essential-service, and blacklist examples MUST NOT be used to dramatize value.
11. Business value MUST be framed around better mutual relationships and optional recognition, not removing, avoiding, deprioritizing, or extracting more margin from “bad” customers.
12. Worker value MUST be framed as a protected human voice in the system, not a promise that NCS will identify or punish toxic customers.
13. Technology MUST support the story rather than lead it. Identity, credentials, cryptography, formulas, APIs, and governance details should appear when the audience needs to evaluate how the promise could work.
14. The project MUST invite scrutiny, contribution, and correction. It MUST NOT use openness as proof of legitimacy before independent participation and evidence exist.
15. Every public claim MUST comply with the Section 18 claims ladder.
16. Public language MUST preserve that NCS and VCI remain separately governed and inspectable beneath any CQ, that an individual CQ may be unavailable when either input fails its gate, that only purpose-bound proofs may become external, that some context transfers remain zero, and that no valid overall CQ may emerge.
17. Safeguards MUST be described as requirements or designs to test—not as proof that bias, coercion, discrimination, gaming, privacy, legal, worker, or social-scoring risks have been solved.
18. A portability example MAY name source and destination companies for illustration, but the ordinary proposed proof MUST NOT be described as revealing that named source, its events, or its nonpublic history to the receiving company.
19. OCA aggregate intelligence and reports MUST be positioned as a separate institutional-value proposition, not as consumer proof access, a reason to collect more personal data, or a way to reveal competitors.
20. Public materials MUST distinguish the full long-term ambition from the narrower first pilot and state what each tested release could and could not establish.

### 19.3 The core idea

The shortest accurate expression is:

> Businesses reward what customers spend. Conduct could help them recognize how customers treat people and hold up their side of the relationship, too.

The public proposition is:

> The Conduct Quotient is a proposed, consumer-controlled way to carry relevant conduct history between participating businesses and unlock optional recognition—if that history can be represented and transferred fairly.

The fuller promise is:

> People who create positive human interactions and reliably fulfill the responsibilities they accept should be able to benefit from the history they have earned. Conduct proposes one simple, contextual CQ built from protected human input and verified operational evidence. The two inputs remain separately governed beneath the score, the history remains private, and the consumer chooses when to share an approved CQ or a more limited proof for an additional benefit.

These statements deliberately describe conduct and the proposed benefit without claiming to identify “good people.”

### 19.4 The central narrative

The canonical public narrative follows this order.

#### 1. Businesses know our economic value

Companies track purchases, frequency, returns, support activity, loyalty status, and risk. Those systems are built to understand transactions and economics.

#### 2. They rarely recognize our conduct

Most businesses have no structured, fair, portable way to recognize customers who treat employees well and reliably fulfill the responsibilities they accepted. Where customer ratings exist, they are usually proprietary, opaque, trapped inside one platform, and sometimes tied to exclusion.

#### 3. Conduct could become another form of earned value

A customer relationship has a human side and an operational side. How someone treats the person helping them matters. Whether they show up, pay, return what they borrowed, and handle agreed responsibilities matters too.

The opportunity is to recognize both without turning either into a judgment of human worth.

#### 4. The system uses two inputs and one contextual result

- **Net Conduct Score captures the human experience.** An eligible person who directly participated in a verified interaction answers one protected question.
- **Verified Conduct Index builds the verified customer record.** Approved operational records show eligible responsibilities and events that were disclosed, attributable, and within the consumer's reasonable control.
- **Conduct Quotient is the proposed contextual score.** It brings the two separately valid inputs together through a non-compensating rule while accounting for context, disputes, concentration, and the limits of transferring conduct between settings. The consumer sees one CQ when the evidence can support it; a business ordinarily receives only the approved purpose-bound proof it needs.

This is the simplest reusable explanation of the component relationship after CQ has been introduced. Public material SHOULD introduce CQ first as the proposed simple consumer result, then explain NCS and VCI as the two protected inputs beneath it. It MUST NOT present the number as raw, universal, independently valid, or available when either required input fails its gate.

#### 5. The consumer controls sharing

The consumer may choose to present an approved company-specific or industry-specific proof. The receiving business learns only what it needs for the approved benefit, not the consumer's full history.

#### 6. The result adds recognition

A qualifying proof may unlock an additional, approved benefit. The system must make participation, refusal, insufficient history, and technical failure leave baseline service intact—and a pilot must verify that this is true in practice.

#### 7. The standard has to earn trust

The idea works only if it can manage bias, coercion, inaccurate records, bad days, company failures, context, privacy, worker pressure, appeals, gaming, and institutional misuse. Open Conduct exists to develop and test those rules in public—not to declare them solved.

#### 8. The future raises the value of human relationships

AI agents will perform more routine transactions on our behalf, and personhood systems may help prove that a human sits behind an account or agent. Conduct addresses a different question: can relevant history from verified interactions help a person earn more human recognition in a new business relationship?

This future context strengthens the relevance of the idea. It should appear after the current human problem is clear rather than asking speculative technology to carry the opening.

### 19.5 The narrative bridge

The most important transition is from problem to proposal:

> If businesses recognize spending and frequency, they could also recognize the way a customer participates in the relationship. That is the problem the Conduct Quotient is designed to explore.

Equivalent language may be used, but public material needs an explicit bridge. It should not introduce NCS, VCI, or CQ as if the audience already understands why a new system exists.

The second important bridge is from measurement to portability:

> Recognition becomes more useful when the customer can carry it. A history earned with one participating business could help establish trust with another, without exposing the underlying record.

The third bridge is from opportunity to safeguards:

> A system like this could create value only if its limits shape it from the beginning.

These transitions prevent the narrative from becoming a list of features or abruptly switching from optimism to legal defense.

### 19.6 Positioning territory

The recommended category language is:

- **Recognition for conduct** for the broad public idea
- **Consumer-controlled earned recognition** for the proposed outcome
- **An open standard for conduct in verified interactions** for technical, policy, and enterprise audiences
- **A conduct-based layer of loyalty** when connecting the concept to existing loyalty systems

“Behavioral loyalty” should not be the primary category. In existing loyalty language it can mean repeat purchase behavior, while in this context it can imply that businesses are conditioning people to behave. It may be used only when carefully defined.

“Reputation” may be needed when comparing Conduct with earlier systems or discussing risk. It should not be the default product category because it suggests public profiles, generalized judgments, and passive business access.

“Trust” is useful when paired with earned, contextual, verified, or consumer-controlled. It should not imply guaranteed character or future behavior.

### 19.7 Brand and concept architecture

The public architecture should remain small enough to understand:

| Name | Public role | What it should mean |
|---|---|---|
| Conduct | The public-facing idea and conversation | Good conduct should become recognizable and rewarding in business relationships |
| Conduct Quotient / CQ | The consumer-controlled contextual result | A way to carry and selectively prove eligible conduct history |
| Net Conduct Score / NCS | The human-experience standard | A protected human response after a verified interaction |
| Verified Conduct Index / VCI | The operational-evidence standard | Verified evidence of agreed responsibilities and follow-through |
| Open Conduct | The standards and participation project | The open work of defining, testing, governing, and improving the system |
| Open Conduct Alliance / OCA | The future governing institution | The independent body that may govern certification, audit, rights, appeals, and versions once properly constituted |
| Return on Nice | An editorial and campaign idea | A memorable expression of the opportunity for conduct to create value |
| Nice Should Pay | A thesis or rallying line | An invitation to demand recognition for conduct, not a scoring definition or guaranteed financial promise |

Until an Open Conduct Alliance is legally and operationally constituted, public materials should describe OCA as a proposed future governing institution. Openconduct.org may host the project and draft standard without implying that a mature alliance, certification program, membership body, or operating network already exists.

### 19.8 “Nice” and “good people”

“Nice” is valuable because people understand the aspiration immediately. It is dangerous if it becomes a substitute for the specification.

In public narrative:

- “Nice should pay” can open or close the argument.
- “Return on nice” can name the broader opportunity.
- The body should define the measurable idea as treatment of people plus fulfillment of accepted responsibilities.
- Safeguards should make clear that disagreement, directness, disability, culture, language, complaint, accommodation, or need for help are not failures of conduct.

“Good people” can work as natural editorial language when expressing the desire for better human relationships. It should not describe what CQ proves. When precision matters, use:

- People who treat others well
- Customers who handle interactions responsibly
- Customers who treat workers well and fulfill agreed responsibilities
- People with a relevant history of positive conduct

Avoid turning “good customer” into a fixed identity class. A customer may have strong history in one context, insufficient evidence in another, and a difficult interaction that deserves context and review.

### 19.9 Audience priorities

The project has one core story and several audience-specific entry points.

#### Consumers and readers

Lead with the missing recognition:

> Businesses know what we spend. They should be able to recognize the trust we earn, too—and we should decide when that history travels.

Emphasize:

- The benefit of earned recognition
- Consumer choice and privacy
- Context rather than a permanent universal score
- Additional benefits rather than reduced baseline service
- The ability to inspect, disagree, correct, and leave
- The proposal's current maturity and invitation to shape it

Do not lead with biometrics, wallets, zero-knowledge proofs, consortium structure, or formulas.

#### Frontline workers and worker representatives

Lead with protected human input:

> Customer systems record transactions and complaints. NCS proposes a protected way for the human experience of an interaction to count, too.

Emphasize:

- Direct participants, verified interactions, and one bounded prompt
- No employee-performance use
- No quotas, scripts, manager pressure, or consumer confrontation
- Paid participation and protected reporting
- VCI as a counterweight to subjective input
- Worker involvement in design, governance, and evaluation

Do not promise protection from “toxic customers,” customer exclusion, easier performance management, or reduced worker headcount.

#### Businesses and platforms

Lead with the missing relationship dimension:

> Loyalty systems recognize spend and frequency. Conduct could add a governed, consumer-controlled way to recognize how the relationship works.

Emphasize:

- Additional recognition within existing loyalty and service workflows
- Better mutual interactions rather than cheaper customers
- Existing authenticated accounts, verified events, employee interfaces, and benefit systems as implementation leverage
- Minimal proofs instead of shared raw histories
- Open interoperability and bounded pilots
- A future aggregate-intelligence layer that could show a member its own patterns against protected network cohorts without exposing people or named competitors
- Evidence requirements before retention, loyalty, cost, or revenue claims

Do not promise immediate margin, lower support cost, fewer complaints, employee protection through exclusion, proprietary competitive intelligence, eligible-customer audiences, or access to competitor histories. Aggregate reports are a later institutional product hypothesis and should not be presented as evidence that OCA already has network data.

#### Standards, technical, policy, and research audiences

Lead with the bounded system claim:

> Open Conduct is developing an open, testable standard for representing conduct in verified interactions without creating a public reputation profile or shared raw-history database.

Emphasize:

- Separate human and operational inputs
- Context, confidence, recency, provenance, and correction
- Consumer-controlled purpose-specific proofs
- Conformance, audit, versioning, governance, and rights
- Explicit prohibited uses
- Open questions, simulations, and evidence gates

Do not describe the math as objective, the architecture as fully decentralized, the standard as industry-approved, or the safeguards as proven before validation.

#### Critics, advocates, and regulators

Lead with the concern rather than avoiding it:

> A portable conduct system could become discriminatory, coercive, or punitive if its boundaries fail. The proposal is designed to make those boundaries explicit and testable before expansion.

Emphasize:

- Non-goals and prohibited uses
- Baseline service and upside-only operation
- Consumer and worker rights
- Context limits and no public leaderboard
- Independent evaluation and governance
- The possibility that a pilot may reject a feature or the concept

Criticism should be treated as design input, not an objection to route around.

### 19.10 Explanation depth

Public materials should support four levels of understanding.

#### One sentence

> Conduct is a proposal to help businesses recognize and reward customers who treat people well and hold up their side of the relationship.

At current maturity, “proposal” is required.

#### Thirty seconds

> Loyalty programs recognize what customers spend and how often they return. Conduct proposes adding another kind of earned value: how customers treat the people serving them and whether they fulfill the responsibilities of an interaction. A Conduct Quotient would present that history as one simple, contextual score, built only after protected human input and verified operational evidence each independently qualify. The consumer could inspect what formed the score and choose whether to share an approved CQ or a more limited proof for an additional benefit. Research still has to establish when a score is valid, how it should be displayed, and whether any broader overall CQ should ever exist.

#### Three minutes

The three-minute version should cover:

1. Existing loyalty systems recognize transactions rather than conduct.
2. NCS captures eligible human experience.
3. VCI contributes verified operational follow-through.
4. CQ interprets the history with context, confidence, recency, and review.
5. The consumer controls limited sharing.
6. Participating businesses may provide approved additional benefits.
7. Baseline service must remain unchanged, and a pilot must verify that it does in practice.
8. Bias, privacy, measurement, misuse, and governance are core design problems.
9. The project is currently developing and testing an open standard.

#### Full specification

Readers who want to evaluate formulas, rights, governance, threats, implementation, pilots, economics, and success measures should move into openconduct.org and the specification. This is the “nerd out” layer. It should be easy to reach without making every consumer learn it first.

### 19.11 Why now

The strongest “why now” combines three developments:

1. **Customer systems have become detailed but economically narrow.** Businesses know more about transactions, loyalty, support, and risk while still lacking a governed way to recognize conduct.
2. **Platform ratings demonstrate both demand and failure modes.** Companies such as Uber and Airbnb show that both sides of an interaction care who they are dealing with, but their systems remain platform-specific and may affect access or enforcement.
3. **AI is changing where human value sits.** Agents will handle more routine transactions. Human attention, discretion, hosted experience, and relationship may become more meaningful benefits. Personhood can establish that someone is human; conduct can represent what they have earned in human relationships.

The argument should not depend on a claim that people have become universally worse or that robots will imminently replace every interaction. Those observations can add context, but the missing-recognition problem exists now.

### 19.12 The core example

The airline example remains the clearest expression of portability:

> A traveler may have years of strong history with Delta and no status with United. With the traveler's permission, a future industry-specific Conduct proof could allow United to recognize relevant history earned elsewhere without learning that Delta supplied it or receiving the underlying Delta events.

This example is a narrative illustration, not a current product claim or partner announcement.

The ordinary proof should be described as a limited eligibility answer. Public material should not imply that United receives the traveler’s raw Delta rating, named events, complete history, or unrestricted ability to store and reuse the result.

Examples of possible recognition should stay additive, modest, and subject to approval. Safer examples include a small welcome, a non-scarce convenience, or a more human moment of recognition. Public materials should avoid leading with waived deposits, material upgrades, priority during disruption, security discretion, financial terms, complaint access, or scarce essential capacity before those benefits receive separate evidence and legal review.

### 19.13 Objection architecture

The public narrative should address the strongest objections plainly.

#### “Is this a social credit score?”

The answer should explain the design differences without claiming the risk is impossible:

- No public leaderboard or searchable profile
- Verified commercial interactions rather than unrelated life behavior
- Contextual history rather than one universal moral score
- Consumer-controlled, purpose-specific disclosure
- Additional approved benefits rather than baseline denial or punishment
- Inspection, challenge, appeal, recency, withdrawal, audit, and governance

The answer should end by acknowledging that these protections must be proven in implementation.

#### “Won’t human ratings reproduce bias?”

Yes, human judgment can carry bias. NCS therefore cannot stand alone as objective truth. It is bound to a verified interaction, uses a controlled prompt, hides prior conduct information, and is monitored for selective sampling and prohibited patterns. VCI supplies a separate operational lens; it does not mathematically cure bias in NCS. The project must test whether the complete design works; if it does not, the affected use should not advance.

#### “Why should anyone need a score to receive decent service?”

They should not. Baseline service is a right of participation in the system. CQ can support an additional benefit only. If the standard line becomes worse, the program has failed regardless of how much eligible consumers like the benefit.

#### “What about a bad day?”

The proposal distinguishes an interaction from a person. Confidence, sample size, recency, patterns, disputes, business failures, and redemption are designed to prevent one event from automatically becoming a permanent conclusion. The pilot must test whether they actually do.

#### “Why would companies share this?”

Participating companies would not share raw customer histories. They would issue governed events and accept limited proofs through a shared standard only when participation creates sufficient consumer, worker, and business value. Whether that value exists is a pilot question, not a settled claim.

#### “Can companies game or misuse it?”

They can try. The specification therefore includes source rules, audit, certification, anomaly detection, challenges, sanctions, public reporting, separation of roles, and revocation. The project should never describe misuse as solved merely because controls are documented.

#### “Why use a score at all?”

The public answer should leave room for the evaluation to reject a single number. CQ may ultimately be represented through separate dimensions, tiers, or purpose-specific eligibility proofs. The system needs a usable representation of eligible history; it does not need to force false precision.

### 19.14 Proof before promotion

The narrative must change with evidence.

#### Current stage: proposal and draft standard

Appropriate language includes:

- I am proposing
- The project is developing
- A CQ could
- The system is designed to
- The specification requires
- The pilot would test
- This remains an open question

Inappropriate language includes:

- Conduct has created
- CQ improves loyalty
- Members receive
- Our network connects
- Certified partners
- Industry standard
- Proven fair
- Legally compliant everywhere

#### Prototype and simulation stage

The project may describe what a prototype enabled participants to do or how a candidate rule behaved in defined scenarios. It should not imply real-world value, safety, or adoption.

#### Research and benefit pilot stages

Claims should state the context, participants, dates, release, outcome, uncertainty, and limitation. One partner, one industry, or one benefit cannot establish universal CQ.

#### Production stage

Even mature claims remain contextual. Production does not authorize statements about untested industries, jurisdictions, populations, benefits, or future outcomes.

### 19.15 Language system

#### Preferred language

- Recognize conduct
- Earned trust
- Treat people well
- Hold up your side of the relationship
- Verified interaction
- Human experience
- Verified customer record
- Consumer-controlled sharing
- Limited proof
- Additional benefit
- Baseline service
- Contextual history
- Open standard
- Proposed system
- Test, learn, and improve

#### Language requiring context

- Nice
- Good customer
- Good people
- Reputation
- Score
- Trustworthy
- Friction
- Loyalty
- Reward
- Overall CQ
- Objective

#### Language to avoid

- Rate people
- Score everyone
- Prove someone is good
- Identify bad customers
- Weed out toxic customers
- Customer blacklist
- High-yield, low-friction customer
- Mathematical protection
- Objective measure of character
- Universal reputation
- Global social score
- Bypass the standard line
- Better treatment instead of standard service
- Brands know who they want around
- No-risk or bias-free
- The math proves
- Fully decentralized
- Data never leaves the device
- Zero-knowledge privacy, unless the implemented proof actually satisfies a defined technical claim
- Biometric verification, unless required, approved, and accurately described

### 19.16 Voice and editorial style

Public Conduct writing should sound like a smart person explaining a consequential idea to another smart person. It should be direct, conversational, confident about the thesis, and honest about what remains unresolved.

The preferred style uses:

- Concrete actors and plain verbs
- One idea per sentence where possible
- Specific examples before abstractions
- Short transitions that name the bridge between ideas
- “We” when the stake is genuinely shared
- Occasional warmth, humor, or a human aside
- Subheads that advance the argument
- Technical depth by invitation rather than forced into the opening
- A forward call to participate, test, challenge, or build

It avoids:

- Corporate manifesto language
- Abstract claims acting on other abstractions
- Moralizing consumers or workers
- Fear-based claims about public rudeness
- Dense legal disclaimers in place of plain explanation
- Technological inevitability
- Artificial urgency
- Repetition of the same diagnostic in the opening, body, list, and close
- Topic-label subheads that do not move the argument
- A triumphant close that treats the proposal as inevitable

The public sites should align with The New New's direct editorial voice while becoming more durable and referenceable than a newsletter issue.

### 19.17 Narrative layers across surfaces

The surfaces have distinct jobs:

| Surface | Primary job | Narrative depth |
|---|---|---|
| The New New | Introduce the idea, make the opportunity memorable, and invite interest | Editorial story and thesis |
| conduct.is | Help a broad audience understand the idea, imagine the benefit, examine the protections, and join the conversation | Consumer-first explanation with paths for workers and businesses |
| openconduct.org | Publish the standard, decisions, open questions, research, governance, implementation resources, and participation paths | Full standards and institutional depth |
| openconduct.org/netconductscore | Make NCS independently understandable and implementable without separating its governance | Focused open-standard explanation and conformance path |
| Partner material | Connect one partner's workflow and business need to a bounded pilot | Role-specific opportunity, requirements, and next step |
| Pilot participant material | Enable informed choice and practical use | Plain-language notice, rights, workflow, help, and current status |

Content may be reused across surfaces when the wording and claim remain accurate, but each surface should have one canonical responsibility. Repetition across sites should help orientation rather than create competing versions of the standard.

### 19.18 Calls to action by stage

At the current proposal stage, the primary calls to action are:

- Read the idea
- Challenge an assumption
- Comment on the draft standard
- Share a relevant use case or failure mode
- Contribute expertise
- Introduce a potential research or pilot participant
- Follow the project's progress

The current call to action is not:

- Get your CQ
- Check your score
- Join the network
- Become certified
- Claim a reward
- Add Conduct to your business today

Later stages may add prototype participation, research enrollment, implementation testing, membership, certification, proof, and benefit actions only when the corresponding function and rights exist.

### 19.19 Narrative review checklist

Before publishing material about Conduct, the owner should confirm:

- Does the piece begin with a recognizable human problem or opportunity?
- Does it explain why the proposal appears before introducing its components?
- Is CQ introduced before NCS and VCI, with every acronym expanded before use and the two inputs clearly protected beneath the score?
- Does it describe conduct rather than human worth?
- Does “nice” remain a hook rather than a hidden criterion?
- Does the consumer control sharing?
- Is baseline service protected explicitly?
- Are examples additive, contextual, and appropriate to the current stage?
- Does the language accurately describe proposal, simulation, prototype, pilot, or production status?
- Are meaningful risks acknowledged in plain language?
- Does the piece avoid asserting that documentation proves safety or legality?
- Is the requested action available now?
- Are technical details routed to Open Conduct without making them feel like homework?
- Does every claim match the evidence and Section 18 claims ladder?
- Would the central sentences sound natural when spoken aloud?

### 19.20 Decisions intentionally deferred

The following may be refined through launch production, post-launch audience learning, naming review, design work, and later evidence. They do not block publication when the proposal-stage claims boundary is preserved:

- Final conduct.is homepage headline, dek, page structure, and call to action
- Final openconduct.org homepage positioning and information architecture
- NCS page copy, conformance language, and independent implementation kit
- Permanent tagline, if one is needed
- Whether “Return on Nice” becomes an ongoing campaign, content series, or launch frame
- Final category language after audience testing
- Visual identity and relationship among Conduct, CQ, NCS, VCI, and Open Conduct
- Partner-presentation and outreach-message templates
- Current-stage newsletter-to-site conversion path
- Search strategy and metadata
- Community, contribution, update, and subscriber terminology
- Claims review and approval workflow
- Languages and localization strategy
- When the future OCA name may be used as an active institution

### 19.21 Publication and learning requirements

Before the initial sites are published, the project should conduct a focused editorial and comprehension review sufficient to confirm that:

- The problem and proposed value can be understood without first understanding the formulas
- Conduct remains distinguishable from moral worth, loyalty, wealth, and general reputation
- CQ appears first as the proposed simple consumer result, followed by the human and operational inputs that qualify and protect it
- Sharing is described as optional, contextual, and limited
- Unchanged baseline service is described as a requirement to test rather than an already demonstrated outcome
- Worker voice and the employment-use prohibition are visible
- Business value does not imply blacklist, cost-to-serve selection, or unrestricted competitor data
- Critics can quickly locate non-goals, safeguards, open questions, and ways to challenge the proposal
- Current-stage language does not imply an operating score, alliance, network, partner, certification, or benefit
- The airline example communicates portability without implying raw-history disclosure or current partnerships
- “Nice,” “good customer,” “trust,” “score,” and “reward” do not create material misconceptions
- Each surface has a clear role and a truthful action available at launch
- Public content meets accessibility, privacy, legal, evidence, and editorial review requirements

The launch itself begins the structured comprehension and audience-learning phase. Feedback, interviews, analytics, and observed misconceptions should be recorded against the relevant open questions and used to revise subsequent specification versions. Attention, agreement, traffic, and positive comments remain learning signals rather than evidence that the system works.

The public narrative is a **CANDIDATE** until it is tested with consumers, workers, businesses, critics, and technical readers. Its distinction between conduct and human worth, consumer-controlled sharing, baseline-service requirement, maturity language, and claims discipline are **CONSTITUTIONAL**; its human-first order and component sequence are **REQUIRED FOR COHERENCE** in the current explanation.

## 20. conduct.is

### 20.1 Purpose and status

conduct.is is the public front door for the Conduct idea. It should help a curious reader understand the missing recognition, the proposed system, the possible personal benefit, the essential safeguards, and the present opportunity to shape the work.

At launch, conduct.is is an explanation and invitation—not a product application. It MUST NOT imply that a consumer can receive a CQ, connect accounts, present a proof, claim a benefit, join a network, or obtain support for a live score.

### 20.2 Primary audience and desired response

The primary audience is a general reader encountering Conduct through The New New, search, sharing, or conversation. Workers and business readers should recognize themselves in the story without the homepage becoming an audience-selector menu.

The desired response is:

> I understand why this could help people. I understand the basic mechanism. I see why it could go wrong. I can tell that this is a proposal, and I know how to examine or contribute to it.

### 20.3 Launch information architecture

The initial site SHOULD be a focused, mobile-first scrolling experience with a small number of durable supporting pages. The homepage should follow this order:

1. **The missing recognition:** Businesses know what customers spend and how often they return. They rarely recognize how customers treat people or fulfill accepted responsibilities.
2. **The proposal:** Conduct is a proposed, consumer-controlled way to make relevant conduct history recognizable and potentially rewarding.
3. **One CQ, built from two protected inputs:** NCS captures eligible human experience; VCI represents the verified customer record; CQ brings them together without letting either erase the other.
4. **How recognition could travel:** A consumer could choose to present a limited company- or industry-relevant proof without exposing a complete or named-company history.
5. **What it could unlock:** Only approved additional recognition, never worse baseline service or restricted rights.
6. **What has to be protected:** Bias, bad data, coercion, context failure, privacy, worker pressure, gaming, exclusion, correction, and governance.
7. **Where the work stands:** A developed proposal and open draft standard with completed synthetic stress testing, not an operating score or proven system.
8. **What happens next:** Public challenge, comprehension work, prototypes, partner discovery, and only later a properly governed pilot if the proposal survives.
9. **Invitation:** Share a concern, use case, expertise, or potential introduction; or continue into Open Conduct for the full work.

Recommended supporting pages or anchored sections are:

- How it could work
- What Conduct protects
- Questions and answers
- Current status
- About the project
- Follow or contribute

The exact page boundaries MAY change during design. The narrative order MUST remain intact.

### 20.4 Homepage language requirements

The launch H1 SHOULD contain “Conduct Quotient” and explain the consumer value in plain language. A strong search-oriented working direction is:

> The Conduct Quotient: Recognition for How Customers Treat People and Follow Through

The dek should introduce the idea without promising portability or rewards as existing capabilities. It should mention consumer control and the two kinds of conduct evidence in ordinary language before using technical detail.

The page MUST include a visible status line near the first explanation:

> Conduct is a public proposal and open draft standard. No score, network, partner program, or consumer benefit operates today.

“Return on Nice” and “Nice Should Pay” MAY appear as memorable editorial language, but neither should define the metric, lead search metadata, or imply a guaranteed return.

### 20.5 Calls to action and intake

The primary call to action is to understand and respond to the proposal. The strongest launch actions are:

- Explore how it could work
- Read the open standard
- Challenge the idea
- Share a use case or failure mode
- Contribute relevant expertise
- Introduce a possible research or pilot participant
- Follow project updates

All feedback and interest SHOULD flow through one structured intake shared with openconduct.org. The form may ask how the person relates to the idea and what they are offering, but it MUST collect only information needed to route the submission. It MUST state that the project is founder-stewarded, responses are reviewed in batches, and an individual reply is not guaranteed.

The site MUST NOT launch with a score checker, waitlist framed as product access, member enrollment, certification application, partner-logo wall, chat support, open-ended community forum, or multiple overlapping contact forms.

### 20.6 Trust, privacy, accessibility, and maintenance

The site SHOULD use privacy-minimized analytics, collect no conduct or identity-verification data, publish a plain privacy notice for submitted information, and offer a simple deletion request path.

Accessibility, mobile performance, keyboard navigation, contrast, meaningful headings, readable type, alt text, reduced motion, and form usability are launch requirements. The design should communicate seriousness and openness without imitating a bank, credit bureau, government identity service, or active loyalty product.

The founder may batch updates and responses, publish no fixed service level, and pause intake if demand exceeds available capacity. Public status and the last material update should remain visible.

### 20.7 Launch success

Initial success means that people reach the correct mental model and provide useful input. Useful measures include completion of the core explanation, movement into Open Conduct, quality and diversity of submitted concerns and use cases, recurring misconceptions, and relevant expert or partner introductions.

Traffic, newsletter clicks, favorable comments, press attention, and company interest do not establish construct validity, fairness, safety, portability, business value, or readiness for a live pilot.

## 21. openconduct.org

### 21.1 Purpose and status

openconduct.org is the canonical home of the standards project. It publishes the durable explanation, specification, decisions, unresolved questions, evidence, safeguards, governance direction, and ways to contribute.

At launch, Open Conduct is a founder-stewarded public project. The Open Conduct Alliance remains a proposed future independent institution. The site MUST NOT use institutional language, membership, certification, seals, committees, or governance titles in a way that suggests the alliance already exists.

### 21.2 Primary audiences

The site primarily serves:

- People who want to scrutinize the proposal beyond the consumer story
- Workers and worker representatives
- Consumer, civil-rights, disability, privacy, competition, and public-interest advocates
- Businesses and platforms considering the relationship opportunity
- Researchers, measurement experts, economists, statisticians, and evaluators
- Standards, identity, credential, security, privacy, and interoperability practitioners
- Policy, legal, and governance experts
- Potential contributors and future research or pilot participants

The homepage should provide one shared explanation, then route naturally by question and depth rather than requiring visitors to declare an identity before they can begin.

### 21.3 Launch information architecture

The launch site SHOULD include:

1. **Overview:** The problem, proposal, component model, consumer-controlled recognition, principal protections, and current status.
2. **How Conduct works:** NCS, VCI, contextual CQ, purpose-bound proof, benefit, correction, and withdrawal at a conceptual level.
3. **Net Conduct Score:** The focused NCS standard at `/netconductscore`, including its independent future applications and current consumer-context boundaries.
4. **Protections and prohibited uses:** Baseline service, no public ranking, no negative external proof, no employment or high-stakes use, consumer and worker rights, context limits, privacy, challenge, and governance.
3a. **The case for a standard:** Why the proposal requires a shared standard rather than a private company feature, what a private version cannot hold, the Section 17.22 business value hypotheses stated as hypotheses, the open-ended reward catalog and its first-pilot restriction, the permanent rights boundary, and what survives if portability never clears review.
4a. **Regulatory posture:** A readable summary of Section 13 that names the load-bearing design decisions, the regimes each one engages, what remains unresolved, the legal deliverables required before any real person is affected, and the stop conditions. It carries the Section 13 status language and invites correction from counsel and advocates.
5. **The draft standard:** The versioned source of truth with a readable table of contents and visible decision classes.
6. **Research and evidence:** The adversarial audit, structural simulation method, Suites A through J, distributed-integrity decision, limitations, and the next empirical questions.
7. **Decisions and open questions:** A readable decision log, current open questions, change history, and a way to comment on a specific issue.
8. **Implementation and pilot path:** The staged path from proposal to comprehension work, prototype, shadow research, bounded benefit test, and possible production. This is not an implementation signup.
9. **Governance:** The current founder role, the proposed future OCA, stakeholder power, independence requirements, and activation boundary.
10. **Reports and network learning:** A secondary enterprise-facing explanation of governed aggregate insight without raw central custody, person-level outputs, named-competitor intelligence, or open-ended queries.
11. **Contribute and follow:** One bounded path for critique, expertise, use cases, research interest, and nonexclusive partner discovery.

An evidence archive MAY place full simulation reports and technical artifacts one layer below the main research page. Progressive disclosure should preserve rigor without requiring every visitor to traverse the complete internal work history.

### 21.4 Artifact publication

The launch SHOULD publish or render these as versioned public artifacts:

- Conduct Ecosystem public proposal overview
- Conduct Quotient working specification, version 0.5
- Version 0.5 release review and publication lock
- Post-simulation architecture freeze
- Decision register
- Open questions register
- Adversarial audit and repair summary
- Suites A through L summaries and full reports
- Distributed-integrity architecture decision
- Contribution and change policy
- Current project status and change log

Raw executables, generated synthetic data, large machine-readable files, hashes, or implementation packages MAY be linked through a repository or archive when they improve reproducibility. The public site should not make an uncurated file dump the primary reading experience.

Every artifact MUST show version, date, maturity, controlling status, and whether it is current, historical, superseded, candidate, or evidence-only. Historical artifacts remain available when later work changes their conclusion.

### 21.5 Net Conduct Score page

`openconduct.org/netconductscore` is the canonical NCS home. Defensive NCS domains may redirect to it.

The page should explain:

- The specific construct: willingness to serve the person again based only on how they treated people in an eligible verified interaction
- The proposed four-direction response structure and “not enough interaction to say” abstention
- The provisional calculation and why it is not final
- Worker privacy, compensation, non-retaliation, anti-performance-use, and selective-completion protections
- Consumer inspection, challenge, correction, and context rights
- Prohibited uses and the difference between NCS, NPS, customer satisfaction, sentiment, compliance, safety, loyalty, and customer value
- How an organization could study or implement the draft standard without claiming Open Conduct certification
- Future B2B, client, event, and professional applications as separate research contexts, not automatic extensions of consumer NCS

NCS may develop independent adoption, but it remains governed and versioned within Open Conduct until material demand justifies a different structure.

### 21.6 Proposal-stage contribution model

**Initial publication implementation — August 12, 2026:** Formspree is the selected processor for a structured no-attachment Open Conduct contribution form. The form is built but remains disabled until its project-specific endpoint, privacy notice, provider settings, retention, security, mailbox delivery, and monthly review routine are verified. The New New comments remain the wider public-discussion route. `contact@openconduct.org` is the selected monitored project mailbox; `privacy@openconduct.org` and `security@openconduct.org` are purpose-specific forwarding aliases. The underlying mailbox is not presented as a general feedback channel.

Contribution should be useful without creating a second full-time job for the founder. The site SHOULD provide:

- One structured intake with selectable contribution types
- A way to reference a section, decision, open question, or artifact
- Clear contribution and attribution terms before substantial work is accepted
- A public statement that review is batched and replies are not guaranteed
- A method for publishing material decisions or recurring feedback themes without exposing personal submissions
- A path to report a serious privacy, rights, security, or claims concern separately from ordinary feedback once any corresponding risk exists

The site SHOULD NOT promise an open issue tracker, forum moderation, community calls, office hours, individual consulting, certification review, or real-time support at Stage 0.

### 21.7 Business and partner interest

Business material should explain the relationship opportunity, existing integration advantages, proof minimization, standard boundaries, and staged research path. It should also state that brand reach, funding, APIs, accounts, data, loyalty alliances, or executive enthusiasm cannot override worker, consumer, legal, evaluation, independence, source-completeness, correction, and exit gates.

At launch, business interest is discovery. The site may invite a company, platform, worker group, researcher, or evaluator to discuss a use case. It MUST NOT describe that interest as membership, partnership, endorsement, implementation, or pilot selection.

The reports story belongs here as a later institutional opportunity: participating organizations may eventually receive governed analysis of their own detailed data against protected network cohorts. They would buy approved analysis, interpretation, cadence, training, and service—not access to people, raw histories, named competitors, unrestricted questions, or favorable conclusions.

### 21.8 Current-stage statement

The site MUST make this meaning easy to find:

> Open Conduct is publishing a proposal and draft standard for review. The architecture has undergone extensive adversarial and synthetic testing, but no real-world Conduct score, consumer network, certified implementation, alliance, partner program, benefit, or report product operates today. Human research, legal review, prototypes, independent participation, and a governed pilot would be required before the system could affect anyone.

### 21.9 Launch success and maintenance

Initial success means the public record is coherent, inspectable, versioned, and capable of attracting informed criticism and relevant contributors. Useful measures include artifact readership, movement between overview and technical depth, recurring objections, issue-specific submissions, corrections prompted by outside review, and credible research, worker, consumer, business, technical, policy, or evaluation interest.

The founder may maintain the project asynchronously, publish changes in batches, and decline or defer work beyond the current stage. A dormant period does not imply an operating system has been abandoned because no operating system exists. The site should show its latest material update and avoid promises of continuous activity.

---

# Appendices

## Appendix A. Decision register

Maintained separately during drafting and incorporated into the final specification.

## Appendix B. Open questions

Maintained separately during drafting and incorporated into the final specification.

## Appendix C. Mathematical models

Provisional formulas, simulations, assumptions, and validation results.

## Appendix D. Event schemas

NCS, VCI, credential, proof, revocation, dispute, and audit schemas.

## Appendix E. Example scenarios

Normal, exceptional, disputed, accessibility, bias, fraud, recovery, and corporate-failure scenarios.

## Appendix F. Sources and legal references

Research, statutes, regulations, standards, technical references, and external evidence.
