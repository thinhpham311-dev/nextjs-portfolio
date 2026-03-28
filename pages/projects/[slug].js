"use client"

import MetaData from "@/components/MetaData"
import ParticlesSection from "@/components/ParticlesSection"
import ProjectDetail from "@/components/ProjectDetail"
import { motion } from "framer-motion"
import { fadeIn } from "@/variants"
import { useRouter } from "next/router"
import { getProjectSiblings } from "@/utils"

export default function ProjectDetailPage() {
  const { query } = useRouter()
  const { project, previousProject, nextProject } = getProjectSiblings(query.slug)

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
