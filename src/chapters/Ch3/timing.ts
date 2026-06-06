// Per-beat durations in frames (30fps), grouped by structural part.
// Order matches the finalized ch3 script (Part 1 → Part 2 → Closing).

// Part 1 — The Story
//   Act 1 — A Puzzle       (beats 1–2)
//   Act 2 — The Refinement (beats 3–5)
export const PART1_BEAT_DURATIONS_FRAMES = [
  240, // Beat 1 — Same Ocean, Same Bila, Same Rule
  330, // Beat 2 — When Hebb Gets It Wrong
  270, // Beat 3 — The World Has Order
  330, // Beat 4 — STDP
  300, // Beat 5 — The Dawn of Anticipation
] as const;

// Part 2 — The Math
export const PART2_BEAT_DURATIONS_FRAMES = [
  360, // A1 — TD Learning
  360, // A2 — Eligibility Traces
] as const;

// Closing
export const CLOSING_BEAT_DURATIONS_FRAMES = [
  300, // C1 — But Not Structure
] as const;

const sum = (xs: readonly number[]) => xs.reduce((a, b) => a + b, 0);

export const PART1_DURATION_FRAMES = sum(PART1_BEAT_DURATIONS_FRAMES);
export const PART2_DURATION_FRAMES = sum(PART2_BEAT_DURATIONS_FRAMES);
export const CLOSING_DURATION_FRAMES = sum(CLOSING_BEAT_DURATIONS_FRAMES);

export const CHAPTER_DURATION_FRAMES =
  PART1_DURATION_FRAMES + PART2_DURATION_FRAMES + CLOSING_DURATION_FRAMES;
