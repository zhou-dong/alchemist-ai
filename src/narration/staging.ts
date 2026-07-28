import { interpolate } from "remotion";
import { beatDuration, schedule } from "./schedule";
import type { BeatNarration } from "./types";

/**
 * Helpers for stretching a beat's authored staging to fit its narration.
 *
 * Beats were originally choreographed against ~300-frame durations; narration
 * makes them several times longer. Rather than finishing early and idling, the
 * staging is *stretched* to fill the beat — the cell swims the same path, just
 * more slowly, which suits the series' contemplative pace.
 *
 * What must NOT be stretched:
 *   - intrinsic per-frame motion inside characters (flagellar wiggle, mote
 *     drift, motor spin). Slowing those would make the creatures look dead.
 *   - fade in/out durations, which stay at their authored ~20–30 frames so cuts
 *     don't turn sluggish.
 *
 * Stretch applies to *staging progress* — where along its path the cell is, when
 * a reveal lands — not to liveliness.
 */

/**
 * Maps real frames onto the authored timeline, so existing `interpolate` ranges
 * written against `authoredDuration` keep working unchanged.
 *
 * A beat that was authored over 300 frames but now runs 2800 calls
 * `stagingFrame(frame, beat, 300)` and gets back 0..300, slowed ~9×.
 */
export const stagingFrame = (
  frame: number,
  beat: BeatNarration,
  authoredDuration: number,
): number => {
  const actual = beatDuration(beat);
  if (actual <= 0) return frame;
  return (frame / actual) * authoredDuration;
};

/** Progress through the beat, 0 at its first frame and 1 at its last. */
export const stagingProgress = (frame: number, beat: BeatNarration): number => {
  const actual = beatDuration(beat);
  return actual <= 0 ? 0 : Math.min(Math.max(frame / actual, 0), 1);
};

/**
 * Spreads `count` staged events evenly across the spoken lines, returning the
 * frame each should fire on. Use when a beat reveals a sequence of things (a row
 * of dominoes, successive labels) and the exact sentence for each doesn't matter
 * — only that they keep pace with the voice.
 */
export const spreadCues = (beat: BeatNarration, count: number): number[] => {
  const { clips } = schedule(beat);
  if (clips.length === 0 || count <= 0) return [];
  return Array.from({ length: count }, (_, i) => {
    const t = count === 1 ? 0 : i / (count - 1);
    const index = Math.round(t * (clips.length - 1));
    return clips[index].from;
  });
};

/**
 * Eases 0→1 as the beat crosses `startFrame`, over `durationInFrames` real
 * frames (not stretched — reveals should stay crisp).
 */
export const revealAt = (
  frame: number,
  startFrame: number,
  durationInFrames = 25,
): number =>
  interpolate(frame, [startFrame, startFrame + durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
