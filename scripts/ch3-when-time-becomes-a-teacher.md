# Chapter 3 — When Time Becomes a Teacher

*Cause comes before effect.*

## Overview

Bila has been learning, but her learning has been time-blind — Hebb's rule strengthens any connection between cells that fire close together, whether one caused the other or just happened nearby. This chapter introduces the refinement: when the brain notices which signal came *first*, it can tell cause from coincidence. Biologically, this is *spike-timing-dependent plasticity* (STDP). Mathematically, this is *TD Learning* — the founding algorithm of *reinforcement learning*. With *eligibility traces* (the fading memory of recent activity), delayed rewards can reach back through time to update past predictions. The Closing points toward Chapter 4: complex inputs need structure beyond a single cluster.

## Key Concepts Introduced in Chapter 3

### 3.1 STDP (Spike-Timing-Dependent Plasticity)

The refinement of Hebbian learning that introduces time order as a parameter. When neuron A fires *before* neuron B, the synapse from A to B strengthens (A is a candidate cause of B). When A fires *after* B, the synapse weakens (A is not a cause). Discovered in real brains in the 1990s. It is Hebb's rule with an arrow of time — and it is how nervous systems distinguish cause from coincidence.

### 3.2 TD Learning (Temporal Difference Learning)

An AI algorithm formalized by Richard Sutton in 1988 that learns to predict future outcomes by minimizing the difference between predicted and actual results. The founding algorithm of *reinforcement learning* — the branch of AI that studies how an agent learns to maximize reward through interaction with its world. Modern RL systems all build on TD Learning, including AlphaGo, robotic control, and the RLHF stage of training large language models.

### 3.3 Eligibility Traces

A "fading memory" mechanism that lets delayed rewards reach back through time to update past predictions or actions. Each synapse (in biology) or learning element (in AI) keeps a trace of recent activity. The trace decays over time, but lasts long enough that a reward arriving seconds later — or longer — can identify which past activity to credit. The trace is the bridge across time.

## Part 1 — The Story

### Act 1 — A Puzzle

#### Beat 1 — Same Ocean, Same Bila, Same Rule

**Visual:** Brief montage. We are back with Bila in her Ediacaran ocean. We see her body, her cluster, her connections subtly strengthening and weakening — a quick recap of Chapter 2's reveal. A caption appears softly: *fire together, wire together.* Then the camera holds on her, waiting.

**Narration:** We are still with Bila.

She has been learning, all along — we watched it in the last chapter. Connections strengthen with use. Connections weaken with disuse. *Fire together, wire together.* Her body is a record of her own life.

But the rule has a quiet problem. We did not see it the first time, because we were not looking for it.

Now we look for it.

#### Beat 2 — When Hebb Gets It Wrong

**Visual:** Bila in the water. A small dark patch drifts past her. Moments later, a predator strikes — she escapes, barely. Inside her body, the signals from the dark patch and the strike fire close together. Connections strengthen. *Cause learned.* Good.

But now a different scene: the next time, a strange ripple passes through the water just before another predator strike. The ripple had nothing to do with the predator — pure coincidence. Inside Bila's body, the signals from the ripple and the strike also fire close together. The connection strengthens. *Coincidence treated as cause.*

Show Bila now: she avoids the dark patch (correct). She also avoids strange ripples (false). She is acting on a false alarm.

**Narration:** Imagine Bila encounters a particular kind of dark patch in the water. Moments later, a predator strikes.

In her body, the signals fire close in time — the dark patch, then the strike. Hebb's rule strengthens the connection. Now, when Bila sees a dark patch like that one, her cluster says: *strike is coming.* She avoids it. Good.

But what if the dark patch had nothing to do with the strike? What if a strange ripple in the current, or a passing flash of light, happened to fire at the same moment? Hebb's rule strengthens *those* connections too.

Bila now avoids dark patches. She also avoids strange ripples. She also avoids flashes of light. Some of these are real warnings. Some are coincidence.

To Bila's brain, *simultaneous* and *consecutive* look the same. *Cause* and *coincidence* look the same.

Her learning ignores *time.* Now we see the cost.

### Act 2 — The Refinement

#### Beat 3 — The World Has Order

**Visual:** Slow shots of cause-effect sequences in the world. The shadow of a predator passes overhead, *then* the strike. The chemical signature of food drifts past, *then* the food itself arrives. The pattern is visible from outside: cause comes first; effect follows.

**Narration:** But in the world, things have order. The shadow comes before the strike. The smell comes before the food. *Always.* Causes come first. Effects follow.

If Bila could notice the *order* — which signal came before which — her brain could tell true warnings from coincidence.

That requires a different kind of synaptic rule. One that pays attention to time.

#### Beat 4 — STDP

**Visual:** Detailed view of two neurons connected by a synapse. Show them firing in different orders. When A fires *before* B (causal order), the synapse A→B grows brighter and thicker. When A fires *after* B (anti-causal order), the synapse A→B grows dimmer and thinner. The rule made visual. A caption appears: *spike-timing-dependent plasticity.*

**Narration:** Bila's lineage develops it.

A refinement of Hebb's rule. Connections still strengthen with use. But now, the *order* matters.

