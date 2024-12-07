import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export function Projects() {
  const { currentTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A robust e-commerce platform with features like payment integration and order tracking.",
      details: `
        This platform supports real-time inventory updates, user authentication, and role-based access control for admins and vendors.
        It integrates multiple payment gateways, including Stripe and PayPal, for secure transactions. Advanced features include 
        a recommendation engine for personalized product suggestions and dynamic pricing models based on user behavior.
      `,
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Healthcare Management System",
      description: "A system to manage hospital data including patients, staff, and appointments.",
      details: `
        Designed for multi-hospital environments, this system offers modules for patient registration, appointment scheduling, 
        staff management, and real-time health monitoring via connected IoT devices. It supports secure data sharing across 
        departments and detailed analytics for hospital performance and patient outcomes.
      `,
      tags: [".NET Core", "SQL Server", "Angular", "Entity Framework"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with kanban board and calendar integration.",
      details: `
        A productivity tool that includes features like team-based task assignments, deadline reminders, recurring tasks, and 
        priority-based sorting. The application integrates with third-party calendar systems such as Google Calendar and Outlook 
        for seamless synchronization. Real-time updates ensure that team members are always on the same page.
      `,
      tags: ["Angular", "TypeScript", "PostgreSQL"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Real-Time Stock Trading Platform",
      description: "A secure stock trading app with real-time updates and advanced charting tools.",
      details: `
        This platform enables users to trade stocks in real-time with minimal latency. It offers advanced charting tools, including 
        candlestick patterns, moving averages, and real-time data visualization. Other features include portfolio management, 
        multi-currency support, secure user authentication, and integration with third-party financial APIs for market data.
      `,
      tags: ["Next.js", "GraphQL", ".NET Core", "Redis"],
      github: "https://github.com",
      live: "https://example.com"
    }
  ];
  

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

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
            className="bg-[#2d2d2d] rounded-lg overflow-hidden cursor-pointer"
            onClick={() => openModal(project)}
          >
            <div className="flex items-center justify-center bg-[#363636] h-48">
              <Code
                style={{ color: currentTheme.colors.accent }}
                className="w-16 h-16"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    style={{ color: currentTheme.colors.accent }}
                    className="px-3 py-1 bg-[#363636] text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-[#2d2d2d] rounded-lg w-[90%] max-w-2xl p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-400"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h2>
            <p className="text-gray-400 mb-4">{selectedProject.description}</p>
            <p className="text-gray-300 mb-6">{selectedProject.details}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  style={{ color: currentTheme.colors.accent }}
                  className="px-3 py-1 bg-[#363636] text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
