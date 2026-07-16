"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function Blocks() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
    }
  });

  // A small broken-then-rebuilt wall corner: staggered stone blocks
  const blocks: { pos: [number, number, number]; size: [number, number, number] }[] = [
    { pos: [0, -1.2, 0], size: [2.6, 0.55, 1] },
    { pos: [-0.7, -0.6, 0.1], size: [1.15, 0.5, 0.95] },
    { pos: [0.65, -0.6, -0.05], size: [1.25, 0.5, 0.9] },
    { pos: [-0.1, 0.02, 0], size: [1.9, 0.5, 1] },
    { pos: [-0.55, 0.62, 0.15], size: [1.05, 0.48, 0.85] },
    { pos: [0.75, 0.65, -0.1], size: [0.95, 0.48, 0.8] },
    { pos: [0.05, 1.25, 0.05], size: [1.4, 0.5, 0.9] },
  ];

  return (
    <group ref={group}>
      {blocks.map((b, i) => (
        <Float
          key={i}
          speed={1.4}
          rotationIntensity={0.15}
          floatIntensity={0.5 + (i % 3) * 0.15}
        >
          <mesh position={b.pos} castShadow receiveShadow>
            <boxGeometry args={b.size} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#12160f" : "#1e241d"}
              roughness={0.55}
              metalness={0.15}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export function CornerstoneScene() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [3.4, 1.6, 4.2], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.65} color="#ffffff" />
        <directionalLight position={[4, 5, 2]} intensity={1.1} color="#ffffff" />
        <directionalLight position={[-4, -2, -3]} intensity={0.5} color="#198754" />
        <directionalLight position={[2, -3, 3]} intensity={0.35} color="#d97706" />
        <Suspense fallback={null}>
          <Blocks />
        </Suspense>
      </Canvas>
    </div>
  );
}
