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
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="text-xl md:text-2xl font-bold text-red-500">
            {"<AYUSH/>"}
          </motion.div>

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

          <div className="flex items-center space-x-3 md:space-x-4">
            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 border transition-colors ${
                darkMode
                  ? "bg-red-500/20 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  : "bg-red-500/10 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              }`}
            >
              {darkMode ? <Sun size={18} className="md:w-5 md:h-5" /> : <Moon size={18} className="md:w-5 md:h-5" />}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 ${darkMode ? "text-white" : "text-gray-800"}`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden mt-4 pt-4 border-t ${darkMode ? "border-red-500/20" : "border-red-500/10"}`}
          >
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
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
