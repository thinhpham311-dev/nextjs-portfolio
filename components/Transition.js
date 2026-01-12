import { motion } from "framer-motion"

const transitionvariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
}

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed right-full top-0 z-30 h-1/3 w-screen bg-[#2e2257]"
        variants={transitionvariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.2,
          duration: 0.6,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="fixed right-full top-1/3 z-30 h-1/3 w-screen -translate-y-1/3 bg-[#3d2d71]"
        variants={transitionvariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.4,
          duration: 0.6,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="fixed bottom-0 right-full z-30 h-1/3 w-screen bg-[#4b3792]"
        variants={transitionvariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.6,
          duration: 0.6,
          ease: "easeInOut",
        }}
      ></motion.div>
    </>
  )
}

export default Transition
