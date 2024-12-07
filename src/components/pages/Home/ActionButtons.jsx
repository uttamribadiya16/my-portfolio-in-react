import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function ActionButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="flex gap-4 mt-8"
    >
      <Link
        to="/projects"
        className="px-8 py-3 bg-coral-gradient rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
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
  );
}