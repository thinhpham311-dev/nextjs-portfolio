import styled, { css } from "styled-components"
import { motion } from "framer-motion"
import Link from "next/link"

export const NavContainer = styled.nav`
  z-index: 10;
  margin: 0 auto;
  height: 100px;
  display: flex;
  align-items: center;
  width: 70%;
  drop-shadow: 2xl;

  @media (min-width: 768px) { width: 50%; }
  @media (min-width: 1024px) { width: 30%; }
  @media (min-width: 1280px) { width: 25%; }
`

export const MotionWrapper = styled(motion.div)`
  width: 100%;
  padding: 0 0.5rem;
  backdrop-filter: blur(6px);
  border-radius: 9999px;
  background: rgba(255,255,255,0.3);
`

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  height: 100%;
`

export const NavItem = styled.li`
  border-radius: 9999px;
  padding: 0.5rem 0;
  color: white;
  transition: 0.3s;
  
  &:hover {
    color: var(--accent);
  }
`

export const NavLink = styled(Link)`
  display: block;
  padding: 10px;
  border-radius: 9999px;
  filter: drop-shadow(0 0 8px rgba(0,0,0,0.4));
  transition: 0.3s;

  ${({ $active }) =>
    $active &&
    css`
      background: white;
      color: var(--accent);
    `}
  
  span {
    font-size: 1.125rem;
  }
`
