import { Series } from "remotion";
import { Act1Behavior } from "./acts/Act1Behavior";
import { Act2TheRule } from "./acts/Act2TheRule";
import { Act3Weight } from "./acts/Act3Weight";
import { ACT_DURATION_FRAMES } from "./timing";

export const Ch0: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={ACT_DURATION_FRAMES}>
        <Act1Behavior />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ACT_DURATION_FRAMES}>
        <Act2TheRule />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ACT_DURATION_FRAMES}>
        <Act3Weight />
      </Series.Sequence>
    </Series>
  );
};
