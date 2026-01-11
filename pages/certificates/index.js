import Circles from "../../components/Circles"
import Bulb from "../../components/Bulb";
import CertificateSlider from "../../components/CertificateSlider"

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants';

const Certificate = () => {
  return <div className="h-full  relative flex items-center">
    <Circles />
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-x-8">
        <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4">
          <motion.h2 className="h2 mx:mt-5" variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden">My certificates <span className="text-accent">.</span></motion.h2>
          <motion.p className="mb-4 max-w-[450px] mx-auto lg:mx-0" variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden">I have earned several professional certificates that validate my skills
    in web development and software engineering, including React, front-end
    development, and automated testing. Each certificate reflects my
    commitment to continuous learning and staying up-to-date with industry standards.</motion.p>
        </div>
        <motion.div className="w-full xl:w-[calc(100%-30vw)]" variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit="hidden">
          <CertificateSlider />
        </motion.div>
      </div>
    </div>
    <Bulb />
  </div>;
};

export default Certificate;
