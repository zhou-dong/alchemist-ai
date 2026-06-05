import { useCurrentFrame } from "remotion";
import { palette } from "../../theme/palette";

type Mode = "run" | "tumble";

type Props = {
  /** "run" bundles the flagella into a trailing tail; "tumble" scatters them. */
  mode?: Mode;
  /** Heading in degrees (0 = pointing right). The cell points where it swims. */
  heading?: number;
  /** Uniform scale (default 1). */
  scale?: number;
  /** Show the chemical receptors dotting the membrane (default false). */
  showReceptors?: boolean;
};

const FLAGELLA_COUNT = 4;
const SEGMENTS = 14;
const TAIL_LENGTH = 70;

// One whip-like flagellum as a sampled sine wave, drawn trailing left from the
// cell body. In "run" the waves align and bundle; in "tumble" each whip splays
// to its own angle with a faster, noisier wiggle.
const flagellumPath = (
  index: number,
  frame: number,
  mode: Mode,
): string => {
  const bundled = mode === "run";
  const spread = bundled ? 0 : (index - (FLAGELLA_COUNT - 1) / 2) * 16;
  const amplitude = bundled ? 3 : 7;
  const frequency = bundled ? 0.45 : 0.8;
  const speed = bundled ? 0.25 : 0.5;
  const phase = bundled ? 0 : index * 1.7;

  const points: string[] = [];
  for (let s = 0; s <= SEGMENTS; s++) {
    const t = s / SEGMENTS;
    const x = -t * TAIL_LENGTH;
    const wave =
      Math.sin(t * Math.PI * 2 * (bundled ? 1.5 : 2) + frame * frequency + phase) *
      amplitude *
      t;
    const splay = Math.sin(spread * (Math.PI / 180)) * t * TAIL_LENGTH * 0.5;
    const jitter = bundled ? 0 : Math.sin(frame * speed + index) * 2 * t;
    const y = wave + splay + jitter;
    points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return `M ${points.join(" L ")}`;
};

export const Bacterium: React.FC<Props> = ({
  mode = "run",
  heading = 0,
  scale = 1,
  showReceptors = false,
}) => {
  const frame = useCurrentFrame();

  return (
    <svg
      width={140 * scale}
      height={100 * scale}
      viewBox="-90 -50 140 100"
      style={{
        transform: `translate(-50%, -50%) rotate(${heading}deg)`,
        overflow: "visible",
      }}
    >
      {Array.from({ length: FLAGELLA_COUNT }).map((_, i) => (
        <path
          key={i}
          d={flagellumPath(i, frame, mode)}
          fill="none"
          stroke={palette.bila}
          strokeOpacity={0.6}
          strokeWidth={2}
          strokeLinecap="round"
          // Flagella attach at the rear of the rod body.
          transform="translate(-24, 0)"
        />
      ))}

      {/* Rod-shaped cell body. */}
      <rect
        x={-26}
        y={-15}
        width={56}
        height={30}
        rx={15}
        fill={palette.bila}
        fillOpacity={0.85}
        stroke={palette.bila}
        strokeWidth={2}
      />

      {/* Faint interior machinery. */}
      <circle cx={-6} cy={-3} r={4} fill={palette.oceanDeep} fillOpacity={0.35} />
      <circle cx={8} cy={4} r={3} fill={palette.oceanDeep} fillOpacity={0.3} />

      {showReceptors &&
        [-18, -6, 6, 18].map((cx) => (
          <circle
            key={cx}
            cx={cx}
            cy={-15}
            r={2.5}
            fill={palette.text}
            fillOpacity={0.8}
          />
        ))}
    </svg>
  );
};
