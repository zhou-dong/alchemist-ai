// Per-beat durations in frames (30fps), grouped by structural part.
// Order matches the finalized ch2 script (Part 1 → Part 2 → Closing).

// Part 1 — The Story
//   Act 1 — A Puzzle      (beats 1–2)
//   Act 2 — The Mechanism (beats 3–5)
export const PART1_BEAT_DURATIONS_FRAMES = [
  270, // Beat 1 — Back to Bila
  300, // Beat 2 — She Has Changed
  300, // Beat 3 — Zoom Inside
  300, // Beat 4 — Cells That Fire Together
  330, // Beat 5 — Two Bilas
] as const;

// Part 2 — The Math
export const PART2_BEAT_DURATIONS_FRAMES = [
  360, // A1 — The Perceptron Learning Rule
  330, // A2 — Learning from Examples
] as const;

// Closing
export const CLOSING_BEAT_DURATIONS_FRAMES = [
  300, // C1 — But Not Time
] as const;

const sum = (xs: readonly number[]) => xs.reduce((a, b) => a + b, 0);

export const PART1_DURATION_FRAMES = sum(PART1_BEAT_DURATIONS_FRAMES);
export const PART2_DURATION_FRAMES = sum(PART2_BEAT_DURATIONS_FRAMES);
export const CLOSING_DURATION_FRAMES = sum(CLOSING_BEAT_DURATIONS_FRAMES);

export const CHAPTER_DURATION_FRAMES =
  PART1_DURATION_FRAMES + PART2_DURATION_FRAMES + CLOSING_DURATION_FRAMES;
