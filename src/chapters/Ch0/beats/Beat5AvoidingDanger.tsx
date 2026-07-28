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
import { stagingFrame } from "../../../narration/staging";
import { narration } from "../narration.generated";
import { runTumble, type Waypoint, type TumbleWindow } from "./runTumble";

const BEAT = narration.beat5AvoidingDanger;

/** Duration this beat's staging was originally choreographed against. */
const AUTHORED = 270;

// The same two moves, inverted trigger: the cell tumbles while the toxin
// strengthens, then runs once it begins to fade — escaping the danger zone.
const WAYPOINTS: Waypoint[] = [
  { t: 0, x: 0.52, y: 0.5 },
  { t: 40, x: 0.5, y: 0.52 },
  { t: 110, x: 0.48, y: 0.5 },
  { t: 170, x: 0.24, y: 0.43 },
  { t: 200, x: 0.13, y: 0.4 },
  { t: 270, x: 0.05, y: 0.38 },
];

const TUMBLES: TumbleWindow[] = [[40, 110]];

export const Beat5AvoidingDanger: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  // The whole beat is one staged escape, so it stretches uniformly to the voice.
  const staged = stagingFrame(frame, BEAT, AUTHORED);
  const motion = runTumble(staged, WAYPOINTS, TUMBLES, width, height);

  // Chaotic in-place jitter while tumbling under rising threat. On real frames:
  // the panic should stay frantic even though the escape now takes longer.
  const chaos = motion.mode === "tumble" ? 1 : 0;
  const jx = Math.sin(frame * 0.9) * 16 * chaos;
  const jy = Math.cos(frame * 1.15) * 14 * chaos;

  // Toxin sweeps in from the right, peaks, then recedes as the cell flees.
  const toxinX =
    interpolate(staged, [0, 90, 130, 230], [1.18, 0.66, 0.66, 1.35], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }) * width;
  const toxinIntensity = interpolate(
    staged,
    [0, 90, 140, 230],
    [0.2, 1, 1, 0.15],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 20) }}>
      <AbsoluteFill style={{ filter: "brightness(0.8)" }}>
        <ArcheanOcean />
      </AbsoluteFill>

      <div style={{ position: "absolute", left: toxinX, top: 0.5 * height }}>
        <ChemicalSource color={palette.toxin} size={420} intensity={toxinIntensity} />
      </div>

      <div
        style={{
          position: "absolute",
          left: motion.x + jx,
          top: motion.y + jy,
        }}
      >
        <Bacterium mode={motion.mode} heading={motion.heading} scale={1.1} />
      </div>

      <Narration beat={BEAT} />
    </AbsoluteFill>
  );
};
