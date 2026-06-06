import { Series } from "remotion";
import { Beat1SameOceanSameBila } from "../beats/Beat1SameOceanSameBila";
import { Beat2HebbGetsItWrong } from "../beats/Beat2HebbGetsItWrong";
import { Beat3WorldHasOrder } from "../beats/Beat3WorldHasOrder";
import { Beat4STDP } from "../beats/Beat4STDP";
import { Beat5DawnOfAnticipation } from "../beats/Beat5DawnOfAnticipation";
import { PART1_BEAT_DURATIONS_FRAMES as D } from "../timing";

// Part 1 — The Story (biology register).
//   Act 1 — A Puzzle: beats 1–2
//   Act 2 — The Refinement: beats 3–5
export const Part1Story: React.FC = () => (
  <Series>
    <Series.Sequence durationInFrames={D[0]}>
      <Beat1SameOceanSameBila />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[1]}>
      <Beat2HebbGetsItWrong />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[2]}>
      <Beat3WorldHasOrder />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[3]}>
      <Beat4STDP />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[4]}>
      <Beat5DawnOfAnticipation />
    </Series.Sequence>
  </Series>
);
