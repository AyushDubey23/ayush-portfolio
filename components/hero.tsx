"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Github, Linkedin, Instagram, Music, Mail } from "lucide-react"
import Image from "next/image"

interface HeroProps {
  darkMode: boolean
}

export default function Hero({ darkMode }: HeroProps) {
  const [text, setText] = useState("")
  const fullText = "AYUSH DUBEY"
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 150)

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24"
    >
      {/* Animated background elements - reduced for mobile performance */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              x: typeof window !== "undefined" ? Math.random() * window.innerWidth : 0,
              y: typeof window !== "undefined" ? Math.random() * window.innerHeight : 0,
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 py-8">
        {/* Profile Picture - Responsive sizing */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-8"
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto relative">
            <div className={`absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 transform rotate-45`} />
            <div className={`absolute inset-2 ${darkMode ? "bg-black" : "bg-white"} transform rotate-45`} />
            <Image
              src="/assets/c5.jpeg" // Updated path to your profile photo
              alt="Ayush Dubey"
              width={180}
              height={180}
              className="absolute inset-4 object-cover transform -rotate-45"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </motion.div>

        {/* Name - Responsive text sizing */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 tracking-wider leading-tight"
        >
          {text}
          <span className={`text-red-500 ${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
        </motion.h1>

        {/* Location - Responsive text sizing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mb-6 md:mb-8"
        >
          <div
            className={`text-sm sm:text-lg md:text-xl lg:text-2xl ${darkMode ? "text-gray-400" : "text-gray-600"} mb-2`}
          >
            MMMUT, GORAKHPUR • LUCKNOW, INDIA
          </div>
        </motion.div>

        {/* Skills Grid - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto mb-8 md:mb-12"
        >
          {[
            "💻 COMPETITIVE PROGRAMMER",
            "🌐 FULL STACK DEVELOPER",
            "📱 ANDROID ENTHUSIAST",
            "🧠 ML BEGINNER",
            "🔓 OPEN SOURCE CONTRIBUTOR",
            "🤖 PROMPT ENGINEER",
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.02,
                backgroundColor: darkMode ? "rgba(239, 68, 68, 0.1)" : "rgba(239, 68, 68, 0.05)",
              }}
              className={`p-3 md:p-4 border transition-all duration-300 ${
                darkMode
                  ? "border-red-500/30 bg-black/50 backdrop-blur-sm"
                  : "border-red-500/20 bg-white/50 backdrop-blur-sm"
              }`}
            >
              <div className="text-xs sm:text-sm font-mono leading-relaxed">{item}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center flex-wrap gap-3 md:gap-6 mb-8 md:mb-12"
        >
          {[
            { icon: Github, href: "https://github.com/AyushDubey23", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/ayush-dubey-508196331/", label: "LinkedIn" },
            { icon: Instagram, href: "https://www.instagram.com/_ayushhdubey_/", label: "Instagram" },
            { icon: Music, href: "https://open.spotify.com/user/315ckgge6em6bua2anr4qvm4xsne", label: "Spotify" },
            { icon: Mail, href: "mailto:ayushdubey3740@gmail.com", label: "Email" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 md:p-3 border transition-all duration-300 ${
                darkMode
                  ? "bg-red-500/20 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  : "bg-red-500/10 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              }`}
              aria-label={social.label}
            >
              <social.icon size={20} className="md:w-6 md:h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator - Hidden on very small screens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-red-500"
          >
            <ChevronDown size={24} className="md:w-8 md:h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
