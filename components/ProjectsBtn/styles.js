// next
import Image from "next/image"
import Link from "next/link"

// icons
import { HiArrowRight } from "react-icons/hi2"

// styled-components
import styled, { keyframes } from "styled-components"

/* ---------- Animations ---------- */
const spinSlow = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

/* ---------- Styled Components ---------- */
const ButtonLink = styled(Link)`
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 150px;

  background-image: url("/circleStar.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 1280px) {
    margin-left: 0;
    width: 185px;
    height: 185px;
  }

  &:hover svg {
    transform: translateX(8px);
  }
`

const RotatingText = styled(Image)`
  width: 100%;
  height: 100%;
  max-width: 115px;
  max-height: 120px;
  animation: ${spinSlow} 12s linear infinite;

  @media (min-width: 1280px) {
    max-width: 141px;
    max-height: 148px;
  }
`

const ArrowIcon = styled(HiArrowRight)`
  position: absolute;
  font-size: 2.25rem;
  transition: transform 0.3s ease;
`

export { ButtonLink, RotatingText, ArrowIcon }
