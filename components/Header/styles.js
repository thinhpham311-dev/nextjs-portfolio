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
  flex-wrap: nowrap;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 1024px) {
    gap: 0.5rem;
  }
`

const ContactLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.3s ease;

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 0.5px solid #ffffff;
    transition: all 0.5s ease;

    &:hover {
      background-color: #ffffff;
    }
  }
`

const ContactLinkText = styled.span`
  font-size: 13px;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
  @media (max-width: 1024px) {
    display: none;
  }
`

export { HeaderWrapper, Container, Logo, ContactLink, ContactLinkText }
