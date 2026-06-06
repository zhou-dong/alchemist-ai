import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Synapse } from "../../../components/diagrams/Synapse";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

/**
 * Part 1 · Act 2 · Beat 4 — STDP. Hebb's rule with an arrow of time. A fires
 * before B (causal order) → the A→B synapse strengthens. A fires after B
 * (anti-causal) → it weakens. The cluster can now tell cause from coincidence:
 * spike-timing-dependent plasticity.
 */
export const Beat4STDP: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const half = width / 2;
  const cyc = frame % 50;

  // Left — causal order: A then B, synapse strengthens.
  const leftStrength = interpolate(frame, [40, 210], [0.4, 0.92], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const leftA = cyc < 12;
  const leftB = cyc >= 20 && cyc < 32;
  const leftPulse = cyc >= 12 && cyc < 20 ? (cyc - 12) / 8 : null;

  // Right — anti-causal order: B then A, synapse weakens.
  const rightStrength = interpolate(frame, [40, 210], [0.6, 0.16], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const rightB = cyc < 12;
  const rightA = cyc >= 20 && cyc < 32;

  const title: React.CSSProperties = { position: "absolute", top: 80, width: half, textAlign: "center", fontFamily, color: palette.text, fontSize: 30, letterSpacing: 1 };
  const verdict: React.CSSProperties = { position: "absolute", bottom: 210, width: half, textAlign: "center", fontFamily, fontSize: 30, fontWeight: 500 };

  return (
    <AbsoluteFill style={{ backgroundColor: "#04080e", opacity: fadeIn(frame, 20) }}>
      {/* Left — strengthen. */}
      <div style={{ position: "absolute", left: 0, width: half, height, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Synapse strength={leftStrength} pulse={leftPulse} firingA={leftA} firingB={leftB} labelA="A" labelB="B" scale={1.2} />
        <div style={title}>A fires before B</div>
        <div style={{ ...verdict, color: palette.food, opacity: fadeIn(frame - 120, 30) }}>↑ strengthen (A may cause B)</div>
      </div>

      {/* Right — weaken. */}
      <div style={{ position: "absolute", left: half, width: half, height, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Synapse strength={rightStrength} firingA={rightA} firingB={rightB} labelA="A" labelB="B" scale={1.2} />
        <div style={title}>A fires after B</div>
        <div style={{ ...verdict, color: palette.predator, opacity: fadeIn(frame - 180, 30) }}>↓ weaken (A is not a cause)</div>
      </div>

      <div style={{ position: "absolute", left: half - 1, top: 0, width: 2, height, backgroundColor: palette.text, opacity: 0.12 }} />

      <TimedCaptions
        cues={[
          { text: "A refinement of Hebb's rule — now the order matters.", from: 20, to: 105 },
          { text: "A before B → A might be the cause → strengthen. A after B → weaken.", from: 110, to: 250 },
          { text: "Hebb's rule, with an arrow of time. Spike-timing-dependent plasticity.", from: 255, to: 330 },
        ]}
        bottom={64}
      />
    </AbsoluteFill>
  );
};
