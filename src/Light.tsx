import { useRef } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";
import { Lightformer } from "@react-three/drei";

function Light() {
  const group = useRef<Group>(null!);
  const positions = [2, 0, 2, 0, 2, 0, 2, 0];

  useFrame(
    (state, delta) =>
      (group.current.position.z += delta * 10) > 20 &&
      (group.current.position.z = -60)
  );
  return (
    <>
      <Lightformer
        intensity={0.5}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[2, 5, 10]}
      />
      <Lightformer
        intensity={0.5}
        rotation-y={Math.PI / 2}
        position={[-5, 1, -1]}
        scale={[5, 2, 1]}
      />
      <Lightformer
        intensity={0.5}
        rotation-y={-Math.PI / 2}
        position={[10, 1, 0]}
        scale={[5, 2, 1]}
      />

      <group ref={group}>
        {positions.map((x, i) => (
          <Lightformer
            key={i}
            form="circle"
            intensity={1.5}
            rotation={[Math.PI / 2, 0, 0]}
            position={[x, 2, i * 4]}
            scale={[3, 1, 1]}
          />
        ))}
      </group>
      <Lightformer
        form="circle"
        intensity={1.2}
        rotation={[Math.PI / -3, Math.PI / 5, Math.PI / -2]}
        position={[2.2, 2.2, 2.2]}
        scale={[2, 2, 2]}
      />
    </>
  );
}

export default Light;
