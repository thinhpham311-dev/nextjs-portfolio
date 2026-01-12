//next image
import Image from "next/image"

//next link
import Link from "next/link"

// icons
import { HiArrowRight } from "react-icons/hi2"

const ProjectsBtn = () => {
  return (
    <Link
      href="/project"
      className="group relative mx-auto flex h-[150px] w-[150px] items-center justify-center bg-circleStar bg-cover bg-center bg-no-repeat xl:mx-0 xl:h-[185px] xl:w-[185px]"
    >
      <Image
        src="/rounded-text.png"
        className="h-full max-h-[120px] w-full max-w-[115px] animate-spin-slow xl:max-h-[148px] xl:max-w-[141px]"
        height={148}
        width={141}
        alt=""
      />
      <HiArrowRight className="absolute text-4xl transition-all duration-300 group-hover:translate-x-2" />
    </Link>
  )
}

export default ProjectsBtn
