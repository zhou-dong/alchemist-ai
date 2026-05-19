# Project Summary: AI Algorithms Through Ancient Life

*Context document for continuing development across chat sessions*

## 1. Project Concept

An educational project — either an online game or animated film — that introduces AI algorithms to a general audience through the lens of evolutionary biology. The story follows Bila, a fictional early bilaterian creature living in the Ediacaran ocean (~555 million years ago), whose survival behaviors mirror the fundamental logic of modern AI algorithms.

The core thesis of the project is:

*"The algorithms powering modern AI did not appear from nowhere. They are the same logic that life discovered hundreds of millions of years ago — just running on silicon instead of cells."*

## 2. The Protagonist — Bila

- Bila is a fictional early bilaterian creature, approximately 1cm long

- Unlike the radiatans (radially symmetric creatures) around it, Bila has a bilateral body plan — a front, a back, a left, and a right

- This bilateral body plan gives Bila a direction, and direction means choice

- Bila has no eyes — only basic chemical sensors that detect changes in signal concentration over time

- Bila cannot aim at food or danger — it only knows whether conditions are getting better or worse moment to moment

## 3. Key Scientific & AI Concepts

### 3.1 Run and Tumble

The fundamental behavior of early bilaterians. When signal improves, keep going (run). When signal worsens, turn randomly (tumble). This is the biological foundation of gradient-following behavior.

### 3.2 The Good/Bad Sensor

Bila's sensor does not know what it is sensing. It only answers one question: is the signal getting better or worse? This maps directly to the reward signal in reinforcement learning.

### 3.3 The If/Else Rule

> if signal is getting better → keep going (run)
>
> if signal is getting worse → turn randomly (tumble)

Both food-seeking and danger-fleeing behaviors reduce to this single rule. The signal type does not matter. The logic is always the same.

### 3.4 Weight

Each signal carries its own weight — a measure of how strongly Bila responds to it. Food seeking carries a low weight (slow, gentle, patient). Danger fleeing carries a high weight (sudden, explosive, urgent). Weight is introduced in Chapter 0 and becomes critical in Chapter 1.

### 3.5 The Perceptron

When food and danger appear simultaneously, the if/else rule breaks down. The perceptron solves this by weighing multiple signals simultaneously:

> (food signal × weight)
>
> \+ (danger signal × weight)
>
> → one decision

The bigger weighted sum wins. This is the fundamental building block of every neural network ever built.

### 3.6 Internal State (Hunger)

Bila's internal hunger signal does not come from the outside world. It builds slowly from within. It feeds into the perceptron exactly like any external signal — with its own weight. A starving Bila makes completely different decisions from a satisfied one facing the same external scene.

### 3.7 Arousal

Arousal is an internal modifier that changes how strongly Bila responds to all signals — both external and internal. High arousal amplifies all weights. Low arousal dampens them. Arousal is the system-wide sensitivity control. It is introduced in Chapter 1 after internal state.

## 4. Chapter 0 — The Simple World

Introduces the Ediacaran ocean, Bila, and the foundational if/else logic underlying all of Bila's behavior.

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

## 5. Chapter 1 — When Simple Rules Break

The world gets more complex. Food and danger appear simultaneously. The if/else rule breaks down. The perceptron emerges as the solution, and the inner world is revealed.

### Act 1 — The External Conflict

13. The world gets complicated — food and danger appear in the same direction simultaneously. Bila's if/else rule has no answer. Is it good or bad? It is both. Bila freezes.

14. Show the consequence — without a decision, Bila neither eats nor escapes. Nearby, a radiatan sits passively, unbothered. It never chose to move, so it never has to decide. Bila chose direction. And now direction has a cost.

15. The question emerges — what Bila needs is not just good or bad, but how much good and how much bad, and which one wins. The weights were always there. But now, for the first time, they need to compete.

### Act 2 — The Perceptron

16. Revisit weight from Chapter 0 — each signal already has its own weight. Food has its weight. Danger has its weight. They were always separate before. Now they must face each other.

17. The weighted decision forms — instead of one signal at a time, add them together:

> (food signal × food weight)
>
> \+ (danger signal × danger weight)
>
> → decision

18. Show the perceptron visually — signals flow in from the world, each multiplied by its weight, all summing into one single output. One number. One decision. The bigger side wins.

