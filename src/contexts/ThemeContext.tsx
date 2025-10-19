'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { lightTheme, darkTheme, ThemeMode, ThemeColors } from '@/styles/themes';

interface ThemeContextType {
  colors: ThemeColors;
  mode: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Lock theme to dark mode
  const [mode] = useState<ThemeMode>('dark');

  const setTheme = (theme: ThemeMode) => {
    // Theme is locked to dark mode, do nothing
  };

  const toggleTheme = () => {
    // Theme is locked to dark mode, do nothing
  };

  const colors = darkTheme; // Always use dark theme

  return (
    <ThemeContext.Provider value={{ colors, mode, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}