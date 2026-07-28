import { execFile } from "node:child_process";
import { promisify } from "node:util";

const run = promisify(execFile);

/**
 * TTS provider: macOS `say`.
 *
 * This is the swappable adapter — a provider is any module exporting
 * `{ id, synthesize }`. `say` is a placeholder that costs nothing and runs
 * offline, so the whole chapter can be timed against real measured audio before
 * committing to a paid voice. It will sound robotic; that is expected. Judge
 * pacing from it, not delivery.
 *
 * Swapping providers re-measures every clip, so beat durations shift — which is
 * why beats anchor animation to narration cue frames rather than raw numbers.
 */

/** Best available en_US voice on stock macOS; the novelty voices are unusable. */
const VOICE = process.env.NARRATION_VOICE ?? "Samantha";

/**
 * Words per minute. `say` defaults near 175, which reads as rushed for this
 * series' contemplative tone.
 */
const RATE = process.env.NARRATION_RATE ?? "150";

export const id = `say:${VOICE}@${RATE}`;

/** Renders `text` to a 16-bit mono WAV at `outPath`. */
export const synthesize = async ({ text, outPath }) => {
  await run("say", [
    "-v",
    VOICE,
    "-r",
    RATE,
    "-o",
    outPath,
    "--file-format=WAVE",
    "--data-format=LEI16@22050",
    text,
  ]);
};
