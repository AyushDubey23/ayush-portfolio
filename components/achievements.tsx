"use client"

import { motion } from "framer-motion"
import { Trophy, Target, Star, Award, Code, PuzzleIcon as Chess } from "lucide-react"

interface AchievementsProps {
  darkMode: boolean
}

export default function Achievements({ darkMode }: AchievementsProps) {
  const achievements = [
    {
      icon: Trophy,
      title: "100 PERCENTILE",
      subtitle: "Computational Thinking (IITM BS Program)",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Target,
      title: "AIR 4142",
      subtitle: "IISER Aptitude Test",
      color: "from-blue-400 to-purple-500",
    },
    {
      icon: Code,
      title: "959 RATING",
      subtitle: "Codeforces Competitive Programming",
      color: "from-green-400 to-blue-500",
      link: "https://codeforces.com/profile/AyushDubey23",
    },
    {
      icon: Chess,
      title: "1600 RAPID",
      subtitle: "Chess.com Rating",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Star,
      title: "HACKTOBERFEST",
      subtitle: "Completed 2023 & 2024",
      color: "from-orange-400 to-red-500",
    },
    {
      icon: Award,
      title: "TOP 8%",
      subtitle: "Codeforces Kotlin Round",
      color: "from-cyan-400 to-blue-500",
    },
  ]

  return (
    <section
      className={`py-20 ${
        darkMode ? "bg-gradient-to-b from-gray-900 to-black" : "bg-gradient-to-b from-gray-100 to-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 tracking-wider">ACHIEVEMENTS</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              }}
              className="relative group"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{
                  background: `linear-gradient(135deg, ${achievement.color.split(" ")[1]}, ${achievement.color.split(" ")[3]})`,
                }}
              />

              <div
                className={`relative p-8 border group-hover:border-transparent transition-all duration-300 ${
                  darkMode ? "bg-black border-gray-700" : "bg-white border-gray-300"
                }`}
              >
                {achievement.link ? (
                  <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="block">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${achievement.color} flex items-center justify-center`}
                    >
                      <achievement.icon size={32} className="text-white" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2 tracking-wider">{achievement.title}</h3>
                      <p className={`font-mono text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        {achievement.subtitle}
                      </p>
                    </div>
                  </a>
                ) : (
                  <>
                    <div
                      className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${achievement.color} flex items-center justify-center`}
                    >
                      <achievement.icon size={32} className="text-white" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2 tracking-wider">{achievement.title}</h3>
                      <p className={`font-mono text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                        {achievement.subtitle}
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Glowing effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-red-500/50 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
