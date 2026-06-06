import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Synapse } from "../../../components/diagrams/Synapse";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

/**
 * Part 1 · Act 2 · Beat 4 — Cells That Fire Together. The rule made visual on a
 * single synapse: fire together and it strengthens; fire apart and it weakens.
 * Hebb, 1949 — "cells that fire together, wire together."
 */
export const Beat4CellsFireTogether: React.FC = () => {
  const frame = useCurrentFrame();

  const firePhase = frame >= 40 && frame <= 130;
  const sepPhase = frame >= 170 && frame <= 250;
  const cyc = frame % 30;
  const altA = Math.floor(frame / 24) % 2 === 0 && frame % 24 < 12;
  const altB = Math.floor(frame / 24) % 2 === 1 && frame % 24 < 12;

  const firingA = (firePhase && cyc < 14) || (sepPhase && altA);
  const firingB = (firePhase && cyc < 14) || (sepPhase && altB);
  const pulse = firePhase && cyc < 14 ? cyc / 14 : null;

  const strength = interpolate(frame, [40, 130, 170, 250], [0.3, 0.95, 0.95, 0.35], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const quoteOpacity = interpolate(frame, [105, 140, 290, 300], [0, 1, 1, 0.8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#04080e", opacity: fadeIn(frame, 20), alignItems: "center", justifyContent: "center" }}>
      <div style={{ marginTop: -80 }}>
        <Synapse strength={strength} pulse={pulse} firingA={firingA} firingB={firingB} scale={1.5} />
      </div>

      <div
        style={{
          position: "absolute",
          top: "62%",
          fontFamily,
          color: palette.text,
          fontSize: 46,
          fontStyle: "italic",
          fontWeight: 300,
          opacity: quoteOpacity,
          textAlign: "center",
        }}
      >
        “Cells that fire together, wire together.”
      </div>

      <TimedCaptions
        cues={[
          { text: "There is a name for this. Donald Hebb wrote it down in 1949.", from: 20, to: 100 },
          { text: "Active at the same moment → the connection strengthens. Apart → it weakens.", from: 160, to: 250 },
          { text: "Every signal leaves a trace. She is becoming a record of her own life.", from: 255, to: 300 },
        ]}
      />
    </AbsoluteFill>
  );
};
