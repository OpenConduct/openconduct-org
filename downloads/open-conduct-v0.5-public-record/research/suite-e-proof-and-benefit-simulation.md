# Conduct Ecosystem — Suite E Proof and Benefit Simulation Report v0.1

## The answer in human terms

“Return on nice” can remain genuinely upside-only—but only through a very specific launch pattern.

The leading architecture is:

1. **Only a successful, consumer-authorized proof creates a CQ-specific record at the business.** Every other state—declining, insufficient history, not qualifying, dispute, expiry, withdrawal, or technical failure—follows the same ordinary baseline path.
2. **The consumer initiates presentation and authorizes it once.** A single quiet private offer may be tested to help people discover the benefit, but an employee asking or repeated prompting is rejected.
3. **The first benefit is modest but meaningful, reversible, nonessential, non-rights, and genuinely created with additional capacity.** It cannot change queues, prices, complaint handling, accommodations, refunds, or ordinary service.
4. **Baseline service is measured before CQ appears and monitored independently afterward.** Recipient enthusiasm cannot compensate for worse treatment of nonparticipants.
5. **A recurring permission is outside the initial profile.** It may return later only with demonstrated comprehension, expiry, central visibility, easy revocation, receipts, and automatic suspension after any material change.

The key strategic finding is that proof technology alone cannot make the system safe. A perfectly private proof paired with repeated prompting, an essential benefit, or a degraded baseline still creates a shadow score.

## 1. What was tested

Suite E compared four separate design layers:

| Layer | Candidates |
|---|---|
| Verifier response | E1 eligible-only proof and indistinguishable baseline versus E2 binary response |
| Presentation initiation | E3 consumer-initiated, E4 quiet private offer, and E5 employee or repeated prompt |
| Permission | E6 one-time authorization versus E7 time-limited recurring permission |
| Benefit | E8 non-positional modest, E9 weakly positional, and E10 scarce, rights-related, or material |

The full run included:

- 11 Suite E scenario-and-mode groups
- 651 unique common synthetic histories
- 1,200 synthetic consumers per history
- 2,973 candidate-case evaluations
- Balanced stress populations covering refusal, insufficient history, nonqualification, active dispute, expiry, withdrawal, and technical failure
- Proof leakage, query enumeration, legacy-feature contamination, repeated prompts, permission duration, benefit value, scarcity, baseline drift, assurance burden, and operating-capacity stress
- Identical generated history for every candidate within each comparison

The preserved result package is `simulation/run_packages/suite-e-v0.1-results.json`.

## 2. The external protocol should speak only when the answer is positive

E1 is the lead proof protocol. In clean integration cases it produced:

- Zero CQ-specific verifier records for every nonpresentation state
- A noneligible-versus-ordinary-baseline inference result at the 0.50 chance level
- Zero failed-attempt retention
- Zero zero-tolerance violations

The business receives an Eligible proof only after consumer authorization. If no proof arrives, it continues the ordinary transaction. It does not learn whether the person declined, lacked history, did not qualify, had a dispute, withdrew, expired, or encountered a technical failure.

This is more demanding than returning a generic “No proof” response. Timing, request logs, CRM fields, support tickets, offer-state fields, and worker observation can all reveal that a check happened even when the payload contains no reason.

## 3. A binary response creates the shadow score

E2 returned a record for an unsuccessful check. Even without an injected leak or legacy-system contamination, it made nonpresentation completely distinguishable:

- Noneligible-state visibility: **100%**
- Noneligible-versus-baseline inference: **1.00**
- Failed-attempt retention: **100%**
- Zero-tolerance violation rate: **100%**

The business still may not know the exact reason, but it knows that the consumer tried or was checked and did not produce an eligible result. That is enough to create suspicion, segmentation, employee expectations, or future treatment differences.

E2 is rejected. The initial protocol is not “yes or no.” It is **“authorized yes, or no CQ exchange.”**

## 4. Tiny implementation leaks are not harmless

The strict E1 architecture remained safe only when the surrounding integration preserved it. At a modeled per-channel leak probability of just 0.1%, median noneligible visibility was 0.36%, and 86.7% of the 1,200-person stress cases contained at least one prohibited record. At 1% per channel, every tested case produced a violation.

These values are not forecasts. They show why the project cannot accept “99.9% private” as a sufficient average when the leaked state can affect treatment. The control is fail-closed architecture:

- No customer-linked failed-attempt record at the verifier
- No worker-visible attempt or result
- No CRM, loyalty, marketing, risk, or model feature
- No retained request status that distinguishes a CQ attempt
- Reliability telemetry segregated from identity and treatment systems
- Monitoring based on privacy-protected operational aggregates

Any real implementation must be red-teamed for timing, auxiliary data, traffic analysis, shared identifiers, logs, support access, and downstream joins.

