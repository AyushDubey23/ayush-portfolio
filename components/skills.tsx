"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

interface SkillsProps {
  darkMode: boolean
}

export default function Skills({ darkMode }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState("languages")

  // Simple icon components using SVG for category tabs
  const CodeIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M8 3L4 7L8 11M16 3L20 7L16 11M12 21L14 3"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  const ServerIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="3" width="20" height="4" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="2" y="9" width="20" height="4" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="2" y="15" width="20" height="4" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="6" cy="5" r="1" fill="currentColor" />
      <circle cx="6" cy="11" r="1" fill="currentColor" />
      <circle cx="6" cy="17" r="1" fill="currentColor" />
    </svg>
  )

  const ToolIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M14.7 6.3L19 2L22 5L17.7 9.3M9.3 14.7L5 19L2 16L6.3 11.7M14.7 6.3L11.7 9.3L14.7 12.3L17.7 9.3L14.7 6.3Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )

  const skillCategories = {
    languages: {
      title: "LANGUAGES",
      icon: CodeIcon,
      skills: [
        { name: "C++", image: "/assets/skills/languages/l1.png" },
        { name: "Python", image: "/assets/skills/languages/l2.png" },
        { name: "JavaScript", image: "/assets/skills/languages/l3.png" },
        { name: "HTML", image: "/assets/skills/languages/l4.png" },
        { name: "CSS", image: "/assets/skills/languages/l5.png" },
        { name: "SQL", image: "/assets/skills/languages/l6.png" },
        { name: "C", image: "/assets/skills/languages/l7.png" },
        { name: "Kotlin", image: "/assets/skills/languages/l8.png" },
      ],
    },
    frameworks: {
      title: "FRAMEWORKS",
      icon: ServerIcon,
      skills: [
        { name: "React", image: "/assets/skills/frameworks/f1.png" },
        { name: "Node.js", image: "/assets/skills/frameworks/f2.png" },
        { name: "Express.js", image: "/assets/skills/frameworks/f3.png" },
        { name: "Tailwind", image: "/assets/skills/frameworks/f4.png" },
        { name: "Firebase", image: "/assets/skills/frameworks/f5.png" },
        { name: "MongoDB", image: "/assets/skills/frameworks/f6.png" },
      ],
    },
    tools: {
      title: "TOOLS",
      icon: ToolIcon,
      skills: [
        { name: "GitHub", image: "/assets/skills/tools/t1.png" },
        { name: "Postman", image: "/assets/skills/tools/t2.png" },
        { name: "VS Code", image: "/assets/skills/tools/t3.png" },
        { name: "REST APIs", image: "/assets/skills/tools/t4.png" },
        { name: "Socket.IO", image: "/assets/skills/tools/t5.png" },
        { name: "Figma", image: "/assets/skills/tools/t6.png" },
      ],
    },
  }

  return (
    <section id="skills" className={`py-20 ${darkMode ? "bg-black" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 tracking-wider">SKILLS & TOOLS</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className={`flex space-x-1 ${darkMode ? "bg-gray-900" : "bg-gray-200"} p-1`}>
              {Object.entries(skillCategories).map(([key, category]) => {
                const IconComponent = category.icon
                return (
                  <motion.button
                    key={key}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(key)}
                    className={`px-6 py-3 font-mono text-sm tracking-wider transition-all duration-300 flex items-center space-x-2 ${
                      activeCategory === key
                        ? "bg-red-500 text-white"
                        : `${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`
                    }`}
                  >
                    <div className="w-4 h-4">
                      <IconComponent />
                    </div>
                    <span>{category.title}</span>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(239, 68, 68, 0.3)",
                }}
                className={`p-6 transition-all duration-300 group border ${
                  darkMode
                    ? "bg-gradient-to-br from-gray-900 to-black border-gray-700 hover:border-red-500/50"
                    : "bg-gradient-to-br from-gray-100 to-white border-gray-300 hover:border-red-500/50"
                }`}
              >
                <div className="text-center">
                  <div
                    className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center group-hover:bg-red-500/20 transition-colors duration-300 ${
                      darkMode ? "bg-red-500/10 border border-red-500/30" : "bg-red-500/5 border border-red-500/20"
                    }`}
                  >
                    <div className="w-8 h-8 relative group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={skill.image || "/placeholder.svg"}
                        alt={skill.name}
                        fill
                        className="object-contain"
                        sizes="32px"
                        onError={(e) => {
                          // Fallback to text if image fails to load
                          const target = e.target as HTMLImageElement
                          target.style.display = "none"
                          const parent = target.parentElement
                          if (parent) {
                            parent.innerHTML = `<div class="text-red-500 font-bold text-sm">${skill.name.slice(0, 3)}</div>`
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div className="font-mono text-sm tracking-wider">{skill.name}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
