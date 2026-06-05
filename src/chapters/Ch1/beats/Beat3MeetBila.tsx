import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { EdiacaranOcean } from "../../../components/scenes/EdiacaranOcean";
import { Bila } from "../../../components/characters/Bila";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

/**
 * Part 1 · Act 1 · Beat 3 — Meet Bila. Close on a single small bilaterian: a
 * front of chemical sensors, a back, muscle, a gut. A front and a back means a
 * direction — and a direction means she can choose to move that way.
 */
export const Beat3MeetBila: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const zoom = interpolate(frame, [0, 80], [1.3, 2.1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const x = (0.42 + 0.04 * Math.sin(frame * 0.03)) * width;
  const dateOpacity = interpolate(frame, [20, 50, 240, 270], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 20) }}>
      <AbsoluteFill style={{ filter: "brightness(0.92)" }}>
        <EdiacaranOcean />
      </AbsoluteFill>

      <div style={{ position: "absolute", left: x, top: 0.46 * height }}>
        <Bila heading={3} scale={zoom} />
      </div>

      <AbsoluteFill style={{ fontFamily, color: palette.text, alignItems: "center", pointerEvents: "none" }}>
        <div style={{ marginTop: 90, opacity: dateOpacity, fontSize: 36, fontWeight: 300, letterSpacing: 5, textTransform: "uppercase" }}>
          Earth · 555 million years ago
        </div>
      </AbsoluteFill>

      <TimedCaptions
        cues={[
          { text: "Her name, for our purposes, is Bila.", from: 20, to: 95, size: 52 },
          { text: "A front. A back. And once you have a direction, you can choose to move that way.", from: 100, to: 190 },
          { text: "But moving is hard — when your body is many cells, all at once.", from: 195, to: 270 },
        ]}
      />
    </AbsoluteFill>
  );
};
