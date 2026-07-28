import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { ArcheanOcean } from "../../../components/scenes/ArcheanOcean";
import { Bacterium } from "../../../components/characters/Bacterium";
import { Narration } from "../../../components/Narration";
import { fadeIn } from "../../../theme/transitions";
import { stagingFrame } from "../../../narration/staging";
import { narration } from "../narration.generated";

const BEAT = narration.beat3MeetTheCell;

/** Duration this beat's staging was originally choreographed against. */
const AUTHORED = 270;

/**
 * Part 1 · Act 1 · Beat 3 — Meet the Cell. Zoom past the surface into a
 * microscope's view: a single rod-shaped bacterium ringed by flagella. No
 * nucleus, no nervous system — a small bag of chemistry with one job: don't die.
 */
export const Beat3MeetTheCell: React.FC = () => {
  const frame = useCurrentFrame();
  const staged = stagingFrame(frame, BEAT, AUTHORED);

  // Zoom in over the beat — stretched to the narration, so it settles about a
  // third of the way in rather than in the first few seconds.
  const zoom = interpolate(staged, [0, 90], [0.7, 1.6], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Drift stays on real frames: it's the cell's own life, not staging.
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

      <Narration beat={BEAT} />
    </AbsoluteFill>
  );
};
