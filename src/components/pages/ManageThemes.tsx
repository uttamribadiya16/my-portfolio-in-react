import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

export function ManageThemes() {
  const { currentTheme, setTheme, availableThemes } = useTheme();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-8 px-4"
    >
      <h1 className="text-3xl font-bold mb-8">Theme Settings</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {availableThemes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setTheme(theme.id)}
            className={`p-6 rounded-lg transition-all ${
              currentTheme.id === theme.id 
                ? 'ring-2 ring-accent'
                : 'hover:bg-opacity-50'
            }`}
            style={{
              backgroundColor: theme.colors.editorBackground,
              color: theme.colors.editorForeground,
              borderColor: theme.colors.borderColor,
              borderWidth: '1px',
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium">{theme.name}</span>
              {currentTheme.id === theme.id && (
                <span className="px-2 py-1 text-sm rounded" style={{
                  backgroundColor: theme.colors.accent,
                  color: theme.colors.buttonForeground,
                }}>
                  Active
                </span>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <div className="h-4 rounded" style={{ backgroundColor: theme.colors.accent }} />
                <div className="h-4 rounded" style={{ backgroundColor: theme.colors.sidebarBackground }} />
                <div className="h-4 rounded" style={{ backgroundColor: theme.colors.statusBarBackground }} />
              </div>
              <div className="space-y-2">
                <div className="h-4 rounded" style={{ backgroundColor: theme.colors.tabActiveBackground }} />
                <div className="h-4 rounded" style={{ backgroundColor: theme.colors.buttonBackground }} />
                <div className="h-4 rounded" style={{ backgroundColor: theme.colors.borderColor }} />
              </div>
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
}