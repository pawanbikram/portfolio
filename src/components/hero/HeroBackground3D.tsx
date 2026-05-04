import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function RidgeField() {
  const wire = useRef<THREE.Mesh>(null);
  const fill = useRef<THREE.Mesh>(null);
  const wireGeom = useRef<THREE.PlaneGeometry>(null);
  const fillGeom = useRef<THREE.PlaneGeometry>(null);
  const baseWirePos = useRef<Float32Array | null>(null);
  const baseFillPos = useRef<Float32Array | null>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    const wireGeometry = wireGeom.current;
    const fillGeometry = fillGeom.current;
    if (!wireGeometry || !fillGeometry) return;

    const update = (
      geometry: THREE.PlaneGeometry,
      base: { current: Float32Array | null }
    ) => {
      const pos = geometry.attributes.position.array as Float32Array;
      if (!base.current) {
        base.current = new Float32Array(pos.length);
        base.current.set(pos);
      }
      const basePos = base.current;
      for (let i = 0; i < pos.length; i += 3) {
        const x = basePos[i];
        const y = basePos[i + 1];
        const z0 = basePos[i + 2];
        const r = Math.sqrt(x * x + y * y);
        const wave =
          Math.sin(r * 1.25 - t * 0.65) * 0.12 +
          Math.sin((x * 0.9 + t * 0.45) * 1.6) * 0.06 +
          Math.cos((y * 0.8 - t * 0.35) * 1.7) * 0.05;
        pos[i + 2] = z0 + wave;
      }
      geometry.attributes.position.needsUpdate = true;
      geometry.computeVertexNormals();
    };

    update(wireGeometry, baseWirePos);
    update(fillGeometry, baseFillPos);

    if (wire.current) {
      wire.current.rotation.z = Math.sin(t * 0.12) * 0.04;
    }
    if (fill.current) {
      fill.current.rotation.z = Math.sin(t * 0.12) * 0.04;
    }
  });

  return (
    <group position={[0.2, -1.05, 0]} rotation={[-0.95, 0, 0]}>
      <mesh ref={fill}>
        <planeGeometry ref={fillGeom} args={[7.6, 4.2, 120, 64]} />
        <meshStandardMaterial
          color="#0b122a"
          emissive="#0b122a"
          emissiveIntensity={0.55}
          roughness={0.9}
          metalness={0}
          transparent
          opacity={0.55}
        />
      </mesh>
      <mesh ref={wire}>
        <planeGeometry ref={wireGeom} args={[7.6, 4.2, 120, 64]} />
        <meshStandardMaterial
          wireframe
          color="#93c5fd"
          emissive="#2563eb"
          emissiveIntensity={0.75}
          roughness={0.6}
          metalness={0}
          transparent
          opacity={0.95}
        />
      </mesh>
      <mesh rotation={[0.9, 0, 0]} position={[0, -1.15, 0]}>
        <ringGeometry args={[1.8, 2.8, 120]} />
        <meshBasicMaterial
          color="#fca5a5"
          transparent
          opacity={0.085}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 3, 2]} intensity={1.25} />
      <pointLight position={[-4, -1, 1]} intensity={1.0} color="#2563eb" />
      <pointLight position={[4, 1, 1]} intensity={0.8} color="#dc2626" />
      <Suspense fallback={null}>
        <RidgeField />
      </Suspense>
    </>
  );
}

export default function HeroBackground3D() {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) {
    return (
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_40%_0%,rgba(220,38,38,0.20),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(85%_60%_at_82%_0%,rgba(37,99,235,0.18),transparent_58%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/15 via-slate-950/75 to-slate-950" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ fov: 55, position: [0, 0, 5.2] }}
      >
        <Scene />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/70 to-slate-950" />
    </div>
  );
}
