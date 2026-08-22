# Conduct Ecosystem — Suite K Three-Digit CQ Synthesis and Display Preregistration v0.1

**Status:** Preregistered before execution  
**Date:** August 11, 2026  
**Purpose:** Test whether one consumer-readable Conduct Quotient can be synthesized from independently governed NCS and VCI evidence without recreating the compensation, validity, instability, and false-precision problems identified in Suite C.

## 1. Why this is a new suite

Suite C found that a general combined value was not then the lead representation. Its combined challengers tracked a balanced synthetic target, but a stronger component compensated for a below-threshold component in approximately 69% of eligible valid-case results. The two-dimensional state and purpose-bound proof were therefore retained.

The CQ Product Contract now restores one `x.yz` score as the desired consumer surface while preserving the warning underneath it. Suite K is a follow-on test of that new product hypothesis. It does not edit Suite C, reinterpret its original result, or assume that a score must win.

## 2. Primary research question

Can a score on a `1.00–5.00` display scale:

1. require separately valid and sufficient NCS and VCI evidence;
2. prevent strength in one component from concealing a material weakness in the other;
3. respond monotonically and proportionately to meaningful input changes;
4. remain stable enough for a two-decimal consumer display;
5. avoid introducing avoidable transaction-volume, economic-value, or resource artifacts;
6. retain honest non-score states; and
7. offer enough product value to justify compressing two constructs into one number?

If no tested candidate clears the structural gates, the result is not a search for a more flattering formula. The result is that one CQ has not yet earned advancement.

## 3. Fixed representation and mapping

Every numerical candidate produces an internal synthesis value from `0–100`. The proposed display mapping is fixed before results:

```text
CQ = 1 + 4 × (internal synthesis / 100)
displayed CQ = CQ rounded to the nearest hundredth, half-to-even
```

Thus `0` maps to `1.00`, `50` to `3.00`, and `100` to `5.00`.

This mapping is a display convention, not evidence that the scale has equal psychological intervals or that a difference of `0.02` is meaningful. Suite K tests the stability of the display; human research must test comprehension and meaning.

## 4. Shared validity and availability gates

For every combined candidate:

- NCS and VCI must both be known, construct-valid, provenance-valid, and individually sufficient.
- Each component must meet the existing minimum synthetic confidence threshold.
- Missing, invalid, unknown, or insufficient evidence produces no CQ.
- A failed component gate cannot be repaired by weighting, shrinkage, confidence, or strength in the other component.
- The same inputs, rules, version, and scope must reproduce the same result.
- A higher NCS with fixed VCI may not reduce CQ; a higher VCI with fixed NCS may not reduce CQ.
- Score availability and score standing remain separate. Evidence age may remove availability under the inherited Suite C model; it must not directly lower an otherwise unchanged standing.

## 5. Candidate families

### K0 — Two-dimensional control

Shows separately available NCS- and VCI-derived states. It produces no combined CQ. It is the information-preserving control.

### K1 — Purpose-bound proof control

Returns only an eligibility result for one approved purpose. It produces no combined CQ. It is the data-minimizing product control.

### K2 — Transparent arithmetic benchmark

```text
S = 0.50N + 0.50V
```

This is intentionally unconstrained and is expected to expose compensation. It is included as a benchmark, not a lead recommendation.

### K3 — Capped arithmetic synthesis

```text
A = 0.50N + 0.50V
S = min(A, min(N,V) + 10)
```

The stronger component may add at most ten internal points above the weaker component.

### K4 — Weighted geometric synthesis

```text
S = sqrt(N × V)
```

The geometric mean penalizes imbalance more than arithmetic averaging but does not eliminate compensation by itself.

### K5 — Harmonic synthesis

```text
S = 2NV / (N + V)
```

The harmonic mean responds more strongly to the weaker component. When both inputs are zero, `S = 0`.

### K6 — Weakest-link anchored synthesis

```text
S = min(N,V) + 0.25 × |N − V|
```

The weaker component controls 75% of the distance to the stronger component. This is a transparent conjunctive candidate, not a claim that the coefficient is final.

### K7 — Confidence-shrunk hierarchical proxy

Each component is first shrunk toward the neutral internal point of 50 using its inherited evidence confidence, then synthesized with the K6 weakest-link rule.

```text
N* = 50 + confidenceN × (N − 50)
V* = 50 + confidenceV × (V − 50)
S = min(N*,V*) + 0.25 × |N* − V*|
```

This is only a structural proxy for partial pooling. The current generator does not contain the multi-company, multi-context, and multi-issuer hierarchy needed to validate a production hierarchical model. K7 cannot become the final formula from this suite alone.

## 6. Prespecified contradiction and high-score rules

For structural testing:

