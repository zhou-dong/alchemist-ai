import { AbsoluteFill, useCurrentFrame } from "remotion";
import { palette } from "../../theme/palette";

/**
 * The bottom of the Archean ocean, past all light: a crack in the seafloor
 * with a glowing plume of hot mineral water rising out of it. Unlike
 * `ArcheanOcean` (the old, sunlit shallow-sea look), there is no light from
 * above at all — the only illumination is the vent's own glow.
 */
export const HydrothermalVent: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(to bottom, #050d16 0%, ${palette.oceanDeep} 70%, #020609 100%)`,
        overflow: "hidden",
      }}
    >
      {/* Sparse mineral particulate drifting in the dark water. */}
      {Array.from({ length: 22 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${(i * 41) % 100}%`,
            top: `${((i * 29) % 90) + Math.sin(frame * 0.015 + i) * 2}%`,
            width: 2,
            height: 2,
            borderRadius: "50%",
            backgroundColor: palette.textMuted,
            opacity: 0.1,
          }}
        />
      ))}

      {/* Rock formation across the seafloor. */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "34%",
          background: `linear-gradient(to top, #1a0d08 0%, #2a160e 60%, #2a160e00 100%)`,
          clipPath:
            "polygon(0% 100%, 0% 40%, 20% 55%, 38% 25%, 48% 45%, 52% 45%, 62% 20%, 78% 50%, 100% 35%, 100% 100%)",
        }}
      />

      {/* Vent mouth: the crack the plume rises from, center-bottom. */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "18%",
          width: 46,
          height: 22,
          transform: "translateX(-50%)",
          borderRadius: "50%",
          background: palette.ventGlow,
          filter: "blur(3px)",
          opacity: 0.9,
        }}
      />

      {/* Rising plume: overlapping soft turbulent columns, glowing and drifting. */}
      {[0, 1, 2].map((i) => {
        const sway = Math.sin(frame * 0.03 + i * 2) * 14;
        const flicker = 0.5 + 0.15 * Math.sin(frame * 0.08 + i);
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `calc(50% + ${sway}px)`,
              bottom: "20%",
              width: 130 - i * 20,
              height: "62%",
              transform: `translateX(-50%)`,
              background: `linear-gradient(to top, ${palette.ventGlow}${Math.round(
                flicker * 200,
              )
                .toString(16)
                .padStart(2, "0")} 0%, ${palette.ventPlume}33 45%, ${palette.ventPlume}00 100%)`,
              filter: `blur(${14 + i * 6}px)`,
              borderRadius: "50%",
            }}
          />
        );
      })}

      {/* Warm glow pooling at the vent mouth, lighting the nearby rock. */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "16%",
          width: 340,
          height: 200,
          transform: "translate(-50%, 0)",
          background: `radial-gradient(circle, ${palette.ventGlow}30 0%, ${palette.ventGlow}00 70%)`,
        }}
      />
    </AbsoluteFill>
  );
};
