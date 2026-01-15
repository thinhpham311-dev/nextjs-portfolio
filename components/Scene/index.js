"use client"
import { useRef } from "react"
import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import Static from "./Static"
import Fixed from "./Fixed"
import DireactionalLight from "./DireactionalLight"
import AmbientLight from "./AmbientLight"
export default function Scene() {
  const sunRef = useRef()
  return (
    <Canvas
      camera={{ position: [0, 2, 3.3], fov: 38 }}
      gl={{
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 0.6,
      }}
      shadows
    >
      {/* ánh sáng nền rất nhẹ */}
      <AmbientLight sunRef={sunRef} />

      {/* ☀️ LIGHT THEO SUN */}
      <DireactionalLight sunRef={sunRef} />

      <Environment preset="sunset" intensity={0.25} />

      <Fixed sunRef={sunRef} />
      <Static />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}