- A **materially weak component** is below `50` on the internal `0–100` scale.
- A **material contradiction** exists when one component is at least `70` and the other is below `50`.
- A **high displayed CQ** is at least `4.50`, equivalent to an internal synthesis of `87.5`.
- A **strong displayed CQ** is at least `4.00`, equivalent to an internal synthesis of `75`.
- **Component uplift** is the synthesis value minus the weaker component.

These are diagnostic boundaries, not proposed consumer tiers or benefit thresholds.

## 7. Test populations and inherited stressors

Suite K uses common synthetic histories so every candidate sees the same people, events, failures, and seeds. It inherits the Suite C structural scenario family and stresses:

- clean and degraded capture;
- invalid, unknown, and sparse component patterns;
- source concentration and reduced independence;
- recency and evidence-age variation;
- high and low transaction opportunity;
- worker response bias and retaliation proxies;
- operational-record corruption, company-caused failure, and missing evidence;
- economic value, resource position, affinity, and interaction volume;
- policy threshold and hysteresis settings; and
- treatment and baseline-change contamination.

Suite K adds deterministic counterfactual tests that do not require regenerating histories:

- `+1` internal-point changes to one component at a time;
- small plausible two-component updates drawn from a fixed distribution;
- display rounding and tie behavior;
- contradictory input grids;
- exact boundary values around high-score and weak-component thresholds; and
- confidence-only changes for the hierarchical proxy.

## 8. Metrics

### Gate integrity

- output produced with an invalid or unknown required component;
- output produced with an insufficient required component;
- monotonicity violations;
- nondeterministic output from identical inputs; and
- numerical values outside the declared display range.

### Non-compensation

- high-CQ share with either component materially weak;
- strong-CQ share with a material contradiction;
- component-uplift distribution;
- share of results more than 10 internal points above the weaker component; and
- score response across the fixed contradiction grid.

### Fidelity and artifacts

- correlation with the balanced synthetic conduct target;
- correlation with each component and the weaker component;
- raw and residual correlation with transaction volume, economic value, and resource position;
- subgroup error and availability differences; and
- distribution compression and ceiling concentration.

Residual artifact tests first remove the linear contribution of the two latent conduct variables. They are diagnostics, not proof of causal fairness.

### Display stability

- absolute change after a small plausible update;
- share changing by at least `0.01`, `0.05`, and `0.10` displayed points;
- median and 90th-percentile absolute change;
- rank reversals caused only by rounding;
- ties introduced by rounding;
- number of occupied hundredth values; and
- share for which the displayed hundredth changes while the unrounded change is below half a hundredth.

## 9. Elimination gates

A numerical candidate is eliminated from lead consideration in this suite if any of the following occurs:

1. It produces any CQ when either required component is invalid or unknown.
2. It produces any CQ for a person whose required component evidence is insufficient under the inherited gates.
3. It has any monotonicity violation on the deterministic boundary and counterfactual tests.
4. It produces any high CQ when either component is below `50`.
5. It produces any strong CQ under a material contradiction.
6. It produces a value outside `1.00–5.00` or fails deterministic reproduction.
7. A confidence-only or evidence-age-only change alters standing instead of changing only score availability.

These are hard integrity gates. Predictive correlation cannot compensate for failure.

## 10. Comparative review criteria

Candidates that survive the hard gates are compared rather than automatically approved. The review favors:

- lower and more explainable uplift above the weaker component;
- greater balanced-target fidelity without materially greater proxy artifacts;
- stable display behavior without excessive compression;
- limited ceiling crowding;
- understandable mathematics and auditability;
- consistent behavior across scenario modes and subgroups; and
- the smallest product and governance burden needed to achieve the result.

No universal numerical cutoff is preregistered for every stability or artifact metric because the synthetic generator does not establish real-world prevalence, measurement error, or acceptable consumer impact. These outcomes will be reported in full and used to narrow the next empirical work, not converted into invented certainty.

## 11. Separate questions this suite cannot answer

Suite K cannot establish:

- that NCS or VCI measures the intended real-world constructs;
- that people interpret `4.94` and `4.96` appropriately;
- that a two-decimal score reduces or increases anxiety;
- lawful use in any jurisdiction or decision;
- acceptable subgroup performance in real populations;
- a production evidence threshold, recency period, update cadence, or dispute service level;
- valid transfer between actual companies or industries;
- whether an overall CQ represents a coherent construct; or
- whether any benefit tied to CQ improves conduct or customer experience.

Those require human research, field data, legal review, and bounded pilots.

## 12. Decision outputs

The Suite K report will end with one of four conclusions:

1. **Advance one candidate as the provisional structural lead** for further human and field research.
2. **Advance a narrowed score**, such as company- or context-specific CQ only.
3. **Retain one CQ as a product ambition but require another simulation or measurement redesign.**
4. **Reject the single-score representation and retain two-dimensional or proof-only controls.**

Advancement from Suite K means only that a candidate survived this structural synthetic comparison. It is not production authorization.
