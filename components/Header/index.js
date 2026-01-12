import Link from "next/link"
import Social from "@/components/Socials"
// framer motion
// variants
import { fadeIn } from "@/variants"
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
          <ContactLink href="tel:0702895474" passHref>
            <BsPhoneFill />
            <span> 0702895474</span>
          </ContactLink>

          <ContactLink href="mailto:thinhpham67ag@gmail.com" passHref>
            <MdEmail />
            <span> thinhpham67ag@gmail.com</span>
          </ContactLink>
        </Logo>
        <Social />
      </Container>
    </HeaderWrapper>
  )
}

export default Header
