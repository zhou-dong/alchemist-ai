import { Series } from "remotion";
import { BeatC1NoOneDeciding } from "../beats/BeatC1NoOneDeciding";
import { BeatC2TheLimit } from "../beats/BeatC2TheLimit";
import { BeatC3WhatsAboutToArrive } from "../beats/BeatC3WhatsAboutToArrive";
import { CLOSING_BEAT_DURATIONS_FRAMES as D } from "../timing";

// Closing — The Limit of Mechanism (reflective coda + bridge to Chapter 1).
export const ClosingLimit: React.FC = () => (
  <Series>
    <Series.Sequence durationInFrames={D[0]}>
      <BeatC1NoOneDeciding />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[1]}>
      <BeatC2TheLimit />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[2]}>
      <BeatC3WhatsAboutToArrive />
    </Series.Sequence>
  </Series>
);
