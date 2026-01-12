import Image from "next/image"
import { BulbWrapper, ImageWrapper } from "./styles"

const Bulb = () => {
  return (
    <BulbWrapper>
      <ImageWrapper>
        <Image src="/bulb.png" width={260} height={200} alt="bulb" />
      </ImageWrapper>
    </BulbWrapper>
  )
}

export default Bulb
