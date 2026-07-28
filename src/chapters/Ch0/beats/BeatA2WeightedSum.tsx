import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { SeeSaw } from "../../../components/diagrams/SeeSaw";
import { Narration } from "../../../components/Narration";
import { palette } from "../../../theme/palette";
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";
import { cueFrame } from "../../../narration/schedule";
import { revealAt } from "../../../narration/staging";
import { narration } from "../narration.generated";

const BEAT = narration.beatA2WeightedSum;

// The formula builds in the order the narration says it: the weighted sum when
// it's written out, then the bias term when the baseline is named.
const SUM_AT = cueFrame(BEAT, 8);
const BIAS_AT = cueFrame(BEAT, 16);
// The closing caveats — the math was real, but the architecture is missing.
const MISSING_AT = cueFrame(BEAT, 23);

/**
 * Part 2 · A2 — The Implicit Weighted Sum. The see-saw is the formula made
 * physical: decision = Σ(signal × weight) + bias. The math the next chapter
 * will name — what's missing in bacteria is the architecture, not the math.
 */
export const BeatA2WeightedSum: React.FC = () => {
  const frame = useCurrentFrame();

  const sumOpacity = revealAt(frame, SUM_AT, 30);
  const biasOpacity = revealAt(frame, BIAS_AT, 35);
  // A small standing tilt — the baseline activity before any signal arrives.
  const tip = interpolate(frame, [BIAS_AT, BIAS_AT + 50], [0, -0.18], {
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
            const o = revealAt(frame, MISSING_AT + i * 55, 25);
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

      {/* Subtitles sit low here so they clear the see-saw diagram. */}
      <Narration beat={BEAT} bottom={56} />
    </AbsoluteFill>
  );
};
