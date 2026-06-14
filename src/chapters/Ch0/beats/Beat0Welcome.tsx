import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

// A faint, drifting field of motes — quiet, alive, almost cosmic — behind the
// welcome. Positions are index-derived (no randomness) so renders stay stable.
const MOTES = Array.from({ length: 54 }).map((_, i) => ({
  x: ((i * 73) % 100) / 100,
  y: ((i * 41 + 7) % 100) / 100,
  r: 1.5 + (i % 4),
  phase: (i % 9) * 11,
  speed: 0.008 + (i % 5) * 0.003,
}));

/**
 * Prologue · Beat 0 — Welcome. The series' front door (Chapter 0 only). States
 * the goal — understand how modern AI works — and the method: learn it the
 * intuitive way, through the real world, because almost every AI idea has a
 * mirror in something alive. Hands off to the Young Earth Chronicle beat. Not
 * repeated in later chapters.
 */
export const Beat0Welcome: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // Title rises, holds, then softens to a dim backdrop as the welcome plays.
  const titleOpacity = interpolate(frame, [15, 55, 150, 195], [0, 1, 1, 0.18], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        opacity: fadeIn(frame, 25),
        background:
          "radial-gradient(ellipse at 50% 42%, #0a1c2b 0%, #05101a 55%, #02060c 100%)",
      }}
    >
      {/* Drifting motes. */}
      {MOTES.map((m, i) => {
        const dx = Math.sin((frame + m.phase) * m.speed) * 18;
        const dy = Math.cos((frame + m.phase) * m.speed) * 12;
        const tw =
          0.25 + 0.45 * (0.5 + 0.5 * Math.sin((frame + m.phase * 3) * 0.05));
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: m.x * width + dx,
              top: m.y * height + dy,
              width: m.r,
              height: m.r,
              borderRadius: "50%",
              backgroundColor: palette.text,
              opacity: tw,
            }}
          />
        );
      })}

      {/* Series title card. */}
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            opacity: titleOpacity,
            textAlign: "center",
            fontFamily,
            color: palette.text,
          }}
        >
          <div
            style={{
              fontSize: 30,
              fontWeight: 300,
              letterSpacing: 8,
              textTransform: "uppercase",
              opacity: 0.7,
            }}
          >
            A Brief History of
          </div>
          <div
            style={{ fontSize: 84, fontWeight: 300, letterSpacing: 2, marginTop: 6 }}
          >
            Intelligence
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 300,
              letterSpacing: 5,
              marginTop: 12,
              opacity: 0.85,
            }}
          >
            in Algorithms
          </div>
        </div>
      </AbsoluteFill>

      <TimedCaptions
        cues={[
          {
            text: "Welcome. Let's learn how AI works.",
            from: 50,
            to: 145,
          },
          {
            text: "It turns out almost every idea inside AI has a mirror in something alive.",
            from: 153,
            to: 268,
          },
          {
            text: "And what really surprised me — some came straight from life.",
            from: 276,
            to: 366,
          },
          {
            text: "We studied how a living thing did it, then turned it into an algorithm.",
            from: 374,
            to: 470,
          },
          {
            text: "So let's start at the very beginning of life.",
            from: 478,
            to: 555,
          },
          {
            text: "And I mean the very beginning.",
            from: 563,
            to: 610,
          },
        ]}
      />
    </AbsoluteFill>
  );
};
