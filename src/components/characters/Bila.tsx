import { useCurrentFrame } from "remotion";
import { palette } from "../../theme/palette";

type Props = {
  /** Heading in degrees (0 = front pointing right). */
  heading?: number;
  scale?: number;
  /** Reveal the internal nervous cluster, glowing near the front. */
  showCluster?: boolean;
  /** Brightness 0..1 of the cluster pulse (default derived from frame). */
  clusterPulse?: number;
};

/**
 * Bila — a small soft-bodied Ediacaran bilaterian: a front (chemical sensors),
 * a back, muscle bands, and a gut. Unlike the radial radiatans she has a
 * direction. Self-animating: a gentle swimming undulation through the tail.
 */
export const Bila: React.FC<Props> = ({
  heading = 0,
  scale = 1,
  showCluster = false,
  clusterPulse,
}) => {
  const frame = useCurrentFrame();
  const wiggle = Math.sin(frame * 0.15) * 7;
  const pulse =
    clusterPulse ?? 0.5 + 0.5 * Math.abs(Math.sin(frame * 0.12));

  // Body outline: rounded front at +x, tapering tail at -x (which wiggles).
  const body = `M 78 0
    C 60 -30, 10 -34, -34 ${-18 + wiggle}
    C -60 ${-8 + wiggle}, -60 ${8 + wiggle}, -34 ${18 + wiggle}
    C 10 34, 60 30, 78 0 Z`;

  return (
    <svg
      width={200 * scale}
      height={120 * scale}
      viewBox="-80 -60 200 120"
      style={{
        transform: `translate(-50%, -50%) rotate(${heading}deg)`,
        overflow: "visible",
      }}
    >
      {/* Body. */}
      <path d={body} fill={palette.bila} fillOpacity={0.9} stroke={palette.bila} strokeWidth={2} />

      {/* Gut — central tube. */}
      <path
        d={`M 52 0 C 20 -10, -20 -8, -40 ${wiggle} C -20 8, 20 10, 52 0 Z`}
        fill={palette.earthRock}
        fillOpacity={0.35}
      />

      {/* Muscle bands. */}
      {[-20, 0, 22, 44].map((x) => (
        <path
          key={x}
          d={`M ${x} -28 Q ${x + 6} 0 ${x} 28`}
          fill="none"
          stroke={palette.text}
          strokeOpacity={0.18}
          strokeWidth={2}
        />
      ))}

      {/* Front chemical sensors. */}
      {[-16, 0, 16].map((a) => (
        <line
          key={a}
          x1={74}
          y1={a * 0.5}
          x2={92}
          y2={a}
          stroke={palette.text}
          strokeOpacity={0.7}
          strokeWidth={2}
          strokeLinecap="round"
        />
      ))}

      {/* Internal nervous cluster near the front. */}
      {showCluster && (
        <circle
          cx={40}
          cy={0}
          r={12}
          fill={palette.vera}
          opacity={pulse}
          style={{ filter: "blur(1px)" }}
        />
      )}
    </svg>
  );
};
