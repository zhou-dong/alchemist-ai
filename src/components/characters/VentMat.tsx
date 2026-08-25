import { interpolate } from "remotion";
import { palette } from "../../theme/palette";

type Props = {
  /** Current frame, passed in rather than read via useCurrentFrame so a beat
   * can drive this from its own (possibly stretched) timeline. */
  frame: number;
  /**
   * Frames at which the mat divides: [1→2, 2→4, 4→8]. Omit or pass fewer than
   * 3 to stop at that generation — a beat that never splits passes `[]` and
   * the mat stays a single smear for its whole duration.
   */
  splitFrames?: readonly number[];
  /**
   * Frames at which every existing patch flashes briefly — chemistry
   * contacting the surface, not a signal or a decision, just a reaction.
   */
  pulseFrames?: readonly number[];
  /** Screen position of the first patch, in percent of the frame. */
  left?: string;
  top?: string;
};

/** Small offsets (px) each new patch grows into, relative to the first one. */
const PATCH_OFFSETS: Array<{ dx: number; dy: number }> = [
  { dx: 0, dy: 0 },
  { dx: 34, dy: -10 },
  { dx: -28, dy: 16 },
  { dx: 16, dy: 30 },
  { dx: -42, dy: -14 },
  { dx: 46, dy: 12 },
  { dx: -8, dy: -34 },
  { dx: 56, dy: -22 },
];

const appearFrame = (patchIndex: number, splitFrames: readonly number[]) => {
  if (patchIndex === 0) return -Infinity; // always present
  if (patchIndex === 1) return splitFrames[0] ?? Infinity;
  if (patchIndex <= 3) return splitFrames[1] ?? Infinity;
  return splitFrames[2] ?? Infinity;
};

const pulseGlow = (frame: number, pulseFrames: readonly number[]) =>
  Math.max(
    0,
    ...pulseFrames.map((p) =>
      interpolate(frame, [p, p + 4, p + 20], [0, 1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }),
    ),
  );

/**
 * The sessile organism: a smear of living matter fixed to the vent-mouth
 * rock. Never moves — only reacts (a brief glow when chemistry touches it)
 * and grows by division, spreading into more patches over time.
 */
export const VentMat: React.FC<Props> = ({
  frame,
  splitFrames = [],
  pulseFrames = [],
  left = "50%",
  top = "78%",
}) => {
  const glow = pulseGlow(frame, pulseFrames);

  return (
    <div style={{ position: "absolute", left, top }}>
      {PATCH_OFFSETS.map((offset, i) => {
        const born = appearFrame(i, splitFrames);
        if (born === Infinity) return null; // never splits this far
        const grow =
          born === -Infinity
            ? 1 // always present
            : interpolate(frame, [born, born + 24], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
        if (grow <= 0) return null;
        const size = 30 + glow * 6;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: offset.dx,
              top: offset.dy,
              width: size,
              height: size * 0.7,
              transform: `translate(-50%, -50%) scale(${grow})`,
              borderRadius: "60% 55% 65% 50%",
              background: `radial-gradient(circle, ${palette.organism} 0%, ${palette.organism}cc 60%, ${palette.organism}00 100%)`,
              boxShadow: glow > 0.05 ? `0 0 ${10 + glow * 14}px ${palette.ventGlow}${Math.round(glow * 150).toString(16).padStart(2, "0")}` : undefined,
              opacity: 0.9,
            }}
          />
        );
      })}
    </div>
  );
};
