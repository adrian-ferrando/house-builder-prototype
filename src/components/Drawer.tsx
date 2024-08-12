"use client";

import { Canvas } from "@react-three/fiber";
import { ProjectOne } from "./projects/ProjectOne";
import {
  AccumulativeShadows,
  Environment,
  Loader,
  OrbitControls,
  RandomizedLight,
} from "@react-three/drei";
import { useState, useTransition } from "react";
import { useControls } from "leva";

export default function Drawer() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 50], fov: 40 }}>
        <ProjectOne position={[0, -12, 0]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />;
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
      <Loader />
    </>
  );
}
