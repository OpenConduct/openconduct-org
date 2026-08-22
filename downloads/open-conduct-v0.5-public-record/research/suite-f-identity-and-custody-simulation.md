# Conduct Ecosystem — Suite F Identity and Custody Simulation Report v0.1

## The answer in human terms

The identity and infrastructure required for CQ can remain proportionate—but only if the project resists two common instincts:

1. Do not demand the strongest possible identity check for an ordinary modest benefit.
2. Do not simplify operations by placing every person's cross-company history with one central operator.

The leading architecture is:

- **Minimal, benefit-proportionate assurance for ordinary proof presentation:** authenticated account or credential control, holder binding appropriate to the benefit, verifier and transaction binding, freshness, replay protection, and a second authenticator or recovery path.
- **Step-up assurance only for sensitive actions:** total-authenticator-loss recovery, identity changes, duplicate resolution, new recovery controls, contested takeover, or a future materially higher-risk benefit.
- **Prospective launch:** no legacy NCS linkage and no historical VCI migration without a separately approved process.
- **Split functional custody:** source businesses retain raw records; identity evidence, minimized events, synthesis, wallet, proof, and appeal are separated by role and actual administrative access.
- **Consumer-local computation where useful, but never as the only path:** accessible custodial and assisted options remain available.
- **Protected federated retrieval:** source custodians must not learn where, when, or why a consumer is trying to present a proof.
- **Safe failure:** failed recovery, wallet loss, outage, or unavailable proof returns the person to ordinary baseline service, never an adverse conduct state.

This is a strong confirmation of the project's strategic direction: Open Conduct or a future OCA should govern standards, certification, rights, and accountability. It should not become the central infrastructure company holding everyone's raw conduct history.

## 1. What was tested

Suite F compared:

| ID | Candidate | Role in the comparison |
|---|---|---|
| F1 | Minimal assurance | Ordinary low-risk proof and accessible recovery candidate |
| F2 | Moderate independent assurance | Step-up candidate for sensitive actions |
| F3 | High assurance | Overbuilt stress challenger for the modest Suite E benefit |
| F4 | Central event and synthesis operator | Central-dossier and single-failure stress candidate |
| F5 | Split functional custody | Lead trust-boundary candidate |
| F6 | Consumer-local or wallet-centered computation | Privacy and individual-control candidate |
| F7 | Federated retrieval and synthesis | Distributed source-custody candidate |

The full run included:

- 13 Suite F scenario-and-mode groups
- 441 unique common synthetic histories
- 1,200 synthetic consumers per history
- 1,545 candidate-case evaluations
- Benefit value, assurance burden, recovery success, recovery abuse, rights-capacity overload, ecosystem correlation, administrative access, operator concentration, legacy linkage, proof-query count, permission duration, and failed-proof leakage stress
- Identical generated history for every candidate within each comparison

The preserved result package is `simulation/run_packages/suite-f-v0.1-results.json`.

## 2. Minimal assurance is the lead ordinary-proof profile

F1 becomes the lead profile for presenting the modest Suite E benefit. In the favorable structural subset—modest benefit value, bounded assurance burden, strong recovery, low recovery abuse, and funded rights capacity—it produced:

- Median assurance burden: **0.041**
- Median burden-to-benefit ratio: **0.313**
- Median recovery success: **0.990**
- Median baseline fallback after failed recovery: **0.010**
- Median false-rejection proxy: **0.020**

The architecture does not mean “no security.” It means security matched to the action:

- An authenticated consumer account or credential environment
- Phishing-resistant authentication where feasible
- A verifier-, purpose-, transaction-, and freshness-bound proof
- Holder binding appropriate to a modest, nontransferable benefit
- Replay resistance and short proof validity
- Visible authenticator and session controls
- At least two authenticator or recovery options before loss where practical

Ordinary CQ presentation should not require new high-assurance identity evidence merely because a future version might support a more valuable benefit.

## 3. Minimal assurance still fails when recovery and rights capacity fail

