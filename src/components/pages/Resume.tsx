import React from 'react';
import { motion } from 'framer-motion';

export function Resume() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      <iframe
        src="https://cvrest.com/cv/uttamribadiya163098"
        className="w-full h-[calc(100vh-2rem)]"
        title="Resume"
      />
    </motion.div>
  );
}