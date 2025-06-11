"use client"

import { motion } from "framer-motion"
import { Download, GraduationCap, Code, Wrench } from "lucide-react"
import { useState } from "react"

interface ResumeProps {
  darkMode: boolean
}

export default function Resume({ darkMode }: ResumeProps) {
  const [activeSection, setActiveSection] = useState("education")

  const sections = {
    education: {
      icon: GraduationCap,
      title: "EDUCATION",
      items: [
        {
          title: "Bachelors in Technology (Engineering)",
          institution: "MMMUT, Gorakhpur",
          period: "2024 - 2028",
          details: "Currently pursuing Bachelor of Technology from Madan Moan Malviya University of Technology ",
        },
        {
          title: "12th Grade (PCM)",
          institution: "DPS Indira Nagar, Lucknow",
          period: "2022",
          details: "84% Aggregate - Physics, Chemistry, Mathematics",
        },
        {
          title: "10th Grade",
          institution: "DPS Indira Nagar, Lucknow",
          period: "2021",
          details: "92% Aggregate - All subjects",
        },
      ],
    },
    experience: {
      icon: Code,
      title: "EXPERIENCE & CONTRIBUTIONS",
      items: [
        {
          title: "Open Source Contributor",
          institution: "Hacktoberfest",
          period: "2023 - 2024",
          details: "Successfully completed Hacktoberfest 2023 & 2024, contributing to various open source projects",
        },
        {
          title: "Competitive Programmer",
          institution: "Codeforces",
          period: "2023 - Present",
          details: "Active competitive programmer with 959 rating, participated in multiple contests",
        },
        {
          title: "Full Stack Developer",
          institution: "Personal Projects",
          period: "2023 - Present",
          details: "Developed multiple web applications using React, Node.js, and modern web technologies",
        },
      ],
    },
    tools: {
      icon: Wrench,
      title: "TOOLS & TECHNOLOGIES",
      items: [
        {
          title: "Programming Languages",
          institution: "Core Skills",
          period: "Proficient",
          details: "C++, Python, JavaScript, HTML, CSS, SQL, C, Kotlin",
        },
        {
          title: "Frameworks & Libraries",
          institution: "Web Development",
          period: "Experienced",
          details: "React, Node.js, Express.js, Tailwind CSS, Firebase, MongoDB",
        },
        {
          title: "Development Tools",
          institution: "Productivity",
          period: "Daily Use",
          details: "GitHub, VS Code, Postman, REST APIs, Socket.IO, Figma",
        },
      ],
    },
  }

  return (
    <section
      className={`py-20 ${darkMode ? "bg-gradient-to-b from-gray-900 to-black" : "bg-gradient-to-b from-gray-100 to-white"}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 tracking-wider">RESUME</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8" />

          <motion.a
            href="/assets/rressume.pdf" // Updated path to your resume
            download="Ayush_Dubey_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-red-500 text-white font-mono tracking-wider hover:bg-red-600 transition-colors"
          >
            <Download size={20} />
            <span>DOWNLOAD RESUME</span>
          </motion.a>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Section Tabs */}
          <div className="flex justify-center mb-12">
            <div className={`flex space-x-1 p-1 ${darkMode ? "bg-gray-900" : "bg-gray-200"}`}>
              {Object.entries(sections).map(([key, section]) => (
                <motion.button
                  key={key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveSection(key)}
                  className={`flex items-center space-x-2 px-6 py-3 font-mono text-sm tracking-wider transition-all duration-300 ${
                    activeSection === key
                      ? "bg-red-500 text-white"
                      : darkMode
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <section.icon size={16} />
                  <span>{section.title}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Section Content */}
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {sections[activeSection as keyof typeof sections].items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className={`p-6 transition-all duration-300 ${
                  darkMode
                    ? "bg-black/50 border border-gray-700 hover:border-red-500/50"
                    : "bg-white/50 border border-gray-300 hover:border-red-500/30"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>{item.title}</h3>
                  <span className="text-red-400 font-mono text-sm">{item.period}</span>
                </div>
                <div className={`font-medium mb-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {item.institution}
                </div>
                <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {item.details}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
