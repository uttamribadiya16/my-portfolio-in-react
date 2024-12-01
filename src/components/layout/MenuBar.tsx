import React from 'react';
import { Code } from 'lucide-react';

export function MenuBar() {
  const menuItems = ['File', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Help'];

  return (
    <div className="h-7 bg-[#1e1e1e] flex items-center text-gray-300 select-none border-b border-[#2d2d2d]">
      <div className="flex items-center px-2 space-x-2">
        <Code className="h-4 w-4 text-blue-500" />
        {menuItems.map((item) => (
          <button
            key={item}
            className="px-3 py-1 text-sm hover:bg-[#2d2d2d] rounded-sm transition-colors"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex-1" />
      <div className="mac-window-controls mr-2">
        <button className="minimize" aria-label="Minimize"></button>
        <button className="maximize" aria-label="Maximize"></button>
        <button className="close" aria-label="Close"></button>
      </div>
    </div>
  );
}