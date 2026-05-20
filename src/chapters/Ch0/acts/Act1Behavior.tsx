import { Series } from "remotion";
import { Act1Beat1Ocean } from "./Act1Beat1Ocean";
import { Act1Beat2FoodSeeking } from "./Act1Beat2FoodSeeking";
import { Act1Beat3DangerFleeing } from "./Act1Beat3DangerFleeing";
import { ACT_1_BEAT_DURATIONS_FRAMES } from "../timing";

export const Act1Behavior: React.FC = () => (
  <Series>
    <Series.Sequence durationInFrames={ACT_1_BEAT_DURATIONS_FRAMES[0]}>
      <Act1Beat1Ocean />
    </Series.Sequence>
    <Series.Sequence durationInFrames={ACT_1_BEAT_DURATIONS_FRAMES[1]}>
      <Act1Beat2FoodSeeking />
    </Series.Sequence>
    <Series.Sequence durationInFrames={ACT_1_BEAT_DURATIONS_FRAMES[2]}>
      <Act1Beat3DangerFleeing />
    </Series.Sequence>
  </Series>
);
