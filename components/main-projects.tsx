"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface MainProjectsProps {
  darkMode: boolean;
}

export default function MainProjects({ darkMode }: MainProjectsProps) {
  const projects = [
    {
      id: 1,
      title: "RAP CASED",
      description:
        "RAP CASED is a visually immersive, lo-fi themed e-commerce experience crafted with React and powered by Next.js for seamless routing and high-performance rendering. Styled using Tailwind CSS, and deployed on Vercel’s edge network, it delivers a fast, responsive dark UI inspired by hip-hop culture. With a modular component architecture, fluid scroll animations, and optimized asset handling, it embodies clean, scalable frontend engineering and modern web best practices.",
      tech: ["React.js", "Next.js", "Tailwind CSS", "Responsive Design"],
      liveUrl: "https://rap-cased-eosin.vercel.app/",
      githubUrl: "#",
      gif: "/assets/proj1.gif",
    },
    {
      id: 2,
      title: "MESS SLOT BOOKING",
      description:
        "MessMate is a full-stack, campus-focused slot booking platform engineered with Next.js for hybrid rendering and MongoDB as its dynamic backend datastore. Designed with a clean, mobile-first UI using Tailwind CSS, and deployed seamlessly via Vercel, it delivers a fast, intuitive user experience optimized for high concurrency and real-time interaction. Built with a modular architecture, RESTful API integration, and scalable data flow, the app showcases production-ready design patterns, efficient state management, and modern full-stack development best practices tailored for smart queue systems.",
      tech: ["React.js", "Next.js", "Firebase", "MongoDB", "Tailwind CSS", "Authentication"],
      liveUrl: "https://ayushdubey23.github.io/mess_slot_booking/",
      githubUrl: "#",
      gif: "/assets/proj2.gif",
    },
    {
      id: 3,
      title: "REAL-TIME CHAT APP",
      description:
        "Interactive chat application with real-time messaging using Socket.IO and Firebase integration.",
      tech: ["Node.js", "Socket.IO", "Firebase", "Express"],
      liveUrl: "#",
      githubUrl: "https://github.com/AyushDubey23/chat-app/tree/main/node-realtime-chat-app-main",
      gif: "/assets/proj3.gif",
    },
    {
      id: 4,
      title: "MACHINE LEARNING HAND DETECTION",
      description:
        "VisionAI is a high-performance, browser-native computer vision platform engineered with TensorFlow.js and MediaPipe for real-time hand, face, and pose recognition—entirely client-side, with zero backend overhead. Architected for rapid inference and seamless interaction, it delivers intelligent detection with exceptional accuracy. Styled with a modern, responsive UI, the system exemplifies modular frontend design, optimized AI pipelines, and edge computing, highlighting robust JavaScript architecture and cutting-edge web-based deep learning capabilities.",
      tech: ["TensorFlow.js", "JavaScript", "HTML5", "MediaPipe", "Local Storage"],
      liveUrl: "https://ayushdubey23.github.io/Machine-Learning-Project-Vision-AI-/",
      githubUrl: "#",
      gif: "/assets/proj4.gif"
    },
  ];

  return (
    <section
      id="projects"
      className={`py-20 ${
        darkMode
          ? "bg-gradient-to-b from-black to-gray-900"
          : "bg-gradient-to-b from-white to-gray-100"
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 tracking-wider">
            FEATURED PROJECTS
          </h2>
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
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
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
                  <p
                    className={`text-lg leading-relaxed ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
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
  );
}
