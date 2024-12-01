import React from 'react';
import { motion } from 'framer-motion';

export function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'VS Code'] },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-8 px-4"
    >
      <h1 className="text-4xl font-bold text-white mb-8">About Me</h1>
      
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-white mb-4">Background</h2>
        <p className="text-gray-300 leading-relaxed">
          I'm a passionate full-stack developer with 5 years of experience building web applications.
          My journey in software development started with a curiosity about how websites work, and
          has evolved into a deep love for creating efficient, scalable, and user-friendly applications.
        </p>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
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
      </motion.section>
    </motion.div>
  );
}