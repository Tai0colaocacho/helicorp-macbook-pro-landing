"use client";

import {
  Bounds,
  Center,
  ContactShadows,
  Environment,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo } from "react";

type MacBook3DCanvasProps = {
  modelUrl: string;
};

function MacBookModel({ modelUrl }: MacBook3DCanvasProps) {
  const { scene } = useGLTF(modelUrl);

  const clonedScene = useMemo(() => {
    return scene.clone(true);
  }, [scene]);

  return (
    <Bounds key={modelUrl} fit clip observe margin={1.15}>
      <Center>
        <primitive object={clonedScene} dispose={null} />
      </Center>
    </Bounds>
  );
}

export default function MacBook3DCanvas({ modelUrl }: MacBook3DCanvasProps) {
  return (
    <Canvas
      key={modelUrl}
      camera={{
        position: [0, 1.2, 5.2],
        fov: 38,
      }}
      dpr={[1, 1.5]}
      frameloop="demand"
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1.15} />
        <hemisphereLight args={["#ffffff", "#94a3b8", 1.35]} />

        <directionalLight position={[3, 4, 5]} intensity={2.4} />
        <directionalLight position={[-4, 2, -3]} intensity={1} />
        <directionalLight position={[0, 3, -4]} intensity={0.85} />

        <Environment preset="city" />

        <MacBookModel key={modelUrl} modelUrl={modelUrl} />

        <ContactShadows
          position={[0, -1.08, 0]}
          opacity={0.28}
          scale={8}
          blur={2.8}
          far={3}
        />

        <OrbitControls
          makeDefault
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 3.4}
          maxPolarAngle={Math.PI / 1.95}
          rotateSpeed={0.55}
          dampingFactor={0.08}
          enableDamping
        />
      </Suspense>
    </Canvas>
  );
}