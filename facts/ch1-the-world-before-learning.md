# Facts — The World Before Learning

*This file holds facts specific to this chapter.*

## Chemotaxis signaling — evolutionary origin

- The core Che signaling module (CheA/CheY/CheB-style two-component architecture) is **broadly conserved across Bacteria and Archaea**, suggesting an ancient origin for chemotactic *signaling* logic specifically. (established, per comparative genomics reviews)
- This conservation does **not** imply a single ancestral flagellum at LUCA — signaling and the motility structures it eventually couples to appear to have evolved on different timelines. (plausible)

## Run and tumble — the motor mechanism

- Run and tumble are mutually exclusive states of the flagellar motor: counterclockwise rotation bundles the flagella into a single coherent propeller (run); clockwise rotation flings the bundle apart (tumble). (established)
- At rest in uniform conditions, *E. coli* runs for roughly 1 s and tumbles for roughly 0.1 s, repeating continuously. (established — Berg & Brown 1972)
- The motor's response to intracellular signal level is steeply sigmoidal — effectively a threshold/switch, not a graded dimmer. (established — the steepness itself is well documented; see "unverified figures" below for the specific numeric threshold)

## Sensing and signal integration

- Receptors sit in a single dense cluster at the cell's pole, not scattered across the membrane; different receptor types (attractant-binding, repellent-binding) are packed side by side in that cluster. (established)
- The signaling enzyme (CheA in *E. coli*) exists in far fewer copies than there are receptors, and each copy is shared by several neighboring receptors of possibly mixed type — so opposing signals can meet at a single enzyme copy, not just in the shared downstream pool. (established, structurally — the two-stage "local opposition, then shared pool" framing is a pedagogical simplification of this structure, plausible as a teaching model)
- All enzyme copies feed the same diffusible signaling chemical (CheY-P) into the same cell interior; this shared pool is the only thing the flagellar motors can read — no motor has access to an individual receptor or enzyme copy. (established)
- CheY-P is continuously degraded by a dedicated enzyme (CheZ in *E. coli*), so its steady-state level tracks recent signal rather than accumulating indefinitely. (established)
- Attractant binding *lowers* CheA's output rate (less CheY-P produced); repellent binding *raises* it. (established)
- Receptors in the cluster are allosterically coupled to their neighbors — when one flips state, it biases nearby receptors (including unbound ones) toward the same state. This clustering is the mechanism generally credited with the pathway's high sensitivity (detecting changes far smaller than a single receptor's affinity would allow). (established as a mechanism; the specific gain/cluster-size figures below are unverified)
- Different receptor types are present in different copy numbers (e.g., typically more attractant receptors than repellent receptors of a given class), and this copy-number difference is what determines each signal type's relative influence on the shared pool. (established as a general principle; exact ratios for any given receptor pair are not verified here)
- The resting/baseline level of CheY-P (in the absence of added stimulus) is set by the unliganded receptor array holding the enzyme active — not by any intrinsic activity of the enzyme itself. Detached from receptors, CheA is nearly silent. (established)

## Adaptation — the memory mechanism

- Receptors carry methyl groups added by CheR and removed by CheB, which shift on a timescale of seconds and adjust each receptor's baseline signaling activity. (established)
- Adaptation is **receptor-type-specific**: sustained attractant stimulation adapts (re-zeros) only the attractant-sensing channel; it does not change the sensitivity of repellent-sensing receptors in the same cluster. (established — this is why the chapter's script explicitly avoids framing adaptation as "moving a single global bias")
- This methylation-based adaptation drives the stimulated receptor back toward its own resting signaling state, regardless of outcome — it responds only to the receptor's own recent input history, not to any measure of whether the cell's behavior "worked." (established as a mechanistic description; the framing "it never reaches outcome" is a direct, uncontested consequence of the pathway having no outcome-sensing component, not a separate claim needing its own citation)

## Figures needing verification before use in narration or captions

*Carried over from the script's own fact-check pass (compiled 2026-08-02). These are recalled/order-of-magnitude figures, not sourced here — prefer qualitative language ("a change too faint to notice") over the specific number until verified.*

- "~10% change in CheY-P level swings the motor from mostly-running to mostly-tumbling" — the qualitative steepness is established; this exact percentage is unverified.
- "A few thousand receptors" and "a few hundred CheA copies" per cluster — right order of magnitude, exact ratio unverified.
- "Roughly a dozen receptors act as a coupled unit" — cluster/team size is reported to vary with methylation state; this specific number is unverified.
- "Four seconds" of adaptation-based memory — the timescale is genuinely on the order of seconds; this specific figure is unverified.
- Overall pathway signal gain ("tens-fold") — commonly cited in the chemotaxis literature but unverified here.

## Framing notes

- The chapter's central claim — that the chemotaxis pathway implements a weighted sum plus bias, followed by a threshold comparison — is a **pedagogical mapping onto real, established biochemistry**, not a claim that the cell literally performs arithmetic. The underlying facts (shared pool, copy-number-dependent influence, sigmoidal motor response) are established; "weighted sum" and "bias" are narration-level framings of those facts. (plausible as a teaching model; should not be overstated as the field's own terminology)
- The if/else framing (run vs. tumble as mutually exclusive branches) is faithful rather than decorative specifically because (a) the motor response is a genuine threshold/switch, and (b) run and tumble are mechanically exclusive states — not because biologists describe the pathway using "if/else" language themselves.
