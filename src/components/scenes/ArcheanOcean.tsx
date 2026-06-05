import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette } from "../../theme/palette";

const MAT_COLORS = [palette.matPurple, palette.matGreen, palette.matPink];

/**
 * The warm, shallow, sunlit Archean sea — light rays from above, slimy
 * microbial mats layering the seabed in pink, green and purple. The Chapter 0
 * world: alien, primordial, no animals, no plants, only slow currents.
 */
export const ArcheanOcean: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(to bottom, #2e6b95 0%, ${palette.oceanMid} 55%, ${palette.oceanDeep} 100%)`,
        overflow: "hidden",
      }}
    >
      {/* Sunlight shafts from the surface. */}
      {[18, 38, 60, 82].map((left, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${left + Math.sin(frame * 0.02 + i) * 1.5}%`,
            top: "-10%",
            width: 90,
            height: "80%",
            background:
              "linear-gradient(to bottom, rgba(255,245,210,0.18), rgba(255,245,210,0))",
            transform: "rotate(8deg)",
            filter: "blur(6px)",
          }}
        />
      ))}

      {/* Microbial mats: stacked slimy layers along the seabed. */}
      {MAT_COLORS.map((color, layer) => (
        <div
          key={layer}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 220 - layer * 50,
            background: `linear-gradient(to top, ${color}cc, ${color}00)`,
            borderTopLeftRadius: "60% 80px",
            borderTopRightRadius: "55% 70px",
            transform: `translateY(${Math.sin(frame * 0.015 + layer) * 4}px)`,
            opacity: 0.85,
          }}
        />
      ))}

      {/* Slow drifting particulate in the water column. */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${(i * 37) % 100}%`,
            top: `${((i * 53) % 90) + Math.sin(frame * 0.02 + i) * 2}%`,
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
