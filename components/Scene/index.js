"use client"

import { useState, Suspense, useMemo } from "react"
import { Canvas } from "@react-three/fiber"
import { Island, Plane, Sun, Bird } from "@/models"
import { useResponsiveValue } from "@/utils/hooks"
const getIsDay = () => {
  const hour = new Date().getHours()
  return hour >= 6 && hour < 18
}

export default function Scene() {
  const [currentStage, setCurrentStage] = useState(1)
  const [isRotating, setIsRotating] = useState(false)
  const isDay = useMemo(getIsDay, [])

  const biplaneScale = useResponsiveValue({
    mobile: [1.5, 1.5, 1.5],
    desktop: [3, 3, 3],
  })

  const biplanePosition = useResponsiveValue({
    mobile: [0, -1.5, 0],
    desktop: [0, -4, -4],
  })

  const islandScale = useResponsiveValue({
    mobile: [0.9, 0.9, 0.9],
    desktop: [1, 1, 1],
  })

  const islandPosition = [0, -6.5, -43.4]

  const sunScale = useResponsiveValue({
    mobile: [0.8, 0.8, 0.8],
    desktop: [2, 2, 2],
  })
  const sunPosition = useResponsiveValue({
    mobile: [10, 15, -20],
    desktop: [25, 25, -40],
  })

  const sunIntensity = useResponsiveValue({
    mobile: 3.5,
    desktop: 5.5,
  })

  const birdPosition = useResponsiveValue({
  mobile: [-3, 2, -8],
  desktop: [-8, 6, -18],
})

const birdScale = useResponsiveValue({
  mobile: [0.6, 0.6, 0.6],
  desktop: [1, 1, 1],
})

  return (
    <Canvas camera={{ near: 0.1, far: 1000 }} gl={{ toneMappingExposure: 1.2 }}>
      <Suspense fallback={null}>
       <ambientLight intensity={isDay ? 0.4 : 0.15} />

<directionalLight
  position={[0, 30, -40]}
  intensity={isDay ? 5 : 1.2}
  color={isDay ? "#ffffff" : "#b0c4ff"}
/>

        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#080820" intensity={0.8} />

        <Island
          isRotating={isRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
          position={islandPosition}
          rotation={[0.1, 4.7077, 0]}
          scale={islandScale}
        />

        <Plane
          isRotating={isRotating}
          position={biplanePosition}
          rotation={[0, 20.1, 0]}
          scale={biplaneScale}
        />

        <Sun
        isDay={isDay}
          position={sunPosition}
          scale={sunScale}
          rotation={[0, 0, 0]} // Sun không cần quay
        />

        <Bird   position={birdPosition}
  scale={birdScale}
  rotation={[0, Math.PI / 4, 0]} />
      </Suspense>
    </Canvas>
  )
}
