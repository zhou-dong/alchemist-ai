import { useCurrentFrame } from "remotion";
import { palette } from "../../theme/palette";

type Props = {
  scale?: number;
  /** Overall activity glow 0..1 (defaults to a gentle pulse). */
  activity?: number;
  /** Position 0..1 of an incoming sensory pulse (null = none). */
  inSignal?: number | null;
  /** Position 0..1 of an outgoing motor pulse (null = none). */
  outSignal?: number | null;
};

// A few neuron cell bodies forming the primitive ganglion.
const NEURONS = [
  { x: -10, y: -22 },
  { x: 24, y: -6 },
  { x: -4, y: 14 },
  { x: 30, y: 26 },
  { x: -28, y: 4 },
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * Bila's nervous cluster — a primitive ganglion: a knot of branching neurons
 * where sensory fibers (in, from the left) converge and a motor fiber (out, to
 * the right) leaves. The first place in life's history where signals from many
 * cells of a body come together to be weighed.
 */
export const NervousCluster: React.FC<Props> = ({
  scale = 1,
  activity,
  inSignal = null,
  outSignal = null,
}) => {
  const frame = useCurrentFrame();
  const glow = activity ?? 0.5 + 0.5 * Math.abs(Math.sin(frame * 0.1));

  // Sensory fibers enter from the left edge; motor fiber exits right.
  const inStart = { x: -150, y: -10 };
  const inEnd = NEURONS[4];
  const outStart = NEURONS[3];
  const outEnd = { x: 150, y: 30 };

  return (
    <svg
      width={360 * scale}
      height={300 * scale}
      viewBox="-160 -110 320 250"
      style={{ overflow: "visible" }}
    >
      {/* Soft halo of cluster activity. */}
      <circle cx={5} cy={0} r={70} fill={palette.vera} opacity={glow * 0.18} style={{ filter: "blur(8px)" }} />

      {/* Sensory fibers in. */}
      {[-34, -10, 16].map((y0, i) => (
        <line
          key={i}
          x1={-150}
          y1={y0}
          x2={inEnd.x}
          y2={inEnd.y}
          stroke={palette.bila}
          strokeWidth={2.5}
          strokeOpacity={0.6}
          strokeLinecap="round"
        />
      ))}

      {/* Motor fiber out. */}
      <line
        x1={outStart.x}
        y1={outStart.y}
        x2={outEnd.x}
        y2={outEnd.y}
        stroke={palette.food}
        strokeWidth={3}
        strokeOpacity={0.7}
        strokeLinecap="round"
      />

      {/* Dendritic connections between neurons. */}
      {NEURONS.map((a, i) =>
        NEURONS.slice(i + 1).map((b, j) => (
          <line
            key={`${i}-${j}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke={palette.vera}
            strokeOpacity={0.4}
            strokeWidth={1.5}
          />
        )),
      )}

      {/* Neuron cell bodies. */}
      {NEURONS.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={9} fill={palette.vera} opacity={0.55 + glow * 0.45} />
      ))}

      {/* Traveling pulses. */}
      {inSignal !== null && (
        <circle
          cx={lerp(inStart.x, inEnd.x, inSignal)}
          cy={lerp(inStart.y, inEnd.y, inSignal)}
          r={6}
          fill={palette.bila}
        />
      )}
      {outSignal !== null && (
        <circle
          cx={lerp(outStart.x, outEnd.x, outSignal)}
          cy={lerp(outStart.y, outEnd.y, outSignal)}
          r={6}
          fill={palette.food}
        />
      )}
    </svg>
  );
};