F1 did not survive every stress condition. Across the full hostile range, its median recovery success fell to 0.60. When rights and recovery capacity reached 125% utilization, median recovery success was 0.60; at 200% utilization, it fell to 0.375.

That result matters more than a small difference in authentication strength. A secure login is not a functioning identity system if legitimate people cannot recover, correct, appeal, or revoke it.

The launch profile therefore needs:

- Pre-loss authenticator redundancy
- Accessible recovery paths that do not depend forever on one phone number, email, device, name, or physical ability
- Capacity limits and automatic pause on new intake before rights queues fail
- Independent review for contested takeover, merge, separation, and total loss
- A safe option to abandon an unrecoverable optional credential and return to baseline service

Returning to baseline prevents conduct harm, but losing optional history can still matter. It requires notice, support, and a proportionate restoration path rather than being dismissed as harmless.

## 4. Moderate assurance belongs at sensitive transitions

F2 reduced the modeled duplicate, takeover, and recovery-abuse losses, but increased ordinary burden and exclusion. In the favorable modest-benefit subset it produced:

- Median assurance burden: **0.140**
- Median burden-to-benefit ratio: **0.800**
- Median recovery success: **0.891**
- Median false-rejection proxy: **0.060**

That is too much as the default path for a modest recognition benefit. It is appropriate as a step-up candidate for:

- Adding or replacing a recovery method
- Recovering after all authenticators are lost
- Changing material identity attributes
- Merging or separating suspected duplicate identities
- Resolving contested takeover or misattribution
- A later proof whose actual loss risk independently justifies it

Step-up must be tied to the sensitive action, not applied permanently to the person.

## 5. High assurance is disproportionate for the initial benefit

F3 further reduced modeled misuse but performed poorly against proportionality. In the favorable modest-benefit subset:

- Median assurance burden: **0.381**
- Median burden-to-benefit ratio: **1.792**
- Median recovery success: **0.713**
- Median false-rejection proxy: **0.150**

The identity burden exceeded the benefit value before considering consumer time, documentation, accessibility, provider errors, privacy exposure, support, or appeal.

F3 is rejected for ordinary initial proof presentation. High assurance remains available only as a separately justified profile for a genuinely high-risk identity or recovery action. It cannot become the default merely because stronger identity sounds safer.

## 6. Recovery is a security control and an exclusion risk

Across all three assurance candidates, stricter reproofing lowered modeled recovery abuse but also lowered legitimate recovery success. At the same base recovery condition of 0.99:

- F1 recovery success: **0.990**
- F2 recovery success: **0.891**
- F3 recovery success: **0.713**

This is not an argument for weak recovery. It is an argument for layered recovery:

1. Use a second authenticator or approved recovery path when available.
2. Suspend lost or stolen authenticators quickly.
3. Step up evidence, delay, notifications, and review as the remaining risk increases.
4. Restore the same identity and rotate credentials when the evidence supports it.
5. Allow contested independent review.
6. If restoration cannot be justified, return the person to baseline rather than creating a negative identity or conduct signal.

No support employee, wallet provider, identity provider, guardian, or recovery contact should be able to silently take control.

## 7. The launch remains prospective

The production path held legacy influence at zero for every assurance candidate. The counterfactual showed why the gate matters: an enterprise-account-centered F1 implementation had median unblocked legacy linkage of 0.165 and reached 0.825 in the highest stress case.

Stronger identity verification does not make an old rating legitimate, complete, unbiased, attributable, current, or consented. It can match the wrong evidence more confidently.

The first pilot therefore links no legacy NCS. Historical VCI migration, if ever tested, requires a separate profile covering source completeness, responsibility legitimacy, attribution, business-side context, correction, fairness, notice, authorization, and law.

## 8. A central cross-company event operator is rejected

F4 was operationally simple but structurally incompatible with the project's privacy and decentralization goals.

Even in bounded-administration and low-correlation cases, it produced:

- Median maximum dossier reach: **0.904**
- Median single-operator failure radius: **0.850**
- Raw cross-company event centralization: **100% of cases**
- One-operator dossier capability: **100% of cases**

