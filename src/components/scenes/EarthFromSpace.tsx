import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette } from "../../theme/palette";

// Stars are placed deterministically (no Math.random — it is unavailable in
// Remotion's deterministic render and would break frame caching).
const STARS = Array.from({ length: 80 }).map((_, i) => ({
  x: (i * 67) % 100,
  y: (i * 113) % 100,
  r: (i % 3) * 0.4 + 0.4,
  twinkle: (i % 7) * 0.9,
}));

/**
 * The young, volcanically active Earth seen from space — hazy methane sky, a
 * large close Moon, a dim Sun. Abstract and geological; the Chronicle-beat
 * visual for Chapter 0. Slowly rotates over its lifetime.
 */
export const EarthFromSpace: React.FC = () => {
  const frame = useCurrentFrame();
  const rotate = frame * 0.05;
  const moonDrift = Math.sin(frame * 0.01) * 12;

  return (
    <AbsoluteFill style={{ background: "#05070f", overflow: "hidden" }}>
      {STARS.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.r * 2,
            height: s.r * 2,
            borderRadius: "50%",
            backgroundColor: palette.text,
            opacity: 0.4 + 0.5 * Math.abs(Math.sin(frame * 0.05 + s.twinkle)),
          }}
        />
      ))}

      {/* Dim early Sun, low and to the side. */}
      <div
        style={{
          position: "absolute",
          left: "8%",
          top: "18%",
          width: 160,
          height: 160,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, #ffd9a0ff 0%, #ffb86655 40%, #ffb86600 70%)",
        }}
      />

      {/* The Moon — hanging huge and close in the Archean sky. */}
      <div
        style={{
          position: "absolute",
          right: "12%",
          top: `${22 + moonDrift * 0.1}%`,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: `radial-gradient(circle at 38% 35%, ${palette.moon} 0%, #9a907e 70%, #6f6657 100%)`,
          transform: `translateX(${moonDrift}px)`,
          boxShadow: "0 0 60px rgba(216,205,187,0.25)",
        }}
      />

      {/* The molten young Earth, lower-center, dominating the frame. */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "115%",
          width: 1400,
          height: 1400,
          borderRadius: "50%",
          transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
          background: `radial-gradient(circle at 40% 35%, ${palette.earthLava} 0%, ${palette.earthRock} 45%, #3a1c0e 100%)`,
          boxShadow: `0 -40px 120px ${palette.earthLava}66, inset 40px -30px 120px rgba(0,0,0,0.5)`,
        }}
      >
        {/* Lava cracks / glowing seams. */}
        {[20, 55, 80].map((top, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${15 + i * 22}%`,
              top: `${top % 60}%`,
              width: 180,
              height: 6,
              borderRadius: 3,
              background: palette.earthLava,
              opacity: 0.5,
              filter: "blur(2px)",
              transform: `rotate(${i * 25 - 20}deg)`,
            }}
          />
        ))}
      </div>

      {/* Hazy methane atmosphere glow along the limb. */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "115%",
          width: 1480,
          height: 1480,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${palette.archeanSky}00 64%, ${palette.archeanSky}66 70%, ${palette.archeanSky}00 78%)`,
          opacity: interpolate(frame, [0, 60], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
    </AbsoluteFill>
  );
};
