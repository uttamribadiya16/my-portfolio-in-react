import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeType = 'github-dark' | 'dracula' | 'nord' | 'night-owl' | 'monokai';

interface Theme {
  id: ThemeType;
  name: string;
  colors: {
    background: string;
    foreground: string;
    accent: string;
    sidebarBackground: string;
    sidebarForeground: string;
    editorBackground: string;
    editorForeground: string;
    tabActiveBackground: string;
    tabInactiveBackground: string;
    statusBarBackground: string;
    statusBarForeground: string;
    buttonBackground: string;
    buttonForeground: string;
    buttonHoverBackground: string;
    borderColor: string;
  };
}

const themes: Record<ThemeType, Theme> = {
  'github-dark': {
    id: 'github-dark',
    name: 'GitHub Dark',
    colors: {
      background: '#24292e',
      foreground: '#e1e4e8',
      accent: '#2188ff',
      sidebarBackground: '#1f2428',
      sidebarForeground: '#d1d5da',
      editorBackground: '#24292e',
      editorForeground: '#e1e4e8',
      tabActiveBackground: '#1f2428',
      tabInactiveBackground: '#24292e',
      statusBarBackground: '#24292e',
      statusBarForeground: '#d1d5da',
      buttonBackground: '#2188ff',
      buttonForeground: '#ffffff',
      buttonHoverBackground: '#1c7cd6',
      borderColor: '#1b1f23'
    }
  },
  'dracula': {
    id: 'dracula',
    name: 'Dracula',
    colors: {
      background: '#282a36',
      foreground: '#f8f8f2',
      accent: '#bd93f9',
      sidebarBackground: '#21222c',
      sidebarForeground: '#f8f8f2',
      editorBackground: '#282a36',
      editorForeground: '#f8f8f2',
      tabActiveBackground: '#44475a',
      tabInactiveBackground: '#282a36',
      statusBarBackground: '#191a21',
      statusBarForeground: '#f8f8f2',
      buttonBackground: '#bd93f9',
      buttonForeground: '#282a36',
      buttonHoverBackground: '#a37ddb',
      borderColor: '#44475a'
    }
  },
  'nord': {
    id: 'nord',
    name: 'Nord',
    colors: {
      background: '#2e3440',
      foreground: '#d8dee9',
      accent: '#88c0d0',
      sidebarBackground: '#2e3440',
      sidebarForeground: '#d8dee9',
      editorBackground: '#3b4252',
      editorForeground: '#d8dee9',
      tabActiveBackground: '#3b4252',
      tabInactiveBackground: '#2e3440',
      statusBarBackground: '#3b4252',
      statusBarForeground: '#d8dee9',
      buttonBackground: '#88c0d0',
      buttonForeground: '#2e3440',
      buttonHoverBackground: '#81a1c1',
      borderColor: '#434c5e'
    }
  },
  'night-owl': {
    id: 'night-owl',
    name: 'Night Owl',
    colors: {
      background: '#011627',
      foreground: '#d6deeb',
      accent: '#7e57c2',
      sidebarBackground: '#011627',
      sidebarForeground: '#d6deeb',
      editorBackground: '#011627',
      editorForeground: '#d6deeb',
      tabActiveBackground: '#0b2942',
      tabInactiveBackground: '#01111d',
      statusBarBackground: '#011627',
      statusBarForeground: '#d6deeb',
      buttonBackground: '#7e57c2',
      buttonForeground: '#ffffff',
      buttonHoverBackground: '#6c4aa6',
      borderColor: '#122d42'
    }
  },
  'monokai': {
    id: 'monokai',
    name: 'Monokai',
    colors: {
      background: '#272822',
      foreground: '#f8f8f2',
      accent: '#a6e22e',
      sidebarBackground: '#1e1f1c',
      sidebarForeground: '#f8f8f2',
      editorBackground: '#272822',
      editorForeground: '#f8f8f2',
      tabActiveBackground: '#34352f',
      tabInactiveBackground: '#272822',
      statusBarBackground: '#1e1f1c',
      statusBarForeground: '#f8f8f2',
      buttonBackground: '#a6e22e',
      buttonForeground: '#272822',
      buttonHoverBackground: '#91c923',
      borderColor: '#34352f'
    }
  }
};

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeId: ThemeType) => void;
  availableThemes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes['github-dark']);

  useEffect(() => {
    const root = document.documentElement;
    const colors = currentTheme.colors;

    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [currentTheme]);

  const setTheme = (themeId: ThemeType) => {
    setCurrentTheme(themes[themeId]);
  };

  return (
    <ThemeContext.Provider value={{ 
      currentTheme, 
      setTheme,
      availableThemes: Object.values(themes)
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}