In clean proof-custody cases, it also retained median failed-attempt linkability of 0.60. A central operator could know that a consumer tried and failed to present even when the verifier correctly received no response.

F4 is rejected as the production architecture. A future OCA should not warehouse raw network histories or combine identity, multi-company events, synthesis, presentation activity, and rights records under one administrative domain.

## 9. Functional separation is the governing custody architecture

F5 becomes the lead trust-boundary model. Under bounded administration and correlation, it reduced:

- Median dossier reach to **0.143**
- Median single-operator failure radius to **0.271**
- Central raw-history custody to zero
- Clean failed-attempt linkability to zero

F5 does not require five separate startup companies merely to run a test. It requires that real control and data reach remain separated enough that no provider can reconstruct the person and their network history as an ordinary administrative act.

At minimum:

- Source businesses retain raw transaction and operational evidence.
- Identity proofing retains only the evidence needed for its role.
- Event services receive minimized governed assertions rather than source dossiers.
- Synthesis sees only eligible inputs needed for the approved context.
- The consumer or approved wallet holds the credential and complete presentation view.
- The verifier receives only the successful authorized proof and benefit receipt.
- Appeal receives the evidence needed for the case through governed access rather than permanent bulk custody.

## 10. Consumer-local computation is valuable, but cannot be mandatory

F6 had the smallest bounded-case dossier reach at 0.076 and the smallest single-operator failure radius at 0.191. It also produced the strongest modeled telemetry segregation and zero failed-attempt linkability in clean cases.

Consumer-local calculation should therefore be used where it materially reduces disclosure and remains verifiable. But a phone or self-managed wallet cannot become the only doorway to CQ. That would transfer security, backup, migration, accessibility, and recovery burden onto the consumer.

The architecture needs equivalent:

- Consumer-local options
- Accessible custodial options
- Assisted and limited-connectivity options
- Shared-device separation
- Provider migration and export
- Recovery that does not require the original device

These paths must produce the same CQ and baseline outcomes, not a high-privacy premium tier and a lower-quality accessible tier.

## 11. Federated retrieval needs query privacy

F7 preserved source custody and avoided permanent central raw history. Under bounded administration and correlation, its median dossier reach was 0.119 and its failure radius was 0.241.

But federated does not automatically mean private. If a synthesis service directly asks source custodians for a named consumer's records each time a proof is attempted, those sources can infer where and when the consumer is trying to use CQ.

In the clean counterfactual direct-query model, linkability rose with query count and reached **0.650 at 100 queries**. The protected path held it at zero.

F7 advances only with a retrieval profile that prevents sources from observing verifier, purpose, benefit, or unsuccessful presentation activity. Candidate mechanisms may include prefetching, privacy-preserving caching, consumer-held eligible inputs, blinded or batched retrieval, protected computation, or another independently reviewed method. Suite F does not select the technology.

## 12. Administrative reality matters more than the architecture diagram

All distributed candidates degraded when nominally separate services shared routine support, bulk export, unlogged superadministration, cloud control, keys, or correlated providers.

Under unlogged-superadmin stress:

- F5 median dossier reach rose to 0.493.
- F7 median dossier reach rose to 0.419.
- F5 crossed the one-operator dossier marker in 34.3% of cases.
- F7 crossed it in 25.7% of cases.

Separate databases or cloud tenants do not create independent custody when the same people or provider can access all of them. Every architecture review needs the actual graph of:

- Legal controllers and processors
- Vendors and subprocessors
- Clouds and regions
- Encryption and signing keys
- Administrators and support access
- Logs, backups, analytics, and incident tools
- Recovery and break-glass authority
- Subpoena, insolvency, and provider-exit exposure

## 13. Failed proof attempts must remain local and unlinkable

F5, F6, and F7 produced zero failed-attempt linkability in clean structural cases. When the same leak injection used in Suite E was introduced, all accumulated risk. Custody architecture cannot compensate for a downstream integration that records failure.

