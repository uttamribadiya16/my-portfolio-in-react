import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ChevronLeft, FileText, Github } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

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
    <rect x="3" y="3" width="18" height="18" rx="2" fill="#F7DF1E"/>
    <path d="M12 17.5c.5.8 1.1 1.3 2.2 1.3 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.6-1.6l-.6-.2c-1.6-.7-2.7-1.5-2.7-3.3 0-1.6 1.2-2.9 3.1-2.9 1.4 0 2.3.5 3 1.7l-1.6 1c-.4-.6-.7-.9-1.4-.9-.6 0-1 .4-1 .9 0 .6.4.9 1.3 1.3l.6.2c1.9.8 3 1.6 3 3.5 0 2-1.5 3-3.6 3-2 0-3.3-.9-3.9-2.1l1.6-.9zM8.3 15.6c.3.6.7.8 1.3.8.7 0 1.1-.3 1.1-1.3v-7h2v7.1c0 2.1-1.2 3-3 3-1.6 0-2.5-.8-3-1.8l1.6-.8z" fill="#000"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="#181717" />
    <path
      d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.15 6.84 9.49.5.09.66-.22.66-.49v-1.74c-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.36 1.08 2.94.83.09-.65.35-1.08.64-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.03A9.49 9.49 0 0 1 12 6.84a9.49 9.49 0 0 1 2.5.33c1.91-1.3 2.75-1.03 2.75-1.03.55 1.39.2 2.41.1 2.67.64.7 1.03 1.59 1.03 2.68 0 3.84-2.33 4.69-4.55 4.94.36.31.68.92.68 1.86v2.76c0 .27.16.59.68.49A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"
      fill="#fff"
    />
  </svg>
);

const ResumeIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="#4CAF50" />
    <path
      d="M8 5h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM9.5 8a.5.5 0 1 0 0 1h5a.5.5 0 1 0 0-1h-5zm0 3a.5.5 0 1 0 0 1h5a.5.5 0 1 0 0-1h-5zm0 3a.5.5 0 1 0 0 1h5a.5.5 0 1 0 0-1h-5zm0 3a.5.5 0 1 0 0 1h5a.5.5 0 1 0 0-1h-5z"
      fill="#fff"
    />
  </svg>
);


export function FileExplorer() {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(true);
  const [isPortfolioExpanded, setIsPortfolioExpanded] = useState(true);
  const { currentTheme } = useTheme();
  const [isExplorerOpen, setIsExplorerOpen] = useState(false);

  const files = [
    { name: 'home.jsx', path: '/home', icon: FileReactIcon },
    { name: 'about.html', path: '/about', icon: FileHtmlIcon },
    { name: 'contact.css', path: '/contact', icon: FileCssIcon },
    { name: 'projects.js', path: '/projects', icon: FileJsIcon },
    { name: 'github.md', path: '/github', icon: GithubIcon },
    { name: 'resume.txt', path: '/resume', icon: ResumeIcon }
  ];

  return (
    
    <div 
      className="w-60 overflow-y-auto"
      style={{ 
        backgroundColor: currentTheme.colors.sidebarBackground,
        width: !isExplorerOpen ? '50px' : ''
       }}
    >     

      { !isExplorerOpen && <button
            onClick={() => setIsExplorerOpen(!isExplorerOpen)}
            className="ml-2 mt-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors"
          >
            {isExplorerOpen ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
      }
      {isExplorerOpen && <div className="p-2" style={{ color: currentTheme.colors.sidebarForeground }}>
        <div 
          className="flex items-center justify-between p-1 rounded cursor-pointer select-none"
          style={{ 
            '&:hover': { backgroundColor: currentTheme.colors.tabActiveBackground }
          }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center space-x-1">
            {isExpanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
            <span className="text-[11px] uppercase tracking-wider font-medium">Explorer</span>
          </div>
          <button
            onClick={() => setIsExplorerOpen(!isExplorerOpen)}
            className="ml-auto w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors"
          >
            {isExplorerOpen ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
        </div>
        {isExpanded && (
          <div className="mt-2">
            <div className="flex items-center space-x-1 p-1 rounded cursor-pointer"
            onClick={() => setIsPortfolioExpanded(!isPortfolioExpanded)}
            >
              {isPortfolioExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              <span className="text-[11px] uppercase tracking-wider">Portfolio</span>
            </div>
            <div className="ml-4 mt-1 space-y-1">
              {files.map((file) => {
                const Icon = file.icon;
                const isActive = !file.external && location.pathname === file.path;
                
                const content = (
                  <div
                    className={`flex items-center space-x-2 p-1 rounded cursor-pointer transition-colors`}
                    style={{
                      backgroundColor: isActive ? currentTheme.colors.tabActiveBackground : 'transparent',
                      color: isActive ? currentTheme.colors.foreground : currentTheme.colors.sidebarForeground,
                      '&:hover': {
                        backgroundColor: currentTheme.colors.tabActiveBackground
                      }
                    }}
                  >
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm truncate">{file.name}</span>
                  </div>
                );

                return isPortfolioExpanded && (
                  <Link key={file.name} to={file.path} className="block">
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>}
    </div>
  );
}