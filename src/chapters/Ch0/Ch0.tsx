import { Series } from "remotion";
import { Beat0Welcome } from "./beats/Beat0Welcome";
import { Part1Story } from "./parts/Part1Story";
import { Part2Math } from "./parts/Part2Math";
import { ClosingLimit } from "./parts/ClosingLimit";
import {
  PROLOGUE_DURATION_FRAMES,
  PART1_DURATION_FRAMES,
  PART2_DURATION_FRAMES,
  CLOSING_DURATION_FRAMES,
} from "./timing";

/**
 * Chapter 0 — The Simple World.
 * A series-level Prologue (welcome — Chapter 0 only), then three structural
 * sections played in order and never interleaved:
 * Part 1 (the story) → Part 2 (the math) → Closing (the limit of mechanism).
 */
export const Ch0: React.FC = () => (
  <Series>
    <Series.Sequence durationInFrames={PROLOGUE_DURATION_FRAMES}>
      <Beat0Welcome />
    </Series.Sequence>
    <Series.Sequence durationInFrames={PART1_DURATION_FRAMES}>
      <Part1Story />
    </Series.Sequence>
    <Series.Sequence durationInFrames={PART2_DURATION_FRAMES}>
      <Part2Math />
    </Series.Sequence>
    <Series.Sequence durationInFrames={CLOSING_DURATION_FRAMES}>
      <ClosingLimit />
    </Series.Sequence>
  </Series>
);
