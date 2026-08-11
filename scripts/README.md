# scripts/

Source material for the alchemist-ai video series. **Not code** — these files are not bundled by Remotion.

## What's here

- `series_bible.md` — the series bible: concept (incl. **The Spirit — why this series exists**, Section 1), format, storytelling methodology, chapter beats, protagonists, chapter arc, philosophical thread
- `facts/` — per-chapter and shared factsheets, kept separate from narration. See **Facts files** below.
- `ch-the-first-thing-alive.md` — draft chapter, precedes Chapter 0 chronologically: a sessile, surface-attached chemolithoautotroph at a hydrothermal vent, before movement or chemotaxis exist. Numbering/ordering not yet reconciled with the list below.
- `ch0-the-world-before-learning.md` — Chapter 0: bacteria, run-and-tumble, the complete decision device — weighted sum + bias, then a threshold — running in chemistry before anything could learn (renamed from `ch0-the-simple-world.md`, 2026-08-02)
- `ch1-when-many-cells-move-as-one.md` — Chapter 1: Bila enters; multicellular + steering, the perceptron, internal state
- `ch2-when-weights-learn.md` — Chapter 2: synaptic plasticity (Hebbian), the perceptron learning rule, learning from examples
- `ch3-when-time-becomes-a-teacher.md` — Chapter 3: eligibility traces, STDP, TD Learning
- `ch4-when-structure-becomes-visible.md` — Chapter 4: hierarchy, invariance, CNN (introduces Vera)
- `ch5-when-learning-goes-deep.md` — Chapter 5: neural net, loss, backprop, multi-layer learning
- `ch6-when-vera-learns-to-choose.md` — Chapter 6: actor-critic RL, exploration/exploitation, long-horizon limits

Chapter 7 (Deep RL convergence) is planned but not yet written.

## Scope: what goes in which file

`series_bible.md` holds only **project-level** facts and **cross-chapter** principles. Chapter-specific details belong in that chapter's `chN-*.md` file, not in the bible.

**Belongs in the bible:**

- Narrative frame, audience, format, tone
- The principle of how protagonists work (hand-off across evolutionary time; each chosen for the algorithm they embody)
- Cross-chapter pedagogical bridges — e.g. "weight" is introduced in Ch0 specifically to set up the perceptron in Ch1

**Belongs in the chapter script:**

- A protagonist's specific anatomy, era, body plan, sensory apparatus
- Contrasting characters that only appear in certain chapters (e.g. radiatans)
- Scene order, act-level staging, within-chapter reveal sequencing

When in doubt, ask: *is this true across the whole project, or only inside one chapter?* If only inside one chapter, it goes in that chapter's script.

## Facts files — separate from narration

Starting with `ch-the-first-thing-alive.md`, each chapter's factual claims (biology, chemistry, dates, evolutionary timing) are tracked in a dedicated factsheet under `scripts/facts/`, not stated inline in the chapter script. This keeps facts easy to scan, verify, and update independently of narration wording.

- `facts/shared.md` — facts more than one chapter depends on (e.g. flagella evolved after LUCA, chemotaxis signaling conservation, early metabolism). Check here before adding a fact to a chapter file — if it's cross-chapter, it belongs here instead.
- `facts/ch-<slug>.md` — facts specific to one chapter, in the same structure as `shared.md`.

**Structure of a factsheet** (facts only — no narration, no "what to avoid" guardrails; those belong in the chapter script's production notes):

```
# Facts — <Chapter Name>

## Setting
- claim (confidence — source note)

## Organism
- claim (confidence — source note)

## Mechanism
- claim (confidence — source note)

## Open questions
- unresolved, flagged for follow-up
```

Confidence tags: **established** (settled, safe to state plainly), **plausible** (best-supported current model, but not settled consensus — hedge lightly in narration if needed), **speculative** (a narrative simplification or unconfirmed figure — verify before it appears in narration, or keep it vague).

**Workflow going forward:** research and verify facts first, write them into the chapter's factsheet, *then* write narration from the factsheet. If a fact changes later, update the factsheet first and treat any narration built on it as needing review — the factsheet is the source of truth, not the narration.

The chapter script's Overview should reference its factsheet(s) rather than restate facts inline (see `ch-the-first-thing-alive.md` for the pattern).

## File naming

Chapter scripts: `chN-kebab-case-title.md` (e.g. `ch2-when-weights-learn.md`). Project-level docs use plain `snake_case.md`.

## Chapter script structure

Each chapter is structured as **two parts** — see `series_bible.md` Section 3 for the principle. Part 1 carries the full narrative arc in biology register (the story); Part 2 retells key moments in algorithm register (the math), and ends with the bridge to the next chapter.

```
# Chapter N — <title>

*Subtitle / status line*

## Overview

## Key Concepts Introduced in Chapter N

### N.1 <name>
### N.2 <name>
…

## Part 1 — The Story

### Act 1 — <name>

#### Beat 1 — <name>

**Visual:** ...

**Narration:** ...

#### Beat 2 — <name>
...

### Act 2 — <name>
...

### Act 3 — <name>
...

## Part 2 — The Math

#### Algorithm Beat A1 — <name>

**Visual:** ...

**Narration:** ...

#### Algorithm Beat A2 — <name>
...

(end of Part 2 contains the bridge to the next chapter)
```

Beat format: each beat has a **Visual** block (production notes describing what's on screen — what the animator should build) and a **Narration** block (the spoken text). For the narration voice, see `series_bible.md` Section 2: a warm, conversational narrator — a knowledgeable friend sharing what they learned, talking directly to "you", excited at the aha moments — *not* a detached/omniscient documentary voice-over, and never a textbook. Chapter 0 is the reference implementation.

Chapters 0 and 1 follow this two-part beat structure. Chapters 2–5 are still in the older outline format (full Acts, Human Parallel section, Philosophical Thread section) and will be migrated as they are rewritten.

## Future composition pairing

Each chapter script will pair with a Remotion composition under `src/` — e.g. `ch2-when-weights-learn.md` ↔ `src/chapters/Ch2.tsx`. Currently `src/` only has the placeholder `Main` composition.
