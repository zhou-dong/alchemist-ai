import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

const DECAY = 90; // frames
const ACTIONS = [
  { label: "action 1", x: 0.22, at: 40 },
  { label: "action 2", x: 0.4, at: 90 },
  { label: "action 3", x: 0.58, at: 140 },
];
const REWARD = { x: 0.84, at: 220 };

/**
 * Part 2 · A2 — Eligibility Traces. Each action leaves a fading trace — "I was
 * recently active". A reward arriving seconds later follows the traces back to
 * decide which actions to credit: recent actions have stronger traces, and get
 * more credit. The trace is the bridge across time.
 */
export const BeatA2EligibilityTraces: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const baseY = 0.62 * height;

  const trace = (at: number, t: number) => (t < at ? 0 : Math.exp(-(t - at) / DECAY));
  const rewardOn = frame >= REWARD.at;
  const rewardFlash = interpolate(frame, [REWARD.at, REWARD.at + 12, REWARD.at + 40], [0, 1, 0.5], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#04080e", opacity: fadeIn(frame, 20) }}>
      <svg width={width} height={height} style={{ position: "absolute", inset: 0, fontFamily }}>
        {/* Time axis. */}
        <line x1={0.12 * width} y1={baseY} x2={0.9 * width} y2={baseY} stroke={palette.textMuted} strokeWidth={2} />
        <text x={0.9 * width} y={baseY + 40} textAnchor="end" fontSize={24} fill={palette.textMuted}>time →</text>

        {ACTIONS.map((a, i) => {
          const x = a.x * width;
          const tr = trace(a.at, frame);
          const appear = fadeIn(frame - a.at, 10);
          const traceAtReward = trace(a.at, REWARD.at);
          return (
            <g key={i} opacity={appear}>
              {/* Decaying trace bar. */}
              <rect x={x - 14} y={baseY - 30 - tr * 150} width={28} height={tr * 150} rx={6} fill={palette.bila} opacity={0.3 + tr * 0.6} />
              {/* Action marker. */}
              <circle cx={x} cy={baseY} r={14} fill={palette.bila} />
              <text x={x} y={baseY + 40} textAnchor="middle" fontSize={24} fill={palette.text}>{a.label}</text>

              {/* Credit assignment when reward arrives. */}
              {rewardOn && (
                <>
                  <line x1={REWARD.x * width} y1={baseY - 40} x2={x} y2={baseY - 40 - tr * 150} stroke={palette.food} strokeWidth={1 + traceAtReward * 10} strokeOpacity={0.5} strokeDasharray="3 6" />
                  <text x={x} y={baseY - 44 - tr * 150} textAnchor="middle" fontSize={22} fill={palette.food} opacity={rewardFlash}>
                    credit {(traceAtReward * 100).toFixed(0)}%
                  </text>
                </>
              )}
            </g>
          );
        })}

        {/* Reward. */}
        {rewardOn && (
          <g>
            <circle cx={REWARD.x * width} cy={baseY} r={20 + rewardFlash * 8} fill={palette.food} />
            <text x={REWARD.x * width} y={baseY + 44} textAnchor="middle" fontSize={26} fill={palette.food}>reward</text>
          </g>
        )}
      </svg>

      <TimedCaptions
        cues={[
          { text: "What if the reward comes long after the action that caused it?", from: 20, to: 105 },
          { text: "Every action leaves a faint trace — a mark that says 'I was recently active.'", from: 110, to: 200 },
          { text: "When reward arrives, the trace says which action to credit — recent ones, most.", from: 205, to: 290 },
          { text: "The eligibility trace — the bridge across time.", from: 295, to: 360 },
        ]}
        bottom={70}
      />
    </AbsoluteFill>
  );
};
