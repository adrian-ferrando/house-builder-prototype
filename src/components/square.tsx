import { useRef, useState } from "react";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import type { Mesh } from "three";

export default function Square(props: ThreeElements["mesh"]) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>(null);

  // Controls
  const squareControls = useControls({
    color: "red",
  });

  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.x += delta;
  });

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial {...squareControls} />
    </mesh>
  );
}
