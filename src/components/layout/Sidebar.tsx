import React from 'react';
import { Home, User, Code, Mail, Palette } from 'lucide-react';
import { NavLink } from './NavLink';

export function Sidebar() {
  return (
    <div className="w-12 bg-[#171717] flex flex-col items-center py-4">
      <div className="flex-1 flex flex-col space-y-4">
        <NavLink icon={<Home size={20} />} to="/home" tooltip="Home" />
        <NavLink icon={<User size={20} />} to="/about" tooltip="About" />
        <NavLink icon={<Code size={20} />} to="/projects" tooltip="Projects" />
        <NavLink icon={<Mail size={20} />} to="/contact" tooltip="Contact" />
      </div>
      <div className="flex flex-col space-y-4 mb-4">
        <NavLink icon={<User size={20} />} to="/profile" tooltip="Profile" />
        <NavLink icon={<Palette size={20} />} to="/themes" tooltip="Manage Themes" />
      </div>
    </div>
  );
}