"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

export default function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] backdrop-blur-sm border-b ${
        darkMode ? "bg-black/95 border-red-500/20" : "bg-white/95 border-red-500/10"
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4 max-w-full">
        <div className="flex items-center justify-between w-full">
          <motion.a
            href="https://pixels-tan.vercel.app/"
            whileHover={{
              scale: 1.05,
              x: [0, -1, 1, -1, 1, 0],
              textShadow: [
                "0 0 0 transparent",
                "2px 0 #ef4444, -2px 0 #dc2626",
                "-2px 0 #ef4444, 2px 0 #dc2626",
                "1px 0 #ef4444, -1px 0 #dc2626",
                "0 0 0 transparent",
              ],
              filter: [
                "brightness(1)",
                "brightness(1.2) contrast(1.1)",
                "brightness(0.9) contrast(1.2)",
                "brightness(1.1) contrast(1.1)",
                "brightness(1)",
              ],
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              duration: 0.4,
              x: { duration: 0.2, repeat: 1 },
              textShadow: { duration: 0.3 },
              filter: { duration: 0.3 },
            }}
            className="text-xl md:text-2xl font-bold text-red-500 flex-shrink-0 hover:text-red-400 transition-all duration-300 cursor-pointer relative overflow-hidden group"
            title="dont click"
          >
            <span className="relative z-10 group-hover:animate-pulse">{"<AYUSH/>"}</span>
            <motion.div
              className="absolute inset-0 bg-red-500/10"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ originX: 0 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
            {/* Scanline effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/30 to-transparent h-1"
              initial={{ y: "-100%" }}
              whileHover={{ y: "100%" }}
              transition={{ duration: 0.4, repeat: 1 }}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className={`hover:text-red-500 transition-colors font-medium tracking-wider text-sm lg:text-base ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0">
            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 border transition-colors flex-shrink-0 ${
                darkMode
                  ? "bg-red-500/20 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  : "bg-red-500/10 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              }`}
            >
              {darkMode ? <Sun size={16} className="md:w-5 md:h-5" /> : <Moon size={16} className="md:w-5 md:h-5" />}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 flex-shrink-0 ${darkMode ? "text-white" : "text-gray-800"}`}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden mt-4 pt-4 border-t w-full overflow-hidden ${darkMode ? "border-red-500/20" : "border-red-500/10"}`}
          >
            <div className="max-w-full">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 hover:text-red-500 transition-colors font-medium tracking-wider ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