## 5. Consumer initiation is the lead voluntariness pattern

E3 produced no modeled refusal friction, employee observability, prompt-induced presentation, or coercion pressure. Its median presentation rate among eligible consumers was 52%.

That lower uptake is not a product failure. It is evidence that voluntariness has not been inflated through pressure. A voluntary system should not maximize presentation as its primary objective.

E3 did show the largest median digital-access presentation gap, approximately 17.2 percentage points. The answer is not more prompting. It is accessible discovery and presentation through account, web, assisted, telephone, and limited-connectivity paths that preserve privacy and do not label assistance as lower conduct.

## 6. One quiet private offer may be useful—but repetition changes its meaning

E4 increased median presentation to 61.3% and reduced the modeled digital-access gap to 9.9 points. With one private offer, modeled refusal friction remained zero and the broader pressure proxy was approximately 0.016.

Repetition materially changed the result:

| Private-offer count | Median refusal-friction proxy | Median pressure proxy |
|---:|---:|---:|
| 1 | 0.000 | 0.016 |
| 2 | 0.023 | 0.055 |
| 5 | 0.073 | 0.138 |
| 12 | 0.257 | 0.331 |

E4 therefore remains a bounded discovery challenger, not a standing marketing channel. The candidate pilot pattern is one private, standardized offer in an appropriate consumer-controlled surface, followed by a durable “do not ask me here” choice. It cannot be targeted using inferred CQ standing or observed by frontline employees.

## 7. Employee requests and repeated prompts are rejected

When E5 was active in clean integration cases, nonpresentation was visible in every case. Across the full consent stress, it produced:

- Employee observability: **100%**
- Median refusal-friction proxy: **0.168**
- Median pressure proxy: **0.421**
- Median presentation rate: **70.5%**

At twelve prompts, median presentation reached 98.3%—but both refusal friction and the pressure proxy reached their maximum modeled value of 1.0.

That is not successful adoption. It is an example of a metric being improved by defeating the principle it was supposed to measure.

A frontline employee may explain an optional benefit if the consumer asks. They may not ask the consumer to prove conduct, wait for the result, see a failure, or receive an incentive tied to proof presentation.

## 8. One-time authorization should be the launch default

E6 becomes the lead initial permission pattern. It had:

- Median consent-recall proxy: **0.98**
- Median pressure proxy: **0.01**
- No employee observability
- Complete modeled revocation behavior
- No stale recurring authorization

The consumer approves one verifier, benefit, context, policy, and presentation. A new use requires a new affirmative action.

This creates more interaction than a permanent permission, but the burden is proportionate to the modest launch benefit and avoids hidden background access.

## 9. Recurring permission remains a later convenience candidate

E7 can be structured safely only when material change automatically suspends it. The compliant model produced zero post-change use because suspension was treated as a hard rule.

The counterfactual shows why that rule matters. At 365 days:

- Consent-recall proxy fell to **0.652**
- Modeled stale-authorization use without change suspension reached **0.140**

Recurring permission does not advance into the initial release. A later test must be verifier-, benefit-, context-, policy-, and recipient-specific; short-lived; centrally visible; accompanied by first-use and renewal receipts; revocable outside the verifier's interface; and automatically suspended after material change.

## 10. The lead benefit is non-positional, modest, and genuinely incremental

E8 is the only initial benefit family that survived structurally. In nondegrading-baseline cases it produced:

- Full modeled fulfillment
- Zero positional burden on nonrecipients
- Zero shadow-penalty proxy
- No rights-process use
- No completed-benefit clawback

The broad stress space deliberately included benefits that were too large or too scarce to fit the E8 label. E8 failed its own class definition in 79.4% of those adversarial cases. That is a feature of the test: calling something “non-positional” or “modest” does not make it so.

The safe synthetic corridor required all of the following at once:

- Normalized value between 0.10 and 0.30—large enough to test, but not essential
- Scarcity no greater than 0.05
- No negative baseline drift
- Operating capacity below overload
- Identity and assurance burden no greater than benefit value

Only four deliberately sampled cases met the complete corridor. That count is not a prevalence estimate or a selected threshold. It shows that a coherent test configuration exists and that most arbitrary configurations should be rejected.

Candidate directions include a personalized recognition, a genuinely incremental surprise-and-delight item, or a convenience feature created with dedicated capacity. The exact benefit remains open to consumer, worker, partner, legal, and operational co-design.

## 11. Positional and rights-related benefits do not belong in the first pilot

E9 was positional in 80.6% of stress cases. Even when the independently modeled baseline was nondegrading, it imposed a median nonrecipient burden of 0.011 and retained a shadow-penalty proxy of the same size. It remains a restricted future family requiring an unusually strong necessity case.

E10 is rejected for the initial profile. It included scarce, queue-changing, rights-related, or materially financial treatment and failed its initial class definition in every case. In nondegrading-baseline scenarios, it still imposed median nonrecipient burden of 0.025 and lower fulfillment because of operating complexity.

