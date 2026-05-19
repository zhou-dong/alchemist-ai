import { Series } from "remotion";
import { Act1Failure } from "./acts/Act1Failure";
import { Act2Network } from "./acts/Act2Network";
import { Act3Learning } from "./acts/Act3Learning";
import { ACT_DURATION_FRAMES } from "./timing";

export const Ch2: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={ACT_DURATION_FRAMES}>
        <Act1Failure />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ACT_DURATION_FRAMES}>
        <Act2Network />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ACT_DURATION_FRAMES}>
        <Act3Learning />
      </Series.Sequence>
    </Series>
  );
};
