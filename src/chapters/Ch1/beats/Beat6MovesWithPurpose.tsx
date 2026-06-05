import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { EdiacaranOcean } from "../../../components/scenes/EdiacaranOcean";
import { ChemicalSource } from "../../../components/scenes/ChemicalSource";
import { Bila } from "../../../components/characters/Bila";
import { NervousCluster } from "../../../components/diagrams/NervousCluster";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fadeIn } from "../../../theme/transitions";

const FOOD = { x: 0.72, y: 0.28 };
const DANGER = { x: 0.78, y: 0.72 };

/**
 * Part 1 · Act 2 · Beat 6 — Bila Moves with Purpose. Sensors pick up the world,
 * signals travel inward to the cluster, the cluster weighs and decides, and one
 * command goes out to the muscles. The whole body turns as one — toward food,
 * away from danger.
 */
export const Beat6MovesWithPurpose: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const bx = interpolate(frame, [0, 60, 150, 185, 300], [0.3, 0.3, 0.55, 0.55, 0.2], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }) * width;
  const by = interpolate(frame, [0, 60, 150, 185, 300], [0.55, 0.55, 0.38, 0.38, 0.5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }) * height;
  const heading = interpolate(frame, [0, 60, 150, 185, 300], [0, -18, -18, 195, 195], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const flow = (frame % 75) / 75;

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 20) }}>
      <EdiacaranOcean />

      <div style={{ position: "absolute", left: FOOD.x * width, top: FOOD.y * height, opacity: interpolate(frame, [30, 60, 150, 175], [0, 1, 1, 0.2], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
        <ChemicalSource color={palette.food} size={260} />
      </div>
      <div style={{ position: "absolute", left: DANGER.x * width, top: DANGER.y * height, opacity: fadeIn(frame - 160, 30) }}>
        <ChemicalSource color={palette.predator} size={260} intensity={0.85} />
      </div>

      <div style={{ position: "absolute", left: bx, top: by }}>
        <Bila heading={heading} scale={1.1} showCluster clusterPulse={0.4 + flow * 0.6} />
      </div>

      {/* Inset: the cluster routing signal in to command out. */}
      <div style={{ position: "absolute", right: 70, bottom: 60, opacity: 0.95 }}>
        <NervousCluster scale={1.1} inSignal={flow} outSignal={flow > 0.5 ? (flow - 0.5) * 2 : null} />
      </div>

      <TimedCaptions
        cues={[
          { text: "Her sensors pick up the world. Signals travel inward to the cluster.", from: 25, to: 110 },
          { text: "It weighs them, decides — and from one place, her muscles get one command.", from: 115, to: 200 },
          { text: "The whole body turns, as one. Toward food. Away from danger.", from: 205, to: 300 },
        ]}
        bottom={70}
      />
    </AbsoluteFill>
  );
};
