# Conduct Ecosystem — Distributed Integrity Architecture Decision

**Status:** Bounded architecture comparison complete  
**Date:** August 9, 2026  
**Decision:** Blockchain is not part of the required core architecture. The lead direction is a layered open-standards architecture using signed records, signed federation metadata, privacy-preserving credentials and status, distributed custody, governed registries, and narrowly scoped transparency for non-personal public artifacts.

## 1. Executive conclusion

The Conduct ecosystem does not need a blockchain to make conduct evidence, CQ proofs, or alliance reporting trustworthy.

Blockchain is attractive because the project involves many companies that should not have to trust one another or one central database. But that description combines several different trust problems. Once they are separated, blockchain solves only a narrow part of one of them: making a shared history difficult to rewrite without detection.

The system instead needs:

1. **Signed assertions** to show which authorized actor issued an event, credential, policy, report method, or decision.
2. **A governed trust registry or federation** to show which organizations, roles, keys, schemas, and policies are currently authorized.
3. **Privacy-preserving credentials and presentations** so a consumer can prove an approved positive fact without exposing the underlying history or creating a public profile.
4. **Mutable active-state and status systems** so errors, suspension, withdrawal, expiry, and correction can take effect.
5. **Distributed source custody and governed computation** so OCA can produce unique network intelligence without warehousing raw cross-company behavioral histories.
6. **A narrowly scoped transparency layer** for public, non-personal governance artifacts where independent proof against secret rewriting or equivocation is valuable.
7. **Human governance, reconciliation, evaluation, audit, challenge, and remedy** because cryptographic validity cannot establish that an event was fair, complete, correctly attributed, or true.

This is more decentralized in the ways that matter than placing the system on a blockchain. It distributes custody, limits power, makes providers replaceable, and keeps the shared layer small.

## 2. The six trust questions

The technology decision becomes clearer when each question is asked separately.

| Trust question | What must be established? | Lead mechanism |
|---|---|---|
| Who said this? | Issuer authenticity and record integrity | Digital signature with governed key authority |
| May they say it now? | Current role, certification, scope, and policy | Signed trust registry or federation metadata with expiry and revocation |
| What may this business learn? | Purpose-bound consumer disclosure | Selective or minimal verifiable presentation, verifier binding, expiry, and holder authorization |
| What is currently valid? | Active status after correction, withdrawal, suspension, supersession, or compromise | Mutable authoritative source state plus privacy-preserving status and signed lifecycle events |
| Was the public institutional record rewritten? | Inclusion, ordering, non-equivocation, and historical accountability | Signed releases and archives initially; witnessed append-only transparency service if justified |
| Was the underlying assertion legitimate and complete? | Eligibility, attribution, causation, source completeness, fairness, and rights | Reconciliation, independent evaluation, governance, challenge, correction, and remedy |

A blockchain can contribute to the fifth row. It does not independently answer the other five.

## 3. What cryptography can and cannot prove

A valid signature proves that the holder of a signing key authorized a particular byte sequence under a particular verification profile. It does not prove that:

- An eligible interaction occurred.
- Every eligible interaction was registered.
- The right person was attributed.
- A worker acted without pressure.
- A business-caused failure was assigned correctly.
- An event was legally permitted.
- A metric is fair or valid.
- A later correction reached every active effect.
- A report is representative.
- The issuer was honest.

Likewise, an append-only record can show that a statement existed and was not silently removed from the recorded sequence. It does not make the statement true. A false event written permanently is still false. An omitted event cannot be recovered merely because the events that were submitted have strong integrity.

This distinction is foundational for CQ because the greatest risks found in the simulations were source selection, attribution error, lifecycle failure, missing context, post-selection, and overclaiming—not undetectable alteration of an otherwise perfect record.

## 4. Architecture candidates

### A. Public permissionless blockchain

**Strengths**

- Broadly distributed replication
- Public timestamping and historical persistence
- Resistance to one operator rewriting the shared sequence
- Independent verification without a bilateral relationship

**Problems for Conduct**

