import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { EdiacaranOcean } from "../../../components/scenes/EdiacaranOcean";
import { Bila } from "../../../components/characters/Bila";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

/**
 * Part 1 · Act 2 · Beat 7 — Inside and Outside Together. External signals (food,
 * danger) and internal signals (hunger, arousal) all flow into the same
 * cluster, each with its own weight, each treated the same way. The body's
 * inside has a voice from the very start.
 */
export const Beat7InsideAndOutside: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const cx = 0.46 * width;
  const cy = 0.48 * height;
  const scale = 2.0;
  const cluster = { x: cx + 40 * scale, y: cy };

  const signals = [
    { color: palette.food, label: "food", from: "outside", x: cx + 360, y: cy - 150, at: 25 },
    { color: palette.predator, label: "danger", from: "outside", x: cx - 320, y: cy - 170, at: 45 },
    { color: palette.earthLava, label: "hunger", from: "inside", x: cx - 60, y: cy + 70, at: 135 },
    { color: palette.matPurple, label: "arousal", from: "inside", x: cx + 30, y: cy + 110, at: 155 },
  ];

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 20) }}>
      <AbsoluteFill style={{ filter: "brightness(0.9)" }}>
        <EdiacaranOcean />
      </AbsoluteFill>

      <div style={{ position: "absolute", left: cx, top: cy }}>
        <Bila heading={0} scale={scale} showCluster />
      </div>

      <svg width={width} height={height} style={{ position: "absolute", inset: 0, pointerEvents: "none", fontFamily }}>
        {signals.map((s, i) => {
          const o = fadeIn(frame - s.at, 26);
          const mx = (s.x + cluster.x) / 2;
          const my = (s.y + cluster.y) / 2;
          return (
            <g key={i} opacity={o}>
              <line
                x1={s.x}
                y1={s.y}
                x2={cluster.x}
                y2={cluster.y}
                stroke={s.color}
                strokeWidth={4}
                strokeLinecap="round"
                strokeDasharray={s.from === "inside" ? "2 8" : undefined}
              />
              {/* Weight dial. */}
              <circle cx={mx} cy={my} r={14} fill={s.color} />
              <circle cx={mx} cy={my} r={14} fill="none" stroke="#000" strokeOpacity={0.25} />
              <text x={s.x} y={s.y - 16} fontSize={26} fill={s.color} textAnchor="middle">
                {s.label}
              </text>
            </g>
          );
        })}
        {/* The cluster meeting point. */}
        <circle cx={cluster.x} cy={cluster.y} r={16} fill={palette.vera} opacity={0.6 + 0.4 * Math.abs(Math.sin(frame * 0.1))} />
      </svg>

      <TimedCaptions
        cues={[
          { text: "Along with the cluster, Bila evolved signals from inside — hunger, arousal.", from: 25, to: 115 },
          { text: "They didn't evolve separately. They evolved with the nervous system.", from: 120, to: 205 },
          { text: "Inside and outside meet, in one place, in one equation.", from: 210, to: 300 },
        ]}
      />
    </AbsoluteFill>
  );
};
