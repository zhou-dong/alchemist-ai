import { Series } from "remotion";
import { BeatC1ButNotStructure } from "../beats/BeatC1ButNotStructure";
import { CLOSING_BEAT_DURATIONS_FRAMES as D } from "../timing";

// Closing — what Bila's brain still cannot do; the bridge to Chapter 4 (structure).
export const ClosingChapter: React.FC = () => (
  <Series>
    <Series.Sequence durationInFrames={D[0]}>
      <BeatC1ButNotStructure />
    </Series.Sequence>
  </Series>
);
