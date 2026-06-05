// Per-beat durations in frames (30fps), grouped by structural part.
// Order matches the finalized ch1 script (Part 1 → Part 2 → Closing).

// Part 1 — The Story
//   Act 1 — Two Paths      (beats 1–4)
//   Act 2 — The Cluster    (beats 5–7)
export const PART1_BEAT_DURATIONS_FRAMES = [
  300, // Beat 1 — After the Long Sleep (Chronicle)
  300, // Beat 2 — Two Paths from Bacteria
  270, // Beat 3 — Meet Bila
  300, // Beat 4 — A Body That Moves Needs Coordination
  300, // Beat 5 — A Knot of Cells
  300, // Beat 6 — Bila Moves with Purpose
  300, // Beat 7 — Inside and Outside Together
] as const;

// Part 2 — The Math
export const PART2_BEAT_DURATIONS_FRAMES = [
  360, // A1 — The Perceptron
  270, // A2 — Internal Signals Join the Sum
] as const;

// Closing
export const CLOSING_BEAT_DURATIONS_FRAMES = [
  240, // C1 — The Radiatan's Quiet Answer
  270, // C2 — Bila Has Been Learning
] as const;

const sum = (xs: readonly number[]) => xs.reduce((a, b) => a + b, 0);

export const PART1_DURATION_FRAMES = sum(PART1_BEAT_DURATIONS_FRAMES);
export const PART2_DURATION_FRAMES = sum(PART2_BEAT_DURATIONS_FRAMES);
export const CLOSING_DURATION_FRAMES = sum(CLOSING_BEAT_DURATIONS_FRAMES);

export const CHAPTER_DURATION_FRAMES =
  PART1_DURATION_FRAMES + PART2_DURATION_FRAMES + CLOSING_DURATION_FRAMES;
