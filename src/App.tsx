import { Environment, OrbitControls, Text } from "@react-three/drei";
import Aquarium from "./Model/Aquarium";
import Light from "./Light";

function App() {
  return (
    <>
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
      <Aquarium />

      <Text
        font="/Giants-Inline.ttf"
        scale={0.25}
        maxWidth={10}
        lineHeight={0.75}
        textAlign="right"
        position={[1.5, -1.3, -1]}
        rotation={[0, Math.PI / 2, 0]}
      >
        PORSCHE 911
      </Text>

      <Environment frames={Infinity} resolution={256}>
        <Light />
      </Environment>
    </>
  );
}

export default App;
