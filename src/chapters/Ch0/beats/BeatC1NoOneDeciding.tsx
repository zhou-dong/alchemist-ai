import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Bacterium } from "../../../components/characters/Bacterium";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

const DOMINOES = 7;

/**
 * Closing · C1 — No One Is Deciding. Inside the cell, the molecular cascade is
 * just dominoes falling: receptor, signal, flagella — no gap, no chooser. From
 * the outside it looks like intelligence. Inside, there is no one there.
 */
export const BeatC1NoOneDeciding: React.FC = () => {
  const frame = useCurrentFrame();
  const { width } = useVideoConfig();

  // A cascade front sweeps the row repeatedly.
  const cyclePos = (frame % 110) / 110; // 0..1 front position
  const drift = Math.sin(frame * 0.03) * 10;

  return (
    <AbsoluteFill style={{ backgroundColor: "#050c14", opacity: fadeIn(frame, 20) }}>
      {/* The cell, close. */}
      <div style={{ position: "absolute", left: 0.3 * width, top: `calc(45% + ${drift}px)` }}>
        <Bacterium mode="run" heading={-6} scale={2.2} showReceptors />
      </div>

      {/* Side panel: the molecular cascade as falling dominoes. */}
      <div
        style={{
          position: "absolute",
          right: 120,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          alignItems: "flex-end",
          gap: 18,
          padding: 28,
          borderRadius: 14,
          backgroundColor: "rgba(255,255,255,0.03)",
          border: `1px solid ${palette.textMuted}33`,
        }}
      >
        {Array.from({ length: DOMINOES }).map((_, i) => {
          const trigger = i / DOMINOES;
          // Fallen once the front has passed this domino, within the cycle.
          const fallen = cyclePos > trigger ? 1 : 0;
          const angle = interpolate(
            cyclePos,
            [trigger, trigger + 0.08],
            [0, 72],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          ) * fallen;
          return (
            <div
              key={i}
              style={{
                width: 16,
                height: 70,
                borderRadius: 3,
                backgroundColor: palette.bila,
                opacity: 0.85,
                transformOrigin: "bottom left",
                transform: `rotate(${angle}deg)`,
              }}
            />
          );
        })}
      </div>

      <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-start", pointerEvents: "none" }}>
        <div
          style={{
            marginTop: 80,
            fontFamily,
            color: palette.textMuted,
            fontSize: 30,
            letterSpacing: 4,
            textTransform: "uppercase",
            opacity: interpolate(frame, [10, 40], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          }}
        >
          The limit of mechanism
        </div>
      </AbsoluteFill>

      <TimedCaptions
        cues={[
          { text: "Look closely — at the proteins, the switch — and there's no one in there.", from: 20, to: 110 },
          { text: "No decider. No little self holding the scales.", from: 115, to: 185 },
          { text: "Just chemistry, all the way down. And from outside? It looks like intelligence.", from: 190, to: 270 },
        ]}
      />
    </AbsoluteFill>
  );
};
