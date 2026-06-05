import { Series } from "remotion";
import { Beat1YoungEarth } from "../beats/Beat1YoungEarth";
import { Beat2FirstOceans } from "../beats/Beat2FirstOceans";
import { Beat3MeetTheCell } from "../beats/Beat3MeetTheCell";
import { Beat4FindingFood } from "../beats/Beat4FindingFood";
import { Beat5AvoidingDanger } from "../beats/Beat5AvoidingDanger";
import { Beat6SameTwoMoves } from "../beats/Beat6SameTwoMoves";
import { Beat7SimpleRule } from "../beats/Beat7SimpleRule";
import { Beat8Collide } from "../beats/Beat8Collide";
import { PART1_BEAT_DURATIONS_FRAMES as D } from "../timing";

// Part 1 — The Story (biology register).
//   Act 1 — A Simpler World: beats 1–3
//   Act 2 — Two Behaviors, One Mechanism: beats 4–8
export const Part1Story: React.FC = () => (
  <Series>
    <Series.Sequence durationInFrames={D[0]}>
      <Beat1YoungEarth />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[1]}>
      <Beat2FirstOceans />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[2]}>
      <Beat3MeetTheCell />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[3]}>
      <Beat4FindingFood />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[4]}>
      <Beat5AvoidingDanger />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[5]}>
      <Beat6SameTwoMoves />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[6]}>
      <Beat7SimpleRule />
    </Series.Sequence>
    <Series.Sequence durationInFrames={D[7]}>
      <Beat8Collide />
    </Series.Sequence>
  </Series>
);
