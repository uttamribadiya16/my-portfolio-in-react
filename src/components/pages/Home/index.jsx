import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundElements } from './BackgroundElements';
import { TypewriterText } from './TypewriterText';
import { ActionButtons } from './ActionButtons';
import profileImage from '../../../images/profile.jpeg';

export function Home() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <BackgroundElements />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center justify-center min-h-[calc(100vh-3rem)] text-center px-4 z-10"
      >
        <img
          src={profileImage}
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

        <ActionButtons />
      </motion.div>
    </div>
  );
}