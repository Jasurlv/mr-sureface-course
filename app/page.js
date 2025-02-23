"use client";

import React from "react";
import Avatar from "./components/Avatar";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-600 text-white">
      <div className="absolute transform translate-y-[-50%] top-1/2 left-10">
        <h1 className="text-3xl font-bold mb-5">Welcome to My Master React Course</h1>
        <p className="w-96">
          Use the w-auto utility to remove an element's assigned width under a specific condition, like at a particular breakpoint:
        </p>
      </div>

      <div className="w-full h-screen">
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
          <OrbitControls enableZoom={false} enableRotate={false} enablePan={false}  />
          <group position-y={-1}>
            <Avatar />
          </group>
          <ambientLight intensity={1} />
        </Canvas>

      </div>
    </main>
  );
}
