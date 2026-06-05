import { palette } from "../../theme/palette";

type Props = {
  /** Tip from -1 (left/run wins) to +1 (right/tumble wins). 0 is balanced. */
  tip: number;
  leftLabel: string;
  rightLabel: string;
  leftColor?: string;
  rightColor?: string;
  /** Overall scale (default 1). */
  scale?: number;
};

const MAX_ANGLE = 16;

/**
 * A balance / see-saw: the molecular switch made physical. Two signals push the
 * beam in opposite directions; whichever side is heavier wins. `tip` drives the
 * beam rotation and the relative pan heights.
 */
export const SeeSaw: React.FC<Props> = ({
  tip,
  leftLabel,
  rightLabel,
  leftColor = palette.food,
  rightColor = palette.toxin,
  scale = 1,
}) => {
  const angle = Math.max(-1, Math.min(1, tip)) * MAX_ANGLE;

  const Pan = ({
    side,
    label,
    color,
  }: {
    side: "left" | "right";
    label: string;
    color: string;
  }) => {
    // The lower pan (heavier side) carries the larger weight.
    const heavier = side === "left" ? tip < 0 : tip > 0;
    const r = heavier ? 34 : 24;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: r * 2,
            height: r * 2,
            borderRadius: "50%",
            backgroundColor: color,
            boxShadow: `0 0 24px ${color}88`,
          }}
        />
        <div style={{ color: palette.text, fontSize: 28, fontWeight: 400 }}>
          {label}
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        position: "relative",
        width: 520 * scale,
        height: 320 * scale,
        transform: `scale(${scale})`,
      }}
    >
      {/* Beam. */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 120,
          width: 440,
          height: 10,
          borderRadius: 5,
          backgroundColor: palette.textMuted,
          transform: `translateX(-50%) rotate(${angle}deg)`,
          transformOrigin: "center",
        }}
      />

      {/* Pivot. */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 124,
          width: 0,
          height: 0,
          transform: "translateX(-50%)",
          borderLeft: "26px solid transparent",
          borderRight: "26px solid transparent",
          borderBottom: `120px solid ${palette.oceanMid}`,
        }}
      />

      {/* Pans ride the beam ends; vertical offset follows the tilt. */}
      <div
        style={{
          position: "absolute",
          left: "8%",
          top: 120 + Math.sin((angle * Math.PI) / 180) * -220,
        }}
      >
        <Pan side="left" label={leftLabel} color={leftColor} />
      </div>
      <div
        style={{
          position: "absolute",
          right: "8%",
          top: 120 + Math.sin((angle * Math.PI) / 180) * 220,
        }}
      >
        <Pan side="right" label={rightLabel} color={rightColor} />
      </div>
    </div>
  );
};
