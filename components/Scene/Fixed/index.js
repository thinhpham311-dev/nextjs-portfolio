"use client"

import { useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import PlaneModel from "./PlaneModel"
import SunModel from "./SunModel"
import BirdModel from "./BirdModel"

export default function Fixed({sunRef}) {
  const planeRef = useRef()
  const { camera } = useThree()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (planeRef.current) {
      planeRef.current.rotation.x = Math.sin(t * 1.2) * 0.05
      planeRef.current.rotation.z = Math.sin(t * 0.9) * 0.06
    }
  })

  return (
    <primitive object={camera}>
      <group position={[0, 0, -2]}>
        <group ref={planeRef}>
          <PlaneModel scale={0.12} position={[0, -0.1, 0]} rotation={[0, Math.PI / 2, 0]} />
        </group>
        {/* ☀️ Sun */}
        <group ref={sunRef} position={[0.5, 0.5, 0]}>
          <SunModel scale={0.11} />
        </group>

        {/* 🐦 Bird */}
        <group position={[0, 0.3, 0]}>
          <BirdModel scale={0.5} position={[0, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
        </group>
      </group>
    </primitive>
  )
}
