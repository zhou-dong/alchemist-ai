import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { ArcheanOcean } from "../../../components/scenes/ArcheanOcean";
import { Bacterium } from "../../../components/characters/Bacterium";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

/**
 * Part 1 · Act 2 · Beat 7 — The Simple Rule. The cell keeps dancing while the
 * rule appears in plain words: when the world gets better, keep going; when it
 * gets worse, change direction. One rule, every survival problem.
 */
export const Beat7SimpleRule: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // Gentle wander with a tumble every ~75 frames.
  const path = (f: number) => ({
    x: (0.5 + 0.26 * Math.sin(f * 0.02)) * width,
    y: (0.28 + 0.05 * Math.sin(f * 0.045)) * height,
  });
  const here = path(frame);
  const next = path(frame + 2);
  const heading = (Math.atan2(next.y - here.y, next.x - here.x) * 180) / Math.PI;
  const tumbling = frame % 75 > 60;

  const line1 = interpolate(frame, [30, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const line2 = interpolate(frame, [85, 115], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const ruleStyle: React.CSSProperties = {
    fontFamily,
    color: palette.text,
    fontSize: 52,
    fontWeight: 300,
    lineHeight: 1.6,
    textAlign: "center",
  };

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 20) }}>
      <AbsoluteFill style={{ filter: "brightness(0.7)" }}>
        <ArcheanOcean />
      </AbsoluteFill>

      <div style={{ position: "absolute", left: here.x, top: here.y }}>
        <Bacterium mode={tumbling ? "tumble" : "run"} heading={heading} />
      </div>

      <AbsoluteFill
        style={{ alignItems: "center", justifyContent: "center", pointerEvents: "none" }}
      >
        <div style={{ marginTop: 80 }}>
          <div style={{ ...ruleStyle, opacity: line1 }}>
            When the world gets better — keep going.
          </div>
          <div style={{ ...ruleStyle, opacity: line2 }}>
            When the world gets worse — change direction.
          </div>
        </div>
      </AbsoluteFill>

      <TimedCaptions
        cues={[
          {
            text: "That's the whole animal. One rule — every survival problem it'll ever meet.",
            from: 160,
            to: 270,
          },
        ]}
      />
    </AbsoluteFill>
  );
};
