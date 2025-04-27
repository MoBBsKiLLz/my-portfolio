'use client';

import { createContext, useContext, useEffect, useState } from 'react';

// 1. Create the context
const ThemeContext = createContext();

// 2. Create the provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('theme-dark'); // default theme

  // When theme changes, update the body class
  useEffect(() => {
    document.body.classList.remove('theme-light', 'theme-dark', 'theme-funky');
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Create a simple custom hook to use the context
export const useTheme = () => useContext(ThemeContext);
