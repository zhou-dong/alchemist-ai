import { AbsoluteFill, useCurrentFrame } from "remotion";
import { HydrothermalVent } from "../../../components/scenes/HydrothermalVent";
import { VentMat } from "../../../components/characters/VentMat";
import { ChemicalSource } from "../../../components/scenes/ChemicalSource";
import { Narration } from "../../../components/Narration";
import { palette } from "../../../theme/palette";
import { fadeIn } from "../../../theme/transitions";
import { spreadCues } from "../../../narration/staging";
import { narration } from "../narration.generated";

const BEAT = narration.beatTheReaction;

// Hydrogen and sulfide keep pouring out of the crack, endlessly — a handful
// of visible "contact" moments spread across the beat, not tied to specific
// sentences, since the reaction is continuous, not a discrete event.
const PULSE_FRAMES = spreadCues(BEAT, 6);

/**
 * Part 1 · Beat — The Reaction. No movement, no decision — chemistry from the
 * vent touches the mat's surface and the mat reacts, over and over. The only
 * "event" is a repeated one: the mat glows briefly wherever chemistry lands.
 */
export const BeatTheReaction: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 25) }}>
      <HydrothermalVent />

      {/* Hydrogen and hydrogen sulfide drifting down from the plume onto the mat. */}
      <div style={{ position: "absolute", left: "44%", top: "58%" }}>
        <ChemicalSource color={palette.hydrogen} size={160} intensity={0.7} />
      </div>
      <div style={{ position: "absolute", left: "58%", top: "62%" }}>
        <ChemicalSource color={palette.sulfide} size={140} intensity={0.6} />
      </div>

      <VentMat frame={frame} pulseFrames={PULSE_FRAMES} />

      <Narration beat={BEAT} />
    </AbsoluteFill>
  );
};
