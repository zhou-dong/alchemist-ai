# Facts — When Vera Learns to Choose

*This file holds facts specific to this chapter.*

> **Status note:** like ch2/ch5/ch6, this script carries no established/plausible/speculative tagging — real RL/neuroscience history sits next to the Vera narrative with identical confident phrasing. This chapter contained the single highest-priority correction found across the whole facts-extraction pass: the 2024 Nobel Prize in Chemistry claim below, **fixed in the script on 2026-09-12** alongside the repeated ch6 Physics Prize issue.

## Reinforcement learning framework — core terminology

- The four-component framing of RL (agent, environment, reward signal, policy) and the actor-critic architecture (a critic that estimates state values, an actor that maintains a policy and is updated using the critic's error signal) are standard, well-established components of RL as a field, consistent with the Sutton & Barto textbook tradition. (established terminology)
- The TD error formula given — `TD error = [reward received + γ × V(next situation)] − V(current situation)` — is the standard TD-error (one-step TD(0)) update used in actor-critic methods. (established, matches standard RL formalism)
- The exploration-exploitation tradeoff, and the "noisy TV problem" (a curiosity-driven agent becoming fixated on an unpredictable but uninformative signal source) are both real, named, and discussed problems in the RL literature — the noisy TV problem is specifically associated with critiques of prediction-error-based intrinsic-curiosity methods (e.g., work following Pathak et al.'s curiosity-driven exploration, discussed explicitly as a failure mode in papers such as Burda et al., "Large-Scale Study of Curiosity-Driven Learning," ~2018). (established as a named problem in the RL literature; specific paper/date not verified here)
- Hierarchical RL, model-based RL (and "model bias" as its failure mode), reward shaping (and "reward hacking" as its failure mode), attention/transformer architectures as a fix for fixed-horizon memory, and Monte Carlo Tree Search are all real, standard techniques/concepts in modern RL and deep learning research, accurately characterized at a high level in the script. (established, general characterizations)

## History — Sutton, Barto, and TD Learning

- Richard Sutton formalized Temporal Difference Learning, commonly dated to his 1988 paper (consistent with ch4's dating). (established)
- Richard Sutton and Andrew Barto published *Reinforcement Learning: An Introduction* in 1998 (a second edition followed in 2018) — it is widely regarded as the field's foundational textbook. (established)

## The dopamine/basal-ganglia connection

- Wolfram Schultz's findings that midbrain dopamine neuron firing patterns in monkeys match the TD-error signal are real and well-established in neuroscience (consistent with ch4's treatment of dopamine as a TD-error-like signal). (established)
- The basal ganglia are real subcortical structures present across vertebrates, and there is a substantial body of computational neuroscience work modeling basal ganglia circuitry (particularly the direct/indirect pathway and dopaminergic modulation of striatal synapses) as implementing something like actor-critic reinforcement learning. This is a genuine, actively studied research program (e.g., work associated with researchers like Kenji Doya, Peter Dayan, and others modeling basal ganglia as an actor-critic system), not an invented analogy. (plausible/well-supported as a leading computational model — an active research framework with real experimental support, but not a settled, complete, one-to-one mapping the way STDP's basic timing rule is settled). **The script's phrasing — "The biological actor-critic architecture was not a metaphor. It was a description" — should be softened**: this is the best-supported current model of basal ganglia function, not an uncontested, fully resolved identity between the basal ganglia and the actor-critic algorithm. (needs softening from established-fact phrasing to well-supported-model phrasing)

## AlphaGo and Deep RL history

- DeepMind's AlphaGo defeated Lee Sedol, a top-ranked professional Go player, in a five-game match in March 2016 (AlphaGo won 4–1). (established)
- AlphaGo's architecture combined deep neural networks (a policy network and a value network, trained via a combination of supervised learning on human games, self-play, and reinforcement learning) with Monte Carlo Tree Search. Describing this as "a deep neural network trained by RL to evaluate board positions as the critic" combined with "a policy network as the actor" is a reasonable simplification of the actual architecture, which also relied on supervised pretraining and MCTS search integration beyond a pure actor-critic loop. (established at a high level; the script's actor-critic framing is a simplification of a more hybrid system)
- DeepMind's Deep Q-Network (DQN) paper — combining Q-learning (a TD-based method) with a convolutional neural network to play Atari 2600 games from raw pixels — was published in 2013 (NeurIPS workshop version) and 2015 (the *Nature* paper, "Human-level control through deep reinforcement learning"). "Three years before AlphaGo" (2013 to 2016) is roughly accurate depending on which DQN publication is used as the reference point. (established, matches standard AI history)

## The 2024 Nobel Prize claims — corrected

- **Repeated ch6 issue, now fixed:** the original script line omitted that Hinton's 2024 Physics Nobel was shared jointly with John Hopfield. See `facts/ch6-when-learning-goes-deep.md` for the full correction — the same fix was applied here on 2026-09-12.
- **Higher-priority error, now fixed:** the original script stated "the 2024 Nobel Prize in Chemistry was awarded partly for work on protein structure prediction using deep learning systems trained with RL-adjacent methods." The 2024 Nobel Prize in Chemistry was awarded to **David Baker** (for computational protein design) and jointly to **Demis Hassabis and John Jumper** (for protein structure prediction, i.e., AlphaFold2). AlphaFold2 is trained primarily via **supervised learning** on known protein structures (with techniques like self-distillation on predicted structures), not reinforcement learning — describing its method as "RL-adjacent" misrepresented how the system works. **Fixed in the script on 2026-09-12**: the relevant line now names all three laureates and correctly states AlphaFold2 was trained by supervised, not reinforcement, learning. (established, now correctly reflected in the script)

## Framing notes

- The "policy as character" framing (Vera's policy as "in some sense, her") and the closing philosophical questions ("when does a policy become a will?") are the chapter's own rhetorical/philosophical devices, paralleling the philosophical threads in earlier chapters — not claims requiring independent verification. (framing)
- The claim that curiosity-driven exploration in Bila's run-and-tumble (Chapter 0) is "the same logic... in embryonic form" as curiosity-driven RL exploration is a narrative/pedagogical parallel drawn by the chapter, not a claim that bacterial chemotaxis literally implements an intrinsic-curiosity reward mechanism as understood in RL. (framing — the chemotaxis mechanism itself is covered in `facts/ch1-the-world-before-learning.md` and does not include an intrinsic-novelty-reward component)
- "The convergence moment that Chapter 4 deferred to Chapter 6 arrives here as its historical precursor" — a structural/narrative note about the story's own pacing, not a factual claim.
