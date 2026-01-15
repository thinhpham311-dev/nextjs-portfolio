import Image from "next/image"
import { Wrapper, ImageWrapper } from "./styles"

const Bulb = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src="/bulb.png" width={260} height={200} alt="bulb" />
      </ImageWrapper>
    </Wrapper>
  )
}

export default Bulb
