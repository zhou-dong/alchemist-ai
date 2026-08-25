import { Series } from "remotion";
import { BeatTheVent } from "./beats/BeatTheVent";
import { BeatTheReaction } from "./beats/BeatTheReaction";
import { BeatSplitting } from "./beats/BeatSplitting";
import { PART1_BEAT_DURATIONS_FRAMES as D } from "./timing";

/**
 * Chapter 0 — The First Thing Alive.
 * A single section (Part 1 — The Story): the earliest chapter in the series,
 * before anything swims. No Prologue, no math part, no closing — the script
 * ends with the organism still exactly where it started.
 */
export const Ch0New: React.FC = () => (
  <Series>
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
