# Conduct Ecosystem — Suite C CQ Synthesis Simulation Report v0.1

## The answer in human terms

CQ should pull NCS and VCI together—but it should not initially collapse them into one number.

The strongest architecture is:

1. A two-dimensional contextual CQ state that preserves the human and operational records separately.
2. A synthesis layer that validates the evidence, applies context, evaluates sufficiency and independence, preserves contradiction, and explains limitations.
3. Purpose-specific proofs that use only the dimensions relevant to an approved purpose.
4. A conjunctive rule when that purpose genuinely requires minimum strength in both NCS and VCI.
5. No combined result when a required component is invalid, unknown, insufficient, disputed, or contextually irrelevant.

This is still synthesis. CQ is the meaningful interpretation of the two records, not necessarily their arithmetic average.

The transparent and statistical combined scores looked predictive against a synthetic blended target. But in the valid comparison, approximately **69% of their eligible results depended on one component compensating for the other**. That is precisely the information loss the system is designed to avoid.

The original idea survives. The initial product architecture becomes clearer: **two dimensions for the consumer; one minimized, purpose-specific answer for the verifier; no general combined score.**

## 1. What was tested

Suite C compared:

| ID | Candidate | Role in the comparison |
|---|---|---|
| C1 | No combined CQ | Required null; NCS and VCI remain separate |
| C2 | Two-dimensional contextual view | Separate dimensions plus their evidence and validity states |
| C3 | Conjunctive tier | Requires minimum strength in both dimensions |
| C4 | Purpose-bound proof | Uses only the components required for one approved purpose |
| C5 | Transparent combined score | Confidence-weighted numerical combination |
| C6 | Partial-pooling challenger | Simplified statistical combination |

The full run included:

- 12 Suite C scenario-and-mode groups
- 486 unique common synthetic histories
- 1,200 synthetic consumers per history
- 2,916 candidate-case evaluations
- Both-valid, one-invalid, both-invalid, one-unknown, and both-sparse component states
- Contradiction, concentration, transaction-volume, recency, threshold, hysteresis, novelty, participation-reactivity, and baseline-drift stress
- Identical generated history for every candidate within each comparison

The preserved result package is `simulation/run_packages/suite-c-v0.1-results.json`.

## 2. A combined score performs well at the target it defines

Among histories in which both components were valid and known, the combined candidates correlated strongly with the synthetic continuous target that blended human and operational propensity:

- C5 transparent combined score: 0.738
- C6 partial-pooling challenger: 0.756

That result is real within the synthetic model, but it is not decisive. A combined score is constructed to track a combined target. The harder question is whether compression preserves the meaning needed for an approved decision.

When the synthetic purpose required both dimensions to clear their own thresholds:

| Candidate | Median accuracy | Median precision | Component compensation among eligible results |
|---|---:|---:|---:|
| C3: Conjunctive tier | **0.913** | **0.471** | **0%** |
| C5: Transparent combined | 0.800 | 0.264 | **69.1%** |
| C6: Partial pooling | 0.802 | 0.272 | **69.1%** |

The combined candidates admitted many consumers whose strong result in one component offset a below-threshold result in the other. That may be mathematically coherent, but it changes the proposition. It allows operational reliability to erase a human-interaction concern or favorable human experience to erase a responsibility concern.

The result does not prove that every real purpose must require both dimensions. It proves that when a purpose does require both, an average is a poor substitute for explicit minimums.

## 3. The two-dimensional contextual state should be the primary CQ representation

C1 and C2 do not produce a combined scalar, so synthetic prediction cannot distinguish them. Human research must determine whether the contextual packaging in C2 is clear, useful, and emotionally safe.

Structurally, C2 adds the synthesis the system needs without destroying information. It can show:

- The current NCS direction and evidence state
- The current VCI direction and evidence state
- Context, source scope, and time window
- Whether each component is valid, sufficient, independent, and current
- Material contradiction
- Disputes, corrections, incidents, and limitations
- Which approved proofs, if any, the current state can support

C2 therefore becomes the lead consumer and internal CQ representation. C1 remains the permanent null: the system must still be allowed to keep the records separate without presenting them as one CQ product if comprehension, legal, fairness, or operating evidence fails.

The phrase “Conduct Quotient” does not need to promise one quotient number. It can name the governed contextual state produced by interpreting the records together.

## 4. Purpose-specific proof is the lead verifier output

C4 performed best when the required dimensions changed with the declared purpose. Across the generated human-only, operational-only, and both-required purpose profiles, it achieved median accuracy of 0.869 and median precision of 0.572.

Its key advantage is not only numerical. It distinguishes **invalid** from **irrelevant**:

- If a proof requires both NCS and VCI, both must clear their gates.
- If a legitimate purpose requires only human-interaction evidence, invalid or insufficient VCI cannot be averaged in—and VCI is not silently treated as adverse.
- If a legitimate purpose requires only operational evidence, NCS is not exposed or used merely because it exists.
- The purpose definition must be approved before the request; a verifier cannot choose the dimension producing the preferred answer.

C4 produced no result when a relevant component was invalid or unknown. It could still produce a result when the other component was explicitly irrelevant to that purpose. That is contextual minimization, not invalidity laundering.

The verifier should continue to receive only the authorized positive proof. The consumer retains the two-dimensional explanation and private reason for nonpresentation.

## 5. A conjunctive tier is useful, but only for a declared purpose

C3 prevented component compensation completely. It also prevented favorable operational evidence from clearing an adverse or below-threshold human dimension, and vice versa.

