import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { EarthFromSpace } from "../../../components/scenes/EarthFromSpace";
import { HydrothermalVent } from "../../../components/scenes/HydrothermalVent";
import { VentMat } from "../../../components/characters/VentMat";
import { Narration } from "../../../components/Narration";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";
import { cueFrame } from "../../../narration/schedule";
import { narration } from "../narration.generated";

const BEAT = narration.beatTheVent;

// "Now — go deeper." — the line that sends us from orbit down to the vent.
const DIVE_FRAME = cueFrame(BEAT, 13);
// "...something is alive." — the mat appears.
const ORGANISM_FRAME = cueFrame(BEAT, 19);

/**
 * Part 1 · Beat — The Vent. Opens on the young, bombarded Earth cooling into
 * its first oceans (the Chronicle beat), then descends past the light into
 * total darkness at a seafloor vent, where the first living thing is found
 * already fixed in place — no swimming toward it, no arrival.
 */
export const BeatTheVent: React.FC = () => {
  const frame = useCurrentFrame();
  const ventOpacity = interpolate(frame, [DIVE_FRAME, DIVE_FRAME + 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const spaceOpacity = 1 - ventOpacity;

  const dateOpacity = interpolate(
    frame,
    [15, 45, DIVE_FRAME - 15, DIVE_FRAME],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const organismOpacity = interpolate(
    frame,
    [ORGANISM_FRAME, ORGANISM_FRAME + 30],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 25) }}>
      <AbsoluteFill style={{ opacity: spaceOpacity }}>
        <EarthFromSpace />
      </AbsoluteFill>

      <AbsoluteFill style={{ opacity: ventOpacity }}>
        <HydrothermalVent />
        <AbsoluteFill style={{ opacity: organismOpacity }}>
          <VentMat frame={frame} />
        </AbsoluteFill>
      </AbsoluteFill>

      {/* Era caption, only while we're still in orbit. */}
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
          Earth · 4.5 billion years ago
        </div>
      </AbsoluteFill>

      <Narration beat={BEAT} />
    </AbsoluteFill>
  );
};
