import React from 'react'
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./Experience";
import { UI } from "./UI";

export const About = () => {
    return (
        <div id="about">
            <UI /> {/*
            <Loader />
            <Canvas shadows camera={{
                position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
                fov: 45,
            }}>
                <group position-y={0}>
                    <Suspense fallback={null}>
                        <Experience />
                    </Suspense>
                </group>
            </Canvas> */}
        </div>
    )
}
