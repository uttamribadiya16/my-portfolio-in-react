import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-3rem)] text-center px-4"
    >
      <img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80"
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover mb-8 border-4 border-blue-500"
      />
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-5xl font-bold text-white mb-4"
      >
        John Doe
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl text-gray-400 mb-8"
      >
        Full Stack Developer & UI/UX Designer
      </motion.p>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex space-x-6"
      >
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <Github className="w-8 h-8" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <Linkedin className="w-8 h-8" />
        </a>
        <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors">
          <Mail className="w-8 h-8" />
        </a>
      </motion.div>
    </motion.div>
  );
}