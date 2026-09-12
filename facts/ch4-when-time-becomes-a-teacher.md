# Facts — When Time Becomes a Teacher

*This file holds facts specific to this chapter.*

## STDP (spike-timing-dependent plasticity)

- STDP is a real, well-documented refinement of Hebbian plasticity in biological synapses: when a presynaptic neuron fires shortly *before* a postsynaptic neuron, the synapse from the first to the second tends to strengthen; when the presynaptic neuron fires shortly *after*, the synapse tends to weaken. (established)
- The script's dating — "discovered in real brains in the 1990s" — matches the period when STDP was characterized in detail in experimental neuroscience (e.g., work in the mid-to-late 1990s established the timing-dependent asymmetry at central synapses). The general decade is correct; specific papers/researchers are not named in the script and are not verified here. (established in broad strokes; specific attributions unverified)
- Framing STDP as "Hebb's rule with an arrow of time" is an accurate, commonly used characterization — STDP is a temporally asymmetric refinement of the same co-activity-based principle Hebb described. (established characterization)

## TD Learning (Temporal Difference Learning)

- Temporal Difference Learning — updating a prediction based on the difference between a later observed outcome and the earlier predicted value — was formalized by Richard Sutton, commonly dated to his 1988 paper ("Learning to Predict by the Methods of Temporal Differences"). (established, matches the standard history of reinforcement learning)
- TD Learning is broadly credited as a founding/foundational algorithm of reinforcement learning as a field. (established)
- **Broad lineage claim needing care:** "Modern RL systems all build on TD Learning, including AlphaGo, robotic control, and the RLHF stage of training large language models." This compresses a real but more varied lineage:
  - AlphaGo's training does use TD-learning-style value estimation alongside policy learning and Monte Carlo Tree Search — reasonably characterized as building on TD ideas. (plausible)
  - Robotic control RL spans many algorithm families; some use TD-style value learning, others (e.g., pure policy-gradient or evolutionary methods) do not depend on TD learning specifically. (the blanket claim overstates uniformity — plausible as "a major lineage," not accurate as "all systems")
  - RLHF (reinforcement learning from human feedback), as commonly used to fine-tune large language models, typically uses policy-gradient methods (e.g., PPO) with a learned reward model — these are RL techniques descended from the broader RL tradition that TD learning helped found, but are not TD learning applied directly. Calling RLHF a direct build on TD Learning is a simplification. (plausible as loose intellectual lineage; not precise as a technical claim)

## Eligibility traces

- In AI/reinforcement learning, the eligibility trace is a well-established, formally defined mechanism (introduced alongside TD learning in the Sutton/Barto RL tradition): each state or action-value estimate keeps a decaying trace of recent involvement, used to distribute credit for a later reward back across recently active components. (established as an AI/RL concept)
- **Biological eligibility traces are less settled than the AI concept.** The script presents a biological "chemical mark on synapses" that fades over time as a direct, established analog to the AI eligibility trace, bridging delayed reward to past synaptic activity. Candidate biological mechanisms for such a trace (e.g., short-lived calcium signals or molecular tags at recently active synapses, sometimes discussed under "synaptic tagging") are an active and still-developing area of neuroscience research, not a single settled, named mechanism on par with STDP's experimental support. (plausible/speculative as stated — the AI-side concept is established; its exact biological implementation is not as firmly established as the script's flat description suggests)

## Framing notes

- The "false alarm" scenario (Beats 2–3: Bila learning to avoid harmless ripples because they coincided with a predator strike) is a narrative illustration of Hebbian learning's blind spot, not a claim about a documented organism's behavior. (framing, not a checkable fact)
- No specific numeric figures (percentages, exact timescales, counts) appear in this chapter needing the "unverified figures" treatment from ch1 — the checkable items are the two attributions above (STDP timing/decade, Sutton 1988) and the broad lineage claim about RLHF/AlphaGo/robotics.
