import React, { createContext, useContext, useEffect, useState } from 'react';
import { themes, ThemeType } from './themes';

interface ThemeContextType {
    theme: ThemeType;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
const getInitialTheme = (): ThemeType => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme') as ThemeType;
            if (savedTheme && themes[savedTheme]) {
                return savedTheme;
            }
        }
        return 'default';
    };

    const [theme, setTheme] = useState<ThemeType>(getInitialTheme);

    useEffect(() => {
        // Apply theme on mount and theme changes
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
    
    const toggleTheme = () => {
        const newTheme = theme === 'default' ? 'lavender' : 'default';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
