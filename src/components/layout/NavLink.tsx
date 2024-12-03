import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

interface NavLinkProps {
  icon: React.ReactNode;
  to: string;
  tooltip: string;
}

export function NavLink({ icon, to, tooltip }: NavLinkProps) {
  const location = useLocation();
  const { currentTheme } = useTheme();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className="relative group p-2 rounded-md transition-colors"
      style={{
        backgroundColor: isActive ? currentTheme.colors.tabActiveBackground : 'transparent',
        color: isActive ? currentTheme.colors.foreground : currentTheme.colors.sidebarForeground
      }}
    >
      <div className="flex items-center justify-center">{icon}</div>
      <div 
        className="absolute left-14 top-1/2 -translate-y-1/2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-lg"
        style={{
          backgroundColor: currentTheme.colors.tabActiveBackground,
          color: currentTheme.colors.foreground
        }}
      >
        {tooltip}
      </div>
      {isActive && (
        <div 
          className="absolute left-0 top-0 w-0.5 h-full rounded-r"
          style={{ backgroundColor: currentTheme.colors.accent }}
        />
      )}
    </Link>
  );
}