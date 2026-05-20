import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Ocean } from "../../../components/scenes/Ocean";
import { Bila } from "../../../components/characters/Bila";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

const FOOD_X = 0.75;
const FOOD_Y = 0.45;

// Bila's run-and-tumble path toward the food. Smooth segments read as "runs";
// abrupt direction changes between segments read as "tumbles".
const WAYPOINTS = [
  { t: 0, x: 0.12, y: 0.55 },
  { t: 45, x: 0.3, y: 0.5 },
  { t: 60, x: 0.28, y: 0.38 },
  { t: 105, x: 0.45, y: 0.32 },
  { t: 120, x: 0.5, y: 0.48 },
  { t: 165, x: 0.64, y: 0.46 },
  { t: 180, x: 0.66, y: 0.55 },
  { t: 220, x: 0.75, y: 0.46 },
  { t: 240, x: FOOD_X, y: FOOD_Y },
];

const waypointFrames = WAYPOINTS.map((w) => w.t);
const waypointXs = WAYPOINTS.map((w) => w.x);
const waypointYs = WAYPOINTS.map((w) => w.y);

export const Act1Beat2FoodSeeking: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const sceneOpacity = fadeIn(frame, 20);

  const bilaX =
    interpolate(frame, waypointFrames, waypointXs, {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }) * width;
  const bilaY =
    interpolate(frame, waypointFrames, waypointYs, {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }) *
      height -
    16;

  const text1Opacity = interpolate(
    frame,
    [10, 30, 55, 75],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const text2Opacity = interpolate(
    frame,
    [75, 95, 115, 135],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const text3Opacity = interpolate(
    frame,
    [135, 155, 175, 195],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const text4Opacity = interpolate(frame, [195, 215, 240], [0, 1, 1], {
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
          left: FOOD_X * width,
          top: FOOD_Y * height,
          width: 240,
          height: 240,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${palette.food}ff 0%, ${palette.food}88 18%, ${palette.food}00 70%)`,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: bilaX,
          top: bilaY,
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
        <div style={{ ...captionStyle, opacity: text1Opacity }}>
          A food source
        </div>
        <div style={{ ...captionStyle, opacity: text2Opacity }}>
          Signal getting stronger → run
        </div>
        <div style={{ ...captionStyle, opacity: text3Opacity }}>
          Signal getting weaker → tumble
        </div>
        <div style={{ ...captionStyle, opacity: text4Opacity }}>
          Slowly. Gently. No urgency.
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
