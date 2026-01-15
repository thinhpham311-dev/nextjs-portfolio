import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

export default function AmbientLight({ sunRef }) {
  const hemiRef = useRef()
  const sunDir = new THREE.Vector3()

  useFrame(() => {
    if (!sunRef.current || !hemiRef.current) return

    // lấy hướng sun
    sunRef.current.getWorldPosition(sunDir)

    // Y càng cao → trời sáng hơn
    const intensity = THREE.MathUtils.clamp(
      sunDir.y * 0.5 + 0.6,
      0.25,
      0.7
    )

    hemiRef.current.intensity = intensity
  })

  return (
    <hemisphereLight
      ref={hemiRef}
      skyColor="#ffdcb2"
      groundColor="#2b2b2b"
      intensity={0.45}
    />
  )
}
