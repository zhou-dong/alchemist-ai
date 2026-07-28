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
import { fontFamily } from "../../../theme/fonts";
import { fadeIn } from "../../../theme/transitions";
import { cueFrame } from "../../../narration/schedule";
import { narration } from "../narration.generated";

const BEAT = narration.beat6SameTwoMoves;

/** Frames the split-screen half was originally choreographed over. */
const SPLIT_AUTHORED = 170;

// The split screen holds while the narration walks through both stories, and
// gives way to the named diagrams exactly when the names arrive ("Biologists
// gave them names.").
const SPLIT_END = cueFrame(BEAT, 15);

/**
 * Part 1 · Act 2 · Beat 6 — Same Two Moves. Split screen: food (gentle runs,
 * tight spins) beside danger (tight spins, urgent runs). Then both fade and the
 * two motions stand alone, unlabeled, identical beneath both behaviors — named
 * at last: Run, Tumble.
 */
export const Beat6SameTwoMoves: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const half = width / 2;

  // The split-screen choreography, stretched across however long the narration
  // spends on the two stories.
  const staged = (frame / Math.max(SPLIT_END, 1)) * SPLIT_AUTHORED;

  const splitOpacity = interpolate(
    frame,
    [0, 20, SPLIT_END - 25, SPLIT_END],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const diagramsOpacity = interpolate(
    frame,
    [SPLIT_END + 5, SPLIT_END + 35],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  // Left: food-seeking — long gentle run, a tumble, then run again.
  const leftTumble = staged >= 70 && staged <= 95;
  const leftX =
    interpolate(staged, [0, 70, 95, 150], [0.15, 0.6, 0.6, 0.9], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }) * half;
  const leftY = 0.42 * height + Math.sin(frame * 0.05) * 10;

  // Right: danger — tight spins, with one urgent run dart upward.
  const rightRun = staged >= 80 && staged <= 105;
  // Jitter and spin stay on real frames — the cell's own motion, not staging.
  const rightJx = rightRun ? 0 : Math.sin(frame * 0.9) * 14;
  const rightJy = rightRun ? 0 : Math.cos(frame * 1.1) * 12;
  const rightDart = interpolate(staged, [80, 105], [0, -0.18], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rightX = half + half * 0.5 + rightJx;
  const rightY = (0.55 + rightDart) * height + rightJy;

  // Spin diagram rotation.
  const spin = (frame % 60) * 6;

  const labelStyle: React.CSSProperties = {
    fontFamily,
    color: palette.text,
    fontSize: 40,
    fontWeight: 400,
    letterSpacing: 3,
    marginTop: 24,
    textAlign: "center",
  };

  return (
    <AbsoluteFill style={{ backgroundColor: "#04090f" }}>
      {/* --- Split screen --- */}
      <AbsoluteFill style={{ opacity: splitOpacity }}>
        {/* Left: food */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: half,
            height,
            overflow: "hidden",
          }}
        >
          <ArcheanOcean />
          <div style={{ position: "absolute", left: half * 0.85, top: 0.4 * height }}>
            <ChemicalSource color={palette.food} size={220} />
          </div>
          <div style={{ position: "absolute", left: leftX, top: leftY }}>
            <Bacterium mode={leftTumble ? "tumble" : "run"} heading={-6} />
          </div>
        </div>

        {/* Right: danger */}
        <div
          style={{
            position: "absolute",
            left: half,
            top: 0,
            width: half,
            height,
            overflow: "hidden",
            filter: "brightness(0.82)",
          }}
        >
          <ArcheanOcean />
          <div style={{ position: "absolute", left: half * 0.55, top: 0.5 * height }}>
            <ChemicalSource color={palette.toxin} size={300} intensity={0.8} />
          </div>
          <div style={{ position: "absolute", left: rightX - half, top: rightY }}>
            <Bacterium mode={rightRun ? "run" : "tumble"} heading={-90} />
          </div>
        </div>

        {/* Divider. */}
        <div
          style={{
            position: "absolute",
            left: half - 1,
            top: 0,
            width: 2,
            height,
            backgroundColor: palette.text,
            opacity: 0.15,
          }}
        />
      </AbsoluteFill>

      {/* --- The two motions, alone --- */}
      <AbsoluteFill
        style={{
          opacity: diagramsOpacity,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {/* Run: a straight arrow. */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <svg width={260} height={120} viewBox="0 0 260 120">
            <line
              x1={20}
              y1={60}
              x2={210}
              y2={60}
              stroke={palette.bila}
              strokeWidth={6}
              strokeLinecap="round"
            />
            <polygon points="210,44 244,60 210,76" fill={palette.bila} />
          </svg>
          <div style={labelStyle}>Run</div>
        </div>

        {/* Tumble: a spin. */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <svg
            width={260}
            height={120}
            viewBox="0 0 120 120"
            style={{ transform: `rotate(${spin}deg)` }}
          >
            <path
              d="M 96 60 A 36 36 0 1 1 84 33"
              fill="none"
              stroke={palette.toxin}
              strokeWidth={6}
              strokeLinecap="round"
            />
            <polygon points="76,22 92,30 80,44" fill={palette.toxin} />
          </svg>
          <div style={labelStyle}>Tumble</div>
        </div>
      </AbsoluteFill>

      <AbsoluteFill style={{ opacity: fadeIn(frame, 12) }}>
        <Narration beat={BEAT} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
