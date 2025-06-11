"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Github, Linkedin, Instagram, Music } from "lucide-react"

interface ContactProps {
  darkMode: boolean
}

export default function Contact({ darkMode }: ContactProps) {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/AyushDubey23",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ayush-dubey-508196331/",
      color: "hover:text-blue-400",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/_ayushhdubey_/",
      color: "hover:text-pink-400",
    },
    {
      icon: Music,
      label: "Spotify",
      href: "https://open.spotify.com/user/315ckgge6em6bua2anr4qvm4xsne",
      color: "hover:text-green-400",
    },
  ]

  const musicTaste = ["Drake", "Yeat", "Young Thug", "Travis Scott", "Nav", "Kendrick Lamar"]

  return (
    <section id="contact" className={`py-20 ${darkMode ? "bg-black" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 tracking-wider">GET IN TOUCH</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 tracking-wider">LET'S CONNECT</h3>
              <p className={`text-lg leading-relaxed mb-8 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                I'm always open to discussing new opportunities, collaborating on interesting projects, or just having a
                chat about technology, competitive programming, or chess. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 10 }}
                className={`flex items-center space-x-4 p-4 border ${
                  darkMode ? "bg-gray-900/50 border-gray-700" : "bg-gray-100/50 border-gray-300"
                }`}
              >
                <Mail className="text-red-500" size={24} />
                <div>
                  <div className={`font-mono text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>EMAIL</div>
                  <div className={darkMode ? "text-white" : "text-gray-900"}>
                    <a href="mailto:ayushdubey3740@gmail.com" className="hover:text-red-500 transition-colors">
                      ayushdubey3740@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className={`flex items-center space-x-4 p-4 border ${
                  darkMode ? "bg-gray-900/50 border-gray-700" : "bg-gray-100/50 border-gray-300"
                }`}
              >
                <MapPin className="text-red-500" size={24} />
                <div>
                  <div className={`font-mono text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>LOCATION</div>
                  <div className={darkMode ? "text-white" : "text-gray-900"}>
                    Lucknow, India (Studying at MMMUT, Gorakhpur)
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold mb-4 tracking-wider">SOCIAL MEDIA</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 border text-gray-400 ${social.color} transition-all duration-300 ${
                      darkMode ? "bg-gray-900 border-gray-700" : "bg-gray-100 border-gray-300"
                    }`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Music & Personality */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div
              className={`p-8 border ${
                darkMode
                  ? "bg-gradient-to-br from-gray-900 to-black border-gray-700"
                  : "bg-gradient-to-br from-gray-100 to-white border-gray-300"
              }`}
            >
              <h4 className="text-2xl font-bold mb-6 tracking-wider flex items-center">
                <Music className="mr-3 text-green-400" size={24} />
                MUSIC TASTE
              </h4>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {musicTaste.map((artist, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`p-3 text-center ${
                      darkMode
                        ? "bg-green-500/10 border border-green-500/30"
                        : "bg-green-500/5 border border-green-500/20"
                    }`}
                  >
                    <div className="text-green-400 font-mono text-sm">{artist}</div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="https://open.spotify.com/user/315ckgge6em6bua2anr4qvm4xsne"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-green-600 text-white font-mono tracking-wider hover:bg-green-500 transition-colors"
              >
                <Music size={20} />
                <span>SPOTIFY PROFILE</span>
              </motion.a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`p-6 text-center ${
                  darkMode ? "bg-red-500/10 border border-red-500/30" : "bg-red-500/5 border border-red-500/20"
                }`}
              >
                <div className="text-3xl font-bold text-red-500 mb-2">4+</div>
                <div className={`text-sm font-mono ${darkMode ? "text-gray-400" : "text-gray-600"}`}>YEARS CODING</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`p-6 text-center ${
                  darkMode ? "bg-blue-500/10 border border-blue-500/30" : "bg-blue-500/5 border border-blue-500/20"
                }`}
              >
                <div className="text-3xl font-bold text-blue-500 mb-2">15+</div>
                <div className={`text-sm font-mono ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  PROJECTS BUILT
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
