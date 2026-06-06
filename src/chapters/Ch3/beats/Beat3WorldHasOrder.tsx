import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { EdiacaranOcean } from "../../../components/scenes/EdiacaranOcean";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

type Seq = { y: number; cause: string; effect: string; causeColor: string; effectColor: string; at: number };

const SEQS: Seq[] = [
  { y: 0.36, cause: "shadow", effect: "strike", causeColor: "#0a1622", effectColor: "#c0392b", at: 25 },
  { y: 0.58, cause: "smell", effect: "food", causeColor: "#7cd47c", effectColor: "#7cd47c", at: 120 },
];

/**
 * Part 1 · Act 2 · Beat 3 — The World Has Order. Cause-effect sequences laid out
 * in time: the shadow before the strike, the smell before the food. Causes come
 * first; effects follow. If Bila could notice the order, she could tell true
 * warnings from coincidence.
 */
export const Beat3WorldHasOrder: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const cxL = 0.3 * width;
  const cxR = 0.62 * width;

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 20) }}>
      <AbsoluteFill style={{ filter: "brightness(0.7)" }}>
        <EdiacaranOcean />
      </AbsoluteFill>

      <svg width={width} height={height} style={{ position: "absolute", inset: 0, fontFamily }}>
        {SEQS.map((s, i) => {
          const y = s.y * height;
          const causeO = fadeIn(frame - s.at, 22);
          const arrowO = fadeIn(frame - s.at - 35, 22);
          const effectO = fadeIn(frame - s.at - 60, 22);
          return (
            <g key={i}>
              {/* Cause. */}
              <circle cx={cxL} cy={y} r={26} fill={s.causeColor} stroke={palette.text} strokeWidth={2} opacity={causeO} />
              <text x={cxL} y={y + 70} textAnchor="middle" fontSize={30} fill={palette.text} opacity={causeO}>{s.cause}</text>
              <text x={cxL} y={y - 44} textAnchor="middle" fontSize={22} fill={palette.textMuted} opacity={causeO}>first</text>

              {/* Arrow. */}
              <line x1={cxL + 40} y1={y} x2={cxR - 44} y2={y} stroke={palette.text} strokeWidth={4} opacity={arrowO} />
              <polygon points={`${cxR - 48},${y - 12} ${cxR - 24},${y} ${cxR - 48},${y + 12}`} fill={palette.text} opacity={arrowO} />

              {/* Effect. */}
              <circle cx={cxR} cy={y} r={26} fill={s.effectColor} stroke={palette.text} strokeWidth={2} opacity={effectO} />
              <text x={cxR} y={y + 70} textAnchor="middle" fontSize={30} fill={palette.text} opacity={effectO}>{s.effect}</text>
              <text x={cxR} y={y - 44} textAnchor="middle" fontSize={22} fill={palette.textMuted} opacity={effectO}>then</text>
            </g>
          );
        })}
      </svg>

      <TimedCaptions
        cues={[
          { text: "But in the world, things have order. The shadow comes before the strike.", from: 20, to: 110 },
          { text: "The smell comes before the food. Always. Causes first; effects follow.", from: 115, to: 200 },
          { text: "If Bila could notice the order, she could tell warnings from coincidence.", from: 205, to: 270 },
        ]}
      />
    </AbsoluteFill>
  );
};
