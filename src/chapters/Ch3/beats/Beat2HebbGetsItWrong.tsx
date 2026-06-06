import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { EdiacaranOcean } from "../../../components/scenes/EdiacaranOcean";
import { ChemicalSource } from "../../../components/scenes/ChemicalSource";
import { Bila } from "../../../components/characters/Bila";
import { Synapse } from "../../../components/diagrams/Synapse";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fadeIn } from "../../../theme/transitions";

/**
 * Part 1 · Act 1 · Beat 2 — When Hebb Gets It Wrong. A dark patch then a strike:
 * the link strengthens (cause learned, good). But a harmless ripple that fired
 * at the same moment strengthens too (coincidence as cause). Bila starts fleeing
 * false alarms — to her cluster, simultaneous and consecutive look the same.
 */
export const Beat2HebbGetsItWrong: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // Bila flees in the final phase (false alarm).
  const bx = interpolate(frame, [0, 250, 310], [0.34, 0.34, 0.12], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) * width;
  const by = 0.45 * height;

  // Each strike strengthens the synapse — correctly the first time, wrongly the second.
  const strength = interpolate(frame, [60, 90, 170, 200], [0.3, 0.62, 0.62, 0.88], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const darkPatch = interpolate(frame, [20, 45, 90, 110], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const rippleA = interpolate(frame, [130, 150, 250, 330], [0, 1, 1, 0.6], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const strike1 = interpolate(frame, [60, 72, 90], [0, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const strike2 = interpolate(frame, [170, 182, 200], [0, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const ripplePhase = (frame % 40) / 40;

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 20) }}>
      <AbsoluteFill style={{ filter: "brightness(0.85)" }}>
        <EdiacaranOcean />
      </AbsoluteFill>

      {/* Dark patch (real precursor). */}
      <div
        style={{
          position: "absolute",
          left: 0.66 * width,
          top: 0.4 * height,
          width: 200,
          height: 140,
          transform: "translate(-50%,-50%)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(4,10,18,0.85) 0%, rgba(4,10,18,0) 70%)",
          opacity: darkPatch,
        }}
      />

      {/* Ripple (harmless coincidence). */}
      <svg width={width} height={height} style={{ position: "absolute", inset: 0, opacity: rippleA }}>
        {[0, 1, 2].map((k) => {
          const r = 20 + ((ripplePhase + k / 3) % 1) * 90;
          return <circle key={k} cx={0.64 * width} cy={0.6 * height} r={r} fill="none" stroke={palette.oceanShallow} strokeWidth={3} opacity={1 - ((ripplePhase + k / 3) % 1)} />;
        })}
      </svg>

      {/* Predator strikes. */}
      <div style={{ position: "absolute", left: 0.5 * width, top: 0.42 * height, opacity: strike1 }}>
        <ChemicalSource color={palette.predator} size={360} intensity={1} />
      </div>
      <div style={{ position: "absolute", left: 0.5 * width, top: 0.55 * height, opacity: strike2 }}>
        <ChemicalSource color={palette.predator} size={360} intensity={1} />
      </div>

      <div style={{ position: "absolute", left: bx, top: by }}>
        <Bila heading={frame > 250 ? 184 : 6} scale={1.1} showCluster clusterPulse={0.4 + Math.max(strike1, strike2) * 0.6} />
      </div>

      {/* Synapse inset: strengthening both times. */}
      <div style={{ position: "absolute", right: 80, bottom: 80 }}>
        <Synapse strength={strength} scale={1.0} />
      </div>

      <TimedCaptions
        cues={[
          { text: "A dark patch drifts past. Then a predator strikes. The signals fire close in time.", from: 15, to: 110 },
          { text: "Hebb strengthens the link: dark patch → danger. Good.", from: 115, to: 185 },
          { text: "But a harmless ripple fired at that same moment — and that link strengthened too.", from: 190, to: 265 },
          { text: "Now she flees ripples and flashes. Cause and coincidence look the same.", from: 270, to: 330 },
        ]}
      />
    </AbsoluteFill>
  );
};
