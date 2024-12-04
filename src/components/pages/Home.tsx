import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const TypewriterText = ({ text }: { text: string }) => {
  const letters = Array.from(text);
  
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
  );
};

const BackgroundText = ({ text }: { text: string }) => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
    <h1 className="text-[20vw] font-bold text-gray-800/5 whitespace-nowrap transform -rotate-12">
      {text}
    </h1>
  </div>
);

const BackgroundDesign = () => (
  <>
    <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
    <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
    <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
  </>
);

export function Home() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <BackgroundDesign />
      <BackgroundText text="I BUILD WEBSITES" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center justify-center min-h-[calc(100vh-3rem)] text-center px-4 z-10"
      >
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-8 border-4 border-blue-500 shadow-lg"
        />
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl font-bold text-white mb-4 relative"
        >
          Uttam Ribadiya
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500 transform scale-x-0 animate-expand" />
        </motion.h1>
        
        <div className="h-8 mb-8">
          <TypewriterText text="Full Stack Web Developer" />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex space-x-6"
        >
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
          >
            <Github className="w-8 h-8" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a 
            href="mailto:contact@example.com" 
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
          >
            <Mail className="w-8 h-8" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}