- Public permanence conflicts with correction, minimization, withdrawal, contextual expiry, and the project's rejection of public behavioral profiles.
- Names are not required for data to be personal or correlatable. Stable identifiers, timestamps, issuer patterns, status activity, and person-specific hashes can still expose or enable linkage.
- Public transaction metadata can create a presentation, relationship, timing, or volume trail even when payloads are encrypted or hashed.
- Consensus, fees, finality, forks, smart-contract risk, key custody, and protocol governance create dependencies unrelated to CQ's core value.
- A public chain cannot prove that eligible source events were omitted before submission.
- A smart contract cannot replace correction, appeal, due process, worker protection, legal interpretation, or independent evaluation.
- The architecture would acquire a speculative technology identity that could distract potential businesses, consumers, regulators, and standards collaborators.

**Verdict:** Rejected as required or initial infrastructure.

### B. Permissioned consortium blockchain

**Strengths**

- Known participants and controlled write authority
- Shared replicated state across several organizations
- Potentially stronger resistance to unilateral alteration than one participant database
- Configurable privacy and consensus rules

**Problems for Conduct**

- The consortium still needs governance to decide admission, keys, validation, correction, sanctions, upgrades, emergency action, and exit.
- If a small set of known operators controls consensus, a replicated signed database or transparency service can often provide the needed assurance with less complexity.
- Channel or tenant separation does not necessarily prevent common administrators, vendors, keys, backups, or legal control from reconstructing data.
- Correction remains difficult if immutable entries are treated as active truth; additive reversals must still propagate into every credential, proof, benefit, report, and decision.
- It creates a substantial integration and operational burden before the ecosystem has proven demand.

**Verdict:** Not selected. A future consortium may use this behind a standards-compatible interface, but the Conduct architecture does not require or privilege it.

### C. Signed governed registry

**Strengths**

- Simple to build, query, correct, export, mirror, and replace
- Clear current state for participants, keys, roles, mappings, schemas, certifications, suspensions, and status
- Can publish signed snapshots and a version history
- Compatible with ordinary enterprise systems and open protocols

**Limitations**

- One operator could present inconsistent views, suppress an old version, or roll back history if no external witness exists.
- Trust depends on governance, signing-key protection, publication, independent archives, and audit.

**Verdict:** Lead initial registry pattern, strengthened through signed short-lived records, public version history where appropriate, independent mirrors or archives, and later transparency receipts if the threat justifies them.

### D. Signed federation and trust chains

**Strengths**

- Participants can verify a signed path from an issuer, verifier, wallet, evaluator, status provider, or service operator to an accepted trust anchor.
- Metadata can express roles, scopes, policies, keys, endpoints, trust marks, expiry, and constraints.
- Short-lived signed statements support current authorization without permanent personal records.
- Multiple trust anchors and intermediaries can distribute authority.

**Limitations**

- A federation proves a current authorization path, not the truth of every participant assertion.
- Trust-anchor selection, policy conflict, key compromise, revocation, and emergency governance remain institutional questions.

