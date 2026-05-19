# Chapter 4 — When Structure Becomes Visible

*Full structure document — developed in session, April 2026*

## Overview

Chapter 3 left Bila with a genuine but narrow anticipation. She could predict sequences she had lived through exactly as she had lived them. But a new predator appeared — structurally familiar, never encountered before — and Bila was blind to it. The instance-based system had hit its ceiling. The ocean kept producing novelty. Bila could not generalise.

Chapter 4 moves forward in time. The Ediacaran ocean is gone. The Cambrian explosion has transformed the world — an arms race of predators and prey, shells and eyes and speed and complexity, a sensory environment so rich that the old architecture cannot cope with it. A new protagonist appears: Vera, an early vertebrate, one centimetre long, navigating an ocean that Bila would not have recognised.

Vera does not just have more sensors than Bila. She has a nervous system that processes those sensors in a fundamentally new way — in layers, each one automatically discovering what patterns to extract from the signals below it, handing increasingly meaningful representations upward. This is hierarchical feature extraction. The architecture is inherited. The content of each layer — what it learns to detect — is discovered through experience. It is the same principle that software engineers rediscovered as abstraction layers, and that AI researchers formalised as the convolutional neural network. But in Chapter 4, the biology comes first. The name comes after.

The core thesis of Chapter 4:

*“When the world becomes too rich to face all at once, the solution is not to simplify the world. It is to face it in stages — each stage automatically discovering what matters, discarding what doesn’t, handing something cleaner to the next layer. That principle is older than any algorithm. It is older than any computer. It is as old as the first creature that had enough sensors to need it.”*

## Key Scientific & AI Concepts Introduced in Chapter 4

### 4.1 The Sensory Revolution

The Cambrian explosion was not just a proliferation of bodies — it was a proliferation of sensors. Eyes appeared, detecting edges, motion, contrast, depth. Lateral line equivalents spread across body surfaces, reading pressure waves from every direction simultaneously. Chemical receptors multiplied into arrays capable of detecting not just better/worse but directionality, concentration gradients across space, multiple chemical signatures at once.

This was not incremental improvement. It was a phase transition in the dimensionality of sensory input. Bila received a trickle of information from the world. Vera receives a flood.

### 4.2 The Data Richness Problem

More sensors created a new problem that had never existed before. The nervous system was suddenly receiving signals from hundreds of receptors simultaneously. The old architecture — weigh all signals, sum them, produce one output — broke down. Not because it was wrong, but because the raw input was now too vast and too noisy to weigh directly in one step.

Simpler solutions were tried by evolution and failed. Ignoring most signals discarded critical distinctions. Averaging everything together collapsed the difference between a predator striking from above and a harmless shadow drifting past. Selecting only the strongest signal missed the combinations that carried the real meaning. Every simplification threw something away. And in the Cambrian ocean, throwing away information got you killed.

### 4.3 The Bilaterian Ceiling — Novelty and Variability

Bila’s world had a solution to novelty. When a new threat appeared carrying a new chemical signature, evolution could — across many generations — add a new receptor tuned to that specific signature. Slow, but it worked. Each new sensor was dedicated to exactly one new thing. One receptor for this food source. One receptor for that predator. One new problem, one new sensor.

The bilaterian sensor asks: is this the specific thing I was built to detect? It can only ever answer yes or no to that one question. To ask a new question, you need a new sensor — built by evolution, across generations. The sensor is hardcoded to its question. The question cannot change within a lifetime.

But novelty is only the first problem. The second problem is deeper: even familiar things never arrive with the same signal twice. A known predator approaches from a different angle — different pressure signature. The same food source drifts through a different chemical background — different concentration profile. A known creature calls from a different distance — different amplitude, different frequency mix. The specific sensor was tuned to one exact signal pattern. The world never presents that exact pattern twice.

This is the invariance problem. The same thing — the same predator, the same food, the same danger — arrives wrapped in different signals every single encounter, depending on distance, direction, environmental conditions, and what else is present simultaneously. A hardcoded specific sensor cannot handle this. It would need infinite variants just to recognise one familiar thing reliably across real-world conditions.

So the bilaterian approach fails on two fronts: it cannot handle novelty because adding new sensors takes generations, and it cannot reliably handle even familiar things because real-world signal variability defeats specific pattern matching. What worked in the Ediacaran ocean breaks down not because it was wrong — but because the world became too variable and too fast.

### 4.4 Hierarchy as the Natural Solution

