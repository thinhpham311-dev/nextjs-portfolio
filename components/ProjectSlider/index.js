"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import Button from "@/components/Button"
import { FiExternalLink } from "react-icons/fi"
import { FaUserClock } from "react-icons/fa"

import { LoadingImage } from "@/components/Loading"
import { PROJECTLIST_DATA } from "@/constants"
import {
  Container,
  Tabs,
  SlideCard,
  CompanyBadge,
  OverlayLink,
  OverlayText,
  EmptyState,
} from "./styles"

const projects = PROJECTLIST_DATA

const ProjectSlider = () => {
  const companyKeys = projects.slides.map((slide) => slide.companyKey)
  const [selectedCompanyKey, setSelectedCompanyKey] = useState(companyKeys[0])

  const selectedSlide = projects.slides.find((slide) => slide.companyKey === selectedCompanyKey)
  const filteredImages = selectedSlide?.images || []

  const getCompanyName = (key) =>
    projects.slides.find((slide) => slide.companyKey === key)?.companyName || "Unknown"

  return (
    <Container>
      <Tabs>
        {companyKeys.map((key) => (
          <Button
            variant="link"
            size="sm"
            key={key}
            onClick={() => setSelectedCompanyKey(key)}
            className={`relative rounded-full text-sm font-semibold capitalize transition-all after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-8 xl:text-lg ${
              selectedCompanyKey === key
                ? "text-accent after:w-full after:!bg-accent after:transition-all after:duration-300"
                : "bg-transparent text-white after:bg-white"
            }`}
          >
            {getCompanyName(key)}
          </Button>
        ))}
      </Tabs>

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
              <SlideCard>
                <CompanyBadge>
                  <Link href={image?.src} target="_blank" rel="noopener noreferrer">
                    {image?.companyImage ? (
                      <Image src={image.companyImage} width={24} height={24} alt="Company" />
                    ) : (
                      <FaUserClock color="#fff" />
                    )}
                  </Link>
                </CompanyBadge>

                <LoadingImage
                  src={image.path}
                  alt={image.title}
                  width={500}
                  height={200}
                  className="object-contain"
                />

                <OverlayLink
                  href={image.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-overlay
                >
                  <OverlayText>
                    Visit Page <FiExternalLink />
                  </OverlayText>
                </OverlayLink>
              </SlideCard>
            </SwiperSlide>
          ))
        ) : (
          <EmptyState>No project found for this company.</EmptyState>
        )}
      </Swiper>
    </Container>
  )
}

export default ProjectSlider
