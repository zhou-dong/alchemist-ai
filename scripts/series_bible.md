# Series Bible: A Brief History of Intelligence, in Algorithms

*The series' creative reference — concept, format, methodology, protagonists, arc.*

## 1. Project Concept

A series of animated chapter videos that introduces AI algorithms to a general audience by following the evolutionary history of intelligence. Each chapter pairs a real evolutionary leap with the AI algorithm whose logic life first stumbled upon there.

The core thesis:

*"The algorithms powering modern AI did not appear from nowhere. They are the same logic that life stumbled upon hundreds of millions of years ago — just running on silicon instead of cells."*

### The Spirit — why this series exists

This is the soul of the project; everything else serves it.

> **This motivation is fuel for the creator — not a speech for the audience.** Show, don't tell. The product demonstrates the intuitive approach by *being* intuitive; it never lectures the viewer about whiteboards, outdated teaching, or "the better way." The conviction that we're in the AI era yet still teach its ideas the old way is exactly what motivates this project — but it stays below the surface. If the product is good, the audience feels it; if it isn't, no manifesto will save it. So the narration never argues for the method — it just uses it.
>
> **One exception — reassurance that serves the learner is welcome, and is different from positioning.** Telling the audience "don't be afraid of the math — a formula is just an idea wearing symbols" lowers their guard so they can learn; it's a kindness, not a claim that the creator or method is superior. The test for any such line: does it ask the viewer to *agree the approach is better* (cut it — that's positioning), or does it help the viewer *feel capable* (keep it — that's reassurance)? The math-anxiety reassurance passes; the whiteboard critique does not.
>
> **Placement matters as much as permission.** Deliver reassurance at the *point of need* — the moment a real formula first appears on screen — not in the cold open. Up front, before any math is shown, "don't be afraid of the math" answers a worry the viewer doesn't have yet and can even plant it. Keep the opening simple and focused (fewest ideas possible) so viewers engage fast; defuse anxiety exactly when it surfaces.

- **The goal is understanding, not trivia.** By the end, the viewer — and the creator — should genuinely understand how modern AI algorithms *work*. Teaching real comprehension is the product.
- **It's a deliberate rejection of how algorithms are usually taught.** We live in the AI era, yet we still learn its ideas the old way: symbols chalked on a whiteboard, formulas to memorize. That hides the idea. *A formula is just an idea wearing symbols.* Math is not only equations — it is pictures, language, and ideas you can *see*. So the series teaches the **intuitive way**: ground every algorithm in the real world, where the idea is easy to see.
- **The bridge that makes this work has two distinct layers — never blur them:**
  1. *Almost every idea inside modern AI can be mapped onto something alive.* This mapping is the teaching device — always available, the lens that makes the math intuitive.
  2. *Some of these algorithms were genuinely inspired by life — life got there first, and we copied.* This is the rarer, more surprising truth, and it only lands if it stays distinct from layer 1. "It's a useful analogy" is mildly interesting; "we literally copied this from life" makes someone lean in. **Never overclaim layer 2 as if it covered every algorithm.**
- **Honesty guardrail.** The biology earns intuition, but each chapter's math section must still teach the real algorithm rigorously and be candid about where life and the algorithm diverge. The analogy serves the algorithm; it never distorts it.

The series traces an arc from *mechanism* to *intelligence proper*. The earliest chapter shows pre-bilateral life — bacteria and molecular conditionals running on rule-based logic; clever-looking, but with no real decision in them. From bilaterality onward (and from Rosenblatt's perceptron onward in AI history), the series follows intelligence in a stricter sense: integrated weighted decisions, learning, and eventually feeling.

The narrative frame is inspired by Max Bennett's *A Brief History of Intelligence*; the algorithm explanations aim for the rigor and visual clarity of 3Blue1Brown.

## 2. Format

- **Medium**: animated explainer videos, built in Remotion
- **Structure**: a series of chapter videos, cumulative — each chapter assumes the previous, both biologically and algorithmically
- **Audience**: general public, no prior AI or biology background assumed
- **Narration**: a warm, conversational narrator — the voice of a friend sharing something wonderful they just learned, *not* a lecturer, a textbook, or a detached documentary voice-over. Speaks directly to the viewer ("you"), builds curiosity before explaining (open a beat with a hook or a question, name the concept second), and shares wonder rather than asserting it ("the part that gets me is…" beats "this is astonishing"). Humble — never arrogant, never talking down, never "try not to be impressed." The voice stays simple and accessible — the feel of an easy watch, not a textbook. Technical vocabulary is allowed when necessary, but not the default. Inner voice (projecting states onto a protagonist vs. describing them from outside) is a chapter-by-chapter judgment, not a project-level rule.
- **Visual style**: each evolutionary era has its own visual signature; chapters within the same era share a style. The shift between eras itself signals that time has moved forward.
- **Duration per chapter**: TBD
- **Tone**: warm, curious, conversational storytelling — a knowledgeable friend who's excited to share, never a know-it-all. Build a little tension before each reveal; vary the rhythm (short punchy fragments against longer flowing sentences, so it never drones); project genuine wonder at the strange and beautiful; and weave a thread of dry humor through to keep it attractive — without sliding into hype or jokes-per-minute.
  - **Warm in delivery, authoritative about the material.** The narrator is a friendly guide who *knows the way* — humble and conversational, but never self-undercutting. No "I'm still learning this / we'll figure it out together": admitting uncertainty bleeds the viewer's confidence and makes them study less efficiently. (Being *surprised and delighted* by a fact is the opposite of doubt — it projects mastery, so keep the wonder.)
  - **Let the narrator feel things in real time.** This is the human heartbeat of the voice: react like an actual person, not a composed announcer. At an *aha* moment, sound genuinely thrilled to share it — let the excitement break through ("Okay, this is the part I love." / "Wait — did you catch that?"). Elsewhere, register real emotion where it's honest: a caught breath at a twist, delight at something clever, quiet awe at something vast, a flicker of unease at something strange. The feeling should be *earned and genuine*, never manufactured hype — but the narrator should never stay flat through a moment that is actually exciting. Chapter 0's script is the reference implementation of this voice.

## 3. Storytelling Approach — Two Registers, Two Parts, Plus Closing

Each chapter is built from two visual and narrative registers, structured as **two main parts plus a Closing**:

- **Part 1 — The Story** (evolutionary register, biology). Answers *why this algorithm had to exist*: life faced a survival problem, and here's how a creature solved it. Naturalistic, like a nature documentary. Uses biology vocabulary (chemical sensors, swimming, predator-avoidance). No algorithm framing, no formulas, no code. **Lands internally** — Part 1 ends with a story-side resolution, no forward-pointing.
- **Part 2 — The Math** (algorithm register). Answers *how the algorithm actually works*. Patient, visual, rigorous — diagrams, weights, decision boundaries, gradients, code. Uses modern AI vocabulary (weight, perceptron, gradient). Explicitly translates the story we just saw into formal terms. **Lands internally** — Part 2 ends with a math-side resolution, no forward-pointing.
- **Closing** (varies by chapter). The chapter's reflective coda. May be a bridge to the next chapter (Ch0's *The Threshold*), a philosophical thread (Ch1's *The Seed of Feeling*), or another kind of reflection — whatever fits the chapter's deeper meaning. Always the final structural section, after Part 1 and Part 2.

The biology motivates; the math mechanizes; the Closing reflects. **The three sections are separate — not interleaved.** Part 1 plays first: the full narrative arc, pure storytelling, the audience experiences the discovery emotionally. Part 2 follows: retelling key moments through the algorithm's lens. The Closing comes last, after both — the only place where the chapter looks beyond itself.

The pedagogical contract: **show behavior first, name the concept second.** The audience builds full intuition through Part 1's story before receiving vocabulary in Part 2's math.

**Scope of "life leads the algorithm" — it's a chapter rule, not the welcome's.** The biology-first ordering (life leads; Part 1 before Part 2) governs *chapter* structure. It does **not** bind the series-level opening. Chapter 0's Prologue (the welcome) is a meta-introduction, not a chapter, so it may lead with the goal — *"Let's learn how AI works"* — and then bring in life. Don't try to force the welcome to open on biology; the life-first discipline begins once the chapter proper starts (at the Chronicle beat). Confirmed 2026-06-14 while writing the Ch0 welcome.

**Vocabulary rule:** each part stays in its own language. Part 1 uses biology terms only; Part 2 uses AI/CS terms (but only the terms *this* chapter owns — earlier chapters don't preview later chapters' named concepts, even when describing the underlying logic).

**Chapter bridge:** when relevant, the setup for the next chapter lives in the **Closing** section — never inside Part 1 or Part 2. Each part lands internally so the chapter feels resolved before the bridge arrives.

## 4. Chapter Beats

Each chapter is built from five kinds of content beats:

1. **Chronicle beat** — a brief opener locating the chapter in Earth's history. Names the era, anchors the date, and notes what changed since the previous chapter (or since Earth's formation, for the first chapter). Includes a wide visual (Earth from space, the era's general look), a soft on-screen caption with era and date, and a short narration. *(Core — always the first beat of Part 1.)*
2. **Biology beat** — the creature, its world, its survival problem. *(Core — always present in Part 1.)*
3. **Algorithm beat** — the math made visual. *(Core — always present in Part 2.)*
4. **Human-history beat** — when and who rediscovered this in AI (e.g., Rosenblatt and the perceptron, 1958). *(Recommended default; optional when no clean human story fits.)*
5. **Real-world example beat** — where this algorithm lives today (e.g., the iRobot Roomba running the bacterial run-and-tumble strategy). *(Recommended default; content can be filled in later.)*

Beats 1 and 2 live in Part 1 (story register). Beat 3 lives in Part 2 (algorithm register). Beats 4 and 5 build on the algorithm register's visual language and typically appear in Part 2.

## 5. Protagonists

The project does not have a single protagonist across all chapters. Each major evolutionary leap brings a new creature into focus — the right organism for the algorithm being introduced. As evolutionary time moves forward, the baton is passed.

Each protagonist is chosen because their biology embodies the algorithm being taught. The specifics of any individual creature (anatomy, era, sensory world, contrasting neighbors) belong in that chapter's script, not here.

## 6. Chapter Arc

Chapters are cumulative both biologically (each evolutionary breakthrough builds on the last) and algorithmically (each algorithm composes on top of the previous). Vocabulary and intuitions introduced in earlier chapters are reused or bridged in later ones rather than restated from scratch.

The current list of chapters lives in `scripts/README.md`. Specific chapter contents, the specific cross-chapter bridges between them, and chapter-internal staging all live in each chapter's `chN-*.md` script — they are expected to evolve as the scripts are written, and are not pinned down here.

## 7. The Philosophical Thread

Running quietly through the whole project is a single question:

- A steering signal is born — the first bias toward "better" or "worse"
- It will one day become emotion
- When exactly does that happen?
- Does AI face the same question?

This is not a chapter or an act — it is a recurring undercurrent. It surfaces when relevant and recedes when not.
