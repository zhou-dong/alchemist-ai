# Chapter 2 — When Weights Learn

*When the body remembers what worked.*

## Overview

Bila has been learning, all along — we just hadn't watched it happen. This chapter zooms in on the mechanism: how the connections between her neurons subtly shift with every signal that passes through, and how those shifts shape what she becomes. Biologically, this is *synaptic plasticity*, captured by Hebb's famous rule: *cells that fire together, wire together.* Mathematically, this is the *perceptron learning rule* — the simplest learning algorithm and the foundation of every machine learning system. The Closing points toward Chapter 3: when time itself becomes a teacher.

## Key Concepts Introduced in Chapter 2

### 2.1 Synaptic Plasticity / Hebbian Learning

The connections between Bila's neurons — synapses — are not fixed. Every time signals pass through, they change strength. Connections between neurons that fire together get stronger; connections between neurons that don't, weaken. Donald Hebb captured this in 1949 with one of the most-quoted sentences in neuroscience: *"cells that fire together, wire together."* This is the foundational form of biological learning. It works in nearly every nervous system on Earth, and its biochemistry is ancient.

### 2.2 The Perceptron Learning Rule

The mathematical version of weight-updating, articulated by Frank Rosenblatt in 1958. After a perceptron produces an output, compare it to the correct answer. If wrong, adjust each weight in the direction that would have produced the right output. The update rule:

> new weight = old weight + (target − actual output) × input

The first learning algorithm in machine learning. Every algorithm that came after — backpropagation, gradient descent, modern deep learning — descends from this idea. The connection that contributed to a wrong outcome is the one that should change.

## Part 1 — The Story

### Act 1 — A Puzzle

#### Beat 1 — Back to Bila

**Visual:** The same Ediacaran ocean as Chapter 1. Cool, dim, blue. Bila drifts through her world. She moves with the same intent we saw before — toward food, away from danger. Her body the same. Her cluster the same. We are back where we left her.

**Narration:** Back to Bila.

Same ocean. Same body. Same little cluster of cells inside her, weighing what comes at her, deciding what to do.

Days have passed. Weeks. Maybe months. We have been watching her live her life — and life is a long thing, even for a creature the length of a fingernail.

But if you watch closely — closer than we did last time — you can see that she has been changing. Quietly. All along.

#### Beat 2 — She Has Changed

**Visual:** Side-by-side comparison of Bila's behavior at two points in her life. Early Bila vs. Now Bila in similar situations. The differences are subtle but real. A path she used to take, she now takes more cautiously. A smell she used to follow eagerly, she now follows less directly. A particular dark place she used to drift through, she now avoids.

**Narration:** Look at her now, compared to her early life.

She is still Bila. Same body. Same cluster. But she does some things a little differently.

A smell she used to follow eagerly — she still follows it, but with a touch more caution. A current near a particular rock — she used to drift right through it; now she gives it a wider arc. The shape of the darkness where danger came that one time — she's slower to enter that kind of place than she used to be.

The cluster is the same. The cells in it are the same. So what is different?

Something *between* the cells. Something we have not zoomed in close enough to see.

### Act 2 — The Mechanism

#### Beat 3 — Zoom Inside

**Visual:** Slow zoom into Bila's cluster, deeper than we've gone before. Past the cells themselves, into the spaces between them. Show synapses — the tiny junctions where one cell touches another and passes a signal. Highlight some synapses growing brighter and thicker (strengthening), others growing dimmer and thinner (weakening). The whole cluster is alive with subtle change.

**Narration:** Zoom in. Closer than we have gone before.

Inside Bila's cluster, the neurons are connected to each other by tiny junctions — places where one cell touches another and passes a signal along. We did not look at these last time. They were too small.

The junctions are not fixed.

Every time a signal passes through one of them, the junction changes — just a little. If the cells on either side fired together — both active at the same moment — the junction grows stronger. The next signal will pass through more easily. If they did not fire together, the junction grows weaker. The signal fades more.

Bila's wiring has been rewriting itself, every moment of her life. We just had not zoomed in close enough to see.

#### Beat 4 — Cells That Fire Together

**Visual:** A clean abstract diagram: two neurons, connected by a synapse. They fire together — the synapse grows brighter and thicker. They fire separately — the synapse grows dimmer and thinner. The rule made visual. Soft caption appears: *cells that fire together, wire together.*

**Narration:** There is a name for this.

A psychologist named Donald Hebb wrote it down in 1949, in a sentence so simple it has been quoted ever since:

*"Cells that fire together, wire together."*

When two neurons are active at the same moment, the connection between them strengthens. When they are not, the connection weakens. That is the whole rule.

