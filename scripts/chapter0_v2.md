# Chapter 0 — The Simple World

*Outline document — extracted from project_summary, May 2026*

## Overview

Introduces the Ediacaran ocean, Bila, and the foundational if/else logic underlying all of Bila's behavior.

## Key Scientific & AI Concepts Introduced in Chapter 0

### 0.1 Run and Tumble

The fundamental behavior of early bilaterians. When signal improves, keep going (run). When signal worsens, turn randomly (tumble). This is the biological foundation of gradient-following behavior.

### 0.2 The Good/Bad Sensor

Bila's sensor does not know what it is sensing. It only answers one question: is the signal getting better or worse? This maps directly to the reward signal in reinforcement learning.

### 0.3 The If/Else Rule

> if signal is getting better → keep going (run)
>
> if signal is getting worse → turn randomly (tumble)

Both food-seeking and danger-fleeing behaviors reduce to this single rule. The signal type does not matter. The logic is always the same.

### 0.4 Weight

Each signal carries its own weight — a measure of how strongly Bila responds to it. Food seeking carries a low weight (slow, gentle, patient). Danger fleeing carries a high weight (sudden, explosive, urgent). Weight is introduced in Chapter 0 and becomes critical in Chapter 1.

## Chapter 0 — Full Act Structure

### Act 1 — Behavior

1.  Introduce the ancient ocean — most animals are radiatans: radially symmetric, no front, no back, no direction. Passive, patient, waiting. They have survived this way for hundreds of millions of years.

2.  Bila appears — bilateral body, a front and a back. Unlike the radiatans, Bila has a direction. Direction means choice.

3.  Show food-seeking behavior — food density increasing → keep going. Food density decreasing → turn randomly. Movement is slow, gentle, drifting, patient. No urgency.

4.  Show danger-fleeing behavior — danger getting closer → turn randomly. Danger fading → keep going. Movement is sudden, explosive, urgent. Same creature, completely different energy.

### Act 2 — The Rule

5.  The first surprise — run and tumble: food seeking and danger fleeing look completely different, but strip them down and you see the same two moves: run and tumble. Biology has a name for this: run and tumble.

6.  The second surprise — the same logic: look at what triggers each behavior side by side:

Food seeking:

> if food signal getting better → run
>
> if food signal getting worse → tumble

Danger fleeing:

> if danger signal getting worse → tumble
>
> if danger signal getting better → run

Strip away the labels and one single logic remains:

> if signal is getting better → keep going
>
> if signal is getting worse → turn randomly

The signal does not matter. The rule is always the same.

7.  Reveal the good/bad sensor — Bila's sensor does not know food from danger. It only answers one question: is it getting better or worse? Good → run. Bad → tumble. That is the entire sensor.

8.  Reveal the if/else rule — underneath run and tumble is something even simpler: one sensor, one rule, two survival behaviors.

### Act 3 — Weight

9.  Revisit the two behaviors — now look closer at the intensity. Food seeking was slow and gentle — a low weight, a quiet signal. Danger fleeing was sudden and explosive — a high weight, an overwhelming signal. Each signal carries its own weight.

10. Introduce weight — same rule, same sensor, but the weight of each signal is different:

> if good → keep going (scaled by weight)
>
> if bad → turn randomly (scaled by weight)

11. The third surprise — weight was already there: the audience now realizes that back in Act 1, the weights were already different. Food carried low weight. Danger carried high weight. It was always there — we just did not have a name for it yet.

12. The moment of insight — one sensor, one rule, one weight per signal. And from that, life finds its way. Nearby, a radiatan sits motionless, waiting. It has survived without any of this. But Bila is going somewhere.
