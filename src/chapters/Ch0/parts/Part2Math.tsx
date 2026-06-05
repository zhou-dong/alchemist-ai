import { Series } from "remotion";
import { BeatA1IfElse } from "../beats/BeatA1IfElse";
import { BeatA2WeightedSum } from "../beats/BeatA2WeightedSum";
import { PART2_BEAT_DURATIONS_FRAMES as D } from "../timing";

// Part 2 — The Math (algorithm register).
export const Part2Math: React.FC = () => (
  <Series>
    <Series.Sequence durationInFrames={D[0]}>
      <BeatA1IfElse />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[1]}>
      <BeatA2WeightedSum />
    </Series.Sequence>
  </Series>
);