In Bila's cluster, this happens constantly. Every signal that flows through her body, every decision she makes, leaves a trace in the wiring.

She is becoming a record of her own life.

#### Beat 5 — Two Bilas

**Visual:** Two creatures, side by side, identical at the start. Same body, same starting cluster. Then the visual splits: each grows up in a different part of the ocean. One in a place with plenty of food and few predators. Another where dangers are constant. Time-lapse: their clusters' connections develop differently. The first one's cluster strengthens toward openness, exploration. The second's strengthens toward caution, alertness. At the end, both look the same from outside — but their wirings tell different stories.

**Narration:** And from that simple rule, something new appears in the world.

Memory. Not the kind we have — a story we can tell ourselves. But the simpler kind: a body that has been shaped by what happened to it.

Imagine two Bilas, born identical. Same genes. Same body. Same starting cluster.

One grows up in a part of the ocean with plenty of food, few dangers. Her cluster's connections strengthen toward openness, toward exploration, toward boldness.

The other grows up where predators are common. Her cluster's connections strengthen toward caution, toward alertness, toward retreat.

Same starting body. Two different creatures, by the time they are grown.

This is the first time, in the history of life, that two creatures with identical starting bodies can become different from each other — *because of what their lives have been.*

A new kind of individuality. Woven, quietly, into every connection in Bila's body.

## Part 2 — The Math

#### Algorithm Beat A1 — The Perceptron Learning Rule

**Visual:** Cut to the abstract perceptron diagram from Chapter 1, but now animated. A training example arrives at the inputs. The perceptron produces an output. A "correct answer" appears next to it. The difference between them gets used to update each weight — the dials shift slightly. The formula appears below:

> new weight = old weight + (target − actual output) × input

The diagram cycles: example arrives, output, comparison, weights shift. Each cycle, the weights drift a little closer to producing the right answer.

**Narration:** On paper, this has a name. And a simple equation.

A perceptron — like Bila's cluster — has inputs, each multiplied by a weight, summed, run through a threshold, output.

In the math of learning, we show the perceptron an example. It gives an output. We tell it whether the output was right or wrong.

If it was wrong, we adjust each weight a little, in the direction that would have produced the right answer.

In math:

> *new weight = old weight + (correct answer − actual answer) × input*

That is the entire rule. The perceptron learning rule — written down by Frank Rosenblatt in 1958, and the simplest learning algorithm in all of machine learning.

It's not exactly what Hebb described biologically. Hebb's rule is about co-activity; the perceptron rule is about error. But they are kin. Both say: *the connection that contributed to the wrong outcome is the one that should change.*

#### Algorithm Beat A2 — Learning from Examples

**Visual:** Show a perceptron being trained over time. A stream of examples arriving. The output gradually shifting from "wrong" (red) to "right" (green) as the weights stabilize. Time-lapse of training: the dial-weights drift, settle, find their place. By the end, the perceptron is correctly classifying examples it has never seen before.

**Narration:** And from this rule, something happens that does not happen in a fixed perceptron.

Show it an example — a pattern of inputs paired with the correct answer. It guesses. We tell it whether it was right. The weights shift, slightly, in the direction that would have produced the right answer.

Show another example. It guesses again. Closer this time.

A third. A fourth. A thousand.

After enough examples, the perceptron is no longer guessing. It is *answering* — even on examples it has never seen before. Its weights have been shaped by the examples themselves. It has *learned* to recognize the pattern.

This is what biologists call learning. It is also what every machine learning system on Earth, today, does — at the heart of it, with a thousand additional layers and tricks on top.

A perceptron and a training signal. That is enough to begin.

## Closing

*A final section, after both story and math. What Bila's learning still ignores.*

#### Beat C1 — But Not Time

**Visual:** Back to Bila's cluster. Two scenes side by side. Scene A: signal A fires, signal B fires moments later. The cluster strengthens the connection between them. Scene B: signals A and B fire at the same instant, no causal connection between them. The cluster *also* strengthens the connection. Caption appears between them: *the cluster cannot tell the difference.*

**Narration:** Bila has learned. What worked, became stronger. What didn't, became weaker.

But her learning ignores something: *time.*

When two signals fire close together, her cluster strengthens their connection. But it doesn't yet know *which came first.* It doesn't know whether one caused the other, or just happened nearby. To Bila's cluster, *simultaneous* and *consecutive* look the same.

In the world, time matters. Order matters. Cause comes before effect. The shadow came before the strike. The food smell came before the satisfaction. To learn that *A made B happen,* you need to notice that A came first.

That is the next chapter — when time becomes a teacher.
