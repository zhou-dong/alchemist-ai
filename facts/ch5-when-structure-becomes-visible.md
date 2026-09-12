# Facts — When Structure Becomes Visible

*This file holds facts specific to this chapter.*

> **Status note:** unlike ch0/ch1, this script carries no established/plausible/speculative tagging anywhere — real, checkable history sits next to narrative framing (Vera, the radiatan contrast) with identical confident phrasing throughout. This file separates the two.

## Setting — the Cambrian explosion

- The Cambrian explosion refers to the relatively rapid (geologically speaking) appearance of a wide range of animal body plans and, notably, of complex sensory organs — eyes with image-forming capability, and an expansion of other sensory modalities — in the fossil record beginning roughly 540–520 million years ago. (established)
- Framing this as a "sensory revolution" — a step change in the sophistication and dimensionality of sensory input available to animals, driving predator-prey arms races (shells, speed, active vision) — is a reasonable, widely-held characterization of the Cambrian explosion's ecological significance. (established as a general characterization; not tied to any specific dated study in the script)
- Vera, "an early vertebrate, one centimetre long," is a fictional composite protagonist (like Bila before her), not a documented fossil species. (framing, not a checkable fact)

## Visual cortex hierarchy (neuroscience)

- Mammalian visual cortex processes visual information in a hierarchical sequence: early stages respond to simple local features (e.g., oriented edges), later stages respond to combinations of those features with some tolerance to exact position ("complex cells"), and still later stages support recognition of more complete objects. This hierarchical organization is a well-established finding in visual neuroscience, historically associated with the "simple cell" / "complex cell" distinction first characterized by David Hubel and Torsten Wiesel in the visual cortex (their foundational work spans roughly the late 1950s through 1960s; they received a Nobel Prize in 1981 for this line of research). (established — though the script does not name Hubel/Wiesel or cite this history directly; the "simple cells... complex cells... higher areas recognising objects" description in the script's "biological vindication" section matches this real body of work)

## CNN history

- Kunihiko Fukushima published the Neocognitron in 1980, a hierarchical, layered neural network architecture explicitly inspired by findings on the mammalian visual cortex's simple/complex-cell organization. (established, matches standard AI history)
- Yann LeCun's foundational work formalizing and training what became the modern convolutional neural network (using backpropagation on a layered, weight-sharing architecture) is commonly dated to 1989 (e.g., "Backpropagation Applied to Handwritten Zip Code Recognition," *Neural Computation*, 1989). (established, matches standard AI history)
- CNNs, once developed for image recognition, have since been applied successfully to other domains with local, compositional structure — audio (e.g., phoneme/word recognition), text, genomic sequences, and time series data. (established — this generality is well documented in the machine learning literature)

## Claims needing a qualifier before extraction into narration

- **"The biological vindication" section overstates identity between biology and the CNN algorithm.** The script states: *"The algorithm was not inspired by biology as a loose analogy. It was biology, translated into mathematics."* This is a rhetorical overclaim as written — Fukushima's and LeCun's architectures were genuinely *inspired* by findings about visual cortex organization (a real and well-documented influence), but a modern trained CNN differs from biological visual cortex in significant ways: its learning mechanism (backpropagation via global error signals) has no established direct biological equivalent (see ch6's own framing note that backpropagation "as mathematically formalized does not exist precisely in biology"), and the exact receptive field structures, connectivity, and dynamics differ in detail from real cortical circuits. The *hierarchical, feature-learning principle* is a genuine and well-supported parallel; claiming the algorithm literally "was" biology "translated into mathematics" goes further than the evidence supports. (plausible as inspiration and structural analogy; overstated as literal identity)
- **"Modern AI systems were bilaterian in exactly this sense" / early hand-engineered feature detectors:** the claim that pre-CNN computer vision relied on hand-engineered feature detectors (edges, corners, textures) that were brittle to real-world variability (lighting, angle) is broadly accurate as a characterization of 1960s–2000s-era computer vision research, but is stated with no citation to specific systems or studies. (plausible, general characterization; unverified against specific historical systems)

## Framing notes

- The "bilaterian ceiling" (novelty problem, invariance/variability problem) is presented as the reason bilaterian-style hardcoded sensors fail in a richer sensory world — this is a narrative/pedagogical argument built for the chapter's thesis, not a claim sourced to any specific study of bilaterian sensory limitations. It should be treated as the chapter's own reasoned argument, not an established finding to be cited elsewhere. (framing)
- The software-engineering "layers of abstraction" analogy (operating systems, languages, frameworks) is a rhetorical parallel, not a historical or biological claim requiring verification.