**Verdict:** Lead mature trust-distribution direction. [OpenID Federation 1.0](https://openid.net/specs/openid-federation-1_0-final.html), finalized in February 2026, is a relevant current foundation for signed entity statements, trust chains, policies, and trust marks; the exact Conduct profile remains open.

### E. Append-only transparency service

**Strengths**

- Inclusion receipts can prove that a signed artifact was registered.
- Consistency proofs and independent monitors can detect rollback or equivocation.
- The log can be mirrored, witnessed, and audited without placing consensus across every operational transaction.
- Sensitive payloads can remain elsewhere when the logged object is a carefully screened non-personal statement or commitment.
- The capability can be implemented without a public cryptocurrency or general-purpose smart-contract network.

**Limitations**

- Append-only means errors are superseded rather than erased from the log.
- Even hashes, timing, subjects, issuers, and sequence can expose personal, confidential, or competitively sensitive information.
- Transparency needs monitors, witnesses, incident rules, retention, shutdown, correction semantics, and a response when misbehavior is proven.
- Logging does not establish semantic truth or source completeness.

**Verdict:** Candidate accountability layer for an approved set of non-personal public institutional artifacts—not for conduct events, identities, scores, proofs, permissions, disputes, benefit activity, or person-level report contributions.

[Certificate Transparency v2](https://www.rfc-editor.org/rfc/rfc9162.html) demonstrates inclusion and consistency proofs for an append-only Merkle log. [IETF RFC 9943](https://www.rfc-editor.org/rfc/rfc9943.html), published in June 2026, defines a broader signed-statement transparency architecture with receipts and multiple possible verifiable data structures. These are useful capability references; neither is automatically a suitable CQ deployment profile.

### F. Verifiable credentials and privacy-preserving status

**Strengths**

- Separates issuer, holder, and verifier roles.
- Allows consumer-authorized, purpose-bound proof without sending the raw history.
- Supports verifier binding, expiry, replay resistance, holder binding, and selective or minimized disclosure.
- Status can be distributed without an issuer learning every presentation.
- Does not require a blockchain or DID.

**Limitations**

- Formats, cryptosuites, wallets, status, recovery, key discovery, trust registries, and conformance must be profiled precisely.
- Selective disclosure does not prevent correlation through issuer keys, timestamps, status entries, network traffic, devices, or verifier collusion.

**Verdict:** Lead consumer-proof family. [W3C Verifiable Credentials Data Model 2.0](https://www.w3.org/TR/vc-data-model-2.0/), [Verifiable Credential Data Integrity 1.0](https://www.w3.org/TR/vc-data-integrity/), and [Bitstring Status List v1.0](https://www.w3.org/TR/vc-bitstring-status-list/) are current standards foundations. The status-list specification explicitly supports privacy-preserving status distribution and holder-provided status, reducing the need for a verifier to contact an issuer during presentation.

### G. Federated computation and governed query authority

**Strengths**

- Source companies retain detailed data.
- OCA can define and sign fixed analytical packages, approve purposes, reconcile contribution, aggregate protected results, and produce network reports unavailable to any one member.
- Corrections can occur at source and flow through controlled recomputation.
- The architecture avoids turning OCA into a raw-data warehouse or public infrastructure ledger.

**Limitations**

- Query composition, selective contribution, repeated requests, source inference, administrative reach, and output privacy still require central governance and independent audit.
- Distributed computation remains regulated processing and may have cross-border, labor, privacy, competition, and contractual consequences.

**Verdict:** Lead report-data direction. Blockchain does not improve the essential report question: whether the inputs are complete, the query is approved, the output is private, and the interpretation is valid.

## 5. Decision matrix

| Candidate | Privacy and correction | Multi-party integrity | Enterprise fit | Operating burden | CQ role |
|---|---:|---:|---:|---:|---|
| Public permissionless blockchain | Poor | Strong for recorded sequence | Poor | Very high | Rejected as core |
| Permissioned consortium blockchain | Mixed | Moderate to strong | Mixed | High | Optional future implementation only |
| Signed governed registry | Strong when minimized | Moderate; stronger with mirrors | Strong | Low to moderate | Lead initial current-state registry |
| Signed federation and trust chains | Strong for participant metadata | Strong for authorization paths | Strong | Moderate | Lead mature participant trust layer |
| Append-only transparency service | Poor for personal records; strong for screened public artifacts | Strong for inclusion and non-equivocation | Moderate | Moderate | Candidate public-accountability layer |
| Verifiable credentials and privacy-preserving status | Strong if profiled correctly | Strong for issuer-to-holder-to-verifier proof | Moderate to strong | Moderate | Lead consumer proof layer |
| Federated computation with governed queries | Stronger raw-data minimization | Strong only with reconciliation and audit | Moderate | Moderate to high | Lead network-intelligence layer |

There is no winner for every row because these mechanisms solve different problems. The lead architecture is their bounded composition, not a universal ledger.

## 6. What may enter a transparency layer

The default public artifact set may eventually include:

- Published standard and schema releases
- Signed conformance-profile releases
- Public trust-registry snapshots or participant-status changes already approved for publication
- Certification issuance, suspension, expiry, or revocation when public certification is part of the program
- Published mapping-profile releases and withdrawals
- Public policy, governance, and claims-ledger releases
- Published report-method manifests, correction notices, and final report hashes
- Public evaluation preregistrations, amendments, and authorized-claims records
- Signing-key or trust-anchor transitions whose publication is required for verification

Every artifact still requires privacy, security, competition, labor, legal, and operational classification before logging. A public artifact may be signed and archived without entering a universal transparency service. Transparency is a capability applied only when the non-equivocation value exceeds the permanence and metadata cost.

## 7. What must not enter a public or shared immutable layer

The following are prohibited:

- Names, contact details, identity documents, biometrics, or stable consumer identifiers
- Raw NCS responses, worker identities, or worker-level histories
- Raw or derived VCI events and transaction histories
- Company-, industry-, or overall CQ standing tied to a person
- Person-specific credential identifiers or status indexes that permit correlation
- Proof requests, unsuccessful presentations, successful presentation trails, verifier identities, or benefit activity tied to a consumer
- Permissions, withdrawals, disputes, challenges, appeals, incidents, remedies, or recovery activity tied to a person
- Person-, household-, worker-, location-, or small-cohort report contributions
- Reversible, guessable, dictionary-testable, or otherwise linkable hashes of personal or confidential data
- Encrypted personal data whose ciphertext, keys, metadata, or future cryptanalysis create continuing exposure

Putting a hash on a chain does not place the underlying information outside privacy law or make the record anonymous. Person-specific commitments can remain correlatable and can become identifying when the underlying data or auxiliary information is available.

The [European Data Protection Board's final blockchain guidelines](https://www.edpb.europa.eu/documents/guideline/guidelines-on-processing-of-personal-data-through-blockchain-technologies_en), adopted in July 2026, reinforce the need for necessity, role allocation, data-protection-by-design, and lifecycle analysis before personal data are processed through blockchain technology. The Conduct design takes the stronger default position that personal conduct infrastructure does not belong on a public immutable layer.

## 8. Correction and historical accountability

The architecture must hold two ideas at once:

1. The system needs an accountable history of material institutional actions.
2. The system needs the current active truth to change when an event, credential, permission, mapping, certification, report, or decision is corrected.

An immutable history must never become the active-state database. Correction works through:

- A signed superseding or reversal event
- A canonical lifecycle reference to the affected record
- Immediate active-state recomputation
- Credential refresh, suspension, expiry, or revocation as appropriate
- Proof and benefit transition rules
- Report correction or restatement
- Consumer-visible completion receipt
- End-to-end fan-out confirmation
- A public correction notice only when the underlying artifact was public

For personal records, historical audit evidence remains bounded, access-controlled, purpose-limited, and retained only as necessary. The public does not need a permanent person-level record to know whether OCA follows its correction rules.

## 9. The lead architecture

### Private operational plane

- Raw source and identity evidence remain with responsible custodians.
- Eligible source-population ledgers remain privacy-minimized and directly available to authorized evaluators.
- NCS and VCI events are signed, scoped, lifecycle-aware assertions exchanged through certified adapters.
- Synthesis occurs through split, local, or privacy-protected federated mechanisms.
- Corrections remain mutable active state with signed audit evidence and completion receipts.

### Consumer proof plane

- The consumer receives or accesses a short-lived, purpose-bound proof or credential.
- Presentation is consumer-initiated and verifier-bound.
- The verifier learns only the approved positive fact and the minimum fulfillment data.
- Nonpresentation and unsuccessful attempts leave no customer-linked verifier record.
- Status is privacy-preserving and does not call the issuer in a way that reveals every use.

### Federation and current-authority plane

- A signed registry or federation expresses participants, roles, endpoints, schemas, keys, assurance, trust marks, policy constraints, expiry, suspension, and revocation.
- Metadata are short-lived, cached only within policy, and independently verifiable to one or more approved trust anchors.
- Trust anchors, intermediaries, and operators remain governed, replaceable, and subject to conflict and concentration controls.

### Report plane

- OCA signs fixed, approved analytical packages and purpose manifests.
- Certified custodians execute only authorized queries against governed source populations.
- Contribution reconciliation, privacy thresholds, cumulative query budgets, corrections, and output review remain enforceable.
- OCA receives protected results sufficient to create unique reports without receiving general raw histories.

### Public accountability plane

- Standards, methods, public registry snapshots, governance decisions, claims, corrections, and report artifacts are signed and versioned.
- Stage 0 and early Stage 2 use ordinary public archives and independent copies.
- A witnessed append-only transparency service becomes a candidate only when rollback, equivocation, or sponsor-suppression risk materially exceeds the added burden.
- The interface remains implementation-neutral; a blockchain, Merkle log, replicated database, trusted hardware, or another verifiable data structure may sit underneath only if it satisfies the same privacy, governance, portability, audit, and exit requirements.

## 10. Stage progression

### Stage 0: publication project

- Versioned public documents
- Content hashes and signed releases when practical
- Independent backups or public archives
- No real conduct data, credentials, personal status, or ledger service

### Stage 1 and Stage 2: synthetic specification and prototype

- Synthetic signed events and lifecycle traces
- Prototype signed registry snapshots and trust metadata
- Synthetic credential issuance, presentation, status, correction, and recovery
- Prototype signed federated query packages and aggregate receipts
- Optional non-personal transparency-log proof of concept
- No public blockchain requirement

### Stage 3: bounded live pilot

- Signed governed registry as the authoritative current participant and policy state
- Certified event, credential, proof, correction, evaluation, and report interfaces
- Independent registry archive and evaluator evidence
- Transparency layer only for a preapproved set of non-personal public artifacts
- No personal conduct data or person-specific commitments in the public layer

### Stage 4: mature ecosystem

- Signed federation with multiple approved trust anchors or intermediaries where justified
- Multiple replaceable credential, custody, status, computation, and transparency providers
- Independent witnesses or monitors for public accountability artifacts
- Reconsider a ledger implementation only through the reopening test below

## 11. Blockchain reopening test

A future implementation may use a blockchain only when all of the following are documented before selection:

1. A specific threat requires decentralized consensus, censorship resistance, or survivability that a signed registry, independent mirror, witnessed transparency log, or conventional replicated system cannot adequately provide.
2. The data class is public and non-personal, or a formal analysis demonstrates that no personal, worker, confidential, competitive, relationship, status, timing, or correlatable information enters the shared layer.
3. Correction, withdrawal, expiry, supersession, key compromise, legal restriction, and incident response remain effective despite persistence.
4. No business or consumer must acquire tokens, pay volatile fees, manage blockchain keys, or understand blockchain to use CQ.
5. The protocol, operators, governance, upgrade, fork, finality, fee, outage, jurisdiction, sanctions, concentration, and exit profile is acceptable.
6. The implementation is standards-compatible, cryptographically agile, independently reviewed, and replaceable without stranding credentials, rights, reports, or institutional history.
7. Measured value exceeds the additional privacy, accessibility, environmental where applicable, legal, operational, security, procurement, and reputational burden.
8. OCA does not become the mandatory blockchain operator or a speculative token, infrastructure, identity, or data company.

Failing any one condition keeps the blockchain role at zero.

## 12. Decisions now locked

1. The Conduct standard remains ledger-neutral and blockchain-optional.
2. Public blockchain is rejected as the required or initial CQ infrastructure.
3. Permissioned blockchain is not selected merely because several companies participate.
4. Signed events and credentials establish provenance and integrity, not semantic truth or source completeness.
5. The authoritative current state remains correctable, revocable, and purpose-bound.
6. Signed governed registries lead the initial participant, key, schema, mapping, and policy layer.
7. Signed federation and trust chains lead the mature multi-party authorization direction.
8. Verifiable credentials and privacy-preserving status lead consumer proof.
9. Federated custody and governed computation lead network intelligence.
10. Transparency services are limited to approved non-personal public institutional artifacts.
11. No person-specific conduct artifact or correlatable commitment enters a public immutable layer.
12. Every operated shared service remains separately governed, replaceable, exportable, and exercisable on exit.

## 13. What remains open

- Exact signed registry and federation profile
- Trust anchors, intermediaries, role metadata, trust marks, and policy constraints
- Event-signature, credential, presentation, status, and cryptographic profiles
- Exact public-accountability artifact classes
- Whether the pilot needs a transparency service at all
- Transparency operator, witness, mirror, monitor, receipt, retention, shutdown, and incident design
- Key compromise, rotation, recovery, historical validation, and mass-reissuance procedures
- Report query package, source execution, contribution receipt, aggregation, and correction protocol
- Cross-border, privacy, labor, competition, consumer-reporting, records, discovery, and sector-specific treatment
- Provider market, OCA-operated transitional services, funding, capacity, and exit

These are implementation and pilot-profile questions. They no longer reopen whether blockchain is a required foundation.

## 14. Final conclusion

The promise that made blockchain feel relevant is real: no one company should own or be able to rewrite the shared truth of a multi-company conduct ecosystem.

The better response is not to put conduct on a chain. It is to distribute the right kinds of power:

- Businesses retain their source evidence.
- Consumers control disclosure.
- Providers remain replaceable.
- OCA governs standards and accountability rather than raw histories.
- Signed federation establishes current authority.
- Independent evaluators receive direct evidence.
- Public institutional artifacts become verifiably accountable where needed.
- Corrections remain capable of changing real outcomes.

That architecture captures the important promise of decentralization without inheriting a permanent public behavioral ledger.
