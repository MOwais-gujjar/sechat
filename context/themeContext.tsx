// ThemeContext.js

"use client"
import { darkTheme, lightTheme } from '@/theme/Theme';
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext("");

interface ThemeProviderProps {
    children: React.ReactNode
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);