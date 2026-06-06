import { palette } from "../../theme/palette";
import { fontFamily } from "../../theme/fonts";

type Props = {
  /** Predicted value 0..1 — "how good things are about to be". */
  predicted: number;
  /** Realized value 0..1 (null before the outcome is observed). */
  actual: number | null;
  /** Outcome flash tint. */
  flash?: "reward" | "punish" | null;
  /** Show the update formula beneath. */
  showFormula?: boolean;
  scale?: number;
};

const W = 720;
const H = 460;
const BAR_BOTTOM = 360;
const BAR_TOP = 80;
const BAR_H = BAR_BOTTOM - BAR_TOP;

/**
 * The temporal-difference learning unit: a prediction of "how good things are
 * about to be", compared against what actually happened. The gap between them —
 * the TD error — is the learning signal: update = actual − predicted.
 * Presentational; callers animate predicted/actual across predict→observe→adjust
 * cycles so predictions chase reality.
 */
export const TDError: React.FC<Props> = ({
  predicted,
  actual,
  flash = null,
  showFormula = false,
  scale = 1,
}) => {
  const p = Math.max(0, Math.min(1, predicted));
  const a = actual === null ? null : Math.max(0, Math.min(1, actual));
  const predY = BAR_BOTTOM - p * BAR_H;
  const actY = a === null ? null : BAR_BOTTOM - a * BAR_H;
  const error = a === null ? 0 : a - p;
  const errColor = error >= 0 ? palette.food : palette.predator;

  return (
    <svg width={W * scale} height={H * scale} viewBox={`0 0 ${W} ${H}`} style={{ fontFamily, overflow: "visible" }}>
      {/* Outcome flash. */}
      {flash && (
        <rect x={0} y={0} width={W} height={H} rx={16} fill={flash === "reward" ? palette.food : palette.predator} opacity={0.12} />
      )}

      {/* Track. */}
      <rect x={120} y={BAR_TOP} width={140} height={BAR_H} rx={10} fill="rgba(255,255,255,0.05)" />
      {/* Predicted fill. */}
      <rect x={120} y={predY} width={140} height={BAR_BOTTOM - predY} rx={10} fill={palette.vera} opacity={0.85} />
      <text x={190} y={BAR_BOTTOM + 34} textAnchor="middle" fontSize={26} fill={palette.text}>predicted</text>
      <text x={190} y={predY - 12} textAnchor="middle" fontSize={24} fill={palette.vera}>{p.toFixed(2)}</text>

      {/* Actual marker as a second bar. */}
      {a !== null && actY !== null && (
        <>
          <rect x={420} y={BAR_TOP} width={140} height={BAR_H} rx={10} fill="rgba(255,255,255,0.05)" />
          <rect x={420} y={actY} width={140} height={BAR_BOTTOM - actY} rx={10} fill={errColor} opacity={0.85} />
          <text x={490} y={BAR_BOTTOM + 34} textAnchor="middle" fontSize={26} fill={palette.text}>actual</text>
          <text x={490} y={actY - 12} textAnchor="middle" fontSize={24} fill={errColor}>{a.toFixed(2)}</text>

          {/* TD error bracket between the two tops. */}
          <line x1={270} y1={predY} x2={410} y2={actY} stroke={errColor} strokeWidth={2} strokeDasharray="4 5" />
          <text x={340} y={(predY + actY) / 2 - 12} textAnchor="middle" fontSize={26} fill={errColor} fontWeight={500}>
            {error >= 0 ? "▲" : "▼"} TD error {error >= 0 ? "+" : ""}{error.toFixed(2)}
          </text>
        </>
      )}

      {showFormula && (
        <text x={W / 2} y={H - 6} textAnchor="middle" fontSize={30} fill={palette.text}>
          update = actual − predicted
        </text>
      )}
    </svg>
  );
};
