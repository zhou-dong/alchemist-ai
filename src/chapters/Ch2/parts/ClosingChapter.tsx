import { Series } from "remotion";
import { BeatC1ButNotTime } from "../beats/BeatC1ButNotTime";
import { CLOSING_BEAT_DURATIONS_FRAMES as D } from "../timing";

// Closing — what Bila's learning still ignores; the bridge to Chapter 3 (time).
export const ClosingChapter: React.FC = () => (
  <Series>
    <Series.Sequence durationInFrames={D[0]}>
      <BeatC1ButNotTime />
    </Series.Sequence>
  </Series>
);
