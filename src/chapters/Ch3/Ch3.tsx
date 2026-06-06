import { Series } from "remotion";
import { Part1Story } from "./parts/Part1Story";
import { Part2Math } from "./parts/Part2Math";
import { ClosingChapter } from "./parts/ClosingChapter";
import {
  PART1_DURATION_FRAMES,
  PART2_DURATION_FRAMES,
  CLOSING_DURATION_FRAMES,
} from "./timing";

/**
 * Chapter 3 — When Time Becomes a Teacher.
 * Part 1 (the story: cause vs. coincidence, STDP, anticipation) → Part 2 (the
 * math: TD learning and eligibility traces) → Closing (needs structure → Ch4).
 */
export const Ch3: React.FC = () => (
  <Series>
    <Series.Sequence durationInFrames={PART1_DURATION_FRAMES}>
      <Part1Story />
    </Series.Sequence>
    <Series.Sequence durationInFrames={PART2_DURATION_FRAMES}>
      <Part2Math />
    </Series.Sequence>
    <Series.Sequence durationInFrames={CLOSING_DURATION_FRAMES}>
      <ClosingChapter />
    </Series.Sequence>
  </Series>
);
