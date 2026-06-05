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
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fadeIn } from "../../../theme/transitions";

const SOURCE = { x: 0.72, y: 0.3 };

/**
 * Part 1 · Act 2 · Beat 8 — When Food and Danger Collide. Attractant and
 * repellent arrive together. Inside the cell, a molecular see-saw: each signal
 * pushes one way, and whichever is heavier wins. Here the food pull is stronger
 * — the cell runs in, danger and all.
 */
export const Beat8Collide: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // The switch wobbles, then settles toward "run" (food signal is louder).
  const tip = interpolate(
    frame,
    [50, 110, 145, 185, 245],
    [0, -0.32, 0.24, -0.55, -0.72],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  // Once resolved, the cell commits and runs toward the source.
  const cellX =
    interpolate(frame, [0, 185, 300], [0.2, 0.23, 0.6], {
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

      <TimedCaptions
        cues={[
          {
            text: "Sometimes the food and the danger arrive from the same place.",
            from: 15,
            to: 100,
          },
          {
            text: "Two receptors fire at once — one says go, one says turn away.",
            from: 105,
            to: 185,
          },
          { text: "The switch tips toward whichever is heavier.", from: 190, to: 255 },
          { text: "The cell doesn't freeze. It just — works it out.", from: 258, to: 300 },
        ]}
        bottom={60}
      />
    </AbsoluteFill>
  );
};
