import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Globe } from 'lucide-react';

export function About() {
  const skills = [
    { 
      category: 'Frontend', 
      items: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Material-UI']
    },
    { 
      category: 'Backend', 
      items: ['Node.js', 'Express', 'NestJS', 'MongoDB', 'PostgreSQL', 'Redis']
    },
    { 
      category: 'DevOps & Tools', 
      items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Git', 'Linux']
    }
  ];

  const experiences = [
    {
      company: "Tech Solutions Inc",
      position: "Senior Full Stack Developer",
      period: "2020 - Present",
      description: "Leading development of enterprise-scale applications using React and Node.js"
    },
    {
      company: "Digital Innovations Ltd",
      position: "Frontend Developer",
      period: "2018 - 2020",
      description: "Developed responsive web applications using modern JavaScript frameworks"
    }
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      school: "Tech University",
      year: "2018"
    },
    {
      degree: "Bachelor of Computer Science",
      school: "State University",
      year: "2016"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-8 px-4"
    >
      <div className="mb-12 text-center">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500"
        />
        <h1 className="text-4xl font-bold text-white mb-4">John Doe</h1>
        <p className="text-xl text-gray-400 mb-6">Senior Full Stack Developer</p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <Globe className="w-6 h-6" />
          </a>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I'm a passionate full-stack developer with over 5 years of experience in building web applications.
          I specialize in React, Node.js, and cloud technologies. My approach combines technical expertise
          with a strong focus on user experience and business objectives. I'm constantly learning and
          exploring new technologies to stay at the forefront of web development.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-[#2d2d2d] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-3 py-1 bg-[#363636] rounded-full text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-[#2d2d2d] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
              <p className="text-blue-400">{exp.company}</p>
              <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-6">Education</h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="bg-[#2d2d2d] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
              <p className="text-blue-400">{edu.school}</p>
              <p className="text-gray-400">{edu.year}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}