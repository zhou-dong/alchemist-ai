import { palette } from "../../theme/palette";
import { fontFamily } from "../../theme/fonts";

export type PerceptronInput = {
  label: string;
  /** Weight magnitude 0..1 — drives connection thickness and dial size. */
  weight: number;
  /** Input color (defaults to muted text). */
  color?: string;
  /** Staged-reveal opacity 0..1 (default 1). */
  reveal?: number;
};

type Props = {
  inputs: PerceptronInput[];
  bias?: number;
  /** Binary step output, or null to leave the node undecided. */
  output?: 0 | 1 | null;
  /** Show the output path (step box + output arrow). Default true. */
  showOutput?: boolean;
  /** Show the formula beneath the diagram. Default false. */
  showFormula?: boolean;
  /** Opacity of the formula 0..1 (default 1 when shown). */
  formulaOpacity?: number;
  scale?: number;
};

const W = 1040;
const H = 620;
const NODE = { x: 560, y: 300, r: 52 };
const INPUT_X = 150;
const STEP_X = 820;

/**
 * The perceptron — multiple weighted inputs converging on a single node, summed
 * with a bias, passed through a step to a binary output. The shape evolution
 * "discovered" in Bila's nervous cluster, and the foundational unit of every
 * neural network. Purely presentational: callers animate via props (weights,
 * reveal, output, formula opacity).
 */
export const Perceptron: React.FC<Props> = ({
  inputs,
  bias = 0,
  output = null,
  showOutput = true,
  showFormula = false,
  formulaOpacity = 1,
  scale = 1,
}) => {
  const n = inputs.length;
  const ySpan = 420;
  const y0 = NODE.y - ySpan / 2;
  const inputY = (i: number) => (n === 1 ? NODE.y : y0 + (ySpan / (n - 1)) * i);

  const nodeFill =
    output === 1 ? palette.food : output === 0 ? palette.oceanMid : palette.oceanShallow;

  return (
    <svg
      width={W * scale}
      height={H * scale}
      viewBox={`0 0 ${W} ${H}`}
      style={{ fontFamily, overflow: "visible" }}
    >
      {inputs.map((inp, i) => {
        const y = inputY(i);
        const reveal = inp.reveal ?? 1;
        const color = inp.color ?? palette.textMuted;
        const mx = (INPUT_X + NODE.x) / 2;
        const my = (y + NODE.y) / 2;
        return (
          <g key={i} opacity={reveal}>
            {/* Connection, thickness ∝ weight. */}
            <line
              x1={INPUT_X + 40}
              y1={y}
              x2={NODE.x - NODE.r}
              y2={NODE.y}
              stroke={color}
              strokeWidth={1.5 + inp.weight * 7}
              strokeLinecap="round"
              opacity={0.85}
            />
            {/* Input label. */}
            <text
              x={INPUT_X + 20}
              y={y + 8}
              textAnchor="end"
              fontSize={28}
              fill={palette.text}
            >
              {inp.label}
            </text>
            {/* Weight dial. */}
            <circle cx={mx} cy={my} r={10 + inp.weight * 12} fill={color} />
            <circle cx={mx} cy={my} r={10 + inp.weight * 12} fill="none" stroke="#000" strokeOpacity={0.25} />
          </g>
        );
      })}

      {/* Central summing node. */}
      <circle cx={NODE.x} cy={NODE.y} r={NODE.r} fill={nodeFill} stroke={palette.text} strokeWidth={3} />
      <text
        x={NODE.x}
        y={NODE.y + 14}
        textAnchor="middle"
        fontSize={40}
        fill={palette.text}
      >
        Σ
      </text>
      {/* Bias tag. */}
      <text x={NODE.x} y={NODE.y + NODE.r + 34} textAnchor="middle" fontSize={24} fill={palette.textMuted}>
        + bias {bias ? `(${bias > 0 ? "+" : ""}${bias.toFixed(1)})` : ""}
      </text>

      {showOutput && (
        <g>
          <line
            x1={NODE.x + NODE.r}
            y1={NODE.y}
            x2={STEP_X}
            y2={NODE.y}
            stroke={palette.textMuted}
            strokeWidth={4}
            strokeLinecap="round"
          />
          {/* Step box. */}
          <rect x={STEP_X} y={NODE.y - 44} width={96} height={88} rx={10} fill="none" stroke={palette.textMuted} strokeWidth={3} />
          {/* Step glyph. */}
          <path
            d={`M ${STEP_X + 14} ${NODE.y + 24} H ${STEP_X + 48} V ${NODE.y - 24} H ${STEP_X + 82}`}
            fill="none"
            stroke={palette.bila}
            strokeWidth={4}
          />
          <text x={STEP_X + 48} y={NODE.y + 78} textAnchor="middle" fontSize={24} fill={palette.textMuted}>
            step
          </text>
          {/* Output arrow. */}
          <line x1={STEP_X + 96} y1={NODE.y} x2={STEP_X + 180} y2={NODE.y} stroke={palette.text} strokeWidth={4} />
          <polygon
            points={`${STEP_X + 176},${NODE.y - 12} ${STEP_X + 200},${NODE.y} ${STEP_X + 176},${NODE.y + 12}`}
            fill={palette.text}
          />
          <text x={STEP_X + 120} y={NODE.y - 22} fontSize={24} fill={palette.text}>
            output
          </text>
        </g>
      )}

      {showFormula && (
        <text
          x={W / 2}
          y={H - 16}
          textAnchor="middle"
          fontSize={34}
          fill={palette.text}
          opacity={formulaOpacity}
        >
          output = step( Σ ( signal × weight ) + bias )
        </text>
      )}
    </svg>
  );
};