The initial benefit cannot include:

- Faster complaint, correction, dispute, appeal, refund, safety, accessibility, or accommodation handling
- Better baseline price, fees, deposits, contractual terms, or cancellation rights
- Priority where another consumer is displaced
- Essential support or service access
- A material advantage that makes nonparticipation practically irrational

These are not merely “higher-risk rewards.” Several are prohibited because they turn CQ into a condition for fair or lawful treatment.

## 12. Baseline drift can manufacture apparent benefit success

E8 itself created no positional burden, but when the generator degraded nonrecipient baseline service by 0.05, its median shadow-penalty proxy became 0.05. At a drift of −0.50, it became 0.50.

The recipient benefit did not improve; the comparison group simply got worse. Eligible-versus-noneligible satisfaction, retention, spend, complaint rate, or service outcome can therefore make CQ appear valuable while hiding the central harm.

The pilot must measure:

- A preregistered baseline before CQ is visible
- Participants, nonparticipants, insufficient-history consumers, people who decline, and people who do not qualify
- Average outcomes and adverse tails
- Prices, fees, wait times, support access, employee attention, exceptions, refunds, complaints, accommodations, and service recovery
- Protected, low-resource, digitally limited, language, disability, and assisted-use groups
- Policy, staffing, inventory, and capacity changes that could redefine the baseline

Recipient value and business value cannot compensate for failed baseline parity.

## 13. A benefit can also be too small

Approximately 21% of benefit stress cases produced less than 0.05 normalized realized value. A token badge or imperceptible reward may be safe but cannot test whether consumers value conduct-based recognition, whether businesses gain relationship value, or whether the identity and rights burden is proportionate.

The first benefit must occupy a narrow middle: meaningful enough for people to care, modest enough to decline freely, and operationally additional rather than redistributed.

## 14. Candidate verdicts

| Candidate | Suite E verdict | Reason |
|---|---|---|
| E1: Eligible-only proof | **Lead external protocol** | Only authorized success creates a verifier record; all other states remain ordinary baseline |
| E2: Binary response | **Reject** | Makes an unsuccessful attempt or check visible and creates the shadow score |
| E3: Consumer-initiated | **Lead initiation pattern** | Strongest voluntariness; accessible discovery must address unequal access |
| E4: Quiet private offer | **Retain as one-off discovery challenger** | Can improve discovery if private, standardized, untargeted, and not repeated |
| E5: Employee or repeated prompt | **Reject** | Creates employee visibility, refusal friction, and coerced-looking adoption |
| E6: One-time authorization | **Lead initial permission** | Highest clarity and control with no background access |
| E7: Recurring permission | **Defer from initial release** | Convenience may be possible, but comprehension and stale-use risks rise with time |
| E8: Non-positional modest benefit | **Lead initial benefit family** | Can provide meaningful additional value without burden when the class is genuinely satisfied |
| E9: Weakly positional benefit | **Restricted future research only** | Relative burden remains even with a stable baseline |
| E10: Scarce, rights-related, or material benefit | **Reject for initial profile; prohibit rights uses** | Creates coercion, displacement, legal, fulfillment, and baseline risk |

No candidate is approved for a real-person proof, benefit, or production release.

## 15. What remains unresolved

Suite E cannot establish:

- Which real benefit consumers find meaningful without feeling pressured
- Whether a real business can create and sustain genuinely incremental capacity
- The acceptable value, scarcity, frequency, fulfillment, and identity-burden ranges
- How consumers understand silence from the protocol or distinguish baseline from benefit
- Whether one quiet offer improves equitable discovery without becoming pressure
- Exact permission length, receipts, renewal, revocation, and material-change rules
- Actual baseline-parity measures, adverse-tail thresholds, and stop rules
- Actual employee, consumer, nonparticipant, protected-group, and third-party effects
- Whether the protocol remains indistinguishable under real auxiliary data and enterprise integrations
- The legal classification of a specific proof, benefit, business, population, or jurisdiction

Those questions require prototype testing, privacy red teaming, baseline observation, benefit co-design, current legal review, and a bounded field plan.

## 16. Decision and next step

The initial proposition should be tested through an **authorized positive proof, consumer initiation, one-time consent, and a modest meaningful benefit created with additional capacity**.

Every other CQ state remains private. The business sees no failed attempt. Employees do not request proof. The benefit does not affect ordinary rights, queues, prices, complaints, access, or dignity. Independent monitoring must stop or redesign the program if the baseline drifts.

Suite E therefore keeps “return on nice” alive while making “upside-only” an empirical operating requirement rather than a slogan. The next structural comparison is Suite F: whether the identity, custody, recovery, security, and rights machinery required to deliver this modest benefit remains proportionate.
