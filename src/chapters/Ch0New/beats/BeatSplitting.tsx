import { AbsoluteFill, useCurrentFrame } from "remotion";
import { HydrothermalVent } from "../../../components/scenes/HydrothermalVent";
import { VentMat } from "../../../components/characters/VentMat";
import { Narration } from "../../../components/Narration";
import { fadeIn } from "../../../theme/transitions";
import { cueFrame } from "../../../narration/schedule";
import { narration } from "../narration.generated";

const BEAT = narration.beatSplitting;

// "It splits." — 1 -> 2 patches.
const SPLIT_1 = cueFrame(BEAT, 5);
// "...become four. Four become eight." — 2 -> 4, then a beat later 4 -> 8.
const SPLIT_2 = cueFrame(BEAT, 11);
const SPLIT_3 = cueFrame(BEAT, 11) + 45;

/**
 * Part 1 · Beat — Splitting. The same reaction, repeated enough times, grows
 * the mat past the point where being one thing is stable — it divides, and
 * divides again, spreading as a crust across the rock. No motion, no
 * spreading-to-look-for-anything: just more of the same patch.
 */
export const BeatSplitting: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 25) }}>
      <HydrothermalVent />
      <VentMat frame={frame} splitFrames={[SPLIT_1, SPLIT_2, SPLIT_3]} />
      <Narration beat={BEAT} />
    </AbsoluteFill>
  );
};
