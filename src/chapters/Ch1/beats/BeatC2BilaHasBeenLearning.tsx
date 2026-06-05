import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Perceptron } from "../../../components/algorithms/Perceptron";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

/**
 * Closing · C2 — Bila Has Been Learning. The full perceptron, its weight dials
 * shifting slowly — changes we hadn't noticed. Bila has nearly everything a
 * neural network needs; the one thing left is how the weights change. The
 * bridge to Chapter 2.
 */
export const BeatC2BilaHasBeenLearning: React.FC = () => {
  const frame = useCurrentFrame();

  // Weights drift slowly — the learning we hadn't been watching.
  const w = (base: number, i: number) =>
    Math.max(0.1, Math.min(0.95, base + Math.sin(frame * 0.05 + i * 1.7) * 0.18));

  const inputs = [
    { label: "food", weight: w(0.7, 0), color: palette.food, reveal: 1 },
    { label: "danger", weight: w(0.5, 1), color: palette.predator, reveal: 1 },
    { label: "hunger", weight: w(0.6, 2), color: palette.earthLava, reveal: 1 },
    { label: "arousal", weight: w(0.45, 3), color: palette.matPurple, reveal: 1 },
  ];
  const note = interpolate(frame, [120, 155], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#04080e", opacity: fadeIn(frame, 20), alignItems: "center", justifyContent: "center" }}>
      <Perceptron inputs={inputs} bias={-0.2} output={1} showOutput scale={0.95} />

      <div
        style={{
          position: "absolute",
          bottom: 150,
          fontFamily,
          color: palette.textMuted,
          fontSize: 30,
          fontStyle: "italic",
          opacity: note,
        }}
      >
        the weights have been changing, all along
      </div>

      <TimedCaptions
        cues={[
          { text: "Bila has, by now, almost everything you'd need to build a neural network.", from: 25, to: 110 },
          { text: "But one thing we haven't watched: how those weights change.", from: 115, to: 195 },
          { text: "They've been shifting all along — the cluster has been learning. That is the next chapter.", from: 200, to: 270 },
        ]}
        bottom={64}
      />
    </AbsoluteFill>
  );
};
