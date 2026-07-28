import type { BeatNarration } from "./types";

/**
 * Turns a beat's measured audio clips into a frame schedule.
 *
 * This is the single place that decides *when* each spoken line starts, and
 * everything downstream reads from it: the chapter's beat durations, the audio
 * sequences, the subtitles, and any animation that needs to land on a
 * particular sentence. Because it's derived rather than hand-authored, swapping
 * the voice provider re-times the whole chapter with no edits.
 *
 * Pure functions, not hooks — callable from module scope in timing.ts.
 */

/** Beat of silence before the first line, so a cut doesn't talk over itself. */
export const LEAD_IN_FRAMES = 18;

/** Breath between spoken lines. */
export const GAP_FRAMES = 9;

/** Silence after the last line, so a beat doesn't cut on the final syllable. */
export const TAIL_FRAMES = 24;

export type ScheduledClip = {
  /** Frame the audio starts (also when the subtitle appears). */
  from: number;
  /** Frame the audio ends. */
  to: number;
  id: string;
  text: string;
  src: string;
  durationInFrames: number;
};

/**
 * Lays the clips end to end with a lead-in and a breath between each.
 * `durationInFrames` is how long the beat must last to fit its narration.
 */
export const schedule = (
  beat: BeatNarration,
): { clips: ScheduledClip[]; durationInFrames: number } => {
  let cursor = LEAD_IN_FRAMES;
  const clips = beat.clips.map((clip) => {
    const from = cursor;
    const to = from + clip.durationInFrames;
    cursor = to + GAP_FRAMES;
    return { ...clip, from, to };
  });

  // The trailing gap is replaced by the tail, not added to it.
  const spokenEnd = clips.length > 0 ? clips[clips.length - 1].to : LEAD_IN_FRAMES;
  return { clips, durationInFrames: spokenEnd + TAIL_FRAMES };
};

/**
 * How long a beat must run to carry its narration, never shorter than
 * `authoredMinimum` — a beat whose visuals need more room than its words gets
 * to keep that room.
 */
export const beatDuration = (
  beat: BeatNarration,
  authoredMinimum = 0,
): number => Math.max(schedule(beat).durationInFrames, authoredMinimum);

/**
 * Frame at which spoken line `index` begins. This is what beats anchor their
 * staging to — `cueFrame(beat, 12)` instead of a magic `330` — so the animation
 * still lands on the right sentence after the audio is regenerated.
 *
 * Negative indices count from the end: `-1` is the last line.
 */
export const cueFrame = (beat: BeatNarration, index: number): number => {
  const { clips } = schedule(beat);
  if (clips.length === 0) return 0;
  const i = index < 0 ? clips.length + index : index;
  const clamped = Math.min(Math.max(i, 0), clips.length - 1);
  return clips[clamped].from;
};

/**
 * Frame at which spoken line `index` finishes.
 */
export const cueEndFrame = (beat: BeatNarration, index: number): number => {
  const { clips } = schedule(beat);
  if (clips.length === 0) return 0;
  const i = index < 0 ? clips.length + index : index;
  const clamped = Math.min(Math.max(i, 0), clips.length - 1);
  return clips[clamped].to;
};
