"use client"
import { useEffect, useState } from "react"

export default function useResponsive() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const update = () => setWidth(window.innerWidth)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return {
    width,
    isMobile: width < 768,
    isDesktop: width >= 768,
  }
}
