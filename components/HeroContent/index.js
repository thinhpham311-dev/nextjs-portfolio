//component
import ProjectBtn from "../ProjectsBtn"

//framer motion
import { motion } from "framer-motion"
//variants
import { fadeIn } from "@/variants"

const HeroContent = ({currentStage}) => {
  return (
    <div className="flex w-full flex-1 flex-col justify-center md:w-[50%] lg:w-[50%] xl:w-[50%]">
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="h1 z-10"
      >
        Hello <br /> I'm <span className="text-accent">Thinh Pham</span>
      </motion.h1>
      <motion.p
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-yellow z-10 mx-auto mb-10 max-w-sm xl:mx-0 xl:mb-12 xl:max-w-xl"
      >
        Web Developer experienced in developing websites, using strong technical skills to enhance
        aesthetics and create engaging user experiences.
      </motion.p>
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="z-20"
      >
        <ProjectBtn />
      </motion.div>
    </div>
  )
}

export default HeroContent
