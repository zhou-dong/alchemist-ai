import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { ArcheanOcean } from "../../../components/scenes/ArcheanOcean";
import { ChemicalSource } from "../../../components/scenes/ChemicalSource";
import { Bacterium } from "../../../components/characters/Bacterium";
import { Narration } from "../../../components/Narration";
import { palette } from "../../../theme/palette";
import { fadeIn } from "../../../theme/transitions";
import { beatDuration, cueFrame } from "../../../narration/schedule";
import { narration } from "../narration.generated";
import { runTumble, type Waypoint, type TumbleWindow } from "./runTumble";

const BEAT = narration.beat4FindingFood;

const FOOD = { x: 0.75, y: 0.4 };

// The two phases are anchored to what the narration is talking about, not to
// hardcoded frames — so they still land on the right sentence after the voice is
// regenerated. Phase 1 is the flagellar motor close-up; Phase 2 is the climb up
// the sugar gradient, which begins when the narration reaches the rule itself
// ("When the sugar is getting stronger — they bundle...").
const PHASE1_END = cueFrame(BEAT, 17);

// Within phase 1, the motor reverses when the narration says the bundle bursts
// apart ("Spin them the other way...").
const SCATTER_AT = cueFrame(BEAT, 14);

// The climb's choreography is authored in its own 0-based frames over
// CLIMB_AUTHORED, then stretched to fill however long the narration leaves for
// it. runTumble interpolates over whatever `t` values it is given, so only the
// frame handed to it needs rescaling.
const CLIMB_AUTHORED = 300;

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
  // Bundle (run) drives the cell forward; when the narration reaches the
  // reversal it switches to scatter (tumble) and spins in place — the two states
  // the motor can produce.
  const introRun = frame < SCATTER_AT;
  const introX =
    interpolate(frame, [0, SCATTER_AT], [0.4, 0.58], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }) * width;
  // Jitter and drift stay on real frames — this is the cell's own motion, and
  // stretching it would make the scatter look lifeless.
  const introJx = introRun ? 0 : Math.sin(frame * 0.9) * 14;
  const introJy = introRun ? 0 : Math.cos(frame * 1.1) * 12;
  const introY = 0.46 * height + Math.sin(frame * 0.05) * 8 + introJy;
  // A gentle wobble (not a full spin) during the tumble, so the rotating motor
  // hub stays readable while the flagella scatter.
  const introHeading = introRun ? 0 : Math.sin((frame - SCATTER_AT) * 0.35) * 22;
  const phase1Opacity = interpolate(
    frame,
    [0, 20, PHASE1_END - 25, PHASE1_END],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  // --- Phase 2: the climb ---
  // Stretch the authored climb across the time the narration leaves for it, so
  // the cell arrives at the food as the last lines land rather than long before.
  const climbFrames = Math.max(beatDuration(BEAT) - PHASE1_END, 1);
  const climbFrame =
    ((frame - PHASE1_END) / climbFrames) * CLIMB_AUTHORED;
  const motion = runTumble(climbFrame, WAYPOINTS, TUMBLES, width, height);
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
            showMotor
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

      <Narration beat={BEAT} />
    </AbsoluteFill>
  );
};
