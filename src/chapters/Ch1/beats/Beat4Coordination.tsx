import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { EdiacaranOcean } from "../../../components/scenes/EdiacaranOcean";
import { Bila } from "../../../components/characters/Bila";
import { Bacterium } from "../../../components/characters/Bacterium";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

/**
 * Part 1 · Act 1 · Beat 4 — A Body That Moves Needs Coordination. Different
 * cells across Bila's body receive different signals at once. Without a place
 * to bring them together, the body would pull apart. Contrast: a bacterium
 * decides inside one cell. Bila must decide across a body.
 */
export const Beat4Coordination: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const cx = 0.44 * width;
  const cy = 0.46 * height;
  const scale = 2.0;

  // Receptor dots scattered over her body surface.
  const dots = Array.from({ length: 9 }).map((_, i) => {
    const a = (i / 9) * Math.PI * 2;
    return { x: cx + Math.cos(a) * 150 * scale * 0.5, y: cy + Math.sin(a) * 56 * scale * 0.5 };
  });

  // Three signals arriving at different parts of the body, staged.
  const signals = [
    { color: palette.food, label: "food", x1: cx + 320, y1: cy - 30, x2: cx + 150, y2: cy - 4, at: 110 },
    { color: palette.predator, label: "danger", x1: cx + 40, y1: cy - 230, x2: cx + 20, y2: cy - 50, at: 130 },
    { color: palette.oceanShallow, label: "current", x1: cx - 320, y1: cy + 90, x2: cx - 130, y2: cy + 20, at: 150 },
  ];

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 20) }}>
      <AbsoluteFill style={{ filter: "brightness(0.9)" }}>
        <EdiacaranOcean />
      </AbsoluteFill>

      <div style={{ position: "absolute", left: cx, top: cy }}>
        <Bila heading={0} scale={scale} />
      </div>

      {/* Receptors. */}
      <svg width={width} height={height} style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={4} fill={palette.text} opacity={fadeIn(frame - 20 - i * 4, 20) * 0.8} />
        ))}
        {signals.map((s, i) => {
          const o = fadeIn(frame - s.at, 24);
          return (
            <g key={i} opacity={o}>
              <line x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} stroke={s.color} strokeWidth={4} strokeLinecap="round" />
              <circle cx={s.x2} cy={s.y2} r={7} fill={s.color} />
              <text x={s.x1} y={s.y1 - 12} fontSize={26} fill={s.color} fontFamily={fontFamily} textAnchor="middle">
                {s.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Contrast: one bacterium, one switch. */}
      <div style={{ position: "absolute", left: 0.86 * width, top: 0.78 * height, opacity: interpolate(frame, [200, 230], [0, 0.85], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
        <Bacterium mode="run" heading={-10} scale={0.7} />
        <div style={{ position: "absolute", top: 40, left: -40, width: 180, textAlign: "center", fontFamily, color: palette.textMuted, fontSize: 22 }}>
          one cell · one switch
        </div>
      </div>

      <TimedCaptions
        cues={[
          { text: "Her ancestors solved decisions inside a single cell.", from: 20, to: 100 },
          { text: "But Bila is many cells — front, sides, gut, muscles — sensing at once.", from: 105, to: 195 },
          { text: "To move with purpose, the signals must come together — somewhere — first.", from: 200, to: 300 },
        ]}
      />
    </AbsoluteFill>
  );
};
