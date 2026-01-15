"use client"

import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export default function PlaneModel(props) {
  const { scene, nodes } = useGLTF("/models/toy_plane.glb")
  const propellerRef = useRef()

  useFrame((_, delta) => {
    if (propellerRef.current) {
      propellerRef.current.rotation.z += delta * 20 // 👈 tốc độ quay
    }
  })

  return (
    <primitive object={scene} {...props}>
      {/* gắn ref vào cánh quạt */}
      {nodes.Propeller && <primitive object={nodes.Propeller} ref={propellerRef} />}
    </primitive>
  )
}
