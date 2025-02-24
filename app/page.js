"use client";

import React from "react";
import Avatar from "./components/Avatar";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-600 text-white">
      {/* Responsive Text Block */}
      
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 md:translate-x-[10%] text-center md:left-10 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:text-left animate-fade-in w-[90%] md:w-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5">
          Welcome to My Master React Course
        </h1>
        <p className="max-w-[90%] md:max-w-md">
          Use the w-auto utility to remove an element's assigned width under a specific condition, like at a particular breakpoint:
        </p>
      </div>

      {/* Responsive Avatar Canvas */}
      <div className="w-full h-[80vh] sm:h-screen">
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
          <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
          <group position-y={-1}>
            <Avatar />
          </group>
          <ambientLight intensity={1} />
        </Canvas>
      </div>
    </main>
  );
}
