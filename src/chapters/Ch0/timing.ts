export const FPS = 30;

// Prologue — Welcome (Chapter 0 only: the series' front door, before Part 1).
export const PROLOGUE_DURATION_FRAMES = 610;

// Per-beat durations in frames, grouped by structural part of the chapter.
// Order matches the finalized ch0 script (Prologue → Part 1 → Part 2 → Closing).

// Part 1 — The Story
//   Act 1 — A Simpler World            (beats 1–3)
//   Act 2 — Two Behaviors, One Mechanism (beats 4–8)
export const PART1_BEAT_DURATIONS_FRAMES = [
  300, // Beat 1 — The Young Earth (Chronicle)
  240, // Beat 2 — The First Oceans
  270, // Beat 3 — Meet the Cell
  300, // Beat 4 — Finding Food
  270, // Beat 5 — Avoiding Danger
  300, // Beat 6 — Same Two Moves
  270, // Beat 7 — The Simple Rule
  300, // Beat 8 — When Food and Danger Collide
] as const;

// Part 2 — The Math
export const PART2_BEAT_DURATIONS_FRAMES = [
  270, // A1 — The If/Else
  330, // A2 — The Implicit Weighted Sum
] as const;

// Closing — The Limit of Mechanism
export const CLOSING_BEAT_DURATIONS_FRAMES = [
  270, // C1 — No One Is Deciding
  240, // C2 — The Limit
  240, // C3 — What's About to Arrive
] as const;

const sum = (xs: readonly number[]) => xs.reduce((a, b) => a + b, 0);

export const PART1_DURATION_FRAMES = sum(PART1_BEAT_DURATIONS_FRAMES);
export const PART2_DURATION_FRAMES = sum(PART2_BEAT_DURATIONS_FRAMES);
export const CLOSING_DURATION_FRAMES = sum(CLOSING_BEAT_DURATIONS_FRAMES);

export const CHAPTER_DURATION_FRAMES =
  PROLOGUE_DURATION_FRAMES +
  PART1_DURATION_FRAMES +
  PART2_DURATION_FRAMES +
  CLOSING_DURATION_FRAMES;
