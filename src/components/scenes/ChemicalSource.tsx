import { useCurrentFrame } from "remotion";

type Props = {
  /** Core color of the chemical (e.g. palette.food for sugar, palette.toxin). */
  color: string;
  /** Diameter of the soft cloud in px (default 260). */
  size?: number;
  /** Opacity at the core (default 1). */
  intensity?: number;
};

/**
 * A diffuse chemical signal — a soft radial gradient that breathes gently.
 * Reused for attractants (sugar) and repellents (toxin); the caller positions
 * it and tunes its color/size. The cell never "sees" it directly; it only
 * senses whether the gradient is rising or falling.
 */
export const ChemicalSource: React.FC<Props> = ({
  color,
  size = 260,
  intensity = 1,
}) => {
  const frame = useCurrentFrame();
  const breathe = 1 + Math.sin(frame * 0.04) * 0.06;
  const a = (v: number) =>
    Math.round(Math.min(1, Math.max(0, v)) * 255)
      .toString(16)
      .padStart(2, "0");

  return (
    <div
      style={{
        width: size,
        height: size,
        transform: `translate(-50%, -50%) scale(${breathe})`,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color}${a(intensity)} 0%, ${color}${a(intensity * 0.45)} 22%, ${color}00 70%)`,
      }}
    />
  );
};
