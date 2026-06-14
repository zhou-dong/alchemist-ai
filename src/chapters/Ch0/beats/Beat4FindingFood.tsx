import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { ArcheanOcean } from "../../../components/scenes/ArcheanOcean";
import { ChemicalSource } from "../../../components/scenes/ChemicalSource";
import { Bacterium } from "../../../components/characters/Bacterium";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fadeIn } from "../../../theme/transitions";
import { runTumble, type Waypoint, type TumbleWindow } from "./runTumble";

const FOOD = { x: 0.75, y: 0.4 };

// Phase 1 (the flagellar motor, close-up) runs 0..PHASE1_END; Phase 2 (the
// climb up the sugar gradient) runs after it. The climb's choreography is
// authored in its own 0-based frames and offset by PHASE1_END at playback.
const PHASE1_END = 330;

// A climb up the sugar gradient: smooth runs broken by tumbles that reorient
// the cell. Over many cycles it works its way toward the food.
const WAYPOINTS: Waypoint[] = [
  { t: 0, x: 0.12, y: 0.62 },
  { t: 50, x: 0.3, y: 0.55 },
  { t: 65, x: 0.29, y: 0.42 },
  { t: 110, x: 0.45, y: 0.4 },
  { t: 125, x: 0.46, y: 0.52 },
  { t: 175, x: 0.6, y: 0.48 },
  { t: 190, x: 0.61, y: 0.38 },
  { t: 240, x: 0.72, y: 0.42 },
  { t: 255, x: 0.73, y: 0.4 },
  { t: 300, x: FOOD.x, y: FOOD.y },
];

const TUMBLES: TumbleWindow[] = [
  [50, 65],
  [110, 125],
  [175, 190],
  [240, 255],
];

/**
 * Part 1 · Act 2 · Beat 4 — Finding Food. First, a close-up of the flagellar
 * motor: each whip is spun by a tiny reversible motor — one way bundles them
 * into a propeller (the cell glides forward), the other scatters them (the cell
 * spins in place). Then the climb: in a sugar gradient the cell runs when the
 * signal strengthens and tumbles when it weakens, working its way to the food.
 */
export const Beat4FindingFood: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // --- Phase 1: the motor, close-up ---
  // Bundle (run) drives the cell forward; near the end it switches to scatter
  // (tumble) and spins in place — the two states the motor can produce.
  const introRun = frame < 280;
  const introX =
    interpolate(frame, [0, 280], [0.4, 0.58], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }) * width;
  const introJx = introRun ? 0 : Math.sin(frame * 0.9) * 14;
  const introJy = introRun ? 0 : Math.cos(frame * 1.1) * 12;
  const introY = 0.46 * height + Math.sin(frame * 0.05) * 8 + introJy;
  const introHeading = introRun ? 0 : (frame - 280) * 7;
  const phase1Opacity = interpolate(
    frame,
    [0, 20, PHASE1_END - 25, PHASE1_END],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  // --- Phase 2: the climb ---
  const motion = runTumble(frame - PHASE1_END, WAYPOINTS, TUMBLES, width, height);
  const phase2Opacity = interpolate(
    frame,
    [PHASE1_END - 15, PHASE1_END + 20],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 20) }}>
      <ArcheanOcean />

      {/* Phase 1 — the flagellar motor, close-up. */}
      <AbsoluteFill style={{ opacity: phase1Opacity }}>
        {/* Microscope vignette to read as a close-up. */}
        <AbsoluteFill
          style={{
            background:
              "radial-gradient(circle at 50% 48%, rgba(0,0,0,0) 32%, rgba(2,8,15,0.7) 66%)",
          }}
        />
        <div
          style={{ position: "absolute", left: introX + introJx, top: introY }}
        >
          <Bacterium
            mode={introRun ? "run" : "tumble"}
            heading={introHeading}
            scale={2.3}
            showReceptors
          />
        </div>
      </AbsoluteFill>

      {/* Phase 2 — the climb up the sugar gradient. */}
      <AbsoluteFill style={{ opacity: phase2Opacity }}>
        <div
          style={{
            position: "absolute",
            left: FOOD.x * width,
            top: FOOD.y * height,
          }}
        >
          <ChemicalSource color={palette.food} size={300} />
        </div>
        <div style={{ position: "absolute", left: motion.x, top: motion.y }}>
          <Bacterium mode={motion.mode} heading={motion.heading} scale={1.1} />
        </div>
      </AbsoluteFill>

      <TimedCaptions
        cues={[
          {
            text: "Job one: find food — but with no eyes, how does it even move?",
            from: 15,
            to: 115,
          },
          {
            text: "Each whip is spun by its own tiny motor — and it turns both ways.",
            from: 125,
            to: 225,
          },
          {
            text: "One way, they bundle and drive it forward; the other, they scatter and it spins.",
            from: 235,
            to: 325,
          },
          {
            text: "So: sugar getting stronger → bundle, and glide forward.",
            from: 360,
            to: 455,
          },
          {
            text: "Sugar getting weaker → scatter, and spin somewhere new.",
            from: 460,
            to: 545,
          },
          {
            text: "Forward, spin, forward — and somehow, it lands on the food.",
            from: 555,
            to: 630,
          },
        ]}
      />
    </AbsoluteFill>
  );
};
