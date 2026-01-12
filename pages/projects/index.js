import ParticlesContainer from "../../components/ParticlesContainer"
import ProjectSlider from "../../components/ProjectSlider"
import MetaData from "../../components/MetaData"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

const Project = () => {
  return (
    <>
      <MetaData
        title="My Portfolio | My Projects"
        description="Discover projects developed by Thinh Pham, demonstrating expertise in building responsive and user-focused web applications."
      />
      <div className="relative flex h-full items-center">
        <ParticlesContainer />
        <div className="container mx-auto">
          <div className="mb-0 xl:mb-5">
            <motion.h1
              className="h1 text-center"
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              My projects <span className="text-accent">.</span>
            </motion.h1>
          </div>
          <motion.div
            className="w-full"
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ProjectSlider />
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Project
