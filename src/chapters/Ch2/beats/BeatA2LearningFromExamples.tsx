import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Perceptron } from "../../../components/algorithms/Perceptron";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

const RESULTS = 22;

/**
 * Part 2 · A2 — Learning from Examples. A stream of examples arrives; the
 * results shift from wrong (red) to right (green) as the weights settle. By the
 * end the perceptron answers correctly — even on examples it has never seen. It
 * has learned the pattern.
 */
export const BeatA2LearningFromExamples: React.FC = () => {
  const frame = useCurrentFrame();
  const t = interpolate(frame, [20, 300], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const inputs = [
    { label: "food", weight: interpolate(t, [0, 1], [0.3, 0.85]), color: palette.food, reveal: 1 },
    { label: "danger", weight: interpolate(t, [0, 1], [0.5, 0.3]), color: palette.predator, reveal: 1 },
  ];

  const accuracy = interpolate(t, [0, 1], [0.5, 0.98]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#04080e", opacity: fadeIn(frame, 20), alignItems: "center", justifyContent: "center" }}>
      <Perceptron inputs={inputs} bias={-0.2} output={1} showOutput scale={0.82} />

      {/* Stream of results: early ones wrong (red), later ones right (green). */}
      <div style={{ position: "absolute", top: "16%", display: "flex", gap: 10 }}>
        {Array.from({ length: RESULTS }).map((_, i) => {
          const appear = fadeIn(frame - (15 + i * 12), 10);
          const right = i >= 6; // the perceptron stops being wrong after a few
          return (
            <div
              key={i}
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                opacity: appear,
                backgroundColor: right ? palette.food : palette.predator,
              }}
            />
          );
        })}
      </div>

      {/* Accuracy readout. */}
      <div style={{ position: "absolute", bottom: 150, fontFamily, color: palette.text, fontSize: 32, textAlign: "center" }}>
        <span style={{ color: palette.textMuted }}>accuracy </span>
        {(accuracy * 100).toFixed(0)}%
        <div style={{ width: 360, height: 10, borderRadius: 5, backgroundColor: "rgba(255,255,255,0.1)", marginTop: 10 }}>
          <div style={{ width: `${accuracy * 100}%`, height: "100%", borderRadius: 5, backgroundColor: palette.food }} />
        </div>
      </div>

      <TimedCaptions
        cues={[
          { text: "Show another. And another. A third. A fourth. A thousand.", from: 25, to: 115 },
          { text: "The results shift from wrong to right as the weights find their place.", from: 120, to: 210 },
          { text: "Now it answers — even on examples it has never seen. It has learned.", from: 215, to: 330 },
        ]}
        bottom={60}
      />
    </AbsoluteFill>
  );
};
