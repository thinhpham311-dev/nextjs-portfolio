"use client"

import MetaData from "@/components/MetaData"
import ParticlesSection from "@/components/ParticlesSection"
import ProjectDetail from "@/components/ProjectDetail"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"
import { useRouter } from "next/router"
import { PROJECTLIST_DATA } from "@/constants/data"
import { useEffect, useState } from "react"

export default function ProjectDetailPage() {
  const { query } = useRouter()

  const [project, setProject] = useState(null)
  const [previousProject, setPreviousProject] = useState(null)
  const [nextProject, setNextProject] = useState(null)

  useEffect(() => {
    if (query?.slug) {
      const allProjects = PROJECTLIST_DATA.slides.flatMap((slide) => slide.images)
      const currentProject = allProjects.find((p) => p.slug === query.slug)
      const currentIndex = allProjects.findIndex((p) => p.slug === query.slug)

      setProject(currentProject)
      setPreviousProject(allProjects[currentIndex - 1] || null)
      setNextProject(allProjects[currentIndex + 1] || null)
    }
  }, [query.slug])

  return (
    <>
      <MetaData
        title={`My Portfolio | Project - ${project?.title}`}
        description="Portfolio cá nhân của Thinh Pham - Web Developer"
      />
      <div className="relative h-full">
        <ParticlesSection />
        <div className="container z-50 mx-auto">
          <motion.div
            className="mx-auto w-full"
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ProjectDetail
              query={query}
              project={project}
              previousProject={previousProject}
              nextProject={nextProject}
            />
          </motion.div>
        </div>
      </div>
    </>
  )
}
