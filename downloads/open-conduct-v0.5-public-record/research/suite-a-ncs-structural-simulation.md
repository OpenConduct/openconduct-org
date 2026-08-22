# Conduct Ecosystem — Suite A NCS Structural Simulation Report v0.1

## The answer in human terms

The first simulation supports the current direction.

The selected NCS scoring model—**Definitely yes +10, Probably yes +3, Probably not −3, Definitely not −10**—is the provisional lead numerical model. In the synthetic tests, it retained more of the intended human-interaction signal than conviction-net or direction-net while preserving the direction of every scored answer.

This is not a final validation. More importantly, the simulations show that the formula is not the biggest risk. If worker judgment is materially influenced by affinity, commercial outcome, legacy ratings, employer pressure, or selective completion, every portable NCS representation becomes unsafe. Better math cannot repair contaminated capture.

The recommended architecture is therefore:

- Keep the +10/+3/−3/−10 model as the lead **research calculation**.
- Always retain the complete four-choice distribution and evidence-quality profile behind it.
- Treat a purpose-bound state or proof as a possible downstream product output, not as the underlying measurement model.
- Keep conviction-net, direction-net, and no portable NCS as active challengers.
- Do not authorize portable NCS until worker independence, prohibited-factor contamination, sampling, completion, observation, and reviewability survive human and field validation.

The original NCS vision does not need to change.

## 1. What was tested

Suite A compared:

| ID | Candidate | Role in the comparison |
|---|---|---|
| A1 | +10, +3, −3, −10 graduated model | Selected lead hypothesis |
| A2 | Conviction net | Uses only Definitely yes minus Definitely not for direction |
| A3 | Direction net | Treats definite and probable answers equally by direction |
| A4 | Full four-choice profile | Retains distribution rather than requiring one number |
| A5 | Purpose-bound state | Converts evidence into a contextual eligibility state |
| A6 | No portable NCS | Required null architecture |

The run included:

- 20 Suite A scenario-and-mode groups
- 890 unique shared synthetic histories
- 1,200 synthetic consumers per history
- 5,340 candidate-case evaluations
- Clean, sparse, biased, unequal-opportunity, gaming, failure, coercion, and concentration conditions
- Identical generated history for every candidate in each comparison

The result package is `simulation/run_packages/suite-a-v0.1-results.json`.

## 2. Formula performance under clean identifiable conditions

The clean identifiable subset required:

- A real generated intended conduct signal
- No employer-visible individual response state
- No worker-reidentification risk
- Low prohibited-factor influence
- No legacy-score influence

Median synthetic correlation with the intended interaction-conduct signal was:

| Candidate | Median intended-signal recovery | 10th percentile | Interpretation |
|---|---:|---:|---|
| A1: +10/+3/−3/−10 | **0.750** | 0.616 | Strongest provisional scalar candidate |
| A2: Conviction net | 0.725 | 0.592 | Close, but discards directional information from probable answers |
| A3: Direction net | 0.675 | 0.537 | Simpler and somewhat less sensitive to intensity, but loses signal |
| A4: Four-choice profile | 0.675 directional summary | 0.537 | Same derived directional summary as A3; retains more underlying information |
| A5: Purpose-bound state | 0.527 | 0.457 | Information loss is expected after thresholding |

These values describe the synthetic generator, not expected correlations in a real pilot. Their useful meaning is comparative: under the same histories, A1 generally retained more intended information.

## 3. Why conviction-net did not replace the selected model

A1 and A2 were highly related—their median score correlation in clean identifiable cases was **0.964**. But their directional interpretation differed for a median **21.9%** of consumers.

That happens because conviction-net gives Probably yes and Probably not no directional contribution. A consumer with several probable-positive responses can therefore appear directionless under A2 even though every worker leaned positive. The same problem occurs in the negative direction.

This result supports the original instinct behind +10, +3, −3, −10: probable responses should matter, but substantially less than definite responses.

A2 remains valuable as a challenger because it tests whether the extra interval assumption in A1 earns its complexity.

## 4. Why direction-net remains useful but is not the lead

A1 and A3 had a median clean score correlation of **0.909**, with median directional disagreement of **10.2%**. Their top-quartile overlap was only **58.6%**.

Direction-net is easier to explain and somewhat less sensitive to the magnitude of a contaminated response. But it discards the difference between “probably” and “definitely,” which reduced recovery of the intended signal in these tests.

A3 should remain the primary simplicity and robustness challenger. If human research shows that workers do not use probable and definite choices consistently enough to support the 10:3 distinction, direction-net could still win later.

## 5. The complete response profile should remain mandatory

A4's derived directional summary was mathematically identical to A3 in this run. Its value is not a better scalar. Its value is refusing to hide the distribution.

Two consumers can have similar numerical results while one has broad probable agreement and another has polarized definite responses. The complete profile also preserves:

- Direction
- Conviction
- “Not enough interaction” and completion rates
- Interaction clustering
- Issuer and worker concentration
- Contradiction
- Evidence sufficiency and quality

The recommendation is not “replace A1 with A4.” It is: **A1 may be the lead internal research calculation, but the full A4 evidence profile remains the required backing representation.**

