import React from 'react';
import { Code } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export function MenuBar() {
  const menuItems = ['File', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Help'];
  const { currentTheme } = useTheme();

  return (
    <div 
      className="h-7 flex items-center select-none border-b"
      style={{ 
        backgroundColor: currentTheme.colors.background,
        borderColor: currentTheme.colors.borderColor,
        color: currentTheme.colors.foreground
      }}
    >
      <div className="flex items-center px-2 space-x-2">
        <Code className="h-4 w-4" style={{ color: currentTheme.colors.accent }} />
        {menuItems.map((item) => (
          <button
            key={item}
            className="px-3 py-1 text-sm rounded-sm transition-colors"
            style={{
              '&:hover': {
                backgroundColor: currentTheme.colors.tabActiveBackground
              }
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex-1" />
      <div className="mac-window-controls mr-2">
        <button className="close" aria-label="Close"></button>
        <button className="minimize" aria-label="Minimize"></button>
        <button className="maximize" aria-label="Maximize"></button>
      </div>
    </div>
  );
}