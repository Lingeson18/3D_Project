import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stage,
  Environment,
  ContactShadows,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense } from "react";
import Car from "./Car";

export default function Experience({ carColor }) {
  return (
    <Canvas shadows dpr={[1, 2]}>
      <PerspectiveCamera makeDefault position={[5, 2, 5]} fov={35} />

      <Suspense fallback={null}>
        <Stage
          intensity={0.5}
          environment="city"
          adjustCamera={1.5}
          contactShadow={false}
        >
          <Car color={carColor} />
        </Stage>

        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.01, 0]}
          receiveShadow
        >
          <planeGeometry args={[100, 100]} />
          <shadowMaterial transparent opacity={0.4} />
        </mesh>

        <ContactShadows
          position={[0, 0, 0]}
          opacity={0.4}
          scale={20}
          blur={2.4}
          far={0.8}
        />
      </Suspense>

      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1.75}
        enablePan={false}
        enableZoom={true}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}
