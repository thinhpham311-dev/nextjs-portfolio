import Image from "next/image"
import styled, { keyframes } from "styled-components"

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
  width: 200px;
  mix-blend-mode: color-dodge;
  animation: ${pulse} 0.75s infinite;

  @media (min-width: 1280px) {
    width: 300px;
  }
`

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`

export { Wrapper, StyledImage }
