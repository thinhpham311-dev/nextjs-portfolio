import Image from "next/image"
import { Wrapper } from "./styles"

const TopLeftImg = () => {
  return (
    <Wrapper>
      <Image src="/top-left-img.png" width={400} height={400} alt="" priority />
    </Wrapper>
  )
}

export default TopLeftImg
