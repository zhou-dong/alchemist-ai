import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { ArcheanOcean } from "../../../components/scenes/ArcheanOcean";
import { Bacterium } from "../../../components/characters/Bacterium";
import { Narration } from "../../../components/Narration";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";
import { cueFrame } from "../../../narration/schedule";
import { revealAt } from "../../../narration/staging";
import { narration } from "../narration.generated";

const BEAT = narration.beat7SimpleRule;

// The rule is displayed as a card in the middle of the frame, and the narrator
// speaks it twice — once when it first appears, and again as the closing refrain.
// Those four lines go unsubtitled so the viewer isn't reading the same sentence
// twice at two different sizes.
const RULE_LINES = [1, 2, 20, 21];

/**
 * Part 1 · Act 2 · Beat 7 — The Simple Rule. The cell keeps dancing while the
 * rule appears in plain words: when the world gets better, keep going; when it
 * gets worse, change direction. One rule, every survival problem.
 */
export const Beat7SimpleRule: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // Gentle wander with a tumble every ~75 frames. Left on real frames: this is
  // the cell's idle life, and it should keep dancing at its own pace for as long
  // as the narration runs.
  const path = (f: number) => ({
    x: (0.5 + 0.26 * Math.sin(f * 0.02)) * width,
    y: (0.28 + 0.05 * Math.sin(f * 0.045)) * height,
  });
  const here = path(frame);
  const next = path(frame + 2);
  const heading = (Math.atan2(next.y - here.y, next.x - here.x) * 180) / Math.PI;
  const tumbling = frame % 75 > 60;

  // The two rule lines appear as the narrator speaks them, and stay up.
  const line1 = revealAt(frame, cueFrame(BEAT, RULE_LINES[0]), 30);
  const line2 = revealAt(frame, cueFrame(BEAT, RULE_LINES[1]), 30);

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

      <Narration beat={BEAT} silentLines={RULE_LINES} />
    </AbsoluteFill>
  );
};
