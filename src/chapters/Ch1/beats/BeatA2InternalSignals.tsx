import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Perceptron } from "../../../components/algorithms/Perceptron";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

/**
 * Part 2 · A2 — Internal Signals Join the Sum. Hunger and arousal fade in
 * alongside food and danger — indistinguishable in the math. The perceptron
 * doesn't care what its inputs are; each is just a number with a weight. That
 * input-agnosticism is why it underlies every neural network.
 */
export const BeatA2InternalSignals: React.FC = () => {
  const frame = useCurrentFrame();

  const inputs = [
    { label: "food", weight: 0.7, color: palette.food, reveal: 1 },
    { label: "danger", weight: 0.5, color: palette.predator, reveal: 1 },
    { label: "hunger", weight: 0.6, color: palette.earthLava, reveal: fadeIn(frame - 40, 25) },
    { label: "arousal", weight: 0.45, color: palette.matPurple, reveal: fadeIn(frame - 75, 25) },
  ];
  const note = interpolate(frame, [120, 150, 240, 270], [0, 1, 1, 0.6], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#04080e", opacity: fadeIn(frame, 20), alignItems: "center", justifyContent: "center" }}>
      <Perceptron inputs={inputs} bias={-0.2} output={1} showOutput showFormula formulaOpacity={1} scale={0.95} />

      <div
        style={{
          position: "absolute",
          top: 90,
          fontFamily,
          color: palette.textMuted,
          fontSize: 30,
          fontStyle: "italic",
          opacity: note,
        }}
      >
        the inputs can come from anywhere
      </div>

      <TimedCaptions
        cues={[
          { text: "The perceptron doesn't care what its inputs are. To the math, they're just numbers.", from: 25, to: 115 },
          { text: "Hunger, arousal, food, danger — each gets a weight. Multiply, add, output.", from: 120, to: 205 },
          { text: "The meaning lives elsewhere. The cluster just does the math.", from: 210, to: 270 },
        ]}
      />
    </AbsoluteFill>
  );
};
