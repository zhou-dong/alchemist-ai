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
 * Chapter 2 — When Weights Learn.
 * Part 1 (the story: Bila's synapses rewriting themselves) → Part 2 (the math:
 * the perceptron learning rule) → Closing (what it ignores: time → Chapter 3).
 */
export const Ch2: React.FC = () => (
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
