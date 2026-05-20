import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Ocean } from "../../../components/scenes/Ocean";
import { Bila } from "../../../components/characters/Bila";
import { Predator } from "../../../components/scenes/Predator";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

const BILA_BASE_X = 0.35;
const BILA_BASE_Y = 0.6;

const PREDATOR_WAYPOINTS = [
  { t: 30, x: 0.95, y: 0.0, scale: 0.6 },
  { t: 90, x: 0.55, y: 0.4, scale: 1.0 },
  { t: 160, x: 0.2, y: 0.6, scale: 1.0 },
  { t: 240, x: -0.1, y: 0.95, scale: 0.7 },
];

const predatorFrames = PREDATOR_WAYPOINTS.map((w) => w.t);
const predatorXs = PREDATOR_WAYPOINTS.map((w) => w.x);
const predatorYs = PREDATOR_WAYPOINTS.map((w) => w.y);
const predatorScales = PREDATOR_WAYPOINTS.map((w) => w.scale);

export const Act1Beat3DangerFleeing: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const sceneOpacity = fadeIn(frame, 20);

  const predatorX =
    interpolate(frame, predatorFrames, predatorXs, {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }) * width;
  const predatorY =
    interpolate(frame, predatorFrames, predatorYs, {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }) * height;
  const predatorScale = interpolate(frame, predatorFrames, predatorScales, {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const predatorOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const tumbleAmplitude = interpolate(
    frame,
    [60, 65, 85, 90],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const tumbleX = Math.sin(frame * 0.8) * 18 * tumbleAmplitude;
  const tumbleY = Math.cos(frame * 1.1) * 15 * tumbleAmplitude;

  const escapeProgress = interpolate(frame, [90, 130], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.in(Easing.cubic),
  });
  const escapeX = interpolate(escapeProgress, [0, 1], [0, 0.35]);
  const escapeY = interpolate(escapeProgress, [0, 1], [0, 0.15]);

  const driftProgress = interpolate(frame, [130, 240], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const driftX = interpolate(driftProgress, [0, 1], [0, 0.12]);
  const driftY = interpolate(driftProgress, [0, 1], [0, -0.05]);

  const bilaX = (BILA_BASE_X + escapeX + driftX) * width + tumbleX;
  const bilaY = (BILA_BASE_Y + escapeY + driftY) * height + tumbleY - 16;

  const text1Opacity = interpolate(
    frame,
    [10, 30, 55, 75],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const text2Opacity = interpolate(
    frame,
    [75, 95, 125, 145],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const text3Opacity = interpolate(
    frame,
    [145, 165, 195, 215],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const text4Opacity = interpolate(frame, [215, 235, 240], [0, 1, 1], {
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
    fontSize: 44,
  };

  return (
    <AbsoluteFill style={{ opacity: sceneOpacity }}>
      <Ocean />

      <div
        style={{
          position: "absolute",
          left: bilaX,
          top: bilaY,
        }}
      >
        <Bila />
      </div>

      <div
        style={{
          position: "absolute",
          left: predatorX,
          top: predatorY,
          opacity: predatorOpacity,
          transform: `translate(-50%, -50%) scale(${predatorScale})`,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${palette.predator}aa 0%, ${palette.predator}44 30%, ${palette.predator}00 70%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Predator />
      </div>

      <AbsoluteFill
        style={{
          fontFamily,
          color: palette.text,
          pointerEvents: "none",
        }}
      >
        <div style={{ ...captionStyle, opacity: text1Opacity }}>
          A predator approaches
        </div>
        <div style={{ ...captionStyle, opacity: text2Opacity }}>
          Predator getting closer → tumble
        </div>
        <div style={{ ...captionStyle, opacity: text3Opacity }}>
          Predator fading → run
        </div>
        <div style={{ ...captionStyle, opacity: text4Opacity }}>
          Sudden. Explosive. Urgent.
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
