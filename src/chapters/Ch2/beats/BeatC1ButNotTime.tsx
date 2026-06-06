import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Synapse } from "../../../components/diagrams/Synapse";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

/**
 * Closing · C1 — But Not Time. Two scenes: A-then-B (consecutive) and A-and-B
 * (simultaneous). The cluster strengthens the connection either way — it cannot
 * tell which came first. Order, causation, time: that is the next chapter.
 */
export const BeatC1ButNotTime: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const half = width / 2;

  // Both connections strengthen to the same degree.
  const strength = interpolate(frame, [40, 240], [0.3, 0.9], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Left: consecutive — A fires, then B; a pulse travels between.
  const lc = frame % 60;
  const leftA = lc < 14;
  const leftB = lc >= 22 && lc < 36;
  const leftPulse = lc >= 14 && lc < 22 ? (lc - 14) / 8 : null;

  // Right: simultaneous — A and B fire at the same instant.
  const rc = frame % 60;
  const rightTogether = rc < 14;

  const label: React.CSSProperties = { position: "absolute", top: 64, width: half, textAlign: "center", fontFamily, color: palette.text, fontSize: 28, letterSpacing: 1 };

  const centerNote = interpolate(frame, [150, 185, 290, 300], [0, 1, 1, 0.85], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#04080e", opacity: fadeIn(frame, 20) }}>
      {/* Left — consecutive. */}
      <div style={{ position: "absolute", left: 0, width: half, height, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Synapse strength={strength} pulse={leftPulse} firingA={leftA} firingB={leftB} labelA="A" labelB="B" scale={1.15} />
        <div style={label}>A — then — B&nbsp;&nbsp;(consecutive)</div>
      </div>

      {/* Right — simultaneous. */}
      <div style={{ position: "absolute", left: half, width: half, height, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Synapse strength={strength} firingA={rightTogether} firingB={rightTogether} labelA="A" labelB="B" scale={1.15} />
        <div style={label}>A + B&nbsp;&nbsp;(at the same instant)</div>
      </div>

      <div style={{ position: "absolute", left: half - 1, top: 0, width: 2, height, backgroundColor: palette.text, opacity: 0.12 }} />

      {/* Both strengthen the same — the cluster can't tell them apart. */}
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
        <div style={{ fontFamily, color: palette.toxin, fontSize: 34, fontStyle: "italic", opacity: centerNote, background: "rgba(4,8,14,0.6)", padding: "8px 22px", borderRadius: 10 }}>
          the cluster cannot tell the difference
        </div>
      </AbsoluteFill>

      <TimedCaptions
        cues={[
          { text: "Bila has learned. But her learning ignores something: time.", from: 20, to: 110 },
          { text: "A-then-B, or A-and-B at once — to her cluster, they look the same.", from: 115, to: 205 },
          { text: "But order matters. Cause comes before effect. That is the next chapter — when time becomes a teacher.", from: 210, to: 300 },
        ]}
      />
    </AbsoluteFill>
  );
};