The nervous system couldn’t process all those raw signals at once. So it began processing them in stages. First, detect simple local patterns in the raw signals — an edge, a motion, a pressure change. Then detect combinations of those patterns — something moving, something large. Then recognise meaningful structures from those combinations — predator, prey, obstacle. Then decide.

Not because anyone designed it that way. But because creatures whose neurons organised hierarchically survived better than creatures whose neurons tried to weigh everything at once. Each intermediate layer made the next problem more tractable. The hierarchy compressed the richness of the world without discarding what mattered.

This is the same principle that software engineers independently rediscovered — any problem too complex to solve directly can be solved by adding a layer of abstraction. Face the complexity in stages. Each layer hides what’s beneath it behind a cleaner interface. The world becomes manageable not by becoming simpler, but by being faced one level at a time. In computer science it became almost a joke: when something is too hard, just add another layer. Vera’s nervous system was not joking. It was surviving.

### 4.5 Architecture Inherited, Patterns Learned

The hierarchy is the capacity. Experience fills in the content.

Vera was not born knowing to look for edges in the first layer, shapes in the second, objects in the third. She was born with a nervous system architecture capable of learning those things — layers of neurons capable of adjusting their connections based on what signals consistently co-occur and what outcomes those signals predict. What each layer actually learns to detect is discovered through experience, not inherited through evolution.

This is the critical distinction from the bilaterian approach. A bilaterian receptor is hardcoded at birth — the question it asks is fixed by evolution and cannot change within a lifetime. Vera’s hierarchy asks no specific question at birth. The architecture simply creates the capacity to learn questions. Experience — living in the Cambrian ocean, encountering its signals, surviving its consequences — is what fills each layer with content.

The first layer did not arrive knowing that edges are useful. It discovered edges because edges turned out to be the most stable, most predictive compression of raw visual signals. The second layer did not arrive knowing that combinations of edges form shapes. It discovered shapes because shapes turned out to be the most stable compression of edge patterns. Each layer automatically finds the representations that are most useful for the layer above it. Nobody designed the content. The architecture learned it.

### 4.6 Invariance as the Mechanism of Generalisation

When each layer learns features that are stable across surface variation — features that capture what something is rather than exactly how it arrived — something powerful follows as a structural consequence: those features can match things never seen before.

A new predator arrives with completely different surface signals — different chemical signature, different colouring, different size. But at the feature level, it shares the same edge structure. At the combination level, the same movement pattern. At the recognition level, the same object category. The hierarchy catches it not despite the surface differences, but because the learned features were already invariant to exactly those kinds of surface differences.

Invariance and generalisation are not two separate gifts of hierarchy. Invariance is the mechanism by which generalisation happens. A hierarchy that learns variable-tolerant features at each layer automatically becomes a system that generalises across novel instances. The generalisation was not designed. It was the structural consequence of learning to be robust.

### 4.7 The General Mechanism — and Its Name

The shift from bilaterian to vertebrate sensory processing is a shift from specific hardcoded solutions to one general learning mechanism. Vera’s hierarchy doesn’t detect specific things. It detects structure — and the structure it learns to detect is whatever turns out to be most useful given the signals the world provides.

Early AI systems were bilaterian in exactly this sense — researchers hand-engineered specific feature detectors for specific problems. The architecture that broke from this completely has a name: the convolutional neural network, or CNN. A CNN learns its own feature detectors from data. The first layers discover edges and local patterns. The middle layers discover combinations. The final layers discover objects and categories. Nobody tells it what to look for. It finds out.

CNN is not an image recognition system. It is a hierarchical feature learning system that was first applied to images because images were the richest, most dimensionally complex input early AI researchers were processing. The same architecture has since been applied to audio — tones, phonemes, words. To text — characters, words, phrases, meaning. To genomic sequences. To scientific sensor data. To time series. Anywhere the input has local structure that composes hierarchically, CNN finds the patterns. The principle is not about vision. It is about automatically discovering what matters, layer by layer, from whatever signals the world provides.

### 4.8 The Limits of Hierarchy Alone

Hierarchical feature extraction solves the perception problem. But perception alone is not action. Vera can now recognise the structure of the world — predator, prey, obstacle, opportunity. What she cannot yet do is act deliberately across time — choosing actions now because of what they lead to later. That requires something hierarchy alone cannot provide: a framework for evaluating not just what the world is, but what to do about it across a sequence of decisions. That is Chapter 5.

## Chapter 4 — Full Act Structure

### Act 1 — A New World

