import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { ArcheanOcean } from "../../../components/scenes/ArcheanOcean";
import { ChemicalSource } from "../../../components/scenes/ChemicalSource";
import { Bacterium } from "../../../components/characters/Bacterium";
import { SeeSaw } from "../../../components/diagrams/SeeSaw";
import { Narration } from "../../../components/Narration";
import { palette } from "../../../theme/palette";
import { fadeIn } from "../../../theme/transitions";
import {
  beatDuration,
  cueEndFrame,
  cueFrame,
} from "../../../narration/schedule";
import { narration } from "../narration.generated";

const SOURCE = { x: 0.72, y: 0.3 };

const BEAT = narration.beat8Collide;

// The switch starts contesting when the two sensors fire, and has settled by the
// end of the line that describes it tipping ("...toward whichever shove is
// stronger. Louder food signal? It goes."). Anchoring the resolve to that line's
// *end* rather than the next line's start matters: the next line describes the
// opposite outcome (danger winning), which is not what this see-saw shows.
const CONTEST_AT = cueFrame(BEAT, 13);
const RESOLVE_AT = cueEndFrame(BEAT, 14);

/**
 * Part 1 · Act 2 · Beat 8 — When Food and Danger Collide. Attractant and
 * repellent arrive together. Inside the cell, a molecular see-saw: each signal
 * pushes one way, and whichever is heavier wins. Here the food pull is stronger
 * — the cell runs in, danger and all.
 */
export const Beat8Collide: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const total = beatDuration(BEAT);

  // The switch wobbles while the conflict is described, then settles toward
  // "run" (the food signal is louder).
  const tip = interpolate(
    frame,
    [
      CONTEST_AT,
      CONTEST_AT + 60,
      CONTEST_AT + 95,
      RESOLVE_AT,
      RESOLVE_AT + 60,
    ],
    [0, -0.32, 0.24, -0.55, -0.72],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  // Once resolved, the cell commits and runs toward the source.
  const cellX =
    interpolate(frame, [0, RESOLVE_AT, total], [0.2, 0.23, 0.6], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }) * width;
  const cellY = SOURCE.y * height + 6;

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 20) }}>
      <AbsoluteFill style={{ filter: "brightness(0.85)" }}>
        <ArcheanOcean />
      </AbsoluteFill>

      {/* Food and toxin arriving from the same direction, overlapping. */}
      <div style={{ position: "absolute", left: SOURCE.x * width, top: SOURCE.y * height }}>
        <ChemicalSource color={palette.food} size={280} />
      </div>
      <div
        style={{
          position: "absolute",
          left: (SOURCE.x + 0.04) * width,
          top: (SOURCE.y + 0.03) * height,
        }}
      >
        <ChemicalSource color={palette.toxin} size={230} intensity={0.7} />
      </div>

      <div style={{ position: "absolute", left: cellX, top: cellY }}>
        <Bacterium mode="run" heading={-4} scale={1.1} />
      </div>

      {/* The molecular switch, made physical. */}
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-end" }}>
        <div style={{ marginBottom: 200 }}>
          <SeeSaw
            tip={tip}
            leftLabel="run · toward food"
            rightLabel="tumble · away"
            scale={0.7}
          />
        </div>
      </AbsoluteFill>

      {/* Subtitles sit low here so they clear the see-saw diagram. */}
      <Narration beat={BEAT} bottom={60} />
    </AbsoluteFill>
  );
};
