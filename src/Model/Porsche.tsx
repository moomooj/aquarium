import { useGLTF } from "@react-three/drei";
import { applyProps } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  scene: any;
  nodes: any;
  materials: any;
};

function Porsche() {
  const { scene, nodes, materials } = useGLTF(
    "/911-transformed.glb"
  ) as GLTFResult;
  useLayoutEffect(() => {
    Object.values(nodes).forEach(
      (node: any) =>
        node.isMesh && (node.receiveShadow = node.castShadow = true)
    );
    applyProps(materials.rubber, {
      color: "#6a6767",
      roughness: 0.6,
      roughnessMap: null,
      normalScale: [4, 4],
    });
    applyProps(materials.window, {
      color: "#8a8989",
      roughness: 1,
      metalness: 0.1,
      clearcoat: 1,
    });
    applyProps(materials.coat, {
      envMapIntensity: 4,
      roughness: 0.5,
      metalness: 1,
    });
    applyProps(materials.paint, {
      envMapIntensity: 2,
      roughness: 0.45,
      metalness: 0.8,
      color: "#555",
    });
  }, [nodes, materials]);
  return (
    <primitive
      object={scene}
      scale={1}
      rotation={[Math.PI / 11, Math.PI / 4, Math.PI / -7]}
    />
  );
}
useGLTF.preload("/911-transformed.glb");
export default Porsche;
