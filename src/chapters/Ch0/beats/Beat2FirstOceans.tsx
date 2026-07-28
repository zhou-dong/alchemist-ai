import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { ArcheanOcean } from "../../../components/scenes/ArcheanOcean";
import { Narration } from "../../../components/Narration";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";
import { beatDuration } from "../../../narration/schedule";
import { narration } from "../narration.generated";

const BEAT = narration.beat2FirstOceans;

/**
 * Part 1 · Act 1 · Beat 2 — The First Oceans. The warm, shallow, sunlit Archean
 * sea, ~3.5 billion years ago: microbial mats, slow currents, no animals — and
 * something, barely, alive in it.
 */
export const Beat2FirstOceans: React.FC = () => {
  const frame = useCurrentFrame();
  const total = beatDuration(BEAT);
  const dateOpacity = interpolate(
    frame,
    [15, 45, total - 30, total],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 25) }}>
      <ArcheanOcean />

      <AbsoluteFill
        style={{
          fontFamily,
          color: palette.text,
          alignItems: "center",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            marginTop: 90,
            opacity: dateOpacity,
            fontSize: 38,
            fontWeight: 300,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Earth · 3.5 billion years ago
        </div>
      </AbsoluteFill>

      <Narration beat={BEAT} />
    </AbsoluteFill>
  );
};
