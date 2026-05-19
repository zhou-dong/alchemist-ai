import { interpolate } from "remotion";

export const fadeIn = (frame: number, durationInFrames = 30): number =>
  interpolate(frame, [0, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

export const fadeOut = (
  frame: number,
  startFrame: number,
  durationInFrames = 30,
): number =>
  interpolate(frame, [startFrame, startFrame + durationInFrames], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
