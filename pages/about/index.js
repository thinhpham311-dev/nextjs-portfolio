"use client"

import { useState } from "react"
import Link from "next/link"
import { BsDownload, BsGithub } from "react-icons/bs"
import { motion } from "framer-motion"

import MetaData from "@/components/MetaData"
import Button from "@/components/Button"
import { fadeIn } from "../../variants"
import { RESUMELIST_DATA } from "@/constants"

const About = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const data = RESUMELIST_DATA

  return (
    <>
      <MetaData
        title="My Portfolio | About Me"
        description="Get to know Thinh Pham — a frontend web developer with 3+ years of experience in building fast, responsive websites using React, Next.js, and JavaScript."
      />

      <div className="relative h-full text-center xl:text-left">
        <div className="container mx-auto flex h-full flex-col items-center gap-x-4 px-5 xl:flex-row xl:gap-x-10">
          {/* Left Content */}
          <div className="flex h-[300px] flex-col justify-center xl:flex-1">
            <motion.h1
              className="h1 xl:text-left"
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              About <span className="text-accent">me</span>
            </motion.h1>

            <motion.p
              className="mb-5 w-full xl:mb-8 xl:max-w-[84%] xl:text-left"
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Web Developer with 3 years of experience specializing in building responsive websites.
              Passionate about UX/UI and web performance, with a strong focus on creating visually
              appealing and user-centered digital experiences.{" "}
            </motion.p>

            <motion.form
              method="get"
              action="/PhamTriThinh-FrontEnd-3years.pdf"
              className="flex justify-center gap-x-5 xl:justify-start"
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <Button type="submit" variant="outline">
                <BsDownload className="mr-3" />
                Download CV
              </Button>
              <Link href="https://github.com/thinhpham311-dev" target="_blank">
                <Button type="button" variant="default">
                  <BsGithub className="mr-3" />
                  Github
                </Button>
              </Link>
            </motion.form>
          </div>

          {/* Right Content */}
          <div className="flex w-full flex-1 flex-col xl:max-w-[48%]">
            {/* Tabs */}
            <motion.div
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-3 flex h-[50px] items-center justify-center gap-x-4 text-white lg:gap-x-6 xl:justify-start xl:gap-x-8"
            >
              {data.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedIndex(i)}
                  className={`relative cursor-pointer capitalize after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-8 after:bg-white xl:text-lg ${
                    selectedIndex === i
                      ? "text-accent after:w-full after:!bg-accent after:transition-all after:duration-300"
                      : ""
                  }`}
                >
                  {item.title}
                </div>
              ))}
            </motion.div>

            {/* Tab Content */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h-[calc(100dvh-550px)] overflow-y-auto xl:h-full"
            >
              <div className="flex flex-col gap-y-2 xl:gap-y-4">
                {data[selectedIndex].info.map((item, i) => (
                  <div
                    key={i}
                    className="mx-auto max-w-max flex-1 flex-col text-white/60 md:flex-row xl:mx-0"
                  >
                    <h3 className="mb-2 capitalize text-white">{item.title}</h3>
                    <div>{item.stage}</div>
                    <div className="flex flex-wrap justify-center gap-x-4 xl:justify-start">
                      {item.icons?.map((iconItem, j) => (
                        <div
                          key={j}
                          className="flex flex-col items-center p-0 text-2xl text-white transition-all xl:p-2"
                        >
                          {iconItem.icon}
                          <span className="text-[10px]">{iconItem.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
