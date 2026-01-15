"use client"

import { useGLTF, useAnimations } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { useFrame } from "@react-three/fiber"

export default function BirdModel(props) {
  const group = useRef()
  const { scene, animations } = useGLTF("/models/bird.glb")
  const { actions } = useAnimations(animations, scene)

  // chạy animation vỗ cánh (nếu có)
  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.reset().play()
      })
    }
  }, [actions])

  // bay lượn NHẸ tại chỗ
  useFrame(({ clock }) => {
    if (!group.current) return

    const t = clock.getElapsedTime()

    group.current.position.y = Math.sin(t * 1.2) * 0.08
    group.current.rotation.y = Math.sin(t * 0.4) * 0.2
  })

  return (
    <group ref={group} {...props}>
      <primitive object={scene} />
    </group>
  )
}

