"use client";

import { useRef } from "react";
import * as THREE from "three";
import { Floor } from "./Floor";
import { useControls } from "leva";
import { Canvas } from "@react-three/fiber";
import { ProjectOne } from "./projects/ProjectOne";
import { ProjectTwo } from "./projects/ProjectTwo";
import { DirectionalLight, DirectionalLightHelper } from "three";
import { OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";

export default function Drawer() {
  const controls = useControls({
    Model: {
      options: ["First project", "Second project"],
    },
  });

  return (
    <Canvas
      gl={{
        antialias: true,
        toneMapping: THREE.ReinhardToneMapping,
      }}
      shadows
    >
      <Camera />
      <Lights />

      {controls.Model === "First project" && (
        <ProjectOne position={[0, -12.5, 0]} />
      )}

      {controls.Model === "Second project" && (
        <ProjectTwo position={[0, -12.5, 0]} />
      )}

      <Floor position={[0, -12, 0]} />
      <OrbitControls
        autoRotate
        autoRotateSpeed={2}
        enablePan={false}
        enableZoom={false}
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
        //ref={dirLight}
        position={[10, 30, 80]}
        intensity={1.5}
        shadow-bias={-0.001}
        castShadow
      >
        <orthographicCamera attach="shadow-camera" args={[-20, 20, 10, -20]} />
      </directionalLight>
    </>
  );
}

function Camera() {
  return <PerspectiveCamera makeDefault position={[0, 0, 80]} fov={25} />;
}
