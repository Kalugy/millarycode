// src/components/ButterflyWithParticles.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

const Butterfly = () => {
  const leftWingRef = useRef();
  const rightWingRef = useRef();

  // Animate wings
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (leftWingRef.current && rightWingRef.current) {
      leftWingRef.current.rotation.z = Math.sin(time * 4) * 0.4; // Left wing flapping
      rightWingRef.current.rotation.z = -Math.sin(time * 4) * 0.4; // Right wing flapping
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Body */}
      <mesh position={[0, 0, 0]} scale={[0.2, 1, 0.2]}>
        <boxGeometry />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Left Wing */}
      <mesh
        ref={leftWingRef}
        position={[-0.6, 0, 0]}
        rotation={[0, 0, Math.PI / 6]}
      >
        <planeGeometry args={[1.5, 2]} />
        <meshStandardMaterial color="purple" />
      </mesh>

      {/* Right Wing */}
      <mesh
        ref={rightWingRef}
        position={[0.6, 0, 0]}
        rotation={[0, 0, -Math.PI / 6]}
      >
        <planeGeometry args={[1.5, 2]} />
        <meshStandardMaterial color="pink" />
      </mesh>
    </group>
  );
};

const ParticleSystem = () => {
  const particleCount = 500; // Number of particles
  const particles = Array.from({ length: particleCount }, () => ({
    position: [
      Math.random() * 10 - 5, // X position
      Math.random() * 10 - 5, // Y position
      Math.random() * 10 - 5, // Z position
    ],
  }));

  return (
    <group>
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="white" />
        </mesh>
      ))}
    </group>
  );
};

const ButterflyWithParticles = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={50} depth={10} count={1000} factor={4} fade />
      <Butterfly />
      <ParticleSystem />
      <OrbitControls />
    </Canvas>
  );
};

export default ButterflyWithParticles;
