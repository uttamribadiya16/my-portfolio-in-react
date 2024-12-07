import React from 'react';
import { GitBranch, Wifi, Bell, Check } from 'lucide-react';

export function StatusBar() {
  return (
    <div className="h-6 bg-[#007acc] text-white flex items-center justify-between px-2 text-xs">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <GitBranch className="h-3.5 w-3.5" />
          <span>main</span>
        </div>
        <div className="flex items-center space-x-1">
          <Check className="h-3.5 w-3.5" />
          <span>0</span>
          <span>⚠️</span>
          <span>0</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span>UTF-8</span>
        <span>TypeScript React</span>
        <div className="flex items-center space-x-1">
          <Wifi className="h-3.5 w-3.5" />
          <span>Live</span>
        </div>
        <Bell className="h-3.5 w-3.5" />
      </div>
    </div>
  );
}