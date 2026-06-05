import { Series } from "remotion";
import { BeatC1RadiatansAnswer } from "../beats/BeatC1RadiatansAnswer";
import { BeatC2BilaHasBeenLearning } from "../beats/BeatC2BilaHasBeenLearning";
import { CLOSING_BEAT_DURATIONS_FRAMES as D } from "../timing";

// Closing — the path Bila took, and the bridge to Chapter 2 (when weights learn).
export const ClosingChapter: React.FC = () => (
  <Series>
    <Series.Sequence durationInFrames={D[0]}>
      <BeatC1RadiatansAnswer />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[1]}>
      <BeatC2BilaHasBeenLearning />
    </Series.Sequence>
  </Series>
);
