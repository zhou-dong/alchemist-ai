import { Series } from "remotion";
import { Act1MissingElement } from "./acts/Act1MissingElement";
import { Act2Trace } from "./acts/Act2Trace";
import { Act3Ceiling } from "./acts/Act3Ceiling";
import { ACT_DURATION_FRAMES } from "./timing";

export const Ch3: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={ACT_DURATION_FRAMES}>
        <Act1MissingElement />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ACT_DURATION_FRAMES}>
        <Act2Trace />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ACT_DURATION_FRAMES}>
        <Act3Ceiling />
      </Series.Sequence>
    </Series>
  );
};
