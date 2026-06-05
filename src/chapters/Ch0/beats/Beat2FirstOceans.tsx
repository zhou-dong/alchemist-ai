import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { ArcheanOcean } from "../../../components/scenes/ArcheanOcean";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

/**
 * Part 1 · Act 1 · Beat 2 — The First Oceans. The warm, shallow, sunlit Archean
 * sea, ~3.5 billion years ago: microbial mats, slow currents, no animals — and
 * something, barely, alive in it.
 */
export const Beat2FirstOceans: React.FC = () => {
  const frame = useCurrentFrame();
  const dateOpacity = interpolate(frame, [15, 45, 210, 240], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

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

      <TimedCaptions
        cues={[
          {
            text: "Long before animals — long before plants — there was the ocean.",
            from: 25,
            to: 110,
          },
          { text: "And there was something in it.", from: 110, to: 175 },
          {
            text: "So small you'd need a microscope. So simple you'd barely call it alive.",
            from: 175,
            to: 240,
          },
        ]}
      />
    </AbsoluteFill>
  );
};
