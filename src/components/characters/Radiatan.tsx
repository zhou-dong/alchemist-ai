import { useCurrentFrame } from "remotion";
import { palette } from "../../theme/palette";

type Props = {
  scale?: number;
  /** Frond count (default 7). */
  fronds?: number;
  /** Phase offset so a field of radiatans doesn't sway in lockstep. */
  phase?: number;
};

/**
 * A radiatan — a radially symmetric Ediacaran creature (the cnidarian path):
 * anchored to the seabed, fronds fanning out, swaying with the current. No
 * front, no back, no direction — the "stay still and wait" answer to
 * multicellular life.
 */
export const Radiatan: React.FC<Props> = ({ scale = 1, fronds = 7, phase = 0 }) => {
  const frame = useCurrentFrame();
  const sway = Math.sin(frame * 0.04 + phase) * 5;

  return (
    <svg
      width={120 * scale}
      height={150 * scale}
      viewBox="-60 -110 120 150"
      style={{ transform: "translate(-50%, -100%)", overflow: "visible" }}
    >
      {/* Holdfast / base anchored to the seabed. */}
      <ellipse cx={0} cy={28} rx={26} ry={10} fill={palette.radiatan} fillOpacity={0.5} />

      {/* Fronds fanning upward, swaying together. */}
      {Array.from({ length: fronds }).map((_, i) => {
        const spread = (i - (fronds - 1) / 2) * 22;
        const tipX = spread + sway;
        return (
          <path
            key={i}
            d={`M 0 28 Q ${spread * 0.6 + sway * 0.5} -40 ${tipX} -92`}
            fill="none"
            stroke={palette.radiatan}
            strokeWidth={6}
            strokeLinecap="round"
            opacity={0.85}
          />
        );
      })}

      {/* Central stalk. */}
      <path
        d={`M 0 30 Q ${sway * 0.4} -30 ${sway} -86`}
        fill="none"
        stroke={palette.matPurple}
        strokeWidth={9}
        strokeLinecap="round"
      />
    </svg>
  );
};
