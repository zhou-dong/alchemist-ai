import { Series } from "remotion";
import { Beat1BackToBila } from "../beats/Beat1BackToBila";
import { Beat2SheHasChanged } from "../beats/Beat2SheHasChanged";
import { Beat3ZoomInside } from "../beats/Beat3ZoomInside";
import { Beat4CellsFireTogether } from "../beats/Beat4CellsFireTogether";
import { Beat5TwoBilas } from "../beats/Beat5TwoBilas";
import { PART1_BEAT_DURATIONS_FRAMES as D } from "../timing";

// Part 1 — The Story (biology register).
//   Act 1 — A Puzzle: beats 1–2
//   Act 2 — The Mechanism: beats 3–5
export const Part1Story: React.FC = () => (
  <Series>
    <Series.Sequence durationInFrames={D[0]}>
      <Beat1BackToBila />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[1]}>
      <Beat2SheHasChanged />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[2]}>
      <Beat3ZoomInside />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[3]}>
      <Beat4CellsFireTogether />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[4]}>
      <Beat5TwoBilas />
    </Series.Sequence>
  </Series>
);
