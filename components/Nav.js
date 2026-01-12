// icons
import Link from "next/link"
import { useRouter } from "next/router"
//framer motion
import { motion } from "framer-motion"

//variants
import { fadeIn } from "../variants"

//data
import { NAVBAR_DATA } from "../constants"

const Nav = () => {
  const router = useRouter()
  const data = NAVBAR_DATA
  return (
    <nav className="z-10 mx-auto flex h-[100px] w-[70%] items-center drop-shadow-2xl md:w-[50%] lg:w-[30%] xl:w-[25%]">
      <motion.div
        variants={fadeIn("up", 1)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="backdrop-blur-ms w-full rounded-full bg-white/30 px-2"
      >
        <ul className="flex h-full justify-between">
          {data.map((item) => (
            <li
              key={item.name}
              className={`rounded-full py-2 text-white transition-all duration-300 hover:text-accent`}
            >
              <Link
                href={item.path}
                className={`block rounded-full p-[10px] drop-shadow-2xl ${
                  (item.path === "/"
                    ? router.asPath === "/"
                    : router.asPath.startsWith(item.path)) && "bg-white text-accent"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  )
}

export default Nav
