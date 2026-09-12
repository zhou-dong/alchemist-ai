# Facts — When Weights Learn

*This file holds facts specific to this chapter.*

## Synaptic plasticity / Hebbian learning

- Synapses are not fixed-strength connections — their transmission strength changes over time as a function of activity. This is a real, foundational property of biological nervous systems (synaptic plasticity). (established)
- The general Hebbian principle — connections between neurons that are repeatedly co-active tend to strengthen, while connections between neurons that are not co-active tend not to (or weaken) — is a foundational, widely-supported concept in neuroscience, with biochemical mechanisms (e.g., long-term potentiation) documented across many nervous systems. (established as a general principle)
- **Attribution note on the quote itself:** the script attributes the sentence *"cells that fire together, wire together"* directly to Donald Hebb in 1949. This exact phrasing is a **later paraphrase/mnemonic**, not Hebb's own words — Hebb's 1949 book *The Organization of Behavior* states the underlying postulate in more technical terms (roughly: when one cell repeatedly and persistently helps fire another, the efficiency of the first cell's connection to the second increases). The catchy phrasing commonly quoted today is usually credited to later writers (e.g., Siegrid Löwel, early 1990s) summarizing Hebb's idea, not to Hebb directly. (needs correction/citation — the underlying principle is correctly attributed to Hebb 1949; the exact quoted sentence is not)
- The claim that Hebbian-style plasticity "works in nearly every nervous system on Earth, and its biochemistry is ancient" is a reasonable characterization of how broadly activity-dependent plasticity is documented across animal nervous systems, but is stated in the script with no citation. (plausible, unverified as stated)

## The perceptron learning rule

- Frank Rosenblatt formulated a supervised learning rule for the perceptron: after producing an output, compare it to a target/correct answer, and adjust each weight in proportion to the error and the corresponding input. This is accurately described in the script's formula:
  > new weight = old weight + (target − actual output) × input
  (established — this is the standard perceptron learning rule as originally formulated)
- The script's date, "1958," for this rule matches the commonly cited date for Rosenblatt's early perceptron publications, but as with ch2, the exact date/attribution should be checked against Rosenblatt's original papers (e.g., his 1958 *Psychological Review* paper, and Cornell Aeronautical Laboratory technical reports from the same period) rather than treated as independently verified here. (needs verification — broadly correct, exact sourcing unchecked)
- **Historical lineage claim:** "Every algorithm that came after — backpropagation, gradient descent, modern deep learning — descends from this idea." This is a defensible high-level characterization (the perceptron rule is a special case of gradient-descent-style error-driven weight updates, and backpropagation generalizes error-driven updating to multi-layer networks), but it compresses a real and more complicated lineage — backpropagation and gradient descent were developed independently by multiple people over decades, not as a direct, unbroken descendant of Rosenblatt's specific rule. (plausible as a simplified narrative lineage; should not be read as a precise historical claim of direct derivation)
- **The script's own self-correction is worth preserving as-is:** the narration explicitly distinguishes Hebb's rule (about co-activity) from the perceptron rule (about error), noting they are "kin" rather than identical — this qualifier is accurate and should be kept when this material moves into narration. (established distinction, already correctly framed in the script)

## Framing notes

- "Two Bilas" (Beat 5) — the claim that identical starting bodies can diverge based on differing life experience, mediated by activity-dependent synaptic change, is a *narrative illustration* of Hebbian plasticity's consequences, not a claim about any specific documented organism. (framing, not a checkable fact)
- No numeric figures (percentages, counts, thresholds) appear in this chapter's script needing the kind of "unverified figures" treatment ch1 required — the only checkable items are the two dates (Hebb 1949, Rosenblatt 1958) and the quote attribution above.
