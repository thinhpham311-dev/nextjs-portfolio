//component 
import ProjectBtn from "../components/ProjectsBtn"
import Avatar from "../components/Avatar"
import ParticlesContainer from "../components/ParticlesContainer"
import MetaData from "../components/MetaData"
//framer motion
import { motion } from "framer-motion"

//variants
import { fadeIn } from "../variants"


const Home = () => {
  return <>
    <MetaData
      title="My Portfolio | Home"
      description="Welcome to the portfolio of Thinh Pham, a passionate and creative web developer specializing in building modern, responsive websites using React, Next.js, and JavaScript."
    />
    <div className="z-10 h-full xl:mb-0 py-[30px] relative">
      <ParticlesContainer />
      <div className="text-center flex gap-x-[10%] px-[2vw] justify-between xl:pt-0 xl:text-left container mx-auto h-full">
        <div className="flex flex-col justify-center flex-1 w-full xl:w-[45%]">
          <motion.h1 variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden" className="h1 z-10">
            Hello <br /> I'm {' '} <span className="text-accent">Thinh Pham</span>
          </motion.h1>
          <motion.p variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden" className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-12 text-yellow z-10">
            Web Developer experienced in developing websites, using strong technical skills to enhance aesthetics and create engaging user experiences.          </motion.p>
          <motion.div variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit="hidden" className="z-20">
            <ProjectBtn />
          </motion.div>
        </div>
        <motion.div variants={fadeIn('up', 0.6)} initial="hidden" animate="show" exit="hidden" transition={{ duration: 1, ease: 'easeInOut' }} className="w-full h-full   xl:flex flex-col justify-center hidden  max-w-[45%] max-h-[700px]  ">
          <Avatar _w={737} _h={678} source="/avatar-bg-thinhpham.jpg" />
        </motion.div>
      </div>
    </div>
  </>
};

export default Home;
