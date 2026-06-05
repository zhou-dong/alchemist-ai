import { Series } from "remotion";
import { Beat1AfterLongSleep } from "../beats/Beat1AfterLongSleep";
import { Beat2TwoPaths } from "../beats/Beat2TwoPaths";
import { Beat3MeetBila } from "../beats/Beat3MeetBila";
import { Beat4Coordination } from "../beats/Beat4Coordination";
import { Beat5KnotOfCells } from "../beats/Beat5KnotOfCells";
import { Beat6MovesWithPurpose } from "../beats/Beat6MovesWithPurpose";
import { Beat7InsideAndOutside } from "../beats/Beat7InsideAndOutside";
import { PART1_BEAT_DURATIONS_FRAMES as D } from "../timing";

// Part 1 — The Story (biology register).
//   Act 1 — Two Paths: beats 1–4
//   Act 2 — The Cluster: beats 5–7
export const Part1Story: React.FC = () => (
  <Series>
    <Series.Sequence durationInFrames={D[0]}>
      <Beat1AfterLongSleep />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[1]}>
      <Beat2TwoPaths />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[2]}>
      <Beat3MeetBila />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[3]}>
      <Beat4Coordination />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[4]}>
      <Beat5KnotOfCells />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[5]}>
      <Beat6MovesWithPurpose />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[6]}>
      <Beat7InsideAndOutside />
    </Series.Sequence>
  </Series>
);
