'use client';

import { useEffect, useState } from 'react';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <>
      <button
        className="
            absolute top-4 right-4 p-2 rounded
            bg-gray-200 text-black hover:bg-gray-300 border-gray-400
            dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:border-gray-600
            border transition-colors"
        onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}>
        Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
      {children}
    </>
  );
}