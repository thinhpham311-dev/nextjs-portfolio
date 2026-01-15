// icons
import { BsPhoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
// styled-components
import { Wrapper, InfoInnner, ContactLink } from "./styles"
import Avatar from "@/components/Avatar"

const InfoSection = () => {
  return (
    <Wrapper>
      <Avatar _w={50} _h={50} source="/avatar-bg-thinhpham.jpg" />
      <InfoInnner>
        <ContactLink href="tel:0702895474" passHref>
          <BsPhoneFill />
          <span> 0702895474</span>
        </ContactLink>

        <ContactLink href="mailto:thinhpham67ag@gmail.com" passHref>
          <MdEmail />
          <span> thinhpham67ag@gmail.com</span>
        </ContactLink>
      </InfoInnner>
    </Wrapper>
  )
}

export default InfoSection
