"use client";

import { Canvas } from "@react-three/fiber";
import Square from "./square";
import { OrbitControls } from "@react-three/drei";
import { Leva } from "leva";

export default function CustomCanvas() {
  return (
    <>
      {/* Controller menu */}
      <Leva collapsed />

      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Square position={[-1.2, 0, 0]} />
        <Square position={[1.2, 0, 0]} />

        <OrbitControls />
      </Canvas>
    </>
  );
}
