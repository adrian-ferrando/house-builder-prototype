"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Leva } from "leva";
import { ProjectOne } from "./projects/ProjectOne";
import { ProjectTwo } from "./projects/ProjectTwo";

export default function Drawer() {
  return (
    <>
      {/* Controller menu */}
      <Leva collapsed />

      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />

        <ProjectOne />
        {/* <ProjectTwo /> */}

        <OrbitControls />
      </Canvas>
    </>
  );
}