## 6. A purpose-bound state is an output, not the measurement

A5 reduced median intended-signal recovery to 0.527 in clean cases because thresholding discards information and introduces cliffs. Its lower observed correlations with prohibited factors partly reflect that information loss; they do not prove that thresholding cured bias.

A5 remains highly relevant to the product vision. A business may ultimately need only a private answer such as eligibility for one approved recognition—not a raw NCS. But that proof should be produced from valid underlying evidence after thresholds are independently justified. It should not replace the underlying NCS construct.

## 7. The biggest finding: capture integrity dominates formula choice

### Human bias overwhelms every formula

When prohibited affinity influence was absent, median absolute affinity correlation remained near zero. As the generated influence increased, it rose sharply:

| Prohibited-factor influence | A1 | A2 | A3 | A5 |
|---:|---:|---:|---:|---:|
| 0.0 | 0.040 | 0.039 | 0.036 | 0.030 |
| 0.3 | 0.216 | 0.209 | 0.189 | 0.133 |
| 0.75 | 0.513 | 0.485 | 0.456 | 0.347 |
| 1.5 | 0.692 | 0.693 | 0.629 | 0.520 |

No formula neutralized materially biased input. A3 and A5 sometimes dampened it, but only by discarding information. Portable NCS therefore requires direct construct, vignette, language, cultural, disability, complaint, and outcome testing—not a mathematical bias claim.

### Legacy business information creates the wrong signal

When legacy ratings, customer value, outcome, or similar information influenced worker judgment or selection, every candidate began correlating with economic value. At a moderate generated legacy influence of 0.3, median absolute economic-value correlation was approximately:

- A1: 0.197
- A2: 0.201
- A3: 0.165
- A5: 0.086

At high influence, the wrong signal dominated. This supports the constitutional requirement that workers cannot see prior conduct, ratings, risk, loyalty, value, or proof information before responding—and that legacy data cannot influence eligibility, prompting, or investigation outside the NCS payload.

### Completion is part of validity

With only 10% response completion, median intended-signal loss relative to directly observed responses was approximately:

- A1: 0.210
- A2: 0.208
- A3: 0.229

At 95% completion, median loss fell to approximately 0.007–0.009.

The focused completion scenarios did not reverse the intended direction when a genuine signal existed, but low and outcome-dependent completion materially weakened it. Across the broader adversarial matrix, some direction reversals occurred when the intended signal was absent or other failures dominated. NCS therefore needs source-population, prompt-delivery, completion, abstention, and missingness reporting; sampling rules alone are insufficient.

### Worker visibility and reidentification are structural failures

The matrix deliberately created:

- 157 histories with employer-visible individual response state
- 60 histories with nonzero worker-reidentification risk

Every portable candidate failed those histories. These counts are stress-test coverage, not estimates of real prevalence. The finding is categorical: no scoring formula can compensate when worker participation, abstention, withdrawal, or response can be used by an employer—or when consumer review can expose a worker.

## 8. Candidate verdicts

| Candidate | Suite A verdict | Reason |
|---|---|---|
| A1: +10/+3/−3/−10 | **Provisional lead research calculation** | Best intended-signal recovery under controlled capture; probable answers retain direction; still vulnerable to contaminated input |
| A2: Conviction net | **Retain as challenger** | Close aggregate relationship to A1 but too much directional information is lost when probable responses contribute zero |
| A3: Direction net | **Retain as robustness challenger** | Simpler and slightly less contamination-sensitive, but materially lower intended-signal recovery |
| A4: Full profile | **Required companion representation** | Preserves distribution, concentration, conviction, and evidence limits; does not require a universal scalar |
| A5: Purpose-bound state | **Retain as downstream output candidate** | Valuable for minimized proofs, but thresholding loses information and creates cliffs |
| A6: No portable NCS | **Retain as constitutional null** | Must win whenever construct or capture gates cannot be cleared |

No candidate is approved for production or a real-person benefit.

## 9. What remains unresolved

Simulation cannot establish:

- Whether real workers understand and consistently use the four response choices
- Whether 10:3 is the right strength ratio in human judgment
- Whether the prompt separates conduct from warmth, ease, outcome, complaint, culture, language, disability, or status in the field
- Whether workers feel genuinely free to abstain or withdraw
- Whether consumer explanations can support review without identifying workers
- Which completion, sufficiency, independence, and contamination thresholds are practically acceptable
- Whether meaning remains stable across industries, roles, countries, languages, and labor models

Those questions remain with OQ-106, OQ-156, OQ-421, OQ-462, OQ-464, and the applicable external and explicit-limit gates.

## 10. Decision and next step

Suite A does not justify changing the selected NCS prompt or the +10/+3/−3/−10 lead formula. It strengthens the case for keeping that formula as the lead hypothesis while making the complete response profile and capture-quality evidence inseparable from it.

The next structural simulation is Suite B: whether any VCI representation can resist selective evidence, easy-event flooding, transaction-volume advantage, business-failure omission, disputed-event control, and false actor attribution—and whether VCI adds something beyond ordinary customer history.
