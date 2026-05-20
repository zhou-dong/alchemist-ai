import { Composition } from "remotion";
import { Ch0 } from "./chapters/Ch0/Ch0";
import { Ch1 } from "./chapters/Ch1/Ch1";
import { Ch2 } from "./chapters/Ch2/Ch2";
import { Ch3 } from "./chapters/Ch3/Ch3";
import { Ch4 } from "./chapters/Ch4/Ch4";
import { Ch5 } from "./chapters/Ch5/Ch5";
import {
  CHAPTER_DURATION_FRAMES as Ch0Duration,
  FPS,
} from "./chapters/Ch0/timing";
import { CHAPTER_DURATION_FRAMES as Ch1Duration } from "./chapters/Ch1/timing";
import { CHAPTER_DURATION_FRAMES as Ch2Duration } from "./chapters/Ch2/timing";
import { CHAPTER_DURATION_FRAMES as Ch3Duration } from "./chapters/Ch3/timing";
import { CHAPTER_DURATION_FRAMES as Ch4Duration } from "./chapters/Ch4/timing";
import { CHAPTER_DURATION_FRAMES as Ch5Duration } from "./chapters/Ch5/timing";

const WIDTH = 1920;
const HEIGHT = 1080;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ch0"
        component={Ch0}
        durationInFrames={Ch0Duration}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
      <Composition
        id="ch1"
        component={Ch1}
        durationInFrames={Ch1Duration}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
      <Composition
        id="ch2"
        component={Ch2}
        durationInFrames={Ch2Duration}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
      <Composition
        id="ch3"
        component={Ch3}
        durationInFrames={Ch3Duration}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
      <Composition
        id="ch4"
        component={Ch4}
        durationInFrames={Ch4Duration}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
      <Composition
        id="ch5"
        component={Ch5}
        durationInFrames={Ch5Duration}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};
