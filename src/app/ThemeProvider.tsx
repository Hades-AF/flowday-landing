'use client';
import { useEffect, useState } from 'react';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    console.log('[ThemeProvider] mounted'); // <— should appear once
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <>
      <button
        id="theme-toggle"
        className="fixed top-4 right-4 z-[9999] pointer-events-auto p-2 rounded border
                   bg-gray-200 text-black hover:bg-gray-300 border-gray-400
                   dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:border-gray-600"
        onClick={() => { setTheme(t => t === 'dark' ? 'light' : 'dark'); }}
      >
        Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
      {children}
    </>
  );
}