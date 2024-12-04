import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Globe } from 'lucide-react';

export function About() {
  const skills = [
    { 
      category: 'Frontend', 
      items: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Material UI']
    },
    { 
      category: 'Backend', 
      items: ['.NET Core', 'WebAPI', 'MVC', 'C#', 'MS SQL', 'Entity Framework', 'REST APIs']
    },
    { 
      category: 'DevOps & Tools', 
      items: ['Git', 'Azure DevOps', 'CI/CD', 'Docker', 'Agile/Scrum', 'JIRA', 'Visual Studio']
    }
  ];

  const experiences = [
    {
      company: "Tech Solutions Inc",
      position: "Senior Full Stack Developer",
      period: "2020 - Present",
      description: "Leading development of enterprise applications using Angular, React, and .NET Core"
    },
    {
      company: "Digital Innovations Ltd",
      position: "Full Stack Developer",
      period: "2018 - 2020",
      description: "Developed and maintained web applications using Angular and .NET technologies"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      school: "Gujarat Technological University",
      year: "2018"
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
        <h1 className="text-4xl font-bold mb-4">🚀 Full Stack Developer 🌐</h1>
        <p className="text-xl mb-6 text-gray-400">Specializing in Angular, React, and .NET Core</p>
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
        <h2 className="text-2xl font-semibold mb-6">💼 Professional Summary</h2>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Greetings! I'm a skilled Full-Stack Developer with over 5 years of experience in building robust and scalable web applications.
            My expertise spans across modern frontend frameworks and backend technologies, with a strong focus on delivering high-quality solutions.
          </p>
          
          <div className="space-y-2">
            <p>🔧 Core Competencies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Extensive experience with Angular 8+ and React, crafting responsive and intuitive user interfaces</li>
              <li>Strong backend development skills using .NET Core, MVC, and WebAPI</li>
              <li>Expertise in database design and optimization with MS SQL</li>
              <li>Proficient in implementing RESTful APIs and microservices architecture</li>
              <li>Experience with Agile methodologies and CI/CD practices</li>
            </ul>
          </div>

          <p>
            ⚙️ My approach combines technical expertise with a strong focus on delivering business value. I'm particularly passionate about
            creating clean, maintainable code and implementing best practices in software development.
          </p>

          <p>
            🌐 I stay current with industry trends and continuously expand my skillset to bring innovative solutions to complex problems.
            My commitment to quality and attention to detail ensures the delivery of robust and scalable applications.
          </p>

          <p>
            📬 I'm always open to discussing new projects, technical challenges, or potential collaborations.
            Let's connect and explore how we can work together to bring your ideas to life!
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">🛠️ Technical Skills</h2>
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
        <h2 className="text-2xl font-semibold mb-6">💼 Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-[#2d2d2d] rounded-lg p-6">
              <h3 className="text-xl font-semibold">{exp.position}</h3>
              <p className="text-blue-400">{exp.company}</p>
              <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">🎓 Education</h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="bg-[#2d2d2d] rounded-lg p-6">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-blue-400">{edu.school}</p>
              <p className="text-gray-400">{edu.year}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}