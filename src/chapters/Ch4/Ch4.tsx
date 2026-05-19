import { Series } from "remotion";
import { Act1NewWorld } from "./acts/Act1NewWorld";
import { Act2Flood } from "./acts/Act2Flood";
import { Act3Layers } from "./acts/Act3Layers";
import { ACT_DURATION_FRAMES } from "./timing";

export const Ch4: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={ACT_DURATION_FRAMES}>
        <Act1NewWorld />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ACT_DURATION_FRAMES}>
        <Act2Flood />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ACT_DURATION_FRAMES}>
        <Act3Layers />
      </Series.Sequence>
    </Series>
  );
};
