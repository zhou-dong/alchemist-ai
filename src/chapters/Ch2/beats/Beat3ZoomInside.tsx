import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fadeIn } from "../../../theme/transitions";

// Neuron positions (centered) and the synapses between them, each with a base
// strength and a trend: some strengthen over the beat, some weaken.
const NODES = [
  { x: -180, y: -70 },
  { x: -40, y: -120 },
  { x: 120, y: -60 },
  { x: -120, y: 90 },
  { x: 60, y: 110 },
  { x: 200, y: 40 },
];
const EDGES = [
  { a: 0, b: 1, base: 0.4, trend: 0.5 },
  { a: 1, b: 2, base: 0.7, trend: -0.5 },
  { a: 1, b: 3, base: 0.3, trend: 0.6 },
  { a: 2, b: 5, base: 0.6, trend: 0.3 },
  { a: 3, b: 4, base: 0.8, trend: -0.6 },
  { a: 4, b: 5, base: 0.35, trend: 0.5 },
  { a: 0, b: 3, base: 0.5, trend: -0.3 },
  { a: 2, b: 4, base: 0.45, trend: 0.4 },
];

/**
 * Part 1 · Act 2 · Beat 3 — Zoom Inside. Deeper than before, into the spaces
 * between the neurons: the synapses. They are not fixed — fire together and a
 * junction strengthens (brighter, thicker); fire apart and it weakens. Her
 * wiring has been rewriting itself all along.
 */
export const Beat3ZoomInside: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const cx = width * 0.5;
  const cy = height * 0.46;
  const progress = interpolate(frame, [30, 280], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const zoom = interpolate(frame, [0, 90], [0.8, 1.15], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 20), backgroundColor: "#0b2230" }}>
      <AbsoluteFill style={{ background: "radial-gradient(circle at 50% 46%, rgba(60,110,140,0.35) 0%, rgba(8,28,40,0.92) 70%)" }} />

      <svg width={width} height={height} style={{ position: "absolute", inset: 0 }}>
        <g transform={`translate(${cx} ${cy}) scale(${zoom})`}>
          {EDGES.map((e, i) => {
            const s = Math.max(0.05, Math.min(1, e.base + e.trend * progress));
            const A = NODES[e.a];
            const B = NODES[e.b];
            const pulsePos = ((frame * 0.02 + i * 0.37) % 1);
            const px = A.x + (B.x - A.x) * pulsePos;
            const py = A.y + (B.y - A.y) * pulsePos;
            return (
              <g key={i}>
                <line
                  x1={A.x}
                  y1={A.y}
                  x2={B.x}
                  y2={B.y}
                  stroke={palette.vera}
                  strokeWidth={1.5 + s * 12}
                  strokeOpacity={0.15 + s * 0.7}
                  strokeLinecap="round"
                  style={{ filter: `blur(${s}px)` }}
                />
                {s > 0.55 && <circle cx={px} cy={py} r={4} fill={palette.bila} opacity={0.8} />}
              </g>
            );
          })}
          {NODES.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={14} fill={palette.vera} opacity={0.6 + 0.4 * Math.abs(Math.sin(frame * 0.1 + i))} />
          ))}
        </g>
      </svg>

      <TimedCaptions
        cues={[
          { text: "Zoom in. Closer than we've gone before — into the spaces between the cells.", from: 20, to: 110 },
          { text: "Tiny junctions, where one cell passes a signal to another. They are not fixed.", from: 115, to: 205 },
          { text: "Fire together, a junction strengthens. Apart, it weakens. Every moment of her life.", from: 210, to: 300 },
        ]}
      />
    </AbsoluteFill>
  );
};
