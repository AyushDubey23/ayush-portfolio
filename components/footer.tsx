"use client"

import { motion } from "framer-motion"
import { Heart, Code } from "lucide-react"

interface FooterProps {
  darkMode: boolean
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer
      className={`py-12 border-t ${
        darkMode
          ? "bg-gradient-to-t from-red-900/20 to-black border-red-500/20"
          : "bg-gradient-to-t from-red-100/50 to-white border-red-500/10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="text-3xl font-bold text-red-500 mb-4">{"<AYUSH DUBEY/>"}</div>
            <p className={`font-mono ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              COMPETITIVE PROGRAMMER • FULL STACK DEVELOPER
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`flex items-center justify-center space-x-2 mb-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            <span>MADE WITH</span>
            <Heart className="text-red-500" size={16} />
            <span>AND</span>
            <Code className="text-red-500" size={16} />
            <span>BY AYUSH DUBEY</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={`text-sm font-mono ${darkMode ? "text-gray-500" : "text-gray-500"}`}
          >
            © 2024 AYUSH DUBEY. ALL RIGHTS RESERVED.
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className={`mt-4 text-xs font-mono ${darkMode ? "text-gray-600" : "text-gray-500"}`}
          >
            "CODE IS POETRY, ALGORITHMS ARE ART"
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
