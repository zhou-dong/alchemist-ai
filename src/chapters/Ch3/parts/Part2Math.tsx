import { Series } from "remotion";
import { BeatA1TDLearning } from "../beats/BeatA1TDLearning";
import { BeatA2EligibilityTraces } from "../beats/BeatA2EligibilityTraces";
import { PART2_BEAT_DURATIONS_FRAMES as D } from "../timing";

// Part 2 — The Math (algorithm register).
export const Part2Math: React.FC = () => (
  <Series>
    <Series.Sequence durationInFrames={D[0]}>
      <BeatA1TDLearning />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[1]}>
      <BeatA2EligibilityTraces />
    </Series.Sequence>
  </Series>
);
