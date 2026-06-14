import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fadeIn } from "../../../theme/transitions";

/**
 * Closing · C3 — What's About to Arrive. The ocean has changed: colder, dimmer.
 * Among the mats, for the first time, something larger — a body with a front
 * and a back, drifting out of focus in the distance. The bridge to Chapter 1.
 */
export const BeatC3WhatsAboutToArrive: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // Reveal from darkness into the new, colder ocean.
  const reveal = fadeIn(frame, 50);

  // The creature drifts slowly across the distant background, out of focus.
  const creatureX = interpolate(frame, [0, 240], [0.75, 0.45], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }) * width;
  const creatureOpacity = interpolate(frame, [60, 130], [0, 0.5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
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

      <TimedCaptions
        cues={[
          { text: "Which is exactly what's about to show up.", from: 30, to: 95, size: 50 },
          { text: "A body with a front, a back — and a place where signals can meet.", from: 100, to: 180 },
          { text: "Something we'll, in time, learn to call intelligence.", from: 185, to: 240, size: 50 },
        ]}
      />
    </AbsoluteFill>
  );
};
