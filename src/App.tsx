import { Environment, OrbitControls } from "@react-three/drei";
import Aquarium from "./Model/Aquarium";
import Light from "./Light";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

function App() {
  const Mobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  return (
    <Canvas
      dpr={[1, 3]}
      shadows
      camera={{
        fov: 35,
        near: 1,
        far: 100,
        position: [Mobile() ? 20 : 15, 5, 2.7],
      }}
    >
      <color args={["#a40a0a"]} attach="background" />
      <spotLight
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
      />
      <OrbitControls makeDefault />
      <Suspense
        fallback={
          <mesh position={[0, 0, 0]} scale={[4, 4, 5]}>
            <boxGeometry args={[1, 1, 1, 2, 5, 5]} />
            <meshBasicMaterial wireframe color="white" />
          </mesh>
        }
      >
        <Aquarium />
      </Suspense>

      <Environment frames={Infinity} resolution={256}>
        <Light />
      </Environment>
    </Canvas>
  );
}

export default App;
