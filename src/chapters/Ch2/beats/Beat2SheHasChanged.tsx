import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { EdiacaranOcean } from "../../../components/scenes/EdiacaranOcean";
import { Bila } from "../../../components/characters/Bila";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

/**
 * Part 1 · Act 1 · Beat 2 — She Has Changed. Early Bila vs. Now Bila in the same
 * situation: a spot she used to drift straight through, she now arcs around. The
 * body is the same, the cluster is the same — something between the cells is not.
 */
export const Beat2SheHasChanged: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const half = width / 2;
  const spot = { x: 0.55, y: 0.52 }; // relative to each half

  const t = interpolate(frame, [40, 260], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Early: straight through the spot.
  const earlyX = interpolate(t, [0, 1], [0.1, 0.92]) * half;
  const earlyY = spot.y * height;

  // Now: same start/end, but arcs up and over the spot.
  const nowX = interpolate(t, [0, 1], [0.1, 0.92]) * half;
  const detour = Math.sin(Math.min(1, Math.max(0, (t - 0.25) / 0.5)) * Math.PI);
  const nowY = (spot.y - 0.22 * detour) * height;
  const nowHeading = interpolate(detour, [0, 1], [0, -18]);

  const labelStyle: React.CSSProperties = {
    position: "absolute",
    top: 60,
    fontFamily,
    color: palette.text,
    fontSize: 30,
    fontWeight: 400,
    letterSpacing: 4,
    width: half,
    textAlign: "center",
  };

  const Spot = () => (
    <div
      style={{
        position: "absolute",
        left: spot.x * half,
        top: spot.y * height,
        width: 150,
        height: 90,
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(6,16,26,0.7) 0%, rgba(6,16,26,0) 70%)",
      }}
    />
  );

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 25), backgroundColor: palette.oceanDeep }}>
      {/* Early */}
      <div style={{ position: "absolute", left: 0, top: 0, width: half, height, overflow: "hidden" }}>
        <AbsoluteFill style={{ filter: "brightness(0.85)" }}>
          <EdiacaranOcean />
        </AbsoluteFill>
        <Spot />
        <div style={{ position: "absolute", left: earlyX, top: earlyY }}>
          <Bila heading={0} scale={0.8} showCluster />
        </div>
        <div style={labelStyle}>EARLY</div>
      </div>

      {/* Now */}
      <div style={{ position: "absolute", left: half, top: 0, width: half, height, overflow: "hidden" }}>
        <EdiacaranOcean />
        <Spot />
        <div style={{ position: "absolute", left: nowX, top: nowY }}>
          <Bila heading={nowHeading} scale={0.8} showCluster />
        </div>
        <div style={labelStyle}>NOW</div>
      </div>

      <div style={{ position: "absolute", left: half - 1, top: 0, width: 2, height, backgroundColor: palette.text, opacity: 0.15 }} />

      <TimedCaptions
        cues={[
          { text: "Look at her now, compared to her early life. Same body. Same cluster.", from: 20, to: 105 },
          { text: "A spot she used to drift straight through — now she gives it a wider arc.", from: 110, to: 200 },
          { text: "So what is different? Something between the cells — too small to see, last time.", from: 205, to: 300 },
        ]}
      />
    </AbsoluteFill>
  );
};
