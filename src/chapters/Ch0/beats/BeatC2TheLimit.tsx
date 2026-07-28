import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { ArcheanOcean } from "../../../components/scenes/ArcheanOcean";
import { Bacterium } from "../../../components/characters/Bacterium";
import { Narration } from "../../../components/Narration";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";
import { beatDuration } from "../../../narration/schedule";
import { narration } from "../narration.generated";

const BEAT = narration.beatC2TheLimit;

// A scattered population, each cell on its own blind run-and-tumble.
const CELLS = Array.from({ length: 14 }).map((_, i) => ({
  x: ((i * 37) % 100) / 100,
  y: (((i * 53) % 70) + 15) / 100,
  phase: (i % 5) * 14,
  scale: 0.5 + (i % 3) * 0.15,
}));

/**
 * Closing · C2 — The Limit. A vast, quiet microbial ocean: countless cells, all
 * running the same blind rule, for three and a half billion years. The camera
 * pulls up; the world holds, then darkens. The math existed; the machinery did
 * not.
 */
export const BeatC2TheLimit: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const total = beatDuration(BEAT);

  // Camera pulls slowly upward and out across the whole beat — the pull-back is
  // the beat, so it stretches with the narration.
  const zoom = interpolate(frame, [0, total], [1.05, 0.9], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // The fade to dark stays a real-time 50 frames at the very end.
  const darken = interpolate(frame, [total - 50, total], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: palette.oceanDeep, opacity: fadeIn(frame, 20) }}>
      <AbsoluteFill style={{ transform: `scale(${zoom})`, filter: "brightness(0.85)" }}>
        <ArcheanOcean />
        {CELLS.map((c, i) => {
          const f = frame + c.phase;
          const bob = Math.sin(f * 0.05) * 8;
          const tumbling = (f % 80) > 64;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: c.x * width + Math.sin(f * 0.02) * 14,
                top: c.y * height + bob,
                opacity: 0.85,
              }}
            >
              <Bacterium mode={tumbling ? "tumble" : "run"} heading={(i * 47) % 360} scale={c.scale} />
            </div>
          );
        })}
      </AbsoluteFill>

      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
        <div
          style={{
            fontFamily,
            color: palette.text,
            fontSize: 48,
            fontWeight: 300,
            letterSpacing: 4,
            opacity: interpolate(
              frame,
              [70, 110, total - 70, total - 30],
              [0, 1, 1, 0],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
            ),
          }}
        >
          Three and a half billion years.
        </div>
      </AbsoluteFill>

      <Narration beat={BEAT} />

      {/* Slow fade to dark. */}
      <AbsoluteFill style={{ backgroundColor: "#02040a", opacity: darken }} />
    </AbsoluteFill>
  );
};
