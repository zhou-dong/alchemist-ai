/**
 * The narration layer: spoken audio extracted from the chapter scripts.
 *
 * Sits alongside the palette → character → beat layers. A beat consumes
 * narration; characters know nothing about it. Because durations here are
 * *measured* from real audio, they are the source of truth for how long a beat
 * lasts — see each chapter's timing.ts.
 */

/** One spoken line, rendered as one audio file. */
export type NarrationClip = {
  /** Stable id, e.g. "beat4FindingFood-007". */
  id: string;
  /** The line as written in the script — also used as the on-screen subtitle. */
  text: string;
  /** Path under public/, for staticFile(). */
  src: string;
  /** Measured length of the rendered audio, rounded up to whole frames. */
  durationInFrames: number;
};

/** All narration for a single beat, in spoken order. */
export type BeatNarration = {
  /** Key used in code, e.g. "beat4FindingFood". */
  key: string;
  /** The beat's heading in the chapter script, for traceability. */
  heading: string;
  clips: readonly NarrationClip[];
};
