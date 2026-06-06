import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { EdiacaranOcean } from "../../../components/scenes/EdiacaranOcean";
import { ChemicalSource } from "../../../components/scenes/ChemicalSource";
import { Bila } from "../../../components/characters/Bila";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fadeIn } from "../../../theme/transitions";

/**
 * Part 1 · Act 2 · Beat 5 — The Dawn of Anticipation. Bila now discriminates:
 * she avoids the real warning, ignores the coincidence, and seeks the smell that
 * reliably precedes food — her body preparing before the food arrives. The brain
 * has begun to predict.
 */
export const Beat5DawnOfAnticipation: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const px = (f: number) => interpolate(f, [0, 300], [0.12, 0.74], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) * width;
  const py = (f: number) => interpolate(f, [0, 80, 160, 300], [0.5, 0.3, 0.56, 0.38], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) * height;
  const x = px(frame);
  const y = py(frame);
  const heading = (Math.atan2(py(frame + 2) - y, px(frame + 2) - x) * 180) / Math.PI;

  // Anticipation: the cluster fires before food is reached.
  const anticipate = interpolate(frame, [190, 250], [0.3, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 20) }}>
      <EdiacaranOcean />

      {/* Dark patch — a real warning, avoided. */}
      <div style={{ position: "absolute", left: 0.38 * width, top: 0.46 * height, width: 180, height: 130, transform: "translate(-50%,-50%)", borderRadius: "50%", background: "radial-gradient(circle, rgba(4,10,18,0.8) 0%, rgba(4,10,18,0) 70%)" }} />

      {/* Ripple — a coincidence, ignored. */}
      <svg width={width} height={height} style={{ position: "absolute", inset: 0 }}>
        {[0, 1, 2].map((k) => {
          const ph = ((frame % 45) / 45 + k / 3) % 1;
          return <circle key={k} cx={0.56 * width} cy={0.66 * height} r={18 + ph * 70} fill="none" stroke={palette.oceanShallow} strokeWidth={2} opacity={(1 - ph) * 0.6} />;
        })}
      </svg>

      {/* Food smell — sought; food itself arrives later. */}
      <div style={{ position: "absolute", left: 0.8 * width, top: 0.36 * height }}>
        <ChemicalSource color={palette.food} size={260} intensity={interpolate(frame, [120, 260], [0.4, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} />
      </div>

      <div style={{ position: "absolute", left: x, top: y }}>
        <Bila heading={heading} scale={1.1} showCluster clusterPulse={anticipate} />
      </div>

      <TimedCaptions
        cues={[
          { text: "Now Bila knows cause from coincidence — avoids the patch, ignores the ripple.", from: 20, to: 110 },
          { text: "She has built a quiet model of what comes before what.", from: 115, to: 195 },
          { text: "She no longer just reacts — she expects. The brain has begun to predict.", from: 200, to: 300 },
        ]}
      />
    </AbsoluteFill>
  );
};
