import { palette } from "../../theme/palette";

export const FoodSignal: React.FC = () => {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        backgroundColor: palette.food,
        opacity: 0.7,
      }}
    />
  );
};
