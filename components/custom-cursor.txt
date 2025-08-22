"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface CustomCursorProps {
  darkMode: boolean
}

export default function CustomCursor({ darkMode }: CustomCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    // Detect hoverable elements
    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener("mousemove", mouseMove)

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll("a, button, [role='button']")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Single liquid drop cursor */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] w-3 h-3 rounded-full ${
          darkMode ? "bg-red-500" : "bg-red-600"
        } mix-blend-difference`}
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 1.5,
        }}
      />
    </>
  )
}
