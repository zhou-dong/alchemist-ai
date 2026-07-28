import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { EarthFromSpace } from "../../../components/scenes/EarthFromSpace";
import { Narration } from "../../../components/Narration";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";
import { beatDuration } from "../../../narration/schedule";
import { narration } from "../narration.generated";

const BEAT = narration.beat1YoungEarth;

/**
 * Part 1 · Act 1 · Beat 1 — The Young Earth. The Chronicle beat: locates the
 * chapter 4 billion years ago, on a molten, bombarded planet that cools into
 * the first oceans. Names the era: the Archean.
 */
export const Beat1YoungEarth: React.FC = () => {
  const frame = useCurrentFrame();
  const total = beatDuration(BEAT);
  // The date holds for the whole beat, fading out just before the cut.
  const dateOpacity = interpolate(
    frame,
    [15, 45, total - 30, total],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 25) }}>
      <EarthFromSpace />

      {/* Soft era/date caption, top-center. */}
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
          Earth · 4 billion years ago
        </div>
      </AbsoluteFill>

      <Narration beat={BEAT} />
    </AbsoluteFill>
  );
};
