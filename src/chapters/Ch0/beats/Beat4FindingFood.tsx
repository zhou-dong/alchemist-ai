import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { ArcheanOcean } from "../../../components/scenes/ArcheanOcean";
import { ChemicalSource } from "../../../components/scenes/ChemicalSource";
import { Bacterium } from "../../../components/characters/Bacterium";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fadeIn } from "../../../theme/transitions";
import { runTumble, type Waypoint, type TumbleWindow } from "./runTumble";

const FOOD = { x: 0.75, y: 0.4 };

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
 * Part 1 · Act 2 · Beat 4 — Finding Food. An attractant gradient; the cell runs
 * when sugar strengthens and tumbles when it weakens, climbing toward the
 * source. Gentle, unhurried — the food-seeking face of run-and-tumble.
 */
export const Beat4FindingFood: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const motion = runTumble(frame, WAYPOINTS, TUMBLES, width, height);

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 20) }}>
      <ArcheanOcean />

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

      <TimedCaptions
        cues={[
          { text: "First, the cell has to find food.", from: 15, to: 90 },
          { text: "Sugar getting stronger → run.", from: 95, to: 175 },
          { text: "Sugar getting weaker → tumble.", from: 180, to: 245 },
          {
            text: "Not gracefully. Not knowingly. Just — eventually.",
            from: 250,
            to: 300,
          },
        ]}
      />
    </AbsoluteFill>
  );
};
