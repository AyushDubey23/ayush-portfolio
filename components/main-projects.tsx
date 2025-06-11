"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

interface MainProjectsProps {
  darkMode: boolean
}

export default function MainProjects({ darkMode }: MainProjectsProps) {
  const projects = [
    {
      id: 1,
      title: "RAP CASED",
      description:
        "Hip-hop iPhone case store with dark theme and lo-fi flavor. Complete e-commerce solution with modern design.",
      tech: ["React", "CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://ayushdubey23.github.io/rap-cased/",
      githubUrl: "#",
      gif: "/assets/proj1.gif", // Updated path
    },
    {
      id: 2,
      title: "MESS SLOT BOOKING",
      description: "Real-time mess queue management system for efficient dining hall operations with live updates.",
      tech: ["React", "Firebase", "Real-time DB", "Authentication"],
      liveUrl: "https://ayushdubey23.github.io/mess_slot_booking/",
      githubUrl: "#",
      gif: "/assets/proj2.gif", // Updated path
    },
    {
      id: 3,
      title: "REAL-TIME CHAT APP",
      description: "Interactive chat application with real-time messaging using Socket.IO and Firebase integration.",
      tech: ["Node.js", "Socket.IO", "Firebase", "Express"],
      liveUrl: "#",
      githubUrl: "https://github.com/AyushDubey23/chat-app/tree/main/node-realtime-chat-app-main",
      gif: "/assets/proj3.gif", // Updated path
    },
    {
      id: 4,
      title: "INTERACTIVE TO-DO LIST",
      description: "Feature-rich task management application with drag-and-drop functionality and local storage.",
      tech: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
      liveUrl: "https://ayushdubey23.github.io/to-do-list/",
      githubUrl: "#",
      gif: "/assets/proj4.gif", // Updated path
    },
  ]

  return (
    <section
      id="projects"
      className={`py-20 ${darkMode ? "bg-gradient-to-b from-black to-gray-900" : "bg-gradient-to-b from-white to-gray-100"}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 tracking-wider">FEATURED PROJECTS</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto" />
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
            >
              {/* Project Image/GIF */}
              <motion.div whileHover={{ scale: 1.05 }} className="lg:w-1/2 relative group">
                <div className="relative overflow-hidden border-2 border-gray-700 group-hover:border-red-500 transition-all duration-300">
                  <div className="aspect-video relative">
                    <Image
                      src={project.gif || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white font-mono text-lg">VIEW PROJECT</div>
                  </div>
                </div>
              </motion.div>

              {/* Project Info */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-4 tracking-wider">{project.title}</h3>
                  <p className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-sm font-mono tracking-wider ${
                        darkMode
                          ? "bg-red-500/20 border border-red-500/50 text-red-400"
                          : "bg-red-500/10 border border-red-500/30 text-red-600"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.liveUrl !== "#" && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-6 py-3 bg-red-500 text-white font-mono tracking-wider hover:bg-red-600 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>LIVE DEMO</span>
                    </motion.a>
                  )}

                  {project.githubUrl !== "#" && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-6 py-3 border border-red-500 text-red-500 font-mono tracking-wider hover:bg-red-500 hover:text-white transition-all"
                    >
                      <Github size={20} />
                      <span>SOURCE CODE</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
