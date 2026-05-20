export const FPS = 30;

// Per-beat durations for Act 1 (one entry per implemented beat).
export const ACT_1_BEAT_DURATIONS_FRAMES = [240, 240, 240] as const;

export const ACT_2_DURATION_FRAMES = 150;
export const ACT_3_DURATION_FRAMES = 150;

export const ACT_DURATIONS_FRAMES = [
  ACT_1_BEAT_DURATIONS_FRAMES.reduce((a, b) => a + b, 0),
  ACT_2_DURATION_FRAMES,
  ACT_3_DURATION_FRAMES,
] as const;

export const CHAPTER_DURATION_FRAMES = ACT_DURATIONS_FRAMES.reduce(
  (a, b) => a + b,
  0,
);
