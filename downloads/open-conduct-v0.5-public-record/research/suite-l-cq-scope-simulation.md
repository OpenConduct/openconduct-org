# Conduct Ecosystem — Suite L CQ Scope and Overall Architecture Simulation Report v0.1

**Status:** Completed structural simulation; bounded overall architecture selected for further research  
**Date:** August 11, 2026  
**Does not authorize:** A live overall CQ, real context mappings, public comparison of people, or use of overall CQ for a benefit

## 1. Result in plain English

**An overall CQ survives as a bounded research hypothesis. A universal conduct score does not.**

The lead architecture is:

1. Calculate company- or context-specific CQs separately.
2. Include only contexts that have an approved relationship to the overall scope.
3. Require at least two sufficiently observed, independently issued context families.
4. Give each context family an equal voice; transaction volume does not buy more influence.
5. Cap the overall result at ten internal points above the weakest included context.
6. Show **Context varies** instead of an overall number when included contexts are materially far apart.
7. Bind the complete approved source set to the result. A valid adverse context cannot quietly disappear and leave a better “overall” score behind.

This preserves the original ambition—overall, industry, and company-specific CQ—while making “overall” much narrower and more honest than “everything we know about this person.”

## 2. What was tested

Suite L compared:

| Candidate | Architecture | Overall score? |
|---|---|---:|
| L0 | Context-only control | No |
| L1 | Equal-context arithmetic average | Yes |
| L2 | Evidence-volume-weighted average | Yes |
| L3 | Equal-context synthesis capped at ten above the weakest context | Yes |
| L4 | L3 plus a Context varies non-score state | Yes, when coherent |
| L5 | Evidence weighting capped at 60%, plus weakest-context cap | Yes |
| L6 | Purpose-bound proof control | No |

The full run included:

- 256 shared synthetic context cases;
- 1,200 synthetic consumers per case;
- 1,792 candidate-case evaluations;
- coherent, divergent, unrelated, high-volume, sparse, dependent, omission, and recovery conditions; and
- a second identical run with the same result digest.

The result digest is:

```text
80da19d7582b9514c992a53020d5e90540c3d9107ba853ed796f0e8377d3cbf5
```

## 3. Why an ordinary overall average fails

L1, the equal-context average, tracked the known synthetic cross-context signal well. It still failed two integrity tests.

### It hid a material context conflict

On the exact boundary test, two context values of `100` and one of `40` produced an overall internal value of `80`. That is a strong overall result even though one included context was materially weak.

### It improved when an adverse context disappeared

Across the omission stress, L1 silently published a material improvement 11,869 times after a valid below-average context was removed.

An overall score cannot mean “all approved contexts” when unfavorable source composition is optional.

## 4. Why transaction volume cannot control overall CQ

L2 weighted contexts by eligible evidence volume. It produced slightly higher median correlation with the supplied global synthetic signal than the other candidates, at approximately `0.864`.

It also failed badly:

- 65,230 excessive-context-weight results;
- 10,910 silent adverse-context omissions;
- 111 strong overall scores under material context contradiction; and
- two high overall scores with a materially weak included context.

The busiest company, highest-frequency category, or easiest-to-observe behavior cannot become the person’s overall identity. Evidence volume can establish whether a context is sufficient; it cannot buy more than one context family’s share of meaning.

## 5. The three bounded survivors

L3, L4, and L5 passed every preregistered hard gate.

| Candidate | Median overall availability | Median global-signal correlation | Median weakest-context correlation | Median opportunity correlation |
|---|---:|---:|---:|---:|
| L3 — equal and capped | 87.2% | 0.845 | 0.978 | −0.016 |
| L4 — contradiction-aware | 80.0% | 0.850 | 0.978 | −0.014 |
| L5 — capped volume weights | 87.2% | 0.847 | 0.977 | −0.018 |

### L5 adds complexity without material value

Capping volume weights at 60% controlled overt dominance, but L5 did not materially improve relationship to the supplied global signal. It is harder to explain, audit, and govern than equal context-family weights.

L5 does not advance.

### L3 is the simpler valid fallback

L3 prevented compensation and omission while retaining the highest availability among the bounded candidates. It can remain a challenger if human research finds the Context varies state confusing or too sensitive.

### L4 is the lead

L4 produced no number when the strongest and weakest included context scores differed by 40 or more internal points.

The state behaved directionally as intended:

| Scenario | Median Context varies rate |
|---|---:|
| Coherent contexts | 0.7% |
| Unrelated high-value injection | 0.8% |
| Dominant evidence volume | 0.6% |
| Shared-source dependency | 0.3% |
| Sparse contexts | 0.1% |
| One truly divergent context | 9.8% |
| Adverse-context stress | 5.8% |
| Local-recovery stress | 5.7% before recovery recalculation |

An unrelated injected context did not cause the state because it was never eligible for inclusion. A genuinely divergent approved context did. That is the desired distinction.

The exact 40-point boundary is provisional. The architectural decision is more important: material context conflict must be a state the system can reveal, not a disagreement that averaging hides.

## 6. What “overall” is allowed to mean

