"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, Suspense } from "react";
import { OrbitControls, useGLTF, useAnimations, Environment } from "@react-three/drei";
import { Material, Mesh } from "three";

interface MaterialWithColor extends Material {
  color: {
    set: (color: string) => void;
  };
}

export const Model = () => {
  const mesh = useRef<Mesh>(null!);
  const { scene, animations } = useGLTF("/spheron.glb");
  const { actions } = useAnimations(animations, mesh);
  const color = "#89cff0";

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.x += 0.02;
  });

  useEffect(() => {
    if (actions?.MorphBake) {
      actions.MorphBake.timeScale = 0.5;
      actions.MorphBake.play();
    }
  }, [actions]);

  // Change material color
  useEffect(() => {
    scene.traverse((child) => {
      if (
        (child as Mesh).isMesh &&
        (child as Mesh).material &&
        "color" in (child as Mesh).material
      ) {
        const material = (child as Mesh).material as MaterialWithColor;
        material.color.set(color);
      }
    });
  }, [scene, color]);

  return (
    <mesh ref={mesh}>
      <primitive object={scene} />
    </mesh>
  );
};

export const ModelViewer = () => {
  return (
    <div className="flex h-1/2 items-center justify-center">
      <Canvas camera={{ position: [3, 3, 3], fov: 30 }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Environment preset="studio" />
        <OrbitControls enableZoom={false} target={[0, 0, 0]} />
      </Canvas>
    </div>
  );
};
