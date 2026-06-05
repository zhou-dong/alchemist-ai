import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { NervousCluster } from "../../../components/diagrams/NervousCluster";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fadeIn } from "../../../theme/transitions";

/**
 * Part 1 · Act 2 · Beat 5 — A Knot of Cells. Zoom inside Bila's body, near her
 * front: a small cluster of pale branching neurons, fibers reaching out to the
 * skin and in to the muscles. Primitive — but the first place signals from many
 * cells can be weighed.
 */
export const Beat5KnotOfCells: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  // Occasional sensory pulse sweeping into the cluster.
  const inSignal = (frame % 90) / 90;

  return (
    <AbsoluteFill style={{ opacity: fadeIn(frame, 20), backgroundColor: "#0b2230" }}>
      {/* Interior tissue tint + vignette. */}
      <AbsoluteFill
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(60,110,140,0.35) 0%, rgba(8,28,40,0.9) 70%)",
        }}
      />
      {/* Faint body membrane arcs. */}
      <svg width={width} height={height} style={{ position: "absolute", inset: 0, opacity: 0.25 }}>
        <path d={`M 0 ${0.18 * height} Q ${width / 2} ${0.02 * height} ${width} ${0.18 * height}`} fill="none" stroke={palette.bila} strokeWidth={3} />
        <path d={`M 0 ${0.82 * height} Q ${width / 2} ${0.98 * height} ${width} ${0.82 * height}`} fill="none" stroke={palette.bila} strokeWidth={3} />
      </svg>

      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
        <NervousCluster scale={2.4} inSignal={inSignal} outSignal={inSignal > 0.6 ? (inSignal - 0.6) / 0.4 : null} />
      </AbsoluteFill>

      <TimedCaptions
        cues={[
          { text: "Inside Bila, near her front, sits a small cluster of cells — pale, branching, alive.", from: 25, to: 115 },
          { text: "Signals from across her body come in. Decisions go out.", from: 120, to: 195 },
          { text: "The first place a body has ever had to weigh signals from many cells.", from: 200, to: 300 },
        ]}
      />
    </AbsoluteFill>
  );
};
