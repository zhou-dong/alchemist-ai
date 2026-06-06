import { AbsoluteFill, useCurrentFrame } from "remotion";
import { TDError } from "../../../components/algorithms/TDError";
import { TimedCaptions } from "../../../components/Caption";
import { fadeIn } from "../../../theme/transitions";

/**
 * Part 2 · A1 — TD Learning. A learning system predicts how good things are
 * about to be, observes what actually happens, and adjusts by the difference:
 * update = actual − predicted. Across cycles, predictions chase reality.
 * Richard Sutton, 1988 — the founding algorithm of reinforcement learning.
 */
export const BeatA1TDLearning: React.FC = () => {
  const frame = useCurrentFrame();

  const cyc = Math.floor(frame / 90);
  const inP = (frame % 90) / 90;

  // Predictions converge toward the true value across cycles.
  const predicted = 0.3 + 0.5 * (1 - Math.exp(-cyc * 0.55));
  const actualVal = 0.8;
  const showActual = inP > 0.4;
  const actual = showActual ? actualVal : null;
  const flash = showActual ? (actualVal > predicted ? "reward" : "punish") : null;

  return (
    <AbsoluteFill style={{ backgroundColor: "#04080e", opacity: fadeIn(frame, 20), alignItems: "center", justifyContent: "center" }}>
      <TDError predicted={predicted} actual={actual} flash={flash} showFormula scale={1.1} />

      <TimedCaptions
        cues={[
          { text: "A learning system has a prediction of how good things are about to be.", from: 30, to: 120 },
          { text: "Something happens. It compares its prediction to what actually came — and adjusts.", from: 125, to: 215 },
          { text: "update = actual − predicted. Predictions chase reality, over time.", from: 220, to: 305 },
          { text: "Richard Sutton, 1988 — TD Learning, the root of reinforcement learning.", from: 310, to: 360 },
        ]}
        bottom={60}
      />
    </AbsoluteFill>
  );
};
