import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { EdiacaranOcean } from "../../../components/scenes/EdiacaranOcean";
import { Bila } from "../../../components/characters/Bila";
import { Synapse } from "../../../components/diagrams/Synapse";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

/**
 * Part 1 · Act 1 · Beat 1 — Same Ocean, Same Bila, Same Rule. A quick recap of
 * Chapter 2: connections strengthening and weakening with use. "Fire together,
 * wire together." But the rule has a quiet problem — and now we look for it.
 */
export const Beat1SameOceanSameBila: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const bx = interpolate(frame, [0, 240], [0.28, 0.5], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) * width;
  const by = (0.42 + Math.sin(frame * 0.04) * 0.04) * height;

  // Recap: a synapse breathing stronger/weaker.
  const strength = 0.55 + Math.sin(frame * 0.06) * 0.3;
  const cyc = frame % 40;

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 25) }}>
      <EdiacaranOcean />

      <div style={{ position: "absolute", left: bx, top: by }}>
        <Bila heading={4} scale={1.1} showCluster />
      </div>

      <div style={{ position: "absolute", right: 90, bottom: 90, opacity: 0.95 }}>
        <Synapse strength={strength} firingA={cyc < 12} firingB={cyc < 12} scale={1.05} />
      </div>

      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
        <div style={{ fontFamily, color: palette.text, fontSize: 40, fontStyle: "italic", fontWeight: 300, opacity: interpolate(frame, [100, 130, 170, 200], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
          fire together, wire together
        </div>
      </AbsoluteFill>

      <TimedCaptions
        cues={[
          { text: "We are still with Bila. She has been learning, all along.", from: 20, to: 95 },
          { text: "Connections strengthen with use, weaken with disuse. A record of her own life.", from: 205, to: 240 },
          { text: "But the rule has a quiet problem. We weren't looking for it. Now we are.", from: 100, to: 200 },
        ]}
      />
    </AbsoluteFill>
  );
};
