import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { EdiacaranOcean } from "../../../components/scenes/EdiacaranOcean";
import { Radiatan } from "../../../components/characters/Radiatan";
import { Bila } from "../../../components/characters/Bila";
import { TimedCaptions } from "../../../components/Caption";
import { fadeIn } from "../../../theme/transitions";

/**
 * Closing · C1 — The Radiatan's Quiet Answer. A radiatan sits motionless in the
 * foreground; Bila moves in the distance. The other path never built a central
 * nervous system — and survived perfectly well. Both worked. Only one was on
 * the road to a brain.
 */
export const BeatC1RadiatansAnswer: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // Bila drifts, small, in the distance.
  const bilaX = interpolate(frame, [0, 240], [0.55, 0.78], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }) * width;
  const bilaY = (0.32 + Math.sin(frame * 0.05) * 0.03) * height;

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 20) }}>
      <EdiacaranOcean />

      {/* Bila, distant, moving. */}
      <div style={{ position: "absolute", left: bilaX, top: bilaY, opacity: 0.8 }}>
        <Bila heading={4} scale={0.55} showCluster />
      </div>

      {/* A radiatan, foreground, still. */}
      <div style={{ position: "absolute", left: 0.24 * width, top: 0.95 * height }}>
        <Radiatan scale={1.9} phase={0.5} />
      </div>

      <TimedCaptions
        cues={[
          { text: "Nearby, a radiatan still sits motionless. It took the other path.", from: 25, to: 110 },
          { text: "And it has survived, perfectly well, for hundreds of millions of years.", from: 115, to: 185 },
          { text: "Both worked. But only one of them was on the road to a brain.", from: 190, to: 240 },
        ]}
      />
    </AbsoluteFill>
  );
};
