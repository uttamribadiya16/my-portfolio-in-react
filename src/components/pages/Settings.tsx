import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Monitor } from 'lucide-react';

export function Settings() {
  const [selectedTheme, setSelectedTheme] = useState('dark');
  
  const themes = [
    { id: 'light', name: 'Light', icon: Sun, colors: ['#ffffff', '#f3f4f6'] },
    { id: 'dark', name: 'Dark', icon: Moon, colors: ['#1e1e1e', '#252526'] },
    { id: 'system', name: 'System', icon: Monitor, colors: ['#1e1e1e', '#ffffff'] }
  ];

  const themeColors = [
    { id: 'blue', color: '#007acc' },
    { id: 'purple', color: '#646cff' },
    { id: 'green', color: '#4caf50' },
    { id: 'orange', color: '#ff9800' },
    { id: 'pink', color: '#e91e63' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-8 px-4"
    >
      <h1 className="text-4xl font-bold text-white mb-8">Settings</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6">Theme</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {themes.map(({ id, name, icon: Icon, colors }) => (
            <button
              key={id}
              onClick={() => setSelectedTheme(id)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedTheme === id 
                  ? 'border-blue-500 bg-[#2d2d2d]' 
                  : 'border-transparent bg-[#1e1e1e] hover:bg-[#2d2d2d]'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon className="w-5 h-5 text-gray-300" />
                <span className="text-gray-300">{name}</span>
              </div>
              <div className="flex space-x-2 mt-3">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 rounded"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-6">Accent Color</h2>
        <div className="flex space-x-4">
          {themeColors.map(({ id, color }) => (
            <button
              key={id}
              className="w-10 h-10 rounded-full border-2 border-transparent hover:border-white transition-all"
              style={{ backgroundColor: color }}
              onClick={() => {/* Add color change logic */}}
            />
          ))}
        </div>
      </section>
    </motion.div>
  );
}