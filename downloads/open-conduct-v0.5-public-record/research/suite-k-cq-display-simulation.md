# Conduct Ecosystem — Suite K Three-Digit CQ Synthesis and Display Simulation Report v0.1

**Status:** Completed structural simulation; provisional lead selected for further research  
**Date:** August 11, 2026  
**Controls:** Suite K preregistration, CQ Product Contract v0.1, and the preserved Suite C result  
**Does not authorize:** A live score, an overall CQ, a benefit rule, production coefficients, or a public claim that CQ is valid

## 1. Result in plain English

**A single Conduct Quotient survives this round of structural testing.** The simulation does not force Conduct back to two prominent dimensions.

The surviving direction is not a simple average. The provisional lead is a **capped arithmetic CQ**: NCS and VCI are averaged, but the result can never rise more than ten internal points above the weaker component in this research setting.

That cap matters. It allows both inputs to contribute while preventing one excellent input from carrying a materially weaker one too far. It also remains simple enough to explain and audit.

The proposed public surface can therefore remain a research hypothesis:

```text
Conduct Quotient
4.96
```

The two protected inputs stay beneath the score. They must each pass their own gates before a CQ exists.

This is a structural green light for the product direction, not proof that the score is ready. The exact cap, real evidence thresholds, display-update behavior, cross-context synthesis, and human understanding still require further work.

## 2. What was tested

Suite K compared eight representations on common synthetic histories:

| Candidate | Representation | Combined score? |
|---|---|---:|
| K0 | Two-dimensional control | No |
| K1 | Purpose-bound proof control | No |
| K2 | Equal arithmetic average | Yes |
| K3 | Arithmetic average capped at ten points above the weaker input | Yes |
| K4 | Geometric mean | Yes |
| K5 | Harmonic mean | Yes |
| K6 | Weakest-link anchored synthesis | Yes |
| K7 | Confidence-shrunk hierarchical proxy | Yes |

The completed run included:

- 486 common synthetic histories;
- 1,200 synthetic consumers per history;
- 3,888 candidate-case evaluations;
- invalid, unknown, sparse, concentrated, biased, corrupted, and recency-stressed evidence conditions;
- deterministic boundary, contradiction, monotonicity, rounding, and small-update tests; and
- a second identical run that reproduced the same result digest.

The preregistered result digest is:

```text
b8383555b4f3c110d460da713b2c3440ddd9167d9d57e6752c54dfdb61fec4c2
```

## 3. Integrity gates

K2 through K6 cleared the preregistered structural hard gates:

- no CQ with an invalid or unknown required component;
- no CQ where a required component was individually insufficient;
- no output outside `1.00–5.00`;
- no monotonicity violation;
- no rounding-only rank reversal;
- no nondeterministic result;
- no high CQ with a materially weak component; and
- no strong CQ under the preregistered material-contradiction rule.

K7 failed. Lowering confidence while leaving the underlying conduct evidence unchanged altered standing 211,151 times across the run. That violates the product rule that evidence age or confidence may remove score availability but must not silently make an unchanged person look worse or better.

This does not reject hierarchical estimation as a research method. It rejects this confidence-shrunk proxy as a CQ calculation.

## 4. Why clearing a hard gate was not enough

The hard gates caught outright integrity failures. They did not make every surviving formula equally good.

| Candidate | Median balanced-target correlation | Median uplift above weaker input | Median share more than 10 points above weaker input | Maximum uplift on boundary grid |
|---|---:|---:|---:|---:|
| K2 — arithmetic | 0.737 | 12.89 | 59.8% | 50.00 |
| K3 — capped arithmetic | 0.702 | 10.00 | 0.0% | 10.00 |
| K4 — geometric | 0.695 | 9.73 | 48.6% | 25.00 |
| K5 — harmonic | 0.697 | 8.04 | 37.0% | 16.77 |
| K6 — weakest-link anchored | 0.731 | 6.44 | 28.9% | 25.00 |
| K7 — confidence-shrunk proxy | 0.712 | 7.85 | 44.7% | 25.00 |

### K2 explains why Conduct cannot use a simple average

The equal arithmetic average had the highest median relationship to the balanced synthetic target. It also allowed the stronger input to lift the result more than ten points above the weaker input for about 60% of available results, with a possible uplift of 50 points on the boundary grid.

That is the old Suite C problem in a new display. Predictive convenience does not repair it.

### K4 and K5 reduce compensation without controlling it

