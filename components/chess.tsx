"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

interface ChessProps {
  darkMode: boolean
}

export default function Chess({ darkMode }: ChessProps) {
  return (
    <section
      className={`py-20 relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-r from-amber-900/20 via-black to-amber-900/20"
          : "bg-gradient-to-r from-amber-100/50 via-white to-amber-100/50"
      }`}
    >
      {/* Chess pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className={`${Math.floor(i / 8) % 2 === i % 2 ? "bg-white" : "bg-black"}`} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center items-center space-x-8 mb-8">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="text-6xl"
              >
                ♞
              </motion.div>
              <motion.div
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                className="text-6xl"
              >
                ♛
              </motion.div>
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                className="text-6xl"
              >
                ♝
              </motion.div>
            </div>

            <h2 className="text-5xl font-bold mb-4 tracking-wider">CODE & CHESS</h2>
            <p className="text-xl text-amber-400 mb-8 font-mono">MY PARALLEL PASSIONS</p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`p-8 backdrop-blur-sm border ${
                  darkMode ? "bg-black/70 border-amber-500/30" : "bg-white/70 border-amber-500/20"
                }`}
              >
                <div className="text-4xl font-bold text-amber-400 mb-2">1600</div>
                <div className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>RAPID RATING</div>
                <div className={`text-sm font-mono ${darkMode ? "text-gray-500" : "text-gray-600"}`}>CHESS.COM</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`p-8 backdrop-blur-sm border ${
                  darkMode ? "bg-black/70 border-amber-500/30" : "bg-white/70 border-amber-500/20"
                }`}
              >
                <div className="text-4xl font-bold text-amber-400 mb-2">1029</div>
                <div className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>CODEFORCES</div>
                <div className={`text-sm font-mono ${darkMode ? "text-gray-500" : "text-gray-600"}`}>
                  COMPETITIVE PROGRAMMING
                </div>
              </motion.div>
            </div>

            <motion.a
              href="https://www.chess.com/member/yourayush"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-amber-600 text-black font-bold tracking-wider hover:bg-amber-500 transition-colors"
            >
              <span>VIEW CHESS PROFILE</span>
              <ExternalLink size={20} />
            </motion.a>

            <p className={`mt-8 italic ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              "In chess, as in programming, every move matters. Both require strategic thinking, pattern recognition,
              and the ability to see several steps ahead."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
