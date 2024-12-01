import React from 'react';

interface MainContentProps {
  children: React.ReactNode;
}

export function MainContent({ children }: MainContentProps) {
  return (
    <div className="flex-1 bg-[#1e1e1e] overflow-auto">
      <div className="max-w-6xl mx-auto p-6">
        {children}
      </div>
    </div>
  );
}