"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef, useState } from "react"

interface PhotographyProps {
  darkMode: boolean
}

export default function Photography({ darkMode }: PhotographyProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Updated photo paths to match your assets folder
  const photos = [
    { id: 1, src: `/assets/a.png`, alt: "Photography A" },
    { id: 2, src: `/assets/b.png`, alt: "Photography B" },
    { id: 3, src: `/assets/c.png`, alt: "Photography C" },
    { id: 4, src: `/assets/d.png`, alt: "Photography D" },
    { id: 5, src: `/assets/e.png`, alt: "Photography E" },
    { id: 6, src: `/assets/f.png`, alt: "Photography F" },
    { id: 7, src: `/assets/g.png`, alt: "Photography G" },
    { id: 8, src: `/assets/h.png`, alt: "Photography H" },
    { id: 9, src: `/assets/i.png`, alt: "Photography I" },
    { id: 10, src: `/assets/j.png`, alt: "Photography J" },
  ]

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300 // Width of each image + gap
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  const getScaleForIndex = (currentIndex: number) => {
    if (hoveredIndex === null) return 1

    if (currentIndex === hoveredIndex) {
      return 1.15 // Main hovered image
    }

    const distance = Math.abs(currentIndex - hoveredIndex)
    if (distance === 1) {
      return 1.08 // Adjacent images
    }
    if (distance === 2) {
      return 1.04 // Images 2 positions away
    }

    return 1 // All other images
  }

  return (
    <section className={`py-20 overflow-hidden ${darkMode ? "bg-black" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 tracking-wider">THROUGH MY LENS</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto" />
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Left scroll button */}
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-red-500/80 p-2 text-white"
          >
            &#10094;
          </button>

          {/* Right scroll button */}
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-red-500/80 p-2 text-white"
          >
            &#10095;
          </button>

          <div
            ref={scrollRef}
            className="flex space-x-4 pb-4 overflow-x-auto scrollbar-hide py-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                animate={{
                  scale: getScaleForIndex(index),
                  zIndex: hoveredIndex === index ? 10 : 1,
                }}
                whileHover={{
                  boxShadow:
                    hoveredIndex === index
                      ? "0 20px 40px rgba(239, 68, 68, 0.3)"
                      : "0 10px 20px rgba(239, 68, 68, 0.2)",
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="flex-shrink-0 relative group cursor-pointer"
              >
                <div
                  className={`w-56 h-40 relative overflow-hidden border-2 transition-all duration-300 ${
                    hoveredIndex === index
                      ? "border-red-500"
                      : Math.abs(index - (hoveredIndex || -10)) <= 2 && hoveredIndex !== null
                        ? "border-red-500/50"
                        : "border-gray-700"
                  }`}
                >
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-300"
                    style={{
                      transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
