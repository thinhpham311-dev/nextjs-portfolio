"use client"
import { useEffect, useRef } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"
import * as THREE from "three"

export function Sun({ isDay, isRotating, ...props }) {
  const ref = useRef()
  const { scene, animations } = useGLTF("/models/sun.glb")
  const { actions } = useAnimations(animations, ref)

  // 🌞 / 🌙 đổi màu theo thời gian
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: isDay ? "#FDB813" : "#E6F0FF",
          emissive: isDay ? "#FDB813" : "#B0C4FF",
          emissiveIntensity: isDay ? 6 : 1.2,
          roughness: isDay ? 0.5 : 0.8,
          metalness: isDay ? 0.1 : 0.0,
        })
      }
    })
  }, [scene, isDay])

  // animation chỉ chạy ban ngày
  useEffect(() => {
    if (!actions?.MorphBake) return

    if (isDay && isRotating) {
      actions.MorphBake.play()
    } else {
      actions.MorphBake.stop()
    }
  }, [actions, isDay, isRotating])

  return (
    <group ref={ref} {...props}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload("/models/sun.glb")
