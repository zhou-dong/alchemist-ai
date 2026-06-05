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
 * Chapter 1 — When Many Cells Move as One.
 * Part 1 (the story: Bila and her nervous cluster) → Part 2 (the math: the
 * perceptron) → Closing (the road to a brain; bridge to learning weights).
 */
export const Ch1: React.FC = () => (
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
