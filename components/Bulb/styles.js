import styled from "styled-components"

const Wrapper = styled.div`
  position: absolute;
  left: -9rem; /* -36 => 36 * 0.25rem = 9rem */
  bottom: -3rem; /* -12 => 12 * 0.25rem = 3rem */
  transform: rotate(12deg);
  mix-blend-mode: color-dodge;
  z-index: 10;
  width: 200px;
  animation: pulse 0.75s infinite;

  @media (min-width: 1280px) {
    width: 260px;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export { Wrapper, ImageWrapper }
