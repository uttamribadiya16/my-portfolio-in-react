import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export function Contact() {
  const { currentTheme } = useTheme();
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-8 px-4"
    >
      <h1 className="text-4xl font-bold text-white mb-8">Contact Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-gray-300">
              <Mail className="w-6 h-6 text-blue-400" />
              <span>uttamribadiya163098@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <Phone className="w-6 h-6 text-blue-400" />
              <span>+91 74056 30123</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <MapPin className="w-6 h-6 text-blue-400" />
              <span>Satellite, Ahmedabad, India</span>
            </div>
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-[#2d2d2d] rounded-lg border border-gray-600 text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-[#2d2d2d] rounded-lg border border-gray-600 text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 bg-[#2d2d2d] rounded-lg border border-gray-600 text-white focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
}