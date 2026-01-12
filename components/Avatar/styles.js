import styled from "styled-components"
import { motion } from "framer-motion"

const Wrap = styled.div`
  height: 400px;
  width: 400px;
  margin: 0 auto;
  border-radius: 9999px;
  cursor: pointer;
`

const AvatarContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !["isHovered", "isLeaving"].includes(prop),
})`
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 9999px;
  overflow: hidden;
  border: 8px solid #2e0854;
  box-shadow: 0 0 20px 5px rgba(46, 8, 84, 0.7);
  transition: background-color 0.5s;

  background-color: ${({ isHovered, isLeaving }) =>
    isHovered ? "white" : isLeaving ? "rgba(0,0,0,0.7)" : "transparent"};
`
const OverlayControls = styled(motion.div)`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
`

const SocialIcon = styled(motion.a)`
  font-size: 1.875rem;
  color: white;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 9999px;
  transition: all 0.3s;

  &:hover {
    background: white;
    color: black;
  }
`

const AboutButton = styled(motion.button)`
  margin-top: 1rem;
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  border: 1px solid white;
  color: white;
  background: transparent;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    background: white;
    color: black;
  }
`

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    transition: transform 0.5s;
  }

  &:hover img {
    transform: scale(1.1);
  }
`

export { Wrap, AvatarContainer, OverlayControls, SocialIcon, AboutButton, ImageWrapper }