It should not become a universal CQ tier. A requirement that both dimensions always clear the same kind of threshold would imply that NCS and VCI are equally relevant to every benefit and context. They are not.

C3 is better understood as a special case of C4: the approved purpose requires separate minimums in both dimensions. The consumer view should still show the dimensions rather than only a Bronze, Silver, Gold, or favorable/unfavorable tier.

## 6. Invalid and unknown components can remain non-compensating

The gate-aware C3–C6 implementations produced **zero outputs from an invalid or unknown component required for the result**. C1 and C2 continued to show the component state without manufacturing a directional conclusion.

This demonstrates structural feasibility, not operational proof. A real implementation still needs source, capture, fairness, rights, incident, and correction controls. But the simulation confirms that confidence weighting is not necessary to “salvage” a failed component. The system can simply refuse to combine or prove.

Sparse evidence also remained different from adverse evidence. Most sparse histories produced no proof rather than a negative result, while the consumer-facing state could still explain that the history was developing or insufficient.

## 7. Thresholds need hysteresis

Small synthetic evidence updates caused median eligibility flip rates of approximately:

| Candidate | Without hysteresis | With the tested hysteresis |
|---|---:|---:|
| C3: Conjunctive tier | 1.52% | 0.19% |
| C4: Purpose-bound proof | 2.81% | 0.45% |
| C5: Transparent combined | 2.33% | 0.09% |
| C6: Partial pooling | 4.01% | 0.17% |

The exact widths are not selected, and larger hysteresis can preserve stale eligibility too long. But the structural direction is clear: any threshold proof needs separate entry and exit rules, version-transition handling, and protection for already-completed benefits.

## 8. Evidence sufficiency can become a transaction treadmill

Among valid histories, proof availability had median transaction-volume correlations of approximately:

- C3: 0.456
- C4: 0.305
- C5: 0.456
- C6: 0.456

This is not the same as the conduct result correlating with volume. It means people with more interactions are more likely to have enough evidence to qualify for any result.

Some relationship between experience and confidence is unavoidable. But if valuable recognition requires repeated purchasing, the system creates a practical loyalty and wealth advantage even when its score formula is volume-neutral.

The architecture must therefore keep:

- Insufficient history nonadverse and private
- Initial benefits modest and nonessential
- Repeated routine evidence capped and clustered
- Confidence separate from conduct direction
- Inactivity from lowering conduct standing
- Any route to reestablish sufficiency from becoming an obligation to spend

Whether noncommercial, low-cost, or naturally occurring evidence can safely support sufficiency remains an open design question.

## 9. Proof and benefit effects cannot validate the construct

The treatment scenarios deliberately allowed participation, novelty, and baseline drift to change outcomes after proof eligibility. Under one combined stress profile, these effects manufactured an apparent eligible-versus-noneligible outcome gap of 0.70 beyond the preexisting difference. At the highest novelty setting, the artificial gain reached 1.00 in the generator's normalized units.

These are stress values, not forecasts. The lesson is causal: better outcomes after proof presentation do not prove that CQ measured conduct correctly. The construct, proof experience, benefit, additional staffing, novelty, expectation, and baseline effects need separate estimands and evidence.

## 10. Candidate verdicts

| Candidate | Suite C verdict | Reason |
|---|---|---|
| C1: No combined CQ | **Retain as permanent null** | The system must be allowed to keep dimensions separate and reject the CQ product representation |
| C2: Two-dimensional contextual state | **Lead CQ representation candidate** | Adds context, validity, contradiction, and proof eligibility without destructive compression |
| C3: Conjunctive tier | **Retain as a both-required purpose rule** | Prevents compensation but should not imply both dimensions matter equally to every purpose |
| C4: Purpose-bound proof | **Lead verifier-output candidate** | Uses only approved relevant dimensions and can minimize disclosure without laundering invalidity |
| C5: Transparent combined score | **Do not advance as the initial or general CQ** | Predictive against a blended target but hides component weakness through compensation |
| C6: Partial-pooling model | **Do not advance; retain only as later research** | Small predictive gain does not beat the simpler architecture, and the full hierarchy was not instantiated |

No candidate is approved for a real-person proof, benefit, or production release.

## 11. What remains unresolved

Suite C cannot establish:

- Whether consumers understand and value a two-dimensional CQ state
- Which words communicate favorable, adverse, mixed, developing, insufficient, disputed, or unavailable evidence without implying moral judgment
- Which real benefits legitimately require NCS, VCI, or both
- Whether any consumer-facing number or tier adds comprehension rather than false precision
- Exact thresholds, evidence minimums, hysteresis widths, recency periods, or version-transition rules
- How issuer, context, event-class, and source hierarchies affect an advanced model
- Whether the transaction-sufficiency problem can be reduced enough for a valuable benefit
- Legal and cultural viability of any exact proof purpose or context

Those questions remain for human research, later suites, exact context mapping, partner discovery, legal review, and a bounded pilot design.

## 12. Decision and next step

The initial CQ architecture should be **two-dimensional internally and purpose-specific externally**.

The consumer's CQ state brings NCS and VCI together through contextual interpretation while preserving both. A verifier receives only an approved positive proof derived from the relevant valid dimensions. When both dimensions matter, a conjunctive rule prevents one from erasing the other. A general combined score does not advance.

The next structural comparison is Suite D: whether any company-to-company or industry mapping preserves meaning and adds value over zero transfer—or whether the defining portability ambition must remain narrower by context.
