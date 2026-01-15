import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"

export default function DireactionalLight({ sunRef }) {
const lightRef = useRef()
  const targetRef = useRef()

  useFrame(() => {
    if (!sunRef.current || !lightRef.current) return

    const sunPos = new THREE.Vector3()
    sunRef.current.getWorldPosition(sunPos)

    lightRef.current.position.copy(sunPos)

    // 🎯 target vào Island center
    lightRef.current.target.position.set(0, 0.3, 0)
    lightRef.current.target.updateMatrixWorld()
  })


  return ( <>
    <directionalLight
        ref={lightRef}
        intensity={2.6}
        color="#ffddaa"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <object3D ref={targetRef} />
    </>
  )
}
