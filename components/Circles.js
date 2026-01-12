import Image from "next/image"

const Circles = () => {
  return (
    <div className="absolute bottom-0 right-0 z-0 w-[200px] animate-pulse mix-blend-color-dodge duration-75 xl:w-[300px]">
      <Image src="/circles.png" height={200} width={260} alt="" className="h-full w-full" />
    </div>
  )
}

export default Circles
