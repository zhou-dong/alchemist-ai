import { Series } from "remotion";
import { Act1ExternalConflict } from "./acts/Act1ExternalConflict";
import { Act2Perceptron } from "./acts/Act2Perceptron";
import { Act3InnerWorld } from "./acts/Act3InnerWorld";
import { ACT_DURATION_FRAMES } from "./timing";

export const Ch1: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={ACT_DURATION_FRAMES}>
        <Act1ExternalConflict />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ACT_DURATION_FRAMES}>
        <Act2Perceptron />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ACT_DURATION_FRAMES}>
        <Act3InnerWorld />
      </Series.Sequence>
    </Series>
  );
};