Geometric and harmonic synthesis penalized imbalance, but neither established an understandable ceiling on how much one component could carry the other. Their behavior is mathematically smooth but less straightforward for consumers, implementers, and reviewers.

### K6 is the strongest performance challenger

The weakest-link anchored model preserved nearly as much balanced-target correlation as the simple average and had lower typical uplift than K3. Its tail remained materially looser: nearly 29% of available results rose more than ten points above the weaker component, and the boundary maximum was 25 points.

K6 should remain a challenger if later evidence shows that K3 is too restrictive. It is not the structural lead.

### K3 makes the non-compensation promise enforceable

K3 was the only tested synthesis with a clear, finite ten-point maximum uplift and zero results beyond it. The rule is legible:

```text
average = (NCS-derived value + VCI-derived value) / 2
CQ synthesis = no more than 10 points above the weaker value
```

It gives up some synthetic target correlation to honor the product’s more important constraint. That is the correct trade at this stage.

## 5. The ten-point cap is provisional, not magical

After completing the preregistered run, an explicitly exploratory sensitivity check compared caps of 0, 5, 10, 15, and 20 internal points. It used 239 histories with at least five available CQs.

| Maximum uplift | Median balanced-target correlation | Median weaker-input correlation | Median cap-binding share |
|---:|---:|---:|---:|
| 0 | 0.682 | 1.000 | 98.7% |
| 5 | 0.688 | 0.998 | 78.9% |
| 10 | 0.702 | 0.991 | 59.8% |
| 15 | 0.718 | 0.974 | 42.7% |
| 20 | 0.730 | 0.952 | 28.9% |

The pattern is coherent:

- A zero- or five-point cap is effectively dominated by the weaker component.
- Fifteen or twenty points recovers more of the balanced target by allowing materially more compensation.
- Ten points is a credible research compromise.

The simulation cannot establish that ten is the correct production coefficient. It establishes that ten is not arbitrary in relation to the tested alternatives and is suitable for the next research stage.

The exploratory result digest is:

```text
ea7c7bbf2c2109bf32da3ed0b0da686dc7e660dd3257e2c8170e2225bf5bb6f1
```

## 6. What the formula means on the public scale

The internal synthesis remains `0–100`. The working display mapping tested here remains:

```text
CQ = 1 + 4 × (internal synthesis / 100)
```

The result is rounded to the nearest hundredth using half-to-even rounding.

Examples using synthetic component values:

| NCS-derived value | VCI-derived value | Ordinary average | Capped synthesis | Displayed CQ |
|---:|---:|---:|---:|---:|
| 90 | 90 | 90 | 90 | 4.60 |
| 90 | 70 | 80 | 80 | 4.20 |
| 100 | 50 | 75 | 60 | 3.40 |
| 80 | 40 | 60 | 50 | 3.00 |
| 100 | 0 | 50 | 10 | 1.40 |

These examples explain the mechanics; they are not proposed consumer profiles, thresholds, or evidence values.

### A necessary warning about `4.96`

Under the tested linear mapping, `CQ 4.96` corresponds to an internal synthesis of `99`. It is therefore a near-ceiling result, not a generic example of someone with merely good history.

The median K3 display in cleaner synthetic histories with broad score availability was approximately `2.96`; the median 90th percentile was approximately `4.05`. Those values do **not** predict the distribution of a real CQ population. The generator was designed to expose structural failures, not reproduce real consumer conduct or the positively compressed distribution of an Uber rating.

They do establish two product requirements:

1. Conduct cannot assume that a five-point format automatically inherits Uber’s score distribution or social meaning.
2. `4.96` should not become the default person shown throughout the sites until empirical data or a clearly labeled interface scenario supports it.

The eventual scale may preserve the linear mapping, use an empirically calibrated transformation, or need a different public convention. Any transformation must be fixed, versioned, understandable, monotonic, and unable to conceal material input weakness. Cosmetic inflation to make scores look familiar is not acceptable.

## 7. The two-decimal display

### What worked

- Rounding created no rank reversals.
- Pure hundredth-boundary fragility was low for K3: a median 0.38% of available small-update comparisons changed the displayed hundredth even though the unrounded movement was below half a hundredth.
- The display occupied enough hundredth values to preserve differentiation without publishing the full internal precision.

### What remains unsettled

When both components received a small synthetic perturbation, K3’s displayed score changed:

- by at least `0.01` in a median 87.6% of available comparisons;
- by at least `0.05` in 53.4%; and
- by at least `0.10` in 25.1%.

