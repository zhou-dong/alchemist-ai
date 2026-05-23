# Series Bible: A Brief History of Intelligence, in Algorithms

*The series' creative reference — concept, format, methodology, protagonists, arc.*

## 1. Project Concept

A series of animated chapter videos that introduces AI algorithms to a general audience by following the evolutionary history of intelligence. Each chapter pairs a real evolutionary leap with the AI algorithm whose logic life first stumbled upon there.

The core thesis:

*"The algorithms powering modern AI did not appear from nowhere. They are the same logic that life stumbled upon hundreds of millions of years ago — just running on silicon instead of cells."*

The series traces an arc from *mechanism* to *intelligence proper*. The earliest chapter shows pre-bilateral life — bacteria and molecular conditionals running on rule-based logic; clever-looking, but with no real decision in them. From bilaterality onward (and from Rosenblatt's perceptron onward in AI history), the series follows intelligence in a stricter sense: integrated weighted decisions, learning, and eventually feeling.

The narrative frame is inspired by Max Bennett's *A Brief History of Intelligence*; the algorithm explanations aim for the rigor and visual clarity of 3Blue1Brown.

## 2. Format

- **Medium**: animated explainer videos, built in Remotion
- **Structure**: a series of chapter videos, cumulative — each chapter assumes the previous, both biologically and algorithmically
- **Audience**: general public, no prior AI or biology background assumed
- **Narration**: an omniscient documentary narrator (Attenborough-style). The voice stays simple and accessible — aims for the feel of an easy book or an easy watch, not a textbook. Technical vocabulary is allowed when necessary, but not the default. Inner voice (projecting states onto a protagonist vs. describing them from outside) is a chapter-by-chapter judgment, not a project-level rule.
- **Visual style**: each evolutionary era has its own visual signature; chapters within the same era share a style. The shift between eras itself signals that time has moved forward.
- **Duration per chapter**: TBD
- **Tone**: TBD. Confirmed ingredient: a thread of humor woven through, to keep it attractive without sliding into hype or jokes-per-minute

## 3. Storytelling Approach — Two Registers, Two Parts, Plus Closing

Each chapter is built from two visual and narrative registers, structured as **two main parts plus a Closing**:

- **Part 1 — The Story** (evolutionary register, biology). Answers *why this algorithm had to exist*: life faced a survival problem, and here's how a creature solved it. Naturalistic, like a nature documentary. Uses biology vocabulary (chemical sensors, swimming, predator-avoidance). No algorithm framing, no formulas, no code. **Lands internally** — Part 1 ends with a story-side resolution, no forward-pointing.
- **Part 2 — The Math** (algorithm register). Answers *how the algorithm actually works*. Patient, visual, rigorous — diagrams, weights, decision boundaries, gradients, code. Uses modern AI vocabulary (weight, perceptron, gradient). Explicitly translates the story we just saw into formal terms. **Lands internally** — Part 2 ends with a math-side resolution, no forward-pointing.
- **Closing** (varies by chapter). The chapter's reflective coda. May be a bridge to the next chapter (Ch0's *The Threshold*), a philosophical thread (Ch1's *The Seed of Feeling*), or another kind of reflection — whatever fits the chapter's deeper meaning. Always the final structural section, after Part 1 and Part 2.

The biology motivates; the math mechanizes; the Closing reflects. **The three sections are separate — not interleaved.** Part 1 plays first: the full narrative arc, pure storytelling, the audience experiences the discovery emotionally. Part 2 follows: retelling key moments through the algorithm's lens. The Closing comes last, after both — the only place where the chapter looks beyond itself.

The pedagogical contract: **show behavior first, name the concept second.** The audience builds full intuition through Part 1's story before receiving vocabulary in Part 2's math.

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
