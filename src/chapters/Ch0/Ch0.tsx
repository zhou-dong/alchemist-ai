import { Series } from "remotion";
import { Part1Story } from "./parts/Part1Story";
import { Part2Math } from "./parts/Part2Math";
import { ClosingLimit } from "./parts/ClosingLimit";
import {
  PART1_DURATION_FRAMES,
  PART2_DURATION_FRAMES,
  CLOSING_DURATION_FRAMES,
} from "./timing";

/**
 * Chapter 0 — The Simple World.
 * Three structural sections, played in order and never interleaved:
 * Part 1 (the story) → Part 2 (the math) → Closing (the limit of mechanism).
 */
export const Ch0: React.FC = () => (
  <Series>
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