*Chapter 3’s ceiling arrives in a new world. The Cambrian explosion has transformed the ocean beyond recognition. A new protagonist appears — and immediately does what Bila never could.*

- **The world has changed** — the quiet Ediacaran ocean, Bila’s world, is gone. The Cambrian explosion has filled the water with complexity. Predators with eyes. Prey with shells. Creatures that move fast, change direction, hunt actively. Chemical signals overlapping from a dozen sources simultaneously. Pressure waves crossing from every direction. Light and shadow shifting constantly. This is not a more complicated version of Bila’s world. It is a different world entirely.

- **Bila’s ghost** — the new predator that defeated Bila at the end of Chapter 3 is still here, moving through this new ocean. A reminder of where we left off. A reminder of what couldn’t be solved.

- **A new creature appears** — Vera. Small, streamlined, early vertebrate. She moves differently from Bila — not drifting, but directed. Not reacting moment to moment, but navigating. She has eyes. She has a body covered in pressure-sensitive cells. Her chemical sensing is not one receptor but many, reading the water from multiple directions at once. She is swimming in the same ocean as the new predator. She sees it. She moves. The encounter is over before it begins.

- **The question surfaces** — what just happened? Vera has never encountered this specific predator before. Bila couldn’t recognise it even after encountering similar ones repeatedly. Vera read it immediately. The difference is not experience. It is architecture.

- **The radiatan contrast** — somewhere in the water, a radiatan sits motionless. The Cambrian explosion happened around it. It did not participate. It did not need to. It is still here, unchanged, unbothered. Vera’s world is almost incomprehensibly more complex than the radiatan’s. And the radiatan is fine. But Vera is going somewhere the radiatan will never go.

### Act 2 — The Flood

*The sensory revolution is revealed. More sensors created two new problems — the data richness problem and the invariance problem. The bilaterian approach fails on both fronts. The need for a general mechanism becomes clear.*

- **Show Bila’s sensor world** — return briefly to what Bila had. One chemical gradient. One question: better or worse? The world arrived as a single number. The if/else rule was enough because the input was simple enough.

- **Show Vera’s sensor world** — now show what Vera receives. Light across thousands of eye cells — edges, motion, contrast, depth. Pressure waves from hundreds of lateral line receptors simultaneously. Chemical signals from multiple receptor arrays reading different signatures at once. The world arrives not as a number but as a flood. Thousands of signals, all at once, all the time.

- **Show the old architecture failing** — what happens if Vera tries to weigh all those raw signals directly, the way Bila weighed her chemical gradient? The weighted sum drowns. Too many inputs, too much noise, too many conflicting signals. The simple and elegant architecture that served Bila perfectly is crushed under the weight of the new sensory world.

- **Show the failed simplifications** — what if Vera ignores most signals? She misses the predator approaching from the direction she ignored. What if she averages everything? The difference between a predator striking from above and a harmless shadow collapses into the same average. What if she listens only to the strongest signal? The predator learned to approach quietly — the strongest signal is now background noise. Every simplification throws something away. And in this ocean, what gets thrown away gets you killed.

- **The bilaterian ceiling — the novelty problem** — Bila’s world had an answer to novelty. When a new threat appeared, evolution could add a new receptor tuned to it — across generations. One new problem, one new sensor. The bilaterian sensor asks: is this the specific thing I was built to detect? It can only ever answer yes or no. To ask a new question, you need a new sensor. The question cannot change within a lifetime. But the Cambrian ocean is not slow. New predators appear faster than generations can turn. The world is producing new answers faster than evolution can produce new sensors.

- **The bilaterian ceiling — the variability problem** — but novelty is only the first failure. Even familiar things never arrive with the same signal twice. A known predator approaches from a different angle — different pressure signature. The same food source drifts through different water — different chemical cluster, even though the same molecules are present. A known sound at a different distance or volume — completely different raw signal, same meaning. The specific sensor was tuned to one exact signal pattern. The world never presents that exact pattern twice. So the bilaterian approach fails not just against the new — it fails against the familiar, under real-world conditions.

- **The AI parallel arrives here** — early AI researchers built systems the bilaterian way. One hand-engineered feature detector for edges. One for corners. One for textures. Every new problem required new hand-engineered detectors. Slow, specific, brittle — exactly like evolving a new receptor. And just like a bilaterian sensor, each hand-engineered detector failed against real-world variability — the edge detector tuned to one lighting condition failed under different lighting. The convolutional neural network broke from this completely. The architecture learns its own feature detectors from data, robust to exactly the kind of variability that defeated specific solutions.

