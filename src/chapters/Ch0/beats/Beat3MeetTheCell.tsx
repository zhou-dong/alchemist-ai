import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { ArcheanOcean } from "../../../components/scenes/ArcheanOcean";
import { Bacterium } from "../../../components/characters/Bacterium";
import { TimedCaptions } from "../../../components/Caption";
import { fadeIn } from "../../../theme/transitions";

/**
 * Part 1 · Act 1 · Beat 3 — Meet the Cell. Zoom past the surface into a
 * microscope's view: a single rod-shaped bacterium ringed by flagella. No
 * nucleus, no nervous system — a small bag of chemistry with one job: don't die.
 */
export const Beat3MeetTheCell: React.FC = () => {
  const frame = useCurrentFrame();

  // Zoom in over the beat.
  const zoom = interpolate(frame, [0, 90], [0.7, 1.6], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const drift = Math.sin(frame * 0.03) * 14;

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 20), backgroundColor: "#06121d" }}>
      <AbsoluteFill style={{ opacity: 0.5 }}>
        <ArcheanOcean />
      </AbsoluteFill>

      {/* Microscope vignette. */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 30%, rgba(2,8,15,0.85) 62%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: `calc(50% + ${drift}px)`,
        }}
      >
        <Bacterium mode="run" heading={-8} scale={zoom * 2.4} showReceptors />
      </div>

      <TimedCaptions
        cues={[
          { text: "Meet the cell.", from: 20, to: 90, size: 56 },
          {
            text: "No eyes. No nervous system. No brain — none has been invented yet.",
            from: 95,
            to: 185,
          },
          { text: "Just thin whips to push through the water. And one job: don't die.", from: 190, to: 270 },
        ]}
      />
    </AbsoluteFill>
  );
};