When two neurons fire close in time, the cluster looks at which came first. If neuron A fired *before* neuron B — A is a candidate cause of B — the connection from A to B grows stronger. If A fired *after* B, the connection from A to B grows weaker.

A small change. A big consequence. The cluster can now distinguish *cause* from *coincidence.*

In the 1990s, biologists found this rule operating in real brains. They named it after what it depends on: the timing of the spikes. *Spike-timing-dependent plasticity.* STDP.

Hebb's rule, with an arrow of time.

#### Beat 5 — The Dawn of Anticipation

**Visual:** Bila now navigates her world with sharper discrimination. She avoids the dark patch reliably (real warning). She ignores the strange ripple (coincidence). She seeks out smells that consistently precede food. Her behavior begins to *anticipate* — her body starts to act on what is about to happen, not just what is happening.

**Narration:** And from this small refinement, something new appears.

Bila now knows the difference between a cause and a coincidence. She has built, inside her body, a quiet model of what comes before what. She does not just react to what is happening anymore — she *expects* what comes next.

When she smells a certain chemical, her body starts preparing to eat — before food has arrived. When she senses a particular pattern, her body begins to flee — before danger has struck.

The brain has begun to predict.

The body is no longer just responding to the present. It is anticipating the future.

## Part 2 — The Math

#### Algorithm Beat A1 — TD Learning

**Visual:** Cut to an abstract diagram. A simple agent in a world. The agent has internal predictions — bars showing "how good things are about to be." Something happens: a reward arrives (a green flash) or a punishment (a red flash). The actual outcome is compared to the prediction. The prediction is adjusted up or down based on the difference. Math appears below:

> update = (what actually happened) − (what was predicted)

The diagram cycles: predict, observe, adjust. Predictions drift toward reality over time.

**Narration:** In AI, this same idea was formalized in 1988 by a researcher named Richard Sutton.

He called it *Temporal Difference Learning.* TD Learning.

The idea is simple. A learning system has a prediction of how good things are about to be. Something happens — a reward, a punishment, or just the next moment in time. The system compares its prediction to what actually came.

If reality was better than the prediction, the prediction should have been higher. Adjust it up.

If reality was worse, adjust it down.

In math:

> *update = (what actually happened) − (what was predicted)*

That's the whole idea. Predictions chase reality, over time.

This is the founding algorithm of *reinforcement learning* — the branch of AI that studies how an agent learns through reward. Bila's lineage had been running a biological version of it for hundreds of millions of years.

What we just described is the simplest form. AI has many variants in practice, each tuned for different cases. The core shape is the same: update predictions to chase reality.

#### Algorithm Beat A2 — Eligibility Traces

**Visual:** A sequence of events spread out in time. A creature takes Action 1, then Action 2, then Action 3, and finally a reward arrives many seconds later. Each action leaves a faint glowing "trace" behind it that slowly fades. When the reward arrives, the trace from each past action determines how much credit it gets. Earlier actions have weaker traces (more faded); recent actions have stronger traces. The trace is the bridge from the reward back through time.

**Narration:** But there is still a problem.

What if the reward comes much later than the action that caused it?

Say Bila swims down a particular current. Some time later — seconds, or minutes — she finds food at the end of it. Her cluster needs to figure out: which actions led to this food?

Hebb's rule only sees what fires nearly simultaneously. STDP only operates on the millisecond scale. But *real* cause-and-effect in the world can take seconds, minutes, even longer.

Biology's answer: every action Bila takes leaves a faint *trace* in her cluster — a chemical mark on the synapses that were just active. The trace fades over time, but it lasts long enough that a delayed reward can find its way back.

In AI, this idea was formalized as the *eligibility trace.* Each synapse keeps a trace that says: *"I was recently active."* When reward arrives, the trace tells the learning rule which synapse to credit. The longer ago the synapse fired, the weaker the trace — and the smaller the credit.

This is how the brain — and AI — learns from rewards that don't arrive immediately. The trace is the bridge across time.

## Closing

*A final section, after both story and math. What Bila's brain still cannot do.*

#### Beat C1 — But Not Structure

**Visual:** Bila in her world, now predicting and anticipating. She moves with quiet skill through her familiar landscape — chemical gradients, single signals, simple textures. Then the camera widens. We glimpse, far off in the distance, a different kind of creature — one with eyes. The world that creature sees is not chemical gradients but *shapes.* Light bouncing off forms. A fish that must be recognized regardless of where it appears in the visual field, regardless of size or distance. Bila's single cluster could not hold that. The creature with eyes is going to need something new.

**Narration:** Bila has come far.

She has a body that integrates signals. She has a cluster that learns. She has time-aware learning that can tell cause from coincidence. She has memory traces that let delayed rewards find their way home.

But her world is still simple — a few kinds of chemicals, a few kinds of actions, a world her single cluster can hold.

In a different kind of world — a world where light bounces off everything, where shapes appear and move, where a fish-form must be recognized regardless of size or position or distance — a single cluster is not enough.

The brain needs to build *features.* It needs *layers.* It needs *structure.*

That is the next chapter — when structure becomes visible.
