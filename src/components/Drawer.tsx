"use client";

import * as THREE from "three";
import { Floor } from "./Floor";
import { useControls } from "leva";
import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ProjectOne } from "./projects/ProjectOne";
import { ProjectTwo } from "./projects/ProjectTwo";
import { DirectionalLight, DirectionalLightHelper } from "three";
import { OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";

export default function Drawer() {
  const [controls, setControls] = useControls(() => ({
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
      options: ["Standard", "Red", "Green", "Blue", "Yellow"],
      label: "Door Color",
    },
    windowType: {
      options: ["Type 1", "Type 2", "Type 3", "Type 4"],
      label: "Window Type",
    },
    windowColor: {
      options: ["Standard", "Red", "Green", "Blue", "Yellow"],
      label: "Window Color",
    },
    wallsType: {
      options: ["Type 1", "Type 2", "Type 3", "Type 4"],
      label: "Walls Type",
    },
    wallsColor: {
      options: ["Standard", "Red", "Green", "Blue", "Yellow"],
      label: "Walls Color",
    },
    roofType: {
      options: ["Type 1", "Type 2", "Type 3", "Type 4"],
      label: "Roof Type",
    },
    roofColor: {
      options: ["Standard", "Red", "Green", "Blue", "Yellow"],
      label: "Roof Color",
    },
  }));

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
        <ProjectOne position={[0, -12.5, 0]} controls={controls} />
      )}

      {controls.Model === "Second project" && (
        <ProjectTwo
          position={[-24, -12.5, 6]}
          controls={controls}
          setControls={setControls}
        />
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
