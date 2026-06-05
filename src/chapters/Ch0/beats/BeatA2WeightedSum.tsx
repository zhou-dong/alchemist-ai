import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { SeeSaw } from "../../../components/diagrams/SeeSaw";
import { TimedCaptions } from "../../../components/Caption";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";

/**
 * Part 2 · A2 — The Implicit Weighted Sum. The see-saw is the formula made
 * physical: decision = Σ(signal × weight) + bias. The math the next chapter
 * will name — what's missing in bacteria is the architecture, not the math.
 */
export const BeatA2WeightedSum: React.FC = () => {
  const frame = useCurrentFrame();

  const sumOpacity = interpolate(frame, [30, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const biasOpacity = interpolate(frame, [150, 185], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // A small standing tilt — the baseline activity before any signal arrives.
  const tip = interpolate(frame, [150, 200], [0, -0.18], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const term = (color: string): React.CSSProperties => ({ color });

  const missing = ["no central place to weigh", "no parameters that can change", "no signals from inside the body"];

  return (
    <AbsoluteFill style={{ backgroundColor: "#04080e", opacity: fadeIn(frame, 20) }}>
      {/* Formula, top-center, building in stages. */}
      <AbsoluteFill style={{ alignItems: "center" }}>
        <div
          style={{
            marginTop: 150,
            fontFamily,
            fontSize: 56,
            fontWeight: 300,
            color: palette.text,
            opacity: sumOpacity,
            letterSpacing: 1,
          }}
        >
          decision = Σ ( <span style={term(palette.food)}>signal</span> ×{" "}
          <span style={term(palette.bila)}>weight</span> )
          <span style={{ opacity: biasOpacity }}>
            {" "}
            + <span style={term(palette.toxin)}>bias</span>
          </span>
        </div>

        {/* The architecture that is missing, even though the math is present. */}
        <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
          {missing.map((line, i) => {
            const o = interpolate(frame, [230 + i * 25, 255 + i * 25], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            return (
              <div
                key={i}
                style={{
                  fontFamily,
                  fontSize: 30,
                  fontWeight: 300,
                  color: palette.textMuted,
                  opacity: o,
                }}
              >
                {line}
              </div>
            );
          })}
        </div>
      </AbsoluteFill>

      {/* See-saw below: the formula made physical. */}
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "flex-end" }}>
        <div style={{ marginBottom: 150 }}>
          <SeeSaw tip={tip} leftLabel="run" rightLabel="tumble" scale={0.62} />
        </div>
      </AbsoluteFill>

      <TimedCaptions
        cues={[
          { text: "Each signal has its own strength — its own hidden weight.", from: 45, to: 135 },
          { text: "Add the cell's quiet baseline — a bias — and that's the whole decision.", from: 150, to: 245 },
          { text: "Weighted sum, plus bias. Three billion years of arithmetic in chemistry.", from: 250, to: 330 },
        ]}
        bottom={56}
      />
    </AbsoluteFill>
  );
};
