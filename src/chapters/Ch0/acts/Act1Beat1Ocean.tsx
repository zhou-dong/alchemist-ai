import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Ocean } from "../../../components/scenes/Ocean";
import { Radiatan } from "../../../components/characters/Radiatan";
import { Bila } from "../../../components/characters/Bila";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

const RADIATANS = [
  { x: 0.2, y: 0.3, delay: 30 },
  { x: 0.7, y: 0.22, delay: 45 },
  { x: 0.4, y: 0.6, delay: 60 },
  { x: 0.82, y: 0.55, delay: 75 },
  { x: 0.12, y: 0.72, delay: 90 },
];

export const Act1Beat1Ocean: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const oceanOpacity = fadeIn(frame, 30);

  const bilaProgress = interpolate(frame, [120, 240], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const bilaX = interpolate(bilaProgress, [0, 1], [-0.1, 0.55]) * width;
  const bilaY = 0.5 * height - 16;
  const bilaOpacity = interpolate(frame, [120, 150], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const text1Opacity = interpolate(
    frame,
    [30, 50, 90, 110],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const text2Opacity = interpolate(
    frame,
    [110, 130, 170, 190],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const text3Opacity = interpolate(frame, [190, 210, 240], [0, 1, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const captionStyle: React.CSSProperties = {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 120,
    textAlign: "center",
    fontWeight: 300,
    lineHeight: 1.4,
  };

  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: oceanOpacity }}>
        <Ocean />
      </AbsoluteFill>

      {RADIATANS.map((pos, i) => {
        const opacity = fadeIn(frame - pos.delay, 30);
        const float = Math.sin((frame - pos.delay) * 0.05) * 6;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: pos.x * width,
              top: pos.y * height + float,
              opacity,
            }}
          >
            <Radiatan />
          </div>
        );
      })}

      <div
        style={{
          position: "absolute",
          left: bilaX,
          top: bilaY,
          opacity: bilaOpacity,
        }}
      >
        <Bila />
      </div>

      <AbsoluteFill
        style={{
          fontFamily,
          color: palette.text,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            ...captionStyle,
            opacity: text1Opacity,
            fontSize: 56,
            letterSpacing: 2,
          }}
        >
          An ancient ocean
        </div>
        <div style={{ ...captionStyle, opacity: text2Opacity, fontSize: 44 }}>
          Radiatans. Passive. Waiting.
        </div>
        <div style={{ ...captionStyle, opacity: text3Opacity, fontSize: 44 }}>
          Then Bila appears — with a direction.
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
