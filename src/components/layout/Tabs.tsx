import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { X, Github } from 'lucide-react';

// Import the same icons from FileExplorer
const FileReactIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="#61DAFB"/>
    <path d="M12 21.5C11.4 21.5 10.9 21.4 10.4 21.2C9.4 20.8 8.9 20.1 8.5 19.3C8.1 18.5 7.8 17.5 7.6 16.4C6.3 16.2 5.1 15.9 4 15.5C3 15.1 2.1 14.6 1.4 14C0.7 13.4 0.3 12.7 0.3 12C0.3 11.3 0.7 10.6 1.4 10C2.1 9.4 3 8.9 4 8.5C5.1 8.1 6.3 7.8 7.6 7.6C7.8 6.5 8.1 5.5 8.5 4.7C8.9 3.9 9.4 3.2 10.4 2.8C10.9 2.6 11.4 2.5 12 2.5C12.6 2.5 13.1 2.6 13.6 2.8C14.6 3.2 15.1 3.9 15.5 4.7C15.9 5.5 16.2 6.5 16.4 7.6C17.7 7.8 18.9 8.1 20 8.5C21 8.9 21.9 9.4 22.6 10C23.3 10.6 23.7 11.3 23.7 12C23.7 12.7 23.3 13.4 22.6 14C21.9 14.6 21 15.1 20 15.5C18.9 15.9 17.7 16.2 16.4 16.4C16.2 17.5 15.9 18.5 15.5 19.3C15.1 20.1 14.6 20.8 13.6 21.2C13.1 21.4 12.6 21.5 12 21.5Z" stroke="#61DAFB" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FileHtmlIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 3L5.77778 17.0899L12 19L18.2222 17.0899L20 3H4Z" stroke="#E44D26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 7H7L7.5 12H16.5L16 16L12 17L8 16L7.75 14" stroke="#E44D26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FileCssIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 3L5.77778 17.0899L12 19L18.2222 17.0899L20 3H4Z" stroke="#1572B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.5 7H7.5L7.86111 11.5H16.1389L15.7778 16L12 17L8.22222 16L8.05556 14" stroke="#1572B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FileJsIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3h18v18H3V3z" fill="#F7DF1E"/>
    <path d="M15.5 15.5c.5.8 1.1 1.3 2.2 1.3 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.6-1.6l-.6-.2c-1.6-.7-2.7-1.5-2.7-3.3 0-1.6 1.2-2.9 3.1-2.9 1.4 0 2.3.5 3 1.7l-1.6 1c-.4-.6-.7-.9-1.4-.9-.6 0-1 .4-1 .9 0 .6.4.9 1.3 1.3l.6.2c1.9.8 3 1.6 3 3.5 0 2-1.5 3-3.6 3-2 0-3.3-.9-3.9-2.1l1.6-.9zM8.3 15.6c.3.6.7.8 1.3.8.7 0 1.1-.3 1.1-1.3v-7h2v7.1c0 2.1-1.2 3-3 3-1.6 0-2.5-.8-3-1.8l1.6-.8z" fill="#000"/>
  </svg>
);

export function Tabs() {
  const location = useLocation();
  const tabs = [
    { name: 'home.jsx', path: '/home', icon: FileReactIcon },
    { name: 'about.html', path: '/about', icon: FileHtmlIcon },
    { name: 'contact.css', path: '/contact', icon: FileCssIcon },
    { name: 'projects.js', path: '/projects', icon: FileJsIcon },
    { name: 'github.md', path: 'https://github.com', icon: Github, external: true },
  ];

  return (
    <div className="h-9 bg-[#1e1e1e] flex items-center px-2">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = location.pathname === tab.path;
        
        return (
          <Link
            key={tab.path}
            to={tab.path}
            className={`
              relative group flex items-center h-[34px] px-3 border-t border-transparent
              ${isActive ? 'bg-[#1e1e1e] text-white border-t-[#007acc]' : 'bg-[#2d2d2d] text-gray-400 hover:text-white'}
              ${isActive ? '' : 'hover:bg-[#2d2d2d]'}
              transition-colors
            `}
          >
            <div className="flex items-center space-x-2">
              <Icon className="h-4 w-4" />
              <span className="text-xs">{tab.name}</span>
            </div>
            <button className="ml-2 opacity-0 group-hover:opacity-100 hover:bg-[#363636] rounded p-0.5">
              <X className="h-3 w-3" />
            </button>
          </Link>
        );
      })}
    </div>
  );
}