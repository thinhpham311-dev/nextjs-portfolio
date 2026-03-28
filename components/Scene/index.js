// components/Scene/index.js
"use client"

import { useState, Suspense, useMemo } from "react"
import { Canvas } from "@react-three/fiber"
import { motion } from "framer-motion"
import Loader from "../Loader"
import { Island, Plane, Sun, Bird } from "@/models"
import { useResponsiveValue } from "@/utils/hooks"
import { fadeIn } from "@/variants"

function useSceneResponsive() {
  return {
    biplaneScale: useResponsiveValue({ mobile: [1.5, 1.5, 1.5], desktop: [3, 3, 3] }),
    biplanePosition: useResponsiveValue({ mobile: [0, -1.5, 0], desktop: [0, -4, -4] }),
    islandScale: useResponsiveValue({ mobile: [0.9, 0.9, 0.9], desktop: [1, 1, 1] }),
    sunScale: useResponsiveValue({ mobile: [0.8, 0.8, 0.8], desktop: [2, 2, 2] }),
    sunPosition: useResponsiveValue({ mobile: [10, 15, -20], desktop: [25, 25, -40] }),
    birdPosition: useResponsiveValue({ mobile: [-3, 2, -8], desktop: [-8, 6, -18] }),
    birdScale: useResponsiveValue({ mobile: [0.6, 0.6, 0.6], desktop: [1, 1, 1] }),
  }
}

const ISLAND_POSITION = [0, -6.5, -43.4]
const ISLAND_ROTATION = [0.1, 4.7077, 0]
const PLANE_ROTATION = [0, 20.1, 0]
const SUN_ROTATION = [0, 0, 0]
const BIRD_ROTATION = [0, Math.PI / 4, 0]

function getIsDay() {
  const hour = new Date().getHours()
  return hour >= 6 && hour < 18
}

function SceneLights({ isDay }) {
  return (
    <>
      <ambientLight intensity={isDay ? 0.4 : 0.15} />
      <directionalLight
        position={[0, 30, -40]}
        intensity={isDay ? 5 : 1.2}
        color={isDay ? "#ffffff" : "#b0c4ff"}
      />
      <pointLight position={[10, 5, 10]} intensity={2} />
      <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
      <hemisphereLight skyColor="#b1e1ff" groundColor="#080820" intensity={0.8} />
    </>
  )
}

export default function Scene({ setCurrentStage }) {
  const [isRotating, setIsRotating] = useState(false)
  const isDay = useMemo(getIsDay, [])
  const {
    biplaneScale, biplanePosition, islandScale,
    sunScale, sunPosition, birdPosition, birdScale
  } = useSceneResponsive()

  return (
    <motion.div
      variants={fadeIn("up", 0.6)}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ duration: 1, ease: "easeInOut" }}
      className="absolute -right-[15%] top-0 hidden h-full max-h-[700px] w-full max-w-[70%] xl:flex"
    >
      <Canvas camera={{ near: 0.1, far: 1000 }} gl={{ toneMappingExposure: 1.2 }}>
        <Suspense fallback={<Loader />}>
          <SceneLights isDay={isDay} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={ISLAND_POSITION}
            rotation={ISLAND_ROTATION}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={PLANE_ROTATION}
            scale={biplaneScale}
          />
          <Sun
            isDay={isDay}
            position={sunPosition}
            scale={sunScale}
            rotation={SUN_ROTATION}
          />
          <Bird
            position={birdPosition}
            scale={birdScale}
            rotation={BIRD_ROTATION}
          />
        </Suspense>
      </Canvas>
    </motion.div>
  )
}