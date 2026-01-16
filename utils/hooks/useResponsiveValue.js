import { useMemo } from "react"
import useResponsive from "./useResponsive"

export function useResponsiveValue(values) {
  const { isMobile } = useResponsive()

  return useMemo(() => {
    return isMobile ? values.mobile : values.desktop
  }, [isMobile, values])
}