- **The vertebrate alternative named** — what if instead of adding a new sensor for every new thing, the nervous system built one general mechanism that could learn to detect anything — and learn to recognise it reliably despite the variability in how it arrives? Not tuned to a specific signal pattern. But capable of discovering whatever features are stable and meaningful across all the variation the world presents. One mechanism. Unlimited questions. Robust answers. All learned within a lifetime.

### Act 3 — The Layers

*Hierarchy emerges as the inevitable solution. The layers build visibly. Each layer automatically discovers its own patterns. Invariance enables generalisation. And the name arrives.*

- **The solution is not a new sensor** — the solution was not a new sensor. It was a new kind of question — not what specific thing is this, but what is the structure of this thing. And structure could be read in layers.

- **The first layer appears — and discovers edges** — instead of weighing all signals at once, Vera’s nervous system first asks small local questions across small patches of the sensory world. Nobody told this layer to look for edges. But edges turned out to be the most stable, most consistent pattern in raw visual signals — present regardless of lighting, distance, or angle. The first layer discovered edges because edges were the most useful thing to find. The architecture created the capacity. Experience filled in the answer.

- **The second layer builds — and discovers shapes** — those edge detections flow upward. Nobody told this layer to look for shapes. But combinations of edges — curves, corners, contours — turned out to be the most stable pattern in the edge signals. The second layer discovered shapes because shapes were the most useful compression of edges. Again: the architecture provided the capacity. Experience provided the content.

- **The third layer recognises — and discovers objects** — those shape detections flow upward again. Combinations of shapes resolve into something recognisable — not: there is a curve and a contour. But: there is something large, moving fast, approaching from above. Raw signals have been compressed, stage by stage, into a meaningful object. Each layer found its own patterns automatically. Together they built a world of things.

- **Show the hierarchy visually** — signals flow in from the world. First layer: edges and local features, discovered automatically. Second layer: shapes and combinations, discovered automatically. Third layer: objects and structures, discovered automatically. Each layer receives the previous layer’s output, not the raw world. The same fundamental unit — weighted inputs, one output — at every node. But now organised in depth, each layer extracting something the layer below couldn’t see, and doing so without being told what to find.

- **The software engineering parallel** — in computer science, there is a principle so fundamental it became a joke: any problem too complex to solve directly can be solved by adding a layer of abstraction. Operating systems abstract hardware. Languages abstract operating systems. Frameworks abstract languages. Every layer of abstraction ever written by a software engineer is the same answer Vera’s nervous system found in the Cambrian ocean. The world is too complex to face all at once. So you face it in stages.

- **Invariance enables generalisation** — because each layer learned features that are stable across surface variation — edges that look like edges regardless of lighting, shapes that look like shapes regardless of angle — those features can match things never seen before. A new predator arrives with completely different surface signals. But at the feature level, the same edge structure. At the combination level, the same movement pattern. At the recognition level, the same category. The hierarchy catches it not despite the surface differences — but because the learned features were already invariant to exactly those differences. Invariance is not a separate gift. It is the mechanism that makes generalisation possible.

- **Generalisation arrives unbidden** — a new creature appears in Vera’s ocean. Never encountered before. Different surface signals entirely — different chemical signature, different colouring, different size. Vera flinches. The new creature was a predator. Vera had never seen it. But the hierarchy had already seen its structure — and its learned features were already robust to the surface variation. Generalisation was not designed. It arrived as a consequence of learning to be invariant.

- **The name arrives** — this architecture — layered, automatic, learning its own features at each level, robust to surface variation, general across any domain with structured input — has a name. It is the convolutional neural network. CNN. The audience has now watched CNN build itself from biological necessity, layer by layer, in the Cambrian ocean, five hundred million years before anyone gave it that name.

- **Bila’s unresolved predator resolved** — the creature that defeated Bila — the one that appeared at the end of Chapter 3 and could not be solved — appears one final time. Vera reads it without hesitation. The chapter that began with Bila’s failure ends with Vera’s recognition of the same creature. The contrast is complete.

- **The ceiling appears quietly** — Vera can perceive the world deeply. She can generalise across novel situations. But perception is not action. Recognising a predator is not the same as knowing what to do about it across a sequence of decisions — whether to flee now and lose the food, or hold position and risk the strike, or move toward cover first and then feed. The hierarchy tells Vera what the world is. It does not tell her what to do about it over time. That question is left open. Deliberately.

