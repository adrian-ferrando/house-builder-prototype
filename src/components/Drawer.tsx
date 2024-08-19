"use client";

import * as THREE from "three";
import { Floor } from "./Floor";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { ProjectOne } from "./projects/ProjectOne";
import { ProjectTwo } from "./projects/ProjectTwo";
import { useControlsContext } from "@/contexts/ControlsProvider";
import { DirectionalLight, DirectionalLightHelper } from "three";
import { OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";

export default function Drawer() {
  const { controls, setControls } = useControlsContext();

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
