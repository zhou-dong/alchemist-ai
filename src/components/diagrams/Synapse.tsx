import { palette } from "../../theme/palette";

type Props = {
  /** Connection strength 0..1 — drives thickness, brightness and the terminal. */
  strength: number;
  scale?: number;
  /** Position 0..1 of a signal traveling from A to B (null = none). */
  pulse?: number | null;
  /** Highlight neuron A / B as currently firing. */
  firingA?: boolean;
  firingB?: boolean;
  labelA?: string;
  labelB?: string;
};

const A = { x: -110, y: 0 };
const B = { x: 110, y: 0 };
const R = 30;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * Two neurons joined by a synapse whose strength can change. Strengthening
 * thickens and brightens the junction and fattens its terminal bulb;
 * weakening thins it. The unit of Hebbian plasticity — "cells that fire
 * together, wire together." Purely presentational; callers animate `strength`,
 * `pulse`, and the firing flags.
 */
export const Synapse: React.FC<Props> = ({
  strength,
  scale = 1,
  pulse = null,
  firingA = false,
  firingB = false,
  labelA,
  labelB,
}) => {
  const s = Math.max(0, Math.min(1, strength));
  const neuron = (p: { x: number; y: number }, firing: boolean, label?: string) => (
    <>
      <circle cx={p.x} cy={p.y} r={R} fill={palette.vera} opacity={firing ? 1 : 0.7} />
      {firing && <circle cx={p.x} cy={p.y} r={R + 8} fill="none" stroke={palette.vera} strokeWidth={3} opacity={0.6} />}
      {label && (
        <text x={p.x} y={p.y + R + 30} textAnchor="middle" fontSize={24} fill={palette.text}>
          {label}
        </text>
      )}
    </>
  );

  return (
    <svg width={360 * scale} height={200 * scale} viewBox="-160 -100 320 200" style={{ overflow: "visible" }}>
      {/* Synaptic glow scales with strength. */}
      <line
        x1={A.x + R}
        y1={A.y}
        x2={B.x - R}
        y2={B.y}
        stroke={palette.vera}
        strokeWidth={4 + s * 16}
        strokeOpacity={0.2 + s * 0.6}
        strokeLinecap="round"
        style={{ filter: `blur(${1 + s * 2}px)` }}
      />
      {/* Terminal bulb at B — fatter when stronger. */}
      <circle cx={B.x - R - 6} cy={0} r={6 + s * 12} fill={palette.vera} opacity={0.4 + s * 0.6} />

      {/* Traveling signal. */}
      {pulse !== null && (
        <circle cx={lerp(A.x + R, B.x - R, pulse)} cy={0} r={7} fill={palette.bila} />
      )}

      {neuron(A, firingA, labelA)}
      {neuron(B, firingB, labelB)}
    </svg>
  );
};
