import { AbsoluteFill } from "remotion";
import { palette } from "../../theme/palette";

export const Ocean: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(to bottom, ${palette.oceanShallow}, ${palette.oceanDeep})`,
      }}
    />
  );
};
