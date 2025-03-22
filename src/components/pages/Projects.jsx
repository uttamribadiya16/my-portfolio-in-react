import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export function Projects() {
  const { currentTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      projectName: "Buy & Sell Used Cars – Carrier, Buyer, and Admin Portals",
      technologies: "C#, .NET Framework, ASP.NET MVC, ASP.NET Core, SOAP/REST APIs, OData, Web Services, Microservices, GitHub, LINQ, Entity Framework, JavaScript, jQuery, RabbitMQ, Redis Cache, Microsoft SQL Server, ElasticSearch",
      rolesAndResponsibilities: "Development, Unit Testing, Client Communication, Task Creation, Requirement Analysis, Code Review, Feature Analysis, Issue Resolution, and Team Lead.",
      description: `
        Developed Carrier, Buyer, and Admin portals for a used car marketplace. The Carrier portal allows carriers to manage vehicle pick-ups, deliveries, driver assignments, inspections, and seller payments. The Buyer portal enables buyers to browse available vehicles, make purchases, schedule deliveries, manage payments, and track orders. The Admin portal manages vendor payments, offer modifications, third-party communications, notifications, and user management.
      `
    },
    {
      name: "Media Cogent - Advertising Management System",
      technologies: "C#, .NET Framework, ASP.NET MVC, GitHub, LINQ, JavaScript, jQuery, ADO.NET, AngularJS, Microsoft SQL Server",
      rolesAndResponsibilities: "Handled full-cycle development & testing, client communication, requirement analysis, feature evaluation, and translating business needs into technical solutions.",
      description: `
        Built an advertising management system for media agencies and advertisers, covering ad planning across TV, radio, print, cinema, and digital. Managed budgets, cost calculations, lifecycle tracking, and role-based access.
      `
    },
    {
      name: "Project Demos Portal",
      technologies: "AngularJS, Node.js, MongoDB",
      rolesAndResponsibilities: "Designed and implemented the portal using UI Bakery, leveraging built-in components and actions. Generated Angular code and customized it as per project requirements.",
      description: `
        Developed a company-specific portal showcasing various projects, including details like technologies used, platforms, media (videos/images), and demo URLs.
      `
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
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.projectName || project.name}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies
                  ?.split(',')
                  .map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      style={{ color: currentTheme.colors.accent }}
                      className="px-3 py-1 bg-[#363636] text-sm rounded-full"
                    >
                      {tag.trim()}
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
            <h2 className="text-2xl font-bold text-white mb-4">
              {selectedProject.projectName || selectedProject.name}
            </h2>
            <p className="text-gray-400 mb-4">{selectedProject.description}</p>
            <p className="text-gray-300 mb-4">
              <strong>Roles & Responsibilities:</strong> {selectedProject.rolesAndResponsibilities}
            </p>
            <p className="text-gray-300 mb-6">
              <strong>Technologies:</strong> {selectedProject.toolsAndTechnologies || selectedProject.technologies}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}
