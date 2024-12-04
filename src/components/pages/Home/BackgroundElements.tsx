import React from 'react';

export function BackgroundElements() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-[800px] h-[800px] rounded-full bg-coral-gradient opacity-20 blur-3xl" />
        <div className="absolute -left-40 top-40 w-[400px] h-[400px] rounded-full bg-lime-gradient opacity-20 blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[25vw] font-bold text-white/[0.02] whitespace-nowrap select-none">
          I BUILD WEBSITE
        </h1>
      </div>
    </>
  );
}