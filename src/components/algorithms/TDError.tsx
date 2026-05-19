import { palette } from "../../theme/palette";
import { fontFamily } from "../../theme/fonts";

export const TDError: React.FC = () => {
  return (
    <div
      style={{
        padding: 24,
        border: `2px dashed ${palette.textMuted}`,
        borderRadius: 8,
        color: palette.textMuted,
        fontFamily,
        fontSize: 24,
      }}
    >
      TD error / eligibility trace placeholder
    </div>
  );
};
