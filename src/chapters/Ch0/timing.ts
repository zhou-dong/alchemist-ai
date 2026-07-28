import { beatDuration } from "../../narration/schedule";
import { narration } from "./narration.generated";

export const FPS = 30;

/**
 * Chapter 0 timing, derived from the narration audio.
 *
 * The voice defines the pace: each beat lasts as long as its spoken lines take,
 * plus a lead-in and a tail (see ../../narration/schedule). The numbers in the
 * comments below are the durations these beats were originally authored at, kept
 * as *floors* — a beat whose visuals need more room than its words still gets
 * that room. Everything else follows from the measured audio, so regenerating
 * the voice re-times the chapter with no edits here.
 */

/** Authored floors, per beat, in script order. */
const MIN = {
  prologue: 240,
  part1: [240, 240, 240, 420, 240, 300, 270, 300],
  part2: [270, 330],
  closing: [270, 240, 240],
} as const;

// Prologue — Welcome (Chapter 0 only: the series' front door, before Part 1).
export const PROLOGUE_DURATION_FRAMES = beatDuration(
  narration.beat0Welcome,
  MIN.prologue,
);

// Part 1 — The Story
//   Act 1 — A Simpler World            (beats 1–3)
//   Act 2 — Two Behaviors, One Mechanism (beats 4–8)
export const PART1_BEAT_DURATIONS_FRAMES = [
  beatDuration(narration.beat1YoungEarth, MIN.part1[0]), // Beat 1 — The Young Earth (Chronicle)
  beatDuration(narration.beat2FirstOceans, MIN.part1[1]), // Beat 2 — The First Oceans
  beatDuration(narration.beat3MeetTheCell, MIN.part1[2]), // Beat 3 — Meet the Cell
  beatDuration(narration.beat4FindingFood, MIN.part1[3]), // Beat 4 — Finding Food (motor close-up + the climb)
  beatDuration(narration.beat5AvoidingDanger, MIN.part1[4]), // Beat 5 — Avoiding Danger
  beatDuration(narration.beat6SameTwoMoves, MIN.part1[5]), // Beat 6 — Same Two Moves
  beatDuration(narration.beat7SimpleRule, MIN.part1[6]), // Beat 7 — The Simple Rule
  beatDuration(narration.beat8Collide, MIN.part1[7]), // Beat 8 — When Food and Danger Collide
] as const;

// Part 2 — The Math
export const PART2_BEAT_DURATIONS_FRAMES = [
  beatDuration(narration.beatA1IfElse, MIN.part2[0]), // A1 — The If/Else
  beatDuration(narration.beatA2WeightedSum, MIN.part2[1]), // A2 — The Implicit Weighted Sum
] as const;

// Closing — The Limit of Mechanism
export const CLOSING_BEAT_DURATIONS_FRAMES = [
  beatDuration(narration.beatC1NoOneDeciding, MIN.closing[0]), // C1 — No One Is Deciding
  beatDuration(narration.beatC2TheLimit, MIN.closing[1]), // C2 — The Limit
  beatDuration(narration.beatC3WhatsAboutToArrive, MIN.closing[2]), // C3 — What's About to Arrive
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
