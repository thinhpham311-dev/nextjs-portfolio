"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatePresence } from "framer-motion"
import { HiArrowRight } from "react-icons/hi2"
import { useRouter } from "next/router"
import { socialLinks } from "@/constants/data"
import {
  Wrap,
  AvatarContainer,
  OverlayControls,
  SocialIcon,
  AboutButton,
  ImageWrapper,
} from "./styles"

const Avatar = ({ _w, _h, source }) => {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)
  const [isLeaving, setIsLeaving] = useState(false)

  const handleMouseLeave = () => {
    setIsLeaving(true)
    setTimeout(() => {
      setIsHovered(false)
      setIsLeaving(false)
    }, 500)
  }

  return (
    <Wrap
      onMouseEnter={() => {
        setIsHovered(true)
        setIsLeaving(false)
      }}
      onMouseLeave={handleMouseLeave}
    >
      <AvatarContainer isHovered={isHovered} isLeaving={isLeaving}>
        <ImageWrapper>
          <Image
            src={source}
            width={_w}
            height={_h}
            alt="Avatar"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </ImageWrapper>

        <AnimatePresence>
          {(isHovered || isLeaving) && (
            <OverlayControls
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ backgroundColor: isHovered ? "rgba(0,0,0,0.25)" : "transparent" }}
            >
              <div style={{ display: "flex", gap: "1.25rem" }}>
                {socialLinks.map(({ href, icon, label }, i) => (
                  <SocialIcon
                    key={label + i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {icon}
                  </SocialIcon>
                ))}
              </div>

              <AboutButton
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                onClick={() => router.push("/about")}
              >
                About Me <HiArrowRight />
              </AboutButton>
            </OverlayControls>
          )}
        </AnimatePresence>
      </AvatarContainer>
    </Wrap>
  )
}

export default Avatar
