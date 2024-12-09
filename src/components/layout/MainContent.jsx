import React from 'react';

export function MainContent({ children }) {
  return (
    <div className="flex-1 theme-bg-primary overflow-auto">
      <div className="max-w-8xl mx-auto p-6">
        {children}
      </div>
    </div>
  );
}