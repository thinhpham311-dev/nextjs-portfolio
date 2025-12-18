'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BsDownload, BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion';

import MetaData from '../../components/MetaData';
import { Button } from '../../components/Button';
import { fadeIn } from '../../variants';
import { RESUMELIST_DATA } from '../../constants';

const About = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const data = RESUMELIST_DATA;

  return (
    <>
      <MetaData
        title="My Portfolio | About Me"
        description="Get to know Thinh Pham — a frontend web developer with 3+ years of experience in building fast, responsive websites using React, Next.js, and JavaScript."
      />

      <div className="relative h-full text-center xl:text-left">
        <div className="container mx-auto h-full px-5 flex flex-col items-center xl:flex-row xl:gap-x-10 gap-x-4">

          {/* Left Content */}
          <div className="flex flex-col justify-center xl:flex-1 h-[300px]">
            <motion.h1
              className="h1 xl:text-left"
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              About <span className="text-accent">me</span>
            </motion.h1>

            <motion.p
              className="xl:text-left w-full xl:max-w-[84%] xl:mb-8 mb-5"
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              Web Developer with 3 years of experience specializing in building responsive websites. Passionate about UX/UI and web performance, with a strong focus on creating visually appealing and user-centered digital experiences.            </motion.p>

            <motion.form
              method="get"
              action="/PhamTriThinh-FrontEnd-3years.pdf"
              className="flex justify-center xl:justify-start gap-x-5"
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <Button type="submit" styles="xl:py-2 xl:px-3 py-1 px-2 bg-transparent border-accent border-2 hover:bg-accent rounded-lg">
                <BsDownload className="mr-3" />Download CV
              </Button>
              <Link href="https://github.com/thinhpham311-dev" target="_blank">
                <Button type="button" styles="xl:py-2 xl:px-3 py-1 px-2 bg-accent border-accent border-2 hover:bg-accent/50 hover:border-accent/50 hover:border-2 rounded-lg">
                  <BsGithub className="mr-3" />Github
                </Button>
              </Link>
            </motion.form>
          </div>

          {/* Right Content */}
          <div className="flex flex-col w-full xl:max-w-[48%] flex-1">
            {/* Tabs */}
            <motion.div
              variants={fadeIn('down', 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-white h-[50px] mb-3 flex items-center xl:justify-start justify-center xl:gap-x-8 lg:gap-x-6 gap-x-4"
            >
              {data.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedIndex(i)}
                  className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 ${selectedIndex === i
                    ? 'text-accent after:!bg-accent after:w-full after:transition-all after:duration-300'
                    : ''
                    }`}
                >
                  {item.title}
                </div>
              ))}
            </motion.div>

            {/* Tab Content */}
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="xl:h-full h-[calc(100dvh-550px)] overflow-y-auto"
            >
              <div className="flex flex-col xl:gap-y-4 gap-y-2">
                {data[selectedIndex].info.map((item, i) => (
                  <div
                    key={i}
                    className="mx-auto xl:mx-0 flex-1 flex-col md:flex-row max-w-max text-white/60"
                  >
                    <h3 className="capitalize mb-2 text-white">{item.title}</h3>
                    <div>{item.stage}</div>
                    <div className="flex flex-wrap xl:justify-start justify-center gap-x-4">
                      {item.icons?.map((iconItem, j) => (
                        <div
                          key={j}
                          className="text-2xl flex flex-col items-center text-white transition-all xl:p-2 p-0"
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
  );
};

export default About;
