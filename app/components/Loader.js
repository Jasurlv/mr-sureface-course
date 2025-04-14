// app/components/Loader.js
import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress(); // Get loading progress
  return (
    <Html center>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black", // Dark background
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
        }}
      >
        <div>Loading... {Math.round(progress)}%</div>
        <div
          style={{
            width: "200px",
            height: "10px",
            backgroundColor: "#444",
            borderRadius: "5px",
            margin: "10px auto",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          ></div>
        </div>
      </div>
    </Html>
  );
}