This does not show that a real CQ would change that often. The perturbation is not a real event-arrival model. It shows that publishing every recalculation immediately would make hundredths visibly active.

The exploratory publication check found:

| Minimum displayed change before publication | Median minor changes suppressed | Largest suppressed change in a typical case |
|---:|---:|---:|
| 0.02 | 9.1% | 0.01 |
| 0.03 | 17.8% | 0.02 |
| 0.05 | 34.5% | 0.04 |
| 0.10 | 65.9% | 0.09 |

A `0.10` threshold is too blunt: it would keep materially stale displays. A `0.03` or `0.05` persistence rule is plausible, but this simulation cannot choose between freshness and calm on behalf of consumers.

## 8. Provisional display and update contract

The following can advance:

1. Calculate CQ at greater precision than is displayed.
2. Display `1.00–5.00` with two decimal places when a score exists.
3. Round to the nearest hundredth using a published deterministic rule.
4. Recalculate standing only when eligible evidence is finalized, corrected, reversed, or removed—not merely because confidence or time changed.
5. Let evidence age and confidence change availability, qualification, or the need to rebuild history without silently changing standing.
6. Batch evidence that finalizes in the same short settlement window before publishing a new score.
7. Preserve an auditable prior value, new value, reason category, and calculation version.

The following remain open for real-data replay and human research:

- whether the linear `0–100` to `1.00–5.00` mapping has the right consumer meaning;
- the empirical distribution and appropriate public example values;
- whether publication waits for a `0.03` or `0.05` difference;
- the settlement window and maximum update frequency;
- whether a correction bypasses the ordinary publication window;
- how a display persistence rule behaves near benefit or proof thresholds; and
- whether consumers treat `4.94` and `4.96` as useful differentiation or unsupported ranking precision.

No benefit decision should depend on the displayed rounded CQ alone. Any approved proof must evaluate the underlying unrounded result, separately gated components, policy version, context, and evidence state.

## 9. Proxy and fairness signals

No candidate eliminated transaction-volume, economic-value, or resource correlations in every stressed case. The capped and weak-link families tended to retain a small positive residual relationship with transaction opportunity in the cleaner, higher-availability histories. For K3, the median residual correlations in those histories were approximately:

- transaction volume: `0.077`;
- economic value: `0.009`; and
- low-resource position: `0.050`.

These are not real-world disparity estimates. They are warnings for the next design stage:

- VCI opportunity and observation rules require continued attention;
- lack of transactions cannot be treated as adverse conduct;
- source and opportunity diversity gates must remain separate from the formula;
- subgroup evaluation must use real pilot populations and error analysis; and
- no amount of score synthesis can repair biased NCS or invalid VCI inputs.

## 10. Decision

### Advance

Advance **K3, the capped arithmetic family**, as the provisional structural lead for a company- or context-specific CQ.

Retain the ten-point internal cap as the next research setting, not a frozen production coefficient.

Retain K6 as the performance challenger.

Retain K0 and K1 as mandatory product controls: every future study must continue to ask whether the consumer is better served by seeing the components separately or whether the receiving business needs only a purpose-bound proof.

### Do not advance

- Do not use a naïve average.
- Do not use the K7 confidence-shrunk proxy.
- Do not let confidence decay move standing.
- Do not use rounded CQ by itself as a benefit threshold.
- Do not claim the hundredths place is scientific certainty.
- Do not authorize an overall CQ from this result.

## 11. What this changes about the idea

The core idea does not need a major pivot.

CQ can still be the simple thing people understand. NCS and VCI can still do different jobs beneath it. The hard work belongs in the gates, cap, evidence rules, context boundaries, and remedies—not in asking the consumer to interpret two competing primary ratings.

The architecture is now clearer:

```text
valid NCS-derived input ─┐
                         ├─ capped synthesis ─ CQ x.yz
valid VCI-derived input ─┘

invalid, unknown, or insufficient required input ─ no CQ
```

## 12. Next research step

Suite K tested synthesis within one scope. It did not establish whether Transportation, Dining, Hotels + vacation rentals, or company-specific histories can responsibly become one overall CQ.

The next simulation should therefore test **scope and context architecture**:

- company-specific CQ;
- industry CQ;
- zero-transfer contexts;
- partial transfer between approved contexts;
- context dominance and concentration;
- conflicting context results;
- missing-context behavior;
- recovery within one context without rewriting another; and
- whether any overall CQ survives without becoming a universal judgment.

Only after that result should Phase 2 close and the version 0.5 specification migration begin.
