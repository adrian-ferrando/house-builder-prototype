"use client";

import { Canvas } from "@react-three/fiber";
import { ProjectOne } from "./projects/ProjectOne";
import { OrbitControls, useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLight, DirectionalLightHelper } from "three";

export default function Drawer() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 20] }}>
      <Lights />
      <ProjectOne position={[0, -12, 0]} />
      <OrbitControls
        // autoRotate
        autoRotateSpeed={2}
        enablePan={false}
        //enableZoom={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}

function Lights() {
  const dirLight = useRef<DirectionalLight>(null as any);
  useHelper(dirLight, DirectionalLightHelper, 1, "red");

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        ref={dirLight}
        position={[10, 15, 30]}
        intensity={1.5}
        castShadow
      >
        <orthographicCamera attach="shadow-camera" args={[-20, 20, -30, 30]} />
      </directionalLight>
    </>
  );
}
