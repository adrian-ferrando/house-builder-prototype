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
    autorotate: { value: true, label: "Auto Rotate" },
    rotateSpeed: { value: 2, min: 1, max: 10, label: "Rotate Speed" },
    doorType: {
      options: ["Type 1", "Type 2", "Type 3", "Type 4"],
      label: "Door Type",
    },
    doorColor: {
      options: ["Red", "Green", "Blue", "Yellow"],
      label: "Door Color",
    },
    windowType: {
      options: ["Type 1", "Type 2", "Type 3", "Type 4"],
      label: "Window Type",
    },
    windowColor: {
      options: ["Red", "Green", "Blue", "Yellow"],
      label: "Window Color",
    },
    wallsType: {
      options: ["Type 1", "Type 2", "Type 3", "Type 4"],
      label: "Walls Type",
    },
    wallsColor: {
      options: ["Red", "Green", "Blue", "Yellow"],
      label: "Walls Color",
    },
    roofType: {
      options: ["Type 1", "Type 2", "Type 3", "Type 4"],
      label: "Roof Type",
    },
    roofColor: {
      options: ["Red", "Green", "Blue", "Yellow"],
      label: "Roof Color",
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
        autoRotate={controls.autorotate}
        autoRotateSpeed={controls.rotateSpeed}
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
