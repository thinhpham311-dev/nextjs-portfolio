import { ButtonLink, RotatingText, ArrowIcon } from "./styles"

/* ---------- Component ---------- */
const ProjectsBtn = () => {
  return (
    <ButtonLink href="/project">
      <RotatingText src="/rounded-text.png" width={141} height={148} alt="" />
      <ArrowIcon />
    </ButtonLink>
  )
}

export default ProjectsBtn
