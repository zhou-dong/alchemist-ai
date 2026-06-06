import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { EdiacaranOcean } from "../../../components/scenes/EdiacaranOcean";
import { Bila } from "../../../components/characters/Bila";
import { Perceptron } from "../../../components/algorithms/Perceptron";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

/**
 * Part 1 · Act 2 · Beat 5 — Two Bilas. Born identical, raised in different
 * worlds: one in plenty (weights drift toward openness), one among predators
 * (weights drift toward caution). Same starting body — two different creatures,
 * shaped by what their lives have been. The first experiential individuality.
 */
export const Beat5TwoBilas: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const half = width / 2;
  const t = interpolate(frame, [60, 300], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const left = [
    { label: "food", weight: interpolate(t, [0, 1], [0.4, 0.9]), color: palette.food, reveal: 1 },
    { label: "danger", weight: interpolate(t, [0, 1], [0.5, 0.25]), color: palette.predator, reveal: 1 },
  ];
  const right = [
    { label: "food", weight: interpolate(t, [0, 1], [0.4, 0.3]), color: palette.food, reveal: 1 },
    { label: "danger", weight: interpolate(t, [0, 1], [0.5, 0.92]), color: palette.predator, reveal: 1 },
  ];

  const title: React.CSSProperties = { position: "absolute", top: 54, width: half, textAlign: "center", fontFamily, color: palette.text, fontSize: 28, letterSpacing: 2 };
  const tag: React.CSSProperties = { position: "absolute", bottom: 150, width: half, textAlign: "center", fontFamily, fontSize: 30, fontStyle: "italic", opacity: fadeIn(frame - 150, 30) };

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 25), backgroundColor: palette.oceanDeep }}>
      {/* Left — plenty. */}
      <div style={{ position: "absolute", left: 0, width: half, height, overflow: "hidden" }}>
        <EdiacaranOcean />
        <div style={{ position: "absolute", left: half * 0.5, top: 0.28 * height }}>
          <Bila heading={2} scale={0.8} showCluster />
        </div>
        <div style={{ position: "absolute", left: half * 0.5 - 260, top: 0.42 * height }}>
          <Perceptron inputs={left} bias={-0.1} output={1} showOutput={false} scale={0.5} />
        </div>
        <div style={title}>PLENTY · few dangers</div>
        <div style={{ ...tag, color: palette.food }}>openness</div>
      </div>

      {/* Right — danger. */}
      <div style={{ position: "absolute", left: half, width: half, height, overflow: "hidden", filter: "brightness(0.82)" }}>
        <EdiacaranOcean />
        <div style={{ position: "absolute", left: half * 0.5, top: 0.28 * height }}>
          <Bila heading={2} scale={0.8} showCluster />
        </div>
        <div style={{ position: "absolute", left: half * 0.5 - 260, top: 0.42 * height }}>
          <Perceptron inputs={right} bias={-0.1} output={1} showOutput={false} scale={0.5} />
        </div>
        <div style={title}>DANGER · predators common</div>
        <div style={{ ...tag, color: palette.predator }}>caution</div>
      </div>

      <div style={{ position: "absolute", left: half - 1, top: 0, width: 2, height, backgroundColor: palette.text, opacity: 0.15 }} />

      <TimedCaptions
        cues={[
          { text: "From that simple rule, something new: memory — a body shaped by what happened to it.", from: 20, to: 115 },
          { text: "Two Bilas, born identical. One in plenty; one where predators are common.", from: 120, to: 215 },
          { text: "Same starting body — two different creatures, because of what their lives have been.", from: 220, to: 330 },
        ]}
      />
    </AbsoluteFill>
  );
};
