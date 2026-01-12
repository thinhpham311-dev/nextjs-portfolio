"use client"

import { useState, useEffect, useRef, useCallback, memo } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  MdOutlineFullscreen,
  MdOutlineFullscreenExit,
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdArrowRightAlt,
  MdOutlineChevronLeft,
  MdOutlineChevronRight,
} from "react-icons/md"
import { FaUserClock } from "react-icons/fa"
import { LoadingImage } from "./Loading"

const Breadcrumb = memo(({ title, toggleFullscreen }) => (
  <nav
    className="sticky top-0 z-10 flex items-center justify-between py-3 text-sm transition-colors duration-300 md:px-6"
    aria-label="Breadcrumb"
  >
    <ol className="flex items-center space-x-2 text-sm">
      <li>
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span className="ml-2">/</span>
      </li>
      <li>
        <Link href="/project" className="hover:underline">
          Projects
        </Link>
        <span className="ml-2">/</span>
      </li>
      <li className="text-white-400 max-w-[180px] truncate font-medium">{title}</li>
    </ol>
    <button onClick={toggleFullscreen} className="text-lg transition">
      <MdOutlineFullscreen size={22} />
    </button>
  </nav>
))

const ProjectHeader = memo(
  ({ project, isFullscreen, isDarkMode, toggleFullscreen, toggleDarkMode }) => (
    <div className="mb-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {project.companyImage ? (
          <div
            className={`flex h-[50px] w-[100px] items-center justify-center p-2 shadow-inner ${!isDarkMode && isFullscreen ? "bg-black" : ""}`}
          >
            <img
              src={project.companyImage}
              alt="Company Logo"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ) : (
          <FaUserClock size={30} />
        )}

        {!isFullscreen && (
          <div className="flex h-[50px] flex-col justify-center">
            <motion.span className="text-white-500 text-xs uppercase leading-none tracking-wide">
              Project
            </motion.span>
            <motion.h1 className="text-white-800 text-2xl font-bold leading-tight">
              {project.title}
            </motion.h1>
          </div>
        )}
      </div>

      <motion.div className="flex items-center gap-x-2">
        {isFullscreen && (
          <>
            <button
              onClick={toggleFullscreen}
              className="z-50 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
            >
              <MdOutlineFullscreenExit size={22} />
            </button>
            <button
              onClick={toggleDarkMode}
              className="z-50 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
              title="Toggle dark mode"
            >
              {isDarkMode ? <MdOutlineDarkMode size={22} /> : <MdOutlineLightMode size={22} />}
            </button>
          </>
        )}
        <Link
          href={project.src}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-full bg-black/50 p-2 text-sm font-semibold text-white hover:underline"
        >
          <span className="hidden md:block">Visit Page</span> <MdArrowRightAlt size={22} />
        </Link>
      </motion.div>
    </div>
  ),
)

const ProjectNavigation = ({ previousProject, nextProject }) => (
  <div className="container mx-auto mt-10 flex items-center justify-between border-t px-0 py-3">
    {previousProject ? (
      <Link
        href={`/project/${previousProject.slug}`}
        className="text-white-700 flex items-center space-x-1 text-sm hover:underline"
      >
        <MdOutlineChevronLeft size={22} />{" "}
        <span className="font-bold">{previousProject.title}</span>
      </Link>
    ) : (
      <div />
    )}
    {nextProject ? (
      <Link
        href={`/project/${nextProject.slug}`}
        className="text-white-700 flex items-center space-x-1 text-sm hover:underline"
      >
        <span className="font-bold">{nextProject.title}</span> <MdOutlineChevronRight size={22} />
      </Link>
    ) : (
      <div />
    )}
  </div>
)

export default function ProjectDetailPage({ project, previousProject, nextProject, query }) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const scrollRef = useRef(null)
  const containerRef = useRef(null)

  // Scroll to top when slug changes
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" })
  }, [query.slug])

  // Listen to fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      const inFullscreen = !!document.fullscreenElement
      setIsFullscreen(inFullscreen)
      setIsDarkMode(inFullscreen ? localStorage.getItem("projectDarkMode") === "true" : false)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  const toggleDarkMode = useCallback(() => {
    if (isFullscreen) {
      const newMode = !isDarkMode
      setIsDarkMode(newMode)
      localStorage.setItem("projectDarkMode", newMode)
    }
  }, [isFullscreen, isDarkMode])

  if (!project) {
    return (
      <div className="text-white-500 py-10 text-center italic">
        Dự án chưa được tìm thấy hoặc đang được cập nhật.
      </div>
    )
  }

  const containerClass = isFullscreen
    ? `h-screen md:px-6 px-3 pt-5 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`
    : "max-h-[calc(100vh-250px)] h-full md:px-6 bg-transparent"

  const getTextColorClass = () => {
    if (isFullscreen) {
      return isDarkMode ? "text-white" : "text-black"
    }
    return "text-white"
  }

  return (
    <>
      {!isFullscreen && <Breadcrumb toggleFullscreen={toggleFullscreen} title={project.title} />}

      <motion.div
        ref={(el) => {
          scrollRef.current = el
          containerRef.current = el
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`relative z-40 flex flex-col justify-between overflow-auto shadow-xl ${containerClass}`}
      >
        <div className="container mx-auto flex flex-col px-0">
          <ProjectHeader
            project={project}
            isFullscreen={isFullscreen}
            isDarkMode={isDarkMode}
            toggleFullscreen={toggleFullscreen}
            toggleDarkMode={toggleDarkMode}
          />

          <LoadingImage
            src={project.path}
            alt={project.title}
            className="mb-6 h-auto w-full shadow-lg"
          />

          {/* Title in fullscreen */}
          {isFullscreen && (
            <div className="flex h-[50px] flex-col justify-center">
              <motion.span className="text-white-500 text-sm uppercase leading-none tracking-wide">
                Project
              </motion.span>
              <motion.h1 className="text-white-800 text-2xl font-bold leading-tight">
                {project.title}
              </motion.h1>
            </div>
          )}

          {/* Description */}
          <div className={`h-full space-y-4 px-4 leading-relaxed ${getTextColorClass()}`}>
            {project.description ? (
              <>
                <div dangerouslySetInnerHTML={{ __html: project.description }} />
              </>
            ) : (
              <div className="p-5 text-center">Content will be available soon.</div>
            )}
          </div>
        </div>

        {/* Prev / Next Navigation */}
        {(previousProject || nextProject) && (
          <ProjectNavigation previousProject={previousProject} nextProject={nextProject} />
        )}
      </motion.div>
    </>
  )
}
