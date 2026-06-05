import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { EdiacaranOcean } from "../../../components/scenes/EdiacaranOcean";
import { Radiatan } from "../../../components/characters/Radiatan";
import { Bila } from "../../../components/characters/Bila";
import { TimedCaptions } from "../../../components/Caption";
import { fadeIn } from "../../../theme/transitions";

// Anchored radiatans dotting the seabed — the "stay still" lineage.
const RADIATANS = [
  { x: 0.14, y: 0.82, scale: 1.1, phase: 0 },
  { x: 0.32, y: 0.88, scale: 0.85, phase: 1.4 },
  { x: 0.52, y: 0.85, scale: 1.25, phase: 2.6 },
  { x: 0.72, y: 0.89, scale: 0.95, phase: 0.7 },
  { x: 0.88, y: 0.83, scale: 1.05, phase: 3.1 },
];

/**
 * Part 1 · Act 1 · Beat 2 — Two Paths from Bacteria. The Ediacaran sea: from the
 * same ancestors, anchored radiatans (stay still, wait) and — drifting between
 * them — a soft creature with a front and a back, moving.
 */
export const Beat2TwoPaths: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const bilaX = interpolate(frame, [60, 300], [0.05, 0.7], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }) * width;
  const bilaY = (0.4 + Math.sin(frame * 0.04) * 0.04) * height;
  const bilaOpacity = interpolate(frame, [60, 100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 25) }}>
      <EdiacaranOcean />

      {RADIATANS.map((r, i) => (
        <div key={i} style={{ position: "absolute", left: r.x * width, top: r.y * height, opacity: fadeIn(frame - i * 8, 30) }}>
          <Radiatan scale={r.scale} phase={r.phase} />
        </div>
      ))}

      <div style={{ position: "absolute", left: bilaX, top: bilaY, opacity: bilaOpacity }}>
        <Bila heading={2} scale={0.9} />
      </div>

      <TimedCaptions
        cues={[
          { text: "From the same single-celled ancestors, many lineages emerged.", from: 25, to: 110 },
          { text: "Radiatans: anchored, still, waiting for what comes. One path.", from: 115, to: 205 },
          { text: "But drifting through them — another path. With a front, and a back.", from: 210, to: 300 },
        ]}
      />
    </AbsoluteFill>
  );
};
