"use client";

import { Canvas } from "@react-three/fiber";
import {
  AccumulativeShadows,
  CameraControls,
  Center,
  Loader,
  OrbitControls,
  RandomizedLight,
} from "@react-three/drei";
import { ProjectOne } from "./projects/ProjectOne";

export default function Drawer() {
  return (
    <>
      <Canvas shadows camera={{ position: [-25, -10, 40], fov: 45 }}>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.1}
          maxPolarAngle={Math.PI / 2.1}
        />

        <ProjectOne position={[-5, -10, 0]} />

        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
      </Canvas>
      <Loader />
    </>
  );
}
