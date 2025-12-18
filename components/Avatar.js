'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowRight } from "react-icons/hi2"

import { useRouter } from 'next/router'
import { socialLinks } from "../constants/data"


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

  const handleMouseEnter = () => {
    setIsHovered(true)
    setIsLeaving(false)
  }

  return (
    <div
      className=" h-[400px] w-[400px] mx-auto rounded-full cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative h-full w-full rounded-full overflow-hidden
    border-8 border-[#2E0854]
    shadow-[0_0_20px_5px_rgba(46,8,84,0.7)]
    transition-colors duration-500
    ${isHovered
            ? 'bg-white'
            : isLeaving
              ? 'bg-black/70'
              : 'bg-transparent'
          }
  `}
      >

        {/* Avatar Image */}
        <Image
          src={source}
          width={_w}
          height={_h}
          alt="Avatar"
          className="object-cover h-full w-full transition-transform duration-500 hover:scale-110"
        />

        {/* Social Icons + View More */}
        <AnimatePresence>
          {(isHovered || isLeaving) && (
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center gap-6 rounded-full"
              style={{ backgroundColor: isHovered ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex gap-6">
                {socialLinks.map(({ href, icon, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      transition: {
                        duration: 0.3,
                        ease: "easeInOut",
                      }
                    }}
                    exit={{ opacity: 0 }}
                    className="transition-transform text-3xl text-white"
                  >
                    {icon}
                  </motion.a>

                ))}
              </div>

              {/* View More Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="mt-4 px-5 py-2 rounded-full bg-white text-black font-semibold cursor-pointer hover:bg-gray-200 transition-colors flex gap-x-2 items-center"
                onClick={() => router.push("/about")}
              >
                About Me    <HiArrowRight className=" text-md group-hover:translate-x-2 transition-all duration-300" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Avatar
