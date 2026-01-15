//component
import ProjectBtn from "../components/ProjectsBtn"
import Avatar from "../components/Avatar"
import ParticlesSection from "../components/ParticlesSection"
import MetaData from "../components/MetaData"
//framer motion
import { motion } from "framer-motion"
import Scene from "@/components/Scene"
//variants
import { fadeIn } from "../variants"

const Home = () => {
  return (
    <>
      <MetaData
        title="My Portfolio | Home"
        description="Welcome to the portfolio of Thinh Pham, a passionate and creative web developer specializing in building modern, responsive websites using React, Next.js, and JavaScript."
      />
      <div className="relative z-10 h-full py-[30px] xl:mb-0">
        <ParticlesSection />
        <div className="container mx-auto flex h-full justify-between gap-x-[10%] px-[2vw] text-center xl:pt-0 xl:text-left">
          <div className="flex w-full flex-1 flex-col justify-center xl:w-[45%]">
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
              Web Developer experienced in developing websites, using strong technical skills to
              enhance aesthetics and create engaging user experiences.{" "}
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
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="hidden h-full max-h-[700px] w-full max-w-[45%] flex-col justify-center xl:flex"
          >
            <Scene />

            {/* <Avatar _w={737} _h={678} source="/avatar-bg-thinhpham.jpg" /> */}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Home
