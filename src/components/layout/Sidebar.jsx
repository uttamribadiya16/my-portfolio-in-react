import React from 'react';
import { Home, Github, Code, Mail, User, Palette, FileText } from 'lucide-react';
import { NavLink } from './NavLink';
import { useTheme } from '../../contexts/ThemeContext';

export function Sidebar() {
  const { currentTheme } = useTheme();
  
  return (
    <div 
      className="w-12 flex flex-col items-center py-4 border-r border-gray-800"
      style={{ backgroundColor: currentTheme.colors.sidebarBackground }}
    >
      <div className="flex-1 flex flex-col space-y-4">
        <NavLink icon={<Home size={20} />} to="/home" tooltip="Home" />
        <NavLink icon={<Github size={20} />} to="/github" tooltip="GitHub" />
        <NavLink icon={<Code size={20} />} to="/projects" tooltip="Projects" />
        <NavLink icon={<FileText size={20} />} to="/resume" tooltip="Resume" />
        <NavLink icon={<Mail size={20} />} to="/contact" tooltip="Contact" />
      </div>
      <div className="flex flex-col space-y-4 mb-4">
        <NavLink icon={<User size={20} />} to="/about" tooltip="About" />
        <NavLink icon={<Palette size={20} />} to="/themes" tooltip="Manage Themes" />
      </div>
    </div>
  );
}