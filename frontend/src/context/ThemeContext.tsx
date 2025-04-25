// src/contexts/ThemeContext.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode, useMemo } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // 1. Tenta ler do localStorage, 2. Verifica preferência do SO, 3. Padrão 'light'
    const getInitialTheme = (): Theme => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme') as Theme | null;
            if (storedTheme) return storedTheme;

            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            return prefersDark ? 'dark' : 'light';
        }
        return 'light'; 
    };

    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
    const root = window.document.documentElement; // Pega o elemento <html>
    // Remove a classe/atributo antigo antes de adicionar o novo
    root.removeAttribute('data-theme');
    root.setAttribute('data-theme', theme);

    // Salva a preferência no localStorage
    localStorage.setItem('theme', theme);
    }, [theme]);

        const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

        return (
        <ThemeContext.Provider value={value}>
            {children}
            </ThemeContext.Provider>
        );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
    }
    return context;
};