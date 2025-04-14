"use client";

export default function GlobalLoader() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
        zIndex: 9999,
      }}
    >
      <div>Loading your app...</div>
    </div>
  );
}