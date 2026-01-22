import {useState} from "react"
//component
import ProjectBtn from "../components/ProjectsBtn"
import Avatar from "../components/Avatar"
import ParticlesSection from "../components/ParticlesSection"
import MetaData from "../components/MetaData"
//framer motion

import Scene from "@/components/Scene"
import HeroContent from "@/components/HeroContent"
//variants

const Home = () => {
    const [currentStage, setCurrentStage] = useState(1)

  return (
    <>
      <MetaData
        title="My Portfolio | Home"
        description="Welcome to the portfolio of Thinh Pham, a passionate and creative web developer specializing in building modern, responsive websites using React, Next.js, and JavaScript."
      />
      <div className="relative z-10 h-full py-[30px] xl:mb-0">
        <ParticlesSection />
        <div className="container relative mx-auto flex h-full justify-between gap-x-[5%] text-center xl:pt-0 xl:text-left">
          <HeroContent currentStage={currentStage}/>

          <Scene setCurrentStage={setCurrentStage}/>

          {/* <Avatar _w={737} _h={678} source="/avatar-bg-thinhpham.jpg" /> */}
        </div>
      </div>
    </>
  )
}

export default Home
