"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface MiniProjectsProps {
  darkMode: boolean
}

export default function MiniProjects({ darkMode }: MiniProjectsProps) {
  // Add this function at the beginning of your component
  const getProjectImage = (index: number) => {
    return `/assets/${index + 1}.png`
  }

  // Then update the miniProjects array to use this function
  const miniProjects = [
    { title: "Letter Case Changer", url: "https://simplewebdevprojects.github.io/Letter_Case_Changer/", emoji: "🔤" },
    { title: "Weather App", url: "https://simplewebdevprojects.github.io/Weather_App/", emoji: "🌤️" },
    {
      title: "GitHub Profile Finder",
      url: "https://simplewebdevprojects.github.io/Github_Profile_Finder/",
      emoji: "🔍",
    },
    { title: "Periods Tracker (FemCare)", url: "https://simplewebdevprojects.github.io/Periods_Tracker/", emoji: "📅" },
    {
      title: "Keyboard Visual Audio Simulator",
      url: "https://simplewebdevprojects.github.io/Keyboard_Visual_Audio_Simulator/",
      emoji: "🎹",
    },
    { title: "YouTube Clone", url: "https://simplewebdevprojects.github.io/Youtube_Clone/", emoji: "📺" },
    { title: "Ping Pong Game", url: "https://simplewebdevprojects.github.io/Ping_Pong_Game/", emoji: "🏓" },
    {
      title: "Document to 3D Visualizer",
      url: "https://simplewebdevprojects.github.io/Document_to_3D_Visualizer/",
      emoji: "📄",
    },
    {
      title: "Browser Forensics for Safety",
      url: "https://simplewebdevprojects.github.io/Browser_Forensics_For_Safety/",
      emoji: "🔒",
    },
    { title: "Disorder Simulator", url: "https://simplewebdevprojects.github.io/Disorder_Simulator/", emoji: "🧠" },
    { title: "Physics Simulation", url: "https://simplewebdevprojects.github.io/Physics_Simulation/", emoji: "⚛️" },
    { title: "Arcade Game Box", url: "https://simplewebdevprojects.github.io/Arcade_Game_Box/", emoji: "🎮" },
  ]

  return (
    <section className={`py-20 mini-projects-container ${darkMode ? "bg-black" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 tracking-wider">MINI PROJECTS</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto" />
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="mini-projects-scroll flex space-x-6"
          >
            {[...miniProjects, ...miniProjects].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.1,
                  zIndex: 10,
                  boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)",
                }}
                className="flex-shrink-0 group cursor-pointer"
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div
                    className={`w-64 h-40 relative border-2 transition-all duration-300 ${
                      darkMode
                        ? "border-gray-700 group-hover:border-red-500 bg-gradient-to-br from-gray-900 to-black"
                        : "border-gray-300 group-hover:border-red-500 bg-gradient-to-br from-gray-100 to-white"
                    }`}
                  >
                    <Image
                      src={getProjectImage(index % miniProjects.length) || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className={`object-cover transition-opacity duration-300 ${darkMode ? "opacity-50" : "opacity-70"} group-hover:opacity-70`}
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <div className="text-4xl mb-4">{project.emoji}</div>
                      <h3
                        className={`font-mono text-sm tracking-wider mb-2 group-hover:text-red-400 transition-colors ${
                          darkMode ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <ExternalLink
                        size={16}
                        className={`group-hover:text-red-500 transition-colors ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      />
                    </div>

                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        darkMode ? "bg-red-500/10" : "bg-red-500/5"
                      }`}
                    />
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
