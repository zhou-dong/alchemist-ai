# Facts — When Many Cells Move as One

*This file holds facts specific to this chapter.*

> **Status note:** this chapter's own script (`scripts/ch2-when-many-cells-move-as-one.md`) contains an unresolved `⚠️ UNRESOLVED` block (as of 2026-07-31) flagging that §1.1 and §1.2 of the current draft make claims that do not survive scrutiny. This facts file records the **corrected** framing below — Part 1/Part 2 of the script as currently written still needs a rewrite to match it. See "Open questions" for the specific sections affected.

## Setting — Earth history

- The Ediacaran period follows a series of severe glaciations ("Snowball Earth" events, the Cryogenian glaciations) during which much or all of Earth was covered in ice, then thawed. (established)
- Atmospheric oxygen built up gradually over billions of years, produced by bacterial (cyanobacterial) photosynthesis, prior to the Ediacaran. (established)
- The script's caption dates this chapter's opening to "600 million years ago, end of the Proterozoic." This is **imprecise**: the Proterozoic eon actually ends at ~538.8 Mya (its final period, the Ediacaran, runs roughly 635–538.8 Mya), so 600 Mya falls within the Ediacaran/late Proterozoic, not at its boundary. (established — dating correction; the ICS chronostratigraphic chart is the reference)

## Early multicellularity — divergent lineages

- Multiple multicellular lineages arose independently (or via independent elaborations) from single-celled ancestors in this general era, including sponges, cnidarians ("radiatans" in the script — anchored, radially symmetric forms such as corals, sea anemones, and jellyfish), and bilaterians (animals with a front/back, left/right body axis). (established, at the level of "these lineages diverged and coexist," though exact branching order and timing among early animal lineages remains an active research area)
- Cnidarian descendants alive today include corals, sea anemones, and jellyfish. (established)

## Bila — the chapter's fictional early bilaterian

- Bila is a fictional composite organism, analogous to Ch0's LUCA-like framing — not a specific documented fossil species. (framing, not a factual claim)
- The script's date of "555 million years ago" for Bila lands close to some of the earliest confirmed bilaterian trace fossils and body fossils (e.g., *Ikaria wariootia*, dated to roughly this period), and is plausibly inspired by that fossil record, but the script does not claim Bila *is* a specific named species. (plausible as an illustrative date; should not be presented as a specific fossil's date unless the script explicitly names a real analog)
- Small, soft-bodied, with a front/back body axis (bilateral symmetry) enabling directional movement — a general, established feature of early bilaterians as a group, not specific to any one species. (established as a general characteristic)

## Cnidarian ("radiatan") nervous system — corrected framing

*This section supersedes the framing in the script's current §1.1, which the script's own unresolved note flags as incorrect.*

- Nerve cells (neurons) appear earlier than bilaterians, in the cnidarian lineage. Cnidarians possess a **nerve net**: neurons distributed through the body with no central integration point. Stimulation at one location propagates outward through the net; there is no single site where signals from the whole body converge into one output. (established — high confidence per the script's own fact-check note)
- Cnidarians already have real chemical synapses between neurons, with variable transmission strength between different synapses. (established — high confidence per the script's own fact-check note)
- Consequence: the *tunable synapse* (a weight sitting in a connection, adjustable independently of the sensor) predates bilaterians and is not Bila's/bilaterians' innovation. What bilaterians add is **centralization** — a specific place where signals from across the body converge into one decision — not the synapse itself. (established, given the above)

## Signal propagation — chemistry vs. wiring (used as narrative device)

- Diffusion-based (chemical) signaling time scales with the square of the distance traveled — a well-established physics fact (diffusion times generally scale as distance²/diffusivity). (established as a general physical principle)
- The script uses this to argue that at a body scale roughly 1000× a bacterium's, diffusion-only signaling becomes impractical (minutes-to-hours to cross a body), motivating wired (synaptic/electrical) signaling for larger, coordinated bodies. (plausible as a narrative/order-of-magnitude argument; the specific "~1000×" scale factor and resulting time estimates are illustrative, not sourced figures, and should not be presented as precise)

## Bila's nervous cluster (ganglion) and the perceptron mapping

- A primitive ganglion — a small cluster of neurons receiving sensory input from across the body and sending motor output to muscles — is a real, established category of early nervous system organization in simple bilaterians. (established as a general biological structure; not verified here for any specific fossil species)
- The chapter maps this ganglion onto a perceptron (multiple weighted inputs, summed, plus a bias, producing a binary output) as a pedagogical analogy — biology first, math named second. This is a teaching framing, not a claim that early bilaterian ganglia are historically/literally identical to Rosenblatt's model. (plausible as a teaching model, explicitly flagged as a simplification in the script itself: "Bila's real cluster isn't a single perceptron... it is a small network of them")

## Internal state signals (hunger, arousal)

- The claim that internal-state signaling (e.g., hunger signals from a gut, body-wide arousal under threat) co-evolved alongside nervous system integration in early bilaterians is a reasonable evolutionary inference but is stated flatly in the script with no citation. (plausible, not verified against a specific source)

## History — Rosenblatt and the perceptron

- Frank Rosenblatt is credited with formulating the perceptron and built a hardware implementation (the Mark I Perceptron) capable of learning, in the late 1950s. (established, widely documented)
- The script's specific date, "1958," and the quote attributed to Rosenblatt ("the simplest possible model of a neuron") are stated without citation — the underlying history is well documented, but this exact date and quote should be checked against Rosenblatt's original publications/reports before being treated as precisely sourced. (needs verification — established in broad strokes, unverified in exact wording/date)

## Open questions — sections needing a rewrite to match this file

- **Flag 1 (script §1.1):** "Bila's lineage is the first to evolve a nervous cluster" is incorrect as written — nerve nets (without centralization) predate bilaterians in the cnidarian lineage. Needs retitling/reframing around *centralization*, not *innervation*, as Bila's innovation.
- **Flag 2 (script §1.2):** "The weight moves out of the sensor" as Bila's invention is not safe as written — cnidarians already have tunable synapses. The chapter's territory narrows to: convergence (a place where dials are read *together*) and internal signals as inputs — not the existence of the tunable junction itself.
- These corrections do not affect §1.3 (internal signals) or the Ch0→Ch1 bridge about the bacterium's weight being welded to its detector — those comparisons are bacterium-vs-Bila and don't route through the cnidarian.