## The Human Parallel — The Rediscovery of Layers

*Not an act — a named layer of context sitting between Vera’s story and the philosophical thread. The same principle Vera’s nervous system discovered in the Cambrian ocean was rediscovered independently by computer scientists, software engineers, and AI researchers across the twentieth century. This is that story.*

- **The software engineer’s oldest wisdom** — in computer science, there is a principle so fundamental it became a joke: any problem too complex to solve directly can be solved by adding a layer of abstraction. Operating systems abstract hardware. Programming languages abstract operating systems. Frameworks abstract languages. APIs abstract frameworks. Every layer hides the complexity beneath it behind a cleaner interface. Nobody designed this principle. It emerged from decades of engineers hitting the same wall and finding the same solution independently. The wall was always the same: the problem was too rich to face all at once.

- **The vision problem** — in the 1950s and 1960s, early AI researchers assumed visual recognition would be straightforward. Show a computer enough images, weigh the pixels, classify the result. It failed completely. The problem was not the algorithm — it was the dimensionality and variability. A small image contains thousands of pixels. Weighing them directly produced nothing meaningful. And even if a specific pattern was matched, it failed under different lighting, different angles, different distances. The same wall Vera’s nervous system hit in the Cambrian ocean: too rich, too variable to face directly.

- **The convolutional insight** — in 1980, Kunihiko Fukushima published a neural network architecture called the Neocognitron, inspired directly by discoveries about how the mammalian visual cortex processes information in stages. Then in 1989, Yann LeCun formalised and trained what became the modern convolutional neural network. The insight was the same one Vera’s nervous system had already found: don’t weigh raw pixels directly. Let the first layer discover local features — edges, orientations, contrasts. Let the second layer discover combinations. Let the third layer discover objects. Each layer learns its own patterns automatically from data. Nobody designs what each layer looks for. The architecture learns it.

- **What CNN actually is** — a convolutional neural network is not an image recognition system. It is a hierarchical feature learning system that automatically discovers what patterns matter at each level of abstraction, robust to the surface variability that defeats specific pattern matching. It was first applied to images because images were the richest, most variable input early AI researchers were processing. The same architecture has since been applied to audio — tones becoming phonemes becoming words. To text — characters becoming words becoming meaning. To genomic sequences, scientific sensor data, time series. Anywhere the input has local structure that composes hierarchically, CNN finds the patterns. The principle is not about vision. It is about automatically discovering what matters, layer by layer, from whatever signals the world provides.

- **The biological vindication** — when neuroscientists studied the mammalian visual cortex in detail, what they found was CNN. Not as a metaphor. The visual cortex processes information in exactly the hierarchical stages that LeCun’s architecture formalised — simple cells detecting edges, complex cells detecting combinations of edges invariant to position, higher areas recognising objects. The invariance properties that make CNN robust to surface variation are the same invariance properties neuroscientists found in the visual cortex. The algorithm was not inspired by biology as a loose analogy. It was biology, translated into mathematics. Vera’s nervous system had been running CNN for five hundred million years before anyone gave it a name.

- **The parallel to Vera** — what LeCun formalised in 1989, and what Fukushima glimpsed in 1980, and what software engineers had been rediscovering as abstraction layers for decades — is exactly what Vera’s nervous system stumbled toward in the Cambrian ocean. The data richness problem demanded hierarchy. The variability problem demanded invariance. Hierarchy with automatic pattern learning delivered both — and generalisation arrived as the unexpected gift. The algorithm did not appear from nowhere. It appeared five hundred million years ago, in a creature navigating an ocean that had just become too complex and too variable to face all at once.

*The algorithms did not appear from nowhere. They are the same logic that life discovered hundreds of millions of years ago — just running on silicon instead of cells.*

## Philosophical Thread — The Gap Between Seeing and Knowing

*A quiet moment at the end of Chapter 4. Not an act — a question left in the water, continuing the thread from Chapters 1, 2, and 3.*

- **What we saw** — Vera sees the world differently from Bila. Not just more of it — she sees its structure. The predator is not a chemical gradient getting stronger. It is a large fast-moving object approaching from above. The world has become a place of objects and relationships, not just signals and gradients. Something has shifted in how the world is represented inside a nervous system.

- **The question** — Bila sensed the world. Does Vera perceive it? The distinction matters. Sensing is receiving signals. Perceiving is building a representation — an internal model of what those signals mean. Vera’s hierarchy constructs something that Bila’s single sensor never could: a world of things, not just a world of better and worse. Is that a richer experience? Or just a richer computation?

