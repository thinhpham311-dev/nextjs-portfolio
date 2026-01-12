"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import { FiExternalLink } from "react-icons/fi"
import { FaUserClock } from "react-icons/fa"
import { LoadingImage } from "./Loading"
import { PROJECTLIST_DATA } from "@/constants"

const projects = PROJECTLIST_DATA
const ProjectSlider = () => {
  const companyKeys = projects.slides.map((slide) => slide.companyKey)
  const [selectedCompanyKey, setSelectedCompanyKey] = useState(companyKeys[0])

  const selectedSlide = projects.slides.find((slide) => slide.companyKey === selectedCompanyKey)
  const filteredImages = selectedSlide?.images || []

  const getCompanyName = (key) =>
    projects.slides.find((slide) => slide.companyKey === key)?.companyName || "Unknown"

  return (
    <div className="mx-auto w-full max-w-[1400px] px-4">
      {/* Tabs */}
      <div className="relative z-50 mb-6 flex flex-wrap justify-center gap-3">
        {companyKeys.map((key) => (
          <button
            key={key}
            onClick={() => setSelectedCompanyKey(key)}
            className={`relative rounded-full text-sm font-semibold capitalize transition-all after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-8 xl:text-lg ${
              selectedCompanyKey === key
                ? "text-accent after:w-full after:!bg-accent after:transition-all after:duration-300"
                : "bg-transparent text-white after:bg-white"
            }`}
          >
            {getCompanyName(key)}
          </button>
        ))}
      </div>

      {/* Swiper */}
      <Swiper
        key={selectedCompanyKey}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={20}
        modules={[Pagination, Navigation]}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {filteredImages.length > 0 ? (
          filteredImages.map((image, idx) => (
            <SwiperSlide key={idx}>
              <div className="group relative flex items-center justify-center overflow-hidden rounded-lg bg-black">
                {/* Company Logo */}
                <div className="absolute right-2 top-2 z-10 rounded-full bg-black bg-opacity-70 p-2">
                  <a href={image?.src} target="_blank" rel="noopener noreferrer">
                    {image?.companyImage ? (
                      <Image
                        src={image.companyImage}
                        width={24}
                        height={24}
                        alt="Company"
                        className="object-contain"
                      />
                    ) : (
                      <FaUserClock className="text-white" />
                    )}
                  </a>
                </div>

                {/* Project Image */}
                <LoadingImage
                  src={image.path}
                  alt={image.title}
                  width={500}
                  height={200}
                  className="h-full w-full object-contain"
                />

                {/* Overlay Link */}
                <Link
                  href={image.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 transition-all duration-300 group-hover:opacity-80"
                >
                  <span className="flex items-center gap-2 font-semibold text-white">
                    Visit Page <FiExternalLink />
                  </span>
                </Link>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div className="py-10 text-center text-gray-500">No project found for this company.</div>
        )}
      </Swiper>
    </div>
  )
}

export default ProjectSlider
