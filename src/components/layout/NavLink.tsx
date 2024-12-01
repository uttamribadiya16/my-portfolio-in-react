import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  icon: React.ReactNode;
  to: string;
  tooltip: string;
}

export function NavLink({ icon, to, tooltip }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`relative group p-2 rounded-md transition-colors ${
        isActive ? 'bg-[#2d2d2d] text-white' : 'text-gray-400 hover:bg-[#2d2d2d] hover:text-white'
      }`}
    >
      <div className="flex items-center justify-center">{icon}</div>
      <div className="absolute left-14 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#252525] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-lg">
        {tooltip}
      </div>
      {isActive && (
        <div className="absolute left-0 top-0 w-0.5 h-full bg-blue-500 rounded-r" />
      )}
    </Link>
  );
}