The consumer environment may retain every request and outcome. The verifier retains only a successfully authorized proof and benefit decision. Reliability and security telemetry must be segregated from customer identity and treatment systems.

Federated custodians, status providers, credential issuers, identity services, and wallet providers must not become hidden observers of where a person presents or fails to present CQ.

## 14. Delegation and shared devices remain role questions, not identity shortcuts

Suite F's numerical model cannot resolve the legitimacy of caregivers, guardians, assistants, travel arrangers, shared households, incapacity, or contested authority.

The architectural rule is clear:

- Booking, payment, account management, travel arrangement, care, assistance, and CQ disclosure are separate permissions.
- A shared device is not a shared identity.
- A delegate does not inherit the consumer's CQ.
- A consumer's conduct does not transfer to a caregiver or guardian.
- Disclosure authority is exceptional, explicit, purpose-specific, time-limited, reviewable, and revocable.
- Sensitive actions notify the consumer or another independently approved channel.

These flows require direct accessibility, safeguarding, legal, and abuse-survivor review before any live release.

## 15. Candidate verdicts

| Candidate | Suite F verdict | Reason |
|---|---|---|
| F1: Minimal assurance | **Lead ordinary-proof profile** | Best proportional balance for the modest Suite E benefit; still requires strong recovery and capacity |
| F2: Moderate assurance | **Retain as sensitive-action step-up** | Better integrity protection, but too burdensome as the ordinary default |
| F3: High assurance | **Reject for ordinary proof** | Identity and exclusion burden exceeds the initial benefit; retain only for separately justified high-risk action |
| F4: Central event and synthesis | **Reject** | Creates central dossier reach, failed-attempt visibility, and catastrophic operator dependence |
| F5: Split functional custody | **Lead trust-boundary architecture** | Reduces ordinary dossier reconstruction while preserving governed rights and audit access |
| F6: Consumer-local computation | **Lead privacy component, not exclusive deployment** | Lowest dossier reach; requires equivalent custodial, assisted, and recovery paths |
| F7: Federated retrieval | **Lead source-custody component with privacy condition** | Avoids permanent central raw history but must hide presentation queries from sources |

The production direction is a composition of F5, F6, and F7, not one winner. No candidate is approved for real-person operation.

## 16. What remains unresolved

Suite F cannot establish:

- The real identity, duplicate, takeover, lending, replay, or recovery-risk rates
- The exact assurance profile, identity provider, authenticator, wallet, credential, status, or recovery method
- Acceptable false-acceptance, false-rejection, recovery, abuse, lockout, or rights-service thresholds
- Whether consumers understand and can use multiple authenticators, recovery, delegation, and presentation controls
- The accessibility and safeguarding of shared-device, caregiver, guardian, incapacity, and abuse-survivor flows
- The actual administrative domains, vendors, clouds, keys, insiders, contracts, and jurisdictional exposure
- The query-privacy technology for federated retrieval
- The minimum independent operator and appeal capacity for a live pilot
- Security, privacy, identity, consumer-reporting, biometric, accessibility, or other legal classification
- Whether the complete operating burden remains economically viable

These questions require threat modeling, a privacy impact assessment, architecture prototypes using synthetic identities, accessibility testing, recovery exercises, provider discovery, independent security review, and current legal analysis.

## 17. Decision and next step

CQ should be **light at ordinary presentation, stronger at sensitive transitions, distributed in custody, and safe when it fails**.

The system does not need to prove universal personhood. It needs enough assurance that this consumer authorized this fresh, verifier-bound proof for this modest benefit. It protects continuity without forcing adverse history forward, and it restores history only when recovery evidence supports doing so.

Raw business records remain at their sources. No operator should routinely hold legal identity, multi-company histories, synthesis, presentation activity, and appeals together. Open Conduct or OCA governs replaceable providers rather than becoming the dossier provider itself.

Suite F preserves the project while preventing its infrastructure from becoming larger and more invasive than its value. Its identity and custody constraints supplied the now-complete Suite G comparison of privacy-preserving ecosystem intelligence and report economics.
