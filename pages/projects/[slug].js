'use client'

import MetaData from "../../components/MetaData"
import ParticlesContainer from "../../components/ParticlesContainer"
import ProjectDetail from "../../components/ProjectDetail"
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants';
import { useRouter } from 'next/router'
import { PROJECTLIST_DATA } from '../../constants/data'
import { useEffect, useState } from "react";

export default function ProjectDetailPage() {
    const { query } = useRouter()

    const [project, setProject] = useState(null)
    const [previousProject, setPreviousProject] = useState(null)
    const [nextProject, setNextProject] = useState(null)

    useEffect(() => {
        if (query?.slug) {
            const allProjects = PROJECTLIST_DATA.slides.flatMap(slide => slide.images)
            const currentProject = allProjects.find(p => p.slug === query.slug)
            const currentIndex = allProjects.findIndex(p => p.slug === query.slug)

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
            <div className="h-full relative">
                <ParticlesContainer />
                <div className="container mx-auto z-50">

                    <motion.div
                        className="w-full mx-auto"
                        variants={fadeIn('down', 0.5)}
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
