'use client';

import type { ReactNode } from 'react';
import { AuthProvider } from '@/lib/AuthContext';
import { ThemeProvider } from '@/lib/ThemeContext';

interface RootLayoutWrapperProps {
    children: ReactNode;
    beVietnamProVariable: string;
}

export default function RootLayoutWrapper({ children, beVietnamProVariable }: RootLayoutWrapperProps) {
    const themeScript = `
        (function() {
            const theme = localStorage.getItem('theme') || 'default';
            document.documentElement.setAttribute('data-theme', theme);
        })()
    `;
    
    return (
        <html lang='en'>
            <body className={`${beVietnamProVariable} antialiased theme-transition`}>
                <ThemeProvider>
                    <AuthProvider>{children}</AuthProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
