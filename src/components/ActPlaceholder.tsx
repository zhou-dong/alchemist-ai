import { AbsoluteFill } from "remotion";
import { palette } from "../theme/palette";
import { fontFamily } from "../theme/fonts";

type Props = {
  chapter: number;
  act: number;
  title: string;
};

export const ActPlaceholder: React.FC<Props> = ({ chapter, act, title }) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: palette.oceanDeep,
        color: palette.text,
        fontFamily,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ fontSize: 32, color: palette.textMuted, letterSpacing: 4 }}>
        CHAPTER {chapter}
      </div>
      <div style={{ fontSize: 84, marginTop: 16, fontWeight: 700 }}>
        Act {act} — {title}
      </div>
    </AbsoluteFill>
  );
};
