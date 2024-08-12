export function Floor(props: any) {
  return (
    <mesh {...props} rotation-x={-Math.PI / 2} receiveShadow>
      <circleGeometry args={[50]} />
      <meshStandardMaterial />
    </mesh>
  );
}
