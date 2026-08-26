import { Series } from "remotion";
import { Beat0Welcome } from "./beats/Beat0Welcome";
import { BeatTheVent } from "./beats/BeatTheVent";
import { BeatTheReaction } from "./beats/BeatTheReaction";
import { BeatSplitting } from "./beats/BeatSplitting";
import {
  PROLOGUE_DURATION_FRAMES,
  PART1_BEAT_DURATIONS_FRAMES as D,
} from "./timing";

/**
 * Chapter 0 — The First Thing Alive.
 * The series' Prologue (welcome — Chapter 0 only), then a single section
 * (Part 1 — The Story): the earliest chapter in the series, before anything
 * swims. No math part, no closing — the script ends with the organism still
 * exactly where it started.
 */
export const Ch0New: React.FC = () => (
  <Series>
    <Series.Sequence durationInFrames={PROLOGUE_DURATION_FRAMES}>
      <Beat0Welcome />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[0]}>
      <BeatTheVent />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[1]}>
      <BeatTheReaction />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[2]}>
      <BeatSplitting />
    </Series.Sequence>
  </Series>
);
