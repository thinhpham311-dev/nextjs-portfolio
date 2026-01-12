import Link from "next/link"
import styled from "styled-components"
import { motion } from "framer-motion"

const HeaderWrapper = styled.header`
  z-index: 30;
  display: flex;
  height: 100px;
  width: 100%;
  align-items: center;
  padding-left: 0;
  padding-right: 0;
`

const Container = styled(motion.div).attrs(() => ({
  className: "container mx-auto flex items-center w-full justify-between gap-3",
}))``

const Logo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem; /* 5 in Tailwind */
`

const ContactLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  margin-right: 4px;

  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
  span {
    font-size: 13spx;
    font-weight: 500;
  }
`

export { HeaderWrapper, Container, Logo, ContactLink }
