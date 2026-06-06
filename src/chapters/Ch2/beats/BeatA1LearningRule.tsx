import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Perceptron } from "../../../components/algorithms/Perceptron";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";

/**
 * Part 2 · A1 — The Perceptron Learning Rule. A training cycle: an example
 * arrives, the perceptron answers, we compare to the target, and each weight
 * nudges toward the answer that would have been right. Across cycles the weights
 * drift until the output matches. Rosenblatt, 1958 — the first learning rule.
 */
export const BeatA1LearningRule: React.FC = () => {
  const frame = useCurrentFrame();

  const cyc = Math.floor(frame / 90);
  const p = (frame % 90) / 90;

  const foodW = Math.min(0.92, 0.28 + cyc * 0.18);
  const dangerW = Math.max(0.15, 0.5 - cyc * 0.07);
  const actual: 0 | 1 = foodW > 0.62 ? 1 : 0;
  const target = 1;
  const correct = actual === target;

  const inputs = [
    { label: "food = 1", weight: foodW, color: palette.food, reveal: 1 },
    { label: "danger = 0", weight: dangerW, color: palette.predator, reveal: 1 },
  ];

  // The comparison/update panel appears in the back half of each cycle.
  const panel = interpolate(p, [0.45, 0.6], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const formulaOpacity = fadeIn(frame - 30, 30);

  return (
    <AbsoluteFill style={{ backgroundColor: "#04080e", opacity: fadeIn(frame, 20), alignItems: "center", justifyContent: "center" }}>
      <Perceptron inputs={inputs} bias={-0.2} output={actual} showOutput scale={0.88} />

      {/* Target vs actual comparison. */}
      <div
        style={{
          position: "absolute",
          right: 150,
          top: "30%",
          opacity: panel,
          fontFamily,
          fontSize: 30,
          textAlign: "center",
        }}
      >
        <div style={{ color: palette.textMuted }}>target: {target}</div>
        <div style={{ color: palette.text }}>actual: {actual}</div>
        <div style={{ marginTop: 8, color: correct ? palette.food : palette.predator, fontSize: 34, fontWeight: 500 }}>
          {correct ? "✓ right" : "✗ wrong → adjust"}
        </div>
      </div>

      {/* The learning rule. */}
      <div
        style={{
          position: "absolute",
          bottom: 150,
          opacity: formulaOpacity,
          fontFamily: mono,
          fontSize: 34,
          color: palette.text,
          backgroundColor: "rgba(255,255,255,0.04)",
          border: `1px solid ${palette.textMuted}44`,
          borderRadius: 12,
          padding: "20px 34px",
        }}
      >
        new weight = old weight + (target − actual) × input
      </div>

      <TimedCaptions
        cues={[
          { text: "Show the perceptron an example. It answers. We tell it whether it was right.", from: 30, to: 125 },
          { text: "If wrong, nudge each weight toward the answer that would have been right.", from: 130, to: 220 },
          { text: "That's the whole rule — Rosenblatt, 1958. The simplest learning algorithm there is.", from: 225, to: 360 },
        ]}
        bottom={60}
      />
    </AbsoluteFill>
  );
};
