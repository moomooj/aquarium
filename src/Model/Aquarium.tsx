import * as THREE from "three";
import {
  Float,
  Instances,
  MeshTransmissionMaterial,
  useGLTF,
} from "@react-three/drei";
import { GLTF } from "three-stdlib";
import Porsche from "./Porsche";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
};

function Aquarium(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("./shapes-transformed.glb") as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh castShadow scale={[2, 2, 2.5]} geometry={nodes.Cube.geometry}>
        <MeshTransmissionMaterial
          backside
          samples={10}
          thickness={1.5}
          chromaticAberration={0}
          anisotropy={0}
          distortion={0.05}
          distortionScale={0.1}
          temporalDistortion={0}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
        />
      </mesh>

      <Float>
        <Porsche />
        <Instances renderOrder={-1000}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial depthTest={false} />
        </Instances>
      </Float>
    </group>
  );
}
useGLTF.preload("./shapes-transformed.glb");

export default Aquarium;
