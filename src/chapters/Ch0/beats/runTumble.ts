import { interpolate } from "remotion";

export type Waypoint = { t: number; x: number; y: number };

/** Frame ranges (inclusive) during which the cell is tumbling, not running. */
export type TumbleWindow = readonly [number, number];

export type Motion = {
  /** Position in pixels. */
  x: number;
  y: number;
  /** Heading in degrees the cell points (0 = right). */
  heading: number;
  mode: "run" | "tumble";
};

const at = (
  frame: number,
  waypoints: Waypoint[],
  key: "x" | "y",
): number =>
  interpolate(
    frame,
    waypoints.map((w) => w.t),
    waypoints.map((w) => w[key]),
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

/**
 * Drives a bacterium along a series of waypoints, deriving its heading from the
 * direction of travel and flipping it into "tumble" mode during the given
 * windows. The smooth segments read as runs; the abrupt reorientations between
 * them read as tumbles. Caller supplies the canvas size for pixel mapping.
 */
export const runTumble = (
  frame: number,
  waypoints: Waypoint[],
  tumbleWindows: TumbleWindow[],
  width: number,
  height: number,
): Motion => {
  const x01 = at(frame, waypoints, "x");
  const y01 = at(frame, waypoints, "y");

  // Heading from a short look-ahead along the path.
  const ahead = 2;
  const dx = (at(frame + ahead, waypoints, "x") - x01) * width;
  const dy = (at(frame + ahead, waypoints, "y") - y01) * height;
  const heading =
    dx === 0 && dy === 0 ? 0 : (Math.atan2(dy, dx) * 180) / Math.PI;

  const tumbling = tumbleWindows.some(([a, b]) => frame >= a && frame <= b);

  return {
    x: x01 * width,
    y: y01 * height,
    heading,
    mode: tumbling ? "tumble" : "run",
  };
};
