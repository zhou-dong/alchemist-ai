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

## 3. Storytelling Approach — Two Registers

Each chapter alternates between two visual and narrative registers:

- **Evolutionary register** — the biology. Answers *why this algorithm had to exist*: life faced a survival problem, and here's how a creature solved it. Naturalistic, like a nature documentary. Uses biology vocabulary (chemical sensors, swimming, predator-avoidance).
- **Algorithm register** — the math. Answers *how the algorithm actually works*. Patient, visual, rigorous — diagrams, weights, decision boundaries, gradients. Uses modern AI vocabulary (weight, perceptron, gradient).

The biology motivates; the math mechanizes. The two registers are not separated into halves of a video — they interleave, each handing off to the other as the chapter progresses.

The pedagogical contract: **show behavior first, name the concept second.** The audience builds intuition before they receive vocabulary.

**Vocabulary rule:** each register stays in its own language. The biology register uses biology terms; the algorithm register uses AI terms. The handoff between registers is where one translates into the other — that's how modern AI vocabulary earns its place without anachronism in the biology.

## 4. Chapter Beats

Each chapter is built from four kinds of content beats:

1. **Biology beat** — the creature, its world, its survival problem. *(Core — always present.)*
2. **Algorithm beat** — the math made visual. *(Core — always present.)*
3. **Human-history beat** — when and who rediscovered this in AI (e.g., Rosenblatt and the perceptron, 1958). *(Recommended default; optional when no clean human story fits.)*
4. **Real-world example beat** — where this algorithm lives today (e.g., the iRobot Roomba running the bacterial run-and-tumble strategy). *(Recommended default; content can be filled in later.)*

Beats 1 and 2 map to the two registers in Section 3. Beats 3 and 4 build on the algorithm register's visual language.

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
