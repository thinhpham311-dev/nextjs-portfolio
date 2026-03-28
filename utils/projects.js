import { PROJECTLIST_DATA } from "@/constants"

export const projectSlides = PROJECTLIST_DATA.slides

export const projectCompanyOptions = projectSlides.map(({ companyKey, companyName }) => ({
  key: companyKey,
  name: companyName,
}))

export const allProjects = projectSlides.flatMap(({ images }) => images)

export const getProjectsByCompanyKey = (companyKey) =>
  projectSlides.find((slide) => slide.companyKey === companyKey)?.images || []

export const getProjectBySlug = (slug) => allProjects.find((project) => project.slug === slug) || null

export const getProjectSiblings = (slug) => {
  const currentIndex = allProjects.findIndex((project) => project.slug === slug)

  if (currentIndex === -1) {
    return {
      project: null,
      previousProject: null,
      nextProject: null,
    }
  }

  return {
    project: allProjects[currentIndex],
    previousProject: allProjects[currentIndex - 1] || null,
    nextProject: allProjects[currentIndex + 1] || null,
  }
}
