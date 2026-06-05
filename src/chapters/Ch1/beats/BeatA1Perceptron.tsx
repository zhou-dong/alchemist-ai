import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Perceptron } from "../../../components/algorithms/Perceptron";
import { NervousCluster } from "../../../components/diagrams/NervousCluster";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fadeIn } from "../../../theme/transitions";

/**
 * Part 2 · A1 — The Perceptron. The cluster, stripped of biology: weighted
 * inputs summed with a bias through a step to a binary output. The shape Frank
 * Rosenblatt drew in 1958 — and the one evolution found first, in an Ediacaran
 * worm. A blueprint of Bila's cluster overlays the diagram, then fades.
 */
export const BeatA1Perceptron: React.FC = () => {
  const frame = useCurrentFrame();

  const inputs = [
    { label: "food", weight: 0.75, color: palette.food, reveal: fadeIn(frame - 40, 25) },
    { label: "danger", weight: 0.5, color: palette.predator, reveal: fadeIn(frame - 70, 25) },
  ];
  const formulaOpacity = fadeIn(frame - 200, 30);
  const blueprint = interpolate(frame, [40, 90, 150, 190], [0, 0.4, 0.4, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#04080e", opacity: fadeIn(frame, 20), alignItems: "center", justifyContent: "center" }}>
      {/* Blueprint of the biological cluster, behind, fading. */}
      <div style={{ position: "absolute", opacity: blueprint }}>
        <NervousCluster scale={2.6} activity={0.5} />
      </div>

      <Perceptron inputs={inputs} bias={-0.2} output={1} showOutput showFormula formulaOpacity={formulaOpacity} scale={0.95} />

      <TimedCaptions
        cues={[
          { text: "The cluster did this: multiply each signal by a weight, add them, add a baseline, decide.", from: 30, to: 125 },
          { text: "This shape has a name. We call it the perceptron.", from: 130, to: 210, size: 50 },
          { text: "Frank Rosenblatt drew the first one in 1958. It could learn. Barely. But it could.", from: 215, to: 305 },
          { text: "Evolution found it first — inside a soft little Ediacaran worm.", from: 310, to: 360 },
        ]}
      />
    </AbsoluteFill>
  );
};
