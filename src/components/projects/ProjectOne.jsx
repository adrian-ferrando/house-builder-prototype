import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";

export function ProjectOne(props) {
  const { nodes, materials } = useGLTF("/project-one-transformed.glb");

  const doorRef = useRef();
  const [doorMaterial, setDoorMaterial] = useState(null);
  const [doorOriginalColor, setDoorOriginalColor] = useState(null);

  const windowRef = useRef();
  const [windowMaterial, setWindowMaterial] = useState(null);
  const [windowOriginalColor, setWindowOriginalColor] = useState(null);

  const wallsRef = useRef();
  const [wallsMaterial, setWallsMaterial] = useState(null);
  const [wallsOriginalColor, setWallsOriginalColor] = useState(null);

  const roofRef = useRef();
  const [roofMaterial, setRoofMaterial] = useState(null);
  const [roofOriginalColor, setRoofOriginalColor] = useState(null);

  useEffect(() => {
    if (doorRef.current) {
      const originalMaterial = materials.door_m;
      const clonedMaterial = originalMaterial.clone();
      setDoorMaterial(clonedMaterial);
      setDoorOriginalColor(originalMaterial.color.clone());
    }

    if (windowRef.current) {
      const originalMaterial = materials.window_big_m;
      const clonedMaterial = originalMaterial.clone();
      setWindowMaterial(clonedMaterial);
      setWindowOriginalColor(originalMaterial.color.clone());
    }

    if (wallsRef.current) {
      const originalMaterial = materials["walls.png"];
      const clonedMaterial = originalMaterial.clone();
      setWallsMaterial(clonedMaterial);
      setWallsOriginalColor(originalMaterial.color.clone());
    }

    if (roofRef.current) {
      const originalMaterial = materials["roof.png"];
      const clonedMaterial = originalMaterial.clone();
      setRoofMaterial(clonedMaterial);
      setRoofOriginalColor(originalMaterial.color.clone());
    }
  }, [materials]);

  useEffect(() => {
    if (doorMaterial) {
      doorMaterial.color.set(
        props.controls.doorColor === "Standard"
          ? doorOriginalColor
          : props.controls.doorColor
      );
    }

    if (windowMaterial) {
      windowMaterial.color.set(
        props.controls.windowColor === "Standard"
          ? windowOriginalColor
          : props.controls.windowColor
      );
    }

    if (wallsMaterial) {
      wallsMaterial.color.set(
        props.controls.wallsColor === "Standard"
          ? wallsOriginalColor
          : props.controls.wallsColor
      );
    }

    if (roofMaterial) {
      roofMaterial.color.set(
        props.controls.roofColor === "Standard"
          ? roofOriginalColor
          : props.controls.roofColor
      );
    }
  }, [
    props.controls,
    doorMaterial,
    windowMaterial,
    wallsMaterial,
    roofMaterial,
  ]);

  useEffect(() => {
    if (doorRef.current) {
      const materialName =
        props.controls.doorType === "Type 1"
          ? materials.door_m
          : props.controls.doorType === "Type 2"
          ? "walls.png"
          : props.controls.doorType === "Type 3"
          ? "foundation.png"
          : props.controls.doorType === "Type 4"
          ? "room.png"
          : "";

      let originalMaterial;
      if (materialName && materials[materialName]) {
        originalMaterial = materials[materialName];
      } else if (materialName instanceof THREE.Material) {
        originalMaterial = materialName;
      }

      const clonedMaterial = originalMaterial.clone();
      setDoorMaterial(clonedMaterial);
      doorRef.current.material = clonedMaterial;
      clonedMaterial.color.set(
        props.controls.doorColor === "Standard"
          ? doorOriginalColor
          : props.controls.doorColor
      );
    }
  }, [props.controls.doorType]);

  useEffect(() => {
    if (wallsRef.current) {
      const materialName =
        props.controls.wallsType === "Type 1"
          ? "walls.png"
          : props.controls.wallsType === "Type 2"
          ? "roof.png"
          : props.controls.wallsType === "Type 3"
          ? "foundation.png"
          : props.controls.wallsType === "Type 4"
          ? "room.png"
          : "";

      if (materialName && materials[materialName]) {
        const originalMaterial = materials[materialName];
        const clonedMaterial = originalMaterial.clone();
        setWallsMaterial(clonedMaterial);
        wallsRef.current.material = clonedMaterial;
        clonedMaterial.color.set(
          props.controls.wallsColor === "Standard"
            ? wallsOriginalColor
            : props.controls.wallsColor
        );
      }
    }
  }, [props.controls.wallsType]);

  useEffect(() => {
    if (roofRef.current) {
      const materialName =
        props.controls.roofType === "Type 1"
          ? "roof.png"
          : props.controls.roofType === "Type 2"
          ? "walls.png"
          : props.controls.roofType === "Type 3"
          ? "foundation.png"
          : props.controls.roofType === "Type 4"
          ? "room.png"
          : "";

      if (materialName && materials[materialName]) {
        const originalMaterial = materials[materialName];
        const clonedMaterial = originalMaterial.clone();
        setRoofMaterial(clonedMaterial);
        roofRef.current.material = clonedMaterial;
        clonedMaterial.color.set(
          props.controls.roofColor === "Standard"
            ? roofOriginalColor
            : props.controls.roofColor
        );
      }
    }
  }, [props.controls.roofType]);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials["pipe.png"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.656}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials["porch.png"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.656}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials["foundation.png"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.656}
      />
      <mesh
        ref={wallsRef}
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={wallsMaterial}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.656}
      />
      <mesh
        ref={roofRef}
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={roofMaterial}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.656}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials["wood.png"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.656}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials["room.png"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.656}
      />
      <mesh
        ref={doorRef}
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={doorMaterial}
        position={[-0.782, 2.923, 9.956]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials["Material.001"]}
        position={[-9.97, 10.362, 8.62]}
        scale={[4.709, 7.01, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials.bed_m_inst}
        position={[10.259, 2.833, 3.443]}
        scale={0.025}
      />
      <mesh
        ref={windowRef}
        castShadow
        receiveShadow
        geometry={nodes.Object_25.geometry}
        material={windowMaterial}
        position={[10.093, 7.054, 13.394]}
        rotation={[-Math.PI, 0.003, -Math.PI]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_31.geometry}
        material={materials.blinds_m_Inst}
        position={[10.156, -0.379, 12.953]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_33.geometry}
        material={materials.switch_m_Inst}
        position={[4.234, 6.099, 7.289]}
        rotation={[-Math.PI, 1.509, -Math.PI]}
        scale={0.04}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_35.geometry}
        material={materials.lampholder_m}
        position={[10.212, 10.021, 5.107]}
        scale={0.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_38.geometry}
        material={materials.bulb_base_m}
        position={[10.238, 9.798, 5.127]}
        scale={0.025}
      />
    </group>
  );
}

useGLTF.preload("/project-one-transformed.glb");
