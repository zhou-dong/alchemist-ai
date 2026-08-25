import { beatDuration } from "../../narration/schedule";
import { narration } from "./narration.generated";

export const FPS = 30;

/**
 * Chapter 0 (new) timing, derived from the narration audio — see Ch0/timing.ts
 * for the pattern this follows. This chapter has a single section (Part 1 —
 * The Story) and no Prologue/Part2/Closing, matching its script.
 */

/** Authored floors, per beat, in script order. */
const MIN = {
  part1: [270, 240, 300],
} as const;

export const PART1_BEAT_DURATIONS_FRAMES = [
  beatDuration(narration.beatTheVent, MIN.part1[0]),
  beatDuration(narration.beatTheReaction, MIN.part1[1]),
  beatDuration(narration.beatSplitting, MIN.part1[2]),
] as const;

const sum = (xs: readonly number[]) => xs.reduce((a, b) => a + b, 0);

export const PART1_DURATION_FRAMES = sum(PART1_BEAT_DURATIONS_FRAMES);

export const CHAPTER_DURATION_FRAMES = PART1_DURATION_FRAMES;
