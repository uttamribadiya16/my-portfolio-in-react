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
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <div className="hidden lg:flex absolute inset-y-1/2 right-[5vw] flex-col items-end justify-center z-0">
        {["I", "BUILD", "WEBSITE"].map((word, idx) => (
          <motion.h1
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="text-[8vw] font-extrabold text-white/20 leading-tight opacity-70 whitespace-nowrap text-shadow-lg"
          >
            {word}
          </motion.h1>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center lg:items-start justify-center min-h-[calc(100vh-6rem)] text-center lg:text-left px-4 z-10 mt-0 lg:mt-0"
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start mb-8">
          <img
            src={profileImage}
            alt="Profile"
            style={{ borderColor: currentTheme.colors.accent }}
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover border-4 shadow-lg"
          />
          <div className="mt-4 lg:mt-0 lg:ml-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-4xl font-bold text-white mb-4 relative"
            >
              Uttam Ribadiya
              <div
                style={{ backgroundColor: currentTheme.colors.accent }}
                className="absolute -bottom-2 left-0 right-0 h-1 transform scale-x-0 animate-expand" 
              />
            </motion.h1>
            <motion.div
              style={{ display: "flex", overflow: "hidden" }}
              variants={container}
              initial="hidden"
              animate="visible"
              className="text-gray-400 text-base sm:text-lg"
            >
              {letters.map((letter, index) => (
                <motion.span key={index} variants={child}>
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex space-x-4 sm:space-x-6 mt-4"
            >
              <a 
                href="https://github.com/uttamribadiya16" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              >
                <Github className="w-6 h-6 sm:w-8 sm:h-8" />
              </a>
              <a 
                href="https://www.linkedin.com/in/uttam-ribadiya-73156b132/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
              </a>
              <a 
                href="mailto:uttamribadiya163098@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              >
                <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8"
            >
              <Link
                to="/projects"
                style={{ backgroundColor: currentTheme.colors.accent }}
                className="px-6 sm:px-8 py-3 text-sm sm:text-base rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
              >
                View Work
              </Link>
              <Link
                to="/contact"
                className="px-6 sm:px-8 py-3 text-sm sm:text-base border border-white/20 rounded-lg text-white font-medium hover:bg-white/5 transition-colors"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
