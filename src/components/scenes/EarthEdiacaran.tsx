import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette } from "../../theme/palette";

const STARS = Array.from({ length: 90 }).map((_, i) => ({
  x: (i * 71) % 100,
  y: (i * 131) % 100,
  r: (i % 3) * 0.4 + 0.4,
  twinkle: (i % 7) * 0.9,
}));

// Continents as deterministic blobs on the rotating globe.
const LANDS = [
  { x: 30, y: 30, w: 220, h: 160 },
  { x: 62, y: 58, w: 180, h: 140 },
  { x: 20, y: 70, w: 150, h: 110 },
];

/**
 * The Ediacaran Earth seen from space, ~600 million years ago: blue oceans,
 * green-brown continents, white clouds, an oxygen-blue atmosphere — the methane
 * haze long gone, the Moon farther away, the Sun brighter. The Chronicle-beat
 * visual for Chapter 1.
 */
export const EarthEdiacaran: React.FC = () => {
  const frame = useCurrentFrame();
  const rotate = frame * 0.04;

  return (
    <AbsoluteFill style={{ background: "#04060e", overflow: "hidden" }}>
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

      {/* Brighter Sun. */}
      <div
        style={{
          position: "absolute",
          left: "6%",
          top: "14%",
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: "radial-gradient(circle, #fff4d8ff 0%, #ffe6a855 42%, #ffe6a800 72%)",
        }}
      />

      {/* Farther, smaller Moon. */}
      <div
        style={{
          position: "absolute",
          right: "14%",
          top: "20%",
          width: 130,
          height: 130,
          borderRadius: "50%",
          background: `radial-gradient(circle at 38% 35%, ${palette.moon} 0%, #9a907e 70%, #6f6657 100%)`,
        }}
      />

      {/* The blue Earth. */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "118%",
          width: 1400,
          height: 1400,
          borderRadius: "50%",
          overflow: "hidden",
          transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
          background: `radial-gradient(circle at 40% 35%, ${palette.oceanShallow} 0%, ${palette.oceanMid} 55%, ${palette.oceanDeep} 100%)`,
          boxShadow: "inset 40px -30px 140px rgba(0,0,0,0.5)",
        }}
      >
        {LANDS.map((l, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${l.x}%`,
              top: `${l.y}%`,
              width: l.w,
              height: l.h,
              borderRadius: "50% 46% 52% 48% / 54% 50% 50% 46%",
              background: `radial-gradient(circle, ${palette.matGreen} 0%, ${palette.earthRock} 90%)`,
              opacity: 0.85,
            }}
          />
        ))}
        {/* Cloud swirls. */}
        {[25, 55, 78].map((top, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${10 + i * 25}%`,
              top: `${top}%`,
              width: 260,
              height: 60,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.35)",
              filter: "blur(10px)",
            }}
          />
        ))}
      </div>

      {/* Oxygen-blue atmosphere glow along the limb. */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "118%",
          width: 1480,
          height: 1480,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${palette.oceanShallow}00 64%, #9ed1f088 70%, ${palette.oceanShallow}00 78%)`,
          opacity: interpolate(frame, [0, 60], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
    </AbsoluteFill>
  );
};
