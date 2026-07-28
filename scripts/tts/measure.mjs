import { execFile } from "node:child_process";
import { promisify } from "node:util";

const run = promisify(execFile);

/**
 * Measures an audio file's duration in seconds using `afinfo`, which ships with
 * macOS. (ffprobe would work too but is not installed here.)
 *
 * Durations are measured at generation time and baked into the manifest, so the
 * Remotion side never has to await media metadata during render.
 */
export const durationInSeconds = async (filePath) => {
  const { stdout } = await run("afinfo", [filePath]);
  const match = stdout.match(/estimated duration:\s*([\d.]+)\s*sec/);
  if (!match) {
    throw new Error(`Could not read duration from afinfo output for ${filePath}`);
  }
  return Number.parseFloat(match[1]);
};
