"use client"

import { useGLTF } from "@react-three/drei"
import { useEffect } from "react"
import * as THREE from "three"

export default function SunModel(props) {
  const { scene } = useGLTF("/models/the_sun.glb")

  useEffect(() => {
    scene.traverse((o) => {
      if (o.isMesh && o.material) {
        o.material.emissive = new THREE.Color("#ffb347")
        o.material.emissiveIntensity = 1.5
        o.material.toneMapped = false
        o.material.needsUpdate = true
      }
    })
  }, [scene])

  return <primitive object={scene} {...props} />
}
