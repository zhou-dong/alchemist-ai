# scripts/

Source material for the alchemist-ai video series. **Not code** — these files are not bundled by Remotion.

## What's here

- `project_summary.md` — project-level scope: concept, format, storytelling methodology, protagonists, chapter arc, philosophical thread
- `ch0-the-simple-world.md` — Chapter 0: if/else, run-and-tumble, good/bad sensor, weight
- `ch1-when-simple-rules-break.md` — Chapter 1: perceptron, internal state, arousal
- `ch2-when-weights-learn.md` — Chapter 2: neural net, loss, backprop, implicit association
- `ch3-when-time-becomes-a-teacher.md` — Chapter 3: eligibility traces, STDP, TD Learning
- `ch4-when-structure-becomes-visible.md` — Chapter 4: hierarchy, invariance, CNN (introduces Vera)
- `ch5-when-vera-learns-to-choose.md` — Chapter 5: actor-critic RL, exploration/exploitation, long-horizon limits

Chapter 6 (Deep RL convergence) is planned but not yet written.

## Scope: what goes in which file

`project_summary.md` holds only **project-level** facts and **cross-chapter** principles. Chapter-specific details belong in that chapter's `chN-*.md` file, not in the summary.

**Belongs in the summary:**

- Narrative frame, audience, format, tone
- The principle of how protagonists work (hand-off across evolutionary time; each chosen for the algorithm they embody)
- Cross-chapter pedagogical bridges — e.g. "weight" is introduced in Ch0 specifically to set up the perceptron in Ch1

**Belongs in the chapter script:**

- A protagonist's specific anatomy, era, body plan, sensory apparatus
- Contrasting characters that only appear in certain chapters (e.g. radiatans)
- Scene order, act-level staging, within-chapter reveal sequencing

When in doubt, ask: *is this true across the whole project, or only inside one chapter?* If only inside one chapter, it goes in that chapter's script.

## File naming

Chapter scripts: `chN-kebab-case-title.md` (e.g. `ch2-when-weights-learn.md`). Project-level docs use plain `snake_case.md`.

## Chapter script structure

```
# Chapter N — <title>

*Subtitle / status line*

## Overview

## Key Scientific & AI Concepts Introduced in Chapter N

### N.1 <name>
### N.2 <name>
…

## Chapter N — Full Act Structure

### Act 1 — <name>
### Act 2 — <name>
### Act 3 — <name>

## The Human Parallel — <name>          (history of the AI rediscovery)

## Philosophical Thread — <name>

## Updated Overall Chapter Arc

### Conceptual Layer
### Narrative Layer
### Philosophical Layer

## Key Narrative & Pedagogical Decisions for Chapter N
```

Chapters 2–5 follow this fully. Chapters 0 and 1 are currently abbreviated outlines (Overview + Concepts + Acts only — no Human Parallel, no chapter-specific Updated Arc).

## Future composition pairing

Each chapter script will pair with a Remotion composition under `src/` — e.g. `ch2-when-weights-learn.md` ↔ `src/chapters/Ch2.tsx`. Currently `src/` only has the placeholder `Main` composition.
