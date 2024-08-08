"use client";

import { Canvas } from "@react-three/fiber";
import Square from "../square";
import { OrbitControls } from "@react-three/drei";
import { Leva } from "leva";
import { ProjectOne } from "../projects/project-one";
import { ProjectTwo } from "../projects/project-two";
import { ProjectThree } from "../projects/project-three";

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
        {/* <ProjectThree /> */}

        <OrbitControls />
      </Canvas>
    </>
  );
}
