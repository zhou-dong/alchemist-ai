import { Audio, Sequence, staticFile } from "remotion";
import { TimedCaptions, type Cue } from "./Caption";
import { schedule } from "../narration/schedule";
import type { BeatNarration } from "../narration/types";

type Props = {
  /** The beat's narration, from the chapter's narration.generated.ts. */
  beat: BeatNarration;
  /** Playback volume 0..1 (default 1). */
  volume?: number;
  /** Distance of the subtitles from the bottom edge in px. */
  bottom?: number;
  /** Hide subtitles, keeping only the voice. */
  hideSubtitles?: boolean;
  /**
   * Line indices to leave unsubtitled, for lines the beat already shows on
   * screen as display text (e.g. Beat 7 puts the rule up as a card). Without
   * this the viewer reads the same sentence twice, once large and once small.
   */
  silentLines?: readonly number[];
};

/**
 * Speaks a beat's narration and subtitles it.
 *
 * Voice and text come from the same schedule, so they cannot drift: each spoken
 * line is one audio clip, and its subtitle appears exactly when it is spoken.
 * Replaces the hand-authored `cues` arrays that used to live in each beat.
 *
 * A beat renders this once and otherwise ignores it; to align staging with a
 * particular sentence, use `cueFrame` from ../narration/schedule.
 */
export const Narration: React.FC<Props> = ({
  beat,
  volume = 1,
  bottom,
  hideSubtitles = false,
  silentLines,
}) => {
  const { clips } = schedule(beat);

  // Subtitles hold until the next line starts, so there is no flicker in the
  // breath between clips. The last one fades after its own audio ends.
  const cues: Cue[] = clips
    .map((clip, i) => ({
      text: clip.text,
      from: clip.from,
      to: clips[i + 1]?.from ?? clip.to,
      index: i,
    }))
    .filter((cue) => !silentLines?.includes(cue.index));

  return (
    <>
      {clips.map((clip) => (
        <Sequence
          key={clip.id}
          from={clip.from}
          durationInFrames={clip.durationInFrames}
          name={clip.id}
        >
          <Audio src={staticFile(clip.src)} volume={volume} />
        </Sequence>
      ))}
      {!hideSubtitles && <TimedCaptions cues={cues} fade={8} bottom={bottom} />}
    </>
  );
};
