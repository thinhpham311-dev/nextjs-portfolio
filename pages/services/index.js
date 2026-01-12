import Circles from "@/components/Circles"
import Bulb from "@/components/Bulb"
// import ServiceSlider from "@/components/ServiceSlider"

import { motion } from "framer-motion"
import { fadeIn } from "@/variants"

const Services = () => {
  return (
    <div className="relative flex h-full items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col gap-x-8 xl:flex-row">
          <div className="mb-4 flex flex-col text-center lg:text-left xl:w-[30vw]">
            <motion.h2
              className="h2 mx:mt-5"
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              className="mx-auto mb-4 max-w-[400px] lg:mx-0"
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              I provide creative and efficient solutions in Web Development, and Automation Testing,
              helping projects come to life with clean design and high performance.{" "}
            </motion.p>
          </div>
          <motion.div
            className="w-full xl:w-[calc(100%-30vw)]"
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {/* <ServiceSlider /> */}
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  )
}

export default Services
