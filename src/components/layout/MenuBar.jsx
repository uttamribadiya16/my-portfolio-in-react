import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import VSCodeIcon from './VSCodeIcon';

export function MenuBar() {
  const menuItems = ['File', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Help'];
  const { currentTheme } = useTheme();

  return (
    <div
      className="h-9 flex items-center select-none border-b overflow-x-auto overflow-y-hidden"
      style={{
        backgroundColor: currentTheme.colors.background,
        borderColor: currentTheme.colors.borderColor,
        color: currentTheme.colors.foreground,
      }}
    >
      {/* Left Menu Items */}
      <div className="flex items-center px-2 space-x-2">
        <VSCodeIcon className="h-4 w-4 ml-2" color={currentTheme.colors.accent} />
        {menuItems.map((item) => (
          <button
            key={item}
            className="px-3 py-1 text-sm rounded-md transition-colors hover:bg-opacity-30"
            style={{
              backgroundColor: 'transparent',
              color: currentTheme.colors.foreground,
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Right Window Controls */}
      <div className="windows-window-controls flex space-x-1 ml-auto mr-2">
        {/* Minimize Button */}
        <button
          className="h-7 w-7 flex items-center justify-center bg-gray-700 hover:bg-gray-600 transition-colors rounded-md m-1"
          aria-label="Minimize"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
          </svg>
        </button>

        {/* Maximize Button */}
        <button
          className="h-7 w-7 flex items-center justify-center bg-gray-700 hover:bg-gray-600 transition-colors rounded-md m-1"
          aria-label="Maximize"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="h-4 w-4"
          >
            <rect x="6" y="6" width="12" height="12" rx="1" ry="1" />
          </svg>
        </button>

        {/* Close Button */}
        <button
          className="h-7 w-7 flex items-center justify-center bg-red-600 hover:bg-red-700 transition-colors rounded-md m-1"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
