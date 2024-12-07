import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../../images/profile.jpeg';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

export function Home() {
  const letters = Array.from("Full Stack Web Developer");
  const { currentTheme } = useTheme();
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <h1 className="text-[20vw] font-bold text-gray-800/5 whitespace-nowrap transform -rotate-12">
            I BUILD WEBSITE
          </h1>
        </div>
      </>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center justify-center min-h-[calc(100vh-3rem)] text-center px-4 z-10"
      >
        <img
          src={profileImage}
          alt="Profile"
          style={{ 
             borderColor: currentTheme.colors.accent
          }}
          className="w-32 h-32 rounded-full object-cover mb-8 border-4 shadow-lg"
        />
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl font-bold text-white mb-4 relative"
        >
          Uttam Ribadiya
          <div
          style={{ 
            backgroundColor: currentTheme.colors.accent
         }} 
          className="absolute -bottom-2 left-0 right-0 h-1 transform scale-x-0 animate-expand" />
        </motion.h1>
        
        <div className="h-8 mb-8">
          <motion.div
            style={{ display: "flex", overflow: "hidden" }}
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={child}
                className="text-gray-400"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex space-x-6"
        >
          <a 
            href="https://github.com/uttamribadiya16" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
          >
            <Github className="w-8 h-8" />
          </a>
          <a 
            href="https://www.linkedin.com/in/uttam-ribadiya-73156b132/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a 
            href="mailto:uttamribadiya163098@gmail.com" 
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
          >
            <Mail className="w-8 h-8" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 mt-8"
        >
          <Link
            to="/projects"
            style={{ 
              backgroundColor: currentTheme.colors.accent
            }}
            className="px-8 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
          >
            View Work
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border border-white/20 rounded-lg text-white font-medium hover:bg-white/5 transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}