Overall CQ is not a blend of every company, industry, behavior, or available database.

The Suite L lead permits a narrower definition:

> Overall CQ is a governed summary of every currently valid context CQ in one fixed, approved, independently supported source set.

That definition creates several requirements:

- The source set has a public version and purpose.
- Every context family starts at zero relevance.
- A broad industry label does not authorize inclusion.
- One issuer appearing in multiple products counts once unless independence is established.
- More transactions inside one context increase confidence or sufficiency, not semantic weight.
- Missing contexts do not count as zero.
- Fewer than two approved independent contexts produces no overall CQ.
- Material source-set changes pause or clearly version the overall result.
- The consumer may choose whether to share overall, industry, or company scope, but cannot choose a favorable subset and call it overall.

## 7. Company, industry, and overall CQ remain different products

### Company-specific CQ

Uses eligible direct evidence from one participating company or approved corporate group. It may exist before any portability is established.

### Industry or approved context-family CQ

Uses exact mappings between sufficiently similar roles and interaction functions. It does not inherit validity merely from an industry name.

### Overall CQ

Requires at least two independently supported approved context families and the additional Suite L protections. It is the last scope to earn release, not the default first pilot.

The same person may therefore have:

```text
Airline A                     4.91
Air travel                   4.88
Overall                      Building history
```

or:

```text
Travel                       4.82
Dining                       3.61
Overall                      Context varies
```

These are interface examples only. They do not use calibrated real scores.

## 8. Recovery remains local

Suite L changed one context while holding the others fixed. No unaffected company- or context-specific score changed.

The overall CQ responded only when the recovered context was included and the result remained publishable. This supports a crucial product rule:

- Recovery in Dining can improve Dining.
- It may then improve a valid overall CQ.
- It does not rewrite Travel, Airline A, or another unrelated relationship.

The consumer should be able to see which scope changed without exposing source-company detail to a receiving business.

## 9. Availability is meaningful, not a defect to optimize away

In the sparse-context scenario, median overall availability fell to approximately 26% for the bounded candidates. In the shared-dependency scenario, L4 availability was approximately 74% because one apparent context did not count as independent.

That is a successful safeguard. The system is not entitled to an overall number for everyone.

The controls remained important:

- Context-only display was available in a median 96.6% of cases because one valid context can still be useful.
- Purpose-bound proof had the same minimum two-context availability as the ordinary numerical candidates, approximately 87.2% overall, but returned no general score.

An unavailable overall CQ must never reduce baseline service or become a shadow low score.

## 10. The display-scale warning remains

The synthetic L4 median display was approximately `2.83` under the working linear mapping. This is not a population forecast. As in Suite K, it shows that synthetic structural histories cannot calibrate a familiar five-point consumer scale.

The sites should not imply that most real consumers would have a particular number, that `4.96` is a normal good score, or that the score distribution will look like Uber. Those questions remain empirical.

## 11. Decision

### Advance for research

- **L4 contradiction-aware capped synthesis** as the provisional overall-CQ architecture.
- **L3 equal-context capped synthesis** as the simpler challenger.
- Company- and approved context-specific CQ ahead of overall CQ in the pilot sequence.
- Context varies, Building history, Under review, and Not available in this context as legitimate non-score states.
- Equal context-family weight in overall CQ.
- Fixed, versioned source composition.
- Purpose-bound proof as the default receiving-business output.

### Do not advance

- A naïve overall average.
- Evidence-volume weighting.
- Industry-label inclusion.
- User-selected favorable subsets presented as overall.
- Duplicate issuers or shared platforms presented as independent contexts.
- Any score that treats missing context as adverse.
- Overall CQ as the first live pilot scope.

## 12. What this means for the original vision

The vision survives with a clearer order:

```text
company CQ
    ↓ exact validated mappings
approved context-family CQ
    ↓ independence + coherence + source-set gates
overall CQ, when supportable
```

The consumer-facing idea can still be simple. The system behind it must be willing to say:

- there is enough evidence here;
- there is not enough evidence yet;
- this context does not transfer;
- these sources are not independent; or
- your valid contexts differ too much for one honest overall number.

That is not a retreat from CQ. It is what makes CQ defensible.

## 13. Phase 2 close recommendation

Phase 2 can now close with two provisional structural leads:

- **Within one scope:** Suite K K3 capped arithmetic synthesis.
- **Across approved scopes:** Suite L L4 contradiction-aware, equal-context, capped synthesis.

The next step is Review Gate 2. If these directions are accepted, Phase 3 should migrate the controlling specification to a version 0.5 working draft while preserving Suites A–L as historical research artifacts.

The version 0.5 draft must keep the following open rather than pretending the simulations solved them:

- real construct validity;
- the ten-point component and context caps;
- the 40-point context-variation boundary;
- the `1.00–5.00` mapping and real distribution;
- displayed-score update persistence;
- evidence sufficiency and independence thresholds;
- real source-to-target context mappings;
- consumer and worker comprehension;
- subgroup performance;
- legal and jurisdictional constraints; and
- whether overall CQ provides enough benefit to justify its additional risk.
