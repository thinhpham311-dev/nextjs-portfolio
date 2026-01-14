import Link from "next/link"
import Social from "@/components/Socials"
// framer motion
// variants
import { fadeIn } from "@/variants"
// icons
import { BsPhoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
// styled-components
import { HeaderWrapper, Container, Logo, ContactLink, ContactLinkText } from "./styles"

const Header = () => {
  return (
    <HeaderWrapper>
      <Container variants={fadeIn("down", 1)} initial="hidden" animate="show" exit="hidden">
        <Logo>
          <ContactLink href="tel:0702895474" passHref>
            <BsPhoneFill />
            <ContactLinkText> 0702895474</ContactLinkText>
          </ContactLink>

          <ContactLink href="mailto:thinhpham67ag@gmail.com" passHref>
            <MdEmail />
            <ContactLinkText> thinhpham67ag@gmail.com</ContactLinkText>
          </ContactLink>
        </Logo>
        <Social />
      </Container>
    </HeaderWrapper>
  )
}

export default Header
