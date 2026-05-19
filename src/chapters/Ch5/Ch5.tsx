import { Series } from "remotion";
import { Act1MissingPiece } from "./acts/Act1MissingPiece";
import { Act2ActorArrives } from "./acts/Act2ActorArrives";
import { Act3Horizon } from "./acts/Act3Horizon";
import { ACT_DURATION_FRAMES } from "./timing";

export const Ch5: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={ACT_DURATION_FRAMES}>
        <Act1MissingPiece />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ACT_DURATION_FRAMES}>
        <Act2ActorArrives />
      </Series.Sequence>
      <Series.Sequence durationInFrames={ACT_DURATION_FRAMES}>
        <Act3Horizon />
      </Series.Sequence>
    </Series>
  );
};
