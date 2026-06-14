import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { EarthFromSpace } from "../../../components/scenes/EarthFromSpace";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

/**
 * Part 1 · Act 1 · Beat 1 — The Young Earth. The Chronicle beat: locates the
 * chapter 4 billion years ago, on a molten, bombarded planet that cools into
 * the first oceans. Names the era: the Archean.
 */
export const Beat1YoungEarth: React.FC = () => {
  const frame = useCurrentFrame();
  const dateOpacity = interpolate(frame, [15, 45, 270, 300], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

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

      <TimedCaptions
        cues={[
          {
            text: "A hot ball of rock, hit by other rocks, for half a billion years.",
            from: 30,
            to: 120,
          },
          {
            text: "Then it cooled. The rain fell, and fell — until it made the first oceans.",
            from: 120,
            to: 210,
          },
          {
            text: "Geologists call this stretch the Archean. Nothing alive yet — but the stage is set.",
            from: 210,
            to: 300,
          },
        ]}
      />
    </AbsoluteFill>
  );
};
