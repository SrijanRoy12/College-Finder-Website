"use client"

import { motion } from "framer-motion"
import CollegeCard from "./CollegeCard"
import { useEffect, useRef } from "react"
import Image from "next/image"

interface SectionProps {
  title: string
  colleges: Array<{
    name: string
    image: string
    applyLink: string
  }>
  direction: "left" | "right"
  isActive: boolean
  onHover: () => void
  onLeave: () => void
}

// 🔹 Title-to-Image Mapping
const backgroundImages: { [key: string]: string } = {
  "Medical": "/backgrounds/medical.png",
  "MBA": "/backgrounds/mba.png",
  "Engineering": "/backgrounds/engineer.png",
  "Pharmacy": "/backgrounds/pharmacy.png",
  "Nursing": "/backgrounds/medicalmain.png",
  "Business": "/backgrounds/business.png",
}

export default function Section({
  title,
  colleges,
  direction,
  isActive,
  onHover,
  onLeave,
}: SectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Get the correct background image based on title
  const backgroundImage = backgroundImages[title] || "/backgrounds/default.png"

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scrollAmount = direction === "left" ? -1 : 1
    const speedMultiplier = direction === "right" ? 1.2 : 1 // Faster right-to-left speed
    let animationId: number

    const scroll = () => {
      if (isActive) {
        container.scrollLeft += scrollAmount * speedMultiplier

        // Looping logic to ensure all cards appear before restarting
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0
        }
        if (container.scrollLeft <= 0) {
          container.scrollLeft = container.scrollWidth - container.clientWidth
        }
      }
      animationId = requestAnimationFrame(scroll)
    }

    scroll()

    return () => cancelAnimationFrame(animationId)
  }, [direction, isActive])

  return (
    <motion.div className="relative h-[437px] overflow-hidden rounded-lg" onMouseEnter={onHover} onMouseLeave={onLeave}>
      {/* Dynamic Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        width={1920}
        height={1080}
        className="absolute w-full h-full object-cover opacity-50"
        unoptimized
      />

      {/* Section Title */}
      <motion.div
        className="absolute inset-2 flex items-center justify-center z-20 bg-white bg-opacity-0"
        initial={{ opacity: 1 }}
        animate={isActive ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-[4rem] md:text-[8rem] font-bold text-blue font-serif tracking-wider leading-loose">
          {title}
        </h2>
      </motion.div>

      {/* College Cards */}
      <motion.div
        ref={containerRef}
        className="flex space-x-6 absolute inset-0 px-6 py-6 overflow-hidden justify-center scrollbar-hidden"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Duplicate cards to enable smooth looping */}
        {[...colleges, ...colleges].map((college, index) => (
          <CollegeCard key={index} name={college.name} image={college.image} applyLink={college.applyLink} />
        ))}
      </motion.div>
    </motion.div>
  )
}
