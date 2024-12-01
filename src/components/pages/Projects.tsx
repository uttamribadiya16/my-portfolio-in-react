import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with real-time inventory management",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "MongoDB", "Redux"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-8 px-4"
    >
      <h1 className="text-4xl font-bold text-white mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#2d2d2d] rounded-lg overflow-hidden group"
          >
            <div className="relative">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors">
                  <Github className="w-6 h-6 text-black" />
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors">
                  <ExternalLink className="w-6 h-6 text-black" />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 bg-[#363636] text-sm rounded-full text-blue-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}