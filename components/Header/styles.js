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

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem; /* 3 in Tailwind */
  margin: 0 auto;

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`

const Logo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem; /* 5 in Tailwind */
`

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 1rem; /* text-lg in Tailwind */
  margin-right: 0.25rem;

  span {
    margin-left: 0.25rem;
    font-size: 13px;
    font-weight: 100;
  }
`

export { HeaderWrapper, Container, Logo, ContactLink }
