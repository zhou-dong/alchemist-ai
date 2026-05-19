import { AbsoluteFill } from "remotion";

export const Main: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0b0b0b",
        color: "#fafafa",
        fontFamily: "sans-serif",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: 96 }}>alchemist-ai</h1>
    </AbsoluteFill>
  );
};
