"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Achievements from "@/components/achievements"
import Photography from "@/components/photography"
import MainProjects from "@/components/main-projects"
import MiniProjects from "@/components/mini-projects"
import Chess from "@/components/chess"
import Resume from "@/components/resume"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-black text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Animated background grid */}
      <motion.div className="fixed inset-0 opacity-10 pointer-events-none" style={{ opacity }}>
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-[linear-gradient(90deg,transparent_24px,rgba(255,0,0,0.1)_25px,rgba(255,0,0,0.1)_26px,transparent_27px),linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px)]"
              : "bg-[linear-gradient(90deg,transparent_24px,rgba(255,0,0,0.05)_25px,rgba(255,0,0,0.05)_26px,transparent_27px),linear-gradient(rgba(255,0,0,0.05)_1px,transparent_1px)]"
          } bg-[size:25px_25px]`}
        />
      </motion.div>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Achievements darkMode={darkMode} />
      <Photography darkMode={darkMode} />
      <MainProjects darkMode={darkMode} />
      <MiniProjects darkMode={darkMode} />
      <Chess darkMode={darkMode} />
      <Resume darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  )
}
