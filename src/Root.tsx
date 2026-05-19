import { Composition } from "remotion";
import { Ch0 } from "./chapters/Ch0/Ch0";
import { Ch1 } from "./chapters/Ch1/Ch1";
import { Ch2 } from "./chapters/Ch2/Ch2";
import { Ch3 } from "./chapters/Ch3/Ch3";
import { Ch4 } from "./chapters/Ch4/Ch4";
import { Ch5 } from "./chapters/Ch5/Ch5";

const FPS = 30;
const WIDTH = 1920;
const HEIGHT = 1080;
// Placeholder chapter length (3 acts × 150 frames @ 30fps = 15s).
// Each chapter exports its own duration in chapters/Ch{N}/timing.ts;
// wire those up here when per-chapter durations diverge.
const CHAPTER_DURATION = 450;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ch0"
        component={Ch0}
        durationInFrames={CHAPTER_DURATION}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
      <Composition
        id="ch1"
        component={Ch1}
        durationInFrames={CHAPTER_DURATION}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
      <Composition
        id="ch2"
        component={Ch2}
        durationInFrames={CHAPTER_DURATION}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
      <Composition
        id="ch3"
        component={Ch3}
        durationInFrames={CHAPTER_DURATION}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
      <Composition
        id="ch4"
        component={Ch4}
        durationInFrames={CHAPTER_DURATION}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
      <Composition
        id="ch5"
        component={Ch5}
        durationInFrames={CHAPTER_DURATION}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};
