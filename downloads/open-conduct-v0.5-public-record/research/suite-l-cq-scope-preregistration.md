# Conduct Ecosystem — Suite L CQ Scope and Overall Architecture Preregistration v0.1

**Status:** Preregistered before execution  
**Date:** August 11, 2026  
**Purpose:** Test whether valid company- and context-specific CQs can support an overall CQ without universalizing unrelated conduct, hiding context conflict, allowing source cherry-picking, or letting one high-volume company dominate.

## 1. Relationship to prior work

Suite D established that context transfer begins at zero and advances only through exact, independently validated mappings. Matched interaction function mattered more than a broad industry label. Unrelated contexts stayed at zero, and shared infrastructure could not count as independent corroboration.

Suite K then advanced a capped arithmetic family as the provisional one-scope CQ synthesis lead. Suite L does not retest NCS-to-VCI synthesis. It treats separately valid context CQs as inputs and tests the architecture above them.

Suite D and Suite K remain unchanged.

## 2. Primary questions

1. Can more than one valid context CQ be summarized without treating conduct as one universal trait?
2. What context diversity and independence are required before an overall CQ exists?
3. Can one company, issuer, industry, or high-volume context dominate the result?
4. Can an adverse but valid context be hidden by favorable contexts or silently removed?
5. Can an unrelated or zero-transfer context influence an overall CQ?
6. Does recovery in one context change only that context and the explicitly dependent overall result?
7. When should the honest output be “context varies” or no overall CQ?

## 3. Fixed lower-level inputs

Each context first receives two valid synthetic component values on `0–100`. Its provisional context CQ synthesis is fixed to the Suite K K3 family:

```text
context mean = (NCS-derived value + VCI-derived value) / 2
context synthesis = min(context mean, weaker component + 10)
```

Suite L uses the internal `0–100` value. Public `1.00–5.00` mapping is reported only for illustration and does not control candidate selection.

An invalid, unknown, insufficient, dependent, or unapproved context is not a zero score. It is excluded from the approved overall source set and may cause the overall CQ to be unavailable.

## 4. Context model

The synthetic design creates four context families per consumer:

- **A — anchor context:** a well-observed company or closely bounded function;
- **B — matched independent context:** separately issued and approved as relevant;
- **C — additional approved context:** relevant but allowed to contain true context-specific variation;
- **D — unrelated context:** numerically plausible but always zero-transfer and unapproved for the overall source set.

The test varies:

- cross-context coherence;
- true divergence in one approved context;
- unrelated-context injection;
- transaction and evidence-volume dominance;
- sparse and missing context history;
- shared infrastructure and false independence;
- adverse-context omission;
- duplicate-context injection; and
- local recovery or sudden decline.

## 5. Candidate architectures

### L0 — Context-only control

Shows company- or context-specific CQs and produces no overall CQ.

### L1 — Equal-context arithmetic benchmark

Uses one equal vote for each approved independent context and requires at least two. It has no cross-context non-compensation cap.

### L2 — Evidence-volume-weighted benchmark

Weights approved independent context CQs by their eligible evidence counts. It is expected to expose dominance and opportunity artifacts.

### L3 — Equal-context capped synthesis

```text
context average = equal mean of approved independent context CQs
overall synthesis = min(context average, weakest included context + 10)
```

It requires at least two approved independent context families. The source composition is bound to the result version; removing a valid context pauses publication until the change is reviewed and disclosed.

### L4 — Contradiction-aware capped synthesis

Uses L3, but produces **Context varies** instead of an overall number when the strongest and weakest included context CQs differ by 40 or more internal points.

The 40-point spread is a preregistered structural research setting, not a production threshold.

### L5 — Weight-capped evidence synthesis

Weights by eligible evidence volume but caps any context’s effective weight at 60%, then applies the L3 ten-point weakest-context cap. It tests whether bounded volume weighting adds value without recreating dominance.

### L6 — Purpose-bound proof control

Uses only approved context mappings necessary for one purpose and returns no overall CQ.

## 6. Shared overall gates

Every numerical overall candidate must:

- require at least two approved, independently issued, sufficiently observed context families;
- exclude unrelated and zero-transfer contexts;
- deduplicate administratively dependent contexts;
- treat missing context history as missing, never adverse;
- use every valid context in its fixed approved source set;
- preserve company- and context-specific CQs when another context changes;
- reproduce the same result from the same inputs and version;
- remain monotonic when one included context improves and all others remain fixed; and
- return no ordinary score while a material source-composition change is unresolved.

## 7. Diagnostic boundaries

- **High overall CQ:** internal value at least `87.5`.
- **Strong overall CQ:** internal value at least `75`.
- **Materially weak included context:** below `50`.
- **Material context contradiction:** at least one included context at or above `70` and another below `50`.
- **Excessive dominance:** one context has more than `60%` effective weight.
- **Material omission uplift:** removing one valid below-average context increases the internal overall value by more than `2.5` points while an ordinary score remains published without a composition-change state.

These are structural test boundaries, not consumer tiers.

## 8. Hard elimination gates

A numerical overall candidate is eliminated if it:

1. produces an overall CQ with fewer than two approved independent context families;
2. gives nonzero weight to the unrelated context;
3. gives more than 60% effective weight to one context;
4. changes when a duplicate or administratively dependent copy is added;
5. produces a high overall CQ while an included context is materially weak;
6. produces a strong overall CQ under a material context contradiction;
7. silently improves by more than 2.5 internal points when a valid adverse context is omitted;
8. changes an unaffected company- or context-specific CQ after another context changes;
9. violates monotonicity or deterministic reproduction; or
10. treats a missing context as a zero or adverse result.

Predictive correlation, availability, or simplicity cannot compensate for a hard-gate failure.

## 9. Comparative metrics

Surviving candidates will be compared on:

- relationship to the known cross-context synthetic signal;
- relationship to the weakest and average included contexts;
- score availability;
- Context varies rate;
- high-score and contradiction behavior;
- effective weight and volume correlation;
- sensitivity to sparse-context arrival and removal;
- local recovery propagation;
- score compression and display distribution; and
- differences across synthetic resource and opportunity groups.

## 10. Interpretation boundaries

This simulation cannot establish that any real contexts belong in an overall CQ. It cannot determine a real transfer map, human meaning, legal basis, production threshold, consumer preference, or whether “overall conduct” is a valid construct.

The synthetic coherent signal is supplied so the architecture can be tested. Finding it does not prove that such a signal exists in the world.

## 11. Possible decisions

Suite L will conclude one of the following:

1. Advance one bounded overall architecture for further human and field research.
2. Advance only an industry or approved context-family CQ, not an overall CQ.
3. Retain overall CQ as a long-term ambition but require substantially more context evidence.
4. Reject overall CQ and retain company/context scores plus purpose-bound proof.

No Suite L result authorizes a live overall CQ.
