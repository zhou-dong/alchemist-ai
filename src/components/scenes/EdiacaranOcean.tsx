import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette } from "../../theme/palette";

/**
 * The cool, shallow, sunlit Ediacaran sea — clearer and bluer than the Archean,
 * oxygen-rich and calm after the long freezes. A sandy seabed, gentle light
 * shafts, drifting particulate. The Chapter 1 world.
 */
export const EdiacaranOcean: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(to bottom, #3f86b5 0%, ${palette.oceanShallow} 40%, ${palette.oceanMid} 100%)`,
        overflow: "hidden",
      }}
    >
      {/* Light shafts. */}
      {[14, 34, 56, 78, 92].map((left, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${left + Math.sin(frame * 0.018 + i) * 1.5}%`,
            top: "-10%",
            width: 110,
            height: "85%",
            background: "linear-gradient(to bottom, rgba(255,250,225,0.16), rgba(255,250,225,0))",
            transform: "rotate(6deg)",
            filter: "blur(7px)",
          }}
        />
      ))}

      {/* Sandy seabed. */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 150,
          background: `linear-gradient(to top, #b89b6a 0%, #8a7a55 55%, rgba(138,122,85,0) 100%)`,
          borderTopLeftRadius: "50% 40px",
          borderTopRightRadius: "50% 40px",
        }}
      />

      {/* Drifting particulate. */}
      {Array.from({ length: 26 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${(i * 41) % 100}%`,
            top: `${((i * 59) % 88) + Math.sin(frame * 0.02 + i) * 2}%`,
            width: 3,
            height: 3,
            borderRadius: "50%",
            backgroundColor: palette.text,
            opacity: 0.12,
          }}
        />
      ))}
    </AbsoluteFill>
  );
};
