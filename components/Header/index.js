import Link from "next/link"
import Social from "./Socials"
// framer motion
import { motion } from "framer-motion"
// variants
import { fadeIn } from "../variants"
// icons
import { BsPhoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
// styled-components
import { HeaderWrapper, Container, Logo, ContactLink } from "./styles"

const Header = () => {
  return (
    <HeaderWrapper>
      <Container variants={fadeIn("down", 1)} initial="hidden" animate="show" exit="hidden">
        <Logo>
          <Link href="tel:0702895474" passHref>
            <ContactLink>
              <BsPhoneFill /> 0702895474
            </ContactLink>
          </Link>
          <Link href="mailto:thinhpham67ag@gmail.com" passHref>
            <ContactLink>
              <MdEmail /> thinhpham67ag@gmail.com
            </ContactLink>
          </Link>
        </Logo>
        <Social />
      </Container>
    </HeaderWrapper>
  )
}

export default Header
