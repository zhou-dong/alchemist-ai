import { Series } from "remotion";
import { BeatA1LearningRule } from "../beats/BeatA1LearningRule";
import { BeatA2LearningFromExamples } from "../beats/BeatA2LearningFromExamples";
import { PART2_BEAT_DURATIONS_FRAMES as D } from "../timing";

// Part 2 — The Math (algorithm register).
export const Part2Math: React.FC = () => (
  <Series>
    <Series.Sequence durationInFrames={D[0]}>
      <BeatA1LearningRule />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[1]}>
      <BeatA2LearningFromExamples />
    </Series.Sequence>
  </Series>
);
