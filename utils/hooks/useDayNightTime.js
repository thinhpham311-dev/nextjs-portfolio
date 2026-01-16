"use client"

import { useEffect, useState } from "react"

export default function useDayNightTime() {
  const [hour, setHour] = useState(new Date().getHours())

  useEffect(() => {
    const interval = setInterval(() => {
      setHour(new Date().getHours())
    }, 60 * 1000) // cập nhật mỗi phút

    return () => clearInterval(interval)
  }, [])

  const isDay = hour >= 6 && hour < 18
  const isNight = !isDay

  return {
    hour,
    isDay,
    isNight,
  }
}
