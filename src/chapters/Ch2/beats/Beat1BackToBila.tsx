import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { EdiacaranOcean } from "../../../components/scenes/EdiacaranOcean";
import { ChemicalSource } from "../../../components/scenes/ChemicalSource";
import { Bila } from "../../../components/characters/Bila";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

const FOOD = { x: 0.74, y: 0.34 };

/**
 * Part 1 · Act 1 · Beat 1 — Back to Bila. The same Ediacaran ocean, the same
 * body and cluster — but time has passed, and if you watch closely she has been
 * changing, quietly, all along. (No Chronicle/space beat: we return where we
 * left her, marked only by a soft "some time later".)
 */
export const Beat1BackToBila: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const bx = interpolate(frame, [0, 270], [0.2, 0.62], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }) * width;
  const by = (0.46 + Math.sin(frame * 0.04) * 0.04) * height;
  const heading = interpolate(frame, [0, 120], [6, -14], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const timeOpacity = interpolate(frame, [15, 45, 230, 270], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 25) }}>
      <EdiacaranOcean />

      <div style={{ position: "absolute", left: FOOD.x * width, top: FOOD.y * height }}>
        <ChemicalSource color={palette.food} size={240} />
      </div>

      <div style={{ position: "absolute", left: bx, top: by }}>
        <Bila heading={heading} scale={1.1} showCluster />
      </div>

      <AbsoluteFill style={{ fontFamily, color: palette.text, alignItems: "center", pointerEvents: "none" }}>
        <div style={{ marginTop: 90, opacity: timeOpacity, fontSize: 34, fontWeight: 300, letterSpacing: 5, textTransform: "uppercase" }}>
          Some time later · the same ocean
        </div>
      </AbsoluteFill>

      <TimedCaptions
        cues={[
          { text: "Back to Bila. Same ocean. Same body. Same little cluster inside her.", from: 20, to: 105 },
          { text: "Days have passed. Weeks. Maybe months.", from: 110, to: 180 },
          { text: "But watch closely — she has been changing. Quietly. All along.", from: 185, to: 270 },
        ]}
      />
    </AbsoluteFill>
  );
};