- **The abstraction question** — every layer of Vera’s hierarchy discards something. The first layer discards raw signal values and keeps edges. The second layer discards edges and keeps combinations. The third layer discards combinations and keeps objects. At each stage, the world becomes more meaningful and less literal. By the time Vera recognises “predator,” the original signals are gone — replaced by an abstraction that was discovered, not designed. Is what Vera experiences the world, or a model of the world that her nervous system built from scratch? Nobody knows. Not in biology, not in AI.

- **The AI parallel** — CNN builds the same abstractions the same way. The early layers of a trained CNN detect edges and textures — nobody told it to. The middle layers detect parts and combinations — nobody told it to. The final layers detect objects and categories — nobody told it to. The hierarchy extracted these abstractions automatically from the data. The network now operates on a model of the world, not the world itself. Does it experience that model? The question sounds absurd. But it sounded absurd for Vera too, once.

- **The thread deepens** — Chapter 1 asked: when does a steering signal become a feeling? Chapter 2 asked: when does a changed weight become a memory? Chapter 3 asked: when does anticipation become dread? Chapter 4 asks: when does a representation become an experience? When does automatically building a model of the world become seeing the world? The questions are accumulating. They are converging on something that has no name yet.

*This question will return.*

## Updated Overall Chapter Arc

### Conceptual Layer

- Chapter 0 — if/else, run and tumble, good/bad sensor, weight

- Chapter 1 — external conflict, perceptron, internal state, arousal

- Chapter 2 — neural network, loss, backpropagation, implicit association

- Chapter 3 — time as missing element, eligibility traces, STDP, TD Learning, genuine but narrow anticipation

- Chapter 4 — sensory revolution, data richness problem, bilaterian ceiling (novelty + variability), hierarchy, automatic pattern learning, invariance, generalisation, CNN named

- Chapter 5 — RL framework, policy, value function, deliberate action across time

- Chapter 6 — Deep RL, TD Learning + CNN unified, Bila and Vera’s legacies converge

### Narrative Layer

- Radiatans as recurring contrast — unchanged across the Cambrian explosion, unbothered, still surviving

- Bila’s ghost — the new predator from Chapter 3 reappears and is finally resolved by Vera

- Vera as the creature who sees structure where Bila saw only signals — and who learned that structure automatically

- The ceiling of perception — Vera knows what the world is, not yet what to do about it over time

### Philosophical Layer

- A steering signal is born — Chapter 0

- It will one day become emotion — Chapter 1

- Experience leaves a physical trace in the weights — Chapter 2

- Anticipation opens a gap between signal and event — Chapter 3

- A representation of the world is automatically built inside a nervous system — Chapter 4

- When does an automatically discovered model of the world become an experience of it?

## Key Narrative & Pedagogical Decisions for Chapter 4

- Vera is introduced through behavior, not description — the audience sees what she can do before they understand how she does it

- The sensory flood is shown visually before the data richness problem is named — the audience feels overwhelmed before they understand why the old architecture fails

- The bilaterian ceiling has two distinct failure beats in Act 2 — novelty first, variability second — each shown as a concrete behavioral failure before being named as a structural limitation

- The automatic pattern discovery is shown layer by layer in Act 3 — each layer discovers its patterns without being told what to find; the audience watches this happen before it is named

- Invariance and generalisation are connected explicitly — invariance is shown as the mechanism that makes generalisation possible, not a separate concept

- CNN is named in Chapter 4 — the audience has watched it build from biological necessity and deserves the name; familiarity with CNN as a term makes the naming a moment of recognition rather than introduction

- CNN’s generality beyond images is stated clearly — audio, text, genomics, time series; the principle is about structured input, not vision

- The software engineering parallel arrives mid-Act 3 — grounding the abstract concept of hierarchy in something the audience already knows from their own world

- Generalisation arrives without announcement — Vera flinches at the new predator before anyone explains why she could

- Bila’s unresolved predator is resolved by Vera — the narrative thread from Chapter 3 closes here, giving the audience earned satisfaction before the new ceiling is revealed

- Chapter 6’s convergence moment is preserved — CNN is named in Chapter 4 but how it learns across layers (backpropagation) is deferred to Chapter 6, where TD Learning + CNN + RL all unify into Deep RL

- The philosophical thread adds a new question without resolving the old ones — the accumulation is structural and intentional
