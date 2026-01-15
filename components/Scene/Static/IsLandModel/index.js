"use client"

import { useGLTF } from "@react-three/drei"
import { useLayoutEffect, useRef } from "react"

import * as THREE from "three"

export default function IslandModel(props) {
  const { scene } = useGLTF("/models/foxs_islands.glb")
  const ref = useRef()

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(ref.current)
    const size = box.getSize(new THREE.Vector3())
    const maxAxis = Math.max(size.x, size.y, size.z)

    // Scale island về kích thước chuẩn
    const scale = 2 / maxAxis
    ref.current.scale.setScalar(scale)

    // Center model
    box.setFromObject(ref.current)
    const center = box.getCenter(new THREE.Vector3())
    ref.current.position.sub(center)
  }, [])

  return <primitive ref={ref} object={scene} {...props} />
}
