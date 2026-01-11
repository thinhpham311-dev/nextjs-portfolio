// icons
import Link from 'next/link'
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
  return <nav className="xl:w-[25%] z-10 lg:w-[30%] md:w-[50%] w-[70%] mx-auto drop-shadow-2xl h-[100px] flex items-center" >
    <motion.div variants={fadeIn('up', 1)} initial="hidden" animate="show" exit="hidden" className="w-full rounded-full backdrop-blur-ms bg-white/30 px-2">
      <ul className="flex justify-between h-full">
        {
          data.map((item) => <li key={item.name} className={`text-white hover:text-accent py-2 transition-all duration-300 rounded-full `}>
            <Link
              href={item.path}
              className={`p-[10px] drop-shadow-2xl rounded-full block ${(item.path === '/'
                ? router.asPath === '/'
                : router.asPath.startsWith(item.path)) && "text-accent bg-white"
                }`}
            >
              <span className="text-lg">{item.icon}</span>
            </Link>
          </li>)
        }
      </ul>
    </motion.div>
  </nav>;
};

export default Nav;
