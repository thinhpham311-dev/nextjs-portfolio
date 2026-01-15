"use client"

import { useRef } from "react"
import IslandModel from "./IsLandModel"
export default function Static() {
  const ref = useRef()

  return (
    <group ref={ref}>
      <IslandModel />
    </group>
  )
}
