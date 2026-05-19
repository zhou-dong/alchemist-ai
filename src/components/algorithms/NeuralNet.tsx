import { palette } from "../../theme/palette";
import { fontFamily } from "../../theme/fonts";

export const NeuralNet: React.FC = () => {
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
      Neural network diagram placeholder
    </div>
  );
};
