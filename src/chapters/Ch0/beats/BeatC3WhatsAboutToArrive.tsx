import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Narration } from "../../../components/Narration";
import { palette } from "../../../theme/palette";
import { fadeIn } from "../../../theme/transitions";
import { beatDuration, cueFrame } from "../../../narration/schedule";
import { narration } from "../narration.generated";

const BEAT = narration.beatC3WhatsAboutToArrive;

/**
 * Closing · C3 — What's About to Arrive. The ocean has changed: colder, dimmer.
 * Among the mats, for the first time, something larger — a body with a front
 * and a back, drifting out of focus in the distance. The bridge to Chapter 1.
 */
export const BeatC3WhatsAboutToArrive: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const total = beatDuration(BEAT);

  // Reveal from darkness into the new, colder ocean.
  const reveal = fadeIn(frame, 50);

  // The creature drifts across the distant background for the whole beat, and
  // surfaces into view as the narration first mentions a body with a front.
  const creatureX = interpolate(frame, [0, total], [0.75, 0.45], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }) * width;
  // "A body with a front and a back — and somewhere in between..."
  const bodyLine = cueFrame(BEAT, 2);
  const creatureOpacity = interpolate(
    frame,
    [bodyLine - 60, bodyLine + 30],
    [0, 0.5],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const bob = Math.sin(frame * 0.025) * 12;

  return (
    <AbsoluteFill style={{ backgroundColor: "#02040a" }}>
      {/* The new ocean — colder, dimmer than the Archean. */}
      <AbsoluteFill
        style={{
          opacity: reveal,
          background: `linear-gradient(to bottom, #14313f 0%, #0a1d2b 60%, #050f18 100%)`,
        }}
      />

      {/* Faint microbial mats, still present. */}
      <AbsoluteFill style={{ opacity: reveal * 0.5 }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 160,
            background: `linear-gradient(to top, ${palette.matPurple}aa, transparent)`,
          }}
        />
      </AbsoluteFill>

      {/* Something larger — a front and a back — drifting, out of focus. */}
      <div
        style={{
          position: "absolute",
          left: creatureX,
          top: 0.5 * height + bob,
          width: 360,
          height: 120,
          transform: "translate(-50%, -50%)",
          opacity: creatureOpacity,
          filter: "blur(14px)",
          borderRadius: "50% 46% 48% 50% / 60% 58% 56% 62%",
          background: `radial-gradient(ellipse at 35% 50%, ${palette.vera}cc 0%, ${palette.vera}55 45%, ${palette.vera}00 75%)`,
        }}
      />

      <Narration beat={BEAT} />
    </AbsoluteFill>
  );
};