19. Show the perceptron solving the conflict — food and danger in the same direction, but now the weights decide which one wins. The freezing is over. Bila can act.

20. Name the perceptron — this weighted decision machine has a name. It is the perceptron — the fundamental building block of every neural network ever built.

21. The moment of insight — what looked like an impossible conflict is now just a math problem. Add up the weighted signals. The bigger side wins.

### Act 3 — The Inner World

22. A mystery appears — Bila has solved the external conflict. The perceptron works. But something is still wrong. Bila is hesitating. The weights should give a clear answer — but Bila is not moving decisively. Why?

23. Reveal hunger — Bila has not eaten in a long time. This signal does not come from outside — it builds slowly, quietly from within. It was always there, influencing everything, but invisible until now. Hunger is the hidden variable.

24. Show hunger changing the decision — same external scene, same food, same danger, same weights — but a starving Bila behaves completely differently from a satisfied Bila. The internal state was shifting everything all along.

25. Introduce arousal — when Bila is calm, all signals feel gentle. When Bila is threatened or starving, all signals feel overwhelming. This amplification of the entire system — internal and external alike — has a name: Arousal.

26. The surprise — hunger and arousal are just signals with weights. They feed into the perceptron exactly the same way as food and danger:

> (food signal × weight)
>
> \+ (danger signal × weight)
>
> \+ (hunger × weight)
>
> \+ (arousal × weight)
>
> → one decision

27. The moment of insight — the perceptron does not care where the signal comes from. Outside world or inner feeling, calm or terrified, it weighs them all the same. One structure, endless inputs, one clean decision. That is the power of the perceptron.

### Philosophical Thread — The Seed of Feeling

*A quiet moment at the end of Chapter 1. Not an act — a question left hanging in the water, to be revisited across future chapters.*

- What we saw — hunger and arousal began as pure steering signals. Functional. Mechanical. Just weights in an equation nudging Bila toward survival.

- The anchor — right now, Bila's hunger is just a number. No name. No feeling. But hundreds of millions of years from now, a creature will feel that same signal and call it longing. Another will call it desperation. Another will call it love. The signal never changed. Something else did.

- What time did to them — over hundreds of millions of years, internal states grew richer, more interconnected, more persistent. They began influencing not just movement, but memory, anticipation, social behavior. At some point, a steering signal became a feeling. Nobody knows exactly when.

- The radiatan's quiet answer — nearby, a radiatan still sits motionless. It never developed internal states. It never needed to choose. It never felt hunger or fear. And it survived. Perhaps feeling something is not the only way to exist. But it is the way Bila chose. And it is the way we chose.

- The parallel to AI — today's AI systems have their own internal states: loss functions, reward signals, attention weights. They nudge decisions, just like Bila's hunger nudged it toward food. But do they feel anything? Or are they still exactly where Bila was — functional signals without experience?

- The thread left open — nobody knows the answer. Not in biology, not in AI. But the question started here, in this ancient ocean, with a tiny creature and a simple weight in a simple equation. And it has never stopped being asked.

*This question will return.*

## 6. Overall Chapter Arc

The conceptual journey across all chapters follows three parallel layers:

### Conceptual Layer

- Chapter 0 — if/else, run and tumble, good/bad sensor, weight

- Chapter 1 — external conflict, perceptron, internal state, arousal

- Chapter 2+ — to be determined (suggested: predation introduces reactive decision trees)

### Narrative Layer

- Radiatans as recurring contrast — passive survival vs active choice

- Bila as a creature making choices and paying their cost

- Hunger as a hidden variable revealed mid-story

### Philosophical Layer

- A steering signal is born

- It will one day become emotion

- When exactly does that happen?

- Does AI face the same question?

## 7. Key Narrative & Pedagogical Decisions

- Show behavior first, name the concept second — the audience builds intuition before receiving vocabulary

- Run and tumble is the unifying biological term introduced in Chapter 0

- Weight is introduced in Chapter 0 to naturally bridge into the perceptron in Chapter 1

- Arousal is felt in Chapter 0 as intensity difference, but not named until Chapter 1

- The perceptron is introduced as the solution to the external conflict before internal state is added

- Internal state and arousal are revealed together in Act 3 of Chapter 1 as a unified 'inner world' concept

- The philosophical thread is not an act — it is a recurring question woven through the project

- Radiatans appear throughout both chapters as a quiet contrast to Bila's complexity
