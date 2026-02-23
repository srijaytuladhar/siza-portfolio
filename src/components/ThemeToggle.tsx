"use client";

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="pixel-border-slim p-2 hover:bg-retro-green/20 transition-colors flex items-center justify-center bg-background"
            aria-label="Toggle Theme"
        >
            {theme === 'light' ? (
                <Moon size={20} className="text-foreground" />
            ) : (
                <Sun size={20} className="text-foreground" />
            )}
        </button>
    );
};

export default ThemeToggle;
