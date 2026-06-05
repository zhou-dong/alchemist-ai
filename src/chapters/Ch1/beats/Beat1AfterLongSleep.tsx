import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { EarthEdiacaran } from "../../../components/scenes/EarthEdiacaran";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

/**
 * Part 1 · Act 1 · Beat 1 — After the Long Sleep. The Chronicle beat: three
 * billion years on, a blue oxygen-rich Earth, the methane gone, the planet
 * frozen and thawed more than once. The Ediacaran period begins.
 */
export const Beat1AfterLongSleep: React.FC = () => {
  const frame = useCurrentFrame();
  const dateOpacity = interpolate(frame, [15, 45, 270, 300], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 25) }}>
      <EarthEdiacaran />

      <AbsoluteFill style={{ fontFamily, color: palette.text, alignItems: "center", pointerEvents: "none" }}>
        <div
          style={{
            marginTop: 90,
            opacity: dateOpacity,
            fontSize: 36,
            fontWeight: 300,
            letterSpacing: 5,
            textTransform: "uppercase",
          }}
        >
          Earth · 600 million years ago · Ediacaran
        </div>
      </AbsoluteFill>

      <TimedCaptions
        cues={[
          { text: "Three billion years pass. The methane sky is gone — replaced, slowly, by oxygen.", from: 30, to: 120 },
          { text: "The oceans are blue. The bacteria are still here — but no longer alone.", from: 120, to: 210 },
          { text: "A new chapter begins. Geologists call it the Ediacaran.", from: 210, to: 300 },
        ]}
      />
    </AbsoluteFill>
  );
};
