import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundElements } from './BackgroundElements';
import { TypewriterText } from './TypewriterText';
import { ActionButtons } from './ActionButtons';

export function Home() {
  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden bg-[#0F172A]">
      <BackgroundElements />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold text-white mb-4"
          >
            Uttam Ribadiya
          </motion.h1>
          
          <div className="h-8 mb-8 flex justify-center">
            <TypewriterText text="Full Stack Web Developer" />
          </div>

          <ActionButtons />
        </motion.div>
      </div>
    </div>
  );
}