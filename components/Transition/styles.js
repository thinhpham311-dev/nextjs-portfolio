import { motion } from "framer-motion"
import styled from "styled-components"

const Panel = styled(motion.div)`
  position: fixed;
  right: 100%;
  z-index: 30;
  width: 100vw;
  height: 33.3333%;
`

const TopPanel = styled(Panel)`
  top: 0;
  background-color: #2e2257;
`

const MiddlePanel = styled(Panel)`
  top: 33.3333%;
  transform: translateY(-33.3333%);
  background-color: #3d2d71;
`

const BottomPanel = styled(Panel)`
  bottom: 0;
  background-color: #4b3792;
`

export { TopPanel, MiddlePanel, BottomPanel }
