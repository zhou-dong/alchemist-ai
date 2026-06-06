import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { EdiacaranOcean } from "../../../components/scenes/EdiacaranOcean";
import { Bila } from "../../../components/characters/Bila";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fadeIn } from "../../../theme/transitions";

/**
 * Closing · C1 — But Not Structure. Bila moves with quiet skill through her
 * simple world of gradients. But far off drifts a different creature — one with
 * eyes, a world of shapes and light. A single cluster can't recognize a form
 * anywhere it appears. The brain will need features, layers, structure → Ch4.
 */
export const BeatC1ButNotStructure: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const bx = interpolate(frame, [0, 300], [0.18, 0.34], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) * width;
  const by = (0.55 + Math.sin(frame * 0.04) * 0.03) * height;

  // A distant creature with eyes, drifting, out of focus.
  const creatureX = interpolate(frame, [150, 300], [0.92, 0.74], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) * width;
  const creatureO = interpolate(frame, [150, 220], [0, 0.55], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const creatureY = 0.34 * height + Math.sin(frame * 0.03) * 10;

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 20) }}>
      <EdiacaranOcean />

      {/* Bila, familiar, skilled. */}
      <div style={{ position: "absolute", left: bx, top: by }}>
        <Bila heading={4} scale={1.0} showCluster />
      </div>

      {/* The creature with eyes — the future, out of focus. */}
      <div
        style={{
          position: "absolute",
          left: creatureX,
          top: creatureY,
          width: 320,
          height: 150,
          transform: "translate(-50%,-50%)",
          opacity: creatureO,
          filter: "blur(9px)",
        }}
      >
        <div style={{ position: "absolute", inset: 0, borderRadius: "55% 45% 50% 50% / 60% 60% 40% 40%", background: `radial-gradient(ellipse at 60% 50%, ${palette.vera}cc 0%, ${palette.vera}44 50%, ${palette.vera}00 78%)` }} />
        {/* Two eyes. */}
        <div style={{ position: "absolute", left: "62%", top: "38%", width: 22, height: 22, borderRadius: "50%", background: palette.text }} />
        <div style={{ position: "absolute", left: "74%", top: "40%", width: 22, height: 22, borderRadius: "50%", background: palette.text }} />
      </div>

      <TimedCaptions
        cues={[
          { text: "Bila has come far — a cluster that learns, time-aware, with traces that bridge delay.", from: 20, to: 115 },
          { text: "But her world is simple — gradients and textures one cluster can hold.", from: 120, to: 200 },
          { text: "A world of light and shapes — a fish recognized anywhere — needs features, layers, structure. That's next.", from: 205, to: 300 },
        ]}
      />
    </AbsoluteFill>
  );
};
