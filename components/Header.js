import Link from "next/link"
import Social from "./Socials"
//framer motion
import { motion } from "framer-motion"

//variants
import { fadeIn } from "../variants"

//icons
import { BsPhoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"

const Header = () => {
  return (
    <header className="z-30 flex h-[100px] w-full items-center xl:px-0">
      <motion.div
        variants={fadeIn("down", 1)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="container mx-auto flex flex-col items-center justify-between gap-3 xl:flex-row"
      >
        <div className="logo flex flex-wrap justify-center gap-x-5">
          <Link href="tel:0702895474" className="flex items-center text-lg">
            <BsPhoneFill className="mr-2" />{" "}
            <span className="mr-1 text-[13px] font-thin"> 0702895474</span>
          </Link>
          <Link href="" className="flex items-center text-lg">
            <MdEmail className="mr-2" />{" "}
            <span className="mr-1 text-[13px] font-thin"> thinhpham67ag@gmail.com</span>
          </Link>
        </div>
        <Social />
      </motion.div>
    </header>
  )
}

export default Header
