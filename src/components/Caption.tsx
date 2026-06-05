import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { palette } from "../theme/palette";
import { fontFamily } from "../theme/fonts";

export type Cue = {
  /** Caption text. */
  text: string;
  /** Frame (relative to the enclosing Sequence) the cue starts fading in. */
  from: number;
  /** Frame the cue finishes fading out. */
  to: number;
  /** Optional font-size override (defaults to 44). */
  size?: number;
  /** Optional weight override (defaults to 300). */
  weight?: number;
};

type Props = {
  cues: Cue[];
  /** Fade in/out duration in frames (default 20). */
  fade?: number;
  /** Distance from the bottom edge in px (default 120). */
  bottom?: number;
};

/**
 * Timed on-screen captions for the silent-narration style. Each cue fades in
 * over `fade` frames after `from`, holds, then fades out over `fade` frames
 * before `to`. All cues share a bottom-centered layout.
 */
export const TimedCaptions: React.FC<Props> = ({
  cues,
  fade = 20,
  bottom = 120,
}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{ fontFamily, color: palette.text, pointerEvents: "none" }}
    >
      {cues.map((cue, i) => {
        // Short cues (shorter than two fades) can't hold; ramp up to a single
        // peak at the midpoint instead so the interpolate range stays monotonic.
        const short = cue.to - cue.from <= fade * 2;
        const mid = (cue.from + cue.to) / 2;
        const opacity = short
          ? interpolate(frame, [cue.from, mid, cue.to], [0, 1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })
          : interpolate(
              frame,
              [cue.from, cue.from + fade, cue.to - fade, cue.to],
              [0, 1, 1, 0],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
            );
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom,
              textAlign: "center",
              fontWeight: cue.weight ?? 300,
              fontSize: cue.size ?? 44,
              lineHeight: 1.4,
              padding: "0 12%",
              opacity,
            }}
          >
            {cue.text}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
