"use client"

import { motion } from "framer-motion"
import { Code, Database, Smartphone, Brain, GitBranch, Bot } from "lucide-react"

interface AboutProps {
  darkMode: boolean
}

export default function About({ darkMode }: AboutProps) {
  const identities = [
    { icon: Code, text: "COMPETITIVE PROGRAMMER", color: "text-red-500" },
    { icon: Database, text: "FULL STACK WEB DEVELOPER", color: "text-blue-400" },
    { icon: Smartphone, text: "ANDROID APP DEVELOPMENT ENTHUSIAST", color: "text-green-400" },
    { icon: Brain, text: "MACHINE LEARNING BEGINNER", color: "text-purple-400" },
    { icon: GitBranch, text: "OPEN SOURCE CONTRIBUTOR", color: "text-orange-400" },
    { icon: Bot, text: "PROMPT ENGINEER IN TRAINING", color: "text-cyan-400" },
  ]

  return (
    <section
      id="about"
      className={`py-20 ${
        darkMode ? "bg-gradient-to-b from-black to-gray-900" : "bg-gradient-to-b from-white to-gray-100"
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 tracking-wider">ABOUT ME</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              <p className="mb-4">
                I'm a passionate Computer Science  student at MMMUT, driven by the art of problem-solving and
                the thrill of competitive programming. My journey in technology spans across multiple domains, from
                crafting elegant web solutions to exploring the frontiers of machine learning.
              </p>
              <p>
                With a strong foundation in algorithms and data structures, I channel my competitive programming skills
                into building real-world applications that make a difference. You can check out my competitive
                programming journey on{" "}
                <a
                  href="https://codeforces.com/profile/AyushDubey23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline"
                >
                  Codeforces
                </a>{" "}
                where I maintain a rating of 959.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div
                className={`p-4 border ${
                  darkMode ? "bg-red-500/10 border-red-500/30" : "bg-red-500/5 border-red-500/20"
                }`}
              >
                <div className="text-2xl font-bold text-red-500">959</div>
                <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>CODEFORCES RATING</div>
              </div>
              <div
                className={`p-4 border ${
                  darkMode ? "bg-red-500/10 border-red-500/30" : "bg-red-500/5 border-red-500/20"
                }`}
              >
                <div className="text-2xl font-bold text-red-500">1600</div>
                <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>CHESS.COM RAPID</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {identities.map((identity, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, x: 10 }}
                className={`flex items-center space-x-4 p-4 border transition-all duration-300 ${
                  darkMode
                    ? "bg-black/50 border-gray-700 hover:border-red-500/50"
                    : "bg-white/50 border-gray-300 hover:border-red-500/30"
                }`}
              >
                <div className={`p-2 ${identity.color}`}>
                  <identity.icon size={24} />
                </div>
                <div className="font-mono text-sm tracking-wider">{identity.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
