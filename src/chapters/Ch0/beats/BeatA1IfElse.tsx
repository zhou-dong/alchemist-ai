import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Bacterium } from "../../../components/characters/Bacterium";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";

/**
 * Part 2 · A1 — The If/Else. The plain-English rule from Beat 7 transforms into
 * code: the simplest decision structure in computing, the first life ever
 * invented — the same shape, in proteins and in silicon.
 */
export const BeatA1IfElse: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const plain = interpolate(frame, [20, 50, 95, 120], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const code = interpolate(frame, [120, 150], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const pulse = 1 + Math.sin(frame * 0.08) * 0.015;

  // The cell, small and iconic, keeps its quiet dance in the background.
  const cellX = (0.5 + 0.12 * Math.sin(frame * 0.025)) * width;
  const tumbling = frame % 70 > 56;

  const kw: React.CSSProperties = { color: palette.bila };

  return (
    <AbsoluteFill style={{ backgroundColor: "#04080e", opacity: fadeIn(frame, 20) }}>
      <div style={{ position: "absolute", left: cellX, top: 0.2 * height, opacity: 0.7 }}>
        <Bacterium mode={tumbling ? "tumble" : "run"} heading={0} scale={0.8} />
      </div>

      {/* Plain-English rule. */}
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            position: "absolute",
            opacity: plain,
            fontFamily,
            color: palette.text,
            fontSize: 46,
            fontWeight: 300,
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          When the world gets better — keep going.
          <br />
          When the world gets worse — change direction.
        </div>

        {/* Code form. */}
        <div
          style={{
            position: "absolute",
            opacity: code,
            transform: `scale(${pulse})`,
            fontFamily: mono,
            fontSize: 44,
            lineHeight: 1.7,
            color: palette.text,
            backgroundColor: "rgba(255,255,255,0.04)",
            border: `1px solid ${palette.textMuted}44`,
            borderRadius: 14,
            padding: "36px 56px",
            whiteSpace: "pre",
          }}
        >
          <span style={kw}>if</span> signal is getting better:{"\n"}
          {"    "}run{"\n"}
          <span style={kw}>else</span>:{"\n"}
          {"    "}tumble
        </div>
      </AbsoluteFill>

      <TimedCaptions
        cues={[
          {
            text: "If a condition is true, do one thing. Else, do another.",
            from: 150,
            to: 215,
          },
          {
            text: "The simplest decision in computing — and life typed it first.",
            from: 220,
            to: 270,
          },
        ]}
      />
    </AbsoluteFill>
  );
};
