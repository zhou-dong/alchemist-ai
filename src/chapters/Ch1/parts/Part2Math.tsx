import { Series } from "remotion";
import { BeatA1Perceptron } from "../beats/BeatA1Perceptron";
import { BeatA2InternalSignals } from "../beats/BeatA2InternalSignals";
import { PART2_BEAT_DURATIONS_FRAMES as D } from "../timing";

// Part 2 — The Math (algorithm register).
export const Part2Math: React.FC = () => (
  <Series>
    <Series.Sequence durationInFrames={D[0]}>
      <BeatA1Perceptron />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[1]}>
      <BeatA2InternalSignals />
    </Series.Sequence>
  </Series>
);
